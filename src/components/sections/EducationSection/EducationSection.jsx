import React from 'react';
import { useI18n } from '../../../i18n';
import { Section, SectionHeader, SectionContent, Grid, Flex, Card, Tag } from '../../ui';
import './EducationSection.css';

const EducationSection = () => {
  const { t } = useI18n();
  
  // Obtener las certificaciones desde las traducciones
  const certifications = t('profile.certifications.items');
  
  // Separar formación académica de certificaciones técnicas
  const academicEducation = certifications.filter(cert =>
    cert.name.includes('Bootcamp') ||
    cert.name.includes('FP Superior') ||
    cert.name.includes('Advanced Diploma') ||
    (cert.name.includes('Master') && !cert.name.includes('Scrum Master')) ||
    (cert.name.includes('Máster') && !cert.name.includes('Scrum Master')) ||
    cert.name.includes('Business and Administration')
  );
  
  const technicalCertifications = certifications.filter(cert => 
    cert.name.includes('Scrum Master') || 
    cert.name.includes('Azure') || 
    cert.name.includes('Power Platform') ||
    cert.name.includes('IT Specialist') ||
    cert.name.includes('Oracle') ||
    cert.name.includes('PSM') ||
    cert.name.includes('AZ-900') ||
    cert.name.includes('PL-900') ||
    cert.name.includes('Cybersecurity') ||
    cert.name.includes('Certificado Profesional en Formación') ||
    cert.name.includes('Professional Certificate in Train')
  );

  return (
    <Section id="education" className="education-section">
      <SectionHeader 
        title={t('profile.certifications.title')}
        underline={true}
      />

      <SectionContent layout="flex" spacing="sm" maxWidth="lg">
        <Grid columns={2} gap="lg" responsive={true} className="education-grid">
          {/* Columna izquierda: Formación Académica - 1 card por fila */}
          <Flex direction="column" gap="md" className="academic-column">
            {academicEducation.map((edu, index) => (
              <Card key={index} variant="default" className="academic-card">
                <Card.Body level="compact">
                  <Flex justify="between" align="start" gap="md" className="education-item">
                    <Flex direction="column" gap="xs">
                      <Card.Text
                        level={3}
                        as="h4"
                        className="education-name academic-name"
                      >
                        {edu.name}
                      </Card.Text>
                      <Card.Text
                        level={3}
                        as="p"
                        className="education-institution academic-institution"
                      >
                        {edu.issuer}
                      </Card.Text>
                    </Flex>
                    <Tag
                      size="sm"
                      color="blue"
                      glow={true}
                      clickable={true}
                      position={true}
                      bordered={true}
                      className="academic-year"
                    >
                      {edu.year}
                    </Tag>
                  </Flex>
                </Card.Body>
              </Card>
            ))}
          </Flex>

          {/* Columna derecha: Certificaciones Técnicas - Grid de 2 columnas */}
          <Flex direction="column" gap="md" className="certifications-column">
            <Grid columns={2} gap="md" className="certifications-grid">
              {technicalCertifications.map((cert, index) => (
                <Card key={index} variant="default" className="certification-card">
                  <Card.Body level="compact">
                    <Flex justify="between" align="start" gap="sm" className="education-item">
                      <Flex direction="column" gap="xs">
                        <Card.Text
                          level={3}
                          as="h4"
                          className="certification-name"
                        >
                          {cert.name}
                        </Card.Text>
                        <Card.Text
                          level={3}
                          as="p"
                          className="certification-institution"
                        >
                          {cert.issuer}
                        </Card.Text>
                      </Flex>
                      <Tag
                        size="sm"
                        color="green"
                        glow={true}
                        clickable={true}
                        position={true}
                        bordered={true}
                        className="certification-year"
                      >
                        {cert.year}
                      </Tag>
                    </Flex>
                  </Card.Body>
                </Card>
              ))}
            </Grid>
          </Flex>
        </Grid>
      </SectionContent>
    </Section>
  );
};

export default EducationSection;