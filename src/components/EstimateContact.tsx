import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export const EstimateContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    serviceType: 'Product Design',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hi@carlos.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <footer
      id="contact"
      className="bg-brand-dark pt-20 pb-16"
      data-purpose="contact-and-estimate"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-border">
          {/* Left Footer Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Estimate your project?<br />
              Let me know here.
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed">
              Hablemos sobre tu idea, presupuesto o plazo estimado. Recibirás una respuesta personalizada en menos de 24 horas.
            </p>

            <div className="pt-4">
              <span className="text-xs uppercase tracking-widest text-brand-muted block mb-1">
                Direct line:
              </span>
              <div className="flex items-center gap-3">
                <a
                  id="direct-line-email"
                  className="text-brand-yellow text-lg font-semibold hover:underline"
                  href="mailto:hi@carlos.com"
                >
                  hi@carlos.com
                </a>
                <button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="text-brand-muted hover:text-white text-xs border border-brand-border px-2 py-1 rounded transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick scope selector */}
            <div className="pt-4">
              <span className="text-xs uppercase tracking-widest text-brand-muted block mb-2">
                Project Category:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Product Design', 'Branding', 'Full Stack', 'Consultancy'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: type })}
                    className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                      formData.serviceType === type
                        ? 'bg-brand-yellow text-brand-dark font-semibold'
                        : 'bg-brand-card text-brand-muted hover:text-white border border-brand-border'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Footer Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-brand-card border border-brand-yellow/40 rounded-sm p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto text-brand-yellow">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Received!</h4>
                <p className="text-brand-muted text-sm max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Carlos will review your notes for <span className="text-brand-yellow">{formData.serviceType}</span> and follow up at <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '', serviceType: 'Product Design' });
                  }}
                  className="text-xs text-brand-yellow hover:underline pt-2 font-medium"
                >
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form id="project-estimate-form" className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-xs uppercase tracking-wider text-brand-muted mb-2 font-medium"
                    >
                      What's your name?
                    </label>
                    <input
                      id="client-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-card border border-brand-border focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-white text-sm px-4 py-3 rounded-sm transition-colors outline-none"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-email"
                      className="block text-xs uppercase tracking-wider text-brand-muted mb-2 font-medium"
                    >
                      Your fancy email
                    </label>
                    <input
                      id="client-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-card border border-brand-border focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-white text-sm px-4 py-3 rounded-sm transition-colors outline-none"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="client-message"
                    className="block text-xs uppercase tracking-wider text-brand-muted mb-2 font-medium"
                  >
                    Tell me about your project
                  </label>
                  <textarea
                    id="client-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-card border border-brand-border focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-white text-sm px-4 py-3 rounded-sm transition-colors outline-none resize-y"
                    placeholder="Product goals, timeline, deliverables..."
                  />
                </div>

                <button
                  id="submit-inquiry-btn"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-3 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold text-sm px-8 py-4 rounded-sm transition-all active:scale-95 shadow-lg shadow-brand-yellow/10 cursor-pointer disabled:opacity-60"
                  type="submit"
                >
                  <span>{isSubmitting ? 'Sending Request...' : 'Submit Inquiry'}</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-brand-muted gap-4">
          <p id="footer-copyright">© 2025 Carlos Mendoza. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-brand-yellow transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-brand-yellow transition-colors" href="#">
              Terms of Service
            </a>
            <a
              className="hover:text-brand-yellow transition-colors"
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
            >
              Dribbble
            </a>
            <a
              className="hover:text-brand-yellow transition-colors"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
