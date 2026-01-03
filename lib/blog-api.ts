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
  // Combine content paragraphs
  const content = [
    apiPost.content_paragraph1,
    apiPost.content_paragraph2,
    apiPost.content_paragraph3,
  ]
    .filter((p) => p && p.trim() !== "")
    .join("\n\n");

  // Create excerpt from first paragraph
  const excerpt =
    apiPost.content_paragraph1?.substring(0, 150) + "..." || apiPost.title;

  // Format date
  const date = new Date(apiPost.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Calculate read time (rough estimate: 200 words per minute)
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
    authorRole: "Database Expert", // Default role, can be updated if API provides it
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

// API Functions
export async function getBlogPosts(page: number = 1): Promise<{
  posts: BlogPost[];
  total: number;
  hasNext: boolean;
  hasPrevious: boolean;
}> {
  try {
    const response = await fetch(`${API_BASE_URL}/?page=${page}`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
    }

    const data: BlogPostListResponse = await response.json();
    const posts = data.results.map(transformBlogPost);

    return {
      posts,
      total: data.count,
      hasNext: !!data.next,
      hasPrevious: !!data.previous,
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      posts: [],
      total: 0,
      hasNext: false,
      hasPrevious: false,
    };
  }
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  try {
    // First, try to find by slug in the list
    let page = 1;
    let found = false;
    let post: BlogPost | null = null;

    while (!found) {
      const response = await fetch(`${API_BASE_URL}/?page=${page}`, {
        next: { revalidate: 60 },
      });

      if (!response.ok) {
        break;
      }

      const data: BlogPostListResponse = await response.json();
      const apiPost = data.results.find((p) => p.slug === slug);

      if (apiPost) {
        post = transformBlogPost(apiPost);
        found = true;
        break;
      }

      if (!data.next) {
        break;
      }

      page++;
    }

    return post;
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    return null;
  }
}

export async function getBlogPostById(id: number): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}/`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return null;
    }

    const apiPost: BlogPostAPI = await response.json();
    return transformBlogPost(apiPost);
  } catch (error) {
    console.error("Error fetching blog post by id:", error);
    return null;
  }
}

export async function getMostViewedPosts(page: number = 1): Promise<{
  posts: BlogPost[];
  total: number;
  hasNext: boolean;
  hasPrevious: boolean;
}> {
  try {
    const response = await fetch(`${API_BASE_URL}/most-viewed/?page=${page}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch most viewed posts: ${response.statusText}`
      );
    }

    const data: BlogPostListResponse = await response.json();
    const posts = data.results.map(transformBlogPost);

    return {
      posts,
      total: data.count,
      hasNext: !!data.next,
      hasPrevious: !!data.previous,
    };
  } catch (error) {
    console.error("Error fetching most viewed posts:", error);
    return {
      posts: [],
      total: 0,
      hasNext: false,
      hasPrevious: false,
    };
  }
}

export async function getPostsByCategory(
  categorySlug: string,
  page: number = 1
): Promise<{
  posts: BlogPost[];
  total: number;
  hasNext: boolean;
  hasPrevious: boolean;
}> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/category/${categorySlug}/?page=${page}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch posts by category: ${response.statusText}`
      );
    }

    const data: BlogPostListResponse = await response.json();
    const posts = data.results.map(transformBlogPost);

    return {
      posts,
      total: data.count,
      hasNext: !!data.next,
      hasPrevious: !!data.previous,
    };
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return {
      posts: [],
      total: 0,
      hasNext: false,
      hasPrevious: false,
    };
  }
}

export async function getPostsByTag(
  tagSlug: string,
  page: number = 1
): Promise<{
  posts: BlogPost[];
  total: number;
  hasNext: boolean;
  hasPrevious: boolean;
}> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/tag/${tagSlug}/?page=${page}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts by tag: ${response.statusText}`);
    }

    const data: BlogPostListResponse = await response.json();
    const posts = data.results.map(transformBlogPost);

    return {
      posts,
      total: data.count,
      hasNext: !!data.next,
      hasPrevious: !!data.previous,
    };
  } catch (error) {
    console.error("Error fetching posts by tag:", error);
    return {
      posts: [],
      total: 0,
      hasNext: false,
      hasPrevious: false,
    };
  }
}

export async function getPostComments(
  postId: number,
  page: number = 1
): Promise<{
  comments: CommentAPI[];
  total: number;
  hasNext: boolean;
  hasPrevious: boolean;
}> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${postId}/comments/?page=${page}`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch comments: ${response.statusText}`);
    }

    const data: CommentListResponse = await response.json();

    return {
      comments: data.results,
      total: data.count,
      hasNext: !!data.next,
      hasPrevious: !!data.previous,
    };
  } catch (error) {
    console.error("Error fetching comments:", error);
    return {
      comments: [],
      total: 0,
      hasNext: false,
      hasPrevious: false,
    };
  }
}

export async function createComment(
  postId: number,
  name: string,
  email: string,
  content: string
): Promise<CommentAPI | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/${postId}/comments/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, content }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create comment: ${response.statusText}`);
    }

    const comment: CommentAPI = await response.json();
    return comment;
  } catch (error) {
    console.error("Error creating comment:", error);
    return null;
  }
}

export async function likePost(postId: number): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/${postId}/like/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post_id: postId }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error liking post:", error);
    return false;
  }
}
