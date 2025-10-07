import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Actualizar sección activa
      const sections = ['inicio', 'nosotros', 'trabajamos', 'trabajos', 'reunion']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    setActiveSection(sectionId)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          <a 
            href="#inicio" 
            className={styles.logoLink}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('inicio')
            }}
            aria-label="Ir a inicio"
          >
            <img src={logo} alt="Lumen Logo" className={styles.logo} />
          </a>
          
          <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.navListOpen : ''}`}>
            {[
              { id: 'inicio', label: 'Inicio' },
              { id: 'nosotros', label: 'Nosotros' },
              { id: 'trabajamos', label: 'Cómo trabajamos' },
              { id: 'trabajos', label: 'Nuestros Trabajos' },
              { id: 'faq', label: 'Preguntas' } 
            ].map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  <span className={styles.linkText}>{item.label}</span>
                  <div className={styles.linkHover}></div>
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#reunion" 
                className={`${styles.navLink} ${styles.ctaLink}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('reunion')
                }}
              >
                <span className={styles.linkText}>Agenda tu reunión</span>
                <div className={styles.ctaGlow}></div>
              </a>
            </li>
          </ul>

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