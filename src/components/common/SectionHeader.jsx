import React from 'react';

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} mb-10 sm:mb-14 px-2 ${className}`}>
      {badge && (
        <div className="inline-block mb-3">
          <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${
            light 
              ? 'bg-blue-500/15 text-blue-300 border border-blue-400/30' 
              : 'bg-blue-50 text-blue-700 border border-blue-200/90'
          }`}>
            {badge}
          </span>
        </div>
      )}

      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}{' '}
        {highlight && (
          <span className={light ? 'gradient-text-light' : 'gradient-text'}>
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
