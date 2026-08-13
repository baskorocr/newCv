export interface WorkExperience {
  company: string;
  companySubGroup?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  units?: {
    unitName: string;
    description: string;
    tags: string[];
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'ev-charging' | 'fullstack' | 'vision-ai' | 'iot-hardware';
  categoryLabel: string;
  description: string;
  impact?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface AchievementItem {
  year: string;
  title: string;
  issuer: string;
  category: 'award' | 'certification' | 'academic' | 'patent';
  description?: string;
  badgeText?: string;
}

export const PERSONAL_DATA = {
  name: "MAHESA PUTRA BASKORO C.R",
  title: "IT Development (Fullstack) & IoT Specialist",
  tagline: "Enterprise Software Engineer • Industrial IoT Architect • Smart Manufacturing Innovator",
  location: "Cikarang, Kab. Bekasi, Jawa Barat, Indonesia",
  email: "baskorocr@gmail.com",
  phone: "+6289654825055",
  whatsappUrl: "https://wa.me/6289654825055",
  telegram: "6289654825055",
  telegramUrl: "https://t.me/6289654825055",
  github: "https://github.com/baskorocr",
  githubUsername: "baskorocr",
  linkedin: "https://linkedin.com/in/baskorocr",
  website: "https://www.syncbas.my.id",
  instagram: "https://instagram.com/syncbas_",
  bio: `Lulusan Sarjana Komputer (S.Kom) dari Universitas Amikom Yogyakarta spesialisasi Rekayasa Perangkat Lunak dan Internet of Things (IoT). Berpengalaman luas sebagai IT Development (Fullstack) & IoT Specialist di lingkungan holding manufaktur (Dharma Group), dengan keahlian mendalam dalam rekayasa perangkat lunak enterprise, arsitektur microservices, komunikasi hardware-to-cloud, dan otomatisasi industri. Terbukti sukses memimpin dan mengimplementasikan proyek strategis, meliputi ekosistem EV Charging Station berbasis protokol OCPP serta sistem HMI di PT Dharma Electrindo Manufacturing, sistem e-Procurement terintegrasi (dpt-eproc) untuk PT Dharma Precision Parts, manajemen infrastruktur server web berbasis aaPanel di PT Dharma Poliplast, hingga arsitektur manufaktur dan distribusi supply chain end-to-end aki DC Battery di PT Dharma Control Cable. Memiliki rekam jejak kepemimpinan proyek yang solid, publikasi ilmiah terakreditasi, serta raihan berbagai penghargaan inovasi efisiensi industri tingkat perusahaan maupun nasional.`,
  stats: [
    { label: "Pengalaman Industri", value: "3+", suffix: "Tahun" },
    { label: "Proyek Enterprise & IoT", value: "15+", suffix: "Sistem" },
    { label: "Penghargaan Inovasi", value: "10+", suffix: "Juara" },
    { label: "Paten & Ciptaan RI", value: "1", suffix: "Kemenkumham" }
  ]
};

export const TECH_STACK = {
  languages: [
    { name: "TypeScript", level: "Expert", category: "Language" },
    { name: "JavaScript", level: "Expert", category: "Language" },
    { name: "PHP", level: "Expert", category: "Language" },
    { name: "Python", level: "Advanced", category: "Language" },
    { name: "C / C++", level: "Advanced", category: "Hardware" },
    { name: "C#", level: "Intermediate", category: "Language" },
    { name: "Java", level: "Intermediate", category: "Language" },
    { name: "Kotlin", level: "Intermediate", category: "Mobile" },
    { name: "Go", level: "Intermediate", category: "Language" },
    { name: "HTML5 / CSS3", level: "Expert", category: "Frontend" }
  ],
  frameworks: [
    { name: "Laravel", level: "Expert", type: "Backend" },
    { name: "React.js", level: "Expert", type: "Frontend" },
    { name: "Node.js", level: "Expert", type: "Backend" },
    { name: "Vue.js", level: "Advanced", type: "Frontend" },
    { name: "Next.js", level: "Advanced", type: "Fullstack" },
    { name: "Blade", level: "Expert", type: "Frontend" },
    { name: "FrankenPHP", level: "Advanced", type: "Server" },
    { name: "WordPress", level: "Advanced", type: "CMS" }
  ],
  iotHardware: [
    { name: "OCPP (Open Charge Point Protocol)", level: "Specialist" },
    { name: "ESP32 / ESP8266", level: "Specialist" },
    { name: "Arduino / Microcontrollers", level: "Specialist" },
    { name: "Computer Vision / Camera Inspection LCA", level: "Specialist" },
    { name: "HMI Protocol & Interfaces", level: "Specialist" },
    { name: "Load Cell Interfacing", level: "Hardware" },
    { name: "Photoelectric Sensor (LM393)", level: "Hardware" },
    { name: "Power Logic PM5350 Metering", level: "Hardware" },
    { name: "Smart Lock Hardware & Firmware", level: "Hardware" }
  ],
  infrastructure: [
    { name: "MySQL", type: "Database" },
    { name: "PostgreSQL", type: "Database" },
    { name: "MongoDB", type: "Database" },
    { name: "Firebase", type: "Cloud" },
    { name: "aaPanel Server Admin", type: "Server" },
    { name: "Linux Administration", type: "Server" },
    { name: "Git / GitHub Workflow", type: "DevOps" },
    { name: "Android Studio", type: "Mobile" },
    { name: "Jupyter Notebook", type: "AI/Data" }
  ]
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    company: "PT DHARMA POLIMETAL TBK. (DHARMA GROUP)",
    role: "IT Development (Fullstack) & IoT Specialist",
    period: "2023 - Present",
    location: "Cikarang, Jawa Barat",
    description: "Memimpin rekayasa perangkat lunak enterprise, otomatisasi manufaktur, arsitektur EV Charging station, dan infrastruktur server holding Dharma Group.",
    highlights: [
      "Merancang dan mengeksekusi arsitektur EV Charging Station terintegrasi protokol OCPP (Python & Vue.js).",
      "Mengembangkan aplikasi mobile dharmaEvOCPP dan dashboard monitoring real-time CIMORINGS.",
      "Membangun e-Procurement System (dpt-eproc) berbasis Laravel & Git untuk otomatisasi alur pengadaan barang/jasa.",
      "Mengarsitekturi sistem manufaktur & supply chain end-to-end aki DC Battery (Dharma Control Cable).",
      "Mengelola & mengoptimalisasi infrastruktur web internal berbasis server aaPanel (Dharma Poliplast).",
      "Meraih Juara 1 SOP (System Stock Opname), Juara 2 QCP (Camera Inspection LCA), dan Juara 2 Improvement KIDP XVIII 2025."
    ],
    tags: ["Laravel", "Vue.js", "Python", "OCPP", "HMI", "aaPanel", "Supply Chain", "IoT"],
    units: [
      {
        unitName: "PT Dharma Electrindo Manufacturing",
        description: "Mengembangkan arsitektur sistem EV Charging Station, integrasi protokol OCPP (Python & Vue.js), sistem HMI (Human Machine Interface), serta platform monitoring pengisian kendaraan listrik CIMORINGS dan aplikasi mobile dharmaEvOCPP.",
        tags: ["Python", "Vue.js", "OCPP", "HMI", "CIMORINGS", "Mobile"]
      },
      {
        unitName: "PT Dharma Precision Parts",
        description: "Merancang dan membangun e-Procurement System (dpt-eproc) berbasis Laravel & GitHub untuk otomatisasi alur pengadaan barang/jasa perusahaan secara transparan dan efisien.",
        tags: ["Laravel", "Blade", "MySQL", "GitHub Workflow", "Procurement"]
      },
      {
        unitName: "PT Dharma Control Cable",
        description: "Membangun sistem end-to-end terintegrasi mulai dari proses manufaktur hingga distribusi supply chain baterai/aki dengan merk DC Battery.",
        tags: ["Laravel", "Supply Chain", "Inventory", "Manufacturing Automation"]
      },
      {
        unitName: "PT Dharma Poliplast",
        description: "Melakukan implementasi, konfigurasi, dan optimalisasi server manajemen aaPanel untuk keandalan infrastruktur web/sistem internal perusahaan.",
        tags: ["aaPanel", "Linux Admin", "Nginx", "Server Optimization"]
      }
    ]
  },
  {
    company: "CULTUROBIO Yogyakarta",
    role: "Intern Programmer & IoT Research",
    period: "2023",
    location: "Yogyakarta",
    description: "Riset dan prototyping sistem telemetri IoT untuk pengumpulan data sensor berbasis waktu nyata (real-time).",
    highlights: [
      "Mengembangkan firmware mikrokontroler untuk akuisisi data sensor real-time.",
      "Menghubungkan data sensor ke antarmuka aplikasi web untuk pemantauan dan otomatisasi."
    ],
    tags: ["IoT", "ESP32", "Firmware", "Telemetry", "Web Dashboard"]
  },
  {
    company: "ASSISTANT FORUM AMIKOM UNIVERSITY",
    role: "Member & Assistant Forum Vice Chair",
    period: "2021 - 2023",
    location: "Yogyakarta",
    description: "Mengkoordinasikan operasional organisasi asisten laboratorium dan membimbing kegiatan praktikum mahasiswa ilmu komputer.",
    highlights: [
      "Menjadi Asisten Praktikum resmi untuk 4 mata kuliah teknis: Mikrokontroler (2022), Hardware Software 2 (2022), Komunikasi Data (2021), dan Hardware Software 1 (2021).",
      "Memimpin pengawasan dan asistensi teknis pemograman perangkat keras & sistem jaringan."
    ],
    tags: ["Mikrokontroler", "Hardware-Software", "Komunikasi Data", "Leadership"]
  },
  {
    company: "FREELANCE YOGYAKARTA",
    role: "Freelance Project Manager & Developer",
    period: "2019 - 2020",
    location: "Yogyakarta",
    description: "Mengelola siklus hidup proyek sistem software & IoT independen.",
    highlights: [
      "Menciptakan produk inovasi Smart Lock Motorcycle.",
      "Memperoleh Hak Cipta / Surat Pencatatan Ciptaan resmi dari Kemenkumham RI."
    ],
    tags: ["Project Management", "Smart Lock IoT", "Kemenkumham RI Patent"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    year: "2025",
    title: "Juara 2 Improvement KIDP XVIII 2025",
    issuer: "PT Dharma Polimetal Tbk. (Dharma Group)",
    category: "award",
    badgeText: "JUARA 2 PERUSAHAAN",
    description: "Inovasi Portal Single Sign-On (SSO), eprocV2, dan Sistem Manajemen Vendor terintegrasi holding."
  },
  {
    year: "2025",
    title: "Juara 1 Support Operation Production (System Stock Opname)",
    issuer: "Dharma Group Innovation Award",
    category: "award",
    badgeText: "JUARA 1 SOP",
    description: "Sistem otomatisasi Stock Opname yang meningkatkan efisiensi dan akurasi opname barang manufaktur."
  },
  {
    year: "2025",
    title: "Juara 2 QCP (Inovasi Pembuatan Camera Inspection LCA)",
    issuer: "Dharma Group Quality Control Circle",
    category: "award",
    badgeText: "JUARA 2 QCP",
    description: "Pengembangan sistem Computer Vision otomatisasi inspeksi cacat produk manufaktur."
  },
  {
    year: "2025",
    title: "Coordinating Industrial Transformation 4.0 BNSP",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    category: "certification",
    description: "Sertifikasi kompetensi resmi koordinator transformasi industri 4.0."
  },
  {
    year: "2025",
    title: "Competency Based Technical Guidance Manager 4.0",
    issuer: "Kementerian Perindustrian RI (Kemenperin)",
    category: "certification",
    description: "Bimbingan teknis manajerial industri 4.0 Kemenperin RI."
  },
  {
    year: "2023",
    title: "Juara 1 Kategori AI & IoT - AMICTA 2023",
    issuer: "AMICTA Innovation Competition",
    category: "award",
    badgeText: "JUARA 1 AI & IOT",
    description: "Kompetisi inovasi perangkat lunak dan kecerdasan buatan berbasis IoT."
  },
  {
    year: "2023",
    title: "1st Software Development - GKM AMIKOM (Monitoring System)",
    issuer: "Gedung Karya Mahasiswa Amikom",
    category: "award"
  },
  {
    year: "2023",
    title: "1st Favorite Project IoT - GKM AMIKOM (SiFis Website Monitoring)",
    issuer: "Amikom IoT Showcase",
    category: "award"
  },
  {
    year: "2023",
    title: "2nd Favorite Project IoT - GKM AMIKOM (Smart Agriculture IoT)",
    issuer: "Amikom IoT Showcase",
    category: "award"
  },
  {
    year: "2023",
    title: "TOEFL Certificate of Achievement",
    issuer: "AMIKOM Test Center",
    category: "certification"
  },
  {
    year: "2022",
    title: "Juara 2 Innovation of College Student Yogyakarta (LOKKY)",
    issuer: "Pemerintah DIY Yogyakarta",
    category: "award",
    badgeText: "JUARA 2 DIY"
  },
  {
    year: "2021",
    title: "Cisco CCNA 1 - Certificate Network Associate Industrial",
    issuer: "Cisco Networking Academy",
    category: "certification"
  },
  {
    year: "2020",
    title: "Surat Pencatatan Ciptaan (Hak Cipta Smart Lock Motorcycle)",
    issuer: "Kemenkumham RI",
    category: "patent",
    badgeText: "PATEN RI",
    description: "Hak Cipta resmi produk Smart Lock Motorcycle berbasis IoT."
  },
  {
    year: "2020",
    title: "Nominee IoT AMICTA (Smart Lock Motorcycle)",
    issuer: "AMICTA",
    category: "award"
  },
  {
    year: "2020",
    title: "PHP Course Certificate - SoloLearn",
    issuer: "SoloLearn (1059-18744230)",
    category: "certification"
  },
  {
    year: "2019",
    title: "IT Essentials Certification",
    issuer: "Cisco Networking Academy",
    category: "certification"
  },
  {
    year: "2019",
    title: "Internet of Things Online Workshop",
    issuer: "SEAMEO SEAMOLEC",
    category: "certification"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "system-stock-opname",
    title: "System Stock Opname",
    category: "fullstack",
    categoryLabel: "Enterprise Software",
    description: "Sistem manajemen Support Operation Production (SOP) untuk otomatisasi siklus perhitungan stock opname barang & bahan baku manufaktur secara akurat.",
    impact: "Meraih Juara 1 Support Operation Production Dharma Group",
    tags: ["Laravel", "MySQL", "Inventory", "Barcode Reader", "Enterprise"],
    githubUrl: "https://github.com/baskorocr",
    featured: true
  },
  {
    id: "camera-inspection-lca",
    title: "Camera Inspection LCA",
    category: "vision-ai",
    categoryLabel: "Computer Vision & AI",
    description: "Sistem kendali mutu berbasis Computer Vision untuk inspeksi otomatisasi cacat produk manufaktur pada lini produksi Low Cost Automation.",
    impact: "Meraih Juara 2 QCP (Quality Control Circle) Dharma Group",
    tags: ["Python", "OpenCV", "Computer Vision", "Roboflow", "Quality Control"],
    githubUrl: "https://github.com/baskorocr",
    featured: true
  },
  {
    id: "cimorings-ev-ocpp",
    title: "CIMORINGS & dharmaEvOCPP Ecosystem",
    category: "ev-charging",
    categoryLabel: "EV & OCPP",
    description: "Ekosistem stasiun pengisian kendaraan listrik (EV Charging Station) terintegrasi protokol OCPP, dashboard pemantauan CIMORINGS, dan aplikasi mobile dharmaEvOCPP.",
    impact: "Diimplementasikan di PT Dharma Electrindo Manufacturing",
    tags: ["OCPP Protocol", "Python", "Vue.js", "Mobile App", "IoT Cloud"],
    githubUrl: "https://github.com/baskorocr",
    featured: true
  },
  {
    id: "dpt-eproc",
    title: "dpt-eproc Procurement System",
    category: "fullstack",
    categoryLabel: "Enterprise Software",
    description: "Sistem e-Procurement otomatis terintegrasi untuk alur pengajuan, verifikasi, hingga persetujuan pengadaan barang/jasa perusahaan.",
    impact: "Digunakan di PT Dharma Precision Parts",
    tags: ["Laravel", "Blade", "GitHub CI/CD", "PostgreSQL", "Workflow Engine"],
    githubUrl: "https://github.com/baskorocr",
    featured: true
  },
  {
    id: "dc-battery-system",
    title: "DC Battery End-to-End System",
    category: "fullstack",
    categoryLabel: "Manufacturing & Supply Chain",
    description: "Arsitektur sistem terintegrasi dari tahap manufaktur, pengemasan, hingga jaringan distribusi supply chain aki/baterai merk DC Battery.",
    impact: "Sistem utama di PT Dharma Control Cable",
    tags: ["Laravel", "Supply Chain", "Barcode Logistics", "Manufacturing"],
    githubUrl: "https://github.com/baskorocr",
    featured: true
  },
  {
    id: "sso-eproc-v2",
    title: "Enterprise Single Sign-On & eprocV2",
    category: "fullstack",
    categoryLabel: "Enterprise Software",
    description: "Portal autentikasi terpusat Single Sign-On (SSO), eprocV2, dan platform manajemen vendor terpadu untuk holding.",
    impact: "Meraih Juara 2 Improvement KIDP XVIII 2025",
    tags: ["Laravel", "OAuth2", "SSO", "Vendor Portal", "Security"],
    githubUrl: "https://github.com/baskorocr",
    featured: true
  },
  {
    id: "hmi-vector",
    title: "hmiVector & Industrial HMI Systems",
    category: "iot-hardware",
    categoryLabel: "IoT & Hardware",
    description: "Antarmuka Human Machine Interface (HMI) untuk kontrol visualisasi dan operasional mesin manufaktur secara langsung di lantai pabrik.",
    tags: ["HMI Protocol", "C++", "C#", "Modbus", "Industrial Automation"],
    githubUrl: "https://github.com/baskorocr"
  },
  {
    id: "power-logic-pm5350",
    title: "Power Logic PM5350 ESP Reader",
    category: "iot-hardware",
    categoryLabel: "IoT & Hardware",
    description: "Sistem pembacaan telemetry meteran listrik industri Schneider Power Logic PM5350 berbasis mikrokontroler ESP32 via RS485 Modbus RTU.",
    tags: ["ESP32", "Modbus RTU", "RS485", "C++", "Energy Monitoring"],
    githubUrl: "https://github.com/baskorocr"
  },
  {
    id: "ml-hat-detection",
    title: "ML Hat & PPE Detection API",
    category: "vision-ai",
    categoryLabel: "Computer Vision & AI",
    description: "Model Machine Learning pendeteksi APD / helm keselamatan kerja real-time menggunakan Roboflow API untuk K3 manufaktur.",
    tags: ["YOLO", "Roboflow API", "Python", "FastAPI", "K3 Safety"],
    githubUrl: "https://github.com/baskorocr"
  },
  {
    id: "smart-lock-motorcycle",
    title: "Smart Lock Motorcycle (Hak Cipta Kemenkumham)",
    category: "iot-hardware",
    categoryLabel: "IoT & Hardware",
    description: "Sistem pengaman sepeda motor pintar berbasis IoT dan aplikasi mobile dengan perlindungan enkripsi.",
    impact: "Memperoleh Surat Cipta Kemenkumham RI",
    tags: ["Arduino", "Bluetooth/IoT", "C++", "Android App", "Patented"],
    githubUrl: "https://github.com/baskorocr",
    featured: true
  }
];

export const PUBLICATION = {
  title: "Design of a Patient Room Infusion Fluid Drip and Capacity Monitoring System Using a Website-Based ESP8266 with the Laravel Framework",
  journal: "JURIKOM (Jurnal Riset Komputer)",
  author: "Mahesa Putra Baskoro",
  description: "Riset sistem pemantauan tetesan dan kapasitas cairan infus berbasis IoT NodeMCU ESP8266, sensor Photoelectric LM393, dan Load Cell yang terintegrasi web dashboard Laravel.",
  metrics: [
    { label: "Error Sensor LM393", value: "0.56%" },
    { label: "Error Load Cell", value: "0.27%" },
    { label: "Keberhasilan Pengujian", value: "100%" }
  ],
  tags: ["IoT Telemetry", "ESP8266", "Laravel", "LM393 Sensor", "Load Cell", "Medical IoT"]
};

export const EDUCATION = [
  {
    degree: "S.Kom - Sarjana Komputer (Informatika)",
    institution: "UNIVERSITAS AMIKOM YOGYAKARTA",
    period: "2019 - 2023",
    location: "Yogyakarta",
    details: "Spesialisasi Rekayasa Perangkat Lunak (RPL) & Internet of Things (IoT). Aktif di Gedung Karya Mahasiswa (GKM), Forum Asisten Lab, dan riset telemetri."
  },
  {
    degree: "MIPA - Sekolah Menengah Atas",
    institution: "SMAN 1 CIBARUSAH",
    period: "2016 - 2018",
    location: "Bekasi, Jawa Barat",
    details: "Jurusan Matematika dan Ilmu Pengetahuan Alam."
  }
];
