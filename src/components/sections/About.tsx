
import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { Target, Users, Lightbulb, ChartBar } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="chip">Quem Somos</span>
          <h2 className="heading-lg mt-3 mb-5">
            Uma empresa comprometida com a <span className="text-business-600">excelência</span>
          </h2>
          <p className="subheading">
            Somos uma empresa comprometida para o seu bem
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
          <AnimatedSection animation="slide-in-left" delay={200}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                  alt="Nossa equipe" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats card */}
              <div className="absolute top-5 -right-5 glass-card p-6 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-business-600">15+</p>
                    <p className="text-sm text-muted-foreground">Anos de experiência</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-business-600">98%</p>
                    <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={400}>
            <div className="space-y-8">
              <div>
                <h3 className="heading-md mb-4">Nossa História</h3>
                <p className="text-muted-foreground">
                  Fundada em 2009, a SuaNegócio nasceu da visão de criar uma empresa 
                  que realmente entendesse as necessidades dos empreendedores. Ao longo dos anos, 
                  expandimos nossa atuação e desenvolvemos soluções que geram impacto real.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="feature-card">
                  <Target className="h-10 w-10 text-business-600 mb-3" />
                  <h4 className="text-lg font-semibold mb-2">Missão</h4>
                  <p className="text-sm text-muted-foreground">
                    Transformar negócios através de soluções inovadoras e estratégias eficientes.
                  </p>
                </div>
                
                <div className="feature-card">
                  <Lightbulb className="h-10 w-10 text-business-600 mb-3" />
                  <h4 className="text-lg font-semibold mb-2">Visão</h4>
                  <p className="text-sm text-muted-foreground">
                    Ser referência em consultoria empresarial, reconhecida pela excelência e resultados.
                  </p>
                </div>
                
                <div className="feature-card">
                  <Users className="h-10 w-10 text-business-600 mb-3" />
                  <h4 className="text-lg font-semibold mb-2">Valores</h4>
                  <p className="text-sm text-muted-foreground">
                    Integridade, inovação, colaboração e compromisso com o cliente.
                  </p>
                </div>
                
                <div className="feature-card">
                  <ChartBar className="h-10 w-10 text-business-600 mb-3" />
                  <h4 className="text-lg font-semibold mb-2">Objetivos</h4>
                  <p className="text-sm text-muted-foreground">
                    Entregar crescimento mensurável e sustentável para nossos clientes.
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

export default About;
