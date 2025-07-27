import React, { useState } from 'react';
import { useI18n } from '../../../i18n';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState('featured');

  // Función para manejar la visualización de screenshots
  const handleViewScreenshots = (projectId) => {
    // Aquí podrías abrir un modal o redirigir a una galería
    console.log(`Viewing screenshots for project ${projectId}`);
    // Por ahora, podrías mostrar un alert o abrir un modal
    alert('Screenshots disponibles - Implementar modal de galería');
  };

  const projects = [
    // Full Stack Projects
    {
      id: 1,
      title: "Portfolio Personal Interactivo",
      description: "Portfolio personal desarrollado con React y tecnologías modernas. Sistema de temas, internacionalización y diseño responsivo.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop&auto=format",
      technologies: ["React", "Vite", "CSS3", "JavaScript", "i18n"],
      category: "fullstack",
      liveUrl: "https://rubenalvarez.dev",
      githubUrl: "https://github.com/ruben-alvarez-dev/portfolio",
      demoType: "live",
      featured: true,
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management MERN App",
      description: "Sistema completo de gestión de tareas con MongoDB, Express, React y Node.js. Incluye autenticación JWT y colaboración en tiempo real.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&auto=format",
      technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Socket.io"],
      category: "fullstack",
      liveUrl: null,
      githubUrl: "https://github.com/user/mern-tasks",
      demoType: "code",
      featured: true,
      status: "in-progress"
    },
    {
      id: 3,
      title: "E-Commerce MERN Platform",
      description: "Plataforma de comercio electrónico completa desarrollada con stack MERN. Panel de administración, carrito y pagos integrados.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Redux"],
      category: "fullstack",
      liveUrl: null,
      githubUrl: "https://github.com/user/mern-ecommerce",
      demoType: "code",
      featured: false,
      status: "completed"
    },

    // Frontend Projects
    {
      id: 4,
      title: "Dashboard Interactivo React",
      description: "Dashboard responsive desarrollado en React para visualización de datos con gráficos interactivos, filtros dinámicos y tema personalizable.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
      technologies: ["React", "Chart.js", "CSS Grid", "Responsive Design", "Theme System"],
      category: "frontend",
      liveUrl: "https://react-dashboard-demo.com",
      githubUrl: "https://github.com/user/react-dashboard",
      demoType: "live",
      featured: true,
      status: "completed"
    },
    {
      id: 5,
      title: "Landing Page Corporativa",
      description: "Página web corporativa moderna con animaciones CSS, formularios de contacto y optimización SEO. Diseño responsive y accesible.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format",
      technologies: ["HTML5", "CSS3", "JavaScript", "SASS", "SEO"],
      category: "frontend",
      liveUrl: "https://corporate-landing-demo.com",
      githubUrl: "https://github.com/user/corporate-landing",
      demoType: "live",
      featured: false,
      status: "completed"
    },
    {
      id: 6,
      title: "Componentes UI Reutilizables",
      description: "Biblioteca de componentes React reutilizables con Storybook. Documentación completa, testing automatizado y theming avanzado.",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=250&fit=crop&auto=format",
      technologies: ["React", "Storybook", "Testing Library", "CSS Modules", "Design System"],
      category: "frontend",
      liveUrl: "https://ui-components-demo.com",
      githubUrl: "https://github.com/user/ui-components",
      demoType: "live",
      featured: true,
      status: "completed"
    },

    // Backend Projects
    {
      id: 7,
      title: "API RESTful con Node.js",
      description: "API completa con autenticación JWT, validación de datos, documentación Swagger y deployment en la nube. Incluye testing y CI/CD.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&auto=format",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Jest"],
      category: "backend",
      liveUrl: null,
      githubUrl: "https://github.com/user/nodejs-api",
      demoType: "code",
      featured: false,
      status: "completed"
    },
    {
      id: 8,
      title: "Microservicios con Docker",
      description: "Arquitectura de microservicios containerizada con Docker, comunicación entre servicios, base de datos distribuida y orquestación.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format",
      technologies: ["Docker", "Kubernetes", "Node.js", "Redis", "PostgreSQL", "nginx"],
      category: "backend",
      liveUrl: null,
      githubUrl: "https://github.com/user/microservices-docker",
      demoType: "code",
      featured: true,
      status: "completed"
    },
    {
      id: 9,
      title: "Sistema de Autenticación OAuth",
      description: "Sistema completo de autenticación con OAuth 2.0, integración con Google/GitHub, refresh tokens y gestión de sesiones seguras.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&auto=format",
      technologies: ["Node.js", "OAuth 2.0", "Passport.js", "Redis", "Security"],
      category: "backend",
      liveUrl: null,
      githubUrl: "https://github.com/user/oauth-system",
      demoType: "code",
      featured: true,
      status: "completed"
    },

    // Power Platform Projects
    {
      id: 10,
      title: "App de Gestión de Inventario",
      description: "Aplicación Power Apps para gestión de inventario empresarial. Formularios dinámicos, integración con SharePoint y flujos automatizados.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format",
      technologies: ["Power Apps", "SharePoint", "Power Automate", "Power BI", "Dataverse"],
      category: "powerplatform",
      liveUrl: null,
      githubUrl: null,
      demoType: "screenshots",
      featured: false,
      status: "completed"
    },
    {
      id: 11,
      title: "Dashboard Ejecutivo Power BI",
      description: "Dashboard interactivo en Power BI para análisis de KPIs empresariales. Conexión a múltiples fuentes de datos y reportes automatizados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
      technologies: ["Power BI", "DAX", "Power Query", "SQL Server", "Data Analysis"],
      category: "powerplatform",
      liveUrl: null,
      githubUrl: null,
      demoType: "screenshots",
      featured: true,
      status: "completed"
    },
    {
      id: 12,
      title: "Flujos de Aprobación Automatizados",
      description: "Sistema de flujos de trabajo con Power Automate para procesos de aprobación. Integración con Teams, Outlook y SharePoint.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop&auto=format",
      technologies: ["Power Automate", "Teams", "Outlook", "SharePoint", "Approval Workflows"],
      category: "powerplatform",
      liveUrl: null,
      githubUrl: null,
      demoType: "screenshots",
      featured: true,
      status: "completed"
    },

    // Project Management
    {
      id: 13,
      title: "Metodología Scrum Implementada",
      description: "Implementación completa de metodología Scrum en equipo de desarrollo. Definición de roles, ceremonias y métricas de productividad.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&auto=format",
      technologies: ["Scrum", "Jira", "Confluence", "Agile", "Metrics"],
      category: "management",
      liveUrl: null,
      githubUrl: null,
      demoType: "screenshots",
      featured: false,
      status: "completed"
    },

    // AI & Machine Learning Projects
    {
      id: 14,
      title: "Sistema RAG Empresarial",
      description: "Solución de Retrieval-Augmented Generation para empresas. Vectorización de documentos internos y consultas inteligentes con IA.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&auto=format",
      technologies: ["Python", "OpenAI API", "Vector DB", "LangChain", "RAG"],
      category: "ai",
      liveUrl: null,
      githubUrl: "https://github.com/user/enterprise-rag",
      demoType: "screenshots",
      featured: true,
      status: "in-progress"
    },
    {
      id: 15,
      title: "Chatbot IA Personalizado",
      description: "Chatbot inteligente entrenado con datos específicos de empresa. Integración con sistemas existentes y respuestas contextuales.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop&auto=format",
      technologies: ["Python", "Machine Learning", "NLP", "FastAPI", "Docker"],
      category: "ai",
      liveUrl: null,
      githubUrl: "https://github.com/user/custom-chatbot",
      demoType: "screenshots",
      featured: false,
      status: "planned"
    },
    {
      id: 16,
      title: "Análisis Predictivo con ML",
      description: "Modelo de machine learning para análisis predictivo de datos empresariales. Predicción de tendencias y optimización de procesos.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&auto=format",
      technologies: ["Python", "scikit-learn", "pandas", "TensorFlow", "Data Analysis"],
      category: "ai",
      liveUrl: null,
      githubUrl: "https://github.com/user/predictive-analysis",
      demoType: "screenshots",
      featured: false,
      status: "planned"
    },

    // Azure Cloud Projects  
    {
      id: 17,
      title: "Infraestructura Azure Empresarial",
      description: "Configuración completa de entorno Azure con máquinas virtuales, redes virtuales, grupos de recursos y monitoreo. Implementación de arquitectura escalable.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop&auto=format",
      technologies: ["Azure VMs", "Virtual Networks", "Resource Groups", "Azure Monitor", "Load Balancer"],
      category: "azure",
      liveUrl: null,
      githubUrl: null,
      demoType: "screenshots",
      featured: true,
      status: "completed"
    },
    {
      id: 18,
      title: "Azure AD y Gestión de Identidades",
      description: "Configuración de Azure Active Directory con usuarios, grupos, políticas de seguridad, acceso condicional y autenticación multifactor.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop&auto=format",
      technologies: ["Azure AD", "Conditional Access", "Security Groups", "MFA", "Identity Protection"],
      category: "azure",
      liveUrl: null,
      githubUrl: null,
      demoType: "screenshots",
      featured: true,
      status: "completed"
    },
    {
      id: 19,
      title: "Azure App Services y CI/CD",
      description: "Implementación de aplicaciones web en Azure App Service con pipelines de CI/CD, slots de implementación y monitoreo de aplicaciones.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop&auto=format",
      technologies: ["Azure App Service", "Azure DevOps", "CI/CD Pipelines", "Application Insights"],
      category: "azure",
      liveUrl: null,
      githubUrl: null,
      demoType: "screenshots",
      featured: false,
      status: "completed"
    }
  ];

  const categories = ["featured", "all", "fullstack", "frontend", "backend", "powerplatform", "ai", "azure", "management"];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(project => [1, 11, 14].includes(project.id)) // Solo Portfolio, Power BI Dashboard, y Sistema RAG
    : projects.filter(project => project.category === activeFilter);

  const getStatusText = (status) => {
    switch(status) {
      case 'completed': return t('projects.completed');
      case 'in-progress': return t('projects.inProgress');
      case 'planned': return t('projects.comingSoon');
      default: return status;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">{t('projects.title')}</h2>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              data-category={category}
              onClick={() => setActiveFilter(category)}
            >
              {t(`projects.categories.${category}`)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-action btn-live"
                        title="Ver demo en vivo"
                      >
                        <span className="icon">🚀</span>
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-action btn-code"
                        title="Ver código en GitHub"
                      >
                        <span className="icon">💻</span>
                        GitHub
                      </a>
                    )}
                    <button 
                      onClick={() => handleViewScreenshots(project.id)}
                      className="btn-action btn-screenshots"
                      title="Ver capturas de pantalla"
                    >
                      <span className="icon">�️</span>
                      Screenshots
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status status-${project.status}`}>
                    {getStatusText(project.status)}
                  </span>
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

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>{t('projects.noProjects')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
