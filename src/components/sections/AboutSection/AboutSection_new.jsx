import React from 'react';
import { useI18n } from '../../../i18n';
import './AboutSection.css';

const AboutSection = () => {
  const { t } = useI18n();
  
  const skillCategories = [
    {
      category: t('about.skills.frontend'),
      technologies: [
        "HTML", "CSS", "Bootstrap", "JavaScript", "React", "Redux"
      ]
    },
    {
      category: t('about.skills.backend'),
      technologies: [
        "PHP", "Laravel", "Node.js", "Java", "C#", "MySQL"
      ]
    },
    {
      category: t('about.skills.tools'),
      technologies: [
        "Git & GitHub", "Docker", "Postman", "Visual Studio", "VS Code", 
        "Trello", "Jira", "AI Tools", "Power Platform", "Azure"
      ]
    },
    {
      category: t('about.skills.languages'),
      technologies: [
        "English (proficient/fluent)", "Italian (intermediate)", "French (basic)"
      ]
    }
  ];

  const certifications = t('about.certifications.items');

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">{t('about.title')}</h2>
          <p className="about-subtitle">{t('about.subtitle')}</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              {t('about.description')}
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> {t('about.contact.email')}
              </div>
              <div className="contact-item">
                <strong>Teléfono:</strong> {t('about.contact.phone')}
              </div>
              <div className="contact-item">
                <strong>Ubicación:</strong> {t('about.contact.location')}
              </div>
              <div className="contact-item">
                <strong>Movilidad:</strong> {t('about.contact.license')}
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">{t('about.skills.title')}</h3>
            <div className="skills-grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category.category}</h4>
                  <div className="tech-badges">
                    {category.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-section">
            <h3 className="certifications-title">{t('about.certifications.title')}</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-badge">🏆</div>
                  <div className="cert-info">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
