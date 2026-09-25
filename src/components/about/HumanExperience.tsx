"use client";

import { Reveal } from "@/components/site/Reveal";
import imgMorning from "@/assets/proj-4.jpg";
import imgArrival from "@/assets/proj-5.jpg";
import imgEvening from "@/assets/proj-6.jpg";
import { cn } from "@/lib/utils";

const experiences = [
  {
    time: "Morning",
    copy: "Curtains open silently. Natural light fills the space. A calm start.",
    image: imgMorning,
    layout: "left"
  },
  {
    time: "Arrival",
    copy: "Secure entry. A welcoming environment waiting for you.",
    image: imgArrival,
    layout: "right"
  },
  {
    time: "Evening",
    copy: "Ambient lighting. Complete privacy. A seamless end to the day.",
    image: imgEvening,
    layout: "left"
  }
];

export function HumanExperience() {
  return (
    <section className="py-24 lg:py-48 bg-background text-foreground overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        
        {/* Intro Headlines */}
        <div className="mb-24 lg:mb-40">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-muted-foreground uppercase tracking-widest font-medium mb-4 lg:mb-8">
              It's not about the technology.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(3.5rem,7vw,6.5rem)] leading-[1] font-semibold tracking-tight text-foreground">
              It's about how<br className="hidden lg:block" /> the space feels.
            </h2>
          </Reveal>
        </div>

        {/* Experience Sequence */}
        <div className="flex flex-col gap-24 lg:gap-40">
          {experiences.map((exp, i) => (
            <Reveal key={exp.time} delay={0.1}>
              <div className={cn(
                "grid lg:grid-cols-12 gap-8 lg:gap-16 items-center",
                exp.layout === "right" && "lg:[direction:rtl]"
              )}>
                {/* Image */}
                <div className="lg:col-span-8 aspect-[4/3] lg:aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-secondary/30 relative group">
                  <div className="absolute inset-0 bg-background/5 transition-colors duration-500 z-10 group-hover:bg-transparent" />
                  <img
                    src={exp.image.src}
                    alt={`${exp.time} experience`}
                    className="w-full h-full object-cover scale-[1.02] grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  />
                </div>

                {/* Text */}
                <div className="lg:col-span-4 flex flex-col justify-center [direction:ltr]">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-primary uppercase">
                      0{i + 1}
                    </span>
                    <div className="h-[1px] w-12 bg-border" />
                  </div>
                  <h3 className="font-display text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6">
                    {exp.time}
                  </h3>
                  <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-sm">
                    {exp.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
