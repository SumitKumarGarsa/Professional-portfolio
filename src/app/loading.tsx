import { siteConfig } from "@/data/site";

export default function Loading() {
  return (
    <div className="relative z-10 w-full min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-128px)] flex flex-col items-center justify-center select-none">
      <div className="relative flex items-center justify-center">
        {/* Outer Pulsing Ring */}
        <div className="w-20 h-20 rounded-full border border-[var(--border)] animate-ping opacity-30 absolute" />
        
        {/* Inner Monogram Badge */}
        <div className="w-16 h-16 rounded-full bg-[#1C1A19] border border-[var(--border)] flex items-center justify-center font-display text-2xl text-[var(--accent)] shadow-2xl">
          {siteConfig.monogram}
        </div>
      </div>

      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)] mt-6 animate-pulse">
        INITIALIZING SYSTEM TELEMETRY...
      </span>
    </div>
  );
}
