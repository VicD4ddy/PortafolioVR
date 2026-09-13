import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface SelectedWorksProps {
  onProjectClick: (project: Project) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onProjectClick }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'product' | 'brand' | 'dev'>('all');
  const [liveRequests, setLiveRequests] = useState(4.2);
  const [liveLatency, setLiveLatency] = useState(12);

  // Quick simulation effect for live dashboard interaction
  const triggerPing = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiveLatency(Math.floor(10 + Math.random() * 5));
    setLiveRequests((prev) => +(prev + 0.01).toFixed(2));
  };

  const beServerProject = PROJECTS.find((p) => p.id === 'beserver') || PROJECTS[0];
  const tumblerProject = PROJECTS.find((p) => p.id === 'energetic-tumbler') || PROJECTS[1];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'product') return p.category.includes('PRODUCT');
    if (activeTab === 'brand') return p.category.includes('BRANDING');
    if (activeTab === 'dev') return p.category.includes('FINTECH') || p.tags.includes('React');
    return true;
  });

  return (
    <section
      id="works"
      className="py-24 bg-brand-dark border-b border-brand-border"
      data-purpose="portfolio-showcase"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow block mb-3">
              — Portfolio
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              All Creative Works,<br />
              Selected projects.
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-brand-muted text-sm max-w-sm">
              Explora algunos de los trabajos más recientes en productos digitales, sistemas SaaS de alto rendimiento y diseño de marca.
            </p>
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => setActiveTab('all')}
                className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                  activeTab === 'all'
                    ? 'bg-brand-yellow text-brand-dark font-semibold'
                    : 'bg-brand-card text-brand-muted hover:text-white border border-brand-border'
                }`}
              >
                All Selected
              </button>
              <button
                onClick={() => setActiveTab('product')}
                className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                  activeTab === 'product'
                    ? 'bg-brand-yellow text-brand-dark font-semibold'
                    : 'bg-brand-card text-brand-muted hover:text-white border border-brand-border'
                }`}
              >
                Product Design
              </button>
              <button
                onClick={() => setActiveTab('brand')}
                className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                  activeTab === 'brand'
                    ? 'bg-brand-yellow text-brand-dark font-semibold'
                    : 'bg-brand-card text-brand-muted hover:text-white border border-brand-border'
                }`}
              >
                Branding
              </button>
              <button
                onClick={() => setActiveTab('dev')}
                className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                  activeTab === 'dev'
                    ? 'bg-brand-yellow text-brand-dark font-semibold'
                    : 'bg-brand-card text-brand-muted hover:text-white border border-brand-border'
                }`}
              >
                Engineering
              </button>
            </div>
          </div>
        </div>

        {/* Primary Screen Works Layout Grid (Exact match to provided screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Project 1: BeServer (7 cols) */}
          <div
            id="project-card-beserver"
            onClick={() => onProjectClick(beServerProject)}
            className="md:col-span-7 bg-brand-card border border-brand-border rounded-lg overflow-hidden group hover:border-brand-yellow/50 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-black/50"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onProjectClick(beServerProject)}
          >
            <div className="p-8 pb-4 flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  Branding, Product
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-brand-yellow transition-colors flex items-center gap-2">
                  BeServer.
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Residential Proxy Server &amp; Control Dashboard
                </p>
              </div>
              <span className="text-brand-muted text-sm group-hover:text-brand-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                ↗
              </span>
            </div>

            {/* Mockup Graphic Area */}
            <div className="p-6 pt-2">
              <div className="bg-[#181a20] rounded-md p-5 border border-white/5 shadow-inner">
                {/* Window top control dots */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <button
                    onClick={triggerPing}
                    title="Click to ping test"
                    className="text-[10px] text-brand-muted hover:text-brand-yellow border border-white/10 px-2 py-0.5 rounded transition-colors"
                  >
                    Ping Node
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Status Banner */}
                  <div className="h-8 bg-brand-card rounded w-3/4 flex items-center px-4 text-[11px] text-brand-muted gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Proxy Pool Status: Active
                  </div>

                  {/* 3 Metric Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-brand-card rounded p-3 flex flex-col justify-between">
                      <span className="text-[10px] text-brand-muted">Bandwidth</span>
                      <span className="text-sm font-bold text-brand-yellow">1.84 TB</span>
                    </div>

                    <div className="h-20 bg-brand-card rounded p-3 flex flex-col justify-between">
                      <span className="text-[10px] text-brand-muted">Requests</span>
                      <span className="text-sm font-bold text-white">{liveRequests}M</span>
                    </div>

                    <div className="h-20 bg-brand-card rounded p-3 flex flex-col justify-between">
                      <span className="text-[10px] text-brand-muted">Latency</span>
                      <span className="text-sm font-bold text-emerald-400">{liveLatency}ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Energetic Tumbler (5 cols) */}
          <div
            id="project-card-tumbler"
            onClick={() => onProjectClick(tumblerProject)}
            className="md:col-span-5 bg-brand-card border border-brand-border rounded-lg overflow-hidden group hover:border-brand-yellow/50 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-black/50"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onProjectClick(tumblerProject)}
          >
            <div className="p-8 pb-4 flex justify-between items-start">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  Product, E-commerce
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-brand-yellow transition-colors">
                  Energetic Tumbler.
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Smart Thermal Hydration Product
                </p>
              </div>
              <span className="text-brand-muted text-sm group-hover:text-brand-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                ↗
              </span>
            </div>

            {/* Mockup Graphic Area */}
            <div className="p-6 pt-2">
              <div className="bg-[#181a20] rounded-md p-6 border border-white/5 flex flex-col items-center justify-center min-h-[190px] relative overflow-hidden group-hover:bg-[#1b1e25] transition-colors">
                {/* Background glow */}
                <div className="absolute w-36 h-36 bg-brand-yellow/10 rounded-full blur-xl pointer-events-none" />

                {/* Sleek Tumbler cylinder */}
                <div className="w-16 h-32 rounded-2xl bg-gradient-to-b from-brand-yellow/25 via-brand-card to-black/70 border border-brand-yellow/40 flex items-center justify-center shadow-xl relative transition-transform duration-500 group-hover:scale-105 group-hover:border-brand-yellow">
                  {/* Top LED ring */}
                  <div className="absolute top-2 w-10 h-1 rounded-full bg-brand-yellow/80 shadow-[0_0_8px_rgba(245,176,39,0.8)]" />
                  
                  {/* Vertical branding text */}
                  <span className="text-[10px] uppercase tracking-widest text-brand-yellow font-bold rotate-90 select-none">
                    Tumbler
                  </span>

                  {/* Temperature sensor badge */}
                  <div className="absolute bottom-2 text-[9px] font-mono text-white/70">
                    64°F
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Works Section (when filtered or exploring more) */}
        {activeTab !== 'all' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-brand-border/40">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onProjectClick(project)}
                className="bg-brand-surface p-6 rounded-lg border border-brand-border hover:border-brand-yellow transition-all cursor-pointer flex justify-between items-center group"
              >
                <div>
                  <span className="text-[11px] font-semibold text-brand-muted uppercase">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors mt-0.5">
                    {project.title}
                  </h4>
                  <p className="text-xs text-brand-muted mt-1">{project.description}</p>
                </div>
                <span className="text-brand-yellow group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
