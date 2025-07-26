import React from 'react';
import { useI18n } from '../../../i18n';
import './EducationSection.css';

const EducationSection = () => {
  const { t } = useI18n();
  
  const education = t('education.degrees');

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-header">
          <h2 className="education-title">{t('education.title')}</h2>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">🎓</div>
              <div className="education-content">
                <h3 className="education-degree">{edu.title}</h3>
                <p className="education-institution">{edu.institution}</p>
                {edu.type && <p className="education-type">{edu.type}</p>}
                <span className="education-year">{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
