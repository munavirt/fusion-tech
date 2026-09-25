"use client";

import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin } from "lucide-react";

export function DirectContact() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30 border-t border-border/50">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="mb-12">
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-tight mb-4">
                Get in touch directly
              </h2>
              <p className="text-lg text-muted-foreground">
                Prefer to call or email? Here's how to reach us.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <a
                href="mailto:hello@fusiontechexpert.com"
                className="group p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="size-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  hello@fusiontechexpert.com
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href="tel:+919000000000"
                className="group p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="size-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  +91 90000 00000
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-6 rounded-lg border border-border bg-background">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="size-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  Level 4, Tech Boulevard<br />
                  Bengaluru 560103<br />
                  India
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}