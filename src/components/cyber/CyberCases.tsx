"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cyberData, CyberCase } from "@/data/cyber";
import {
  ShieldAlert,
  ArrowUpRight,
  ExternalLink,
  AlertTriangle,
  Lock,
  Terminal,
  Activity,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "@/components/common/SocialIcons";

export default function CyberCases() {
  const [activeCaseId, setActiveCaseId] = useState<string>(cyberData.cases[0].id);
  const activeCase = cyberData.cases.find((c) => c.id === activeCaseId) || cyberData.cases[0];

  return (
    <section id="work" className="relative z-10 w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-[76px] bg-[#070A0E] border-t border-[#16202C]">
      {/* Subtle Grid Lines Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#10182415_1px,transparent_1px),linear-gradient(to_bottom,#10182415_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1E293B]">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.16em] text-[#00F59B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-ping" />
              <span>OFFENSIVE CASE STUDIES & CVE REMEDIATIONS</span>
            </div>
            <h2 className="font-display text-[clamp(44px,7vw,96px)] uppercase tracking-tight text-[#E2E8F0] leading-[0.92]">
              EXPLOITS &amp; AUDITS
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-[#8E9CAE] max-w-md leading-relaxed">
            Real-world black-box engagements, zero-day threat telemetry, and verified architectural remediations protecting enterprise perimeters.
          </p>
        </div>

        {/* Tactical Case Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-8">
          {cyberData.cases.map((c) => {
            const isSelected = c.id === activeCaseId;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCaseId(c.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "bg-[#101722] border-[#00F59B] shadow-[0_0_25px_rgba(0,245,155,0.15)]"
                    : "bg-[#090C10] border-[#1E293B] hover:border-[#334155] hover:bg-[#0D1219]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#8E9CAE]">{c.number} // {c.category}</span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                      c.severity === "CRITICAL"
                        ? "bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30"
                        : "bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30"
                    }`}
                  >
                    CVSS {c.cvss} &bull; {c.severity}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-[#E2E8F0] leading-tight">
                  {c.title}
                </h3>
                <p className="font-mono text-xs text-[#8E9CAE] mt-2 line-clamp-2">
                  {c.subtitle}
                </p>
                {isSelected && (
                  <motion.div
                    layoutId="activeCyberCaseGlow"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00F59B] shadow-[0_0_8px_#00F59B]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Case Deep Dive Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-[#090D13] border border-[#1E293B] p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.6)]"
          >
            {/* Case Header Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1E293B]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#10151C] border border-[#1E293B] text-[#00F59B]">
                  TARGET: {activeCase.target}
                </span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#10151C] border border-[#1E293B] text-[#38BDF8]">
                  IMPACT: {activeCase.metrics}
                </span>
              </div>

              {activeCase.githubUrl && (
                <a
                  href={activeCase.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#8E9CAE] hover:text-[#00F59B] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect PoC Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Tactical 3-Column Breakdown: Vulnerability / Exploit / Remediation */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 border-b border-[#1E293B]">
              {/* Problem / Threat Vector */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#EF4444] font-semibold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>01 // Threat Vector &amp; Vulnerability</span>
                </div>
                <p className="font-sans text-sm text-[#8E9CAE] leading-relaxed">
                  {activeCase.problem}
                </p>
              </div>

              {/* Approach / Exploit PoC */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-semibold">
                  <Terminal className="w-4 h-4" />
                  <span>02 // Adversarial Method &amp; PoC</span>
                </div>
                <p className="font-sans text-sm text-[#8E9CAE] leading-relaxed">
                  {activeCase.approach}
                </p>
              </div>

              {/* Remediation / Defensive Patch */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00F59B] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>03 // Defensive Remediation</span>
                </div>
                <p className="font-sans text-sm text-[#8E9CAE] leading-relaxed">
                  {activeCase.remediation}
                </p>
              </div>
            </div>

            {/* Deliverables & Tool Stack */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#E2E8F0] mb-3">
                  Verification Artifacts &amp; Deliverables:
                </h4>
                <ul className="space-y-2">
                  {activeCase.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-mono text-[#8E9CAE]">
                      <ChevronRight className="w-3.5 h-3.5 text-[#00F59B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#E2E8F0] mb-3">
                  Tactical Toolchain Utilized:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCase.tech.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#10151C] border border-[#1E293B] text-xs font-mono text-[#00F59B] hover:border-[#00F59B]/40 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
