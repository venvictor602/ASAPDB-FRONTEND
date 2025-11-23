"use client";

// import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Navigation } from "./navigation";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  // Typewriter effect commented out - using static text instead
  // const texts = useMemo(
  //   () => [
  //     "The smarter way to manage your databases 24/7",
  //     "Professional database management made simple",
  //     "Keep your databases fast, secure, and always available",
  //     "Expert database administration at your service",
  //     "24/7 database monitoring and optimization",
  //     "Trusted database management for modern businesses",
  //   ],
  //   []
  // );

  // const [displayedText, setDisplayedText] = useState("");
  // const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);

  // useEffect(() => {
  //   const currentText = texts[currentTextIndex];
  //   const typingSpeed = isDeleting ? 50 : 100;

  //   if (!isDeleting && currentIndex < currentText.length) {
  //     const timeout = setTimeout(() => {
  //       setDisplayedText((prev) => prev + currentText[currentIndex]);
  //       setCurrentIndex((prev) => prev + 1);
  //     }, typingSpeed);

  //     return () => clearTimeout(timeout);
  //   } else if (!isDeleting && currentIndex === currentText.length) {
  //     const timeout = setTimeout(() => {
  //       setIsDeleting(true);
  //     }, 2000);

  //     return () => clearTimeout(timeout);
  //   } else if (isDeleting && currentIndex > 0) {
  //     const timeout = setTimeout(() => {
  //       setDisplayedText((prev) => prev.slice(0, -1));
  //       setCurrentIndex((prev) => prev - 1);
  //     }, typingSpeed);

  //     return () => clearTimeout(timeout);
  //   } else if (isDeleting && currentIndex === 0) {
  //     // Move to next text after a brief pause
  //     const timeout = setTimeout(() => {
  //       setIsDeleting(false);
  //       setCurrentTextIndex((prev) => (prev + 1) % texts.length);
  //     }, 500);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [currentIndex, isDeleting, currentTextIndex, texts]);

  const displayedText = "The smarter way to manage your databases 24/7";

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-[20px] sm:py-[35px] md:py-[50px] lg:py-[64px] xl:py-[80px] overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, var(--hero-bg-start), var(--hero-bg-mid), var(--hero-bg-end))`,
        }}
      >
        {/* Workstation-style background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%232d3748' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Subtle code/terminal lines pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(45, 55, 72, 0.1) 50%, transparent 100%), linear-gradient(0deg, transparent 0%, rgba(45, 55, 72, 0.05) 50%, transparent 100%)`,
            backgroundSize: "200px 200px, 200px 200px",
          }}
        ></div>

        {/* Soft radial gradient overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at top right, rgba(91, 141, 239, 0.06) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(139, 92, 246, 0.04) 0%, transparent 50%)`,
          }}
        ></div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(45, 55, 72, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 55, 72, 0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-7 md:space-y-8"
            >
              <h1
                className="text-[44px] lg:text-[50px] xl:text-[56px] font-semibold leading-[56px] lg:leading-[64px] xl:leading-[70px]"
                style={{ color: "var(--hero-text-primary)" }}
              >
                {displayedText}
              </h1>

              <p
                className="text-base sm:text-lg md:text-xl font-normal leading-[24px] sm:leading-[28px] md:leading-[32px]"
                style={{ color: "var(--hero-text-secondary)" }}
              >
                Keep your databases running smoothly while you focus on what
                matters most. We handle monitoring, optimization, and
                migrations—so you don&apos;t have to worry about downtime or
                performance issues.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-4 py-[10px] sm:px-6 sm:py-[10px] rounded-[8px] font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] transition-all cursor-pointer text-center whitespace-nowrap shadow-md hover:shadow-lg"
                    style={{
                      backgroundColor: "var(--button-primary-bg)",
                      color: "var(--button-primary-text)",
                    }}
                  >
                    Get a Free Consultation
                  </motion.button>
                </Link>
                <Link href="/services" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto border-2 px-4 py-[10px] sm:px-6 sm:py-[10px] rounded-[8px] font-semibold transition-all text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] cursor-pointer text-center whitespace-nowrap"
                    style={{
                      backgroundColor: "var(--button-secondary-bg)",
                      color: "var(--button-secondary-text)",
                      borderColor: "var(--button-secondary-border)",
                    }}
                  >
                    Explore Our Services
                  </motion.button>
                </Link>
              </div>

              {/* Compatible With Section */}
              <div className="space-y-3 sm:space-y-[12px] pt-2 sm:pt-4">
                <p
                  className="text-sm sm:text-base md:text-[16px] font-normal"
                  style={{ color: "var(--text-tertiary)" }}
                >
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
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Subtle glow effect behind image */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-50"
                  style={{
                    background: `linear-gradient(to right, var(--hero-glow-start), var(--hero-glow-mid), var(--hero-glow-end))`,
                  }}
                ></div>

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Image
                    src="/assets/Asap-Dba hero Image.png"
                    alt="Database management illustration showing cloud infrastructure and database servers"
                    width={600}
                    height={600}
                    className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-full h-auto object-contain md:object-cover drop-shadow-2xl"
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
