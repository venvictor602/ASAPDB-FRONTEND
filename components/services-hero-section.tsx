"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export function ServicesHeroSection() {
  return (
    <section className="bg-white py-[20px] sm:py-[35px] md:py-[50px] lg:py-[64px] xl:py-[80px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-black leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[64px]"
          >
            Expert Database & Cloud Solutions for a Reliable, High-Performing
            Business
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[16px] sm:text-[18px] md:text-[24px] font-normal text-[#4F4F4F] leading-[24px] sm:leading-[28px] md:leading-[32px] max-w-3xl mx-auto"
          >
            Whether you need a quick optimization or full database management,
            we keep your systems running fast, secure, and available when you
            need them most.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2563eb] text-white px-6 py-[12px] sm:px-8 sm:py-[14px] md:px-10 md:py-[16px] rounded-[8px] font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] hover:bg-[#1d4ed8] transition-colors cursor-pointer"
              >
                Speak With an Expert
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6"
          >
            {["Cancel anytime", "Security Guarantee", "Expert support"].map(
              (feature, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 shrink-0" />
                  <span className="text-[14px] sm:text-[16px] font-normal text-[#4F4F4F]">
                    {feature}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
