"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { devData } from "@/data/dev";
import { siteConfig } from "@/data/site";
import {
  ArrowUpRight,
  FileDown,
  Terminal,
  Activity,
  Database,
  Server,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  Radio,
} from "lucide-react";

export default function DevHero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"benchmarks" | "topology" | "security">("benchmarks");
  const [livePing, setLivePing] = useState(12.4);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % devData.hero.rotatingTitles.length);
    }, 2800);

    const pingInterval = setInterval(() => {
      setLivePing(+(11.8 + Math.random() * 1.8).toFixed(1));
    }, 2400);

    return () => {
      clearInterval(roleInterval);
      clearInterval(pingInterval);
    };
  }, []);

  return (
    <section id="studio" className="relative z-10 w-full flex flex-col justify-between pt-[72px] sm:pt-[80px] lg:pt-[88px] pb-10 sm:pb-14 px-6 sm:px-12 lg:px-[76px] overflow-hidden">
      {/* Ambient Warm Luxury Radial Glow */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#FF6A1A]/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#FF6A1A]/5 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full pt-2 sm:pt-3 pb-4 sm:pb-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left 7 Columns: Editorial Headline, Role Rotator & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Micro Status Pill */}
          <div className="inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-card)] text-xs font-mono uppercase tracking-[0.15em] text-[var(--text)] mb-6 shadow-sm">
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
            <span className="w-2 h-2 rounded-full bg-[#FF6A1A] animate-pulse" />
            <span>MERN STACK ARCHITECT &bull; AVAILABLE GLOBALLY</span>
          </div>

          {/* Giant Condensed Display Headline */}
          <h1 className="font-display text-[clamp(48px,7.5vw,120px)] uppercase tracking-tight text-[var(--text)] leading-[0.90] select-none">
            {devData.hero.headline}
          </h1>

          {/* Typewriter Dynamic Title Rotator */}
          <div className="mt-4 flex items-center gap-3 font-mono text-sm sm:text-base uppercase tracking-wider text-[var(--muted)]">
            <Terminal className="w-4 h-4 text-[#FF6A1A]" />
            <div className="h-6 overflow-hidden relative w-[320px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={devData.hero.rotatingTitles[roleIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="block text-[#FF6A1A] font-bold"
                >
                  {devData.hero.rotatingTitles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* 2-line Value Pitch */}
          <p className="font-sans text-base sm:text-lg text-[var(--muted)] mt-5 max-w-xl leading-relaxed">
            {devData.hero.pitch}
          </p>

          {/* Core Technical Badges (Engineering Depth) */}
          <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-[11px] text-[var(--muted)]">
            <span className="px-3 py-1 rounded-full bg-[var(--surface-card)] border border-[var(--border)] text-[var(--text)] flex items-center gap-1.5 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00F59B]" />
              <span>Sub-100ms P99 Latency</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-[var(--surface-card)] border border-[var(--border)] text-[var(--text)] flex items-center gap-1.5 shadow-sm">
              <Database className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>MongoDB Sharding</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-[var(--surface-card)] border border-[var(--border)] text-[var(--text)] flex items-center gap-1.5 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#FFBD2E]" />
              <span>Zero Runtime Bloat</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href="#work"
              className="group inline-flex items-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-[var(--text)] text-[var(--bg)] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[#FF6A1A] hover:text-white shadow-xl hover:shadow-[0_0_25px_rgba(255,106,26,0.45)] hover:scale-102"
            >
              <span>View Selected Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href={siteConfig.resumeUrl}
              download={siteConfig.resumeFilename}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-4 rounded-full border border-[var(--border)] bg-[var(--surface-card)] text-[var(--text)] font-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[var(--surface)] hover:border-[var(--text)] shadow-sm"
            >
              <FileDown className="w-4 h-4 text-[var(--muted)] group-hover:text-[var(--text)] transition-colors" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right 5 Columns: Interactive Multi-Tab System Architecture Console */}
        <div className="lg:col-span-5 w-full">
          <div className="p-6 sm:p-7 rounded-3xl bg-[var(--surface-card)] border border-[var(--border)] shadow-2xl flex flex-col gap-4 relative overflow-hidden group">
            {/* Subtle background tech grid */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(to right, var(--text) 1px, transparent 1px), linear-gradient(to bottom, var(--text) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden="true"
            />

            {/* Header: Live Telemetry Heartbeat */}
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border)] font-mono text-xs relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-pulse" />
                <span className="text-[var(--text)] font-semibold tracking-wider uppercase text-[11px]">
                  SYSTEM CONSOLE
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                <Radio className="w-3 h-3 text-[#00F59B] animate-ping" />
                <span className="tabular-nums font-semibold text-[var(--text)]">{livePing}MS</span>
                <span>(P99 TICK)</span>
              </div>
            </div>

            {/* Interactive Console Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-[var(--surface)] border border-[var(--border)] font-mono text-[10px] uppercase tracking-wider relative z-10">
              <button
                type="button"
                onClick={() => setActiveTab("benchmarks")}
                className={`flex-1 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === "benchmarks"
                    ? "bg-[var(--surface-card)] text-[var(--text)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                Benchmarks
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("topology")}
                className={`flex-1 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === "topology"
                    ? "bg-[var(--surface-card)] text-[var(--text)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                Topology
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("security")}
                className={`flex-1 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === "security"
                    ? "bg-[var(--surface-card)] text-[var(--text)] shadow-sm"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                Security
              </button>
            </div>

            {/* Tab 1: Live Benchmarks */}
            {activeTab === "benchmarks" && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-3.5 relative z-10"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] flex items-center gap-1.5 mb-1.5">
                      <Database className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>Write P99</span>
                    </span>
                    <span className="font-display text-2xl sm:text-3xl text-[var(--text)] leading-none">
                      &lt;14MS
                    </span>
                    <span className="font-mono text-[9px] text-[var(--muted)] mt-1">MongoDB WiredTiger</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] flex items-center gap-1.5 mb-1.5">
                      <Activity className="w-3.5 h-3.5 text-[#00F59B]" />
                      <span>Throughput</span>
                    </span>
                    <span className="font-display text-2xl sm:text-3xl text-[var(--text)] leading-none">
                      25K+
                    </span>
                    <span className="font-mono text-[9px] text-[var(--muted)] mt-1">Req/sec cluster</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] flex items-center gap-1.5 mb-1.5">
                      <Server className="w-3.5 h-3.5 text-[var(--accent)]" />
                      <span>Availability</span>
                    </span>
                    <span className="font-display text-2xl sm:text-3xl text-[var(--text)] leading-none">
                      99.99%
                    </span>
                    <span className="font-mono text-[9px] text-[var(--muted)] mt-1">Multi-AZ Uptime SLA</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)] flex items-center gap-1.5 mb-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#FFBD2E]" />
                      <span>Cache Ratio</span>
                    </span>
                    <span className="font-display text-2xl sm:text-3xl text-[var(--text)] leading-none">
                      96.4%
                    </span>
                    <span className="font-mono text-[9px] text-[var(--muted)] mt-1">Redis In-Memory</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] font-mono text-xs flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[var(--muted)] uppercase tracking-wider">PRIMARY STACK:</span>
                    <span className="text-[var(--text)] font-semibold">MERN + NEXT.JS 16 + REDIS</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[var(--muted)] uppercase tracking-wider">PIPELINE:</span>
                    <span className="text-[var(--accent)] font-semibold">DOCKER // GITHUB ACTIONS</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Topology Mesh Pipeline */}
            {activeTab === "topology" && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 relative z-10 font-mono text-[11px]"
              >
                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[var(--text)] font-semibold">
                    <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>01 CLIENT LAYER</span>
                  </div>
                  <span className="text-[10px] text-[var(--muted)]">Next.js 16 + React 19 SSR</span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[var(--text)] font-semibold">
                    <Server className="w-3.5 h-3.5 text-[#FFBD2E]" />
                    <span>02 API GATEWAY</span>
                  </div>
                  <span className="text-[10px] text-[var(--muted)]">Node.js + Redis Leaky Bucket</span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[var(--text)] font-semibold">
                    <Zap className="w-3.5 h-3.5 text-[#00F59B]" />
                    <span>03 DISTRIBUTED CACHE</span>
                  </div>
                  <span className="text-[10px] text-[var(--muted)]">Redis Cluster In-Memory</span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[var(--text)] font-semibold">
                    <Database className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>04 DATA PERSISTENCE</span>
                  </div>
                  <span className="text-[10px] text-[var(--muted)]">MongoDB Sharded Replica Set</span>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Security & Runtime Hardening */}
            {activeTab === "security" && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 relative z-10 font-mono text-[11px]"
              >
                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between">
                  <span className="text-[var(--muted)]">TRANSPORT ENCRYPTION:</span>
                  <span className="text-[#00F59B] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    TLS 1.3 / mTLS Mesh
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between">
                  <span className="text-[var(--muted)]">OWASP PEN-TEST STATUS:</span>
                  <span className="text-[#00F59B] font-semibold">0 CRITICALS MITIGATED</span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between">
                  <span className="text-[var(--muted)]">PAYLOAD VALIDATION:</span>
                  <span className="text-[var(--accent)] font-semibold">STRICT ZOD CONTRACTS</span>
                </div>

                <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-between">
                  <span className="text-[var(--muted)]">RATE LIMIT POLICY:</span>
                  <span className="text-[var(--text)] font-semibold">500 REQ/MIN SLIDING</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Telemetry Numbers Strip spanning full width */}
        <div className="col-span-1 lg:col-span-12 mt-4 pt-8 border-t border-[var(--border)] w-full grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
          {devData.stats.map((s) => (
            <div key={s.label}>
              <span className="font-display text-3xl sm:text-4xl text-[var(--text)] block leading-none">
                {s.value}
              </span>
              <span className="text-[10px] sm:text-xs text-[var(--muted)] uppercase tracking-wider mt-1 block">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
