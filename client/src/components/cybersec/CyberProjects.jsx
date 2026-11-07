import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShieldAlert, X, Check, Terminal, ExternalLink, Code2 } from "lucide-react";
import { cybersecData } from "@/data/cybersecData";
import { GithubIcon } from "@/components/common/SocialIcons";

export default function CyberProjects() {
  const { projects } = cybersecData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-[#1E3327]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1E3327]">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#00FF9C] block mb-2">
            05 &bull; DEFENSE TOOLING &amp; RESEARCH
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#E2FBEF]">
            SECURITY RESEARCH &amp; BUILDS
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#6B8B77] leading-relaxed font-sans">
          Custom security tools, automated API fuzzers, and cryptographic enclaves engineered
          to withstand sophisticated real-world cyber adversaries.
        </p>
      </div>

      {/* Projects Grid: Structured as Problem / Approach / Result */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="p-8 rounded-3xl bg-[#0E1410] border border-[#1E3327] hover:border-[#00FF9C]/60 shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Card Top */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#141F17] text-[#00FF9C] border border-[#00FF9C]/30">
                  {proj.category || "Security Engineering"}
                </span>
                <span className="text-[11px] font-mono text-[#6B8B77]">{proj.year || "2025"}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#E2FBEF] group-hover:text-[#00FF9C] transition-colors mb-2">
                {proj.title}
              </h3>

              <p className="font-mono text-xs text-[#A2C2AF] mb-6 font-semibold">
                {proj.tagline}
              </p>

              {/* Structured PAR breakdown */}
              <div className="space-y-4 text-xs font-sans mb-6">
                <div className="p-3 rounded-xl bg-[#0A0E0B] border border-[#1E3327]">
                  <span className="font-mono text-[10px] uppercase text-[#FF4A6B] font-bold block mb-1">
                    [01] The Problem:
                  </span>
                  <p className="text-[#A2C2AF] leading-relaxed">{proj.problem}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#0A0E0B] border border-[#1E3327]">
                  <span className="font-mono text-[10px] uppercase text-[#38BDF8] font-bold block mb-1">
                    [02] The Approach:
                  </span>
                  <p className="text-[#A2C2AF] leading-relaxed">{proj.approach}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#0A0E0B] border border-[#1E3327]">
                  <span className="font-mono text-[10px] uppercase text-[#00FF9C] font-bold block mb-1">
                    [03] Verified Result:
                  </span>
                  <p className="text-[#E2FBEF] font-mono leading-relaxed">{proj.result}</p>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md bg-[#141F17] font-mono text-[11px] text-[#00FF9C] border border-[#1E3327]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer with Modal Trigger & GitHub */}
            <div className="pt-4 border-t border-[#1E3327] flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(proj)}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-[#00FF9C] hover:underline cursor-pointer"
              >
                <span>Read Threat Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-[#141F17] text-[#6B8B77] hover:text-[#00FF9C] transition-colors"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Security Threat Dossier Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0E1410] text-[#E2FBEF] w-full max-w-3xl rounded-3xl border border-[#00FF9C]/40 shadow-[0_0_40px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 sm:p-8 border-b border-[#1E3327] flex items-start justify-between bg-[#111813]">
                <div>
                  <span className="font-mono text-xs text-[#00FF9C] uppercase tracking-wider block mb-1">
                    CLASSIFIED RESEARCH DOSSIER &bull; DECLASSIFIED
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[#E2FBEF]">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-[#162119] text-[#00FF9C] flex items-center justify-center hover:bg-[#203025] transition-colors cursor-pointer border border-[#1E3327]"
                  aria-label="Close Dossier"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#00FF9C] mb-2">
                    Threat Problem Statement
                  </h4>
                  <p className="text-sm leading-relaxed text-[#A2C2AF] font-sans">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#00FF9C] mb-2">
                    Technical Approach &amp; Exploitation Safeguards
                  </h4>
                  <p className="text-sm leading-relaxed text-[#A2C2AF] font-sans">
                    {selectedProject.approach}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#00FF9C] mb-2">
                    Verified Production Metrics &amp; Defenses
                  </h4>
                  <div className="p-4 rounded-xl bg-[#090D0A] border border-[#00FF9C]/30 font-mono text-sm text-[#00FF9C] font-bold">
                    {selectedProject.metrics}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#00FF9C] mb-2">
                    Security Stack &amp; Protocols
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-[#141F17] border border-[#1E3327] font-mono text-xs text-[#E2FBEF]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-[#1E3327] bg-[#111813] flex items-center justify-between">
                <span className="font-mono text-xs text-[#6B8B77]">Signed PGP: 0x4F92B3C8E190A72D</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full bg-[#00FF9C] text-[#0A0D0B] font-mono text-xs uppercase tracking-wider font-extrabold cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
