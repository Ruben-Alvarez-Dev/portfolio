import React from 'react';
import { useI18n } from '../../../i18n';
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

  const softSkills = t('profile.softSkills.items');

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">{t('profile.title')}</h2>
        </div>

        <div className="about-content">
          <div className="profile-grid-layout">
            {/* Columna izquierda */}
            <div className="left-column">
              {/* Card 1: Descripción del perfil */}
              <div className="skills-card">
                <h3 className="skills-card-title">Profile</h3>
                <div className="profile-text">
                  {paragraphs.map((paragraph, index) => (
                    <p key={index} className="about-description">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>

              {/* Card 2: Competencias Clave */}
              <div className="skills-card">
                <h3 className="skills-card-title">{t('profile.softSkills.title')}</h3>
                <div className="soft-skills-list">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="soft-skill-item">
                      <span className="skill-bullet">•</span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="right-column">
              {/* Card 3: Habilidades Técnicas */}
              <div className="skills-card">
                <h3 className="skills-card-title">{t('profile.hardSkills.title')}</h3>
                <div className="skills-tags-grid">
                  {hardSkillCategories.map((category, index) => (
                    <div key={index} className="skill-category-tags">
                      <h4 className="category-title-small">{category.category}</h4>
                      <div className="tech-badges">
                        {category.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className={`tech-badge tech-badge-${index}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 4: Habilidades Blandas */}
              <div className="skills-card">
                <h3 className="skills-card-title">Habilidades Blandas</h3>
                <div className="soft-skills-list">
                  <div className="soft-skill-item">
                    <span className="skill-bullet">•</span>
                    <span>Liderazgo de equipos bajo presión</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="skill-bullet">•</span>
                    <span>Inteligencia emocional y empatía</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="skill-bullet">•</span>
                    <span>Comunicación efectiva y formación</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="skill-bullet">•</span>
                    <span>Orientación al cliente y usuario</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="skill-bullet">•</span>
                    <span>Resolución rápida de problemas</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="skill-bullet">•</span>
                    <span>Adaptabilidad y aprendizaje continuo</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="skill-bullet">•</span>
                    <span>Gestión de relaciones y negociación</span>
                  </div>
                  <div className="soft-skill-item">
                    <span className="skill-bullet">•</span>
                    <span>Presentaciones en público</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
