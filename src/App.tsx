import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Specialties } from './components/Specialties';
import { SelectedWorks } from './components/SelectedWorks';
import { BlogAndTestimonial } from './components/BlogAndTestimonial';
import { EstimateContact } from './components/EstimateContact';
import { Modals } from './components/Modals';
import { AIAssistant } from './components/AIAssistant';
import { MobileQuickDock } from './components/MobileQuickDock';
import { Project, Article } from './types';

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [storyOpen, setStoryOpen] = useState(false);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState('full-stack-developer');

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans antialiased selection:bg-brand-yellow selection:text-black relative">
      {/* Main Sticky Navigation Header */}
      <Header
        onStoryClick={() => setStoryOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onStoryClick={() => setStoryOpen(true)}
          onContactClick={handleOpenContact}
        />

        {/* Metrics & Direct Query Section */}
        <Metrics onContactClick={handleOpenContact} />

        {/* Specialties / Services Cards */}
        <Specialties
          selectedSpecialtyId={selectedSpecialtyId}
          onSelectSpecialty={setSelectedSpecialtyId}
        />

        {/* Selected Works Portfolio Showcase */}
        <SelectedWorks onProjectClick={(proj) => setActiveProject(proj)} />

        {/* Editorial Articles & Client Testimonial */}
        <BlogAndTestimonial onArticleClick={(art) => setActiveArticle(art)} />
      </main>

      {/* Project Estimate & Contact Form Section */}
      <EstimateContact />

      {/* Interactive Modals */}
      <Modals
        activeProject={activeProject}
        onCloseProject={() => setActiveProject(null)}
        activeArticle={activeArticle}
        onCloseArticle={() => setActiveArticle(null)}
        storyOpen={storyOpen}
        onCloseStory={() => setStoryOpen(false)}
      />

      {/* Interactive In-Portfolio AI Agent */}
      <AIAssistant />

      {/* Mobile Floating Thumb Dock (<768px) */}
      <MobileQuickDock />
    </div>
  );
}
