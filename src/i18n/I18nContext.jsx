import React, { useState, useEffect } from 'react';
import { I18nContext } from './context.js';
import { translations, getTranslation } from './translations.js';

// Proveedor del contexto
export const I18nProvider = ({ children }) => {
  // Detectar idioma del navegador, por defecto inglés
  const detectBrowserLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('es') ? 'es' : 'en';
  };

  // Estado del idioma actual
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Intentar obtener del localStorage primero
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage || detectBrowserLanguage();
  });

  // Guardar idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('portfolio-language', currentLanguage);
    // Actualizar el atributo lang del documento
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  // Función para cambiar idioma
  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setCurrentLanguage(newLanguage);
    }
  };

  // Función para alternar entre idiomas
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    changeLanguage(newLanguage);
  };

  // Función helper para obtener traducciones
  const t = (key) => {
    return getTranslation(currentLanguage, key);
  };

  // Función para obtener todas las traducciones del idioma actual
  const getCurrentTranslations = () => {
    return translations[currentLanguage] || translations.en;
  };

  // Función para verificar si hay traducción disponible
  const hasTranslation = (key) => {
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return false;
      }
    }
    
    return true;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    toggleLanguage,
    t,
    getCurrentTranslations,
    hasTranslation,
    availableLanguages: Object.keys(translations),
    isSpanish: currentLanguage === 'es',
    isEnglish: currentLanguage === 'en'
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};
