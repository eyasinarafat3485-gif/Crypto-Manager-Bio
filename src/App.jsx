import React, { useState, useEffect } from 'react';
import BioLayout from './components/BioLayout';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import ThemeSwitcher from './components/ThemeSwitcher';

// Icon imports from react-icons
import { FaTelegramPlane, FaHandshake } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiBinance, SiCoinmarketcap } from 'react-icons/si';
import { FiMic, FiList } from 'react-icons/fi';

// =======================
// 🔗 EXACT LINK ITEMS MATCHING YOUR REFERENCE
// ======================
const LINKS = [
  {
    id: 1,
    title: '📲 DM FOR AMA/PROPOSAL TG',
    url: 'https://t.me/EdgeHonestAMA',
    icon: <FaHandshake className="text-xl text-emerald-400" />,
    avatar: '/placeholder-manager.jpeg',
    badge: 'Direct DM',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    highlight: true,
  },
  {
    id: 2,
    title: 'TELEGRAM COMMUNITY',
    url: 'https://t.me/StrikeLabsChat',
    icon: <FaTelegramPlane className="text-xl text-sky-400" />,
    badge: 'Community',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  },
  {
    id: 3,
    title: 'TELEGRAM CHANNEL',
    url: 'https://t.me/StrikeLabsNews',
    icon: <FaTelegramPlane className="text-xl text-sky-400" />,
    badge: 'Announcements',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  },
  {
    id: 4,
    title: 'X - TWITTER',
    url: 'https://x.com/EdgeHonestAMA',
    icon: <FaXTwitter className="text-xl text-slate-100" />,
    badge: 'Twitter Spaces',
    badgeColor: 'bg-slate-700/30 text-slate-200 border-slate-600/30',
  },
  {
    id: 5,
    title: 'BINANCE SQUARE LIVE 62K+',
    url: 'https://app.binance.com/uni-qr/cpro/CityCryptoNews',
    icon: <SiBinance className="text-xl text-amber-400" />,
    badge: 'Binance Live',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    id: 6,
    title: 'COINMARKETCAP COMMUNITY 300K+',
    url: 'https://coinmarketcap.com/community/profile/Strike_Labs',
    icon: <SiCoinmarketcap className="text-xl text-blue-400" />,
    badge: 'CMC Live',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    id: 7,
    title: 'BINANCE AMA RECAP',
    url: 'https://t.me/StrikeLabsNews/12570',
    icon: <SiBinance className="text-xl text-cyan-400" />,
    badge: 'Live Video Recap',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  {
    id: 8,
    title: 'X - SPACE AMA RECAP',
    url: 'https://t.me/StrikeLabsNews/12572',
    icon: <FiMic className="text-xl text-cyan-400" />,
    badge: 'Audio Recap',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  {
    id: 9,
    title: 'TELEGRAM AMA RECAP',
    url: 'https://t.me/StrikeLabsNews/12393',
    icon: <FaTelegramPlane className="text-xl text-sky-400" />,
    badge: 'TELEGRAM AMA',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  },
  {
    id: 10,
    title: 'TEXT AMA RECAP',
    url: 'https://t.me/StrikeLabsNews/12502',
    icon: <FaTelegramPlane className="text-xl text-purple-400" />,
    badge: 'Text AMA Recap',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
  {
    id: 11,
    title: 'OFFICIAL KOL CHANNEL LIST',
    url: 'https://t.me/GlobalTopKols',
    icon: <FiList className="text-xl text-pink-400" />,
    badge: 'KOL List',
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  },
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('bio_page_theme') || 'nebula';
  });

  const handleSelectTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('bio_page_theme', newTheme);
  };

  return (
    <BioLayout currentTheme={theme}>
      {/* Background Theme Selector Widget */}
      <ThemeSwitcher currentTheme={theme} onSelectTheme={handleSelectTheme} />

      {/* 1. Profile Header Section */}
      <ProfileHeader animationDelay={0} currentTheme={theme} />

      {/* 2. Dynamic Link Buttons Stack */}
      <div className="w-full flex flex-col gap-3 mt-2">
        {LINKS.map((link, index) => (
          <LinkCard key={link.id || index} link={link} index={index} currentTheme={theme} />
        ))}
      </div>

      {/* 3. Footer Branding Section */}
      <footer className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-center text-center">
        <a
          href="https://t.me/EdgeHonestAMA"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-sm text-slate-200 hover:text-cyan-400 transition-colors tracking-wide"
        >
          Contact Community Manager
        </a>
      </footer>
    </BioLayout>
  );
}
