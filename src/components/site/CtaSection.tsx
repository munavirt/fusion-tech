import { Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background py-28 lg:py-[140px]">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent blur-3xl [animation:glow-drift_16s_ease-in-out_infinite]"
      />
      <div className="relative mx-auto w-full max-w-[900px] px-6 text-center">
        <Reveal>
          <h2 className="text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.06] font-extrabold tracking-[-0.03em] text-balance">
            Ready to experience smart living?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Tell us about your space. We'll walk you through what's possible — no obligation,
            no jargon.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@fusiontechexpert.com"
              className="rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift"
            >
              Book Consultation
            </a>
            <a
              href="tel:+919000000000"
              className="inline-flex items-center gap-2 rounded-full border border-primary bg-background px-8 py-4 text-base font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
            >
              <Phone className="size-4" strokeWidth={1.6} />
              Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}