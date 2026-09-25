import { StaticImageData } from "next/image";
import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";

export interface ProjectData {
  id: string;
  title: string;
  location: string;
  category: string;
  systems: string; // for the homepage quick view
  integrated: string[];
  description: string;
  experience: string;
  image: StaticImageData;
  gallery: StaticImageData[];
}

export const projectsData: ProjectData[] = [
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse",
    location: "Bandra West, Mumbai",
    category: "RESIDENTIAL AUTOMATION",
    systems: "Lighting · Climate · AV",
    integrated: [
      "Lighting Automation",
      "Climate Control",
      "Entertainment Systems",
      "Centralized Control",
    ],
    description:
      "A luxury penthouse in Mumbai featuring completely integrated lighting, climate, and audio-visual control for an elevated living experience.",
    experience:
      "The result is a space where technology works quietly in the background, giving residents greater comfort, security, and control without adding complexity to everyday life.",
    image: p1,
    gallery: [p1],
  },
  {
    id: "the-arbor-hotel",
    title: "The Arbor Hotel",
    location: "Panjim, Goa",
    category: "HOSPITALITY AUTOMATION",
    systems: "Guest rooms · Lobby AV · Access",
    integrated: [
      "Guest Room Automation",
      "Smart Access",
      "Lobby AV",
      "Lighting Automation",
    ],
    description:
      "A premium hospitality experience in Goa, designed with intelligent guest room automation and seamless access control.",
    experience:
      "The result is a highly efficient operational environment that provides guests with a magical, frictionless stay through intuitive room controls.",
    image: p2,
    gallery: [p2],
  },
  {
    id: "villa-serein",
    title: "Villa Serein",
    location: "Whitefield, Bengaluru",
    category: "RESIDENTIAL AUTOMATION",
    systems: "Shading · Lighting · Security",
    integrated: [
      "Motorized Curtains",
      "Lighting Automation",
      "Security Systems",
      "Smart Access",
    ],
    description:
      "An architectural villa in Bengaluru integrating natural light control with comprehensive smart security and automated shading.",
    experience:
      "The result is a secure and tranquil home that automatically adapts to the time of day, offering peace of mind and sophisticated comfort.",
    image: p3,
    gallery: [p3],
  },
];