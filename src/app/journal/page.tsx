"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { postsData, BlogPost } from "@/data/posts";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight, Search, Tag, Clock, Calendar } from "lucide-react";

export default function JournalPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    postsData.forEach((post) => post.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  const filteredPosts = useMemo(() => {
    return postsData.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag =
        selectedTag === "All" || post.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
      <main id="main-content" className="pt-[88px] sm:pt-[98px] lg:pt-[108px] pb-20 sm:pb-32 px-6 sm:px-12 lg:px-[76px]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                <span className="text-[var(--accent)] font-semibold">04</span>
                <span>&bull;</span>
                <span>CASE NOTES & MDX ESSAYS</span>
              </div>
              <h1 className="font-display text-[clamp(44px,8vw,120px)] uppercase tracking-tight text-[var(--text)] leading-[0.92]">
                TECHNICAL JOURNAL ({postsData.length.toString().padStart(2, "0")})
              </h1>
            </div>

            <p className="font-sans text-sm sm:text-base text-[var(--muted)] max-w-md leading-relaxed">
              In-depth essays on database scaling, React 18 concurrent optimization, microservice design, and production security hardening.
            </p>
          </div>

          {/* Search Bar & Tag Filter */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[var(--border)] mb-12 sm:mb-16">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
              <input
                type="text"
                placeholder="Search articles by topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[var(--surface-card)] border border-[var(--border)] font-sans text-xs sm:text-sm text-[var(--text)] placeholder-[var(--muted)] outline-none focus:border-[var(--accent)] transition-colors shadow-sm"
              />
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-[var(--muted)] hidden sm:inline" />
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    selectedTag === tag
                      ? "bg-[var(--text)] text-[var(--bg)] font-bold"
                      : "bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] hover:text-[var(--text)]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center font-mono text-sm text-[var(--muted)]">
              No technical notes match your search criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm p-8 sm:p-10 flex flex-col justify-between hover:border-[var(--accent)]/40 transition-all duration-300"
                >
                  <div>
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3 block">
                      {post.category}
                    </span>

                    <Link href={`/journal/${post.slug}`}>
                      <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-[1.05] mb-4">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="font-sans text-xs sm:text-sm text-[var(--muted)] leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {post.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded bg-[var(--surface)] font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between font-mono text-xs text-[var(--muted)] group-hover:text-[var(--text)] transition-colors">
                      <Link
                        href={`/journal/${post.slug}`}
                        className="inline-flex items-center gap-2 uppercase tracking-wider text-xs"
                      >
                        <span>Read Essay</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
