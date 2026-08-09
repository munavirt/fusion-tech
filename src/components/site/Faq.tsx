import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Can automation be added to an existing home?",
    a: "Yes. We design wireless and hybrid retrofit systems that work with your current wiring, so there is no re-plastering or major civil work.",
  },
  {
    q: "What happens if the internet goes down?",
    a: "All critical control runs locally on-site. The internet is only required for remote access and notifications, so lighting, climate and security continue to work normally.",
  },
  {
    q: "How long does a typical project take?",
    a: "A residential project usually takes 3–6 weeks from design sign-off, depending on scope and site readiness. Commercial timelines are planned around your fit-out schedule.",
  },
  {
    q: "Do you work with architects and interior designers?",
    a: "Regularly. Involving us at the drawing stage lets us conceal hardware, plan lighting layers and route cabling without compromising the design intent.",
  },
  {
    q: "What support do you provide after handover?",
    a: "Remote diagnostics, scene adjustments, firmware updates and on-call engineers — with 24/7 response for security-critical systems.",
  },
];

export function Faq() {
  return (
    <section className="py-24 lg:py-[120px]">
      <div className="mx-auto grid w-full max-w-[1280px] gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-sm tracking-[0.24em] text-muted-foreground uppercase">FAQ</p>
          <h2 className="mt-5 text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            Questions, answered
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="py-7 text-left font-display text-lg font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}