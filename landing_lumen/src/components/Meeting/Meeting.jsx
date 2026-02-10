import React, { useState } from 'react';
import { FiCheckCircle, FiTarget, FiZap, FiPhone, FiMail, FiArrowLeft, FiCalendar } from 'react-icons/fi';

const projectTypes = [
  'Diseño Gráfico',
  'Desarrollo Web',
  'Marketing Digital',
  'Branding',
  'Consultoría',
  'Otro'
];

const WHATSAPP_NUMBER = '5493513233866';

const Meeting = () => {
  const [showForm, setShowForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `¡Hola! Me gustaría agendar una reunión. Detalles de la Solicitud: *Nombre:* ${formData.name} *Email:* ${formData.email} *Empresa:* ${formData.company || 'No especificada'} *Tipo de Proyecto:* ${formData.projectType} *Mensaje:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
    setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
  };

  const handleCTAClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowForm(true);
      setTimeout(() => {
        document.getElementById('reunion-form')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        setIsTransitioning(false);
      }, 300);
    }, 200);
  };

  const handleCloseForm = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowForm(false);
      setTimeout(() => {
        document.getElementById('reunion')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        setIsTransitioning(false);
      }, 300);
    }, 200);
  };

  // Clases de Transición optimizadas
  const transitionClasses = "transition-all duration-500 ease-in-out transform-gpu";
  const fadeIn = isTransitioning ? 'opacity-0 translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0';
  const fadeOut = isTransitioning ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0';

  // --- VISTA PREVIA (CTA) ---
  if (!showForm) {
    return (
      <section
        id="reunion"
        className={`relative overflow-hidden min-h-[85vh] flex items-center text-center text-white pt-20 scroll-mt-20 ${transitionClasses} ${fadeOut}`}
      >
        {/* Fondo y Overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed z-10"
          style={{ backgroundImage: "url('/meeting.jpg')" }} // Asegúrate de que la ruta sea correcta en tu carpeta public
        ></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900/85 via-gray-900/78 to-gray-900/72 z-20"></div>

        {/* Contenido */}
        <div className="container mx-auto relative z-30 max-w-4xl px-5 py-10">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-extralight mb-0 leading-[1.2] drop-shadow-lg">
              DE LA IDEA A LA ACCIÓN,{' '}
              <span className="font-bold block mt-2 sm:mt-3">
                TRANSFORMAMOS TU MARCA EN RESULTADOS
              </span>
            </h2>

            <button
              className="group relative bg-brand-orange hover:bg-[#d0450b] border-2 border-white/10 hover:border-white/30 text-white font-bold py-5 px-10 rounded-full text-xl md:text-2xl cursor-pointer transition-all duration-400 shadow-[0_10px_35px_rgba(240,90,31,0.4)] hover:shadow-[0_15px_45px_rgba(240,90,31,0.6)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden min-h-[70px]"
              onClick={handleCTAClick}
              disabled={isTransitioning}
            >
              <FiCalendar className="text-2xl" />
              <span>{isTransitioning ? 'Cargando...' : 'Agenda tu reunión'}</span>
              {/* Glow Effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-full"></div>
            </button>

            {/* Opción secundaria */}
            <button
              className="relative bg-transparent text-brand-orange font-medium py-4 px-10 rounded-full text-lg cursor-pointer transition-all duration-300 hover:text-[#d0450b] hover:-translate-y-0.5 disabled:opacity-70 flex items-center justify-center gap-2"
              onClick={handleCTAClick}
              disabled={isTransitioning}
            >
              <FiCalendar className="text-xl" />
              <span>{isTransitioning ? 'Cargando...' : 'Quiero que me contacten'}</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  // --- VISTA COMPLETA (FORMULARIO) ---
  return (
    <section
      id="reunion-form"
      className={`relative min-h-screen flex items-center text-white bg-brand-dark pt-20 pb-20 scroll-mt-20 ${transitionClasses} ${fadeIn}`}
    >
      {/* Botón Volver */}
      <button
        className="fixed top-5 left-5 md:top-6 md:left-6 bg-gray-800/80 backdrop-blur-md border border-gray-700 text-white py-3 px-5 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 z-50 flex items-center gap-2 shadow-xl hover:bg-brand-orange hover:border-brand-orange hover:text-white hover:-translate-y-0.5 disabled:opacity-60 group"
        onClick={handleCloseForm}
        aria-label="Volver"
        disabled={isTransitioning}
      >
        <FiArrowLeft className="text-lg transition-transform duration-300 group-hover:-translate-x-1" />
        Volver
      </button>

      <div className="container mx-auto relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Columna Izquierda: Información */}
          <div className="order-2 lg:order-1 px-4 text-center lg:text-left">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="text-[2.5rem] md:text-[3rem] font-bold mb-5 leading-tight text-white">
                AGENDA TU <span className="text-brand-orange">REUNIÓN</span>
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                Comencemos a transformar tu visión en realidad. Agenda una consulta gratuita y descubramos juntos cómo podemos impulsar el crecimiento de tu negocio.
              </p>

              {/* Beneficios */}
              <div className="flex flex-col gap-6 mb-10">
                {[
                  { icon: <FiCheckCircle />, title: 'Consulta sin costo', desc: 'Evaluación inicial gratuita de tu proyecto' },
                  { icon: <FiTarget />, title: 'Propuesta personalizada', desc: 'Estrategia adaptada a tus objetivos específicos' },
                  { icon: <FiZap />, title: 'Resultados rápidos', desc: 'Te contactamos en menos de un día hábil' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-800 border border-gray-700 transition-all duration-300 hover:border-brand-orange hover:translate-x-1 group">
                    <div className="w-11 h-11 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0 text-brand-orange text-xl transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1 flex-1 text-left">
                      <strong className="text-white font-normal text-lg">{item.title}</strong>
                      <span className="text-gray-400 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contacto Directo */}
              <div className="flex flex-col gap-3 pt-5 border-t border-gray-700/50 items-center lg:items-start">
                <span className="text-sm text-gray-400 font-medium">Contáctanos directamente:</span>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-white text-lg transition-colors duration-300 hover:text-brand-orange flex items-center gap-2">
                  <FiPhone />
                  <span>+54 9 3513 23-3866</span>
                </a>
                <a href="mailto:lumen.agencia1@gmail.com" className="text-white text-lg transition-colors duration-300 hover:text-brand-orange flex items-center gap-2">
                  <FiMail />
                  <span>lumen.agencia1@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="order-1 lg:order-2 bg-gray-800 rounded-2xl p-6 md:p-10 border border-gray-700 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            {/* Decoración superior */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-yellow-500"></div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Solicita tu consulta</h3>
              <p className="text-gray-400 text-sm">Completa el formulario para iniciar una conversación directa</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {[
                { id: 'name', label: 'Nombre completo *', type: 'text', placeholder: 'Tu nombre completo' },
                { id: 'email', label: 'Email de contacto *', type: 'email', placeholder: 'tu.email@ejemplo.com' },
                { id: 'company', label: 'Empresa (opcional)', type: 'text', placeholder: 'Nombre de tu empresa' }
              ].map((field) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <label htmlFor={field.id} className="text-white font-semibold text-sm">{field.label}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300 disabled:opacity-60"
                    required={field.id !== 'company'}
                    disabled={isTransitioning}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              {/* Select Personalizado */}
              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className="text-white font-semibold text-sm">Tipo de proyecto *</label>
                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300 disabled:opacity-60 cursor-pointer"
                    required
                    disabled={isTransitioning}
                  >
                    <option value="" className="text-gray-500">Selecciona una opción</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type} className="text-white">{type}</option>
                    ))}
                  </select>
                  {/* Flecha personalizada con SVG encoded */}
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 0L0 2H4L2 0ZM2 5L0 3H4L2 5Z" fill="#9CA3AF" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Textarea */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-white font-semibold text-sm">Cuéntanos sobre tu proyecto</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all duration-300 disabled:opacity-60 resize-y min-h-[120px]"
                  rows="4"
                  placeholder="Describe tus objetivos, necesidades y cualquier información relevante..."
                  disabled={isTransitioning}
                ></textarea>
              </div>

              {/* Botón Submit con Gradiente */}
              <button
                type="submit"
                className="group relative overflow-hidden border-none py-4 px-6 text-xl font-normal bg-gradient-to-r from-brand-orange to-red-500 text-white rounded-xl cursor-pointer transition-all duration-300 mt-4 w-full shadow-[0_8px_25px_rgba(240,90,31,0.3)] hover:shadow-[0_12px_35px_rgba(240,90,31,0.4)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isTransitioning}
              >
                <span className="relative z-10">{isTransitioning ? 'Generando mensaje...' : 'Enviar Solicitud por WhatsApp'}</span>
                {/* Shine effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;