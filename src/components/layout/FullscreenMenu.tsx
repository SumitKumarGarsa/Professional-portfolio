"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { cyberData } from "@/data/cyber";
import { useMode } from "@/context/ModeContext";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/common/SocialIcons";
import { Globe, Mail, Clock, ShieldAlert, Code2 } from "lucide-react";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerButtonRef: React.RefObject<HTMLButtonElement | null>;
}

export default function FullscreenMenu({
  isOpen,
  onClose,
  triggerButtonRef,
}: FullscreenMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [localTime, setLocalTime] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { isCyber, isDev, mode } = useMode();

  const navigationItems = isCyber
    ? [
        { number: "01", label: "THREAT LAB", href: "#studio", description: "Offensive & Defensive Doctrine" },
        { number: "02", label: "EXPLOITS & CASES", href: "#work", description: "CVE Credits & Red-Team Cases" },
        { number: "03", label: "SEC-SERVICES", href: "#services", description: "Pen-Testing & Hardening" },
        { number: "04", label: "THREAT INTEL", href: "#journal", description: "Vulnerability Briefings & Labs" },
        { number: "05", label: "CONTACT", href: "/contact?mode=cybersec", description: "Encrypted Scoping Transmission" },
      ]
    : siteConfig.navigation;

  // Update IST live local time
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
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

  // Trap focus, handle Escape key, and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus first link on open
    const timer = setTimeout(() => {
      firstItemRef.current?.focus();
    }, 150);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        triggerButtonRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose, triggerButtonRef]);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();

    if (href.startsWith("#")) {
      if (pathname === "/") {
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 160);
      } else {
        setTimeout(() => {
          router.push(`/${href}`);
        }, 60);
      }
    } else {
      if (pathname !== href) {
        setTimeout(() => {
          router.push(href);
        }, 60);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="fullscreen-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto transition-colors duration-400 ${
            isCyber ? "bg-[#04080C] text-[#E3E8F2]" : "bg-[#141312] text-[#EFEAE2]"
          } pt-[76px] sm:pt-[88px] lg:pt-[100px] pb-8 sm:pb-12 px-6 sm:px-12 lg:px-[76px]`}
          style={{ scrollbarWidth: "none" }}
        >
          {/* Subtle noise / film-grain overlay inside menu */}
          <div className="film-grain-overlay opacity-25" aria-hidden="true" />

          {/* Navigation Links List */}
          <div className="relative z-10 w-full my-auto py-6 lg:py-10">
            <nav className="flex flex-col gap-6 sm:gap-10 lg:gap-14 max-w-7xl" aria-label="Main Navigation">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href;
                const isHovered = hoveredIndex === index;
                const isAnyHovered = hoveredIndex !== null;
                const isDimmed = isAnyHovered && !isHovered;

                const numberColor = isCyber
                  ? isHovered || isActive
                    ? "#00F59B"
                    : "#1F8F5F"
                  : isHovered || isActive
                  ? "var(--accent)"
                  : "var(--muted)";

                const arrowColor = isCyber
                  ? isHovered
                    ? "#00F59B"
                    : "#1F8F5F"
                  : isHovered
                  ? "#EFEAE2"
                  : "var(--muted)";

                return (
                  <div key={item.number} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.12 + index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        ref={index === 0 ? firstItemRef : undefined}
                        href={item.href}
                        onClick={(e) => handleNavigation(e, item.href)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onFocus={() => setHoveredIndex(index)}
                        onBlur={() => setHoveredIndex(null)}
                        aria-current={isActive ? "page" : undefined}
                        className={`group relative flex items-baseline justify-between w-full max-w-[85%] py-1 transition-all duration-300 outline-none select-none ${
                          isDimmed ? "opacity-35" : "opacity-100"
                        }`}
                      >
                        {/* Left: Mono Number + Giant Bebas Label */}
                        <div className="flex items-start gap-4 sm:gap-6 lg:gap-10 transition-transform duration-300 group-hover:translate-x-6">
                          {/* Small mono number top-left of word */}
                          <span
                            className="font-mono text-xs sm:text-sm lg:text-base tracking-widest pt-2 sm:pt-3 transition-colors duration-300 select-none"
                            style={{ color: numberColor }}
                          >
                            {item.number}
                          </span>

                          {/* Giant Bebas Neue Title */}
                          <div className="flex flex-col">
                            <span
                              className={`font-display uppercase tracking-tight leading-[0.92] text-[clamp(56px,10vw,180px)] transition-colors duration-300 ${
                                isActive
                                  ? isCyber
                                    ? "text-[#00F59B]"
                                    : "text-[var(--accent)]"
                                  : isCyber
                                  ? "text-[#E3E8F2] group-hover:text-[#00F59B]"
                                  : "text-[#EFEAE2] group-hover:text-[#EFEAE2]"
                              }`}
                            >
                              {item.label}
                            </span>
                            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.16em] opacity-60 mt-1" style={{ color: isCyber ? "#8E9CAE" : "var(--muted)" }}>
                              {item.description}
                            </span>
                          </div>
                        </div>

                        {/* Right: Thin Long Arrow (→) at ~80% width */}
                        <div className="flex items-center pl-6">
                          <svg
                            className={`transition-all duration-300 ${
                              isHovered
                                ? "scale-x-125 translate-x-2"
                                : "scale-x-100"
                            }`}
                            style={{ color: arrowColor }}
                            width="64"
                            height="24"
                            viewBox="0 0 64 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <line
                              x1="0"
                              y1="12"
                              x2="56"
                              y2="12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M48 4L58 12L48 20"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Footer Strip Inside Overlay (Bottom) */}
          <div className="relative z-10 w-full pt-6 sm:pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left: Location & Local Time */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[var(--muted)]">
              <span className="flex items-center gap-2 text-[#EFEAE2]">
                <Globe className="w-3.5 h-3.5 text-[var(--muted)]" />
                <span>{siteConfig.location}</span>
              </span>

              <span className="hidden sm:inline text-[var(--border)]">|</span>

              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span className="tabular-nums">{localTime || "18:00 IST"}</span>
              </span>

              <span className="hidden lg:inline text-[var(--border)]">|</span>

              <span className="hidden lg:inline uppercase tracking-wider text-[var(--muted)]">
                {siteConfig.availabilityStatus}
              </span>
            </div>

            {/* Right: Email & Social Links */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs sm:text-sm font-mono text-[var(--muted)]">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-[#EFEAE2]"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={15} />
                <span className="uppercase tracking-wider">GitHub</span>
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-[#EFEAE2]"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
                <span className="uppercase tracking-wider">LinkedIn</span>
              </a>

              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-[#EFEAE2]"
                aria-label="Twitter Profile"
              >
                <TwitterXIcon size={13} />
                <span className="uppercase tracking-wider">X</span>
              </a>

              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center gap-1.5 transition-colors hover:text-[#EFEAE2]"
                aria-label="Contact Sumit Kumar Garsa"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wider">Contact</span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
