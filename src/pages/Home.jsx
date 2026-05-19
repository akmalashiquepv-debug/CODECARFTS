import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import HowItWorks from "../components/landing/HowItWorks";
import ExperienceSection from "../components/landing/ExperienceSection";
import TeamStructure from "../components/landing/TeamStructure";
import Timeline from "../components/landing/Timeline";
import IdeaSubmission from "../components/landing/IdeaSubmission";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <ExperienceSection />
      <TeamStructure />
      <Timeline />
      <IdeaSubmission />
      <FinalCTA />
      <Footer />
    </div>
  );
}