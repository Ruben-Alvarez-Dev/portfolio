import React from 'react';
import './Flex.css';

const Flex = ({
  children,
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  gap = 'none',
  className = '',
  ...props
}) => {
  const baseClasses = [
    'flex',
    `flex--direction-${direction}`,
    `flex--justify-${justify}`,
    `flex--align-${align}`,
    `flex--wrap-${wrap}`,
    `flex--gap-${gap}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};

export default Flex;
