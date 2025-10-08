// Portfolio.jsx
import React, { useState, useEffect } from 'react'
import styles from './Portfolio.module.css'
import caminos from '../../assets/caminoscba.png'
import sigma from '../../assets/sigma.png'
import playwith from '../../assets/playwith.png'
import detailing from '../../assets/diegotten.png'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [selectedProject, setSelectedProject] = useState(null)
  // ESTADO NUEVO: Índice del proyecto visible en el carrusel
  const [activeProjectIndex, setActiveProjectIndex] = useState(0) 

  // FILTROS MODIFICADOS: Solo 'todos', 'branding' y 'web'
  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web' }
  ]

  const projects = [
    {
      id: 1,
      title: "Sigma Motors",
      category: "web",
      description: "Rediseño completo de identidad corporativa para empresa de tecnología",
      image: sigma,
      results: ["+40% reconocimiento", "+25% engagement", "Nueva identidad visual"]
    },
    {
      id: 2,
      title: "Caminos del Lago",
      category: "web",
      description: "Desarrollo de landing page de conversion sostenible con experiencia UX optimizada",
      image: caminos,
      results: ["+150% conversiones", "-30% tasa de rebote", "Mobile first design"]
    },
    {
      id: 3,
      title: "Detailing",
      category: "branding", // Cambiado para ejemplo
      description: "Desarrollo de landing page de conversion sostenible con experiencia UX optimizada",
      image: detailing,
      results: ["+300% leads", "+45% membresías", "Comunidad activa"]
    },
    {
      id: 4,
      title: "PlayWith",
      category: "branding", // Cambiado para ejemplo
      description: "Posicionamiento de marca premium en mercado de especialidad",
      image: playwith,
      results: ["Posicionamiento premium", "+60% ventas", "Expansión nacional"]
    }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  // EFECTO: Reiniciar el índice del carrusel cuando cambia el filtro
  useEffect(() => {
    setActiveProjectIndex(0)
  }, [activeFilter])

  // FUNCIÓN: Mover al proyecto anterior
  const prevProject = () => {
    setActiveProjectIndex((prev) => Math.max(prev - 1, 0))
  }

  // FUNCIÓN: Mover al siguiente proyecto
  const nextProject = () => {
    setActiveProjectIndex((prev) => Math.min(prev + 1, filteredProjects.length - 1))
  }

  return (
    <section id="trabajos" className={styles.portfolio}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle}`}>NUESTROS TRABAJOS</h2>
          <p className={styles.sectionSubtitle}>
            Casos de éxito que demuestran nuestro enfoque estratégico y resultados medibles
          </p>
        </div>

        {/* Filtros */}
        <div className={styles.filterTabs}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterTab} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* --- Carrusel de proyectos (en lugar del Grid) --- */}
        <div className={styles.carouselContainer}>
          
          {/* Tarjetas de Proyecto (Carousel) */}
          <div className={styles.projectsCarousel}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                // Clase dinámica para mostrar solo la tarjeta activa (fade)
                className={`${styles.projectCard} ${index === activeProjectIndex ? styles.activeCard : ''}`}
                onClick={() => setSelectedProject(project)}
                // z-index para apilamiento correcto
                style={{ zIndex: filteredProjects.length - index }} 
              >
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles.projectOverlay}>
                    <span className={styles.viewProject}>Ver proyecto</span>
                  </div>
                </div>
                
                <div className={styles.projectInfo}>
                  <h3 className={`${styles.projectTitle}`}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectCategory}>{project.category}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles del Carrusel (Flechas y Puntos) */}
          {filteredProjects.length > 1 && (
            <div className={styles.carouselControls}>
              {/* Botón Prev */}
              <button 
                className={`${styles.controlButton} ${styles.prev}`}
                onClick={prevProject} 
                disabled={activeProjectIndex === 0}
                aria-label="Proyecto anterior"
              >
                {'<'}
              </button>
              
              {/* Puntos de Navegación */}
              <div className={styles.navDots}>
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.navDot} ${index === activeProjectIndex ? styles.active : ''}`}
                    onClick={() => setActiveProjectIndex(index)}
                    aria-label={`Ir al proyecto ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Botón Next */}
              <button 
                className={`${styles.controlButton} ${styles.next}`}
                onClick={nextProject} 
                disabled={activeProjectIndex === filteredProjects.length - 1}
                aria-label="Siguiente proyecto"
              >
                {'>'}
              </button>
            </div>
          )}

        </div>
        {/* --- Fin del Carrusel --- */}


        {/* Modal de proyecto (Se mantiene igual) */}
        {selectedProject && (
          <div className={styles.projectModal} onClick={() => setSelectedProject(null)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <button 
                className={styles.closeModal}
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className={styles.modalGrid}>
                <div className={styles.modalImage}>
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                
                <div className={styles.modalInfo}>
                  <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                  <p className={styles.modalDescription}>{selectedProject.description}</p>
                  
                  <div className={styles.resultsSection}>
                    <h4>Resultados</h4>
                    <div className={styles.resultsGrid}>
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className={styles.resultItem}>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`${styles.ctaButton} btn btn-primary`}>
                    Ver caso completo
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