import React from 'react';
import HeroSection from '../../sections/HeroSection/HeroSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import EducationSection from '../../sections/EducationSection/EducationSection';
import ExperienceSection from '../../sections/ExperienceSection/ExperienceSection';
import ProjectsSection from '../../sections/ProjectsSection/ProjectsSection';
import ContactSection from '../../sections/ContactSection/ContactSection';
import './MainComponent.css';

const MainComponent = () => {
  return (
    <main className="MainComponent">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default MainComponent;
