"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="contact" className="relative z-10 w-full py-24 sm:py-36 px-6 sm:px-12 lg:px-[76px] border-t border-[var(--border)] bg-[var(--bg)] overflow-hidden transition-colors duration-400">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Monospace Micro Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-ping" />
          <span>START A CONVERSATION</span>
        </div>

        {/* Giant Editorial Headline */}
        <h2 className="font-display text-[clamp(48px,9vw,150px)] uppercase tracking-tight text-[var(--text)] leading-[0.9] select-none max-w-6xl">
          HAVE AN IDEA? <br />
          <span className="text-[var(--accent)]">LET&apos;S BUILD IT.</span>
        </h2>

        <p className="font-sans text-base sm:text-xl text-[var(--muted)] max-w-2xl mt-8 leading-relaxed">
          Whether you need a ground-up scalable web product, high-performance API architecture, or a technical consultation, I am ready to collaborate.
        </p>

        {/* Giant CTA Button */}
        <div className="mt-12 sm:mt-16">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-4 px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-[var(--text)] text-[var(--bg)] font-mono text-sm sm:text-base uppercase tracking-[0.16em] font-bold transition-all duration-300 hover:bg-[var(--accent)] hover:text-white shadow-2xl hover:scale-105"
          >
            <span>Initiate Project Brief</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
