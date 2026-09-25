"use client";

import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import imgHome from "@/assets/sol-smart-home.jpg";
import imgSecurity from "@/assets/sol-security.jpg";

export function ResidentialIntelligence() {
  return (
    <section id="residential-intelligence" className="bg-secondary/20 py-24 lg:py-32 border-t border-border/40">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        
        {/* Section 01: Smart Home Automation */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
          {/* Image Block */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <div className="overflow-hidden rounded-[20px] border border-border/50">
                <img
                  src={imgHome.src}
                  alt="Modern luxury villa exterior at dusk with automated exterior lighting"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </Reveal>
          </div>
          
          {/* Text Block */}
          <div className="w-full lg:w-1/2">
            <Reveal delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-sm tracking-widest text-primary font-semibold">01</span>
                <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-muted-foreground">
                  Smart Automation
                </span>
              </div>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] font-semibold tracking-tight text-foreground mb-6">
                Control, without the complexity.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Bring everyday systems together through connected switches, smart nodes, sensors, gateways, and intelligent control interfaces. We design connected environments that provide seamless remote and mobile control over your entire property.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Smart Switches",
                  "Smart Nodes",
                  "Sensors",
                  "Remote Control",
                  "Mobile Interfaces"
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
                Discuss Smart Automation
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Section 02: Security & Surveillance */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
          {/* Image Block */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <div className="overflow-hidden rounded-[20px] border border-border/50 bg-muted/30">
                <img
                  src={imgSecurity.src}
                  alt="Modern home entrance with access control keypad and discreet camera"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </Reveal>
          </div>
          
          {/* Text Block */}
          <div className="w-full lg:w-1/2">
            <Reveal delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-sm tracking-widest text-primary font-semibold">02</span>
                <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-muted-foreground">
                  Smart Lighting
                </span>
              </div>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] font-semibold tracking-tight text-foreground mb-6">
                Light, designed around the space.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Create comfortable and visually refined environments with intelligent lighting systems. Our solutions allow you to dim, tune, and automate lighting to create scenes that match different activities and moods, giving you precise control over your everyday lighting requirements.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {[
                  "Light Automation",
                  "Dimming & Tuning",
                  "Mood Creation",
                  "Scene Control",
                  "Smart Switches"
                ].map((item, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-full border border-border text-xs font-medium uppercase tracking-wider text-muted-foreground bg-background">
                    {item}
                  </span>
                ))}
              </div>
              
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-wider font-semibold text-primary transition-all duration-300 hover:gap-3"
              >
                Talk About Lighting
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Section 03: Climate Control */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mt-24 lg:mt-32">
          {/* Image Block */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <div className="overflow-hidden rounded-[20px] border border-border/50 bg-muted/30">
                <img
                  src="https://placehold.co/1200x900/e2e8f0/64748b?text=Climate+Control"
                  alt="Modern thermostat and automated climate system"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </Reveal>
          </div>
          
          {/* Text Block */}
          <div className="w-full lg:w-1/2">
            <Reveal delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-sm tracking-widest text-primary font-semibold">03</span>
                <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-muted-foreground">
                  Climate Control
                </span>
              </div>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] font-semibold tracking-tight text-foreground mb-6">
                Comfort, shaped by routine.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Intelligent AC and VRF systems with centralized climate control. Manage the temperature of your entire property through scheduled operation and timer-based automation designed around the comfort and routine of each space.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "AC Automation",
                  "VRF System Automation",
                  "Centralized Control",
                  "Scheduled Operation"
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
                Discuss Climate Systems
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
