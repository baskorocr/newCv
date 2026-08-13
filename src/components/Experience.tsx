import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Building2, Calendar, GraduationCap, CheckCircle2, Layers, ChevronRight } from 'lucide-react';
import { WORK_EXPERIENCES, EDUCATION } from '@/lib/data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

export function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="py-16 md:py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <ScrollReveal direction="up" delay={0.05}>
            <span className="section-label mb-4 inline-flex">
              <Briefcase className="w-3 h-3" />
              Rekam Jejak Karir
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-slate-900">
              Pengalaman Kerja &{' '}
              <span className="text-indigo-600">Innovation Leadership</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-2xl">
              Memimpin transformasi digital, rekayasa IoT manufaktur, arsitektur EV Charging OCPP, dan infrastruktur server enterprise.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left: Tab Selector */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <StaggerContainer staggerDelay={0.07}>
              {WORK_EXPERIENCES.map((exp, i) => (
                <StaggerItem key={i}>
                  <button
                    onClick={() => setActive(i)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer relative ${
                      active === i
                        ? 'bg-white border-indigo-200 shadow-card-hover'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-card'
                    }`}
                  >
                    {active === i && (
                      <motion.div
                        layoutId="activeExp"
                        className="absolute left-0 top-3 bottom-3 w-0.5 bg-indigo-500 rounded-full"
                      />
                    )}
                    <div className="flex items-center justify-between mb-1 pl-2">
                      <span className="text-[10px] font-mono text-indigo-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-mono">
                        {exp.location}
                      </span>
                    </div>
                    <div className="pl-2">
                      <h3 className={`font-bold text-sm leading-tight ${active === i ? 'text-slate-900' : 'text-slate-700'}`}>
                        {exp.company}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{exp.role}</p>
                    </div>
                  </button>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Education */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="card p-5 mt-2">
                <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold mb-4 uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  Pendidikan Formal
                </div>
                {EDUCATION.map((edu, i) => (
                  <div key={i} className={`${i < EDUCATION.length - 1 ? 'mb-4 pb-4 border-b border-slate-100' : ''}`}>
                    <div className="font-bold text-xs text-slate-900">{edu.degree}</div>
                    <div className="text-[11px] text-indigo-600 font-medium mt-0.5">{edu.institution}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{edu.period} · {edu.location}</div>
                    {edu.details && (
                      <div className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{edu.details}</div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Detail Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
                className="card p-6 sm:p-8"
              >
                {/* Company Header */}
                <div className="pb-5 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{WORK_EXPERIENCES[active].location}</span>
                    <span className="text-slate-200">·</span>
                    <span>{WORK_EXPERIENCES[active].period}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {WORK_EXPERIENCES[active].company}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 mt-1">
                    {WORK_EXPERIENCES[active].role}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {WORK_EXPERIENCES[active].description}
                </p>

                {/* Business Units */}
                {WORK_EXPERIENCES[active].units && (
                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      Implementasi Unit Usaha
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {WORK_EXPERIENCES[active].units?.map((unit, i) => (
                        <div key={i} className="card-flat p-4 rounded-xl border border-slate-200">
                          <div className="font-bold text-xs text-indigo-700 mb-1.5">{unit.unitName}</div>
                          <p className="text-[11px] text-slate-500 leading-relaxed mb-3">{unit.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {unit.tags.map((t, j) => (
                              <span key={j} className="tag tag-indigo text-[10px]">{t}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                <div className="mb-6">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Pencapaian Kunci
                  </div>
                  <ul className="space-y-2">
                    {WORK_EXPERIENCES[active].highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {WORK_EXPERIENCES[active].tags.map((t, i) => (
                    <span key={i} className="tag">#{t}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
