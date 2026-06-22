import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[#F07C00]/10 text-[#F07C00] ring-[#F07C00]/20",
        gold:
          "bg-[#F07C00]/10 text-[#F07C00] ring-[#F07C00]/20",
        emerald:
          "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
        outline:
          "border border-slate-700 text-slate-400 ring-transparent",
        secondary:
          "bg-slate-800 text-slate-300 ring-slate-700/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

