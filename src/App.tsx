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

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar onToggleTerminal={() => setTerminalOpen(true)} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
        <Achievements />
        <Publications />
      </main>
      <Footer />
      <TerminalDrawer isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}
