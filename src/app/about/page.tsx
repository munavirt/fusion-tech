import { AboutIntro } from "@/components/about/AboutIntro";
import { WhatWeDo } from "@/components/about/WhatWeDo";
import { OurApproach } from "@/components/about/OurApproach";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import type { Metadata } from "next";

const TITLE = "About FusionTech — Smart Automation & Integrated Technology Solutions";
const DESCRIPTION =
  "FusionTech provides smart automation and integrated technology solutions for residential, hospitality, and commercial spaces. Learn about our approach to connected environments.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <AboutIntro />
        <WhatWeDo />
        <OurApproach />
      </main>
      <Footer />
    </div>
  );
}
