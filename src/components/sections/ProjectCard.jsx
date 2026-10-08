import React from 'react';
import { 
  ExternalLink, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Share2, 
  Heart, 
  MessageCircle
} from 'lucide-react';
import { MetaIcon } from '../common/BrandIcons';

export default function ProjectCard({ project, onSelect }) {
  const { title, client, category, summary, services, url, visualType } = project;

  return (
    <div className="group rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-premium-hover transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5 cursor-default">
      
      {/* CARD TOP: Realistic Visual Mockup */}
      <div className="relative aspect-[16/10] bg-slate-950 p-4 sm:p-5 flex flex-col justify-center overflow-hidden border-b border-slate-100">
        
        {/* Glow backdrop with subtle shift on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-indigo-950/20 to-purple-900/30 group-hover:opacity-100 opacity-60 transition-opacity duration-500 -z-10" />

        {/* Case 1: Browser Mockup for Website Design */}
        {visualType === 'browserMockup' && (
          <div className="w-full h-full rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
            <div className="h-7 sm:h-8 bg-slate-950 border-b border-slate-800 px-3 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="px-2.5 py-0.5 rounded bg-slate-900 text-[10px] sm:text-xs text-slate-300 font-mono truncate max-w-[160px] sm:max-w-[200px] border border-slate-800">
                boostyourmemory.in
              </div>
              <Globe className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-45 transition-transform duration-500" />
            </div>

            <div className="flex-1 p-3.5 sm:p-4 bg-gradient-to-b from-slate-900 to-indigo-950/70 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                    BYM
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight">Boost Your Memory</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                </span>
              </div>

              <div className="my-auto py-1 text-center space-y-1">
                <div className="inline-block px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 text-[10px] font-mono font-semibold">
                  UI/UX Architecture
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">Unlock Cognitive Potential</div>
                <div className="text-[10px] sm:text-xs text-slate-400 max-w-xs mx-auto line-clamp-1 font-normal">
                  Responsive &bull; User-Friendly &bull; High Conversion
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-400 border-t border-slate-800/80 pt-2 font-medium">
                <span className="flex items-center gap-1 text-blue-400">
                  <Smartphone className="w-3 h-3" /> Mobile Optimized
                </span>
                <span className="text-indigo-300 font-semibold">Modern UI</span>
              </div>
            </div>
          </div>
        )}

        {/* Case 2: Social Media Content Wall */}
        {visualType === 'socialWall' && (
          <div className="w-full h-full rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 shadow-xl p-3 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">
                  SMM
                </div>
                <span className="font-semibold text-xs sm:text-sm text-white">Brand Social Feed</span>
              </div>
              <span className="text-[10px] sm:text-xs text-purple-400 font-mono font-medium">120+ Assets</span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-1.5">
              <div className="aspect-[4/5] rounded-lg bg-gradient-to-tr from-indigo-900 to-purple-900 p-2 flex flex-col justify-between border border-slate-800 hover:border-purple-400/50 transition-colors">
                <span className="text-[9px] font-bold text-white/90">Carousel</span>
                <div className="text-[8px] text-slate-300">Strategy</div>
                <div className="flex items-center gap-1 text-[8px] text-red-400 font-semibold">
                  <Heart className="w-2.5 h-2.5 fill-current" /> <span>340+</span>
                </div>
              </div>

              <div className="aspect-[4/5] rounded-lg bg-gradient-to-tr from-blue-900 to-cyan-900 p-2 flex flex-col justify-between border border-slate-800 hover:border-cyan-400/50 transition-colors">
                <span className="text-[9px] font-bold text-cyan-300">Reels</span>
                <div className="text-[8px] text-slate-300">Shorts</div>
                <div className="flex items-center gap-1 text-[8px] text-blue-400 font-semibold">
                  <MessageCircle className="w-2.5 h-2.5" /> <span>86</span>
                </div>
              </div>

              <div className="aspect-[4/5] rounded-lg bg-gradient-to-tr from-slate-800 to-violet-950 p-2 flex flex-col justify-between border border-slate-800 hover:border-pink-400/50 transition-colors">
                <span className="text-[9px] font-bold text-pink-300">Promo</span>
                <div className="text-[8px] text-slate-300">Ad Set</div>
                <div className="flex items-center gap-1 text-[8px] text-emerald-400 font-semibold">
                  <Share2 className="w-2.5 h-2.5" /> <span>120+</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 font-medium">
              <span>IG &bull; FB &bull; LinkedIn</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> High Engagement
              </span>
            </div>
          </div>
        )}

        {/* Case 3: Meta Ads & Lead Gen Dashboard */}
        {visualType === 'adsDashboard' && (
          <div className="w-full h-full rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 shadow-xl p-3 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1.5">
                <MetaIcon className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-bold text-white text-xs sm:text-sm">Meta Ads Lead Gen</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-mono font-medium border border-emerald-500/25">
                Active &bull; ₹1L Spend
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-1.5">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center hover:border-emerald-500/40 transition-colors">
                <span className="text-[10px] text-slate-400 block font-medium">Leads</span>
                <span className="text-sm font-bold text-emerald-400">630+</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center hover:border-blue-500/40 transition-colors">
                <span className="text-[10px] text-slate-400 block font-medium">Avg CPL</span>
                <span className="text-sm font-bold text-white">₹19.85</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-center hover:border-purple-500/40 transition-colors">
                <span className="text-[10px] text-slate-400 block font-medium">Conv.</span>
                <span className="text-sm font-bold text-blue-400">5.0%</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80 font-medium">
              <span className="text-slate-300">95K+ Reach &bull; 98K+ Impr.</span>
              <span className="text-purple-400 font-mono font-medium">Pixel + GTM Verified</span>
            </div>
          </div>
        )}

      </div>

      {/* CARD BODY: Content & Services */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
              {category}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {client}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3 font-normal">
            {summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {services.slice(0, 4).map((svc, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {svc}
              </span>
            ))}
            {services.length > 4 && (
              <span className="px-2 py-1 rounded-lg bg-blue-50 text-blue-600 text-xs font-semibold">
                +{services.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Card CTA & Buttons */}
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-all cursor-pointer"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm hover:shadow hover:scale-105 transition-all"
            >
              <span>Visit Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium hover:scale-105 transition-all cursor-pointer"
            >
              <span>Details</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
