import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border border-[rgba(240,124,0,0.15)] bg-[#18140F] px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 ring-offset-background transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:border-[#F07C00]/50 focus-visible:ring-1 focus-visible:ring-[#F07C00]/30 focus-visible:shadow-[0_0_15px_rgba(240,124,0,0.1)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

