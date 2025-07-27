// Sistema de internacionalización para el portfolio
export const translations = {
  en: {
    // Header & Navigation
    nav: {
      home: "Home",
      about: "Profile",
      education: "Education",
      experience: "Experience",
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
    
    // About Section (Profile)
    profile: {
      title: "About me",
      languages: "profile.languages",
      description: "Technical professional specializing in team leadership, project management, and technology solutions. My background has provided me with extensive experience leading work groups for over 10 years, connecting with people, and understanding clients' true needs.\n\nI excel at communicating effectively, mentoring and guiding professionals, as well as serving and understanding clients and their requirements. I align these capabilities with project and company objectives to design customized plans, coordinate resources from different disciplines, and execute them effectively.",
      hardSkills: {
        title: "Technical Skills",
        frontend: "Frontend",
        backend: "Backend", 
        tools: "Tools",
        languages: "Languages"
      },
      softSkills: {
        title: "Core Competencies",
        items: [
          "Full Stack Web Development (React, Node.js, PHP)",
          "Microsoft Power Platform & Process Automation",
          "Certified Scrum Master & Agile Leadership",
          "Solution Architecture & API Design",
          "Team Management & Coaching",
          "Business Process Optimization",
          "Data Analysis & KPI Management",
          "Quality Control & Testing",
          "Crisis Management & Conflict Resolution",
          "Training & Team Development"
        ]
      },
      certifications: {
        title: "Certifications & Education",
        items: [
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
            name: "Full Stack Web Developer Bootcamp",
            issuer: "Neoland School, Madrid",
            year: "2023"
          },
          {
            name: "Master's Degree in Educational Pedagogy COPyDE",
            issuer: "Universidad de Murcia",
            year: "2020"
          },
          {
            name: "Professional Certificate in Train-the-Trainer",
            issuer: "Universidad Antonio de Nebrija, Madrid",
            year: "2019"
          },
          {
            name: "Advanced Diploma in Web Application Development (Level 5)",
            issuer: "IES Llerna, Lleida Sevilla",
            year: "2018"
          },
          {
            name: "Advanced Diploma in Restaurant Service Management (Level 5)",
            issuer: "IES Atenea and IES Vesta, Sevilla-Murcia",
            year: "2016"
          }
        ]
      }
    },
    
    // Experience Section
    experience: {
      title: "Professional Experience",
      positions: [
        {
          title: "Tech Analyst - Infrastructure Support",
          company: "Accenture, Seville",
          duration: "14 months",
          type: "IT Infrastructure support specialist providing multi-tier technical solutions for global enterprise clients",
          responsibilities: [
            "Identity and Access Management (IAM) troubleshooting and configuration",
            "Hardware diagnostics, software deployment, and OS optimization across multiple platforms",
            "Network infrastructure analysis, connectivity issues resolution, and performance optimization",
            "Enterprise application support, integration troubleshooting, and system compatibility analysis",
            "Incident management lifecycle: diagnosis, escalation, and cross-departmental ticket coordination",
            "Technical documentation and knowledge base maintenance for complex infrastructure scenarios"
          ]
        },
        {
          title: "Tech Analyst - Power Apps Developer", 
          company: "Arquiconsult, Madrid",
          duration: "6 months",
          type: "Microsoft Power Platform specialist developing custom solutions and enterprise integrations for corporate clients",
          responsibilities: [
            "Power Apps canvas and model-driven application development for enterprise workflows",
            "Complex system integrations using Power Platform connectors and custom APIs", 
            "Microsoft Dynamics 365 customization and extension development with C#",
            "Power Automate workflow automation for business process optimization",
            "Cross-platform data integration and real-time synchronization solutions",
            "Technical consulting and solution architecture for digital transformation projects"
          ]
        },
        {
          title: "Business Operations Director & Team Leader",
          company: "Hospitality Sector",
          duration: "10+ years",
          type: "Led comprehensive business transformations across premium venues with P&L responsibility and multi-unit management",
          responsibilities: [
            "Strategic team leadership and talent development across diverse business units (teams of up to 50 people)",
            "Extensive experience operating in high-end environments: luxury hotels, Michelin-starred restaurants, and premium catering services",
            "Multi-unit business management including franchise operations and independent business units",
            "Certified professional training programs design and implementation (certified instructor)",
            "Business process optimization, quality control systems, and operational excellence initiatives",
            "Financial management: budget planning, cost control, revenue optimization, and KPI-driven performance analysis",
            "Stakeholder management and vendor negotiations for supply chain optimization and strategic partnerships"
          ]
        }
      ]
    },
    
    // Projects Section
    projects: {
      title: "Projects",
      filters: {
        featured: "Featured Projects",
        all: "All Projects",
        fullstack: "Full Stack",
        frontend: "Frontend",
        backend: "Backend",
        powerplatform: "Power Platform", 
        ai: "AI & Machine Learning",
        azure: "Azure Cloud",
        management: "Project Management"
      },
      categories: {
        featured: "Featured Projects",
        all: "All Projects",
        fullstack: "Full Stack", 
        frontend: "Frontend",
        backend: "Backend",
        powerplatform: "Power Platform",
        ai: "AI & Machine Learning", 
        azure: "Azure Cloud",
        management: "Project Management"
      },
      viewProject: "View Project",
      viewCode: "View Code",
      viewDemo: "View Demo",
      viewScreenshots: "View Screenshots",
      comingSoon: "Coming Soon",
      inProgress: "In Progress",
      completed: "Completed"
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
        phone: "+34 612 05 95",
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
      about: "Perfil",
      education: "Formación",
      experience: "Experiencia", 
      projects: "Proyectos",
      contact: "Contacto",
      language: "EN"
    },// Hero Section
    hero: {
      greeting: "Hola, soy",
      name: "Rubén Álvarez",
      title: "Consultor Tech\nScrum Master\nDesarrollador Full Stack",
      description: "Más de 20 años transformando empresas a través de tecnología y liderazgo. Especializado en desarrollo web, automatización Microsoft Power Platform y gestión ágil de equipos.",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame"
    },
    
    // Profile Section
    profile: {
      title: "About me",
      languages: "profile.languages",
      description: "Profesional técnico especializado en liderazgo de equipos, gestión de proyectos y soluciones tecnológicas. Mi trayectoria me ha proporcionado amplia experiencia dirigiendo grupos de trabajo durante más de 10 años, conectando con las personas y comprendiendo las verdaderas necesidades del cliente.\n\nMe destaco comunicándome eficazmente, orientando y guiando a los profesionales, así como atendiendo y comprendiendo a los clientes y sus requerimientos. Alineo estas capacidades con los objetivos del proyecto y la empresa para diseñar planes personalizados, coordinar recursos de diferentes disciplinas y ejecutarlos de manera efectiva.",
      hardSkills: {
        title: "Habilidades Técnicas",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas", 
        languages: "Idiomas"
      },
      softSkills: {
        title: "Competencias Clave",
        items: [
          "Desarrollo Web Full Stack (React, Node.js, PHP)",
          "Microsoft Power Platform y Automatización",
          "Scrum Master Certificado y Liderazgo Ágil",
          "Arquitectura de Soluciones y APIs",
          "Gestión de Equipos y Coaching",
          "Optimización de Procesos Empresariales",
          "Análisis de Datos y Gestión de KPIs",
          "Control de Calidad y Testing",
          "Gestión de Crisis y Resolución de Conflictos",
          "Formación y Desarrollo de Equipos"
        ]
      },
      certifications: {
        title: "Certificaciones y Formación",
        items: [
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
            name: "Bootcamp Desarrollador Web Full Stack",
            issuer: "Neoland School, Madrid",
            year: "2023"
          },
          {
            name: "Máster en Pedagogía Educacional COPyDE",
            issuer: "Universidad de Murcia",
            year: "2020"
          },
          {
            name: "Certificado Profesional en Formación de Formadores",
            issuer: "Universidad Antonio de Nebrija, Madrid",
            year: "2019"
          },
          {
            name: "Diploma Avanzado en Desarrollo de Aplicaciones Web (Nivel 5)",
            issuer: "IES Llerna, Lleida Sevilla", 
            year: "2018"
          },
          {
            name: "Diploma Avanzado en Gestión de Servicios de Restauración (Nivel 5)",
            issuer: "IES Atenea and IES Vesta, Sevilla-Murcia",
            year: "2016"
          }
        ]
      }
    },
    
    // Experience Section
    experience: {
      title: "Experiencia Profesional",
      positions: [
        {
          title: "Analista Técnico - Infrastructure Support",
          company: "Accenture, Sevilla",
          duration: "14 meses",
          type: "Especialista en soporte de infraestructura IT proporcionando soluciones técnicas multinivel para clientes empresariales globales",
          responsibilities: [
            "Resolución de incidencias en Gestión de Identidad y Acceso (IAM) y configuración de permisos",
            "Diagnóstico de hardware, despliegue de software y optimización de sistemas operativos multiplataforma",
            "Análisis de infraestructura de red, resolución de problemas de conectividad y optimización de rendimiento",
            "Soporte de aplicaciones empresariales, troubleshooting de integraciones y análisis de compatibilidad",
            "Gestión del ciclo de vida de incidencias: diagnóstico, escalado y coordinación interdepartamental de tickets",
            "Documentación técnica y mantenimiento de base de conocimiento para escenarios complejos de infraestructura"
          ]
        },
        {
          title: "Analista Técnico - Desarrollador Power Apps",
          company: "Arquiconsult, Madrid", 
          duration: "6 meses",
          type: "Especialista en Microsoft Power Platform desarrollando soluciones personalizadas e integraciones empresariales para clientes corporativos",
          responsibilities: [
            "Desarrollo de aplicaciones Power Apps canvas y model-driven para flujos de trabajo empresariales",
            "Integraciones complejas de sistemas usando conectores Power Platform y APIs personalizadas",
            "Personalización y desarrollo de extensiones Microsoft Dynamics 365 con C#",
            "Automatización de flujos de trabajo con Power Automate para optimización de procesos empresariales",
            "Soluciones de integración de datos multiplataforma y sincronización en tiempo real",
            "Consultoría técnica y arquitectura de soluciones para proyectos de transformación digital"
          ]
        },
        {
          title: "Director de Operaciones Empresariales y Líder de Equipos",
          company: "Sector Hotelero",
          duration: "10+ años", 
          type: "Lideré transformaciones empresariales integrales en establecimientos premium con responsabilidad P&L y gestión multi-unidad",
          responsibilities: [
            "Liderazgo estratégico de equipos y desarrollo de talento en diversas unidades de negocio (equipos de hasta 50 personas)",
            "Amplia experiencia operando en entornos de alta gama: hoteles de lujo, restaurantes con estrella Michelin y servicios de catering premium",
            "Gestión empresarial multi-unidad incluyendo operaciones de franquicia y unidades de negocio independientes",
            "Diseño e implementación de programas de formación profesional certificada (instructor certificado)",
            "Optimización de procesos empresariales, sistemas de control de calidad e iniciativas de excelencia operacional",
            "Gestión financiera: planificación presupuestaria, control de costes, optimización de ingresos y análisis de rendimiento basado en KPIs",
            "Gestión de stakeholders y negociaciones con proveedores para optimización de cadena de suministro y alianzas estratégicas"
          ]
        }
      ]
    },
    
    // Expertise Section (Services + Experience combined)
    expertise: {
      title: "Experiencia y Especialidades",
      subtitle: "Tres vías especializadas para transformar tu negocio a través de tecnología y liderazgo",
      areas: [
        {
          id: "fullstack",
          title: "Desarrollo Full Stack",
          description: "Desarrollo completo de aplicaciones web con tecnologías modernas y mejores prácticas. Desde interfaces frontend hasta sistemas backend robustos.",
          experience: "14+ meses en Accenture + 6 meses en Arquiconsult",
          technologies: ["React", "Node.js", "PHP", "Laravel", "MySQL", "JavaScript", "HTML", "CSS"],
          achievements: [
            "Desarrollo y automatización en Power Platform",
            "Servicio técnico remoto para socios internacionales",
            "Desarrollo de aplicaciones web personalizadas",
            "Diseño e implementación de APIs",
            "Arquitectura y optimización de bases de datos",
            "Optimización de rendimiento y escalabilidad"
          ]
        },
        {
          id: "powerplatform",
          title: "Soluciones Power Platform",
          description: "Automatización de procesos empresariales y soluciones corporativas usando Microsoft Power Platform. Optimiza operaciones y aumenta la productividad.",
          experience: "20 meses de experiencia combinada en Accenture y Arquiconsult",
          technologies: ["Power Apps", "Power Automate", "Power BI", "Dynamics 365", "Azure", "Microsoft 365"],
          achievements: [
            "Desarrollo de aplicaciones canvas y model-driven en Power Apps",
            "Automatización de flujos con Power Automate",
            "Integración con Microsoft Dynamics 365",
            "Análisis y optimización de procesos empresariales",
            "Conectores personalizados e integración de APIs",
            "Soluciones y consultoría para clientes empresariales"
          ]
        },
        {
          id: "leadership",
          title: "Liderazgo de Equipos y Scrum",
          description: "Liderazgo ágil de equipos y optimización de procesos con experiencia probada gestionando equipos de más de 20 personas en entornos de transformación.",
          experience: "10+ años en sector hotelero + certificación Scrum Master",
          technologies: ["Scrum", "Agile", "Gestión de KPIs", "Optimización de Procesos", "Desarrollo de Equipos"],
          achievements: [
            "Lideré transformaciones empresariales completas en múltiples establecimientos",
            "Gestión de equipos multifuncionales (más de 20 personas)",
            "Implementación de metodología ágil y coaching Scrum",
            "Implementación de sistemas de gestión de calidad",
            "Programas de formación y desarrollo de personal",
            "Gestión de stakeholders y construcción de relaciones con clientes"
          ]
        }
      ]
    },
    
    // Projects Section
    projects: {
      title: "Proyectos",
      filters: {
        featured: "Proyectos Destacados",
        all: "Todos los Proyectos",
        fullstack: "Full Stack",
        frontend: "Frontend",
        backend: "Backend",
        powerplatform: "Power Platform",
        ai: "IA y Machine Learning",
        azure: "Azure Cloud",
        management: "Gestión de Proyectos"
      },
      categories: {
        featured: "Proyectos Destacados",
        all: "Todos los Proyectos",
        fullstack: "Desarrollo Full Stack",
        frontend: "Desarrollo Frontend",
        backend: "Desarrollo Backend",
        powerplatform: "Microsoft Power Platform",
        ai: "IA y Machine Learning",
        azure: "Microsoft Azure Cloud",
        management: "Gestión de Proyectos y Equipos"
      },
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      viewDemo: "Ver Demo",
      viewScreenshots: "Ver Capturas",
      comingSoon: "Próximamente",
      inProgress: "En Progreso",
      completed: "Completado"
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
        phone: "+34 612 05 95",
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
