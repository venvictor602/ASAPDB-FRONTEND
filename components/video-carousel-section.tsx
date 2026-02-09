"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, Loader2, X, ArrowLeft } from "lucide-react";
import { useGetVideosQuery, type Video } from "@/lib/api/contact-api";

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

function getYouTubeThumbnail(
  videoLink: string,
  quality:
    | "maxresdefault"
    | "hqdefault"
    | "mqdefault"
    | "default" = "maxresdefault"
): string {
  const videoId = getYouTubeVideoId(videoLink);
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  }
  return "/assets/Image1.png";
}

function YouTubeThumbnail({
  videoLink,
  alt,
  className,
}: {
  videoLink: string;
  alt: string;
  className?: string;
}) {
  const videoId = getYouTubeVideoId(videoLink);
  const [currentQualityIndex, setCurrentQualityIndex] = useState(0);
  const [useFallback, setUseFallback] = useState(false);

  const fallbackOrder: Array<
    "maxresdefault" | "hqdefault" | "mqdefault" | "default"
  > = ["maxresdefault", "hqdefault", "mqdefault", "default"];

  const thumbnailSrc = useFallback
    ? "/assets/Image1.png"
    : videoId
      ? getYouTubeThumbnail(videoLink, fallbackOrder[currentQualityIndex])
      : "/assets/Image1.png";

  const handleImageError = () => {
    if (currentQualityIndex < fallbackOrder.length - 1) {
      setCurrentQualityIndex(currentQualityIndex + 1);
    } else {
      setUseFallback(true);
    }
  };

  // Use regular img tag for YouTube thumbnails to handle errors properly
  // Next.js Image optimization doesn't work well with dynamic error handling
  if (!videoId || useFallback || thumbnailSrc === "/assets/Image1.png") {
    return (
      <Image
        src="/assets/Image1.png"
        alt={alt}
        fill
        className={className}
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
      />
    );
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={thumbnailSrc}
        alt={alt}
        className={className}
        onError={handleImageError}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        loading="lazy"
      />
    </div>
  );
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
  const videos = data?.videos || [];
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    // Initialize state updates in next frame to avoid synchronous setState
    requestAnimationFrame(() => {
      onInit();
    });

    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onInit);
    };
  }, [emblaApi, onSelect, onInit]);

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(autoplay);
  }, [emblaApi]);

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
    <section className="bg-white py-[60px] sm:py-[80px] md:py-[100px] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black leading-tight mb-4">
              Watch Our Videos
            </h2>
            <p className="text-[16px] sm:text-[18px] text-gray-700 max-w-2xl">
              Learn from our expert team through detailed tutorials and case
              studies. Swipe to explore our video library.
            </p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black shadow-sm"
              aria-label="Previous videos"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all hover:bg-black hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-black shadow-sm"
              aria-label="Next videos"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrolling Cards Container */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        ) : videos.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <p className="text-gray-600 text-lg">
              No videos available at the moment.
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 sm:gap-8">
                {videos.map((card, index) => (
                  <div
                    key={`${card.id}-${index}`}
                    className="flex-[0_0_85vw] sm:flex-[0_0_45vw] lg:flex-[0_0_calc(33.333%-21.33px)] min-w-0"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group h-full flex flex-col"
                    >
                      <button
                        onClick={() => setSelectedVideo(card)}
                        className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden bg-gray-200 block cursor-pointer"
                      >
                        <YouTubeThumbnail
                          videoLink={card.videoLink}
                          alt={card.title}
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                        <h3 className="text-[20px] sm:text-[22px] font-bold text-black leading-tight line-clamp-2">
                          {card.title}
                        </h3>
                        <p className="text-[15px] sm:text-[16px] font-normal text-gray-700 leading-relaxed grow line-clamp-3">
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

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2 transition-all rounded-full ${
                    index === selectedIndex
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
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
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
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
