import React from 'react';
import { useI18n } from '../../../i18n';
import { Section, SectionHeader, SectionContent, Flex, Card, Tag } from '../../ui';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const { t } = useI18n();
  const experiences = t('experience.positions');

  return (
    <Section id="experience" className="experience-section">
      <SectionHeader 
        title={t('experience.title')}
        underline={true}
      />

      <SectionContent layout="flex" spacing="sm" maxWidth="lg">
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <Flex key={index} align="start" gap="md" className="experience-item">
              <div className="experience-marker"></div>
              <Card variant="default" className="experience-card">
                <Card.Body>
                  <Flex direction="column" gap="md">
                    <Flex justify="between" align="start" wrap="wrap" gap="sm" className="experience-header">
                      <Flex direction="column" gap="xs">
                        <h3 className="experience-position">{exp.title}</h3>
                        <h4 className="experience-company">{exp.company}</h4>
                      </Flex>
                      <Tag
                        size="sm"
                        color="experience"
                        glow={true}
                        clickable={true}
                        position={true}
                        className="experience-year"
                      >
                        {exp.duration}
                      </Tag>
                    </Flex>
                    
                    <p className="experience-description">{exp.type}</p>
                    
                    <ul className="experience-responsibilities">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </Flex>
                </Card.Body>
              </Card>
            </Flex>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};

export default ExperienceSection;