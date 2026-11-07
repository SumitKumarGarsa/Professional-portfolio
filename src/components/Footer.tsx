"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { usePortfolioMode } from "@/context/PortfolioModeContext";
import { MERN_PORTFOLIO_DATA, CYBER_PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { mode, toggleMode } = usePortfolioMode();
  const [time, setTime] = useState("");

  const data = mode === "cyber" ? CYBER_PORTFOLIO_DATA : MERN_PORTFOLIO_DATA;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " IST"
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`pt-20 pb-12 px-6 sm:px-12 md:px-16 transition-colors duration-500 ${
        mode === "cyber" ? "bg-[#05080B] text-[#E2E8F0]" : "bg-[#141311] text-[#F5F2EB]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Big Branding typography */}
        <div className="pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span
              className={`font-mono text-xs uppercase tracking-widest block mb-2 ${
                mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
              }`}
            >
              {mode === "cyber"
                ? "OFFENSIVE SECURITY RESEARCHER & DEVSECOPS &bull; 2026"
                : "MERN STACK ARCHITECT & LEAD ENGINEER &bull; 2026"}
            </span>
            <h2 className="font-display text-7xl sm:text-8xl md:text-9xl uppercase tracking-tighter leading-none">
              {data.brand.name}
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className={`group flex items-center gap-3 px-5 py-3 rounded-full border font-mono text-xs uppercase tracking-wider transition-all duration-200 self-start md:self-end cursor-pointer ${
              mode === "cyber"
                ? "bg-[#111823] text-[#00F59B] border-[#00F59B]/30 hover:bg-[#1A2536]"
                : "bg-white/10 hover:bg-white/20 text-[#F5F2EB] border-white/10"
            }`}
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs font-mono">
          <div>
            <h4
              className={`uppercase tracking-wider mb-4 ${
                mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
              }`}
            >
              Specialization Mode
            </h4>
            <div className="space-y-2">
              <button
                onClick={toggleMode}
                className="text-left hover:underline text-white font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <span>&gt; Toggle to {mode === "cyber" ? "MERN Stack Dev" : "Cybersecurity"}</span>
              </button>
              <div className="text-zinc-400">Current: {mode.toUpperCase()} MODE</div>
            </div>
          </div>

          <div>
            <h4
              className={`uppercase tracking-wider mb-4 ${
                mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
              }`}
            >
              Core Stack
            </h4>
            <ul className="space-y-1 text-zinc-400">
              {mode === "cyber" ? (
                <>
                  <li>Burp Suite Pro &bull; OWASP Top 10</li>
                  <li>Zero-Trust mTLS &bull; DevSecOps</li>
                  <li>eBPF &bull; Suricata SIEM</li>
                  <li>Cryptographic Key Vaults</li>
                </>
              ) : (
                <>
                  <li>MongoDB Atlas &bull; Express.js</li>
                  <li>React 19 &bull; Next.js 16</li>
                  <li>Node.js Microservices</li>
                  <li>Redis &bull; WebSockets Cluster</li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h4
              className={`uppercase tracking-wider mb-4 ${
                mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
              }`}
            >
              Telemetry
            </h4>
            <div className="space-y-1.5 text-zinc-400">
              <div>Clock: {time || "Syncing..."}</div>
              <div>Status: {data.brand.availability}</div>
              <div>Channel: {data.brand.location}</div>
            </div>
          </div>

          <div>
            <h4
              className={`uppercase tracking-wider mb-4 ${
                mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
              }`}
            >
              Engineered With
            </h4>
            <div className="space-y-1 text-zinc-400">
              <div>Next.js 16 (Turbopack)</div>
              <div>React 19 &amp; Compiler</div>
              <div>Tailwind CSS v4</div>
              <div>Framer Motion</div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            &copy; 2026 {data.brand.name}. ALL RIGHTS RESERVED.
          </div>
          <div>
            <span>MERN STACK ARCHITECTURE &bull; OFFENSIVE &amp; DEFENSIVE CYBERSECURITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
