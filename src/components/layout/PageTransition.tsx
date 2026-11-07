"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMode } from "@/context/ModeContext";

interface PageMeta {
  number: string;
  title: string;
  category: string;
  badge: string;
}

function getPageMeta(pathname: string, isCyber: boolean): PageMeta {
  const path = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  if (isCyber) {
    if (path === "/") {
      return {
        number: "00",
        title: "HOME",
        category: "PRIMARY TERMINAL & SYSTEMS",
        badge: "CYBERSEC RESEARCH",
      };
    }
    if (path === "/studio") {
      return {
        number: "01",
        title: "THREAT LAB",
        category: "OFFENSIVE & DEFENSIVE DOCTRINE",
        badge: "CLEARANCE // LEVEL 4",
      };
    }
    if (path === "/work") {
      return {
        number: "02",
        title: "EXPLOITS & CASES",
        category: "CVE CREDITS & RED-TEAM CASES",
        badge: "VERIFIED RECON",
      };
    }
    if (path.startsWith("/work/")) {
      const slug = path.replace("/work/", "").replace(/-/g, " ").toUpperCase();
      return {
        number: "02",
        title: slug,
        category: "SECURITY CASE REPORT",
        badge: "TARGET ARCHITECTURE",
      };
    }
    if (path === "/services") {
      return {
        number: "03",
        title: "SEC-SERVICES",
        category: "PEN-TESTING & HARDENING",
        badge: "AUDIT SCOPE",
      };
    }
    if (path === "/journal") {
      return {
        number: "04",
        title: "THREAT INTEL",
        category: "VULNERABILITY BRIEFINGS & LABS",
        badge: "DEEP DIVE DISPATCH",
      };
    }
    if (path.startsWith("/journal/")) {
      const slug = path.replace("/journal/", "").replace(/-/g, " ").toUpperCase();
      return {
        number: "04",
        title: slug,
        category: "THREAT INTEL BRIEFING",
        badge: "DEEP DIVE DISPATCH",
      };
    }
    if (path === "/contact") {
      return {
        number: "05",
        title: "CONTACT",
        category: "ENCRYPTED TRANSMISSION",
        badge: "PGP / DIRECT SCOPE",
      };
    }
  }

  // MERN Stack Developer Mode (Default)
  if (path === "/") {
    return {
      number: "00",
      title: "HOME",
      category: "PRIMARY OVERVIEW & SYSTEMS",
      badge: "MERN ARCHITECT",
    };
  }
  if (path === "/studio") {
    return {
      number: "01",
      title: "STUDIO",
      category: "PHILOSOPHY, STORY & METHODOLOGY",
      badge: "MERN ARCHITECT",
    };
  }
  if (path === "/work") {
    return {
      number: "02",
      title: "WORK",
      category: "SELECTED PRODUCTION SYSTEMS",
      badge: "INDEX OF SYSTEMS",
    };
  }
  if (path.startsWith("/work/")) {
    const slug = path.replace("/work/", "").replace(/-/g, " ").toUpperCase();
    return {
      number: "02",
      title: slug,
      category: "CASE STUDY & ARCHITECTURE",
      badge: "PRODUCTION BLUEPRINT",
    };
  }
  if (path === "/services") {
    return {
      number: "03",
      title: "SERVICES",
      category: "CAPABILITIES & INFRASTRUCTURE",
      badge: "ENGINEERING SCOPE",
    };
  }
  if (path === "/journal") {
    return {
      number: "04",
      title: "JOURNAL",
      category: "TECHNICAL NOTES & ESSAYS",
      badge: "CASE NOTES & PAPERS",
    };
  }
  if (path.startsWith("/journal/")) {
    const slug = path.replace("/journal/", "").replace(/-/g, " ").toUpperCase();
    return {
      number: "04",
      title: slug,
      category: "TECHNICAL WHITE PAPER",
      badge: "ENGINEERING ANALYSIS",
    };
  }
  if (path === "/contact") {
    return {
      number: "05",
      title: "CONTACT",
      category: "DIRECT INQUIRY & ENGAGEMENT",
      badge: "OPEN FOR CONTRACTS",
    };
  }

  return {
    number: "00",
    title: "HOME",
    category: "MERN STACK ARCHITECT",
    badge: "AVAILABLE GLOBALLY",
  };
}

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isCyber } = useMode();

  const meta = getPageMeta(pathname, isCyber);
  const accentColor = isCyber ? "#00F59B" : "var(--accent)";
  const bgClass = isCyber ? "bg-[#04080C]" : "bg-[#141312]";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="min-h-screen flex flex-col flex-1"
        exit={{ opacity: 0, transition: { duration: 0.12 } }}
      >
        {/* Editorial Top Curtain Wipe during Route Transition displaying Target Page Title */}
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 0.65,
            delay: 0.38,
            ease: [0.76, 0, 0.24, 1],
          }}
          className={`fixed inset-0 z-[999] pointer-events-none flex flex-col justify-between p-6 sm:p-10 lg:p-14 select-none ${bgClass}`}
          aria-hidden="true"
        >
          {/* Subtle noise / film-grain overlay inside curtain */}
          <div className="film-grain-overlay opacity-25" />

          {/* Top Telemetry Row */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#8E8679]">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: accentColor }}
              />
              <span className="text-[#EFEAE2] font-semibold">
                SUMIT KUMAR GARSA
              </span>
              <span className="hidden sm:inline text-[#6F6A62]">{"//"}</span>
              <span className="hidden sm:inline">
                {isCyber ? "CYBERSEC RESEARCH" : "MERN ARCHITECT"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-[#6F6A62]">ROUTE {"//"}</span>
              <span style={{ color: accentColor }} className="font-bold">
                {meta.number}
              </span>
            </div>
          </div>

          {/* Centered Destination Page Display */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto px-4 max-w-5xl mx-auto w-full">
            {/* Number & Category Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex items-center justify-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-4"
              style={{ color: accentColor }}
            >
              <span className="font-bold">{meta.number}</span>
              <span className="text-[#8E8679]">&bull;</span>
              <span className="tracking-[0.16em]">{meta.category}</span>
            </motion.div>

            {/* Giant Bebas Neue Destination Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(64px,14vw,180px)] uppercase tracking-tight text-[#EFEAE2] leading-[0.9] select-none drop-shadow-2xl text-center"
            >
              {meta.title}
            </motion.h1>

            {/* Status & Telemetry Pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.08, ease: "easeOut" }}
              className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-[10px] sm:text-xs text-[#8E8679] uppercase tracking-widest"
            >
              <span className="px-3 py-1 rounded-full border border-[rgba(239,234,226,0.14)] bg-[#1C1A19]/70 text-[#EFEAE2]">
                {meta.badge}
              </span>
              <span className="text-[#6F6A62]">&bull;</span>
              <span style={{ color: accentColor }} className="font-semibold">
                STATUS 200 OK
              </span>
              <span className="text-[#6F6A62] hidden sm:inline">&bull;</span>
              <span className="hidden sm:inline">P99 &lt; 14MS</span>
            </motion.div>

            {/* Center Sweeping Accent Hairline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-40 sm:w-64 h-[2px] mt-6 sm:mt-8 origin-center opacity-80"
              style={{
                background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
              }}
            />
          </div>

          {/* Bottom Telemetry Row */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#8E8679]">
            <div className="hidden sm:block">
              ENGINEERING SCALABLE SYSTEMS // ZERO COMPROMISE
            </div>
            <div className="block sm:hidden">
              SYSTEMS ACTIVE
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#6F6A62]">DISPATCH:</span>
              <span className="text-[#EFEAE2] font-semibold">{pathname}</span>
            </div>
          </div>

          {/* Bottom Laser Hairline Tracing the Curtain Edge */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] opacity-90 shadow-[0_0_16px_currentColor]"
            style={{
              backgroundColor: accentColor,
              color: accentColor,
            }}
          />
        </motion.div>

        {/* Content Container with Subtle Stagger Fade */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{
            duration: 0.45,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col flex-1"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
