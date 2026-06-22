"use client";

export function AboutHero() {
  return (
    <section data-image-bg className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80&auto=format&fit=crop"
          alt="Prudent Capital leadership"
          className="h-full w-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A08]/70 via-[#0C0A08]/85 to-[#0C0A08]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F07C00]/5 blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold text-slate-100 sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Empowering Lives Through{" "}
            <span className="text-gold-gradient">Accessible Finance</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Prudent Micro Credit is a results-oriented microcredit institution committed to empowering individuals and businesses through accessible financial solutions, built on professionalism, trust, and a deep commitment to client value creation.
          </p>
        </div>
      </div>
    </section>
  );
}
