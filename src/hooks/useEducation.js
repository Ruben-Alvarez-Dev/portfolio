import { useMemo } from 'react';
import { useI18n } from '../i18n';
import { educationData } from '../data/education';

export const useEducation = () => {
  const { currentLanguage } = useI18n();
  
  // Transform data to include translated fields at the top level
  const translatedEducation = useMemo(() => {
    return educationData
      .sort((a, b) => a.order - b.order)
      .map(item => ({
        id: item.id,
        order: item.order,
        type: item.type,
        year: item.year,
        badge: item.badge,
        name: item.translations.name[currentLanguage] || item.translations.name.en,
        issuer: item.translations.issuer,
        certificationUrl: item.certificationUrl
      }));
  }, [currentLanguage]);

  // Separate by type and calculate weights per type
  const academicEducation = useMemo(() => {
    return translatedEducation
      .filter(item => item.type === 'title')
      .map((item, index) => ({
        ...item,
        weight: index < 2 ? 1 : index < 4 ? 2 : 3
      }));
  }, [translatedEducation]);

  const technicalCertifications = useMemo(() => {
    return translatedEducation
      .filter(item => item.type === 'certification')
      .map((item, index) => ({
        ...item,
        weight: index < 2 ? 1 : index < 4 ? 2 : 3
      }));
  }, [translatedEducation]);

  return {
    all: translatedEducation,
    academic: academicEducation,
    certifications: technicalCertifications
  };
};
