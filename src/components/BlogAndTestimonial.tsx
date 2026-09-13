import React from 'react';
import { ARTICLES, TESTIMONIAL } from '../data/portfolioData';
import { Article } from '../types';
import { ArrowRight, BookOpen, Quote } from 'lucide-react';

interface BlogAndTestimonialProps {
  onArticleClick: (article: Article) => void;
}

export const BlogAndTestimonial: React.FC<BlogAndTestimonialProps> = ({
  onArticleClick,
}) => {
  return (
    <section
      id="blog"
      className="py-24 bg-brand-surface border-b border-brand-border"
      data-purpose="editorial-and-reviews"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Editorial Articles / Blog List */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-yellow block mb-2">
              — Publicaciones &amp; Enfoque
            </span>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              Artículos y Experiencias Técnicas.
            </h3>
          </div>

          <div className="divide-y divide-brand-border pt-2">
            {ARTICLES.map((article: Article) => (
              <article
                key={article.id}
                id={`article-item-${article.id}`}
                onClick={() => onArticleClick(article)}
                className="py-5 flex items-center justify-between group cursor-pointer transition-colors hover:bg-white/[0.02] px-3 rounded-lg border border-transparent hover:border-brand-border"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onArticleClick(article)}
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-brand-muted font-medium mb-1.5">
                    <span className="text-brand-yellow font-semibold">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-brand-yellow transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-brand-muted mt-1 line-clamp-1">
                    {article.excerpt}
                  </p>
                </div>
                <span className="text-brand-yellow text-sm group-hover:translate-x-1 transition-transform pl-4">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Testimonial & Social Proof */}
        <div className="lg:col-span-6 flex flex-col justify-center bg-brand-card p-8 lg:p-12 rounded-xl border border-brand-border relative shadow-2xl">
          {/* Quote decoration */}
          <div className="text-brand-yellow mb-4">
            <Quote className="w-8 h-8 opacity-80" />
          </div>

          <p className="text-white text-base lg:text-lg font-medium leading-relaxed mb-8">
            “{TESTIMONIAL.quote}”
          </p>

          <div className="flex items-center gap-4 border-t border-brand-border pt-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-yellow/30 flex-shrink-0">
              <img
                id="testimonial-avatar"
                alt={TESTIMONIAL.author}
                className="object-cover w-full h-full"
                src={TESTIMONIAL.avatarUrl}
                loading="lazy"
              />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">{TESTIMONIAL.author}</h5>
              <p className="text-xs text-brand-muted">
                {TESTIMONIAL.role} en <span className="text-brand-yellow font-semibold">{TESTIMONIAL.company}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
