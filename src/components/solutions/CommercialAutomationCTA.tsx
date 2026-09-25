"use client";

import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import imgCommercial from "@/assets/sol-commercial.jpg";

export function CommercialAutomationCTA() {
  return (
    <>
      <section id="commercial-automation" className="bg-secondary/30 py-24 lg:py-32 border-t border-border/40">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            
            {/* Image Block */}
            <div className="w-full lg:w-[45%]">
              <Reveal>
                <div className="overflow-hidden rounded-[20px] border border-border/50">
                  <img
                    src={imgCommercial.src}
                    alt="Modern glass-walled conference room with integrated AV display"
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </Reveal>
            </div>
            
            {/* Text Block */}
            <div className="w-full lg:w-[55%]">
              <Reveal delay={100}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-sm tracking-widest text-primary font-semibold">07</span>
                  <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-muted-foreground">
                    Hospitality Automation
                  </span>
                </div>
                <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] font-semibold tracking-tight text-foreground mb-6">
                  Seamless technology, behind every door.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Connected hospitality systems designed to improve guest comfort, simplify room access, and support efficient property operations across hotels and other guest-focused environments.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                  <ul className="space-y-3">
                    {["Hotel Locks", "Energy-Saving Switches", "RFID Cards"].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 rounded-full bg-primary/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {["Card Encoders", "Touch Panels"].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 rounded-full bg-primary/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-wider font-semibold text-primary transition-all duration-300 hover:gap-3"
                >
                  Discuss Hospitality Systems
                  <ArrowUpRight className="size-4" strokeWidth={1.5} />
                </a>
              </Reveal>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center mt-24 lg:mt-32">
            {/* Image Block */}
            <div className="w-full lg:w-[45%]">
              <Reveal>
                <div className="overflow-hidden rounded-[20px] border border-border/50">
                  <img
                    src="https://placehold.co/1200x900/e2e8f0/64748b?text=Intercom"
                    alt="Intercom and connected building solutions"
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </Reveal>
            </div>
            
            {/* Text Block */}
            <div className="w-full lg:w-[55%]">
              <Reveal delay={100}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-sm tracking-widest text-primary font-semibold">08</span>
                  <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-muted-foreground">
                    Intercom & Connected Buildings
                  </span>
                </div>
                <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] font-semibold tracking-tight text-foreground mb-6">
                  Connected from the front door in.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  IP-based villa, apartment, and building intercom systems that connect entrances, indoor monitors, outdoor stations, and networked devices for convenient communication and controlled access.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {[
                    "IP Villa Intercom",
                    "Apartment Intercom",
                    "Indoor Monitors",
                    "Outdoor Stations",
                    "Networked Systems"
                  ].map((item, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-full border border-border text-xs font-medium uppercase tracking-wider text-muted-foreground bg-background">
                      {item}
                    </span>
                  ))}
                </div>
                
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-wider font-semibold text-primary transition-all duration-300 hover:gap-3"
                >
                  Discuss Intercom Solutions
                  <ArrowUpRight className="size-4" strokeWidth={1.5} />
                </a>
              </Reveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="bg-[#071827] py-32 lg:py-48 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 text-center relative z-10">
          <Reveal>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-balance mb-8">
              Let’s Build a More Intelligent Space
            </h2>
            <p className="text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto font-light mb-12">
              Whether you are planning a smart home, upgrading security, designing a private theatre, or developing a connected commercial environment, FusionTech can help you explore the right technology and integration approach for your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-5 text-[13px] uppercase tracking-wider font-semibold text-[#071827] transition-transform duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Start a Conversation
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-5 text-[13px] uppercase tracking-wider font-semibold text-white transition-colors duration-300 hover:bg-white/10 w-full sm:w-auto"
              >
                View Projects
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
