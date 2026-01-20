"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const relatedServices = [
  {
    title: "Database Administration Services",
    image: "/assets/Image1.png",
  },
  {
    title: "Data Migration & Upgrades",
    image: "/assets/Image2.png",
  },
  {
    title: "Cloud Infrastructure Services",
    image: "/assets/Image3.png",
  },
];

export function ExpertiseRelatedServices() {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold text-black leading-tight">
            Other Related Services
          </h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {relatedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Title */}
              <div className="p-6 sm:p-8">
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-black leading-tight text-center group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
