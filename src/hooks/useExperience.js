import { useMemo } from 'react';
import { useI18n } from '../i18n';
import { experienceData } from '../data/experience';

export const useExperience = () => {
  const { currentLanguage } = useI18n();
  
  // Transform data to include translated fields at the top level
  const translatedExperience = useMemo(() => {
    return experienceData
      .sort((a, b) => a.order - b.order)
      .map(item => ({
        id: item.id,
        order: item.order,
        type: item.type,
        company: item.company,
        location: item.location,
        duration: item.duration,
        year: item.year,
        title: item.translations.title[currentLanguage] || item.translations.title.en,
        companyFull: item.translations.company,
        achievements: item.translations.achievements[currentLanguage] || item.translations.achievements.en
      }));
  }, [currentLanguage]);

  // Calculate weights for visual priority (most recent = higher priority)
  const experienceWithWeights = useMemo(() => {
    return translatedExperience.map((item, index) => ({
      ...item,
      weight: index < 1 ? 1 : index < 2 ? 2 : 3 // First experience = weight 1, second = weight 2, rest = weight 3
    }));
  }, [translatedExperience]);

  // Separate by type if needed
  const techExperience = useMemo(() => {
    return experienceWithWeights.filter(item => item.type === 'tech');
  }, [experienceWithWeights]);

  const managementExperience = useMemo(() => {
    return experienceWithWeights.filter(item => item.type === 'management');
  }, [experienceWithWeights]);

  return {
    all: experienceWithWeights,
    tech: techExperience,
    management: managementExperience
  };
};
