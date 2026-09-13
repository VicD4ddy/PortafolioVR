import React, { useState, useEffect } from 'react';
import { Home, Briefcase, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { USER_INFO } from '../data/portfolioData';

export const MobileQuickDock: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'works' | 'whatsapp' | 'ai'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const worksEl = document.getElementById('works');
      if (worksEl) {
        const top = worksEl.offsetTop - 180;
        const height = worksEl.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveTab('works');
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveTab('home');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveTab('home');
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (id === 'works') setActiveTab('works');
    }
  };

  const handleOpenAI = () => {
    setActiveTab('ai');
    window.dispatchEvent(new CustomEvent('open-ai-assistant'));
  };

  // Only render on mobile viewports (<768px)
  return (
    <div
      className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 safe-bottom-margin pointer-events-auto"
      style={{ width: 'calc(100% - 2rem)', maxWidth: '360px' }}
    >
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-brand-surface/90 backdrop-blur-xl border border-white/10 rounded-full px-3 py-1.5 shadow-2xl shadow-black/90 flex items-center justify-around"
        aria-label="Navegación móvil rápida"
      >
        {/* Inicio */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection('home')}
          className={`flex flex-col items-center justify-center p-2 rounded-full min-w-[54px] transition-colors cursor-pointer ${
            activeTab === 'home' ? 'text-brand-yellow font-semibold' : 'text-brand-muted hover:text-white'
          }`}
          aria-label="Ir a inicio"
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[9px] tracking-tight">Inicio</span>
        </motion.button>

        {/* Proyectos */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection('works')}
          className={`flex flex-col items-center justify-center p-2 rounded-full min-w-[54px] transition-colors cursor-pointer ${
            activeTab === 'works' ? 'text-brand-yellow font-semibold' : 'text-brand-muted hover:text-white'
          }`}
          aria-label="Ver proyectos"
        >
          <Briefcase className="w-4 h-4 mb-0.5" />
          <span className="text-[9px] tracking-tight">Proyectos</span>
        </motion.button>

        {/* WhatsApp Direct */}
        <motion.a
          whileTap={{ scale: 0.9 }}
          href={USER_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-full min-w-[54px] text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
          aria-label="Escribir por WhatsApp"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[9px] tracking-tight font-medium">WhatsApp</span>
        </motion.a>

        {/* Víctor AI */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleOpenAI}
          className="relative flex flex-col items-center justify-center p-2 rounded-full min-w-[54px] text-white transition-colors cursor-pointer group"
          aria-label="Abrir asistente de IA"
        >
          <div className="relative">
            <Sparkles className="w-4 h-4 mb-0.5 text-brand-yellow animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[9px] tracking-tight font-bold text-brand-yellow">Víctor AI</span>
        </motion.button>
      </motion.nav>
    </div>
  );
};
