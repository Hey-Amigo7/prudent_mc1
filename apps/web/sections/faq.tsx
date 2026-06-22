"use client";

import { SectionHeader } from "@/components/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants";

export function FAQSection() {
  return (
    <section className="section-padding bg-[#0C0A08] relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/15 to-transparent" />

      <div className="container-custom">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked"
          titleHighlight="Questions"
          description="Answers to the most common questions about our firm, our services, and our approach to client partnerships."
        />

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-0">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <AccordionItem value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>

          <div className="mt-10 rounded-2xl border border-[rgba(240,124,0,0.15)] bg-[#F07C00]/5 p-7 text-center">
            <p className="text-slate-300 text-sm mb-3">
              Still have questions? Our team is ready to assist you.
            </p>
            <a
              href="mailto:info@prudentmicrocredit.com"
              className="text-sm font-semibold text-[#F07C00] hover:text-[#FFD699] transition-colors"
            >
              info@prudentmicrocredit.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
