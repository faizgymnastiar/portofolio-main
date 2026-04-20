"use client";

import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import ContactSection from "../components/ContactSection.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}
