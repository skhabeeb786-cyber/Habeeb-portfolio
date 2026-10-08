import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onFinished }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      const exitTimer = setTimeout(() => {
        if (onFinished) onFinished();
      }, 500);
      return () => clearTimeout(exitTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-500 ${
      fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Glow rings */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-28 h-28 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[2px] shadow-glow animate-float-slow">
          <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
            <span className="font-heading text-3xl font-black tracking-wider bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              HH
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center space-y-2">
        <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
          Habeeb Hussain
        </span>
        <div className="w-36 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-[pulse_1s_ease-in-out_infinite] w-full" />
        </div>
      </div>
    </div>
  );
}
