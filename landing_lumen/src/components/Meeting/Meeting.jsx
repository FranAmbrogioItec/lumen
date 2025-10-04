// Meeting.jsx
import React, { useState } from 'react'
import styles from './Meeting.module.css'

const Meeting = () => {
  const [showForm, setShowForm] = useState(false)
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
    setShowForm(true)
    // Scroll suave a la sección del formulario
    setTimeout(() => {
      document.getElementById('reunion-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }, 100)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  // Vista Previa (CTA)
  if (!showForm) {
    return (
      <section id="reunion" className={styles.meetingPreview}>
        <div className="container">
          <div className={styles.previewContent}>
            <h2 className={styles.previewTitle}>
              DE LA IDEA A LA ACCIÓN, TRANSFORMAMOS TU MARCA EN RESULTADOS
            </h2>
            <p className={styles.previewSubtitle}>
              Estamos listos para convertir tu visión en una estrategia de crecimiento tangible. 
              Toma el primer paso hacia el éxito de tu proyecto.
            </p>
            <button 
              className={styles.ctaButton}
              onClick={handleCTAClick}
            >
              <span>Agenda tu reunión</span>
              <div className={styles.ctaGlow}></div>
            </button>
            
            {/* Elementos decorativos de fondo */}
            <div className={styles.previewOrbs}>
              <div className={styles.orb1}></div>
              <div className={styles.orb2}></div>
              <div className={styles.orb3}></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Vista Completa (Formulario)
  return (
    <section id="reunion-form" className={styles.meeting}>
      {/* Botón para cerrar/volver */}
      <button 
        className={styles.closeFormButton}
        onClick={handleCloseForm}
        aria-label="Volver a la vista anterior"
      >
        ← Volver
      </button>

      <div className="container">
        <div className={styles.meetingGrid}>
          {/* Información */}
          <div className={styles.infoSection}>
            <h2 className={`${styles.sectionTitle} text-semibold`}>
              AGENDA TU <span className={styles.accentText}>REUNIÓN</span>
            </h2>
            
            <p className={styles.sectionDescription}>
              Comencemos a transformar tu visión en realidad. Agenda una consulta gratuita 
              y descubramos juntos cómo podemos impulsar el crecimiento de tu negocio.
            </p>

            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>✓</div>
                <div className={styles.benefitText}>
                  <strong>Consulta sin costo</strong>
                  <span>Evaluación inicial gratuita de tu proyecto</span>
                </div>
              </div>
              
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🎯</div>
                <div className={styles.benefitText}>
                  <strong>Propuesta personalizada</strong>
                  <span>Estrategia adaptada a tus objetivos específicos</span>
                </div>
              </div>
              
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>⚡</div>
                <div className={styles.benefitText}>
                  <strong>Respuesta en 24h</strong>
                  <span>Te contactamos en menos de un día hábil</span>
                </div>
              </div>
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:hola@agencia.com" className={styles.contactLink}>
                  hola@agencia.com
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>WhatsApp</span>
                <a href="https://wa.me/123456789" className={styles.contactLink}>
                  +1 234 567 89
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className={styles.formSection}>
            <form className={styles.meetingForm} onSubmit={handleSubmit}>
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
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.formLabel}>Empresa</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={styles.formInput}
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
                ></textarea>
              </div>

              <button type="submit" className={`${styles.submitButton} btn btn-primary`}>
                <span>Agendar reunión</span>
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