import { Project, Article, Testimonial, ServiceSpecialty } from '../types';

export const HERO_IMAGE = 'https://avatars.githubusercontent.com/u/153152093?v=4';

export const TESTIMONIAL_AVATAR = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80';

export const USER_INFO = {
  name: 'Víctor Alfonzo Reyes',
  shortName: 'Víctor Reyes',
  title: 'Full Stack Developer & Software Engineer',
  bio: 'Especialista en desarrollo web moderno, arquitecturas e-commerce de alto rendimiento y soluciones de automatización en Python.',
  email: 'victor.alfonzo.reyes1@gmail.com',
  whatsapp: '+584128824608',
  whatsappUrl: 'https://wa.me/584128824608?text=Hola%20V%C3%ADctor,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.',
  github: 'https://github.com/VicD4ddy',
  githubUser: 'VicD4ddy',
  location: 'Disponible Remoto / Worldwide',
  reposCount: 27,
};

export const SPECIALTIES: ServiceSpecialty[] = [
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer.',
    projectsCount: 18,
    featured: true,
    description: 'Desarrollo integral de aplicaciones web modernas con React 19, TypeScript, Next.js, Node.js y Tailwind CSS, garantizando velocidad extrema y código limpio.',
    icon: 'code'
  },
  {
    id: 'ecommerce-architect',
    title: 'E-Commerce Specialist.',
    projectsCount: 8,
    featured: false,
    description: 'Creación de tiendas digitales completas, catálogos estructurados, cotizadores automáticos en tiempo real y pasarelas de pago optimizadas para conversión.',
    icon: 'product'
  },
  {
    id: 'automation-engineer',
    title: 'Python & Automation.',
    projectsCount: 12,
    featured: false,
    description: 'Automatización de procesos empresariales, scrapers inteligentes de datos, bots de integración y normalización masiva de inventarios.',
    icon: 'brand'
  }
];

