// Projects data with embedded bilingual translations
export const projectsData = [
  {
    id: 1,
    order: 1,
    category: "frontend",
    technologies: ["React", "CSS", "JavaScript"],
    image: "/images/projects/portfolio.jpg",
    liveUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/user/portfolio",
    demoType: "live",
    featured: true,
    status: "completed",
    translations: {
      title: {
        en: "Personal Portfolio",
        es: "Portfolio Personal"
      },
      description: {
        en: "Modern responsive portfolio built with React and CSS. Features dark/light theme, internationalization, and smooth animations.",
        es: "Portfolio moderno y responsivo construido con React y CSS. Incluye tema oscuro/claro, internacionalización y animaciones suaves."
      }
    }
  },
  {
    id: 2,
    order: 2,
    category: "fullstack",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    image: "/images/projects/ecommerce.jpg",
    liveUrl: "https://ecommerce.example.com",
    githubUrl: "https://github.com/user/ecommerce",
    demoType: "live",
    featured: true,
    status: "completed",
    translations: {
      title: {
        en: "E-commerce Platform",
        es: "Plataforma E-commerce"
      },
      description: {
        en: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
        es: "Solución e-commerce full-stack con autenticación de usuarios, procesamiento de pagos y panel de administración."
      }
    }
  },
  {
    id: 3,
    order: 3,
    category: "backend",
    technologies: ["Python", "Django", "PostgreSQL"],
    image: "/images/projects/api.jpg",
    liveUrl: "",
    githubUrl: "https://github.com/user/api",
    demoType: "github",
    featured: false,
    status: "completed",
    translations: {
      title: {
        en: "REST API Service",
        es: "Servicio API REST"
      },
      description: {
        en: "RESTful API built with Django and PostgreSQL. Includes authentication, rate limiting, and comprehensive documentation.",
        es: "API RESTful construida con Django y PostgreSQL. Incluye autenticación, limitación de velocidad y documentación completa."
      }
    }
  }
];

// Project categories with order for filtering
export const projectCategories = [
  { id: "all", order: 0 },
  { id: "featured", order: 1 },
  { id: "fullstack", order: 2 },
  { id: "frontend", order: 3 },
  { id: "backend", order: 4 }
];
