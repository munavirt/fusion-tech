"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";

const testimonials = [
  {
    quote:
      "We stopped thinking about switches. The house simply understands the time of day — and our evenings feel completely different.",
    name: "Rohan Mehta",
    project: "Private Residence · Bengaluru",
    source: "5.0 on Google Reviews",
    projectName: "Villa Serein",
    projectNumber: "03",
    bgImage: p3,
  },
  {
    quote:
      "[SAMPLE] The automation feels invisible yet completely transformative. It responds to our lifestyle without any complex interfaces.",
    name: "SAMPLE / DEVELOPMENT ONLY",
    project: "Penthouse · Mumbai",
    source: "Google Reviews",
    projectName: "Skyline Penthouse",
    projectNumber: "01",
    bgImage: p1,
  },
  {
    quote:
      "[SAMPLE] Everything works quietly in the background. We don't have to think about it anymore, which is the ultimate luxury.",
    name: "SAMPLE / DEVELOPMENT ONLY",
    project: "Private Estate · Goa",
    source: "Verified Client",
    projectName: "The Arbor Hotel",
    projectNumber: "02",
    bgImage: p2,
  },
];

gsap.registerPlugin(ScrollTrigger);

// Helper component for SplitText-like effect without a paid plugin
const SplitQuote = ({ text }: { text: string }) => {
  return (
    <>
      {text.split(/(\s+)/).map((segment, index) => {
        if (segment.trim() === "") {
          return <span key={index}>{segment}</span>;
        }
        return (
          <span
            key={index}
            className="inline-block overflow-hidden align-bottom pb-[0.2em] -mb-[0.2em] pt-[0.1em] -mt-[0.1em]"
          >
            <span className="quote-word inline-block">{segment}</span>
          </span>
        );
      })}
    </>
  );
};

