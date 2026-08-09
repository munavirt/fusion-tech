"use client";
import { useState } from "react";
import { Sunrise, Film, LockKeyhole, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const scenes = [
  {
    icon: Sunrise,
    title: "Morning",
    time: "06:45",
    steps: ["Lights gradually turn on", "Curtains open", "Coffee machine starts"],
  },
  {
    icon: Film,
    title: "Movie Night",
    time: "20:30",
    steps: ["Lights dim to 15%", "Curtains close", "TV & sound power on"],
  },
  {
    icon: LockKeyhole,
    title: "Away Mode",
    time: "09:15",
    steps: ["Doors lock", "CCTV activates", "Notifications enabled"],
  },
  {
    icon: Moon,
    title: "Good Night",
    time: "23:00",
    steps: ["All lights off", "Security armed", "AC adjusts to 24°C"],
  },
];

export function Lifestyle() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <Reveal>
          <p className="text-sm tracking-[0.24em] text-muted-foreground uppercase">Experience smart living</p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            Automation that fits your lifestyle
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Not a list of devices — a set of moments. One touch, one word, or no input at all.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {scenes.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group h-full rounded-[20px] border border-border bg-card p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full bg-accent text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="size-5" strokeWidth={1.4} />
                  </span>
                  <span className="font-display text-sm text-muted-foreground tabular-nums">{s.time}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{s.title}</h3>
                <ul className="mt-5 space-y-3">
                  {s.steps.map((step, j) => (
                    <li key={step} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                      <span
                        style={{ transitionDelay: `${j * 140}ms` }}
                        className={cn(
                          "mt-2 size-1.5 shrink-0 rounded-full transition-all duration-500",
                          active === i ? "scale-125 bg-primary" : "bg-border",
                        )}
                      />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}