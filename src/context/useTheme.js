import { useContext } from 'react';
import { ThemeContext } from './themeContext.js';

// Hook personalizado para usar el contexto de tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};
