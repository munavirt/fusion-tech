"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";
import p4 from "@/assets/proj-4.jpg";
import p5 from "@/assets/proj-5.jpg";
import p6 from "@/assets/proj-6.jpg";

const projects = [
  {
    img: p1,
    name: "Skyline Penthouse",
    place: "Bandra West, Mumbai",
    systems: "Lighting · Climate · AV",
  },
  {
    img: p2,
    name: "The Arbor Hotel",
    place: "Panjim, Goa",
    systems: "Guest rooms · Lobby AV · Access",
  },
  {
    img: p3,
    name: "Villa Serein",
    place: "Whitefield, Bengaluru",
    systems: "Shading · Lighting · Security",
  },
  {
    img: p4,
    name: "Nori Dining",
    place: "Koregaon Park, Pune",
    systems: "Ambient scenes · Audio zones",
  },
  {
    img: p5,
    name: "Meridian Flagship",
    place: "Connaught Place, Delhi",
    systems: "Track lighting · CCTV",
  },
  {
    img: p6,
    name: "Corporate HQ Retrofit",
    place: "HITEC City, Hyderabad",
    systems: "Rooms · Access · Monitoring",
  },
];

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopPinRef = useRef<HTMLDivElement>(null);
  const mm = useRef<gsap.MatchMedia | null>(null);

  useEffect(() => {
    mm.current = gsap.matchMedia();

    mm.current.add("(min-width: 768px)", () => {
      if (!desktopPinRef.current) return;

      const infos = gsap.utils.toArray<HTMLElement>(".desktop-info", desktopPinRef.current);
      const containers = gsap.utils.toArray<HTMLElement>(
        ".desktop-img-container",
        desktopPinRef.current,
      );
      const images = gsap.utils.toArray<HTMLElement>(".desktop-img", desktopPinRef.current);
      const indicators = gsap.utils.toArray<HTMLElement>(
        ".desktop-indicator",
        desktopPinRef.current,
      );

      // Initial States
      gsap.set(infos, { pointerEvents: "none" });
      gsap.set(infos[0], { pointerEvents: "auto" });

      infos.forEach((info, i) => {
        const number = info.querySelector(".p-num");
        const title = info.querySelector(".p-title");
        const meta = info.querySelector(".p-meta");
        const link = info.querySelector(".p-link");

        if (i !== 0) {
          gsap.set([number, title, meta, link], { opacity: 0, y: 20 });
          gsap.set(containers[i], { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" });
          gsap.set(images[i], { scale: 1.06, filter: "blur(4px)" });
        } else {
          gsap.set([number, title, meta, link], { opacity: 1, y: 0 });
          gsap.set(containers[i], { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" });
          gsap.set(images[i], { scale: 1, filter: "blur(0px)" });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: desktopPinRef.current,
          start: "top top",
          end: `+=${projects.length * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      projects.forEach((_, i) => {
        const isLast = i === projects.length - 1;
        const nextIdx = i + 1;

        tl.addLabel(`project-${i}`);

        // Active state animations
        tl.to(indicators[i], { height: "100%", duration: 1, ease: "none" }, `project-${i}`);
        tl.to(images[i], { scale: 1.035, duration: 1, ease: "none" }, `project-${i}`);

        if (!isLast) {
          tl.addLabel(`transition-${i}`);

          // Pointer events toggle
          tl.set(infos[i], { pointerEvents: "none" }, `transition-${i}`);
          tl.set(infos[nextIdx], { pointerEvents: "auto" }, `transition-${i}`);

          // Outgoing Info
          const outNum = infos[i].querySelector(".p-num");
          const outTitle = infos[i].querySelector(".p-title");
          const outMeta = infos[i].querySelector(".p-meta");
          const outLink = infos[i].querySelector(".p-link");

          tl.to(outNum, { y: -12, opacity: 0, duration: 0.4 }, `transition-${i}`);
          tl.to(outTitle, { y: -20, opacity: 0, duration: 0.4 }, `transition-${i}+=0.05`);
          tl.to(outMeta, { y: -10, opacity: 0, duration: 0.4 }, `transition-${i}+=0.1`);
          tl.to(outLink, { y: -10, opacity: 0, duration: 0.4 }, `transition-${i}+=0.15`);

          // Outgoing Image
          tl.to(
            containers[i],
            { yPercent: -5, opacity: 0, duration: 0.8, ease: "power2.inOut" },
            `transition-${i}`,
          );

          // Incoming Info
          const inNum = infos[nextIdx].querySelector(".p-num");
          const inTitle = infos[nextIdx].querySelector(".p-title");
          const inMeta = infos[nextIdx].querySelector(".p-meta");
          const inLink = infos[nextIdx].querySelector(".p-link");

          tl.to(inNum, { y: 0, opacity: 1, duration: 0.4 }, `transition-${i}+=0.2`);
          tl.to(inTitle, { y: 0, opacity: 1, duration: 0.4 }, `transition-${i}+=0.25`);
          tl.to(inMeta, { y: 0, opacity: 1, duration: 0.4 }, `transition-${i}+=0.3`);
          tl.to(inLink, { y: 0, opacity: 1, duration: 0.4 }, `transition-${i}+=0.35`);

          // Incoming Image
          tl.to(
            containers[nextIdx],
            { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "power2.inOut" },
            `transition-${i}`,
          );
          tl.to(
            images[nextIdx],
            { scale: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.out" },
            `transition-${i}`,
          );
        }
      });
    });

    mm.current.add("(max-width: 767px)", () => {
      const mobileArticles = gsap.utils.toArray<HTMLElement>(".mobile-article", sectionRef.current);
      mobileArticles.forEach((article) => {
        gsap.fromTo(
          article,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: article,
              start: "top 85%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
        );
      });
    });

    return () => {
      mm.current?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#FFFFFF] text-[#111111] relative w-full overflow-hidden z-10"
    >
      {/* DESKTOP PINNED LAYOUT */}
      <div className="hidden md:block w-full" ref={desktopPinRef}>
        <div className="h-screen w-full flex items-center justify-between px-8 lg:px-[10vw]">
          {/* Progress Indicators */}
          <div
            className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20"
            aria-hidden="true"
          >
            {projects.map((_, i) => (
              <div key={i} className="w-[2px] h-10 rounded-full bg-gray-200 overflow-hidden">
                <div className="desktop-indicator w-full bg-[var(--color-accent-signal)] h-0"></div>
              </div>
            ))}
          </div>

          {/* Project Information */}
          <div className="w-[38%] flex flex-col justify-center h-full relative z-10 pl-10">
            <header className="absolute top-[12vh]">
              <p className="text-[11px] tracking-[0.24em] text-gray-500 uppercase mb-5 font-medium">
                Featured Projects
              </p>
              <h2 className="text-[clamp(2.25rem,3vw,3.5rem)] leading-[0.95] font-medium tracking-[-0.03em] font-display text-[#111111]">
                SPACES WE'VE
                <br />
                MADE INTELLIGENT.
              </h2>
            </header>

            <div className="relative w-full mt-[12vh] h-[360px]">
              {projects.map((p, i) => (
                <article
                  key={i}
                  className="desktop-info absolute inset-0 flex flex-col justify-center"
                >
                  <div className="p-num mb-8 flex items-center gap-4 text-xs font-medium">
                    <span className="text-[var(--color-accent-signal)]">0{i + 1}</span>
                    <div className="w-10 h-[1px] bg-gray-300"></div>
                    <span className="text-gray-400">0{projects.length}</span>
                  </div>
                  <h3 className="p-title text-4xl lg:text-5xl font-medium font-display tracking-tight mb-4 text-[#111111]">
                    {p.name}
                  </h3>
                  <div className="p-meta flex flex-col gap-1.5 text-gray-500 mb-10">
                    <p>{p.place}</p>
                    <p className="text-[13px] text-gray-400 tracking-wide uppercase">{p.systems}</p>
                  </div>
                  <a
                    href={`/projects/${p.name.toLowerCase().replace(/ /g, "-")}`}
                    className="p-link group inline-flex items-center text-xs font-semibold tracking-[0.1em] text-[#111111] uppercase w-fit relative pb-2"
                  >
                    VIEW PROJECT
                    <ArrowUpRight
                      className="ml-2 size-4 transition-transform duration-400 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                    <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#111111] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"></span>
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Project Images */}
          <div className="w-[58%] h-[75vh] relative rounded-[20px] overflow-hidden bg-gray-50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
            {projects.map((p, i) => (
              <div key={i} className="desktop-img-container absolute inset-0 overflow-hidden">
                <img
                  src={p.img.src}
                  alt={`Fusion Tech project in ${p.place}`}
                  className="desktop-img w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* MOBILE VERTICAL LAYOUT */}
      <div className="md:hidden w-full px-6 py-24">
        <header className="mb-20">
          <p className="text-[11px] tracking-[0.24em] text-gray-500 uppercase mb-4 font-medium">
            Featured Projects
          </p>
          <h2 className="text-[2.5rem] leading-[1.05] font-medium tracking-tight font-display text-[#111111]">
            SPACES WE'VE
            <br />
            MADE INTELLIGENT.
          </h2>
        </header>

        <div className="flex flex-col gap-24">
          {projects.map((p, i) => (
            <article key={i} className="mobile-article flex flex-col">
              <div className="w-full aspect-[4/5] relative rounded-[16px] overflow-hidden bg-gray-50 mb-8 shadow-sm">
                <img
                  src={p.img.src}
                  alt={`Fusion Tech project in ${p.place}`}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-medium mb-5">
                <span className="text-[var(--color-accent-signal)]">0{i + 1}</span>
                <div className="w-8 h-[1px] bg-gray-300"></div>
                <span className="text-gray-400">0{projects.length}</span>
              </div>
              <h3 className="text-3xl font-medium font-display tracking-tight mb-3 text-[#111111]">
                {p.name}
              </h3>
              <div className="flex flex-col gap-1 text-gray-500 mb-8 text-sm">
                <p>{p.place}</p>
                <p className="text-[13px] text-gray-400 uppercase tracking-wide mt-1">
                  {p.systems}
                </p>
              </div>
              <a
                href={`/projects/${p.name.toLowerCase().replace(/ /g, "-")}`}
                className="group inline-flex items-center text-xs font-semibold tracking-[0.1em] text-[#111111] uppercase w-fit relative pb-2"
              >
                VIEW PROJECT
                <ArrowUpRight className="ml-2 size-4" strokeWidth={1.5} />
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#111111] opacity-30"></span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
