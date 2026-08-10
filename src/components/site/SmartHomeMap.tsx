"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import houseImg from "@/assets/house-map.jpg";

const rooms = [
  {
    key: "living",
    name: "Living Room",
    x: "26%",
    y: "66%",
    items: [
      "Voice-controlled lighting",
      "Motorized curtains",
      "Entertainment control",
      "Climate automation",
    ],
  },
  {
    key: "bedroom",
    name: "Bedroom",
    x: "24%",
    y: "28%",
    items: ["Bedside scene panels", "Blackout blinds", "Silent AC control", "Do-not-disturb mode"],
  },
  {
    key: "kitchen",
    name: "Kitchen",
    x: "45%",
    y: "52%",
    items: ["Task & under-cabinet lighting", "Smoke & gas sensors", "Appliance scheduling"],
  },
  {
    key: "garden",
    name: "Garden",
    x: "82%",
    y: "78%",
    items: ["Landscape lighting scenes", "Irrigation automation", "Perimeter cameras"],
  },
  {
    key: "garage",
    name: "Garage",
    x: "12%",
    y: "82%",
    items: ["Automated shutter", "EV charging control", "Number plate recognition"],
  },
  {
    key: "office",
    name: "Office",
    x: "70%",
    y: "34%",
    items: ["Video-call lighting presets", "Acoustic shading", "Occupancy-based climate"],
  },
];

export function SmartHomeMap() {
  const [active, setActive] = useState(0);
  const room = rooms[active]!;

  return (
    <section className="py-24 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <Reveal>
          <p className="text-sm tracking-[0.24em] text-muted-foreground uppercase">
            Explore a smart home
          </p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            Every room, working quietly in your favour
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr]">
            <div className="relative overflow-hidden rounded-[24px] border border-border bg-accent/40">
              <img
                src={houseImg.src}
                alt="Isometric cutaway illustration of a smart home"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full object-cover"
              />
              {rooms.map((r, i) => (
                <button
                  key={r.key}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-label={r.name}
                  style={{ left: r.x, top: r.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                >
                  <span
                    className={cn(
                      "flex items-center gap-2 rounded-full border py-1.5 pr-3.5 pl-1.5 text-[13px] font-medium whitespace-nowrap backdrop-blur-md transition-all duration-500",
                      active === i
                        ? "border-primary bg-primary text-primary-foreground shadow-lift"
                        : "border-border bg-background/80 text-foreground hover:border-primary/40",
                    )}
                  >
                    <span
                      className={cn(
                        "size-2.5 rounded-full transition-colors",
                        active === i ? "bg-primary-foreground" : "bg-primary",
                      )}
                    />
                    {r.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex flex-col justify-between rounded-[24px] border border-border bg-card p-8">
              <div>
                <span className="text-sm tracking-[0.2em] text-primary uppercase">
                  Selected space
                </span>
                <h3 className="mt-3 text-3xl font-bold tracking-[-0.02em]">{room.name}</h3>
                <ul className="mt-8 space-y-4">
                  {room.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[17px] text-muted-foreground"
                    >
                      <span className="mt-2.5 h-px w-6 shrink-0 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-10 text-sm text-muted-foreground">
                Hover or tap a room to see what automation looks like there.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
