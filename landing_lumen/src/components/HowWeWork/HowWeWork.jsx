import React, { useRef, useState, useEffect } from 'react'
// Ya no importamos estilos CSS modules
// import styles from './HowWeWork.module.css'

import stepImage1 from '../../assets/work2.png' 
import stepImage2 from '../../assets/work5.png' 
import stepImage3 from '../../assets/work6.png' 
import stepImage4 from '../../assets/work.png' 

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false) 

  const processSteps = [
    {
      number: "01",
      title: "DESCUBRIMIENTO Y ANÁLISIS",
      mainContent: "Aquí **comenzamos la inmersión** en tu proyecto. Analizamos exhaustivamente tu mercado, tu competencia directa y las tendencias. Establecemos **objetivos SMART** y definimos el verdadero potencial de tu marca. Es la fase de la 'radiografía' del proyecto.",
      cardTitle: "Análisis y Setup",
      cardFeatures: ["Análisis de mercado", "Definición de objetivos", "Auditoría inicial"],
      color: "#E74C3C", 
      image: stepImage1,
    },
    {
      number: "02",
      title: "ESTRATEGIA Y PLANIFICACIÓN",
      mainContent: "Con el diagnóstico en mano, **diseñamos el mapa de ruta**. Creamos una estrategia digital personalizada, definimos las plataformas clave, el tono de comunicación y, lo más importante, un **Roadmap de implementación** con metas medibles (KPIs) a corto y largo plazo.",
      cardTitle: "Diseño del Roadmap",
      cardFeatures: ["Planificación estratégica", "Definición de KPIs", "Roadmap detallado"],
      color: "#4B8FCE", 
      image: stepImage2,
    },
    {
      number: "03",
      title: "EJECUCIÓN Y DESARROLLO",
      mainContent: "Ponemos el plan en acción. Implementamos las soluciones con **metodologías ágiles** (diseño, desarrollo, campañas). Nos enfocamos en la **velocidad y la calidad**, asegurando que cada pieza de contenido o código cumpla con los estándares más altos.",
      cardTitle: "Desarrollo Ágil",
      cardFeatures: ["Desarrollo web/gráfica", "Implementación", "Seguimiento en tiempo real"],
      color: "#FFC300", 
      image: stepImage3,
    },
    {
      number: "04",
      title: "OPTIMIZACIÓN Y ESCALAMIENTO",
      mainContent: "El trabajo nunca termina. Monitorizamos constantemente el rendimiento, utilizando **datos reales para optimizar campañas** y contenidos. Lo que funciona, se escala. Lo que no, se ajusta. **Aseguramos el crecimiento** continuo y sostenido de tu inversión.",
      cardTitle: "Data y Escalamiento",
      cardFeatures: ["Análisis de datos", "Optimización continua", "Reportes de impacto"],
      color: "#4CAF50", 
      image: stepImage4,
    }
  ]

  const totalSteps = processSteps.length
  
  const handleStepChange = (newStep) => {
    if (newStep >= 0 && newStep < totalSteps) {
        setActiveStep(newStep)
    }
  }
  
  const nextStep = () => {
    if (activeStep < totalSteps - 1) setActiveStep((prev) => prev + 1)
  }

  const prevStep = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1)
  }

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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current) }
  }, [])
  
  const activeContent = processSteps[activeStep]

  return (
    <section 
      id="trabajamos" 
      className="py-[120px] bg-[#f7f7f9] relative overflow-hidden text-[#333]"
      ref={sectionRef}
    >
      {/* --- FONDO ANIMADO (PARTÍCULAS) --- */}
      {/* Nota: Mantenemos algunas clases personalizadas para los gradientes complejos si no quieres llenar el HTML de clases arbitrarias largas, pero aquí las traduje a Tailwind arbitrario donde fue posible */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Partícula 1 */}
        <div className="absolute rounded-full blur-[60px] opacity-5 animate-float w-[400px] h-[400px] -top-[100px] -left-[100px] bg-[radial-gradient(circle,#E74C3C_0%,transparent_70%)]" />
        {/* Partícula 2 */}
        <div className="absolute rounded-full blur-[60px] opacity-5 animate-float [animation-delay:2s] w-[300px] h-[300px] -bottom-[50px] -right-[50px] bg-[radial-gradient(circle,#3498DB_0%,transparent_70%)]" />
        {/* Partícula 3 */}
        <div className="absolute rounded-full blur-[60px] opacity-5 animate-float [animation-delay:4s] w-[200px] h-[200px] top-1/2 left-[70%] bg-[radial-gradient(circle,#2ECC71_0%,transparent_70%)]" />
        
        {/* Orbes naranjas flotantes */}
        <div className="absolute rounded-full blur-[2px] animate-float [animation-delay:1s] w-[120px] h-[120px] top-[20%] right-[15%] bg-[radial-gradient(circle,rgba(231,76,60,0.15)_0%,transparent_70%)]" />
        <div className="absolute rounded-full blur-[2px] animate-float [animation-delay:3s] w-[80px] h-[80px] bottom-[30%] left-[10%] bg-[radial-gradient(circle,rgba(231,76,60,0.15)_0%,transparent_70%)]" />
        
        {/* Formas flotantes */}
        <div className="absolute animate-morph blur-[5px] w-[150px] h-[150px] top-[15%] left-[5%] bg-gradient-to-tr from-[rgba(231,76,60,0.1)] to-[rgba(231,76,60,0.05)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-[70px] max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-[3.2rem] font-bold text-[#111] -tracking-[1px] leading-tight">
            CÓMO IMPLEMENTAMOS NUESTRA ESTRATEGIA
          </h2>
        </div>

        {/* --- ESTRUCTURA GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-[1200px] mx-auto items-center">
          
          {/* COLUMNA IZQUIERDA: Texto */}
          {/* Usamos clases de utilidad para la transición de entrada */}
          <div className={`px-0 lg:px-5 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            
            <h3 
                className="text-[2rem] md:text-[2.2rem] font-bold leading-[1.3] mb-8 text-[#111] transition-all duration-300"
                // Variable CSS local para usar en Tailwind arbitrary values si se desea
                style={{ '--accent-color': activeContent.color }}
            >
                <span className="block text-[3.5rem] md:text-[4rem] font-extrabold leading-none mb-2 text-[color:var(--accent-color)] transition-colors duration-500">
                  {activeContent.number}
                </span>
                {activeContent.title}
            </h3>
            
            {/* Contenido HTML inyectado */}
            {/* Usamos [&_strong] para estilizar las etiquetas strong internas */}
            <div 
              className="text-lg text-[#444] leading-[1.7] mb-10 transition-opacity duration-300 [&_strong]:font-bold [&_strong]:text-[#f05a1f]"
              dangerouslySetInnerHTML={{ __html: activeContent.mainContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} 
            />
            
            {/* NAVEGACIÓN: Puntos */}
            <div className="flex gap-4 mb-10 justify-center lg:justify-start">
                {processSteps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleStepChange(index)}
                        aria-label={`Ir al paso ${index + 1}`}
                        style={{ '--dot-color': processSteps[index].color }}
                        className={`
                          w-3 h-3 rounded-full border-2 border-[#ddd] p-0 transition-all duration-300 hover:scale-110
                          ${index === activeStep 
                            ? 'bg-[var(--dot-color)] border-[#fcfcfc] shadow-[0_0_0_4px_#fcfcfc,0_0_0_10px_var(--dot-color)]' 
                            : 'bg-[#ccc]'
                          }
                        `}
                    ></button>
                ))}
            </div>

            {/* NAVEGACIÓN: Flechas */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {/* Botón Anterior */}
              <button 
                onClick={prevStep} 
                disabled={activeStep === 0}
                aria-label="Paso anterior"
                style={{ '--btn-color': activeContent.color }}
                className="
                  w-[45px] h-[45px] flex justify-center items-center rounded-full border border-[#ccc] bg-white text-[#333] 
                  text-xl font-semibold transition-all duration-300 
                  hover:bg-[var(--btn-color)] hover:border-[var(--btn-color)] hover:text-white hover:-translate-y-[2px] hover:shadow-lg
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-[#f5f5f5] disabled:text-[#999] disabled:hover:transform-none disabled:hover:shadow-none
                "
              >
                {'<'}
              </button>
              
              {/* Botón Siguiente */}
              <button 
                onClick={nextStep} 
                disabled={activeStep === totalSteps - 1}
                aria-label="Siguiente paso"
                style={{ '--btn-color': activeContent.color }}
                className="
                  w-[45px] h-[45px] flex justify-center items-center rounded-full border border-[#ccc] bg-white text-[#333] 
                  text-xl font-semibold transition-all duration-300 
                  hover:bg-[var(--btn-color)] hover:border-[var(--btn-color)] hover:text-white hover:-translate-y-[2px] hover:shadow-lg
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-[#f5f5f5] disabled:text-[#999] disabled:hover:transform-none disabled:hover:shadow-none
                "
              >
                {'>'}
              </button>
            </div>
            
          </div>
          
          {/* COLUMNA DERECHA: Carrusel */}
          <div className={`px-0 lg:px-5 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            <div className="relative w-full overflow-hidden rounded-[15px] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-black/5 min-h-[450px]">
              
              <div className="relative w-full h-full">
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    style={{ '--card-color': step.color }}
                    className={`
                      absolute top-0 left-0 w-full h-full p-8 md:p-10 flex flex-col justify-between items-center text-center bg-white transition-opacity duration-500 ease-in-out
                      ${index === activeStep ? 'opacity-100 relative pointer-events-auto' : 'opacity-0 pointer-events-none'}
                    `}
                  >
                    {/* Imagen con brillo */}
                    <div className="relative w-full max-w-[250px] mb-6 mx-auto">
                        <img 
                            src={step.image} 
                            alt={`Paso ${step.number} - ${step.cardTitle}`} 
                            className="w-full h-auto object-contain relative z-10 drop-shadow-md block"
                        />
                        {/* Glow dinámico */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[var(--card-color)] opacity-15 blur-[50px] transition-colors duration-500"></div>
                    </div>
                    
                    <h4 className="text-2xl md:text-[1.6rem] font-bold text-[#111] mb-4">
                      {step.cardTitle}
                    </h4>
                    
                    {/* Tags */}
                    <div className="flex justify-center flex-wrap gap-2 mt-auto">
                      {step.cardFeatures.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className="px-4 py-2 rounded-full text-sm font-medium border bg-opacity-10"
                          style={{ 
                            backgroundColor: `${step.color}1A`, // Hex con opacidad
                            color: step.color, 
                            borderColor: `${step.color}33` 
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