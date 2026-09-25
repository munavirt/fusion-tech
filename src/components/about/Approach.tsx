"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: "01", title: "UNDERSTAND", copy: "Understand the space, requirements and goals." },
  { id: "02", title: "DESIGN", copy: "Plan the right connected systems for the environment." },
  { id: "03", title: "INTEGRATE", copy: "Bring the selected technologies together." },
  { id: "04", title: "DELIVER", copy: "Turn the concept into a functioning environment." }
];

export function Approach() {
  const containerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 1024px)", () => {
      if (!containerRef.current || !lineRef.current) return;

      const totalSteps = steps.length;
      
      // Progress line
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );

      // Active state for each step based on scroll position
      stepsRef.current.forEach((step, i) => {
        if (!step) return;

        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          toggleClass: "is-active",
          // When active, the CSS will handle the scaling and opacity
        });
      });
    });

    return () => matchMedia.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 lg:py-48 bg-secondary/30 text-foreground relative border-y border-border/50">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="mb-24">
          <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase">
            How we approach a space
          </p>
        </div>

        <div className="grid lg:grid-cols-[100px_1fr] gap-0 lg:gap-24 relative">
          
          {/* Vertical Progress Line (Desktop) */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-border -translate-x-1/2">
              <div
                ref={lineRef}
                className="absolute inset-0 bg-primary origin-top will-change-transform"
                style={{ transform: "scaleY(0)" }}
              />
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-16 lg:gap-32 relative">
            {steps.map((step, i) => (
              <div 
                key={step.id} 
                ref={(el) => { stepsRef.current[i] = el; }}
                className={cn(
                  "relative flex flex-col lg:flex-row gap-6 lg:gap-12 lg:items-center group transition-all duration-700 ease-out",
                  // We'll use a specific class added by ScrollTrigger for the active state
                  "lg:opacity-40 lg:scale-[0.8] lg:origin-left [&.is-active]:opacity-100 [&.is-active]:scale-100"
                )}
              >
                {/* Mobile progress indicator */}
                <div className="lg:hidden flex items-center gap-4 mb-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="flex-1 h-[1px] bg-border" />
                </div>

                {/* Desktop indicator */}
                <div className="hidden lg:block absolute -left-[calc(100px+1.5rem+1px)] top-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-[.is-active]:scale-150" />

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-baseline gap-4 lg:gap-8">
                    <span className="font-display text-sm lg:text-lg tracking-widest text-primary font-semibold">
                      {step.id}
                    </span>
                    <h3 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] font-medium tracking-tight text-foreground uppercase">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 lg:mt-6 text-lg lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-opacity duration-500 lg:opacity-0 group-[.is-active]:opacity-100">
                    {step.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
