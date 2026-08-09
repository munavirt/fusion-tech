import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";
import p4 from "@/assets/proj-4.jpg";
import p5 from "@/assets/proj-5.jpg";
import p6 from "@/assets/proj-6.jpg";

const projects = [
  { img: p1, name: "Skyline Penthouse", place: "Bandra West, Mumbai", systems: "Lighting · Climate · AV" },
  { img: p2, name: "The Arbor Hotel", place: "Panjim, Goa", systems: "Guest rooms · Lobby AV · Access" },
  { img: p3, name: "Villa Serein", place: "Whitefield, Bengaluru", systems: "Shading · Lighting · Security" },
  { img: p4, name: "Nori Dining", place: "Koregaon Park, Pune", systems: "Ambient scenes · Audio zones" },
  { img: p5, name: "Meridian Flagship", place: "Connaught Place, Delhi", systems: "Track lighting · CCTV" },
  { img: p6, name: "Corporate HQ Retrofit", place: "HITEC City, Hyderabad", systems: "Rooms · Access · Monitoring" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <Reveal>
          <p className="text-sm tracking-[0.24em] text-muted-foreground uppercase">Featured projects</p>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em]">
            Spaces we've made intelligent
          </h2>
        </Reveal>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90} className="break-inside-avoid">
              <article className="group relative overflow-hidden rounded-[24px] border border-border">
                <img
                  src={p.img.src}
                  alt={`${p.name}, ${p.place}`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-linear-to-t from-foreground/85 via-foreground/25 to-transparent p-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-background">{p.name}</h3>
                  <p className="mt-1 text-sm text-background/75">{p.place}</p>
                  <p className="mt-3 text-sm text-background/75">{p.systems}</p>
                  <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-background px-5 py-2 text-sm font-medium text-foreground">
                    View Project <ArrowUpRight className="size-4" strokeWidth={1.6} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}