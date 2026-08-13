import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Download, Menu, X, Briefcase, Code2, Trophy, BookOpen, UserCheck, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '@/lib/data';

interface NavbarProps {
  onToggleTerminal: () => void;
}

export function Navbar({ onToggleTerminal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['about', 'experience', 'projects', 'skills', 'achievements', 'publication'];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const links = [
    { label: 'Tentang', href: '#about', icon: UserCheck, id: 'about' },
    { label: 'Pengalaman', href: '#experience', icon: Briefcase, id: 'experience' },
    { label: 'Proyek', href: '#projects', icon: Code2, id: 'projects' },
    { label: 'Keahlian', href: '#skills', icon: Sparkles, id: 'skills' },
    { label: 'Prestasi', href: '#achievements', icon: Trophy, id: 'achievements' },
    { label: 'Publikasi', href: '#publication', icon: BookOpen, id: 'publication' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
        : 'bg-white/60 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">

        {/* Brand */}
        <a href="#about" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-mono font-bold text-white text-xs shadow-sm group-hover:bg-indigo-700 transition-colors">
            MB
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
              Mahesa Baskoro
            </div>
            <div className="text-[10px] text-slate-400 font-mono leading-tight">Fullstack & IoT</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map(({ label, href, id }) => (
            <a
              key={id}
              href={href}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeSection === id
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={onToggleTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all border border-slate-200 cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal</span>
            <kbd className="hidden xl:inline text-[9px] bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded border border-slate-200">~</kbd>
          </button>
          <a
            href="/src/assets/CV_Mahesa_Putra_Baskoro_New.pdf"
            download
            className="btn-primary py-1.5 px-4 text-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={onToggleTerminal} className="p-2 rounded-lg border border-slate-200 text-slate-500 cursor-pointer">
            <Terminal className="w-4 h-4" />
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-lg border border-slate-200 text-slate-500 cursor-pointer">
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 pb-4"
          >
            <div className="pt-2 flex flex-col gap-1">
              {links.map(({ label, href, icon: Icon, id }) => (
                <a
                  key={id}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === id
                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 mt-1">
                <a
                  href="/src/assets/CV_Mahesa_Putra_Baskoro_New.pdf"
                  download
                  className="btn-primary w-full justify-center text-xs cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
