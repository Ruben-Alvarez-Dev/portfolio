import React from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import { useI18n } from '../../../i18n';
import Section from '../../ui/Section/Section';
import Button from '../../ui/Button/Button';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useI18n();

  const handleDownloadCV = () => {
    // Implementación de descarga del CV
    window.open('/cv.pdf', '_blank');
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="hero" className="hero-section" padding="hero" gradientBg={true}>
      <div className="hero-main">
        <div className="hero-text">
          <p className="hero-greeting">{t('hero.greeting')}</p>
          <h1 className="hero-name">{t('hero.name')}</h1>
          <h2 className="hero-subtitle">{t('hero.title')}</h2>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <Button variant="primary" icon={<FiDownload />} onClick={handleDownloadCV}>
              {t('hero.downloadCV')}
            </Button>
            <Button variant="secondary" icon={<FiMail />} onClick={handleContactClick}>
              {t('hero.contactMe')}
            </Button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="image-placeholder">RA</div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
