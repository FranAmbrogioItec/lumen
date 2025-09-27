import React, { useEffect, useRef, useState } from 'react'
import styles from './Process.module.css'

const Process = () => {
  const processRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Consulta Inicial",
      description: "Analizamos tus necesidades y objetivos en una primera reunión."
    },
    {
      title: "Planificación Estratégica",
      description: "Desarrollamos una estrategia personalizada para tu proyecto."
    },
    {
      title: "Diseño y Desarrollo",
      description: "Creamos y desarrollamos las soluciones acordadas."
    },
    {
      title: "Implementación",
      description: "Lanzamos tu proyecto y monitoreamos su performance."
    },
    {
      title: "Seguimiento",
      description: "Realizamos ajustes y optimizaciones continuas."
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (processRef.current) {
      observer.observe(processRef.current)
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <section id="proceso" className={styles.process} ref={processRef}>
      <div className="container">
        <h2 className={`section-title text-semibold reveal`}>
          PASO A PASO DESDE TU PRIMER LLAMADA
        </h2>
        <p className={styles.processSubtitle}>
          CÓMO IMPLEMENTAMOS NUESTRA ESTRATEGIA EN TU PROYECTO
        </p>
        
        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`${styles.step} ${index === activeStep ? styles.active : ''} reveal`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className={styles.stepNumber}>
                {index + 1}
              </div>
              <div className={styles.stepContent}>
                <h3 className="text-semibold">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.processVisual}>
          <div className={styles.carousel}>
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`${styles.carouselItem} ${index === activeStep ? styles.active : ''}`}
              >
                <div className={styles.carouselContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process