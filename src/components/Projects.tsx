import React, { useState, useEffect } from 'react';
import { Code2, Github, Star, GitFork, Calendar, Search, RefreshCw, ExternalLink } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/motion/ScrollReveal';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [lang, setLang] = useState('all');

  const fetchRepos = async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch('https://api.github.com/search/repositories?q=user:baskorocr+fork:true&sort=updated&per_page=40');
      if (!res.ok) throw new Error(`GitHub API Error (${res.status})`);
      const data = await res.json();
      setRepos(data.items || []);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRepos(); }, []);

  const langs = Array.from(new Set(repos.map(r => r.language).filter(Boolean) as string[]));
  const filteredRepos = repos.filter(r => {
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase()) ||
      (r.description?.toLowerCase().includes(search.toLowerCase()) ?? false);
    const matchLang = lang === 'all' || r.language === lang;
    return matchSearch && matchLang;
  });

  return (
    <section id="projects" className="py-16 md:py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <ScrollReveal direction="up" delay={0.05}>
            <span className="section-label mb-4 inline-flex">
              <Code2 className="w-3 h-3" />
              Portfolio
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-slate-900">
              Proyek Industrial &{' '}
              <span className="text-indigo-600">Live GitHub</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-3 text-slate-500 text-sm max-w-2xl">
              Repositori public terbaru yang terhubung langsung via GitHub API — enterprise software, IoT, EV Charging, dan Computer Vision.
            </p>
          </ScrollReveal>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari repositori..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <select
            value={lang}
            onChange={e => setLang(e.target.value)}
            className="px-3 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:border-indigo-400 cursor-pointer text-slate-600"
          >
            <option value="all">Semua Bahasa</option>
            {langs.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
          <button
            onClick={fetchRepos}
            className="btn-secondary py-2.5 px-4 text-sm cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card p-6 space-y-3">
                <div className="skeleton h-4 w-1/3" />
                <div className="skeleton h-5 w-3/4" />
                <div className="skeleton h-12 w-full" />
                <div className="skeleton h-4 w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="p-6 rounded-xl bg-red-50 border border-red-200 text-center max-w-md mx-auto">
            <p className="text-sm text-red-600 mb-3">{error}</p>
            <button onClick={fetchRepos} className="btn-primary text-sm cursor-pointer" style={{ background: '#dc2626' }}>
              Coba Lagi
            </button>
          </div>
        )}

        {/* Repos Grid */}
        {!loading && !error && (
          <StaggerContainer staggerDelay={0.04} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRepos.length > 0 ? filteredRepos.map(repo => (
              <StaggerItem key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 flex flex-col h-full group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge badge-slate font-mono">
                      {repo.language || 'Code'}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(repo.updated_at).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                    {repo.name}
                    <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-indigo-400 shrink-0" />
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed flex-1 mb-4">
                    {repo.description || 'Repositori public oleh baskorocr.'}
                  </p>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-4 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-indigo-400" />
                      {repo.forks_count}
                    </span>
                    <span className="ml-auto text-[10px] text-slate-300 group-hover:text-indigo-400 transition-colors flex items-center gap-1">
                      <Github className="w-3 h-3" />
                      {repo.full_name}
                    </span>
                  </div>
                </a>
              </StaggerItem>
            )) : (
              <div className="col-span-full py-16 text-center text-slate-400 text-sm">
                Tidak ada repositori yang cocok dengan "{search}".
              </div>
            )}
          </StaggerContainer>
        )}

      </div>
    </section>
  );
}
