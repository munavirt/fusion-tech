"use client";
import { Reveal } from "@/components/site/Reveal";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement Review",
    description:
      "We discuss your floor plans, architectural intentions, and daily routines to define what your space requires.",
  },
  {
    step: "02",
    title: "System Curation",
    description:
      "We evaluate matching hardware across smart switches, lighting drivers, motorized tracks, and access points.",
  },
  {
    step: "03",
    title: "Integration Blueprint",
    description:
      "We outline wiring guidelines, protocol standards, and gateway placement for seamless contractor coordination.",
  },
  {
    step: "04",
    title: "Project Scope & Next Steps",
    description:
      "You receive a clear, itemized hardware specification and deployment plan tailored to your project schedule.",
  },
];

export function WhyContact() {
  return (
    <section className="bg-background py-24 lg:py-32 border-t border-border/40">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        {/* Header */}
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase">
              OUR CONSULTATION PROCESS
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground">
              What to Expect When You Connect
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Every space has distinct architectural and operational requirements.
              Here is how we guide you from your initial inquiry to a fully
              integrated automation specification.
            </p>
          </div>
        </Reveal>

        {/* 4-Step Process Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item, idx) => (
            <Reveal key={item.step} delay={80 + idx * 50}>
              <div className="flex h-full flex-col justify-between border-t border-border/80 pt-6">
                <div>
                  <span className="font-mono text-xs font-semibold text-muted-foreground/70">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
