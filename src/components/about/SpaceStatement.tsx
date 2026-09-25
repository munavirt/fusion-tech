"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgStatement from "@/assets/sol-smart-home.jpg";
import { Reveal } from "@/components/site/Reveal";

gsap.registerPlugin(ScrollTrigger);

export function SpaceStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Image Parallax
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Floating labels subtle staggering
      if (labelsRef.current) {
        const labels = labelsRef.current.children;
        gsap.fromTo(labels, 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: labelsRef.current,
              start: "top 80%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 lg:py-48 bg-background text-foreground overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Typography */}
          <div className="lg:col-span-5 flex flex-col z-10 lg:-mr-12 relative">
            <Reveal>
              <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[1.02] font-semibold tracking-tight text-balance mix-blend-difference z-20">
                A space is more than its devices.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 lg:mt-12 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-md">
                FusionTech brings automation, lighting, access and connected technology into the environments where people live, work and stay.
              </p>
            </Reveal>
          </div>

          {/* Overlapping Image & Labels */}
          <div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] w-[100vw] lg:w-auto -mx-6 lg:mx-0">
            <div className="absolute inset-0 overflow-hidden lg:rounded-l-[2px]">
              <img
                ref={imageRef}
                src={imgStatement.src}
                alt="Intelligent architectural space"
                className="w-full h-[120%] object-cover origin-top"
              />
            </div>

            {/* Floating Labels */}
            <div 
              ref={labelsRef}
              className="absolute left-6 lg:-left-8 top-12 lg:top-24 flex flex-col gap-3 lg:gap-4 pointer-events-none mix-blend-difference"
            >
              {["AUTOMATION", "LIGHTING", "ACCESS", "CONTROL"].map((label) => (
                <div 
                  key={label}
                  className="bg-white text-black px-3 py-1.5 lg:px-4 lg:py-2 text-[10px] lg:text-[11px] font-semibold tracking-widest uppercase w-fit rounded-sm shadow-sm opacity-0"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
