"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Navigation } from "./navigation";
import Image from "next/image";

export function HeroSection() {
  const texts = useMemo(
    () => [
      "The smarter way to manage your databases 24/7",
      "Professional database management made simple",
      "Keep your databases fast, secure, and always available",
      "Expert database administration at your service",
      "24/7 database monitoring and optimization",
      "Trusted database management for modern businesses",
    ],
    []
  );

  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      // Move to next text after a brief pause
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isDeleting, currentTextIndex, texts]);

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white py-[20px] sm:py-[35px] md:py-[50px] lg:py-[64px]  ">
        <div className="container lg:mx-auto mx-2 max-w-7xl px-4 lg:px-0">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-7 md:space-y-8"
            >
              <h1 className="text-[44px] lg:text-[50px] xl:text-[56px] font-semibold text-[#48484A] leading-[56px] lg:leading-[64px] xl:leading-[70px]">
                {displayedText}
                <span className="animate-pulse">|</span>
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
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-wrap">
                  <Image
                    src="/assets/Google Cloud.svg"
                    alt="Google Cloud"
                    width={200}
                    height={48}
                    className="w-auto h-5 sm:h-6 md:h-8 lg:h-10 xl:h-12 max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[200px] object-contain"
                    loading="lazy"
                  />
                  <Image
                    src="/assets/AWS.svg"
                    alt="AWS"
                    width={70}
                    height={48}
                    className="w-auto h-5 sm:h-6 md:h-8 lg:h-10 xl:h-12 max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] object-contain"
                    loading="lazy"
                  />
                  <Image
                    src="/assets/Azure.svg"
                    alt="Azure"
                    width={70}
                    height={48}
                    className="w-auto h-5 sm:h-6 md:h-8 lg:h-10 xl:h-12 max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] object-contain"
                    loading="lazy"
                  />
                  <Image
                    src="/assets/Oracle.svg"
                    alt="Oracle"
                    width={70}
                    height={48}
                    className="w-auto h-5 sm:h-6 md:h-8 lg:h-10 xl:h-12 max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] object-contain"
                    loading="lazy"
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
                  alt="Database management illustration showing cloud infrastructure and database servers"
                  width={600}
                  height={600}
                  className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-full h-auto object-contain md:object-cover"
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
