import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

function PMCLogo() {
  return (
    <div
      className="relative shrink-0 overflow-hidden shadow-md"
      style={{ width: 36, height: 36, borderRadius: 6 }}
    >
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom right, #2C1F1A 50%, transparent 50%)" }}
      />
      <div className="absolute inset-0 rounded-[inherit] ring-1 ring-white/20" style={{ pointerEvents: "none" }} />
      <span
        className="absolute inset-0 flex items-center justify-center font-black text-[#F07C00]"
        style={{ fontSize: 13, fontFamily: "'Arial Black', Impact, sans-serif", letterSpacing: "-0.5px", lineHeight: 1 }}
      >
        PMC
      </span>
    </div>
  );
}
import { NAV_LINKS, SERVICES } from "@/constants";

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const SERVICE_LINKS = SERVICES.map((s) => ({
  label: s.title,
  href: `/services#${s.id}`,
}));

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-0 border-t border-[rgba(240,124,0,0.1)] bg-[#0C0A08]">
      {/* Top divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/30 to-transparent" />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <PMCLogo />
              <div className="flex flex-col -space-y-0.5">
                <span className="font-logo text-base font-bold text-slate-100 leading-none">Prudent</span>
                <span className="font-logo text-xs font-medium text-[#F07C00] tracking-[0.15em] uppercase leading-none">Micro Credit</span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              Empowering individuals and businesses through accessible financial solutions. Trust, excellence, and value creation.
            </p>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(240,124,0,0.15)] text-slate-500 transition-all duration-200 hover:text-[#F07C00] hover:border-[#F07C00]/40 hover:bg-[#F07C00]/5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-100 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-[#F07C00] transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-100 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-[#F07C00] transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-100 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@prudentmicrocredit.com"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-[#F07C00] transition-colors group"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-[#F07C00] shrink-0" />
                  info@prudentmicrocredit.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+233245072097"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-[#F07C00] transition-colors"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-[#F07C00] shrink-0" />
                  +233 24 507 2097
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#F07C00] shrink-0" />
                  <span>
                    Block D4, opp. Ghana Fire Service<br />
                    SCC GICEL Estate, New Weija<br />
                    Accra, Ghana
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-[rgba(240,124,0,0.12)] bg-[#F07C00]/5 p-4">
              <p className="text-xs text-slate-400 font-medium">Business Hours</p>
              <p className="mt-1 text-sm text-slate-300">Mon – Fri: 8:30 AM – 5:30 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(240,124,0,0.08)]">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {year} Prudent Micro Credit. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-[#F07C00] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#F07C00] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#F07C00] transition-colors">Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

