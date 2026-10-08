import React from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Zap,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import SectionHeader from '../common/SectionHeader';

export default function ResultsSection() {
  const { results } = portfolioData;

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Measurable Performance"
          title="Numbers That Tell"
          highlight="The Story"
          description={results.subheadline}
        />

        {/* Top 4 Metric Cards with Hover Glow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mb-10 sm:mb-14">
          {results.metricCards.slice(0, 4).map((card, i) => (
            <div
              key={i}
              className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-premium-hover hover:border-blue-400 hover:bg-white transition-all duration-300 hover:-translate-y-1.5 group cursor-default"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {card.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1.5">
                {card.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                {card.caption}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: 3 metric cards + CTR comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left: 3 remaining metric cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
            {results.metricCards.slice(4).map((card, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-between group cursor-default"
              >
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                    {card.label}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {card.caption}
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Interactive Performance Comparison Chart */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-slate-950 text-white p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-colors">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-600/20 to-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/25">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white">CTR Optimization Impact</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400">Audience & Creative Refinement</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/30 shadow-sm shadow-emerald-500/20 animate-pulse">
                  {results.ctrComparison.lift}
                </span>
              </div>

              {/* Visual Bars Comparison */}
              <div className="mt-6 space-y-5">
                
                {/* Initial Benchmark */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium text-slate-400">
                    <span>Initial Baseline CTR</span>
                    <span className="font-mono text-slate-300 font-bold">{results.ctrComparison.initial}</span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div className="h-full bg-slate-600 rounded-full w-[29%] transition-all duration-1000" />
                  </div>
                </div>

                {/* Optimized Result with Glowing Beam */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium text-slate-300">
                    <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                      <Zap className="w-3.5 h-3.5 animate-bounce" /> Optimized Target CTR
                    </span>
                    <span className="font-mono text-emerald-400 font-bold text-sm">{results.ctrComparison.improved}</span>
                  </div>
                  <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800 relative">
                    <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-full w-[100%] shadow-glow" />
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-6 pt-3.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="text-slate-300 font-medium">
                {results.ctrComparison.caption}
              </span>
              <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Verified
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
