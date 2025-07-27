// Utilidades para manipular colores hex
export function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  const num = parseInt(hex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

export function rgbToHex(r, g, b) {
  return (
    '#' +
    [r, g, b]
      .map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
}

export function darken(hex, amount = 0.25) {
  const { r, g, b } = hexToRgb(hex);
  return `rgb(${Math.floor(r * (1 - amount))},${Math.floor(g * (1 - amount))},${Math.floor(b * (1 - amount))})`;
}

export function saturate(hex, amount = 0.3) {
  // Saturación: acerca cada componente al valor máximo para intensificar el color
  const { r, g, b } = hexToRgb(hex);
  const max = Math.max(r, g, b);
  const satR = Math.round(r + (max - r) * amount);
  const satG = Math.round(g + (max - g) * amount);
  const satB = Math.round(b + (max - b) * amount);
  return `rgb(${satR},${satG},${satB})`;
}
