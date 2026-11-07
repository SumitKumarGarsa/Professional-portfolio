import React from "react";
import { ShieldAlert, GitBranch, Lock, Cpu, CloudRain, Terminal, Check, ShieldCheck, Crosshair } from "lucide-react";
import { cybersecData } from "@/data/cybersecData";

export default function CyberExpertise() {
  const { expertise } = cybersecData;

  const fullExpertise = [
    ...expertise,
    {
      id: "vuln-assessment",
      title: "Vulnerability Assessment & Compliance",
      badge: "CIS / NIST",
      description: "Continuous vulnerability scanning, patch management verification, and technical audits aligned with CIS benchmarks and ISO 27001.",
      deliverables: ["Automated vulnerability triage matrix", "Remediation verification testing", "Security posture benchmark score"],
      icon: "ShieldCheck",
    },
    {
      id: "incident-response",
      title: "Incident Response & Threat Hunting",
      badge: "SOC Forensics",
      description: "Investigating live security incidents, correlating SIEM telemetry, isolating infected endpoints, and performing post-mortem root cause analysis.",
      deliverables: ["Forensic timeline reconstruction", "Indicator of Compromise (IoC) extraction", "Breach containment playbook"],
      icon: "Crosshair",
    },
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-[#00FF9C]" />;
      case "GitBranch": return <GitBranch className="w-5 h-5 text-[#38BDF8]" />;
      case "Lock": return <Lock className="w-5 h-5 text-[#00FF9C]" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-[#F59E0B]" />;
      case "CloudRain": return <CloudRain className="w-5 h-5 text-[#38BDF8]" />;
      case "Terminal": return <Terminal className="w-5 h-5 text-[#FF4A6B]" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-[#00FF9C]" />;
      default: return <Crosshair className="w-5 h-5 text-[#00FF9C]" />;
    }
  };

  return (
    <section id="expertise" className="py-24 sm:py-32 border-b border-[#1E3327]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1E3327]">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#00FF9C] block mb-2">
            02 &bull; DEFENSIVE &amp; OFFENSIVE CAPABILITIES
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#E2FBEF]">
            SECURITY EXPERTISE
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#6B8B77] leading-relaxed font-sans">
          Eight battle-tested pillars spanning offensive penetration testing, DevSecOps automation,
          and Zero-Trust cryptographic network architectures.
        </p>
      </div>

      {/* 8 Expertise Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {fullExpertise.map((item, idx) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-[#0E1410] border border-[#1E3327] hover:border-[#00FF9C]/50 transition-all duration-300 flex flex-col justify-between shadow-lg group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#141F17] flex items-center justify-center border border-[#1E3327]">
                  {getIcon(item.icon)}
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#141F17] text-[#00FF9C] border border-[#00FF9C]/30">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-[#E2FBEF] group-hover:text-[#00FF9C] transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-[#A2C2AF] leading-relaxed font-sans mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1E3327]/80 space-y-1.5">
              <span className="text-[10px] font-mono text-[#6B8B77] uppercase block mb-1">
                Deliverables:
              </span>
              {item.deliverables.map((deliv) => (
                <div key={deliv} className="flex items-start gap-1.5 text-[11px] font-mono text-[#D0EBDD]">
                  <Check className="w-3 h-3 text-[#00FF9C] mt-0.5 flex-shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
