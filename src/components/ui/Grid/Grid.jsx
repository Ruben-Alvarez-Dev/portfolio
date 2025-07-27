import React from 'react';
import './Grid.css';

const Grid = ({
  children,
  columns = 'auto',
  gap = 'md',
  responsive = true,
  className = '',
  ...props
}) => {
  const baseClasses = [
    'grid',
    `grid--gap-${gap}`,
    typeof columns === 'string' ? `grid--columns-${columns}` : '',
    responsive && 'grid--responsive',
    className
  ].filter(Boolean).join(' ');

  const style = typeof columns === 'number' ? 
    { '--grid-columns': columns } : 
    {};

  return (
    <div className={baseClasses} style={style} {...props}>
      {children}
    </div>
  );
};

export default Grid;
