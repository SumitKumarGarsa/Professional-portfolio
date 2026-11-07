"use client";

import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, X, Check, Shield, Code2 } from "lucide-react";
import { usePortfolioMode } from "@/context/PortfolioModeContext";
import { MERN_PORTFOLIO_DATA, CYBER_PORTFOLIO_DATA, Project } from "@/data/portfolioData";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function Work() {
  const { mode } = usePortfolioMode();
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const data = mode === "cyber" ? CYBER_PORTFOLIO_DATA : MERN_PORTFOLIO_DATA;

  return (
    <section
      id="work"
      className={`py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b transition-colors duration-500 ${
        mode === "cyber" ? "border-[#1E293B] bg-[#090C10]" : "border-[#E3DDD3] bg-[#F4EFEA]"
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
              02 &bull; {mode === "cyber" ? "OFFENSIVE SECURITY CASES & SIEM SYSTEMS" : "SELECTED MERN PRODUCTION BUILDS"}
            </span>
            <h2
              className={`font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight ${
                mode === "cyber" ? "text-[#F1F5F9]" : "text-[#141311]"
              }`}
            >
              {mode === "cyber" ? "EXPLOITS & DEFENSE LAB" : "MERN CASE STUDIES"}
            </h2>
          </div>

          <p
            className={`max-w-md text-sm sm:text-base leading-relaxed ${
              mode === "cyber" ? "text-[#94A3B8]" : "text-[#615C52]"
            }`}
          >
            {mode === "cyber"
              ? "Autonomous threat discovery engines, zero-trust cryptographic vaults, and automated exploit fuzzers engineered for enterprise defense."
              : "High-scale MERN platforms, real-time multiplayer WebSocket clusters, and microservice architectures built for high-throughput concurrency."}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.projects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                mode === "cyber"
                  ? "bg-[#0D131C] border-[#1E293B] hover:border-[#00F59B]/60 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  : "bg-[#EFEAE2] border-[#DCD4C7] hover:border-[#141311]/50 shadow-sm hover:shadow-xl"
              }`}
            >
              {/* Image banner with overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono backdrop-blur-md ${
                      mode === "cyber"
                        ? "bg-[#00F59B]/20 text-[#00F59B] border border-[#00F59B]/40"
                        : "bg-[#141311]/85 text-[#F5F2EB]"
                    }`}
                  >
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/90 text-[#141311] text-xs font-mono font-semibold">
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span>Client: {project.client}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                      mode === "cyber" ? "bg-[#00F59B] text-black" : "bg-emerald-600 text-white"
                    }`}
                  >
                    {project.metrics}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={`font-display text-2xl sm:text-3xl uppercase tracking-wide mb-3 transition-colors ${
                      mode === "cyber"
                        ? "text-[#F1F5F9] group-hover:text-[#00F59B]"
                        : "text-[#141311] group-hover:text-amber-900"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      mode === "cyber" ? "text-[#94A3B8]" : "text-[#544F46]"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack pill tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                          mode === "cyber"
                            ? "bg-[#131B27] border-[#223044] text-[#A5B4FC]"
                            : "bg-[#E4DDD0] border-[#D5CDC0] text-[#4A453D]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div
                  className={`pt-4 border-t flex items-center justify-between ${
                    mode === "cyber" ? "border-[#1E293B]" : "border-[#DCD4C7]"
                  }`}
                >
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer ${
                      mode === "cyber"
                        ? "text-[#00F59B] hover:underline"
                        : "text-[#141311] hover:underline"
                    }`}
                  >
                    <span>{mode === "cyber" ? "Inspect Threat Case" : "Read Architecture"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full transition-colors ${
                          mode === "cyber"
                            ? "hover:bg-[#1E293B] text-[#94A3B8] hover:text-[#00F59B]"
                            : "hover:bg-[#E0D8CB] text-[#524D44] hover:text-[#141311]"
                        }`}
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full transition-colors ${
                          mode === "cyber"
                            ? "hover:bg-[#1E293B] text-[#94A3B8] hover:text-[#00F59B]"
                            : "hover:bg-[#E0D8CB] text-[#524D44] hover:text-[#141311]"
                        }`}
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            className={`w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${
              mode === "cyber"
                ? "bg-[#0B1017] border-[#00F59B]/30 text-[#E2E8F0]"
                : "bg-[#F4EFEA] border-[#DCD4C7] text-[#141311]"
            }`}
          >
            {/* Modal Header */}
            <div
              className={`p-6 sm:p-8 border-b flex items-start justify-between ${
                mode === "cyber" ? "bg-[#0E1520] border-[#1E293B]" : "bg-[#EFE9DF] border-[#DCD4C7]"
              }`}
            >
              <div>
                <span
                  className={`font-mono text-xs uppercase tracking-wider block mb-1 ${
                    mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
                  }`}
                >
                  {mode === "cyber" ? "SECURITY AUDIT DOSSIER" : "PRODUCTION CASE STUDY"} &bull; {activeModalProject.category} &bull; {activeModalProject.year}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight">
                  {activeModalProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                  mode === "cyber"
                    ? "bg-[#1E293B] text-[#00F59B] hover:bg-[#283548]"
                    : "bg-[#141311] text-[#F5F2EB] hover:bg-[#33302B]"
                }`}
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4
                  className={`font-mono text-xs uppercase tracking-wider mb-2 ${
                    mode === "cyber" ? "text-[#00F59B]" : "text-[#736D61]"
                  }`}
                >
                  {mode === "cyber" ? "Attack Surface & Scope" : "Architecture Overview"}
                </h4>
                <p className="text-sm sm:text-base leading-relaxed">
                  {activeModalProject.longDescription}
                </p>
              </div>

              <div>
                <h4
                  className={`font-mono text-xs uppercase tracking-wider mb-2 ${
                    mode === "cyber" ? "text-[#00F59B]" : "text-[#736D61]"
                  }`}
                >
                  Verified Metrics &amp; Impact
                </h4>
                <div
                  className={`p-4 rounded-xl font-mono text-sm font-semibold border ${
                    mode === "cyber"
                      ? "bg-[#111A26] border-[#00F59B]/30 text-[#00F59B]"
                      : "bg-[#EAE3D7] border-[#DCD4C7] text-[#141311]"
                  }`}
                >
                  {activeModalProject.metrics}
                </div>
              </div>

              <div>
                <h4
                  className={`font-mono text-xs uppercase tracking-wider mb-2 ${
                    mode === "cyber" ? "text-[#00F59B]" : "text-[#736D61]"
                  }`}
                >
                  Key Deliverables
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 ${
                          mode === "cyber" ? "text-[#00F59B]" : "text-emerald-700"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  className={`font-mono text-xs uppercase tracking-wider mb-2 ${
                    mode === "cyber" ? "text-[#00F59B]" : "text-[#736D61]"
                  }`}
                >
                  Technology &amp; Tooling Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-lg font-mono text-xs ${
                        mode === "cyber"
                          ? "bg-[#162130] text-[#00F59B]"
                          : "bg-[#E0D8CC] text-[#2B2823]"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div
              className={`p-6 border-t flex items-center justify-between ${
                mode === "cyber" ? "bg-[#0E1520] border-[#1E293B]" : "bg-[#EAE3D7] border-[#DCD4C7]"
              }`}
            >
              <span className="font-mono text-xs text-zinc-400">Client: {activeModalProject.client}</span>
              <button
                onClick={() => setActiveModalProject(null)}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer ${
                  mode === "cyber"
                    ? "bg-[#00F59B] text-[#090C10] hover:bg-[#00DF81]"
                    : "bg-[#141311] text-[#F5F2EB] hover:bg-[#33302B]"
                }`}
              >
                Close Case
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
