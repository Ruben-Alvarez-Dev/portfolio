import React from 'react';
import { useI18n } from '../../../i18n';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const { t } = useI18n();
  
  const experiences = t('experience.positions');

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">{t('experience.title')}</h2>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header-info">
                  <h3 className="experience-job-title">{exp.title}</h3>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-type">{exp.type}</p>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
