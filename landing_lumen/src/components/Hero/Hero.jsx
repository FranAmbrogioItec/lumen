import React, { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import heroImage from '../../assets/hero.svg'

const Hero = () => {
  const heroRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className={styles.hero} ref={heroRef}>
      {/* Línea divisoria superior */}
      <div className={styles.dividerTop}></div>
      
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
            {/* Línea decorativa izquierda */}
            <div className={styles.contentDividerLeft}></div>
            
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine}>
                DISEÑO Y MARKETING
              </span>
              <span className={styles.titleLine}>ESTRATÉGICO PARA</span>
              <span className={styles.titleLine}>
                <span className={styles.highlight}>ILUMINAR</span> EL FUTURO
              </span>
              <span className={styles.titleLine}>DE <span className={styles.highlight}>TU EMPRESA</span></span>
            </h1>
            
            {/* Línea divisoria entre título y subtítulo */}
            <div className={styles.titleDivider}></div>
            
            {/* <p className={styles.heroSubtitle}>
              Transformamos tu visión en resultados tangibles con soluciones integrales 
              de marketing y desarrollo web que impulsan el crecimiento de tu negocio.
            </p>
             */}
            <div className={styles.heroButtons}>
              <a 
                href="#propuesta" 
                className={styles.heroCta}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('propuesta')
                }}
              >
                <span className={styles.ctaText}>Nuestra Propuesta</span>
                <span className={styles.ctaArrow}>→</span>
              </a>
            </div>
          </div>
          
          <div className={`${styles.heroImageContainer} ${isVisible ? styles.visible : ''}`}>
            {/* Línea decorativa derecha */}
            <div className={styles.imageDividerRight}></div>
            
            <img 
              src={heroImage} 
              alt="Ilustración de diseño y marketing estratégico" 
              className={styles.heroImage}
            />
            
            {/* Badge decorativo en la imagen */}
            <div className={styles.imageBadge}>
              <span className={styles.badgeText}>BL</span>
            </div>
          </div>
        </div>
        
        {/* Indicador de scroll mejorado */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine}></div>
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </div>
      
      {/* Línea divisoria inferior */}
      <div className={styles.dividerBottom}></div>
    </section>
  )
}

export default Hero