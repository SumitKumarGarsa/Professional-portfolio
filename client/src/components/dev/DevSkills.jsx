import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Atom, Cpu, Layers } from "lucide-react";
import { devData } from "@/data/devData";

export default function DevSkills() {
  const { skillGroups } = devData;

  const marqueeTechnologies = [
    "React 18",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "TypeScript 5",
    "Next.js App Router",
    "Redis Pub/Sub",
    "Tailwind CSS v4",
    "Docker Containerization",
    "WebSockets & CRDTs",
    "GraphQL Federation",
    "Jest & Supertest",
    "Vite",
    "Mongoose ORM",
    "Linux Systems",
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 border-b border-border">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-border">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-muted block mb-2">
            02 &bull; TECHNICAL CAPABILITIES
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-text">
            PRODUCTION TOOLKIT
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-muted leading-relaxed font-sans">
          Production-tested technologies across the full JavaScript/TypeScript stack.
          Engineered for type safety, high concurrency, and zero runtime surprises.
        </p>
      </div>

      {/* Infinite Tech Marquee Banner */}
      <div className="relative w-full overflow-hidden mb-16 py-3 border-y border-border bg-surface/50">
        <div className="flex w-max animate-marquee space-x-8">
          {[...marqueeTechnologies, ...marqueeTechnologies].map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-text whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Grouped Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, index) => (
          <div
            key={group.category}
            className="p-8 rounded-3xl bg-surface border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Category 0{index + 1}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-border/50 text-[11px] font-mono font-semibold text-text">
                  Production Ready
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-text mb-2">
                {group.category}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans mb-6">
                {group.description}
              </p>

              {/* Skills List with Progress */}
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold text-text">{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-[#EAE3D5] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-border/80 flex items-center justify-between text-xs font-mono text-muted">
              <span>Verified in Production</span>
              <span className="text-accent font-semibold">&bull; 100% Tested</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
