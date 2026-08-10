"use client";
import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import imgHome from "@/assets/sol-smart-home.jpg";
import imgSecurity from "@/assets/sol-security.jpg";
import imgLighting from "@/assets/sol-lighting.jpg";
import imgTheatre from "@/assets/sol-theatre.jpg";
import imgCommercial from "@/assets/sol-commercial.jpg";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    n: "01",
    title: "Smart Home Automation",
    copy: "One intelligent layer across lighting, climate, curtains, audio and access — controlled by app, panel or voice.",
    features: ["Scene control", "Voice & app control", "Energy insights"],
    image: imgHome,
    alt: "Modern luxury villa exterior at dusk with automated exterior lighting",
  },
  {
    n: "02",
    title: "Security & Surveillance",
    copy: "Discreet, always-on protection with intelligent alerts that tell you what matters and ignore what doesn't.",
    features: ["CCTV & NVR", "Access control", "Video door phone"],
    image: imgSecurity,
    alt: "Modern home entrance with access control keypad and discreet camera",
  },
  {
    n: "03",
    title: "Lighting Automation",
    copy: "Architectural lighting that shifts with the hour — warm evenings, focused mornings, effortless energy savings.",
    features: ["Ambient scenes", "Tunable white", "Energy saving"],
    image: imgLighting,
    alt: "Luxury hallway with architectural linear lighting",
  },
  {
    n: "04",
    title: "Home Theatre",
    copy: "Acoustically tuned cinema rooms where a single button dims the lights, closes the curtains and starts the film.",
    features: ["Immersive sound", "Calibrated projection", "One-touch control"],
    image: imgTheatre,
    alt: "Private home cinema room with tiered seating and acoustic panels",
  },
  {
    n: "05",
    title: "Commercial Automation",
    copy: "Buildings that run themselves — meeting spaces, hospitality and retail environments managed from one dashboard.",
    features: ["Conference rooms", "Hotels & restaurants", "Central monitoring"],
    image: imgCommercial,
    alt: "Modern glass-walled conference room with integrated AV display",
  },
];

export function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let ctx = gsap.context(() => {
      const totalCards = cardsRef.current.length;
      const firstCard = cardsRef.current[0];
      if (!firstCard) return;

      // 1. Initial State: First card is visible, rest are pushed down out of view
      gsap.set(firstCard, { y: "0%", scale: 1, rotation: 0, opacity: 1 });

      for (let i = 1; i < totalCards; i++) {
        const el = cardsRef.current[i];
        if (!el) continue;
        gsap.set(el, { y: "150%", scale: 1, rotation: 0, opacity: 1 });
      }

      // 2. Timeline pinning the container for the duration of the stack
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 12%",
          end: `+=${window.innerHeight * totalCards}`, // 1 screen height per card transition
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      // 3. Scrub animations building the stack
      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cardsRef.current[i];
        const nextCard = cardsRef.current[i + 1];
        const position = i;
        if (!currentCard || !nextCard) continue;

        scrollTimeline.to(
          currentCard,
          {
            scale: 0.85,
            rotation: i % 2 === 0 ? -4 : 4, // subtle alternating rotation
            opacity: 0.4,
            y: "-5%", // slightly push up to create depth
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTimeline.to(
          nextCard,
          {
            y: "0%",
            duration: 1,
            ease: "power2.inOut",
          },
          position,
        );
      }

      // Resize observer to keep scroll positions calculated accurately
      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" className="bg-secondary/50 py-24 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <Reveal>
          <p className="text-sm tracking-[0.24em] text-muted-foreground uppercase">Our solutions</p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            The technology behind the experience
          </h2>
        </Reveal>

        {/* Pinned Container wrapper */}
        <div
          className="mt-16 relative h-[80vh] min-h-[600px] w-full"
          style={{ perspective: "1200px" }}
          ref={containerRef}
        >
          {solutions.map((s, i) => (
            <article
              key={s.title}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className={cn(
                "absolute top-0 left-0 w-full h-full", // Absolute stacking
                "group grid items-center gap-8 overflow-hidden rounded-[24px] border border-border bg-card p-6 shadow-[0_10px_40px_rgba(0,0,0,0.12)] lg:grid-cols-2 lg:gap-16 lg:p-8 will-change-transform",
              )}
            >
              <div
                className={cn(
                  "h-[40vh] min-h-[260px] lg:h-full w-full overflow-hidden rounded-[20px]",
                  i % 2 === 1 && "lg:order-2",
                )}
              >
                <img
                  src={s.image.src}
                  alt={s.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="sol-image h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <div
                className={cn("flex flex-col justify-center", i % 2 === 1 && "lg:order-1 lg:pl-6")}
              >
                <span className="anim-text block font-display text-sm tracking-widest text-primary">
                  {s.n}
                </span>
                <h3 className="anim-text mt-4 text-[clamp(1.6rem,2.4vw,2.25rem)] font-bold tracking-[-0.02em]">
                  {s.title}
                </h3>
                <p className="anim-text mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>
                <ul className="anim-text mt-7 flex flex-wrap gap-2.5">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-border bg-accent/60 px-4 py-1.5 text-sm text-accent-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="anim-text mt-8 inline-flex items-center gap-2 text-base font-medium text-primary transition-all duration-300 hover:gap-3"
                >
                  Discuss this solution
                  <ArrowUpRight className="size-4" strokeWidth={1.6} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
