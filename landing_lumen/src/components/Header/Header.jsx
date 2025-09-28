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

  // Cerrar menú móvil cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector(`.${styles.navList}`)
      const button = document.querySelector(`.${styles.mobileMenuButton}`)
      
      if (isMobileMenuOpen && nav && button && 
          !nav.contains(event.target) && 
          !button.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
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
            aria-label="Ir a inicio"
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
                aria-label="Ir a inicio"
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
                aria-label="Ir a nosotros"
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
                aria-label="Ir a como trabajamos"
              >
                <span className={styles.linkText}>Cómo trabajamos</span>
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
                aria-label="Ver nuestros trabajos"
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
                aria-label="Agendar reunión"
              >
                <span className={styles.linkText}>Agenda tu reunión</span>
              </a>
            </li>
          </ul>

          {/* Botón menú móvil */}
          <button 
            className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
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