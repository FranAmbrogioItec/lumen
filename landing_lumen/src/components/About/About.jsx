import React, { useState, useEffect, useRef } from 'react'
import styles from './About.module.css'

// Importar imágenes - ajusta las rutas según tus archivos
import persona1 from '../../assets/persona1.png'
import persona2 from '../../assets/persona2.png'
import persona3 from '../../assets/persona3.png'
import persona4 from '../../assets/persona4.png'

const About = () => {
  const [activeCard, setActiveCard] = useState(null)
  const aboutRef = useRef(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const services = [
    {
      id: 1,
      title: "DISEÑO GRÁFICO",
      shortDesc: "Identidad visual única y coherente",
      longDesc: "Creamos identidades visuales que comunican la esencia de tu marca. Logotipos, paletas de colores y material gráfico que destacan en el mercado y conectan con tu audiencia.",
      icon: persona1,
      color: "#E74E13",
      direction: "right"
    },
    {
      id: 2,
      title: "GESTIÓN DE COMUNIDADES",
      shortDesc: "Estrategias de engagement digital",
      longDesc: "Gestionamos tus comunidades digitales creando engagement genuino. Estrategias de contenido que fomentan relaciones duraderas con tu audiencia objetivo y construyen lealtad.",
      icon: persona2,
      color: "#4B8FCE",
      direction: "right"
    },
    {
      id: 3,
      title: "PUBLICIDAD DIGITAL",
      shortDesc: "Campañas efectivas y optimizadas",
      longDesc: "Implementamos campañas publicitarias en plataformas digitales que maximizan tu ROI. Segmentación precisa, análisis continuo y optimización para mejores resultados garantizados.",
      icon: persona3,
      color: "#EED4E9",
      direction: "left"
    },
    {
      id: 4,
      title: "DISEÑO WEB",
      shortDesc: "Experiencias digitales de alta conversión",
      longDesc: "Desarrollamos sitios web responsivos y optimizados centrados en la experiencia de usuario (UX/UI). Conversión, velocidad y profesionalismo en cada proyecto.",
      icon: persona4,
      color: "#F7C432",
      direction: "left"
    }
  ]
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            setIsDarkMode(true)
          } else {
            setIsDarkMode(false)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const navbar = document.querySelector('.header')
    if (navbar) {
      if (isDarkMode) {
        navbar.classList.add(styles.darkNav)
      } else {
        navbar.classList.remove(styles.darkNav)
      }
    }
  }, [isDarkMode])

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId)
  }

  return (
    <section id="nosotros" className={styles.about} ref={aboutRef}>
      <div className="container">
        <div className={styles.aboutHeaderGrid}>
          <div className={styles.gridLeft}>
            <h2 className={`${styles.aboutTitle} text-semibold`}>NOSOTROS</h2>
          </div>
          <div className={styles.gridRight}>
            <p className={styles.aboutSubtitle}>
              SOMOS UNA AGENCIA DE DESARROLLO Y MARKETING QUE CONSTRUYE ESTRATEGIAS DE 
              CRECIMIENTO; DESARROLLAMOS Y POTENCIAMOS MARCAS QUE EVOLUCIONAN CON UN PROPÓSITO Y PRESENCIA DIGITAL SOSTENIBLE Y ESCALABLE.
            </p>
          </div>
        </div>
      </div> 
      
      <div className={styles.servicesRow}>
        {services.map((service) => (
          <div 
            key={service.id}
            className={`${styles.serviceCard} ${activeCard === service.id ? styles.active : ''} ${styles[service.direction]}`}
            onClick={() => handleCardClick(service.id)}
            style={{ '--accent-color': service.color, backgroundColor: service.color }} 
          >
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
                <img src={service.icon} alt={service.title} />
              </div>
              <div className={styles.cardText}>
                <h3 className={`${styles.cardTitle} text-semibold`}>{service.title}</h3>
                <p className={styles.cardShortDesc}>{service.shortDesc}</p>
              </div>
            </div>
            
            <div className={styles.cardExpanded}>
              <div className={styles.expandedContent}>
                <h4 className={`${styles.expandedTitle} text-semibold`}>{service.title}</h4>
                <p className={styles.expandedDesc}>{service.longDesc}</p>
                <div className={styles.serviceFeatures}>
                  <span className={styles.feature}>Estratégico</span>
                  <span className={styles.feature}>Innovador</span>
                  <span className={styles.feature}>Resultados</span>
                </div>
              </div>
              <button 
                className={styles.closeButton}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveCard(null)
                }}
                aria-label="Cerrar detalles del servicio"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About