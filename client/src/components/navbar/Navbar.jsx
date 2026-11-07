import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Shield, ArrowUpRight, Menu, X } from "lucide-react";
import { useMode } from "@/context/ModeContext";
import ModeToggle from "./ModeToggle";
import { devData } from "@/data/devData";
import { cybersecData } from "@/data/cybersecData";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const { mode, isDev, isCybersec } = useMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const hamburgerBtnRef = useRef(null);

  const data = isCybersec ? cybersecData : devData;

  // 1. Navigation Links Per Mode
  const devNavLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const cyberNavLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Labs & CTFs", href: "#labs" },
    { label: "Certifications", href: "#certifications" },
    { label: "Reports", href: "#reports" },
    { label: "Contact", href: "#contact" },
  ];

  const currentNavLinks = isCybersec ? cyberNavLinks : devNavLinks;

  // 2. Scroll Listener: Border & Shadow appear after 20px scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Scroll-Spy (IntersectionObserver) to highlight active section
  useEffect(() => {
    const sectionIds = currentNavLinks.map((item) => item.href.replace("#", ""));
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentNavLinks, mode]);

  // 4. Lock Body Scroll on Mobile Drawer Open & Escape Key Listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileDrawerOpen) {
        setMobileDrawerOpen(false);
        hamburgerBtnRef.current?.focus();
      }
    };

    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileDrawerOpen]);

  const handleLinkClick = (href) => {
    setMobileDrawerOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* =====================================================
          DESKTOP & MOBILE STICKY HEADER
          ===================================================== */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? isCybersec
              ? "bg-[#0A0D0B]/85 backdrop-blur-md border-b border-[#1E3327] shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-3.5"
              : "bg-[#F6F1E7]/85 backdrop-blur-md border-b border-[#D9CFBE] shadow-sm py-3.5"
            : "bg-transparent border-b border-transparent py-5 sm:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Monogram Logo [SKG] */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-mono text-sm sm:text-base font-bold tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
            aria-label={`${data.profile.name} Home`}
          >
            <div
              className={cn(
                "w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300",
                isCybersec
                  ? "bg-[#101612] border-[#1E3327] text-[#00FF9C] group-hover:shadow-[0_0_14px_rgba(0,255,156,0.5)]"
                  : "bg-[#EFE8DC] border-[#D9CFBE] text-[#141414] group-hover:bg-[#141414] group-hover:text-white"
              )}
            >
              <AnimatePresence mode="wait">
                {isDev ? (
                  <motion.div
                    key="dev-logo"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Code2 className="w-4 h-4 stroke-[2.4]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="cyber-logo"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Shield className="w-4 h-4 stroke-[2.4]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl leading-none tracking-tight font-extrabold">
                {data.profile.initials}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-muted -mt-0.5">
                {isCybersec ? "CYBERSEC" : "MERN DEV"}
              </span>
            </div>
          </a>

          {/* CENTER: Navigation Links with Scroll-Spy & Active Underline */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border bg-surface/50 backdrop-blur-sm border-border"
          >
            {currentNavLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold transition-colors duration-200 rounded-full",
                    isActive
                      ? isCybersec
                        ? "text-[#00FF9C]"
                        : "text-[#141414]"
                      : isCybersec
                      ? "text-[#6B8B77] hover:text-[#E2FBEF]"
                      : "text-[#6B6257] hover:text-[#141414]"
                  )}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Animated Active Underline via Framer Motion */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className={cn(
                        "absolute inset-0 rounded-full -z-0",
                        isCybersec
                          ? "bg-[#00FF9C]/15 border border-[#00FF9C]/40"
                          : "bg-black/5 border border-black/10"
                      )}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: THE MODE TOGGLE + "HIRE ME" CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3.5">
            <ModeToggle />

            {/* Hire Me CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 active:scale-95 shadow-sm",
                isCybersec
                  ? "bg-[#00FF9C] hover:bg-[#00DF87] text-[#0A0D0B] shadow-[0_0_14px_rgba(0,255,156,0.35)]"
                  : "bg-[#141414] hover:bg-[#2B2925] text-white"
              )}
            >
              <span>{isCybersec ? "Initiate Audit" : "Hire Me"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* MOBILE: HAMBURGER TRIGGER BUTTON */}
          <div className="flex md:hidden items-center gap-2">
            <button
              ref={hamburgerBtnRef}
              type="button"
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
              aria-label={mobileDrawerOpen ? "Close navigation drawer" : "Open navigation drawer"}
              aria-expanded={mobileDrawerOpen}
              className={cn(
                "w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                isCybersec
                  ? "bg-[#101612] border-[#1E3327] text-[#00FF9C]"
                  : "bg-[#EFE8DC] border-[#D9CFBE] text-[#141414]"
              )}
            >
              <AnimatePresence mode="wait">
                {mobileDrawerOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5 stroke-[2.2]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5 stroke-[2.2]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE DRAWER (< 768px)
          - Thumb-friendly ModeToggle at the TOP (min-h: 48px)
          - Staggered Links
          - Close on Esc / Backdrop click / Link click
          ===================================================== */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            {/* Slide-In Drawer */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className={cn(
                "fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm p-6 flex flex-col justify-between overflow-y-auto md:hidden shadow-2xl",
                isCybersec
                  ? "bg-[#0A0D0B] border-l border-[#1E3327] text-[#E2FBEF]"
                  : "bg-[#F6F1E7] border-l border-[#D9CFBE] text-[#141414]"
              )}
            >
              {/* Drawer Top Row: Title + Close */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl font-bold">
                      {data.profile.initials}
                    </span>
                    <span className="font-mono text-xs text-muted uppercase">
                      / Navigation
                    </span>
                  </div>

                  <button
                    onClick={() => setMobileDrawerOpen(false)}
                    aria-label="Close drawer"
                    className="w-9 h-9 rounded-full flex items-center justify-center border border-border hover:bg-black/5 focus:outline-none"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* THE MODE TOGGLE (Full Width, Min Height 48px, Thumb-friendly) */}
                <div className="w-full">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-muted mb-2">
                    Portfolio Specialization
                  </span>
                  <ModeToggle isMobileDrawer={true} />
                </div>

                {/* Staggered Navigation Links */}
                <nav className="flex flex-col gap-1 pt-2">
                  {currentNavLinks.map((link, idx) => {
                    const targetId = link.href.replace("#", "");
                    const isActive = activeSection === targetId;

                    return (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx, duration: 0.25 }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-xl font-mono text-sm uppercase tracking-wider font-semibold transition-colors",
                          isActive
                            ? isCybersec
                              ? "bg-[#00FF9C]/10 text-[#00FF9C] border border-[#00FF9C]/30"
                              : "bg-[#141414] text-white"
                            : isCybersec
                            ? "hover:bg-[#101612] text-[#6B8B77] hover:text-[#E2FBEF]"
                            : "hover:bg-[#EFE8DC] text-[#6B6257] hover:text-[#141414]"
                        )}
                      >
                        <span>{link.label}</span>
                        <span className="text-xs opacity-60">0{idx + 1}</span>
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#contact");
                  }}
                  className={cn(
                    "w-full py-3.5 px-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-center flex items-center justify-center gap-2 shadow-sm",
                    isCybersec
                      ? "bg-[#00FF9C] text-[#0A0D0B] shadow-[0_0_16px_rgba(0,255,156,0.4)]"
                      : "bg-[#141414] text-white"
                  )}
                >
                  <span>{isCybersec ? "Initiate Security Audit" : "Hire MERN Developer"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-between text-[11px] font-mono text-muted px-1">
                  <span>Remote // India</span>
                  <span>{isCybersec ? "DEFCON 4" : "AVAILABLE"}</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
