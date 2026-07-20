import React, { useState } from 'react';
import { FaPalette, FaCheck, FaChevronDown } from 'react-icons/fa6';

export const THEMES = [
  {
    id: 'nebula',
    name: 'Nebula Violet',
    bg: 'bg-[#0b0813]',
    cardBg: 'bg-purple-950/40 backdrop-blur-2xl border-purple-800/40',
    primaryOrb: 'bg-purple-600/20',
    secondaryOrb: 'bg-pink-600/20',
    accentOrb: 'bg-indigo-500/15',
    accentText: 'text-purple-400',
    borderGlow: 'hover:border-purple-500/50 hover:shadow-purple-500/20',
    gradientAvatar: 'from-purple-500 via-pink-500 to-indigo-500',
    dot: 'bg-purple-500',
  },
  {
    id: 'emerald',
    name: 'Emerald Aurora',
    bg: 'bg-[#06120e]',
    cardBg: 'bg-emerald-950/40 backdrop-blur-2xl border-emerald-800/40',
    primaryOrb: 'bg-emerald-500/20',
    secondaryOrb: 'bg-teal-500/20',
    accentOrb: 'bg-cyan-500/15',
    accentText: 'text-emerald-400',
    borderGlow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/20',
    gradientAvatar: 'from-emerald-400 via-teal-500 to-cyan-500',
    dot: 'bg-emerald-500',
  },
  {
    id: 'cyan',
    name: 'Cyber Cyan',
    bg: 'bg-[#080d1a]',
    cardBg: 'bg-slate-900/60 backdrop-blur-2xl border-cyan-800/40',
    primaryOrb: 'bg-cyan-500/20',
    secondaryOrb: 'bg-blue-600/20',
    accentOrb: 'bg-indigo-500/15',
    accentText: 'text-cyan-400',
    borderGlow: 'hover:border-cyan-500/50 hover:shadow-cyan-500/20',
    gradientAvatar: 'from-cyan-400 via-blue-500 to-indigo-600',
    dot: 'bg-cyan-400',
  },
  {
    id: 'ruby',
    name: 'Sunset Ruby',
    bg: 'bg-[#14080e]',
    cardBg: 'bg-rose-950/40 backdrop-blur-2xl border-rose-800/40',
    primaryOrb: 'bg-rose-500/20',
    secondaryOrb: 'bg-orange-500/20',
    accentOrb: 'bg-purple-500/15',
    accentText: 'text-rose-400',
    borderGlow: 'hover:border-rose-500/50 hover:shadow-rose-500/20',
    gradientAvatar: 'from-rose-500 via-orange-500 to-amber-500',
    dot: 'bg-rose-500',
  },
  {
    id: 'gold',
    name: 'Luxury Amber',
    bg: 'bg-[#120f0a]',
    cardBg: 'bg-amber-950/40 backdrop-blur-2xl border-amber-800/40',
    primaryOrb: 'bg-amber-500/20',
    secondaryOrb: 'bg-yellow-600/15',
    accentOrb: 'bg-orange-600/15',
    accentText: 'text-amber-400',
    borderGlow: 'hover:border-amber-500/50 hover:shadow-amber-500/20',
    gradientAvatar: 'from-amber-400 via-yellow-500 to-orange-500',
    dot: 'bg-amber-400',
  },
];

export default function ThemeSwitcher({ currentTheme, onSelectTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const activeThemeObj = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  return (
    <div className="relative z-50 flex justify-center w-full mb-2">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-lg hover:border-slate-500/80 text-xs font-medium text-slate-200 transition-all cursor-pointer backdrop-blur-md"
          title="Change Background Theme"
        >
          <FaPalette className={`text-sm ${activeThemeObj.accentText}`} />
          <span>Theme: <span className="font-semibold text-white">{activeThemeObj.name}</span></span>
          <span className={`w-2.5 h-2.5 rounded-full ${activeThemeObj.dot} shadow-sm`} />
          <FaChevronDown className={`text-[10px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <>
            {/* Backdrop click listener */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl p-1.5 z-50 backdrop-blur-xl animate-fade-in-up">
              <div className="px-2 py-1 text-[10px] font-semibold tracking-wider text-slate-400 uppercase border-b border-slate-800/80 mb-1">
                Select BG Theme
              </div>
              {THEMES.map((t) => {
                const isSelected = t.id === currentTheme;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      onSelectTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-800 text-white shadow-inner'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${t.dot}`} />
                      <span>{t.name}</span>
                    </div>
                    {isSelected && <FaCheck className="text-emerald-400 text-xs" />}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
