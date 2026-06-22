import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border border-[rgba(240,124,0,0.15)] bg-[#18140F] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:border-[#F07C00]/50 focus-visible:ring-1 focus-visible:ring-[#F07C00]/30 focus-visible:shadow-[0_0_15px_rgba(240,124,0,0.1)] disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

