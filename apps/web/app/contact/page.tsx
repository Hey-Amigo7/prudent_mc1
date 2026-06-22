import type { Metadata } from "next";
import { ContactHero } from "@/sections/contact/contact-hero";
import { ContactLayout } from "@/sections/contact/contact-layout";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to Prudent Capital for a confidential consultation. Our advisory team is ready to discuss your financial objectives.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactLayout />
    </>
  );
}
