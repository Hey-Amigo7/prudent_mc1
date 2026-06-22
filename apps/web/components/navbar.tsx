"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass-nav shadow-lg shadow-black/20"
            : "bg-transparent border-transparent"
        )}
      >
        {/* Scroll progress bar */}
        <ScrollProgress />

        <div className="container-custom">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Prudent Micro Credit Services">
              <PMCLogo size={40} />
              <div className="flex flex-col -space-y-0.5">
                <span className="font-logo text-base font-bold text-slate-100 leading-none tracking-wide">
                  Prudent
                </span>
                <span className="font-logo text-xs font-medium text-[#F07C00] tracking-[0.15em] uppercase leading-none">
                  Micro Credit
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      isActive
                        ? "text-[#F07C00]"
                        : "text-slate-400 hover:text-slate-100"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-[#F07C00]/8 border border-[#F07C00]/15"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                asChild
                size="sm"
                className="hidden lg:inline-flex gap-2"
              >
                <Link href="/contact">
                  <Phone className="h-3.5 w-3.5" />
                  Schedule Consultation
                </Link>
              </Button>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(240,124,0,0.2)] text-slate-400 hover:text-[#F07C00] hover:border-[#F07C00]/40 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-[#18140F] border-l border-[rgba(240,124,0,0.12)] flex flex-col"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between p-6 border-b border-[rgba(240,124,0,0.08)]">
                <div className="flex items-center gap-2">
                  <PMCLogo size={32} />
                  <span className="font-logo font-bold text-slate-100">Prudent Micro Credit</span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Mobile nav links */}
              <nav className="flex-1 px-4 py-6 space-y-1">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-[#F07C00]/10 text-[#F07C00] border border-[#F07C00]/20"
                            : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                        )}
                      >
                        {link.label}
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-[rgba(240,124,0,0.08)]">
                <Button asChild className="w-full">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
                <p className="mt-4 text-center text-xs text-slate-500">
                  Mon–Fri, 9AM–6PM EST
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function PMCLogo({ size = 40 }: { size?: number }) {
  const fontSize = Math.round(size * 0.375);
  return (
    <div
      className="relative shrink-0 overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105"
      style={{ width: size, height: size, borderRadius: Math.round(size * 0.15) }}
    >
      <div className="absolute inset-0 bg-white" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom right, #2C1F1A 50%, transparent 50%)" }}
      />
      <div
        className="absolute inset-0 rounded-[inherit] ring-1 ring-white/20"
        style={{ pointerEvents: "none" }}
      />
      <span
        className="absolute inset-0 flex items-center justify-center font-black text-[#F07C00]"
        style={{ fontSize, fontFamily: "'Arial Black', Impact, sans-serif", letterSpacing: "-0.5px", lineHeight: 1 }}
      >
        PMC
      </span>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute bottom-0 left-0 h-[1px] bg-[#F07C00] transition-all duration-100"
      style={{ width: `${progress}%` }}
    />
  );
}

