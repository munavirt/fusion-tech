"use client";
import { Reveal } from "@/components/site/Reveal";
import imgIntro from "@/assets/about-smart-space.jpg";

export function SolutionsIntro() {
  return (
    <section className="bg-background pt-40 pb-20 lg:pt-48 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Content */}
          <div className="w-full lg:w-[50%]">
            <Reveal>
              <p className="text-[11px] tracking-[0.2em] font-semibold text-primary uppercase mb-6">
                SOLUTIONS
              </p>
              <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-foreground mb-8 text-balance">
                Intelligent technology for connected spaces.
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
                FusionTech brings smart automation, lighting, access, security, hospitality, and intercom systems together to create connected spaces that are easier to control, more secure, and designed around everyday life.
              </p>
              
              <div className="mt-10">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-[13px] font-semibold uppercase tracking-wider text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift"
                >
                  Discuss Your Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[50%]">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[20px] border border-border/50">
                <img
                  src={imgIntro.src}
                  alt="Modern connected living space featuring integrated automation controls and ambient lighting"
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
