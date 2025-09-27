import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg' // Ajusta la ruta según tu estructura

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          {/* Logo como enlace a Home */}
          <a 
            href="#inicio" 
            className={styles.logoLink}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('inicio')
            }}
          >
            <img src={logo} alt="BLACKLINK Logo" className={styles.logo} />
          </a>
          
          {/* Menú de navegación */}
          <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.navListOpen : ''}`}>
            <li>
              <a 
                href="#inicio" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('inicio')
                }}
              >
                <span className={styles.linkText}>Inicio</span>
              </a>
            </li>
            <li>
              <a 
                href="#nosotros" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('nosotros')
                }}
              >
                <span className={styles.linkText}>Nosotros</span>
              </a>
            </li>
            <li>
              <a 
                href="#trabajamos" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('trabajamos')
                }}
              >
                <span className={styles.linkText}>Como trabajamos</span>
              </a>
            </li>
            <li>
              <a 
                href="#trabajos" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('trabajos')
                }}
              >
                <span className={styles.linkText}>Nuestros Trabajos</span>
              </a>
            </li>
            <li>
              <a 
                href="#reunion" 
                className={`${styles.navLink} ${styles.ctaLink}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('reunion')
                }}
              >
                <span className={styles.linkText}>Agenda tu reunion</span>
              </a>
            </li>
          </ul>

          {/* Botón menú móvil */}
          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header