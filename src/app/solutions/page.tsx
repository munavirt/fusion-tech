import { SolutionsIntro } from "@/components/solutions/SolutionsIntro";
import { ResidentialIntelligence } from "@/components/solutions/ResidentialIntelligence";
import { ExperienceEnvironment } from "@/components/solutions/ExperienceEnvironment";
import { CommercialAutomationCTA } from "@/components/solutions/CommercialAutomationCTA";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import type { Metadata } from "next";

const TITLE =
  "Solutions | Smart Home, Security & Commercial Automation | FusionTech";
const DESCRIPTION =
  "Explore FusionTech's smart home automation, security and surveillance, lighting automation, home theatre, and commercial automation solutions for connected residential and business spaces.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/solutions",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <SolutionsIntro />
        <ResidentialIntelligence />
        <ExperienceEnvironment />
        <CommercialAutomationCTA />
      </main>
      <Footer />
    </div>
  );
}
