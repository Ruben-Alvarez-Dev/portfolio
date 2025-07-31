import { useMemo } from 'react';
import { useI18n } from '../i18n';
import { projectsData, projectCategories } from '../data/projectsNew';

export const useProjects = () => {
  const { currentLanguage } = useI18n();
  
  const translatedProjects = useMemo(() => {
    return projectsData
      .sort((a, b) => a.order - b.order)
      .map(item => ({
        id: item.id,
        order: item.order,
        category: item.category,
        technologies: item.technologies,
        image: item.image,
        liveUrl: item.liveUrl,
        githubUrl: item.githubUrl,
        demoType: item.demoType,
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

  const featuredProjects = useMemo(() => {
    return translatedProjects.filter(project => project.featured);
  }, [translatedProjects]);

  const availableCategories = useMemo(() => {
    return projectCategories;
  }, []);

  return {
    all: translatedProjects,
    featured: featuredProjects,
    getProjectsByCategory,
    availableCategories,
    categories: projectCategories
  };
};
