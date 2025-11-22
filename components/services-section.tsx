"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Database Administration Services",
    description:
      "Proactive monitoring, tuning, and maintenance to keep your databases running smoothly. We handle everything from backups to high-availability setups—so your business never slows down.",
    icon: "/assets/service-icon-1.svg", // Placeholder - you can replace with actual icons
  },
  {
    title: "Data Migration & Upgrades",
    description:
      "Smooth, safe transitions—zero downtime, zero data loss. We migrate your databases or upgrade them to new versions with complete reliability.",
    icon: "/assets/service-icon-2.svg",
  },
  {
    title: "Cloud Infrastructure Services",
    description:
      "Accelerate growth with scalable and secure cloud environments. We help you migrate, deploy, and manage cloud solutions across AWS, Azure, and Google Cloud.",
    icon: "/assets/service-icon-3.svg",
  },
  {
    title: "Security & Compliance",
    description:
      "Protect your data with enterprise-level security solutions. We implement security standards that safeguard your systems from threats and vulnerabilities.",
    icon: "/assets/service-icon-4.svg",
  },
  {
    title: "Performance Optimization",
    description:
      "Slow systems? We make them fast again—without disrupting your operations. We analyze your workload, detect bottlenecks, and optimize performance for maximum efficiency.",
    icon: "/assets/service-icon-5.svg",
  },
  {
    title: "Managed Services",
    description:
      "Let us run your database while you run your business. We provide full management support with guaranteed uptime and performance.",
    icon: "/assets/service-icon-6.svg",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-slate-100 py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-semibold text-[#48484A] text-center mb-[40px] sm:mb-[50px] md:mb-[60px] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[64px]"
        >
          Why ASAP DBA?
        </motion.h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[16px] p-[20px] sm:p-[24px] md:p-[32px] shadow-sm hover:shadow-md transition-shadow space-y-[20px] sm:space-y-[24px]"
            >
              {/* Icon */}
              <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] relative">
                <div className="w-full h-full bg-slate-200 rounded-lg flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#48484A]"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-[12px] sm:space-y-[16px]">
                <h3 className="text-[18px] sm:text-[20px] md:text-[20px] font-semibold text-[#2E2E27] leading-[28px] sm:leading-[32px]">
                  {service.title}
                </h3>
                <p className="text-[#2E2E27] text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[24px]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
