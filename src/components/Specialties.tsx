import React from 'react';
import { Code2, ShoppingCart, Bot } from 'lucide-react';
import { motion } from 'motion/react';
import { SPECIALTIES } from '../data/portfolioData';
import { ServiceSpecialty } from '../types';

interface SpecialtiesProps {
  selectedSpecialtyId: string;
  onSelectSpecialty: (id: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({
  selectedSpecialtyId,
  onSelectSpecialty,
}) => {
  return (
    <section
      id="services"
      className="py-16 bg-brand-surface border-b border-brand-border relative"
      data-purpose="specialties-cards"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow block mb-2">
              — Áreas de Especialidad
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Ingeniería de software con enfoque en resultados.
            </h3>
          </div>
          <p className="text-brand-muted text-xs md:text-sm max-w-md">
            Soluciones adaptadas para escalar negocios, desde tiendas online de gran catálogo hasta sistemas de automatización complejos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec: ServiceSpecialty, idx: number) => {
            const isSelected = selectedSpecialtyId === spec.id;

            return (
              <motion.button
                key={spec.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                id={`service-card-${spec.id}`}
                onClick={() => onSelectSpecialty(spec.id)}
                className={`p-8 rounded-xl transition-all duration-300 flex flex-col justify-between min-h-[280px] text-left cursor-pointer relative group border ${
                  isSelected
                    ? 'bg-gradient-to-br from-brand-card via-[#242936] to-[#1c202a] border-brand-yellow shadow-xl shadow-brand-yellow/15'
                    : 'bg-brand-card hover:bg-brand-card-hover border-brand-border hover:border-brand-yellow/50'
                }`}
              >
                {/* Top Row: Icon & Status */}
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform ${
                      isSelected
                        ? 'bg-brand-yellow text-brand-dark shadow-md shadow-brand-yellow/30'
                        : 'bg-white/5 text-brand-muted border border-white/10 group-hover:text-brand-yellow group-hover:border-brand-yellow/40'
                    }`}
                  >
                    {spec.icon === 'code' && <Code2 className="w-6 h-6" />}
                    {spec.icon === 'product' && <ShoppingCart className="w-6 h-6" />}
                    {spec.icon === 'brand' && <Bot className="w-6 h-6" />}
                  </motion.div>

                  <span className="text-xs font-mono font-bold text-brand-muted group-hover:text-brand-yellow transition-colors">
                    {spec.projectsCount}+ Proyectos
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h4 className="text-xl font-bold text-white group-hover:text-brand-yellow transition-colors">
                    {spec.title}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed mt-2.5">
                    {spec.description}
                  </p>
                </div>

                {/* Bottom Highlight Line */}
                <div className="w-full pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className={isSelected ? 'text-brand-yellow font-semibold' : 'text-brand-muted'}>
                    {isSelected ? 'Especialidad Seleccionada' : 'Click para enfocar'}
                  </span>
                  <span className="text-brand-yellow group-hover:translate-x-1.5 transition-transform">
                    →
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
