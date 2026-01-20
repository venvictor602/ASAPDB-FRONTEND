"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "database-admin",
    title: "Database Administration Services",
    description:
      "Proactive monitoring, tuning, and maintenance to keep your databases running smoothly. We handle everything from backups to high-availability setups—so your business never slows down.",
    image: "/assets/Image1.png",
  },
  {
    id: "data-migration",
    title: "Data Migration & Upgrades",
    description:
      "Smooth, safe transitions—zero downtime, zero data loss. We migrate your databases or upgrade them to new versions with complete reliability.",
    image: "/assets/Image2.png",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Services",
    description:
      "Accelerate growth with scalable and secure cloud environments. We help you migrate, deploy, and manage cloud solutions across AWS, Azure, and Google Cloud.",
    image: "/assets/Image3.png",
  },
  {
    id: "security-compliance",
    title: "Security & Compliance",
    description:
      "Protect your data with enterprise-level security solutions. We implement security standards that safeguard your systems from threats and vulnerabilities.",
    image: "/assets/Image1.png",
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    description:
      "Slow systems? We make them fast again—without disrupting your operations. We analyze your workload, detect bottlenecks, and optimize performance for maximum efficiency.",
    image: "/assets/Image2.png",
  },
  {
    id: "managed-services",
    title: "Managed Services",
    description:
      "Let us run your database while you run your business. We provide full management support with guaranteed uptime and performance.",
    image: "/assets/Image3.png",
  },
];

export function ExpertiseServicesTabs() {
  const [activeService, setActiveService] = useState(services[0].id);

  const currentService =
    services.find((s) => s.id === activeService) || services[0];

  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Panel - Service Navigation */}
          <div className="space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-blue-50 border-l-4 border-blue-600 text-blue-900 font-semibold"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium"
                }`}
              >
                <span className="text-base sm:text-lg">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Right Panel - Service Content */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Image */}
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={currentService.image}
                    alt={currentService.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-black leading-tight">
                    {currentService.title}
                  </h3>
                  <p className="text-[16px] sm:text-[18px] font-normal text-gray-700 leading-relaxed">
                    {currentService.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
