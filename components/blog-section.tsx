"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useGetBlogPostsQuery } from "@/lib/api/blog-api";

export function BlogSection() {
  const { data, isLoading: loading } = useGetBlogPostsQuery({ page: 1 });
  const blogPosts = data?.posts.slice(0, 3) || []; // Show only first 3 posts

  return (
    <section className="bg-white py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 space-y-6"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold text-black leading-tight">
            Latest from Our Blog
          </h2>
          <p className="text-gray-700 text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-relaxed max-w-3xl mx-auto">
            Stay updated with database management insights, best practices, and
            industry trends from our expert team.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-96 animate-pulse"
              >
                <div className="w-full h-56 sm:h-64 bg-gray-200" />
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-20" />
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No blog posts available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative w-full h-56 sm:h-64 overflow-hidden"
                >
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col grow space-y-5">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs sm:text-sm font-semibold">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-black text-xl sm:text-2xl font-bold leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-700 text-sm sm:text-base font-normal leading-relaxed grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <p className="text-gray-500 text-xs sm:text-sm font-medium">
                      {post.date}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-colors group/link"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 sm:mt-20"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/20 inline-flex items-center gap-2"
            >
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
