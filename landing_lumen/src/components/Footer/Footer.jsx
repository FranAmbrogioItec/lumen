import React from 'react';
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
      role="contentinfo"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#0a0a0a_0%,#1a1a1a_50%,#0f0f0f_100%)] text-white/70 border-t border-white/10 pt-10 pb-5"
    >
      {/* Línea decorativa superior (Gradiente Naranja) */}
      <div
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-5 relative z-10">

        {/* Grid Principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-10">

          {/* 1. Marca y Redes Sociales */}
          <div className="flex flex-col gap-4 text-center sm:text-left items-center sm:items-start col-span-1 sm:col-span-2 lg:col-span-1 border-b border-white/10 pb-6 lg:border-none lg:pb-0">
            <div className="w-[100px] h-auto">
              <img
                src='/isotipo.svg'
                alt="Lúmen Agencia Integral"
                className="w-auto h-auto max-w-[150px] brightness-0 invert transition-all duration-300 hover:brightness-100 hover:invert-0 hover:drop-shadow-[0_2px_8px_rgba(231,76,60,0.3)] hover:scale-[1.02]"
                width={36}
                height={36}
                loading="lazy"
              />
            </div>

            <p className="text-[0.9rem] leading-relaxed text-white/70 max-w-[300px]">
              Transformamos ideas en experiencias digitales que impulsan el crecimiento.
              Especialistas en diseño, desarrollo y estrategia.
            </p>

            <div className="flex gap-2 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-[38px] h-[38px] bg-white/5 border border-white/10 rounded-lg text-white/70 transition-all duration-300 backdrop-blur-sm hover:-translate-y-[2px] hover:border-brand-orange hover:bg-brand-orange/10 hover:text-white"
                  aria-label={`Síguenos en ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[1.1rem]">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navegación (Oculto en móviles muy pequeños, visible en sm+) */}
          <div className="hidden sm:flex flex-col gap-4">
            <h4 className="text-white text-[1rem] font-light mb-1 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-6 after:h-[2px] after:bg-brand-orange after:rounded-sm">
              Navegación
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    className="text-white/60 text-[0.88rem] transition-all duration-300 hover:text-white hover:translate-x-1"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Servicios (Oculto en móviles muy pequeños, visible en sm+) */}
          <div className="hidden sm:flex flex-col gap-4">
            <h4 className="text-white text-[1rem] font-light mb-1 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-6 after:h-[2px] after:bg-brand-orange after:rounded-sm">
              Servicios Clave
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/60 text-[0.88rem] transition-all duration-300 cursor-default hover:text-white hover:translate-x-1 block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contacto */}
          <div className="flex flex-col gap-4 col-span-1 sm:col-span-2 lg:col-span-1 border-t border-white/10 pt-6 sm:border-none sm:pt-0">
            <h4 className="text-white text-[1rem] font-light mb-1 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-6 after:h-[2px] after:bg-brand-orange after:rounded-sm">
              Contáctanos
            </h4>

            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-[10px] transition-transform duration-300 hover:translate-x-[2px] group">
                <FiMail className="w-4 text-brand-orange flex-shrink-0" aria-hidden="true" />
                <a href="mailto:lumen.agencia1@gmail.com" className="text-white/60 text-[0.88rem] transition-colors duration-300 group-hover:text-white">
                  lumen.agencia1@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-[10px] transition-transform duration-300 hover:translate-x-[2px] group">
                <FiPhone className="w-4 text-brand-orange flex-shrink-0" aria-hidden="true" />
                <a href="tel:+5493513233866" className="text-white/60 text-[0.88rem] transition-colors duration-300 group-hover:text-white">
                  +54 9 351 323-3866
                </a>
              </div>

              <div className="flex items-center gap-[10px] transition-transform duration-300 hover:translate-x-[2px] group">
                <FiMapPin className="w-4 text-brand-orange flex-shrink-0" aria-hidden="true" />
                <span className="text-white/60 text-[0.88rem] transition-colors duration-300 group-hover:text-white">
                  Córdoba, Argentina
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[0.85rem] text-white/50 m-0 order-2 sm:order-1">
            © {currentYear} <strong className="text-white/70 font-semibold">Lúmen</strong>. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center order-1 sm:order-2">
            <a href="#privacidad" className="text-white/50 text-[0.8rem] transition-colors duration-300 hover:text-white">
              Privacidad
            </a>
            <span className="text-white/30 text-[0.8rem]">•</span>
            <a href="#terminos" className="text-white/50 text-[0.8rem] transition-colors duration-300 hover:text-white">
              Términos
            </a>
            <span className="text-white/30 text-[0.8rem]">•</span>
            <a href="#cookies" className="text-white/50 text-[0.8rem] transition-colors duration-300 hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);