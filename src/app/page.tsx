import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Lifestyle } from "@/components/site/Lifestyle";
import { Solutions } from "@/components/site/Solutions";
import { SmartHomeMap } from "@/components/site/SmartHomeMap";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Brands } from "@/components/site/Brands";
import { Testimonial } from "@/components/site/Testimonial";
import { Faq } from "@/components/site/Faq";
import { CtaSection } from "@/components/site/CtaSection";
import { Footer } from "@/components/site/Footer";
import { Metadata } from "next";

const TITLE = "FusionTech Expert — Smart Home & Commercial Automation";
const DESCRIPTION =
  "Intelligent home and commercial automation: lighting, security, entertainment and climate working together. Book a free consultation with FusionTech Expert.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "FusionTech Expert",
            description: DESCRIPTION,
            telephone: "+91 90000 00000",
            email: "hello@fusiontechexpert.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Level 4, Tech Boulevard",
              addressLocality: "Bengaluru",
              postalCode: "560103",
              addressCountry: "IN",
            },
            areaServed: "India",
          }),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Lifestyle />
        <Solutions />
        <SmartHomeMap />
        <Process />
        <Projects />
        <Brands />
        <Testimonial />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
