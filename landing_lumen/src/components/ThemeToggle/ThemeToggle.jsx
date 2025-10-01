import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Verificar tema guardado o preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setIsDark(initialTheme === 'dark');
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    applyTheme(newTheme);
  };

  return (
    <button
      className={`${styles.themeToggle} ${isDark ? styles.dark : styles.light}`}
      onClick={toggleTheme}
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
    >
      <div className={styles.toggleTrack}>
        <div className={styles.toggleThumb}>
          <span className={styles.sun}>☀️</span>
          <span className={styles.moon}>🌙</span>
        </div>
      </div>
      <span className={styles.toggleLabel}>
        {isDark ? 'Modo Oscuro' : 'Modo Claro'}
      </span>
    </button>
  );
};

export default ThemeToggle;