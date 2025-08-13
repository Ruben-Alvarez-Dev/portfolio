import { useMemo } from 'react';
import { useI18n } from '../i18n';
import categoriesData from '../data/projectCategories.json';

export const useProjectCategories = () => {
  const { currentLanguage } = useI18n();

  // Categorías traducidas y ordenadas
  const categories = useMemo(() => {
    return categoriesData.categories
      .sort((a, b) => a.order - b.order)
      .map(category => ({
        id: category.id,
        order: category.order,
        name: category.translations[currentLanguage] || category.translations.en,
        colorClass: category.colorClass
      }));
  }, [currentLanguage]);

  // Estados traducidos
  const statuses = useMemo(() => {
    return categoriesData.status.map(status => ({
      id: status.id,
      name: status.translations[currentLanguage] || status.translations.en,
      variant: status.variant,
      colorClass: status.colorClass
    }));
  }, [currentLanguage]);

  // Funciones helpers
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.colorClass : 'tag--default';
  };

  const getStatusName = (statusId) => {
    const status = statuses.find(s => s.id === statusId);
    return status ? status.name : statusId;
  };

  const getStatusVariant = (statusId) => {
    const status = statuses.find(s => s.id === statusId);
    return status ? status.variant : 'default';
  };

  const getStatusColor = (statusId) => {
    const status = statuses.find(s => s.id === statusId);
    return status ? status.colorClass : 'tag--default';
  };

  return {
    categories,
    statuses,
    getCategoryName,
    getCategoryColor,
    getStatusName,
    getStatusVariant,
    getStatusColor
  };
};
