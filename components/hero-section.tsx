"use client";

import { motion } from "framer-motion";
import { Navigation } from "./navigation";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-7 md:space-y-8"
            >
              <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[56px] font-semibold text-[#48484A] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[64px] xl:leading-[70px]">
                The smarter way to manage your databases 24/7
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-normal text-[#606060] leading-[24px] sm:leading-[28px] md:leading-[32px]">
                We ensure your databases stay fast, secure, and always
                available. From daily monitoring to complex migrations, we
                handle the backend so your business can focus on growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#101010] px-4 py-[10px] sm:px-6 sm:py-[10px] rounded-[8px] text-white font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] transition-colors cursor-pointer text-center whitespace-nowrap"
                >
                  Get a Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#48484A] border border-[#E8E8E8] px-4 py-[10px] sm:px-6 sm:py-[10px] rounded-[8px] font-semibold hover:border-gray-400 transition-colors text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] cursor-pointer text-center whitespace-nowrap"
                >
                  Explore Our Services
                </motion.button>
              </div>

              {/* Compatible With Section */}
              <div className="space-y-3 sm:space-y-[12px] pt-2 sm:pt-4">
                <p className="text-sm sm:text-base md:text-[16px] font-normal text-[#606060]">
                  Compatible with
                </p>
                <div className="flex items-center gap-4 sm:gap-5 md:gap-6 flex-wrap">
                  <Image
                    src="/assets/Google Cloud.svg"
                    alt="Google Cloud"
                    width={100}
                    height={100}
                    className="w-auto h-6 sm:h-8 md:h-10 lg:h-12 max-w-[120px] sm:max-w-[150px] md:max-w-[200px] object-contain"
                  />
                  <Image
                    src="/assets/AWS.svg"
                    alt="AWS"
                    width={100}
                    height={100}
                    className="w-auto h-6 sm:h-8 md:h-10 lg:h-12 max-w-[50px] sm:max-w-[60px] md:max-w-[70px] object-contain"
                  />
                  <Image
                    src="/assets/Azure.svg"
                    alt="Azure"
                    width={100}
                    height={100}
                    className="w-auto h-6 sm:h-8 md:h-10 lg:h-12 max-w-[50px] sm:max-w-[60px] md:max-w-[70px] object-contain"
                  />
                  <Image
                    src="/assets/Oracle.svg"
                    alt="Oracle"
                    width={100}
                    height={100}
                    className="w-auto h-6 sm:h-8 md:h-10 lg:h-12 max-w-[50px] sm:max-w-[60px] md:max-w-[70px] object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full hidden md:block"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/assets/Asap-Dba hero Image.png"
                  alt="Hero Section"
                  width={500}
                  height={500}
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-full h-auto object-contain md:object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
