"use client";

import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import imgLighting from "@/assets/sol-lighting.jpg";
import imgTheatre from "@/assets/sol-theatre.jpg";

export function ExperienceEnvironment() {
  return (
    <section id="experience-environment" className="bg-background py-24 lg:py-32 border-t border-border/40 overflow-hidden">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        
        <Reveal>
          <div className="mb-20 lg:mb-24 text-center max-w-3xl mx-auto">
            <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase mb-4">
              Experience & Environment
            </p>
            <h2 className="font-display text-[clamp(2.5rem,4.5vw,3.5rem)] leading-[1.05] font-semibold tracking-tight text-foreground">
              Technology designed to shape atmosphere.
            </h2>
          </div>
        </Reveal>

        {/* Section 04: Access & Security */}
        <div className="mb-24 lg:mb-32">
          <Reveal>
            <div className="w-full aspect-[16/9] lg:aspect-[21/9] rounded-[20px] overflow-hidden border border-border/50 relative mb-12 lg:mb-16">
              <img
                src={imgLighting.src}
                alt="Luxury hallway with architectural linear lighting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 lg:bottom-12 left-6 lg:left-12 flex items-center gap-4 text-white">
                <span className="font-display text-sm tracking-widest font-semibold">04</span>
                <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-white/80">
                  Access & Security
                </span>
              </div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Reveal>
                <h3 className="font-display text-3xl leading-[1.1] font-semibold tracking-tight text-foreground mb-6">
                  Security that fits the way you live.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Protect your property with comprehensive security and connected access systems. We integrate automated gates, smart door locks, advanced CCTV monitoring, and alarm systems to provide convenient entry and complete awareness across your connected spaces.
              </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-wider font-semibold text-primary transition-all duration-300 hover:gap-3"
                >
                  Plan Your Access System
                  <ArrowUpRight className="size-4" strokeWidth={1.5} />
                </a>
              </Reveal>
            </div>
            
            <div>
              <Reveal delay={100}>
                <div className="border-l border-border/50 pl-6 lg:pl-10 h-full flex flex-col justify-center">
                  <ul className="space-y-6">
                    {[
                  "Gate Automation",
                  "Smart Door Locks",
                  "CCTV Monitoring",
                  "Alarm Systems",
                  "Access Control"
                ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-base font-medium text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Section 05: Smart Curtains */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-sm tracking-widest text-primary font-semibold">05</span>
                <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-muted-foreground">
                  Smart Curtains
                </span>
              </div>
              <h3 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] font-semibold tracking-tight text-foreground mb-6">
                Control the light. Shape the room.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Automated curtain and shading systems designed to manage daylight, privacy, and atmosphere. Our curtain automation integrates naturally with your wider smart home environment for effortless control.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                {[
                  "Curtain Automation",
                  "Tubular Motors",
                  "Expandable Tracks",
                  "Custom Tracks"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 rounded-full bg-primary/70 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-wider font-semibold text-primary transition-all duration-300 hover:gap-3"
              >
                Discuss Smart Curtains
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={100}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-border/50 bg-muted/30">
                <img
                  src={imgTheatre.src}
                  alt="Private home cinema room with tiered seating and acoustic panels"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Section 06: Irrigation */}
        <div className="mt-24 lg:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-2">
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-sm tracking-widest text-primary font-semibold">06</span>
                  <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-muted-foreground">
                    Irrigation Automation
                  </span>
                </div>
                <h3 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] font-semibold tracking-tight text-foreground mb-6">
                  Care for your landscape.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Keep gardens and outdoor spaces maintained with automated irrigation systems. Manage watering schedules and routine water control automatically, ensuring healthy landscapes with less manual effort.
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                  {[
                    "Irrigation Automation",
                    "Scheduled Watering",
                    "Automated Water Control",
                    "Outdoor Management"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 rounded-full bg-primary/70 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-wider font-semibold text-primary transition-all duration-300 hover:gap-3"
                >
                  Discuss Irrigation
                  <ArrowUpRight className="size-4" strokeWidth={1.5} />
                </a>
              </Reveal>
            </div>

            <div className="order-1 lg:order-1">
              <Reveal delay={100}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-border/50 bg-muted/30">
                  <img
                    src="https://placehold.co/1200x900/e2e8f0/64748b?text=Irrigation"
                    alt="Automated irrigation system in a landscape garden"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
