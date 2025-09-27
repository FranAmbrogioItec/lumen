import React, { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import heroImage from '../../assets/hero.png'

const Hero = () => {
  const heroRef = useRef(null)
  const [displayedTitle, setDisplayedTitle] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullTitle = 'DISEÑO Y MARKETING ESTRATÉGICO PARA ILUMINAR EL FUTURO DE TU EMPRESA'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            // Iniciar efecto de tipeado cuando la sección sea visible
            startTypingEffect()
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

  const startTypingEffect = () => {
    if (currentIndex < fullTitle.length) {
      const timer = setTimeout(() => {
        setDisplayedTitle(fullTitle.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50) // Velocidad de tipeado
      return () => clearTimeout(timer)
    }
  }

  useEffect(() => {
    if (currentIndex > 0 && currentIndex < fullTitle.length) {
      startTypingEffect()
    }
  }, [currentIndex])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className={styles.hero} ref={heroRef}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={`${styles.heroContent} reveal`}>
            <h1 className={`${styles.heroTitle} text-bold`}>
              <span className={styles.typedText}>{displayedTitle}</span>
              <span className={styles.cursor}>|</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Transformamos tu visión en resultados tangibles con soluciones integrales de marketing y desarrollo.
            </p>
            <div className={styles.heroButtons}>
              <a 
                href="#propuesta" 
                className={`btn btn-primary ${styles.heroCta}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('propuesta')
                }}
              >
                Nuestra Propuesta
              </a>
              <a 
                href="#nosotros" 
                className={styles.heroSecondary}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('nosotros')
                }}
              >
                Conoce más
              </a>
            </div>
          </div>
          
          <div className={`${styles.heroImageContainer} reveal`}>
            <img 
              src={heroImage} 
              alt="Diseño y Marketing Estratégico" 
              className={styles.heroImage}
            />
            <div className={styles.imageDecoration}></div>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={`${styles.floatingElement} ${styles.float1}`}></div>
          <div className={`${styles.floatingElement} ${styles.float2}`}></div>
          <div className={`${styles.floatingElement} ${styles.float3}`}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero