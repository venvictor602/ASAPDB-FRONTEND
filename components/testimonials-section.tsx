"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
    name: "Leslie Alexander",
    role: "Freelance React Developer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    text: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
    name: "Jacob Jones",
    role: "Digital Marketer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    text: "ASAP DBA transformed our database performance. The 24/7 monitoring and quick response times have been game-changing for our business operations.",
    name: "Sarah Williams",
    role: "CTO at TechStart",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 4,
    text: "Outstanding service! The team's expertise in database optimization helped us reduce query times by 70%. Highly recommended!",
    name: "Michael Chen",
    role: "Lead Developer",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 5,
    text: "Professional, reliable, and always available. ASAP DBA has become an essential part of our infrastructure management.",
    name: "Emily Rodriguez",
    role: "DevOps Engineer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Defer initial state update to avoid synchronous setState in effect
    const timeout = setTimeout(() => {
      onSelect();
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
    }, 4000); // Change slide every 4 seconds

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, isHovered]);

  return (
    <section className="bg-white py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-[32px]">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-[#48484A] text-sm sm:text-base md:text-[20px] font-normal">
            2,157 people have said how good Asap DBA
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-semibold text-[#48484A] leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[64px]">
            Our happy clients say about us
          </h2>
        </motion.div>

        {/* Testimonials Cards Section */}
        <div
          className="bg-[#262626] rounded-[16px] p-6 sm:p-8 md:p-12 lg:p-16 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 z-10">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all ${
                prevBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 z-10">
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all ${
                nextBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Next testimonials"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6 lg:gap-8 pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-21.33px)] min-w-0"
                >
                  <div className="bg-white rounded-[16px] p-6 sm:p-8 h-full shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4 sm:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FF9500] text-[#FF9500]"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[#48484A] text-sm sm:text-base font-normal leading-relaxed mb-6 sm:mb-8 grow">
                      {testimonial.text}
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                      <div>
                        <h4 className="text-[#48484A] text-sm sm:text-lg font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#48484A] text-xs sm:text-base font-normal">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Link href="/reviews">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#262626] border border-[#48484A] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-[#333333] transition-colors inline-flex items-center gap-2"
              >
                Check all 2,157 reviews
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
