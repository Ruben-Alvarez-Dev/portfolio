import React from 'react';
import { useI18n } from '../../../i18n';
import { Section, SectionHeader, SectionContent, Grid, Flex, Card, Tag } from '../../ui';
import './AboutSection.css';

const AboutSection = () => {
  const { t } = useI18n();
  
  // Dividir la descripción del perfil en párrafos
  const profileDescription = t('profile.description');
  const paragraphs = profileDescription.split('\n\n');
  
  const hardSkillCategories = [
    {
      category: t('profile.hardSkills.frontend'),
      technologies: [
        "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"
      ]
    },
    {
      category: t('profile.hardSkills.backend'),
      technologies: [
        "Node.js", "PHP", "Laravel", "C#", "Java", "MySQL", "Oracle"
      ]
    },
    {
      category: t('profile.hardSkills.tools'),
      technologies: [
        "Git & GitHub", "VS Code", "LLM AI Tools", "Azure", "Docker", 
        "Postman", "Power Platform", "Trello", "Jira"
      ]
    },
    {
      category: t('profile.hardSkills.languages'),
      technologies: [
        "Spanish (native)", "English (fluent)", "Italian (intermediate)", "French (basic)"
      ]
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
            {/* Card 1: Descripción del perfil */}
            <Card variant="default" className="skills-card about-card--profile">
              <Card.Title underline={true}>Profile</Card.Title>
              <Card.Content>
                <Flex direction="column" gap="sm" className="profile-text">
                  {paragraphs.map((paragraph, index) => (
                    <p key={index} className="about-description">
                      {paragraph.trim()}
                    </p>
                  ))}
                </Flex>
              </Card.Content>
            </Card>

            {/* Card 3: Competencias Clave */}
            <Card variant="default" className="skills-card about-card--competencies">
              <Card.Title underline={true}>{t('profile.softSkills.title')}</Card.Title>
              <Card.Content>
                <Flex direction="column" gap="sm" className="competencies-pills">
                  {/* DESARROLLO & TECNOLOGÍA - AZUL */}
                  <div className="competency-pill competency-tech">
                    <span className="pill-icon">💻</span>
                    <span>Full Stack Web Development (React, Node.js, PHP)</span>
                  </div>
                  <div className="competency-pill competency-tech">
                    <span className="pill-icon">💻</span>
                    <span>Microsoft Power Platform & Process Automation</span>
                  </div>
                  <div className="competency-pill competency-tech">
                    <span className="pill-icon">💻</span>
                    <span>Solution Architecture & API Design</span>
                  </div>
                  <div className="competency-pill competency-tech">
                    <span className="pill-icon">💻</span>
                    <span>Quality Control & Testing</span>
                  </div>

                  {/* METODOLOGÍAS & GESTIÓN - VERDE */}
                  <div className="competency-pill competency-management">
                    <span className="pill-icon">🏆</span>
                    <span>Certified Scrum Master & Agile Leadership</span>
                  </div>
                  <div className="competency-pill competency-management">
                    <span className="pill-icon">🏆</span>
                    <span>Team Management & Coaching</span>
                  </div>
                  <div className="competency-pill competency-management">
                    <span className="pill-icon">🏆</span>
                    <span>Business Process Optimization</span>
                  </div>
                  <div className="competency-pill competency-management">
                    <span className="pill-icon">🏆</span>
                    <span>Training & Team Development</span>
                  </div>

                  {/* ANÁLISIS & ESTRATEGIA - NARANJA */}
                  <div className="competency-pill competency-strategy">
                    <span className="pill-icon">📊</span>
                    <span>Data Analysis & KPI Management</span>
                  </div>
                  <div className="competency-pill competency-strategy">
                    <span className="pill-icon">📊</span>
                    <span>Crisis Management & Conflict Resolution</span>
                  </div>
                </Flex>
              </Card.Content>
            </Card>
          </Flex>

          {/* Columna derecha */}
          <Flex direction="column" gap="lg" className="about-column about-column--right">
            {/* Card 2: Habilidades Técnicas */}
            <Card variant="default" className="skills-card about-card--technical">
              <Card.Title underline={true}>{t('profile.hardSkills.title')}</Card.Title>
              <Card.Content>
                <Flex direction="column" gap="md" className="skills-tags-grid">
                  {hardSkillCategories.map((category, index) => (
                    <div key={index} className="skill-category-tags">
                      <h4 className="card__subtitle">{category.category}</h4>
                      <Flex wrap="wrap" gap="xs" className="tech-badges">
                        {category.technologies.map((tech, techIndex) => (
                          <Tag
                            key={techIndex}
                            variant="outline"
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

            {/* Card 4: Habilidades Blandas */}
            <Card variant="default" className="skills-card about-card--soft">
              <Card.Title underline={true}>Habilidades Blandas</Card.Title>
              <Card.Content>
                <Flex direction="column" gap="sm" className="soft-skills-pills">
                  {/* LIDERAZGO & EQUIPOS - PÚRPURA */}
                  <div className="soft-skill-pill soft-skill-leadership">
                    <span className="pill-icon">👥</span>
                    <span>Liderazgo de equipos bajo presión</span>
                  </div>
                  <div className="soft-skill-pill soft-skill-leadership">
                    <span className="pill-icon">👥</span>
                    <span>Inteligencia emocional y empatía</span>
                  </div>
                  <div className="soft-skill-pill soft-skill-leadership">
                    <span className="pill-icon">👥</span>
                    <span>Gestión de relaciones y negociación</span>
                  </div>

                  {/* COMUNICACIÓN & FORMACIÓN - CIAN */}
                  <div className="soft-skill-pill soft-skill-communication">
                    <span className="pill-icon">🗣️</span>
                    <span>Comunicación efectiva y formación</span>
                  </div>
                  <div className="soft-skill-pill soft-skill-communication">
                    <span className="pill-icon">🗣️</span>
                    <span>Presentaciones técnicas y comerciales</span>
                  </div>
                  <div className="soft-skill-pill soft-skill-communication">
                    <span className="pill-icon">🗣️</span>
                    <span>Documentación técnica y procesos</span>
                  </div>

                  {/* ADAPTABILIDAD & INNOVACIÓN - ROSA */}
                  <div className="soft-skill-pill soft-skill-innovation">
                    <span className="pill-icon">🚀</span>
                    <span>Adaptabilidad a nuevas tecnologías</span>
                  </div>
                  <div className="soft-skill-pill soft-skill-innovation">
                    <span className="pill-icon">🚀</span>
                    <span>Pensamiento crítico y resolución creativa</span>
                  </div>
                  <div className="soft-skill-pill soft-skill-innovation">
                    <span className="pill-icon">🚀</span>
                    <span>Mentalidad de mejora continua</span>
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
