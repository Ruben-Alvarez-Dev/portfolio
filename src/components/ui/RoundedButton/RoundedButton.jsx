import { useState } from 'react';
import './RoundedButton.css';

const RoundedButton = ({ title, onClick, color = '#A855F7', active = false }) => {
  const [hover, setHover] = useState(false);
  const baseColor = color;
  
  // Función para convertir hex a rgb
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  function hexToRgbString(hex) {
    const rgb = hexToRgb(hex);
    return rgb ? `${rgb.r},${rgb.g},${rgb.b}` : '168,85,247'; // fallback purple
  }

  // Estilos dinámicos
  const buttonStyles = {
    // Fondo: siempre transparente con el color base
    background: `rgba(${hexToRgbString(baseColor)}, ${active ? 0.25 : hover ? 0.2 : 0.15})`,
    
    // Color del texto: más intenso cuando está activo, más brillante en hover
    color: active 
      ? `rgba(${hexToRgbString(baseColor)}, 1)` // Color más intenso cuando está activo
      : hover 
        ? `rgba(${hexToRgbString(baseColor)}, 1)` // Color brillante en hover
        : baseColor, // Color normal por defecto
    
    // Borde del mismo color que el texto
    border: `1px solid ${baseColor}`,
    
    // Box shadow para el halo/glow - AUMENTADA LA INTENSIDAD
    boxShadow: active 
      ? `0 0 16px 4px rgba(255, 255, 255, 0.5), 0 0 32px 8px rgba(255, 255, 255, 0.25)` // Halo blanco cuando está activo - más intenso
      : hover 
        ? `0 0 16px 4px rgba(${hexToRgbString(baseColor)}, 0.5), 0 0 28px 6px rgba(${hexToRgbString(baseColor)}, 0.25)` // Halo del color del botón en hover - más intenso
        : 'none', // Sin halo por defecto
    
    // Brillo del texto: más intenso cuando está activo, brillante en hover
    filter: active 
      ? 'brightness(1.4) saturate(1.3)' // Más intenso cuando está activo
      : hover 
        ? 'brightness(1.3) saturate(1.2)' // Brillante en hover
        : 'brightness(1)', // Normal por defecto
    
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <button
      className={`rounded-btn${active ? ' active' : ''}`}
      style={buttonStyles}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {title}
    </button>
  );
};

export default RoundedButton;