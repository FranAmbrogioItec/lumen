import React from 'react';
import styles from './Footer.module.css';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiTwitter,
  FiArrowUp
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Nosotros', href: '#nosotros' }
  ];

  const services = [
    'Diseño Gráfico',
    'Desarrollo Web',
    'Marketing Digital',
    'Branding Corporativo',
    'E-commerce Solutions',
    'SEO & Analytics'
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: '#', 
      icon: <FiInstagram />,
      color: '#E4405F'
    },
    { 
      name: 'LinkedIn', 
      href: '#', 
      icon: <FiLinkedin />,
      color: '#0A66C2'
    },
    { 
      name: 'YouTube', 
      href: '#', 
      icon: <FiYoutube />,
      color: '#FF0000'
    },
    { 
      name: 'Twitter', 
      href: '#', 
      icon: <FiTwitter />,
      color: '#1DA1F2'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
      <div className="container">
        {/* Back to Top Button */}
        <button 
          className={styles.backToTop}
          onClick={scrollToTop}
          aria-label="Volver al inicio"
        >
          <FiArrowUp className={styles.backToTopIcon} />
        </button>

        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <img 
                src='../../assets/isotipo.png'
                alt="Agencia Integral - Desarrollo y Marketing Digital"
                className={styles.logo}
                width={160}
                height={48}
                loading="lazy"
              />
            </div>
            
            <p className={styles.brandDescription}>
              Transformamos ideas en experiencias digitales excepcionales. 
              Combinamos diseño innovador, desarrollo técnico y estrategias 
              de marketing para impulsar tu crecimiento.
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

          {/* Quick Links */}
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

          {/* Services */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Servicios</h4>
            <ul className={styles.linksList} role="list">
              {services.map((service, index) => (
                <li key={index} role="listitem">
                  <span className={styles.serviceLink}>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Contacto</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FiMail className={styles.contactIcon} aria-hidden="true" />
                <a 
                  href="mailto:hola@agencia.com" 
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

            {/* Newsletter Signup */}
            <div className={styles.newsletter}>
              <h5 className={styles.newsletterTitle}>Suscríbete a nuestro newsletter</h5>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Tu email"
                  className={styles.newsletterInput}
                  aria-label="Email para newsletter"
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

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} <strong>Lúmen</strong>. Todos los derechos reservados.
          </div>
          
          <div className={styles.legalLinks}>
            <a 
              href="#" 
              className={styles.legalLink}
              aria-label="Política de privacidad"
            >
              Política de privacidad
            </a>
            <span className={styles.separator}>•</span>
            <a 
              href="#" 
              className={styles.legalLink}
              aria-label="Términos de servicio"
            >
              Términos de servicio
            </a>
            <span className={styles.separator}>•</span>
            <a 
              href="#" 
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