"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#F07C00]/40 bg-[#0C0A08]/90 text-[#F07C00] shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 hover:bg-[#F07C00] hover:text-[#0C0A08] hover:border-[#F07C00] hover:shadow-[0_0_25px_rgba(240,124,0,0.4)] active:scale-95"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

