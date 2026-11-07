import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin } from "lucide-react";
import { cybersecData } from "@/data/cybersecData";

export default function CyberExperience() {
  const { experience } = cybersecData;

  return (
    <section className="py-24 sm:py-32 border-b border-[#1E3327]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1E3327]">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#00FF9C] block mb-2">
            08 &bull; DEFENSIVE TRACK RECORD
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#E2FBEF]">
            SECURITY ENGAGEMENTS
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#6B8B77] leading-relaxed font-sans">
          Timeline of professional red-teaming simulations, DevSecOps pipeline implementations,
          and security operations engagements.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#1E3327] space-y-12">
          {experience.map((item, idx) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Glowing Green Milestone Node */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#00FF9C] border-4 border-[#0A0D0B] shadow-[0_0_10px_rgba(0,255,156,0.8)]" />

              <div className="p-6 sm:p-8 rounded-3xl bg-[#0E1410] border border-[#1E3327] shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#00FF9C] font-bold">
                    {item.period}
                  </span>
                  <span className="font-mono text-xs text-[#6B8B77] flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>

                <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-[#E2FBEF] mb-1">
                  {item.role}
                </h4>
                <div className="font-mono text-xs uppercase tracking-wider text-[#00FF9C] mb-4 font-semibold">
                  {item.company}
                </div>

                <p className="text-sm text-[#A2C2AF] leading-relaxed font-sans mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1E3327]">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-[#141F17] text-[11px] font-mono text-[#00FF9C] border border-[#1E3327]"
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
    </section>
  );
}
