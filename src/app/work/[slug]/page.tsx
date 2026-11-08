import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectsData, Project } from "@/data/projects";
import { siteConfig } from "@/data/site";
import Footer from "@/components/layout/Footer";
import { GithubIcon } from "@/components/common/SocialIcons";
import { ProjectHeroMedia, ProjectGallerySection } from "@/components/work/ProjectMedia";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface CaseStudyProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} | ${siteConfig.fullName}`,
      description: project.subtitle,
      images: [{ url: project.thumbnail }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
      <main id="main-content" className="pt-[88px] sm:pt-[98px] lg:pt-[108px] pb-20 sm:pb-32 px-6 sm:px-12 lg:px-[76px]">
        <div className="max-w-7xl mx-auto">
          {/* Back to Work Navigation */}
          <div className="mb-8 sm:mb-12">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Index</span>
            </Link>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-4">
                <span className="text-[var(--accent)] font-bold">{project.number}</span>
                <span>&bull;</span>
                <span>{project.category}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h1 className="font-display text-[clamp(48px,8.5vw,130px)] uppercase tracking-tight text-[var(--text)] leading-[0.92]">
                {project.title}
              </h1>
              <p className="font-sans text-lg sm:text-2xl text-[var(--muted)] mt-4 max-w-3xl leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[var(--text)] text-[var(--bg)] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold hover:bg-[var(--accent)] hover:text-white transition-all shadow-lg"
                >
                  <span>Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-[var(--border)] font-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--text)] hover:border-[var(--text)] transition-colors"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Source</span>
                </a>
              )}
            </div>
          </div>

          {/* Metadata Specs Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-[var(--border)] font-mono text-xs mb-12 sm:mb-16">
            <div>
              <span className="text-[var(--muted)] uppercase tracking-wider block mb-1">Client / Org</span>
              <span className="text-[var(--text)] font-semibold">{project.client}</span>
            </div>
            <div>
              <span className="text-[var(--muted)] uppercase tracking-wider block mb-1">My Role</span>
              <span className="text-[var(--text)] font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-[var(--muted)] uppercase tracking-wider block mb-1">Timeline</span>
              <span className="text-[var(--text)] font-semibold">{project.timeline}</span>
            </div>
            <div>
              <span className="text-[var(--muted)] uppercase tracking-wider block mb-1">Primary Stack</span>
              <span className="text-[var(--accent)] font-semibold">{project.tech.slice(0, 3).join(", ")}</span>
            </div>
          </div>

          {/* Hero Image Container with Zoom & Lightbox */}
          <ProjectHeroMedia
            thumbnail={project.thumbnail}
            title={project.title}
            gallery={project.gallery}
          />

          {/* Results Metrics Banner */}
          <div className="p-8 sm:p-12 rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] mb-16 sm:mb-24 shadow-sm">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)] mb-8 font-semibold">
              <TrendingUp className="w-4 h-4" />
              <span>MEASURABLE BUSINESS & SYSTEM OUTCOMES</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
              {project.metrics.map((metric, idx) => (
                <div key={metric.label} className={idx !== 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}>
                  <span className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[var(--text)] block leading-none mb-2">
                    {metric.value}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 7 Columns: Narrative Sections */}
            <div className="lg:col-span-8 flex flex-col gap-16 sm:gap-20">
              {/* 1. Overview */}
              <section>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
                  <span className="text-[var(--accent)] font-bold">01</span>
                  <span>&bull;</span>
                  <span>SYSTEM OVERVIEW</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[var(--text)] mb-6">
                  THE ARCHITECTURAL MANDATE
                </h2>
                <p className="font-sans text-base sm:text-lg text-[var(--text)]/85 leading-relaxed">
                  {project.overview}
                </p>
              </section>

              {/* 2. Problem Statement */}
              <section>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
                  <span className="text-[var(--accent)] font-bold">02</span>
                  <span>&bull;</span>
                  <span>THE BOTTLENECK</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[var(--text)] mb-6">
                  CORE CHALLENGES & WRITE CONTENTION
                </h2>
                <div className="p-8 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm">
                  <p className="font-sans text-base sm:text-lg text-[var(--muted)] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </section>

              {/* 3. Approach & Architecture Diagram */}
              <section>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
                  <span className="text-[var(--accent)] font-bold">03</span>
                  <span>&bull;</span>
                  <span>ENGINEERING BLUEPRINT</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[var(--text)] mb-6">
                  APPROACH & TOPOLOGY DIAGRAM
                </h2>
                <p className="font-sans text-base sm:text-lg text-[var(--text)]/85 leading-relaxed mb-8">
                  {project.approach}
                </p>

                {/* Architecture Topology Slot */}
                <div className="p-6 sm:p-8 rounded-xl bg-[var(--surface)] border border-[var(--border)] font-mono text-xs text-[var(--muted)] shadow-sm">
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--border)] mb-6 text-xs text-[var(--text)]">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[var(--accent)]" />
                      <span className="uppercase tracking-wider font-semibold">Topology Flow Diagram</span>
                    </div>
                    <span className="text-[10px] text-[var(--muted)]">ACTIVE DISTRIBUTED MESH</span>
                  </div>

                  <div className="p-4 rounded bg-[var(--surface-card)] border border-[var(--border)] text-[var(--text)] leading-loose break-words">
                    <span className="text-[var(--accent)] font-semibold">$ topology:</span> {project.architecture}
                  </div>
                </div>
              </section>

              {/* 4. Challenges & Solutions */}
              <section>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
                  <span className="text-[var(--accent)] font-bold">04</span>
                  <span>&bull;</span>
                  <span>TECHNICAL OBSTACLES</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[var(--text)] mb-6">
                  CHALLENGES OVERCOME
                </h2>

                <div className="flex flex-col gap-6">
                  {project.challengesAndSolutions.map((item, idx) => (
                    <div key={idx} className="p-8 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm">
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-2 block">
                        Challenge #{idx + 1}
                      </span>
                      <p className="font-sans text-base text-[var(--text)] mb-4 font-semibold">
                        {item.challenge}
                      </p>
                      <div className="pt-4 border-t border-[var(--border)]">
                        <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] block mb-1">
                          Engineered Resolution:
                        </span>
                        <p className="font-sans text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. Key Features */}
              <section>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
                  <span className="text-[var(--accent)] font-bold">05</span>
                  <span>&bull;</span>
                  <span>FUNCTIONAL HIGHLIGHTS</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-[var(--text)] mb-6">
                  KEY DELIVERABLE CAPABILITIES
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-5 rounded-lg bg-[var(--surface-card)] border border-[var(--border)] shadow-sm flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] mt-1 shrink-0" />
                      <span className="font-sans text-sm text-[var(--text)]/90 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. Screenshot Gallery with Zoom & Lightbox */}
              <ProjectGallerySection
                gallery={project.gallery}
                title={project.title}
                thumbnail={project.thumbnail}
              />
            </div>

            {/* Right 4 Columns: Sticky Sidebar Specification */}
            <aside className="lg:col-span-4 lg:sticky lg:top-[140px] flex flex-col gap-8">
              {/* Tech Stack Matrix */}
              <div className="p-8 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-4 font-semibold">
                  Complete Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables List */}
              <div className="p-8 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-4 font-semibold">
                  Engineering Deliverables
                </h3>
                <ul className="flex flex-col gap-3 font-sans text-xs sm:text-sm text-[var(--muted)]">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[var(--text)]/85">
                      <span className="text-[var(--accent)] font-mono font-bold">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inquiry Prompt */}
              <div className="p-8 rounded-xl bg-[var(--surface-card)] border border-[var(--border)] shadow-md">
                <h4 className="font-display text-2xl uppercase tracking-tight text-[var(--text)] mb-2">
                  NEED A SIMILAR ARCHITECTURE?
                </h4>
                <p className="font-sans text-xs text-[var(--muted)] leading-relaxed mb-6">
                  I architect deterministic distributed systems tailored to your throughput requirements.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[var(--text)] text-[var(--bg)] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[var(--accent)] hover:text-white transition-colors shadow-sm"
                >
                  <span>Inquire for Q2/Q3</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>

          {/* Next Project Navigator */}
          <div className="mt-24 sm:mt-36 pt-12 sm:pt-16 border-t border-[var(--border)]">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-4">
              Next Case Study ({nextProject.number})
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div>
                <h3 className="font-display text-[clamp(40px,7vw,110px)] uppercase tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors leading-none">
                  {nextProject.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[var(--muted)] mt-2">
                  {nextProject.subtitle}
                </p>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text)] group-hover:bg-[var(--text)] group-hover:text-[var(--bg)] group-hover:border-[var(--text)] transition-all shrink-0">
                <ArrowUpRight className="w-8 h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
