"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ContactSuccessStateProps {
  onReset: () => void;
}

export function ContactSuccessState({ onReset }: ContactSuccessStateProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<SVGSVGElement>(null);
  const checkPathRef = useRef<SVGPathElement>(null);
  const elementsRef = useRef<SVGGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    if (reducedMotion) {
      tl.to([containerRef.current, textRef.current, btnRef.current], { opacity: 1, duration: 0.5 });
      gsap.set(checkPathRef.current, { strokeDashoffset: 0 });
      return;
    }

    gsap.set(containerRef.current, { scale: 0.9, opacity: 0 });
    gsap.set(circleRef.current, { scale: 0, opacity: 0 });
    gsap.set(documentRef.current, { y: 20, opacity: 0 });
    gsap.set(elementsRef.current?.children || [], { opacity: 0, scale: 0, transformOrigin: "center" });
    gsap.set(textRef.current, { y: 15, opacity: 0 });
    gsap.set(btnRef.current, { y: 15, opacity: 0 });

    const pathLength = checkPathRef.current?.getTotalLength() || 100;
    gsap.set(checkPathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

    tl.to(containerRef.current, { scale: 1, opacity: 1, duration: 0.6 })
      .to(circleRef.current, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.2)" }, "-=0.4")
      .to(documentRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.6")
      .to(checkPathRef.current, { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.2")
      .to(elementsRef.current?.children || [], { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: "back.out(2)" }, "-=0.4")
      .to(textRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.2")
      .to(btnRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="py-8 sm:py-12 text-center flex flex-col items-center justify-center min-h-[400px]" ref={containerRef}>
      <div className="relative mx-auto mb-10 flex size-40 sm:size-48 items-center justify-center">
        <div
          ref={circleRef}
          className="absolute inset-0 rounded-full bg-[#2866A3]/10"
        />
        
        <svg
          ref={documentRef}
          className="relative z-10 size-24 sm:size-28 drop-shadow-sm"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="12" y="6" width="40" height="52" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
          
          <line x1="20" y1="20" x2="36" y2="20" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20" y1="28" x2="44" y2="28" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20" y1="36" x2="40" y2="36" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
          
          <path
            ref={checkPathRef}
            d="M22 34L30 42L46 22"
            stroke="#2866A3"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g ref={elementsRef}>
            <circle cx="8" cy="16" r="1.5" fill="#2866A3" opacity="0.4" />
            <circle cx="56" cy="48" r="2" fill="#2866A3" opacity="0.3" />
            <circle cx="14" cy="58" r="1.5" fill="#2866A3" opacity="0.5" />
            <path d="M52 14L54 12" stroke="#2866A3" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
            <path d="M6 46L8 48" stroke="#2866A3" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
          </g>
        </svg>
      </div>

      <div ref={textRef} className="max-w-md mx-auto px-4">
        <h3 className="font-display text-2xl sm:text-[28px] font-semibold tracking-tight text-foreground">
          Inquiry Received
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          Thank you for contacting FusionTech. A member of our project advisory team
          will review your requirements and respond shortly.
        </p>
      </div>

      <button
        ref={btnRef}
        type="button"
        onClick={onReset}
        className="mt-10 group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-foreground transition-all hover:bg-secondary hover:shadow-sm"
      >
        Send Another Inquiry
        <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </button>
    </div>
  );
}
