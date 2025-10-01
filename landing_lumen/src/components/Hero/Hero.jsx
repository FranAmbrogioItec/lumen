// Hero.jsx
import React, { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import heroImage from '../../assets/persona1-d.svg'

const Hero = () => {
  const heroRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
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
      {/* Elementos de fondo animados */}
      <div className={styles.heroBackground}>
        <div className={styles.backgroundParticle1}></div>
        <div className={styles.backgroundParticle2}></div>
        <div className={styles.backgroundParticle3}></div>
        <div className={styles.backgroundGrid}></div>
        
        {/* Nuevos elementos flotantes naranjas */}
        <div className={styles.floatingOrb1}></div>
        <div className={styles.floatingOrb2}></div>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
      </div>

      <div className="container">
        <div className={styles.heroGrid}>
          <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.titleContainer}>
              <h1 className={styles.heroTitle}>
                <span className={styles.titleLine}>DISEÑO Y MARKETING</span>
                <span className={styles.titleLine}>ESTRATÉGICO PARA</span>
                <span className={styles.titleLine}>
                  <span className={styles.gradientText}>ILUMINAR</span> EL FUTURO
                </span>
                <span className={styles.titleLine}>DE <span className={styles.gradientText}>TU EMPRESA</span></span>
              </h1>
              
              <div className={styles.titleGlow}></div>
            </div>
            
            <p className={styles.heroSubtitle}>
              Transformamos tu visión en resultados tangibles con soluciones integrales 
              de marketing y desarrollo web que impulsan el crecimiento de tu negocio.
            </p>
            
            <div className={styles.heroButtons}>
              <button 
                className={styles.heroCta}
                onClick={() => scrollToSection('propuesta')}
              >
                <span>Nuestra Propuesta</span>
                <div className={styles.buttonGlow}></div>
              </button>
              
              <button 
                className={styles.heroSecondary}
                onClick={() => scrollToSection('nosotros')}
              >
                <span>Conoce más</span>
                <div className={styles.buttonHover}></div>
              </button>
            </div>
          </div>
          
          <div className={`${styles.heroImageContainer} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.imageWrapper}>
              {/* Nuevo fondo degradado naranja */}
              <div className={styles.orangeGradient}></div>
              <div className={styles.imageGlow}></div>
              <img 
                src={heroImage} 
                alt="Diseño y Marketing Estratégico" 
                className={styles.heroImage}
              />
              <div className={styles.imageBorder}></div>
              {/* Efecto de partículas naranjas */}
              <div className={styles.orangeParticles}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine}></div>
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}

export default Hero