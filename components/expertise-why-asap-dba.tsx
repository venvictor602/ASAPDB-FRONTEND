"use client";

import { motion } from "framer-motion";

const serviceCards = [
  {
    title: "Database Administration Services",
    description:
      "Proactive monitoring, tuning, and maintenance to keep your databases running smoothly. We handle everything from backups to high-availability setups—so your business never slows down.",
    icon: "wave",
  },
  {
    title: "Data Migration & Upgrades",
    description:
      "Smooth, safe transitions—zero downtime, zero data loss. We migrate your databases or upgrade them to new versions with complete reliability.",
    icon: "wave",
  },
  {
    title: "Cloud Infrastructure Services",
    description:
      "Accelerate growth with scalable and secure cloud environments. We help you migrate, deploy, and manage cloud solutions across AWS, Azure, and Google Cloud.",
    icon: "wave",
  },
  {
    title: "Security & Compliance",
    description:
      "Protect your data with enterprise-level security solutions. We implement security standards that safeguard your systems from threats and vulnerabilities.",
    icon: "wave",
  },
  {
    title: "Performance Optimization",
    description:
      "Slow systems? We make them fast again—without disrupting your operations. We analyze your workload, detect bottlenecks, and optimize performance for maximum efficiency.",
    icon: "wave",
  },
  {
    title: "Managed Services",
    description:
      "Let us run your database while you run your business. We provide full management support with guaranteed uptime and performance.",
    icon: "wave",
  },
];

// Simple wave icon component
const WaveIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-600"
  >
    <path
      d="M2 12C2 12 5 8 8 10C11 12 13 8 16 10C19 12 22 8 22 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 16C2 16 5 12 8 14C11 16 13 12 16 14C19 16 22 12 22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ExpertiseWhyAsapDba() {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold text-black leading-tight mb-4">
            Why ASAP DBA?
          </h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <WaveIcon />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[20px] sm:text-[22px] font-bold text-black mb-4 leading-tight">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] font-normal text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
