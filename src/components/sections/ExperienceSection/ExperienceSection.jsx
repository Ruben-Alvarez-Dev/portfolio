import React from 'react';
import { useI18n } from '../../../i18n';
import { Section, SectionHeader, SectionContent } from '../../ui';
import { useExperience } from '../../../hooks/useExperience';
import ExperienceCard from './ExperienceCard';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const { t } = useI18n();
  const { all: experiences } = useExperience();

  return (
    <Section id="experience" className="experience-section">
      <SectionHeader 
        title={t('experience.title')}
        underline={true}
      />

      <SectionContent layout="flex" spacing="sm" maxWidth="lg">
        <div className="experience-timeline">
          {experiences.map((experience) => (
            <ExperienceCard 
              key={experience.id} 
              item={experience}
              showMarker={true}
            />
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};

export default ExperienceSection;