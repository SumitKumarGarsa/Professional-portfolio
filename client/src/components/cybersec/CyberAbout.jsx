import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck, Crosshair, Lock } from "lucide-react";
import { cybersecData } from "@/data/cybersecData";

export default function CyberAbout() {
  const { about } = cybersecData;

  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#1E3327]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1E3327]">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#00FF9C] block mb-2">
            01 &bull; DEFENSE DOCTRINE
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#E2FBEF]">
            ADVERSARIAL REALITY
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#6B8B77] leading-relaxed font-sans">
          Eliminating implicit trust. Evaluating microservices, network enclaves, and web applications
          through the active playbook of sophisticated threat actors.
        </p>
      </div>

      {/* Main Philosophy Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0E1410] border border-[#1E3327] shadow-xl mb-12">
        <div className="max-w-4xl space-y-6 text-base sm:text-lg text-[#D0EBDD] leading-relaxed font-sans mb-10">
          <p className="font-semibold text-lg sm:text-xl text-[#00FF9C]">
            &ldquo;Perimeter security is dead. The only resilient architecture is one engineered with the assumption of breach.&rdquo;
          </p>
          <p className="text-[#A2C2AF] text-base leading-relaxed">
            {about.philosophy}
          </p>
        </div>

        {/* Offensive vs Defensive Focus Split Bar */}
        <div className="pt-8 border-t border-[#1E3327]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono mb-3">
            <span className="text-[#FF4A6B] font-bold flex items-center gap-1.5 uppercase">
              <Crosshair className="w-4 h-4" />
              Offensive Security / Pen-Testing: {about.focusSplit.offensive}%
            </span>
            <span className="text-[#00FF9C] font-bold flex items-center gap-1.5 uppercase">
              <ShieldCheck className="w-4 h-4" />
              Defensive Architecture &amp; DevSecOps: {about.focusSplit.defensive}%
            </span>
          </div>

          <div className="h-4 w-full rounded-full bg-[#162119] overflow-hidden flex border border-[#1E3327]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${about.focusSplit.offensive}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="h-full bg-gradient-to-r from-red-600 to-[#FF4A6B]"
              title={`Offensive: ${about.focusSplit.offensive}%`}
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${about.focusSplit.defensive}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-emerald-600 to-[#00FF9C]"
              title={`Defensive: ${about.focusSplit.defensive}%`}
            />
          </div>
        </div>
      </div>

      {/* 4 Core Specializations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {about.specializations.map((spec, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-[#0B100C] border border-[#1E3327] flex items-start gap-3 hover:border-[#00FF9C]/40 transition-colors"
          >
            <ShieldAlert className="w-5 h-5 text-[#00FF9C] mt-0.5 flex-shrink-0" />
            <span className="font-mono text-xs sm:text-sm text-[#E2FBEF] leading-snug">
              {spec}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
