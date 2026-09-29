"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [hoverState, setHoverState] = useState<"default" | "hover" | "view">("default");
  const [isActive, setIsActive] = useState(true);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    // Check if it's a touch device or reduced motion
    const isTouch = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || reducedMotion) {
      setIsActive(false);
      return;
    }

    if (!dotRef.current || !ringRef.current || !canvasRef.current) return;

    // Hide default cursor globally
    const style = document.createElement("style");
    style.textContent = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    const setDotX = gsap.quickTo(dotRef.current, "x", { duration: 0.05, ease: "power3.out" });
    const setDotY = gsap.quickTo(dotRef.current, "y", { duration: 0.05, ease: "power3.out" });
    const setRingX = gsap.quickTo(ringRef.current, "x", { duration: 0.35, ease: "power3.out" });
    const setRingY = gsap.quickTo(ringRef.current, "y", { duration: 0.35, ease: "power3.out" });

    // Initial position to center to prevent jumping from top left
    gsap.set(dotRef.current, { x: mouse.x, y: mouse.y });
    gsap.set(ringRef.current, { x: mouse.x, y: mouse.y });

    const particles: { x: number; y: number; vx: number; vy: number; life: number; size: number }[] = [];
    let animationFrameId: number;
    let lastTime = performance.now();
    let lastMouse = { x: mouse.x, y: mouse.y };
    
    let isFirstMove = true;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      if (isFirstMove) {
        setHasMoved(true);
        gsap.set(dotRef.current, { x: mouse.x, y: mouse.y });
        gsap.set(ringRef.current, { x: mouse.x, y: mouse.y });
        isFirstMove = false;
      } else {
        setDotX(mouse.x);
        setDotY(mouse.y);
        setRingX(mouse.x);
        setRingY(mouse.y);
      }

      const now = performance.now();
      const dt = now - lastTime;
      const dx = mouse.x - lastMouse.x;
      const dy = mouse.y - lastMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dt > 16 && dist > 4) { 
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          life: 1,
          size: Math.random() * 1.5 + 1.5,
        });
        lastTime = now;
        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || !target.closest) return;

      const isView = target.closest("[data-cursor='view'], .desktop-img-container, .mobile-article img");
      const isClickable = target.closest("a, button, input, select, textarea, [role='button'], label");
      
      if (isView) {
        setHoverState("view");
      } else if (isClickable) {
        setHoverState("hover");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const renderParticles = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 0.02; // Fade out speed
        p.x += p.vx;
        p.y += p.vy;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(40, 102, 163, ${p.life * 0.7})`;
        ctx.fill();

        let connections = 0;
        for (let j = i - 1; j >= Math.max(0, i - 6); j--) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 35 && connections < 2) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(40, 102, 163, ${p.life * 0.25 * (1 - dist / 35)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            connections++;
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderParticles);
    };

    renderParticles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  if (!isActive) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${hasMoved ? 'opacity-100' : 'opacity-0'}`}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ${
          hoverState === "default" 
            ? "size-8 border-[#2866A3]/30" 
            : hoverState === "hover" 
            ? "size-12 border-[#2866A3]/40 bg-[#2866A3]/5" 
            : "size-[72px] border-[#2866A3]/0 bg-[#2866A3]/10 backdrop-blur-[2px]"
        }`}
      />
      
      {/* Inner Dot & Label */}
      <div
        ref={dotRef}
        className={`pointer-events-none absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full transition-all duration-300 ${
          hoverState === "view"
            ? "size-[64px] bg-[#2866A3] text-white"
            : hoverState === "hover"
            ? "size-[10px] bg-[#2866A3]"
            : "size-2 bg-[#2866A3]"
        }`}
      >
        <span
          className={`text-[10px] font-semibold tracking-[0.15em] transition-all duration-300 ${
            hoverState === "view" ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          VIEW
        </span>
      </div>
    </div>
  );
}
