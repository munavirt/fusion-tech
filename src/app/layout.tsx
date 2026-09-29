import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import "@/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fusiontechexpert.in"),
  title: "FusionTech Experts | Automation & Technology",
  description: "Intelligent home and commercial automation — designed, installed, and supported for connected spaces.",
  authors: [{ name: "FusionTech Experts" }],
  openGraph: {
    type: "website",
    siteName: "FusionTech Experts",
    url: "https://fusiontechexpert.in",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600&family=Ubuntu:wght@700&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          .font-brand {
            font-family: 'Ubuntu', sans-serif !important;
            font-weight: 700 !important;
          }
        `}} />
      </head>
      <body>
        <Preloader />
        <Providers>{children}</Providers>
        <CustomCursor />
      </body>
    </html>
  );
}
