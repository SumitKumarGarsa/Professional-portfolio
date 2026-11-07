"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { ArrowDown, ArrowUpRight, FileDown, Terminal } from "lucide-react";

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycling rotating role titles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % siteConfig.rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSelectedWork = () => {
    const el = document.getElementById("selected-work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-128px)] flex flex-col justify-between pt-10 sm:pt-16 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-[76px]">
      <div className="max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
        {/* Intro Tag & Monogram Badge */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 pl-2 pr-3.5 py-1 rounded-full border border-[var(--border)] text-xs font-mono uppercase tracking-[0.14em] text-[var(--text)] bg-[var(--surface)] shadow-sm">
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[var(--border)] shrink-0">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.fullName}
                fill
                sizes="24px"
                priority
                className="object-cover object-top"
              />
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>Hi, I&apos;m {siteConfig.fullName}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
            <Terminal className="w-3.5 h-3.5 text-[var(--muted)]" />
            <div className="h-4 overflow-hidden relative w-[220px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={siteConfig.rotatingRoles[roleIndex]}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="block text-[var(--text)] font-semibold text-xs truncate"
                >
                  {siteConfig.rotatingRoles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Oversized Typographic Headline */}
        <h1 className="font-display text-[clamp(44px,8vw,130px)] uppercase tracking-tight text-[var(--text)] leading-[0.92] select-none max-w-6xl">
          {siteConfig.headline}
        </h1>

        {/* Short Pitch & Value Proposition */}
        <div className="mt-8 sm:mt-12 max-w-2xl">
          <p className="font-sans text-lg sm:text-xl text-[var(--muted)] leading-relaxed font-normal">
            {siteConfig.pitch}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-3 px-7 sm:px-9 py-4 rounded-full bg-[var(--text)] text-[var(--bg)] font-mono text-xs sm:text-sm uppercase tracking-[0.14em] font-bold transition-all duration-300 hover:bg-[var(--accent)] hover:text-white shadow-lg"
          >
            <span>View Work</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href={siteConfig.resumeUrl}
            download={siteConfig.resumeFilename}
            className="group inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full border border-[var(--border)] bg-[var(--surface-card)] text-[var(--text)] font-mono text-xs sm:text-sm uppercase tracking-[0.14em] transition-all duration-300 hover:border-[var(--text)] hover:bg-[var(--surface)]"
          >
            <FileDown className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--text)] transition-colors" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Bottom Telemetry Strip & Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-[var(--border)] flex items-center justify-between font-mono text-xs text-[var(--muted)]">
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline uppercase tracking-widest text-[var(--text)]">
            {siteConfig.location}
          </span>
          <span className="hidden md:inline text-[var(--border)]">|</span>
          <span className="hidden md:inline uppercase tracking-wider">
            {siteConfig.availabilityStatus}
          </span>
        </div>

        <button
          type="button"
          onClick={scrollToSelectedWork}
          className="group flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
          aria-label="Scroll to selected work"
        >
          <span className="uppercase tracking-widest text-[11px]">Explore Projects</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-[var(--accent)]" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
