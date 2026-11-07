"use client";

import React from "react";
import Link from "next/link";
import { postsData } from "@/data/posts";
import { ArrowUpRight } from "lucide-react";

export default function LatestJournalSection() {
  const latestPosts = postsData.slice(0, 3);

  return (
    <section id="journal" className="relative z-10 w-full py-20 sm:py-32 px-6 sm:px-12 lg:px-[76px] border-t border-[var(--border)] bg-[var(--bg)] transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
              <span className="text-[var(--accent)] font-semibold">03</span>
              <span>&bull;</span>
              <span>Technical Notes</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[var(--text)]">
              LATEST FROM THE JOURNAL
            </h2>
          </div>

          <Link
            href="/journal"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] hover:text-[var(--text)] transition-colors pb-1 border-b border-transparent hover:border-[var(--text)]"
          >
            <span>Read All Essays</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--accent)]" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group p-8 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)]/40 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-6">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] font-semibold mb-3 block">
                  {post.category}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-[1.05]">
                  {post.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[var(--muted)] mt-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between font-mono text-xs text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
                <span className="uppercase tracking-wider">Read Essay</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--accent)]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
