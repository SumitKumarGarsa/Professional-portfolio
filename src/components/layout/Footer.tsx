"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/common/SocialIcons";
import { ArrowUp, Mail, Clock, Globe } from "lucide-react";

export default function Footer() {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setLocalTime(`${timeStr} IST`);
      } catch {
        const d = new Date();
        setLocalTime(
          `${d.getHours().toString().padStart(2, "0")}:${d
            .getMinutes()
            .toString()
            .padStart(2, "0")} IST`
        );
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 w-full bg-[var(--bg)] border-t border-[var(--border)] pt-16 sm:pt-24 pb-12 px-6 sm:px-12 lg:px-[76px] overflow-hidden transition-colors duration-400">
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-16 sm:pb-20 border-b border-[var(--border)]">
          {/* Col 1: Bio Pitch & Contact */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--muted)] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                {siteConfig.availabilityStatus}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text)]">
                Architecting modern software with zero runtime bloat.
              </h3>
              <p className="font-sans text-sm sm:text-base text-[var(--muted)] mt-4 leading-relaxed max-w-md">
                Available for enterprise full-stack contracts, high-throughput microservices, and design-led product architecture globally.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                Direct Inquiries
              </span>
              <Link
                href="/contact"
                className="font-mono text-base sm:text-lg text-[var(--text)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2 group w-fit"
              >
                <Mail className="w-4 h-4 text-[var(--accent)]" />
                <span className="group-hover:translate-x-1 transition-transform">Get in Touch via Contact Form &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-6">
              Navigation
            </span>
            <ul className="flex flex-col gap-3 font-mono text-sm tracking-wider">
              {siteConfig.navigation.map((item) => (
                <li key={item.number}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-3 text-[var(--text)]/80 hover:text-[var(--text)] transition-colors"
                  >
                    <span className="text-[11px] text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                      {item.number}
                    </span>
                    <span className="uppercase group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Socials & External */}
          <div className="md:col-span-4 flex flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-6">
              Connect & Source
            </span>
            <ul className="flex flex-col gap-4 font-mono text-sm tracking-wider">
              <li>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between w-full max-w-[320px] text-[var(--text)]/80 hover:text-[var(--text)] transition-colors"
                >
                  <span className="flex items-center gap-2.5 shrink-0">
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </span>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-[var(--accent)] whitespace-nowrap shrink-0 pl-3">
                    @sumitkumargarsa
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between w-full max-w-[320px] text-[var(--text)]/80 hover:text-[var(--text)] transition-colors"
                >
                  <span className="flex items-center gap-2.5 shrink-0">
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </span>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-[var(--accent)] whitespace-nowrap shrink-0 pl-3">
                    in/sumitkumargarsa
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between w-full max-w-[320px] text-[var(--text)]/80 hover:text-[var(--text)] transition-colors"
                >
                  <span className="flex items-center gap-2.5 shrink-0">
                    <TwitterXIcon size={14} />
                    <span>Twitter / X</span>
                  </span>
                  <span className="text-[11px] text-[var(--muted)] group-hover:text-[var(--accent)] whitespace-nowrap shrink-0 pl-3">
                    @sumitgarsa
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
                <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span className="tabular-nums text-[var(--text)]">{localTime || "IST"}</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
                <Globe className="w-3.5 h-3.5" />
                <span>Remote // Global</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Name Rules: Giant SUMIT KUMAR GARSA Wordmark */}
        <div className="pt-12 sm:pt-16 pb-8 border-b border-[var(--border)] overflow-hidden select-none">
          {/* Desktop single line clamp */}
          <h2 className="hidden sm:block font-display text-[clamp(44px,8.5vw,150px)] uppercase tracking-tight text-[var(--text)] leading-[0.88] whitespace-nowrap text-center opacity-90 hover:opacity-100 transition-opacity">
            {siteConfig.fullName}
          </h2>

          {/* Mobile two lines: SUMIT KUMAR / GARSA */}
          <div className="sm:hidden flex flex-col items-center leading-[0.9]">
            <span className="font-display text-[64px] uppercase tracking-tight text-[var(--text)]">
              SUMIT KUMAR
            </span>
            <span className="font-display text-[64px] uppercase tracking-tight text-[var(--accent)]">
              GARSA
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--muted)]">
          <p>{siteConfig.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors cursor-pointer py-1"
            aria-label="Back to top of page"
          >
            <span className="uppercase tracking-widest text-[11px]">Back to top</span>
            <div className="w-7 h-7 rounded-full border border-[var(--border)] flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:border-[var(--accent)]">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
