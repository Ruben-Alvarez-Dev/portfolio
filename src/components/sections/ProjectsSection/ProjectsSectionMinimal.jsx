import React from 'react';
import { useProjects } from '../../../hooks/useProjectsSimple';

const ProjectsSection = () => {
  console.log('ProjectsSection: Component rendering');
  
  const { getProjectsByCategory } = useProjects();
  console.log('ProjectsSection: useProjects hook executed successfully');
  
  try {
    const projects = getProjectsByCategory('all');
    console.log('ProjectsSection: Projects retrieved:', projects.length);
    
    return (
      <div>
        <h2>Projects Section Minimal</h2>
        <p>Projects found: {projects.length}</p>
      </div>
    );
  } catch (error) {
    console.error('ProjectsSection: Error in component:', error);
    return (
      <div>
        <h2>Projects Section Error</h2>
        <p>Error: {error.message}</p>
      </div>
    );
  }
};

export default ProjectsSection;
