import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { PERSONAL_DATA, TECH_STACK, WORK_EXPERIENCES, ACHIEVEMENTS } from '@/lib/data';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Log {
  id: number;
  command: string;
  output: React.ReactNode;
}

export function TerminalDrawer({ isOpen, onClose }: TerminalDrawerProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Log[]>([{
    id: 1,
    command: 'welcome',
    output: (
      <div className="space-y-1">
        <p className="text-indigo-400 font-bold">⚡ MAHESA BASKORO CLI v2.5</p>
        <p className="text-slate-400 text-xs">Ketik <span className="text-amber-400 font-bold">help</span> untuk daftar perintah.</p>
      </div>
    ),
  }]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-indigo-400 font-bold mb-2">Available Commands:</p>
            {[
              ['bio', 'Profil & latar belakang'],
              ['skills', 'Tech stack & keahlian'],
              ['experience', 'Riwayat karir'],
              ['awards', 'Penghargaan & prestasi'],
              ['contact', 'Kontak & sosial media'],
              ['clear', 'Bersihkan terminal'],
              ['exit', 'Tutup terminal'],
            ].map(([cmd, desc]) => (
              <p key={cmd}>
                <span className="text-indigo-300 font-bold w-24 inline-block">{cmd}</span>
                <span className="text-slate-400">— {desc}</span>
              </p>
            ))}
          </div>
        );
        break;
      case 'bio':
        output = (
          <div className="text-xs space-y-1.5">
            <p className="text-indigo-400 font-bold">{PERSONAL_DATA.name}</p>
            <p className="text-slate-400">{PERSONAL_DATA.title}</p>
            <p className="text-slate-300 leading-relaxed">{PERSONAL_DATA.bio}</p>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="text-xs space-y-2">
            <p className="text-indigo-400 font-bold">Languages:</p>
            <p className="text-slate-300">{TECH_STACK.languages.map(l => l.name).join(', ')}</p>
            <p className="text-violet-400 font-bold">Frameworks:</p>
            <p className="text-slate-300">{TECH_STACK.frameworks.map(f => f.name).join(', ')}</p>
            <p className="text-amber-400 font-bold">IoT & Hardware:</p>
            <p className="text-slate-300">{TECH_STACK.iotHardware.map(h => h.name).join(', ')}</p>
          </div>
        );
        break;
      case 'experience':
        output = (
          <div className="text-xs space-y-3">
            {WORK_EXPERIENCES.map((exp, i) => (
              <div key={i} className="border-l-2 border-indigo-500 pl-3">
                <p className="text-indigo-400 font-bold">{exp.company} ({exp.period})</p>
                <p className="text-slate-200 font-semibold">{exp.role}</p>
                <p className="text-slate-400 text-[11px] mt-0.5">{exp.description}</p>
              </div>
            ))}
          </div>
        );
        break;
      case 'awards':
        output = (
          <div className="text-xs space-y-1.5">
            {ACHIEVEMENTS.slice(0, 6).map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-amber-400">🏆 [{item.year}]</span>
                <span className="text-slate-200">{item.title}</span>
              </div>
            ))}
          </div>
        );
        break;
      case 'contact':
        output = (
          <div className="text-xs space-y-1">
            {[
              ['Email', PERSONAL_DATA.email],
              ['Phone', PERSONAL_DATA.phone],
              ['GitHub', PERSONAL_DATA.github],
              ['Website', PERSONAL_DATA.website],
            ].map(([k, v]) => (
              <p key={k}>
                <span className="text-indigo-400 font-bold w-16 inline-block">{k}:</span>
                <span className="text-slate-300">{v}</span>
              </p>
            ))}
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        onClose();
        setInput('');
        return;
      default:
        output = (
          <p className="text-xs text-red-400">
            Command not found: '{cmd}'. Ketik <span className="text-amber-400 font-bold underline">help</span>.
          </p>
        );
    }

    setHistory(prev => [...prev, { id: Date.now(), command: input, output }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-3xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col h-[380px]">
            {/* Title bar */}
            <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
                  baskorocr@syncbas:~
                </span>
              </div>
              <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Output */}
            <div className="p-4 flex-1 overflow-y-auto font-mono text-xs space-y-3 text-slate-300">
              {history.map((log) => (
                <div key={log.id} className="space-y-1.5">
                  {log.command !== 'welcome' && (
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-400 font-bold">baskorocr@syncbas:~$</span>
                      <span className="text-slate-200">{log.command}</span>
                    </div>
                  )}
                  <div className="pl-2 border-l border-slate-800">{log.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
              <span className="text-indigo-400 font-mono font-bold text-xs shrink-0">baskorocr@syncbas:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="help, bio, skills, experience, awards, contact..."
                className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs placeholder:text-slate-700"
              />
              <button type="submit" className="text-indigo-400 hover:text-indigo-300 cursor-pointer">
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
