import React from 'react';
import { THEMES } from './ThemeSwitcher';

/**
 * BioLayout Component
 * Responsive, mobile-first container with max-width 480px,
 * featuring customizable sleek dark tech/crypto ambient glow themes.
 */
export default function BioLayout({ children, currentTheme = 'nebula' }) {
  const activeTheme = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  return (
    <div
      className={`min-h-screen w-full ${activeTheme.bg} text-slate-100 flex items-center justify-center p-3 sm:p-6 py-6 sm:py-10 relative overflow-x-hidden font-sans transition-colors duration-700`}
    >
      {/* Background Ambient Glow Accents */}
      <div
        className={`absolute -top-36 -left-36 w-96 h-96 rounded-full ${activeTheme.primaryOrb} blur-[120px] pointer-events-none transition-all duration-700`}
        aria-hidden="true"
      />
      <div
        className={`absolute -bottom-36 -right-36 w-96 h-96 rounded-full ${activeTheme.secondaryOrb} blur-[120px] pointer-events-none transition-all duration-700`}
        aria-hidden="true"
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full ${activeTheme.accentOrb} blur-[130px] pointer-events-none transition-all duration-700`}
        aria-hidden="true"
      />

      {/* Minimalist Tech Grid Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Mobile-First Card Container (Max-Width 480px) */}
      <main
        className={`w-full max-w-[480px] ${activeTheme.cardBg} rounded-3xl p-5 sm:p-8 shadow-2xl relative z-10 flex flex-col gap-6 my-auto transition-all duration-500 border`}
      >
        {children}
      </main>
    </div>
  );
}
