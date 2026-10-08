import React from 'react';
import AnimatedCounter from './AnimatedCounter';

export default function StatCard({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  label,
  subtext,
  icon: Icon,
  dark = false,
  className = '',
}) {
  return (
    <div
      className={`group relative p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
        dark
          ? 'bg-slate-900/90 border border-slate-800 hover:border-blue-500/60 shadow-lg'
          : 'bg-white border border-slate-200/90 hover:border-blue-400 shadow-premium hover:shadow-premium-hover'
      } ${className}`}
    >
      {/* Top glowing accent line */}
      <div className="absolute top-0 left-4 right-4 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 rounded-b-full transition-opacity duration-300" />

      <div className="flex items-start justify-between">
        <div>
          <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
            dark ? 'text-white' : 'text-slate-900'
          }`}>
            <AnimatedCounter
              target={value}
              prefix={prefix}
              suffix={suffix}
              decimals={decimals}
            />
          </div>
          <h3 className={`mt-2 font-semibold text-xs sm:text-sm ${
            dark ? 'text-slate-100' : 'text-slate-800'
          }`}>
            {label}
          </h3>
          {subtext && (
            <p className={`mt-0.5 text-[11px] sm:text-xs font-normal ${
              dark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              {subtext}
            </p>
          )}
        </div>

        {Icon && (
          <div className={`p-2 rounded-xl shrink-0 ${
            dark
              ? 'bg-blue-500/15 text-blue-400 border border-blue-500/25'
              : 'bg-blue-50 text-blue-600 border border-blue-100'
          }`}>
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        )}
      </div>
    </div>
  );
}
