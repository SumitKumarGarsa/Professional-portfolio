import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, ShieldAlert } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import { cn } from "@/utils/cn";

export default function ModeToggle({ className = "", isMobileDrawer = false }) {
  const { mode, setMode } = useMode();
  const devTabRef = useRef(null);
  const cybersecTabRef = useRef(null);

  // Keyboard accessibility: Arrow Left/Right to switch, Enter/Space to select
  const handleKeyDown = (e, currentTarget) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setMode("cybersec");
      cybersecTabRef.current?.focus();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setMode("dev");
      devTabRef.current?.focus();
    }
  };

  const isDev = mode === "dev";
  const isCybersec = mode === "cybersec";

  return (
    <div
      role="tablist"
      aria-label="Switch portfolio mode"
      className={cn(
        "relative rounded-full p-[6px] border flex items-center select-none transition-colors duration-400",
        isMobileDrawer ? "w-full min-h-[48px] justify-between" : "w-auto inline-flex",
        isDev
          ? "bg-[#EFE8DC] border-[#D9CFBE] shadow-toggle-inner"
          : "bg-[#101612] border-[#1E3327] shadow-[0_0_15px_rgba(0,255,156,0.1)]",
        className
      )}
    >
      {/* 1. LEFT SEGMENT: MERN DEV */}
      <button
        ref={devTabRef}
        role="tab"
        id="tab-dev"
        aria-selected={isDev}
        tabIndex={isDev ? 0 : -1}
        aria-controls="panel-dev"
        onClick={() => setMode("dev")}
        onKeyDown={(e) => handleKeyDown(e, "dev")}
        className={cn(
          "relative z-10 flex items-center justify-center gap-2 rounded-full font-mono uppercase font-bold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
          isMobileDrawer
            ? "flex-1 py-3 text-sm min-h-[42px]"
            : "px-3.5 sm:px-4 py-1.5 text-[13px] sm:text-[14px]",
          "tracking-[0.05em]",
          isDev
            ? "text-white"
            : isCybersec
            ? "text-[#6B8B77] hover:text-[#E2FBEF] focus-visible:ring-[#00FF9C]"
            : "text-[#6B6257] hover:text-[#141414] focus-visible:ring-[#141414]"
        )}
      >
        <Code2 className="w-4 h-4 flex-shrink-0 relative z-10 stroke-[2.2]" />
        <span className="relative z-10">MERN DEV</span>

        {/* Sliding Pill Indicator for DEV */}
        {isDev && (
          <motion.div
            layoutId="activePillIndicator"
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="absolute inset-0 rounded-full bg-[#141414] shadow-sm z-0"
          />
        )}
      </button>

      {/* 2. RIGHT SEGMENT: CYBERSEC */}
      <button
        ref={cybersecTabRef}
        role="tab"
        id="tab-cybersec"
        aria-selected={isCybersec}
        tabIndex={isCybersec ? 0 : -1}
        aria-controls="panel-cybersec"
        onClick={() => setMode("cybersec")}
        onKeyDown={(e) => handleKeyDown(e, "cybersec")}
        className={cn(
          "relative z-10 flex items-center justify-center gap-2 rounded-full font-mono uppercase font-bold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
          isMobileDrawer
            ? "flex-1 py-3 text-sm min-h-[42px]"
            : "px-3.5 sm:px-4 py-1.5 text-[13px] sm:text-[14px]",
          "tracking-[0.05em]",
          isCybersec
            ? "text-[#0A0D0B] font-extrabold"
            : isDev
            ? "text-[#6B6257] hover:text-[#141414] focus-visible:ring-[#141414]"
            : "text-[#6B8B77] hover:text-[#E2FBEF] focus-visible:ring-[#00FF9C]"
        )}
      >
        <ShieldAlert className="w-4 h-4 flex-shrink-0 relative z-10 stroke-[2.2]" />
        <span className="relative z-10">CYBERSEC</span>

        {/* Sliding Pill Indicator for CYBERSEC */}
        {isCybersec && (
          <motion.div
            layoutId="activePillIndicator"
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="absolute inset-0 rounded-full bg-[#00FF9C] shadow-[0_0_16px_rgba(0,255,156,0.65)] z-0"
          />
        )}
      </button>
    </div>
  );
}
