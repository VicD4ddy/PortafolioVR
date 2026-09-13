import React from 'react';
import { Github, Mail, Sparkles, Terminal, Code2, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE, USER_INFO } from '../data/portfolioData';

interface HeroProps {
  onStoryClick: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStoryClick, onContactClick }) => {
  return (
    <section
      id="hero-section"
      className="relative bg-brand-surface pt-12 pb-24 overflow-hidden border-b border-brand-border"
      data-purpose="hero-presentation"
    >
      {/* Subtle ambient animated lighting */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Column Left: Big Typography & Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 z-10 flex flex-col justify-between self-stretch"
        >
          <div className="pt-4">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponible para nuevos proyectos</span>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-1 bg-brand-yellow mb-6 rounded-full"
            />

            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
              Víctor<br />
              Reyes<span className="text-brand-yellow">.</span>
            </h1>

            <p className="text-base text-brand-yellow font-medium mt-3 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Full Stack Developer &amp; Software Engineer</span>
            </p>
          </div>

          {/* Social Icons & GitHub Profile */}
          <div className="flex flex-wrap items-center gap-4 text-brand-muted mt-10 lg:mt-14">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              id="hero-social-github"
              aria-label="Víctor Reyes en GitHub"
              className="px-4 py-2 rounded-full border border-brand-border flex items-center gap-2 text-xs font-semibold text-white hover:text-brand-yellow hover:border-brand-yellow/60 hover:bg-white/5 transition-all shadow-md"
              href={USER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4 text-brand-yellow" />
              <span>github.com/{USER_INFO.githubUser}</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              id="hero-social-email"
              aria-label="Enviar correo directo a Víctor Reyes"
              className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center hover:text-brand-yellow hover:border-brand-yellow/60 hover:bg-white/5 transition-all shadow-md"
              href={`mailto:${USER_INFO.email}`}
              title="Enviar correo"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Column Center: Hero Portrait with Floating Tech Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 flex justify-center relative my-6 lg:my-0"
        >
          <div className="relative w-64 sm:w-72 max-w-full group">
            {/* Ambient accent ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-full bg-gradient-to-tr from-brand-yellow via-amber-500/40 to-transparent opacity-80 blur-md pointer-events-none"
            />

            {/* Floating Tech Badge 1: React 19 (Top-left) */}
            <motion.div
              animate={{ y: [0, -7, 0], x: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-6 z-20 bg-brand-dark/90 backdrop-blur-md border border-brand-yellow/50 px-2.5 py-1 rounded-full text-[10px] font-bold text-white shadow-lg flex items-center gap-1.5"
            >
              <span className="text-cyan-400">⚛</span>
              <span>React 19</span>
            </motion.div>

            {/* Floating Tech Badge 2: TypeScript (Top-right) */}
            <motion.div
              animate={{ y: [0, 8, 0], x: [0, 3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-3 -right-6 z-20 bg-brand-dark/90 backdrop-blur-md border border-blue-500/50 px-2.5 py-1 rounded-full text-[10px] font-bold text-white shadow-lg flex items-center gap-1.5"
            >
              <span className="text-blue-400 font-mono">TS</span>
              <span>TypeScript</span>
            </motion.div>

            {/* Floating Tech Badge 3: Python (Bottom-left) */}
            <motion.div
              animate={{ y: [0, -6, 0], x: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-3 -left-5 z-20 bg-brand-dark/90 backdrop-blur-md border border-yellow-500/50 px-2.5 py-1 rounded-full text-[10px] font-bold text-white shadow-lg flex items-center gap-1.5"
            >
              <span className="text-amber-400">🐍</span>
              <span>Python Bot</span>
            </motion.div>

            {/* Floating Tech Badge 4: Lighthouse (Bottom-right) */}
            <motion.div
              animate={{ y: [0, 6, 0], x: [0, -2, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -bottom-4 -right-4 z-20 bg-brand-dark/90 backdrop-blur-md border border-emerald-500/50 px-2.5 py-1 rounded-full text-[10px] font-bold text-white shadow-lg flex items-center gap-1.5"
            >
              <Zap className="w-3 h-3 text-emerald-400" />
              <span>100% Fast</span>
            </motion.div>

            {/* Portrait Frame */}
            <div className="relative rounded-full overflow-hidden aspect-square bg-gradient-to-b from-brand-card to-brand-surface border-2 border-white/20 shadow-2xl flex items-center justify-center">
              <img
                id="hero-portrait"
                alt="Víctor Alfonzo Reyes Portrait"
                className="object-cover w-full h-full filter saturate-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
                src={HERO_IMAGE}
                loading="eager"
              />
            </div>

            {/* Quick Badge overlay */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 bg-brand-card/90 backdrop-blur-md border border-brand-yellow/60 px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 text-[11px] text-white z-20"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-spin" style={{ animationDuration: '6s' }} />
              <span className="font-bold">{USER_INFO.reposCount}+ Repos</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Column Right: Introduction & Action */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 z-10 space-y-6 lg:pl-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            <span className="w-4 h-[1px] bg-brand-yellow" />
            Introducción
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-white">
            Desarrollo web de alto rendimiento y automatización inteligente.
          </h2>

          <p className="text-brand-muted text-sm leading-relaxed">
            Especializado en crear plataformas de e-commerce robustas, cotizadores instantáneos y soluciones de automatización en Python que resuelven cuellos de botella operativos e impulsan las ventas.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <motion.button
              whileHover={{ x: 4 }}
              id="hero-my-story-btn"
              onClick={onStoryClick}
              className="inline-flex items-center gap-2 text-brand-yellow font-semibold text-sm group hover:underline focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 rounded-sm py-1 cursor-pointer"
            >
              <span>Mi trayectoria y skills</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1.5 text-base">→</span>
            </motion.button>

            {onContactClick && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onContactClick}
                className="text-xs bg-brand-card hover:bg-brand-card-hover text-white border border-brand-border hover:border-brand-yellow px-4 py-2 rounded-full transition-all cursor-pointer shadow-sm"
              >
                Cotizar Proyecto
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
