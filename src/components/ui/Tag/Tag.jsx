import React from 'react';
import './Tag.css';

const Tag = ({
  children,
  variant = 'default',
  size = 'md',
  color,
  removable = false,
  onRemove,
  className = '',
  // NUEVAS PROPS PARA UNIFICACIÓN
  glow = false,        // Para efectos de resplandor como Experience
  bordered = false,    // Para bordes específicos
  clickable = false,   // Para efectos hover
  position = false,    // Para tags de posición/año
  ...props
}) => {
  const baseClasses = [
    'tag',
    `tag--${variant}`,
    `tag--${size}`,
    color && `tag--${color}`,
    removable && 'tag--removable',
    glow && 'tag--glow',
    bordered && 'tag--bordered', 
    clickable && 'tag--clickable',
    position && 'tag--position',
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={baseClasses} {...props}>
      <span className="tag__text">{children}</span>
      {removable && (
        <button 
          className="tag__remove"
          onClick={onRemove}
          type="button"
          aria-label="Eliminar etiqueta"
        >
          ×
        </button>
      )}
    </span>
  );
};

export default Tag;