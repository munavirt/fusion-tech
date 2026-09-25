"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import imgHero from "@/assets/hero-living-room.jpg";

export function ContactHero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Entrance animation
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[60vh] flex items-center py-24 lg:py-32 bg-background overflow-hidden">
      
      {/* Subtle background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={imgHero.src}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        <div ref={textRef} className="max-w-4xl opacity-0">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-[1px] h-8 bg-primary" />
            <p className="text-[11px] tracking-[0.2em] font-semibold uppercase text-muted-foreground">
              Contact
            </p>
          </div>
          
          <h1 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[1.02] font-semibold tracking-tight mb-8 text-balance text-foreground">
            Let's build<br />something<br />smarter.
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
            Tell us about your space, your requirements and what you want it to become.
          </p>
        </div>
      </div>
    </section>
  );
}