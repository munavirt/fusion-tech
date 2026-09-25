"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function ContactClosingCta() {
  return (
    <section className="bg-secondary/30 py-28 lg:py-36 border-t border-border/40">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase">
              START YOUR PROJECT
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground">
              Have a Project in Mind?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Discover how FusionTech applies connected systems to modern
              villas, hotels, and commercial facilities, or review our hardware
              catalog before initiating your consultation.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/solutions"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-[13px] font-semibold uppercase tracking-wider text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift"
              >
                Explore Solutions
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-[13px] font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-secondary/60"
              >
                View Projects
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
