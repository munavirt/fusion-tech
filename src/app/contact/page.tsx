import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactIntro } from "@/components/contact/ContactIntro";
import { ContactMain } from "@/components/contact/ContactMain";
import { WhyContact } from "@/components/contact/WhyContact";
import { ContactClosingCta } from "@/components/contact/ContactClosingCta";
import type { Metadata } from "next";

const TITLE = "Contact FusionTech — Smart Automation & Consultation";
const DESCRIPTION =
  "Contact FusionTech to discuss your smart automation project, architectural lighting design, or access control requirements. Connect with our engineering team for technical consultations.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Nav />
      <main>
        <ContactIntro />
        <ContactMain />
        <WhyContact />
        <ContactClosingCta />
      </main>
      <Footer />
    </div>
  );
}