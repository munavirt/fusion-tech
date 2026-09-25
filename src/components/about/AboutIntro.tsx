"use client";
import { Reveal } from "@/components/site/Reveal";
import imgSmartSpace from "@/assets/about-smart-space.jpg";

export function AboutIntro() {
  return (
    <section className="bg-background pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Text */}
          <div className="w-full lg:w-[50%]">
            <Reveal>
              <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase">
                About FusionTech
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground">
                Technology That Connects Modern Spaces
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-xl">
                FusionTech provides smart automation and integrated technology
                solutions for residential, hospitality, and commercial spaces.
                We bring together lighting, security, climate, audio, and access
                systems into unified environments that respond naturally to the
                people who use them.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-xl">
                Our work centres on making technology practical and invisible —
                creating spaces where connected systems work together
                seamlessly, so the experience feels effortless rather than
                engineered.
              </p>
            </Reveal>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[50%]">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={imgSmartSpace.src}
                  alt="Modern smart home living room with integrated automation controls, warm ambient lighting, and natural materials"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
