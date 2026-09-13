import React from 'react';
import { SPECIALTIES } from '../data/portfolioData';
import { ServiceSpecialty } from '../types';

interface SpecialtiesProps {
  selectedSpecialtyId: string;
  onSelectSpecialty: (id: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({
  selectedSpecialtyId,
  onSelectSpecialty,
}) => {
  return (
    <section
      id="services"
      className="py-16 bg-brand-surface border-b border-brand-border"
      data-purpose="specialties-cards"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec: ServiceSpecialty) => {
            const isSelected = selectedSpecialtyId === spec.id;

            if (isSelected) {
              return (
                <button
                  key={spec.id}
                  id={`service-card-${spec.id}`}
                  onClick={() => onSelectSpecialty(spec.id)}
                  className="bg-brand-yellow text-brand-dark p-8 rounded-sm shadow-xl flex flex-col justify-between h-72 text-left transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-4 focus:ring-brand-yellow/40 cursor-pointer relative group"
                >
                  {/* Icon Top */}
                  <div className="w-10 h-10 border border-brand-dark/30 rounded flex items-center justify-center transition-transform group-hover:scale-110">
                    {spec.icon === 'product' && (
                      <svg
                        className="w-5 h-5 text-brand-dark"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {spec.icon === 'brand' && (
                      <svg
                        className="w-5 h-5 text-brand-dark"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {spec.icon === 'code' && (
                      <svg
                        className="w-5 h-5 text-brand-dark"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Label and Count */}
                  <div>
                    <h4 className="text-2xl font-bold leading-tight whitespace-pre-line">
                      {spec.title.replace(' ', '\n')}
                    </h4>
                    <p className="text-xs font-semibold text-brand-dark/70 mt-2">
                      {spec.projectsCount} Projects
                    </p>
                  </div>
                </button>
              );
            }

            return (
              <button
                key={spec.id}
                id={`service-card-${spec.id}`}
                onClick={() => onSelectSpecialty(spec.id)}
                className="bg-brand-card hover:bg-brand-card-hover border border-brand-border p-8 rounded-sm transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between h-72 text-left group focus:outline-none focus:ring-2 focus:ring-brand-yellow/40 cursor-pointer"
              >
                {/* Icon Top */}
                <div className="w-10 h-10 border border-white/15 rounded flex items-center justify-center text-brand-muted group-hover:text-brand-yellow group-hover:border-brand-yellow transition-all duration-300 group-hover:scale-110">
                  {spec.icon === 'product' && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {spec.icon === 'brand' && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {spec.icon === 'code' && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                {/* Label and Count */}
                <div>
                  <h4 className="text-2xl font-bold text-white leading-tight whitespace-pre-line group-hover:text-brand-yellow transition-colors">
                    {spec.title.replace(' ', '\n')}
                  </h4>
                  <p className="text-xs font-semibold text-brand-muted mt-2">
                    {spec.projectsCount} Projects
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
