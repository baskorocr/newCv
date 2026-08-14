import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Trophy, BookOpen, Briefcase } from 'lucide-react';
import baPhoto from '@/assets/ba.png';
import awardsPhoto from '@/assets/753343971_18611968543018580_8668398822863595065_n (1).jpg';
import techVideo from '@/assets/tech.mp4';
import projectVideo from '@/assets/project.mp4';

interface CinematicIntroProps {
  onEnter: () => void;
}

const AUTO_INTERVAL = 5000; // 5s per chapter

const CHAPTERS = [
  {
    id: '01',
    label: 'About Me',
    sub: 'Who I Am',
    icon: Briefcase,
    href: '#about',
    // user photo
    media: baPhoto,
    mediaType: 'image' as const,
    title: 'Code.\nBuild.\nDeploy.',
    desc: 'Fullstack Developer & IoT Specialist — membangun solusi digital dari backend hingga hardware, web app hingga embedded system.',
    accent: '#6366f1',
  },
  {
    id: '02',
    label: 'Experience',
    sub: 'Dharma Group',
    icon: Briefcase,
    href: '#experience',
    media: techVideo,
    mediaType: 'video' as const,
    title: 'Real\nWorld\nImpact.',
    desc: 'IT Development & IoT Specialist — merancang sistem EV Charging OCPP, HMI manufaktur, dan supply chain end-to-end.',
    accent: '#3b82f6',
  },
  {
    id: '03',
    label: 'Projects',
    sub: 'Live Repos',
    icon: Code2,
    href: '#projects',
    media: projectVideo,
    mediaType: 'video' as const,
    title: 'Ship.\nIterate.\nScale.',
    desc: 'Proyek open-source dan production — dari REST API, dashboard IoT, hingga sistem e-Procurement enterprise.',
    accent: '#8b5cf6',
  },
  {
    id: '04',
    label: 'Tech Stack',
    sub: 'IoT & Web',
    icon: Cpu,
    href: '#skills',
    media: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    mediaType: 'image' as const,
    title: 'Full\nStack.\nFull\nControl.',
    desc: 'Laravel, React, Node.js, PostgreSQL, ESP32, OCPP Protocol, Docker — dari firmware hingga cloud infrastructure.',
    accent: '#f59e0b',
  },
  {
    id: '05',
    label: 'Achievements',
    sub: 'Awards',
    icon: Trophy,
    href: '#achievements',
    media: awardsPhoto,
    mediaType: 'image' as const,
    title: 'Proven.\nRecognized.\nAwarded.',
    desc: 'Juara 1 SOP, Juara 2 QCP LCA, Juara 2 KIDP XVIII 2025 — kompetisi inovasi tingkat industri.',
    accent: '#eab308',
  },
  {
    id: '06',
    label: 'Publication',
    sub: 'Research',
    icon: BookOpen,
    href: '#publication',
    media: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80',
    mediaType: 'image' as const,
    title: 'Research.\nPublish.\nContribute.',
    desc: 'Publikasi ilmiah di bidang IoT dan sistem embedded — kontribusi nyata pada ekosistem teknologi Indonesia.',
    accent: '#10b981',
  },
];

