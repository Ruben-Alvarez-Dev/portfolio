import React from 'react';
import { useI18n } from '../../../i18n/useI18n';
import './FooterComponent.css';

const FooterComponent = () => {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">{t('footer.title')}</h4>
          <p className="footer-description">
            {t('footer.description')}
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">{t('footer.quickLinks')}</h4>
          <nav className="footer-nav">
            <a href="#hero" className="footer-link">{t('nav.home')}</a>
            <a href="#about" className="footer-link">{t('nav.about')}</a>
            <a href="#projects" className="footer-link">{t('nav.projects')}</a>
            <a href="#contact" className="footer-link">{t('nav.contact')}</a>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-title">{t('footer.connect')}</h4>
          <div className="footer-social">
            <a 
              href="https://github.com/Ruben-Alvarez-Dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/ruben-alvarez-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:info@rubenalvarez.dev"
              className="footer-social-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;