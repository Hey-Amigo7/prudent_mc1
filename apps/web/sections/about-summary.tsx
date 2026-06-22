"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HIGHLIGHTS = [
  "Accessible credit solutions for individuals and businesses",
  "Flexible repayment terms designed around your cash flow",
  "Dedicated relationship officers for personalised service",
  "Ethical lending grounded in transparency and integrity",
];

export function AboutSummary() {
  return (
    <section className="section-padding bg-[#0C0A08] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=700&h=550&q=80&auto=format&fit=crop"
                alt=""
                aria-hidden="true"
                className="h-[480px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08]/60 via-transparent to-transparent" />
            </div>

            {/* Decorative gold line */}
            <div className="absolute -left-4 top-12 bottom-12 w-1 rounded-full bg-gradient-to-b from-transparent via-[#F07C00]/50 to-transparent" />
          </div>

          {/* Content side */}
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-100 leading-tight sm:text-4xl mb-5">
              Built on{" "}
              <span className="text-gold-gradient">Trust &amp; Empowerment</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-4">
              Prudent Micro Credit is a results-oriented microcredit institution committed to empowering individuals and businesses through accessible, responsible financial solutions.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our philosophy is simple: build long-term client relationships grounded in transparency, value creation, and measurable results, guided by professionalism and ethical practice at every step.
            </p>

            <ul className="space-y-3 mb-10">
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F07C00]" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/about">
                  Our Full Story
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
