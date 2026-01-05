"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, Loader2, X } from "lucide-react";
import { useGetVideosQuery, type Video } from "@/lib/api/contact-api";

const TEST_VIDEOS: Video[] = [
  {
    id: 1,
    title: "PostgreSQL Performance Tuning Tutorial",
    thumbnail: "",
    videoLink: "https://www.youtube.com/watch?v=BhUzXzVUrxg",
    caption: "Learn how to optimize PostgreSQL databases for better performance",
    description: "Learn how to optimize PostgreSQL databases for better performance",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "MySQL Database Administration Best Practices",
    thumbnail: "",
    videoLink: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
    caption: "Essential MySQL administration techniques for database professionals",
    description: "Essential MySQL administration techniques for database professionals",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "MongoDB Cloud Migration Guide",
    thumbnail: "",
    videoLink: "https://www.youtube.com/watch?v=pWbMrx5rVBE",
    caption: "Step-by-step guide to migrating MongoDB to the cloud",
    description: "Step-by-step guide to migrating MongoDB to the cloud",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "Database Backup and Recovery Strategies",
    thumbnail: "",
    videoLink: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
    caption: "Comprehensive guide to database backup and disaster recovery",
    description: "Comprehensive guide to database backup and disaster recovery",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: "AWS RDS Management and Optimization",
    thumbnail: "",
    videoLink: "https://www.youtube.com/watch?v=Ia-UEYYR44s",
    caption: "Master AWS RDS for efficient cloud database management",
    description: "Master AWS RDS for efficient cloud database management",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 6,
    title: "Database Security Best Practices",
    thumbnail: "",
    videoLink: "https://www.youtube.com/watch?v=H5v6A7yH6nU",
    caption: "Essential security measures to protect your databases",
    description: "Essential security measures to protect your databases",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

function getYouTubeVideoId(videoLink: string): string | null {
  if (!videoLink) return null;
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = videoLink.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
}

function getYouTubeThumbnail(videoLink: string): string {
  const videoId = getYouTubeVideoId(videoLink);
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }
  return "/assets/image1.png";
}

function getYouTubeEmbedUrl(videoLink: string): string | null {
  const videoId = getYouTubeVideoId(videoLink);
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  }
  return null;
}

export function VideoCarouselSection() {
  const { data, isLoading } = useGetVideosQuery({ page: 1 });
  const apiVideos = data?.videos || [];
  
  const videos = apiVideos.length > 0 ? apiVideos : TEST_VIDEOS;

  const duplicatedCards = [...videos, ...videos];
  const [isPaused, setIsPaused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo]);

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
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : (
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
                    <button
                      onClick={() => setSelectedVideo(card)}
                      className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden bg-gray-200 block cursor-pointer"
                    >
                      <Image
                        src={getYouTubeThumbnail(card.videoLink)}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Play
                            className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 ml-1"
                            fill="currentColor"
                          />
                        </div>
                      </div>
                    </button>

                    {/* Content */}
                    <div className="p-6 sm:p-8 space-y-4 flex flex-col grow">
                      <h3 className="text-[20px] sm:text-[22px] font-bold text-black leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-[15px] sm:text-[16px] font-normal text-gray-700 leading-relaxed grow">
                        {card.description || card.caption}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <button
                          onClick={() => setSelectedVideo(card)}
                          className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base hover:text-blue-700 transition-colors group/link"
                        >
                          Watch Video
                          <Play className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        </button>
                        <Link
                          href={card.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-600 font-medium text-sm sm:text-base hover:text-gray-700 transition-colors group/link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Open on YouTube
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 z-[100] backdrop-blur-sm"
              onClick={() => setSelectedVideo(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <div
                className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  {getYouTubeEmbedUrl(selectedVideo.videoLink) ? (
                    <iframe
                      src={getYouTubeEmbedUrl(selectedVideo.videoLink) || ""}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <p>Unable to load video</p>
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-gray-700">
                    {selectedVideo.description || selectedVideo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
