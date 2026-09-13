import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Search,
  ShoppingBag,
  Sparkles,
  Terminal,
  Zap,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface SelectedWorksProps {
  onProjectClick: (project: Project) => void;
}

type TabCategory = 'all' | 'ecommerce' | 'saas' | 'automation' | 'web';

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onProjectClick }) => {
  const [activeTab, setActiveTab] = useState<TabCategory>('all');

  // Interactive simulation state for Repuestos Sotomayor card
  const [searchQuery] = useState('Frenos Toyota Corolla');
  const [cartCount, setCartCount] = useState(3);

  // Interactive simulation state for VicJobFinder card
  const [botActive, setBotActive] = useState(true);
  const [vacantesFound, setVacantesFound] = useState(10420);

  // Featured 3 Projects specified by user
  const sotomayorProject = PROJECTS.find((p) => p.id === 'ecommerce-sotomayor') || PROJECTS[0];
  const vicJobProject = PROJECTS.find((p) => p.id === 'vic-job-finder') || PROJECTS[1];
  const sealProProject = PROJECTS.find((p) => p.id === 'seal-pro-landing') || PROJECTS[2];

  const handleSimulateBot = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBotActive(true);
    setVacantesFound((prev) => prev + Math.floor(Math.random() * 15) + 3);
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === 'all') return true;
    return p.categoryKey === activeTab;
  });

  const tabConfig: { id: TabCategory; label: string }[] = [
    { id: 'all', label: `Todos (${PROJECTS.length})` },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'saas', label: 'Gestión & SaaS' },
    { id: 'automation', label: 'Automatización & Python' },
    { id: 'web', label: 'Web Apps & Landings' },
  ];

  return (
    <section
      id="works"
      className="py-24 bg-brand-dark border-b border-brand-border relative"
      data-purpose="portfolio-showcase"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow block mb-3 font-mono">
              — Portafolio &amp; Repositorios Reales
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Sistemas en Producción,<br />
              Código Verificado.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-brand-muted text-sm max-w-md">
              Explora soluciones construidas con arquitecturas de alta velocidad en React 19, TypeScript, bots en Python y despliegues en Vercel.
            </p>
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {tabConfig.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
                    activeTab === tab.id
                      ? 'bg-brand-yellow text-brand-dark font-bold shadow-md shadow-brand-yellow/20'
                      : 'bg-brand-card text-brand-muted hover:text-white border border-brand-border'
                  }`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 🌟 3 Proyectos Destacados (Top Showcase) */}
        {activeTab === 'all' && (
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-brand-yellow" />
              <span className="text-xs uppercase tracking-wider font-mono text-brand-yellow font-bold">
                Proyectos Insignia Destacados
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Featured 1: Repuestos Sotomayor E-Commerce (7 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35 }}
                onClick={() => onProjectClick(sotomayorProject)}
                className="lg:col-span-7 bg-brand-card border border-brand-border hover:border-brand-yellow/70 rounded-xl overflow-hidden group cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-black/70 transition-colors"
              >
                <div className="p-7 pb-3 flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30 px-2 py-0.5 rounded font-mono font-bold">
                        DESTACADO
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                        {sotomayorProject.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-yellow transition-colors">
                      {sotomayorProject.title}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 max-w-lg leading-relaxed">
                      {sotomayorProject.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {sotomayorProject.githubUrl && (
                      <a
                        href={sotomayorProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-white/5 border border-white/10 text-brand-muted hover:text-brand-yellow hover:border-brand-yellow/40 transition-colors"
                        title="Ver repositorio en GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <span className="text-brand-muted group-hover:text-brand-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Storefront Mockup Graphic */}
                <div className="p-6 pt-2">
                  <div className="bg-[#181a20] rounded-lg p-4 border border-white/5 shadow-inner space-y-3">
                    <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                      <div className="flex items-center gap-2 text-xs text-brand-muted">
                        <Search className="w-3.5 h-3.5 text-brand-yellow" />
                        <span className="font-mono text-[11px] text-white/90">{searchQuery}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-[11px] bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow px-2 py-0.5 rounded-full">
                          <ShoppingBag className="w-3 h-3" />
                          <span>{cartCount} items</span>
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCartCount((c) => c + 1);
                          }}
                          className="text-[10px] bg-white/5 hover:bg-brand-yellow hover:text-brand-dark px-2 py-0.5 rounded border border-white/10 transition-colors cursor-pointer"
                        >
                          + Añadir
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-center">
                      <div className="bg-brand-card rounded p-2.5 border border-white/5">
                        <span className="text-[9px] text-brand-muted block font-mono">CATÁLOGO</span>
                        <span className="text-xs font-bold text-brand-yellow mt-0.5 block">1,500+ SKU</span>
                      </div>
                      <div className="bg-brand-card rounded p-2.5 border border-white/5">
                        <span className="text-[9px] text-brand-muted block font-mono">LATENCIA</span>
                        <span className="text-xs font-bold text-emerald-400 mt-0.5 block">&lt; 0.8s</span>
                      </div>
                      <div className="bg-brand-card rounded p-2.5 border border-white/5">
                        <span className="text-[9px] text-brand-muted block font-mono">CONVERSIÓN</span>
                        <span className="text-xs font-bold text-white mt-0.5 block">+42%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Featured 2: VicJobFinder (Automation Suite) (5 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                onClick={() => onProjectClick(vicJobProject)}
                className="lg:col-span-5 bg-brand-card border border-brand-border hover:border-brand-yellow/70 rounded-xl overflow-hidden group cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-black/70 transition-colors"
              >
                <div className="p-7 pb-3 flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-sky-500/15 text-sky-400 border border-sky-500/30 px-2 py-0.5 rounded font-mono font-bold">
                        DESTACADO
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                        {vicJobProject.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-yellow transition-colors">
                      {vicJobProject.title}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                      {vicJobProject.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {vicJobProject.githubUrl && (
                      <a
                        href={vicJobProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-white/5 border border-white/10 text-brand-muted hover:text-brand-yellow hover:border-brand-yellow/40 transition-colors"
                        title="Ver repositorio en GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <span className="text-brand-muted group-hover:text-brand-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Bot Terminal Simulation */}
                <div className="p-6 pt-2">
                  <div className="bg-[#101217] rounded-lg p-4 border border-white/5 font-mono text-xs space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5">
                      <div className="flex items-center gap-1.5 text-sky-400">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>python job_daemon.py</span>
                      </div>
                      <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {botActive ? 'Activo' : 'Pausado'}
                      </span>
                    </div>

                    <div className="space-y-1 text-[11px]">
                      <p className="text-brand-muted">
                        <span className="text-brand-yellow">&gt;</span> Indexando LinkedIn &amp; Dev Portals...
                      </p>
                      <p className="text-white font-bold">
                        <span className="text-emerald-400">&gt;</span> Vacantes filtradas: {vacantesFound.toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={handleSimulateBot}
                      className="w-full py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Ejecutar escaneo en vivo (+alertas)</span>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Featured 3: SealPro Industrial (Full 12 cols banner) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                onClick={() => onProjectClick(sealProProject)}
                className="lg:col-span-12 bg-gradient-to-r from-brand-card via-[#1c1f26] to-brand-card border border-brand-border hover:border-brand-yellow/70 rounded-xl p-7 group cursor-pointer hover:shadow-2xl hover:shadow-black/70 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-mono font-bold">
                        DESTACADO
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted font-mono">
                        {sealProProject.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-yellow transition-colors flex items-center gap-2">
                      <span>{sealProProject.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-brand-muted group-hover:text-brand-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {sealProProject.longDescription || sealProProject.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {sealProProject.tags.map((t) => (
                        <span key={t} className="text-[10px] bg-brand-surface text-brand-muted px-2 py-0.5 rounded border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 shrink-0">
                    <div className="grid grid-cols-2 gap-3 text-center w-full sm:w-auto">
                      <div className="bg-brand-surface px-4 py-3 rounded-lg border border-brand-yellow/30">
                        <span className="text-[10px] text-brand-muted block font-mono">LIGHTHOUSE</span>
                        <span className="text-xl font-extrabold text-brand-yellow">100/100</span>
                      </div>
                      <div className="bg-brand-surface px-4 py-3 rounded-lg border border-emerald-500/30">
                        <span className="text-[10px] text-brand-muted block font-mono">LEADS B2B</span>
                        <span className="text-xl font-extrabold text-emerald-400">+58%</span>
                      </div>
                    </div>

                    {sealProProject.githubUrl && (
                      <a
                        href={sealProProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 text-brand-muted hover:text-brand-yellow hover:border-brand-yellow/40 transition-colors flex items-center gap-2 text-xs font-semibold"
                        title="Ver repositorio en GitHub"
                      >
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* 📋 Galería General de Proyectos con Animaciones Fluidas */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase tracking-wider font-mono text-brand-muted">
              {activeTab === 'all'
                ? `Todos los Repositorios y Sistemas (${filteredProjects.length})`
                : `Categoría: ${tabConfig.find((t) => t.id === activeTab)?.label} (${filteredProjects.length})`}
            </span>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28 }}
                  onClick={() => onProjectClick(project)}
                  className="bg-brand-card hover:bg-brand-card-hover p-6 rounded-xl border border-brand-border hover:border-brand-yellow/60 cursor-pointer flex flex-col justify-between group hover:shadow-2xl transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-semibold text-brand-yellow uppercase tracking-wider font-mono">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-mono hover:bg-emerald-500/25 transition-colors"
                            title="Abrir demo en vivo"
                          >
                            <ExternalLink className="w-2.5 h-2.5" />
                            <span>Vercel Live</span>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-brand-muted hover:text-brand-yellow transition-colors p-1"
                            title="Ver código en GitHub"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <ArrowUpRight className="w-4 h-4 text-brand-muted group-hover:text-brand-yellow transition-colors" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-brand-yellow transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-brand-muted mt-1.5 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 space-y-2.5">
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="flex items-center gap-2 text-[10px] text-brand-muted">
                        <span className="text-brand-yellow font-bold">{project.metrics[0].value}</span>
                        <span>• {project.metrics[0].label}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-brand-surface text-brand-muted px-2 py-0.5 rounded border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
