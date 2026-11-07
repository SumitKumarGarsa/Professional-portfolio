"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function SelectedWorkSection() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="work" className="relative z-10 w-full py-20 sm:py-32 px-6 sm:px-12 lg:px-[76px] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
              <span className="text-[var(--accent)] font-semibold">01</span>
              <span>&bull;</span>
              <span>Selected Work</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[var(--text)]">
              FEATURED PRODUCTION SYSTEMS
            </h2>
          </div>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] hover:text-[var(--text)] transition-colors pb-1 border-b border-transparent hover:border-[var(--text)]"
          >
            <span>View All Projects ({projectsData.length})</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--accent)]" />
          </Link>
        </div>

        {/* Editorial Project Rows List */}
        <div className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {featuredProjects.map((project, index) => {
            const isHovered = hoveredSlug === project.slug;

            return (
              <div
                key={project.slug}
                className="group relative"
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="relative flex flex-col lg:flex-row lg:items-center justify-between py-10 sm:py-14 transition-all duration-300 outline-none"
                >
                  {/* Left: Number + Title */}
                  <div className="flex items-baseline gap-4 sm:gap-8 lg:gap-12 transition-transform duration-300 group-hover:translate-x-3">
                    <span className="font-mono text-xs sm:text-sm text-[var(--muted)] tracking-widest pt-1">
                      {project.number}
                    </span>
                    <div className="flex flex-col">
                      <h3 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-none">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[var(--muted)] mt-2 max-w-lg line-clamp-1">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Meta Tags & Arrow */}
                  <div className="mt-6 lg:mt-0 flex flex-wrap items-center gap-4 sm:gap-8 justify-between lg:justify-end">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)] font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                        {project.category}
                      </span>
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)] font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                        {project.year}
                      </span>
                      <span className="hidden md:inline-block px-2.5 py-1 rounded bg-[var(--surface)] border border-[var(--border)] font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                        {project.metrics[0]?.value}
                      </span>
                    </div>

                    {/* Circular Arrow Action */}
                    <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text)] group-hover:border-[var(--text)] group-hover:bg-[var(--text)] group-hover:text-[var(--bg)] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>

                {/* Floating Preview Image on Desktop */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="hidden xl:block pointer-events-none absolute right-24 top-1/2 -translate-y-1/2 z-20 w-[360px] h-[220px] rounded-lg overflow-hidden border border-[var(--border)] shadow-2xl bg-[var(--surface-card)]"
                    >
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="360px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                        <span>{project.client}</span>
                        <span className="text-[var(--accent)]">{project.metrics[0]?.label}: {project.metrics[0]?.value}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
