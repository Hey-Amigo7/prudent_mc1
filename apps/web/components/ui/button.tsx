"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#F07C00] text-[#0C0A08] hover:bg-[#FFD699] hover:shadow-[0_0_25px_rgba(240,124,0,0.35)] active:scale-[0.98]",
        outline:
          "border border-[#F07C00]/50 text-[#F07C00] hover:bg-[#F07C00]/10 hover:border-[#F07C00] hover:shadow-[0_0_20px_rgba(240,124,0,0.15)]",
        ghost:
          "text-slate-300 hover:text-[#F07C00] hover:bg-[#F07C00]/5",
        emerald:
          "bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-[0.98]",
        destructive:
          "bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30",
        link: "text-[#F07C00] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-13 px-8 py-3 text-base rounded-xl",
        xl: "h-14 px-10 py-3 text-lg rounded-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

