import { useMemo } from 'react';
import { useI18n } from '../i18n';

export const useExperience = () => {
  const { t } = useI18n();
  
  // Obtenemos los datos de experiencia desde las traducciones
  const experiences = useMemo(() => {
    // Intentamos obtener las posiciones desde las traducciones
    const positions = t('experience.positions');
    
    // Si positions es un array, lo devolvemos directamente
    if (Array.isArray(positions)) {
      return positions;
    }
    
    // Si no es un array, devolvemos un array vacío
    return [];
  }, [t]);

  return { experiences };
};
