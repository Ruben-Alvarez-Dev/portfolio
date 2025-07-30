import React from 'react';
import { useI18n } from '../../../i18n';
import { Section, SectionHeader, SectionContent, Grid, Flex, Card, Tag } from '../../ui';
import './AboutSection.css';

const AboutSection = () => {
  const { t } = useI18n();
  
  // Definir estructura simplificada para CV efectivo
  
  const techStack = [
    {
      category: t('profile.hardSkills.frontend'),
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: t('profile.hardSkills.backend'), 
      technologies: ["Node.js", "PHP", "Laravel", "C#", "Java", "MySQL", "Oracle"]
    },
    {
      category: t('profile.hardSkills.tools'),
      technologies: ["Git & GitHub", "VS Code", "LLM AI Tools", "Azure", "Docker", "Postman", "Power Platform", "Trello", "Jira"]
    },
    {
      category: t('profile.hardSkills.languages'),
      technologies: ["Spanish (native)", "English (fluent)", "Italian (intermediate)", "French (basic)"]
    }
  ];

  return (
    <Section id="about" className="about-section">
      <SectionHeader 
        title={t('profile.title')}
        align="center"
        underline={true}
      />

      <SectionContent layout="flex" spacing="sm" maxWidth="lg">
        <Grid columns={2} gap="lg" responsive={true} className="about-grid">
          {/* Columna izquierda */}
          <Flex direction="column" gap="lg" className="about-column about-column--left">
            
            {/* Card 1: Perfil Profesional */}
            <Card variant="default" className="skills-card about-card--profile">
              <Card.Title underline={true}>{t('profile.title')}</Card.Title>
              <Card.Content>
                <div className="about-description-condensed">
                  {t('profile.description').split('\n\n').map((paragraph, index) => (
                    <p key={index} className="profile-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Card.Content>
            </Card>

            {/* Card 3: Competencias Profesionales */}
            <Card variant="default" className="skills-card about-card--competencies">
              <Card.Title>{t('profile.softSkills.title')}</Card.Title>
              <Card.Content>
                <Flex direction="column" gap="sm" className="competencies-list">
                  {Object.entries(t('profile.softSkills.families')).map(([familyKey, family]) => 
                    family.items.map((competency, index) => (
                      <div key={`${familyKey}-${index}`} className="competency-item">
                        <span className="competency-icon">✓</span>
                        <span className={`competency-text competency-text-${family.color}`}>{competency}</span>
                      </div>
                    ))
                  ).flat()}
                </Flex>
              </Card.Content>
            </Card>
          </Flex>

          {/* Columna derecha */}
          <Flex direction="column" gap="lg" className="about-column about-column--right">
            
            {/* Card 2: Tecnologías & Herramientas */}
            <Card variant="default" className="skills-card about-card--technical">
              <Card.Title underline={true}>Tecnologías & Herramientas</Card.Title>
              <Card.Content>
                <Flex direction="column" gap="md" className="skills-tags-grid">
                  {techStack.map((category, index) => (
                    <div key={index} className="skill-category-tags">
                      <h4 className="card__subtitle">{category.category}</h4>
                      <Flex wrap="wrap" gap="xs" className="tech-badges">
                        {category.technologies.map((tech, techIndex) => (
                          <Tag
                            key={techIndex}
                            color={`tech-${index}`}
                            size="sm"
                            glow={true}
                            clickable={true}
                            bordered={true}
                            className={`tech-badge tech-badge-${index}`}
                          >
                            {tech}
                          </Tag>
                        ))}
                      </Flex>
                    </div>
                  ))}
                </Flex>
              </Card.Content>
            </Card>

            {/* Card 4: Soft Skills */}
            <Card variant="default" className="skills-card about-card--soft">
              <Card.Title underline={true}>Soft Skills</Card.Title>
              <Card.Content>
                <Flex direction="column" gap="sm" className="soft-skills-list">
                  <div className="soft-skill-item">
                    <span className="soft-skill-icon">👥</span>
                    <span className="soft-skill-text">Liderazgo de Equipos y Gestión de Equipos</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="soft-skill-icon">🗣️</span>
                    <span className="soft-skill-text">Habilidades comunicativas, de oratoria y presentación</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="soft-skill-icon">🚀</span>
                    <span className="soft-skill-text">Análisis y Resolución de Problemas Complejos</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="soft-skill-icon">⚡</span>
                    <span className="soft-skill-text">Adaptabilidad, Flexibilidad y Gestión del Cambio</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="soft-skill-icon">🎯</span>
                    <span className="soft-skill-text">Orientación a Resultados, KPIs y Mejora Continua</span>
                  </div>
                </Flex>
              </Card.Content>
            </Card>
            
          </Flex>
        </Grid>
      </SectionContent>
    </Section>
  );
};

export default AboutSection;
