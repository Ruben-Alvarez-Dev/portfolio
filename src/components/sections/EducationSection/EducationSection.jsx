import React from 'react';
import { useI18n } from '../../../i18n';
import { useEducation } from '../../../hooks/useEducation';
import { Section, SectionHeader, SectionContent, Grid, Flex } from '../../ui';
import EducationalCard from './EducationalCard';
import './EducationSection.css';

const EducationSection = () => {
  const { t } = useI18n();
  const { academic: academicEducation, certifications: technicalCertifications } = useEducation();



  return (
    <Section id="education" className="education-section">
      <SectionHeader 
        title={t('profile.certifications.title')}
        underline={true}
      />

      <SectionContent layout="flex" spacing="xs" maxWidth="lg">
        <Grid columns={2} gap="md" responsive={true} className="education-grid">
          {/* Columna izquierda: Formación Académica - 1 card por fila */}
          <Flex direction="column" gap="sm" className="academic-column">
            {academicEducation.map((edu, index) => (
              <EducationalCard
                key={index}
                item={edu}
                type="title"
              />
            ))}
          </Flex>

          {/* Columna derecha: Certificaciones Técnicas - Grid de 2 columnas */}
          <Flex direction="column" gap="sm" className="certifications-column">
            <Grid columns={2} gap="sm" className="certifications-grid">
              {technicalCertifications.map((cert, index) => (
                <EducationalCard
                  key={index}
                  item={cert}
                  type="certification"
                />
              ))}
            </Grid>
          </Flex>
        </Grid>
      </SectionContent>
    </Section>
  );
};

export default EducationSection;