import React, { useRef, useState, useEffect } from 'react'
// Asegúrate de importar la imagen que servirá de portada del Reel
import reelPreviewImage from '../../assets/lumen.png' // O la imagen que prefieras como portada

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false) 

  // URL a la que quieres redirigir (ej: tu Instagram)
  const REEL_LINK = "https://www.instagram.com/p/DRLZmbFjchz/"

  const processSteps = [
    {
      number: "01",
      title: "DESCUBRIMIENTO Y ANÁLISIS",
      mainContent: "Aquí **comenzamos la inmersión** en tu proyecto. Analizamos exhaustivamente tu mercado, tu competencia directa y las tendencias. Establecemos **objetivos SMART** y definimos el verdadero potencial de tu marca.",
      color: "#E74C3C", 
    },
    {
      number: "02",
      title: "ESTRATEGIA Y PLANIFICACIÓN",
      mainContent: "Con el diagnóstico en mano, **diseñamos el mapa de ruta**. Creamos una estrategia digital personalizada, definimos las plataformas clave, el tono de comunicación y un **Roadmap de implementación** con metas medibles.",
      color: "#4B8FCE", 
    },
    {
      number: "03",
      title: "EJECUCIÓN Y DESARROLLO",
      mainContent: "Ponemos el plan en acción con **metodologías ágiles**. Nos enfocamos en la **velocidad y la calidad**, asegurando que cada pieza de contenido, diseño o línea de código cumpla con los estándares más altos del mercado.",
      color: "#FFC300", 
    },
    {
      number: "04",
      title: "OPTIMIZACIÓN Y ESCALAMIENTO",
      mainContent: "El trabajo nunca termina. Monitorizamos constantemente el rendimiento utilizando **datos reales**. Lo que funciona, se escala. Lo que no, se ajusta. **Aseguramos el crecimiento** continuo de tu inversión.",
      color: "#4CAF50", 
    }
  ]

  const totalSteps = processSteps.length
  const activeContent = processSteps[activeStep]
  
  const handleStepChange = (newStep) => {
    if (newStep >= 0 && newStep < totalSteps) setActiveStep(newStep)
  }
  
  const nextStep = () => {
    if (activeStep < totalSteps - 1) setActiveStep((prev) => prev + 1)
    else setActiveStep(0) // Loop al inicio si se desea
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current) }
  }, [])
  

  return (
    <section 
      id="trabajamos" 
      className="py-20 md:py-32 bg-[#f7f7f9] relative overflow-hidden text-[#333]"
      ref={sectionRef}
    >
      {/* --- FONDO DECORATIVO (Partículas) --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute rounded-full blur-[80px] opacity-[0.03] animate-float w-[500px] h-[500px] -top-[100px] -left-[100px] bg-red-500" />
        <div className="absolute rounded-full blur-[80px] opacity-[0.03] animate-float [animation-delay:2s] w-[400px] h-[400px] bottom-0 right-0 bg-blue-500" />
      </div>
      
      <div className="container mx-auto px-5 relative z-10">
        
        {/* TITLE HEADER */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#111] tracking-tight leading-tight mb-4">
            NUESTRO PROCESO
          </h2>
          <p className="text-gray-500 text-lg">
            Transformamos ideas complejas en resultados tangibles a través de 4 etapas clave.
          </p>
        </div>

        {/* --- GRID PRINCIPAL --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          
          {/* === COLUMNA IZQUIERDA: Texto Dinámico === */}
          <div className={`order-2 lg:order-1 flex flex-col justify-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Wrapper del contenido textual */}
            <div className="mb-8">
                {/* Número del paso con color dinámico */}
                <span 
                    className="block text-6xl md:text-7xl font-black leading-none mb-4 transition-colors duration-500"
                    style={{ color: activeContent.color }}
                >
                  {activeContent.number}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-[#111] mb-6 min-h-[3.5rem] flex items-center">
                    {activeContent.title}
                </h3>
                
                {/* CLAVE UX: min-h-[180px] evita que el contenido "salte" cuando cambia el texto */}
                <div className="min-h-[160px] md:min-h-[180px]">
                    <div 
                        key={activeStep} // La key fuerza la animación de re-renderizado
                        className="text-lg text-gray-600 leading-relaxed animate-[fadeIn_0.5s_ease-in-out]"
                    >
                        <p dangerouslySetInnerHTML={{ 
                            __html: activeContent.mainContent.replace(/\*\*(.*?)\*\*/g, `<strong style="color:${activeContent.color}">$1</strong>`) 
                        }} />
                    </div>
                </div>
            </div>
            
            {/* CONTROLES DE NAVEGACIÓN (Ahora estables gracias al min-h de arriba) */}
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mt-4">
                
                {/* Indicadores (Puntos) */}
                <div className="flex gap-3">
                    {processSteps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => handleStepChange(index)}
                            aria-label={`Ir al paso ${index + 1}`}
                            className={`
                              h-3 rounded-full transition-all duration-300
                              ${index === activeStep ? 'w-8' : 'w-3 bg-gray-300 hover:bg-gray-400'}
                            `}
                            style={{ backgroundColor: index === activeStep ? step.color : undefined }}
                        ></button>
                    ))}
                </div>

                {/* Flechas */}
                <div className="flex gap-3">
                  <button 
                    onClick={prevStep} 
                    className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-black hover:text-black hover:bg-white transition-all active:scale-95"
                    aria-label="Anterior"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
                  </button>
                  
                  <button 
                    onClick={nextStep} 
                    className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center hover:bg-black hover:scale-105 hover:shadow-lg transition-all active:scale-95"
                    aria-label="Siguiente"
                    style={{ backgroundColor: activeContent.color }}
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </div>
            </div>
            
          </div>
          
          {/* === COLUMNA DERECHA: Mockup de Celular (Reel) === */}
          <div className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Contenedor "Celular" */}
            <a 
                href={REEL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-[280px] sm:w-[300px] aspect-[9/19] rounded-[2.5rem] border-[8px] border-[#111] bg-[#111] shadow-2xl overflow-hidden transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] cursor-pointer block"
            >
                {/* Notch (Muesca del celular) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#111] rounded-b-xl z-20"></div>
                
                {/* Imagen del Reel */}
                <img 
                    src={reelPreviewImage} 
                    alt="Ver Reel de nuestro proceso" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Oscuro al Hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>

                {/* Botón Play y Texto */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-3 border border-white/30 shadow-lg">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    <span className="text-white font-semibold tracking-wide text-sm bg-black/50 px-4 py-1 rounded-full backdrop-blur-sm">
                        Ver en Instagram
                    </span>
                </div>

                {/* Indicador de "Grabando" (Detalle UI) */}
                <div className="absolute top-3 right-5 w-2 h-2 bg-red-500 rounded-full animate-pulse z-20"></div>
            </a>

            {/* Elemento decorativo detrás del celular */}
            <div 
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[60%] bg-gradient-to-b from-transparent to-gray-200/50 rounded-full blur-3xl"
                style={{ 
                    background: `radial-gradient(circle, ${activeContent.color}20 0%, transparent 70%)` 
                }}
            ></div>

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default HowWeWork