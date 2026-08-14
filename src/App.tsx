import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { TechStack } from '@/components/TechStack';
import { Achievements } from '@/components/Achievements';
import { Publications } from '@/components/Publications';
import { TerminalDrawer } from '@/components/TerminalDrawer';
import { Footer } from '@/components/Footer';
import { SplashScreen } from '@/components/SplashScreen';
import { CinematicIntro } from '@/components/CinematicIntro';
import ScrollExpand from '@/components/ui/ScrollExpand';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [splashDone, setSplashDone]     = useState(false);
  const [introDone, setIntroDone]       = useState(false);

  const showIntro = () => setIntroDone(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      {splashDone && !introDone && <CinematicIntro onEnter={() => setIntroDone(true)} />}
      <div
        className="min-h-screen bg-white text-slate-900 font-sans antialiased"
        style={{ visibility: introDone ? 'visible' : 'hidden' }}
      >
        <Navbar onToggleTerminal={() => setTerminalOpen(true)} onShowIntro={showIntro} />
        <main>
          <Hero />
          <Experience />
          <Projects />

          {/* ── ScrollExpand: Code. Build. Deploy. ── */}
          <div style={{ height: '100vh' }}>
            <ScrollExpand
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80"
              alt="Code & Technology"
              title="Code. Build. Deploy."
              scrollHint="scroll to explore"
              startWidth={44}
              startHeight={55}
              startRadius={28}
              endRadius={0}
              mediaZoom={1.3}
              scrollDistance={1.1}
              holdDistance={0.3}
              overlayScrim={0.55}
            >
              <div className="space-y-4 max-w-xl">
                <p className="text-xs font-mono uppercase tracking-widest text-indigo-300">Fullstack · IoT · OCPP</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
                  Merancang sistem dari<br />
                  <span className="text-indigo-300">hardware ke cloud</span>
                </h2>
                <p className="text-sm text-white/70 leading-relaxed max-w-sm mx-auto">
                  EV Charging OCPP, HMI manufaktur, e-Procurement —
                  solusi end-to-end yang berjalan di production.
                </p>
                <a
                  href="#skills"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  Tech Stack
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollExpand>
          </div>

          <TechStack />
          <Achievements />
          <Publications />
        </main>
        <Footer />
        <TerminalDrawer isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      </div>
    </>
  );
}
