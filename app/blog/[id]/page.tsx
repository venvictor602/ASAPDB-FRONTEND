import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const post = getBlogPost(Number(resolvedParams.id));

  if (!post) {
    return {
      title: "Blog Post Not Found | ASAP DBA",
    };
  }

  return {
    title: `${post.title} | ASAP DBA Blog`,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      "database management",
      "database administration",
      post.title.split(" ").slice(0, 5).join(" "),
    ],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  // Handle both sync and async params (Next.js 15+)
  const resolvedParams = params instanceof Promise ? await params : params;
  const post = getBlogPost(Number(resolvedParams.id));

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "ASAP DBA",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.com"}/assets/Asap-DBA_Logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://asapdba.com"}/blog/${post.id}`,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#48484A] font-semibold text-sm sm:text-base hover:text-[#101010] transition-colors mb-8 sm:mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8 sm:mb-12 space-y-6">
            {/* Category Badge */}
            <div>
              <span className="px-3 py-1.5 bg-gray-100 rounded-full text-[#48484A] text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-[#48484A] leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[64px]">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-[#606060]">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium">{post.author}</span>
                <span className="text-[#A1A1A1]">{post.authorRole}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full h-64 sm:h-80 md:h-96 relative rounded-[16px] mb-8 sm:mb-12 overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
              className="object-cover"
              priority
              quality={90}
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-[#48484A] text-base sm:text-lg md:text-xl font-normal leading-relaxed space-y-6">
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.trim() === "") return null;

                // Handle headings
                if (paragraph.startsWith("# ")) {
                  return (
                    <h2
                      key={index}
                      className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#48484A] mt-8 mb-4"
                    >
                      {paragraph.replace("# ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h3
                      key={index}
                      className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#48484A] mt-6 mb-3"
                    >
                      {paragraph.replace("## ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h4
                      key={index}
                      className="text-[20px] sm:text-[24px] font-semibold text-[#48484A] mt-4 mb-2"
                    >
                      {paragraph.replace("### ", "")}
                    </h4>
                  );
                }

                // Handle bullet lists
                if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="text-[#606060] ml-6 list-disc">
                      {paragraph.replace("- ", "")}
                    </li>
                  );
                }

                // Regular paragraphs
                return (
                  <p key={index} className="text-[#606060] leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[#E8E8E8]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-[#606060] text-sm sm:text-base mb-2">
                  Written by {post.author}
                </p>
                <p className="text-[#A1A1A1] text-xs sm:text-sm">
                  {post.authorRole}
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-[#101010] text-white px-6 py-3 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#262626] transition-colors"
              >
                View All Posts
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </footer>
        </div>
      </article>
      <Footer />
    </div>
  );
}
