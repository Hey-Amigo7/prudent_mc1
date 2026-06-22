"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATISTICS } from "@/constants";

function AnimatedCounter({ value, prefix = "", suffix = "" }: {
  value: string;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericStr = value.replace(/[^0-9.]/g, "");
    const numeric = parseFloat(numericStr);
    const isFloat = numericStr.includes(".");
    const decimals = isFloat ? numericStr.split(".")[1].length : 0;
    const hasComma = value.includes(",");

    const duration = 1800;
    const steps = 60;
    const stepDuration = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;

      let formatted: string;
      if (isFloat) {
        formatted = current.toFixed(decimals);
      } else if (hasComma) {
        formatted = Math.floor(current).toLocaleString();
      } else {
        formatted = Math.floor(current).toString();
      }

      setDisplayValue(formatted);

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(isFloat ? numeric.toFixed(decimals) : hasComma ? numeric.toLocaleString() : numeric.toString());
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export function StatisticsSection() {
  return (
    <section className="relative py-20 bg-[#18140F] overflow-hidden">
      {/* Gold line top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F07C00]/30 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-section-gradient" />

      <div className="container-custom relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATISTICS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-3">
                <div className="absolute -inset-3 rounded-full bg-[#F07C00]/5 blur-xl" />
                <span className="relative font-display text-4xl font-bold text-[#F07C00] lg:text-5xl glow-gold-text">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </span>
              </div>
              <span className="text-sm text-slate-400 font-medium mt-1 max-w-[120px] leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
