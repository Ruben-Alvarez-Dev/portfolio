import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
  underline = true,
  className = ''
}) => {
  const baseClasses = [
    'section-header',
    `section-header--${align}`,
    className
  ].filter(Boolean).join(' ');

  const titleClasses = [
    'section-header__title',
    underline ? 'section-header__title--underline' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses}>
      {subtitle && (
        <span className="section-header__subtitle">{subtitle}</span>
      )}
      <h2 className={titleClasses}>
        {title}
      </h2>
      {description && (
        <p className="section-header__description">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
