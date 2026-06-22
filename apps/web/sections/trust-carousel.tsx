"use client";

import { SectionHeader } from "@/components/section-header";
import { Carousel_005 } from "@/components/ui/skiper-ui/skiper51";
import { TRUST_CAROUSEL_IMAGES } from "@/constants";

export function TrustCarousel() {
  return (
    <section className="section-padding bg-[#18140F] relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/20 to-transparent" />

      <div className="container-custom">
        <SectionHeader
          badge="Our World"
          title="Happy Clients, Dedicated Staff,"
          titleHighlight="Exceptional Results"
          description="A glimpse into the Prudent Capital world: our people, our partnerships, and the culture that drives exceptional outcomes."
        />

        <div className="flex justify-center">
          <Carousel_005
            images={TRUST_CAROUSEL_IMAGES}
            autoplay
            showPagination
            loop
          />
        </div>

        {/* Partner logos / trust badges */}
        <div className="mt-16">
          <p className="text-center text-xs text-slate-600 uppercase tracking-widest mb-8">
            Trusted by leading institutions worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40">
            {["Goldman Sachs", "JP Morgan", "BlackRock", "Vanguard", "Citadel", "Sequoia"].map((name) => (
              <div key={name} className="text-slate-400 font-display font-semibold text-sm tracking-wide">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
