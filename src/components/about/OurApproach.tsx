"use client";
import { Reveal } from "@/components/site/Reveal";
import imgApproach from "@/assets/about-approach.jpg";

export function OurApproach() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Text */}
          <div className="w-full lg:w-[50%]">
            <Reveal>
              <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase">
                Our Approach
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground">
                Designed Around the Way You Live and Work
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-xl">
                Every space is different, and every environment has its own
                requirements. FusionTech begins each project by understanding
                how a space is actually used — then selects and integrates the
                technologies that genuinely support that use.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-xl">
                Usability and reliability come first. We focus on creating
                connected, practical environments where automation feels
                natural, systems are straightforward to operate, and the
                technology stays out of the way — doing its job without
                demanding attention.
              </p>
            </Reveal>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[50%]">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={imgApproach.src}
                  alt="Smart home wall-mounted control panel displaying lighting and climate controls in a residential hallway"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
