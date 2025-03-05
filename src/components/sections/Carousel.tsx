
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    title: "Soluções empresariais inovadoras",
    subtitle: "Transformando ideias em resultados mensuráveis",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    title: "Estratégias personalizadas",
    subtitle: "Planos adaptados para o crescimento do seu negócio",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    title: "Equipe especializada",
    subtitle: "Profissionais dedicados ao sucesso dos clientes",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    const next = (currentSlide + 1) % totalSlides;
    goToSlide(next);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prev);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="h-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <AnimatedSection animation="fade-in" className="text-center px-4 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90">
                  {slide.subtitle}
                </p>
                <div className="mt-8">
                  <button className="btn-primary mr-4">Saiba Mais</button>
                  <button className="btn-outline text-white border-white hover:bg-white/10">
                    Contato
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
