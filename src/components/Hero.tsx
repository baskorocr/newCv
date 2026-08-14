import React, { useState } from 'react';
import { motion, Easing } from 'framer-motion';
import {
  Mail, Phone, Github, Linkedin, Globe, Send,
  Check, Copy, ArrowUpRight, Layers, Cpu, ChevronDown,
  Star,
  Code2, Database, Server, Wifi, Smartphone, Shield
} from 'lucide-react';
import { PERSONAL_DATA } from '@/lib/data';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as Easing },
});

const TECH_MARQUEE = [
  { name: 'Laravel', icon: Code2 },
  { name: 'React.js', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'OCPP Protocol', icon: Wifi },
  { name: 'ESP32 / IoT', icon: Smartphone },
  { name: 'Docker', icon: Shield },
  { name: 'Vue.js', icon: Code2 },
];

export function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="overflow-hidden">

      {/* ── Glassmorphism Dark Hero ── */}
      <div className="relative w-full bg-zinc-950 text-white overflow-hidden">
        <style>{`
          @keyframes heroFadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroMarquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .hero-fade { animation: heroFadeIn 0.8s ease-out forwards; opacity: 0; }
          .hero-marquee { animation: heroMarquee 35s linear infinite; }
          .hd-1 { animation-delay: 0.1s; }
          .hd-2 { animation-delay: 0.2s; }
          .hd-3 { animation-delay: 0.3s; }
          .hd-4 { animation-delay: 0.4s; }
          .hd-5 { animation-delay: 0.5s; }
        `}</style>

        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80)`,
            maskImage: 'linear-gradient(180deg, transparent, black 10%, black 70%, transparent)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent, black 10%, black 70%, transparent)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-20 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

            {/* ── Left: Identity ── */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-4">

              {/* Badge */}
              <div className="hero-fade hd-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                    Available for Opportunities
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono">2023 – Present</span>
                </div>
              </div>

              {/* Name */}
              <h1
                className="hero-fade hd-2 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9]"
                style={{
                  maskImage: 'linear-gradient(180deg, black 0%, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(180deg, black 0%, black 80%, transparent 100%)',
                }}
              >
                Mahesa Putra<br />
                <span className="bg-gradient-to-br from-white via-white to-indigo-300 bg-clip-text text-transparent">
                  Baskoro C.R
                </span>
              </h1>

              {/* Title + Location */}
              <div className="hero-fade hd-3 space-y-1">
                <p className="text-lg sm:text-xl font-semibold text-zinc-300">
                  {PERSONAL_DATA.title}
                </p>
                <p className="text-sm text-zinc-500 font-mono">
                  📍 {PERSONAL_DATA.location}
                </p>
              </div>

              {/* Bio */}
              <div className="hero-fade hd-3 space-y-4">
                <p className="max-w-xl text-base text-zinc-400 leading-relaxed">
                  Sarjana Komputer (<span className="text-white font-semibold">S.Kom</span>) Universitas Amikom Yogyakarta,
                  spesialisasi <span className="text-white font-semibold">RPL & IoT</span>.
                  IT Development & IoT Specialist di <span className="text-white font-semibold">Dharma Group</span> —
                  merancang ekosistem <span className="text-indigo-300 font-semibold">EV Charging OCPP</span>,
                  HMI manufaktur, e-Procurement, dan supply chain end-to-end.
                  Peraih <span className="text-yellow-400 font-semibold">Juara 1 SOP</span>,{' '}
                  <span className="text-yellow-400 font-semibold">Juara 2 QCP LCA</span>, dan{' '}
                  <span className="text-yellow-400 font-semibold">Juara 2 KIDP XVIII 2025</span>.
                </p>

                {/* Tech marquee inline */}
                <div
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-3 backdrop-blur-xl"
                >
                  <div
                    className="relative flex overflow-hidden"
                    style={{
                      maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    }}
                  >
                    <div className="hero-marquee flex gap-8 whitespace-nowrap px-4">
                      {[...TECH_MARQUEE, ...TECH_MARQUEE, ...TECH_MARQUEE].map((t, i) => (
                        <div key={i} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
                          <t.icon className="h-4 w-4 text-white" />
                          <span className="text-sm font-semibold text-white tracking-tight">{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="hero-fade hd-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
                >
                  <Layers className="w-4 h-4" />
                  Lihat Proyek
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#experience"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
                >
                  <Cpu className="w-4 h-4" />
                  Pengalaman Kerja
                </a>
              </div>
            </div>

            {/* ── Right: placeholder ── */}
            <div className="lg:col-span-5" />
          </div>
        </div>
      </div>

      {/* ── ContainerScroll: Stats + Email + Social ── */}
      <div className="bg-white">
        <ContainerScroll
          titleComponent={
            <div className="mb-4">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Quick Overview</p>
              <h2 className="editorial-heading text-3xl sm:text-4xl text-slate-900">
                Statistik & <span className="text-indigo-600">Kontak Langsung</span>
              </h2>
              <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
                Scroll untuk melihat ringkasan pencapaian dan cara terbaik menghubungi saya.
              </p>
            </div>
          }
        >
          <div className="h-full w-full flex flex-col gap-4 overflow-y-auto p-2">

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PERSONAL_DATA.stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 p-4 text-center shadow-sm hover:border-indigo-200 hover:shadow-md transition-all">
                  <div className="stat-number text-2xl">{stat.value}</div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1 leading-tight">
                    {stat.suffix}<br />{stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Email + Social */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <button
                onClick={copyEmail}
                className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3 cursor-pointer text-left group hover:border-indigo-200 hover:shadow-md transition-all col-span-1 sm:col-span-2 lg:col-span-1"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
                  {copiedEmail
                    ? <Check className="w-4 h-4 text-green-600" />
                    : <Mail className="w-4 h-4 text-indigo-600" />
                  }
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</div>
                  <div className="text-xs font-mono text-slate-700 truncate">{PERSONAL_DATA.email}</div>
                </div>
                <Copy className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-400 shrink-0 transition-colors" />
              </button>

              {[
                { icon: Phone, label: 'WhatsApp', value: PERSONAL_DATA.phone, href: PERSONAL_DATA.whatsappUrl },
                { icon: Github, label: 'GitHub', value: 'baskorocr', href: PERSONAL_DATA.github },
                { icon: Linkedin, label: 'LinkedIn', value: 'Mahesa Baskoro', href: PERSONAL_DATA.linkedin },
                { icon: Globe, label: 'Website', value: 'syncbas.my.id', href: PERSONAL_DATA.website },
                { icon: Send, label: 'Telegram', value: 'Telegram', href: PERSONAL_DATA.telegramUrl },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3 group hover:border-indigo-200 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-50 transition-colors border border-slate-100">
                    <Icon className="w-4 h-4 text-slate-500 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</div>
                    <div className="text-xs font-medium text-slate-700 truncate">{value}</div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-500 shrink-0 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </ContainerScroll>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center pb-12 bg-white -mt-16">
        <a href="#experience" className="flex flex-col items-center gap-1.5 text-slate-300 hover:text-indigo-500 transition-colors">
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
