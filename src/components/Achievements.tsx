import React from 'react';
import { Trophy, Award, ShieldCheck, Medal, FileCheck } from 'lucide-react';
import { ACHIEVEMENTS } from '@/lib/data';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

const highlights = [
  {
    badge: 'Juara 1 · Dharma Group',
    title: 'Support Operation Production',
    desc: 'Inovasi System Stock Opname otomatisasi perhitungan bahan baku & barang manufaktur.',
    issuer: 'Dharma Group Innovation Award · 2025',
    icon: Trophy,
    accent: 'border-amber-200 bg-gradient-to-br from-amber-50 to-white',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    badgeClass: 'badge-amber',
  },
  {
    badge: 'Juara 2 · QCP Perusahaan',
    title: 'Quality Control Circle (QCP)',
    desc: 'Inovasi Camera Inspection LCA berbasis Computer Vision inspeksi mutu produk manufaktur.',
    issuer: 'Dharma Group Quality Control · 2025',
    icon: Award,
    accent: 'border-indigo-200 bg-gradient-to-br from-indigo-50 to-white',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    badgeClass: 'badge-indigo',
  },
  {
    badge: 'Juara 2 · Improvement 2025',
    title: 'KIDP XVIII 2025',
    desc: 'Portal Single Sign-On (SSO), eprocV2, dan Manajemen Vendor terintegrasi holding.',
    issuer: 'PT Dharma Polimetal Tbk. · 2025',
    icon: Medal,
    accent: 'border-violet-200 bg-gradient-to-br from-violet-50 to-white',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    badgeClass: 'badge-slate',
  },
];

const categoryIcon = {
  award: Trophy,
  certification: Award,
  patent: ShieldCheck,
  academic: FileCheck,
};

const categoryBadge = {
  award: 'badge-amber',
  certification: 'badge-indigo',
  patent: 'badge-green',
  academic: 'badge-slate',
};

export function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <ScrollReveal direction="up" delay={0.05}>
            <span className="section-label mb-4 inline-flex">
              <Trophy className="w-3 h-3" />
              Penghargaan & Sertifikasi
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-slate-900">
              Prestasi Inovasi &{' '}
              <span className="text-indigo-600">Kompetensi Resmi</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-3 text-slate-500 text-sm max-w-2xl">
              Rekam jejak kemenangan kompetisi efisiensi manufaktur holding, sertifikasi industri BNSP/Kemenperin, serta Hak Cipta Kemenkumham RI.
            </p>
          </ScrollReveal>
        </div>

        {/* Highlight Cards */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <StaggerItem key={i}>
                <div className={`card p-6 h-full border ${h.accent}`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className={`badge ${h.badgeClass}`}>{h.badge}</span>
                    <div className={`w-10 h-10 rounded-xl ${h.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${h.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{h.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{h.desc}</p>
                  <div className="text-[10px] text-slate-400 font-mono">{h.issuer}</div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Full List */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="card p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <FileCheck className="w-5 h-5 text-indigo-500" />
              <h3 className="font-bold text-slate-900 text-lg">Daftar Lengkap Sertifikasi & Penghargaan</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ACHIEVEMENTS.map((item, i) => {
                const Icon = categoryIcon[item.category] || Trophy;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className={`w-4 h-4 ${
                        item.category === 'award' ? 'text-amber-500' :
                        item.category === 'patent' ? 'text-green-600' :
                        'text-indigo-500'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-xs text-slate-900 leading-tight">{item.title}</div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">{item.issuer}</div>
                      {item.description && (
                        <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">{item.description}</div>
                      )}
                    </div>
                    <span className="badge badge-slate shrink-0 text-[10px]">{item.year}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
