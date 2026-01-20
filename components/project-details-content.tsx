"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useGetProjectByIdQuery } from "@/lib/api/services-api";
import { ChevronRight, Calendar, ArrowLeft } from "lucide-react";

interface ProjectDetailsContentProps {
  id: string;
}

export function ProjectDetailsContent({ id }: ProjectDetailsContentProps) {
  const {
    data: project,
    isLoading,
    error,
  } = useGetProjectByIdQuery(Number(id));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Project not found
        </h2>
        <Link
          href="/projects"
          className="text-blue-600 hover:underline flex items-center"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  const subtitles = [
    { title: project.subtitle1, description: project.subtitle1Description },
    { title: project.subtitle2, description: project.subtitle2Description },
    { title: project.subtitle3, description: project.subtitle3Description },
    { title: project.subtitle4, description: project.subtitle4Description },
    { title: project.subtitle5, description: project.subtitle5Description },
    { title: project.subtitle6, description: project.subtitle6Description },
  ].filter((s) => s.title && s.description);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={project.bannerImage || "/assets/placeholder.png"}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center justify-center space-x-2 text-blue-300 mb-4 text-sm font-medium">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                href="/projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Details</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
              {project.name}
            </h1>
            <div className="flex items-center justify-center text-blue-100 space-x-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>
                  {new Date(project.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column: Description & Subtitles */}
            <div className="md:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {subtitles.map((subtitle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 text-sm">
                      {index + 1}
                    </span>
                    {subtitle.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed pl-12">
                    {subtitle.description}
                  </p>
                </motion.div>
              ))}

              {/* Supporting Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.supportingImage1 && (
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <Image
                      src={project.supportingImage1}
                      alt={`${project.name} context 1`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {project.supportingImage2 && (
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <Image
                      src={project.supportingImage2}
                      alt={`${project.name} context 2`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-24">
                <h4 className="text-xl font-bold text-black mb-6">
                  Take Action
                </h4>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {project.callToAction ||
                    "Ready to transform your database infrastructure? Contact us today to discuss your project requirements."}
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                  Book a Consultation
                </Link>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h5 className="font-bold text-black mb-4">
                    Technical Details
                  </h5>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span className="font-medium text-gray-900">Date</span>
                      <span>
                        {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium text-gray-900">
                        Category
                      </span>
                      <span>Database Excellence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 font-bold text-lg hover:underline transition-all"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Featured Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
