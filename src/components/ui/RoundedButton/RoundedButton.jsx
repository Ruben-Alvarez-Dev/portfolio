import { useState } from 'react';
import './RoundedButton.css';

const RoundedButton = ({ title, onClick, color = '#A855F7', active = false, 'data-category': dataCategory, ...props }) => {
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
      ? baseColor // Usa el color base intenso cuando está activo
      : hover
        ? baseColor // Color base en hover
        : `rgba(${hexToRgbString(baseColor)}, 0.85)`, // Color más tenue por defecto

    // Borde del mismo color que el texto
    border: `1px solid ${baseColor}`,

    // Box shadow para el halo/glow - RESPLANDOR REDUCIDO
    boxShadow: active
      ? `0 0 12px 3px rgba(255, 255, 255, 0.5), 0 0 24px 6px rgba(255, 255, 255, 0.25)` // Halo blanco cuando está activo - menos amplio
      : hover
        ? `0 0 12px 3px rgba(${hexToRgbString(baseColor)}, 0.5), 0 0 20px 4px rgba(${hexToRgbString(baseColor)}, 0.25)` // Halo del color del botón en hover - menos amplio
        : 'none', // Sin halo por defecto

    // Brillo del texto: más intenso cuando está activo, brillante en hover
    filter: active
      ? 'brightness(1.5) saturate(1.4)' // Más intenso cuando está activo
      : hover
        ? 'brightness(1.3) saturate(1.2)' // Brillante en hover
        : 'brightness(1)', // Normal por defecto

    // Transición suave
    transition: 'all 0.3s ease',
  };

  return (
    <button
      className="rounded-btn"
      style={buttonStyles}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-category={dataCategory}
      {...props}
    >
      {title}
    </button>
  );
};

export default RoundedButton;