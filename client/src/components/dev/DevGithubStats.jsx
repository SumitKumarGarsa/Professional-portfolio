import React from "react";
import { GitBranch, GitCommit, GitPullRequest, Star, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/common/SocialIcons";

export default function DevGithubStats() {
  const languages = [
    { name: "JavaScript", percent: 45, color: "#F7DF1E" },
    { name: "TypeScript", percent: 32, color: "#3178C6" },
    { name: "Python", percent: 12, color: "#3776AB" },
    { name: "Shell / Bash", percent: 6, color: "#89E051" },
    { name: "CSS / HTML", percent: 5, color: "#E34F26" },
  ];

  // Generate simulated 20-week activity squares
  const activityWeeks = Array.from({ length: 24 }).map((_, weekIdx) =>
    Array.from({ length: 7 }).map((_, dayIdx) => {
      // Deterministic pseudo-random commit level
      const val = (weekIdx * 7 + dayIdx) % 5;
      return val;
    })
  );

  return (
    <section className="py-20 border-b border-border">
      <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-border shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#141414] text-white flex items-center justify-center">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-text">
                GitHub Telemetry &amp; Open Source
              </h3>
              <p className="font-mono text-xs text-muted">
                @sumitkumargarsa &bull; 3,200+ contributions in the last year
              </p>
            </div>
          </div>

          <a
            href="https://github.com/sumitkumargarsa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-[#EAE3D5] text-text hover:bg-border transition-colors self-start md:self-auto"
          >
            <span>View GitHub Profile</span>
            <GitBranch className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Stat Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-[#EFE8DC] border border-[#D9CFBE]">
            <span className="text-xs font-mono text-muted uppercase block mb-1">Total Commits</span>
            <span className="font-display text-3xl text-text font-bold">3,248</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#EFE8DC] border border-[#D9CFBE]">
            <span className="text-xs font-mono text-muted uppercase block mb-1">PRs Merged</span>
            <span className="font-display text-3xl text-text font-bold">142</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#EFE8DC] border border-[#D9CFBE]">
            <span className="text-xs font-mono text-muted uppercase block mb-1">Repositories</span>
            <span className="font-display text-3xl text-text font-bold">38</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#EFE8DC] border border-[#D9CFBE]">
            <span className="text-xs font-mono text-muted uppercase block mb-1">Current Streak</span>
            <span className="font-display text-3xl text-accent font-bold">64 Days</span>
          </div>
        </div>

        {/* Language Breakdown Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-mono mb-2">
            <span className="text-muted uppercase">Language Distribution</span>
            <span className="text-text font-semibold">100% Type-Safe</span>
          </div>

          <div className="h-2.5 w-full rounded-full overflow-hidden flex bg-border">
            {languages.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                title={`${lang.name}: ${lang.percent}%`}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5 text-xs font-mono">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-text font-medium">{lang.name}</span>
                <span className="text-muted">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contribution Activity Graph Grid */}
        <div className="p-4 rounded-2xl bg-[#EFE8DC] border border-[#D9CFBE] overflow-x-auto">
          <span className="text-[11px] font-mono text-muted uppercase block mb-3">
            Contribution Heatmap Matrix (Past 24 Weeks)
          </span>

          <div className="flex gap-1.5 min-w-max">
            {activityWeeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5">
                {week.map((day, dIdx) => {
                  const bgColors = [
                    "bg-[#D9CFBE]/60",
                    "bg-[#FF9457]/50",
                    "bg-[#FF7A33]/80",
                    "bg-[#FF6A1A]",
                    "bg-[#D94F04]",
                  ];
                  return (
                    <div
                      key={dIdx}
                      className={`w-3.5 h-3.5 rounded-sm ${bgColors[day]} transition-transform hover:scale-125 cursor-pointer`}
                      title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${day * 3} contributions`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
