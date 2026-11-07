"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { siteConfig } from "@/data/site";
import { devData } from "@/data/dev";
import { cyberData } from "@/data/cyber";
import { Code2, ShieldAlert, X } from "lucide-react";

interface HeaderProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  triggerButtonRef: React.RefObject<HTMLButtonElement | null>;
}

export default function Header({
  isMenuOpen,
  onToggleMenu,
  triggerButtonRef,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const { mode, isDev, isCyber, setMode } = useMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full h-[68px] sm:h-[76px] lg:h-[84px] transition-all duration-300 ${
        isMenuOpen
          ? isCyber
            ? "bg-[#04080C]/95 border-b border-[#133026] backdrop-blur-md"
            : "bg-[#141312]/95 border-b border-[#2D2B28] backdrop-blur-md"
          : isCyber
          ? scrolled
            ? "bg-[#04080C]/90 border-b border-[#00F59B]/20 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-[#04080C]/80 border-b border-[#00F59B]/10 backdrop-blur-md"
          : "bg-[#141312]/95 border-b border-[rgba(239,234,226,0.12)] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
      }`}
    >
      <div className="w-full h-full px-5 sm:px-8 lg:px-[76px] flex items-center justify-between">
        {/* Left: Brand Wordmark + Mode Badge */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          <Link
            href="/"
            onClick={() => {
              if (isMenuOpen) onToggleMenu();
            }}
            className="group flex items-baseline outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
            aria-label={`${siteConfig.fullName} — Home`}
          >
            {/* Desktop (1024px+): "SUMIT KUMAR GARSA" */}
            <span
              className={`hidden lg:inline-block font-display text-3xl xl:text-4xl uppercase tracking-[0.05em] font-bold transition-colors select-none leading-none ${
                isMenuOpen
                  ? "text-[#EFEAE2]"
                  : isCyber
                  ? "text-[#E3E8F2] group-hover:text-[#00F59B]"
                  : "text-[#EFEAE2] group-hover:text-[var(--accent)]"
              }`}
            >
              {siteConfig.fullName}
              {isCyber && <span className="text-[#00F59B] ml-2">// CYBER</span>}
            </span>

            {/* Tablet (640px to 1023px): "SUMIT GARSA" */}
            <span
              className={`hidden sm:inline-block lg:hidden font-display text-2xl sm:text-3xl uppercase tracking-[0.05em] font-bold transition-colors select-none leading-none ${
                isMenuOpen
                  ? "text-[#EFEAE2]"
                  : isCyber
                  ? "text-[#E3E8F2]"
                  : "text-[#EFEAE2]"
              }`}
            >
              {siteConfig.tabletName}
            </span>

            {/* Mobile (<640px): "SKG" Monogram */}
            <span
              className={`inline-block sm:hidden font-display text-2xl uppercase tracking-[0.08em] font-bold transition-colors select-none leading-none ${
                isMenuOpen
                  ? "text-[#EFEAE2]"
                  : isCyber
                  ? "text-[#00F59B]"
                  : "text-[#EFEAE2]"
              }`}
            >
              {siteConfig.monogram}
            </span>
          </Link>

          {/* Mode Badge Pill */}
          <div
            className={`hidden xl:inline-flex items-center px-3.5 py-1.5 rounded-full border text-[11px] font-mono uppercase tracking-[0.15em] font-medium transition-all duration-300 select-none ${
              isMenuOpen
                ? isCyber
                  ? "border-[#00E58A] text-[#00E58A] shadow-[0_0_12px_rgba(0,229,138,0.25)] bg-[#00E58A]/5"
                  : "border-[#3D3934] text-[#A69E93] bg-[#232120]/40"
                : isCyber
                ? "bg-[#00F59B]/10 text-[#00F59B] border border-[#00F59B]/40 shadow-[0_0_12px_rgba(0,245,155,0.25)]"
                : "bg-[#1C1A19]/80 text-[#A69E93] border border-[rgba(239,234,226,0.14)]"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full mr-2 ${
                isCyber ? "bg-[#00F59B] animate-ping" : "bg-[#FF6A1A] animate-pulse"
              }`}
            />
            {isCyber ? cyberData.brand.badge : devData.brand.badge}
          </div>
        </div>

        {/* Right: SEGMENTED ANIMATED SLIDING PILL SWITCH + CIRCULAR 54px MENU BUTTON */}
        <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
          {/* Animated Sliding Pill Toggle Switch */}
          <div
            className={`relative flex items-center p-1 rounded-full border transition-all duration-300 ${
              isMenuOpen
                ? isCyber
                  ? "bg-[#10151C] border-[#00E58A]/40 shadow-[0_0_15px_rgba(0,229,138,0.2)]"
                  : "bg-[#232120] border-[#3D3934]"
                : isCyber
                ? "bg-[#090E15] border-[#00F59B]/40 shadow-[0_0_16px_rgba(0,245,155,0.2)]"
                : "bg-[#1C1A19] border-[rgba(239,234,226,0.14)] shadow-inner"
            }`}
            role="tablist"
            aria-label="Switch portfolio mode"
          >
            {/* MERN DEV Segment */}
            <button
              type="button"
              role="tab"
              aria-selected={isDev}
              onClick={() => setMode("dev")}
              className={`relative z-10 flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer focus-visible:outline-none ${
                isDev
                  ? "text-[#141312] font-bold"
                  : isCyber
                  ? "text-[#8E9CAE] hover:text-[#E3E8F2]"
                  : "text-[#8E8679] hover:text-[#EFEAE2]"
              }`}
            >
              <Code2 className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10 hidden sm:inline">MERN DEV</span>
              <span className="relative z-10 sm:hidden">DEV</span>
              {isDev && (
                <motion.div
                  layoutId="navbarModePill"
                  transition={{ type: "spring", stiffness: 440, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-[#EFEAE2] shadow-md z-0"
                />
              )}
            </button>

            {/* CYBERSEC Segment */}
            <button
              type="button"
              role="tab"
              aria-selected={isCyber}
              onClick={() => setMode("cyber")}
              className={`relative z-10 flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer focus-visible:outline-none ${
                isCyber
                  ? "text-[#04080C] font-bold"
                  : isMenuOpen
                  ? "text-[#A69E93] hover:text-[#EFEAE2]"
                  : "text-[#8E8679] hover:text-[#EFEAE2]"
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10 hidden sm:inline">CYBERSEC</span>
              <span className="relative z-10 sm:hidden">CYBER</span>
              {isCyber && (
                <motion.div
                  layoutId="navbarModePill"
                  transition={{ type: "spring", stiffness: 440, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-[#00F59B] shadow-[0_0_18px_rgba(0,245,155,0.75)] z-0"
                />
              )}
            </button>
          </div>

          {/* Circular Menu Button (~54px) */}
          <button
            ref={triggerButtonRef}
            type="button"
            onClick={onToggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="fullscreen-menu"
            aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            className={`w-[46px] h-[46px] md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center border transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--accent)] outline-none ${
              isMenuOpen
                ? isCyber
                  ? "bg-[#0E1824] border-[#00E58A] text-[#00E58A] shadow-[0_0_16px_rgba(0,229,138,0.3)] hover:shadow-[0_0_24px_rgba(0,229,138,0.5)]"
                  : "bg-[#232120] border-[#2D2B28] text-[#EFEAE2] hover:bg-[#2C2928]"
                : isCyber
                ? "bg-[#090E15] border-[#00F59B]/50 text-[#00F59B] shadow-[0_0_16px_rgba(0,245,155,0.25)] hover:shadow-[0_0_24px_rgba(0,245,155,0.45)]"
                : "bg-[#232120] border-[rgba(239,234,226,0.14)] text-[#EFEAE2] hover:bg-[#2C2928] hover:border-[#EFEAE2]/30"
            }`}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
              ) : (
                <div className="flex flex-col items-center justify-center gap-1.5 w-5 md:w-6">
                  <span
                    className={`block h-[2px] w-full transition-colors ${
                      isCyber ? "bg-[#00F59B]" : "bg-[#EFEAE2]"
                    }`}
                  />
                  <span
                    className={`block h-[2px] w-full transition-colors ${
                      isCyber ? "bg-[#E3E8F2]" : "bg-[#EFEAE2]"
                    }`}
                  />
                </div>
              )}
            </motion.div>
          </button>
        </div>
      </div>
    </header>
  );
}
