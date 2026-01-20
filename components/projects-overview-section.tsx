"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useGetProjectsQuery } from "@/lib/api/services-api";

export function ProjectsOverviewSection() {
  const { data, isLoading, error } = useGetProjectsQuery({ page: 1 });
  const projects = data?.projects || [];

  if (isLoading) {
    return (
      <section className="bg-white py-[60px] sm:py-[80px] md:py-[100px]">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 w-96 bg-gray-200 rounded mb-16"></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[400px] bg-gray-100 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-[60px] sm:py-[80px] md:py-[100px]">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error loading projects
          </h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-[60px] sm:py-[80px] md:py-[100px] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
            Real-world database solutions delivered for clients across various
            industries
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">
              No projects yet
            </h3>
            <p className="text-gray-600 max-w-sm text-center">
              We're currently working on documenting our latest success stories.
              Check back soon for updates!
            </p>
          </motion.div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full h-[200px] sm:h-[240px] overflow-hidden">
                    <Image
                      src={project.bannerImage || "/assets/placeholder.png"}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 space-y-4 flex flex-col grow">
                    {/* Category Badge - Using a placeholder since API doesn't provide it */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        Project
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {new Date(project.createdAt).getFullYear()}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-black leading-tight">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] sm:text-[16px] font-normal text-gray-700 leading-relaxed grow line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-4 flex items-center text-blue-600 font-semibold group-hover:underline">
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
