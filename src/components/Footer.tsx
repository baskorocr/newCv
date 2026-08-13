import React from 'react';
import { Github, Linkedin, Globe, Mail, ArrowUp, Send, Phone } from 'lucide-react';
import { PERSONAL_DATA } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center font-mono font-bold text-white text-sm">
                MB
              </div>
              <div>
                <div className="font-bold text-white text-sm">{PERSONAL_DATA.name}</div>
                <div className="text-[11px] font-mono text-slate-500">S.Kom · Fullstack & IoT</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              IT Development (Fullstack) & IoT Specialist di Dharma Group. Spesialis enterprise software, EV Charging OCPP, dan industrial automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">Navigasi</div>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                ['Tentang', '#about'],
                ['Pengalaman', '#experience'],
                ['Proyek', '#projects'],
                ['Keahlian', '#skills'],
                ['Prestasi', '#achievements'],
                ['Publikasi', '#publication'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs text-slate-500 hover:text-indigo-400 transition-colors py-0.5"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">Kontak</div>
            <div className="space-y-2">
              <a href={`mailto:${PERSONAL_DATA.email}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                {PERSONAL_DATA.email}
              </a>
              <a href={PERSONAL_DATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-400 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                {PERSONAL_DATA.phone}
              </a>
              <a href={PERSONAL_DATA.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-400 transition-colors">
                <Globe className="w-3.5 h-3.5" />
                syncbas.my.id
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-4">
              {[
                { icon: Github, href: PERSONAL_DATA.github, label: 'GitHub' },
                { icon: Linkedin, href: PERSONAL_DATA.linkedin, label: 'LinkedIn' },
                { icon: Send, href: PERSONAL_DATA.telegramUrl, label: 'Telegram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-slate-600 font-mono">
            © {new Date().getFullYear()} Mahesa Putra Baskoro C.R. All rights reserved.
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-600 font-mono flex items-center gap-1.5">
              Built with
              <span className="text-indigo-400">React</span> ·
              <span className="text-violet-400">Vite</span> ·
              <span className="text-blue-400">Tailwind</span>
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
