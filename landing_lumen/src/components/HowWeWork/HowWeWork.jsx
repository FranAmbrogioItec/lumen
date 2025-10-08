// HowWeWork.jsx
import React, { useRef, useState, useEffect } from 'react'
import styles from './HowWeWork.module.css'

// ** Asegúrate de importar tus imágenes PNG aquí. **
import stepImage1 from '../../assets/work2.png' // Ejemplo: Cambia esto a tu ruta real
import stepImage2 from '../../assets/work5.png' // Ejemplo
import stepImage3 from '../../assets/work6.png' // Ejemplo
import stepImage4 from '../../assets/work.png' // Ejemplo

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false) 

  // Definición de los pasos con más contenido y la ruta de la imagen
  const processSteps = [
    {
      number: "01",
      title: "DESCUBRIMIENTO Y ANÁLISIS",
      mainContent: "Aquí **comenzamos la inmersión** en tu proyecto. Analizamos exhaustivamente tu mercado, tu competencia directa y las tendencias. Establecemos **objetivos SMART** y definimos el verdadero potencial de tu marca. Es la fase de la 'radiografía' del proyecto.",
      cardTitle: "Análisis y Setup",
      cardFeatures: ["Análisis de mercado", "Definición de objetivos", "Auditoría inicial"],
      color: "#E74C3C", // Color primario (Naranja)
      image: stepImage1,
    },
    {
      number: "02",
      title: "ESTRATEGIA Y PLANIFICACIÓN",
      mainContent: "Con el diagnóstico en mano, **diseñamos el mapa de ruta**. Creamos una estrategia digital personalizada, definimos las plataformas clave, el tono de comunicación y, lo más importante, un **Roadmap de implementación** con metas medibles (KPIs) a corto y largo plazo.",
      cardTitle: "Diseño del Roadmap",
      cardFeatures: ["Planificación estratégica", "Definición de KPIs", "Roadmap detallado"],
      color: "#4B8FCE", // Color secundario (Azul)
      image: stepImage2,
    },
    {
      number: "03",
      title: "EJECUCIÓN Y DESARROLLO",
      mainContent: "Ponemos el plan en acción. Implementamos las soluciones con **metodologías ágiles** (diseño, desarrollo, campañas). Nos enfocamos en la **velocidad y la calidad**, asegurando que cada pieza de contenido o código cumpla con los estándares más altos.",
      cardTitle: "Desarrollo Ágil",
      cardFeatures: ["Desarrollo web/gráfica", "Implementación", "Seguimiento en tiempo real"],
      color: "#FFC300", // Color terciario (Amarillo)
      image: stepImage3,
    },
    {
      number: "04",
      title: "OPTIMIZACIÓN Y ESCALAMIENTO",
      mainContent: "El trabajo nunca termina. Monitorizamos constantemente el rendimiento, utilizando **datos reales para optimizar campañas** y contenidos. Lo que funciona, se escala. Lo que no, se ajusta. **Aseguramos el crecimiento** continuo y sostenido de tu inversión.",
      cardTitle: "Data y Escalamiento",
      cardFeatures: ["Análisis de datos", "Optimización continua", "Reportes de impacto"],
      color: "#4CAF50", // Color cuaternario (Verde)
      image: stepImage4,
    }
  ]

  const totalSteps = processSteps.length
  
  const handleStepChange = (newStep) => {
    // Aseguramos que el índice esté dentro del rango
    if (newStep >= 0 && newStep < totalSteps) {
        setActiveStep(newStep)
    }
  }
  
  const nextStep = () => {
    // Solo avanza si no es el último paso
    if (activeStep < totalSteps - 1) {
        setActiveStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    // Solo retrocede si no es el primer paso
    if (activeStep > 0) {
        setActiveStep((prev) => prev - 1)
    }
  }

  // Lógica de Intersection Observer (Mantenida)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current) 
      }
    }
  }, [])
  
  // Contenido de texto dinámico de la izquierda
  const activeContent = processSteps[activeStep]

  return (
    <section 
      id="trabajamos" 
      className={styles.howWeWork} 
      ref={sectionRef}
    >
      
      {/* Partículas flotantes de background */}
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
        
        {/* Título y subtítulo centrado */}
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} text-bold`}>
            CÓMO IMPLEMENTAMOS NUESTRA ESTRATEGIA
          </h2>
        </div>


        {/* --- ESTRUCTURA DE DOBLE COLUMNA --- */}
        <div className={styles.splitGrid}>
          
          {/* Columna Izquierda: Texto Dinámico */}
          <div className={`${styles.leftContent} ${isVisible ? styles.animateIn : ''}`}>
            {/* Título principal y número */}
            <h3 
                className={styles.mainTitle}
                style={{ '--accent-color': activeContent.color }}
            >
                <span className={styles.stepNumber}>{activeContent.number}</span>
                {activeContent.title}
            </h3>
            
            {/* Descripción detallada */}
            <p className={styles.stepMainContent} dangerouslySetInnerHTML={{ __html: activeContent.mainContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            
            {/* Indicadores de navegación (Puntos para seleccionar) */}
            <div className={styles.navIndicators}>
                {processSteps.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.navDot} ${index === activeStep ? styles.active : ''}`}
                        onClick={() => handleStepChange(index)}
                        style={{ '--dot-color': processSteps[index].color }}
                        aria-label={`Ir al paso ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Controles de Navegación (Flechas) */}
            <div className={styles.arrowControls}>
              <button 
                className={styles.controlButton} 
                onClick={prevStep} 
                disabled={activeStep === 0}
                aria-label="Paso anterior"
                /* CLAVE: Definir el color de hover en línea */
                style={{ '--button-hover-color': activeContent.color }} 
              >
                {'<'}
              </button>
              <button 
                className={styles.controlButton} 
                onClick={nextStep} 
                disabled={activeStep === totalSteps - 1}
                aria-label="Siguiente paso"
                /* CLAVE: Definir el color de hover en línea */
                style={{ '--button-hover-color': activeContent.color }}
              >
                {'>'}
              </button>
            </div>
            
          </div>
          
          {/* Columna Derecha: Carrusel Visual de Cards */}
          <div className={`${styles.rightContent} ${isVisible ? styles.animateIn : ''}`}>
            <div className={styles.carouselWrapper}>
              <div 
                className={styles.processSteps}
              >
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    // CLAVE: Se añade 'activeCard' para gestionar la visibilidad y superposición
                    className={`${styles.stepCard} ${index === activeStep ? styles.activeCard : ''}`}
                    style={{ '--card-color': step.color }}
                  >
                    <div className={styles.cardVisual}>
                        <img 
                            src={step.image} 
                            alt={`Paso ${step.number} - ${step.cardTitle}`} 
                            className={styles.cardImage}
                        />
                        <div className={styles.imageGlow} style={{ backgroundColor: step.color }}></div>
                    </div>
                    
                    <h4 className={styles.cardTitle}>{step.cardTitle}</h4>
                    
                    <div className={styles.stepFeatures}>
                      {step.cardFeatures.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className={styles.featureTag}
                          /* CLAVE: Aplicar color dinámico al tag para que el acento de color se vea */
                          style={{ 
                            '--tag-bg-color': `${step.color}1A`, // 10% de opacidad del color
                            '--tag-text-color': step.color, 
                            '--tag-border-color': `${step.color}33` // 20% de opacidad del color
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default HowWeWork