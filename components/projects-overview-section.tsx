"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects-data";

export function ProjectsOverviewSection() {
  const projects = getAllProjects();

  return (
    <section className="bg-white py-[60px] sm:py-[80px] md:py-[100px]">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] sm:h-[240px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-4 flex flex-col grow">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.year && (
                    <span className="text-xs sm:text-sm text-gray-500">
                      {project.year}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-[20px] sm:text-[22px] font-bold text-black leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] sm:text-[16px] font-normal text-gray-700 leading-relaxed grow">
                  {project.description}
                </p>

                {/* Client */}
                {project.client && (
                  <p className="text-sm text-gray-600 font-medium">
                    Client: {project.client}
                  </p>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
