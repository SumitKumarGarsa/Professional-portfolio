"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cyberData } from "@/data/cyber";
import { ArrowUpRight, ShieldAlert, Key, Copy, Check, Terminal } from "lucide-react";

export default function CyberCtaBanner() {
  const [copied, setCopied] = useState(false);

  const copyPgp = () => {
    navigator.clipboard.writeText(cyberData.brand.pgpFingerprint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative z-10 w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-[76px] bg-[#05080C] border-t border-[#16202C] overflow-hidden">
      {/* Background Cyber Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00F59B]/10 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00F59B]/40 bg-[#00F59B]/10 text-xs font-mono uppercase tracking-[0.18em] text-[#00F59B] mb-8 shadow-[0_0_20px_rgba(0,245,155,0.25)]">
          <ShieldAlert className="w-4 h-4" />
          <span>INITIATE ENCRYPTED ENGAGEMENT // AVAILABLE FOR AUDITS</span>
        </div>

        {/* Big Headline */}
        <h2 className="font-display text-[clamp(44px,7.5vw,110px)] uppercase tracking-tight text-[#E2E8F0] leading-[0.92] max-w-4xl">
          IDENTIFY ATTACK SURFACES BEFORE ADVERSARIES DO.
        </h2>

        {/* Subtitle */}
        <p className="font-mono text-sm sm:text-base text-[#8E9CAE] max-w-2xl mt-6 leading-relaxed">
          Whether you need a black-box web app penetration test, automated CI/CD DevSecOps gates, or a comprehensive Zero-Trust architecture audit.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/contact?mode=cybersec"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#00F59B] text-[#090C10] font-mono text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[#00D685] shadow-[0_0_30px_rgba(0,245,155,0.45)] hover:shadow-[0_0_40px_rgba(0,245,155,0.7)] hover:scale-102"
          >
            <span>Transmit Engagement Scope</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <button
            type="button"
            onClick={copyPgp}
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-4 sm:py-5 rounded-full bg-[#10151C] border border-[#1E293B] hover:border-[#00F59B] text-[#E2E8F0] font-mono text-sm uppercase tracking-wider transition-all duration-300"
          >
            <Key className="w-4 h-4 text-[#00F59B]" />
            <span>Copy PGP Key ({cyberData.brand.pgpKeyId})</span>
            {copied ? <Check className="w-4 h-4 text-[#00F59B]" /> : <Copy className="w-4 h-4 text-[#8E9CAE]" />}
          </button>
        </div>

        {/* Terminal footnote */}
        <div className="mt-12 inline-flex items-center gap-3 text-xs font-mono text-[#8E9CAE]">
          <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-ping" />
          <span>PGP Fingerprint: {cyberData.brand.pgpFingerprint}</span>
        </div>
      </div>
    </section>
  );
}
