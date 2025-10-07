import React, { useState, useEffect } from 'react'
import styles from './Meeting.module.css'
import { FiCheckCircle, FiTarget, FiZap, FiPhone, FiMail, FiArrowLeft, FiCalendar } from 'react-icons/fi' 

const Meeting = () => {
  const [showForm, setShowForm] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  })

  const projectTypes = [
    'Diseño Gráfico',
    'Desarrollo Web',
    'Marketing Digital',
    'Branding',
    'Consultoría',
    'Otro'
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    // Opcional: resetear el formulario después del envío
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: ''
    })
  }

  const handleCTAClick = () => {
    setIsTransitioning(true)
    
    setTimeout(() => {
      setShowForm(true)
      setTimeout(() => {
        document.getElementById('reunion-form')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        setIsTransitioning(false)
      }, 300)
    }, 200)
  }

  const handleCloseForm = () => {
    setIsTransitioning(true)
    
    setTimeout(() => {
      setShowForm(false)
      setTimeout(() => {
        document.getElementById('reunion')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        setIsTransitioning(false)
      }, 300)
    }, 200)
  }

  // Vista Previa (CTA)
  if (!showForm) {
    return (
      <section 
        id="reunion" 
        className={`${styles.meetingPreview} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
      >
        <div className={styles.backgroundImage}></div>
        <div className={styles.overlay}></div>
        
        {/* Partículas decorativas */}
        <div className={styles.floatingElements}>
          <div className={styles.floatingOrb1}></div>
          <div className={styles.floatingOrb2}></div>
          <div className={styles.floatingShape1}></div>
        </div>

        <div className="container">
          <div className={styles.previewContent}>
            <div className={styles.previewText}>
            <h2 className={styles.previewTitle}>
            DE LA IDEA A LA ACCIÓN,{' '}
            <span className={styles.boldText}>TRANSFORMAMOS TU MARCA EN RESULTADOS</span>
          </h2>
{/*               <p className={styles.previewSubtitle}>
              Tu proyecto de desarrollo y marketing necesita un motor potente. Agenda tu consulta gratuita y transforma tu visión en resultados tangibles.
              </p> */}
              
{/*               <div className={styles.ctaFeatures}>
                <div className={styles.featureItem}>
                  <FiCheckCircle className={styles.featureIcon} />
                  <span>Consulta 100% gratuita</span>
                </div>
                <div className={styles.featureItem}>
                  <FiTarget className={styles.featureIcon} />
                  <span>Propuesta personalizada</span>
                </div>
                <div className={styles.featureItem}>
                  <FiZap className={styles.featureIcon} />
                  <span>Respuesta en 24h</span>
                </div>
              </div>
 */}
              <button 
                className={styles.ctaButton} 
                onClick={handleCTAClick}
                disabled={isTransitioning}
              >
                <FiCalendar className={styles.ctaIcon} />
                <span>{isTransitioning ? 'Cargando...' : 'Agendar mi reunión'}</span>
                <div className={styles.ctaGlow}></div>
              </button>

              <button 
                className={styles.ctaButton2} 
                onClick={handleCTAClick}
                disabled={isTransitioning}
              >
                <FiCalendar className={styles.ctaIcon} />
                <span>{isTransitioning ? 'Cargando...' : 'Quiero que me contacten'}</span>
                <div className={styles.ctaGlow}></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Vista Completa (Formulario)
  return (
    <section 
      id="reunion-form" 
      className={`${styles.meeting} ${showForm ? styles.activeForm : ''} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
    >
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}></div>
      
      {/* Botón para cerrar/volver */}
      <button 
        className={styles.closeFormButton}
        onClick={handleCloseForm}
        aria-label="Volver a la vista anterior"
        disabled={isTransitioning}
      >
        <FiArrowLeft className={styles.closeIcon} />
        Volver
      </button>

      <div className="container">
        <div className={styles.meetingGrid}>
          {/* Información */}
          <div className={styles.infoSection}>
            <div className={styles.infoContent}>
              <h2 className={styles.sectionTitle}>
                AGENDA TU <span className={styles.accentText}>REUNIÓN</span>
              </h2>
              
              <p className={styles.sectionDescription}>
                Comencemos a transformar tu visión en realidad. Agenda una consulta gratuita 
                y descubramos juntos cómo podemos impulsar el crecimiento de tu negocio.
              </p>

              <div className={styles.benefitsList}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}><FiCheckCircle /></div> 
                  <div className={styles.benefitText}>
                    <strong>Consulta sin costo</strong>
                    <span>Evaluación inicial gratuita de tu proyecto</span>
                  </div>
                </div>
                
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}><FiTarget /></div>
                  <div className={styles.benefitText}>
                    <strong>Propuesta personalizada</strong>
                    <span>Estrategia adaptada a tus objetivos específicos</span>
                  </div>
                </div>
                
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}><FiZap /></div>
                  <div className={styles.benefitText}>
                    <strong>Resultados rápidos</strong>
                    <span>Te contactamos en menos de un día hábil</span>
                  </div>
                </div>
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Contáctanos directamente:</span>
                  <a href="tel:+123456789" className={styles.contactLink}>
                    <FiPhone /> 
                    <span>+1 234 567 89</span>
                  </a>
                  <a href="mailto:lumen.agencia1@gmail.com" className={styles.contactLink}>
                    <FiMail /> 
                    <span>lumen.agencia1@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Solicita tu consulta</h3>
              <p className={styles.formSubtitle}>Completa el formulario y nos pondremos en contacto contigo</p>
            </div>
            
            <form onSubmit={handleSubmit} className={styles.meetingForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Nombre completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                  disabled={isTransitioning}
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email de contacto *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                  disabled={isTransitioning}
                  placeholder="tu.email@ejemplo.com"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.formLabel}>Empresa (opcional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  disabled={isTransitioning}
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="projectType" className={styles.formLabel}>Tipo de proyecto *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className={styles.formSelect}
                  required
                  disabled={isTransitioning}
                >
                  <option value="">Selecciona una opción</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Cuéntanos sobre tu proyecto</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  rows="4"
                  placeholder="Describe tus objetivos, necesidades y cualquier información relevante..."
                  disabled={isTransitioning}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isTransitioning}
              >
                <span>{isTransitioning ? 'Enviando...' : 'Enviar Solicitud'}</span>
                <div className={styles.buttonGlow}></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Meeting