import React from 'react';
import './Form.css';

const Form = ({ children, onSubmit, className = '' }) => {
  return (
    <form onSubmit={onSubmit} className={`form ${className}`}>
      {children}
    </form>
  );
};

Form.Group = ({ children, className = '' }) => (
  <div className={`form__group ${className}`}>
    {children}
  </div>
);

Form.Row = ({ children, className = '' }) => (
  <div className={`form__row ${className}`}>
    {children}
  </div>
);

Form.Label = ({ htmlFor, children, required = false, className = '' }) => (
  <label htmlFor={htmlFor} className={`form__label ${className}`}>
    {children}
    {required && <span className="form__required">*</span>}
  </label>
);

Form.Input = ({ 
  type = 'text', 
  id, 
  name, 
  value, 
  onChange, 
  placeholder,
  required = false,
  disabled = false,
  className = '',
  ...props 
}) => (
  <input
    type={type}
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    disabled={disabled}
    className={`form__input ${className}`}
    {...props}
  />
);

Form.Textarea = ({ 
  id, 
  name, 
  value, 
  onChange, 
  placeholder,
  rows = 4,
  required = false,
  disabled = false,
  className = '',
  ...props 
}) => (
  <textarea
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    required={required}
    disabled={disabled}
    className={`form__textarea ${className}`}
    {...props}
  />
);

Form.Message = ({ children, type = 'info', className = '' }) => (
  <div className={`form__message form__message--${type} ${className}`}>
    {children}
  </div>
);

export default Form;
