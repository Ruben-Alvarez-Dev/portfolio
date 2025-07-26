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

              {/* Card 3: Competencias Clave */}
              <div className="skills-card">
                <h3 className="skills-card-title">{t('profile.softSkills.title')}</h3>
                <div className="competencies-pills">
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
                </div>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="right-column">
              {/* Card 2: Habilidades Técnicas */}
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
                <div className="soft-skills-pills">
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
                    <span>Presentaciones en público</span>
                  </div>
                  <div className="soft-skill-pill soft-skill-communication">
                    <span className="pill-icon">🗣️</span>
                    <span>Orientación al cliente y usuario</span>
                  </div>
                  
                  {/* RESOLUCIÓN & ADAPTABILIDAD - ROSA */}
                  <div className="soft-skill-pill soft-skill-problem-solving">
                    <span className="pill-icon">⚡</span>
                    <span>Resolución rápida de problemas</span>
                  </div>
                  <div className="soft-skill-pill soft-skill-problem-solving">
                    <span className="pill-icon">⚡</span>
                    <span>Adaptabilidad y aprendizaje continuo</span>
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