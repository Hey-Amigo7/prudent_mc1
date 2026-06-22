"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggleButton1 = ({ className = "" }: { className?: string }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <button
      type="button"
      className={cn("rounded-full bg-black text-white transition-all duration-300 active:scale-95", className)}
      onClick={() => setIsDark(!isDark)}
    >
      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g animate={{ rotate: isDark ? -180 : 0 }} transition={{ ease: "easeInOut", duration: 0.35 }}>
          <path d="M120 67.5C149.25 67.5 172.5 90.75 172.5 120C172.5 149.25 149.25 172.5 120 172.5" fill="white" />
          <path d="M120 67.5C90.75 67.5 67.5 90.75 67.5 120C67.5 149.25 90.75 172.5 120 172.5" fill="black" />
        </motion.g>
        <motion.path
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.35 }}
          d="M120 3.75C55.5 3.75 3.75 55.5 3.75 120C3.75 184.5 55.5 236.25 120 236.25C184.5 236.25 236.25 184.5 236.25 120C236.25 55.5 184.5 3.75 120 3.75ZM120 214.5V172.5C90.75 172.5 67.5 149.25 67.5 120C67.5 90.75 90.75 67.5 120 67.5V25.5C172.5 25.5 214.5 67.5 214.5 120C214.5 172.5 172.5 214.5 120 214.5Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export const ThemeToggleButton2 = ({ className = "" }: { className?: string }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <button
      type="button"
      className={cn(
        "rounded-full transition-all duration-300 active:scale-95",
        isDark ? "bg-black text-white" : "bg-white text-black",
        className
      )}
      onClick={() => setIsDark(!isDark)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" strokeLinecap="round" viewBox="0 0 32 32">
        <clipPath id="skiper-btn-2">
          <motion.path
            animate={{ y: isDark ? 10 : 0, x: isDark ? -12 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            d="M0-5h30a1 1 0 0 0 9 13v24H0Z"
          />
        </clipPath>
        <g clipPath="url(#skiper-btn-2)">
          <motion.circle animate={{ r: isDark ? 10 : 8 }} transition={{ ease: "easeInOut", duration: 0.35 }} cx="16" cy="16" />
          <motion.g
            animate={{ rotate: isDark ? -100 : 0, scale: isDark ? 0.5 : 1, opacity: isDark ? 0 : 1 }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            stroke="currentColor" strokeWidth="1.5"
          >
            <path d="M16 5.5v-4" /><path d="M16 30.5v-4" />
            <path d="M1.5 16h4" /><path d="M26.5 16h4" />
            <path d="m23.4 8.6 2.8-2.8" /><path d="m5.7 26.3 2.9-2.9" />
            <path d="m5.8 5.8 2.8 2.8" /><path d="m23.4 23.4 2.9 2.9" />
          </motion.g>
        </g>
      </svg>
    </button>
  );
};

export const ThemeToggleButton5 = ({ className = "" }: { className?: string }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <button
      type="button"
      className={cn(
        "rounded-full transition-all duration-300 active:scale-95",
        isDark ? "bg-black text-white" : "bg-white text-black",
        className
      )}
      onClick={() => setIsDark(!isDark)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 32 32">
        <clipPath id="skiper-btn-4">
          <motion.path
            animate={{ y: isDark ? 5 : 0, x: isDark ? -20 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
            d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0"
          />
        </clipPath>
        <g clipPath="url(#skiper-btn-4)">
          <circle cx="16" cy="16" r="15" />
        </g>
      </svg>
    </button>
  );
};
