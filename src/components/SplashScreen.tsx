import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import splashGif from '@/assets/169002406-61da59ca-13d0-45c4-ac9c-bc610014c75e.gif';

interface SplashScreenProps {
  onComplete: () => void;
}

const DURATION = 3000; // ms before auto-complete

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 700);
        }, 200);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
        >
          {/* Ambient glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-violet-600/8 blur-[100px] pointer-events-none" />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* GIF */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 blur-2xl scale-110" />
              <img
                src={splashGif}
                alt="Loading"
                className="relative w-40 h-40 sm:w-48 sm:h-48 object-contain rounded-2xl"
                draggable={false}
              />
            </div>

            {/* Name */}
            <div className="text-center space-y-1">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Mahesa Putra Baskoro
              </h1>
              <p className="text-sm text-zinc-500 font-mono tracking-widest uppercase">
                Fullstack Developer · IoT Specialist
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-64 sm:w-80 space-y-2">
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-400 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                  Initializing
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom tag */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-8 text-[10px] font-mono text-zinc-700 tracking-widest uppercase"
          >
            syncbas.my.id
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
