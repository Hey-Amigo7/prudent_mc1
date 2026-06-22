"use client";

import { Award, Shield, Scale, HeartHandshake } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { CORE_VALUES } from "@/constants";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Shield,
  Scale,
  HeartHandshake,
};

export function CoreValuesSection() {
  return (
    <section className="section-padding bg-[#18140F] relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/20 to-transparent" />

      <div className="container-custom">
        <SectionHeader
          title="Our Core"
          titleHighlight="Values"
          description="Four principles that guide every decision, every client interaction, and every financial solution we deliver at Prudent Micro Credit."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value) => {
            const Icon = iconMap[value.icon];
            return (
              <div
                key={value.title}
                className="group relative rounded-2xl border border-[rgba(240,124,0,0.1)] bg-[#221D17] p-8 text-center transition-all duration-300 hover:border-[rgba(240,124,0,0.3)] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
              >
                {/* Icon with animated glow */}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F07C00]/25 bg-[#F07C00]/10 text-[#F07C00] transition-all duration-300 group-hover:bg-[#F07C00]/20 group-hover:shadow-[0_0_25px_rgba(240,124,0,0.2)] group-hover:scale-110">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-slate-100 group-hover:text-[#F07C00] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>

                {/* Bottom gold accent */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#F07C00]/0 to-transparent group-hover:via-[#F07C00]/40 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
