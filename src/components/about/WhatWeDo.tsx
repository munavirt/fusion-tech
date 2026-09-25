"use client";
import { Reveal } from "@/components/site/Reveal";
import imgIntegration from "@/assets/about-integration.jpg";

export function WhatWeDo() {
  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-20">
          {/* Text */}
          <div className="w-full lg:w-[50%]">
            <Reveal>
              <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase">
                What We Do
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground">
                Integrated Solutions for Smarter Environments
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-xl">
                FusionTech brings multiple technologies together into coherent,
                well-considered systems. We provide complete home automation and commercial solutions, designing connected environments where every component works as part of a larger whole.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-xl">
                Our capabilities span gate and entrance automation, intelligent lighting and smart switches, motorized curtains, and advanced climate control including AC and VRF systems. We integrate comprehensive CCTV, alarm systems, and smart door locks for security, alongside automated irrigation for outdoor spaces. From initial system design to professional installation, service, and ongoing maintenance, we ensure practical, responsive spaces for homes, hotels, and commercial properties.
              </p>
            </Reveal>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[50%]">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={imgIntegration.src}
                  alt="Modern commercial building lobby with integrated smart technology, automated lighting, and digital access controls"
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
