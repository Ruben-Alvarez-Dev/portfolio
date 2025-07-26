// Sistema de internacionalización para el portfolio
export const translations = {
  en: {
    // Header & Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
      language: "ES"
    },
    
    // Hero Section
    hero: {
      greeting: "Hi, I'm",
      name: "Rubén Álvarez",
      title: "Tech Consultant\nScrum Master\nFull Stack Developer",
      description: "20+ years transforming businesses through technology and leadership. Specialized in web development, Microsoft Power Platform automation, and agile team management.",
      downloadCV: "Download CV",
      contactMe: "Contact Me"
    },
    
    // About Section
    about: {
      title: "About Me",
      subtitle: "Professional Background",
      description: "Business transformation specialist with expertise in leadership and full stack development skills. Proven track record in process optimization and implementing technical solutions that drive operational excellence. Combines analytical capabilities with hands-on development capabilities across modern web technologies.",
      contact: {
        email: "info@rubenalvarez.dev",
        phone: "+34 671 35 06",
        location: "Travel available",
        license: "Licensed driver and own vehicle"
      },
      skills: {
        title: "Technical Skills",
        frontend: "Frontend",
        backend: "Backend", 
        tools: "Tools & Platforms",
        languages: "Languages"
      },
      certifications: {
        title: "Certifications",
        items: [
          {
            name: "Power Platform Functional Consultant PL-200",
            issuer: "Microsoft Corporation",
            year: "2025 (En progreso)"
          },
          {
            name: "Power Platform Developer PL-400", 
            issuer: "Microsoft Corporation",
            year: "2025 (En progreso)"
          },
          {
            name: "Scrum Master Certificate (PSM I)",
            issuer: "Scrum.org",
            year: "2024"
          },
          {
            name: "Azure Fundamentals AZ-900",
            issuer: "Microsoft Corporation",
            year: "2024"
          },
          {
            name: "Power Platform Fundamentals PL-900",
            issuer: "Microsoft Corporation", 
            year: "2024"
          },
          {
            name: "Full Stack Web Developer",
            issuer: "Neoland School, Madrid",
            year: "2023"
          }
        ]
      }
    },
    
    // Experience Section
    experience: {
      title: "Professional Experience",
      positions: [
        {
          title: "Tech Analyst - Power Platform Specialist",
          company: "Accenture, Seville",
          duration: "14 months",
          type: "Remote technical service and Power Platform solutions for international partners",
          responsibilities: [
            "Power Platform development and automation",
            "Remote technical service and assistance",
            "International partner support",
            "Business process optimization",
            "On-demand technical solutions"
          ]
        },
        {
          title: "Tech Analyst - Power Apps Developer", 
          company: "Arquiconsult Management Solutions, Madrid",
          duration: "6 months",
          type: "Power Apps development, process automation, and Microsoft Dynamics 365 integration for enterprise clients",
          responsibilities: [
            "Power Apps canvas and model-driven app development",
            "Power Automate workflow implementation", 
            "Microsoft Dynamics 365 integration",
            "Enterprise client solutions and consulting",
            "Business process analysis and optimization"
          ]
        },
        {
          title: "Senior Operations Manager & Scrum Master",
          company: "Hospitality Sector",
          duration: "10+ years",
          type: "Led complete business transformations across multiple venues, managing cross-functional teams of 20+ people using agile methodologies",
          responsibilities: [
            "Agile team leadership and Scrum implementation",
            "Cross-functional team management (20+ people)",
            "Business transformation and digital process optimization",
            "Quality management system implementation",
            "KPI monitoring and performance improvement",
            "Training and mentoring programs for staff development",
            "Stakeholder management and client relationship building"
          ]
        }
      ]
    },
    
    // Education Section
    education: {
      title: "Academic Background",
      degrees: [
        {
          title: "Master's Degree in Educational Pedagogy",
          institution: "Universidad de Murcia",
          type: "COPyDE",
          year: "2020"
        },
        {
          title: "Professional Certificate in Train-the-Trainer",
          institution: "Universidad Antonio de Nebrija, Madrid", 
          year: "2019"
        },
        {
          title: "Advanced Diploma in Web Application Development (Level 5)",
          institution: "IES Llerna, Lleida Sevilla",
          year: "2018"
        },
        {
          title: "Full Stack Web Developer Bootcamp",
          institution: "Neoland School, Madrid",
          year: "2023"
        },
        {
          title: "Advanced Diploma in Restaurant Service Management (Level 5)",
          institution: "IES Atenea and IES Vesta, Sevilla-Murcia",
          year: "2016"
        },
        {
          title: "Diploma in Business and Administration (BTEC Level 2)",
          institution: "Sunderland College, Liverpool",
          year: "2014"
        }
      ]
    },
    
    // Services Section
    services: {
      title: "Services & Expertise",
      subtitle: "Three specialized paths to transform your business through technology and leadership",
      technologies: "Technologies",
      learnMore: "Learn More",
      development: {
        title: "Full Stack Development",
        description: "End-to-end web application development with modern technologies and best practices. From frontend interfaces to robust backend systems.",
        features: [
          "Custom web application development",
          "API design and implementation",
          "Database architecture and optimization",
          "Responsive and accessible user interfaces",
          "Performance optimization and scalability",
          "Code review and technical consultation"
        ]
      },
      powerplatform: {
        title: "Power Platform Solutions",
        description: "Business process automation and enterprise solutions using Microsoft Power Platform. Streamline operations and boost productivity.",
        features: [
          "Power Apps development (Canvas & Model-driven)",
          "Power Automate workflow automation", 
          "Power BI data visualization and reporting",
          "Microsoft Dynamics 365 integration",
          "Custom connectors and API integration",
          "Business process analysis and optimization"
        ]
      },
      leadership: {
        title: "Team Leadership & Scrum",
        description: "Agile team leadership and process optimization with proven track record managing teams of 20+ people in transformational environments.",
        features: [
          "Scrum Master and Agile coaching",
          "Cross-functional team management",
          "Business transformation leadership",
          "Process optimization and automation",
          "Training and mentoring programs",
          "Performance management and KPI tracking"
        ]
      }
    },
    
    // Projects Section
    projects: {
      title: "Featured Projects",
      subtitle: "Some of my recent work",
      filters: {
        all: "All Projects",
        fullstack: "Full Stack",
        frontend: "Frontend", 
        backend: "Backend",
        mobile: "Mobile"
      },
      viewProject: "View Project",
      viewCode: "View Code",
      comingSoon: "Coming Soon"
    },
    
    // Contact Section
    contact: {
      title: "Let's Work Together",
      subtitle: "Ready to start your next project?",
      form: {
        title: "Send me a message",
        subtitle: "Fill out the form and I'll get back to you as soon as possible",
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again."
      },
      info: {
        title: "Contact Information",
        email: "info@rubenalvarez.dev",
        phone: "+34 671 35 06",
        location: "Spain (Travel Available)"
      },
      social: {
        title: "Follow Me",
        linkedin: "LinkedIn",
        github: "GitHub", 
        twitter: "Twitter"
      }
    },
    
    // Footer
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with ❤️ in Spain"
    }
  },
  
  es: {
    // Header & Navigation
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      services: "Servicios",
      experience: "Experiencia",
      education: "Formación",
      projects: "Proyectos", 
      contact: "Contacto",
      language: "EN"
    },
    
    // Hero Section
    hero: {
      greeting: "Hola, soy",
      name: "Rubén Álvarez",
      title: "Consultor Tech\nScrum Master\nDesarrollador Full Stack",
      description: "Más de 20 años transformando empresas a través de tecnología y liderazgo. Especializado en desarrollo web, automatización Microsoft Power Platform y gestión ágil de equipos.",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame"
    },
    
    // About Section
    about: {
      title: "Sobre Mí",
      subtitle: "Perfil Profesional",
      description: "Especialista en transformación empresarial con experiencia en liderazgo y habilidades de desarrollo full stack. Historial probado en optimización de procesos e implementación de soluciones técnicas que impulsan la excelencia operacional. Combina capacidades analíticas con habilidades de desarrollo práctico en tecnologías web modernas.",
      contact: {
        email: "info@rubenalvarez.dev",
        phone: "+34 671 35 06", 
        location: "Disponible para viajar",
        license: "Carnet de conducir y vehículo propio"
      },
      skills: {
        title: "Habilidades Técnicas",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas y Plataformas", 
        languages: "Idiomas"
      },
      certifications: {
        title: "Certificaciones",
        items: [
          {
            name: "Power Platform Functional Consultant PL-200",
            issuer: "Microsoft Corporation",
            year: "2025 (En progreso)"
          },
          {
            name: "Power Platform Developer PL-400",
            issuer: "Microsoft Corporation",
            year: "2025 (En progreso)"
          },
          {
            name: "Certificado Scrum Master (PSM I)",
            issuer: "Scrum.org",
            year: "2024"
          },
          {
            name: "Azure Fundamentals AZ-900",
            issuer: "Microsoft Corporation",
            year: "2024"
          },
          {
            name: "Power Platform Fundamentals PL-900", 
            issuer: "Microsoft Corporation",
            year: "2024"
          },
          {
            name: "Desarrollador Web Full Stack",
            issuer: "Neoland School, Madrid",
            year: "2023"
          }
        ]
      }
    },
    
    // Experience Section
    experience: {
      title: "Experiencia Profesional",
      positions: [
        {
          title: "Analista Técnico - Especialista Power Platform",
          company: "Accenture, Sevilla",
          duration: "14 meses",
          type: "Servicio técnico remoto y soluciones Power Platform para socios internacionales",
          responsibilities: [
            "Desarrollo y automatización en Power Platform",
            "Servicio técnico remoto y asistencia",
            "Soporte a socios internacionales", 
            "Optimización de procesos empresariales",
            "Soluciones técnicas bajo demanda"
          ]
        },
        {
          title: "Analista Técnico - Desarrollador Power Apps",
          company: "Arquiconsult Management Solutions, Madrid", 
          duration: "6 meses",
          type: "Desarrollo Power Apps, automatización de procesos e integración Microsoft Dynamics 365 para clientes empresariales",
          responsibilities: [
            "Desarrollo de aplicaciones canvas y model-driven en Power Apps",
            "Implementación de flujos de trabajo con Power Automate",
            "Integración con Microsoft Dynamics 365",
            "Soluciones y consultoría para clientes empresariales",
            "Análisis y optimización de procesos empresariales"
          ]
        },
        {
          title: "Gerente Senior de Operaciones y Scrum Master",
          company: "Sector Hotelero",
          duration: "10+ años", 
          type: "Lideré transformaciones empresariales completas en múltiples establecimientos, gestionando equipos multifuncionales de más de 20 personas usando metodologías ágiles",
          responsibilities: [
            "Liderazgo ágil de equipos e implementación de Scrum",
            "Gestión de equipos multifuncionales (más de 20 personas)",
            "Transformación empresarial y optimización de procesos digitales",
            "Implementación de sistemas de gestión de calidad",
            "Monitoreo de KPIs y mejora del rendimiento",
            "Programas de formación y desarrollo de personal",
            "Gestión de stakeholders y construcción de relaciones con clientes"
          ]
        }
      ]
    },
    
    // Education Section  
    education: {
      title: "Formación Académica",
      degrees: [
        {
          title: "Máster en Pedagogía Educacional",
          institution: "Universidad de Murcia",
          type: "COPyDE",
          year: "2020"
        },
        {
          title: "Certificado Profesional en Formación de Formadores",
          institution: "Universidad Antonio de Nebrija, Madrid",
          year: "2019"
        },
        {
          title: "Diploma Avanzado en Desarrollo de Aplicaciones Web (Nivel 5)",
          institution: "IES Llerna, Lleida Sevilla", 
          year: "2018"
        },
        {
          title: "Bootcamp Desarrollador Web Full Stack",
          institution: "Neoland School, Madrid",
          year: "2023"
        },
        {
          title: "Diploma Avanzado en Gestión de Servicios de Restauración (Nivel 5)",
          institution: "IES Atenea and IES Vesta, Sevilla-Murcia",
          year: "2016"
        },
        {
          title: "Diploma en Negocios y Administración (BTEC Nivel 2)",
          institution: "Sunderland College, Liverpool", 
          year: "2014"
        }
      ]
    },
    
    // Services Section
    services: {
      title: "Servicios y Especialidades",
      subtitle: "Tres vías especializadas para transformar tu negocio a través de tecnología y liderazgo",
      technologies: "Tecnologías",
      learnMore: "Saber Más",
      development: {
        title: "Desarrollo Full Stack",
        description: "Desarrollo completo de aplicaciones web con tecnologías modernas y mejores prácticas. Desde interfaces frontend hasta sistemas backend robustos.",
        features: [
          "Desarrollo de aplicaciones web personalizadas",
          "Diseño e implementación de APIs",
          "Arquitectura y optimización de bases de datos",
          "Interfaces responsivas y accesibles",
          "Optimización de rendimiento y escalabilidad",
          "Revisión de código y consultoría técnica"
        ]
      },
      powerplatform: {
        title: "Soluciones Power Platform",
        description: "Automatización de procesos empresariales y soluciones corporativas usando Microsoft Power Platform. Optimiza operaciones y aumenta la productividad.",
        features: [
          "Desarrollo Power Apps (Canvas y Model-driven)",
          "Automatización de flujos con Power Automate", 
          "Visualización de datos y reportes con Power BI",
          "Integración con Microsoft Dynamics 365",
          "Conectores personalizados e integración de APIs",
          "Análisis y optimización de procesos empresariales"
        ]
      },
      leadership: {
        title: "Liderazgo de Equipos y Scrum",
        description: "Liderazgo ágil de equipos y optimización de procesos con experiencia probada gestionando equipos de más de 20 personas en entornos de transformación.",
        features: [
          "Scrum Master y coaching ágil",
          "Gestión de equipos multifuncionales",
          "Liderazgo en transformación empresarial",
          "Optimización y automatización de procesos",
          "Programas de formación y mentoría",
          "Gestión de rendimiento y seguimiento de KPIs"
        ]
      }
    },
    
    // Projects Section
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Algunos de mis trabajos recientes",
      filters: {
        all: "Todos los Proyectos",
        fullstack: "Full Stack",
        frontend: "Frontend",
        backend: "Backend", 
        mobile: "Móvil"
      },
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      comingSoon: "Próximamente"
    },
    
    // Contact Section
    contact: {
      title: "Trabajemos Juntos",
      subtitle: "¿Listo para comenzar tu próximo proyecto?",
      form: {
        title: "Envíame un mensaje",
        subtitle: "Completa el formulario y te responderé lo antes posible",
        name: "Nombre Completo",
        email: "Dirección de Email",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito!",
        error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo."
      },
      info: {
        title: "Información de Contacto",
        email: "info@rubenalvarez.dev", 
        phone: "+34 671 35 06",
        location: "España (Disponible para Viajar)"
      },
      social: {
        title: "Sígueme",
        linkedin: "LinkedIn",
        github: "GitHub",
        twitter: "Twitter"
      }
    },
    
    // Footer
    footer: {
      rights: "Todos los derechos reservados",
      madeWith: "Hecho con ❤️ en España"
    }
  }
};

// Función para obtener el texto traducido
export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let translation = translations[language];
  
  for (const k of keys) {
    if (translation && translation[k]) {
      translation = translation[k];
    } else {
      // Fallback al inglés si no se encuentra la traducción
      translation = translations.en;
      for (const fallbackKey of keys) {
        if (translation && translation[fallbackKey]) {
          translation = translation[fallbackKey];
        } else {
          return key; // Devolver la clave si no se encuentra traducción
        }
      }
      break;
    }
  }
  
  return translation;
};
