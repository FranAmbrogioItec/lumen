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
    <section
      id="faq"
      className="relative py-[120px] bg-[linear-gradient(135deg,#fefefe_0%,#f8f9fa_50%,#f5f5f5_100%)] overflow-hidden scroll-mt-20 transform-gpu"
    >
      {/* Fondo Decorativo (Reemplaza ::before y partículas CSS) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Gradientes Sutiles de Fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(231,76,60,0.03)_0%,transparent_50%),radial-gradient(circle_at_90%_80%,rgba(75,143,206,0.03)_0%,transparent_50%)]"></div>

        {/* Partículas Flotantes (Solo Desktop - hidden lg:block) */}
        <div className="hidden lg:block absolute w-[400px] h-[400px] rounded-full blur-[60px] opacity-5 -top-[100px] -left-[100px] animate-float"
          style={{ background: 'radial-gradient(circle, #E74C3C 0%, transparent 70%)' }}></div>

        <div className="hidden lg:block absolute w-[300px] h-[300px] rounded-full blur-[60px] opacity-5 -bottom-[50px] -right-[50px] animate-float animation-delay-2000"
          style={{ background: 'radial-gradient(circle, #3498DB 0%, transparent 70%)' }}></div>

        <div className="hidden lg:block absolute w-[200px] h-[200px] rounded-full blur-[60px] opacity-5 top-1/2 left-[70%] animate-float animation-delay-4000"
          style={{ background: 'radial-gradient(circle, #2ECC71 0%, transparent 70%)' }}></div>

        {/* Elementos Naranjas Flotantes */}
        <div className="hidden lg:block absolute w-[120px] h-[120px] rounded-full blur-[2px] opacity-100 animate-float top-[20%] right-[15%] animation-delay-1000"
          style={{ background: 'radial-gradient(circle, rgba(231, 76, 60, 0.15) 0%, transparent 70%)' }}></div>

        <div className="hidden lg:block absolute w-20 h-20 rounded-full blur-[2px] opacity-100 animate-float bottom-[30%] left-[10%] animation-delay-3000"
          style={{ background: 'radial-gradient(circle, rgba(231, 76, 60, 0.15) 0%, transparent 70%)' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 lg:mb-[60px]">
          <h2 className="text-[2rem] lg:text-[3.2rem] font-bold text-gray-800 mb-4 relative inline-block">
            PREGUNTAS FRECUENTES
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[50px] h-[2px] bg-[#f05a1f]"></span>
          </h2>
          <p className="text-gray-500 max-w-[600px] mx-auto text-[0.95rem] lg:text-[1rem] leading-[1.5] mt-4">
            Resolvemos tus dudas sobre nuestros servicios de desarrollo y marketing digital
          </p>
        </div>

        <div className="max-w-[900px] mx-auto">
          {/* Grid de Preguntas */}
          <div className="flex flex-col gap-3 mb-10 lg:mb-[60px]">
            {faqItems.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`
                    bg-white/95 backdrop-blur-[8px] border rounded-[10px] overflow-hidden transition-all duration-250 ease-out transform-gpu
                    ${isActive
                      ? 'border-[#f05a1f] shadow-[0_8px_25px_rgba(231,76,60,0.12)]'
                      : 'border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-[#f05a1f] hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]'
                    }
                  `}
                >
                  <button
                    className="w-full bg-transparent border-none px-4 py-[18px] lg:px-6 lg:py-5 text-left cursor-pointer flex justify-between items-center text-gray-800 transition-colors duration-200 hover:bg-[#E74C3C]/5 tap-highlight-transparent group"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isActive}
                    type="button"
                  >
                    <div className="flex items-center gap-3 lg:gap-4 flex-1">
                      <div className={`
                        w-8 h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 text-[1rem] lg:text-[1.1rem]
                        ${isActive
                          ? 'bg-[#f05a1f] text-white'
                          : 'bg-[#E74C3C]/10 text-[#f05a1f]'
                        }
                      `}>
                        {item.icon}
                      </div>
                      <span className="font-normal text-gray-800 text-left text-[0.95rem] lg:text-[1rem] leading-tight group-hover:text-gray-900">
                        {item.question}
                      </span>
                    </div>
                    <FiChevronDown
                      className={`
                        text-gray-400 text-xl transition-transform duration-300 flex-shrink-0 ml-3
                        ${isActive ? 'rotate-180 text-[#f05a1f]' : ''}
                      `}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Respuesta con Animación de Altura */}
                  <div
                    className={`
                      transition-[max-height] duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden
                      ${isActive ? 'max-h-[800px]' : 'max-h-0'}
                    `}
                  >
                    <div className="px-4 pb-5 pl-[50px] lg:px-6 lg:pb-5 lg:pl-[80px]">
                      <p className="text-[#718096] leading-[1.6] text-[0.9rem] lg:text-[0.95rem]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center px-4">
            <div className="relative bg-[linear-gradient(135deg,#ffffff_0%,#f8f9fa_100%)] border border-slate-200 rounded-[14px] p-8 lg:p-10 backdrop-blur-[8px] overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.04)] mb-8 max-w-[700px] mx-auto">
              {/* Decoración CTA */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(231,76,60,0.04)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(75,143,206,0.04)_0%,transparent_50%)]"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-[1.3rem] lg:text-[1.5rem] font-normal text-gray-800 mb-3">
                  ¿No encontraste tu respuesta?
                </h3>
                <p className="text-[#718096] mb-6 max-w-[500px] mx-auto leading-[1.5] text-[0.95rem] lg:text-[1rem]">
                  Contáctanos directamente y te asesoraremos personalmente sobre tu proyecto
                </p>
                <button
                  className="bg-[#f05a1f] text-white px-7 py-[14px] rounded-lg font-semibold text-[0.95rem] transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(231,76,60,0.25)] hover:bg-[#d0450b] active:translate-y-0 active:shadow-none tap-highlight-transparent w-full sm:w-auto"
                  onClick={handleCTAClick}
                  type="button"
                >
                  Agendar Consulta Gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FAQ);