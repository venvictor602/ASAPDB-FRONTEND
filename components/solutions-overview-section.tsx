"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllSolutions } from "@/lib/solutions-data";

// Icon components
const GridIcon = () => (
  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="10" y="2" width="4" height="4" rx="1" fill="#dc2626" />
      <rect x="10" y="8" width="4" height="4" rx="1" fill="#dc2626" />
      <rect x="10" y="14" width="4" height="4" rx="1" fill="#dc2626" />
      <rect x="4" y="11" width="4" height="4" rx="1" fill="#dc2626" />
      <rect x="16" y="11" width="4" height="4" rx="1" fill="#dc2626" />
    </svg>
  </div>
);

const ZigzagIcon = () => (
  <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="4" height="4" rx="1" fill="#ec4899" />
      <rect x="9" y="11" width="4" height="4" rx="1" fill="#ec4899" />
      <rect x="14" y="16" width="4" height="4" rx="1" fill="#ec4899" />
      <rect x="19" y="11" width="4" height="4" rx="1" fill="#ec4899" />
      <rect x="14" y="6" width="4" height="4" rx="1" fill="#ec4899" />
    </svg>
  </div>
);

const DiamondsIcon = () => (
  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="10" y="4" width="4" height="4" rx="1" fill="#10b981" />
      <rect x="4" y="10" width="4" height="4" rx="1" fill="#10b981" />
      <rect x="16" y="10" width="4" height="4" rx="1" fill="#10b981" />
      <rect x="10" y="16" width="4" height="4" rx="1" fill="#10b981" />
    </svg>
  </div>
);

const ShieldIcon = () => (
  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L4 6V12C4 17.55 7.16 22.74 12 24C16.84 22.74 20 17.55 20 12V6L12 2Z"
        fill="#8b5cf6"
      />
    </svg>
  </div>
);

const RocketIcon = () => (
  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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

export function SolutionsOverviewSection() {
  const solutions = getAllSolutions();

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
            Our Solutions
          </h2>
          <p className="text-[18px] text-gray-700 max-w-3xl mx-auto">
            Comprehensive database solutions designed to solve your most
            critical challenges
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] sm:h-[240px] overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-4 flex flex-col grow">
                <div className="flex items-center gap-3">
                  {getIcon(solution.icon)}
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-black leading-tight">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-[15px] sm:text-[16px] font-normal text-gray-700 leading-relaxed grow">
                  {solution.description}
                </p>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-colors group/link mt-2"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

