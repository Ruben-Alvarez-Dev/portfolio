# Instrucciones para agentes AI en este proyecto

## Arquitectura general
- Proyecto basado en React con Vite para desarrollo rápido y recarga en caliente (HMR).
- Estructura principal en `src/` con subcarpetas para componentes, layouts y assets.
- Los componentes de layout están organizados por función en subcarpetas (`HeaderComponent`, `FooterComponent`, `MainComponent`).
- Cada componente suele tener su propio archivo `.jsx` y `.css`.

## Flujo de desarrollo
- Para iniciar el entorno de desarrollo, usa: `npm run dev`.
- El archivo de configuración principal de Vite es `vite.config.js`.
- La configuración de ESLint está en `eslint.config.js`.
- El punto de entrada de la app es `src/main.jsx` y el componente raíz es `src/App.jsx`.

## Convenciones y patrones
- Los componentes se nombran con sufijo `Component` para layouts y con sufijo `Item` para elementos individuales dentro de layouts.
- Los estilos se definen por componente en archivos `.css` junto al `.jsx` correspondiente.
- Los assets se almacenan en `src/assets/` y los recursos públicos en `public/`.
- No hay integración TypeScript por defecto, pero se recomienda para producción.

## Integraciones y dependencias
- Usa plugins oficiales de Vite para React (`@vitejs/plugin-react` o `@vitejs/plugin-react-swc`).
- Babel y SWC se usan para Fast Refresh.
- No hay servicios backend ni API documentados en el código base actual.

## Ejemplo de patrón de componente
- Un layout típico se encuentra en `src/components/layout/HeaderComponent/HeaderComponent.jsx` y puede importar subcomponentes de la misma carpeta.
- Ejemplo de importación:
  ```jsx
  import LogoItem from './LogoItem/LogoItem';
  import NavbarItem from './NavbarItem/NavbarItem';
  ```

## Solución de problemas
- Si `npm run dev` falla, revisa dependencias en `package.json` y la configuración en `vite.config.js`.
- Verifica que los imports de componentes sean relativos y correctos.
- Los errores de ESLint pueden consultarse y ajustarse en `eslint.config.js`.

## Archivos clave
- `src/App.jsx`, `src/main.jsx`: punto de entrada y raíz de la app.
- `vite.config.js`: configuración de Vite.
- `eslint.config.js`: reglas de linting.
- `public/`: recursos estáticos.
- `src/components/layout/`: layouts principales y subcomponentes.

---
¿Falta alguna convención, integración o flujo relevante? Indica detalles específicos para mejorar estas instrucciones.
