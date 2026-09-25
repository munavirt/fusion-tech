"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, MoonStar, Home, Info, Cpu, Layers, Mail } from "lucide-react";
import { useEnvironment } from "@/contexts/EnvironmentContext";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Info },
  { label: "Solutions", href: "/solutions", icon: Cpu },
  { label: "Projects", href: "/projects", icon: Layers },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
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
      <nav className="mx-auto flex w-[min(100%-48px,1440px)] md:w-[min(100%-96px,1440px)] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className={cn(
              "font-display font-bold tracking-tight transition-all uppercase",
              scrolled ? "text-[15px]" : "text-[17px]",
            )}
          >
            FusionTech<span className="text-primary font-bold"> Experts</span>
          </span>
        </Link>

        {/* Desktop Links with Related Icons and Bold Font */}
        <ul className="hidden items-center gap-8 lg:gap-10 md:flex">
          {links.map((l) => {
            const isActive =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={cn(
                    "group story-link text-[13px] uppercase tracking-wider font-bold transition-colors flex items-center gap-2",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <l.icon
                    className={cn(
                      "size-3.5 transition-colors shrink-0",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground/70 group-hover:text-foreground",
                    )}
                    strokeWidth={2}
                  />
                  <span>{l.label}</span>
                  {isActive && (
                    <span className="size-1 rounded-full bg-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={isTransitioning}
            onClick={() => setMode(isNight ? "day" : "night")}
            aria-label={isNight ? "Switch to light mode" : "Switch to dark mode"}
            className={cn(
              "hidden md:grid size-10 place-items-center rounded-full bg-secondary/80 text-foreground transition-all duration-300 hover:bg-secondary",
              isTransitioning && "opacity-70 pointer-events-none",
            )}
          >
            {isNight ? (
              <MoonStar className="size-5" strokeWidth={1.5} />
            ) : (
              <Sun className="size-5" strokeWidth={1.5} />
            )}
          </button>
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-7 py-3 text-[13px] uppercase tracking-wider font-bold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift md:inline-flex"
          >
            Let&apos;s Talk &rarr;
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border md:hidden"
          >
            {open ? (
              <X className="size-5" strokeWidth={1.5} />
            ) : (
              <Menu className="size-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-6 mt-3 rounded-[20px] border border-border bg-background/95 p-6 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-5">
            {links.map((l) => {
              const isActive =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-base font-bold flex items-center gap-3 transition-colors",
                      isActive ? "text-primary" : "text-foreground",
                    )}
                  >
                    <l.icon
                      className={cn(
                        "size-5 shrink-0",
                        isActive ? "text-primary" : "text-muted-foreground",
                      )}
                      strokeWidth={2}
                    />
                    <span>{l.label}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-full bg-primary px-7 py-3 text-[13px] uppercase tracking-wider font-bold text-primary-foreground"
              >
                Let&apos;s Talk &rarr;
              </Link>
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
                  "flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-2 text-[15px] font-bold text-foreground transition-all duration-300 hover:bg-secondary",
                  isTransitioning && "opacity-70 pointer-events-none",
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
