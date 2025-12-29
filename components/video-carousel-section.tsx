"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

interface VideoCard {
  id: number;
  title: string;
  description: string;
  image: string;
  youtubeUrl: string;
}

const videoCards: VideoCard[] = [
  {
    id: 1,
    title: "Database Performance Optimization",
    description:
      "Learn how we optimize database performance to improve query speeds and reduce server load.",
    image: "/assets/image1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Cloud Migration Best Practices",
    description:
      "Discover the best practices for migrating your databases to the cloud with zero downtime.",
    image: "/assets/image2.png",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "24/7 Database Monitoring Setup",
    description:
      "See how we set up comprehensive monitoring systems to keep your databases running smoothly.",
    image: "/assets/image3.png",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Database Security Hardening",
    description:
      "Learn about enterprise-grade security measures to protect your sensitive data.",
    image: "/assets/image1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Automated Backup Solutions",
    description:
      "Explore automated backup strategies that ensure your data is always protected.",
    image: "/assets/image2.png",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export function VideoCarouselSection() {
  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...videoCards, ...videoCards];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
            Watch Our Videos
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-700 max-w-3xl mx-auto">
            Learn from our expert team through detailed tutorials and case
            studies
          </p>
        </motion.div>

        {/* Scrolling Cards Container */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div
            className="flex gap-6 sm:gap-8"
            style={{
              width: "max-content",
              animation: "scroll 60s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group h-full flex flex-col"
                >
                  {/* Image with Play Button Overlay */}
                  <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play
                          className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 ml-1"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 space-y-4 flex flex-col grow">
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-black leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] font-normal text-gray-700 leading-relaxed grow">
                      {card.description}
                    </p>
                    <Link
                      href={card.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-colors group/link mt-2"
                    >
                      Watch on YouTube
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
