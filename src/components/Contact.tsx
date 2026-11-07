"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, Send, MapPin, Clock, ShieldAlert, Code2 } from "lucide-react";
import confetti from "canvas-confetti";
import { usePortfolioMode } from "@/context/PortfolioModeContext";
import { MERN_PORTFOLIO_DATA, CYBER_PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const { mode } = usePortfolioMode();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const data = mode === "cyber" ? CYBER_PORTFOLIO_DATA : MERN_PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: mode === "cyber" ? "Application Penetration Testing" : "Enterprise MERN Web Application",
    budget: "$10k - $25k",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.brand.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: mode === "cyber" ? ["#00F59B", "#38BDF8", "#E2E8F0", "#10151C"] : ["#141311", "#E85D36", "#22C55E", "#F5F2EB"],
    });

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
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
              05 &bull; {mode === "cyber" ? "SECURITY AUDIT ENGAGEMENT & SCOPING" : "MERN INITIATION & COLLABORATION"}
            </span>
            <h2
              className={`font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight ${
                mode === "cyber" ? "text-[#F1F5F9]" : "text-[#141311]"
              }`}
            >
              {mode === "cyber" ? "SECURE YOUR SYSTEMS" : "LET&apos;S BUILD TOGETHER"}
            </h2>
          </div>

          <p
            className={`max-w-md text-sm sm:text-base leading-relaxed ${
              mode === "cyber" ? "text-[#94A3B8]" : "text-[#615C52]"
            }`}
          >
            {mode === "cyber"
              ? "Need a comprehensive penetration test, DevSecOps pipeline audit, or adversarial threat model? Transmit an encrypted inquiry."
              : "Looking for a seasoned MERN architect to lead development, scale MongoDB clusters, or build high-throughput Node.js microservices?"}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct info & quick copy */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div
              className={`p-8 rounded-3xl border transition-all ${
                mode === "cyber"
                  ? "bg-[#0E1520] border-[#1E293B]"
                  : "bg-[#EAE3D7] border-[#DCD4C7]"
              }`}
            >
              <span
                className={`text-xs font-mono uppercase tracking-widest block mb-2 ${
                  mode === "cyber" ? "text-[#00F59B]" : "text-[#787265]"
                }`}
              >
                Direct Communication
              </span>
              <h3
                className={`font-display text-2xl sm:text-3xl uppercase tracking-wide mb-4 ${
                  mode === "cyber" ? "text-[#F1F5F9]" : "text-[#141311]"
                }`}
              >
                {mode === "cyber" ? "Encrypted Channel" : "Fastest Response Channel"}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  mode === "cyber" ? "text-[#94A3B8]" : "text-[#615C52]"
                }`}
              >
                Direct line to the principal engineer. Strict NDA and confidentiality guaranteed.
              </p>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                  mode === "cyber"
                    ? "bg-[#141E2C] border-[#223044] hover:border-[#00F59B]"
                    : "bg-[#F4EFEA] border-[#D5CDC0] hover:border-[#141311]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Mail
                    className={`w-5 h-5 ${mode === "cyber" ? "text-[#00F59B]" : "text-[#141311]"}`}
                  />
                  <span
                    className={`font-mono text-sm font-semibold ${
                      mode === "cyber" ? "text-[#E2E8F0]" : "text-[#141311]"
                    }`}
                  >
                    {data.brand.email}
                  </span>
                </div>
                <div
                  className={`flex items-center gap-1.5 text-xs font-mono ${
                    mode === "cyber" ? "text-[#00F59B]" : "text-[#787265]"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="font-semibold text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Timezone & Status Widget */}
            <div
              className={`p-8 rounded-3xl border space-y-4 ${
                mode === "cyber"
                  ? "bg-[#0E1520] border-[#1E293B]"
                  : "bg-[#EAE3D7] border-[#DCD4C7]"
              }`}
            >
              <div className="flex items-center gap-3">
                <MapPin className={`w-5 h-5 ${mode === "cyber" ? "text-[#00F59B]" : "text-[#141311]"}`} />
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase block">Base Location</span>
                  <span className="font-sans text-sm font-semibold">{data.brand.location}</span>
                </div>
              </div>

              <div
                className={`flex items-center gap-3 pt-3 border-t ${
                  mode === "cyber" ? "border-[#1E293B]" : "border-[#D5CDC0]"
                }`}
              >
                <Clock className={`w-5 h-5 ${mode === "cyber" ? "text-[#00F59B]" : "text-[#141311]"}`} />
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase block">Availability Status</span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        mode === "cyber" ? "bg-[#00F59B] animate-ping" : "bg-emerald-600 animate-pulse"
                      }`}
                    />
                    <span className="font-sans text-sm font-semibold">{data.brand.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div
            className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border ${
              mode === "cyber"
                ? "bg-[#0D131C] border-[#1E293B]"
                : "bg-[#EFE9DF] border-[#DCD4C7]"
            }`}
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div
                  className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${
                    mode === "cyber"
                      ? "bg-[#00F59B]/20 text-[#00F59B]"
                      : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-3xl uppercase tracking-wide">
                  Engagement Transmitted!
                </h3>
                <p className="text-sm max-w-md mx-auto text-zinc-400">
                  Thank you, {formData.name}. Your inquiry has been received. You will receive an initial technical response within 12 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className={`mt-4 px-6 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer ${
                    mode === "cyber"
                      ? "bg-[#00F59B] text-black hover:bg-[#00DF81]"
                      : "bg-[#141311] text-[#F5F2EB] hover:bg-[#33302B]"
                  }`}
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none ${
                        mode === "cyber"
                          ? "bg-[#131B27] border-[#223044] text-[#E2E8F0] focus:ring-2 focus:ring-[#00F59B]"
                          : "bg-[#F4EFEA] border-[#D5CDC0] text-[#141311] focus:ring-2 focus:ring-[#141311]"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none ${
                        mode === "cyber"
                          ? "bg-[#131B27] border-[#223044] text-[#E2E8F0] focus:ring-2 focus:ring-[#00F59B]"
                          : "bg-[#F4EFEA] border-[#D5CDC0] text-[#141311] focus:ring-2 focus:ring-[#141311]"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                      Target Engagement Area
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none ${
                        mode === "cyber"
                          ? "bg-[#131B27] border-[#223044] text-[#E2E8F0] focus:ring-2 focus:ring-[#00F59B]"
                          : "bg-[#F4EFEA] border-[#D5CDC0] text-[#141311] focus:ring-2 focus:ring-[#141311]"
                      }`}
                    >
                      {mode === "cyber" ? (
                        <>
                          <option>Application Penetration Testing</option>
                          <option>DevSecOps Pipeline Hardening</option>
                          <option>Zero-Trust &amp; mTLS Architecture</option>
                          <option>Secure Code &amp; Vulnerability Audit</option>
                        </>
                      ) : (
                        <>
                          <option>Enterprise MERN Web Application</option>
                          <option>Real-Time WebSocket Architecture</option>
                          <option>MongoDB Performance &amp; Sharding</option>
                          <option>Microservices API Federation</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                      Estimated Project Scope
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none ${
                        mode === "cyber"
                          ? "bg-[#131B27] border-[#223044] text-[#E2E8F0] focus:ring-2 focus:ring-[#00F59B]"
                          : "bg-[#F4EFEA] border-[#D5CDC0] text-[#141311] focus:ring-2 focus:ring-[#141311]"
                      }`}
                    >
                      <option>$5k - $10k (Audit / Sprint)</option>
                      <option>$10k - $25k (Full Application Scope)</option>
                      <option>$25k+ (Enterprise Infrastructure)</option>
                      <option>Fractional Lead / Retainer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
                    Scope Details &amp; Objectives
                  </label>
                  <textarea
                    rows={4}
                    placeholder={
                      mode === "cyber"
                        ? "Specify target domains/APIs, testing constraints, and compliance objectives..."
                        : "Describe the user volume, database requirements, timeline, and vision..."
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none resize-none ${
                      mode === "cyber"
                        ? "bg-[#131B27] border-[#223044] text-[#E2E8F0] focus:ring-2 focus:ring-[#00F59B]"
                        : "bg-[#F4EFEA] border-[#D5CDC0] text-[#141311] focus:ring-2 focus:ring-[#141311]"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full group flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-md ${
                    mode === "cyber"
                      ? "bg-[#00F59B] text-black hover:bg-[#00DF81] shadow-[0_0_20px_rgba(0,245,155,0.3)]"
                      : "bg-[#141311] hover:bg-[#2B2925] text-[#F5F2EB]"
                  }`}
                >
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span>
                    {mode === "cyber" ? "Transmit Security Scoping Brief" : "Transmit Project Inquiry"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
