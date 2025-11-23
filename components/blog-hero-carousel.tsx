"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";

interface BlogHeroCarouselProps {
  posts: BlogPost[];
}

export function BlogHeroCarousel({ posts }: BlogHeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

    // Defer initial state update to avoid synchronous setState in effect
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
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi, isHovered]);

  return (
    <section className="relative bg-[#1e3a5f] py-[20px] sm:py-[35px] md:py-[50px] lg:py-[64px] xl:py-[80px] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 space-y-4">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[64px]">
            Our Blog
          </h1>
          <p className="text-[#bfdbfe] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            Stay updated with database management insights, best practices, and
            industry trends
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-[16px]" ref={emblaRef}>
            <div className="flex">
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className="flex-[0_0_100%] min-w-0 relative group"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-[16px] overflow-hidden">
                      {/* Background Image */}
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        sizes="100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority={index === 0}
                        quality={90}
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#1e3a5f] via-[#1e3a5f]/80 to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 text-white">
                        <div className="max-w-4xl">
                          {/* Category Badge */}
                          <div className="mb-4">
                            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
                              {post.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold text-white leading-tight mb-4 sm:mb-6">
                            {post.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-white text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 sm:mb-8 max-w-3xl">
                            {post.excerpt}
                          </p>

                          {/* Meta Information */}
                          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-[#bfdbfe]">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="font-medium">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          {/* Read More Button */}
                          <div className="mt-6 sm:mt-8">
                            <span className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-[8px] font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors">
                              Read Article
                              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all ${
                  index === selectedIndex
                    ? "w-8 sm:w-10 bg-white"
                    : "w-2 sm:w-2.5 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
