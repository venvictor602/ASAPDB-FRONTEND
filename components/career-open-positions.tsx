"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import type { JobPosition } from "@/lib/career-data";
import { jobPositions } from "@/lib/career-data";

export function CareerOpenPositions() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
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

        <div className="space-y-4">
          {jobPositions.map((job, index) => (
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
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm sm:text-base">{job.type}</span>
                    </div>
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
                      <div>
                        <h4 className="text-[18px] font-bold text-black mb-3">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
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
                          ))}
                        </ul>
                      </div>
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
                      <div className="pt-4">
                        <a
                          href={`mailto:careers@asapdba.com?subject=Application for ${job.title}`}
                          className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-[#1d4ed8] transition-colors"
                        >
                          Apply Now
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

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
