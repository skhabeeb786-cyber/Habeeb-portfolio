import React, { useState } from 'react';
import { 
  BarChart, 
  Target, 
  Search, 
  MessageSquare, 
  Wrench, 
  CheckCircle, 
  Zap 
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';

export default function SkillsSection() {
  const { skillsByCategory } = portfolioData;
  const categories = Object.keys(skillsByCategory);
  const [activeTab, setActiveTab] = useState(categories[0]);

  const tabIcons = {
    "Paid Media": Target,
    "Analytics": BarChart,
    "SEO & Content": Search,
    "WhatsApp": MessageSquare,
    "Tools": Wrench,
  };

  const currentSkills = skillsByCategory[activeTab] || [];

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Core Competencies"
          title="Skills & Strategic"
          highlight="Expertise"
          description="In-depth domain knowledge across acquisition channels, web analytics, conversational funnels, and marketing software."
        />

        {/* Category Tabs - Clean responsive wrap for mobile and desktop */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const Icon = tabIcons[cat] || Zap;
            const isActive = activeTab === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-glow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/90 hover:text-slate-900 border border-slate-200/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{cat}</span>
                <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-mono font-medium ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {skillsByCategory[cat].length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid - 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {currentSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 hover:border-blue-400 hover:bg-white hover:shadow-premium transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {skill.level}
                  </span>
                  <CheckCircle className="w-4 h-4 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-normal">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
