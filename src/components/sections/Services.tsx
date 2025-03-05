
import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { PieChart, Rocket, Shield, Globe, BarChart3, Lightbulb } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => (
  <AnimatedSection 
    className="feature-card flex flex-col items-center text-center p-6 md:p-8"
    delay={delay}
  >
    <div className="bg-business-100 p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </AnimatedSection>
);

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-business-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="chip">Nossos Serviços</span>
          <h2 className="heading-lg mt-3 mb-5">
            Soluções <span className="text-business-600">personalizadas</span> para o seu negócio
          </h2>
          <p className="subheading">
            Oferecemos serviços especializados para atender às necessidades específicas da sua empresa,
            impulsionando seu crescimento de forma sustentável.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Rocket className="h-8 w-8 text-business-600" />}
            title="Consultoria Estratégica"
            description="Análise profunda do seu negócio para identificar oportunidades de crescimento e desenvolver estratégias personalizadas."
            delay={100}
          />
          
          <ServiceCard
            icon={<Globe className="h-8 w-8 text-business-600" />}
            title="Marketing Digital"
            description="Estratégias de marketing online para aumentar sua visibilidade, engajar seu público e converter leads em clientes."
            delay={200}
          />
          
          <ServiceCard
            icon={<BarChart3 className="h-8 w-8 text-business-600" />}
            title="Gestão Financeira"
            description="Otimização dos recursos financeiros da sua empresa, com foco em redução de custos e aumento da rentabilidade."
            delay={300}
          />
          
          <ServiceCard
            icon={<Shield className="h-8 w-8 text-business-600" />}
            title="Gestão de Riscos"
            description="Identificação e mitigação de riscos empresariais, protegendo seu negócio contra imprevistos e garantindo sua continuidade."
            delay={400}
          />
          
          <ServiceCard
            icon={<Lightbulb className="h-8 w-8 text-business-600" />}
            title="Inovação e Tecnologia"
            description="Implementação de soluções tecnológicas inovadoras para aumentar a eficiência operacional da sua empresa."
            delay={500}
          />
          
          <ServiceCard
            icon={<PieChart className="h-8 w-8 text-business-600" />}
            title="Análise de Dados"
            description="Transformação de dados em insights estratégicos para tomadas de decisão mais assertivas e baseadas em evidências."
            delay={600}
          />
        </div>
        
        <AnimatedSection className="mt-16 text-center" delay={700}>
          <button className="btn-primary">Solicitar Proposta</button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
