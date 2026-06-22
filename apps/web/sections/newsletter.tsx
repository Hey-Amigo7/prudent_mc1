"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#C26300] via-[#F07C00] to-[#E06A00]">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mb-4">
            Stay Ahead of the Markets
          </h2>

          <p className="text-white/80 leading-relaxed mb-10 text-base">
            Subscribe to our weekly intelligence brief: curated insights on capital markets, macroeconomics, and investment opportunities, delivered to your inbox every Monday.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 border border-white/40">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">You&apos;re subscribed!</h3>
              <p className="text-sm text-white/80">
                Your first intelligence brief arrives next Monday.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-base bg-white/15 border-white/30 text-white placeholder:text-white/60 focus-visible:border-white/60"
              />
              <Button type="submit" size="lg" className="shrink-0 gap-2 bg-white text-[#C26300] hover:bg-white/90 border-0">
                <Send className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-white/50">
            No spam. Unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
