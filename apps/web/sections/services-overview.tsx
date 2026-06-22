"use client";

import Link from "next/link";
import {
  TrendingUp,
  Building2,
  Target,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { SERVICES } from "@/constants";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Building2,
  Target,
};

export function ServicesOverview() {
  return (
    <section className="section-padding relative bg-[#0C0A08]">
      {/* Radial glow at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-64 bg-section-gradient" />

      <div className="container-custom relative">
        <SectionHeader
          badge="Our Products"
          title="Accessible Financial"
          titleHighlight="Solutions"
          description="Three loan products built around your needs — flexible repayment, transparent rates, and dedicated support."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            const isGold = service.color === "gold";

            return (
              <div key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="group flex flex-col h-full rounded-2xl border border-[rgba(240,124,0,0.1)] bg-[#18140F] p-7 transition-all duration-300 hover:border-[rgba(240,124,0,0.3)] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 card-shine"
                >
                  {/* Icon */}
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110 ${
                      isGold
                        ? "border-[#F07C00]/25 bg-[#F07C00]/10 text-[#F07C00] group-hover:bg-[#F07C00]/20 group-hover:shadow-[0_0_20px_rgba(240,124,0,0.2)]"
                        : "border-emerald-500/25 bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-semibold text-slate-100 group-hover:text-[#F07C00] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-5 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                        <span
                          className={`h-1 w-1 rounded-full flex-shrink-0 ${
                            isGold ? "bg-[#F07C00]" : "bg-emerald-400"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA link */}
                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-[#F07C00]/70 group-hover:text-[#F07C00] transition-colors duration-200">
                    Learn More
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F07C00] hover:text-[#FFD699] transition-colors group"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
