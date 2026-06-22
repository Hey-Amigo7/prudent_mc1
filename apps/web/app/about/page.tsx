import type { Metadata } from "next";
import { AboutHero } from "@/sections/about/about-hero";
import { MissionVision } from "@/sections/about/mission-vision";
import { CoreValuesSection } from "@/sections/about/core-values";
import { CommitmentSection } from "@/sections/about/commitment";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Prudent Micro Credit: our mission, vision, core values, and commitment to empowering individuals and businesses through accessible financial solutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValuesSection />
      <CommitmentSection />
    </>
  );
}
