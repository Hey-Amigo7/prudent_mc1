"use client";

import {
  TrendingUp,
  Building2,
  Target,
  CheckCircle2,
} from "lucide-react";
import { SERVICES } from "@/constants";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Building2,
  Target,
};

export function ServicesGrid() {
  return (
    <section className="section-padding bg-[#0C0A08]">
      <div className="container-custom space-y-8">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon];
          const isEven = i % 2 === 0;
          const isGold = service.color === "gold";

          return (
            <div
              key={service.id}
              id={service.id}
              className="relative rounded-2xl border border-[rgba(240,124,0,0.12)] bg-[#18140F] overflow-hidden transition-all duration-300 hover:border-[rgba(240,124,0,0.25)] hover:shadow-xl hover:shadow-black/30"
            >
              <div
                className="grid grid-cols-1 items-center gap-0 lg:grid-cols-2"
              >
                {/* Content */}
                <div className={`p-10 lg:p-12 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                        isGold
                          ? "border-[#F07C00]/25 bg-[#F07C00]/10 text-[#F07C00]"
                          : "border-emerald-500/25 bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant={isGold ? "gold" : "emerald"}>
                      {`0${i + 1}`}
                    </Badge>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-slate-100 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                      Key Details
                    </p>
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2
                          className={`h-4 w-4 flex-shrink-0 ${isGold ? "text-[#F07C00]" : "text-emerald-400"}`}
                        />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual side */}
                <div className={`relative h-56 lg:h-full min-h-[280px] ${!isEven ? "lg:order-1" : ""}`}>
                  <div
                    className={`absolute inset-0 ${
                      isGold
                        ? "bg-gradient-to-br from-[#F07C00]/8 via-transparent to-transparent"
                        : "bg-gradient-to-br from-emerald-500/8 via-transparent to-transparent"
                    }`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`relative flex h-24 w-24 items-center justify-center rounded-3xl border ${
                        isGold
                          ? "border-[#F07C00]/25 bg-[#F07C00]/10 text-[#F07C00] shadow-[0_0_60px_rgba(240,124,0,0.12)]"
                          : "border-emerald-500/25 bg-emerald-500/10 text-emerald-400 shadow-[0_0_60px_rgba(16,185,129,0.12)]"
                      }`}
                    >
                      <Icon className="h-10 w-10" />
                      {/* Orbiting dots */}
                      <div
                        className={`absolute h-2 w-2 rounded-full -top-1 -right-1 ${isGold ? "bg-[#F07C00]" : "bg-emerald-400"} opacity-60`}
                      />
                      <div
                        className={`absolute h-1.5 w-1.5 rounded-full -bottom-1 left-2 ${isGold ? "bg-[#F07C00]" : "bg-emerald-400"} opacity-40`}
                      />
                    </div>
                  </div>

                  {/* Grid overlay */}
                  <div className="absolute inset-0 grid-bg opacity-30" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
