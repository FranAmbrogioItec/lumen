// ThemeToggle.jsx
import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Lógica para aplicar el tema y actualizar el meta tag del navegador
  const applyTheme = (theme) => {
    const root = document.documentElement;
    
    // Aplicar el tema en el DOM
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Actualizar el meta tag para el color de la barra de direcciones en móviles
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      // Usar un color claro para el modo 'light' y oscuro para el modo 'dark'
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#FEF7F7');
    }
  };

  useEffect(() => {
    // Verificar tema guardado o preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialTheme = 'dark'; // Por defecto oscuro
    
    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (!systemPrefersDark) {
      // Si no hay tema guardado y el sistema prefiere claro, usar claro
      initialTheme = 'light';
    }
    
    setIsDark(initialTheme === 'dark');
    applyTheme(initialTheme);
    setIsMounted(true);
    
    // Escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Solo aplicar si el usuario no ha seleccionado un tema manualmente
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setIsDark(e.matches);
        applyTheme(newTheme);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    applyTheme(newTheme);
    
    // Configuración de transición suave
    document.documentElement.style.setProperty('--transition', 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)');
  };

  // Evitar renderizado hasta que se determine el tema (para evitar flash)
  if (!isMounted) {
    return (
      <button 
        className={styles.themeToggle} 
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        <div className={styles.toggleTrack}>
          <div className={styles.toggleThumb}></div>
        </div>
      </button>
    );
  }

  return (
    <button
      className={`${styles.themeToggle} ${isDark ? styles.dark : styles.light}`}
      onClick={toggleTheme}
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
      title={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
    >
      <span className={styles.toggleLabel}>Modo {isDark ? 'Oscuro' : 'Claro'}</span>
      <div className={styles.toggleTrack}>
        <div className={styles.toggleThumb}>
          <span className={styles.sun} aria-hidden="true">☀️</span>
          <span className={styles.moon} aria-hidden="true">🌙</span>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;