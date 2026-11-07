"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cyberData } from "@/data/cyber";
import {
  ShieldAlert,
  Terminal,
  Key,
  Copy,
  Check,
  ArrowUpRight,
  Crosshair,
  Lock,
  Cpu,
  Radio,
  FileCode,
} from "lucide-react";

export default function CyberHero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [copiedPgp, setCopiedPgp] = useState(false);
  const [bootStep, setBootStep] = useState(0);

  // Cycling titles
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % cyberData.hero.titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Sequential terminal command line typing
  useEffect(() => {
    const timer = setInterval(() => {
      setBootStep((prev) => (prev < cyberData.hero.terminalBoot.length ? prev + 1 : prev));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const copyPgp = () => {
    navigator.clipboard.writeText(cyberData.brand.pgpFingerprint);
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2200);
  };

  return (
    <section id="studio" className="relative z-10 w-full flex flex-col justify-between pt-[72px] sm:pt-[80px] lg:pt-[88px] pb-10 sm:pb-14 px-6 sm:px-12 lg:px-[76px] overflow-hidden">
      {/* Ambient Cyber Neon Glow */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#00F59B]/10 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#00F59B]/5 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full pt-2 sm:pt-3 pb-4 sm:pb-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left 7 Columns: Tactical Identity & Doctrines */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Status Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00F59B]/40 bg-[#00F59B]/10 text-xs font-mono uppercase tracking-[0.14em] text-[#00F59B] shadow-[0_0_15px_rgba(0,245,155,0.25)]">
              <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-ping" />
              <span>CALLSIGN: {cyberData.brand.callsign}</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1E293B] bg-[#10151C] text-xs font-mono uppercase tracking-wider text-[#8E9CAE]">
              <Radio className="w-3.5 h-3.5 text-[#00F59B]" />
              <span>DEFCON 3 &bull; OFFENSIVE DEFENSE</span>
            </div>
          </div>

          {/* Giant Condensed Headline */}
          <h1 className="font-display text-[clamp(44px,7.5vw,115px)] uppercase tracking-tight text-[#E2E8F0] leading-[0.92] select-none">
            {cyberData.hero.headline}
          </h1>

          {/* Dynamic Title Rotator with blinking cursor */}
          <div className="mt-4 flex items-center gap-2 font-mono text-sm sm:text-base uppercase tracking-wider text-[#8E9CAE]">
            <span className="text-[#00F59B] font-bold">&gt;</span>
            <div className="h-6 overflow-hidden relative w-[320px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={cyberData.hero.titles[titleIdx]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="block text-[#00F59B] font-bold"
                >
                  {cyberData.hero.titles[titleIdx]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="w-2 h-4 bg-[#00F59B] animate-pulse inline-block" />
          </div>

          {/* Pitch */}
          <p className="font-sans text-base sm:text-lg text-[#8E9CAE] mt-6 max-w-xl leading-relaxed">
            {cyberData.hero.pitch}
          </p>

          {/* 55% Offensive / 45% Defensive Focus Bar */}
          <div className="mt-8 p-4 rounded-xl bg-[#10151C] border border-[#1E293B] w-full max-w-xl">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-[#00F59B] font-semibold">55% OFFENSIVE AUDITING</span>
              <span className="text-[#38BDF8] font-semibold">45% DEFENSIVE HARDENING</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#161D27] overflow-hidden flex">
              <div className="h-full bg-[#00F59B] w-[55%] shadow-[0_0_10px_#00F59B]" />
              <div className="h-full bg-[#38BDF8] w-[45%]" />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-[#8E9CAE] mt-2">
              <span>Web Pentesting &bull; Red Team &bull; CVE Exploits</span>
              <span>DevSecOps &bull; Zero Trust &bull; Cloud Auditing</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href="#work"
              className="group inline-flex items-center gap-3 px-7 sm:px-9 py-4 rounded-full bg-[#00F59B] text-[#090C10] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[#00D685] shadow-[0_0_24px_rgba(0,245,155,0.4)] hover:shadow-[0_0_32px_rgba(0,245,155,0.6)] hover:scale-102"
            >
              <span>View Exploit Cases</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact?mode=cybersec"
              className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-4 rounded-full border border-[#00F59B]/40 bg-[#10151C] text-[#00F59B] font-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#00F59B]/10 hover:border-[#00F59B]"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Initiate Security Audit</span>
            </Link>
          </div>

          {/* PGP Fingerprint Pill */}
          <div className="mt-8 flex items-center gap-3 font-mono text-xs text-[#8E9CAE]">
            <button
              type="button"
              onClick={copyPgp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#10151C] border border-[#1E293B] hover:border-[#00F59B] transition-colors cursor-pointer text-[#E2E8F0]"
            >
              <Key className="w-3.5 h-3.5 text-[#00F59B]" />
              <span className="text-[11px]">PGP: {cyberData.brand.pgpKeyId}</span>
              {copiedPgp ? <Check className="w-3.5 h-3.5 text-[#00F59B]" /> : <Copy className="w-3.5 h-3.5 text-[#8E9CAE]" />}
            </button>
            <span className="text-[11px] text-[#8E9CAE] hidden sm:inline">RSA 4096-bit &bull; Encrypted Comms</span>
          </div>
        </div>

        {/* Right 5 Columns: Interactive Cyber Warfare Terminal */}
        <div className="lg:col-span-5 relative">
          {/* Terminal Box */}
          <div className="w-full rounded-2xl bg-[#090C10] border border-[#1E293B] shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden font-mono text-xs">
            {/* Window Header */}
            <div className="px-4 py-3 bg-[#10151C] border-b border-[#1E293B] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                <span className="w-3 h-3 rounded-full bg-[#EAB308]/80" />
                <span className="w-3 h-3 rounded-full bg-[#00F59B]/80" />
              </div>
              <span className="text-[11px] text-[#8E9CAE]">bash - sumit@shadow-root:~</span>
              <div className="w-3 h-3" />
            </div>

            {/* Terminal Body */}
            <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed max-h-[380px] overflow-y-auto space-y-4">
              {cyberData.hero.terminalBoot.slice(0, bootStep).map((step, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-[#00F59B]">
                    <span className="text-[#8E9CAE]">root@shadow-root:~$</span>
                    <span>{step.cmd}</span>
                  </div>
                  <div className="text-[#8E9CAE] pl-4 border-l border-[#1E293B] whitespace-pre-wrap">
                    {step.output}
                  </div>
                </div>
              ))}

              {/* Live Blinking Prompt */}
              <div className="flex items-center gap-2 text-[#00F59B]">
                <span className="text-[#8E9CAE]">root@shadow-root:~$</span>
                <span className="w-2 h-4 bg-[#00F59B] animate-pulse inline-block" />
              </div>
            </div>

            {/* Terminal Telemetry Footer */}
            <div className="px-4 py-2.5 bg-[#05070A] border-t border-[#1E293B] flex items-center justify-between text-[10px] text-[#8E9CAE]">
              <span className="flex items-center gap-1.5 text-[#00F59B]">
                <ShieldAlert className="w-3 h-3" />
                <span>mTLS Mesh: ENFORCED</span>
              </span>
              <span>180+ CVEs Identified &bull; Zero Leaks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
