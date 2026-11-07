"use client";

import React from "react";
import { siteConfig } from "@/data/site";

export default function TechMarquee() {
  const items = siteConfig.techMarquee;

  return (
    <div className="relative z-10 w-full py-6 sm:py-8 border-y border-[var(--border)] bg-[var(--bg)] overflow-hidden select-none transition-colors duration-400">
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* Track 1 */}
        <div className="flex items-center gap-8 sm:gap-14 animate-marquee shrink-0">
          {items.concat(items).map((tech, idx) => (
            <div key={`${tech}-${idx}`} className="flex items-center gap-8 sm:gap-14">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-[var(--text)]/65 hover:text-[var(--accent)] transition-colors cursor-default">
                {tech}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            </div>
          ))}
        </div>

        {/* Track 2 for infinite loop */}
        <div className="flex items-center gap-8 sm:gap-14 animate-marquee shrink-0" aria-hidden="true">
          {items.concat(items).map((tech, idx) => (
            <div key={`${tech}-dup-${idx}`} className="flex items-center gap-8 sm:gap-14">
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider text-[var(--text)]/65 hover:text-[var(--accent)] transition-colors cursor-default">
                {tech}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
