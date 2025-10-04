// Footer.jsx
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contacto', href: '#reunion' }
  ]

  const services = [
    'Diseño Gráfico',
    'Desarrollo Web',
    'Marketing Digital',
    'Gestión de Comunidades',
    'Branding Corporativo'
  ]

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Behance', href: '#' },
    { name: 'Dribbble', href: '#' }
  ]

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main Footer Content */}
        <div className={styles.footerMain}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h3 className={styles.footerLogo}>AGENCIA</h3>
            <p className={styles.brandDescription}>
              Transformamos visiones en resultados tangibles a través del diseño 
              estratégico y marketing digital innovador.
            </p>
            
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Enlaces rápidos</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Servicios</h4>
            <ul className={styles.linksList}>
              {services.map((service, index) => (
                <li key={index}>
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
                <span className={styles.contactIcon}>✉️</span>
                <a href="mailto:hola@agencia.com" className={styles.contactLink}>
                  hola@agencia.com
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <a href="https://wa.me/123456789" className={styles.contactLink}>
                  +1 234 567 89
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span className={styles.contactText}>
                  Ciudad, País
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} Agencia Integral. Todos los derechos reservados.
          </div>
          
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Política de privacidad</a>
            <a href="#" className={styles.legalLink}>Términos de servicio</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer