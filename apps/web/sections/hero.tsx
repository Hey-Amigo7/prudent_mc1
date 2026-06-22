"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section data-image-bg className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406307-12bfb3a2f5e8?w=1920&q=80&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A08]/95 via-[#0C0A08]/75 to-[#0C0A08]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A08] via-transparent to-[#0C0A08]/20" />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      {/* Ambient glow */}
      <div className="absolute left-1/3 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F07C00]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container-custom pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F07C00]/25 bg-[#F07C00]/8 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#F07C00] uppercase mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F07C00] animate-pulse" />
            Empowering Financial Growth
          </span>

          {/* Headline */}
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-slate-50 sm:text-6xl lg:text-7xl mb-6">
            Finance That
            <br />
            <span className="text-gold-gradient">Empowers You.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl mb-10">
            Prudent Micro Credit delivers accessible financial solutions for
            small businesses, entrepreneurs, salary earners, and individuals
            seeking asset financing, built on trust, excellence, and value creation.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="/about">
                <Play className="h-4 w-4 fill-current opacity-70" />
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] text-slate-500 tracking-widest uppercase">Scroll</span>
        <div className="animate-bounce">
          <ChevronDown className="h-4 w-4 text-[#F07C00]/50" />
        </div>
      </div>
    </section>
  );
}
