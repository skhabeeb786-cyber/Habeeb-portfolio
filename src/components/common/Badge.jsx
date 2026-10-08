import React from 'react';

export default function Badge({
  children,
  variant = 'blue', // 'blue' | 'purple' | 'emerald' | 'amber' | 'slate' | 'gradient'
  size = 'md',      // 'sm' | 'md'
  icon: Icon,
  className = '',
  dot = false,
}) {
  const base = "inline-flex items-center font-medium rounded-full transition-colors";
  
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs gap-1.5",
    md: "px-3.5 py-1 text-xs sm:text-sm gap-2",
  };

  const variants = {
    blue: "bg-blue-50 text-blue-700 border border-blue-200/80",
    purple: "bg-purple-50 text-purple-700 border border-purple-200/80",
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200/80",
    amber: "bg-amber-50 text-amber-700 border border-amber-200/80",
    slate: "bg-slate-100 text-slate-700 border border-slate-200",
    dark: "bg-slate-800 text-slate-200 border border-slate-700",
    gradient: "bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-800 border border-blue-500/20 shadow-sm",
  };

  return (
    <span className={`${base} ${sizeClasses[size]} ${variants[variant]} ${className}`}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shrink-0" />
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
