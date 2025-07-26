import React from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import { useI18n } from '../../../i18n';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useI18n();

  const handleDownloadCV = () => {
    // Aquí implementarás la descarga del CV
    console.log('Downloading CV...');
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-text">
              <p className="hero-greeting">{t('hero.greeting')}</p>
              <h1 className="hero-name">{t('hero.name')}</h1>
              <h2 className="hero-subtitle">{t('hero.title')}</h2>
              
              <p className="hero-description">
                {t('hero.description')}
              </p>
              
              <div className="hero-actions">
                <button className="btn-primary" onClick={handleDownloadCV}>
                  <FiDownload />
                  {t('hero.downloadCV')}
                </button>
                <button className="btn-secondary" onClick={handleContactClick}>
                  <FiMail />
                  {t('hero.contactMe')}
                </button>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="hero-image-container">
                <div className="image-placeholder">
                  RA
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow">↓</div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
