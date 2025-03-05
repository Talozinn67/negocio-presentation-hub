
import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { Target, Users, Lightbulb, ChartBar, Building, Award, Clock, TrendingUp } from 'lucide-react';

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
            Nascemos da paixão por criar soluções que transformam negócios em histórias 
            de sucesso, combinando estratégia, inovação e resultados mensuráveis.
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

        {/* Adicionando nova seção de informações empresariais */}
        <div className="mt-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg">
              Por que escolher a <span className="text-business-600">SuaNegócio</span>
            </h2>
            <p className="subheading mt-4">
              Combinamos experiência, inovação e comprometimento para entregar soluções que fazem a diferença
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={100} className="feature-card p-6 text-center">
              <div className="bg-business-100 p-4 rounded-full inline-flex mx-auto mb-4">
                <Building className="h-8 w-8 text-business-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Estrutura Robusta</h3>
              <p className="text-muted-foreground">
                Contamos com uma infraestrutura completa e profissionais altamente capacitados para atender às suas demandas.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="feature-card p-6 text-center">
              <div className="bg-business-100 p-4 rounded-full inline-flex mx-auto mb-4">
                <Award className="h-8 w-8 text-business-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reconhecimento</h3>
              <p className="text-muted-foreground">
                Nosso trabalho é reconhecido no mercado, com diversos prêmios de excelência em atendimento e resultados.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="feature-card p-6 text-center">
              <div className="bg-business-100 p-4 rounded-full inline-flex mx-auto mb-4">
                <Clock className="h-8 w-8 text-business-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agilidade</h3>
              <p className="text-muted-foreground">
                Processos otimizados para entregar soluções com rapidez sem comprometer a qualidade do resultado.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={400} className="feature-card p-6 text-center">
              <div className="bg-business-100 p-4 rounded-full inline-flex mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-business-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Crescimento</h3>
              <p className="text-muted-foreground">
                Focamos em estratégias que impulsionam o crescimento sustentável dos nossos clientes a longo prazo.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Seção de credenciais */}
        <div className="mt-20">
          <AnimatedSection className="bg-business-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-business-600 mb-2">500+</h3>
                <p className="text-lg text-muted-foreground">Projetos concluídos</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-4xl font-bold text-business-600 mb-2">50+</h3>
                <p className="text-lg text-muted-foreground">Especialistas</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-4xl font-bold text-business-600 mb-2">12</h3>
                <p className="text-lg text-muted-foreground">Países atendidos</p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-lg font-medium mb-6">
                "Nossa abordagem única combina estratégia, tecnologia e criatividade para gerar resultados excepcionais"
              </p>
              <button className="btn-primary">Agende uma Consulta</button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
