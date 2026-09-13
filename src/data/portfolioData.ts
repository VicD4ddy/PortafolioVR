import { Project, Article, Testimonial, ServiceSpecialty } from '../types';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7Ui-HRFgEuSUV0PxU13PYXuB3XWw18p0pbb6_2lvTjXGXdmVdxxATaWghgQ0yskwsV8wMqwcvJEELyShD0nztO9HYelyLwIWo36P1MI-U6sgMLH-9YxgtpEDrG2pl0oW0vsy-3fcNtrCc-Gy3qnXp1fD_CTaifStBjeybMzmkYQhMBNwsQlhZPJUKgGIBgblxTXjpm0rqI9mLNKW_KUA_6V0BxOmSU7Pk-dRSa8dZm5ixWAcXclYi';

export const TESTIMONIAL_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGff2akZ_sk2J0qfKQ9sR-EobQlpqcYlZYcR1X9l7tJPbPA5bWxe4628uQDTEqKaS7HQJIbrIVJWOl7OAHtDid83c_jxY4w9zkwjwfsv8oWqa-_UyNhL9Hiigrs5cQVcCzza4nZ5ettJwwWUERyaeBAytUyAOzE_GNBLjr2mXx0FR7KvwDrpx68PpZJiQH2Y7W2aM5fzcmPc3dq81-MuLSemCyTvRKZoeMKFRGt_CCFSRFfP2aufx4';

