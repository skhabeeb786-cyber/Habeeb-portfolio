import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  DollarSign, 
  CheckCircle2,
  Send,
  Zap
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { MetaIcon, GoogleAdsIcon, WhatsAppIcon } from '../common/BrandIcons';

export default function HeroSection() {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/70">
      {/* Background Animated Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-40 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-cyan-400/10 rounded-full blur-[90px] animate-float-delayed" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#2563eb_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            
            {/* Badge with subtle shine & ping */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/90 text-blue-700 text-xs sm:text-sm font-semibold shadow-sm hover:border-blue-400 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Digital Marketing Specialist</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.18]">
              Turning Digital Campaigns Into{' '}
              <span className="gradient-text">Measurable Growth</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              {personal.description} Based in <span className="font-semibold text-slate-900">{personal.location}</span>, engineering high-intent funnels with sustainable ROI.
            </p>

            {/* Key Skill Tags with hover lift */}
            <div className="flex flex-wrap gap-2 pt-0.5">
              {["Meta Ads", "Google Ads", "Performance Marketing", "GA4 & GTM", "WhatsApp API"].map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 shadow-sm hover:border-blue-400 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons with Shimmer & Glow */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={() => scrollTo('#projects')}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base shadow-glow hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm sm:text-base border border-slate-300 shadow-sm hover:shadow-md hover:border-blue-400 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto"
              >
                <Send className="w-4 h-4 text-blue-600" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Verified Trust Strip */}
            <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-200">
              <div className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Verified Results</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-blue-700 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">₹1L/mo Multi-Brand Spend</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-indigo-700 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Data-Backed Tracking</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Realistic Futuristic Marketing Dashboard Mockup with Glow & Flow */}
          <div className="lg:col-span-6 relative w-full">
            
            {/* Dashboard Container / Gradient Frame */}
            <div className="relative mx-auto rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 shadow-xl shadow-blue-500/20 max-w-lg lg:max-w-none hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
              <div className="rounded-[18px] sm:rounded-[22px] bg-slate-950 text-white p-4 sm:p-6 space-y-4 sm:space-y-5 border border-slate-800">
                
                {/* Dashboard Top Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 inline-block hover:scale-125 transition-transform" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 inline-block hover:scale-125 transition-transform" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 inline-block hover:scale-125 transition-transform" />
                    <span className="text-[11px] sm:text-xs text-slate-400 font-mono ml-1.5 truncate max-w-[140px] sm:max-w-none">
                      ads-manager.performance.live
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] sm:text-xs font-mono font-medium border border-emerald-500/30 shadow-sm shadow-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Monitoring
                    </span>
                  </div>
                </div>

                {/* Dashboard Stats Row with Micro-hover */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] sm:text-xs">
                      <span>Total Leads</span>
                      <Users className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    </div>
                    <div className="text-base sm:text-xl font-bold font-heading text-white mt-1">
                      630+
                    </div>
                    <span className="text-[9px] sm:text-[11px] text-emerald-400 font-medium flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="w-3 h-3" /> High Quality
                    </span>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 transition-all">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] sm:text-xs">
                      <span>Avg. CPL</span>
                      <Target className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    </div>
                    <div className="text-base sm:text-xl font-bold font-heading text-emerald-400 mt-1">
                      ₹19.85
                    </div>
                    <span className="text-[9px] sm:text-[11px] text-emerald-400 font-medium flex items-center gap-0.5 mt-0.5">
                      Optimized
                    </span>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900 transition-all">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] sm:text-xs">
                      <span>CTR Achieved</span>
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    </div>
                    <div className="text-base sm:text-xl font-bold font-heading text-white mt-1">
                      4.25%
                    </div>
                    <span className="text-[9px] sm:text-[11px] text-blue-400 font-medium flex items-center gap-0.5 mt-0.5">
                      vs 1.25% base
                    </span>
                  </div>
                </div>

                {/* Interactive Chart Visual / Lead Growth & CTR */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="font-semibold text-slate-200 text-xs sm:text-sm">Campaign CTR & Lead Growth</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-[10px] sm:text-xs text-slate-400">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" /> CTR</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Leads</span>
                    </div>
                  </div>

                  {/* SVG Chart with subtle glow filter */}
                  <div className="h-24 sm:h-28 w-full pt-1">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                        </linearGradient>
                        <filter id="glowLine" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#3b82f6" floodOpacity="0.6" />
                        </filter>
                      </defs>
                      <line x1="0" y1="25" x2="400" y2="25" stroke="#1e293b" strokeDasharray="3 3" />
                      <line x1="0" y1="50" x2="400" y2="50" stroke="#1e293b" strokeDasharray="3 3" />
                      <line x1="0" y1="75" x2="400" y2="75" stroke="#1e293b" strokeDasharray="3 3" />

                      <path
                        d="M0,85 Q60,75 120,60 T240,40 T320,20 T400,10 L400,100 L0,100 Z"
                        fill="url(#chartGrad)"
                      />
                      <path
                        d="M0,85 Q60,75 120,60 T240,40 T320,20 T400,10"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="url(#glowLine)"
                      />
                      <circle cx="120" cy="60" r="4.5" fill="#60a5fa" className="animate-pulse" />
                      <circle cx="240" cy="40" r="4.5" fill="#60a5fa" className="animate-pulse" />
                      <circle cx="400" cy="10" r="5.5" fill="#3b82f6" className="animate-pulse" />
                    </svg>
                  </div>
                  <div className="flex justify-between text-[9px] sm:text-[11px] text-slate-500 font-mono pt-1">
                    <span>Week 1</span>
                    <span>Week 2</span>
                    <span>Week 3</span>
                    <span>Week 4 (Scale)</span>
                  </div>
                </div>

                {/* Multi-Channel Distribution Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600/15 text-blue-400 border border-blue-500/20 text-xs hover:border-blue-400 transition-colors">
                      <MetaIcon className="w-3.5 h-3.5" />
                      <span>Meta Ads</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600/15 text-red-400 border border-red-500/20 text-xs hover:border-red-400 transition-colors">
                      <GoogleAdsIcon className="w-3.5 h-3.5" />
                      <span>Google Ads</span>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600/15 text-emerald-400 border border-emerald-500/20 text-xs hover:border-emerald-400 transition-colors">
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">₹1L/mo Ad Spend</span>
                </div>
              </div>
            </div>

            {/* FLOATING GLASS CARDS: Safely contained, animated float */}
            <div className="hidden xl:flex absolute -top-5 -left-5 z-20 items-center gap-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-blue-500/10 animate-float-slow hover:scale-105 transition-transform">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900">630+</div>
                <div className="text-[11px] font-medium text-slate-500">Qualified Leads</div>
              </div>
            </div>

            <div className="hidden xl:flex absolute -bottom-5 -left-3 z-20 items-center gap-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-purple-500/10 animate-float-delayed hover:scale-105 transition-transform">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <div className="text-base font-bold text-emerald-600">₹19.85</div>
                <div className="text-[11px] font-medium text-slate-500">Avg. CPL</div>
              </div>
            </div>

            <div className="hidden xl:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 items-center gap-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-indigo-500/10 animate-[float_6s_ease-in-out_2s_infinite] hover:scale-105 transition-transform">
              <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-base font-bold text-purple-600">4.25% CTR</div>
                <div className="text-[11px] font-medium text-slate-500">Ad Click-Through</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
