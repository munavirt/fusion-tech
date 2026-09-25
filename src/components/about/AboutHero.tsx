"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import imgHero from "@/assets/hero-living-room.jpg";

export function AboutHero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Entrance animation
      tl.fromTo(
        imageRef.current,
        { scale: 1.15, filter: "blur(10px)" },
        { scale: 1.05, filter: "blur(0px)", duration: 2.5, ease: "power2.out" }
      ).fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
        "-=1.5"
      );

      // Subtle parallax and mouse move effect
      const handleMouseMove = (e: MouseEvent) => {
        if (!imageRef.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        gsap.to(imageRef.current, {
          x,
          y,
          duration: 1.5,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/90 z-10" />
        <img
          ref={imageRef}
          src={imgHero.src}
          alt="Cinematic architectural space"
          className="w-full h-full object-cover origin-center scale-[1.05] will-change-transform"
        />
      </div>

      {/* Content in Negative Space */}
      <div className="relative z-20 flex-1 flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div ref={textRef} className="opacity-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-[1px] h-12 bg-white/40" />
            <span className="text-[11px] tracking-[0.2em] font-medium uppercase text-white/80">
              About FusionTech
            </span>
          </div>
          
          <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.95] font-semibold tracking-tight text-white max-w-4xl text-balance mix-blend-overlay">
            We make<br />technology<br />feel natural.
          </h1>
        </div>
      </div>
    </section>
  );
}
