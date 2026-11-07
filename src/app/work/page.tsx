"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/data/projects";
import Footer from "@/components/layout/Footer";
import { GithubIcon } from "@/components/common/SocialIcons";
import { ArrowUpRight, ExternalLink, Filter } from "lucide-react";

const CATEGORIES = ["All", "Full-Stack", "Frontend", "API", "SaaS"] as const;
type Category = (typeof CATEGORIES)[number];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
      <main id="main-content" className="pt-[88px] sm:pt-[98px] lg:pt-[108px] pb-20 sm:pb-32 px-6 sm:px-12 lg:px-[76px]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                <span className="text-[var(--accent)] font-semibold">02</span>
                <span>&bull;</span>
                <span>INDEX OF SYSTEMS</span>
              </div>
              <h1 className="font-display text-[clamp(44px,8vw,120px)] uppercase tracking-tight text-[var(--text)] leading-[0.92]">
                SELECTED WORK ({projectsData.length.toString().padStart(2, "0")})
              </h1>
            </div>

            <p className="font-sans text-sm sm:text-base text-[var(--muted)] max-w-md leading-relaxed">
              A curated index of production web applications, distributed APIs, and scalable SaaS platforms engineered for high concurrency and zero runtime bloat.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 sm:pb-12 border-b border-[var(--border)] mb-12 sm:mb-16">
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--muted)] mr-3">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>

            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === "All"
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                    isActive
                      ? "text-[var(--bg)] font-bold"
                      : "text-[var(--muted)] hover:text-[var(--text)] border border-[var(--border)]"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{category}</span>
                    <span className="text-[10px] opacity-70">({count})</span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-[var(--text)] z-0"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Projects Editorial Grid */}
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm overflow-hidden flex flex-col justify-between hover:border-[var(--accent)]/40 transition-colors"
                >
                  {/* Thumbnail Container */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface)] block"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white">
                        {project.number} &bull; {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[var(--accent)] font-semibold">
                        {project.year}
                      </span>
                    </div>

                    {/* Bottom Metric Pill */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                      <span className="px-3 py-1 rounded bg-black/80 border border-white/10">
                        {project.client}
                      </span>
                      <span className="px-3 py-1 rounded bg-[var(--accent)] text-white font-bold">
                        {project.metrics[0]?.value}
                      </span>
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-8 sm:p-10 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <Link href={`/work/${project.slug}`}>
                          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                            {project.title}
                          </h2>
                        </Link>
                        <Link
                          href={`/work/${project.slug}`}
                          className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text)] shrink-0 group-hover:bg-[var(--text)] group-hover:text-[var(--bg)] group-hover:border-[var(--text)] transition-all"
                          aria-label={`View ${project.title} case study`}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>

                      <p className="font-sans text-sm sm:text-base text-[var(--muted)] leading-relaxed line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[var(--surface)] font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Direct links */}
                      <div className="flex items-center gap-3 font-mono text-xs text-[var(--muted)]">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--text)] transition-colors p-1"
                            aria-label={`${project.title} GitHub Source`}
                          >
                            <GithubIcon size={16} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--text)] transition-colors p-1"
                            aria-label={`${project.title} Live Demo`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
