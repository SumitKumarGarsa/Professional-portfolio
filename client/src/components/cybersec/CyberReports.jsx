import React from "react";
import { FileText, Download, ShieldAlert, ArrowUpRight, Lock } from "lucide-react";
import { cybersecData } from "@/data/cybersecData";

export default function CyberReports() {
  const { reportsAndWriteups } = cybersecData;

  return (
    <section id="reports" className="py-24 sm:py-32 border-b border-[#1E3327]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1E3327]">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#00FF9C] block mb-2">
            07 &bull; ADVISORIES &amp; DISCLOSURES
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#E2FBEF]">
            SANITIZED REPORTS
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#6B8B77] leading-relaxed font-sans">
          Redacted executive and technical assessment reports showcasing vulnerability discovery,
          proof-of-concept impact validation, and production remediation guidance.
        </p>
      </div>

      {/* Reports List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reportsAndWriteups.map((rep) => (
          <div
            key={rep.id}
            className="p-8 sm:p-10 rounded-3xl bg-[#0E1410] border border-[#1E3327] hover:border-[#00FF9C]/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-950/60 text-[#FF4A6B] border border-red-500/30 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  {rep.severity}
                </span>
                <span className="font-mono text-xs text-[#6B8B77]">{rep.date}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#E2FBEF] group-hover:text-[#00FF9C] transition-colors mb-2">
                {rep.title}
              </h3>

              <div className="font-mono text-xs text-[#00FF9C] mb-4">
                Document Type: {rep.type}
              </div>

              <p className="text-sm text-[#A2C2AF] leading-relaxed font-sans mb-8">
                {rep.summary}
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E3327] flex items-center justify-between">
              <span className="font-mono text-xs text-[#6B8B77]">Redacted for Public Review</span>
              <a
                href={rep.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Downloading sanitized sample PDF: ${rep.title}`);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-[#141F17] hover:bg-[#1E2E23] text-[#00FF9C] border border-[#00FF9C]/30 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
