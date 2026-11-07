"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { siteConfig } from "@/data/site";
import { projectsData } from "@/data/projects";
import { postsData } from "@/data/posts";
import {
  Search,
  Command,
  FileCode2,
  BookOpen,
  Layers,
  ArrowRight,
  ShieldAlert,
  Code2,
  FileDown,
  Mail,
  ExternalLink,
  X,
} from "lucide-react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const { mode, setMode, isCyber } = useMode();
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle on Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const items = [
    // Modes
    {
      id: "mode-switch",
      title: mode === "dev" ? "Switch to Cybersecurity & Defense Mode" : "Switch to MERN Stack Development",
      category: "Theme & Identity",
      icon: mode === "dev" ? ShieldAlert : Code2,
      action: () => {
        setMode(mode === "dev" ? "cyber" : "dev");
        setIsOpen(false);
      },
    },
    // Navigation
    {
      id: "nav-work",
      title: "View All Projects & Architecture Case Studies",
      category: "Navigation",
      icon: Layers,
      action: () => {
        router.push("/work");
        setIsOpen(false);
      },
    },
    {
      id: "nav-studio",
      title: "Studio & Engineering Philosophy",
      category: "Navigation",
      icon: FileCode2,
      action: () => {
        router.push("/studio");
        setIsOpen(false);
      },
    },
    {
      id: "nav-services",
      title: "Core Services & Technical Capabilities Matrix",
      category: "Navigation",
      icon: Layers,
      action: () => {
        router.push("/services");
        setIsOpen(false);
      },
    },
    {
      id: "nav-journal",
      title: "Technical Journal & Architecture Essays",
      category: "Navigation",
      icon: BookOpen,
      action: () => {
        router.push("/journal");
        setIsOpen(false);
      },
    },
    {
      id: "nav-contact",
      title: "Initiate Project Engagement / Contact Brief",
      category: "Navigation",
      icon: Mail,
      action: () => {
        router.push("/contact");
        setIsOpen(false);
      },
    },
    // Downloads
    {
      id: "dl-mern-resume",
      title: "Download Full Resume (MERN Architect PDF)",
      category: "Credentials",
      icon: FileDown,
      action: () => {
        window.open(siteConfig.resumeUrl, "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "dl-cyber-resume",
      title: "Download Cybersecurity Engineer Resume (PDF)",
      category: "Credentials",
      icon: FileDown,
      action: () => {
        window.open("/resumes/Sumit_Kumar_Garsa_Cybersecurity_Resume.pdf", "_blank");
        setIsOpen(false);
      },
    },
    // Top Projects
    ...projectsData.map((project) => ({
      id: `project-${project.slug}`,
      title: `${project.title} — ${project.subtitle}`,
      category: "Case Studies",
      icon: Layers,
      action: () => {
        router.push(`/work/${project.slug}`);
        setIsOpen(false);
      },
    })),
    // Journal Articles
    ...postsData.map((post) => ({
      id: `post-${post.slug}`,
      title: `${post.title} (${post.category})`,
      category: "Journal & Whitepapers",
      icon: BookOpen,
      action: () => {
        router.push(`/journal/${post.slug}`);
        setIsOpen(false);
      },
    })),
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <>
      {/* Floating Minimalist Keyboard Shortcut Trigger (Bottom Right) */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[var(--border)] bg-[var(--surface-card)]/90 backdrop-blur-md shadow-2xl hover:scale-105 transition-all text-xs font-mono text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--accent)] cursor-pointer group"
        aria-label="Open Command Palette"
      >
        <Command className="w-3.5 h-3.5 text-[var(--accent)] group-hover:rotate-12 transition-transform" />
        <span className="tracking-wider">COMMAND MENU</span>
        <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[10px] font-semibold text-[var(--text)]">
          ⌘K
        </kbd>
      </button>

      {/* Palette Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col font-mono"
            >
              {/* Input Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border)] bg-[var(--surface)]">
                <Search className="w-4 h-4 text-[var(--accent)] shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command, project, essay, or switch mode..."
                  className="w-full bg-transparent font-sans text-sm sm:text-base text-[var(--text)] placeholder:text-[var(--muted)] outline-none"
                />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded text-[var(--muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-[var(--border)]/30 scrollbar-thin">
                {filteredItems.length === 0 ? (
                  <div className="py-12 text-center text-xs text-[var(--muted)]">
                    No results found for &quot;{query}&quot;
                  </div>
                ) : (
                  filteredItems.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.id}
                        onClick={() => item.action()}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-xl cursor-pointer transition-all ${
                          isSelected
                            ? "bg-[var(--surface)] text-[var(--text)] shadow-sm"
                            : "text-[var(--muted)] hover:text-[var(--text)]"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-3">
                          <div
                            className={`p-2 rounded-lg border transition-colors shrink-0 ${
                              isSelected
                                ? "bg-[var(--surface-card)] border-[var(--accent)] text-[var(--accent)]"
                                : "bg-[var(--surface)] border-[var(--border)] text-[var(--muted)]"
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-sans text-xs sm:text-sm font-medium truncate text-[var(--text)]">
                            {item.title}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] px-2 py-0.5 rounded bg-[var(--surface-card)] border border-[var(--border)]">
                            {item.category}
                          </span>
                          {isSelected && (
                            <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer Specs */}
              <div className="px-5 py-2.5 border-t border-[var(--border)] bg-[var(--surface)] flex items-center justify-between text-[10px] text-[var(--muted)]">
                <div className="flex items-center gap-3">
                  <span>Navigate: <kbd className="px-1 py-0.5 rounded bg-[var(--surface-card)] border border-[var(--border)] text-[var(--text)]">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-[var(--surface-card)] border border-[var(--border)] text-[var(--text)]">↓</kbd></span>
                  <span>Select: <kbd className="px-1 py-0.5 rounded bg-[var(--surface-card)] border border-[var(--border)] text-[var(--text)]">↵</kbd></span>
                  <span>Close: <kbd className="px-1 py-0.5 rounded bg-[var(--surface-card)] border border-[var(--border)] text-[var(--text)]">ESC</kbd></span>
                </div>
                <span className="text-[var(--accent)] font-semibold">SKG // v5.2</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
