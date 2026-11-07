"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cyberData, CyberService } from "@/data/cyber";
import {
  ShieldCheck,
  Cpu,
  Lock,
  Terminal,
  ArrowUpRight,
  CheckCircle,
  ChevronRight,
  Crosshair,
} from "lucide-react";

export default function CyberServices() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const serviceIcons = [
    <Crosshair key="1" className="w-6 h-6 text-[#00F59B]" />,
    <Terminal key="2" className="w-6 h-6 text-[#38BDF8]" />,
    <Lock key="3" className="w-6 h-6 text-[#A78BFA]" />,
    <Cpu key="4" className="w-6 h-6 text-[#F59E0B]" />,
  ];

  return (
    <section id="services" className="relative z-10 w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-[76px] bg-[#090C10] border-t border-[#16202C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1E293B]">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.16em] text-[#00F59B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00F59B]" />
              <span>OFFENSIVE CAPABILITIES &amp; CLOUD RESILIENCE</span>
            </div>
            <h2 className="font-display text-[clamp(44px,7vw,96px)] uppercase tracking-tight text-[#E2E8F0] leading-[0.92]">
              SEC-SERVICES
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-[#8E9CAE] max-w-md leading-relaxed">
            Rigorous penetration tests, DevSecOps pipeline automation, and Zero-Trust architecture audits engineered to withstand sophisticated adversaries.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          {cyberData.services.map((svc: CyberService, idx: number) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={svc.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "bg-[#101722] border-[#00F59B] shadow-[0_0_30px_rgba(0,245,155,0.12)] -translate-y-1"
                    : "bg-[#0A0E14] border-[#1E293B]"
                }`}
              >
                <div>
                  {/* Card Top Meta */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#1E293B]/70">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#141C27] border border-[#1E293B]">
                        {serviceIcons[idx % serviceIcons.length]}
                      </div>
                      <span className="font-mono text-xs text-[#8E9CAE]">PHASE {svc.number}</span>
                    </div>

                    <span className="font-mono text-xs text-[#00F59B] uppercase tracking-wider font-semibold">
                      AUDIT READY
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#E2E8F0] mt-6 leading-tight">
                    {svc.title}
                  </h3>
                  <p className="font-mono text-xs text-[#00F59B] mt-2">
                    {svc.tagline}
                  </p>
                  <p className="font-sans text-sm text-[#8E9CAE] mt-4 leading-relaxed">
                    {svc.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-6 border-t border-[#1E293B]/70">
                    <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#8E9CAE] mb-3">
                      Core Engagement Deliverables:
                    </h4>
                    <ul className="space-y-2.5">
                      {svc.deliverables.map((deliv, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs font-mono text-[#CBD5E1]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00F59B] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Tags & Action Link */}
                <div className="mt-8 pt-6 border-t border-[#1E293B]/70 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#141C27] text-[#8E9CAE] border border-[#1E293B]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/contact?mode=cybersec&scope=${encodeURIComponent(svc.title)}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#00F59B] hover:underline"
                  >
                    <span>Scope Audit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
