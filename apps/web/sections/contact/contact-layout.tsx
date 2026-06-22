"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Building,
  Globe,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const OFFICES = [
  {
    city: "Head Office, Accra",
    address: "Block D4, opp. Ghana Fire Service\nSCC GICEL Estate, New Weija\nAccra, Ghana",
    phone: "+233 24 507 2097",
    flag: "🇬🇭",
  },
];

const BUSINESS_HOURS = [
  { days: "Monday – Friday", hours: "8:30 AM – 5:30 PM" },
  { days: "Saturday", hours: "Closed" },
  { days: "Sunday", hours: "Closed" },
];

const INQUIRY_TYPES = [
  "Business Loan",
  "Personal Loan",
  "Asset Financing",
  "Entrepreneurship Funding",
  "Salary Earner Loan",
  "Loan Repayment Enquiry",
  "General Inquiry",
  "Career Opportunities",
];

// Ghana is UTC+0 (Africa/Accra, no daylight saving)
function useBusinessHours(): boolean {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getUTCDay(); // 0=Sun, 1=Mon … 5=Fri, 6=Sat
      const totalMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
      setIsOpen(day >= 1 && day <= 5 && totalMinutes >= 510 && totalMinutes < 1050);
    };
    check();
    const timer = setInterval(check, 60_000);
    return () => clearInterval(timer);
  }, []);

  return isOpen;
}

export function ContactLayout() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const isOpen = useBusinessHours();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setError("");
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, website: honeypot }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-[#0C0A08] relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">

          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct contact */}
            <div className="rounded-2xl border border-[rgba(240,124,0,0.12)] bg-[#18140F] p-7">
              <h2 className="font-display text-xl font-bold text-slate-100 mb-6">Direct Contact</h2>
              <div className="space-y-5">
                <a
                  href="mailto:info@prudentmicrocredit.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F07C00]/10 border border-[#F07C00]/20 text-[#F07C00] flex-shrink-0 group-hover:bg-[#F07C00]/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <p className="text-sm text-slate-300 group-hover:text-[#F07C00] transition-colors">
                      info@prudentmicrocredit.com
                    </p>
                  </div>
                </a>

                <a href="tel:+233245072097" className="flex items-start gap-4 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F07C00]/10 border border-[#F07C00]/20 text-[#F07C00] flex-shrink-0 group-hover:bg-[#F07C00]/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                    <p className="text-sm text-slate-300 group-hover:text-[#F07C00] transition-colors">
                      +233 24 507 2097
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/233245072097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">WhatsApp</p>
                    <p className="text-sm text-slate-300 group-hover:text-emerald-400 transition-colors">
                      +233 24 507 2097
                    </p>
                    <p className="text-xs text-emerald-500/60 mt-0.5">Available Mon–Fri, 8AM–5PM GMT</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-2xl border border-[rgba(240,124,0,0.12)] bg-[#18140F] p-7">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="h-5 w-5 text-[#F07C00]" />
                <h2 className="font-display text-xl font-bold text-slate-100">Business Hours</h2>
              </div>
              <div className="space-y-3">
                {BUSINESS_HOURS.map((h) => (
                  <div key={h.days} className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">{h.days}</span>
                    <span className={`text-sm font-medium ${h.hours === "Closed" ? "text-slate-600" : "text-slate-200"}`}>
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-[rgba(240,124,0,0.08)]">
                {isOpen ? (
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-emerald-400">We are currently open</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-600" />
                    <span className="text-xs text-slate-500">Currently closed</span>
                  </div>
                )}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl border border-[rgba(240,124,0,0.12)] bg-[#18140F] overflow-hidden">
              <div className="relative h-44 bg-[#221D17] flex items-center justify-center">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F07C00]/15 border border-[#F07C00]/30 mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-[#F07C00]" />
                  </div>
                  <p className="text-sm font-semibold text-slate-300">Prudent Micro Credit</p>
                  <p className="text-xs text-slate-500">Accra, Ghana</p>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-px w-full bg-[#F07C00]/5"
                      style={{ top: `${(i + 1) * 20}%` }}
                    />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-full bg-[#F07C00]/5"
                      style={{ left: `${(i + 1) * 20}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-4 text-center">
                <a
                  href="https://maps.app.goo.gl/dYzBG4XxzCXsQZz78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F07C00] hover:text-[#FFD699] transition-colors font-medium flex items-center justify-center gap-1"
                >
                  <Globe className="h-3 w-3" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-[rgba(240,124,0,0.12)] bg-[#18140F] p-8 lg:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F07C00]/15 border border-[#F07C00]/30 mb-5">
                    <CheckCircle2 className="h-7 w-7 text-[#F07C00]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-100 mb-3">
                    Message Received
                  </h3>
                  <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                    Thank you for reaching out. A senior member of our advisory team will contact you within one business day.
                  </p>
                  <p className="mt-4 text-xs text-slate-600">Reference: PC-{Date.now().toString().slice(-6)}</p>
                </motion.div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold text-slate-100 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-slate-400 mb-8">
                    All enquiries are treated with care and confidentiality. We respond within one business day.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot — hidden from real users, attracts bots */}
                    <input
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }}
                    />

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formState.firstName}
                          onChange={handleChange}
                          placeholder="Kwame"
                          maxLength={50}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formState.lastName}
                          onChange={handleChange}
                          placeholder="Mensah"
                          maxLength={50}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="kwame.mensah@company.com"
                        maxLength={254}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="company">Company / Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="Your Business Name"
                          maxLength={100}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+233 XX XXX XXXX"
                          maxLength={20}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="inquiryType">Area of Interest</Label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formState.inquiryType}
                        onChange={handleChange}
                        className="flex h-11 w-full rounded-lg border border-[rgba(240,124,0,0.15)] bg-[#18140F] px-4 py-2 text-sm text-slate-100 ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:border-[#F07C00]/50 focus-visible:ring-1 focus-visible:ring-[#F07C00]/30 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="" className="bg-[#18140F]">Select a service area</option>
                        {INQUIRY_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#18140F]">{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Please briefly describe your objectives and how we can assist you..."
                        required
                        minLength={10}
                        maxLength={2000}
                        className="min-h-[140px]"
                      />
                      <p className="text-xs text-slate-600 text-right">
                        {formState.message.length}/2000
                      </p>
                    </div>

                    {error && (
                      <div className="flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
                        <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-400">{error}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="h-4 w-4 rounded-full border-2 border-[#0C0A08]/30 border-t-[#0C0A08] animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Inquiry
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-slate-600">
                      By submitting, you agree to our Privacy Policy. We never share your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className="mt-14">
          <div className="flex items-center gap-3 mb-8">
            <Building className="h-5 w-5 text-[#F07C00]" />
            <h2 className="font-display text-xl font-bold text-slate-100">Our Office</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="rounded-xl border border-[rgba(240,124,0,0.1)] bg-[#18140F] p-5 transition-all duration-200 hover:border-[rgba(240,124,0,0.25)]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{office.flag}</span>
                  <span className="text-sm font-semibold text-slate-100">{office.city}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-line mb-2">
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="text-xs text-[#F07C00] hover:text-[#FFD699] transition-colors"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
