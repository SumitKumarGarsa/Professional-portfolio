import React from "react";
import DevHero from "./DevHero";
import DevAbout from "./DevAbout";
import DevSkills from "./DevSkills";
import DevProjects from "./DevProjects";
import DevExperience from "./DevExperience";
import DevGithubStats from "./DevGithubStats";
import DevTestimonials from "./DevTestimonials";
import DevContact from "./DevContact";

export default function DevView() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <DevHero />

      {/* 2. About */}
      <DevAbout />

      {/* 3. Skills */}
      <DevSkills />

      {/* 4. Filterable Projects */}
      <DevProjects />

      {/* 5. Experience & Education Timeline */}
      <DevExperience />

      {/* 6. GitHub Telemetry & Stats */}
      <DevGithubStats />

      {/* 7. Client Testimonials Carousel */}
      <DevTestimonials />

      {/* 8. Validated Contact Form */}
      <DevContact />
    </div>
  );
}
