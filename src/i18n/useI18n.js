import { useContext } from 'react';
import { I18nContext } from './context.js';

// Hook personalizado para usar el contexto
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n debe ser usado dentro de un I18nProvider');
  }
  return context;
};
