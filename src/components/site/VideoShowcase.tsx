"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import {
  videoShowcaseData,
  VideoShowcaseItem,
  isVideoPopulated,
  resolveVideoThumbnail,
} from "@/data/videoShowcaseData";
import { VideoModal } from "./VideoModal";

export function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoShowcaseItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Filter populated videos (all 4 real videos in sequence)
  const videos = useMemo(
    () => videoShowcaseData.filter(isVideoPopulated),
    [],
  );
  const total = videos.length;

  // Detect reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handleSelect = useCallback(
    (index: number) => {
      if (total === 0) return;
      setActiveIndex((index + total) % total);
    },
    [total],
  );

  const openVideo = useCallback((video: VideoShowcaseItem) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  }, []);

  // Keyboard navigation when focusing the carousel
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    },
    [handlePrev, handleNext],
  );

  // Touch gesture support for mobile & tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0]?.clientX ?? null);
    setTouchDeltaX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const currentX = e.touches[0]?.clientX ?? 0;
    setTouchDeltaX(currentX - touchStartX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null) return;
    const threshold = 45; // swipe sensitivity threshold
    if (touchDeltaX > threshold) {
      handlePrev();
    } else if (touchDeltaX < -threshold) {
      handleNext();
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
  };

  if (total === 0) return null;

  const currentVideo = videos[activeIndex]!;
  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;
  const prevVideo = videos[prevIndex]!;
  const nextVideo = videos[nextIndex]!;

  return (
    <section
      id="video-showcase"
      aria-label="Gallery Fusion Tech"
      className="relative w-full bg-background py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-border/40"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Minimal Editorial Header */}
        <header className="flex items-center justify-between mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <h2 className="text-sm sm:text-base tracking-[0.24em] text-foreground uppercase font-semibold">
              Gallery Fusion Tech
            </h2>
          </div>

          {/* Minimalist Index Indicator */}
          <div
            className="flex items-center gap-3 text-xs font-mono text-muted-foreground/80 tracking-widest"
            aria-live="polite"
          >
            <span className="text-foreground font-semibold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="w-6 h-[1px] bg-border" aria-hidden="true" />
            <span>{String(total).padStart(2, "0")}</span>
          </div>
        </header>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          tabIndex={0}
          role="region"
          aria-label="Video carousel. Use left and right arrow keys to navigate."
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative outline-none focus-visible:ring-1 focus-visible:ring-primary/40 rounded-2xl"
        >
          {/* =========================================================================
              DESKTOP ASYMMETRIC 3-FRAME COMPOSITION (min-width: 1024px / lg)
              Dominant Center Video flanked by Left (shifted up) & Right (shifted down)
              ========================================================================= */}
          <div className="hidden lg:flex items-center justify-between gap-6 xl:gap-8 min-h-[460px] lg:min-h-[500px]">
            {/* LEFT SUPPORTING PREVIEW (Asymmetrically shifted upward) */}
            <div
              className={`w-[23%] xl:w-[24%] transition-all ${
                isReducedMotion ? "" : "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              } -translate-y-6 xl:-translate-y-8`}
            >
              <div
                onClick={() => handleSelect(prevIndex)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(prevIndex);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Select video ${prevIndex + 1}`}
                className="group relative w-full aspect-[16/10] rounded-[18px] xl:rounded-[22px] overflow-hidden bg-black/40 border border-border/70 hover:border-primary/50 opacity-70 hover:opacity-100 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Image
                  src={resolveVideoThumbnail(prevVideo)}
                  alt={prevVideo.ariaLabel || `Video ${prevIndex + 1} thumbnail`}
                  fill
                  unoptimized
                  sizes="(min-width: 1280px) 340px, 24vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />

                {/* Unobtrusive Center Play Control */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openVideo(prevVideo);
                    }}
                    aria-label={`Play video ${prevIndex + 1}`}
                    className="size-11 sm:size-12 rounded-full bg-black/45 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/95 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Play className="size-4 sm:size-4.5 fill-current ml-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* CENTER FEATURED VIDEO (Dominant focal point: grounded, 16:9.5) */}
            <div
              className={`w-[54%] xl:w-[52%] z-10 transition-all ${
                isReducedMotion ? "" : "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              }`}
            >
              <div
                onClick={() => openVideo(currentVideo)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openVideo(currentVideo);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Play video ${activeIndex + 1}`}
                className="group relative w-full aspect-[16/9.5] rounded-[22px] xl:rounded-[26px] overflow-hidden bg-black border border-border/80 hover:border-primary/50 shadow-[0_20px_50px_-15px_rgba(23,23,23,0.12),0_10px_30px_-10px_rgba(40,102,163,0.14)] hover:shadow-[0_25px_65px_-15px_rgba(23,23,23,0.18),0_15px_40px_-10px_rgba(40,102,163,0.22)] transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Image
                  src={resolveVideoThumbnail(currentVideo)}
                  alt={currentVideo.ariaLabel || `Featured video ${activeIndex + 1}`}
                  fill
                  priority
                  unoptimized
                  sizes="(min-width: 1280px) 760px, 52vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle scrim for play button contrast */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />

                {/* Prominent Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span
                      className="absolute size-20 sm:size-24 rounded-full bg-primary/20 scale-100 group-hover:scale-125 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <div className="size-16 sm:size-20 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground shadow-2xl">
                      <Play className="size-6 sm:size-7 fill-current ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SUPPORTING PREVIEW (Asymmetrically shifted downward) */}
            <div
              className={`w-[23%] xl:w-[24%] transition-all ${
                isReducedMotion ? "" : "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              } translate-y-6 xl:translate-y-8`}
            >
              <div
                onClick={() => handleSelect(nextIndex)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(nextIndex);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Select video ${nextIndex + 1}`}
                className="group relative w-full aspect-[16/10] rounded-[18px] xl:rounded-[22px] overflow-hidden bg-black/40 border border-border/70 hover:border-primary/50 opacity-70 hover:opacity-100 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Image
                  src={resolveVideoThumbnail(nextVideo)}
                  alt={nextVideo.ariaLabel || `Video ${nextIndex + 1} thumbnail`}
                  fill
                  unoptimized
                  sizes="(min-width: 1280px) 340px, 24vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />

                {/* Unobtrusive Center Play Control */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openVideo(nextVideo);
                    }}
                    aria-label={`Play video ${nextIndex + 1}`}
                    className="size-11 sm:size-12 rounded-full bg-black/45 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/95 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Play className="size-4 sm:size-4.5 fill-current ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              TABLET ADAPTIVE ASYMMETRIC COMPOSITION (768px - 1023px / md:flex lg:hidden)
              Prevents crowding by featuring the active video + next preview
              ========================================================================= */}
          <div className="hidden md:flex lg:hidden items-center justify-between gap-6 min-h-[420px]">
            {/* PRIMARY FEATURED VIDEO */}
            <div
              className={`w-[62%] z-10 transition-all ${
                isReducedMotion ? "" : "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              }`}
            >
              <div
                onClick={() => openVideo(currentVideo)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openVideo(currentVideo);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Play video ${activeIndex + 1}`}
                className="group relative w-full aspect-[16/10] rounded-[20px] overflow-hidden bg-black border border-border/80 hover:border-primary/50 shadow-xl transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Image
                  src={resolveVideoThumbnail(currentVideo)}
                  alt={currentVideo.ariaLabel || `Featured video ${activeIndex + 1}`}
                  fill
                  priority
                  unoptimized
                  sizes="(min-width: 768px) 60vw, 500px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-16 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Play className="size-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* SUPPORTING PREVIEW (Shifted slightly down) */}
            <div
              className={`w-[36%] transition-all ${
                isReducedMotion ? "" : "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              } translate-y-4`}
            >
              <div
                onClick={() => handleSelect(nextIndex)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect(nextIndex);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Switch to video ${nextIndex + 1}`}
                className="group relative w-full aspect-[4/3] rounded-[18px] overflow-hidden bg-black/40 border border-border/70 hover:border-primary/50 opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-300 shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Image
                  src={resolveVideoThumbnail(nextVideo)}
                  alt={nextVideo.ariaLabel || `Video ${nextIndex + 1} thumbnail`}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 36vw, 320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openVideo(nextVideo);
                    }}
                    aria-label={`Play video ${nextIndex + 1}`}
                    className="size-10 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-white/90 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 shadow-md cursor-pointer hover:scale-110 active:scale-95"
                  >
                    <Play className="size-4 fill-current ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              MOBILE TOUCH CAROUSEL (< 768px / md:hidden)
              Clean, single primary card with touch gestures & no horizontal overflow
              ========================================================================= */}
          <div className="md:hidden flex flex-col gap-4">
            <div
              onClick={() => openVideo(currentVideo)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openVideo(currentVideo);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Play video ${activeIndex + 1}`}
              className="group relative w-full aspect-[16/10] rounded-[18px] overflow-hidden bg-black border border-border shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src={resolveVideoThumbnail(currentVideo)}
                alt={currentVideo.ariaLabel || `Video ${activeIndex + 1}`}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 94vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />

              {/* Minimal Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-14 sm:size-16 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-xl active:scale-95 transition-transform">
                  <Play className="size-5 sm:size-6 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              MINIMAL NAVIGATION CONTROLS & PAGINATION
              ========================================================================= */}
          <nav
            aria-label="Video carousel controls"
            className="mt-6 sm:mt-8 lg:mt-10 flex items-center justify-center gap-6"
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous video"
              className="group size-11 sm:size-12 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-300 hover:border-primary/60 hover:bg-secondary/70 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer shadow-sm"
            >
              <ChevronLeft className="size-5 text-foreground transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            {/* Minimalist interactive pill track for all 4 videos */}
            <div
              role="tablist"
              aria-label="Video selection tabs"
              className="flex items-center gap-2 px-2 py-1.5"
            >
              {videos.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to video ${idx + 1}`}
                    onClick={() => handleSelect(idx)}
                    className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                      isActive
                        ? "w-8 h-1.5 bg-primary shadow-sm"
                        : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground/60"
                    }`}
                  />
                );
              })}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next video"
              className="group size-11 sm:size-12 rounded-full border border-border bg-background flex items-center justify-center transition-all duration-300 hover:border-primary/60 hover:bg-secondary/70 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer shadow-sm"
            >
              <ChevronRight className="size-5 text-foreground transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </nav>
        </div>
      </div>

      {/* Video Playback Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
