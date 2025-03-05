
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from '../ui/AnimatedSection';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-business-100/50 blur-3xl transform rotate-12 animate-float"></div>
        <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-business-100/30 blur-3xl transform -rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection 
            animation="fade-in"
            className="text-center lg:text-left"
          >
            <div className="space-y-6">
              <div className="inline-block">
                <span className="chip">Transformando Ideias em Negócios</span>
              </div>
              <h1 className="heading-xl">
                Impulsionando o seu <span className="text-business-600">sucesso</span> empresarial
              </h1>
              <p className="subheading max-w-2xl mx-auto lg:mx-0">
                Soluções inteligentes e personalizadas para o crescimento do seu negócio, 
                com estratégias inovadoras que geram resultados reais.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <button className="btn-primary">Nossos Serviços</button>
                <button className="btn-outline">Fale Conosco</button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection 
            animation="slide-in-right"
            className="relative"
          >
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
              <div className={cn(
                "lazy-image lazy-image-loading absolute inset-0 bg-cover bg-center",
                isLoaded && "lazy-image-loaded"
              )} 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')" }}
              />
              <div className="absolute inset-0 bg-business-900/20 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 glass-card p-4 md:p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-start gap-4">
                <div className="bg-business-600 text-white rounded-full p-2 md:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Expertise Confiável</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    +200 empresas atendidas com estratégias de sucesso
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
