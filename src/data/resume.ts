// src/data/resume.ts

export interface ContactInfo {
  email: string;
  phone: string;
  telegram: string;
  github: string;
  linkedin: string;
  website: string;
  instagram: string;
}

export interface Education {
  degree: string;
  university: string;
  year: string;
  specialization: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface PublicationItem {
  title: string;
  venue: string;
  year: string;
  link?: string;
}

export const resumeData = {
  name: "Mahesa Putra Baskoro C.R",
  title: "Fullstack & IoT Specialist",
  location: "Cikarang, Kab. Bekasi, Jawa Barat, Indonesia",
  contact: {
    email: "baskorocr@gmail.com",
    phone: "+6289654825055",
    telegram: "6289654825055",
    github: "github.com/baskorocr",
    linkedin: "Mahesa Putra Baskoro",
    website: "www.syncbas.my.id",
    instagram: "syncbas_",
  } as ContactInfo,
  education: {
    degree: "Sarjana Komputer (S.Kom)",
    university: "Universitas Amikom Yogyakarta",
    year: "2022",
    specialization: "Rekayasa Perangkat Lunak & Internet of Things (IoT)",
  } as Education,
  summary: "Experienced IT Development (Fullstack) & IoT Specialist with strong background in enterprise software architecture, micro‑services, hardware‑to‑cloud communication, and industrial automation.",
  experiences: [
    {
      role: "Fullstack Engineer & IoT Specialist",
      company: "Dharma Group (Holding Manufacturing)",
      period: "2022 – Present",
      description: [
        "Architected and delivered EV Charging Station ecosystem (OCPP protocol).",
        "Built HMI systems for PT Dharma Electrindo Manufacturing.",
        "Developed e‑Procurement platform (dpt‑eproc) for PT Dharma Precision Parts.",
        "Managed server infrastructure on aaPanel for multiple subsidiaries.",
        "Led cross‑functional teams delivering high‑availability SaaS solutions.",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      name: "EV Charging Station Platform",
      description: "Full stack platform enabling remote management of EV chargers via OCPP, with real‑time telemetry and billing integration.",
      techStack: ["Node.js", "NestJS", "React", "PostgreSQL", "Docker", "AWS"],
      link: "https://github.com/baskorocr/ev-charging",
    },
    {
      name: "Industrial HMI Dashboard",
      description: "Web‑based HMI for monitoring and controlling manufacturing equipment, featuring live charts and PLC integration.",
      techStack: ["React", "Framer Motion", "Chart.js", "WebSocket"],
    },
    {
      name: "SyncBas Personal Portfolio",
      description: "Showcase of professional achievements, publications and interactive terminal drawer for recruiters.",
      techStack: ["Vite", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
      link: "https://www.syncbas.my.id",
    },
  ] as ProjectItem[],
  publications: [
    {
      title: "High‑precision telemetry sensor for industrial IoT",
      venue: "JURIKOM Conference 2023",
      year: "2023",
      link: "https://doi.org/10.1234/jurikom.2023.056",
    },
  ] as PublicationItem[],
  skills: ["React", "Node.js", "NestJS", "TypeScript", "Docker", "Kubernetes", "AWS", "Microservices", "IoT Protocols (MQTT, OCPP)", "Hardware‑Cloud Integration"],
};
