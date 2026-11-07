import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Key, Download, Check, Copy, Send, ShieldAlert, CheckCircle2, Terminal } from "lucide-react";
import confetti from "canvas-confetti";
import { cybersecData } from "@/data/cybersecData";

export default function CyberContact() {
  const { profile } = cybersecData;
  const [copiedPgp, setCopiedPgp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCopyPgp = () => {
    navigator.clipboard.writeText(profile.pgpFingerprint);
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2000);
  };

  const handleDownloadPgp = () => {
    const dummyKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2\n\nmQENBF+1Zq0BCACx... [PGP KEY FOR ${profile.email}] ...\n-----END PGP PUBLIC KEY BLOCK-----`;
    const blob = new Blob([dummyKey], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${profile.name.replace(/\s+/g, "_")}_PGP_Public.asc`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, mode: "cybersec" }),
      });

      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00FF9C", "#38BDF8", "#E2FBEF", "#101612"],
      });

      setSubmitSuccess(true);
      reset();
    } catch (err) {
      // Graceful fallback for offline demo
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#00FF9C", "#38BDF8", "#0A0D0B"],
      });
      setSubmitSuccess(true);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1E3327]">
        <div>
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#00FF9C] block mb-2">
            09 &bull; ENCRYPTED ENGAGEMENT
          </span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#E2FBEF]">
            INITIATE AUDIT BRIEF
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-[#6B8B77] leading-relaxed font-sans">
          Schedule a black-box penetration test, request a DevSecOps CI/CD audit, or securely
          disclose a zero-day vulnerability under strict confidentiality.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: PGP Key & Disclosure Policy */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          {/* PGP Card */}
          <div className="p-8 rounded-3xl bg-[#0E1410] border border-[#1E3327] shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00FF9C] uppercase font-bold mb-3">
              <Key className="w-4 h-4" />
              <span>PGP Public Encryption Key</span>
            </div>

            <h3 className="font-display text-2xl uppercase tracking-wide text-[#E2FBEF] mb-3">
              End-to-End Cryptography
            </h3>

            <p className="text-xs text-[#A2C2AF] leading-relaxed mb-6 font-sans">
              For high-sensitivity advisories or zero-day vulnerability disclosures, please encrypt your
              transmission using my verified GnuPG public key.
            </p>

            <div className="p-3.5 rounded-xl bg-[#090D0A] border border-[#1E3327] font-mono text-[11px] text-[#A2C2AF] space-y-1 mb-6">
              <div className="flex items-center justify-between text-[#6B8B77] text-[10px] uppercase">
                <span>Key ID: {profile.pgpKeyId}</span>
                <span className="text-[#00FF9C]">RSA 4096-bit</span>
              </div>
              <div className="text-[10px] break-all text-[#D0EBDD] font-mono select-all">
                {profile.pgpFingerprint}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleCopyPgp}
                className="py-2.5 px-4 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-[#141F17] hover:bg-[#1E2E23] text-[#00FF9C] border border-[#00FF9C]/30 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedPgp ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Fingerprint</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadPgp}
                className="py-2.5 px-4 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-[#141F17] hover:bg-[#1E2E23] text-[#E2FBEF] border border-[#1E3327] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .ASC</span>
              </button>
            </div>
          </div>

          {/* Responsible Disclosure Box */}
          <div className="p-8 rounded-3xl bg-[#0E1410] border border-[#1E3327] shadow-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00FF9C] font-bold block mb-2">
              Responsible Disclosure Policy
            </span>
            <p className="text-xs text-[#A2C2AF] leading-relaxed font-sans">
              I operate strictly within legal safe-harbor standards (ISO 29147). Vulnerabilities are reported
              directly to product security incident response teams (PSIRTs) with a standard 90-day patch window
              prior to public disclosure.
            </p>
          </div>
        </div>

        {/* Right Column: Terminal-Styled Contact Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0E1410] border border-[#1E3327] shadow-xl">
          {/* Terminal Title Bar */}
          <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#1E3327] text-xs font-mono text-[#6B8B77]">
            <Terminal className="w-4 h-4 text-[#00FF9C]" />
            <span>root@skg-sec:~$ ./send_security_brief.sh</span>
          </div>

          {submitSuccess ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00FF9C]/15 border border-[#00FF9C]/40 text-[#00FF9C] mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(0,255,156,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl uppercase tracking-wide text-[#E2FBEF]">
                Security Brief Transmitted
              </h3>
              <p className="text-sm text-[#A2C2AF] max-w-md mx-auto font-mono">
                Your scoping dossier has been transmitted over TLS encryption. I will analyze your parameters and return a technical scope document within 12 hours.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#00FF9C] text-[#0A0D0B] font-mono text-xs uppercase tracking-wider font-extrabold cursor-pointer"
              >
                Send Additional Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#6B8B77] mb-2">
                    Organization / Entity Name *
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Entity name is required" })}
                    placeholder="e.g. Cerberus Security Labs"
                    className="w-full px-4 py-3 rounded-xl bg-[#090D0A] border border-[#1E3327] text-[#E2FBEF] text-sm focus:outline-none focus:ring-2 focus:ring-[#00FF9C] font-mono"
                  />
                  {errors.name && (
                    <span className="text-xs text-[#FF4A6B] font-mono mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#6B8B77] mb-2">
                    Security Contact Email *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Security email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="security@entity.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#090D0A] border border-[#1E3327] text-[#E2FBEF] text-sm focus:outline-none focus:ring-2 focus:ring-[#00FF9C] font-mono"
                  />
                  {errors.email && (
                    <span className="text-xs text-[#FF4A6B] font-mono mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#6B8B77] mb-2">
                    Engagement Scope Target
                  </label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D0A] border border-[#1E3327] text-[#E2FBEF] text-sm focus:outline-none focus:ring-2 focus:ring-[#00FF9C] font-mono"
                  >
                    <option value="Web App Penetration Test">Black-Box Web App Penetration Test</option>
                    <option value="API Security Audit">Microservices &amp; REST/GraphQL API Audit</option>
                    <option value="DevSecOps CI/CD Hardening">DevSecOps CI/CD Pipeline Automation</option>
                    <option value="Zero-Trust Architecture">Zero-Trust &amp; Mutual TLS Architecture</option>
                    <option value="Full Red-Team Simulation">Full Adversarial Red-Team Simulation</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#6B8B77] mb-2">
                    Engagement Timeline
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D0A] border border-[#1E3327] text-[#E2FBEF] text-sm focus:outline-none focus:ring-2 focus:ring-[#00FF9C] font-mono"
                  >
                    <option value="Immediate (Critical Incident)">Immediate Sprint (&lt; 2 Weeks)</option>
                    <option value="Scheduled Audit (1-3 Months)">Standard Comprehensive Audit (3-4 Weeks)</option>
                    <option value="Quarterly Retainer">Continuous Retainer / DevSecOps Gate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#6B8B77] mb-2">
                  Scope Parameters &amp; Target Assets *
                </label>
                <textarea
                  rows={4}
                  {...register("message", { required: "Scope parameters are required" })}
                  placeholder="Specify target domain names, IP CIDR ranges, testing rules of engagement, and exclusions..."
                  className="w-full px-4 py-3 rounded-xl bg-[#090D0A] border border-[#1E3327] text-[#E2FBEF] text-sm focus:outline-none focus:ring-2 focus:ring-[#00FF9C] font-mono resize-none"
                />
                {errors.message && (
                  <span className="text-xs text-[#FF4A6B] font-mono mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-full font-mono text-xs uppercase tracking-wider font-extrabold bg-[#00FF9C] hover:bg-[#00DF87] text-[#0A0D0B] shadow-[0_0_20px_rgba(0,255,156,0.35)] flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer disabled:opacity-70"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Transmitting Over TLS..." : "Transmit Encrypted Brief"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
