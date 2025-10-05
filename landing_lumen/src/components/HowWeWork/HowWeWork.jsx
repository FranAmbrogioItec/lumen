// HowWeWork.jsx
import React, { useRef, useState } from 'react'
import styles from './HowWeWork.module.css'

const HowWeWork = () => {
  // CAMBIO: activeStep ahora controla el índice visible del carrusel
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)

  const processSteps = [
    {
      number: "01",
      title: "DESCUBRIMIENTO",
      description: "Analizamos tu mercado, competencia y objetivos para entender tus necesidades específicas.",
      features: ["Análisis de mercado", "Definición de objetivos", "Auditoría inicial"]
    },
    {
      number: "02",
      title: "ESTRATEGIA",
      description: "Creamos un plan personalizado con KPIs claros y roadmap de implementación.",
      features: ["Planificación estratégica", "Definición de KPIs", "Roadmap detallado"]
    },
    {
      number: "03",
      title: "EJECUCIÓN",
      description: "Desarrollamos e implementamos las soluciones con metodologías ágiles y seguimiento continuo.",
      features: ["Desarrollo ágil", "Implementación", "Seguimiento en tiempo real"]
    },
    {
      number: "04",
      title: "OPTIMIZACIÓN",
      description: "Medimos resultados, optimizamos estrategias y escalamos lo que funciona.",
      features: ["Análisis de datos", "Optimización continua", "Escalamiento"]
    }
  ]

  const totalSteps = processSteps.length
  
  // Función para avanzar en el carrusel
  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % totalSteps)
  }

  // Función para retroceder en el carrusel
  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + totalSteps) % totalSteps)
  }

  return (
    <section id="proceso" className={styles.howWeWork} ref={sectionRef}>
      {/* CAMBIO: Partículas flotantes de background */}
      <div className={styles.howWeWorkBackground}>
        <div className={styles.backgroundParticle1}></div>
        <div className={styles.backgroundParticle2}></div>
      </div>
      
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} text-bold`}>CÓMO TRABAJAMOS</h2>
          <p className={styles.sectionSubtitle}>Nuestro proceso se basa en **cuatro fases clave** para asegurar resultados medibles y un crecimiento sostenido para tu marca.</p>
        </div>

        <div className={styles.processContainer}>
          
          {/* CAMBIO: Contenedor para el carrusel */}
          <div className={styles.carouselWrapper}>
            <div 
              className={styles.processSteps}
              // Transforma el contenedor para mostrar la tarjeta activa
              style={{ transform: `translateX(-${activeStep * (100 / totalSteps)}%)` }}
            >
              {processSteps.map((step, index) => (
                // La tarjeta se mantiene simple, el dinamismo está en el wrapper
                <div 
                  key={index}
                  className={`${styles.stepCard} ${index === activeStep ? styles.active : ''}`}
                >
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <h3 className={`${styles.stepTitle} text-semibold`}>{step.title}</h3>
                  </div>
                  
                  <div className={styles.stepContent}>
                    <p className={styles.stepDescription}>{step.description}</p>
                    
                    <div className={styles.stepFeatures}>
                      {step.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className={styles.featureTag}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
          
          {/* Controles de Navegación del Carrusel */}
          <div className={styles.carouselControls}>
            <button 
              className={styles.controlButton} 
              onClick={prevStep} 
              disabled={activeStep === 0}
              aria-label="Paso anterior"
            >
              {'<'}
            </button>
            <span className={styles.stepPagination}>
              {activeStep + 1} / {totalSteps}
            </span>
            <button 
              className={styles.controlButton} 
              onClick={nextStep} 
              disabled={activeStep === totalSteps - 1}
              aria-label="Siguiente paso"
            >
              {'>'}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowWeWork