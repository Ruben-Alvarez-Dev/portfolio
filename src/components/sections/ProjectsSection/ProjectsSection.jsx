import { useState, useMemo } from 'react';
import { useI18n } from '../../../i18n';
import { useProjects } from '../../../hooks/useProjectsWorking';
import { Section, SectionHeader, SectionContent } from '../../ui';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const { t } = useI18n();
  const { getProjectsByCategory, categories } = useProjects();
  const [activeCategory, setActiveCategory] = useState('featured');

  const getCategoryLabel = (categoryId) => {
    return t(`projects.categories.${categoryId}`) || categoryId;
  };

  const filteredProjects = useMemo(() => {
    return getProjectsByCategory(activeCategory);
  }, [getProjectsByCategory, activeCategory]);

  return (
    <Section id="projects" className="projects-section">
      <SectionHeader
        title={t('projects.title')}
        align="center"
        underline={true}
      />

      <SectionContent layout="flex" spacing="sm" maxWidth="lg">
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              data-category={category.id}
              type="button"
            >
              {getCategoryLabel(category.id)}
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