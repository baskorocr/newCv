import React from "react";
import {
  ArrowRight,
  Target,
  Crown,
  Star,
  Hexagon,
  Triangle,
  Command,
  Ghost,
  Gem,
  Cpu
} from "lucide-react";

const CLIENTS = [
  { name: "Acme Corp", icon: Hexagon },
  { name: "Quantum", icon: Triangle },
  { name: "Command+Z", icon: Command },
  { name: "Phantom", icon: Ghost },
  { name: "Ruby", icon: Gem },
  { name: "Chipset", icon: Cpu },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">{label}</span>
  </div>
);

export default function GlassmorphismTrustHero({
  badge,
  heading,
  description,
  ctaPrimary,
  ctaSecondary,
  stats,
  tags,
  backgroundImage,
}: {
  badge?: React.ReactNode;
  heading: React.ReactNode;
  description: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  stats?: { value: string; label: string }[];
  tags?: React.ReactNode[];
  backgroundImage?: string;
}) {
  return (
    <div className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .hero-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .hero-marquee { animation: marquee 40s linear infinite; }
        .hero-delay-100 { animation-delay: 0.1s; }
        .hero-delay-200 { animation-delay: 0.2s; }
        .hero-delay-300 { animation-delay: 0.3s; }
        .hero-delay-400 { animation-delay: 0.4s; }
        .hero-delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            maskImage: "linear-gradient(180deg, transparent, black 10%, black 70%, transparent)",
            WebkitMaskImage: "linear-gradient(180deg, transparent, black 10%, black 70%, transparent)",
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">

            {/* Badge */}
            {badge && (
              <div className="hero-fade-in hero-delay-100">
                {badge}
              </div>
            )}

            {/* Heading */}
            <h1
              className="hero-fade-in hero-delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9]"
              style={{
                maskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
              }}
            >
              {heading}
            </h1>

            {/* Description */}
            <p className="hero-fade-in hero-delay-300 max-w-xl text-lg text-zinc-400 leading-relaxed">
              {description}
            </p>

            {/* CTAs */}
            <div className="hero-fade-in hero-delay-400 flex flex-col sm:flex-row gap-4">
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:scale-[1.02] hover:bg-zinc-200 active:scale-[0.98]"
                >
                  {ctaPrimary.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
                >
                  {ctaSecondary.label}
                </a>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6 lg:mt-12">

            {/* Stats Card */}
            {stats && stats.length > 0 && (
              <div className="hero-fade-in hero-delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="h-px w-full bg-white/10 mb-6" />

                  <div className="grid grid-cols-3 gap-4 text-center">
                    {stats.slice(0, 3).map((s, i) => (
                      <React.Fragment key={i}>
                        <StatItem value={s.value} label={s.label} />
                        {i < 2 && <div className="w-px h-full bg-white/10 mx-auto" />}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Tags */}
                  {tags && tags.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-2">
                      {tags}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Marquee Card */}
            <div className="hero-fade-in hero-delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-8 backdrop-blur-xl">
              <h3 className="mb-6 px-8 text-sm font-medium text-zinc-400">Tech Stack & Ecosystem</h3>
              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              >
                <div className="hero-marquee flex gap-12 whitespace-nowrap px-4">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default"
                    >
                      <client.icon className="h-5 w-5 text-white" />
                      <span className="text-base font-bold text-white tracking-tight">{client.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
