"use client";

import React from "react";
import DevHero from "./DevHero";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import ServicesTeaserSection from "@/components/home/ServicesTeaserSection";
import StatsStrip from "@/components/home/StatsStrip";
import TechMarquee from "@/components/home/TechMarquee";
import LatestJournalSection from "@/components/home/LatestJournalSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function DevView() {
  return (
    <div className="relative w-full bg-[var(--bg)] text-[var(--text)] transition-colors duration-400">
      {/* 1. MERN Architect Hero with interactive 3-tab IDE & metrics */}
      <DevHero />

      {/* 2. Selected Work: 3 featured projects as large editorial rows with hover image preview */}
      <SelectedWorkSection />

      {/* 3. Services teaser: numbered list of core capabilities */}
      <ServicesTeaserSection />

      {/* 4. Stats strip with animated count-up numbers */}
      <StatsStrip />

      {/* 5. Infinite tech stack marquee */}
      <TechMarquee />

      {/* 6. Latest 3 Journal posts */}
      <LatestJournalSection />

      {/* 7. Giant CTA banner linking to /contact */}
      <CtaBanner />
    </div>
  );
}