export function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const mm = useRef<gsap.MatchMedia | null>(null);

  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (isReducedMotion) return;

    mm.current = gsap.matchMedia();

    mm.current.add("(min-width: 768px)", () => {
      if (!desktopContainerRef.current) return;

      const headerEyebrow = desktopContainerRef.current.querySelector(".header-eyebrow");
      const headerLines = gsap.utils.toArray<HTMLElement>(
        ".header-line",
        desktopContainerRef.current,
      );
      const articles = gsap.utils.toArray<HTMLElement>(
        ".desktop-article",
        desktopContainerRef.current,
      );
      const bgImages = gsap.utils.toArray<HTMLElement>(".bg-image", desktopContainerRef.current);
      const indicators = gsap.utils.toArray<HTMLElement>(
        ".desktop-indicator",
        desktopContainerRef.current,
      );

      // Initialize states: Item 0 is fully visible, others are hidden and positioned down
      gsap.set(articles, { opacity: 0, pointerEvents: "none" });
      articles.forEach((article, i) => {
        const quoteWords = gsap.utils.toArray(".quote-word", article);
        const name = article.querySelector("cite");
        const project = article.querySelector(".t-project");
        const source = article.querySelector(".t-source");
        const assoc = article.querySelector(".t-assoc");

        if (i === 0) {
          gsap.set(article, { opacity: 1, pointerEvents: "auto" });
          gsap.set(quoteWords, { yPercent: 0 });
          gsap.set([name, project, source, assoc].filter(Boolean), {
            opacity: 1,
            y: 0,
          });
          if (bgImages[0]!) gsap.set(bgImages[0]!, { opacity: 0.05 });
        } else {
          gsap.set(quoteWords, { yPercent: 110 });
          gsap.set([name, project, source, assoc].filter(Boolean), { opacity: 0, y: 35 });
          if (bgImages[i]!) gsap.set(bgImages[i]!, { opacity: 0 });
        }

        if (indicators[i]!) gsap.set(indicators[i]!, { width: "0%" });
      });

      // Autoplay Timeline setup
      const masterTl = gsap.timeline({ paused: true, repeat: -1 });

      testimonials.forEach((_, i) => {
        const nextIdx = (i + 1) % testimonials.length;

        // 1. Hold for 4.8 seconds and fill indicator
        if (indicators[i]!) {
          masterTl.to(indicators[i]!, { width: "100%", duration: 4.8, ease: "none" }, `start-${i}`);
        } else {
          masterTl.to({}, { duration: 4.8 }, `start-${i}`);
        }

        // 2. Transition
        const transitionLabel = `transition-${i}`;
        masterTl.addLabel(transitionLabel);

        const outQuoteWords = gsap.utils.toArray(".quote-word", articles[i]!);
        const outName = articles[i]!.querySelector("cite");
        const outProject = articles[i]!.querySelector(".t-project");
        const outSource = articles[i]!.querySelector(".t-source");
        const outAssoc = articles[i]!.querySelector(".t-assoc");

        // Outgoing elements
        masterTl.to(
          outQuoteWords,
          { yPercent: -110, duration: 0.6, ease: "power3.inOut", stagger: 0.015 },
          transitionLabel,
        );
        masterTl.to(
          [outName!, outProject, outSource, outAssoc].filter(Boolean),
          { opacity: 0, y: -20, duration: 0.6, ease: "power3.inOut", stagger: 0.05 },
          `${transitionLabel}+=0.2`,
        );

        if (bgImages[i]!) {
          masterTl.to(bgImages[i]!, { opacity: 0, duration: 0.8 }, transitionLabel);
        }

        // Reset indicator immediately after it goes out
        if (indicators[i]!) {
          masterTl.set(indicators[i]!, { width: "0%" }, `${transitionLabel}+=1`);
        }

        // Incoming elements setup
        const inQuoteWords = gsap.utils.toArray(".quote-word", articles[nextIdx]!);
        const inName = articles[nextIdx]!.querySelector("cite");
        const inProject = articles[nextIdx]!.querySelector(".t-project");
        const inSource = articles[nextIdx]!.querySelector(".t-source");
        const inAssoc = articles[nextIdx]!.querySelector(".t-assoc");

        masterTl.set(articles[i]!, { pointerEvents: "none" }, transitionLabel);
        masterTl.set(articles[nextIdx]!, { pointerEvents: "auto", opacity: 1 }, transitionLabel);
        masterTl.set(inQuoteWords, { yPercent: 110 }, transitionLabel);
        masterTl.set(
          [inName!, inProject, inSource, inAssoc].filter(Boolean),
          { opacity: 0, y: 20 },
          transitionLabel,
        );

        // Incoming animations
        masterTl.to(
          inQuoteWords,
          { yPercent: 0, duration: 0.8, ease: "power3.out", stagger: 0.015 },
          `${transitionLabel}+=0.3`,
        );
        masterTl.to(
          inName,
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          `${transitionLabel}+=0.45`,
        );
        masterTl.to(
          [inProject, inSource, inAssoc].filter(Boolean),
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.06 },
          `${transitionLabel}+=0.55`,
        );

        if (bgImages[nextIdx]!) {
          masterTl.to(bgImages[nextIdx]!, { opacity: 0.05, duration: 1 }, transitionLabel);
        }
      });

      // Visiblity Play/Pause Hook
      let isVisible = false;
      let hasIntroFinished = false;

      ScrollTrigger.create({
        trigger: desktopContainerRef.current,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          isVisible = true;
          if (hasIntroFinished) masterTl.play();
        },
        onLeave: () => {
          isVisible = false;
          masterTl.pause();
        },
        onEnterBack: () => {
          isVisible = true;
          if (hasIntroFinished) masterTl.play();
        },
        onLeaveBack: () => {
          isVisible = false;
          masterTl.pause();
        },
      });

      // Intro Reveal
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: desktopContainerRef.current,
          start: "top 80%",
        },
        onComplete: () => {
          hasIntroFinished = true;
          if (isVisible) masterTl.play();
        },
      });

      introTl.fromTo(
        headerEyebrow,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0,
      );
      headerLines.forEach((line, i) => {
        introTl.fromTo(
          line,
          { yPercent: 100 },
          { yPercent: 0, duration: 0.8, ease: "power3.out" },
          0.1 + i * 0.1,
        );
      });

      const fQuoteWords = gsap.utils.toArray(".quote-word", articles[0]!);
      const fName = articles[0]!.querySelector("cite");
      const fProject = articles[0]!.querySelector(".t-project");
      const fSource = articles[0]!.querySelector(".t-source");
      const fAssoc = articles[0]!.querySelector(".t-assoc");

      introTl.fromTo(
        fQuoteWords,
        { yPercent: 110 },
        { yPercent: 0, duration: 1, ease: "power3.out", stagger: 0.015 },
        0.4,
      );
      introTl.fromTo(
        fName,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.6,
      );
      introTl.fromTo(
        [fProject, fSource, fAssoc].filter(Boolean),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.06 },
        0.7,
      );

      if (bgImages[0]!) {
        introTl.fromTo(
          bgImages[0]!,
          { opacity: 0, scale: 1.05 },
          { opacity: 0.05, scale: 1, duration: 2, ease: "power2.out" },
          0.2,
        );
      }
    });

    mm.current.add("(max-width: 767px)", () => {
      const mobileArticles = gsap.utils.toArray<HTMLElement>(".mobile-article");

      gsap.fromTo(
        ".mobile-header-eyebrow",
        { y: 15, opacity: 0 },
        {
          scrollTrigger: { trigger: ".mobile-header", start: "top 85%" },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        ".mobile-header-line",
        { yPercent: 100 },
        {
          scrollTrigger: { trigger: ".mobile-header", start: "top 85%" },
          yPercent: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        },
      );

      mobileArticles.forEach((article) => {
        gsap.fromTo(
          article,
          { y: 30, opacity: 0 },
          {
            scrollTrigger: { trigger: article, start: "top 85%" },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
        );
      });
    });

    return () => {
      mm.current?.revert();
    };
  }, [isReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="bg-background text-foreground relative w-full overflow-hidden z-10"
    >
      {/* Subtle Background Memories */}
      {!isReducedMotion &&
        testimonials.map(
          (t, i) =>
            t.bgImage && (
              <div
                key={`bg-${i}`}
                className="bg-image absolute inset-0 pointer-events-none opacity-0 z-0"
              >
                <img
                  src={t.bgImage.src}
                  alt=""
                  className="w-full h-full object-cover blur-[20px] scale-105 opacity-50"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-background/70 mix-blend-lighten"></div>
              </div>
            ),
        )}

      {/* Desktop Autoplay Layout (Hidden if Reduced Motion) */}
      {!isReducedMotion && (
        <div
          className="hidden md:flex w-full flex-col justify-center px-8 lg:px-[12vw] relative z-10 py-24 lg:py-32"
          ref={desktopContainerRef}
        >
          <header className="mb-20">
            <p className="header-eyebrow text-[11px] tracking-[0.24em] text-muted-foreground uppercase mb-5 font-medium">
              Client Experiences
            </p>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] leading-[0.95] font-medium tracking-[-0.03em] font-display text-foreground">
              <div className="overflow-hidden">
                <div className="header-line">WHAT IT FEELS LIKE</div>
              </div>
              <div className="overflow-hidden">
                <div className="header-line">TO LIVE WITH IT.</div>
              </div>
            </h2>
          </header>

          <div className="relative w-full min-h-[350px]">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className={`desktop-article ${i === 0 ? "relative" : "absolute inset-0"} flex flex-col justify-center max-w-[900px] w-full h-full`}
              >
                <blockquote className="font-display text-[clamp(2.2rem,3.5vw,4.5rem)] leading-[1.05] tracking-[-0.02em] font-medium text-foreground mb-12 text-balance">
                  <SplitQuote text={`"${t.quote}"`} />
                </blockquote>

                <div className="flex items-end justify-between w-full">
                  <footer className="flex flex-col">
                    <cite className="not-italic font-medium text-lg text-foreground tracking-tight">
                      {t.name}
                    </cite>
                    <span className="t-project text-sm text-muted-foreground mt-1">{t.project}</span>
                    {t.source && (
                      <div className="t-source mt-4 flex items-center gap-2 text-[11px] font-semibold tracking-wider text-muted-foreground/70 uppercase">
                        <span className="flex text-muted-foreground/40 tracking-tighter text-[14px]">
                          ★★★★★
                        </span>
                        {t.source}
                      </div>
                    )}
                  </footer>

                  {t.projectName && (
                    <div className="t-assoc hidden lg:flex flex-col items-end text-right">
                      <span className="text-[10px] tracking-[0.2em] text-muted-foreground/70 font-medium uppercase mb-1">
                        Associated Project
                      </span>
                      <span className="text-xs font-semibold tracking-widest text-foreground uppercase">
                        PROJECT {t.projectNumber} · {t.projectName}
                      </span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {testimonials.length > 1 && (
            <div
              className="absolute right-8 lg:right-[12vw] bottom-24 flex flex-col items-end gap-4"
              aria-hidden="true"
            >
              {testimonials.map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-[10px] font-medium text-muted-foreground/70">
                    0{i + 1} / 0{testimonials.length}
                  </span>
                  <div className="w-16 h-[1px] bg-border overflow-hidden relative">
                    <div className="desktop-indicator absolute top-0 left-0 h-full bg-[var(--color-accent-signal)] w-0"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Mobile & Reduced Motion Fallback Layout */}
      <div className={cn("w-full px-6 py-24 relative z-10", !isReducedMotion && "md:hidden")}>
        <header className="mobile-header mb-16">
          <p className="mobile-header-eyebrow text-[11px] tracking-[0.24em] text-muted-foreground uppercase mb-4 font-medium">
            Client Experiences
          </p>
          <h2 className="text-[2.5rem] leading-[1.05] font-medium tracking-tight font-display text-foreground">
            <div className="overflow-hidden">
              <div className="mobile-header-line">WHAT IT FEELS LIKE</div>
            </div>
            <div className="overflow-hidden">
              <div className="mobile-header-line">TO LIVE WITH IT.</div>
            </div>
          </h2>
        </header>

        <div className="flex flex-col gap-24">
          {testimonials.map((t, i) => (
            <article key={i} className="mobile-article flex flex-col">
              <blockquote className="font-display text-[2rem] leading-[1.15] tracking-tight font-medium mb-10 text-foreground">
                <SplitQuote text={`"${t.quote}"`} />
              </blockquote>
              <footer className="flex flex-col">
                <cite className="not-italic font-medium text-lg text-foreground tracking-tight">
                  {t.name}
                </cite>
                <span className="text-sm text-muted-foreground mt-1">{t.project}</span>
                {t.source && (
                  <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold tracking-wider text-muted-foreground/70 uppercase">
                    <span className="text-muted-foreground/40 tracking-tighter text-[14px]">★★★★★</span>
                    {t.source}
                  </div>
                )}
              </footer>
              {t.projectName && (
                <div className="mt-8 pt-6 border-t border-border flex flex-col">
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground/70 font-medium uppercase mb-1">
                    Associated Project
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-foreground uppercase">
                    PROJECT {t.projectNumber} · {t.projectName}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
