// Meeting.jsx
import React, { useState } from 'react'
import { FiCheckCircle, FiTarget, FiZap, FiPhone, FiMail, FiArrowLeft, FiCalendar} from 'react-icons/fi'

const projectTypes = [
  'Diseño Gráfico',
  'Desarrollo Web',
  'Marketing Digital',
  'Branding',
  'Consultoría',
  'Otro'
]

const WHATSAPP_NUMBER = '5493513233866'

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // 1. Construir el mensaje de WhatsApp
    const whatsappMessage = `¡Hola! Me gustaría agendar una reunión. Detalles de la Solicitud: *Nombre:* ${formData.name} *Email:* ${formData.email} *Empresa:* ${formData.company || 'No especificada'} *Tipo de Proyecto:* ${formData.projectType} *Mensaje:* ${formData.message}`
    
    // 2. Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // 3. Crear el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

    // 4. Redireccionar al enlace
    window.open(whatsappLink, '_blank')

    // Opcional: Limpiar el formulario después del envío
    setFormData({
      name: '', email: '', company: '', projectType: '', message: ''
    })
    
    // Opcional: Volver a la vista de CTA después del envío
    // handleCloseForm();
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
  
  // --- Clases de Transición Tailwind ---
  const fadeIn = isTransitioning ? 'opacity-0 translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'
  const fadeOut = isTransitioning ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'

  // VISTA PREVIA (CTA)
  if (!showForm) {
    return (
      <section 
        id="reunion" 
        className={`relative overflow-hidden min-h-[85vh] flex items-center text-center text-white pt-20 transition-all duration-500 ease-in-out ${fadeOut}`}
      >
        {/* Fondo y Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-10" style={{ backgroundImage: "url('/meeting.jpg')"}}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/85 via-gray-900/78 to-gray-900/72 z-20"></div>
        
        {/* Contenido */}
        <div className="container mx-auto relative z-30 max-w-4xl px-5 py-10">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-0 leading-tight text-shadow-lg">
              DE LA IDEA A LA ACCIÓN,{' '}
              <span className="font-bold block mt-3">
                TRANSFORMAMOS TU MARCA EN RESULTADOS
              </span>
            </h2>
            
            <button 
              className="relative bg-orange-600 hover:bg-orange-700 active:bg-orange-800 border-2 border-white/10 hover:border-white/30 text-white font-bold py-5 px-10 rounded-full text-xl md:text-2xl cursor-pointer transition duration-400 shadow-xl shadow-orange-600/40 hover:shadow-orange-600/60 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden group min-h-[70px]"
              onClick={handleCTAClick}
              disabled={isTransitioning}
            >
              <FiCalendar className="text-2xl" />
              <span>{isTransitioning ? 'Cargando...' : 'Agenda tu reunión'}</span>
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-[100%]"></div>
            </button>
            
            {/* Opción alternativa a formulario, ahora también usa el CTA principal */}
            <button 
              className="relative bg-transparent text-orange-600 font-medium py-5 px-10 rounded-full text-lg cursor-pointer transition duration-400 hover:text-orange-500 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              onClick={handleCTAClick}
              disabled={isTransitioning}
            >
              <FiCalendar className="text-xl" />
              <span>{isTransitioning ? 'Cargando...' : 'Quiero que me contacten'}</span>
            </button>
          </div>
        </div>
      </section>
    )
  }

  // VISTA COMPLETA (FORMULARIO)
  return (
    <section 
      id="reunion-form" 
      // La clave es mt-20 (o mt-16) y scroll-mt-20 para compensar el header fijo
      className={`relative min-h-screen flex items-center text-white bg-gray-900 pt-20 scroll-mt-20 transition-all duration-500 ease-in-out ${fadeIn}`}
    >
      {/* Botón para cerrar/volver */}
      <button 
        className="fixed top-5 left-5 md:top-6 md:left-6 bg-gray-800 border border-gray-700 text-white py-3 px-5 rounded-full cursor-pointer text-sm font-regular transition-all duration-300 z-[100] backdrop-blur-md flex items-center gap-2 shadow-xl hover:bg-orange-600 hover:border-orange-600 hover:text-white disabled:opacity-60"
        onClick={handleCloseForm}
        aria-label="Volver a la vista anterior"
        disabled={isTransitioning}
      >
        <FiArrowLeft className="text-lg transition-transform duration-300 group-hover:-translate-x-1" />
        Volver
      </button>

      <div className="container mx-auto relative z-20 w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* Sección de Información (Orden 1 en Desktop, Orden 2 en Mobile por defecto) */}
          <div className="lg:order-1 order-2 px-4">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight text-center lg:text-left">
                AGENDA TU <span className="text-orange-500">REUNIÓN</span>
              </h2>
              
              <p className="text-lg text-gray-400 leading-relaxed mb-10 text-center lg:text-left">
                Comencemos a transformar tu visión en realidad. Agenda una consulta gratuita y descubramos juntos cómo podemos impulsar el crecimiento de tu negocio.
              </p>

              {/* Lista de Beneficios */}
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800 border border-gray-700 transition duration-300 hover:border-orange-600 hover:translate-x-1">
                  <div className="w-11 h-11 bg-orange-600/10 rounded-full flex items-center justify-center flex-shrink-0 text-orange-500 text-xl transition duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <FiCheckCircle />
                  </div> 
                  <div className="flex flex-col gap-1 flex-1">
                    <strong className="text-white font-extralight text-lg">Consulta sin costo</strong>
                    <span className="text-gray-400 text-sm">Evaluación inicial gratuita de tu proyecto</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800 border border-gray-700 transition duration-300 hover:border-orange-600 hover:translate-x-1">
                  <div className="w-11 h-11 bg-orange-600/10 rounded-full flex items-center justify-center flex-shrink-0 text-orange-500 text-xl transition duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <FiTarget />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <strong className="text-white font-extralight text-lg">Propuesta personalizada</strong>
                    <span className="text-gray-400 text-sm">Estrategia adaptada a tus objetivos específicos</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800 border border-gray-700 transition duration-300 hover:border-orange-600 hover:translate-x-1">
                  <div className="w-11 h-11 bg-orange-600/10 rounded-full flex items-center justify-center flex-shrink-0 text-orange-500 text-xl transition duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <FiZap />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <strong className="text-white font-extralight text-lg">Resultados rápidos</strong>
                    <span className="text-gray-400 text-sm">Te contactamos en menos de un día hábil</span>
                  </div>
                </div>
              </div>

              {/* Información de Contacto */}
              <div className="flex flex-col gap-3 text-center lg:text-left pt-5 border-t border-gray-700/50">
                <span className="text-sm text-gray-400 font-medium">Contáctanos directamente:</span>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-white text-lg transition duration-300 hover:text-orange-500 flex items-center justify-center lg:justify-start gap-2">
                  <FiPhone /> 
                  <span>+54 9 3513 23-3866</span>
                </a>
                <a href="mailto:lumen.agencia1@gmail.com" className="text-white text-lg transition duration-300 hover:text-orange-500 flex items-center justify-center lg:justify-start gap-2">
                  <FiMail /> 
                  <span>lumen.agencia1@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sección de Formulario (Orden 2 en Desktop, Orden 1 en Mobile por defecto) */}
          <div className="lg:order-2 order-1 bg-gray-800 rounded-2xl p-6 md:p-10 border border-gray-700 shadow-2xl transition duration-300 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-orange-600 before:to-yellow-500">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Solicita tu consulta</h3>
              <p className="text-gray-400 text-sm">Completa el formulario para iniciar una conversación directa</p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Nombre */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-white font-semibold text-sm">Nombre completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition duration-300 disabled:opacity-60"
                  required
                  disabled={isTransitioning}
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white font-semibold text-sm">Email de contacto *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition duration-300 disabled:opacity-60"
                  required
                  disabled={isTransitioning}
                  placeholder="tu.email@ejemplo.com"
                />
              </div>
              
              {/* Empresa */}
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-white font-semibold text-sm">Empresa (opcional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition duration-300 disabled:opacity-60"
                  disabled={isTransitioning}
                  placeholder="Nombre de tu empresa"
                />
              </div>

              {/* Tipo de proyecto */}
              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className="text-white font-semibold text-sm">Tipo de proyecto *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition duration-300 disabled:opacity-60 appearance-none"
                  required
                  disabled={isTransitioning}
                  // Añadido style para replicar el select icon del CSS original
                  style={{ backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%239CA3AF' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px center', backgroundSize: '12px' }}
                >
                  <option value="" className="text-gray-500">Selecciona una opción</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type} className="text-white">{type}</option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-white font-semibold text-sm">Cuéntanos sobre tu proyecto</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition duration-300 disabled:opacity-60 resize-y min-h-[120px]"
                  rows="4"
                  placeholder="Describe tus objetivos, necesidades y cualquier información relevante..."
                  disabled={isTransitioning}
                ></textarea>
              </div>

              {/* Botón de Submit */}
              <button 
                type="submit" 
                className="relative overflow-hidden border-none py-4 px-6 text-xl font-regular bg-gradient-to-r from-orange-600 to-red-500 text-white rounded-xl cursor-pointer transition duration-300 mt-4 w-full shadow-lg shadow-orange-600/30 hover:shadow-xl hover:shadow-orange-600/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed group"
                disabled={isTransitioning}
              >
                <span>{isTransitioning ? 'Generando mensaje...' : 'Enviar Solicitud por WhatsApp'}</span>
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-[100%]"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Meeting