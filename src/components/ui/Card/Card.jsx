import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false,
  clickable = false,
  onClick
}) => {
  const baseClasses = [
    'card',
    `card--${variant}`,
    hover && 'card--hover',
    clickable && 'card--clickable',
    className
  ].filter(Boolean).join(' ');

  const CardComponent = clickable ? 'button' : 'div';

  return (
    <CardComponent 
      className={baseClasses} 
      onClick={onClick}
      type={clickable ? 'button' : undefined}
    >
      {children}
    </CardComponent>
  );
};

// === SUBCOMPONENTES EXISTENTES ===
Card.Header = ({ children, className = '' }) => (
  <div className={`card__header ${className}`}>
    {children}
  </div>
);

Card.Body = ({ children, className = '', variant = 'standard' }) => {
  const variantClass = variant === 'compact' ? 'card__body--compact' : 
                      variant === 'minimal' ? 'card__body--minimal' : 
                      'card__body';
  
  return (
    <div className={`${variantClass} ${className}`}>
      {children}
    </div>
  );
};

Card.Footer = ({ children, className = '' }) => (
  <div className={`card__footer ${className}`}>
    {children}
  </div>
);

Card.Title = ({ children, className = '', underline = false }) => {
  if (!children) return null;
  
  return (
    <div className={`card__title ${underline ? 'card__title--underline' : ''} ${className}`}>
      <h3>{children}</h3>
    </div>
  );
};

Card.Content = ({ children, className = '' }) => (
  <div className={`card__content ${className}`}>
    {children}
  </div>
);

Card.Image = ({ src, alt, className = '' }) => (
  <div className={`card__image ${className}`}>
    <img src={src} alt={alt} />
  </div>
);

// === COMPONENTE DE TEXTO SIMPLIFICADO ===
Card.Text = ({ children, className = '', as = 'p', ...props }) => {
  const Element = as;
  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  );
};

export default Card;