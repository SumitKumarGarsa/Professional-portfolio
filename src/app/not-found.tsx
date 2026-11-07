import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative z-10 w-full min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-128px)] flex flex-col items-center justify-center px-6 text-center select-none">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-ping" />
        <span>HTTP 404 &bull; EXCEPTION</span>
      </div>

      <h1 className="font-display text-[clamp(100px,20vw,280px)] uppercase tracking-tight text-[var(--text)] leading-[0.8] mb-4">
        404
      </h1>

      <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[var(--muted)] max-w-md mb-8">
        The requested system path does not exist, was moved, or requires higher clearance.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--text)] text-[var(--bg)] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--accent)] hover:text-white transition-all shadow-xl"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Primary Index</span>
      </Link>
    </div>
  );
}
