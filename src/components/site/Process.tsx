import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    n: "01",
    title: "Consultation",
    copy: "Understanding your lifestyle, architectural vision, and technology requirements before proposing a single device.",
  },
  {
    n: "02",
    title: "Site Assessment",
    copy: "Detailed architectural review to ensure flawless integration of our systems into the physical space.",
  },
  {
    n: "03",
    title: "System Design",
    copy: "Comprehensive engineering, load schedules, and cable routes aligned perfectly with your architect and interior designer.",
  },
  {
    n: "04",
    title: "Installation",
    copy: "Clean, coordinated on-site execution with precision craftsmanship and zero damage to finishes.",
  },
  {
    n: "05",
    title: "Programming & Testing",
    copy: "Scenes tuned to your routines, tested room by room to ensure intuitive, flawless operation.",
  },
  {
    n: "06",
    title: "Handover & Support",
    copy: "Full commissioning, personalized training, and remote diagnostics for the life of the system.",
  },
];

export function Process() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1320px] px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-foreground">
                How we
                <br />
                work.
              </h2>
              <p className="mt-6 max-w-sm text-lg text-muted-foreground leading-relaxed">
                A meticulous process designed to integrate complex technology into premium spaces
                without compromise.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-12 lg:gap-24 lg:py-12 border-l border-border/50 pl-8 lg:pl-16">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 50}>
                <div className="group relative">
                  <div className="absolute -left-[32px] lg:-left-[64px] top-2 size-2 bg-primary rounded-full opacity-50 transition-transform duration-500 group-hover:scale-150 group-hover:opacity-100" />
                  <span className="font-display text-sm tracking-widest text-muted-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-2xl lg:text-3xl font-medium tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md text-lg text-muted-foreground leading-relaxed">
                    {s.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
