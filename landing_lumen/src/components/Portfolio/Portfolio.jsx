// Portfolio.jsx
import React, { useState } from 'react'
import styles from './Portfolio.module.css'
import caminos from '../../assets/caminoscba.png'
import sigma from '../../assets/sigma.png'
import playwith from '../../assets/playwith.png'
import detailing from '../../assets/diegotten.png'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const featuredProjects = [
    {
      id: 1,
      title: "Sigma Motors",
      category: "Desarrollo Web",
      description: "Rediseño completo de identidad corporativa para empresa de tecnología",
      image: sigma,
      tags: ["React", "UX/UI", "SEO"],
      results: ["+40% reconocimiento", "+25% engagement", "Nueva identidad visual"]
    },
    {
      id: 2,
      title: "Caminos del Lago",
      category: "Landing Page",
      description: "Desarrollo de landing page de conversión sostenible con experiencia UX optimizada",
      image: caminos,
      tags: ["Conversion", "Mobile First", "Analytics"],
      results: ["+150% conversiones", "-30% tasa de rebote", "Mobile first design"]
    },
    {
      id: 3,
      title: "Detailing",
      category: "Branding",
      description: "Identidad visual completa para empresa de detailing automotriz premium",
      image: detailing,
      tags: ["Branding", "Design System", "Marketing"],
      results: ["+300% leads", "+45% membresías", "Comunidad activa"]
    },
    {
      id: 4,
      title: "PlayWith",
      category: "E-commerce",
      description: "Posicionamiento de marca premium en mercado de especialidad",
      image: playwith,
      tags: ["E-commerce", "Branding", "Strategy"],
      results: ["Posicionamiento premium", "+60% ventas", "Expansión nacional"]
    }
  ]

  return (
    <section id="trabajos" className="py-20 lg:py-28 bg-gray-900 scroll-mt-20"> {/* Fondo oscuro principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 relative"> {/* Texto blanco */}
              PROYECTOS DESTACADOS
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-red-500"></span>
            </h2>
          </div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"> {/* Texto gris claro */}
            Casos de éxito que demuestran nuestro enfoque estratégico y resultados medibles
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${styles.projectCard}`}
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagen del Proyecto */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Badge de categoría */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-full shadow-lg"> {/* Rojo ligeramente más oscuro */}
                    {project.category}
                  </span>
                </div>

                {/* Botón "Ver proyecto" que aparece en hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border border-red-500">
                    Ver Proyecto →
                  </div>
                </div>
              </div>

              {/* Info del Proyecto */}
              <div className="p-6 lg:p-7">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300"> {/* Título blanco, hover rojo */}
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2 leading-relaxed"> {/* Descripción gris claro */}
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-lg" /* Tags oscuros con texto claro */
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Indicador visual de hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action - Ver Portfolio Completo */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-400 text-lg"> {/* Texto gris claro */}
              ¿Quieres ver más de nuestro trabajo?
            </p>
            <a 
              href="https://tu-portfolio-completo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" /* Gradiente de CTA un poco más oscuro */
            >
              <span>Ver Portfolio Completo</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Modal de Proyecto */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className={`relative bg-gray-800 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl ${styles.modalContent}`} /* Fondo del modal oscuro */
              onClick={e => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
              <button 
                className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-gray-900/50 hover:bg-gray-900/70 backdrop-blur-sm text-white rounded-full transition-all duration-300 hover:rotate-90"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                {/* Imagen */}
                <div className="relative h-64 md:h-full min-h-[400px]">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4"> {/* Título blanco */}
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6"> {/* Descripción gris claro */}
                    {selectedProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-gray-700 text-gray-300 text-sm font-medium rounded-lg" /* Tags oscuros con texto claro */
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Resultados */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2"> {/* Título de Resultados blanco */}
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Resultados Clave
                    </h4>
                    <div className="space-y-3">
                      {selectedProject.results.map((result, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-3 p-4 bg-gray-900 border-l-4 border-red-500 rounded-r-lg" /* Fondo de resultados muy oscuro */
                        >
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-gray-300 font-medium">{result}</span> {/* Texto de resultados claro */}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                    Ver Caso Completo
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio