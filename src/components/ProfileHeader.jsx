import React from 'react';
import { FaCheckCircle, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

/**
 * Default Social Media Links Configuration
 */
const DEFAULT_SOCIALS = [
  {
    name: 'Telegram Manager',
    url: 'https://t.me/EdgeHonestAMA',
    icon: <FaTelegramPlane className="text-lg text-sky-400 group-hover:text-white transition-colors" />,
    color: 'hover:bg-sky-500/20 hover:border-sky-500/40 hover:shadow-sky-500/20',
  },

  {
    name: 'Instagram',
    url: 'https://www.instagram.com/edgehonestama',
    icon: <FaInstagram className="text-lg text-pink-400 group-hover:text-white transition-colors" />,
    color: 'hover:bg-pink-500/20 hover:border-pink-500/40 hover:shadow-pink-500/20',
  },
];

/**
 * ProfileHeader Component
 * Includes profile picture, verified badge, bio with clickable channel links, and social icon row.
 */
export default function ProfileHeader({
  avatarUrl = "/placeholder-manager.jpeg",
  name = "Edge (Influencer)",
  handle = "@EdgeHonestAMA",
  isVerified = true,
  socials = DEFAULT_SOCIALS,
  animationDelay = 0,
}) {
  return (
    <div
      className="flex flex-col items-center text-center w-full animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Avatar Wrapper with Smooth Glowing Border */}
      <div className="relative group cursor-pointer">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-40 blur-md group-hover:opacity-85 transition duration-500" />
        <img
          src={avatarUrl}
          alt={name}
          className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-slate-800/90 shadow-2xl group-hover:scale-[1.03] transition-transform duration-300"
        />
        {/* Status Dot */}
        <span
          className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full animate-pulse"
          title="Online & Active"
        />
      </div>

      {/* Profile Name & Verified Badge */}
      <div className="mt-4 flex items-center justify-center gap-1.5 flex-wrap">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
          {name}
        </h1>
        {isVerified && (
          <FaCheckCircle
            className="text-cyan-400 text-lg sm:text-xl shrink-0"
            title="Verified Official Account"
          />
        )}
      </div>

      {/* Profile Handle (Normal Case preserved) */}
      <p className="mt-1 text-xs font-semibold text-cyan-400/90 tracking-wider">
        {handle}
      </p>

      {/* Bio Text with Clickable Telegram Channel Link */}
      <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-sm px-2">
        I'm from{' '}
        <a
          href="https://t.me/StrikeLabsChat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 font-semibold underline decoration-cyan-500/40 hover:decoration-cyan-400 transition-colors"
        >
          @StrikeLabsChat
        </a>{' '}
        &{' '}
        <a
          href="https://t.me/GlobalTopKols"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 font-semibold underline decoration-cyan-500/40 hover:decoration-cyan-400 transition-colors"
        >
          @GlobalTopKols
        </a>{' '}
        KOLs cm. Always prefer best promotion #Fundraise #Binance_Video_Live_Text_Voice_X_Space DM ME 24/7
      </p>

      {/* Social Icons Row */}
      <div className="mt-5 flex items-center justify-center gap-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            className={`group w-11 h-11 rounded-full bg-slate-800/60 border border-slate-700/60 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg ${social.color}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
