import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { studioData } from "@/data/experience";
import { siteConfig } from "@/data/site";
import Footer from "@/components/layout/Footer";
import {
  FileDown,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Sparkles,
  Award,
  GraduationCap,
  Briefcase,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Philosophy, architectural methodology, career experience, and technical skill matrix of Sumit Kumar Garsa — Senior MERN Stack Architect.",
};

export default function StudioPage() {
  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
      {/* 1. Header Hero / Intro Statement */}
      <section className="pt-[88px] sm:pt-[98px] lg:pt-[108px] pb-16 sm:pb-24 px-6 sm:px-12 lg:px-[76px]">
        <div className="max-w-7xl mx-auto">
          {/* Header Title & Location Telemetry */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
                <span className="text-[var(--accent)] font-semibold">01</span>
                <span>&bull;</span>
                <span>STUDIO & PHILOSOPHY</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[var(--text)] leading-none">
                ARCHITECTURE & STORY
              </h1>
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] pb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>REMOTE // SYSTEMS LAB</span>
            </div>
          </div>

          {/* Continuous Single-Line Manifesto Ribbon (Balanced Full-Span) */}
          <div className="w-full py-3.5 sm:py-4 px-5 sm:px-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] mb-12 sm:mb-16 flex items-center justify-between gap-6 shadow-sm overflow-hidden">
            {/* Left: Mandate Tag + Continuous Statement */}
            <div className="flex items-center gap-4 min-w-0 flex-1 overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
              <div className="flex items-center gap-2 shrink-0 font-mono text-[10px] sm:text-xs uppercase tracking-widest px-2.5 py-1 rounded-full bg-[var(--surface)] text-[var(--accent)] border border-[var(--border)] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
                <span>MANDATE</span>
              </div>

              <p className="font-display text-[clamp(16px,1.8vw,26px)] uppercase tracking-[0.05em] text-[var(--text)] select-none leading-none shrink-0">
                ENGINEERING SCALABLE PRODUCTS{" "}
                <span className="text-[var(--accent)] mx-2 font-bold">&bull;</span>{" "}
                <span className="text-[var(--accent)] font-bold">WITH ZERO COMPROMISE</span>{" "}
                <span className="text-[var(--accent)] mx-2 font-bold">&bull;</span>{" "}
                ON ARCHITECTURE OR INTERACTION DESIGN
              </p>
            </div>

            {/* Right: Live System Specs (Fills the right space completely) */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0 font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] pl-4 border-l border-[var(--border)]">
              <span className="px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F59B] animate-pulse shrink-0" />
                <span>SLA: 99.99%</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)] font-semibold">
                P99 &lt; 15MS
              </span>
              <span className="px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-medium">
                AVAILABLE Q2/Q3
              </span>
            </div>
          </div>

          {/* Editorial Story + Profile Photo Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Story Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-[var(--text)]/85 font-sans text-base sm:text-lg leading-relaxed">
              {studioData.storyParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? "font-medium text-lg sm:text-xl text-[var(--text)] leading-relaxed"
                      : "text-[var(--muted)]"
                  }
                >
                  {paragraph}
                </p>
              ))}

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <a
                  href={siteConfig.resumeUrl}
                  download={siteConfig.resumeFilename}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[var(--text)] text-[var(--bg)] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-300 hover:bg-[var(--accent)] hover:text-white shadow-lg"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Full Resume (PDF)</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border)] bg-[var(--surface-card)] font-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--text)] hover:border-[var(--text)] transition-colors"
                >
                  <span>Discuss an Engagement</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Architectural Identity & Telemetry Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[var(--border)] bg-gradient-to-b from-[var(--surface-card)] to-[var(--surface)] p-8 flex flex-col justify-between shadow-2xl group">
                {/* Background Tech Grid & Watermark */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage: "linear-gradient(to right, var(--text) 1px, transparent 1px), linear-gradient(to bottom, var(--text) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                  aria-hidden="true"
                />

                {/* Top Bar: Crosshairs & Status */}
                <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-[var(--muted)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F59B] animate-pulse" />
                    <span className="uppercase tracking-widest text-[var(--text)] font-semibold">SKG // ARCHITECT CONSOLE</span>
                  </div>
                  <span className="text-[var(--accent)] font-mono">NODE.v22-LTS</span>
                </div>

                {/* Center: Profile Portrait & Identity with Radar Glow */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-4">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border-2 border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-2xl group-hover:border-[var(--accent)] transition-all duration-500">
                    <div className="absolute inset-0 rounded-2xl border border-[var(--accent)]/30 animate-ping opacity-20 pointer-events-none" />
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[var(--surface)]">
                      <Image
                        src={siteConfig.profileImage}
                        alt={siteConfig.fullName}
                        fill
                        sizes="(max-width: 768px) 160px, 192px"
                        priority
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <span className="font-display text-2xl uppercase tracking-wider text-[var(--text)] mt-4">
                    {siteConfig.fullName}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mt-1">
                    MERN Full Stack Developer &bull; React &bull; Node.js &bull; Vite
                  </span>
                </div>

                {/* Bottom Telemetry & Verified Cryptographic Hash */}
                <div className="relative z-10 pt-4 border-t border-[var(--border)] font-mono text-[11px] text-[var(--muted)] flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span>LOCATION:</span>
                    <span className="text-[var(--text)] font-medium">GURUGRAM, HARYANA (REMOTE)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SECURITY CLEARANCE:</span>
                    <span className="text-[#00F59B] font-medium">DELOITTE &amp; CISCO VERIFIED</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>PROBLEM SOLVING:</span>
                    <span className="text-[var(--text)] font-medium">552 DSA PROBLEMS SOLVED</span>
                  </div>
                </div>
              </div>

              {/* Quick Spec Badge */}
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] font-mono text-xs text-[var(--muted)] flex items-center justify-between shadow-sm">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{siteConfig.location}</span>
                </span>
                <span className="text-[var(--accent)] font-semibold">552+ LEETCODE DSA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Numbered Engineering Principles */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-[76px] border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 sm:mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3 block">
              Doctrine & Values
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text)]">
              CORE ENGINEERING PRINCIPLES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {studioData.principles.map((principle) => (
              <div
                key={principle.number}
                className="p-8 sm:p-10 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-sm tracking-widest text-[var(--accent)] font-bold mb-4 block">
                    {principle.number}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text)] mb-4">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Grouped Skills Matrix */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-[76px] border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 sm:mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3 block">
              Technical Competencies
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text)]">
              SKILLS MATRIX & CAPABILITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {studioData.skillCategories.map((group) => (
              <div
                key={group.category}
                className="p-8 sm:p-10 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text)] mb-2">
                    {group.category}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-6">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-3 py-1.5 rounded-full font-mono text-xs tracking-wider uppercase transition-colors ${
                          skill.highlighted
                            ? "bg-[var(--text)] text-[var(--bg)] font-bold"
                            : "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)]"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Experience & Education Animated Vertical Timeline */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-[76px] border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 sm:mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3 block">
              Career Trajectory
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text)]">
              EXPERIENCE & EDUCATION
            </h2>
          </div>

          <div className="relative pl-6 sm:pl-10 border-l border-[var(--border)] flex flex-col gap-12 sm:gap-16">
            {/* Experience Items */}
            {studioData.experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--accent)] border-4 border-[var(--surface)]" />

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--muted)] mb-2">
                  <span className="text-[var(--accent)] font-semibold">{exp.period}</span>
                  <span>&bull;</span>
                  <span>{exp.location}</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[var(--text)]">
                  {exp.role} <span className="text-[var(--muted)] font-normal">@ {exp.company}</span>
                </h3>

                <p className="font-sans text-sm sm:text-base text-[var(--muted)] mt-3 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                <ul className="mt-4 flex flex-col gap-2 max-w-3xl">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-[var(--text)]/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[var(--surface-2)] font-mono text-[10px] text-[var(--text)] uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Education Item */}
            {studioData.education.map((edu, idx) => (
              <div key={idx} className="relative group pt-4">
                <div className="absolute -left-[31px] sm:-left-[47px] top-5 w-3.5 h-3.5 rounded-full bg-[var(--text)] border-4 border-[var(--surface)]" />

                <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)] mb-2">
                  <span className="text-[var(--text)] font-semibold">{edu.period}</span>
                  <span>&bull;</span>
                  <span>{edu.location}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-[var(--text)]">
                  {edu.degree}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mt-1">
                  {edu.institution}
                </p>
                <p className="font-sans text-xs sm:text-sm text-[var(--muted)] mt-2 max-w-2xl">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Awards / Certifications & "Currently" Block */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-[76px] border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Certifications */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3 block">
                Validated Credentials
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-[var(--text)] mb-8">
                AWARDS & CERTIFICATIONS
              </h2>

              <div className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {studioData.certifications.map((cert) => (
                  <div key={cert.title} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-mono text-sm uppercase tracking-wider text-[var(--text)] font-semibold">
                        {cert.title}
                      </h4>
                      <p className="font-mono text-xs text-[var(--muted)] mt-0.5">
                        {cert.issuer} &bull; {cert.credentialId}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[var(--accent)] font-semibold shrink-0">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: "Currently" Block */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-6 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CURRENTLY &bull; 2026 FOCUS</span>
              </div>

              <div className="flex flex-col gap-6 text-sm font-sans">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] block mb-1">
                    Learning & Researching
                  </span>
                  <p className="text-[var(--text)] leading-relaxed">
                    {studioData.currently.learning}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] block mb-1">
                    Actively Building
                  </span>
                  <p className="text-[var(--text)] leading-relaxed">
                    {studioData.currently.building}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] block mb-1">
                    Open To
                  </span>
                  <p className="text-[var(--text)] leading-relaxed">
                    {studioData.currently.availableFor}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[var(--text)] text-[var(--bg)] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                <span>Initiate Engagement</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
