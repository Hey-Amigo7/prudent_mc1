"use client";

export function ContactHero() {
  return (
    <section data-image-bg className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0C0A08]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F07C00]/4 blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold text-slate-100 sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Let&apos;s Start a{" "}
            <span className="text-gold-gradient">Conversation</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re ready to begin your advisory journey or simply have questions about our services, our team is here to assist. All inquiries are treated with the utmost confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
}
