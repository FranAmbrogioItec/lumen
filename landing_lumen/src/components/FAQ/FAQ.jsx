import React, { useState, useCallback } from 'react';
import { FiChevronDown, FiMessageSquare, FiCode, FiDollarSign, FiClock, FiTrendingUp } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = useCallback((index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }, [activeIndex]);

  const faqItems = [
    {
      question: "¿Qué servicios incluye el desarrollo web completo?",
      answer: "Nuestro desarrollo web integral incluye: diseño UX/UI personalizado, desarrollo frontend y backend, integración de CMS, optimización SEO, hosting profesional, certificado SSL y mantenimiento continuo. Trabajamos con tecnologías modernas como React, Node.js, y bases de datos optimizadas.",
      icon: <FiCode />
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto de marketing digital?",
      answer: "El timeline varía según los objetivos: Estrategias básicas (2-3 semanas), Campañas integrales (4-6 semanas), y Proyectos de branding completo (8-12 semanas). Incluimos fases de investigación, planificación, implementación y análisis de resultados.",
      icon: <FiClock />
    },
    {
      question: "¿Qué resultados puedo esperar en términos de ROI?",
      answer: "Nuestros clientes typically ven: Incremento del 40-150% en leads calificados, reducción del 30% en costos de adquisición, mejora del 25-60% en tasa de conversión, y aumento del tráfico orgánico en 3-6 meses. Proporcionamos reportes mensuales detallados.",
      icon: <FiTrendingUp />
    },
    {
      question: "¿Ofrecen servicios de mantenimiento post-lanzamiento?",
      answer: "Sí, incluimos 30 días de soporte gratuito y ofrecemos planes de mantenimiento mensual que incluyen: actualizaciones de seguridad, backups automáticos, monitoreo 24/7, optimización de performance y soporte técnico prioritario.",
      icon: <FiMessageSquare />
    },
    {
      question: "¿Cómo estructuran sus precios y pagos?",
      answer: "Trabajamos con modelos flexibles: Proyectos fijos (precio cerrado), Retainer mensual (para marketing continuo), y Precios por hora (desarrollo específico). Ofrecemos planes de pago escalonados y transparentes sin costos ocultos.",
      icon: <FiDollarSign />
    }
  ];

  const handleCTAClick = useCallback((e) => {
    e.preventDefault();
    const reunionSection = document.getElementById('reunion');
    if (reunionSection) {
      reunionSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 relative overflow-hidden transform-gpu scroll-mt-20">
      {/* Partículas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-red-400/5 to-transparent rounded-full blur-3xl -top-24 -left-24 animate-float opacity-5"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-br from-blue-400/5 to-transparent rounded-full blur-3xl -bottom-12 -right-12 animate-float animation-delay-2000 opacity-5"></div>
        <div className="absolute w-48 h-48 bg-gradient-to-br from-green-400/5 to-transparent rounded-full blur-3xl top-1/2 left-3/4 animate-float animation-delay-4000 opacity-5"></div>
        
        {/* Elementos flotantes naranjas */}
        <div className="hidden lg:block absolute w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-sm top-1/5 right-1/6 animate-float animation-delay-1000"></div>
        <div className="hidden lg:block absolute w-20 h-20 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-sm bottom-1/3 left-1/10 animate-float animation-delay-3000"></div>
        <div className="hidden lg:block absolute w-36 h-36 bg-gradient-to-br from-orange-400/10 to-orange-400/5 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] top-1/6 left-1/20 animate-float animate-morph opacity-10 blur-sm"></div>
        <div className="hidden lg:block absolute w-24 h-24 bg-gradient-to-br from-orange-400/10 to-orange-400/5 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bottom-1/5 right-1/12 animate-float animation-delay-4000 animate-morph opacity-10 blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            PREGUNTAS FRECUENTES
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-orange-500 mt-2"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Resolvemos tus dudas sobre nuestros servicios de desarrollo y marketing digital
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-3 mb-10">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl transition-all duration-300 transform-gpu hover:-translate-y-0.5 ${
                  activeIndex === index 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/10' 
                    : 'shadow-sm hover:border-orange-500 hover:shadow-md'
                }`}
              >
                <button 
                  className="w-full bg-transparent border-none px-6 py-5 text-left cursor-pointer flex justify-between items-center text-gray-800 transition-colors duration-200 hover:bg-orange-50 active:bg-orange-100 tap-highlight-transparent"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  type="button"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      activeIndex === index 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-orange-100 text-orange-500'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-regular text-gray-800 text-left text-base leading-tight">
                      {item.question}
                    </span>
                  </div>
                  <FiChevronDown 
                    className={`text-gray-400 text-xl transition-transform duration-300 flex-shrink-0 ml-3 ${
                      activeIndex === index ? 'rotate-180 text-orange-500' : ''
                    }`} 
                    aria-hidden="true"
                  />
                </button>
                
                <div 
                  className={`transition-all duration-350 overflow-hidden ${
                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 ml-16">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-10 backdrop-blur-sm relative overflow-hidden shadow-sm mb-8">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-64 h-64 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-2xl bottom-0 left-1/5 opacity-40"></div>
                <div className="absolute w-64 h-64 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl top-0 right-1/5 opacity-40"></div>
              </div>
              
              <h3 className="text-2xl font-regular text-gray-800 mb-3 relative">
                ¿No encontraste tu respuesta?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                Contáctanos directamente y te asesoraremos personalmente sobre tu proyecto
              </p>
              <button 
                className="relative bg-orange-500 text-white px-8 py-4 rounded-lg font-regular transition-all duration-250 hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25 active:translate-y-0 active:shadow-none tap-highlight-transparent"
                onClick={handleCTAClick}
                type="button"
              >
                Agendar Consulta Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FAQ);