import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://asapdb.vercel.app/api/blog/posts";

// API Response Types
export interface BlogPostAPI {
  id: number;
  category: string;
  tags: string[];
  author: string;
  title: string;
  slug: string;
  content_paragraph1: string;
  content_paragraph2: string;
  content_paragraph3: string;
  image: string;
  image2: string;
  image3: string;
  views: number;
  likes_count: number;
  created_at: string;
  updated_at: string;
  post_video_link: string;
}

export interface BlogPostListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: BlogPostAPI[];
}

export interface CommentAPI {
  id: number;
  name: string;
  email: string;
  content: string;
  created_at: string;
}

export interface CommentListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: CommentAPI[];
}

export interface CreateCommentRequest {
  name: string;
  email: string;
  content: string;
}

export interface LikePostRequest {
  post_id: number;
}

// Transformed Blog Post Type (for internal use)
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  authorRole: string;
  imageUrl: string;
  slug: string;
  tags: string[];
  views: number;
  likesCount: number;
  image2?: string;
  image3?: string;
  postVideoLink?: string;
}

// Helper function to transform API response to internal format
function transformBlogPost(apiPost: BlogPostAPI): BlogPost {
  const content = [
    apiPost.content_paragraph1,
    apiPost.content_paragraph2,
    apiPost.content_paragraph3,
  ]
    .filter((p) => p && p.trim() !== "")
    .join("\n\n");

  const excerpt =
    apiPost.content_paragraph1?.substring(0, 150) + "..." || apiPost.title;

  const date = new Date(apiPost.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const wordCount = content.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200)) + " min read";

  return {
    id: apiPost.id,
    title: apiPost.title,
    excerpt,
    content,
    date,
    category: apiPost.category,
    readTime,
    author: apiPost.author,
    authorRole: "Database Expert",
    imageUrl: apiPost.image || "/assets/Asap-DBA_Logo.png",
    slug: apiPost.slug,
    tags: apiPost.tags,
    views: apiPost.views,
    likesCount: apiPost.likes_count,
    image2: apiPost.image2,
    image3: apiPost.image3,
    postVideoLink: apiPost.post_video_link,
  };
}

// RTK Query API
export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["BlogPost", "Comment"],
  endpoints: (builder) => ({
    getBlogPosts: builder.query<
      {
        posts: BlogPost[];
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
      },
      { page?: number; search?: string }
    >({
      query: ({ page = 1, search }) => {
        const params = new URLSearchParams({ page: page.toString() });
        if (search) params.append("search", search);
        return `/?${params.toString()}`;
      },
      transformResponse: (response: BlogPostListResponse) => {
        const posts = response.results.map(transformBlogPost);
        return {
          posts,
          total: response.count,
          hasNext: !!response.next,
          hasPrevious: !!response.previous,
        };
      },
      providesTags: ["BlogPost"],
    }),

    getBlogPostBySlug: builder.query<BlogPost | null, string>({
      async queryFn(slug, _queryApi, _extraOptions, fetchWithBQ) {
        // Search through pages to find the post
        let page = 1;
        while (true) {
          const result = await fetchWithBQ({
            url: `/?page=${page}`,
          });
          if (result.error) break;
          const data = result.data as BlogPostListResponse;
          const post = data.results.find((p) => p.slug === slug);
          if (post) {
            return { data: transformBlogPost(post) };
          }
          if (!data.next) break;
          page++;
        }
        return { data: null };
      },
      providesTags: (result, _error, slug) => [{ type: "BlogPost", id: slug }],
    }),

    getBlogPostById: builder.query<BlogPost, number>({
      query: (id) => `/${id}/`,
      transformResponse: (response: BlogPostAPI) => transformBlogPost(response),
      providesTags: (result, _error, id) => [{ type: "BlogPost", id }],
    }),

    getMostViewedPosts: builder.query<
      {
        posts: BlogPost[];
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
      },
      { page?: number }
    >({
      query: ({ page = 1 }) => `/most-viewed/?page=${page}`,
      transformResponse: (response: BlogPostListResponse) => {
        const posts = response.results.map(transformBlogPost);
        return {
          posts,
          total: response.count,
          hasNext: !!response.next,
          hasPrevious: !!response.previous,
        };
      },
      providesTags: ["BlogPost"],
    }),

    getPostsByCategory: builder.query<
      {
        posts: BlogPost[];
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
      },
      { categorySlug: string; page?: number }
    >({
      query: ({ categorySlug, page = 1 }) =>
        `/category/${categorySlug}/?page=${page}`,
      transformResponse: (response: BlogPostListResponse) => {
        const posts = response.results.map(transformBlogPost);
        return {
          posts,
          total: response.count,
          hasNext: !!response.next,
          hasPrevious: !!response.previous,
        };
      },
      providesTags: ["BlogPost"],
    }),

    getPostsByTag: builder.query<
      {
        posts: BlogPost[];
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
      },
      { tagSlug: string; page?: number }
    >({
      query: ({ tagSlug, page = 1 }) => `/tag/${tagSlug}/?page=${page}`,
      transformResponse: (response: BlogPostListResponse) => {
        const posts = response.results.map(transformBlogPost);
        return {
          posts,
          total: response.count,
          hasNext: !!response.next,
          hasPrevious: !!response.previous,
        };
      },
      providesTags: ["BlogPost"],
    }),

    getPostComments: builder.query<
      {
        comments: CommentAPI[];
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
      },
      { postId: number; page?: number }
    >({
      query: ({ postId, page = 1 }) => `/${postId}/comments/?page=${page}`,
      transformResponse: (response: CommentListResponse) => ({
        comments: response.results,
        total: response.count,
        hasNext: !!response.next,
        hasPrevious: !!response.previous,
      }),
      providesTags: (result, _error, { postId }) => [
        { type: "Comment", id: postId },
      ],
    }),

    createComment: builder.mutation<
      CommentAPI,
      { postId: number; data: CreateCommentRequest }
    >({
      query: ({ postId, data }) => ({
        url: `/${postId}/comments/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, _error, { postId }) => [
        { type: "Comment", id: postId },
      ],
    }),

    likePost: builder.mutation<{ success: boolean }, number>({
      query: (postId) => ({
        url: `/${postId}/like/`,
        method: "POST",
        body: { post_id: postId },
      }),
      invalidatesTags: (result, _error, postId) => [
        { type: "BlogPost", id: postId },
      ],
    }),
  }),
});

export const {
  useGetBlogPostsQuery,
  useGetBlogPostBySlugQuery,
  useGetBlogPostByIdQuery,
  useGetMostViewedPostsQuery,
  useGetPostsByCategoryQuery,
  useGetPostsByTagQuery,
  useGetPostCommentsQuery,
  useCreateCommentMutation,
  useLikePostMutation,
} = blogApi;
