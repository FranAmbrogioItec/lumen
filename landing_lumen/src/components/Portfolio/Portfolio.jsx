import React, { useState } from 'react';
// Asegúrate de que las rutas a las imágenes sean correctas
import playwith from '../../assets/portfolio/playwith/9.jpg';
import hiburger from '../../assets/hiburger.png';
import linaje from '../../assets/linajejaca.jpg';
import linaje1 from '../../assets/portfolio/linaje/2.jpg';
import linaje2 from '../../assets/portfolio/linaje/4.jpg';
import linaje3 from '../../assets/portfolio/linaje/7.png';
import caminos from '../../assets/portfolio/caminos/1.jpg';
import caminos2 from '../../assets/portfolio/caminos/2.jpg';
import caminos3 from '../../assets/portfolio/caminos/3.jpg';
import caminos4 from '../../assets/portfolio/caminos/5.jpg';
import hiburger2 from '../../assets/portfolio/hiburger/2.png';
import hiburger3 from '../../assets/portfolio/hiburger/3.png';
import hiburger4 from '../../assets/portfolio/hiburger/4.png';
import playwith1 from '../../assets/portfolio/playwith/1.jpg';
import playwith2 from '../../assets/portfolio/playwith/2.png';
import playwith3 from '../../assets/portfolio/playwith/3.png';
import playwith4 from '../../assets/portfolio/playwith/5.jpg';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = [
    {
      id: 1,
      title: "Linaje Jaca",
      category: "Desarrollo Web",
      description: "Rediseño completo de identidad corporativa para empresa de tecnología",
      image: linaje,
      tags: ["React", "UX/UI", "SEO"],
      results: ["+40% reconocimiento", "+25% engagement", "Nueva identidad visual"],
      gallery: [linaje, linaje1, linaje2, linaje3]
    },
    {
      id: 2,
      title: "Caminos del Lago",
      category: "Landing Page",
      description: "Desarrollo de landing page de conversión sostenible con experiencia UX optimizada",
      image: caminos,
      tags: ["Conversion", "Mobile First", "Analytics"],
      results: ["+150% conversiones", "-30% tasa de rebote", "Mobile first design"],
      gallery: [caminos, caminos2, caminos3, caminos4]
    },
    {
      id: 3,
      title: "Hi Burger",
      category: "Branding",
      description: "Identidad visual completa para empresa de detailing automotriz premium",
      image: hiburger,
      tags: ["Branding", "Design System", "Marketing"],
      results: ["+300% leads", "+45% membresías", "Comunidad activa"],
      gallery: [hiburger, hiburger2, hiburger3, hiburger4]
    },
    {
      id: 4,
      title: "PlayWith",
      category: "E-commerce",
      description: "Posicionamiento de marca premium en mercado de especialidad",
      image: playwith,
      tags: ["E-commerce", "Branding", "Strategy"],
      results: ["Posicionamiento premium", "+60% ventas", "Expansión nacional"],
      gallery: [playwith, playwith1, playwith2, playwith3, playwith4]
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    if (!selectedProject || !selectedProject.gallery) return;
    setCurrentSlide((prev) => (prev === selectedProject.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    if (!selectedProject || !selectedProject.gallery) return;
    setCurrentSlide((prev) => (prev === 0 ? selectedProject.gallery.length - 1 : prev - 1));
  };

  return (
    <section id="trabajos" className="py-20 lg:py-28 bg-brand-dark scroll-mt-20 relative overflow-hidden">
      {/* Fondo Decorativo Sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(240,90,31,0.05),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block relative">
            <h2 className="text-[2.5rem] lg:text-[3.5rem] font-bold text-white mb-4 relative z-10">
              PROYECTOS DESTACADOS
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-brand-orange rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Casos de éxito que demuestran nuestro enfoque estratégico y resultados medibles
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-[#1e1e1e] border border-white/5 shadow-xl hover:shadow-2xl hover:shadow-brand-orange/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => handleProjectClick(project)}
            >
              {/* Shine Effect Overlay */}
              <div className="absolute inset-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-[100%] z-20 pointer-events-none"></div>

              {/* Imagen del Proyecto */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay oscuro al hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Badge de categoría */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-4 py-1.5 bg-brand-orange text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>

                {/* Botón "Ver proyecto" */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <div className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border border-white/20 hover:bg-brand-orange hover:border-brand-orange">
                    Ver Proyecto →
                  </div>
                </div>
              </div>

              {/* Info del Proyecto */}
              <div className="p-6 lg:p-8 relative">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-2 leading-relaxed text-sm lg:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Línea inferior animada */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Ver Portfolio Completo */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-gray-400 text-lg font-light">
              ¿Quieres ver más de nuestro trabajo?
            </p>
            <a
              href="https://lumenagencia.myportfolio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-brand-orange text-brand-orange font-semibold rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:border-brand-orange hover:shadow-[0_0_20px_rgba(240,90,31,0.4)]"
            >
              {/* Fondo deslizante al hover */}
              <span className="absolute inset-0 w-full h-full bg-brand-orange -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

              <span className="relative z-10">Ver Portfolio Completo</span>
              <svg
                className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative bg-[#1a1a1a] rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 flex flex-col md:flex-row overflow-hidden animate-slide-up"
              onClick={e => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
              <button
                className="absolute top-4 right-4 z-30 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-brand-orange text-white rounded-full transition-all duration-300 hover:rotate-90 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Columna Izquierda: Carrusel */}
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] bg-black">
                {/* Imágenes */}
                <div className="absolute inset-0 w-full h-full">
                  {selectedProject.gallery && selectedProject.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} - Slide ${index + 1}`}
                      className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    />
                  ))}
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10 pointer-events-none"></div>
                </div>

                {/* Controles Carrusel */}
                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-black/40 hover:bg-brand-orange rounded-full text-white z-20 transition-all duration-300 backdrop-blur-sm"
                      onClick={prevSlide}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-black/40 hover:bg-brand-orange rounded-full text-white z-20 transition-all duration-300 backdrop-blur-sm"
                      onClick={nextSlide}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
                      {selectedProject.gallery.map((_, index) => (
                        <button
                          key={index}
                          className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-brand-orange w-8' : 'bg-white/50 w-2 hover:bg-white'}`}
                          onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Badge Categoría en Modal */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="inline-block px-4 py-1.5 bg-brand-orange text-white text-xs font-bold tracking-wider rounded-full shadow-lg">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Columna Derecha: Info */}
              <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-[#1a1a1a]">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 text-sm font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Resultados */}
                <div className="mb-10 bg-[#151515] rounded-xl p-6 border border-white/5">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Resultados Clave
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-[#1a1a1a] rounded-lg border-l-2 border-brand-orange"
                      >
                        <svg className="w-4 h-4 text-brand-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300 text-sm font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button en Modal */}
                <button className="group w-full py-4 bg-gradient-to-r from-brand-orange to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-brand-orange/30 transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Solicitar Proyecto Similar</span>
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full"></div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;