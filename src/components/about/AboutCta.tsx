"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function AboutCta() {
  return (
    <section className="bg-background py-32 lg:py-48 text-foreground">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.95] font-semibold tracking-tight text-balance mb-8">
            Let the space<br />do more.
          </h2>
          <p className="text-xl lg:text-3xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
            Explore what connected technology can bring to your next space.
          </p>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/solutions"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-5 text-[13px] uppercase tracking-wider font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Explore Solutions
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-5 text-[13px] uppercase tracking-wider font-semibold text-foreground transition-colors duration-300 hover:bg-secondary w-full sm:w-auto"
            >
              Start a Project
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
