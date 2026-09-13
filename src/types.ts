export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  longDescription?: string;
  client?: string;
  year?: string;
  role?: string;
  metrics?: { label: string; value: string }[];
  accentColor?: string;
}

export interface Article {
  id: string;
  date: string;
  category: string;
  title: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface ServiceSpecialty {
  id: string;
  title: string;
  projectsCount: number;
  featured: boolean;
  description: string;
  icon: 'product' | 'brand' | 'code';
}