export function CinematicIntro({ onEnter }: CinematicIntroProps) {
  const [active, setActive]     = useState(0);
  const [prev, setPrev]         = useState<number | null>(null);
  const [exiting, setExiting]   = useState(false);
  const [ready, setReady]       = useState(false);
  const [progress, setProgress] = useState(0);
  const navRef   = useRef<HTMLDivElement>(null);
  const itemRefs  = useRef<(HTMLButtonElement | null)[]>([]);
  const rafRef    = useRef<number>(0);
  const startRef  = useRef<number>(0);

  useEffect(() => {
    const el = itemRefs.current[active];
    if (el && navRef.current) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [active]);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  // progress bar + auto-advance
  useEffect(() => {
    setProgress(0);
    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const pct = Math.min((elapsed / AUTO_INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        goNext();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  const goTo = (i: number) => {
    cancelAnimationFrame(rafRef.current);
    setPrev(active);
    setActive(i);
  };

  const goNext = () => goTo((active + 1) % CHAPTERS.length);

  const handleEnter = () => {
    cancelAnimationFrame(rafRef.current);
    setExiting(true);
    setTimeout(onEnter, 900);
  };

  const ch = CHAPTERS[active];

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="cinematic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9998] overflow-hidden bg-zinc-950 text-white"
        >
          {/* ── Background media (crossfade) ── */}
          <AnimatePresence mode="sync">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {ch.mediaType === 'video' ? (
                  <video
                    key={ch.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute right-0 top-0 h-full w-[60%] object-cover"
                    style={{
                      maskImage: 'linear-gradient(to left, black 35%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to left, black 35%, transparent 100%)',
                    }}
                  >
                    <source src={ch.media} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={ch.media}
                    alt=""
                    className="absolute right-0 top-0 h-full w-[60%] object-cover"
                    style={{
                      objectPosition: active === 0 ? '50% 10%' : 'center',
                      maskImage: 'linear-gradient(to left, black 35%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to left, black 35%, transparent 100%)',
                    }}
                  />
                )}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-zinc-950 to-transparent" />
              {/* accent color tint */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 70% 40%, ${ch.accent}, transparent 60%)` }}
              />
            </motion.div>
          </AnimatePresence>

          {/* ── Scan lines ── */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)',
            }}
          />

          {/* ── HUD corners ── */}
          <div className="absolute top-6 left-6 flex items-center gap-2 opacity-50">
            <div className="w-5 h-5 border-t-2 border-l-2 border-indigo-400" />
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-indigo-300">Portfolio v2025</span>
          </div>
          <div className="absolute top-6 right-6 flex items-center gap-2 opacity-40">
            <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-zinc-500">syncbas.my.id</span>
            <div className="w-5 h-5 border-t-2 border-r-2 border-zinc-600" />
          </div>

          {/* ── Main content ── */}
          <div className="relative z-10 flex flex-col justify-between h-full px-8 sm:px-14 lg:px-20 py-16">

            {/* Top label */}
            <motion.p
              key={`label-${active}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[10px] font-mono tracking-[0.35em] uppercase text-indigo-400"
            >
              Mahesa Putra Baskoro C.R — Fullstack & IoT Specialist
            </motion.p>

            {/* Middle: title + desc + CTA */}
            <div className="space-y-6 max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${active}`}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.88] uppercase whitespace-pre-line"
                    style={{ color: 'white' }}
                  >
                    {ch.title.split('\n').map((line, i) => (
                      <span key={i} style={{ color: i === 1 ? ch.accent : 'white' }}>
                        {line}{'\n'}
                      </span>
                    ))}
                  </h1>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${active}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                  className="text-sm text-zinc-400 leading-relaxed max-w-md"
                >
                  {ch.desc}
                </motion.p>
              </AnimatePresence>

              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
                style={{ borderColor: `${ch.accent}40` }}
              >
                <span>Enter Portfolio</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>

            {/* Bottom: chapter nav */}
            <div ref={navRef} className="flex gap-0 overflow-x-auto scrollbar-none" style={{ scrollbarWidth: 'none' }}>
              {CHAPTERS.map((c, i) => (
                <button
                  key={c.id}
                  ref={el => { itemRefs.current[i] = el; }}
                  onClick={() => goTo(i)}
                  className="group relative flex items-center gap-3 px-4 py-3 min-w-[130px] sm:min-w-[150px] transition-all duration-200 border-t-2"
                  style={{
                    borderColor: active === i ? ch.accent : 'rgba(255,255,255,0.08)',
                    background: active === i ? 'rgba(255,255,255,0.05)' : 'transparent',
                  }}
                >
                  {/* thumbnail */}
                  <div className="w-10 h-10 rounded overflow-hidden shrink-0 border border-white/10">
                    {c.mediaType === 'video' ? (
                      <video
                        src={c.media}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={c.media}
                        alt={c.label}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: i === 0 ? '50% 10%' : 'center' }}
                      />
                    )}
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-[9px] font-mono" style={{ color: active === i ? ch.accent : '#52525b' }}>
                      {c.id}
                    </div>
                    <div className={`text-xs font-bold leading-tight truncate ${active === i ? 'text-white' : 'text-zinc-400'}`}>
                      {c.label}
                    </div>
                    <div className="text-[9px] text-zinc-600 truncate">{c.sub}</div>
                  </div>

                  {/* active progress bar */}
                  {active === i && (
                    <div className="absolute bottom-0 left-0 h-[2px] bg-white/10 w-full">
                      <div
                        className="h-full transition-none"
                        style={{ width: `${progress}%`, background: ch.accent }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
