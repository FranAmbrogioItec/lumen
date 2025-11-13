import React from 'react';
// Se asume que las variables CSS como --color-accent se reemplazan por clases de Tailwind (ej. text-orange-600)
import { 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiTwitter
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    'Diseño Gráfico',
    'Desarrollo Web',
    'Marketing Digital',
    'Branding'
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/lumenagencia.ar/', icon: <FiInstagram /> },
    { name: 'LinkedIn', href: '#', icon: <FiLinkedin /> },
    { name: 'YouTube', href: '#', icon: <FiYoutube /> },
    { name: 'Twitter', href: '#', icon: <FiTwitter /> }
  ];

  // Función de utilería para el scroll
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer 
      // styles.footer: Gradient background, text color, top border, relative, overflow-hidden, padding
      className="bg-gradient-to-br from-black-950 via-gray-900 to-gray-950 
                 text-white/70 border-t border-white/10 relative overflow-hidden px-5" 
      role="contentinfo"
    >
      
      {/* Reemplazo de styles.footer::before: Línea decorativa de acento en la parte superior */}
      <div 
        className="absolute top-0 left-0 w-full h-px 
                   bg-gradient-to-r from-transparent via-orange-600 to-transparent"
        aria-hidden="true"
      ></div>

      {/* styles.container */}
      <div className="max-w-7xl mx-auto relative">
        
        {/* styles.footerMain: Estructura de cuadrícula responsiva (1 col en móvil, 2 en sm, 3 en md, 4 en lg) */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                     gap-8 md:gap-x-10 lg:gap-x-16 py-12 md:py-16 relative z-10"
        >
          
          {/* 1. Sección de Marca y Redes Sociales */}
          <div 
            // Responsividad de columna y alineación
            className="flex flex-col gap-4 
                       col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2
                       text-center sm:text-left md:text-left 
                       items-center sm:items-start md:items-start
                       border-b border-white/10 pb-5 md:border-b-0 md:pb-0 
                       order-1"
          >
            {/* styles.logoContainer */}
            <div className="mb-0 w-auto h-auto">
              <img 
                src='/isotipo.svg' 
                alt="Lúmen Agencia Integral"
                // styles.logo: Transiciones y hover
                className="w-9 h-9 transition duration-300 hover:scale-[1.02] hover:drop-shadow-lg"
                width={36}
                height={36}
                loading="lazy"
              />
            </div>
            
            {/* styles.brandDescription */}
            <p className="leading-relaxed text-sm text-white/70 max-w-sm m-0">
              Transformamos ideas en experiencias digitales que impulsan el crecimiento. 
              Especialistas en diseño, desarrollo y estrategia.
            </p>
            
            {/* styles.socialLinks */}
            <div className="flex gap-2 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  // styles.socialLink: Botón, hover y backdrop-blur
                  className="flex items-center justify-center w-10 h-10 
                             bg-white/5 border border-white/10 rounded-lg 
                             text-white/70 transition duration-300 backdrop-blur-sm
                             hover:translate-y-[-2px] hover:border-orange-600 
                             hover:bg-orange-600/10 hover:text-white"
                  aria-label={`Síguenos en ${social.name}`}
                  title={`Síguenos en ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* styles.socialIcon */}
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Enlaces Rápidos (Navegación) - Oculto en móvil (<500px), visible en sm+ */}
          <div 
            // styles.linksSection
            className="hidden sm:flex flex-col gap-4 order-3 md:order-2 lg:order-3"
          >
            {/* styles.sectionTitle: Subrayado con pseudo-elemento `after:` */}
            <h4 className="text-white text-base font-light mb-1 relative inline-block 
                           after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                           after:w-6 after:h-px after:bg-orange-600 after:rounded-sm">Navegación</h4>
            
            {/* styles.linksList */}
            <ul className="list-none p-0 m-0 flex flex-col gap-3" role="list">
              {quickLinks.map((link, index) => (
                <li key={index} role="listitem">
                  <button 
                    // styles.footerLink: Enlace de texto y hover
                    className="text-white/60 text-sm transition duration-300 relative bg-none border-none text-left p-0 w-fit cursor-pointer 
                               hover:text-white hover:translate-x-1"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Servicios - Oculto en móvil (<500px), visible en sm+ */}
          <div 
            // styles.linksSection
            className="hidden sm:flex flex-col gap-4 order-4 md:order-3 lg:order-4"
          >
            {/* styles.sectionTitle */}
            <h4 className="text-white text-base font-light mb-1 relative inline-block 
                           after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                           after:w-6 after:h-px after:bg-orange-600 after:rounded-sm">Servicios Clave</h4>
            
            {/* styles.linksList */}
            <ul className="list-none p-0 m-0 flex flex-col gap-3" role="list">
              {services.map((service, index) => (
                <li key={index} role="listitem">
                  {/* styles.serviceLink */}
                  <span 
                    className="text-white/60 text-sm transition duration-300 relative bg-none border-none text-left p-0 w-fit cursor-default 
                               hover:text-white hover:translate-x-1"
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Información de Contacto */}
          <div 
            // styles.contactSection: Columna completa en móvil, dos columnas en md, una en lg
            className="flex flex-col gap-4 
                       col-span-full md:col-span-2 lg:col-span-1 
                       order-2 sm:order-4 md:order-4 lg:order-4
                       border-t border-white/10 pt-5 md:border-t-0 md:pt-0 sm:mt-0" 
          >
            {/* styles.sectionTitle */}
            <h4 className="text-white text-base font-light mb-1 relative inline-block 
                           after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                           after:w-6 after:h-px after:bg-orange-600 after:rounded-sm">Contáctanos</h4>
            
            {/* styles.contactInfo */}
            <div className="flex flex-col gap-3">
              
              {/* styles.contactItem */}
              <div className="flex items-center gap-3 transition duration-300 hover:translate-x-0.5">
                {/* styles.contactIcon */}
                <FiMail className="w-4 text-orange-600 flex-shrink-0" aria-hidden="true" />
                {/* styles.contactLink */}
                <a 
                  href="mailto:lumen.agencia1@gmail.com" 
                  className="text-white/60 text-sm transition duration-300 hover:text-white"
                >
                  lumen.agencia1@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 transition duration-300 hover:translate-x-0.5">
                <FiPhone className="w-4 text-orange-600 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+123456789" 
                  className="text-white/60 text-sm transition duration-300 hover:text-white"
                >
                  +54 9 3513 23-3866
                </a>
              </div>
              
              <div className="flex items-center gap-3 transition duration-300 hover:translate-x-0.5">
                <FiMapPin className="w-4 text-orange-600 flex-shrink-0" aria-hidden="true" />
                {/* styles.contactText */}
                <span className="text-white/60 text-sm">
                  Córdoba, Argentina
                </span>
              </div>
            </div>

            {/* Suscripción a Newsletter (Comentado) */}
          </div>
        </div>

        {/* Sección Inferior del Footer */}
        <div 
          // styles.footerBottom: Separador y diseño responsivo para derechos y enlaces legales
          className="border-t border-white/10 py-5 flex justify-between items-center flex-wrap gap-4 relative z-10 
                     sm:flex-row sm:text-left sm:gap-x-8 sm:gap-y-0 
                     flex-col text-center"
        >
          {/* styles.copyright */}
          <p className="text-xs text-white/50 m-0 order-2 sm:order-1">
            © {currentYear} <strong className="text-white/70 font-semibold">Lúmen</strong>. Todos los derechos reservados.
          </p>
          
          {/* styles.legalLinks */}
          <div className="flex items-center gap-3 flex-wrap order-1 sm:order-2 justify-center">
            <a 
              href="#privacidad" 
              // styles.legalLink
              className="text-white/50 text-xs transition duration-300 hover:text-white"
              aria-label="Política de privacidad"
            >
              Privacidad
            </a>
            {/* styles.separator */}
            <span className="text-white/30 text-xs">•</span>
            <a 
              href="#terminos" 
              className="text-white/50 text-xs transition duration-300 hover:text-white"
              aria-label="Términos de servicio"
            >
              Términos
            </a>
            <span className="text-white/30 text-xs">•</span>
            <a 
              href="#cookies" 
              className="text-white/50 text-xs transition duration-300 hover:text-white"
              aria-label="Política de cookies"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);