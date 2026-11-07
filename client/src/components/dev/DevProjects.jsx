import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X, Check, Layers, Sparkles } from "lucide-react";
import { devData } from "@/data/devData";
import { GithubIcon } from "@/components/common/SocialIcons";

export default function DevProjects() {
  const { projects } = devData;
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  const filters = ["All", "Full-Stack", "Frontend", "API"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.filter === activeFilter);

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-border">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-muted block mb-2">
            03 &bull; PRODUCTION DEPLOYMENTS
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-text">
            FEATURED MERN BUILDS
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeFilter === filter
                  ? "bg-[#141414] text-white shadow-sm"
                  : "bg-surface hover:bg-[#EAE3D5] text-muted border border-border"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group rounded-3xl overflow-hidden border border-border bg-surface shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE3D5]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badges on Thumbnail */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/80 backdrop-blur-md text-white border border-white/20">
                    {project.filter}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span className="bg-emerald-600/90 px-2.5 py-0.5 rounded-full font-semibold">
                    {project.metrics.split("•")[0]}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-text group-hover:text-accent transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-text/80 leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#EAE3D5] text-[11px] font-mono text-text border border-[#D9CFBE]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <button
                    onClick={() => setSelectedModalProject(project)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-text hover:text-accent cursor-pointer group-hover:underline"
                  >
                    <span>Read Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-border/50 text-muted hover:text-text transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-border/50 text-muted hover:text-text transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Case Study Detail Modal */}
      <AnimatePresence>
        {selectedModalProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-bg text-text w-full max-w-3xl rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Top Header */}
              <div className="p-6 sm:p-8 border-b border-border flex items-start justify-between bg-surface">
                <div>
                  <span className="font-mono text-xs text-muted uppercase tracking-wider block mb-1">
                    PRODUCTION CASE STUDY &bull; {selectedModalProject.filter}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-text">
                    {selectedModalProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="w-10 h-10 rounded-full bg-[#141414] text-white flex items-center justify-center hover:bg-[#333] transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-2">
                    System Architecture &amp; Challenge
                  </h4>
                  <p className="text-base text-text leading-relaxed font-sans">
                    {selectedModalProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-2">
                    Measured Production Metrics
                  </h4>
                  <div className="p-4 rounded-xl bg-surface border border-border font-mono text-sm text-text font-bold">
                    {selectedModalProject.metrics}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-2">
                    Key Technical Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedModalProject.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-text">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted mb-2">
                    Technology &amp; Library Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedModalProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-surface border border-border font-mono text-xs text-text">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-border bg-surface flex items-center justify-between">
                <a
                  href={selectedModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-accent hover:underline"
                >
                  <span>Launch Live Deployment</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="px-5 py-2.5 rounded-full bg-[#141414] text-white font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
                >
                  Close Case
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
