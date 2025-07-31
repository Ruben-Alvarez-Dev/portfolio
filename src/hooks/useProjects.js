import { useMemo } from 'react';
import { useI18n } from '../i18n';
import { projectsData, projectCategories } from '../data/projectsNew';

export const useProjects = () => {
  const { currentLanguage } = useI18n();
  
  // Transform data to include translated fields at the top level
  const translatedProjects = useMemo(() => {
    if (!projectsData || projectsData.length === 0) {
      return [];
    }
    
    return projectsData
      .sort((a, b) => a.order - b.order)
      .map(item => ({
        id: item.id,
        order: item.order,
        category: item.category,
        technologies: item.technologies || [],
        image: item.image,
        liveUrl: item.liveUrl,
        githubUrl: item.githubUrl,
        demoType: item.demoType,
        featured: item.featured || false,
        status: item.status,
        title: item.translations?.title?.[currentLanguage] || item.translations?.title?.en || 'Untitled',
        description: item.translations?.description?.[currentLanguage] || item.translations?.description?.en || 'No description'
      }));
  }, [currentLanguage]);

  // Get projects by category
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

  // Get featured projects
  const featuredProjects = useMemo(() => {
    return translatedProjects.filter(project => project.featured);
  }, [translatedProjects]);

  // Get projects by status
  const completedProjects = useMemo(() => {
    return translatedProjects.filter(project => project.status === 'completed');
  }, [translatedProjects]);

  const inProgressProjects = useMemo(() => {
    return translatedProjects.filter(project => project.status === 'in-progress');
  }, [translatedProjects]);

  const plannedProjects = useMemo(() => {
    return translatedProjects.filter(project => project.status === 'planned');
  }, [translatedProjects]);

  // Get available categories (only those with projects)
  const availableCategories = useMemo(() => {
    const categoriesWithProjects = new Set(translatedProjects.map(project => project.category));
    
    return projectCategories.filter(category => {
      if (category.id === 'all') return true;
      if (category.id === 'featured') return featuredProjects.length > 0;
      return categoriesWithProjects.has(category.id);
    });
  }, [translatedProjects, featuredProjects]);

  return {
    all: translatedProjects,
    featured: featuredProjects,
    completed: completedProjects,
    inProgress: inProgressProjects,
    planned: plannedProjects,
    getProjectsByCategory,
    availableCategories,
    categories: projectCategories
  };
};