export const PROJECTS: Project[] = [
  // 1. Featured Project: Repuestos Sotomayor (E-Commerce)
  {
    id: 'ecommerce-sotomayor',
    title: 'Repuestos Sotomayor.',
    category: 'E-Commerce & Catálogo',
    categoryKey: 'ecommerce',
    featured: true,
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Catálogo Dinámico'],
    description: 'Plataforma e-commerce completa para autopartes con catálogo categorizado y alta velocidad.',
    longDescription: 'E-commerce especializado en repuestos y autopartes automotrices. Cuenta con un catálogo dinámico con filtros por marca y modelo de vehículo, cotizador interactivo, gestión de carrito persistente y una interfaz pensada para maximizar la velocidad de compra (<0.8s) y la conversión de clientes.',
    client: 'Repuestos Sotomayor',
    year: '2026',
    role: 'Lead Full Stack Architect & UI Designer',
    metrics: [
      { label: 'Catálogo de Repuestos', value: '1,500+ SKU' },
      { label: 'Velocidad de Carga', value: '< 0.8s' },
      { label: 'Tasa de Conversión', value: '+42%' },
      { label: 'Compatibilidad Móvil', value: '100%' }
    ],
    accentColor: '#F5B027',
    githubUrl: 'https://github.com/VicD4ddy/eCommerceRepuestosSotomayor'
  },
  // 2. Featured Project: VicJobFinder (Automation & Python)
  {
    id: 'vic-job-finder',
    title: 'VicJobFinder & Bot Suite.',
    category: 'Automatización & Python',
    categoryKey: 'automation',
    featured: true,
    tags: ['Python', 'Web Scraping', 'LinkedIn Bot', 'Multi-Thread', 'Alertas'],
    description: 'Crawler inteligente de vacantes laborales, extracción de datos y alertas automatizadas en tiempo real.',
    longDescription: 'Suite de herramientas de automatización desarrollada en Python que monitorea, extrae y notifica oportunidades laborales clave en LinkedIn y bolsas de empleo tecnológicas. Incorpora filtros semánticos para requisitos técnicos y despacho de alertas inmediatas.',
    client: 'Proyecto Propio / Open Source',
    year: '2026',
    role: 'Python & Automation Engineer',
    metrics: [
      { label: 'Vacantes Rastreadas', value: '10,000+' },
      { label: 'Frecuencia de Alertas', value: 'Realtime' },
      { label: 'Ahorro de Tiempo', value: '85%' }
    ],
    accentColor: '#60A5FA',
    githubUrl: 'https://github.com/VicD4ddy/VicJobFinder'
  },
  // 3. Featured Project: SealPro Industrial (Web Apps & Landings)
  {
    id: 'seal-pro-landing',
    title: 'SealPro Industrial.',
    category: 'Web Apps & Landings',
    categoryKey: 'web',
    featured: true,
    tags: ['TypeScript', 'React', 'Lighthouse 100', 'B2B Leads', 'Tailwind CSS'],
    description: 'Landing page premium de alto impacto para soluciones industriales con rendimiento 100/100.',
    longDescription: 'Página de aterrizaje orientada al sector industrial B2B para soluciones de sellado y empaquetaduras técnicas. Diseñada con estética de precisión, tiempos de carga instantáneos (100/100 Lighthouse) y llamados a la acción optimizados para captación de clientes corporativos.',
    client: 'SealPro Solutions',
    year: '2026',
    role: 'UI Designer & Web Engineer',
    metrics: [
      { label: 'Puntaje Lighthouse', value: '100/100' },
      { label: 'Incremento de Leads', value: '+58%' },
      { label: 'Retención de Usuario', value: '78%' }
    ],
    accentColor: '#F5B027',
    githubUrl: 'https://github.com/VicD4ddy/SealProLanding'
  },
  // 4. Cotizador Inteligente (E-Commerce)
  {
    id: 'cotizador-sotomayor',
    title: 'Cotizador Inteligente.',
    category: 'E-Commerce & Cotizadores',
    categoryKey: 'ecommerce',
    featured: false,
    tags: ['TypeScript', 'React', 'Cálculos Dinámicos', 'State Machines'],
    description: 'Herramienta ágil de cálculo y presupuestos de repuestos en tiempo real.',
    longDescription: 'Sistema interactivo diseñado para agilizar la interacción comercial entre clientes y asesores de ventas. Permite armar cotizaciones complejas en segundos, calculando subtotales, descuentos y disponibilidad de repuestos al instante.',
    client: 'Repuestos Sotomayor',
    year: '2026',
    role: 'Frontend & Business Logic Developer',
    metrics: [
      { label: 'Tiempo de Cotización', value: '< 30s' },
      { label: 'Precisión de Cálculo', value: '99.9%' },
      { label: 'Adopción de Ventas', value: '100%' }
    ],
    accentColor: '#34D399',
    githubUrl: 'https://github.com/VicD4ddy/CotizadorRepuestosSotomayor'
  },
  // 5. SuperCondominio (Gestión & SaaS)
  {
    id: 'super-condominio',
    title: 'SuperCondominio SaaS.',
    category: 'Gestión & SaaS',
    categoryKey: 'saas',
    featured: false,
    tags: ['TypeScript', 'React', 'Gestión Vecinal', 'Finanzas & Cuotas', 'SaaS'],
    description: 'Plataforma para administración vecinal, conciliación de cuotas y liquidación de gastos comunes.',
    longDescription: 'Software de gestión integral para comunidades y condominios residenciales. Centraliza la emisión de recibos, registro de pagos de residentes, control de áreas comunes y generación de reportes financieros para juntas de condominio.',
    client: 'Condominios Residenciales',
    year: '2026',
    role: 'Full Stack Developer',
    metrics: [
      { label: 'Módulos Operativos', value: '8+' },
      { label: 'Cobranza Automatizada', value: '95%' }
    ],
    accentColor: '#A78BFA',
    githubUrl: 'https://github.com/VicD4ddy/SuperCondominio'
  },
  // 6. Loyafu E-Commerce (E-Commerce con Vercel Demo)
  {
    id: 'loyafu-ecommerce',
    title: 'Loyafu E-Commerce.',
    category: 'E-Commerce & Catálogo',
    categoryKey: 'ecommerce',
    featured: false,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel Live', 'Vite'],
    description: 'Tienda digital moderna con navegación fluida, arquitectura escalable y demo en vivo en Vercel.',
    longDescription: 'Solución de comercio electrónico con diseño minimalista oscuro, experiencia de usuario reactiva, gestión de catálogo modular y soporte para procesamiento ágil de órdenes. Cuenta con despliegue activo en Vercel.',
    client: 'Loyafu Store',
    year: '2026',
    role: 'Full Stack Engineer',
    metrics: [
      { label: 'Despliegue', value: 'Vercel Live' },
      { label: 'Tiempo Interactivo', value: '< 50ms' },
      { label: 'Satisfacción UX', value: '99%' }
    ],
    accentColor: '#F5B027',
    githubUrl: 'https://github.com/VicD4ddy/Loyafu-Ecommerce',
    demoUrl: 'https://loyafu.vercel.app'
  },
  // 7. Alliance Française (Web Apps con Vercel Demo)
  {
    id: 'alliance-francesa',
    title: 'Alliance Française Portal.',
    category: 'Web Apps & Landings',
    categoryKey: 'web',
    featured: false,
    tags: ['JavaScript', 'Vercel Live', 'Portal Cultural', 'Responsive UI'],
    description: 'Portal web cultural y educativo para la difusión de cursos, eventos y admisiones con despliegue en Vercel.',
    longDescription: 'Aplicación web orientada a la difusión de programas de idiomas y actividades culturales. Integra agenda de eventos, información de cursos y formularios de admisión con carga ágil y diseño receptivo.',
    client: 'Alliance Française',
    year: '2026',
    role: 'Web Developer',
    metrics: [
      { label: 'Despliegue', value: 'Vercel Live' },
      { label: 'Disponibilidad', value: '99.9%' }
    ],
    accentColor: '#38BDF8',
    githubUrl: 'https://github.com/VicD4ddy/AllianceFrancesa',
    demoUrl: 'https://alliance-francesa.vercel.app'
  },
  // 8. Lector de Proveedores (Gestión & SaaS)
  {
    id: 'lector-proveedores',
    title: 'Lector de Proveedores.',
    category: 'Gestión & SaaS',
    categoryKey: 'saas',
    featured: false,
    tags: ['TypeScript', 'Data Parsing', 'ETL', 'Automation', 'JSON Schema'],
    description: 'Extracción, parsing y estandarización automática de catálogos y facturas heterogéneas.',
    longDescription: 'Módulo de ingestión y estandarización de datos que automatiza la lectura de listas de precios y facturación heterogéneas de proveedores, transformándolas en estructuras limpias para integración directa con bases de datos e inventarios.',
    client: 'Sistema Empresarial',
    year: '2026',
    role: 'Systems & Data Engineer',
    metrics: [
      { label: 'Tasa de Acierto', value: '99.5%' },
      { label: 'Reducción Manual', value: '-90%' }
    ],
    accentColor: '#A78BFA',
    githubUrl: 'https://github.com/VicD4ddy/Lector-Provedores'
  },
  // 9. Suministros Venezuela (E-Commerce)
  {
    id: 'suministros-venezuela',
    title: 'Suministros Venezuela.',
    category: 'E-Commerce & Catálogo',
    categoryKey: 'ecommerce',
    featured: false,
    tags: ['TypeScript', 'React', 'B2B Catalog', 'Suministros Comerciales'],
    description: 'Plataforma para catálogo mayorista y distribución de suministros comerciales.',
    longDescription: 'Catálogo de comercio entre empresas enfocado en la distribución de insumos comerciales e industriales. Permite navegar inventarios clasificados y coordinar pedidos al por mayor con agilidad.',
    client: 'Suministros Venezuela',
    year: '2026',
    role: 'Frontend Architect',
    metrics: [
      { label: 'Estructura B2B', value: 'Multi-Categoría' },
      { label: 'Respuesta UI', value: '< 100ms' }
    ],
    accentColor: '#F5B027',
    githubUrl: 'https://github.com/VicD4ddy/SuministrosVenezuela'
  },
  // 10. Maderas Imaya (E-Commerce)
  {
    id: 'maderas-imaya',
    title: 'Maderas Imaya.',
    category: 'E-Commerce & Catálogo',
    categoryKey: 'ecommerce',
    featured: false,
    tags: ['TypeScript', 'React', 'Catálogo Maderero', 'Cotizaciones B2B'],
    description: 'Portal de productos madereros, cortes a medida y catálogo especializado para la industria.',
    longDescription: 'Plataforma de presentación y cotización de productos de madera para la industria y construcción. Presenta especificaciones de materiales, tipos de acabado y cotizador de pedidos.',
    client: 'Maderas Imaya C.A.',
    year: '2026',
    role: 'Full Stack Engineer',
    metrics: [
      { label: 'Catálogo Digital', value: '100% Online' },
      { label: 'Tiempo de Carga', value: '< 0.9s' }
    ],
    accentColor: '#FBBF24',
    githubUrl: 'https://github.com/VicD4ddy/MaderasImaya'
  },
  // 11. LinkedIn Job Scraper (Automatización)
  {
    id: 'job-finder-linkedin',
    title: 'LinkedIn Job Scraper Bot.',
    category: 'Automatización & Python',
    categoryKey: 'automation',
    featured: false,
    tags: ['Python', 'Selenium', 'Web Scraping', 'Bots', 'Data Extraction'],
    description: 'Bot especializado en rastreo de vacantes específicas, extracción de perfiles y alertas periódicas.',
    longDescription: 'Módulo enfocado en la recolección automatizada de perfiles y vacantes en LinkedIn. Automatiza la autenticación, scroll reactivo y almacenamiento estructurado de ofertas laborales.',
    client: 'Automatización Propia',
    year: '2026',
    role: 'Automation Developer',
    metrics: [
      { label: 'Procesamiento', value: 'Multi-Thread' },
      { label: 'Eficacia Scraping', value: '98%' }
    ],
    accentColor: '#60A5FA',
    githubUrl: 'https://github.com/VicD4ddy/JobFinderLinkedin'
  },
  // 12. EnviadorMasivo (Automatización)
  {
    id: 'enviador-masivo',
    title: 'Enviador Masivo.',
    category: 'Automatización & Python',
    categoryKey: 'automation',
    featured: false,
    tags: ['TypeScript', 'Node.js', 'SMTP API', 'Batching', 'Templates'],
    description: 'Sistema de despacho por lotes de correos y avisos administrativos con control de entregabilidad.',
    longDescription: 'Herramienta de software para emisión en masa de notificaciones y facturas de clientes, incorporando control de tasa de envío, plantillas dinámicas y reintentos automáticos.',
    client: 'Sistema Empresarial',
    year: '2026',
    role: 'Backend & Automation Developer',
    metrics: [
      { label: 'Capacidad de Envío', value: '500+ / min' },
      { label: 'Entregabilidad', value: '99%' }
    ],
    accentColor: '#34D399',
    githubUrl: 'https://github.com/VicD4ddy/EnviadorMasivo'
  },
  // 13. SuperQuiniela (Web Apps)
  {
    id: 'super-quiniela',
    title: 'SuperQuiniela.',
    category: 'Web Apps & Landings',
    categoryKey: 'web',
    featured: false,
    tags: ['TypeScript', 'React', 'Interactive Gaming', 'Leaderboard en Vivo'],
    description: 'Aplicación interactiva de predicciones deportivas con tablas de posiciones y cálculo en tiempo real.',
    longDescription: 'Plataforma comunitaria para quinielas deportivas con clasificación automática por puntos, interfaz lúdica fluida y actualización dinámica de resultados de partidos.',
    client: 'Proyecto Propio',
    year: '2026',
    role: 'Frontend Developer',
    metrics: [
      { label: 'Actualización', value: 'Tiempo Real' },
      { label: 'Latencia Interacción', value: '< 30ms' }
    ],
    accentColor: '#F87171',
    githubUrl: 'https://github.com/VicD4ddy/SuperQuiniela'
  },
  // 14. Orden Sherwood (Web Apps con Vercel Demo)
  {
    id: 'orden-sherwood',
    title: 'Orden Sherwood.',
    category: 'Web Apps & Landings',
    categoryKey: 'web',
    featured: false,
    tags: ['TypeScript', 'React', 'Vercel Live', 'Experiencia Temática'],
    description: 'Aplicación web interactiva temática con diseño personalizado y despliegue activo en Vercel.',
    longDescription: 'Proyecto web interactivo con diseño visual inmersivo, componentes personalizados y experiencia temática fluida desplegada en la infraestructura global de Vercel.',
    client: 'Proyecto Creativo',
    year: '2026',
    role: 'Creative Web Developer',
    metrics: [
      { label: 'Despliegue', value: 'Vercel Live' }
    ],
    accentColor: '#34D399',
    githubUrl: 'https://github.com/VicD4ddy/Orden-Sherwood',
    demoUrl: 'https://orden-sherwood.vercel.app'
  },
  // 15. GestorCondominio (Gestión & SaaS)
  {
    id: 'gestor-condominio',
    title: 'Gestor Condominio.',
    category: 'Gestión & SaaS',
    categoryKey: 'saas',
    featured: false,
    tags: ['TypeScript', 'React', 'Gestión Vecinal', 'Auditoría'],
    description: 'Herramienta ágil para la administración de recibos y mantenimiento de edificios residenciales.',
    longDescription: 'Sistema complementario para conserjería y juntas de condominio que permite registrar novedades de mantenimiento y gestionar cuotas con interfaz accesible.',
    client: 'Comunidades Vecinales',
    year: '2026',
    role: 'Full Stack Engineer',
    metrics: [
      { label: 'Gestión Recibos', value: 'Digital' }
    ],
    accentColor: '#A78BFA',
    githubUrl: 'https://github.com/VicD4ddy/GestorCondominio'
  },
  // 16. SUPERinventario (Gestión & SaaS)
  {
    id: 'super-inventario',
    title: 'SUPERinventario.',
    category: 'Gestión & SaaS',
    categoryKey: 'saas',
    featured: false,
    tags: ['TypeScript', 'React', 'Control de Stock', 'Kardex', 'Entradas/Salidas'],
    description: 'Software de control de existencias, kardex de productos y trazabilidad de almacenes comerciales.',
    longDescription: 'Solución empresarial para seguimiento de entradas, salidas y niveles críticos de stock en comercios y talleres de repuestos, previniendo quiebres de inventario.',
    client: 'Comercios & Talleres',
    year: '2026',
    role: 'Software Engineer',
    metrics: [
      { label: 'Control de Stock', value: 'Tiempo Real' }
    ],
    accentColor: '#F5B027',
    githubUrl: 'https://github.com/VicD4ddy/SUPERinventario'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'ecommerce-architecture-lessons',
    date: 'Sep 2026',
    category: 'Arquitectura Web',
    title: 'Arquitectura de un E-commerce escalable con React y Vite',
    readTime: '4 min de lectura',
    excerpt: 'Claves aprendidas al construir tiendas online con catálogos dinámicos donde cada milisegundo de latencia afecta la conversión.',
    content: [
      'Al desarrollar plataformas como Repuestos Sotomayor, la prioridad absoluta es la velocidad de interacción y la consistencia de los datos del catálogo.',
      'Separar la lógica del cotizador del flujo principal de navegación permitió mantener un bundle liviano y una navegación instantánea.',
      'La modularidad en los componentes de filtrado y catálogo garantiza que agregar nuevos modelos o fabricantes no impacte el rendimiento de la aplicación.'
    ],
    tags: ['React', 'Performance', 'E-Commerce', 'TypeScript']
  },
  {
    id: 'python-automation-insights',
    date: 'Ago 2026',
    category: 'Automatización',
    title: 'Automatización con Python: De tareas repetitivas a flujos autónomos',
    readTime: '5 min de lectura',
    excerpt: 'Cómo diseñar bots y scrapers resilientes que procesan miles de datos en tiempo real sin caer en bloqueos o timeouts.',
    content: [
      'El desarrollo de VicJobFinder y scrapers empresariales demuestra que la resiliencia es más importante que la fuerza bruta.',
      'Implementar rotación inteligente de peticiones, backoff exponencial y parsing estructurado marca la diferencia entre un script frágil y un sistema de automatización confiable.',
      'La automatización bien aplicada ahorra decenas de horas de trabajo operativo semanal tanto para usuarios individuales como para equipos de ventas.'
    ],
    tags: ['Python', 'Automation', 'Scraping', 'Productividad']
  },
  {
    id: 'ui-clean-philosophy',
    date: 'Jul 2026',
    category: 'UI/UX Craft',
    title: 'El arte de diseñar interfaces orientadas al propósito',
    readTime: '3 min de lectura',
    excerpt: 'Por qué la sobriedad visual y la claridad funcional superan a los elementos decorativos innecesarios.',
    content: [
      'Una interfaz verdaderamente profesional no distrae al usuario; le proporciona los datos que necesita exactamente donde los espera.',
      'En aplicaciones de cotización y ventas, cada botón debe tener una intención clara y cada animación debe guiar el ojo hacia la acción principal.',
      'El diseño con temas oscuros de alto contraste y acentos dorados crea una sensación premium que refuerza la confianza del cliente.'
    ],
    tags: ['UI/UX', 'Design Systems', 'Dark Mode']
  }
];

