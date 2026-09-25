"use client";
import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import imgGate from "@/assets/sol-gate.jpg";
import imgSecurityNew from "@/assets/sol-security-new.jpg";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    n: "01",
    title: "Gate & Access Automation",
    copy:
      "Automated gates, smart door locks and intelligent access control designed to make entrances more convenient, secure and connected.",
    features: [
      "Gate automation",
      "Smart door locks",
      "Access control",
      "Entrance automation",
    ],
    image: imgGate,
    alt:
      "Modern residential entrance with an automated gate and smart access system",
  },
  {
    n: "02",
    title: "Security & Surveillance",
    copy:
      "Integrated CCTV, security and alarm systems designed to help monitor properties, protect entrances and provide greater awareness of activity across connected spaces.",
    features: [
      "CCTV systems",
      "Security monitoring",
      "Alarm systems",
      "Property surveillance",
    ],
    image: imgSecurityNew,
    alt:
      "Modern home entrance with a discreet CCTV security camera",
  },
  {
    n: "03",
    title: "Lighting & Smart Control",
    copy:
      "Create the right atmosphere with intelligent lighting that can be dimmed, tuned and shaped into different moods and scenes. Smart switches and connected controls make it easy to manage lighting around the way each space is used.",
    features: [
      "Light automation",
      "Dimming & tuning",
      "Mood & scene creation",
      "Smart switches",
      "Connected/mobile control",
    ],
    image: { src: "https://placehold.co/1200x900/e2e8f0/64748b?text=Lighting+%26+Smart+Control" },
    alt:
      "Contemporary interior with architectural lighting and smart wall switches",
  },
  {
    n: "04",
    title: "Curtain & Climate Automation",
    copy:
      "Automated curtains and intelligent AC and VRF systems with centralized control, scheduled operation and temperature management designed around the comfort and routine of each space.",
    features: [
      "Curtain automation",
      "AC automation",
      "VRF system automation",
      "Centralized climate control",
      "Scheduled operation",
    ],
    image: { src: "https://placehold.co/1200x900/e2e8f0/64748b?text=Curtain+%26+Climate+Automation" },
    alt:
      "Luxury living room with automated curtains and climate control",
  },
  {
    n: "05",
    title: "Irrigation Automation",
    copy:
      "Keep gardens and outdoor spaces maintained with automated irrigation systems that manage watering schedules and routine water control with less manual effort.",
    features: [
      "Irrigation automation",
      "Scheduled watering",
      "Automated water control",
      "Outdoor control",
    ],
    image: { src: "https://placehold.co/1200x900/e2e8f0/64748b?text=Irrigation+Automation" },
    alt:
      "Landscaped residential garden with an automated irrigation system",
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
