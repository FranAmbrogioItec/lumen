// HowWeWork.jsx
import React, { useRef, useState } from 'react'
import styles from './HowWeWork.module.css'

const HowWeWork = () => {
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

  return (
    <section id="proceso" className={styles.howWeWork} ref={sectionRef}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} text-semibold`}>CÓMO TRABAJAMOS</h2>
          <p className={styles.sectionSubtitle}>
            Un proceso meticuloso diseñado para transformar ideas en resultados tangibles
          </p>
        </div>

        <div className={styles.processContainer}>
          <div className={styles.processSteps}>
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`${styles.stepCard} ${activeStep === index ? styles.active : ''}`}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
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

                <div className={styles.stepIndicator}>
                  <div className={styles.indicatorLine}></div>
                  <div className={styles.indicatorDot}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Progress */}
          <div className={styles.visualProgress}>
            <div 
              className={styles.progressBar}
              style={{ transform: `scaleX(${(activeStep + 1) / processSteps.length})` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork