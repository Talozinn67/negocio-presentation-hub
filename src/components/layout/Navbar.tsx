
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Building, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Building className="h-8 w-8 text-business-600" />
            <span className="text-xl font-semibold">SuaNegócio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="nav-link nav-link-active">
              Início
            </a>
            <a href="#sobre" className="nav-link">
              Sobre
            </a>
            <a href="#servicos" className="nav-link">
              Serviços
            </a>
            <a href="#contato" className="nav-link">
              Contato
            </a>
            <button className="btn-primary">Fale Conosco</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-business-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full md:hidden bg-white shadow-lg transform transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <a href="#" className="flex items-center gap-2">
              <Building className="h-8 w-8 text-business-600" />
              <span className="text-xl font-semibold">SuaNegócio</span>
            </a>
            <button
              className="text-business-600"
              onClick={toggleMobileMenu}
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-lg">
            <a
              href="#inicio"
              className="py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Início
            </a>
            <a
              href="#sobre"
              className="py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="py-2 border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              Contato
            </a>
            <button className="btn-primary mt-4">Fale Conosco</button>
          </nav>
          <div className="mt-auto pt-10">
            <p className="text-muted-foreground text-sm">
              © 2024 SuaNegócio. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
