"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Database Administration Services",
    description:
      "Proactive monitoring, tuning, and maintenance to keep your databases running smoothly and efficiently.",
    image: "/assets/image1.png", // Placeholder - replace with actual image
  },
  {
    title: "Data Migration & Upgrades",
    description:
      "Smooth, safe transitions—zero downtime, zero data loss. We migrate your databases seamlessly.",
    image: "/assets/image2.png", // Placeholder - replace with actual image
  },
  {
    title: "Cloud Infrastructure Services",
    description:
      "Accelerate growth with scalable and secure cloud environments for better performance and cost efficiency.",
    image: "/assets/image3.png", // Placeholder - replace with actual image
  },
];

export function WhyAsapDbaSection() {
  return (
    <section className="bg-white py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-black text-center mb-[40px] sm:mb-[50px] md:mb-[60px] leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[64px]"
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
              className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-4 flex flex-col grow">
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-black leading-[28px] sm:leading-[32px]">
                  {service.title}
                </h3>
                <p className="text-[14px] sm:text-[16px] font-normal text-gray-700 leading-[22px] sm:leading-[24px] grow">
                  {service.description}
                </p>
                <Link
                  href="/expertise"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-colors group/link mt-2"
                >
                  Read more
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
