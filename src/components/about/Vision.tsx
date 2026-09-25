"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgVision from "@/assets/hero-living-room.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Vision() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Very slow image scale
      gsap.fromTo(imageRef.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );

      // Text reveal
      if (textRef.current) {
        gsap.fromTo(textRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#071827] text-white py-32">
      {/* Background architectural image */}
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src={imgVision.src}
          alt="Architectural environment at night"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071827] via-[#071827]/40 to-[#071827]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        <div ref={textRef} className="max-w-4xl opacity-0">
          <p className="text-[11px] tracking-[0.2em] font-semibold text-white/50 uppercase mb-8 lg:mb-12">
            Looking Ahead
          </p>
          <h2 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.95] font-semibold tracking-tight text-white text-balance mb-8">
            The best technology feels invisible.
          </h2>
          <p className="text-xl lg:text-3xl text-white/70 leading-relaxed max-w-2xl font-light">
            Intelligent systems should make spaces simpler, more connected and more effortless.
          </p>
        </div>
      </div>
    </section>
  );
}
