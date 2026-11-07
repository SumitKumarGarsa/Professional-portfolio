import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, FileText, Copy, Check, Terminal, Sparkles, Layers } from "lucide-react";
import { devData } from "@/data/devData";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/common/SocialIcons";

export default function DevHero() {
  const { profile, hero } = devData;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Typewriter effect for developer titles
  useEffect(() => {
    const fullText = hero.typewriterTitles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % hero.typewriterTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, hero.typewriterTitles]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(hero.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="home" className="relative pt-8 sm:pt-14 pb-20 sm:pb-28 border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Hero Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-surface border border-border shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>{hero.badge}</span>
          </div>

          {/* Large Name Headline */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-tight uppercase font-extrabold leading-[0.88] text-text mb-4">
            {profile.name}
          </h1>

          {/* Typewriter Title */}
          <div className="h-10 sm:h-12 flex items-center mb-6">
            <span className="font-mono text-xl sm:text-2xl md:text-3xl text-accent font-bold tracking-tight">
              &gt; {displayText}
            </span>
            <span className="inline-block w-2.5 h-6 sm:h-7 bg-accent ml-1 animate-terminal-blink" />
          </div>

          {/* 2-Line Editorial Pitch */}
          <div className="max-w-2xl text-base sm:text-lg text-muted leading-relaxed font-sans space-y-2 mb-8">
            <p>{hero.pitchLine1}</p>
            <p className="font-medium text-text">{hero.pitchLine2}</p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-[#141414] hover:bg-[#2B2925] text-white shadow-md transition-all active:scale-95"
            >
              <span>{hero.primaryCta.text}</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold bg-surface hover:bg-[#EAE3D5] text-text border border-border transition-all active:scale-95"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>{hero.secondaryCta.text}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-6 border-t border-border/80 w-full">
            <span className="font-mono text-xs uppercase tracking-wider text-muted mr-2">
              Connect:
            </span>
            {devData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.name} Profile`}
                className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-text hover:border-text transition-colors"
              >
                {social.name === "GitHub" && <GithubIcon className="w-4 h-4" />}
                {social.name === "LinkedIn" && <LinkedinIcon className="w-4 h-4" />}
                {social.name === "Twitter / X" && <TwitterXIcon className="w-3.5 h-3.5" />}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Floating Code IDE Visual */}
        <div className="lg:col-span-5 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-border bg-[#141414] text-[#EDE8DF] shadow-2xl overflow-hidden font-mono"
          >
            {/* Window Top Bar */}
            <div className="px-4 py-3 bg-[#1C1C1C] border-b border-[#2A2A2A] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-zinc-400 font-mono text-[11px]">
                  {hero.codeSnippet.filename}
                </span>
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Copy snippet"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-[#DCD7CD]">
              <pre>
                <code>{hero.codeSnippet.code}</code>
              </pre>
            </div>

            {/* Terminal Status Footer */}
            <div className="px-4 py-2 bg-[#181818] border-t border-[#2A2A2A] flex items-center justify-between text-[10px] text-zinc-500 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Node.js v20.x &bull; Mongoose 8.x</span>
              </div>
              <span>UTF-8 &bull; LF</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
