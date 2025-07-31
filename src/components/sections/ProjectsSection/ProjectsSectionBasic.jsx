import React from 'react';
import { useI18n } from '../../../i18n';
import { useProjects } from '../../../hooks/useProjectsWorking';
import Section from '../../ui/Section/Section';
import SectionHeader from '../../ui/SectionHeader/SectionHeader';
import SectionContent from '../../ui/SectionContent/SectionContent';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const { t } = useI18n();
  const { getProjectsByCategory } = useProjects();
  
  const projects = getProjectsByCategory('all');
  
  return (
    <Section id="projects" className="projects-section">
      <SectionHeader
        title={t('projects.title')}
        subtitle="Mi trabajo y proyectos destacados"
      />
      
      <SectionContent>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Projects Data Test</h3>
            <p>Projects found: {projects.length}</p>
            {projects.length > 0 && (
              <div>
                <h4>First project:</h4>
                <p><strong>Title:</strong> {projects[0].title}</p>
                <p><strong>Description:</strong> {projects[0].description}</p>
              </div>
            )}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default ProjectsSection;
