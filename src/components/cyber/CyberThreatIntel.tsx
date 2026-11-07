"use client";

import React from "react";
import Link from "next/link";
import { cyberData, CyberIntelArticle } from "@/data/cyber";
import { ArrowUpRight, ShieldAlert, BookOpen, Clock, Tag } from "lucide-react";

export default function CyberThreatIntel() {
  return (
    <section id="journal" className="relative z-10 w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-[76px] bg-[#090C10] border-t border-[#16202C]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1E293B]">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.16em] text-[#00F59B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00F59B]" />
              <span>RESEARCH DISCLOSURES &amp; ATTACK VECTOR BRIEFINGS</span>
            </div>
            <h2 className="font-display text-[clamp(44px,7vw,96px)] uppercase tracking-tight text-[#E2E8F0] leading-[0.92]">
              THREAT INTEL
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-[#8E9CAE] max-w-md leading-relaxed">
            In-depth write-ups dissecting high-impact vulnerabilities, memory vulnerabilities, zero-trust network protocols, and proof-of-concept exploits.
          </p>
        </div>

        {/* 3 Articles List */}
        <div className="divide-y divide-[#1E293B] pt-6">
          {cyberData.intel.map((article: CyberIntelArticle, idx: number) => (
            <article
              key={article.id}
              className="py-10 group transition-all duration-300 hover:bg-[#101722]/50 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="max-w-3xl space-y-3">
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="text-[#00F59B] font-bold">{article.date}</span>
                  <span className="text-[#8E9CAE]">&bull;</span>
                  <span className="text-[#8E9CAE] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  {article.severity && (
                    <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30">
                      {article.severity}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide text-[#E2E8F0] group-hover:text-[#00F59B] transition-colors leading-tight">
                  {article.title}
                </h3>

                <p className="font-sans text-sm text-[#8E9CAE] leading-relaxed">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#10151C] text-[#8E9CAE] border border-[#1E293B]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 self-start md:self-center font-mono text-xs uppercase tracking-wider text-[#00F59B] group-hover:translate-x-2 transition-transform">
                <span>Read Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
