import React, { useState } from 'react';
import { Check, Copy, Send, Mail, Github, MessageCircle } from 'lucide-react';
import { USER_INFO } from '../data/portfolioData';

export const EstimateContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    serviceType: 'E-Commerce',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email);
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
    }, 700);
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
              ¿Quieres cotizar tu proyecto?<br />
              Conversemos aquí.
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed">
              Cuéntame sobre los objetivos de tu plataforma, plazos o especificaciones técnicas. Responderé directamente a tu correo en menos de 24 horas.
            </p>

            <div className="pt-2 space-y-3">
              <span className="text-xs uppercase tracking-widest text-brand-muted block font-mono">
                Líneas Directas de Contacto:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  id="direct-line-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 shadow-md shadow-emerald-500/10"
                  href={USER_INFO.whatsappUrl}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: {USER_INFO.whatsapp}</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    id="direct-line-email"
                    className="text-brand-yellow text-sm sm:text-base font-semibold hover:underline flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-2 rounded-lg"
                    href={`mailto:${USER_INFO.email}`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>{USER_INFO.email}</span>
                  </a>
                  <button
                    id="copy-email-btn"
                    onClick={handleCopyEmail}
                    className="text-brand-muted hover:text-white text-xs border border-brand-border px-2.5 py-2 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer bg-white/5"
                    title="Copiar correo al portapapeles"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick scope selector */}
            <div className="pt-4">
              <span className="text-xs uppercase tracking-widest text-brand-muted block mb-2 font-mono">
                Tipo de Requerimiento:
              </span>
              <div className="flex flex-wrap gap-2">
                {['E-Commerce', 'Full Stack App', 'Automatización Python', 'Cotizadores Web'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: type })}
                    className={`text-xs px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                      formData.serviceType === type
                        ? 'bg-brand-yellow text-brand-dark font-semibold shadow-md shadow-brand-yellow/20'
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
              <div className="bg-brand-card border border-brand-yellow/40 rounded-xl p-8 text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto text-brand-yellow">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">¡Mensaje Recibido!</h4>
                <p className="text-brand-muted text-sm max-w-md mx-auto">
                  Gracias, <span className="text-white font-medium">{formData.name}</span>. Víctor revisará tu solicitud sobre <span className="text-brand-yellow">{formData.serviceType}</span> y te contactará a <span className="text-white font-medium">{formData.email}</span> a la brevedad.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '', serviceType: 'E-Commerce' });
                  }}
                  className="text-xs text-brand-yellow hover:underline pt-2 font-medium cursor-pointer"
                >
                  Enviar otra consulta →
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
                      ¿Cuál es tu nombre?
                    </label>
                    <input
                      id="client-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-card border border-brand-border focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-white text-sm px-4 py-3 rounded-lg transition-colors outline-none"
                      placeholder="Ej: Carlos Silva"
                      type="text"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client-email"
                      className="block text-xs uppercase tracking-wider text-brand-muted mb-2 font-medium"
                    >
                      Tu correo electrónico
                    </label>
                    <input
                      id="client-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-card border border-brand-border focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-white text-sm px-4 py-3 rounded-lg transition-colors outline-none"
                      placeholder="ejemplo@empresa.com"
                      type="email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="client-message"
                    className="block text-xs uppercase tracking-wider text-brand-muted mb-2 font-medium"
                  >
                    Cuéntame sobre tu proyecto o necesidad
                  </label>
                  <textarea
                    id="client-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-card border border-brand-border focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow text-white text-sm px-4 py-3 rounded-lg transition-colors outline-none resize-y"
                    placeholder="Objetivos de la plataforma, funcionalidades clave, plazos..."
                  />
                </div>

                <button
                  id="submit-inquiry-btn"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-dark font-bold text-sm px-8 py-3.5 rounded-lg transition-all active:scale-95 shadow-lg shadow-brand-yellow/15 cursor-pointer disabled:opacity-60"
                  type="submit"
                >
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Consulta'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright & Social Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-brand-muted gap-4">
          <p id="footer-copyright">
            © 2026 {USER_INFO.name} ([@{USER_INFO.githubUser}]({USER_INFO.github})). Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-emerald-400/90"
              href={USER_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp ({USER_INFO.whatsapp})
            </a>
            <a
              className="hover:text-brand-yellow transition-colors flex items-center gap-1"
              href={USER_INFO.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              className="hover:text-brand-yellow transition-colors flex items-center gap-1"
              href={`mailto:${USER_INFO.email}`}
            >
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
