import React from 'react';

interface MetricsProps {
  onContactClick?: () => void;
}

export const Metrics: React.FC<MetricsProps> = ({ onContactClick }) => {
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
      id="metrics-section"
      className="py-20 bg-brand-dark border-b border-brand-border"
      data-purpose="metrics-manifesto"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Query / Quick Connect Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            <span className="w-4 h-[1px] bg-brand-yellow" />
            Contact
          </div>

          <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
            Any Type Of Query<br />
            &amp; Discussion.
          </h3>

          <p className="text-brand-muted text-sm leading-relaxed max-w-md">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. ¿Tienes una idea o necesitas liderazgo de diseño para tu próximo producto?
          </p>

          <div className="pt-2">
            <a
              id="metrics-email-link"
              className="inline-flex items-center gap-3 text-brand-yellow text-base font-semibold group hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 rounded-sm"
              href="#contact"
              onClick={scrollToContact}
            >
              <span className="underline decoration-brand-yellow underline-offset-8 group-hover:text-brand-yellow-hover">
                hi@carlos.com
              </span>
              <span className="transition-transform duration-200 group-hover:translate-x-1.5 text-lg">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Quote & Key Counters Column */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-12">
          <div>
            <blockquote className="text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-snug">
              “You can't use up creativity, the more you use, the more you have in your signifiant mind.”
            </blockquote>
            <p className="text-brand-muted text-xs leading-relaxed mt-4 max-w-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
          </div>

          {/* Big Metric Counters */}
          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-brand-border/60">
            <div className="flex items-baseline gap-4 group">
              <span className="text-5xl lg:text-6xl font-black text-brand-yellow tracking-tight group-hover:scale-105 transition-transform origin-left">
                14
              </span>
              <span className="text-xs uppercase font-medium text-brand-muted leading-tight">
                Years of<br />
                Experience.
              </span>
            </div>

            <div className="flex items-baseline gap-4 group">
              <span className="text-5xl lg:text-6xl font-black text-brand-yellow tracking-tight group-hover:scale-105 transition-transform origin-left">
                187
              </span>
              <span className="text-xs uppercase font-medium text-brand-muted leading-tight">
                Satisfied<br />
                Clients.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
