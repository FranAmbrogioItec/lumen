// Portfolio.jsx
import React, { useState } from 'react'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web' },
    { id: 'marketing', label: 'Marketing' }
  ]

  const projects = [
    {
      id: 1,
      title: "NOVA TECH",
      category: "branding",
      description: "Rediseño completo de identidad corporativa para empresa de tecnología",
      image: "/api/placeholder/400/300",
      results: ["+40% reconocimiento", "+25% engagement", "Nueva identidad visual"]
    },
    {
      id: 2,
      title: "ECO LIVING",
      category: "web",
      description: "Desarrollo de e-commerce sostenible con experiencia UX optimizada",
      image: "/api/placeholder/400/300",
      results: ["+150% conversiones", "-30% tasa de rebote", "Mobile first design"]
    },
    {
      id: 3,
      title: "URBAN FIT",
      category: "marketing",
      description: "Campaña integral de marketing digital para cadena de gimnasios",
      image: "/api/placeholder/400/300",
      results: ["+300% leads", "+45% membresías", "Comunidad activa"]
    },
    {
      id: 4,
      title: "ARTISAN COFFEE",
      category: "branding",
      description: "Posicionamiento de marca premium en mercado de especialidad",
      image: "/api/placeholder/400/300",
      results: ["Posicionamiento premium", "+60% ventas", "Expansión nacional"]
    }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} text-semibold`}>NUESTROS TRABAJOS</h2>
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

        {/* Grid de proyectos */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={styles.projectCard}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <span className={styles.viewProject}>Ver proyecto</span>
                </div>
              </div>
              
              <div className={styles.projectInfo}>
                <h3 className={`${styles.projectTitle} text-semibold`}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectCategory}>{project.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de proyecto */}
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