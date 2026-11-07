"use client";

import React, { useState } from "react";
import { ArrowUpRight, Clock, Calendar, X } from "lucide-react";
import { usePortfolioMode } from "@/context/PortfolioModeContext";
import { MERN_PORTFOLIO_DATA, CYBER_PORTFOLIO_DATA, JournalPost } from "@/data/portfolioData";

export default function Journal() {
  const { mode } = usePortfolioMode();
  const [activePost, setActivePost] = useState<JournalPost | null>(null);

  const data = mode === "cyber" ? CYBER_PORTFOLIO_DATA : MERN_PORTFOLIO_DATA;

  return (
    <section
      id="journal"
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
              04 &bull; {mode === "cyber" ? "THREAT RESEARCH & CVE DISCLOSURES" : "MERN ARCHITECTURAL NOTES"}
            </span>
            <h2
              className={`font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight ${
                mode === "cyber" ? "text-[#F1F5F9]" : "text-[#141311]"
              }`}
            >
              {mode === "cyber" ? "SECURITY DISCLOSURES" : "ENGINEERING ESSAYS"}
            </h2>
          </div>

          <p
            className={`max-w-md text-sm sm:text-base leading-relaxed ${
              mode === "cyber" ? "text-[#94A3B8]" : "text-[#615C52]"
            }`}
          >
            {mode === "cyber"
              ? "Technical write-ups on weaponized prototype pollution, bypassing web application firewalls, and zero-trust service meshes."
              : "Deep-dives into horizontal MongoDB scaling, React 19 Compiler AST optimizations, and high-concurrency Node.js microservices."}
          </p>
        </div>

        {/* Articles List */}
        <div
          className={`divide-y border-y ${
            mode === "cyber" ? "divide-[#1E293B] border-[#1E293B]" : "divide-[#DCD4C7] border-[#DCD4C7]"
          }`}
        >
          {data.journal.map((post) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              className={`group py-8 sm:py-10 flex flex-col md:flex-row md:items-baseline justify-between gap-6 px-2 sm:px-4 rounded-xl transition-colors duration-200 cursor-pointer ${
                mode === "cyber" ? "hover:bg-[#111823]" : "hover:bg-[#EAE3D7]/40"
              }`}
            >
              <div className="max-w-3xl">
                <div
                  className={`flex items-center gap-4 text-xs font-mono mb-3 ${
                    mode === "cyber" ? "text-[#00F59B]/70" : "text-[#8C867A]"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className={`font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide mb-3 transition-colors ${
                    mode === "cyber"
                      ? "text-[#F1F5F9] group-hover:text-[#00F59B]"
                      : "text-[#141311] group-hover:text-amber-900"
                  }`}
                >
                  {post.title}
                </h3>

                <p
                  className={`text-sm sm:text-base leading-relaxed mb-4 ${
                    mode === "cyber" ? "text-[#94A3B8]" : "text-[#59544B]"
                  }`}
                >
                  {post.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 rounded font-mono text-[11px] ${
                        mode === "cyber"
                          ? "bg-[#162130] text-[#00F59B] border border-[#223044]"
                          : "bg-[#E2DBD0] text-[#4F4A42]"
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold group-hover:translate-x-1 transition-transform self-start md:self-center ${
                  mode === "cyber" ? "text-[#00F59B]" : "text-[#141311]"
                }`}
              >
                <span>Read Research</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activePost && (
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
                <div
                  className={`flex items-center gap-3 text-xs font-mono mb-2 ${
                    mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
                  }`}
                >
                  <span>{activePost.date}</span>
                  <span>&bull;</span>
                  <span>{activePost.readTime}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight">
                  {activePost.title}
                </h3>
              </div>

              <button
                onClick={() => setActivePost(null)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                  mode === "cyber"
                    ? "bg-[#1E293B] text-[#00F59B] hover:bg-[#283548]"
                    : "bg-[#141311] text-[#F5F2EB] hover:bg-[#33302B]"
                }`}
                aria-label="Close Article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              <div
                className={`p-4 rounded-xl text-sm italic font-serif border ${
                  mode === "cyber"
                    ? "bg-[#111A26] border-[#00F59B]/30 text-[#94A3B8]"
                    : "bg-[#EAE3D7] border-[#DCD4C7] text-[#474239]"
                }`}
              >
                &ldquo;{activePost.summary}&rdquo;
              </div>

              <div className="text-base leading-relaxed whitespace-pre-line space-y-4 font-sans">
                {activePost.content}
              </div>

              <div
                className={`pt-6 border-t flex flex-wrap gap-2 ${
                  mode === "cyber" ? "border-[#1E293B]" : "border-[#DCD4C7]"
                }`}
              >
                {activePost.tags.map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 rounded-md font-mono text-xs ${
                      mode === "cyber"
                        ? "bg-[#162130] text-[#00F59B]"
                        : "bg-[#E4DDD0] text-[#2B2823]"
                    }`}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div
              className={`p-6 border-t flex items-center justify-between ${
                mode === "cyber" ? "bg-[#0E1520] border-[#1E293B]" : "bg-[#EAE3D7] border-[#DCD4C7]"
              }`}
            >
              <span className="font-mono text-xs text-zinc-400">
                Author: Aryan Sharma &bull; {data.brand.name}
              </span>
              <button
                onClick={() => setActivePost(null)}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer ${
                  mode === "cyber"
                    ? "bg-[#00F59B] text-[#090C10] hover:bg-[#00DF81]"
                    : "bg-[#141311] text-[#F5F2EB] hover:bg-[#33302B]"
                }`}
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
