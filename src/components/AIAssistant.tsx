import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Github,
  Mail,
  MessageCircle,
  ExternalLink,
  Zap
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'motion/react';
import { USER_INFO, HERO_IMAGE } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  hasContactActions?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'ai',
    text: `¡Hola! Soy el asistente con IA de **${USER_INFO.name}** (@${USER_INFO.githubUser}).\n\nPuedo detallarte sus proyectos en producción (como *Repuestos Sotomayor*, cotizadores en tiempo real o bots en Python), su stack tecnológico o conectarte directamente con él para cotizar tu idea. ¿Qué te gustaría saber?`,
    time: 'En línea',
    hasContactActions: true,
  },
];

const SUGGESTIONS = [
  '¿Cuáles son sus proyectos principales?',
  '¿Cuál es el stack técnico de Víctor?',
  'Quiero cotizar un e-commerce',
  '¿Cómo puedo contactar a Víctor?'
];

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize API Key from env or localStorage
  useEffect(() => {
    const envKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) || '';
    const storedKey = localStorage.getItem('GEMINI_API_KEY') || '';
    const finalKey = storedKey || envKey;
    setActiveKey(finalKey);
  }, []);

  // Allow triggering AI from mobile dock, header, or custom events
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ai-assistant', handleOpen);
    return () => window.removeEventListener('open-ai-assistant', handleOpen);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Fallback intelligent persona engine
  const getKnowledgeBaseAnswer = (query: string): { text: string; hasContactActions?: boolean } => {
    const q = query.toLowerCase();

    if (q.includes('proyecto') || q.includes('repositorio') || q.includes('trabajo') || q.includes('sotomayor') || q.includes('vicjobfinder')) {
      return {
        text: `Víctor cuenta con más de 27 repositorios en GitHub (@${USER_INFO.githubUser}). Sus proyectos insignia incluyen:\n\n` +
          `• **Repuestos Sotomayor E-Commerce**: Plataforma completa de autopartes con catálogo clasificado por marcas y modelos, carga en <0.8s y checkout interactivo.\n` +
          `• **Cotizador Inteligente Sotomayor**: Aplicación web para cálculo instantáneo de presupuestos y precios de repuestos.\n` +
          `• **VicJobFinder & Bots**: Automatizaciones en Python que monitorean y alertan ofertas laborales en LinkedIn y portales globales.\n` +
          `• **SealPro Industrial**: Landing page B2B con métricas Lighthouse 100/100.\n` +
          `• **Lector de Proveedores**: Sistema de procesamiento estructurado de inventarios y facturación.\n\n` +
          `Puedes inspeccionar el código fuente directamente en su GitHub:`,
        hasContactActions: true
      };
    }

    if (q.includes('stack') || q.includes('tecnolog') || q.includes('lenguaje') || q.includes('react') || q.includes('python') || q.includes('typescript')) {
      return {
        text: `El stack principal de Víctor se enfoca en alta velocidad y confiabilidad:\n\n` +
          `• **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Motion, HTML5 Semántico y accesibilidad.\n` +
          `• **Backend & Datos**: Node.js, Express, RESTful APIs, JSON Schema parsing.\n` +
          `• **Automatización & Scraping**: Python, Web Scraping avanzado, bots para LinkedIn y scripts de ingesta.\n` +
          `• **Buenas prácticas**: Type Safety riguroso, Git workflow y arquitectura orientada a componentes.`,
        hasContactActions: false
      };
    }

    if (q.includes('contact') || q.includes('whatsapp') || q.includes('telefono') || q.includes('celular') || q.includes('correo') || q.includes('email') || q.includes('contrat') || q.includes('cotiz') || q.includes('precio') || q.includes('costo')) {
      return {
        text: `Puedes comunicarte directamente con Víctor a través de los siguientes canales oficiales:\n\n` +
          `📱 **WhatsApp directo**: ${USER_INFO.whatsapp}\n` +
          `📧 **Correo oficial**: ${USER_INFO.email}\n` +
          `🐙 **GitHub**: https://github.com/${USER_INFO.githubUser}\n\n` +
          `¡Haz clic en el botón de WhatsApp abajo para abrir un chat directo con él!`,
        hasContactActions: true
      };
    }

    if (q.includes('condominio') || q.includes('saas') || q.includes('gestion') || q.includes('inventario') || q.includes('proveedor')) {
      return {
        text: `Víctor cuenta con sólida experiencia desarrollando software de gestión empresarial y SaaS:\n\n` +
          `• **SuperCondominio SaaS**: Plataforma integral para administración vecinal, emisión de recibos y liquidación de gastos comunes.\n` +
          `• **Lector de Proveedores**: Módulo ETL para extracción y normalización automática de facturas e inventarios heterogéneos.\n` +
          `• **SUPERinventario & GestorCondominio**: Sistemas de control de existencias, kardex y trazabilidad comercial.\n\n` +
          `¿Te gustaría conocer más sobre la arquitectura de estas soluciones?`,
        hasContactActions: true
      };
    }

    if (q.includes('ecommerce') || q.includes('tienda') || q.includes('comercio') || q.includes('venta') || q.includes('sotomayor') || q.includes('loyafu')) {
      return {
        text: `Víctor es especialista en arquitecturas de E-Commerce de alta velocidad:\n\n` +
          `• **Repuestos Sotomayor**: Plataforma con catálogo de más de 1,500 partes, carga <0.8s y filtros por modelo.\n` +
          `• **Cotizador Inteligente Sotomayor**: Cálculo instantáneo de presupuestos y precios.\n` +
          `• **Loyafu E-Commerce**: Tienda digital con despliegue en vivo en Vercel (https://loyafu.vercel.app).\n` +
          `• **Suministros Venezuela & Maderas Imaya**: Catálogos B2B especializados para distribución.\n\n` +
          `¿Deseas estimar o cotizar un proyecto de e-commerce?`,
        hasContactActions: true
      };
    }

    if (q.includes('bot') || q.includes('python') || q.includes('scraping') || q.includes('automatiz') || q.includes('linkedin') || q.includes('vicjobfinder')) {
      return {
        text: `En el área de automatización y backend, Víctor desarrolla bots resilientes:\n\n` +
          `• **VicJobFinder**: Crawler inteligente multi-thread para rastreo y filtrado de vacantes de software.\n` +
          `• **LinkedIn Job Scraper Bot**: Extracción estructurada y monitoreo automatizado con Python.\n` +
          `• **EnviadorMasivo**: Sistema de despacho por lotes (500+ envíos/min) con control de entregabilidad.\n\n` +
          `Código disponible en su GitHub oficial:`,
        hasContactActions: true
      };
    }

    return {
      text: `Víctor Alfonzo Reyes es un Desarrollador Full Stack con 27 repositorios en GitHub, enfocado en E-Commerce de alta velocidad, SaaS de gestión (como SuperCondominio) y automatizaciones en Python.\n\n¿Te gustaría revisar sus proyectos insignia, ver demos en vivo o contactarlo por WhatsApp?`,
      hasContactActions: true
    };
  };

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Call real Google Gemini API if key is available
    if (activeKey) {
      try {
        const ai = new GoogleGenAI({ apiKey: activeKey });
        const systemInstruction = `Eres el asistente virtual interactivo oficial de Víctor Alfonzo Reyes (@VicD4ddy).
Víctor es un Full Stack Developer y Software Engineer que vive en Venezuela / trabaja remoto en proyectos globales.
Tiene más de 27 repositorios en GitHub. Sus proyectos insignia y áreas de especialización son:
1. PROYECTOS DESTACADOS:
- Repuestos Sotomayor E-Commerce: Tienda virtual de repuestos automotrices con catálogo clasificado por marcas y modelos, carga en <0.8s y cotizador interactivo.
- VicJobFinder & Bot Suite: Suite en Python con web scraping para alertas laborales en LinkedIn y portales globales en tiempo real.
- SealPro Industrial: Landing page B2B para industria de sellado con Lighthouse 100/100 y +58% conversión de leads.
2. E-COMMERCE & COTIZADORES: Cotizador Inteligente Sotomayor, Loyafu E-Commerce (en vivo en https://loyafu.vercel.app), Suministros Venezuela, Maderas Imaya.
3. GESTIÓN & SAAS: SuperCondominio y GestorCondominio (administración vecinal, cuotas y finanzas), Lector de Proveedores (ETL y normalización de facturas), SUPERinventario.
4. WEB APPS & DEMOS: Alliance Française (en vivo en https://alliance-francesa.vercel.app), Orden Sherwood (en vivo en https://orden-sherwood.vercel.app), SuperQuiniela.
Su WhatsApp oficial directo es: ${USER_INFO.whatsapp} (${USER_INFO.whatsappUrl}).
Su correo es: ${USER_INFO.email}.
Su GitHub es: ${USER_INFO.github}.
Instrucciones: Responde de forma cálida, profesional, concisa y persuasiva en español, orientada a reclutadores, fundadores y clientes. Si preguntan por contacto, contrataciones, cotizaciones o presupuestos, dales de inmediato su WhatsApp directo (${USER_INFO.whatsapp}) y su correo.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `${systemInstruction}\n\nPregunta del visitante: ${text}`
        });

        const replyText = response.text || getKnowledgeBaseAnswer(text).text;

        const aiMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          hasContactActions: true
        };
        setMessages((prev) => [...prev, aiMsg]);
        setIsTyping(false);
        return;
      } catch (err) {
        console.warn('Fallo llamada a Gemini API, usando motor de respaldo:', err);
      }
    }

    // Local engine fallback
    setTimeout(() => {
      const answer = getKnowledgeBaseAnswer(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: answer.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hasContactActions: answer.hasContactActions
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const scrollToContact = () => {
    setIsOpen(false);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 safe-bottom-margin">
      <AnimatePresence mode="wait">
        {/* Floating Action Button / Launcher */}
        {!isOpen && (
          <motion.button
            key="ai-launcher"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="group hidden sm:flex items-center gap-2.5 sm:gap-3 bg-brand-surface/95 hover:bg-brand-card text-white p-2 sm:px-4 sm:py-2.5 rounded-full shadow-2xl shadow-black/80 font-semibold text-xs cursor-pointer border border-brand-yellow/50 hover:border-brand-yellow"
            aria-label="Abrir asistente de IA de Víctor Reyes"
          >
            {/* Avatar with live pulse dot */}
            <div className="relative">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-brand-yellow shadow-md shadow-brand-yellow/30">
                <img
                  src={HERO_IMAGE}
                  alt={USER_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-brand-dark animate-pulse" />
            </div>

            <div className="hidden sm:flex flex-col text-left pr-1">
              <span className="text-white text-xs font-bold flex items-center gap-1.5">
                <span>Víctor AI</span>
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow animate-pulse" />
              </span>
              <span className="text-[10px] text-brand-muted font-mono">
                {activeKey ? '🟢 Gemini 2.5 Flash' : '⚡ Asistente de Portafolio'}
              </span>
            </div>
          </motion.button>
        )}

        {/* Floating Chat Modal Box */}
        {isOpen && (
          <motion.div
            key="ai-modal"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-[calc(100vw-1.5rem)] sm:w-[420px] max-h-[82vh] sm:max-h-[580px] h-[82vh] sm:h-[580px] bg-brand-card/95 backdrop-blur-2xl border border-brand-yellow/40 rounded-2xl shadow-2xl shadow-black/90 flex flex-col overflow-hidden relative"
          >
          {/* Header */}
          <div className="p-4 bg-brand-surface border-b border-brand-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* User Avatar in Header */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-yellow shadow-md shadow-brand-yellow/20">
                  <img
                    src={HERO_IMAGE}
                    alt={USER_INFO.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-brand-dark" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{USER_INFO.shortName} AI</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-medium flex items-center gap-1 ${
                      activeKey
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30'
                    }`}
                  >
                    <Zap className="w-2.5 h-2.5" />
                    {activeKey ? 'Gemini Activo' : 'Modo Portafolio'}
                  </span>
                </h4>
                <span className="text-[11px] text-emerald-400 font-mono block">
                  ● En línea para responder
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-brand-muted hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Contact Action Bar */}
          <div className="px-3.5 py-2 bg-[#171a22] border-b border-white/5 flex items-center justify-between text-[11px] text-brand-muted">
            <span className="font-mono text-[10px] text-brand-yellow">Enlaces:</span>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <a
                href={USER_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0 font-medium"
                title="Escribir al WhatsApp"
              >
                <MessageCircle className="w-3 h-3 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${USER_INFO.email}`}
                className="flex items-center gap-1 hover:text-brand-yellow transition-colors bg-white/5 px-2 py-0.5 rounded border border-white/5 shrink-0"
              >
                <Mail className="w-3 h-3 text-brand-yellow" />
                <span>Email</span>
              </a>
              <a
                href={USER_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-brand-yellow transition-colors bg-white/5 px-2 py-0.5 rounded border border-white/5 shrink-0"
              >
                <Github className="w-3 h-3 text-brand-yellow" />
                <span>GitHub</span>
              </a>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-1 hover:text-brand-yellow transition-colors bg-white/5 px-2 py-0.5 rounded border border-white/5 cursor-pointer shrink-0"
              >
                <span>Cotizar</span>
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {/* AI Avatar */}
                {m.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-brand-yellow/60 shrink-0 mt-0.5">
                    <img
                      src={HERO_IMAGE}
                      alt="Víctor Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div
                  className={`max-w-[84%] p-3.5 rounded-2xl whitespace-pre-line leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-brand-yellow text-brand-dark font-medium rounded-tr-none shadow-md'
                      : 'bg-brand-surface border border-white/10 text-white/95 rounded-tl-none shadow-lg'
                  }`}
                >
                  <p>{m.text}</p>

                  {/* Inline Contact Actions if relevant */}
                  {m.hasContactActions && m.sender === 'ai' && (
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap gap-2">
                      <a
                        href={USER_INFO.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 bg-emerald-500/20 hover:bg-emerald-500 hover:text-brand-dark text-emerald-400 px-2.5 py-1 rounded text-[11px] font-semibold transition-colors border border-emerald-500/30"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat WhatsApp ({USER_INFO.whatsapp})</span>
                      </a>
                      <a
                        href={`mailto:${USER_INFO.email}`}
                        className="inline-flex items-center gap-1.5 bg-brand-yellow/20 hover:bg-brand-yellow hover:text-brand-dark text-brand-yellow px-2.5 py-1 rounded text-[11px] font-semibold transition-colors"
                      >
                        <Mail className="w-3 h-3" />
                        <span>Enviar Email</span>
                      </a>
                      <a
                        href={USER_INFO.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded text-[11px] font-semibold transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        <span>Ver GitHub</span>
                      </a>
                      <button
                        onClick={scrollToContact}
                        className="inline-flex items-center gap-1 bg-white/5 hover:bg-white/10 text-brand-muted hover:text-white px-2 py-1 rounded text-[11px] transition-colors cursor-pointer"
                      >
                        <span>Cotizador →</span>
                      </button>
                    </div>
                  )}

                  <span
                    className={`text-[9px] block text-right mt-1.5 ${
                      m.sender === 'user' ? 'text-brand-dark/70' : 'text-brand-muted'
                    }`}
                  >
                    {m.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center pl-9 text-brand-muted text-[11px]">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-bounce [animation-delay:0.4s]" />
                </div>
                <span>Víctor AI está pensando...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-brand-surface border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
            {SUGGESTIONS.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(s)}
                className="text-[10px] bg-brand-card hover:bg-brand-yellow hover:text-brand-dark text-brand-muted px-2.5 py-1 rounded-full border border-white/10 whitespace-nowrap transition-colors shrink-0 cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-brand-surface border-t border-brand-border flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Pregunta sobre proyectos, stack o cotización..."
              className="flex-1 bg-brand-card text-white text-base sm:text-xs px-3.5 py-2.5 rounded-lg border border-brand-border focus:border-brand-yellow focus:outline-none placeholder:text-brand-muted transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 bg-brand-yellow hover:bg-brand-yellow-hover disabled:opacity-40 text-brand-dark rounded-lg transition-all cursor-pointer shrink-0 shadow-md shadow-brand-yellow/20"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};
