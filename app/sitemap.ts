import { MetadataRoute } from "next";
import { fetchAllBlogPosts, transformBlogPost } from "@/lib/api/server-helpers";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.netlify.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all blog posts
  const allApiPosts = await fetchAllBlogPosts();
  const allPosts = allApiPosts.map(transformBlogPost);

  const blogEntries: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...blogEntries,
  ];
}
