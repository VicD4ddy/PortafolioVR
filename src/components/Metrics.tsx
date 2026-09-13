import React, { useEffect, useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { USER_INFO } from '../data/portfolioData';

interface MetricsProps {
  onContactClick?: () => void;
}

// Interactive counting number hook
const useCounter = (target: number, duration: number = 1500, startNow: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startNow) return;

    let start = 0;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration, startNow]);

  return count;
};

export const Metrics: React.FC<MetricsProps> = ({ onContactClick }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const reposCount = useCounter(USER_INFO.reposCount, 1200, isInView);
  const typeSafetyCount = useCounter(100, 1500, isInView);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={ref}
      id="metrics-section"
      className="py-20 bg-brand-dark border-b border-brand-border relative overflow-hidden"
      data-purpose="metrics-manifesto"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Query / Quick Connect Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            <span className="w-4 h-[1px] bg-brand-yellow" />
            Contacto Directo
          </div>

          <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
            ¿Tienes una idea o necesitas<br />
            construir un sistema?
          </h3>

          <p className="text-brand-muted text-sm leading-relaxed max-w-md">
            Disponible para desarrollo de plataformas completas, soluciones de e-commerce personalizadas o automatización de tareas con Python.
          </p>

          <div className="pt-2">
            <motion.a
              whileHover={{ x: 4 }}
              id="metrics-email-link"
              className="inline-flex items-center gap-3 text-brand-yellow text-base font-semibold group hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 rounded-sm"
              href={`mailto:${USER_INFO.email}`}
            >
              <Mail className="w-4 h-4 text-brand-yellow" />
              <span className="underline decoration-brand-yellow underline-offset-8 group-hover:text-brand-yellow-hover">
                {USER_INFO.email}
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Quote & Key Counters Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-between space-y-10"
        >
          <div>
            <blockquote className="text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-snug">
              “La excelencia en ingeniería no consiste en añadir complejidad, sino en diseñar sistemas robustos y veloces que potencien los negocios.”
            </blockquote>
            <p className="text-brand-muted text-xs leading-relaxed mt-4 max-w-xl">
              Enfoque en arquitectura limpia, TypeScript riguroso, pruebas de integración y automatización continua para entregar software que perdura.
            </p>
          </div>

          {/* Animated Metric Counters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-border/60">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-1 group cursor-default transition-transform"
            >
              <span className="text-4xl lg:text-5xl font-black text-brand-yellow tracking-tight block">
                {reposCount}+
              </span>
              <span className="text-xs uppercase font-medium text-brand-muted leading-tight block">
                Repositorios<br />en GitHub
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-1 group cursor-default transition-transform"
            >
              <span className="text-4xl lg:text-5xl font-black text-emerald-400 tracking-tight block">
                {typeSafetyCount}%
              </span>
              <span className="text-xs uppercase font-medium text-brand-muted leading-tight block">
                TypeScript &amp;<br />Type Safety
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-1 group cursor-default transition-transform"
            >
              <span className="text-4xl lg:text-5xl font-black text-white tracking-tight block">
                &lt;0.8s
              </span>
              <span className="text-xs uppercase font-medium text-brand-muted leading-tight block">
                Tiempos de Carga<br />en Producción
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
