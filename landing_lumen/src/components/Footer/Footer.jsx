import React from 'react';
import styles from './Footer.module.css';
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
    { name: 'Instagram', href: '#', icon: <FiInstagram /> },
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
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.container}`}>
        {/* El botón BackToTop fue eliminado según la solicitud */}

        {/* Contenido Principal del Footer */}
        <div className={styles.footerMain}>
          
          {/* 1. Sección de Marca y Redes Sociales */}
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <img 
                src='/isotipo.svg' /* Usé una ruta relativa al público */
                alt="Lúmen Agencia Integral"
                className={styles.logo}
                width={35}
                height={35}
                loading="lazy"
              />
            </div>
            
            <p className={styles.brandDescription}>
              Transformamos ideas en experiencias digitales que impulsan el crecimiento. 
              Especialistas en diseño, desarrollo y estrategia.
            </p>
            
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={`Síguenos en ${social.name}`}
                  title={`Síguenos en ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.socialIcon}>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Enlaces Rápidos (Ocultos en móvil para simplificar) */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Navegación</h4>
            <ul className={styles.linksList} role="list">
              {quickLinks.map((link, index) => (
                <li key={index} role="listitem">
                  <button 
                    className={styles.footerLink}
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Servicios (Ocultos en móvil para simplificar) */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Servicios Clave</h4>
            <ul className={styles.linksList} role="list">
              {services.map((service, index) => (
                <li key={index} role="listitem">
                  <span className={styles.serviceLink}>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Información de Contacto y Newsletter */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Contáctanos</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FiMail className={styles.contactIcon} aria-hidden="true" />
                <a 
                  href="mailto:lumen.agencia1@gmail.com" 
                  className={styles.contactLink}
                >
                  lumen.agencia1@gmail.com
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <FiPhone className={styles.contactIcon} aria-hidden="true" />
                <a 
                  href="tel:+123456789" 
                  className={styles.contactLink}
                >
                  +1 (234) 567-89
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <FiMapPin className={styles.contactIcon} aria-hidden="true" />
                <span className={styles.contactText}>
                  Córdoba, Argentina
                </span>
              </div>
            </div>

            {/* Suscripción a Newsletter */}
            <div className={styles.newsletter}>
              <h5 className={styles.newsletterTitle}>Únete a nuestro newsletter</h5>
              <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Tu email"
                  className={styles.newsletterInput}
                  aria-label="Email para newsletter"
                  required
                />
                <button 
                  type="submit" 
                  className={styles.newsletterButton}
                >
                  Suscribir
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sección Inferior del Footer */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} <strong>Lúmen</strong>. Todos los derechos reservados.
          </p>
          
          <div className={styles.legalLinks}>
            <a 
              href="#privacidad" 
              className={styles.legalLink}
              aria-label="Política de privacidad"
            >
              Privacidad
            </a>
            <span className={styles.separator}>•</span>
            <a 
              href="#terminos" 
              className={styles.legalLink}
              aria-label="Términos de servicio"
            >
              Términos
            </a>
            <span className={styles.separator}>•</span>
            <a 
              href="#cookies" 
              className={styles.legalLink}
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