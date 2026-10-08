import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import StatCard from '../common/StatCard';
import { Users, Target, DollarSign, TrendingUp, Radio, Eye } from 'lucide-react';

export default function StatsSection() {
  const { stats } = portfolioData;

  const iconMap = {
    leads: Users,
    cpl: Target,
    spend: DollarSign,
    ctr: TrendingUp,
    reach: Radio,
    impressions: Eye,
  };

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 sm:w-96 h-48 sm:h-64 bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 sm:w-96 h-48 sm:h-64 bg-purple-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-blue-400 bg-blue-500/15 px-3 py-1 rounded-full border border-blue-500/25">
            Campaign Benchmarks
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-3">
            Key Performance Metrics at a Glance
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
            Verified performance across paid media accounts, lead funnels, and search campaigns.
          </p>
        </div>

        {/* 6 Grid of Stat Cards - Seamlessly responsive on all screen sizes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              prefix={stat.prefix || ''}
              suffix={stat.suffix || ''}
              decimals={stat.decimals || 0}
              label={stat.label}
              subtext={stat.subtext}
              icon={iconMap[stat.id]}
              dark={true}
              className="text-left"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
