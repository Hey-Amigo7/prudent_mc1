import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { ThemeProvider } from "@/components/theme-provider";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Prudent Micro Credit | Empowering Financial Growth",
    template: "%s | Prudent Micro Credit",
  },
  description:
    "Prudent Micro Credit is a results-oriented microcredit institution committed to empowering individuals and businesses through accessible financial solutions.",
  keywords: [
    "microcredit",
    "micro loans",
    "small business loans",
    "financial empowerment",
    "accessible finance",
    "entrepreneurship finance",
    "salary loans",
    "asset financing",
    "Prudent Micro Credit",
  ],
  authors: [{ name: "Prudent Micro Credit" }],
  creator: "Prudent Micro Credit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prudentmicrocredit.com",
    siteName: "Prudent Micro Credit",
    title: "Prudent Micro Credit | Empowering Financial Growth",
    description:
      "Accessible financial solutions for small businesses, entrepreneurs, salary earners, and asset financing. Trust, excellence, and value creation.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406307-12bfb3a2f5e8?w=1200&q=80&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Prudent Micro Credit: Empowering Financial Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prudent Micro Credit | Empowering Financial Growth",
    description:
      "Accessible microcredit solutions for individuals and businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable}`} suppressHydrationWarning>
      <body className="bg-[#0C0A08] text-slate-100 antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

