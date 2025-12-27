"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
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
      <Navigation backgroundColor="white" />
      <div className="min-h-screen bg-white">
        <BlogHeroCarousel posts={blogPosts} />
        <section className="bg-white py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 sm:mb-20"
            >
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
                All Blog Posts
              </h2>
              <p className="text-gray-700 text-[16px] sm:text-[18px] max-w-2xl mx-auto">
                Explore our complete collection of database management insights,
                tutorials, and industry best practices.
              </p>
            </motion.div>

            {/* Blog Posts Grid */}
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
                    href={`/blog/${post.id}`}
                    className="relative w-full h-56 sm:h-64 overflow-hidden"
                  >
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading={index < 3 ? "eager" : "lazy"}
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-5">
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
                    <Link href={`/blog/${post.id}`}>
                      <h2 className="text-black text-xl sm:text-2xl font-bold leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-gray-700 text-sm sm:text-base font-normal leading-relaxed flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <p className="text-gray-500 text-xs sm:text-sm font-medium">
                        {post.date}
                      </p>
                      <Link
                        href={`/blog/${post.id}`}
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
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
