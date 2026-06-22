import { TrendingUp } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0C0A08]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F07C00]/30 bg-[#F07C00]/10">
          <TrendingUp className="h-6 w-6 text-[#F07C00]" />
          <div className="absolute inset-0 rounded-2xl border-2 border-[#F07C00]/20 animate-ping" />
        </div>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[#F07C00]/60 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

