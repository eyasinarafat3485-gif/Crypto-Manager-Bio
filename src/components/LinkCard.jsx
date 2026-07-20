import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

/**
 * LinkCard Component
 * Renders an individual full-width link button with modern lift hover effects,
 * optional badge, icon, description, and staggered entry animation.
 */
export default function LinkCard({ link, index }) {
  const { title, description, url, icon, badge, badgeColor, highlight } = link;

  // Staggered entry animation delay calculation
  const animationDelay = 150 + index * 100;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ animationDelay: `${animationDelay}ms` }}
      className={`group w-full flex items-center p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 transform antigravity-card animate-fade-in-up relative overflow-hidden ${highlight
          ? 'bg-gradient-to-r from-cyan-950/40 via-cyan-900/20 to-slate-900/60 border-cyan-500/40 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20'
          : 'bg-slate-800/40 hover:bg-slate-800/80 border-slate-700/50 hover:border-slate-500/60 hover:shadow-lg hover:shadow-slate-950/40'
        }`}
    >
      {/* Background Pulse Glow for Highlighted Links */}
      {highlight && (
        <div className="absolute inset-0 bg-cyan-500/5 animate-pulse pointer-events-none" />
      )}

      {/* Icon Container */}
      {icon && (
        <div
          className={`p-2.5 sm:p-3 rounded-xl flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${highlight ? 'bg-cyan-500/15 text-cyan-400' : 'bg-slate-900/70 text-slate-300 group-hover:text-cyan-400'
            }`}
        >
          {icon}
        </div>
      )}

      {/* Text Content */}
      <div className="ml-3.5 flex-grow pr-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
            {title}
          </span>
          {badge && (
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${badgeColor || 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                }`}
            >
              {badge}
            </span>
          )}
        </div>
        {description && (
          <p className="text-slate-400 text-xs mt-1 leading-snug group-hover:text-slate-300 transition-colors duration-300">
            {description}
          </p>
        )}
      </div>

      {/* Arrow Indicator */}
      <div className="flex-shrink-0 text-slate-500 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
        <FiArrowUpRight className="text-lg sm:text-xl" />
      </div>
    </a>
  );
}
