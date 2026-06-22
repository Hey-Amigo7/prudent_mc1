"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { TESTIMONIALS } from "@/constants";

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#0C0A08] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 h-64 w-64 rounded-full bg-[#F07C00]/3 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-emerald-500/3 blur-[100px] pointer-events-none" />

      <div className="container-custom relative">
        <SectionHeader
          title="What Our Clients"
          titleHighlight="Say About Us"
          description="Hear from the executives and institutions who have trusted Prudent Capital with their most important financial decisions."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-2xl border border-[rgba(240,124,0,0.1)] bg-[#18140F] p-8 transition-all duration-300 hover:border-[rgba(240,124,0,0.25)] hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F07C00]/10 border border-[#F07C00]/20">
                  <Quote className="h-4 w-4 text-[#F07C00] fill-current" />
                </div>
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <svg key={j} className="h-4 w-4 text-[#F07C00] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Quote content */}
              <blockquote className="text-slate-300 leading-relaxed text-sm mb-7 italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-[#F07C00]/20"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#18140F]" />
                </div>
                <div>
                  <p className="font-semibold text-slate-100 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[#F07C00]">{testimonial.role}</p>
                  <p className="text-xs text-slate-500">{testimonial.company}</p>
                </div>
              </div>

              {/* Bottom border glow on hover */}
              <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/0 to-transparent group-hover:via-[#F07C00]/30 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-14 rounded-2xl border border-[rgba(240,124,0,0.12)] bg-[#18140F] px-8 py-6 flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            { value: "98%", label: "Client Retention" },
            { value: "340+", label: "Reviews (5.0 avg)" },
            { value: "28+", label: "Years Trusted" },
            { value: "40+", label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-2xl font-bold text-[#F07C00]">{stat.value}</span>
              <span className="text-xs text-slate-500 mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
