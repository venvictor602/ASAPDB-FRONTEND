"use client";

import { motion } from "framer-motion";

export function PortfolioHeroSection() {
  return (
    <section className="bg-white py-[20px] sm:py-[35px] md:py-[50px] lg:py-[64px] xl:py-[80px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-black leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[70px]"
          >
            Showcasing Our Expertise Through Real Business Impact
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[16px] sm:text-[18px] md:text-[24px] font-normal text-[#4F4F4F] leading-[24px] sm:leading-[28px] md:leading-[32px] max-w-3xl mx-auto"
          >
            Explore how we’ve helped companies improve performance, strengthen
            security, and achieve reliable, scalable database systems.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
