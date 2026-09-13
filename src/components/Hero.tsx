import React from 'react';
import { HERO_IMAGE } from '../data/portfolioData';

interface HeroProps {
  onStoryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStoryClick }) => {
  return (
    <section
      id="hero-section"
      className="relative bg-brand-surface pt-12 pb-24 overflow-hidden border-b border-brand-border"
      data-purpose="hero-presentation"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-brand-yellow/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Column Left: Big Typography & Social Icons */}
        <div className="lg:col-span-4 z-10 flex flex-col justify-between self-stretch">
          <div className="pt-6">
            <div className="w-10 h-1 bg-brand-yellow mb-6 rounded-full" />
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
              Carlos<br />
              Mendoza<span className="text-brand-yellow">.</span>
            </h1>
          </div>

          {/* Social Icons Left Lower */}
          <div className="flex items-center gap-4 text-brand-muted mt-12 lg:mt-16">
            <a
              id="hero-social-dribbble"
              aria-label="Carlos Mendoza on Dribbble"
              className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center hover:text-brand-yellow hover:border-brand-yellow transition-all hover:scale-105 hover:bg-white/5 active:scale-95"
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Dribbble"
            >
              <span className="text-xs font-semibold">Dr</span>
            </a>
            <a
              id="hero-social-linkedin"
              aria-label="Carlos Mendoza on LinkedIn"
              className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center hover:text-brand-yellow hover:border-brand-yellow transition-all hover:scale-105 hover:bg-white/5 active:scale-95"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <span className="text-xs font-semibold">In</span>
            </a>
            <a
              id="hero-social-behance"
              aria-label="Carlos Mendoza on Behance"
              className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center hover:text-brand-yellow hover:border-brand-yellow transition-all hover:scale-105 hover:bg-white/5 active:scale-95"
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              title="Behance"
            >
              <span className="text-xs font-semibold">Be</span>
            </a>
          </div>
        </div>

        {/* Column Center: Hero Portrait */}
        <div className="lg:col-span-4 flex justify-center relative my-4 lg:my-0">
          <div className="relative w-72 sm:w-80 lg:w-84 max-w-full group">
            {/* Ambient accent ring */}
            <div className="absolute -inset-1 rounded-t-full bg-gradient-to-b from-brand-yellow/20 to-transparent opacity-60 blur-sm group-hover:opacity-90 transition-opacity" />
            
            {/* Portrait Frame with smooth bottom crop */}
            <div className="relative rounded-t-full overflow-hidden aspect-[4/5] bg-gradient-to-b from-brand-card to-transparent border-t border-x border-white/10 shadow-2xl flex items-end justify-center">
              <img
                id="hero-portrait"
                alt="Carlos Mendoza Portrait"
                className="object-cover w-full h-full filter saturate-110 contrast-105 transition-transform duration-700 group-hover:scale-105"
                src={HERO_IMAGE}
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Column Right: Introduction & Action */}
        <div className="lg:col-span-4 z-10 space-y-6 lg:pl-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            <span className="w-4 h-[1px] bg-brand-yellow" />
            Introduction
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold leading-snug text-white">
            Product Designer and Developer, based in California.
          </h2>

          <p className="text-brand-muted text-sm leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
          </p>

          <div className="pt-2">
            <button
              id="hero-my-story-btn"
              onClick={onStoryClick}
              className="inline-flex items-center gap-3 text-brand-yellow font-semibold text-sm group hover:underline focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 rounded-sm py-1 px-1"
            >
              <span>My story</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1.5 text-base">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
