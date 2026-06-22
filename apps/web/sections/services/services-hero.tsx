"use client";

export function ServicesHero() {
  return (
    <section data-image-bg className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1920&q=80&auto=format&fit=crop"
          alt="Financial analysis"
          className="h-full w-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A08]/70 via-[#0C0A08]/85 to-[#0C0A08]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F07C00]/4 blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold text-slate-100 sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Comprehensive Financial{" "}
            <span className="text-gold-gradient">Services</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Three loan products designed around your needs — Business, Salary, and Asset loans — with transparent interest rates, flexible repayment schedules, and dedicated support at every step.
          </p>
        </div>
      </div>
    </section>
  );
}
