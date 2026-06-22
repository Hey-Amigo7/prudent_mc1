"use client";

export function TeamHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80&auto=format&fit=crop"
          alt="Prudent Capital leadership team"
          className="h-full w-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A08]/70 via-[#0C0A08]/85 to-[#0C0A08]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-[#F07C00]/5 blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold text-slate-100 sm:text-5xl lg:text-6xl mb-6 leading-tight">
            The Minds Behind{" "}
            <span className="text-gold-gradient">Prudent Capital</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Our leadership team brings together exceptional talent from the world&apos;s foremost financial institutions, united by a shared purpose: delivering transformative advisory to the clients who trust us most.
          </p>
        </div>
      </div>
    </section>
  );
}
