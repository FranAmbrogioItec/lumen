import React, { useState, useEffect } from 'react'
import logoLight from '../../assets/logo.svg'
import logoDark from '../../assets/isotipo.svg' // Asegúrate que esta ruta es correcta

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  // --- Lógica de Scroll (Mantenida igual) ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 40)

      const sections = ['inicio', 'nosotros', 'trabajamos', 'trabajos', 'reunion']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150 // Ajusté un poco el margen de detección
        }
        return false
      })

      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // --- Bloquear scroll del body al abrir menú ---
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
    setActiveSection(sectionId)
  }

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'trabajamos', label: 'Cómo trabajamos' },
    { id: 'trabajos', label: 'Nuestros Trabajos' },
    { id: 'faq', label: 'Preguntas' }
  ]

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
          ${isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-b border-white/30 py-2'
            : 'bg-white border-b border-transparent py-4'
          }
        `}
      >
        <div className="container mx-auto px-5 md:px-8">
          <nav className="flex justify-between items-center 
          relative">

            {/* --- LOGO --- */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}
              className="relative group overflow-hidden rounded-lg p-1 z-50"
              aria-label="Ir a inicio"
            >
              {/* Efecto de brillo al pasar el mouse (Hover Shine) */}
              <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#f05a1f]/10 to-transparent transition-all duration-700 ease-in-out group-hover:left-full"></div>

              <img
                src={isScrolled ? logoDark : logoLight}
                alt="Lumen Logo"
                className={`
                  h-10 w-auto transition-transform duration-300 ease-out
                  ${isScrolled ? 'h-9' : 'h-11'} 
                  group-hover:scale-105
                `}
              />
            </a>

            {/* --- DESKTOP MENU --- */}
            <ul className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                    className={`
                      relative block px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden border
                      ${activeSection === item.id
                        ? 'text-[#f05a1f] bg-[#f05a1f]/5 border-[#f05a1f]/20'
                        : 'text-gray-700 border-gray-300 hover:border-gray-800 hover:text-black hover:-translate-y-0.5'
                      }
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              ))}

              {/* CTA Desktop */}
              <li className="ml-2">
                <a
                  href="#reunion"
                  onClick={(e) => { e.preventDefault(); scrollToSection('reunion'); }}
                  className="
                    relative overflow-hidden group px-6 py-3 rounded-full bg-[#f05a1f] text-white font-bold text-sm
                    transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(240,90,31,0.3)] hover:-translate-y-0.5
                  "
                >
                  <span className="relative z-10">Agenda tu reunión</span>
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-500 group-hover:left-full"></div>
                </a>
              </li>
            </ul>

            {/* --- BOTÓN HAMBURGUESA (Mobile) --- */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden z-50 flex flex-col justify-center items-center w-11 h-11 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm hover:bg-gray-50 transition-all focus:outline-none"
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 -translate-x-2' : 'mb-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

          </nav>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY (Renderizado fuera del header visualmente) --- */}
      {/* Fondo Oscuro (Backdrop) */}
      <div
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Panel Lateral (Drawer) */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-50 shadow-2xl lg:hidden
          transform transition-transform duration-300 ease-out
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full p-8 overflow-y-auto">

          {/* Logo en Mobile Menu */}
          <div className="mb-10 flex justify-start">
            <img src={logoDark} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Lista de Navegación */}
          <ul className="flex flex-col gap-6 items-start w-full">
            {navItems.map((item) => (
              <li key={item.id} className="w-full border-b border-gray-100 pb-2 last:border-0">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  className={`
                    block text-xl font-medium transition-colors duration-200 w-full
                    ${activeSection === item.id ? 'text-[#f05a1f]' : 'text-gray-600 hover:text-black'}
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Mobile (Al final) */}
          <div className="mt-auto pt-8">
            <a
              href="#reunion"
              onClick={(e) => { e.preventDefault(); scrollToSection('reunion'); }}
              className="
                flex items-center justify-center w-full py-4 rounded-xl
                bg-[#f05a1f] text-white text-lg font-bold shadow-lg shadow-[#f05a1f]/30
                active:scale-95 transition-transform
              "
            >
              Agenda tu reunión
            </a>
            <p className="text-center text-gray-400 text-sm mt-6">
              © 2025 Lumen Agencia
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header