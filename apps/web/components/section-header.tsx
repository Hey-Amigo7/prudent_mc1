"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered ? "text-center" : "text-left", "mb-16", className)}>
      {badge && (
        <div className={cn("mb-4", centered && "flex justify-center")}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#F07C00]/25 bg-[#F07C00]/8 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#F07C00] uppercase">
            <span className="h-1 w-1 rounded-full bg-[#F07C00] animate-pulse" />
            {badge}
          </span>
        </div>
      )}

      <h2 className="font-display text-3xl font-bold text-slate-100 sm:text-4xl lg:text-5xl leading-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="text-gold-gradient">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-5 text-slate-400 leading-relaxed text-base sm:text-lg",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
