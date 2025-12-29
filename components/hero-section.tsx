"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "./navigation";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Smarter database management 24/7",
    description:
      "Keep your databases fast, secure, and always available. We handle monitoring, migrations, and maintenance so you can focus on growth.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop&q=80",
    ctaPrimary: {
      text: "Get a Free Consultation",
      href: "/contact",
    },
    ctaSecondary: {
      text: "Explore Our Services",
      href: "/services",
    },
  },
  {
    id: 2,
    title: "Cloud Database Solutions",
    description:
      "Migrate to the cloud with confidence. Expert AWS, Azure, and Google Cloud setups with seamless transitions.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80",
    ctaPrimary: {
      text: "View Cloud Services",
      href: "/services/cloud",
    },
    ctaSecondary: {
      text: "Learn More",
      href: "/solutions/cloud-management",
    },
  },
  {
    id: 3,
    title: "24/7 Monitoring & Support",
    description:
      "Round-the-clock monitoring detects issues before they impact your business. Expert intervention when you need it.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop&q=80",
    ctaPrimary: {
      text: "Get Started",
      href: "/contact",
    },
    ctaSecondary: {
      text: "View Solutions",
      href: "/solutions/monitoring-support",
    },
  },
  {
    id: 4,
    title: "Enterprise Security & Compliance",
    description:
      "Industry-standard security with encryption, access controls, and compliance frameworks to keep your databases secure.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop&q=80",
    ctaPrimary: {
      text: "Secure Your Data",
      href: "/services/security",
    },
    ctaSecondary: {
      text: "Learn About Security",
      href: "/solutions/security-compliance",
    },
  },
];

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const timeout = setTimeout(() => {
      onSelect();
      setScrollSnaps(emblaApi.scrollSnapList());
    }, 0);

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      clearTimeout(timeout);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const autoplay = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 6000); // Change slide every 6 seconds

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, isHovered]);

  return (
    <div
      className="relative h-[90vh] sm:h-[85vh] md:h-[80vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="sticky top-0 z-50">
        <Navigation backgroundColor="white" />
      </div>

      {/* Hero Slider */}
      <section className="relative h-full">
        <div className="embla overflow-hidden h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {heroSlides.map((slide) => (
              <div
                key={slide.id}
                className="embla__slide flex-[0_0_100%] min-w-0 relative h-full"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={slide.id === 1}
                    sizes="100vw"
                    quality={90}
                  />
                </div>

                {/* Dark Overlay with Grid Pattern */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(to bottom, rgba(10, 22, 40, 0.85) 0%, rgba(30, 41, 59, 0.75) 50%, rgba(15, 23, 42, 0.85) 100%),
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

                {/* Content */}
                <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 h-full flex items-center pt-[10px] pb-[20px] md:pt-[40px] md:pb-[40px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6 }}
                      className="max-w-3xl space-y-6 sm:space-y-7 md:space-y-8"
                    >
                      <h1 className="text-[44px] lg:text-[50px] xl:text-[56px] font-semibold text-white leading-[56px] lg:leading-[64px] xl:leading-[70px]">
                        {slide.title}
                      </h1>

                      <p className="text-base sm:text-lg md:text-xl font-normal text-white/90 leading-[24px] sm:leading-[28px] md:leading-[32px]">
                        {slide.description}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link
                          href={slide.ctaPrimary.href}
                          className="w-full sm:w-auto"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 rounded-[8px] font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] transition-all cursor-pointer text-center whitespace-nowrap bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-lg hover:shadow-xl"
                          >
                            {slide.ctaPrimary.text}
                          </motion.button>
                        </Link>
                        <Link
                          href={slide.ctaSecondary.href}
                          className="w-full sm:w-auto"
                        >
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto border-2 border-white/30 px-6 py-3 sm:px-8 sm:py-3 rounded-[8px] font-semibold transition-all text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] cursor-pointer text-center whitespace-nowrap bg-transparent text-white hover:border-white/50 hover:bg-white/5"
                          >
                            {slide.ctaSecondary.text}
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {/* <div className="absolute inset-y-0 left-0 z-20 flex items-center px-4 sm:px-6">
          <button
            onClick={scrollPrev}
            className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div> */}
        {/* <div className="absolute inset-y-0 right-0 z-20 flex items-center px-4 sm:px-6">
          <button
            onClick={scrollNext}
            className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div> */}

        {/* Pagination Dots */}
      </section>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex justify-center items-center gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? "w-3 h-3 bg-white"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
