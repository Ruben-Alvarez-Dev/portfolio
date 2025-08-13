import { useState, useEffect } from 'react';
import { useI18n } from '../../../i18n';
import { Section, SectionHeader, SectionContent } from '../../ui';
import ProjectCard from './ProjectCard/ProjectCard';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const { t } = useI18n();
  const projects = t('projects.items');
  const categories = t('projects.categories');
  // Estado inicial 'featured' para mostrar proyectos destacados al cargar
  const [activeFilter, setActiveFilter] = useState('featured');

  // Orden específico de las categorías según lo solicitado
  const categoryOrder = ['featured', 'all', 'fullstack', 'frontend', 'backend', 'powerplatform', 'ai', 'azure', 'management'];

  // Función para obtener el texto del estado
  const getStatusText = (status) => {
    const statusMap = {
      'completed': t('projects.status.completed'),
      'in-progress': t('projects.status.inProgress'),
      'planned': t('projects.status.planned')
    };
    return statusMap[status] || status;
  };

  // Función para manejar la visualización de screenshots
  const handleViewScreenshots = (projectId) => {
    // Aquí puedes implementar la lógica para mostrar screenshots
    console.log('Ver screenshots del proyecto:', projectId);
  };

  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    let filtered = [];
    if (activeFilter === 'all') {
      filtered = projects;
    } else if (activeFilter === 'featured') {
      filtered = projects.filter(project => project.featured === true).slice(0, 3);
    } else if (activeFilter === 'frontend') {
      // Para frontend, mostrar proyectos frontend y fullstack
      filtered = projects.filter(project => project.category === 'frontend' || project.category === 'fullstack');
    } else if (activeFilter === 'backend') {
      // Para backend, mostrar proyectos backend y fullstack
      filtered = projects.filter(project => project.category === 'backend' || project.category === 'fullstack');
    } else {
      filtered = projects.filter(project => project.category === activeFilter);
    }
    
    // Sort by ID to ensure consistent order across languages
    filtered = filtered.sort((a, b) => a.id - b.id);
    
    setFilteredProjects(filtered);

    // Crear lista para debug
    const debugList = filtered.map(p => ({ id: p.id, title: p.title, featured: p.featured }));
    console.log('Filtered projects debug list:', debugList);

    // Trampa para detectar proyectos sin featured true en filtro featured
    if (activeFilter === 'featured') {
      const invalidProjects = filtered.filter(p => p.featured !== true);
      if (invalidProjects.length > 0) {
        console.warn('Warning: Projects without featured=true found in featured filter:', invalidProjects);
      }
    }
  }, [activeFilter, projects]);

  // Añadir log en el manejador de cambio de filtro para verificar el valor
  const handleFilterChange = (category) => {
    console.log('Filter changed to:', category);
    setActiveFilter(category);
  };

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
          {categoryOrder.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => handleFilterChange(category)}
              data-category={category}
              type="button"
            >
              {categories[category]}
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
                getStatusText={getStatusText}
                onViewScreenshots={handleViewScreenshots}
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