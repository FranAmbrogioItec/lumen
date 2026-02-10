/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Colores Personalizados
      colors: {
        brand: {
          orange: '#f05a1f', // Tu naranja principal (usado en botones y acentos)
          dark: '#1a1a1a',   // Tu negro principal (textos oscuros)
          gray: '#f9f9f9',   // Fondos claros
        },
        // Colores específicos de las tarjetas de "About"
        card: {
          1: '#E74E13', // Diseño Gráfico
          2: '#4B8FCE', // Gestión Comunidades
          3: '#EED4E9', // Publicidad Digital
          4: '#F7C432', // Diseño Web
        },
        'dark-bg': '#1c1c1c', // Fondo oscuro sección About
      },

      // 2. Duraciones de transición extendidas (para efectos suaves)
      transitionDuration: {
        '800': '800ms',
        '900': '900ms',
      },

      // 3. Curvas de animación personalizadas
      transitionTimingFunction: {
        // Efecto rebote suave para el acordeón de "About"
        'elastic': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },

      // 4. Definición de Keyframes (Los "pasos" de las animaciones)
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '25%': { borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%' },
          '50%': { borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%' },
          '75%': { borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%' },
        },
        slideInFromLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.6' },
        },
        pulseCta: {
          '0%, 100%': { boxShadow: '0 8px 25px rgba(231, 76, 60, 0.3)' },
          '50%': { boxShadow: '0 8px 30px rgba(231, 76, 60, 0.6)', transform: 'scale(1.01)' },
        },
        particlesMove: {
          '0%': { backgroundPosition: '0 0, 0 0, 0 0' },
          '100%': { backgroundPosition: '50px 50px, 30px 30px, 40px 40px' },
        },
        scrollLine: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%': { transform: 'translateY(10px)', opacity: '1' },
        }
      },

      // 5. Animaciones listas para usar (ej: className="animate-float")
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-fast': 'float 6s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'gentle-float': 'gentleFloat 6s ease-in-out infinite',
        'morph': 'morph 12s ease-in-out infinite',
        'slide-in': 'slideInFromLeft 0.8s ease forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'glow': 'glow 4s ease-in-out infinite',
        'pulse-cta': 'pulseCta 2s ease-out 1s infinite',
        'particles': 'particlesMove 20s linear infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}