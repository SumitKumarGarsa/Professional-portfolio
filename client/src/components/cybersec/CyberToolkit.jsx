import React from "react";
import { Terminal, Shield, Cpu, Flame, Wrench } from "lucide-react";
import { cybersecData } from "@/data/cybersecData";

export default function CyberToolkit() {
  const { toolkit } = cybersecData;

  const quickBadges = [
    "Kali Linux 2024",
    "Burp Suite Pro",
    "Nmap / Masscan",
    "Metasploit",
    "Wireshark",
    "OWASP ZAP",
    "SQLmap",
    "Ghidra 11",
    "Semgrep SAST",
    "Trivy Container",
    "Splunk Enterprise",
    "Docker Security",
  ];

  return (
    <section className="py-24 sm:py-32 border-b border-[#1E3327]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1E3327]">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#00FF9C] block mb-2">
            03 &bull; SECURITY ARSENAL
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#E2FBEF]">
            TACTICAL TOOLKIT
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#6B8B77] leading-relaxed font-sans">
          Industry-standard offensive and defensive security tooling utilized for automated scanning,
          manual payload crafting, and forensic telemetry.
        </p>
      </div>

      {/* Terminal Command Quick Bar */}
      <div className="p-4 rounded-2xl bg-[#0B100C] border border-[#1E3327] mb-12 flex flex-wrap gap-2.5 items-center">
        <span className="font-mono text-xs text-[#00FF9C] font-bold mr-2 uppercase flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5" />
          Verified Binaries:
        </span>
        {quickBadges.map((badge) => (
          <span
            key={badge}
            className="px-3 py-1 rounded-full text-xs font-mono bg-[#141F17] text-[#D0EBDD] border border-[#1E3327]"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Grouped Toolkit Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {toolkit.map((group, idx) => (
          <div
            key={group.category}
            className="p-8 rounded-3xl bg-[#0E1410] border border-[#1E3327] shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase text-[#00FF9C] font-bold">
                  [SET 0{idx + 1}]
                </span>
                <span className="text-[10px] font-mono text-[#6B8B77] uppercase">
                  Active in Engagements
                </span>
              </div>

              <h3 className="font-display text-2xl uppercase tracking-wide text-[#E2FBEF] mb-6">
                {group.category}
              </h3>

              <div className="space-y-4">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3.5 rounded-xl bg-[#0B100C] border border-[#1E3327]/60 hover:border-[#00FF9C]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-[#E2FBEF] mb-1">
                      <span>{tool.name}</span>
                      <span className="text-[#00FF9C] text-[10px]">&gt; CLI</span>
                    </div>
                    <p className="text-[11px] text-[#A2C2AF] font-sans leading-relaxed">
                      {tool.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1E3327] text-[11px] font-mono text-[#6B8B77]">
              <span>Status: Configured in Kali Linux / BlackArch</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
