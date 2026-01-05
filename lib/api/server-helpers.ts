// Server-side fetch helpers for Next.js server components
// These use direct fetch calls since RTK Query hooks only work in client components

import type { BlogPostAPI, BlogPostListResponse } from "./blog-api";
import type {
  ServiceAPI,
  ServiceListResponse,
  IndustryAPI,
  IndustryListResponse,
} from "./services-api";

const API_BASE_URL = "https://asapdb.vercel.app";

// Blog API Helpers
export async function fetchBlogPostBySlug(
  slug: string
): Promise<BlogPostAPI | null> {
  try {
    // Search through pages to find the post
    let page = 1;
    while (true) {
      const response = await fetch(
        `${API_BASE_URL}/api/blog/posts/?page=${page}`,
        {
          next: { revalidate: 60 },
        }
      );
      if (!response.ok) break;
      const data: BlogPostListResponse = await response.json();
      const post = data.results.find((p: BlogPostAPI) => p.slug === slug);
      if (post) return post;
      if (!data.next) break;
      page++;
    }
    return null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function fetchAllBlogPosts(): Promise<BlogPostAPI[]> {
  try {
    let allPosts: BlogPostAPI[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `${API_BASE_URL}/api/blog/posts/?page=${page}`,
        {
          next: { revalidate: 60 },
        }
      );
      if (!response.ok) break;
      const data: BlogPostListResponse = await response.json();
      allPosts = [...allPosts, ...data.results];
      hasMore = !!data.next;
      if (!hasMore) break;
      page++;
    }
    return allPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// Services API Helpers
export async function fetchServiceById(id: number): Promise<ServiceAPI | null> {
  try {
    // Fetch all services and filter by ID
    const allServices = await fetchAllServices();
    return allServices.find((service) => service.id === id) || null;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export async function fetchAllServices(): Promise<ServiceAPI[]> {
  try {
    let allServices: ServiceAPI[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `${API_BASE_URL}/api/services/?page=${page}`,
        {
          next: { revalidate: 60 },
        }
      );
      if (!response.ok) break;
      const data: ServiceListResponse = await response.json();
      allServices = [...allServices, ...data.results];
      hasMore = !!data.next;
      if (!hasMore) break;
      page++;
    }
    return allServices;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

// Industries API Helpers
export async function fetchIndustryById(
  id: number
): Promise<IndustryAPI | null> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/services/api/industries/${id}/`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error("Error fetching industry:", error);
    return null;
  }
}

export async function fetchAllIndustries(): Promise<IndustryAPI[]> {
  try {
    let allIndustries: IndustryAPI[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `${API_BASE_URL}/api/services/industries/?page=${page}`,
        { next: { revalidate: 60 } }
      );
      if (!response.ok) break;
      const data: IndustryListResponse = await response.json();
      allIndustries = [...allIndustries, ...data.results];
      hasMore = !!data.next;
      if (!hasMore) break;
      page++;
    }
    return allIndustries;
  } catch (error) {
    console.error("Error fetching industries:", error);
    return [];
  }
}

// Transform functions (matching RTK Query transformations)
function transformBlogPost(apiPost: BlogPostAPI) {
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

function transformService(apiService: ServiceAPI) {
  return {
    id: apiService.id,
    name: apiService.name,
    description: apiService.description,
    image: apiService.image,
    keyFeatures: apiService.key_features || "",
    benefits: apiService.benefits || "",
    isActive: apiService.is_active,
  };
}

function transformIndustry(apiIndustry: IndustryAPI) {
  return {
    id: apiIndustry.id,
    name: apiIndustry.name,
    description: apiIndustry.description,
    image: apiIndustry.image,
    commonChallenges: apiIndustry.common_challenges || [],
    solutionsList: apiIndustry.solutions_list || [],
    isActive: apiIndustry.is_active,
  };
}

// Exported transform functions
export { transformBlogPost, transformService, transformIndustry };
