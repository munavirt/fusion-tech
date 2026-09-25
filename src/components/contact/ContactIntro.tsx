"use client";
import { Reveal } from "@/components/site/Reveal";
import imgConsultation from "@/assets/sol-commercial.jpg";

export function ContactIntro() {
  return (
    <section className="bg-background pt-40 pb-16 lg:pt-48 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Left Column: Heading & Introduction */}
          <div className="w-full lg:w-[52%]">
            <Reveal>
              <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase">
                GET IN TOUCH
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-foreground">
                Let&apos;s Build a Smarter Space
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-muted-foreground max-w-xl">
                Whether you are planning a new residence, modernizing commercial
                offices, outfitting a hospitality property, or seeking technical
                guidance on automation hardware, FusionTech is here to assist.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-xl">
                Reach out to discuss your project requirements, request product
                specifications, or schedule an in-depth technical consultation
                with our systems integration team.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Normal Supporting Visual */}
          <div className="w-full lg:w-[48%]">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[20px] border border-border/60 bg-secondary/20 shadow-soft">
                <img
                  src={imgConsultation.src}
                  alt="Modern commercial conference space with integrated technology for client consultations"
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
