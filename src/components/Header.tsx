import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Sparkles } from 'lucide-react';
import { USER_INFO } from '../data/portfolioData';

interface HeaderProps {
  onStoryClick: () => void;
  onOpenAI?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStoryClick, onOpenAI }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['services', 'works', 'blog', 'contact'];
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`w-full border-b border-brand-border sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-xl shadow-black/30'
          : 'bg-brand-dark/80 backdrop-blur-md'
      }`}
      data-purpose="site-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo"
          aria-label={`${USER_INFO.name} Portafolio`}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 rounded-full"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-yellow to-amber-300 flex items-center justify-center font-black text-brand-dark text-sm tracking-wider shadow-md shadow-brand-yellow/20 transition-transform group-hover:scale-105">
            VR
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm tracking-tight group-hover:text-brand-yellow transition-colors">
              Víctor Reyes<span className="text-brand-yellow">.</span>
            </span>
            <span className="text-[10px] text-brand-muted font-mono tracking-wider">
              @{USER_INFO.githubUser}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide font-medium">
          <button
            id="nav-services"
            onClick={() => scrollToSection('services')}
            className={`transition-colors py-1 relative ${
              activeSection === 'services'
                ? 'text-brand-yellow font-semibold'
                : 'text-brand-muted hover:text-white'
            }`}
          >
            Especialidades
            {activeSection === 'services' && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-yellow rounded-full shadow-[0_0_8px_rgba(245,176,39,0.8)]" />
            )}
          </button>
          <button
            id="nav-works"
            onClick={() => scrollToSection('works')}
            className={`transition-colors py-1 relative ${
              activeSection === 'works'
                ? 'text-brand-yellow font-semibold'
                : 'text-brand-muted hover:text-white'
            }`}
          >
            Proyectos
            {activeSection === 'works' && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-yellow rounded-full shadow-[0_0_8px_rgba(245,176,39,0.8)]" />
            )}
          </button>
          <button
            id="nav-blog"
            onClick={() => scrollToSection('blog')}
            className={`transition-colors py-1 relative ${
              activeSection === 'blog'
                ? 'text-brand-yellow font-semibold'
                : 'text-brand-muted hover:text-white'
            }`}
          >
            Artículos
            {activeSection === 'blog' && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-yellow rounded-full shadow-[0_0_8px_rgba(245,176,39,0.8)]" />
            )}
          </button>
          <button
            id="nav-contact"
            onClick={() => scrollToSection('contact')}
            className={`transition-colors py-1 relative ${
              activeSection === 'contact'
                ? 'text-brand-yellow font-semibold'
                : 'text-brand-muted hover:text-white'
            }`}
          >
            Contacto
            {activeSection === 'contact' && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-yellow rounded-full shadow-[0_0_8px_rgba(245,176,39,0.8)]" />
            )}
          </button>

          {/* AI Assistant Quick Trigger */}
          {onOpenAI && (
            <button
              onClick={onOpenAI}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Víctor AI</span>
            </button>
          )}
        </nav>

        {/* Social Links Desktop */}
        <div className="hidden md:flex items-center gap-4 text-brand-muted">
          <a
            id="header-social-github"
            className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center hover:text-brand-yellow hover:border-brand-yellow/60 hover:bg-white/5 transition-all"
            href={USER_INFO.github}
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub (@VicD4ddy)"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            id="header-social-email"
            className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center hover:text-brand-yellow hover:border-brand-yellow/60 hover:bg-white/5 transition-all"
            href={`mailto:${USER_INFO.email}`}
            title="Enviar Correo"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={onStoryClick}
            className="text-xs font-semibold text-brand-yellow border border-brand-yellow/40 hover:bg-brand-yellow hover:text-brand-dark px-3.5 py-1.5 rounded-full transition-all"
          >
            Mi Trayectoria →
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          id="mobile-menu-button"
          type="button"
          className="md:hidden text-white p-2 rounded-md hover:bg-brand-surface border border-brand-border focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-surface border-b border-brand-border px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 text-base font-medium text-white hover:text-brand-yellow"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className="text-left py-2 text-base font-medium text-white hover:text-brand-yellow"
            >
              Proyectos Seleccionados
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-left py-2 text-base font-medium text-white hover:text-brand-yellow"
            >
              Artículos &amp; Filosofía
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 text-base font-medium text-white hover:text-brand-yellow"
            >
              Contacto
            </button>
            {onOpenAI && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAI();
                }}
                className="text-left py-2 text-base font-medium text-brand-yellow flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Hablar con Víctor AI Assistant</span>
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStoryClick();
              }}
              className="text-left py-2 text-base font-medium text-brand-yellow hover:underline"
            >
              Mi Trayectoria y Habilidades →
            </button>
          </nav>
          <div className="pt-4 border-t border-brand-border flex items-center gap-6 text-brand-muted">
            <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="hover:text-brand-yellow flex items-center gap-1 text-sm">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href={`mailto:${USER_INFO.email}`} className="hover:text-brand-yellow flex items-center gap-1 text-sm">
              <Mail className="w-4 h-4" /> Correo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
