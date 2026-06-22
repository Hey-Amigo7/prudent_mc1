"use client";

import {
  Award,
  Globe,
  Lock,
  Zap,
  HeartHandshake,
  BarChart2,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { WHY_CHOOSE_US } from "@/constants";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Globe,
  Lock,
  Zap,
  HeartHandshake,
  BarChart2,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding relative bg-[#18140F]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/20 to-transparent" />

      <div className="container-custom">
        <SectionHeader
          badge="Why Prudent Micro Credit"
          title="The Standard for"
          titleHighlight="Financial Excellence"
          description="Six pillars that distinguish Prudent Micro Credit and make us the preferred partner for accessible financial empowerment."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-[rgba(240,124,0,0.1)] bg-[#221D17] p-7 transition-all duration-300 hover:border-[rgba(240,124,0,0.28)] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25"
              >
                {/* Hover glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#F07C00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F07C00]/25 bg-[#F07C00]/10 text-[#F07C00] transition-all duration-300 group-hover:bg-[#F07C00]/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(240,124,0,0.2)]">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>

                <h3 className="mb-2.5 text-base font-semibold text-slate-100 group-hover:text-[#F07C00] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#F07C00]/0 to-transparent group-hover:via-[#F07C00]/20 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
