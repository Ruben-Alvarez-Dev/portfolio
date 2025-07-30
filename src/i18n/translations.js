  // Sistema de internacionalización para el portfolio
export const translations = {
  en: {
    // Header & Navigation
    nav: {
      home: "Home",
      about: "About",
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
      description: "10+ years coordinating teams, resources and operations with focus on process optimization, client relations and business negotiation. I apply strong communication skills and operational expertise to connect business needs with technological solutions.",
      downloadCV: "Download CV",
      contactMe: "Contact me",
      scrollToExplore: "Scroll to explore"
    },

    // About Section
    profile: {
      title: "About me",
      description: "I transform business challenges into digital solutions. My operational background gives me unique insight into what actually needs to be built.\n\nHaving managed the problems that technology solves, I naturally connect technical teams with business reality. I speak both languages fluently.\n\nCurrently mastering web development and agile practices while leveraging my process optimization expertise to deliver solutions that work in the real world.",
      hardSkills: {
        title: "Technical Skills",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools",
        languages: "Languages"
      },
      softSkills: {
        title: "Core Competencies",
        families: {
          development: {
            color: "tech",
            items: [
              "Full Stack Web Development (React, Node.js, PHP)",
              "Microsoft Power Platform & Process Automation",
              "Solution Architecture & API Design"
            ]
          },
          management: {
            color: "management",
            items: [
              "Certified Scrum Master & Agile Leadership",
              "Team Leadership & Development",
              "Project Management & Coordination",
              "Strategic Team Planning & Resource Allocation"
            ]
          },
          strategy: {
            color: "strategy",
            items: [
              "Process Optimization & Analytics",
              "Business Intelligence & KPI Management",
              "Strategic Planning & Implementation",
              "Cross-functional Collaboration & Stakeholder Management"
            ]
          }
        }
      },
      certifications: {
        title: "Certifications & Education",
        items: [
          {
            name: "Scrum Master Certificate (PSM I)",
            issuer: "Scrum.org",
            year: "2024",
            type: "certification",
            order: 1,
            featured: true
          },
          {
            name: "Azure Fundamentals AZ-900",
            issuer: "Microsoft Corporation",
            year: "2024",
            type: "certification",
            order: 2,
            featured: true
          },
          {
            name: "Power Platform Fundamentals PL-900",
            issuer: "Microsoft Corporation",
            year: "2024",
            type: "certification",
            order: 3,
            featured: true
          },
          {
            name: "Full Stack Web Developer Bootcamp",
            issuer: "Neoland School, Madrid",
            year: "2023",
            type: "title",
            order: 4,
            featured: true
          },
          {
            name: "Master's in Educational Pedagogy COPyDE",
            issuer: "Universidad de Murcia",
            year: "2020",
            type: "title",
            order: 5
          },
          {
            name: "Professional Certificate in Train-the-Trainer",
            issuer: "Universidad Antonio de Nebrija, Madrid",
            year: "2019",
            type: "certification",
            order: 6
          },
          {
            name: "Advanced Diploma in Web Application Development (Level 5)",
            issuer: "IES Llerna, Lleida Sevilla",
            year: "2018",
            type: "title",
            order: 7
          },
          {
            name: "Advanced Diploma in Restaurant Service Management (Level 5)",
            issuer: "IES Atenea and IES Vesta, Sevilla-Murcia",
            year: "2016",
            type: "title",
            order: 8
          }
        ]
      }
    },
    
    // Experience Section
    experience: {
      title: "Experience",
      positions: [
        {
          title: "Tech Analyst - Infrastructure Support",
          company: "Accenture, Seville",
          duration: "14 months",
          year: "2024",
          type: "IT Infrastructure specialist delivering technical solutions for global enterprise clients",
          responsibilities: [
            "Identity and Access Management (IAM) configuration and troubleshooting",
            "Enterprise application support and system integration analysis",
            "Incident management: diagnosis, escalation, and cross-team coordination",
            "Technical documentation and knowledge base maintenance"
          ]
        },
        {
          title: "Tech Analyst - Power Apps Developer", 
          company: "Arquiconsult, Madrid",
          duration: "6 months",
          year: "2023",
          type: "Microsoft Power Platform developer creating custom solutions for corporate clients",
          responsibilities: [
            "Power Apps canvas and model-driven application development",
            "System integrations using Power Platform connectors and APIs", 
            "Microsoft Dynamics 365 customization with C#",
            "Power Automate workflow automation for process optimization",
            "Technical consulting and solution architecture"
          ]
        },
        {
          title: "Business Operations Director & Team Leader",
          company: "Hospitality Sector",
          duration: "10+ years",
          year: "2013-2023",
          type: "Led comprehensive business operations with P&L responsibility and multi-unit management",
          responsibilities: [
            "Team leadership and talent development (managed teams of up to 50 people)",
            "Multi-unit business management including franchise operations",
            "Business process optimization and quality control systems",
            "Budget planning, cost control, and KPI-driven performance analysis",
            "Stakeholder management and vendor negotiations",
            "Professional training program design and implementation (certified instructor)"
          ]
        }
      ]
    },
    
    // Projects Section
    projects: {
      title: "Projects",
      filters: {
        fullstack: "Full Stack",
        frontend: "Frontend",
        backend: "Backend",
        powerplatform: "Power Platform",
        ai: "AI & Machine Learning",
        azure: "Azure",
        management: "Project Management",
        featured: "Featured",
        all: "All"
      },
      categories: {
        fullstack: "Full Stack",
        frontend: "Frontend",
        backend: "Backend",
        powerplatform: "Power Platform",
        ai: "AI & Machine Learning",
        azure: "Azure",
        management: "Project Management",
        featured: "Featured",
        all: "All"
      },
      categoryList: ["featured", "all", "fullstack", "frontend", "backend", "powerplatform", "ai", "azure", "management"],
      viewProject: "Demo",
      viewCode: "Code",
      viewScreenshots: "Screenshots",
      comingSoon: "Coming Soon",
      inProgress: "In Progress",
      completed: "Completed",
      status: {
        completed: "Completed",
        inProgress: "In Progress",
        planned: "Planned"
      },
      noProjects: "No projects found for this category.",
      items: [
        // Full Stack Projects (planned/pending)
        {
          id: 1,
          title: "Inventory Management System",
          description: "Complete stock and inventory control system with automatic alerts, movement reports, supplier integration and admin dashboard.",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "Laravel", "PHP", "MySQL", "Chart.js", "RESTful API"],
          category: "fullstack",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        // Frontend Projects (planned/pending)
        {
          id: 2,
          title: "Restaurant Business Metrics Dashboard",
          description: "Modern interface for restaurant KPI visualization: sales, costs, staff performance, customer satisfaction with interactive charts and export reports.",
          image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "Chart.js", "CSS3", "Responsive Design", "JavaScript"],
          category: "frontend",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        {
          id: 3,
          title: "Inventory Management Frontend",
          description: "Frontend interface for inventory system with real-time stock visualization, alerts dashboard and supplier management.",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "Chart.js", "CSS3", "Responsive Design", "JavaScript"],
          category: "frontend",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        {
          id: 4,
          title: "Staff Cost Management Portal",
          description: "Hospitality staff cost management tool with scheduling, payroll calculation, operational team management for restaurants, hotels and catering.",
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "CSS3", "JavaScript", "Responsive Design", "Forms"],
          category: "frontend",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        // Backend Projects (planned/pending)
        {
          id: 5,
          title: "Inventory Management API",
          description: "RESTful API for inventory system with stock control, automatic alerts, supplier integration and movement tracking.",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&auto=format",
          technologies: ["Laravel", "PHP", "MySQL", "JWT", "RESTful API", "Validation"],
          category: "backend",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        {
          id: 6,
          title: "Document Management API",
          description: "Backend service for document storage, version control, access permissions and automated backup with cloud integration.",
          image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop&auto=format",
          technologies: ["Node.js", "Express", "MongoDB", "JWT", "Cloud Storage", "File Processing"],
          category: "backend",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        // Power Platform Projects (planned/pending)
        {
          id: 7,
          title: "Business Expense Control App",
          description: "Power Apps application for business expense registration and approval with automated validation flows and reports.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format",
          technologies: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "Dataverse"],
          category: "powerplatform",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "planned"
        },
        {
          id: 8,
          title: "Supplier Management System",
          description: "Power Apps platform for comprehensive supplier management with evaluations, contracts and automated delivery tracking.",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format",
          technologies: ["Power Apps", "Dataverse", "Power Automate", "Power BI", "SharePoint"],
          category: "powerplatform",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "planned"
        },
        {
          id: 9,
          title: "Maintenance Request Portal",
          description: "Power Apps for maintenance request management with automatic assignment, tracking and efficiency reports.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&auto=format",
          technologies: ["Power Apps", "Power Automate", "Teams Integration", "Power BI", "Mobile"],
          category: "powerplatform",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "in-progress"
        },
        // AI Projects (planned/pending)
        {
          id: 10,
          title: "RAG System with Enterprise Data",
          description: "Custom AI agent with RAG system for queries on private company documentation, policies and internal procedures.",
          image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop&auto=format",
          technologies: ["Python", "OpenAI API", "RAG", "Vector Database", "LangChain", "FastAPI"],
          category: "ai",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        {
          id: 11,
          title: "Customer Service Chatbot",
          description: "Intelligent virtual assistant for 24/7 customer service with CRM integration and automatic escalation to human agents.",
          image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&auto=format",
          technologies: ["Python", "OpenAI API", "Natural Language Processing", "React", "WebSocket"],
          category: "ai",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        // Azure Projects (planned/pending)
        {
          id: 12,
          title: "Legacy Application Migration",
          description: "Legacy application migration process to Azure Cloud with cost optimization and performance improvement.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format",
          technologies: ["Azure App Service", "Azure SQL Database", "Azure Storage", "Migration Tools"],
          category: "azure",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "planned"
        },
        {
          id: 13,
          title: "Azure Monitoring Infrastructure",
          description: "Implementation of comprehensive monitoring system with Azure Monitor, automatic alerts and performance dashboards.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
          technologies: ["Azure Monitor", "Application Insights", "Log Analytics", "Azure Alerts"],
          category: "azure",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "planned"
        },
        {
          id: 14,
          title: "Backup and Recovery Strategy",
          description: "Design and implementation of business continuity plan with Azure Backup and automated disaster recovery.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format",
          technologies: ["Azure Backup", "Azure Site Recovery", "Recovery Services", "Automation"],
          category: "azure",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "planned"
        },
        // Management Projects (Excel-based, hospitality focused - all completed)
        {
          id: 15,
          title: "Budget Calculator and Goals Tracker",
          description: "Advanced Excel calculator for budget planning, goal setting, ROI analysis and financial projections for hospitality businesses.",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format",
          technologies: ["Excel", "VBA", "Financial Modeling", "Goal Tracking", "ROI Analysis", "Charts"],
          category: "management",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "completed"
        },
        {
          id: 16,
          title: "Supplier Analysis System",
          description: "Advanced Excel dashboard for supplier performance analysis, negotiations, cost control and purchasing optimization for restaurants and hotels.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&auto=format",
          technologies: ["Excel", "VBA", "Power Query", "Pivot Tables", "Data Analysis", "KPIs"],
          category: "management",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "completed"
        },
        {
          id: 17,
          title: "Cash Flow and Profitability Control",
          description: "Excel system for comprehensive financial management: cash flows, profitability analysis, expense control and financial projections for hospitality sector.",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format",
          technologies: ["Excel", "Financial Modeling", "Cash Flow Analysis", "VBA", "Charts"],
          category: "management",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "completed"
        },
        {
          id: 18,
          title: "Comprehensive Business Management Dashboard",
          description: "Executive control panel with business KPIs, staff budgeting, raw material control and operational performance analysis for restaurants, hotels and catering.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
          technologies: ["Excel", "Power BI", "KPI Dashboard", "Budget Planning", "Resource Management"],
          category: "management",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "completed"
        },
        // Featured projects (same as Spanish section)
        {
          id: 20,
          title: "Trello Clone - Task Manager",
          description: "Complete Trello clone with drag & drop, board, list, and card management. Persistence with localStorage and intuitive interface.",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "DnD Kit", "LocalStorage", "CSS3", "JavaScript"],
          category: "frontend",
          liveUrl: "https://trello-clone-demo.com",
          githubUrl: "https://github.com/user/trello-clone",
          demoType: "live",
          featured: true,
          status: "completed"
        },
        {
          id: 21,
          title: "TMDB Flix - Movie Database",
          description: "Movie and series app consuming the TMDB API. Search, filters, details, favorites, and Netflix-style responsive design.",
          image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "TMDB API", "Axios", "React Router", "CSS3"],
          category: "frontend",
          liveUrl: "https://tmdb-flix-demo.com",
          githubUrl: "https://github.com/user/tmdb-flix",
          demoType: "live",
          featured: true,
          status: "completed"
        },
        {
          id: 22,
          title: "Restaurant Booking System",
          description: "Complete restaurant booking system. Frontend in React, backend in Laravel (PHP), and MySQL database. Table, schedule, and client management.",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "Laravel", "PHP", "MySQL", "REST API", "Authentication"],
          category: "fullstack",
          liveUrl: null,
          githubUrl: "https://github.com/user/restaurant-booking",
          demoType: "code",
          featured: true,
          status: "in-progress"
        }
      ]
    },
    
    // Contact Section
    contact: {
      title: "Contact",
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
        phone: "+34 612 505 748",
        location: "Spain (Travel Available)",
        github: "Ruben-Alvarez-Dev",
        linkedin: "ruben-alvarez-dev"
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
      title: "Rubén Álvarez",
      description: "Full Stack Developer specialized in creating innovative and scalable digital solutions.",
      quickLinks: "Quick Links",
      connect: "Connect With Me",
      copyright: "Rubén Álvarez. All rights reserved."
    }
  },
  
  es: {
    // Header & Navigation
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      education: "Formación",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      language: "EN"
    },
    
    // Hero Section
    hero: {
      greeting: "Hola, soy",
      name: "Rubén Álvarez",
      title: "Consultor Tech\nScrum Master\nDesarrollador Full Stack",
      description: "10+ años coordinando equipos, recursos y operaciones con enfoque en optimización de procesos, relaciones con clientes y negociación empresarial. Aplico sólidas habilidades comunicativas y experiencia operativa para conectar necesidades de negocio con soluciones tecnológicas.",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame",
      scrollToExplore: "Desplázate para explorar"
    },
    
    // About Section
    profile: {
      title: "Perfil",
      description: "Transformo desafíos de negocio en soluciones digitales. Mi experiencia operativa me da una visión única de lo que realmente necesita construirse.\n\nHabiendo gestionado los problemas que la tecnología resuelve, conecto naturalmente equipos técnicos con la realidad del negocio. Hablo ambos idiomas con fluidez.\n\nActualmente dominando desarrollo web y prácticas ágiles mientras aprovecho mi expertise en optimización de procesos para entregar soluciones que funcionan en el mundo real.",
      hardSkills: {
        title: "Habilidades Técnicas",
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas",
        languages: "Idiomas"
      },
      softSkills: {
        title: "Competencias Clave",
        families: {
          development: {
            color: "tech",
            items: [
              "Desarrollo Web Full Stack (React, Node.js, PHP)",
              "Microsoft Power Platform y Automatización",
              "Arquitectura de Soluciones y APIs"
            ]
          },
          management: {
            color: "management",
            items: [
              "Scrum Master Certificado y Liderazgo Ágil",
              "Liderazgo de Equipos y Desarrollo",
              "Gestión de Proyectos y Coordinación",
              "Planificación Estratégica de Equipos y Asignación de Recursos"
            ]
          },
          strategy: {
            color: "strategy",
            items: [
              "Optimización de Procesos y Analítica",
              "Inteligencia de Negocio y Gestión de KPIs",
              "Planificación Estratégica e Implementación",
              "Colaboración Interfuncional y Gestión de Stakeholders"
            ]
          }
        }
      },
      certifications: {
        title: "Certificaciones y Formación",
        items: [
          {
            name: "Certificado Scrum Master (PSM I)",
            issuer: "Scrum.org",
            year: "2024",
            type: "certification",
            order: 1,
            featured: true
          },
          {
            name: "Azure Fundamentals AZ-900",
            issuer: "Microsoft Corporation",
            year: "2024",
            type: "certification",
            order: 2,
            featured: true
          },
          {
            name: "Power Platform Fundamentals PL-900",
            issuer: "Microsoft Corporation",
            year: "2024",
            type: "certification",
            order: 3,
            featured: true
          },
          {
            name: "Bootcamp Desarrollador Web Full Stack",
            issuer: "Neoland School, Madrid",
            year: "2023",
            type: "title",
            order: 4,
            featured: true
          },
          {
            name: "Máster en Pedagogía Educacional COPyDE",
            issuer: "Universidad de Murcia",
            year: "2020",
            type: "title",
            order: 5
          },
          {
            name: "Certificado Profesional en Formación de Formadores",
            issuer: "Universidad Antonio de Nebrija, Madrid",
            year: "2019",
            type: "certification",
            order: 6
          },
          {
            name: "Diploma Avanzado en Desarrollo de Aplicaciones Web (Nivel 5)",
            issuer: "IES Llerna, Lleida Sevilla",
            year: "2018",
            type: "title",
            order: 7
          },
          {
            name: "Diploma Avanzado en Gestión de Servicios de Restauración (Nivel 5)",
            issuer: "IES Atenea and IES Vesta, Sevilla-Murcia",
            year: "2016",
            type: "title",
            order: 8
          }
        ]
      }
    },
    
    // Experience Section
    experience: {
      title: "Experiencia",
      positions: [
        {
          title: "Analista Técnico - Infrastructure Support",
          company: "Accenture, Sevilla",
          duration: "14 meses",
          year: "2024",
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
          year: "2023",
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
          year: "2013-2023",
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
        featured: "Destacados",
        all: "Todos",
        fullstack: "Full Stack",
        frontend: "Frontend",
        backend: "Backend",
        powerplatform: "Power Platform",
        ai: "IA y Machine Learning",
        azure: "Azure",
        management: "Gestión de Proyectos"
      },
      categories: {
        featured: "Destacados",
        all: "Todos",
        fullstack: "Full Stack",
        frontend: "Frontend",
        backend: "Backend",
        powerplatform: "Power Platform",
        ai: "IA y Machine Learning",
        azure: "Azure",
        management: "Gestión de Proyectos"
      },
      categoryList: ["featured", "all", "fullstack", "frontend", "backend", "powerplatform", "ai", "azure", "management"],
      viewProject: "Demo",
      viewCode: "Code",
      viewScreenshots: "Screenshots",
      comingSoon: "Próximamente",
      inProgress: "En Progreso",
      completed: "Completado",
      status: {
        completed: "Completado",
        inProgress: "En Progreso",
        planned: "Planificado"
      },
      noProjects: "No se encontraron proyectos para esta categoría.",
      items: [
        // Full Stack Projects (planned/pending)
        {
          id: 1,
          title: "Sistema de Gestión de Inventario",
          description: "Sistema completo de control de stock e inventario con alertas automáticas, reportes de movimientos, integración con proveedores y dashboard administrativo.",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "Laravel", "PHP", "MySQL", "Chart.js", "API RESTful"],
          category: "fullstack",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        // Frontend Projects (planned/pending)
        {
          id: 2,
          title: "Dashboard de Métricas para Restaurantes",
          description: "Interface moderna para visualización de KPIs de restaurantes: ventas, costos, rendimiento del personal, satisfacción del cliente con gráficos interactivos y reportes exportables.",
          image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "Chart.js", "CSS3", "Responsive Design", "JavaScript"],
          category: "frontend",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        {
          id: 3,
          title: "Frontend de Gestión de Inventario",
          description: "Interface frontend para sistema de inventario con visualización de stock en tiempo real, dashboard de alertas y gestión de proveedores.",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "Chart.js", "CSS3", "Responsive Design", "JavaScript"],
          category: "frontend",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        {
          id: 4,
          title: "Portal de Gestión de Costos de Personal",
          description: "Herramienta de gestión de costos de personal con horarios, cálculo de nóminas, gestión operativa de equipos para restaurantes, hoteles y catering.",
          image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "CSS3", "JavaScript", "Responsive Design", "Forms"],
          category: "frontend",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        // Backend Projects (planned/pending)
        {
          id: 5,
          title: "API de Gestión de Inventario",
          description: "API RESTful para sistema de inventario con control de stock, alertas automáticas, integración con proveedores y seguimiento de movimientos.",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&auto=format",
          technologies: ["Laravel", "PHP", "MySQL", "JWT", "API RESTful", "Validation"],
          category: "backend",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        {
          id: 6,
          title: "API de Gestión Documental",
          description: "Servicio backend para almacenamiento de documentos, control de versiones, permisos de acceso y backup automatizado con integración cloud.",
          image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop&auto=format",
          technologies: ["Node.js", "Express", "MongoDB", "JWT", "Cloud Storage", "File Processing"],
          category: "backend",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        // Power Platform Projects (planned/pending)
        {
          id: 7,
          title: "App de Control de Gastos Empresariales",
          description: "Aplicación Power Apps para registro y aprobación de gastos empresariales con flujos automatizados de validación y reportes.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format",
          technologies: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "Dataverse"],
          category: "powerplatform",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "planned"
        },
        {
          id: 8,
          title: "Sistema de Gestión de Proveedores",
          description: "Plataforma Power Apps para gestión integral de proveedores con evaluaciones, contratos y seguimiento de entregas automatizado.",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format",
          technologies: ["Power Apps", "Dataverse", "Power Automate", "Power BI", "SharePoint"],
          category: "powerplatform",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "planned"
        },
        {
          id: 9,
          title: "Portal de Solicitudes de Mantenimiento",
          description: "App Power Apps para gestión de solicitudes de mantenimiento con asignación automática, seguimiento y reportes de eficiencia.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&auto=format",
          technologies: ["Power Apps", "Power Automate", "Teams Integration", "Power BI", "Mobile"],
          category: "powerplatform",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "in-progress"
        },
        // AI Projects (planned/pending)
        {
          id: 10,
          title: "Sistema RAG con Datos Empresariales",
          description: "Agente IA personalizado con sistema RAG para consultas sobre documentación privada de empresa, políticas y procedimientos internos.",
          image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop&auto=format",
          technologies: ["Python", "OpenAI API", "RAG", "Vector Database", "LangChain", "FastAPI"],
          category: "ai",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        {
          id: 11,
          title: "Chatbot de Atención al Cliente",
          description: "Asistente virtual inteligente para atención al cliente 24/7 con integración a sistemas CRM y escalado automático a agentes humanos.",
          image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&auto=format",
          technologies: ["Python", "OpenAI API", "Natural Language Processing", "React", "WebSocket"],
          category: "ai",
          liveUrl: null,
          githubUrl: null,
          demoType: "code",
          featured: false,
          status: "planned"
        },
        // Azure Projects (planned/pending)
        {
          id: 12,
          title: "Migración de Aplicaciones Legacy",
          description: "Proceso de migración de aplicaciones heredadas a Azure Cloud con optimización de costos y mejora de rendimiento.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format",
          technologies: ["Azure App Service", "Azure SQL Database", "Azure Storage", "Migration Tools"],
          category: "azure",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "planned"
        },
        {
          id: 13,
          title: "Infraestructura de Monitoreo Azure",
          description: "Implementación de sistema de monitoreo integral con Azure Monitor, alertas automáticas y dashboards de rendimiento.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
          technologies: ["Azure Monitor", "Application Insights", "Log Analytics", "Azure Alerts"],
          category: "azure",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "planned"
        },
        {
          id: 14,
          title: "Estrategia de Backup y Recuperación",
          description: "Diseño e implementación de plan de continuidad de negocio con Azure Backup y disaster recovery automatizado.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format",
          technologies: ["Azure Backup", "Azure Site Recovery", "Recovery Services", "Automation"],
          category: "azure",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "planned"
        },
        // Management Projects (Excel-based, hospitality focused)
        {
          id: 15,
          title: "Sistema de Análisis de Proveedores",
          description: "Dashboard Excel avanzado para análisis de rendimiento de proveedores, negociaciones, control de costos y optimización de compras.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&auto=format",
          technologies: ["Excel", "VBA", "Power Query", "Pivot Tables", "Data Analysis", "KPIs"],
          category: "management",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "completed"
        },
        {
          id: 16,
          title: "Control de Flujos de Caja y Rentabilidad",
          description: "Sistema Excel para gestión financiera integral: flujos de caja, análisis de rentabilidad, control de gastos y proyecciones financieras.",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format",
          technologies: ["Excel", "Financial Modeling", "Cash Flow Analysis", "VBA", "Charts"],
          category: "management",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "completed"
        },
        {
          id: 17,
          title: "Dashboard de Gestión Integral de Negocio",
          description: "Panel de control ejecutivo con KPIs de negocio, presupuestación de personal, control de materias primas y análisis de rendimiento operacional.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
          technologies: ["Excel", "Power BI", "KPI Dashboard", "Budget Planning", "Resource Management"],
          category: "management",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "completed"
        },
        {
          id: 18,
          title: "Calculadora de Presupuestos y Seguimiento de Objetivos",
          description: "Herramienta Excel para cálculo de presupuestos empresariales, seguimiento de objetivos financieros, análisis de desviaciones y proyecciones de crecimiento.",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format",
          technologies: ["Excel", "VBA", "Financial Planning", "Goal Tracking", "Budget Analysis", "Forecasting"],
          category: "management",
          liveUrl: null,
          githubUrl: null,
          demoType: "screenshots",
          featured: false,
          status: "completed"
        },
        // Proyectos destacados (solo 3 proyectos únicos destacados)
        {
          id: 20,
          title: "Trello Clone - Gestor de Tareas",
          description: "Clon completo de Trello con drag & drop, gestión de tableros, listas y tarjetas. Persistencia con localStorage e interfaz intuitiva.",
          image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "DnD Kit", "LocalStorage", "CSS3", "JavaScript"],
          category: "frontend",
          liveUrl: "https://trello-clone-demo.com",
          githubUrl: "https://github.com/user/trello-clone",
          demoType: "live",
          featured: true,
          status: "completed"
        },
        {
          id: 21,
          title: "TMDB Flix - Base de Datos de Películas",
          description: "App de películas y series consumiendo la API de TMDB. Búsqueda, filtros, detalles, favoritos y diseño responsive estilo Netflix.",
          image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "TMDB API", "Axios", "React Router", "CSS3"],
          category: "frontend",
          liveUrl: "https://tmdb-flix-demo.com",
          githubUrl: "https://github.com/user/tmdb-flix",
          demoType: "live",
          featured: true,
          status: "completed"
        },
        {
          id: 22,
          title: "Sistema de Reservas de Restaurante",
          description: "Sistema completo de reservas para restaurantes. Frontend en React, backend en Laravel (PHP) y base de datos MySQL. Gestión de mesas, horarios y clientes.",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&auto=format",
          technologies: ["React", "Laravel", "PHP", "MySQL", "REST API", "Authentication"],
          category: "fullstack",
          liveUrl: null,
          githubUrl: "https://github.com/user/restaurant-booking",
          demoType: "code",
          featured: true,
          status: "in-progress"
        }
      ]
    },
    
    // Contact Section
    contact: {
      title: "Contacto",
      form: {
        title: "Envíame un mensaje",
        subtitle: "Completa el formulario y te responderé lo antes posible",
        name: "Nombre Completo",
        email: "Dirección de Email",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado correctamente!",
        error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo."
      },
      info: {
        title: "Información de Contacto",
        email: "info@rubenalvarez.dev",
        phone: "+34 612 505 748",
        location: "España (Disponible para Viajar)",
        github: "Ruben-Alvarez-Dev",
        linkedin: "ruben-alvarez-dev"
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
      title: "Rubén Álvarez",
      description: "Desarrollador Full Stack especializado en crear soluciones digitales innovadoras y escalables.",
      quickLinks: "Enlaces Rápidos",
      connect: "Conecta Conmigo",
      copyright: "Rubén Álvarez. Todos los derechos reservados."
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
