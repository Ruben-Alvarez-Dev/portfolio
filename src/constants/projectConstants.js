// Project Status Constants
export const PROJECT_STATUS = {
  COMPLETED: 'completed',
  IN_PROGRESS: 'inProgress',
  PLANNED: 'planned'
};

// Project Status Variants (for Tag component)
export const STATUS_VARIANTS = {
  [PROJECT_STATUS.COMPLETED]: 'success',
  [PROJECT_STATUS.IN_PROGRESS]: 'warning',
  [PROJECT_STATUS.PLANNED]: 'info'
};

// Project Categories Constants
export const PROJECT_CATEGORIES = {
  FEATURED: 'featured',
  ALL: 'all',
  FULLSTACK: 'fullstack',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  POWER_PLATFORM: 'powerplatform',
  AI: 'ai',
  AZURE: 'azure',
  MANAGEMENT: 'management'
};

// Categories configuration with order
export const CATEGORY_CONFIG = [
  { id: PROJECT_CATEGORIES.FEATURED, order: 0 },
  { id: PROJECT_CATEGORIES.ALL, order: 1 },
  { id: PROJECT_CATEGORIES.FULLSTACK, order: 2 },
  { id: PROJECT_CATEGORIES.FRONTEND, order: 3 },
  { id: PROJECT_CATEGORIES.BACKEND, order: 4 },
  { id: PROJECT_CATEGORIES.POWER_PLATFORM, order: 5 },
  { id: PROJECT_CATEGORIES.AI, order: 6 },
  { id: PROJECT_CATEGORIES.AZURE, order: 7 },
  { id: PROJECT_CATEGORIES.MANAGEMENT, order: 8 }
];

// Translation keys for categories
export const CATEGORY_TRANSLATION_KEYS = {
  [PROJECT_CATEGORIES.FEATURED]: 'projects.categories.featured',
  [PROJECT_CATEGORIES.ALL]: 'projects.categories.all',
  [PROJECT_CATEGORIES.FULLSTACK]: 'projects.categories.fullstack',
  [PROJECT_CATEGORIES.FRONTEND]: 'projects.categories.frontend',
  [PROJECT_CATEGORIES.BACKEND]: 'projects.categories.backend',
  [PROJECT_CATEGORIES.POWER_PLATFORM]: 'projects.categories.powerplatform',
  [PROJECT_CATEGORIES.AI]: 'projects.categories.ai',
  [PROJECT_CATEGORIES.AZURE]: 'projects.categories.azure',
  [PROJECT_CATEGORIES.MANAGEMENT]: 'projects.categories.management'
};

// Status translation keys
export const STATUS_TRANSLATION_KEYS = {
  [PROJECT_STATUS.COMPLETED]: 'projects.status.completed',
  [PROJECT_STATUS.IN_PROGRESS]: 'projects.status.inProgress',
  [PROJECT_STATUS.PLANNED]: 'projects.status.planned'
};
