import React from 'react';

export function MetaIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
    </svg>
  );
}

export function GoogleAdsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.05 20.15C10.58 20.15 9.15 19.75 7.89 19.01L7.59 18.83L4.47 19.65L5.3 16.61L5.1 16.3C4.29 15.01 3.86 13.5 3.86 11.93C3.86 7.41 7.54 3.73 12.06 3.73C14.25 3.73 16.31 4.59 17.86 6.14C19.41 7.69 20.27 9.75 20.27 11.94C20.27 16.47 16.58 20.15 12.05 20.15M16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.71C14.14 13.96 13.66 14.52 13.51 14.69C13.36 14.86 13.22 14.88 12.97 14.76C12.72 14.63 11.92 14.37 10.97 13.52C10.23 12.86 9.73 12.05 9.58 11.8C9.44 11.55 9.56 11.41 9.69 11.29C9.8 11.18 9.94 11 10.06 10.86C10.19 10.72 10.23 10.62 10.31 10.45C10.39 10.28 10.35 10.14 10.29 10.02C10.23 9.9 9.73 8.68 9.52 8.18C9.32 7.69 9.12 7.76 8.96 7.75H8.48C8.31 7.75 8.04 7.81 7.81 8.06C7.58 8.31 6.94 8.91 6.94 10.13C6.94 11.35 7.83 12.52 7.95 12.69C8.07 12.86 9.69 15.36 12.18 16.43C12.77 16.69 13.23 16.84 13.59 16.95C14.19 17.14 14.73 17.12 15.16 17.05C15.65 16.98 16.66 16.44 16.87 15.85C17.08 15.26 17.08 14.76 17.01 14.64C16.95 14.52 16.81 14.51 16.56 14.39Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

export function GitHubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function GA4Icon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" stroke="#F59E0B" />
      <rect x="7" y="10" width="3" height="8" rx="1" fill="#F59E0B" stroke="none" />
      <rect x="13" y="6" width="3" height="12" rx="1" fill="#EA580C" stroke="none" />
      <rect x="19" y="3" width="3" height="15" rx="1" fill="#F97316" stroke="none" />
    </svg>
  );
}

export function GTMIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#2563EB" opacity="0.2" />
      <path d="M7 12l3.5 3.5L17 8.5" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CanvaIcon({ className = "w-5 h-5" }) {
  return (
    <div className={`${className} rounded-md bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-xs`}>
      C
    </div>
  );
}

export function ExcelIcon({ className = "w-5 h-5" }) {
  return (
    <div className={`${className} rounded-md bg-emerald-600 flex items-center justify-center text-white font-bold text-xs`}>
      X
    </div>
  );
}

export function SemrushIcon({ className = "w-5 h-5" }) {
  return (
    <div className={`${className} rounded-md bg-orange-500 flex items-center justify-center text-white font-bold text-xs`}>
      S
    </div>
  );
}
