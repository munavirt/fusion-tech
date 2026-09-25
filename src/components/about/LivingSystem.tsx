"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/Reveal";
import imgInterior from "@/assets/hero-right-image.png";

type SystemType = "LIGHT" | "ACCESS" | "CURTAINS" | "CONTROL" | "CLIMATE" | "SECURITY" | null;

const hotspots = [
  { id: "LIGHT", label: "Lighting", x: 60, y: 30 },
  { id: "ACCESS", label: "Access", x: 80, y: 70 },
  { id: "CURTAINS", label: "Curtains", x: 20, y: 40 },
  { id: "CONTROL", label: "Control", x: 45, y: 65 },
  { id: "CLIMATE", label: "Climate", x: 35, y: 25 },
  { id: "SECURITY", label: "Security", x: 70, y: 15 },
] as const;

export function LivingSystem() {
  const [active, setActive] = useState<SystemType>(null);

  return (
    <section className="py-24 lg:py-40 bg-secondary/20 text-foreground">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-balance">
              Everything should work together.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Select a system to see how it integrates into the space.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative w-full aspect-[4/5] lg:aspect-[21/9] rounded-[2px] overflow-hidden bg-muted group">
            {/* Base Image */}
            <img
              src={imgInterior.src}
              alt="Living System Environment"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            
            {/* Interactive Overlays based on active state */}
            
            {/* LIGHTING Overlay */}
            <div className={cn(
              "absolute inset-0 bg-amber-500/10 mix-blend-color-burn transition-opacity duration-1000",
              active === "LIGHT" ? "opacity-100" : "opacity-0"
            )} />
            <div className={cn(
              "absolute inset-0 bg-gradient-to-t from-transparent to-amber-200/20 mix-blend-screen transition-opacity duration-1000",
              active === "LIGHT" ? "opacity-100" : "opacity-0"
            )} />

            {/* CURTAINS Overlay */}
            <div className={cn(
              "absolute inset-y-0 left-0 w-1/4 bg-black/60 blur-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left",
              active === "CURTAINS" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            )} />
            <div className={cn(
              "absolute inset-y-0 right-0 w-1/4 bg-black/60 blur-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] origin-right",
              active === "CURTAINS" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            )} />

            {/* CLIMATE Overlay */}
            <div className={cn(
              "absolute inset-0 bg-blue-400/10 mix-blend-color-burn transition-opacity duration-1000",
              active === "CLIMATE" ? "opacity-100" : "opacity-0"
            )} />

            {/* ACCESS Overlay */}
            <div className={cn(
              "absolute inset-0 bg-black/40 transition-opacity duration-1000",
              active === "ACCESS" ? "opacity-100" : "opacity-0"
            )} />
            <div className={cn(
              "absolute bottom-0 right-[10%] w-[30%] h-[80%] bg-white/10 blur-xl transition-opacity duration-1000",
              active === "ACCESS" ? "opacity-100" : "opacity-0"
            )} />

            {/* CONTROL Overlay */}
            <div className={cn(
              "absolute inset-0 bg-black/20 transition-opacity duration-1000",
              active === "CONTROL" ? "opacity-100" : "opacity-0"
            )} />
            <div className={cn(
              "absolute top-[65%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 blur-2xl rounded-full transition-all duration-1000",
              active === "CONTROL" ? "scale-100 opacity-100" : "scale-0 opacity-0"
            )} />

            {/* SECURITY Overlay */}
            <div className={cn(
              "absolute inset-0 bg-slate-900/40 mix-blend-multiply transition-opacity duration-1000",
              active === "SECURITY" ? "opacity-100" : "opacity-0"
            )} />

            {/* Hotspots */}
            {hotspots.map((spot) => {
              const isActive = active === spot.id;
              
              return (
                <button
                  key={spot.id}
                  onClick={() => setActive(isActive ? null : spot.id)}
                  className="absolute z-20 group/spot flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  aria-label={`Toggle ${spot.label}`}
                >
                  <div className={cn(
                    "w-4 h-4 rounded-full border-2 bg-background/50 backdrop-blur-md transition-all duration-500 shadow-sm relative",
                    isActive ? "border-primary scale-125 bg-background" : "border-white/50 hover:border-white hover:scale-110"
                  )}>
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                    )}
                  </div>
                  <span className={cn(
                    "mt-2 text-[10px] uppercase tracking-widest font-semibold px-2 py-1 rounded bg-background/80 backdrop-blur-md text-foreground transition-all duration-300",
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 group-hover/spot:opacity-100 group-hover/spot:translate-y-0"
                  )}>
                    {spot.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
