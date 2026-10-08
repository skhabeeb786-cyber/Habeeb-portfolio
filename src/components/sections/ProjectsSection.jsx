import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = [
    { label: 'All', key: 'All' },
    { label: 'Website Design', key: 'Website Design' },
    { label: 'Social Media', key: 'Social Media Management' },
    { label: 'Meta Ads', key: 'Meta Ads' },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Portfolio Showcase"
          title="Featured Projects &"
          highlight="Campaigns"
          description="A selection of digital marketing, website and paid-media work."
        />

        {/* Filter Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-glow'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/90'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid - Responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
