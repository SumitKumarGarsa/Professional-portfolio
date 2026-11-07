"use client";

import React, { useState } from "react";
import { ChevronDown, Check, ArrowRight } from "lucide-react";
import { usePortfolioMode } from "@/context/PortfolioModeContext";
import { MERN_PORTFOLIO_DATA, CYBER_PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Services() {
  const { mode } = usePortfolioMode();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const data = mode === "cyber" ? CYBER_PORTFOLIO_DATA : MERN_PORTFOLIO_DATA;

  const toggleService = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="services"
      className={`py-24 sm:py-32 px-6 sm:px-12 md:px-16 border-b transition-colors duration-500 ${
        mode === "cyber" ? "border-[#1E293B] bg-[#0A0D12]" : "border-[#E3DDD3] bg-[#F4EFEA]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b ${
            mode === "cyber" ? "border-[#1E293B]" : "border-[#DCD4C7]"
          }`}
        >
          <div>
            <span
              className={`font-mono text-xs sm:text-sm uppercase tracking-widest block mb-2 ${
                mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
              }`}
            >
              03 &bull; {mode === "cyber" ? "SECURITY AUDIT & REMEDIATION OFFERINGS" : "MERN CAPABILITIES & SERVICES"}
            </span>
            <h2
              className={`font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight ${
                mode === "cyber" ? "text-[#F1F5F9]" : "text-[#141311]"
              }`}
            >
              {mode === "cyber" ? "TACTICAL DEFENSE SERVICES" : "SPECIALIZED OFFERINGS"}
            </h2>
          </div>

          <p
            className={`max-w-md text-sm sm:text-base leading-relaxed ${
              mode === "cyber" ? "text-[#94A3B8]" : "text-[#615C52]"
            }`}
          >
            {mode === "cyber"
              ? "Comprehensive penetration testing, DevSecOps pipeline automation, and zero-trust cryptographic implementations."
              : "End-to-end MERN application development, WebSocket real-time clusters, and database performance tuning."}
          </p>
        </div>

        {/* Services Accordion */}
        <div
          className={`divide-y border-y ${
            mode === "cyber" ? "divide-[#1E293B] border-[#1E293B]" : "divide-[#DCD4C7] border-[#DCD4C7]"
          }`}
        >
          {data.services.map((service, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={service.id} className="group transition-colors duration-200">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleService(idx)}
                  aria-expanded={isOpen}
                  className={`w-full py-8 sm:py-10 flex items-center justify-between text-left focus:outline-none cursor-pointer ${
                    mode === "cyber" ? "hover:bg-white/[0.02]" : "hover:bg-black/[0.02]"
                  }`}
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span
                      className={`font-mono text-sm sm:text-base ${
                        mode === "cyber" ? "text-[#00F59B]" : "text-[#8C867A]"
                      }`}
                    >
                      {service.num}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300 ${
                          mode === "cyber" ? "text-[#F1F5F9]" : "text-[#141311]"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`font-sans text-xs sm:text-sm mt-1 font-normal ${
                          mode === "cyber" ? "text-[#94A3B8]" : "text-[#736D61]"
                        }`}
                      >
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                        mode === "cyber"
                          ? isOpen
                            ? "rotate-180 bg-[#00F59B] text-black border-[#00F59B]"
                            : "bg-[#111822] text-[#00F59B] border-[#1E293B]"
                          : isOpen
                          ? "rotate-180 bg-[#141311] text-[#F5F2EB] border-[#141311]"
                          : "bg-[#EAE3D7] text-[#141311] border-[#D5CDC0]"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="pb-10 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
                    <div className="lg:col-span-6 lg:pl-16">
                      <p
                        className={`text-base leading-relaxed mb-6 ${
                          mode === "cyber" ? "text-[#94A3B8]" : "text-[#4F4A42]"
                        }`}
                      >
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-full font-mono text-xs border ${
                              mode === "cyber"
                                ? "bg-[#141E2C] border-[#223044] text-[#00F59B]"
                                : "bg-[#E4DDD0] border-[#D5CDC0] text-[#3E3A33]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`lg:col-span-6 p-6 sm:p-8 rounded-2xl border ${
                        mode === "cyber"
                          ? "bg-[#0E1520] border-[#1E293B]"
                          : "bg-[#EFEAE2] border-[#DCD4C7]"
                      }`}
                    >
                      <h4
                        className={`font-mono text-xs uppercase tracking-wider mb-4 ${
                          mode === "cyber" ? "text-[#00F59B]" : "text-[#736D61]"
                        }`}
                      >
                        Core Deliverables Included:
                      </h4>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm">
                            <Check
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                mode === "cyber" ? "text-[#00F59B]" : "text-emerald-700"
                              }`}
                            />
                            <span className={mode === "cyber" ? "text-[#E2E8F0]" : "text-[#423E37]"}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`mt-6 pt-4 border-t ${
                          mode === "cyber" ? "border-[#1E293B]" : "border-[#DCD4C7]"
                        }`}
                      >
                        <a
                          href="#contact"
                          className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold hover:underline ${
                            mode === "cyber" ? "text-[#00F59B]" : "text-[#141311]"
                          }`}
                        >
                          <span>{mode === "cyber" ? "Schedule Security Scope Call" : "Request Proposal for this Project"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
