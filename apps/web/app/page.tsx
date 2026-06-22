import type { Metadata } from "next";
import { HeroSection } from "@/sections/hero";
import { ServicesOverview } from "@/sections/services-overview";
import { AboutSummary } from "@/sections/about-summary";
import { FAQSection } from "@/sections/faq";

export const metadata: Metadata = {
  title: "Prudent Micro Credit | Empowering Financial Growth",
  description:
    "Prudent Micro Credit delivers accessible financial solutions for small businesses, entrepreneurs, salary earners, and individuals seeking asset financing.",
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
