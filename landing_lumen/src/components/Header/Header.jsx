import React, { useState, useEffect } from 'react'
import logoLight from '../../assets/logo.svg'
import logoDark from '../../assets/isotipo.svg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 40)
      
      // Actualizar sección activa
      const sections = ['inicio', 'nosotros', 'trabajamos', 'trabajos', 'reunion']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.nav-list')
      const button = document.querySelector('.mobile-menu-button')
      
      if (isMobileMenuOpen && nav && button && 
          !nav.contains(event.target) && 
          !button.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
    setActiveSection(sectionId)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'trabajamos', label: 'Cómo trabajamos' },
    { id: 'trabajos', label: 'Nuestros Trabajos' },
    { id: 'faq', label: 'Preguntas' }
  ]

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-400 ease-in-out font-primary
      ${isScrolled 
        ? 'bg-white/20 backdrop-blur-[20px] shadow-lg border-b border-white/30 py-2' 
        : 'bg-white border-b border-transparent py-3'
      }
    `}>
      <div className="max-w-container mx-auto px-5">
        <nav className="flex justify-between items-center relative">
          {/* Logo */}
          <a 
            href="#inicio" 
            className="flex items-center no-underline transition-all duration-300 z-50 p-2 rounded-custom relative overflow-hidden group font-primary"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('inicio')
            }}
            aria-label="Ir a inicio"
          >
            <div className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#f05a1f]/10 to-transparent transition-all duration-600 ease-in-out group-hover:left-full"></div>
            <img 
              src={isScrolled ? logoDark : logoLight} 
              alt="Lumen Logo" 
              className="h-11 w-auto transition-all duration-400 ease-in-out opacity-100 scale-100 group-hover:scale-105"
            />
          </a>
          
          {/* Desktop Navigation */}
          <ul className={`nav-list hidden lg:flex list-none gap-2 items-center m-0 p-0 font-primary ${isMobileMenuOpen ? 'nav-list-open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id} className="relative font-primary">
                <a 
                  href={`#${item.id}`}
                  className={`
                    inline-block no-underline text-sm transition-all duration-300 relative px-5 py-3 rounded-[25px] bg-transparent cursor-pointer overflow-hidden font-primary
                    ${activeSection === item.id 
                      ? 'text-[#f05a1f] bg-[#f05a1f]/10 font-extralight' 
                      : 'text-[#333] border border-[#333] hover:text-[#111] hover:-translate-y-0.5 font-regular'
                    }
                  `}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                >
                  <span className="relative z-10 font-primary">{item.label}</span>
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-all duration-600 ease-in-out group-hover:left-full"></div>
                </a>
              </li>
            ))}
            {/* CTA Button */}
            <li className="font-primary">
              <a 
                href="#reunion" 
                className="
                  inline-block no-underline text-sm transition-all duration-300 relative px-5 py-3 rounded-[25px] cursor-pointer overflow-hidden font-primary
                  bg-[#f05a1f] text-white hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_25px_rgba(240,90,31,0.4)] font-bold
                "
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('reunion')
                }}
              >
                <span className="relative z-10 font-primary">Agenda tu reunión</span>
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-600 ease-in-out hover:left-full"></div>
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className={`
              mobile-menu-button lg:hidden flex flex-col justify-center bg-transparent border border-black/20 rounded-custom cursor-pointer p-2 z-50 transition-all duration-300 w-11 h-11 font-primary
              ${isMobileMenuOpen ? 'bg-black/10' : 'hover:bg-black/5 hover:border-[#f05a1f]'}
            `}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`
              w-5 h-0.5 bg-[#333] my-0.5 rounded transition-all duration-300
              ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}
            `}></span>
            <span className={`
              w-5 h-0.5 bg-[#333] my-0.5 rounded transition-all duration-300
              ${isMobileMenuOpen ? 'opacity-0 -translate-x-2.5' : ''}
            `}></span>
            <span className={`
              w-5 h-0.5 bg-[#333] my-0.5 rounded transition-all duration-300
              ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}
            `}></span>
          </button>

          {/* Mobile Navigation */}
          <div className={`
            fixed inset-0 z-40 transition-all duration-400 ease-in-out lg:hidden
            ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}>
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/20"
              onClick={toggleMobileMenu}
            ></div>
            
            {/* Menu Panel */}
            <ul className={`
              nav-list fixed top-0 right-0 w-80 h-screen bg-white/98 backdrop-blur-[30px] flex flex-col justify-center items-center gap-5 transition-all duration-400 ease-in-out border-l border-black/10 p-15 m-0 font-primary
              ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
              {navItems.map((item) => (
                <li key={item.id} className="w-full font-primary">
                  <a 
                    href={`#${item.id}`}
                    className={`
                      block w-full text-center no-underline text-base transition-all duration-300 px-6 py-4 rounded-[25px] font-primary
                      ${activeSection === item.id 
                        ? 'text-[#f05a1f] bg-[#f05a1f]/10 font-regular' 
                        : 'text-[#333] border border-[#333] hover:text-[#111] font-regular'
                      }
                    `}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Mobile CTA Button */}
              <li className="w-full mt-4 font-primary">
                <a 
                  href="#reunion" 
                  className="
                    block w-full text-center no-underline text-base transition-all duration-300 px-6 py-4 rounded-[25px] cursor-pointer font-primary
                    bg-[#f05a1f] text-white hover:scale-105 hover:shadow-[0_8px_25px_rgba(240,90,31,0.4)] font-bold
                  "
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('reunion')
                  }}
                >
                  Agenda tu reunión
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header