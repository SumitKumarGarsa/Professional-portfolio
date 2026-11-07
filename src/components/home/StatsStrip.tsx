"use client";

import React, { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/data/site";

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1800;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count >= 1000 ? count.toLocaleString() : count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative z-10 w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-[76px] border-t border-[var(--border)] bg-[var(--surface)] transition-colors duration-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col ${idx !== 0 ? "pt-6 sm:pt-0 sm:pl-8 lg:pl-12" : ""}`}
            >
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-[var(--text)] leading-none mb-3">
                <CountUpNumber target={stat.number} suffix={stat.suffix} />
              </div>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--muted)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
