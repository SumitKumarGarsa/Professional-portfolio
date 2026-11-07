"use client";

import React from "react";
import { ArrowDownRight, ShieldCheck, Code2, Terminal, Sparkles, ArrowRight } from "lucide-react";
import { usePortfolioMode } from "@/context/PortfolioModeContext";
import { MERN_PORTFOLIO_DATA, CYBER_PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { mode, toggleMode } = usePortfolioMode();
  const data = mode === "cyber" ? CYBER_PORTFOLIO_DATA : MERN_PORTFOLIO_DATA;

  const triggerMenu = () => {
    const btn = document.querySelector('button[aria-label="Open Navigation Menu"]') as HTMLButtonElement | null;
    if (btn) btn.click();
  };

  return (
    <section
      className={`relative pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-32 px-6 sm:px-12 md:px-16 border-b transition-colors duration-500 ${
        mode === "cyber"
          ? "border-[#1E293B] bg-[#090C10]"
          : "border-[#E3DDD3] bg-[#F4EFEA]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top telemetry & specialization pill */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider border transition-all ${
              mode === "cyber"
                ? "bg-[#00F59B]/10 text-[#00F59B] border-[#00F59B]/30 shadow-[0_0_15px_rgba(0,245,155,0.2)]"
                : "bg-[#EAE4DA] text-[#4A453C] border-[#D4CCC0]"
            }`}
          >
            {mode === "cyber" ? (
              <>
                <ShieldCheck className="w-3.5 h-3.5 text-[#00F59B]" />
                <span>ACTIVE MODE: CYBERSECURITY ENGINEER &amp; AUDITOR</span>
              </>
            ) : (
              <>
                <Code2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>ACTIVE MODE: MERN STACK ARCHITECT &amp; DEV</span>
              </>
            )}
          </div>

          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border ${
              mode === "cyber"
                ? "bg-[#111822] text-[#94A3B8] border-[#1E293B]"
                : "bg-white/60 text-[#6B655A] border-[#D4CCC0]"
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>{data.hero.tagline}</span>
          </div>
        </div>

        {/* Editorial Headline matching user screenshots */}
        <div className="mb-10 sm:mb-14">
          <h1
            className={`font-display text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] tracking-tight uppercase font-bold leading-[0.88] transition-colors duration-300 ${
              mode === "cyber" ? "text-[#F1F5F9]" : "text-[#141311]"
            }`}
          >
            {data.hero.headlineLine1}
            <br />
            <span
              className={
                mode === "cyber"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00F59B] via-[#38BDF8] to-[#E2E8F0]"
                  : "text-[#141311]"
              }
            >
              {data.hero.headlineLine2}
            </span>
          </h1>
        </div>

        {/* Editorial Subtitle with inline code blocks & interactive controls */}
        <div className="max-w-3xl mb-14">
          <p
            className={`text-lg sm:text-xl md:text-2xl leading-relaxed font-sans mb-8 transition-colors duration-300 ${
              mode === "cyber" ? "text-[#94A3B8]" : "text-[#4A463E]"
            }`}
          >
            {data.hero.description}
          </p>

          <p
            className={`text-sm sm:text-base leading-relaxed mb-8 font-mono ${
              mode === "cyber" ? "text-[#64748B]" : "text-[#706B60]"
            }`}
          >
            Open the full-screen curtain via{" "}
            <kbd
              className={`px-2 py-0.5 rounded font-mono text-xs font-semibold ${
                mode === "cyber"
                  ? "bg-[#1E293B] border border-[#334155] text-[#00F59B]"
                  : "bg-[#E4DDD2] border border-[#D3CAC0] text-[#141311]"
              }`}
            >
              Escape
            </kbd>{" "}
            or the hamburger button. The rows cascade on a{" "}
            <code
              className={`px-1.5 py-0.5 rounded font-mono text-xs ${
                mode === "cyber"
                  ? "bg-[#1E293B] border border-[#334155] text-[#00F59B]"
                  : "bg-[#E4DDD2] border border-[#D3CAC0] text-[#141311]"
              }`}
            >
              --i
            </code>{" "}
            index across both MERN &amp; Cybersecurity profiles.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={triggerMenu}
              className={`inline-flex items-center gap-3 py-3.5 px-7 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-md ${
                mode === "cyber"
                  ? "bg-[#00F59B] hover:bg-[#00DF81] text-[#090C10] shadow-[0_0_20px_rgba(0,245,155,0.4)]"
                  : "bg-[#141311] hover:bg-[#2B2925] text-[#F5F2EB]"
              }`}
            >
              <span>Explore Overlay Menu</span>
              <span className="font-light">&rarr;</span>
            </button>

            <button
              onClick={toggleMode}
              className={`inline-flex items-center gap-2 py-3.5 px-6 rounded-full font-mono text-xs uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                mode === "cyber"
                  ? "border-[#334155] hover:border-[#00F59B] text-[#E2E8F0] hover:text-[#00F59B] bg-[#111822]/60"
                  : "border-[#D4CCC0] hover:border-[#141311] text-[#141311] bg-white/40"
              }`}
            >
              <span>Switch to {mode === "cyber" ? "MERN Stack Dev" : "Cybersecurity"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Stats Ticker */}
        <div
          className={`pt-10 border-t grid grid-cols-2 sm:grid-cols-4 gap-6 transition-colors duration-300 ${
            mode === "cyber" ? "border-[#1E293B]" : "border-[#DDD6CB]"
          }`}
        >
          {data.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                className={`font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none ${
                  mode === "cyber" ? "text-[#00F59B]" : "text-[#141311]"
                }`}
              >
                {stat.value}
              </span>
              <span
                className={`font-mono text-xs tracking-wide uppercase mt-2 ${
                  mode === "cyber" ? "text-[#64748B]" : "text-[#706B60]"
                }`}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
