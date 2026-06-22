"use client";

import { Building2, Lightbulb, Briefcase, Package, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const COMMITMENTS = [
  {
    icon: Building2,
    title: "Small Businesses",
    description:
      "We provide accessible credit solutions to help small businesses launch, operate, and grow, fuelling local economies and creating sustainable livelihoods in our communities.",
    color: "gold" as const,
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurs",
    description:
      "We back visionary individuals with the financing they need to transform ideas into thriving enterprises. From start-up capital to expansion funding, we support innovation at every stage.",
    color: "emerald" as const,
  },
  {
    icon: Briefcase,
    title: "Salary Earners",
    description:
      "We empower working professionals with flexible personal loan solutions that help bridge financial gaps, manage emergencies, and improve overall quality of life.",
    color: "gold" as const,
  },
  {
    icon: Package,
    title: "Asset Financing",
    description:
      "We help individuals and businesses acquire productive assets, from vehicles to equipment, with structured, affordable financing packages designed to maximise return on investment.",
    color: "emerald" as const,
  },
];

export function CommitmentSection() {
  return (
    <section className="section-padding bg-[#0C0A08] relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/15 to-transparent" />

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F07C00]/3 blur-[120px] pointer-events-none" />

      <div className="container-custom relative">
        <SectionHeader
          badge="Our Commitment"
          title="Who We"
          titleHighlight="Serve"
          description="Prudent Micro Credit exists to create financial opportunity for those who need it most. We are dedicated to four pillars of service, each rooted in our mission of accessible empowerment."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((item, i) => {
            const Icon = item.icon;
            const isGold = item.color === "gold";
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl border bg-[#18140F] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40"
                style={{
                  borderColor: isGold
                    ? "rgba(240,124,0,0.12)"
                    : "rgba(16,185,129,0.12)",
                }}
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: isGold
                      ? "linear-gradient(90deg, transparent, #F07C00, transparent)"
                      : "linear-gradient(90deg, transparent, #10b981, transparent)",
                  }}
                />

                {/* Background glow on hover */}
                <div
                  className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{
                    background: isGold ? "#F07C0010" : "#10b98110",
                  }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110"
                    style={{
                      borderColor: isGold
                        ? "rgba(240,124,0,0.3)"
                        : "rgba(16,185,129,0.3)",
                      background: isGold
                        ? "rgba(240,124,0,0.1)"
                        : "rgba(16,185,129,0.1)",
                    }}
                  >
                    <Icon
                      className="h-6 w-6 transition-all duration-300 group-hover:scale-110"
                      style={{ color: isGold ? "#F07C00" : "#10b981" }}
                    />
                  </div>

                  {/* Number badge */}
                  <span
                    className="absolute top-0 right-0 text-5xl font-bold opacity-5 font-display leading-none select-none"
                    style={{ color: isGold ? "#F07C00" : "#10b981" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className="mb-3 text-lg font-semibold text-slate-100 transition-colors duration-300"
                    style={
                      {
                        "--hover-color": isGold ? "#F07C00" : "#10b981",
                      } as React.CSSProperties
                    }
                  >
                    <span className="group-hover:text-[var(--hover-color)] transition-colors duration-300">
                      {item.title}
                    </span>
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-2xl p-10 text-center relative overflow-hidden bg-gradient-to-br from-[#C26300] via-[#F07C00] to-[#E06A00]">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Ready to Take the Next Step?
            </h3>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Whether you are starting a business, growing one, or simply looking to improve your financial position, Prudent Micro Credit has a solution designed for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="group bg-white text-[#C26300] hover:bg-white/90 border-0">
                <Link href="/contact">
                  Apply Now
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
