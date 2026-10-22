"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import {
  VideoShowcaseItem,
  resolveVideoPlayback,
  resolveVideoThumbnail,
} from "@/data/videoShowcaseData";

interface VideoModalProps {
  video: VideoShowcaseItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Safe handler to close and stop playback
  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  }, [onClose]);

  // Reset loading / error state whenever a new video is opened
  useEffect(() => {
    if (isOpen && video) {
      setIsLoading(true);
      setHasError(false);
    }
  }, [isOpen, video]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    // Focus close button on open
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, handleClose]);

  if (!mounted || !isOpen || !video) return null;

  const playback = resolveVideoPlayback(video);
  const thumbnail = resolveVideoThumbnail(video);
  const driveDirectViewUrl = playback.driveId
    ? `https://drive.google.com/file/d/${playback.driveId}/view`
    : video.driveUrl || video.videoUrl;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title || video.ariaLabel || "Video playback"}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      {/* Modal Container */}
      <div
        ref={modalContainerRef}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[18px] md:rounded-[24px] overflow-hidden bg-neutral-950 border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
      >
        {/* Top bar controls */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-neutral-900/90 border-b border-white/10 z-20">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <span className="size-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-white/90 truncate">
              Gallery Fusion Tech
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Open in Google Drive external link button */}
            {playback.driveId && (
              <a
                href={driveDirectViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open original video in Google Drive"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-full transition-colors"
              >
                <span>Google Drive</span>
                <ExternalLink className="size-3.5" />
              </a>
            )}

            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              aria-label="Close video (Escape)"
              className="group flex items-center justify-center size-8 sm:size-9 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer active:scale-95"
            >
              <X className="size-4.5 transition-transform duration-200 group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative w-full aspect-video sm:aspect-video bg-black flex items-center justify-center overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-neutral-950 text-white/70">
              <Loader2 className="size-8 animate-spin text-primary" />
              <p className="text-xs tracking-wider uppercase font-mono">
                Connecting video stream...
              </p>
            </div>
          )}

          {hasError ? (
            <div className="p-6 text-center flex flex-col items-center gap-3 text-white max-w-md">
              <AlertCircle className="size-10 text-amber-400" />
              <p className="text-sm font-medium">Browser frame restriction detected</p>
              <p className="text-xs text-white/70">
                Your browser privacy shields or cookies may be preventing the embedded player.
                You can view the video directly in Google Drive:
              </p>
              <a
                href={driveDirectViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-xs hover:bg-primary/90 transition-colors shadow-lg"
              >
                <span>Watch on Google Drive</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          ) : playback.type === "drive" ? (
            /* Google Drive embed player */
            <iframe
              key={playback.src}
              src={playback.src}
              title={video.title}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            />
          ) : (
            /* Direct HTML5 Video player fallback */
            <video
              ref={videoRef}
              src={playback.src}
              poster={thumbnail}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
              onLoadedData={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
              aria-label={video.ariaLabel || "Showcase video player"}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
