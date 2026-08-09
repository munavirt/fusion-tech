import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Consultation", copy: "We listen to how you live or work before proposing a single device." },
  { n: "02", title: "Planning", copy: "System design, load schedules and cable routes aligned with your architect." },
  { n: "03", title: "Installation", copy: "Clean, coordinated on-site execution with zero damage to finishes." },
  { n: "04", title: "Programming", copy: "Scenes tuned to your routines, tested room by room." },
  { n: "05", title: "Testing", copy: "Full commissioning, handover and training for everyone in the space." },
  { n: "06", title: "Lifetime Support", copy: "Remote diagnostics and on-call engineers for the life of the system." },
];

export function Process() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <Reveal>
          <p className="text-sm tracking-[0.24em] text-muted-foreground uppercase">Why FusionTech</p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            A process built for precision
          </h2>
        </Reveal>

        <ol className="relative mt-16 border-l border-border pl-8 lg:pl-14">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 70} className="relative pb-12 last:pb-0">
              <span className="absolute top-1.5 -left-[calc(2rem+1px)] size-2.5 -translate-x-1/2 rounded-full bg-primary lg:-left-[calc(3.5rem+1px)]" />
              <div className="grid gap-2 lg:grid-cols-[8rem_1fr] lg:gap-10">
                <span className="font-display text-2xl font-extrabold text-primary/40">{s.n}</span>
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-2 max-w-lg text-lg text-muted-foreground">{s.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}