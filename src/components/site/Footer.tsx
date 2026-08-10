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
              Intelligent home and commercial automation — designed, installed and supported for
              life.
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
                    <a
                      href="#"
                      className="text-base text-muted-foreground transition-colors hover:text-primary"
                    >
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
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[24px] border border-border">
          <iframe
            title="FusionTech Expert office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15658.130393452633!2d75.9662484!3d11.1481464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64ee2471144f5%3A0x8692de4117c315d!2sKondotty%2C%20Kerala!5e0!3m2!1sen!2sin!4v1786307266061!5m2!1sen!2sin"
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
