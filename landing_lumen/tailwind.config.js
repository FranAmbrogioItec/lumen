/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/.**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // O 'media' si prefieres detección automática del sistema
  theme: {
    extend: {
      // Colores basados en tus variables CSS
      colors: {
        // Tema oscuro (por defecto)
        bg: {
          DEFAULT: '#0a0a0a',
          secondary: '#161616',
        },
        text: {
          DEFAULT: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.7)',
        },
        accent: '#E74C3C',
        primary: '#4B8FCE',
        cta: '#E74E13',
        
        // Colores para componentes
        card: {
          bg: 'rgba(30, 30, 30, 0.7)',
          active: 'rgba(20, 20, 20, 0.95)',
        },
        border: 'rgba(255, 255, 255, 0.1)',
        shadow: 'rgba(0, 0, 0, 0.3)',
        feature: {
          bg: 'rgba(255, 255, 255, 0.05)',
          hover: 'rgba(255, 255, 255, 0.1)',
        },
        close: {
          bg: 'rgba(255, 255, 255, 0.1)',
          hover: 'rgba(255, 255, 255, 0.15)',
        },
      },
      
      // Fuentes
      fontFamily: {
        primary: ['Glancyr', 'sans-serif'],
      },
      
      // Layout y espaciado
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        'section': '80px',
      },
      
      // Border radius
      borderRadius: {
        'custom': '8px',
      },
      
      // Transiciones
      transitionProperty: {
        'colors': 'background-color, color, border-color',
      },
      
      // Animaciones personalizadas
      animation: {
        'logo-spin': 'logo-spin 20s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'morph': 'morph 12s ease-in-out infinite',
      },
      keyframes: {
        'logo-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-10px) translateX(5px)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '50%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        }
        },
      animationDelay: {
        '1000': '1s',
        '2000': '2s',
        '3000': '3s',
        '4000': '4s',
      }
      },
      
      // Box shadow
      boxShadow: {
        'custom': '0 4px 6px -1px var(--color-shadow)',
      },

      
    },
  },
  plugins: [],
}