"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldAlert, Code2, Lock, Cpu, Server, Terminal, Zap } from "lucide-react";
import { usePortfolioMode } from "@/context/PortfolioModeContext";
import { MERN_PORTFOLIO_DATA, CYBER_PORTFOLIO_DATA, CROSSOVER_ADVANTAGE } from "@/data/portfolioData";

export default function Studio() {
  const { mode } = usePortfolioMode();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const data = mode === "cyber" ? CYBER_PORTFOLIO_DATA : MERN_PORTFOLIO_DATA;

  return (
    <section
      id="studio"
      className={`py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b transition-colors duration-500 ${
        mode === "cyber" ? "border-[#1E293B] bg-[#0A0D12]" : "border-[#E3DDD3] bg-[#F4EFEA]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b ${
            mode === "cyber" ? "border-[#1E293B]" : "border-[#DCD4C7]"
          }`}
        >
          <div>
            <span
              className={`font-mono text-xs sm:text-sm uppercase tracking-widest block mb-2 ${
                mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
              }`}
            >
              01 &bull; {mode === "cyber" ? "THREAT INTELLIGENCE & METHODOLOGY" : "STUDIO & ARCHITECTURAL FOUNDATION"}
            </span>
            <h2
              className={`font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight ${
                mode === "cyber" ? "text-[#F1F5F9]" : "text-[#141311]"
              }`}
            >
              {mode === "cyber" ? "OFFENSIVE & DEFENSIVE RIGOR" : "MERN SCALABILITY & CRAFT"}
            </h2>
          </div>

          <p
            className={`max-w-md text-sm sm:text-base leading-relaxed ${
              mode === "cyber" ? "text-[#94A3B8]" : "text-[#615C52]"
            }`}
          >
            {mode === "cyber"
              ? "Bridging adversarial vulnerability discovery with automated DevSecOps pipelines. We dismantle application flaws to construct impenetrable defenses."
              : "Designing high-concurrency Node.js architectures, horizontal MongoDB sharded clusters, and sub-100ms React 19 / Next.js client systems."}
          </p>
        </div>

        {/* Crossover Superpower Box (The MERN + Cybersecurity Dual Advantage) */}
        <div
          className={`mb-16 p-8 sm:p-10 rounded-3xl border transition-all ${
            mode === "cyber"
              ? "bg-[#0D131A] border-[#00F59B]/30 shadow-[0_0_25px_rgba(0,245,155,0.08)]"
              : "bg-[#EFE9DF] border-[#DCD4C7]"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider mb-3 ${
                  mode === "cyber"
                    ? "bg-[#00F59B]/20 text-[#00F59B] border border-[#00F59B]/40"
                    : "bg-[#141311] text-[#F5F2EB]"
                }`}
              >
                The Dual-Discipline Edge
              </span>
              <h3
                className={`font-display text-3xl sm:text-4xl uppercase tracking-wide ${
                  mode === "cyber" ? "text-[#F1F5F9]" : "text-[#141311]"
                }`}
              >
                {CROSSOVER_ADVANTAGE.title}
              </h3>
            </div>
            <p
              className={`max-w-xl text-sm leading-relaxed ${
                mode === "cyber" ? "text-[#94A3B8]" : "text-[#544F46]"
              }`}
            >
              {CROSSOVER_ADVANTAGE.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/10">
            {CROSSOVER_ADVANTAGE.points.map((pt, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span
                  className={`font-mono text-xs font-semibold uppercase ${
                    mode === "cyber" ? "text-[#00F59B]" : "text-[#141311]"
                  }`}
                >
                  0{i + 1} &bull; {pt.title}
                </span>
                <p
                  className={`text-xs leading-relaxed ${
                    mode === "cyber" ? "text-[#64748B]" : "text-[#615C52]"
                  }`}
                >
                  {pt.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Skills Matrix */}
        <div
          className={`rounded-3xl p-8 sm:p-12 border transition-all ${
            mode === "cyber"
              ? "bg-[#0B1017] border-[#1E293B]"
              : "bg-[#141311] text-[#F5F2EB] border-[#2B2925]"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
            <div>
              <span
                className={`font-mono text-xs uppercase tracking-widest block mb-1 ${
                  mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
                }`}
              >
                Verified Arsenal
              </span>
              <h3
                className={`font-display text-3xl sm:text-4xl uppercase tracking-wide ${
                  mode === "cyber" ? "text-[#F1F5F9]" : "text-white"
                }`}
              >
                {mode === "cyber" ? "Offensive & Defensive Skill Matrix" : "Production MERN Stack Matrix"}
              </h3>
            </div>

            {/* Category tabs */}
            <div
              className={`flex flex-wrap gap-2 p-1.5 rounded-xl border ${
                mode === "cyber"
                  ? "bg-[#111823] border-[#1E293B]"
                  : "bg-[#1C1B18] border-[#2D2B26]"
              }`}
            >
              {data.skills.map((cat, idx) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    activeCategoryIndex === idx
                      ? mode === "cyber"
                        ? "bg-[#00F59B] text-[#090C10] font-bold"
                        : "bg-[#F5F2EB] text-[#141311] font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <p
            className={`text-xs font-mono mb-8 ${
              mode === "cyber" ? "text-[#00F59B]/80" : "text-[#9E978B]"
            }`}
          >
            &gt; {data.skills[activeCategoryIndex].description}
          </p>

          {/* Skill items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.skills[activeCategoryIndex].skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-5 rounded-2xl border transition-all ${
                  mode === "cyber"
                    ? "bg-[#0F1622] hover:bg-[#141E2E] border-[#1E293B] hover:border-[#00F59B]/50"
                    : "bg-[#1A1916] hover:bg-[#22211D] border-[#2E2B25]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-sm font-semibold ${
                      mode === "cyber" ? "text-[#E2E8F0]" : "text-[#F5F2EB]"
                    }`}
                  >
                    {skill.name}
                  </span>
                  <span
                    className={`font-mono text-xs ${
                      mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
                    }`}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      mode === "cyber"
                        ? "bg-gradient-to-r from-emerald-500 to-[#00F59B]"
                        : "bg-gradient-to-r from-stone-400 to-[#F5F2EB]"
                    }`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
