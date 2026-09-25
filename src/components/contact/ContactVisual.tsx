"use client";

import imgVisual from "@/assets/hero-right-1.png";

export function ContactVisual() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-[2px] overflow-hidden">
          <img
            src={imgVisual.src}
            alt="Architectural space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 lg:px-12 max-w-xl">
              <p className="text-sm text-muted-foreground mb-2">
                Every intelligent space starts with a conversation
              </p>
              <p className="text-lg text-foreground">
                We're here to help you explore what's possible for your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}