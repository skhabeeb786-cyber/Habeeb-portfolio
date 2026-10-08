import React from 'react';

export default function GlassCard({
  children,
  className = '',
  dark = false,
  hoverEffect = true,
  onClick,
  ...props
}) {
  const baseClasses = dark
    ? "glass-card-dark text-slate-100 shadow-xl"
    : "glass-card text-slate-900 shadow-premium";

  const hoverClasses = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-hover"
    : "";

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-6 relative overflow-hidden ${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
