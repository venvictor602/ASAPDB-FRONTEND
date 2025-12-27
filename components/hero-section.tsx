"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "./navigation";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Placeholder for slides - user will add images later
  const totalSlides = 3;

  const displayedText = "The smarter way to manage your databases 24/7";
  const descriptionText =
    "We ensure your databases stay fast, secure, and always available. From daily monitoring to complex migrations, we handle the backend so your business can focus on growth.";

  return (
    <div className="relative min-h-screen bg-[#0a1628]">
      <div className="sticky top-0 z-50">
        <Navigation backgroundColor="transparent" />
      </div>

      {/* Hero Section */}
      <section className="relative py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px] overflow-hidden">
        {/* Dark Background with Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, #0a1628 0%, #1e293b 50%, #0f172a 100%),
              url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%232563eb' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")
            `,
            backgroundSize: "cover, 80px 80px",
            backgroundPosition: "center",
          }}
        />

        {/* Glowing dots effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30 blur-sm animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-20 blur-sm animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-25 blur-sm animate-pulse delay-2000" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-7 md:space-y-8"
            >
              <h1 className="text-[44px] lg:text-[50px] xl:text-[56px] font-semibold text-white leading-[56px] lg:leading-[64px] xl:leading-[70px]">
                {displayedText}
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-normal text-white/90 leading-[24px] sm:leading-[28px] md:leading-[32px]">
                {descriptionText}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 rounded-[8px] font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] transition-all cursor-pointer text-center whitespace-nowrap bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-lg hover:shadow-xl"
                  >
                    Get a Free Consultation
                  </motion.button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto border-2 border-white/30 px-6 py-3 sm:px-8 sm:py-3 rounded-[8px] font-semibold transition-all text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] cursor-pointer text-center whitespace-nowrap bg-transparent text-white hover:border-white/50 hover:bg-white/5"
                  >
                    Explore Our Services
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Illustration - Slide Container */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full hidden md:block"
            >
              <div className="relative w-full h-full flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                {/* Subtle glow effect behind image */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
                  }}
                />

                {/* Slide Container - Ready for images */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {/* Placeholder for slide images - user will add later */}
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/assets/Asap-Dba hero Image.png"
                      alt="Database management illustration showing cloud infrastructure and database servers"
                      width={600}
                      height={600}
                      className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-full h-auto object-contain drop-shadow-2xl"
                      sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-3 h-3 bg-white"
                    : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
