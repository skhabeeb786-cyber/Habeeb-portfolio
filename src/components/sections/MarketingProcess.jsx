import React from 'react';
import { 
  Compass, 
  Map, 
  Rocket, 
  BarChart2, 
  TrendingUp 
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';

export default function MarketingProcess() {
  const { processSteps } = portfolioData;

  const stepIcons = [Compass, Map, Rocket, BarChart2, TrendingUp];

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Execution Methodology"
          title="The 5-Stage Performance"
          highlight="Marketing Framework"
          description="A structured, data-driven methodology developed to minimize wasted ad spend and maximize customer acquisition."
        />

        {/* 5 Connected Cards */}
        <div className="relative mt-10 sm:mt-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-8 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-25 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = stepIcons[idx] || Rocket;

              return (
                <div
                  key={step.step}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-heading font-extrabold text-xl text-blue-600">
                        {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-3.5 border-t border-slate-100 text-[11px] text-slate-500 leading-snug">
                    {step.detail}
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