export const TESTIMONIAL: Testimonial = {
  quote: 'Víctor transformó por completo nuestra presencia digital. El e-commerce y el cotizador automatizado redujeron drásticamente el tiempo que tardábamos en responder solicitudes y aumentaron las ventas desde el primer mes.',
  author: 'Carlos Sotomayor',
  role: 'Gerente General',
  company: 'Repuestos Sotomayor',
  avatarUrl: TESTIMONIAL_AVATAR
};

export const STORY_CONTENT = {
  title: 'Víctor Alfonzo Reyes',
  subtitle: 'Full Stack Developer & Software Engineer (@VicD4ddy)',
  intro: 'Apasionado por el desarrollo de software de alta calidad, enfocado en construir herramientas web modernas, plataformas de e-commerce veloces y sistemas de automatización que generan impacto medible.',
  milestones: [
    { year: '2024', title: 'Fundamentos, Python & Automatización', desc: 'Desarrollo de scripts avanzados de web scraping, bots de búsqueda inteligente y primeros proyectos interactivos en la web.' },
    { year: '2025', title: 'Especialización Full Stack', desc: 'Consolidación en React, TypeScript, Tailwind CSS y Node.js, creando arquitecturas escalables para clientes comerciales.' },
    { year: '2026', title: 'E-Commerce & Sistemas a Gran Escala', desc: 'Desarrollo de Repuestos Sotomayor E-Commerce, cotizadores en tiempo real y más de 27 repositorios activos en GitHub.' },
    { year: 'Actual', title: 'Innovación Continua & Agentes de IA', desc: 'Integración de modelos de lenguaje, asistentes interactivos y optimización de rendimiento para proyectos globales.' }
  ],
  skills: [
    'React 19, TypeScript, Vite & Tailwind CSS v4',
    'Arquitectura Full Stack, Node.js & REST APIs',
    'E-Commerce Engineering & Cotizadores Dinámicos',
    'Automatización en Python, Web Scraping & Bots',
    'Diseño UI/UX con Glassmorphism & Micro-Interacciones',
    'Optimización de Rendimiento Web (Lighthouse 100)',
    'Git, GitHub Workflow & CI/CD Pipelines'
  ]
};
