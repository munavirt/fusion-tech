"use client";
import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

const stats = [
  { value: 500, suffix: "+", label: "Projects" },
  { value: 12, suffix: "+", label: "Years" },
  { value: 35, suffix: "+", label: "Engineers" },
  { value: 24, suffix: "/7", label: "Support" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold tracking-tight">
      {n}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

export function Trust() {
  return (
    <section id="about" className="border-y border-border bg-secondary/60 py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <p className="text-center text-sm tracking-[0.24em] text-muted-foreground uppercase">
          Trusted Automation Partner
        </p>
        <div className="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-base text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}