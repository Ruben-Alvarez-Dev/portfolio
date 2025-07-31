import { useMemo } from 'react';
import { useI18n } from '../i18n';

// Simple test data
const testProjectsData = [
  {
    id: 1,
    order: 1,
    category: "frontend",
    technologies: ["React", "CSS"],
    featured: true,
    status: "completed",
    translations: {
      title: {
        en: "Test Project 1",
        es: "Proyecto de Prueba 1"
      },
      description: {
        en: "Test description 1",
        es: "Descripción de prueba 1"
      }
    }
  },
  {
    id: 2,
    order: 2,
    category: "backend",
    technologies: ["Node.js", "Express"],
    featured: false,
    status: "completed",
    translations: {
      title: {
        en: "Test Project 2",
        es: "Proyecto de Prueba 2"
      },
      description: {
        en: "Test description 2",
        es: "Descripción de prueba 2"
      }
    }
  }
];

export const useProjects = () => {
  const { currentLanguage } = useI18n();
  
  const translatedProjects = useMemo(() => {
    return testProjectsData.map(item => ({
      id: item.id,
      order: item.order,
      category: item.category,
      technologies: item.technologies,
      featured: item.featured,
      status: item.status,
      title: item.translations.title[currentLanguage] || item.translations.title.en,
      description: item.translations.description[currentLanguage] || item.translations.description.en
    }));
  }, [currentLanguage]);

  const getProjectsByCategory = useMemo(() => {
    return (categoryId) => {
      if (categoryId === 'all') {
        return translatedProjects;
      }
      if (categoryId === 'featured') {
        return translatedProjects.filter(project => project.featured);
      }
      return translatedProjects.filter(project => project.category === categoryId);
    };
  }, [translatedProjects]);

  return {
    getProjectsByCategory
  };
};
