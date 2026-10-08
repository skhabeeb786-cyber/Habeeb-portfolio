import React from 'react';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  BadgePercent 
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-28 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Career History"
          title="Work Experience &"
          highlight="Key Impact"
          description="A track record of managing paid media, scaling performance funnels, and optimizing digital ad investments."
        />

        {/* Vertical Timeline */}
        <div className="relative mt-12 sm:mt-16">
          {/* Central / Left Line */}
          <div className="absolute top-3 bottom-3 left-3.5 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-400 to-slate-300" />

          <div className="space-y-10 sm:space-y-12">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Pin */}
                  <div className="absolute left-3.5 md:left-1/2 -translate-x-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-4 border-blue-600 shadow-md flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>

                  {/* Content Container (Offset for timeline) */}
                  <div className="ml-9 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 relative group">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.date}</span>
                        </span>

                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current Role
                          </span>
                        )}

                        {exp.highlightBadge && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-300 shadow-sm">
                            <BadgePercent className="w-3.5 h-3.5 text-amber-600" />
                            <span>{exp.highlightBadge}</span>
                          </span>
                        )}
                      </div>

                      {/* Position & Company */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {exp.position}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-600 mt-1 mb-3.5">
                        <span className="text-indigo-600">{exp.company}</span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1 text-slate-500 font-normal">
                          <MapPin className="w-3.5 h-3.5" /> {exp.location}
                        </span>
                      </div>

                      {/* Budget Callout if present */}
                      {exp.budget && (
                        <div className="mb-4 px-3 py-1.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs font-semibold text-blue-900 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>Ad Budget Managed: {exp.budget}</span>
                        </div>
                      )}

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech / Skills Tags */}
                      <div className="pt-3.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {exp.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
