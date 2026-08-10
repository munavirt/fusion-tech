"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const splitText = (text: string) => {
  return text.split("").map((char, index) => (
    <span key={index} className="inline-block will-change-transform">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      const chars1 = line1Ref.current?.children || [];
      const chars2 = line2Ref.current?.children || [];
      const chars3 = line3Ref.current?.children || [];

      // Initial States
      gsap.set(eyebrowRef.current, { opacity: 0, y: 15 });
      gsap.set([chars1, chars2, chars3], {
        opacity: 0,
        y: 50,
        rotateX: -90,
        transformOrigin: "50% 50% -20px",
      });
      gsap.set(copyRef.current, { opacity: 0, y: 20 });
      gsap.set(ctaRef.current, { opacity: 0 });

      // Timeline
      // 0.20s - 0.80s: Eyebrow
      tl.to(
        eyebrowRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.2,
      );

      // Headline line 1 (Character by Character)
      tl.to(
        chars1,
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: "power3.out",
        },
        0.35,
      );

      // Headline line 2
      tl.to(
        chars2,
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: "power3.out",
        },
        0.6,
      );

      // Headline line 3
      tl.to(
        chars3,
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: "power3.out",
        },
        0.85,
      );

      // Supporting copy
      tl.to(
        copyRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        1.4,
      );

      // CTA
      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        1.9,
      );

      // Scroll Interaction
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        animation: gsap.timeline().to(videoRef.current, { scale: 1.03, ease: "none" }, 0).to(
          [
            eyebrowRef.current,
            line1Ref.current,
            line2Ref.current,
            line3Ref.current,
            copyRef.current,
            ctaRef.current,
          ],
          {
            y: -30,
            opacity: 0,
            stagger: 0.05,
            ease: "none",
          },
          0,
        ),
      });
    }, heroRef);

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(trailRefs.current, {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.02,
        ease: "power3.out",
        overwrite: "auto",
        duration: 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[100svh] min-h-[90vh] bg-white overflow-hidden flex flex-col justify-center"
    >
      {/* Cursor Trail Elements */}
      <div className="hidden md:block pointer-events-none">
        {[...Array(8)].map((_, i) => {
          const size = Math.max(4, 12 - i * 1.5);
          return (
            <div
              key={i}
              ref={(el) => {
                trailRefs.current[i] = el;
              }}
              className="fixed top-0 left-0 rounded-full bg-white mix-blend-difference z-[100]"
              style={{
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: -size / 2,
                opacity: 1 - i * 0.1,
              }}
            />
          );
        })}
      </div>

      {/* Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <video
          ref={videoRef}
          src="/hero-2-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center md:object-right"
          preload="metadata"
        />
        {/* Subtle white gradient creating a clean typography zone on the left */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[50%] bg-gradient-to-b md:bg-gradient-to-r from-white via-white/95 to-transparent md:to-transparent pointer-events-none" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full pt-16">
        <div className="w-full md:w-[42%] flex flex-col justify-center">
          {/* Eyebrow */}
          <div
            ref={eyebrowRef}
            className="text-xs md:text-sm font-medium tracking-widest text-zinc-800 mb-6 md:mb-8"
          >
            FUSION TECH
          </div>

          {/* Headline (Character-by-character GSAP animation) */}
          <h1
            className="font-instrument text-3xl md:text-4xl lg:text-5xl xl:text-[3.75rem] text-[#111111] leading-[0.9] tracking-[-0.04em] mb-8"
            style={{ perspective: "1000px" }}
          >
            <span className="block overflow-hidden pb-2 font-medium">
              <div ref={line1Ref}>{splitText("INTELLIGENCE.")}</div>
            </span>
            <span className="block overflow-hidden pb-2 font-normal">
              <div ref={line2Ref}>{splitText("BUILT INTO")}</div>
            </span>
            <span className="block overflow-hidden pb-2 font-medium">
              <div ref={line3Ref}>{splitText("YOUR SPACE.")}</div>
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            ref={copyRef}
            className="text-zinc-600 text-sm md:text-base max-w-[380px] mb-10 leading-relaxed"
          >
            Lighting, climate, security and entertainment — quietly connected around the way you
            live.
          </p>

          {/* CTA */}
          <a
            ref={ctaRef}
            href="#explore"
            className="inline-flex items-center text-xs md:text-sm font-medium text-zinc-900 group tracking-wide"
          >
            <span className="relative overflow-hidden pb-1">
              EXPLORE THE EXPERIENCE
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900 transform origin-left transition-transform duration-300 group-hover:scale-x-0" />
            </span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-yellow-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
