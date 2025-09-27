import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className="text-bold">BLACKLINK</h3>
            <p>Agencia integral de marketing y desarrollo</p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className="text-semibold">Contacto</h4>
            <p>Email: info@blacklink.com</p>
            <p>Teléfono: +1 234 567 890</p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className="text-semibold">Síguenos</h4>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2023 BLACKLINK. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer