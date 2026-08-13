import React from 'react';
import { Sparkles, Code, Cpu, Server, Wrench } from 'lucide-react';
import { TECH_STACK } from '@/lib/data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

const categories = [
  {
    key: 'languages' as const,
    icon: Code,
    title: 'Languages',
    sub: 'Bahasa Pemrograman',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    dot: 'bg-indigo-400',
    tagHover: 'hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200',
  },
  {
    key: 'frameworks' as const,
    icon: Wrench,
    title: 'Frameworks',
    sub: 'Web & Backend',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    dot: 'bg-violet-400',
    tagHover: 'hover:bg-violet-50 hover:text-violet-700 hover:border-violet-200',
  },
  {
    key: 'iotHardware' as const,
    icon: Cpu,
    title: 'IoT & Hardware',
    sub: 'Protocol & Firmware',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    dot: 'bg-amber-400',
    tagHover: 'hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200',
  },
  {
    key: 'infrastructure' as const,
    icon: Server,
    title: 'Server & DB',
    sub: 'Database & Infra',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    dot: 'bg-emerald-400',
    tagHover: 'hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200',
  },
];

export function TechStack() {
  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <ScrollReveal direction="up" delay={0.05}>
            <span className="section-label mb-4 inline-flex">
              <Sparkles className="w-3 h-3" />
              Kapabilitas Teknis
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-slate-900">
              Tech Stack &{' '}
              <span className="text-indigo-600">IoT Ecosystem</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-3 text-slate-500 text-sm max-w-2xl">
              Penguasaan komprehensif bahasa pemrograman enterprise, framework modern, firmware mikrokontroler, hingga infrastruktur cloud & server.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(({ key, icon: Icon, title, sub, color, bg, border, dot, tagHover }) => (
            <StaggerItem key={key}>
              <div className="card p-6 h-full">
                {/* Card Header */}
                <div className={`flex items-center gap-3 mb-5 pb-4 border-b ${border}`}>
                  <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center border ${border}`}>
                    <Icon className={`w-4.5 h-4.5 ${color}`} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{title}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{sub}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {(TECH_STACK[key] as any[]).map((item: any, i: number) => (
                    <span
                      key={i}
                      className={`tag cursor-default flex items-center gap-1.5 ${tagHover}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${dot} shrink-0`} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
