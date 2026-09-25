"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroImg from "../../assets/hero-right-1.png";

const line1 = ["Home", "Automation"];
const line2 = ["For"];
const line3 = ["Modern", "Spaces"];

const metrics = [
  { value: "12+", label: "Years of integration" },
  { value: "480", label: "Spaces automated" },
  { value: "24/7", label: "Managed support" },
];

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const frame = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from("[data-eyebrow]", { yPercent: 120, opacity: 0, duration: 1 }, 0)
        .from(
          "[data-word]",
          { yPercent: 115, duration: 1.3, stagger: 0.08 },
          0.1,
        )
        .from("[data-sub]", { y: 18, opacity: 0, duration: 1 }, 0.7)
        .from("[data-cta]", { y: 18, opacity: 0, duration: 0.9, stagger: 0.08 }, 0.85)
        .fromTo(
          "[data-frame]",
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power3.out" },
          0.2,
        )
        .fromTo(
          "[data-img]",
          { scale: 1.025 },
          { scale: 1, duration: 1.4, ease: "power3.out" },
          0.2,
        )
        .from("[data-float]", { y: 16, opacity: 0, duration: 0.9, ease: "power3.out" }, 1.2);

      // gentle continuous float + mouse parallax on the image
      // gentle continuous float on the image
      gsap.to("[data-img-wrap]", {
        yPercent: -2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const onMove = (e: PointerEvent) => {
        const el = frame.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        gsap.to("[data-img]", { x: dx * 4, y: dy * 3, duration: 1.2, ease: "power3.out" });
        gsap.to("[data-float]", { x: dx * -8, y: dy * -6, duration: 1.4, ease: "power3.out" });
      };
      window.addEventListener("pointermove", onMove);
      return () => window.removeEventListener("pointermove", onMove);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="bg-background relative isolate flex min-h-screen flex-col overflow-hidden"
    >
      {/* Mobile background image */}
      <div className="absolute inset-0 z-0 lg:hidden overflow-hidden">
        <img
          src={heroImg.src}
          alt="Minimal living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      {/* hairline grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--border) 70%, transparent) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 6) 100%",
        }}
      />

      <div className="relative mx-auto flex w-[min(100%-48px,1440px)] md:w-[min(100%-96px,1440px)] flex-1 flex-col pt-20 pb-8 lg:pt-32">
        <div className="flex flex-col-reverse lg:flex-row flex-1 items-center justify-center lg:justify-between gap-12 lg:gap-[8%] relative z-10">
          {/* copy */}
          <div className="w-full lg:w-[48%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-[10%]">
            <div className="overflow-hidden">
              <p
                data-eyebrow
                className="text-muted-foreground/80 text-[11px] font-semibold tracking-[0.2em] uppercase"
              >
                FusionTech Expert — Smart Home Automation
              </p>
            </div>

            <h1 className="font-display text-foreground mt-6 lg:mt-8 text-[clamp(2.5rem,9vw,3.5rem)] lg:text-[clamp(3rem,4.5vw,5rem)] leading-[0.92] lg:leading-[0.94] font-[700] tracking-[-0.055em] w-full">
              {[line1, line2, line3].map((words, i) => (
                <span key={i} className="block overflow-hidden py-[0.06em]">
                  <span
                    data-word
                    className={i === 2 ? "text-[#2964A0] block mx-auto lg:mx-0 whitespace-nowrap" : "block mx-auto lg:mx-0 whitespace-nowrap"}
                  >
                    {words.join(" ")}
                  </span>
                </span>
              ))}
            </h1>

            <p
              data-sub
              className="text-muted-foreground mt-8 lg:mt-12 max-w-[470px] text-[0.85rem] leading-[1.6] mx-auto lg:mx-0"
            >
              Bringing lighting, climate, security, and access together into one connected, quietly automated experience for homes, villas, and hospitality spaces.
            </p>

            <div className="mt-8 lg:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <a
                data-cta
                href="#contact"
                className="bg-foreground text-background group inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px] font-medium transition-transform duration-300 hover:-translate-y-0.5"
              >
                Book a consultation
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* image */}
          <div className="hidden lg:flex w-full lg:w-[44%] relative items-center justify-center">
            <div
              ref={frame}
              data-frame
              className="relative aspect-square w-full max-w-[540px] overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              style={{ clipPath: "inset(100% 0% 0% 0%)" }}
            >
              <div data-img-wrap className="absolute inset-[-4%] size-[108%]">
                <img
                  data-img
                  src={heroImg.src}
                  alt="Minimal living room with integrated smart lighting and motorised shades"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div
                data-float
                className="border-border/60 bg-background/95 absolute bottom-6 left-6 rounded-[3px] border px-3 py-1.5 backdrop-blur-md shadow-sm"
              >
                <span className="text-foreground flex items-center gap-2 text-[10px] tracking-[0.14em] uppercase font-medium">
                  <span className="bg-[#2964A0] size-1.5 animate-pulse rounded-full" />
                  Living room · calm scene
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* footer row */}

      </div>
    </section>
  );
}
