"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import CertificationsSection from "@/components/sections/certifications";
import CodingJourneySection from "@/components/sections/coding-journey";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import { FallingSkills } from "@/components/falling-skills";

function MainPage() {
  return (
    <>
      <FallingSkills />
      <SmoothScroll>
        <main className={cn("bg-transparent")}>
          <div
            className="top-0 z-0 fixed w-full"
            style={{ height: '100svh' }}
          >
            <AnimatedBackground />
          </div>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <CodingJourneySection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
