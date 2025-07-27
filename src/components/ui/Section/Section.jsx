import React from 'react';
import './Section.css';

const Section = ({ 
  id, 
  children, 
  className = '', 
  centered = false,
  gradientBg = false,
  padding = 'default'
}) => {
  const baseClasses = [
    'section',
    centered && 'section--centered',
    gradientBg && 'section--gradient-bg',
    `section--padding-${padding}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={baseClasses}>
      <div className="section__container">
        {children}
      </div>
    </section>
  );
};

export default Section;
