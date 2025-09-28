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
      shortDesc: "Identidad visual única",
      longDesc: "Creamos identidades visuales que comunican la esencia de tu marca. Logotipos, paletas de colores y material gráfico que destacan en el mercado y conectan con tu audiencia.",
      icon: persona1,
      color: "#E74E13", // Naranja
      direction: "right"
    },
    {
      id: 2,
      title: "GESTIÓN DE COMUNIDADES",
      shortDesc: "Comunidad online activa",
      longDesc: "Gestionamos tus comunidades digitales creando engagement genuino. Estrategias de contenido que fomentan relaciones duraderas con tu audiencia objetivo.",
      icon: persona2,
      color: "#4B8FCE", // Azul
      direction: "right"
    },
    {
      id: 3,
      title: "PUBLICIDAD DIGITAL",
      shortDesc: "Campañas efectivas",
      longDesc: "Implementamos campañas publicitarias en plataformas digitales que maximizan tu ROI. Segmentación precisa y optimización continua para mejores resultados.",
      icon: persona3,
      color: "#EED4E9", // Rosa pálido/Lila
      direction: "left"
    },
    {
      id: 4,
      title: "DISEÑO WEB",
      shortDesc: "Experiencias digitales",
      longDesc: "Desarrollamos sitios web responsivos y optimizados centrados en la experiencia de usuario. Conversión y profesionalismo en cada proyecto.",
      icon: persona4,
      color: "#F7C432", // Amarillo
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

  // Efecto para cambiar el navbar cuando se entra en la sección About
  useEffect(() => {
    const navbar = document.querySelector(`.${styles.header}`)
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
        {/* Título y descripción superior en 2 columnas */}
        <div className={styles.aboutHeaderGrid}> {/* Clase para el layout en grid */}
          <div className={styles.gridLeft}>
            <h2 className={`${styles.aboutTitle} text-semibold`}>NOSOTROS</h2>
          </div>
          <div className={styles.gridRight}>
            <p className={styles.aboutSubtitle}>
              BLACKLINK AGENCIA DE DISEÑO Y MARKETING QUE GENERA ESTRATEGIAS DE 
              ORGANIZACIÓN EFICAZ Y POTENCIA MARCAS QUE CONQUISTAN CON PROPÓSITO 
              Y PRESENCIA DIGITAL EN LA SOCIEDAD.
            </p>
          </div>
        </div>

        {/* Grid de servicios pegados */}
        <div className={styles.servicesRow}>
          {services.map((service) => (
            <div 
              key={service.id}
              className={`${styles.serviceCard} ${activeCard === service.id ? styles.active : ''} ${styles[service.direction]}`}
              onClick={() => handleCardClick(service.id)}
              style={{ '--accent-color': service.color, backgroundColor: service.color }} // Añadimos backgroundColor para el color base
            >
              <div className={styles.cardContent}>
                <div className={styles.cardImage}>
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className={styles.cardText}>
                  <h3 className={`${styles.cardTitle} text-semibold`}>{service.title}</h3>
                  <p className={styles.cardShortDesc}>{service.shortDesc}</p>
                </div>
                <div className={styles.cardArrow}>
                  <span>➔</span>
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
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección ADS - Mantenida por si acaso */}
        <div className={styles.adsSection}>
          <div className={styles.adsContent}>
            <p className={`${styles.adsText} text-semibold`}>ADS</p>
            <p className={styles.adsSubtext}>
              Campañas publicitarias estratégicas que maximizan tu alcance 
              y conversiones con inversión optimizada en todas las plataformas.
            </p>
          </div>
        </div>
      </div>

      {/* Elementos decorativos de fondo - Mantenidos por si acaso */}
      <div className={styles.backgroundElements}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
        <div className={styles.bgCircle3}></div>
      </div>
    </section>
  )
}

export default About