// Projects data with embedded bilingual translations
export const projectsData = [
  // Featured Projects
  {
    id: 20,
    order: 1,
    category: "frontend",
    technologies: ["React", "DnD Kit", "LocalStorage", "CSS3", "JavaScript"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format",
    liveUrl: "https://trello-clone-demo.com",
    githubUrl: "https://github.com/user/trello-clone",
    demoType: "live",
    featured: true,
    status: "completed",
    translations: {
      title: {
        en: "Trello Clone - Task Manager",
        es: "Trello Clone - Gestor de Tareas"
      },
      description: {
        en: "Complete Trello clone with drag & drop, board, list, and card management. Persistence with localStorage and intuitive interface.",
        es: "Clon completo de Trello con drag & drop, gestión de tableros, listas y tarjetas. Persistencia con localStorage e interfaz intuitiva."
      }
    }
  },
  {
    id: 21,
    order: 2,
    category: "frontend",
    technologies: ["React", "TMDB API", "Axios", "React Router", "CSS3"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=250&fit=crop&auto=format",
    liveUrl: "https://tmdb-flix-demo.com",
    githubUrl: "https://github.com/user/tmdb-flix",
    demoType: "live",
    featured: true,
    status: "completed",
    translations: {
      title: {
        en: "TMDB Flix - Movie Database",
        es: "TMDB Flix - Base de Datos de Películas"
      },
      description: {
        en: "Movie and series app consuming the TMDB API. Search, filters, details, favorites, and Netflix-style responsive design.",
        es: "App de películas y series consumiendo la API de TMDB. Búsqueda, filtros, detalles, favoritos y diseño responsive estilo Netflix."
      }
    }
  },
  {
    id: 22,
    order: 3,
    category: "fullstack",
    technologies: ["React", "Laravel", "PHP", "MySQL", "REST API", "Authentication"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: "https://github.com/user/restaurant-booking",
    demoType: "code",
    featured: true,
    status: "inProgress",
    translations: {
      title: {
        en: "Restaurant Booking System",
        es: "Sistema de Reservas de Restaurante"
      },
      description: {
        en: "Complete restaurant booking system. Frontend in React, backend in Laravel (PHP), and MySQL database. Table, schedule, and client management.",
        es: "Sistema completo de reservas para restaurantes. Frontend en React, backend en Laravel (PHP) y base de datos MySQL. Gestión de mesas, horarios y clientes."
      }
    }
  },
  // Full Stack Projects
  {
    id: 1,
    order: 4,
    category: "fullstack",
    technologies: ["React", "Laravel", "PHP", "MySQL", "Chart.js", "RESTful API"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "code",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Inventory Management System",
        es: "Sistema de Gestión de Inventario"
      },
      description: {
        en: "Complete stock and inventory control system with automatic alerts, movement reports, supplier integration and admin dashboard.",
        es: "Sistema completo de control de stock e inventario con alertas automáticas, reportes de movimientos, integración con proveedores y dashboard administrativo."
      }
    }
  },
  // Frontend Projects
  {
    id: 2,
    order: 5,
    category: "frontend",
    technologies: ["React", "Chart.js", "CSS3", "Responsive Design", "JavaScript"],
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "code",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Restaurant Business Metrics Dashboard",
        es: "Dashboard de Métricas para Restaurantes"
      },
      description: {
        en: "Modern interface for restaurant KPI visualization: sales, costs, staff performance, customer satisfaction with interactive charts and export reports.",
        es: "Interface moderna para visualización de KPIs de restaurantes: ventas, costos, rendimiento del personal, satisfacción del cliente con gráficos interactivos y reportes exportables."
      }
    }
  },
  {
    id: 3,
    order: 6,
    category: "frontend",
    technologies: ["React", "Chart.js", "CSS3", "Responsive Design", "JavaScript"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "code",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Inventory Management Frontend",
        es: "Frontend de Gestión de Inventario"
      },
      description: {
        en: "Frontend interface for inventory system with real-time stock visualization, alerts dashboard and supplier management.",
        es: "Interface frontend para sistema de inventario con visualización de stock en tiempo real, dashboard de alertas y gestión de proveedores."
      }
    }
  },
  {
    id: 4,
    order: 7,
    category: "frontend",
    technologies: ["React", "CSS3", "JavaScript", "Responsive Design", "Forms"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "code",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Staff Cost Management Portal",
        es: "Portal de Gestión de Costos de Personal"
      },
      description: {
        en: "Hospitality staff cost management tool with scheduling, payroll calculation, operational team management for restaurants, hotels and catering.",
        es: "Herramienta de gestión de costos de personal con horarios, cálculo de nóminas, gestión operativa de equipos para restaurantes, hoteles y catering."
      }
    }
  },
  // Backend Projects
  {
    id: 5,
    order: 8,
    category: "backend",
    technologies: ["Laravel", "PHP", "MySQL", "JWT", "RESTful API", "Validation"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "code",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Inventory Management API",
        es: "API de Gestión de Inventario"
      },
      description: {
        en: "RESTful API for inventory system with stock control, automatic alerts, supplier integration and movement tracking.",
        es: "API RESTful para sistema de inventario con control de stock, alertas automáticas, integración con proveedores y seguimiento de movimientos."
      }
    }
  },
  {
    id: 6,
    order: 9,
    category: "backend",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Cloud Storage", "File Processing"],
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "code",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Document Management API",
        es: "API de Gestión Documental"
      },
      description: {
        en: "Backend service for document storage, version control, access permissions and automated backup with cloud integration.",
        es: "Servicio backend para almacenamiento de documentos, control de versiones, permisos de acceso y backup automatizado con integración cloud."
      }
    }
  },
  // Power Platform Projects
  {
    id: 7,
    order: 10,
    category: "powerplatform",
    technologies: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "Dataverse"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "screenshots",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Business Expense Control App",
        es: "App de Control de Gastos Empresariales"
      },
      description: {
        en: "Power Apps application for business expense registration and approval with automated validation flows and reports.",
        es: "Aplicación Power Apps para registro y aprobación de gastos empresariales con flujos automatizados de validación y reportes."
      }
    }
  },
  {
    id: 8,
    order: 11,
    category: "powerplatform",
    technologies: ["Power Apps", "Dataverse", "Power Automate", "Power BI", "SharePoint"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "screenshots",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Supplier Management System",
        es: "Sistema de Gestión de Proveedores"
      },
      description: {
        en: "Power Apps platform for comprehensive supplier management with evaluations, contracts and automated delivery tracking.",
        es: "Plataforma Power Apps para gestión integral de proveedores con evaluaciones, contratos y seguimiento de entregas automatizado."
      }
    }
  },
  {
    id: 9,
    order: 12,
    category: "powerplatform",
    technologies: ["Power Apps", "Power Automate", "Teams Integration", "Power BI", "Mobile"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "screenshots",
    featured: false,
    status: "inProgress",
    translations: {
      title: {
        en: "Maintenance Request Portal",
        es: "Portal de Solicitudes de Mantenimiento"
      },
      description: {
        en: "Power Apps for maintenance request management with automatic assignment, tracking and efficiency reports.",
        es: "App Power Apps para gestión de solicitudes de mantenimiento con asignación automática, seguimiento y reportes de eficiencia."
      }
    }
  },
  // AI Projects
  {
    id: 10,
    order: 13,
    category: "ai",
    technologies: ["Python", "OpenAI API", "RAG", "Vector Database", "LangChain", "FastAPI"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "code",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "RAG System with Enterprise Data",
        es: "Sistema RAG con Datos Empresariales"
      },
      description: {
        en: "Custom AI agent with RAG system for queries on private company documentation, policies and internal procedures.",
        es: "Agente IA personalizado con sistema RAG para consultas sobre documentación privada de empresa, políticas y procedimientos internos."
      }
    }
  },
  {
    id: 11,
    order: 14,
    category: "ai",
    technologies: ["Python", "OpenAI API", "Natural Language Processing", "React", "WebSocket"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "code",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Customer Service Chatbot",
        es: "Chatbot de Atención al Cliente"
      },
      description: {
        en: "Intelligent virtual assistant for 24/7 customer service with CRM integration and automatic escalation to human agents.",
        es: "Asistente virtual inteligente para atención al cliente 24/7 con integración a sistemas CRM y escalado automático a agentes humanos."
      }
    }
  },
  // Azure Projects
  {
    id: 12,
    order: 15,
    category: "azure",
    technologies: ["Azure App Service", "Azure SQL Database", "Azure Storage", "Migration Tools"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "screenshots",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Legacy Application Migration",
        es: "Migración de Aplicaciones Legacy"
      },
      description: {
        en: "Legacy application migration process to Azure Cloud with cost optimization and performance improvement.",
        es: "Proceso de migración de aplicaciones heredadas a Azure Cloud con optimización de costos y mejora de rendimiento."
      }
    }
  },
  {
    id: 13,
    order: 16,
    category: "azure",
    technologies: ["Azure Monitor", "Application Insights", "Log Analytics", "Azure Alerts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "screenshots",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Azure Monitoring Infrastructure",
        es: "Infraestructura de Monitoreo Azure"
      },
      description: {
        en: "Implementation of comprehensive monitoring system with Azure Monitor, automatic alerts and performance dashboards.",
        es: "Implementación de sistema de monitoreo integral con Azure Monitor, alertas automáticas y dashboards de rendimiento."
      }
    }
  },
  {
    id: 14,
    order: 17,
    category: "azure",
    technologies: ["Azure Backup", "Azure Site Recovery", "Recovery Services", "Automation"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "screenshots",
    featured: false,
    status: "planned",
    translations: {
      title: {
        en: "Backup and Recovery Strategy",
        es: "Estrategia de Backup y Recuperación"
      },
      description: {
        en: "Design and implementation of business continuity plan with Azure Backup and automated disaster recovery.",
        es: "Diseño e implementación de plan de continuidad de negocio con Azure Backup y disaster recovery automatizado."
      }
    }
  },
  // Management Projects
  {
    id: 15,
    order: 18,
    category: "management",
    technologies: ["Excel", "VBA", "Power Query", "Pivot Tables", "Data Analysis", "KPIs"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "screenshots",
    featured: false,
    status: "completed",
    translations: {
      title: {
        en: "Supplier Analysis System",
        es: "Sistema de Análisis de Proveedores"
      },
      description: {
        en: "Advanced Excel dashboard for supplier performance analysis, negotiations, cost control and purchasing optimization for restaurants and hotels.",
        es: "Dashboard Excel avanzado para análisis de rendimiento de proveedores, negociaciones, control de costos y optimización de compras."
      }
    }
  },
  {
    id: 16,
    order: 19,
    category: "management",
    technologies: ["Excel", "Financial Modeling", "Cash Flow Analysis", "VBA", "Charts"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "screenshots",
    featured: false,
    status: "completed",
    translations: {
      title: {
        en: "Cash Flow and Profitability Control",
        es: "Control de Flujos de Caja y Rentabilidad"
      },
      description: {
        en: "Excel system for comprehensive financial management: cash flows, profitability analysis, expense control and financial projections.",
        es: "Sistema Excel para gestión financiera integral: flujos de caja, análisis de rentabilidad, control de gastos y proyecciones financieras."
      }
    }
  },
  {
    id: 17,
    order: 20,
    category: "management",
    technologies: ["Excel", "Power BI", "KPI Dashboard", "Budget Planning", "Resource Management"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "screenshots",
    featured: false,
    status: "completed",
    translations: {
      title: {
        en: "Comprehensive Business Management Dashboard",
        es: "Dashboard de Gestión Integral de Negocio"
      },
      description: {
        en: "Executive control panel with business KPIs, staff budgeting, raw material control and operational performance analysis.",
        es: "Panel de control ejecutivo con KPIs de negocio, presupuestación de personal, control de materias primas y análisis de rendimiento operacional."
      }
    }
  },
  {
    id: 18,
    order: 21,
    category: "management",
    technologies: ["Excel", "VBA", "Financial Planning", "Goal Tracking", "Budget Analysis", "Forecasting"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format",
    liveUrl: null,
    githubUrl: null,
    demoType: "screenshots",
    featured: false,
    status: "completed",
    translations: {
      title: {
        en: "Budget Calculator and Goals Tracker",
        es: "Calculadora de Presupuestos y Seguimiento de Objetivos"
      },
      description: {
        en: "Advanced Excel calculator for budget planning, goal setting, ROI analysis and financial projections for hospitality businesses.",
        es: "Herramienta Excel para cálculo de presupuestos empresariales, seguimiento de objetivos financieros, análisis de desviaciones y proyecciones de crecimiento."
      }
    }
  }
];

// Project categories with order for filtering
export const projectCategories = [
  { id: "featured", order: 0 },
  { id: "all", order: 1 },
  { id: "fullstack", order: 2 },
  { id: "frontend", order: 3 },
  { id: "backend", order: 4 },
  { id: "powerplatform", order: 5 },
  { id: "ai", order: 6 },
  { id: "azure", order: 7 },
  { id: "management", order: 8 }
];
