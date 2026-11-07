"use client";

import React from "react";
import CyberMatrixBg from "./CyberMatrixBg";
import CyberHero from "./CyberHero";
import CyberCases from "./CyberCases";
import CyberServices from "./CyberServices";
import CyberArsenal from "./CyberArsenal";
import CyberThreatIntel from "./CyberThreatIntel";
import CyberCtaBanner from "./CyberCtaBanner";

export default function CyberView() {
  return (
    <div className="relative w-full bg-[#04080C] text-[#E3E8F2] overflow-hidden selection:bg-[#00F59B] selection:text-[#04080C]">
      {/* 60fps Canvas Digital Matrix Rain Background */}
      <CyberMatrixBg opacity={0.35} />

      {/* Cyber Hero with Tactical Terminal & PGP */}
      <CyberHero />

      {/* Offensive Cases & Exploits */}
      <CyberCases />

      {/* Defensive & Offensive Security Services */}
      <CyberServices />

      {/* Tactical Tool Arsenal & Certifications */}
      <CyberArsenal />

      {/* Threat Intelligence Disclosures & Briefings */}
      <CyberThreatIntel />

      {/* Tactical Scoping CTA Banner */}
      <CyberCtaBanner />
    </div>
  );
}
