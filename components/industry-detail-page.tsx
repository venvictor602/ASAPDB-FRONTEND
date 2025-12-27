"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import type { Industry } from "@/lib/industries-data";

interface IndustryDetailPageProps {
  industry: Industry;
}

export function IndustryDetailPage({ industry }: IndustryDetailPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold text-black leading-tight">
                {industry.title} Solutions
              </h1>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal text-gray-700 leading-relaxed">
                {industry.longDescription}
              </p>
              <div className="pt-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/20"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-[60px] sm:py-[80px] md:py-[100px] bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
              Common Challenges
            </h2>
            <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
              Understanding the unique database challenges in the{" "}
              {industry.title.toLowerCase()} industry
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {industry.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-red-50 p-6 rounded-xl border border-red-100"
              >
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-[16px] sm:text-[18px] font-medium text-gray-900 leading-relaxed">
                    {challenge}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-[60px] sm:py-[80px] md:py-[100px] bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
              Our Solutions
            </h2>
            <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
              How we help {industry.title.toLowerCase()} organizations overcome
              database challenges
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industry.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-[16px] sm:text-[18px] font-medium text-gray-900 leading-relaxed">
                    {solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[60px] sm:py-[80px] md:py-[100px] bg-white">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight">
              Ready to Transform Your Database Operations?
            </h2>
            <p className="text-[18px] text-gray-700 max-w-2xl mx-auto">
              Let&apos;s discuss how our {industry.title.toLowerCase()}{" "}
              solutions can help your organization achieve better database
              performance, security, and compliance.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/20"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
