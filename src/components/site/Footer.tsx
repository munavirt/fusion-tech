"use client";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Column 1: Brand */}
          <div>
            <span className="font-display text-xl font-extrabold tracking-tight">
              FusionTech<span className="text-primary"> Experts</span>
            </span>
            <p className="mt-4 max-w-xs text-base text-muted-foreground">
              Intelligent home and commercial automation — designed, installed, and supported for connected spaces.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social profile"
                  className="grid size-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="size-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-base font-semibold">Explore</h3>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Solutions", href: "/solutions" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" }
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-base text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-base font-semibold">Contact</h3>
            <ul className="mt-5 space-y-3 text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-primary" strokeWidth={1.5} />
                Calicut, Kerala
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" strokeWidth={1.5} />
                <a href="tel:+919000000000" className="hover:text-primary transition-colors">
                  +91 90000 00000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" strokeWidth={1.5} />
                <a href="mailto:hello@fusiontechexpert.com" className="hover:text-primary transition-colors">
                  hello@fusiontechexpert.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} FusionTech Experts. All rights reserved.</p>
          <div className="flex gap-4">
            <span>
              Designed & Developed by{" "}
              <a href="https://promocraft.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <b>Promocraft</b>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
