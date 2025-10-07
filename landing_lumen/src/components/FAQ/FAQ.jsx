import React, { useState, useCallback } from 'react';
import styles from './FAQ.module.css';
import { FiChevronDown, FiMessageSquare, FiCode, FiDollarSign, FiClock, FiTrendingUp } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Usar useCallback para optimizar la función de toggle
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
    <section id="faq" className={styles.faq}>
      {/* Elementos de fondo optimizados - solo se muestran en desktop */}
      <div className={styles.heroBackground}>
        <div className={styles.backgroundParticle1}></div>
        <div className={styles.backgroundParticle2}></div>
        <div className={styles.backgroundParticle3}></div>
        
        {/* Elementos flotantes optimizados */}
        <div className={styles.floatingOrb1}></div>
        <div className={styles.floatingOrb2}></div>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
      </div>

      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            PREGUNTAS FRECUENTES
          </h2>
          <p className={styles.sectionSubtitle}>
            Resolvemos tus dudas sobre nuestros servicios de desarrollo y marketing digital
          </p>
        </div>

        <div className={styles.faqContainer}>
          <div className={styles.faqGrid}>
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              >
                <button 
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  type="button"
                >
                  <div className={styles.questionContent}>
                    <div className={styles.questionIcon}>
                      {item.icon}
                    </div>
                    <span className={styles.questionText}>{item.question}</span>
                  </div>
                  <FiChevronDown 
                    className={`${styles.chevron} ${activeIndex === index ? styles.rotated : ''}`} 
                    aria-hidden="true"
                  />
                </button>
                
                <div className={styles.faqAnswer}>
                  <div className={styles.answerContent}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>¿No encontraste tu respuesta?</h3>
              <p className={styles.ctaText}>
                Contáctanos directamente y te asesoraremos personalmente sobre tu proyecto
              </p>
              <button 
                className={styles.ctaButton}
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