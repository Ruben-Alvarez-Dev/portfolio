import React from 'react';
import { useI18n } from '../../../i18n';
import './ServicesSection.css';

const ServicesSection = () => {
  const { t } = useI18n();

  const services = [
    {
      id: 'development',
      icon: '💻',
      title: t('services.development.title'),
      description: t('services.development.description'),
      features: t('services.development.features'),
      technologies: ['React', 'Node.js', 'TypeScript', 'Java', 'C#', 'MySQL', 'PHP', 'Laravel'],
      color: '#3B82F6'
    },
    {
      id: 'powerplatform',
      icon: '⚡',
      title: t('services.powerplatform.title'),
      description: t('services.powerplatform.description'),
      features: t('services.powerplatform.features'),
      technologies: ['Power Apps', 'Power Automate', 'Power BI', 'Dynamics 365', 'Azure'],
      color: '#8B5CF6'
    },
    {
      id: 'leadership',
      icon: '👥',
      title: t('services.leadership.title'),
      description: t('services.leadership.description'),
      features: t('services.leadership.features'),
      technologies: ['Scrum', 'Agile', 'Team Management', 'Process Optimization', 'Training'],
      color: '#10B981'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">{t('services.title')}</h2>
          <p className="services-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card" style={{ '--accent-color': service.color }}>
              <div className="service-icon">
                <span className="service-emoji">{service.icon}</span>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="service-feature">
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="service-technologies">
                  <span className="tech-label">{t('services.technologies')}:</span>
                  <div className="tech-list">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="service-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="service-footer">
                <button className="service-btn">
                  {t('services.learnMore')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
