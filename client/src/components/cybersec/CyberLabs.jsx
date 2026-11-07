import React from "react";
import { Flag, Trophy, Shield, ExternalLink, Terminal, ArrowUpRight } from "lucide-react";
import { cybersecData } from "@/data/cybersecData";

export default function CyberLabs() {
  const { labsAndCtfs } = cybersecData;

  const getDifficultyColor = (diff) => {
    switch (diff) {
      case "Easy": return "text-[#00FF9C] bg-[#00FF9C]/10 border-[#00FF9C]/30";
      case "Medium": return "text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/30";
      case "Hard": return "text-[#FF4A6B] bg-[#FF4A6B]/10 border-[#FF4A6B]/30";
      default: return "text-zinc-400 bg-zinc-800 border-zinc-700";
    }
  };

  return (
    <section id="labs" className="py-24 sm:py-32 border-b border-[#1E3327]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1E3327]">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#00FF9C] block mb-2">
            04 &bull; WARGAMES &amp; CAPTURE THE FLAG
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#E2FBEF]">
            LABS &amp; CTF PROWESS
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#6B8B77] leading-relaxed font-sans">
          Proven offensive capabilities across competitive cybersecurity platforms.
          Continuous adversarial exploitation, privilege escalation, and binary exploitation.
        </p>
      </div>

      {/* 3 Platform Rank Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {labsAndCtfs.platforms.map((platform) => (
          <div
            key={platform.name}
            className="p-8 rounded-3xl bg-[#0E1410] border border-[#1E3327] shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#6B8B77] uppercase">
                  Competitive Platform
                </span>
                <Trophy className="w-5 h-5 text-[#00FF9C]" />
              </div>

              <h3 className="font-display text-3xl uppercase tracking-wide text-[#E2FBEF] mb-1">
                {platform.name}
              </h3>

              <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#141F17] text-[#00FF9C] border border-[#00FF9C]/30 my-4">
                {platform.rank}
              </div>

              <div className="space-y-1 font-mono text-xs text-[#A2C2AF]">
                <div>Score: <span className="text-[#E2FBEF] font-bold">{platform.points}</span></div>
                <div>Milestone: <span className="text-[#E2FBEF] font-bold">{platform.pwned || platform.badges || platform.solved}</span></div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#1E3327]">
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-[#00FF9C] hover:underline"
              >
                <span>Verify Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Sanitized Writeups List */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1410] border border-[#1E3327]">
        <div className="flex items-center gap-2 mb-6">
          <Terminal className="w-4 h-4 text-[#00FF9C]" />
          <h3 className="font-display text-2xl uppercase tracking-wide text-[#E2FBEF]">
            Deconstructed Exploit Writeups
          </h3>
        </div>

        <div className="divide-y divide-[#1E3327]">
          {labsAndCtfs.writeups.map((w, idx) => (
            <div
              key={idx}
              className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="max-w-3xl space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase border ${getDifficultyColor(
                      w.difficulty
                    )}`}
                  >
                    {w.difficulty}
                  </span>
                  <span className="text-xs font-mono text-[#6B8B77]">
                    &bull; {w.category}
                  </span>
                </div>

                <h4 className="font-mono text-sm sm:text-base font-bold text-[#E2FBEF] group-hover:text-[#00FF9C] transition-colors">
                  {w.title}
                </h4>

                <p className="text-xs text-[#A2C2AF] font-sans leading-relaxed">
                  {w.summary}
                </p>
              </div>

              <button
                onClick={() => alert(`Opening writeup: ${w.title}`)}
                className="self-start md:self-center px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-[#141F17] hover:bg-[#1E2E23] text-[#00FF9C] border border-[#00FF9C]/30 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Analysis</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
