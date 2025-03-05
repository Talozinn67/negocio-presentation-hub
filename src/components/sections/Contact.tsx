
import React, { useState } from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="chip">Contato</span>
          <h2 className="heading-lg mt-3 mb-5">
            Vamos <span className="text-business-600">conversar</span> sobre o seu projeto
          </h2>
          <p className="subheading">
            Entre em contato conosco para discutir como podemos ajudar a impulsionar o seu negócio.
            Estamos prontos para atender às suas necessidades.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-8">
              <h3 className="heading-md mb-6">Envie-nos uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-business-600 focus:border-transparent"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-business-600 focus:border-transparent"
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-business-600 focus:border-transparent"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-business-600 focus:border-transparent"
                    placeholder="Como podemos ajudar?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <span>Enviar Mensagem</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <div className="space-y-8">
              <div>
                <h3 className="heading-md mb-6">Informações de Contato</h3>
                <p className="text-muted-foreground mb-8">
                  Estamos à disposição para atender às suas necessidades. 
                  Entre em contato por qualquer um dos canais abaixo.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-business-100 p-3 rounded-full text-business-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-muted-foreground">contato@suanegocio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-business-100 p-3 rounded-full text-business-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-muted-foreground">+55 (11) 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-business-100 p-3 rounded-full text-business-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
                <div className="glass-card rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Segunda a Sexta</p>
                      <p className="text-muted-foreground">09:00 - 18:00</p>
                    </div>
                    <div>
                      <p className="font-medium">Sábado</p>
                      <p className="text-muted-foreground">09:00 - 13:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
