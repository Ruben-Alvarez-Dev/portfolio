import React from 'react';
// import { useI18n } from '../../../i18n';
import './EducationSection.css';

const EducationSection = () => {
  // Formación académica importante
  const academicEducation = [
    {
      name: "Master's Degree in Educational Pedagogy COPyDE",
      issuer: "Universidad de Murcia",
      year: "2020"
    },
    {
      name: "Full Stack Web Developer Bootcamp",
      issuer: "Neoland School, Madrid", 
      year: "2023"
    },
    {
      name: "Advanced Diploma in Web Application Development (Level 5)",
      issuer: "IES Llerna, Lleida Sevilla",
      year: "2018"
    },
    {
      name: "Professional Certificate in Train-the-Trainer",
      issuer: "Universidad Antonio de Nebrija, Madrid",
      year: "2019"
    }
  ];
  
  // Certificaciones técnicas
  const certifications = [
    {
      name: "Scrum Master Certificate (PSM I)",
      issuer: "Scrum.org",
      year: "2024"
    },
    {
      name: "Azure Fundamentals AZ-900", 
      issuer: "Microsoft Corporation",
      year: "2024"
    },
    {
      name: "Power Platform Fundamentals PL-900",
      issuer: "Microsoft Corporation",
      year: "2024"
    },
    {
      name: "Advanced Diploma in Restaurant Service Management (Level 5)",
      issuer: "IES Atenea and IES Vesta, Sevilla-Murcia",
      year: "2016"
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-header">
          <h2 className="education-title">Formación y Certificaciones</h2>
        </div>

        <div className="education-content">
          {/* BLOQUE SUPERIOR: Formación Académica en una sola card */}
          <div className="education-block">
            <div className="academic-single-card">
              {academicEducation.map((edu, index) => (
                <div key={index} className="academic-item">
                  <div className="academic-item-content">
                    <h4 className="academic-name">{edu.name}</h4>
                    <p className="academic-institution">{edu.issuer}</p>
                  </div>
                  <span className="academic-year">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BLOQUE INFERIOR: Certificaciones */}
          <div className="education-block">
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="certification-content">
                    <div className="certification-info">
                      <h4 className="certification-name">{cert.name}</h4>
                      <p className="certification-issuer">{cert.issuer}</p>
                    </div>
                    <span className="certification-year">{cert.year}</span>
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

export default EducationSection;
