import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import splashGif from '@/assets/169002406-61da59ca-13d0-45c4-ac9c-bc610014c75e.gif';

interface SplashScreenProps {
  onComplete: () => void;
}

const DURATION = 1800;

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const barRef      = useRef<HTMLDivElement>(null);
  const pctRef      = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const pct = Math.min(((now - start) / DURATION) * 100, 100);
      if (barRef.current)  barRef.current.style.width = `${pct}%`;
      if (pctRef.current)  pctRef.current.textContent = `${Math.round(pct)}%`;

      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            containerRef.current.style.opacity = '0';
            containerRef.current.style.transform = 'scale(1.04)';
          }
          setTimeout(onComplete, 500);
        }, 150);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      <div className="relative flex flex-col items-center gap-8">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 blur-2xl scale-110" />
          <img
            src={splashGif}
            alt="Loading"
            width={160}
            height={160}
            className="relative w-40 h-40 object-contain rounded-2xl"
            draggable={false}
          />
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Mahesa Putra Baskoro
          </h1>
          <p className="text-sm text-zinc-500 font-mono tracking-widest uppercase">
            Fullstack Developer · IoT Specialist
          </p>
        </div>

        <div className="w-64 sm:w-80 space-y-2">
          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
            <div
              ref={barRef}
              className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-400 rounded-full"
              style={{ width: '0%' }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Initializing</span>
            <span ref={pctRef} className="text-[10px] font-mono text-zinc-500">0%</span>
          </div>
        </div>
      </div>

      <p className="absolute bottom-8 text-[10px] font-mono text-zinc-700 tracking-widest uppercase">
        syncbas.my.id
      </p>
    </div>
  );
}
