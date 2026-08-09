"use client";
import { useEffect, useState } from "react";
import { Menu, X, Sun, MoonStar } from "lucide-react";
import { useEnvironment } from "@/contexts/EnvironmentContext";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { mode, setMode, isTransitioning } = useEnvironment();
  const isNight = mode === "night";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-b border-border/60 bg-background/70 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6",
      )}
    >
      <nav className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2.5">
          <span
            className={cn(
              "font-display font-extrabold tracking-tight transition-all",
              scrolled ? "text-base" : "text-lg",
            )}
          >
            FusionTech<span className="text-primary"> Expert</span>
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="story-link text-[15px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={isTransitioning}
            onClick={() => setMode(isNight ? "day" : "night")}
            aria-label={isNight ? "Switch to light mode" : "Switch to dark mode"}
            className={cn(
              "hidden md:grid size-10 place-items-center rounded-full bg-secondary/80 text-foreground transition-all duration-300 hover:bg-secondary",
              isTransitioning && "opacity-70 pointer-events-none"
            )}
          >
            {isNight ? <MoonStar className="size-5" strokeWidth={1.5} /> : <Sun className="size-5" strokeWidth={1.5} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-[15px] font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift md:inline-flex"
          >
            Get Quote
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-6 mt-3 rounded-[20px] border border-border bg-background/95 p-6 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-base text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-full bg-primary px-6 py-2.5 text-[15px] font-medium text-primary-foreground"
              >
                Get Quote
              </a>
            </li>
            <li>
              <button
                type="button"
                disabled={isTransitioning}
                onClick={() => {
                  setMode(isNight ? "day" : "night");
                  setOpen(false);
                }}
                aria-label={isNight ? "Switch to light mode" : "Switch to dark mode"}
                className={cn(
                  "flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-2 text-[15px] font-medium text-foreground transition-all duration-300 hover:bg-secondary",
                  isTransitioning && "opacity-70 pointer-events-none"
                )}
              >
                {isNight ? (
                  <>
                    <MoonStar className="size-5" strokeWidth={1.5} /> Light Mode
                  </>
                ) : (
                  <>
                    <Sun className="size-5" strokeWidth={1.5} /> Dark Mode
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}