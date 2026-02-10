import React, { useState, useEffect, useRef } from 'react';

// Importar imágenes - ajusta las rutas según tus archivos
import persona1 from '../../assets/persona1.png';
import persona2 from '../../assets/persona2.png';
import persona3 from '../../assets/persona3.png';
import persona4 from '../../assets/persona4.png';

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const aboutRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const services = [
    {
      id: 1,
      title: "DISEÑO GRÁFICO",
      shortDesc: "Identidad visual única y coherente",
      longDesc: "Desarrollamos identidades visuales profesionales para construir marcas sólidas, reconocibles y consistentes. Contenidos gráficos de alta calidad para medios digitales e impresos, que comunican con claridad, coherencia y valor en cada punto de contacto.",
      icon: persona1,
      color: "#E74E13",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "CONTENIDO AUDIOVISUAL Y GESTION DE REDES",
      shortDesc: "Contenido, comunidad y presencia digital",
      longDesc: "Desarrollo de contenido audiovisual y gestión integral de redes sociales. Creamos piezas audiovisuales enfocadas en generar conexión, representar a la marca y acercarla a su público ideal. La gestión integral de redes convierte el contenido en presencia digital sólida, efectiva y rentable.",
      icon: persona2,
      color: "#4B8FCE",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "PUBLICIDAD DIGITAL",
      shortDesc: "Campañas efectivas y optimizadas",
      longDesc: "Desarrollo de estrategias de publicidad digital enfocadas en crecimiento comercial y posicionamiento de marca. Integramos campañas en Meta Ads, Google Ads y e-mail marketing en un sistema publicitario que impulsa visibilidad, conversiones y crecimiento sostenido.",
      icon: persona3,
      color: "#EED4E9",
      textColor: "text-gray-900" // Texto oscuro para fondo claro
    },
    {
      id: 4,
      title: "SISTEMAS Y DESARROLLO DE SOFTWARE",
      shortDesc: "Experiencias digitales de alta conversión",
      longDesc: "Tu web como eje de un ecosistema pensado para crecer: sitios, tiendas online y landing pages que unifican tu estrategia digital, fortalecen tu marca, atraen tráfico calificado y convierten visitas en oportunidades de negocio.",
      icon: persona4,
      color: "#F7C432",
      textColor: "text-gray-900" // Texto oscuro para fondo amarillo
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsDarkMode(true);
          } else {
            setIsDarkMode(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Efecto para cambiar la clase del navbar (Si es global, mejor manejarlo con contexto, pero mantenemos tu lógica)
  useEffect(() => {
    const navbar = document.querySelector('.header');
    if (navbar) {
      if (isDarkMode) {
        navbar.classList.add('bg-dark-bg'); // Asumiendo que 'darkNav' pone fondo oscuro
      } else {
        navbar.classList.remove('bg-dark-bg');
      }
    }
  }, [isDarkMode]);

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <section
      id="nosotros"
      ref={aboutRef}
      className="relative min-h-screen py-[120px] overflow-hidden text-white scroll-mt-20 bg-[linear-gradient(135deg,#1c1c1c_0%,#2a2a2a_50%,#1c1c1c_100%)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] mb-[100px] items-center max-w-[1400px] mx-auto">
          <div className="text-left">
            <h2 className="text-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold leading-tight tracking-tight text-white drop-shadow-sm">
              NOSOTROS
            </h2>
          </div>
          <div className="text-left flex items-center">
            <p className="text-[0.95rem] lg:text-[1rem] leading-[1.7] text-white/95 font-normal border-l-[3px] border-[#E74E13] pl-5">
              DESARROLLAMOS ECOSISTEMAS DIGITALES <strong>ENFOCADOS EN CRECIMIENTO.</strong> CLARIDAD ESTRATÉGICA Y CREATIVIDAD APLICADA PARA <strong>HACER VISIBLE LO QUE VALE.</strong>

            </p>
          </div>
        </div>
      </div>

      {/* Contenedor de Servicios:
        - En móvil: flex-col (uno debajo del otro)
        - En escritorio: flex-row (uno al lado del otro, ancho completo)
      */}
      <div className="flex flex-col lg:flex-row w-full lg:w-screen lg:relative lg:left-1/2 lg:-translate-x-1/2">
        {services.map((service) => {
          const isActive = activeCard === service.id;
          const isAnyActive = activeCard !== null;

          return (
            <div
              key={service.id}
              onClick={() => handleCardClick(service.id)}
              style={{ backgroundColor: service.color }}
              className={`
                relative overflow-hidden cursor-pointer transition-all duration-900 ease-elastic
                border-b border-white/10 lg:border-b-0 lg:border-r 
                min-h-[300px] lg:min-h-[450px]
                ${isActive ? 'lg:flex-[4] flex-grow-[4]' : 'lg:flex-1 flex-grow-1'}
                ${isAnyActive && !isActive ? 'lg:opacity-60 lg:grayscale-[30%]' : 'opacity-100 grayscale-0'}
              `}
            >
              {/* --- CONTENIDO INACTIVO (Visible por defecto, se oculta al activar) --- */}
              <div className={`
                absolute inset-0 p-8 flex flex-col justify-end items-start transition-all duration-500 ease-elastic
                ${isActive ? 'opacity-0 invisible translate-y-4' : 'opacity-100 visible translate-y-0'}
              `}>
                <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] mb-5 flex-shrink-0 mx-auto lg:mx-0">
                  <img src={service.icon} alt={service.title} className="w-full h-full object-contain block" />
                </div>

                <div className="w-full text-center lg:text-left">
                  <h3 className={`text-[1.4rem] font-bold mb-2 leading-[1.2] ${service.textColor === 'text-white' ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-[0.95rem] font-light leading-[1.4] ${service.textColor === 'text-white' ? 'text-white/80' : 'text-gray-800/80'}`}>
                    {service.shortDesc}
                  </p>
                </div>

                <span className={`mt-4 text-sm font-medium hidden lg:block ${service.textColor === 'text-white' ? 'text-white/60' : 'text-gray-800/60'}`}>
                  Toca para más info →
                </span>
              </div>

              {/* --- CONTENIDO EXPANDIDO (Oculto por defecto, visible al activar) --- */}
              <div className={`
                absolute inset-0 w-full h-full p-10 lg:p-[40px]
                flex flex-col lg:grid lg:grid-cols-[2fr_1fr] lg:gap-10 lg:items-center
                transition-all duration-500 ease-in-out
                ${isActive ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible scale-90'}
              `}>

                {/* Texto Expandido */}
                <div className="max-w-full lg:max-w-[650px] z-10 text-center lg:text-left">
                  <h4 className={`text-[1.8rem] lg:text-[2.2rem] font-bold mb-5 leading-[1.2] -tracking-tight ${service.textColor === 'text-white' ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h4>
                  <p className={`text-[1rem] lg:text-[1.05rem] leading-[1.7] font-light mb-[30px] ${service.textColor === 'text-white' ? 'text-white/90' : 'text-gray-800'}`}>
                    {service.longDesc}
                  </p>

                  {/* Features / Tags */}
                  <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
                    {['Estratégico', 'Innovador', 'Resultados'].map((tag) => (
                      <span
                        key={tag}
                        className={`
                          px-4 py-2 rounded text-[0.9rem] font-medium border
                          ${service.textColor === 'text-white'
                            ? 'bg-white/10 text-white border-white/20'
                            : 'bg-black/5 text-gray-900 border-black/10'}
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Imagen en modo Expandido (Solo Desktop) */}
                <div className="hidden lg:block w-full h-auto max-h-[350px] rounded-lg overflow-hidden shadow-lg bg-black/5">
                  <img src={service.icon} alt={service.title} className="w-[70%] h-[75%] object-cover mx-auto mt-8" />
                </div>

                {/* Botón Cerrar */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCard(null);
                  }}
                  className={`
                    absolute top-[20px] right-[20px] w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-transform hover:scale-110
                    ${service.textColor === 'text-white' ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-black/10 text-gray-900 hover:bg-black/20'}
                  `}
                  aria-label="Cerrar"
                >
                  ×
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;