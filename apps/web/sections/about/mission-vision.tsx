"use client";

import { Target, Eye } from "lucide-react";

const PILLARS = [
  { label: "Professionalism", desc: "Highest standards in every interaction" },
  { label: "Teamwork", desc: "Collaborative approach to client success" },
  { label: "Innovation", desc: "Fresh thinking for modern challenges" },
  { label: "Ethical Practice", desc: "Integrity at the core of everything" },
];

export function MissionVision() {
  return (
    <section className="section-padding bg-[#0C0A08]">
      <div className="container-custom">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Mission */}
          <div className="relative rounded-2xl border border-[rgba(240,124,0,0.15)] bg-[#18140F] p-10 overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F07C00]/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/20 to-transparent" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#F07C00]/30 bg-[#F07C00]/10">
                <Target className="h-6 w-6 text-[#F07C00]" />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-100 mb-4">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed text-base">
                Prudent Micro Credit is a results-oriented microcredit institution committed to empowering individuals and businesses through accessible financial solutions. We create value by fostering professionalism, teamwork, innovation, resourcefulness, and ethical business practices in everything we do.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative rounded-2xl border border-[rgba(16,185,129,0.15)] bg-[#18140F] p-10 overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                <Eye className="h-6 w-6 text-emerald-400" />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-100 mb-4">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed text-base">
                To be the preferred microcredit institution, recognized for excellence, trust, and value creation in the eyes of our customers and communities.
              </p>
            </div>
          </div>
        </div>

        {/* Operating Pillars */}
        <div className="mt-12 rounded-2xl border border-[rgba(240,124,0,0.12)] bg-[#18140F] p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-100 mb-4">
                How We Create Value
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                At Prudent Micro Credit, we believe that lasting financial empowerment comes from more than just credit. It comes from genuine partnership. We combine accessible products with personalised service and responsible lending practices.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Every solution we deliver is shaped by four operating principles that define how we work and who we are as an institution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.label}
                  className="rounded-xl border border-[rgba(240,124,0,0.1)] bg-[#221D17] p-5"
                >
                  <p className="font-display text-sm font-bold text-[#F07C00] mb-1">{pillar.label}</p>
                  <p className="text-xs text-slate-500">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
