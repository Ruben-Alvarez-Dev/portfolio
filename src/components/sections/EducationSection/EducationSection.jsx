import React from 'react';
import { useI18n } from '../../../i18n';
import './EducationSection.css';

const EducationSection = () => {
  const { t } = useI18n();
  
  const education = t('profile.certifications.items');

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-header">
          <h2 className="education-title">{t('profile.certifications.title')}</h2>
        </div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <div className="education-header-info">
                  <h3 className="education-title-item">{edu.name}</h3>
                  <span className="education-year">{edu.year}</span>
                </div>
                <h4 className="education-institution">{edu.issuer}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
