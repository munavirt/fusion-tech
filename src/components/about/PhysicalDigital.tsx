"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/site/Reveal";

import imgDetail1 from "@/assets/sol-smart-home.jpg";
import imgDetail2 from "@/assets/sol-security.jpg";

gsap.registerPlugin(ScrollTrigger);

export function PhysicalDigital() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray<HTMLElement>('.hardware-zoom');
      
      images.forEach((img) => {
        gsap.fromTo(img, 
          { scale: 1.2, transformOrigin: "center center" },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 lg:py-40 bg-secondary/30 text-foreground border-y border-border/50">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <div className="max-w-2xl mb-16 lg:mb-24">
            <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[1.02] font-semibold tracking-tight text-balance">
              Where technology meets space.
            </h2>
            <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-md">
              Intelligent hardware integrated seamlessly into the architectural environment.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Hardware Detail 1 */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2px] bg-muted">
              <img
                src={imgDetail1.src}
                alt="Smart Control Integration"
                className="hardware-zoom absolute inset-0 w-full h-full object-cover"
              />
              {/* Simulate UI focus */}
              <div className="absolute inset-0 border border-black/10 m-4 lg:m-8 rounded-[1px] pointer-events-none mix-blend-overlay" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <p className="text-sm font-medium uppercase tracking-widest text-foreground">
                Control Interfaces
              </p>
            </div>
          </div>

          {/* Hardware Detail 2 */}
          <div className="flex flex-col gap-6 lg:mt-32">
            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2px] bg-muted">
              <img
                src={imgDetail2.src}
                alt="Access Control Integration"
                className="hardware-zoom absolute inset-0 w-full h-full object-cover"
              />
              {/* Simulate UI focus */}
              <div className="absolute inset-0 border border-black/10 m-4 lg:m-8 rounded-[1px] pointer-events-none mix-blend-overlay" />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <p className="text-sm font-medium uppercase tracking-widest text-foreground">
                Access Systems
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
