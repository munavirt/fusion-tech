"use client";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

const columns = [
  { title: "Company", links: ["About", "Careers", "Our Process", "Blog"] },
  { title: "Quick Links", links: ["Home", "Projects", "Testimonials", "Contact"] },
  {
    title: "Solutions",
    links: ["Smart Home", "Security & CCTV", "Lighting", "Home Theatre", "Commercial"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_repeat(3,0.7fr)_1.1fr]">
          <div>
            <span className="font-display text-xl font-extrabold tracking-tight">
              FusionTech<span className="text-primary"> Expert</span>
            </span>
            <p className="mt-4 max-w-xs text-base text-muted-foreground">
              Intelligent home and commercial automation — designed, installed and supported for life.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social profile"
                  className="grid size-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-base font-semibold">{c.title}</h3>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-base text-muted-foreground transition-colors hover:text-primary">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-base font-semibold">Contact</h3>
            <ul className="mt-5 space-y-3 text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-primary" strokeWidth={1.5} />
                Level 4, Tech Boulevard, Bengaluru 560103
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" strokeWidth={1.5} />
                <a href="tel:+919000000000" className="hover:text-primary">
                  +91 90000 00000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" strokeWidth={1.5} />
                <a href="mailto:hello@fusiontechexpert.com" className="hover:text-primary">
                  hello@fusiontechexpert.com
                </a>
              </li>
            </ul>

            <form
              className="mt-7"
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                Newsletter
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-primary"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-deep"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[24px] border border-border">
          <iframe
            title="FusionTech Expert office location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.55%2C12.88%2C77.78%2C13.06&layer=mapnik"
            loading="lazy"
            className="h-[300px] w-full grayscale-[0.35]"
          />
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} FusionTech Expert. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}