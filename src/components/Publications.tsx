import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Activity } from 'lucide-react';
import { PUBLICATION } from '@/lib/data';
import { fadeUpVariant, staggerContainerVariant } from '@/lib/motion';

export function Publications() {
  return (
    <section id="publication" className="py-16 md:py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-12"
        >
          <motion.div variants={fadeUpVariant}>
            <span className="section-label mb-4 inline-flex">
              <BookOpen className="w-3 h-3" />
              Publikasi Ilmiah
            </span>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="editorial-heading text-3xl sm:text-4xl text-slate-900">
            Riset & Jurnal{' '}
            <span className="text-indigo-600">IoT Telemetri</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="mt-3 text-slate-500 text-sm max-w-2xl">
            Publikasi ilmiah pengujian akurasi sensor tinggi pada sistem pemantauan cairan medis berbasis IoT & Laravel.
          </motion.p>
        </motion.div>

        {/* Publication Card */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="card p-6 sm:p-10">
            {/* Journal badge + author */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="badge badge-indigo text-xs font-bold">
                {PUBLICATION.journal}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Penulis: <span className="text-slate-600 font-semibold">{PUBLICATION.author}</span>
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-slate-900 text-lg sm:text-xl leading-snug mb-4">
              {PUBLICATION.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              {PUBLICATION.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {PUBLICATION.metrics.map((m, i) => (
                <div key={i} className="card-flat p-5 rounded-xl text-center border border-slate-200">
                  <div className="stat-number text-2xl mb-1">{m.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-5 border-t border-slate-100">
              {PUBLICATION.tags.map((t, i) => (
                <span key={i} className="tag">#{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
