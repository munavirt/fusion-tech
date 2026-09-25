"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/site/Reveal";

import imgAutomation from "@/assets/sol-smart-home.jpg";
import imgLighting from "@/assets/sol-lighting.jpg";
import imgAccess from "@/assets/sol-security.jpg";
import imgCurtains from "@/assets/sol-theatre.jpg";
import imgHospitality from "@/assets/proj-2.jpg";
import imgIntercom from "@/assets/proj-1.jpg";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const ecosystemStages = [
  {
    title: "Smart Automation",
    copy: "Connected control for everyday environments.",
    image: imgAutomation,
    // Variations in layout
    layout: "text-left-image-right", 
  },
  {
    title: "Lighting",
    copy: "Light designed around atmosphere and architecture.",
    image: imgLighting,
    layout: "image-top-text-bottom",
  },
  {
    title: "Access",
    copy: "Connected entry and intelligent security.",
    image: imgAccess,
    layout: "text-right-image-left",
  },
  {
    title: "Curtains",
    copy: "Natural light management that moves silently.",
    image: imgCurtains,
    layout: "image-full-text-overlay",
  },
  {
    title: "Hospitality",
    copy: "Elevated control for premium guest experiences.",
    image: imgHospitality,
    layout: "text-left-image-right",
  },
  {
    title: "Intercom",
    copy: "Seamless communication across the entire property.",
    image: imgIntercom,
    layout: "image-top-text-bottom",
  }
];

export function EcosystemStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply horizontal scroll on desktop
    const matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 1024px)", () => {
      if (!trackRef.current || !sectionRef.current) return;

      const track = trackRef.current;
      const totalWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalWidth}`,
          anticipatePin: 1,
        }
      });
    });

    return () => matchMedia.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background text-foreground overflow-hidden py-24 lg:py-0">
      
      {/* Mobile Title (Hidden on Desktop) */}
      <div className="lg:hidden px-6 mb-16">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight">
            One system.<br />Many possibilities.
          </h2>
        </Reveal>
      </div>

      {/* Horizontal Track */}
      <div 
        ref={trackRef} 
        className="flex flex-col lg:flex-row lg:h-screen lg:items-center w-full lg:w-max gap-32 lg:gap-0"
      >
        
        {/* Intro Slide (Desktop only) */}
        <div className="hidden lg:flex w-screen h-full items-center justify-center shrink-0 px-12">
          <Reveal>
            <h2 className="font-display text-[6rem] leading-[1] font-semibold tracking-tight max-w-4xl text-balance">
              One system.<br />Many possibilities.
            </h2>
          </Reveal>
        </div>

        {/* Story Stages */}
        {ecosystemStages.map((stage, i) => (
          <div 
            key={stage.title} 
            className="w-full lg:w-[80vw] xl:w-[70vw] h-auto lg:h-[80vh] shrink-0 px-6 lg:px-12 xl:px-24 flex flex-col justify-center"
          >
            <div className={cn(
              "grid gap-8 lg:gap-16 items-center h-full",
              stage.layout === "text-left-image-right" && "lg:grid-cols-2",
              stage.layout === "text-right-image-left" && "lg:grid-cols-2 lg:[direction:rtl]",
              stage.layout === "image-top-text-bottom" && "grid-rows-[auto_1fr] lg:grid-rows-[1fr_auto]",
              stage.layout === "image-full-text-overlay" && "relative grid-cols-1"
            )}>
              
              {/* Text Block */}
              <div className={cn(
                "flex flex-col justify-center [direction:ltr] z-10",
                stage.layout === "image-full-text-overlay" && "absolute inset-0 p-8 lg:p-16 justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent text-white rounded-[2px]",
                stage.layout === "image-top-text-bottom" && "order-2"
              )}>
                <span className={cn(
                  "text-[10px] tracking-[0.2em] font-semibold uppercase mb-4",
                  stage.layout === "image-full-text-overlay" ? "text-white/80" : "text-primary"
                )}>
                  0{i + 1}
                </span>
                <h3 className={cn(
                  "font-display text-4xl lg:text-6xl font-medium tracking-tight mb-6",
                  stage.layout === "image-full-text-overlay" ? "text-white" : "text-foreground"
                )}>
                  {stage.title}
                </h3>
                <p className={cn(
                  "text-lg lg:text-xl leading-relaxed max-w-md",
                  stage.layout === "image-full-text-overlay" ? "text-white/80" : "text-muted-foreground"
                )}>
                  {stage.copy}
                </p>
              </div>

              {/* Image Block */}
              <div className={cn(
                "relative overflow-hidden rounded-[2px] bg-secondary/30",
                stage.layout === "text-left-image-right" && "aspect-[4/5] lg:aspect-auto lg:h-[70vh]",
                stage.layout === "text-right-image-left" && "aspect-[4/5] lg:aspect-auto lg:h-[70vh]",
                stage.layout === "image-top-text-bottom" && "aspect-video order-1 lg:h-[50vh]",
                stage.layout === "image-full-text-overlay" && "aspect-square lg:aspect-video lg:h-[70vh]"
              )}>
                <img
                  src={stage.image.src}
                  alt={stage.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        ))}
        
        {/* End padding for track */}
        <div className="hidden lg:block w-[20vw] shrink-0" />
      </div>

    </section>
  );
}
