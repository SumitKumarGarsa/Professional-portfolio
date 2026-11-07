import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Database, Terminal } from "lucide-react";
import { devData } from "@/data/devData";

export default function DevAbout() {
  const { profile, about, stats } = devData;

  return (
    <section id="about" className="py-24 sm:py-32 border-b border-border">
      {/* Section Tagline Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-border">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-muted block mb-2">
            01 &bull; ENGINEERING IDENTITY
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-text">
            ARCHITECTING FROM ZERO
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-muted leading-relaxed font-sans">
          Building resilient, production-grade web systems. Eliminating database bottlenecks,
          unnecessary rerenders, and unoptimized client bundles.
        </p>
      </div>

      {/* Grid: Profile Photo + Narrative Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        {/* Profile Card / Photo */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-border bg-surface shadow-xl p-3">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EAE3D5]">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Status Tag on Photo */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {profile.yearsExperience} Experience
                </span>
                <span className="bg-emerald-600/90 backdrop-blur-md px-2.5 py-1 rounded-full font-semibold">
                  Open to Roles
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative & Highlights */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="space-y-6 text-base sm:text-lg text-text leading-relaxed font-sans mb-8">
            <p className="font-medium text-lg sm:text-xl text-text leading-relaxed">
              {about.story}
            </p>
            <p className="text-muted text-base leading-relaxed">
              Every production architecture begins with database index profiling and ends with smooth
              interaction design. Having led engineering across fast-moving startups and enterprise microservice
              migrations, I bridge the gap between backend scalability and fluid frontends.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 border-t border-border">
            {about.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-text">
                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="font-sans leading-snug">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Stats Ticker */}
      <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-border shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col">
            <span className="font-display text-4xl sm:text-5xl md:text-6xl text-text font-extrabold tracking-tight leading-none mb-2">
              {item.value}
            </span>
            <span className="font-mono text-xs text-muted uppercase tracking-wider">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
