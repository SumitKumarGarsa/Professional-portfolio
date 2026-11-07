"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData, processSteps, engagementModels, faqsData } from "@/data/services";
import Footer from "@/components/layout/Footer";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  HelpCircle,
} from "lucide-react";

export default function ServicesPage() {
  const [openServiceIdx, setOpenServiceIdx] = useState<number | null>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleService = (idx: number) => {
    setOpenServiceIdx((prev) => (prev === idx ? null : idx));
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
      <main id="main-content" className="pt-[88px] sm:pt-[98px] lg:pt-[108px] pb-20 sm:pb-32 px-6 sm:px-12 lg:px-[76px]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                <span className="text-[var(--accent)] font-semibold">03</span>
                <span>&bull;</span>
                <span>SERVICES & EXPERTISE</span>
              </div>
              <h1 className="font-display text-[clamp(44px,8vw,120px)] uppercase tracking-tight text-[var(--text)] leading-[0.92]">
                ARCHITECTURAL CAPABILITIES
              </h1>
            </div>

            <p className="font-sans text-sm sm:text-base text-[var(--muted)] max-w-md leading-relaxed">
              Specialized full-stack software development services delivered with clean code, strict type-safety, and production-tested architectures.
            </p>
          </div>

          {/* 1. Expandable Services Accordion List */}
          <div className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)] mb-24 sm:mb-36">
            {servicesData.map((service, idx) => {
              const isOpen = openServiceIdx === idx;

              return (
                <div key={service.number} className="py-8 sm:py-12 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleService(idx)}
                    className="w-full flex flex-col md:flex-row md:items-center justify-between text-left gap-4 cursor-pointer outline-none group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="font-mono text-sm sm:text-base text-[var(--muted)] tracking-widest pt-1">
                        {service.number}
                      </span>
                      <div>
                        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                          {service.title}
                        </h2>
                        <p className="font-sans text-xs sm:text-sm text-[var(--muted)] mt-1.5">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 self-end md:self-center">
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] hidden sm:inline">
                        {service.timeline}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text)] group-hover:border-[var(--text)] transition-colors">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="pt-8 sm:pt-10 pl-0 sm:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      <div className="lg:col-span-7">
                        <p className="font-sans text-base sm:text-lg text-[var(--text)]/85 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] font-mono text-xs uppercase tracking-wider text-[var(--text)]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-5 p-6 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-4 font-semibold">
                          Typical Deliverables
                        </h3>
                        <ul className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm text-[var(--text)]/85">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 2. Process Section (5 Numbered Steps) */}
          <section className="mb-24 sm:mb-36">
            <div className="mb-14 sm:mb-20">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3 block">
                Methodology
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text)]">
                HOW WE COLLABORATE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="p-6 sm:p-8 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-sm font-bold text-[var(--accent)] mb-4 block">
                      {step.number}
                    </span>
                    <h3 className="font-display text-2xl uppercase tracking-tight text-[var(--text)] mb-3">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <ul className="pt-4 border-t border-[var(--border)] flex flex-col gap-2 font-mono text-[10px] text-[var(--muted)]">
                    {step.details.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[var(--accent)]">&bull;</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Engagement Models (Cards) */}
          <section className="mb-24 sm:mb-36">
            <div className="mb-14 sm:mb-20">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3 block">
                Collaboration Formats
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text)]">
                ENGAGEMENT MODELS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {engagementModels.map((model) => (
                <div
                  key={model.title}
                  className="p-8 sm:p-10 rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm flex flex-col justify-between hover:border-[var(--accent)]/40 transition-colors"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-2 block">
                      {model.subtitle}
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[var(--text)] mb-4">
                      {model.title}
                    </h3>

                    <p className="font-sans text-sm text-[var(--muted)] mb-6 leading-relaxed">
                      {model.idealFor}
                    </p>

                    <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-[var(--text)]/85 mb-8">
                      {model.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-[var(--border)]">
                    <Link
                      href={`/contact?model=${encodeURIComponent(model.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[var(--text)] text-[var(--bg)] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--accent)] hover:text-white transition-colors"
                    >
                      <span>{model.cta}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. FAQ Accordion */}
          <section className="mb-24 sm:mb-32">
            <div className="mb-14 sm:mb-20">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3 block">
                Clarifications
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text)]">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {faqsData.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;

                return (
                  <div key={idx} className="py-6 sm:py-8">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-left gap-4 cursor-pointer outline-none group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl sm:text-2xl uppercase tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                        {faq.question}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text)] shrink-0 group-hover:border-[var(--text)] transition-colors">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <p className="pt-4 font-sans text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 5. Contact CTA */}
          <div className="p-10 sm:p-16 rounded-3xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm text-center flex flex-col items-center">
            <h3 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text)] mb-4">
              READY TO DISCUSS AN ARCHITECTURE?
            </h3>
            <p className="font-sans text-sm sm:text-base text-[var(--muted)] max-w-xl mb-8 leading-relaxed">
              Drop a project brief or schedule a scoping call to review requirements, timeline, and deliverables.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[var(--text)] text-[var(--bg)] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-[var(--accent)] hover:text-white transition-all shadow-xl"
            >
              <span>Initiate Scoping Transmission</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
