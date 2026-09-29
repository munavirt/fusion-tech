"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Preloader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const diamondRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check session storage to only run once per session
    if (typeof window !== "undefined") {
      const hasSeenPreloader = sessionStorage.getItem("fusiontech-preloader-shown");
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      if (hasSeenPreloader || prefersReducedMotion) {
        setShow(false);
        return;
      }
    }

    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        sessionStorage.setItem("fusiontech-preloader-shown", "true");
        setShow(false);
      }
    });

    // Initial states setup
    gsap.set(brandRef.current, { opacity: 0, y: 10, scale: 0.98 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 5 });
    gsap.set(diamondRef.current, { opacity: 0, scale: 0.5 });
    gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(progressTextRef.current, { opacity: 0 });

    const progressObj = { value: 0 };

    tl.to(brandRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
    }, 0.0)
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    }, 0.5)
    .to(diamondRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.5)",
    }, 0.9)
    .to(progressTextRef.current, {
      opacity: 1,
      duration: 0.3,
      ease: "power1.inOut"
    }, 1.1)
    .to(progressObj, {
      value: 100,
      duration: 2.2, // 1.1s + 2.2s = 3.3s end
      ease: "power2.inOut",
      onUpdate: () => {
        setProgress(Math.round(progressObj.value));
        gsap.set(lineRef.current, { scaleX: progressObj.value / 100 });
      }
    }, 1.1)
    .to(brandRef.current, {
      color: "#2866A3",
      duration: 0.3,
      ease: "power2.out"
    }, 3.3)
    .to(containerRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut"
    }, 3.6);

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-white will-change-transform"
    >
      <div className="flex flex-col items-center max-w-sm w-full px-6 text-center">
        
        <h1 
          ref={brandRef}
          className="font-brand text-xl sm:text-2xl tracking-[0.2em] font-bold text-[#0F172A] mb-2 lowercase"
        >
          fusiontech experts
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground uppercase mb-10"
        >
          AUTOMATION &bull; TECHNOLOGY
        </p>
        
        <div 
          ref={diamondRef}
          className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-45 border border-[#2866A3] mb-10"
        />

        <div className="w-full max-w-[200px] flex flex-col items-center">
          <div className="w-full h-[1px] bg-secondary overflow-hidden mb-4">
            <div 
              ref={lineRef}
              className="w-full h-full bg-[#2866A3]"
            />
          </div>
          <div 
            ref={progressTextRef}
            className="text-[11px] font-medium tracking-widest text-[#2866A3]"
          >
            {progress}%
          </div>
        </div>

      </div>
    </div>
  );
}
