import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onStoryClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStoryClick }) => {
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
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-brand-dark/90 backdrop-blur-md'
      }`}
      data-purpose="site-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo"
          aria-label="Carlos Mendoza Homepage"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 rounded-full"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center transition-transform group-hover:scale-105 shadow-md shadow-brand-yellow/20">
            {/* Logo Symbol matching the design in image */}
            <svg
              className="w-5 h-5 text-brand-dark"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
            </svg>
          </div>
          <span className="sr-only">Carlos Mendoza</span>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide font-medium">
          <button
            id="nav-services"
            onClick={() => scrollToSection('services')}
            className={`transition-colors py-1 relative ${
              activeSection === 'services'
                ? 'text-brand-yellow font-semibold'
                : 'text-brand-muted hover:text-white'
            }`}
          >
            Services
            {activeSection === 'services' && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-yellow rounded-full" />
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
            Works
            {activeSection === 'works' && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-yellow rounded-full" />
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
            Blog
            {activeSection === 'blog' && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-yellow rounded-full" />
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
            Contact
            {activeSection === 'contact' && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-yellow rounded-full" />
            )}
          </button>
        </nav>

        {/* Social Links Desktop */}
        <div className="hidden md:flex items-center gap-5 text-brand-muted">
          <a
            id="header-social-dribbble"
            className="hover:text-brand-yellow transition-colors p-1"
            href="https://dribbble.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Dribbble"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.79 10.74c-.03-.02-2.88-.93-5.74-.42.23-.52.44-1.05.62-1.58.11-.32.2-.64.29-.97 3.01.76 4.67 2.68 4.83 2.97zm-6.27-3.95c-.18.3-.37.61-.58.93-2.02-.68-4.31-.96-6.73-.78.89-2.28 2.64-4.11 4.85-4.88 1.15 1.25 2.01 2.87 2.46 4.73zM7.22 7.74c2.25-.17 4.38.08 6.27.7-.22.45-.46.91-.71 1.37-3.6-1.07-7.22.18-7.39.24.18-.84.47-1.63.87-2.36.31.02.63.04.96.05zm-4.78 6.1c.14-.04 2.88-.92 6.44-.06-.32 1-.61 2.06-.86 3.16-3.04-1.12-5.06-2.88-5.58-3.1zm2.34 4.89c.21.15 1.94 1.34 4.7 2.37-1.16.59-2.48.9-3.87.9-1.29 0-2.52-.27-3.64-.78.78-.79 1.77-1.66 2.81-2.49zm6.75 3.09c.2-.95.45-1.89.73-2.77 2.49.69 4.79.52 5.03.5-1.13 1.54-2.71 2.72-4.57 3.32-.4-.32-.8-.67-1.19-1.05zm6.81-3.21c-.44-.03-2.48-.12-4.82-.72.37-1.15.68-2.33.91-3.52 2.34.45 4.34 1.63 4.5 1.73-.13.91-.42 1.76-.84 2.53.08-.01.17-.02.25-.02z" />
            </svg>
          </a>
          <a
            id="header-social-instagram"
            className="hover:text-brand-yellow transition-colors p-1"
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            id="header-social-linkedin"
            className="hover:text-brand-yellow transition-colors p-1"
            href="https://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
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
        <div className="md:hidden bg-brand-surface border-b border-brand-border px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 text-base font-medium text-white hover:text-brand-yellow"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('works')}
              className="text-left py-2 text-base font-medium text-white hover:text-brand-yellow"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-left py-2 text-base font-medium text-white hover:text-brand-yellow"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 text-base font-medium text-white hover:text-brand-yellow"
            >
              Contact
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStoryClick();
              }}
              className="text-left py-2 text-base font-medium text-brand-yellow hover:underline"
            >
              My Story →
            </button>
          </nav>
          <div className="pt-4 border-t border-brand-border flex items-center gap-6 text-brand-muted">
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-brand-yellow">
              Dribbble
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-yellow">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brand-yellow">
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
