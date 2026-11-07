"use client";

import React from "react";
import { cyberData } from "@/data/cyber";
import {
  ShieldAlert,
  Award,
  Terminal,
  ExternalLink,
  Flame,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";

export default function CyberArsenal() {
  return (
    <section className="relative z-10 w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-[76px] bg-[#070A0E] border-t border-[#16202C]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1E293B]">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.16em] text-[#00F59B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00F59B]" />
              <span>SECURITY CREDENTIALS &amp; TACTICAL TOOLCHAIN</span>
            </div>
            <h2 className="font-display text-[clamp(44px,7vw,96px)] uppercase tracking-tight text-[#E2E8F0] leading-[0.92]">
              ARSENAL &amp; WARGAMES
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-[#8E9CAE] max-w-md leading-relaxed">
            Validated certifications, offensive CTF achievements, and enterprise-grade security tooling deployed in simulated and live environments.
          </p>
        </div>

        {/* 1. Wargames / CTF Rankings Strip */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#00F59B] mb-6 flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#EF4444]" />
            <span>Active Wargame Profiles &amp; Standings</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cyberData.labStats.map((lab, idx) => (
              <a
                key={idx}
                href={lab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-[#090D13] border border-[#1E293B] hover:border-[#00F59B]/60 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#8E9CAE] uppercase tracking-wider">{lab.platform}</span>
                  <ExternalLink className="w-4 h-4 text-[#8E9CAE] group-hover:text-[#00F59B] transition-colors" />
                </div>
                <div className="font-display text-3xl text-[#E2E8F0] uppercase tracking-wide">
                  {lab.rank}
                </div>
                <div className="mt-3 flex items-center gap-3 text-xs font-mono text-[#00F59B]">
                  <span>{lab.points}</span>
                  <span>&bull;</span>
                  <span>{lab.pwned || lab.badges || lab.solved}</span>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F59B]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00F59B]/10 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* 2. Official Certifications Grid */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#00F59B] mb-6 flex items-center gap-2">
            <Award className="w-4 h-4 text-[#F59E0B]" />
            <span>Professional Security Certifications</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cyberData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090D13] border border-[#1E293B] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-[#8E9CAE]">{cert.issuer}</span>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded font-semibold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${cert.badgeColor}15`,
                        color: cert.badgeColor,
                        border: `1px solid ${cert.badgeColor}40`,
                      }}
                    >
                      {cert.status}
                    </span>
                  </div>
                  <h4 className="font-display text-xl text-[#E2E8F0] uppercase tracking-wide leading-tight">
                    {cert.name}
                  </h4>
                  <p className="font-mono text-xs text-[#8E9CAE] mt-3">
                    ID: {cert.credentialId}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E293B]/60 flex items-center justify-between text-xs font-mono text-[#8E9CAE]">
                  <span>Issued: {cert.date}</span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00F59B] hover:underline flex items-center gap-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Tactical Tool Arsenal Grid */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#00F59B] mb-6 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#38BDF8]" />
            <span>Weaponized Tool Arsenal &amp; Defenses</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {cyberData.toolBadges.map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0B0F16] border border-[#1E293B] hover:border-[#00F59B]/50 transition-colors flex items-center gap-2.5"
              >
                <div className="w-2 h-2 rounded-full bg-[#00F59B]" />
                <span className="font-mono text-xs text-[#E2E8F0] font-medium tracking-tight">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
