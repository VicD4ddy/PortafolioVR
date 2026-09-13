import React, { useEffect } from 'react';
import { X, CheckCircle2, Github, ExternalLink, Sparkles } from 'lucide-react';
import { Project, Article } from '../types';
import { STORY_CONTENT, USER_INFO } from '../data/portfolioData';

interface ModalsProps {
  activeProject: Project | null;
  onCloseProject: () => void;
  activeArticle: Article | null;
  onCloseArticle: () => void;
  storyOpen: boolean;
  onCloseStory: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  activeProject,
  onCloseProject,
  activeArticle,
  onCloseArticle,
  storyOpen,
  onCloseStory,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeProject) onCloseProject();
        if (activeArticle) onCloseArticle();
        if (storyOpen) onCloseStory();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, activeArticle, storyOpen, onCloseProject, onCloseArticle, onCloseStory]);

  return (
    <>
      {/* Project Case Study Modal */}
      {activeProject && (
        <div
          id="project-case-study-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-brand-card border border-brand-border w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-project-modal"
              onClick={onCloseProject}
              className="absolute top-6 right-6 text-brand-muted hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest">
              {activeProject.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-2">
              {activeProject.title}
            </h2>
            <p className="text-sm text-brand-muted mb-6">
              {activeProject.description}
            </p>

            {/* Quick Meta */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-brand-surface rounded-lg border border-brand-border mb-6 text-xs">
              <div>
                <span className="text-brand-muted block">Cliente / Contexto</span>
                <span className="text-white font-semibold">{activeProject.client || 'Confidencial'}</span>
              </div>
              <div>
                <span className="text-brand-muted block">Año</span>
                <span className="text-white font-semibold">{activeProject.year || '2026'}</span>
              </div>
              <div>
                <span className="text-brand-muted block">Rol</span>
                <span className="text-white font-semibold">{activeProject.role || 'Full Stack Engineer'}</span>
              </div>
            </div>

            {/* Metrics */}
            {activeProject.metrics && (
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-3 font-mono">
                  Métricas de Rendimiento &amp; Impacto
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeProject.metrics.map((m, idx) => (
                    <div key={idx} className="bg-brand-surface p-3 rounded-lg border border-brand-border">
                      <span className="text-lg font-bold text-brand-yellow block">{m.value}</span>
                      <span className="text-[11px] text-brand-muted leading-tight">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="space-y-3 text-sm text-brand-muted leading-relaxed mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Detalles del Proyecto
              </h3>
              <p>{activeProject.longDescription || activeProject.description}</p>
            </div>

            {/* Tags & Action Buttons */}
            <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-brand-surface text-brand-muted px-2.5 py-1 rounded-md border border-brand-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {activeProject.demoUrl && (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-brand-dark font-bold text-xs px-3.5 py-2 rounded-md transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo en Vivo (Vercel)</span>
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold text-xs px-3.5 py-2 rounded-md transition-all shadow-md shadow-brand-yellow/20 cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>Ver en GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Modal */}
      {activeArticle && (
        <div
          id="article-reader-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-brand-card border border-brand-border w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-article-modal"
              onClick={onCloseArticle}
              className="absolute top-6 right-6 text-brand-muted hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs text-brand-muted mb-2 font-mono">
              <span className="text-brand-yellow font-semibold">{activeArticle.category}</span>
              <span>•</span>
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              {activeArticle.title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-brand-muted leading-relaxed mb-8">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-border">
              {activeArticle.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-brand-surface text-brand-muted px-2.5 py-1 rounded-md border border-brand-border"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Story / About Modal */}
      {storyOpen && (
        <div
          id="story-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-brand-card border border-brand-border w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-story-modal"
              onClick={onCloseStory}
              className="absolute top-6 right-6 text-brand-muted hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest font-mono">
              Trayectoria &amp; Filosofía de Trabajo
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1 mb-1">
              {STORY_CONTENT.title}
            </h2>
            <p className="text-xs text-brand-yellow font-mono mb-6">
              {STORY_CONTENT.subtitle}
            </p>

            <p className="text-white text-sm sm:text-base leading-relaxed mb-6 font-medium">
              {STORY_CONTENT.intro}
            </p>

            {/* Milestones timeline */}
            <div className="mb-8 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-3 font-mono">
                Hitos y Evolución Técnica
              </h3>
              <div className="space-y-3">
                {STORY_CONTENT.milestones.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-brand-surface rounded-lg border border-brand-border flex items-start gap-4"
                  >
                    <span className="text-xs font-mono font-bold text-brand-yellow shrink-0 w-16 pt-0.5">
                      {m.year}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">{m.title}</h4>
                      <p className="text-xs text-brand-muted mt-0.5">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Capabilities */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-muted mb-3 font-mono">
                Habilidades y Stack Principal
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-brand-muted">
                {STORY_CONTENT.skills.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-brand-surface/60 p-2 rounded border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow shrink-0" />
                    <span className="text-white/90">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Profile Button */}
            <div className="mt-8 pt-4 border-t border-brand-border flex justify-end">
              <a
                href={USER_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold bg-white/5 hover:bg-brand-yellow hover:text-brand-dark text-white border border-brand-border px-4 py-2 rounded-lg transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Explorar todos los repositorios en GitHub →</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
