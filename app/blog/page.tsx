"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog-data";
import { Navigation } from "@/components/navigation";
import { BlogHeroCarousel } from "@/components/blog-hero-carousel";
import { Footer } from "@/components/footer";

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-slate-100 mt-[20px]">
        <BlogHeroCarousel posts={blogPosts} />
        <section className="bg-white py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Blog Posts Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  {/* Image */}
                  <div className="w-full h-48 relative overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      loading={index < 3 ? "eager" : "lazy"}
                      quality={85}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col grow space-y-4">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between text-xs sm:text-sm text-[#A1A1A1]">
                      <span className="px-2 py-1 bg-gray-100 rounded text-[#48484A] font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-[#48484A] text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[#606060] text-sm sm:text-base font-normal leading-relaxed grow">
                      {post.excerpt}
                    </p>

                    {/* Date */}
                    <p className="text-[#A1A1A1] text-xs sm:text-sm font-normal">
                      {post.date}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-[#48484A] font-semibold text-sm sm:text-base hover:text-[#101010] transition-colors group"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
