import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { BiGlobe } from 'react-icons/bi';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../../../context/ThemeContext';
import { useI18n } from '../../../context/I18nContext';
import "./HeaderComponent.css";
import MenuOverlay from './MenuOverlay/MenuOverlay';

const HeaderComponent = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, changeLanguage } = useI18n();
  // Estados para controlar renderizado y animación del overlay
  const [menuOpen, setMenuOpen] = useState(false);
  const [renderOverlay, setRenderOverlay] = useState(false);
  // enlaces reutilizados en desktop y móvil
  const links = [
    lang === 'en' ? 'Home' : 'Inicio',
    lang === 'en' ? 'About' : 'Acerca',
    lang === 'en' ? 'Projects' : 'Proyectos',
    lang === 'en' ? 'Contact' : 'Contacto',
  ];
  return (
    <header className="HeaderComponent">
    <nav>
      <div className="logo-group">
  <span className="HeaderLogo">Logo</span>
  <span className="HeaderTitle">{lang === 'en' ? 'My Portfolio' : 'Mi Portafolio'}</span>
      </div>

      <div className="links-group">
        {links.map((label, idx) => (
          <a key={idx} href="#" className="HeaderLink">
            {label}
          </a>
        ))}
      </div>

      {/* Spacer para móvil - se expande cuando los links están ocultos */}
      <div className="mobile-spacer"></div>

  <div className="switch-group">
        <button className="icon-button" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
        <button
          className="icon-button lang-button"
          onClick={() => changeLanguage(lang === 'en' ? 'es' : 'en')}
          aria-label="Toggle language"
        >
          <BiGlobe /> {lang.toUpperCase()}
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
              // esperar fin de transición antes de desmontar
              setTimeout(() => setRenderOverlay(false), 300);
            }
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {/* Menú móvil fullscreen semitransparente */}
      {renderOverlay && (
        <MenuOverlay
          links={links}
          closeMenu={() => {
            setMenuOpen(false);
            setTimeout(() => setRenderOverlay(false), 300);
          }}
          isOpen={menuOpen}
        />
      )}
    </nav>
    </header>
  );
}

export default HeaderComponent;
