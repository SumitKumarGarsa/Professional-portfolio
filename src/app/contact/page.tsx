"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { siteConfig } from "@/data/site";
import Footer from "@/components/layout/Footer";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/common/SocialIcons";
import {
  Mail,
  MapPin,
  Calendar,
  ArrowUpRight,
  Send,
  Loader2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select an engagement type"),
  budget: z.string().min(1, "Please select an estimated budget"),
  message: z.string().min(10, "Message must be at least 10 characters").max(4000),
  honeypot: z.string().max(0, "Bot detected"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "Full-Stack Web App",
      budget: "$5,000 — $15,000",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || "Failed to deliver transmission");
      }

      setIsSuccess(true);
      reset();

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#EFEAE2", "#FF6A1A", "#6F6A62"],
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred while dispatching transmission. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
      <main id="main-content" className="pt-[88px] sm:pt-[98px] lg:pt-[108px] pb-20 sm:pb-32 px-6 sm:px-12 lg:px-[76px]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] mb-3">
              <span className="text-[var(--accent)] font-semibold">05</span>
              <span>&bull;</span>
              <span>DIRECT INQUIRY</span>
            </div>
            <h1 className="font-display text-[clamp(48px,8.5vw,130px)] uppercase tracking-tight text-[var(--text)] leading-[0.92]">
              LET&apos;S TALK
            </h1>
            <p className="font-sans text-base sm:text-xl text-[var(--muted)] mt-4 max-w-2xl leading-relaxed">
              Have a product to build, an architecture to review, or a technical contract to scope? Fill out the brief below or establish direct contact.
            </p>
          </div>

          {/* Form & Side Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[var(--surface-card)] border border-[var(--border)] shadow-xl">
              {isSuccess ? (
                <div className="py-12 sm:py-16 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)] flex items-center justify-center text-[var(--accent)] mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-4xl uppercase tracking-tight text-[var(--text)] mb-3">
                    TRANSMISSION DELIVERED
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[var(--muted)] max-w-md leading-relaxed mb-8">
                    Thank you. Your project brief has been cryptographically logged. I typically review and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-3 rounded-full border border-[var(--border)] font-mono text-xs uppercase tracking-wider text-[var(--text)] hover:border-[var(--text)] transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                  {/* Honeypot field (hidden from humans) */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
                  </div>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-2 font-medium">
                      Your Name / Organization <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Elena Rostova or HyperScale Corp"
                      {...register("name")}
                      className={`w-full px-5 py-3.5 rounded-xl bg-[var(--bg)] border font-sans text-sm text-[var(--text)] placeholder-[var(--muted)]/50 outline-none transition-colors ${
                        errors.name ? "border-red-500" : "border-[var(--border)] focus:border-[var(--accent)]"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 font-mono text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-2 font-medium">
                      Email Address <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      {...register("email")}
                      className={`w-full px-5 py-3.5 rounded-xl bg-[var(--bg)] border font-sans text-sm text-[var(--text)] placeholder-[var(--muted)]/50 outline-none transition-colors ${
                        errors.email ? "border-red-500" : "border-[var(--border)] focus:border-[var(--accent)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 font-mono text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Project Type & Budget Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-2 font-medium">
                        Engagement Scope
                      </label>
                      <select
                        id="projectType"
                        {...register("projectType")}
                        className="w-full px-5 py-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] font-sans text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors"
                      >
                        <option value="Full-Stack Web App">Full-Stack Web App</option>
                        <option value="REST & GraphQL APIs">REST & GraphQL APIs</option>
                        <option value="SaaS & Admin Dashboard">SaaS & Admin Dashboard</option>
                        <option value="Performance & Architecture Audit">Performance & Architecture Audit</option>
                        <option value="Dedicated Monthly Retainer">Dedicated Monthly Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-2 font-medium">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        {...register("budget")}
                        className="w-full px-5 py-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] font-sans text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] transition-colors"
                      >
                        <option value="< $5,000">&lt; $5,000</option>
                        <option value="$5,000 — $15,000">$5,000 — $15,000</option>
                        <option value="$15,000 — $35,000">$15,000 — $35,000</option>
                        <option value="$35,000+">$35,000+</option>
                        <option value="Flexible / Hourly">Flexible / Hourly</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)] mb-2 font-medium">
                      Project Details & Deliverables <span className="text-[var(--accent)]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Describe your system requirements, timeline, target throughput, and any technical constraints..."
                      {...register("message")}
                      className={`w-full px-5 py-3.5 rounded-xl bg-[var(--bg)] border font-sans text-sm text-[var(--text)] placeholder-[var(--muted)]/50 outline-none transition-colors resize-y ${
                        errors.message ? "border-red-500" : "border-[var(--border)] focus:border-[var(--accent)]"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 font-mono text-xs text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-800 text-xs font-mono text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-3 py-4 sm:py-5 rounded-full bg-[var(--text)] text-[var(--bg)] font-mono text-xs sm:text-sm uppercase tracking-[0.16em] font-bold hover:bg-[var(--accent)] hover:text-white transition-all shadow-xl disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Transmission...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Transmission</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Side Info Column (5 cols) */}
            <aside className="lg:col-span-5 flex flex-col gap-8">
              {/* Transmission Delivery Card */}
              <div className="p-8 rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-2 block font-semibold">
                  Secure Delivery
                </span>
                <h3 className="font-display text-xl uppercase tracking-tight text-[var(--text)] mb-3">
                  Direct Inbox Routing
                </h3>
                <p className="font-sans text-xs text-[var(--muted)] mb-5 leading-relaxed">
                  Inquiries submitted through this form are dispatched securely to my primary inbox. I review every submission personally and respond promptly.
                </p>
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)] font-mono text-xs text-[var(--text)]">
                  <Sparkles className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>Powered by Resend Delivery</span>
                </div>
              </div>

              {/* Location & Status Card */}
              <div className="p-8 rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm flex flex-col gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] font-semibold">
                  Station Telemetry
                </span>

                <div className="flex items-center gap-3 font-mono text-xs text-[var(--text)]">
                  <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>{siteConfig.location}</span>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs text-[var(--text)]">
                  <Calendar className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>Response SLA: &lt; 24 Hours</span>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs text-[var(--text)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
                  <span>{siteConfig.availabilityStatus}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-8 rounded-2xl bg-[var(--surface-card)] border border-[var(--border)] shadow-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-4 block font-semibold">
                  Developer Networks
                </span>
                <div className="flex flex-col gap-3 font-mono text-xs text-[var(--muted)]">
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[var(--surface)] hover:text-[var(--text)] hover:border-[var(--border)] border border-transparent transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon size={16} />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[var(--surface)] hover:text-[var(--text)] hover:border-[var(--border)] border border-transparent transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon size={16} />
                      <span>LinkedIn</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={siteConfig.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[var(--surface)] hover:text-[var(--text)] hover:border-[var(--border)] border border-transparent transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <TwitterXIcon size={14} />
                      <span>Twitter / X</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
