import React, { useState } from 'react';
import { useI18n } from '../../../i18n';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con panel de administración, carrito de compras, pasarela de pagos y sistema de inventario.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      category: "fullstack",
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/user/ecommerce",
      featured: true,
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real, notificaciones y seguimiento de progreso.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      category: "frontend",
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/user/taskapp",
      featured: true,
      status: "completed"
    },
    {
      id: 3,
      title: "API Rest Microservices",
      description: "Arquitectura de microservicios escalable con autenticación JWT, documentación automática y monitoreo en tiempo real.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Express", "Docker", "Redis", "PostgreSQL"],
      category: "backend",
      liveUrl: null,
      githubUrl: "https://github.com/user/microservices",
      featured: false,
      status: "completed"
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description: "Plataforma inmobiliaria con búsqueda avanzada, mapas interactivos, tour virtual y sistema de contacto.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Mapbox"],
      category: "fullstack",
      liveUrl: "https://realestate-demo.com",
      githubUrl: "https://github.com/user/realestate",
      featured: true,
      status: "completed"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Dashboard meteorológico con predicciones, mapas de clima, alertas personalizadas y análisis histórico.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Chart.js", "Weather API", "PWA"],
      category: "frontend",
      liveUrl: "https://weather-dashboard.com",
      githubUrl: "https://github.com/user/weather",
      featured: false,
      status: "completed"
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "Sistema de votación descentralizado usando blockchain para garantizar transparencia y seguridad.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Solidity", "Web3.js", "Ethereum"],
      category: "blockchain",
      liveUrl: null,
      githubUrl: "https://github.com/user/voting",
      featured: false,
      status: "in-progress"
    }
  ];

  const categories = [
    { id: 'all', label: t('projects.filters.all') },
    { id: 'fullstack', label: t('projects.filters.fullstack') },
    { id: 'frontend', label: t('projects.filters.frontend') },
    { id: 'backend', label: t('projects.filters.backend') },
    { id: 'mobile', label: t('projects.filters.mobile') }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Proyectos Destacados */}
        <div className="featured-projects">
          <h3 className="subsection-title">{t('projects.title')}</h3>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card featured">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h4>{project.title}</h4>
                      <div className="project-links">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-btn">
                            Ver Demo
                          </a>
                        )}
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-btn github">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h4 className="project-title">{project.title}</h4>
                    <div className="project-status">
                      <span className={`status-badge ${project.status}`}>
                        {project.status === 'completed' ? 'Completado' : 'En progreso'}
                      </span>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Todos los Proyectos */}
        <div className="all-projects">
          <h3 className="subsection-title">{t('projects.filters.all')}</h3>
          
          {/* Filtros */}
          <div className="project-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Grid de Proyectos */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <div className="project-links">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-btn">
                            🔗
                          </a>
                        )}
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-btn github">
                          📁
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h4 className="project-title">{project.title}</h4>
                    <div className="project-status">
                      <span className={`status-badge ${project.status}`}>
                        {project.status === 'completed' ? '✓' : '⏳'}
                      </span>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="projects-cta">
          <h3>¿Interesado en colaborar?</h3>
          <p>Siempre estoy abierto a nuevos proyectos y oportunidades emocionantes.</p>
          <button className="cta-btn">Contactar</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
