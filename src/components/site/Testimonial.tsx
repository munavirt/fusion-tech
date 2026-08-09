import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

export function Testimonial() {
  return (
    <section className="bg-accent/50 py-24 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1000px] px-6 text-center">
        <Reveal>
          <blockquote className="font-display text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.2] font-extrabold tracking-[-0.02em] text-balance">
            “We stopped thinking about switches. The house simply understands the time of day —
            and our evenings feel completely different.”
          </blockquote>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <span className="grid size-14 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
              RM
            </span>
            <p className="text-lg font-semibold">Rohan Mehta</p>
            <p className="text-base text-muted-foreground">Private Residence · Bengaluru</p>
            <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-primary text-primary" strokeWidth={1.2} />
                ))}
              </span>
              5.0 on Google Reviews
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}