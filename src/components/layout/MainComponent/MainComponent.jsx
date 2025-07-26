import React from 'react';
import "./MainComponent.css";
import HeroSection from '../../sections/HeroSection/HeroSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import ServicesSection from '../../sections/ServicesSection/ServicesSection';
import ExperienceSection from '../../sections/ExperienceSection/ExperienceSection';
import EducationSection from '../../sections/EducationSection/EducationSection';
import ProjectsSection from '../../sections/ProjectsSection/ProjectsSection';
import ContactSection from '../../sections/ContactSection/ContactSection';

const MainComponent = () => {
  return (
    <main className="main">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default MainComponent;
