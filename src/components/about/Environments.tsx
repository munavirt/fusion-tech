"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

import imgResidential from "@/assets/proj-1.jpg";
import imgHospitality from "@/assets/proj-2.jpg";
import imgEnterprise from "@/assets/sol-commercial.jpg";

gsap.registerPlugin(ScrollTrigger);

const environments = [
  {
    id: "residential",
    label: "Residential",
    heading: "Connected technology designed around everyday living.",
    systems: ["Homes", "Villas", "Apartments"],
    image: imgResidential,
  },
  {
    id: "hospitality",
    label: "Hospitality",
    heading: "Seamless technology for better guest experiences.",
    systems: ["Hotels", "Guest environments", "Access"],
    image: imgHospitality,
  },
  {
    id: "enterprise",
    label: "Enterprise",
    heading: "Connected systems designed to support modern spaces.",
    systems: ["Commercial", "Institutional", "Warehouses"],
    image: imgEnterprise,
  }
];

export function Environments() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const matchMedia = gsap.matchMedia();

    // Desktop: Pinned crossfade sequence
    matchMedia.add("(min-width: 1024px)", () => {
      if (!containerRef.current) return;
      
      const sections = gsap.utils.toArray<HTMLElement>('.env-section');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${window.innerHeight * 2}`,
          anticipatePin: 1,
        }
      });

      // Initially show the first one, then crossfade to next
      sections.forEach((section, index) => {
        if (index === 0) return; // First is already visible

        const prevSection = sections[index - 1];
        if (!prevSection) return;
        
        // Fade out previous text, fade in new text
        tl.to(prevSection.querySelector('.env-text'), { opacity: 0, y: -20, duration: 1 }, `transition${index}`)
          .fromTo(section.querySelector('.env-text'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, `transition${index}`)
          // Crossfade image
          .to(prevSection.querySelector('.env-image'), { opacity: 0, duration: 1 }, `transition${index}`)
          .fromTo(section.querySelector('.env-image'), { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1 }, `transition${index}`);
      });
    });

    return () => matchMedia.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-background text-foreground relative lg:h-screen overflow-hidden">
      
      {/* Global Title */}
      <div className="pt-24 lg:pt-32 px-6 lg:px-12 max-w-[1440px] mx-auto w-full relative z-30 lg:absolute lg:top-0 lg:left-0 lg:right-0 pointer-events-none">
        <Reveal>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-balance">
            From home<br />to hospitality<br />to enterprise.
          </h2>
        </Reveal>
      </div>

      {/* Desktop Container (Stacked absolute elements) */}
      <div className="hidden lg:block w-full h-full relative">
        {environments.map((env, i) => (
          <div 
            key={env.id}
            className={cn(
              "env-section absolute inset-0 w-full h-full flex items-end pb-32 px-12 max-w-[1440px] mx-auto",
              i !== 0 && "pointer-events-none" // Only first is interactive before animations, but since it's just visual, it's fine
            )}
          >
            {/* Background Image Container */}
            <div className="absolute top-1/2 -translate-y-1/2 right-12 w-1/2 h-[70vh] rounded-[2px] overflow-hidden bg-secondary/30">
               <img
                  src={env.image.src}
                  alt={env.label}
                  className={cn(
                    "env-image absolute inset-0 w-full h-full object-cover origin-center",
                    i === 0 ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  )}
               />
            </div>

            {/* Text Overlay */}
            <div className={cn(
              "env-text max-w-xl relative z-10 bg-background/80 backdrop-blur-md p-8 rounded-lg border border-border shadow-sm",
              i === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}>
              <span className="text-[11px] tracking-[0.2em] font-semibold text-primary uppercase mb-4 block">
                {env.label}
              </span>
              <p className="text-2xl font-medium tracking-tight mb-6">
                {env.heading}
              </p>
              <ul className="flex flex-wrap gap-2">
                {env.systems.map((s) => (
                  <li key={s} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground uppercase tracking-wider">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Fallback (Vertical Stack) */}
      <div className="lg:hidden flex flex-col gap-24 py-16 px-6">
        {environments.map((env) => (
          <Reveal key={`mobile-${env.id}`}>
            <div className="flex flex-col gap-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-secondary/30">
                <img src={env.image.src} alt={env.label} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-primary uppercase mb-3 block">
                  {env.label}
                </span>
                <p className="text-2xl font-medium tracking-tight mb-4">
                  {env.heading}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {env.systems.map((s) => (
                    <li key={s} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground uppercase tracking-wider">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
