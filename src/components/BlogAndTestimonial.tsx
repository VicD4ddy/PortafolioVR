import React from 'react';
import { ARTICLES, TESTIMONIAL } from '../data/portfolioData';
import { Article } from '../types';

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
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted block mb-3">
              — Stories &amp; Articles
            </span>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              Selected Thoughts &amp; news.
            </h3>
          </div>

          <div className="divide-y divide-brand-border pt-4">
            {ARTICLES.map((article: Article) => (
              <article
                key={article.id}
                id={`article-item-${article.id}`}
                onClick={() => onArticleClick(article)}
                className="py-5 flex items-center justify-between group cursor-pointer transition-colors hover:bg-white/[0.02] px-2 rounded-sm"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onArticleClick(article)}
              >
                <div>
                  <span className="text-xs text-brand-muted font-medium block mb-1">
                    {article.date} · {article.category}
                  </span>
                  <h4 className="text-base font-semibold text-white group-hover:text-brand-yellow transition-colors">
                    {article.title}
                  </h4>
                </div>
                <span className="text-brand-yellow text-sm group-hover:translate-x-1 transition-transform pl-4">
                  →
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Testimonial & Social Proof */}
        <div className="lg:col-span-6 flex flex-col justify-center bg-brand-card p-8 lg:p-12 rounded-sm border border-brand-border relative shadow-xl">
          {/* Quote decoration */}
          <div className="text-brand-yellow text-5xl font-serif leading-none mb-4 select-none">
            “
          </div>

          <p className="text-white text-lg lg:text-xl font-medium leading-relaxed mb-8">
            {TESTIMONIAL.quote}
          </p>

          <div className="flex items-center gap-4 border-t border-brand-border pt-6">
            <div className="w-12 h-12 rounded-full overflow-hidden grayscale border border-white/20 flex-shrink-0">
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
                {TESTIMONIAL.role} at {TESTIMONIAL.company}
              </p>
              <div className="w-8 h-0.5 bg-brand-yellow mt-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
