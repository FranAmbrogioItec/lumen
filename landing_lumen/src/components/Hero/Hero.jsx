import React, { useEffect, useRef, useState } from 'react';
import heroImage from '../../assets/hero.svg';

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    const phoneNumber = '5493513233866';
    const message = encodeURIComponent(
      'Hola Agencia Lumen, me gustaría solicitar una reunión para hablar sobre diseño y marketing estratégico.'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-[120px] pb-20 overflow-hidden bg-[#f9f9f9]"
    >
      {/* Elementos de fondo animados */}
      <div className="absolute inset-0 pointer-events-none z-10 w-full h-full">
        {/* Particle 1 */}
        <div
          className="absolute rounded-full blur-[2px] opacity-5 animate-float w-[400px] h-[400px] -top-[100px] -left-[100px]"
          style={{ background: 'radial-gradient(circle, #E74C3C 0%, transparent 70%)' }}
        ></div>
        {/* Particle 2 */}
        <div
          className="absolute rounded-full blur-[2px] opacity-5 animate-float w-[300px] h-[300px] -bottom-[50px] -right-[50px] delay-2000"
          style={{ background: 'radial-gradient(circle, #3498DB 0%, transparent 70%)', animationDelay: '2s' }}
        ></div>
        {/* Particle 3 */}
        <div
          className="absolute rounded-full blur-[2px] opacity-5 animate-float w-[200px] h-[200px] top-1/2 left-[70%] delay-4000"
          style={{ background: 'radial-gradient(circle, #2ECC71 0%, transparent 70%)', animationDelay: '4s' }}
        ></div>

        {/* Background Grid */}
        <div className="absolute inset-0 w-full h-full bg-[size:50px_50px] bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]"></div>

        {/* Floating Orbs (Ocultos en móvil lg:block) */}
        <div
          className="hidden lg:block absolute rounded-full blur-[2px] animate-float-fast w-[120px] h-[120px] top-[20%] right-[15%]"
          style={{ background: 'radial-gradient(circle, rgba(231, 76, 60, 0.15) 0%, transparent 70%)', animationDelay: '1s' }}
        ></div>
        <div
          className="hidden lg:block absolute rounded-full blur-[2px] animate-float-fast w-20 h-20 bottom-[30%] left-[10%]"
          style={{ background: 'radial-gradient(circle, rgba(231, 76, 60, 0.15) 0%, transparent 70%)', animationDelay: '3s' }}
        ></div>

        {/* Floating Shapes */}
        <div
          className="hidden lg:block absolute animate-[float_8s_ease-in-out_infinite,morph_12s_ease-in-out_infinite] w-[150px] h-[150px] top-[15%] left-[5%]"
          style={{ background: 'linear-gradient(45deg, rgba(231, 76, 60, 0.1), rgba(231, 76, 60, 0.05))' }}
        ></div>
        <div
          className="hidden lg:block absolute animate-[float_8s_ease-in-out_infinite,morph_12s_ease-in-out_infinite] w-[100px] h-[100px] bottom-[20%] right-[8%]"
          style={{ background: 'linear-gradient(45deg, rgba(231, 76, 60, 0.1), rgba(231, 76, 60, 0.05))', animationDelay: '4s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[60px] lg:gap-20 items-center text-center lg:text-left">

          {/* Contenido de Texto */}
          <div
            className={`transition-all duration-800 cubic-bezier(0.4,0,0.2,1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="relative mb-10">
              <h1 className="text-[2.5rem] lg:text-[3.3rem] leading-[1.1] font-bold text-brand-dark">
                <span className={`block opacity-0 -translate-x-8 ${isVisible ? 'animate-slide-in' : ''} [animation-delay:0.1s]`}>
                  CLARIDAD PARA
                </span>
                <span className={`block opacity-0 -translate-x-8 ${isVisible ? 'animate-slide-in' : ''} [animation-delay:0.2s]`}>
                  <span className="bg-gradient-to-r from-[#E74C3C] to-[#F39C12] bg-clip-text text-transparent relative">
                    CRECER.
                  </span>
                </span>
              </h1>
              {/* Title Glow */}
              <div
                className="absolute top-0 -left-5 w-[120%] h-[120%] -z-10 blur-xl animate-glow"
                style={{ background: 'radial-gradient(circle, rgba(231, 76, 60, 0.1) 0%, transparent 70%)' }}
              ></div>
            </div>

            <p
              className={`text-[1.1rem] lg:text-[1.3rem] mb-[50px] text-[#444] leading-[1.7] font-light transition-all duration-800 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
            >
              Diseño y marketing estratégico para iluminar el futuro de tu marca.

            </p>

            <div
              className={`flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start flex-wrap transition-all duration-800 ease-out delay-[800ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
            >
              {/* Botón CTA Principal */}
              <button
                className="group relative border-none py-[18px] px-[35px] rounded-full font-semibold text-base cursor-pointer overflow-hidden bg-brand-orange text-white shadow-[0_8px_25px_rgba(231,76,60,0.3)] w-full sm:w-auto transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(231,76,60,0.5)] animate-pulse-cta hover:animate-none"
                onClick={handleCtaClick}
              >
                <span className="relative z-10">Bienvenidos a Lúmen.
                  →</span>
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-600 group-hover:left-full"></div>
              </button>

              {/* Botón Secundario */}
              <button
                className="group relative py-[18px] px-[35px] rounded-full font-semibold text-base cursor-pointer overflow-hidden bg-white text-brand-orange border border-brand-orange w-full sm:w-auto transition-all duration-400 hover:-translate-y-0.5 hover:bg-[#f05a1f]/5 hover:border-[#E74C3C]"
                onClick={() => scrollToSection('nosotros')}
              >
                <span className="relative z-10">Conoce más</span>
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-[#f05a1f]/10 to-transparent transition-all duration-600 group-hover:left-full"></div>
              </button>
            </div>
          </div>

          {/* Imagen Hero */}
          <div
            className={`order-first lg:order-last transition-all duration-800 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-[50px] scale-90'
              }`}
          >
            <div className="relative flex justify-center items-center group">
              {/* Gradiente Naranja de fondo */}
              <div className="absolute w-full h-full bg-[#FF8C00] opacity-80 rounded-2xl z-0"></div>

              {/* Glow Imagen */}
              <div
                className="absolute w-[120%] h-[120%] opacity-40 blur-[30px] z-10 animate-glow"
                style={{ background: 'radial-gradient(circle, rgba(231, 76, 60, 0.1) 0%, transparent 70%)' }}
              ></div>

              <img
                src={heroImage}
                alt="Diseño y Marketing Estratégico"
                className="relative z-30 max-w-full h-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-400 animate-gentle-float hover:-translate-y-2.5 hover:scale-[1.02] w-[80%] lg:w-full"
              />

              {/* Borde animado */}
              <div className="absolute w-[102%] h-[102%] border-2 border-[rgba(231,76,60,0.2)] rounded-[18px] z-20 transition-all duration-400 opacity-0 scale-100 group-hover:opacity-100 group-hover:border-[rgba(231,76,60,0.5)] group-hover:scale-[1.02]"></div>

              {/* Partículas Naranjas sobre imagen */}
              <div
                className="absolute w-full h-full z-20 opacity-40 animate-particles pointer-events-none"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 80%, rgba(231, 76, 60, 0.2) 2px, transparent 0),
                    radial-gradient(circle at 80% 20%, rgba(231, 76, 60, 0.15) 1px, transparent 0),
                    radial-gradient(circle at 40% 40%, rgba(231, 76, 60, 0.1) 1px, transparent 0)
                  `,
                  backgroundSize: '50px 50px, 30px 30px, 40px 40px'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;