"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Solution } from "@/lib/solutions-data";

// Icon components (same as in overview)
const GridIcon = () => (
  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="4" height="4" rx="1" fill="#2563eb" />
      <rect x="8" y="2" width="4" height="4" rx="1" fill="#2563eb" />
      <rect x="14" y="2" width="4" height="4" rx="1" fill="#2563eb" />
      <rect x="2" y="8" width="4" height="4" rx="1" fill="#2563eb" />
      <rect x="8" y="8" width="4" height="4" rx="1" fill="#2563eb" />
      <rect x="14" y="8" width="4" height="4" rx="1" fill="#2563eb" />
      <rect x="2" y="14" width="4" height="4" rx="1" fill="#2563eb" />
      <rect x="8" y="14" width="4" height="4" rx="1" fill="#2563eb" />
      <rect x="14" y="14" width="4" height="4" rx="1" fill="#2563eb" />
    </svg>
  </div>
);

const CrossIcon = () => (
  <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="10" y="2" width="4" height="4" rx="1" fill="#dc2626" />
      <rect x="10" y="8" width="4" height="4" rx="1" fill="#dc2626" />
      <rect x="10" y="14" width="4" height="4" rx="1" fill="#dc2626" />
      <rect x="4" y="11" width="4" height="4" rx="1" fill="#dc2626" />
      <rect x="16" y="11" width="4" height="4" rx="1" fill="#dc2626" />
    </svg>
  </div>
);

const ZigzagIcon = () => (
  <div className="w-16 h-16 bg-pink-50 rounded-lg flex items-center justify-center">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="4" height="4" rx="1" fill="#ec4899" />
      <rect x="9" y="11" width="4" height="4" rx="1" fill="#ec4899" />
      <rect x="14" y="16" width="4" height="4" rx="1" fill="#ec4899" />
      <rect x="19" y="11" width="4" height="4" rx="1" fill="#ec4899" />
      <rect x="14" y="6" width="4" height="4" rx="1" fill="#ec4899" />
    </svg>
  </div>
);

const DiamondsIcon = () => (
  <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="10" y="4" width="4" height="4" rx="1" fill="#10b981" />
      <rect x="4" y="10" width="4" height="4" rx="1" fill="#10b981" />
      <rect x="16" y="10" width="4" height="4" rx="1" fill="#10b981" />
      <rect x="10" y="16" width="4" height="4" rx="1" fill="#10b981" />
    </svg>
  </div>
);

const ShieldIcon = () => (
  <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L4 6V12C4 17.55 7.16 22.74 12 24C16.84 22.74 20 17.55 20 12V6L12 2Z"
        fill="#8b5cf6"
      />
    </svg>
  </div>
);

const RocketIcon = () => (
  <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
        fill="#f97316"
      />
    </svg>
  </div>
);

const getIcon = (iconType: string) => {
  switch (iconType) {
    case "grid":
      return <GridIcon />;
    case "cross":
      return <CrossIcon />;
    case "zigzag":
      return <ZigzagIcon />;
    case "diamonds":
      return <DiamondsIcon />;
    case "shield":
      return <ShieldIcon />;
    case "rocket":
      return <RocketIcon />;
    default:
      return <GridIcon />;
  }
};

interface SolutionDetailPageProps {
  solution: Solution;
}

export function SolutionDetailPage({ solution }: SolutionDetailPageProps) {
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
              <div className="flex items-center gap-4">
                {getIcon(solution.icon)}
                <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold text-black leading-tight">
                  {solution.title}
                </h1>
              </div>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-normal text-gray-700 leading-relaxed">
                {solution.longDescription}
              </p>
              <div className="pt-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex cursor-pointer items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/20"
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
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Key Features
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {solution.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-[16px] sm:text-[18px] font-medium text-gray-900 leading-relaxed">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits
            </h2>
            <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
              Discover how our {solution.title.toLowerCase()} can transform your
              database operations
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {solution.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-[16px] sm:text-[18px] font-semibold text-gray-900">
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Use Cases
            </h2>
            <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
              Common scenarios where this solution delivers value
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {solution.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-[16px] sm:text-[18px] font-medium text-gray-900 leading-relaxed">
                    {useCase}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[60px] sm:py-[80px] md:py-[100px] bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-[18px] text-gray-700 max-w-2xl mx-auto">
              Contact us today to learn how our {solution.title.toLowerCase()}{" "}
              can help your business achieve better database performance and
              reliability.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex cursor-pointer items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-500/20"
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
