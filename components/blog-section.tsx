"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog-data";

export function BlogSection() {
  const blogPosts = getAllBlogPosts().slice(0, 3); // Show only first 3 posts

  return (
    <section className="bg-slate-100 py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4"
        >
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-semibold text-[#48484A] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[64px]">
            Latest from Our Blog
          </h2>
          <p className="text-[#606060] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Stay updated with database management insights, best practices, and
            industry trends
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  loading="lazy"
                  quality={85}
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow space-y-4">
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
                <h3 className="text-[#48484A] text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#606060] text-sm sm:text-base font-normal leading-relaxed flex-grow">
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

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#101010] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#262626] transition-colors inline-flex items-center gap-2"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
