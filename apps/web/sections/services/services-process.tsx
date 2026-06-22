"use client";

import { SectionHeader } from "@/components/section-header";
import { FileText, CreditCard, PiggyBank, Users, CheckCircle2 } from "lucide-react";

const REQUIREMENTS = [
  "Two passport-sized photographs",
  "Valid Ghana Card",
];

const GUARANTOR_REQUIREMENTS = [
  "Two passport-sized photographs",
  "Valid Ghana Card",
  "Must have stable employment",
  "Must earn more than the client being guaranteed",
];

const FEES = [
  { label: "Processing Fee", value: "5%", note: "of the loan amount" },
  { label: "Application Form", value: "GHC 10", note: "one-time fee" },
  { label: "Compulsory Savings", value: "10%", note: "business loans only — fully refunded after final repayment" },
];

const INTEREST_RATES = [
  { product: "Business Loan", rate: "6%", color: "gold" },
  { product: "Salary / Personal Loan", rate: "8%", color: "emerald" },
  { product: "Asset Loan", rate: "10%", color: "gold" },
];

export function ServicesProcess() {
  return (
    <section className="section-padding bg-[#18140F] relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/20 to-transparent" />

      <div className="container-custom space-y-16">

        {/* Interest Rates */}
        <div>
          <SectionHeader
            title="Interest"
            titleHighlight="Rates"
            description="Simple, transparent rates across all three loan products."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {INTEREST_RATES.map((item) => (
              <div
                key={item.product}
                className="rounded-2xl border border-[rgba(240,124,0,0.12)] bg-[#221D17] p-8 text-center"
              >
                <span className="font-display text-5xl font-bold text-[#F07C00]">{item.rate}</span>
                <p className="mt-3 text-sm font-semibold text-slate-300">{item.product}</p>
                <p className="mt-1 text-xs text-slate-500">per annum interest</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements & Fees */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Applicant Requirements */}
          <div className="rounded-2xl border border-[rgba(240,124,0,0.12)] bg-[#221D17] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F07C00]/25 bg-[#F07C00]/10 text-[#F07C00]">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">Applicant Requirements</h3>
            </div>
            <ul className="space-y-3">
              {REQUIREMENTS.map((req) => (
                <li key={req} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#F07C00]" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Charges & Fees */}
          <div className="rounded-2xl border border-[rgba(240,124,0,0.12)] bg-[#221D17] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F07C00]/25 bg-[#F07C00]/10 text-[#F07C00]">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">Charges &amp; Fees</h3>
            </div>
            <ul className="space-y-4">
              {FEES.map((fee) => (
                <li key={fee.label} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{fee.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{fee.note}</p>
                  </div>
                  <span className="font-display text-lg font-bold text-[#F07C00] whitespace-nowrap">{fee.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Guarantor */}
        <div className="rounded-2xl border border-[rgba(240,124,0,0.12)] bg-[#221D17] p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F07C00]/25 bg-[#F07C00]/10 text-[#F07C00]">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">Guarantor</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            A guarantor must be someone with stable employment who earns more than the client they are guaranteeing. They share responsibility for ensuring the loan is repaid.
          </p>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Guarantor Requirements</p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {GUARANTOR_REQUIREMENTS.map((req) => (
                <li key={req} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#F07C00]" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
