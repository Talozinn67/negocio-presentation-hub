
import React from 'react';
import { Building, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-business-950 text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building className="h-8 w-8 text-business-400" />
              <span className="text-xl font-semibold">SuaNegócio</span>
            </div>
            <p className="text-business-300 mb-6">
              Transformando ideias em negócios de sucesso, com estratégias 
              inovadoras e soluções personalizadas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-business-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-business-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-business-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#inicio" className="text-business-300 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-business-300 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-business-300 hover:text-white transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-business-300 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-business-300 hover:text-white transition-colors">
                  Consultoria Estratégica
                </a>
              </li>
              <li>
                <a href="#" className="text-business-300 hover:text-white transition-colors">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-business-300 hover:text-white transition-colors">
                  Gestão Financeira
                </a>
              </li>
              <li>
                <a href="#" className="text-business-300 hover:text-white transition-colors">
                  Gestão de Riscos
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-business-400 mt-0.5" />
                <span className="text-business-300">contato@suanegocio.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-business-400 mt-0.5" />
                <span className="text-business-300">+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-business-400 mt-0.5" />
                <span className="text-business-300">
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo - SP, 01310-100
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-business-800 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-business-400 text-sm mb-4 md:mb-0">
            © 2024 SuaNegócio. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-business-800 hover:bg-business-700 text-white p-3 rounded-full transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
