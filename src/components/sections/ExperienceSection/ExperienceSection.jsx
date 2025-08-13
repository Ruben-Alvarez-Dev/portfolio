import React from 'react';
import { useI18n } from '../../../i18n';
import { useExperience } from '../../../hooks/useExperience';
import { Section, SectionHeader, SectionContent } from '../../ui';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const { t } = useI18n();
  const { experiences } = useExperience();

  return (
    <Section id="experience" className="experience-section">
      <SectionHeader 
        title={t('experience.title')}
        underline={true}
      />

      <SectionContent layout="flex" spacing="sm" maxWidth="lg">
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};

export default ExperienceSection;