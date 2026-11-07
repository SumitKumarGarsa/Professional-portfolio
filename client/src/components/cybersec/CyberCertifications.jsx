import React from "react";
import { Award, ShieldCheck, CheckCircle2, ArrowUpRight, ExternalLink } from "lucide-react";
import { cybersecData } from "@/data/cybersecData";

export default function CyberCertifications() {
  const { certifications } = cybersecData;

  return (
    <section id="certifications" className="py-24 sm:py-32 border-b border-[#1E3327]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1E3327]">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#00FF9C] block mb-2">
            06 &bull; INDUSTRY ACCREDITATIONS
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#E2FBEF]">
            VERIFIED CREDENTIALS
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#6B8B77] leading-relaxed font-sans">
          Rigorous, proctored hands-on certifications validating black-box penetration testing,
          network defense, and infrastructure security protocols.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="p-8 rounded-3xl bg-[#0E1410] border border-[#1E3327] hover:border-[#00FF9C]/50 shadow-lg transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border"
                  style={{
                    backgroundColor: `${cert.badgeColor}15`,
                    borderColor: `${cert.badgeColor}40`,
                    color: cert.badgeColor,
                  }}
                >
                  <Award className="w-5 h-5" />
                </div>

                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border"
                  style={{
                    backgroundColor: `${cert.badgeColor}10`,
                    borderColor: `${cert.badgeColor}30`,
                    color: cert.badgeColor,
                  }}
                >
                  {cert.status}
                </span>
              </div>

              <h3 className="font-display text-2xl uppercase tracking-wide text-[#E2FBEF] mb-1 group-hover:text-[#00FF9C] transition-colors">
                {cert.name}
              </h3>

              <div className="font-mono text-xs text-[#00FF9C] font-semibold mb-4">
                {cert.issuer} &bull; {cert.date}
              </div>

              <div className="p-3 rounded-xl bg-[#090D0A] border border-[#1E3327] font-mono text-[11px] text-[#A2C2AF] space-y-1 mb-6">
                <span className="text-[#6B8B77] block text-[10px] uppercase">Credential Identifier:</span>
                <span className="text-[#E2FBEF] font-bold">{cert.credentialId}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1E3327]">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-[#00FF9C] hover:underline"
              >
                <span>Verify Credential</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
