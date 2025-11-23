"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Database Administration Services",
    description:
      "We keep an eye on your databases 24/7, making sure everything runs smoothly. From routine maintenance to high-availability setups, we handle it all so you can focus on your business.",
    icon: "/assets/service-icon-1.svg", // Placeholder - you can replace with actual icons
  },
  {
    title: "Data Migration & Upgrades",
    description:
      "Moving databases doesn't have to be scary. We plan every migration carefully, test thoroughly, and execute with minimal downtime. Your data stays safe throughout the process.",
    icon: "/assets/service-icon-2.svg",
  },
  {
    title: "Cloud Infrastructure Services",
    description:
      "Take your infrastructure to the cloud with confidence. We help you migrate, set up, and manage cloud databases on AWS, Azure, or Google Cloud—whichever works best for you.",
    icon: "/assets/service-icon-3.svg",
  },
  {
    title: "Security & Compliance",
    description:
      "Your data security is non-negotiable. We implement industry-standard security measures, encryption, and access controls to keep your databases safe from threats.",
    icon: "/assets/service-icon-4.svg",
  },
  {
    title: "Performance Optimization",
    description:
      "When your database is crawling, we speed it up. We analyze what's causing the slowdown, fix bottlenecks, and optimize everything—all without interrupting your day-to-day operations.",
    icon: "/assets/service-icon-5.svg",
  },
  {
    title: "Managed Services",
    description:
      "Hand over your database management to us and focus on what you do best. We provide complete management with guaranteed uptime and performance metrics you can count on.",
    icon: "/assets/service-icon-6.svg",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-slate-100 py-[20px] sm:py-[35px] md:py-[50px] lg:py-[64px] xl:py-[80px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-semibold text-[#1e3a5f] text-center mb-[40px] sm:mb-[50px] md:mb-[60px] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[64px]"
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
                    className="text-[#2563eb]"
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
