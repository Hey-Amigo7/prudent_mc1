import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#F07C00",
          light: "#FFD699",
          muted: "rgba(240,124,0,0.12)",
          dark: "#C26300",
        },
        navy: {
          DEFAULT: "#0C0A08",
          surface: "#18140F",
          card: "#221D17",
          border: "rgba(240,124,0,0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-ibm-plex-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-ibm-plex-serif)", "Georgia", "serif"],
        logo: ["Ringift", "var(--font-ibm-plex-serif)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #F07C00 0%, #FFD066 50%, #F07C00 100%)",
        "navy-gradient": "linear-gradient(180deg, #0C0A08 0%, #18140F 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(34,29,23,0.9) 0%, rgba(24,20,15,0.9) 100%)",
        "section-gradient":
          "radial-gradient(ellipse at 50% 0%, rgba(240,124,0,0.06) 0%, transparent 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(240,124,0,0)" },
          "50%": { boxShadow: "0 0 30px 5px rgba(240,124,0,0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: { height: "0", opacity: "0" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

