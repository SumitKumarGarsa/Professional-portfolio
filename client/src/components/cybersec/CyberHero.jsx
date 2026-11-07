import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Terminal, ArrowDownRight, Key, ShieldAlert, Cpu } from "lucide-react";
import { cybersecData } from "@/data/cybersecData";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/common/SocialIcons";

export default function CyberHero() {
  const { profile, hero, stats } = cybersecData;
  const [bootStep, setBootStep] = useState(0);

  // Terminal boot lines sequencing
  useEffect(() => {
    if (bootStep < hero.terminalBoot.length - 1) {
      const timer = setTimeout(() => {
        setBootStep((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [bootStep, hero.terminalBoot.length]);

  return (
    <section id="home" className="relative pt-8 sm:pt-14 pb-20 sm:pb-28 border-b border-[#1E3327]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Hero Copy & Callsign */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Tactical Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#101612] text-[#00FF9C] border border-[#00FF9C]/40 shadow-[0_0_15px_rgba(0,255,156,0.25)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00FF9C] animate-ping" />
            <span>CALLSIGN: {profile.callsign} &bull; {profile.status}</span>
          </div>

          {/* Large Name Headline */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-tight uppercase font-extrabold leading-[0.88] text-[#E2FBEF] mb-4">
            {profile.name}
          </h1>

          {/* Specialization Subtitle */}
          <div className="font-mono text-lg sm:text-xl md:text-2xl text-[#00FF9C] font-bold tracking-tight mb-6">
            &gt; Offensive Security &bull; Pen-Testing &bull; DevSecOps
          </div>

          {/* Pitch Lines */}
          <div className="max-w-2xl text-base sm:text-lg text-[#6B8B77] leading-relaxed font-sans space-y-2 mb-8">
            <p>{hero.pitchLine1}</p>
            <p className="font-medium text-[#E2FBEF]">{hero.pitchLine2}</p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#reports"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-extrabold bg-[#00FF9C] hover:bg-[#00DF87] text-[#0A0D0B] shadow-[0_0_20px_rgba(0,255,156,0.4)] transition-all active:scale-95 cursor-pointer"
            >
              <span>{hero.primaryCta.text}</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-[#101612] hover:bg-[#162119] text-[#E2FBEF] border border-[#1E3327] transition-all active:scale-95"
            >
              <Key className="w-4 h-4 text-[#00FF9C]" />
              <span>{hero.secondaryCta.text}</span>
            </a>
          </div>

          {/* PGP Fingerprint Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-6 border-t border-[#1E3327] w-full text-xs font-mono text-[#6B8B77]">
            <span className="text-[#00FF9C] font-bold">PGP FINGERPRINT:</span>
            <code className="text-[#A2C2AF] text-[11px] bg-[#0E1510] px-2 py-0.5 rounded border border-[#1E3327]">
              {profile.pgpFingerprint}
            </code>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Terminal Boot Sequence */}
        <div className="lg:col-span-5 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#1E3327] bg-[#0E1410] shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden font-mono"
          >
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-[#131C16] border-b border-[#1E3327] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[#6B8B77] font-mono text-[11px]">
                  root@shadow-root:~#
                </span>
              </div>

              <span className="text-[10px] text-[#00FF9C] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
                SESSION ACTIVE
              </span>
            </div>

            {/* Terminal Screen Commands */}
            <div className="p-5 space-y-4 text-xs leading-relaxed text-[#A2C2AF] min-h-[260px]">
              {hero.terminalBoot.slice(0, bootStep + 1).map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-[#00FF9C]">
                    <span className="text-[#6B8B77]">root@skg:~$</span>
                    <span className="font-bold">{item.cmd}</span>
                  </div>
                  <div className="text-[11px] text-[#D0EBDD] pl-4 font-mono">
                    {item.output}
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2 text-[#00FF9C] pt-2">
                <span className="text-[#6B8B77]">root@skg:~$</span>
                <span className="inline-block w-2.5 h-4 bg-[#00FF9C] animate-terminal-blink" />
              </div>
            </div>

            {/* Terminal Security Metrics Bar */}
            <div className="px-4 py-2.5 bg-[#111813] border-t border-[#1E3327] flex items-center justify-between text-[10px] font-mono text-[#6B8B77]">
              <span>ENCLAVE: FIPS 140-2 LEVEL 3</span>
              <span className="text-[#00FF9C]">MTLS VERIFIED</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Security Telemetry Stats Ticker */}
      <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0E1410] border border-[#1E3327] shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col">
            <span className="font-display text-4xl sm:text-5xl md:text-6xl text-[#00FF9C] font-extrabold tracking-tight leading-none mb-2">
              {item.value}
            </span>
            <span className="font-mono text-xs text-[#6B8B77] uppercase tracking-wider">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
