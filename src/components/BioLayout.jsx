import React from 'react';

/**
 * BioLayout Component
 * Responsive, mobile-first container with max-width 480px,
 * featuring a sleek dark tech/crypto aesthetic with ambient glow effects.
 */
export default function BioLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-[#0b0f17] text-slate-100 flex items-center justify-center p-3 sm:p-6 py-6 sm:py-10 relative overflow-x-hidden font-sans">
      {/* Background Ambient Glow Accents (Tech/Crypto Aesthetic) */}
      <div
        className="absolute -top-32 -left-32 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Minimalist Grid Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Mobile-First Card Container (Max-Width 480px) */}
      <main className="w-full max-w-[480px] bg-slate-900/70 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-5 sm:p-8 shadow-2xl relative z-10 flex flex-col gap-6 my-auto">
        {children}
      </main>
    </div>
  );
}
