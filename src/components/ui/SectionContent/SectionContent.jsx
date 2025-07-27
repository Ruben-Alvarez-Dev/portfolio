import React from 'react';
import './SectionContent.css';

const SectionContent = ({ 
  children,
  className = '',
  layout = 'default', // 'default', 'grid', 'flex', 'centered'
  spacing = 'default', // 'none', 'sm', 'default', 'lg'
  maxWidth = 'default' // 'sm', 'default', 'lg', 'xl', 'full'
}) => {
  const baseClasses = [
    'section-content',
    `section-content--layout-${layout}`,
    `section-content--spacing-${spacing}`,
    `section-content--max-width-${maxWidth}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

export default SectionContent;
