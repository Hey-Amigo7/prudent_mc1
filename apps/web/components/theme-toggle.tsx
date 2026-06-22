"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-9 w-16 items-center rounded-full border transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F07C00]/50"
      style={{
        backgroundColor: isDark ? "rgba(240,124,0,0.10)" : "rgba(240,124,0,0.15)",
        borderColor: isDark ? "rgba(240,124,0,0.25)" : "rgba(240,124,0,0.40)",
      }}
      whileTap={{ scale: 0.93 }}
    >
      {/* Sliding pill */}
      <motion.div
        className="absolute h-6 w-6 rounded-full shadow-md"
        animate={{
          x: isDark ? 4 : 36,
          backgroundColor: isDark ? "#221D17" : "#FFF4E6",
          boxShadow: isDark
            ? "0 0 8px rgba(240,124,0,0.3)"
            : "0 0 10px rgba(240,124,0,0.5)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />

      {/* Icons */}
      <div className="relative z-10 flex w-full items-center justify-between px-[7px] pointer-events-none">
        {/* Sun icon — left side, visible in light mode */}
        <motion.span
          animate={{ opacity: isDark ? 0.25 : 1, rotate: isDark ? -30 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <Sun className="h-3.5 w-3.5 text-[#F07C00]" />
        </motion.span>

        {/* Moon icon — right side, visible in dark mode */}
        <motion.span
          animate={{ opacity: isDark ? 1 : 0.25, rotate: isDark ? 0 : 30 }}
          transition={{ duration: 0.35 }}
        >
          <Moon className="h-3.5 w-3.5 text-[#F07C00]" />
        </motion.span>
      </div>

      {/* Ripple on click */}
      <AnimatePresence>
        <motion.span
          key={theme}
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 0, scale: 1.4 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: "rgba(240,124,0,0.15)",
            pointerEvents: "none",
          }}
        />
      </AnimatePresence>
    </motion.button>
  );
}
