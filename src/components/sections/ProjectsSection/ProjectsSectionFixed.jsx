import React, { useState, useMemo, useEffect } from 'react';
import { useI18n } from '../../../i18n';
import { useProjects } from '../../../hooks/useProjects';
import Section from '../../ui/Section/Section';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import SectionContent from '../../ui/SectionContent/SectionContent';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const { t } = useI18n();
  const { getProjectsByCategory } = useProjects();

  // Cambiar estado inicial a 'all' para mostrar todos los proyectos al cargar
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Orden específico de las categorías según lo solicitado
  const categoryOrder = ['featured', 'all', 'fullstack', 'frontend', 'backend', 'powerplatform', 'ai', 'azure', 'management'];

  const getCategoryLabel = (categoryId) => {
    const categoryTranslations = t('projects.categories') || {};
    return categoryTranslations[categoryId] || categoryId;
  };

  const filteredProjects = useMemo(() => {
    try {
      return getProjectsByCategory(activeCategory);
    } catch (error) {
      console.error('Error filtering projects:', error);
      return [];
    }
  }, [activeCategory, getProjectsByCategory]);

  // Auto-select 'all' if no projects in current category
  useEffect(() => {
    if (activeCategory !== 'all' && filteredProjects.length === 0) {
      setActiveCategory('all');
    }
  }, [activeCategory, filteredProjects]);

  return (
    <Section id="projects" className="projects-section">
      <SectionHeader
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />
      
      <SectionContent>
        {/* Category Filter Buttons */}
        <div className="category-filters">
          {categoryOrder.map((category) => (
            <button
              key={category}
              className={`category-filter ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              data-category={category}
              type="button"
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))
          ) : (
            <div className="no-projects">
              <p>{t('projects.noProjects')}</p>
            </div>
          )}
        </div>
      </SectionContent>
    </Section>
  );
};

export default ProjectsSection;
