import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { THEMES } from './ThemeSwitcher';

/**
 * LinkCard Component
 * Renders an individual full-width link button with modern lift hover effects,
 * optional badge, icon, description, dynamic theme accenting, and staggered entry animation.
 */
export default function LinkCard({ link, index, currentTheme = 'nebula' }) {
  const { title, description, url, icon, avatar, badge, badgeColor, highlight } = link;
  const activeTheme = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  // Staggered entry animation delay calculation
  const animationDelay = 150 + index * 100;

  return (
    <div
      style={{ animationDelay: `${animationDelay}ms` }}
      className="w-full animate-fade-in-up"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group w-full flex items-center p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 transform antigravity-card relative overflow-hidden ${
          highlight
            ? 'bg-gradient-to-r from-emerald-950/90 via-slate-900/95 to-emerald-950/90 border-emerald-500/80 shadow-lg animate-dm-attention z-10'
            : `bg-slate-900/50 hover:bg-slate-800/80 border-slate-800/80 ${activeTheme.borderGlow} hover:shadow-lg`
        }`}
      >
        {/* Animated Shimmer Sweep for Highlighted DM Link */}
        {highlight && <div className="shimmer-effect" />}

        {/* Background Pulse Glow for Highlighted Links */}
        {highlight && (
          <div className="absolute inset-0 bg-emerald-500/5 animate-pulse pointer-events-none" />
        )}

        {/* Icon / Avatar Container */}
        {(avatar || icon) && (
          <div
            className={`rounded-xl flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 relative ${
              avatar ? 'p-1' : 'p-2.5 sm:p-3'
            } ${
              highlight
                ? 'bg-emerald-950/90 text-emerald-400 border border-emerald-500/50 shadow-inner'
                : 'bg-slate-950/70 text-slate-300 group-hover:text-white'
            }`}
          >
            {highlight && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3 z-20">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            )}
            {avatar ? (
              <img
                src={avatar}
                alt={title}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-cover border border-emerald-400/50 shadow-sm"
              />
            ) : (
              icon
            )}
          </div>
        )}

        {/* Text Content */}
        <div className="ml-3.5 flex-grow pr-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`font-bold text-sm sm:text-base transition-colors duration-300 leading-tight ${
                highlight
                  ? 'text-emerald-300 group-hover:text-white drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]'
                  : 'text-slate-100 group-hover:text-white'
              }`}
            >
              {title}
            </span>
            {badge && (
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border flex items-center gap-1.5 ${
                  badgeColor || 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                {highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                )}
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
        <div
          className={`flex-shrink-0 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
            highlight ? 'text-emerald-400 group-hover:text-white' : 'text-slate-500 group-hover:text-white'
          }`}
        >
          <FiArrowUpRight className="text-lg sm:text-xl" />
        </div>
      </a>
    </div>
  );
}