export const SPECIALTIES: ServiceSpecialty[] = [
  {
    id: 'product-designer',
    title: 'Product Designer.',
    projectsCount: 124,
    featured: true,
    description: 'Specializing in end-to-end user experience, interaction architecture, complex SaaS dashboards, and design systems with mathematical precision.',
    icon: 'product'
  },
  {
    id: 'branding-designer',
    title: 'Branding Designer.',
    projectsCount: 37,
    featured: false,
    description: 'Crafting memorable visual identities, typographic guidelines, design tokens, and comprehensive brand collateral for ambitious tech startups.',
    icon: 'brand'
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer.',
    projectsCount: 62,
    featured: false,
    description: 'Bridging design & high-performance engineering using React, TypeScript, Node, Next.js, Tailwind CSS, and cloud architectures.',
    icon: 'code'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'beserver',
    title: 'BeServer.',
    category: 'BRANDING, PRODUCT',
    tags: ['SaaS', 'Dashboard', 'Design System', 'React'],
    description: 'Residential Proxy Server & Control Dashboard',
    longDescription: 'BeServer is a high-throughput global proxy network dashboard engineered for developer operations and data scraping teams. Carlos led the complete design system overhaul and front-end interface, reducing proxy configuration time from 14 minutes to under 45 seconds.',
    client: 'BeServer Inc.',
    year: '2024',
    role: 'Lead Product Designer & Design Engineer',
    metrics: [
      { label: 'Monthly Bandwidth', value: '1.84 TB' },
      { label: 'Active Requests', value: '4.2M' },
      { label: 'Network Latency', value: '12ms' },
      { label: 'Config Time', value: '-68%' }
    ],
    accentColor: '#F5B027'
  },
  {
    id: 'energetic-tumbler',
    title: 'Energetic Tumbler.',
    category: 'PRODUCT, E-COMMERCE',
    tags: ['Hardware UI', 'IoT Companion App', 'E-commerce'],
    description: 'Smart Thermal Hydration Product',
    longDescription: 'Energetic Tumbler combines smart temperature-retaining hardware with an intuitive companion app. Designed with sleek ergonomics and real-time hydration analytics, it won two international product design accolades and sold out its initial production run.',
    client: 'Energetic Labs Ltd.',
    year: '2024',
    role: 'Hardware UX & Digital Experience Designer',
    metrics: [
      { label: 'Hydration Tracking', value: '99.4% Acc' },
      { label: 'Battery Life', value: '21 Days' },
      { label: 'Launch Sales', value: '$1.2M' }
    ],
    accentColor: '#F5B027'
  },
  {
    id: 'vortex-protocol',
    title: 'Vortex Protocol.',
    category: 'FINTECH, INFRASTRUCTURE',
    tags: ['DeFi', 'Analytics', 'Web3'],
    description: 'Cross-chain Liquidity Routing & Realtime Analytics Engine',
    longDescription: 'High-density institutional trading terminal with zero-latency visual charting and multi-asset routing.',
    client: 'Vortex Capital',
    year: '2023',
    role: 'Staff Product Designer',
    metrics: [
      { label: 'Trading Volume', value: '$840M' },
      { label: 'Order Execution', value: '<5ms' }
    ]
  },
  {
    id: 'chrono-os',
    title: 'Chrono OS.',
    category: 'PRODUCTIVITY, SOFTWARE',
    tags: ['Mobile & Desktop', 'Time Management'],
    description: 'Cognitive Workflows & Asynchronous Team Time Tracking',
    longDescription: 'A minimalist time tracker that respects developer flow state with natural language inputs and keyboard-first shortcuts.',
    client: 'Chrono Software',
    year: '2023',
    role: 'Principal Designer',
    metrics: [
      { label: 'Daily Active Users', value: '140k' },
      { label: 'Retention (D30)', value: '72%' }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'lesson-to-you',
    date: 'Feb 24',
    category: 'Blog',
    title: 'Let this be a lesson to you',
    readTime: '5 min read',
    excerpt: 'Hard-won lessons from scaling 120+ digital products and why restraint is the hardest discipline in software design.',
    content: [
      'Over a decade and a half of designing software, the single most common failure mode I have observed isn’t poor aesthetics—it is unnecessary complexity.',
      'Teams frequently solve organizational confusion by adding more UI controls, extra settings screens, and nested dashboards. The best designers act as editorial filters: our highest duty is not adding pixels, but eliminating ambiguity.',
      'When you strip away everything that isn’t strictly essential to the user’s primary intent, the software begins to feel weightless and lightning fast.'
    ],
    tags: ['Philosophy', 'Product Strategy', 'Simplicity']
  },
  {
    id: 'time-tracking-projects',
    date: 'Feb 14',
    category: 'Blog',
    title: 'How do you use time tracking for projects?',
    readTime: '4 min read',
    excerpt: 'Rethinking hourly metrics vs value delivery: an honest reflection on keeping teams accountable without killing creative momentum.',
    content: [
      'Traditional timesheets are an artifact of industrial manufacturing, poorly suited for creative synthesis and engineering breakthroughs.',
      'Instead of monitoring every minute spent in Figma or VS Code, high-performing product studios measure velocity, outcome precision, and iteration speed.',
      'We discuss asynchronous check-ins, sprint milestones, and how we track project health without micro-managing creativity.'
    ],
    tags: ['Operations', 'Productivity', 'Agile']
  },
  {
    id: 'ego-and-empathy',
    date: 'Feb 01',
    category: 'Blog',
    title: 'Ego and empathy in design',
    readTime: '6 min read',
    excerpt: 'Why falling in love with your own wireframes is the fastest route to user frustration, and how to cultivate radical customer listening.',
    content: [
      'Every designer enters the field wanting to leave their unique signature on what they build. But the best interface is invisible—it empowers the user to accomplish their goals with effortless clarity.',
      'Empathy requires setting aside personal taste when real customer usage data reveals friction. When testing with real users, listen to where they hesitate, where they click twice, and where their eyes dart around.',
      'Design craft is an act of service, not self-expression.'
    ],
    tags: ['UX Research', 'Design Mindset', 'Empathy']
  }
];

export const TESTIMONIAL: Testimonial = {
  quote: 'Amazing! At vero eos et accu samus et iusto odio dignissimossan ducimus qui blan ditiis praesen tium volup capaten nise no kamani kuc kuc hotahe!',
  author: 'Jared Warner',
  role: 'CEO',
  company: 'BeServer',
  avatarUrl: TESTIMONIAL_AVATAR
};

export const STORY_CONTENT = {
  title: 'Carlos Mendoza',
  subtitle: 'Product Designer & Developer based in California',
  intro: 'I partner with founders, venture studios, and engineering leaders to design and ship high-impact digital products.',
  milestones: [
    { year: '2010', title: 'Foundations in Code & Visual Arts', desc: 'Started crafting interactive web apps and foundational brand systems.' },
    { year: '2015', title: 'Senior Design Systems Engineer', desc: 'Led UI architectural systems across San Francisco Bay Area startups.' },
    { year: '2019', title: 'Independent Practice Founded', desc: 'Partnered directly with high-growth technology companies across US and Europe.' },
    { year: 'Present', title: 'Product & Engineering Leadership', desc: '14 years of experience, 187+ satisfied clients, 120+ shipped products.' }
  ],
  skills: [
    'User Interface & Design Systems',
    'Full Stack Web Development (React / Next.js / TypeScript)',
    'Interactive Prototyping & Motion',
    'Hardware UI & IoT Companions',
    'Brand Strategy & Typography Systems',
    'Information Architecture & UX Research'
  ]
};
