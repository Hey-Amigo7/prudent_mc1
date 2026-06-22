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
