import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Projects | Smart Home & Automation Installations | FusionTech",
  description:
    "Explore selected FusionTech projects across residential and hospitality automation, including lighting, climate control, audio-visual systems, smart access, security, and automated shading.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="text-foreground pt-32 pb-24">
      {/* SECTION 1 — PROJECTS INTRODUCTION */}
      <section className="px-6 mx-auto w-full max-w-[1280px] pt-12 pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.2em] font-semibold text-muted-foreground uppercase mb-6">
            SELECTED PROJECTS
          </p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-foreground mb-8 text-balance">
            Technology, Applied to Real Spaces.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            From private residences to hospitality environments, FusionTech integrates automation, lighting, security, climate, access, and audio-visual systems around the way each space is used.
          </p>
        </div>
      </section>

      {/* SECTION 2 — PROJECT INDEX / OVERVIEW */}
      <section className="px-6 mx-auto w-full max-w-[1280px] pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 border-t border-border pt-12">
          {projectsData.map((project, i) => (
            <Link
              key={project.id}
              href={`#${project.id}`}
              className="group flex flex-col items-start hover:opacity-80 transition-opacity"
            >
              <span className="text-[var(--color-accent-signal)] font-medium text-sm mb-4">
                0{i + 1}
              </span>
              <h2 className="font-display text-2xl font-medium tracking-tight mb-2 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-1">{project.location}</p>
              <p className="text-[11px] tracking-wider uppercase font-semibold text-muted-foreground/70">
                {project.category}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3 — SELECTED PROJECTS */}
      <section className="flex flex-col gap-32 lg:gap-48 pb-32">
        {projectsData.map((project, i) => {
          // Layout assignment based on instructions
          const isReverse = i === 1; // Project 02: Reverse composition
          const isLargeVisual = i === 2; // Project 03: Slightly different (large image, info beside/below)

          if (isLargeVisual) {
            return (
              <article key={project.id} id={project.id} className="scroll-mt-32">
                <div className="px-6 mx-auto w-full max-w-[1280px]">
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="w-full lg:w-[65%]">
                      <div className="rounded-[12px] overflow-hidden bg-secondary">
                        <img
                          src={project.image.src}
                          alt={`${project.title} in ${project.location}`}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-[35%] flex flex-col justify-center">
                      <span className="text-[var(--color-accent-signal)] font-medium text-sm mb-6">
                        0{i + 1}
                      </span>
                      <p className="text-[11px] tracking-[0.2em] font-semibold text-primary uppercase mb-4">
                        {project.category}
                      </p>
                      <h2 className="text-3xl lg:text-4xl font-display font-medium tracking-tight mb-4 text-foreground">
                        {project.title}
                      </h2>
                      <p className="text-[13px] tracking-wider font-semibold text-muted-foreground uppercase mb-8">
                        {project.location}
                      </p>
                      <div className="text-[13px] text-muted-foreground/70 uppercase tracking-widest mb-8 border-b border-border pb-6">
                        {project.systems}
                      </div>

                      <div className="space-y-8">
                        <div>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
                            Integrated Systems
                          </h3>
                          <ul className="space-y-3">
                            {project.integrated.map((system, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <span className="mt-1.5 size-1.5 rounded-full bg-primary/60 shrink-0" />
                                {system}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <p className="text-base text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4 italic">
                            {project.experience}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          }

          return (
            <article key={project.id} id={project.id} className="scroll-mt-32">
              <div className="px-6 mx-auto w-full max-w-[1280px]">
                <div
                  className={cn(
                    "flex flex-col gap-12 lg:gap-20",
                    isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  )}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-[55%]">
                    <div className="rounded-[12px] overflow-hidden bg-secondary aspect-[4/3] lg:aspect-auto lg:h-[80vh]">
                      <img
                        src={project.image.src}
                        alt={`${project.title} in ${project.location}`}
                        className="w-full h-full object-cover"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-[45%] flex flex-col justify-center">
                    <span className="text-[var(--color-accent-signal)] font-medium text-sm mb-6">
                      0{i + 1}
                    </span>
                    <p className="text-[11px] tracking-[0.2em] font-semibold text-primary uppercase mb-4">
                      {project.category}
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-display font-medium tracking-tight mb-4 text-foreground">
                      {project.title}
                    </h2>
                    <p className="text-[13px] tracking-wider font-semibold text-muted-foreground uppercase mb-8">
                      {project.location}
                    </p>
                    <div className="text-[13px] text-muted-foreground/70 uppercase tracking-widest mb-10 border-b border-border pb-6">
                      {project.systems}
                    </div>

                    <div className="space-y-10">
                      <div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
                          Integrated Systems
                        </h3>
                        <ul className="space-y-3">
                          {project.integrated.map((system, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                              <span className="mt-2 size-1.5 rounded-full bg-primary/60 shrink-0" />
                              {system}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-6 italic">
                          {project.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* SECTION 4 — CTA SECTION */}
      <section className="px-6 mx-auto w-full max-w-[1280px] pt-12 pb-24 border-t border-border text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-tight text-foreground mb-6 text-balance">
            Planning a Connected Space?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Whether it is a private residence, hospitality environment, or another connected space, talk to FusionTech about your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-[13px] uppercase tracking-wider font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brand-deep w-full sm:w-auto"
            >
              Discuss Your Project
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/solutions"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-[13px] font-semibold uppercase tracking-wider text-foreground transition-colors duration-300 hover:bg-secondary w-full sm:w-auto"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
  );
}