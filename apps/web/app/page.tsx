import type { Metadata } from "next";
import { HeroSection } from "@/sections/hero";
import { ServicesOverview } from "@/sections/services-overview";
import { AboutSummary } from "@/sections/about-summary";
import { FAQSection } from "@/sections/faq";

export const metadata: Metadata = {
  title: {
    absolute: "Prudent Micro Credit Ghana | Loans, Savings & Financial Services",
  },
  description:
    "Prudent Micro Credit provides loans, savings solutions, and financial services for individuals and businesses in Ghana.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutSummary />
      <FAQSection />
    </>
  );
}
