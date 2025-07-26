# 🚀 Portfolio Profesional - Fullstack Developer

Un portfolio web moderno y responsivo para desarrolladores fullstack, construido con React, Vite y CSS personalizado (sin frameworks como Tailwind). Diseñado con una arquitectura modular y escalable.

## ✨ Características

### 🎨 Diseño y UI/UX
- **Diseño responsivo** totalmente adaptativo para todos los dispositivos
- **Tema oscuro/claro** con transiciones suaves
- **Navegación fluida** con scroll suave entre secciones
- **Animaciones CSS** elegantes y performantes
- **Tipografía profesional** con jerarquía visual clara

### 🛠️ Tecnologías y Arquitectura
- **React 19** con hooks modernos
- **Vite** para desarrollo rápido y build optimizado
- **CSS Variables** centralizadas para consistencia
- **Arquitectura modular** con componentes separados
- **Context API** para gestión de estado global
- **React Icons** para iconografía consistente

### 📱 Funcionalidades
- **Header fijo** con navegación responsive
- **Sección Hero** con presentación impactante
- **Sobre mí** con skills, experiencia y estadísticas
- **Proyectos** con filtros y categorías
- **Contacto** con formulario funcional
- **Menú móvil** con overlay animado
- **Internacionalización** (ES/EN)

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/
│   │   ├── HeaderComponent/     # Navegación principal
│   │   │   ├── HeaderComponent.jsx
│   │   │   ├── HeaderComponent.css
│   │   │   └── MenuOverlay/     # Menú móvil
│   │   ├── MainComponent/       # Contenedor principal
│   │   └── FooterComponent/     # Pie de página
│   └── sections/
│       ├── HeroSection/         # Sección de presentación
│       ├── AboutSection/        # Sobre mí y habilidades
│       ├── ProjectsSection/     # Portfolio de proyectos
│       └── ContactSection/      # Formulario de contacto
├── context/
│   ├── ThemeContext.jsx         # Gestión de temas
│   └── I18nContext.jsx          # Internacionalización
├── variables.css                # Variables CSS centralizadas
├── index.css                    # Estilos globales y reset
├── App.jsx                      # Componente principal
└── main.jsx                     # Punto de entrada
```

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación

1. **Instalar dependencias**
```bash
npm install
```

2. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

3. **Abrir en el navegador**
```
http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linter ESLint
```

## 🛠️ Personalización

### Cambiar Colores
Edita `src/variables.css`:
```css
:root {
  --color-primary: #tu-color-principal;
  --color-secondary: #tu-color-secundario;
}
```

### Añadir Proyectos
Edita el array `projects` en `ProjectsSection.jsx`

## 📞 Contacto

**Rubén Álvarez** - Fullstack Developer

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
