"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export default function ServicesTeaserSection() {
  const previewServices = servicesData.slice(0, 4);

  return (
    <section id="services" className="relative z-10 w-full py-20 sm:py-32 px-6 sm:px-12 lg:px-[76px] border-t border-[var(--border)] bg-[var(--bg)] transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
              <span className="text-[var(--accent)] font-semibold">02</span>
              <span>&bull;</span>
              <span>Core Capabilities</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[var(--text)]">
              WHAT I ENGINEER
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] hover:text-[var(--text)] transition-colors pb-1 border-b border-transparent hover:border-[var(--text)]"
          >
            <span>View Full Service Matrix</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--accent)]" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {previewServices.map((service) => (
            <div
              key={service.number}
              className="group p-8 sm:p-10 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)]/40 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm tracking-widest text-[var(--accent)] font-bold">
                    {service.number}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                    {service.timeline}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[var(--muted)] mt-4 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[var(--surface)] font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
