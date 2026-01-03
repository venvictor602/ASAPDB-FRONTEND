"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Search,
  Loader2,
} from "lucide-react";
import { useGetCareersQuery } from "@/lib/api/careers-api";
import { CareerApplicationForm } from "./career-application-form";

export function CareerOpenPositions() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [showApplicationForm, setShowApplicationForm] = useState<number | null>(
    null
  );

  const { data, isLoading: loading } = useGetCareersQuery({
    page,
    search: searchTerm || undefined,
  });

  const careers = data?.careers || [];
  const hasNext = data?.hasNext || false;
  const hasPrevious = data?.hasPrevious || false;

  const toggleJob = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
    setShowApplicationForm(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <section
      id="open-positions"
      className="py-[60px] sm:py-[80px] md:py-[100px] bg-gray-50"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
            Open Positions
          </h2>
          <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
            Explore our current openings and find the perfect role for you.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs by title, department, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </form>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : careers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {searchTerm
                ? "No jobs found matching your search criteria."
                : "No open positions at the moment. Check back soon!"}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {careers.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleJob(job.id)}
                  className="w-full p-6 sm:p-8 text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[20px] sm:text-[24px] font-bold text-black">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm sm:text-base">
                          {job.location}
                        </span>
                      </div>
                      {job.salaryRange && (
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-sm sm:text-base">
                            {job.salaryRange}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="text-[16px] text-gray-700 line-clamp-2">
                      {job.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 shrink-0">
                    {expandedJob === job.id ? (
                      <>
                        <span className="text-sm font-semibold">Less</span>
                        <ChevronUp className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        <span className="text-sm font-semibold">More</span>
                        <ChevronDown className="w-5 h-5" />
                      </>
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-6 border-t border-gray-200">
                        {job.description && (
                          <div>
                            <h4 className="text-[18px] font-bold text-black mb-3">
                              Description
                            </h4>
                            <p className="text-[15px] sm:text-[16px] text-gray-700 whitespace-pre-line">
                              {job.description}
                            </p>
                          </div>
                        )}
                        {job.responsibilities.length > 0 && (
                          <div>
                            <h4 className="text-[18px] font-bold text-black mb-3">
                              Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map(
                                (responsibility, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 text-gray-700"
                                  >
                                    <span className="text-blue-600 mt-1.5 shrink-0">
                                      •
                                    </span>
                                    <span className="text-[15px] sm:text-[16px]">
                                      {responsibility}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                        {job.requirements.length > 0 && (
                          <div>
                            <h4 className="text-[18px] font-bold text-black mb-3">
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((requirement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-gray-700"
                                >
                                  <span className="text-blue-600 mt-1.5 shrink-0">
                                    •
                                  </span>
                                  <span className="text-[15px] sm:text-[16px]">
                                    {requirement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {job.benefits && (
                          <div>
                            <h4 className="text-[18px] font-bold text-black mb-3">
                              Benefits
                            </h4>
                            <p className="text-[15px] sm:text-[16px] text-gray-700 whitespace-pre-line">
                              {job.benefits}
                            </p>
                          </div>
                        )}
                        {job.deadline && (
                          <div>
                            <p className="text-sm text-gray-600">
                              <strong>Application Deadline:</strong>{" "}
                              {new Date(job.deadline).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                        )}
                        <div className="pt-4 flex gap-4">
                          <button
                            onClick={() => setShowApplicationForm(job.id)}
                            className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#1d4ed8] transition-colors"
                          >
                            Apply Now
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                        {showApplicationForm === job.id && (
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <CareerApplicationForm
                              jobId={job.id}
                              jobTitle={job.title}
                              onClose={() => setShowApplicationForm(null)}
                              onSuccess={() => {
                                setShowApplicationForm(null);
                                setExpandedJob(null);
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {(hasNext || hasPrevious) && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={!hasPrevious || loading}
              className="px-6 py-3 bg-[#2563eb] text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1d4ed8] transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-700 font-medium">Page {page}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={!hasNext || loading}
              className="px-6 py-3 bg-[#2563eb] text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1d4ed8] transition-colors"
            >
              Next
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[16px] text-gray-700 mb-4">
            Don&apos;t see a position that matches your skills?
          </p>
          <a
            href="mailto:careers@asapdba.com?subject=General Application"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Send us your resume
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
