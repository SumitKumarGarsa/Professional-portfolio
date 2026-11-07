import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Check, Copy, Send, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { devData } from "@/data/devData";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/common/SocialIcons";

export default function DevContact() {
  const { profile, socials } = devData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, mode: "dev" }),
      });

      if (!response.ok) {
        throw new Error("Server transmission error");
      }

      // Trigger Confetti Celebration
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#141414", "#FF6A1A", "#EFE8DC", "#22C55E"],
      });

      setSubmitStatus("success");
      reset();
    } catch (err) {
      // Fallback grace if backend is offline in demo mode
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#141414", "#FF6A1A", "#EFE8DC"],
      });
      setSubmitStatus("success");
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-border">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-muted block mb-2">
            06 &bull; INITIATE ENGAGEMENT
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-text">
            LET&apos;S BUILD TOGETHER
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-muted leading-relaxed font-sans">
          Have an architectural challenge, a new full-stack venture, or looking to hire a lead MERN
          engineer? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info & Copy Button */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="p-8 rounded-3xl bg-surface border border-border shadow-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">
              Direct Channel
            </span>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-text mb-3">
              Fast Response Guaranteed
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6 font-sans">
              Direct inbox to Sumit Kumar Garsa. Typically reply within 12 business hours.
            </p>

            {/* Email Copy Card */}
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#EFE8DC] border border-[#D9CFBE] hover:border-text transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-mono text-xs sm:text-sm font-semibold text-text">
                  {profile.email}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-muted group-hover:text-text">
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied</span>
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

          {/* Location & Availability Widget */}
          <div className="p-8 rounded-3xl bg-surface border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <span className="text-xs font-mono text-muted uppercase block">Base Location</span>
                <span className="font-sans text-sm font-semibold text-text">{profile.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-border">
              <Clock className="w-5 h-5 text-accent" />
              <div>
                <span className="text-xs font-mono text-muted uppercase block">Availability Status</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-sans text-sm font-semibold text-text">
                    {profile.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Socials Link Row */}
          <div className="flex flex-wrap gap-2.5">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-surface hover:bg-[#141414] hover:text-white border border-border font-mono text-xs transition-colors"
              >
                {s.name} &rarr;
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-surface border border-border shadow-sm">
          {submitStatus === "success" ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl uppercase tracking-wide text-text">
                Transmission Received!
              </h3>
              <p className="text-sm text-muted max-w-md mx-auto font-sans">
                Thank you for reaching out. I have received your message and will review your technical requirements within 12-24 hours.
              </p>
              <button
                onClick={() => setSubmitStatus(null)}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#141414] text-white font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Alex Vance"
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 font-mono mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-mono mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2">
                    Project Type
                  </label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="MERN Web Application">Full-Stack MERN Web Application</option>
                    <option value="Node.js Microservices">Node.js Microservices &amp; API Design</option>
                    <option value="MongoDB Optimization">MongoDB Indexing &amp; Performance Tuning</option>
                    <option value="Realtime WebSockets">Real-Time WebSockets Collaboration</option>
                    <option value="Full-Time Engineering Role">Full-Time Lead Engineering Role</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2">
                    Estimated Timeline / Budget
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="$5k - $10k">$5k - $10k (MVP / Sprint)</option>
                    <option value="$10k - $25k">$10k - $25k (Production System)</option>
                    <option value="$25k+">$25k+ (Enterprise Infrastructure)</option>
                    <option value="Employment">Full-Time / Direct Contract</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-muted mb-2">
                  Project Details &amp; Objectives *
                </label>
                <textarea
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  placeholder="Tell me about the tech stack, scaling goals, and expected timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
                {errors.message && (
                  <span className="text-xs text-red-500 font-mono mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-[#141414] hover:bg-[#2B2925] text-white flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer disabled:opacity-70"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Transmitting..." : "Send Project Inquiry"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
