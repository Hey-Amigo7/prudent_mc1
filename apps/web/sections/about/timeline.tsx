"use client";

import { SectionHeader } from "@/components/section-header";
import { TIMELINE } from "@/constants";

export function TimelineSection() {
  return (
    <section className="section-padding bg-[#0C0A08] relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/15 to-transparent" />

      <div className="container-custom">
        <SectionHeader
          badge="Our Journey"
          title="28 Years of"
          titleHighlight="Milestones"
          description="From a boutique advisory in London to a globally respected financial institution. The story of Prudent Capital."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#F07C00]/40 via-[#F07C00]/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {TIMELINE.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={event.year}
                  className={`relative flex items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`inline-block rounded-xl border border-[rgba(240,124,0,0.12)] bg-[#18140F] p-6 transition-all duration-300 hover:border-[rgba(240,124,0,0.25)] hover:shadow-lg hover:shadow-black/30 ${isLeft ? "md:ml-auto" : ""}`}
                    >
                      <span className="text-xs font-bold text-[#F07C00] tracking-widest uppercase mb-2 block">
                        {event.year}
                      </span>
                      <h3 className="text-base font-semibold text-slate-100 mb-2">{event.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 hidden md:flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#F07C00]/40 bg-[#0C0A08] shadow-[0_0_15px_rgba(240,124,0,0.25)]">
                    <div className="h-3 w-3 rounded-full bg-[#F07C00]" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
