import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { BiGlobe } from 'react-icons/bi';
import { FiMenu, FiX } from 'react-icons/fi';
import { useI18n } from '../../../i18n';
import { useTheme } from '../../../context';
import "./HeaderComponent.css";
import MenuOverlay from './MenuOverlay/MenuOverlay';

const HeaderComponent = () => {
  const { t, toggleLanguage } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [renderOverlay, setRenderOverlay] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.education'), href: '#education' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      // Offset ajustado - no tan pegado a la navbar pero tampoco muy separado
      const headerHeight = 40; // Aumentado de 20 a 40px para dar un poco más de espacio
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    // Cerrar menú móvil si está abierto
    if (menuOpen) {
      setMenuOpen(false);
      setTimeout(() => setRenderOverlay(false), 300);
    }
  };

  return (
    <header className={`HeaderComponent ${scrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="logo-group">
          <span className="HeaderLogo">RA</span>
          <span className="HeaderTitle">
            Rubén Álvarez
          </span>
        </div>

        <div className="links-group">
          {links.map((link, idx) => (
            <button 
              key={idx} 
              onClick={() => handleLinkClick(link.href)}
              className="HeaderLink"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Spacer para móvil */}
        <div className="mobile-spacer"></div>

        <div className="switch-group">
          <button className="icon-button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="icon-button lang-button"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <BiGlobe /> {t('nav.language')}
          </button>
        </div>
        
        <div className="burguer-group">
          <button
            className={`icon-button burger-button${menuOpen ? ' open' : ''}`}
            onClick={() => {
              if (!menuOpen) {
                setRenderOverlay(true);
                setMenuOpen(true);
              } else {
                setMenuOpen(false);
                setTimeout(() => setRenderOverlay(false), 300);
              }
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menú móvil */}
        {renderOverlay && (
          <MenuOverlay
            links={links}
            closeMenu={() => {
              setMenuOpen(false);
              setTimeout(() => setRenderOverlay(false), 300);
            }}
            isOpen={menuOpen}
            onLinkClick={handleLinkClick}
          />
        )}
      </nav>
    </header>
  );
}

export default HeaderComponent;
