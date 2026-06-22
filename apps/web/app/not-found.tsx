import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0C0A08] text-center px-4">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F07C00]/30 bg-[#F07C00]/10">
            <TrendingUp className="h-8 w-8 text-[#F07C00]" />
          </div>
        </div>
        <p className="font-display text-8xl font-bold text-[#F07C00]/20 mb-2">404</p>
        <h1 className="font-display text-2xl font-bold text-slate-100 mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-sm mb-8 max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

