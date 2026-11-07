import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, GraduationCap } from "lucide-react";
import { devData } from "@/data/devData";

export default function DevExperience() {
  const { experience, education } = devData;

  return (
    <section id="experience" className="py-24 sm:py-32 border-b border-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-border">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-muted block mb-2">
            04 &bull; CAREER TRAJECTORY
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-text">
            WORK &amp; EDUCATION
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-muted leading-relaxed font-sans">
          Proven history leading distributed engineering teams, architecting microservice platforms,
          and delivering production web products on time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Work Experience Timeline */}
        <div className="lg:col-span-8 space-y-8">
          <h3 className="font-mono text-sm uppercase tracking-wider text-muted mb-6 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-accent" />
            <span>Professional Roles &amp; Engagements</span>
          </h3>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-border space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Milestone Node */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent border-4 border-bg ring-1 ring-border" />

                <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
                      {item.period}
                    </span>
                    <span className="font-mono text-xs text-muted flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>

                  <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-text mb-1">
                    {item.role}
                  </h4>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4 font-semibold">
                    {item.company}
                  </div>

                  <p className="text-sm text-text/80 leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/80">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md bg-[#EAE3D5] text-[11px] font-mono text-text border border-[#D9CFBE]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Academic Foundation */}
        <div className="lg:col-span-4 space-y-8">
          <h3 className="font-mono text-sm uppercase tracking-wider text-muted mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span>Academic Background</span>
          </h3>

          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold block mb-2">
                    {edu.period}
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl uppercase tracking-wide text-text mb-1">
                    {edu.degree}
                  </h4>
                  <div className="font-mono text-xs text-muted font-semibold uppercase mb-4">
                    {edu.institution}
                  </div>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick Mentorship & Leadership Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#EAE3D5] border border-[#D9CFBE] text-text">
              <span className="font-mono text-xs uppercase tracking-wider text-muted font-bold block mb-2">
                Engineering Leadership
              </span>
              <h4 className="font-display text-xl uppercase tracking-wide text-text mb-2">
                Mentorship &amp; Code Quality
              </h4>
              <p className="text-xs leading-relaxed font-sans text-muted">
                Championed automated testing (Jest, Cypress), strict ESLint/Prettier standards, and weekly architectural reviews to maintain zero technical debt across growing engineering squads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
