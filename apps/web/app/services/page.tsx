import type { Metadata } from "next";
import { ServicesHero } from "@/sections/services/services-hero";
import { ServicesGrid } from "@/sections/services/services-grid";
import { ServicesProcess } from "@/sections/services/services-process";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Prudent Micro Credit's financial solutions: business loans, personal loans, asset financing, and entrepreneurial starter packages.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
    </>
  );
}
