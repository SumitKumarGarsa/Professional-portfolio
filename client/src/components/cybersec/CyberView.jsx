import React from "react";
import CyberHero from "./CyberHero";
import CyberAbout from "./CyberAbout";
import CyberExpertise from "./CyberExpertise";
import CyberToolkit from "./CyberToolkit";
import CyberLabs from "./CyberLabs";
import CyberProjects from "./CyberProjects";
import CyberCertifications from "./CyberCertifications";
import CyberReports from "./CyberReports";
import CyberExperience from "./CyberExperience";
import CyberContact from "./CyberContact";

export default function CyberView() {
  return (
    <div className="w-full">
      {/* 1. Terminal Boot Hero */}
      <CyberHero />

      {/* 2. Security Philosophy & 55/45 Offensive vs Defensive Bar */}
      <CyberAbout />

      {/* 3. 8 Core Expertise Cards */}
      <CyberExpertise />

      {/* 4. Tactical Security Toolkit & CLI Binaries */}
      <CyberToolkit />

      {/* 5. Labs & CTFs (HTB Pro Hacker, THM Top 1%, PicoCTF) + Writeups */}
      <CyberLabs />

      {/* 6. Security Research & Projects (Problem / Approach / Result) */}
      <CyberProjects />

      {/* 7. Industry Certifications (CEH, Security+, eJPT, OSCP in-progress) */}
      <CyberCertifications />

      {/* 8. Sanitized Penetration Testing Reports & CVE Disclosures */}
      <CyberReports />

      {/* 9. Security Engagements Timeline */}
      <CyberExperience />

      {/* 10. Encrypted PGP Contact & Briefing Transmission */}
      <CyberContact />
    </div>
  );
}
