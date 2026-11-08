export interface DevProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | "Backend / API" | "Realtime" | "Cloud SaaS";
  year: string;
  client: string;
  thumbnail: string;
  description: string;
  problem: string;
  approach: string;
  result: string;
  metrics: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  deliverables: string[];
}

export interface DevService {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tags: string[];
}

export interface DevArticle {
  id: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  tags: string[];
}

export const devData = {
  brand: {
    name: "FORMA",
    badge: "MODE: MERN STACK DEVELOPMENT",
    switchLabel: "Switch to Cybersecurity",
    switchTarget: "cyber" as const,
    author: "Sumit Kumar Garsa",
    initials: "SKG",
    role: "MERN Full Stack Developer (React · Node.js · Vite)",
    location: "Remote / Available Globally",
    resumeUrl: "/resumes/Sumit_Kumar_Garsa_MERN_Resume.pdf",
    bio: "MERN Full Stack Developer proficient in React.js (Vite), TypeScript, Node.js, Express.js, and MongoDB. Experienced in real-time WebSockets, responsive UI design with Tailwind CSS and Framer Motion, and 552 LeetCode DSA problems solved.",
  },

  menu: [
    { number: "01", label: "STUDIO", href: "#studio", badge: "Hero & Engineering Philosophy" },
    { number: "02", label: "WORK", href: "#work", badge: "Selected Production Systems" },
    { number: "03", label: "SERVICES", href: "#services", badge: "Architectural Capabilities" },
    { number: "04", label: "JOURNAL", href: "#journal", badge: "Technical Case Notes & MDX" },
    { number: "05", label: "CONTACT", href: "#contact", badge: "Direct Project Engagement" },
  ],

  hero: {
    headline: "MERN FULL STACK DEVELOPER",
    rotatingTitles: [
      "MERN Full Stack Developer",
      "React.js (Vite) Specialist",
      "Node.js & Express API Engineer",
      "552+ LeetCode DSA Solved",
    ],
    pitch: "Designing responsive, user-friendly web applications using React.js (Vite), Next.js, Tailwind CSS, and Framer Motion. Standing up Node.js REST APIs independently and owning features end-to-end.",
    ctas: {
      primary: { label: "View Selected Work", href: "#work" },
      secondary: { label: "Download Resume", href: "/resumes/Sumit_Kumar_Garsa_MERN_Resume.pdf" },
    },
  },

  stats: [
    { label: "LeetCode DSA Solved", value: "552+" },
    { label: "Developers Led at VIT", value: "08+" },
    { label: "Concurrent Socket Users", value: "50+" },
    { label: "Testing WebSocket Uptime", value: "99.9%" },
  ],

  about: {
    headline: "RESPONSIVE CRAFT, EFFICIENT APIS & DETERMINISTIC ARCHITECTURE",
    story: "Graduated with a B.Tech in Computer Science from VIT (April 2025). Practical experience spans lead full-stack ownership of production-style applications for VIT's student organizations, a professional internship on a SEBI-registered investment platform at ZeTheta Algorithms, and a year of self-directed project building. Comfortable standing up a Node.js application independently from scratch and owning features end-to-end — from database schema to animated UI. Backed by 552 data structures and algorithms problems solved on LeetCode.",
    avatar: "/sumit-profile.jpg",
    tenets: [
      "Proficient across the modern JavaScript stack: React.js (Vite), TypeScript, Node.js, Express.js, and MongoDB.",
      "Designing responsive, component-based UIs with Tailwind CSS and fluid Framer Motion micro-interactions.",
      "Building real-time features via WebSockets, secure REST APIs with JWT auth, and clean data contracts.",
      "552 data structures and algorithms problems solved on LeetCode through competitive programming.",
    ],
  },

  projects: [
    {
      id: "codesync-collab-editor",
      number: "01",
      title: "CODESYNC COLLABORATIVE IDE",
      subtitle: "Real-time multi-user code editor supporting 50+ concurrent users via WebSockets.",
      category: "Realtime",
      year: "2025",
      client: "Personal Project",
      thumbnail: "/projects/codesync/dashboard.png",
      description: "A multi-user real-time code editor built with React.js (Vite), Node.js, WebSocket, Socket.io, and MongoDB. Features automatic reconnection logic, room-based session management, and persistent snapshot recovery.",
      problem: "Maintaining stable, synchronized document states across concurrent users without socket dropouts or merge conflicts.",
      approach: "Engineered room-based session handlers in Socket.io with conflict resolution and automated snapshot backups to MongoDB.",
      result: "Achieved 99.9% uptime during testing with seamless real-time sync across 50+ concurrent users.",
      metrics: "50+ concurrent users • 99.9% testing uptime • <18ms latency",
      tech: ["React.js", "Vite", "Node.js", "Express.js", "WebSocket", "Socket.io", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://codesync-flame.vercel.app/",
      githubUrl: "https://github.com/SumitKumarGarsa/codesync",
      deliverables: [
        "React.js (Vite) Real-Time Code Editor",
        "Socket.io Event Gateway with Conflict Resolution",
        "Room-Based Session State Registry",
        "MongoDB Snapshot Data Recovery Pipeline",
      ],
    },
    {
      id: "rideflow-cab-booking",
      number: "02",
      title: "RIDEFLOW CAB NAVIGATION PLATFORM",
      subtitle: "Intelligent cab booking engine with live Mapbox GPS tracking and Stripe payments.",
      category: "Full-Stack",
      year: "2025",
      client: "Personal Project",
      thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
      description: "Full-stack cab booking platform developed in Next.js and TypeScript featuring real-time GPS tracking, dynamic fare calculation, Stripe payments, and Mapbox animated navigation.",
      problem: "Managing real-time location streaming and complex dynamic pricing while keeping client route animations fluid and database queries fast.",
      approach: "Integrated Mapbox turn-by-turn navigation with animated route transitions via Framer Motion; optimized backend query performance and API response times using database indexing and caching.",
      result: "Sub-25ms backend response times under concurrent booking load with 60fps route rendering.",
      metrics: "Sub-25ms API response • 60fps route transitions • 100% Stripe transaction success",
      tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Mapbox API", "Stripe API"],
      liveUrl: "https://github.com/sumitkumargarsa",
      githubUrl: "https://github.com/sumitkumargarsa",
      deliverables: [
        "Next.js Customer Booking Application",
        "Mapbox Real-Time Route & Geolocation Visualizer",
        "Dynamic Fare Calculation Engine",
        "Secure Stripe Payment Processing Pipeline",
      ],
    },
    {
      id: "nexide-browser-ide",
      number: "03",
      title: "NEXIDE BROWSER CODE COMPILER",
      subtitle: "Multi-language browser IDE with syntax highlighting and Judge0 sandboxed execution.",
      category: "Full-Stack",
      year: "2025",
      client: "Personal Project",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      description: "Browser-based development environment supporting 10+ programming languages with syntax highlighting via CodeMirror and automated test case execution via Judge0 API.",
      problem: "Executing arbitrary user code safely while keeping browser editor rendering smooth during large file edits and rapid language switching.",
      approach: "Configured CodeMirror syntax packs with optimized rendering pipelines and interfaced with Judge0 containerized execution sandbox.",
      result: "Smooth 60fps code editing with rapid language switching and isolated sandbox execution.",
      metrics: "10+ languages supported • 60fps editor UX • Instant test case execution",
      tech: ["React.js", "Vite", "CodeMirror", "Judge0 API", "Node.js", "Express.js", "Tailwind CSS"],
      liveUrl: "https://nex-ide-one.vercel.app/",
      githubUrl: "https://github.com/SumitKumarGarsa/NexIDE",
      deliverables: [
        "React.js (Vite) CodeMirror Editor Interface",
        "Judge0 Sandboxed Compilation API Bridge",
        "Automated Test Case Runner & Telemetry Panel",
        "Multi-Language Theme & Syntax Engine",
      ],
    },
    {
      id: "zetheta-fintech-platform",
      number: "04",
      title: "ZETHETA INVESTOR ONBOARDING PLATFORM",
      subtitle: "Investor onboarding and risk-profiling platform for SEBI-registered investment entity.",
      category: "Full-Stack",
      year: "2025",
      client: "ZeTheta Algorithms Pvt. Ltd.",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      description: "Built investor onboarding and risk-profiling UI and secure REST API endpoints for a SEBI-registered investment platform during a professional internship.",
      problem: "Translating compliance-heavy regulatory requirements into intuitive, low-latency interfaces with strict input validation.",
      approach: "Built modular, reusable React.js components and optimized backend REST API endpoints with data sanitization, structured error handling, and basic penetration testing.",
      result: "Delivered SEBI-compliant onboarding pipeline with sub-22ms response times and zero endpoint vulnerabilities.",
      metrics: "SEBI compliance ready • Sub-22ms P99 latency • 100% input sanitization",
      tech: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT", "Financial Compliance", "Data Sanitization"],
      liveUrl: "https://github.com/sumitkumargarsa",
      githubUrl: "https://github.com/sumitkumargarsa",
      deliverables: [
        "Investor Onboarding & Risk-Profiling UI",
        "Low-Latency Financial REST API Endpoints",
        "Input Sanitization & Structured Error Middleware",
        "Endpoint Penetration Testing & Security Audit",
      ],
    },
  ] as DevProject[],

  services: [
    {
      number: "01",
      title: "FULL-STACK MERN ARCHITECTURE",
      tagline: "End-to-end web applications built from scratch for extreme scale.",
      description: "Full-lifecycle engineering from clean MVC schema design in MongoDB to 60fps React client experiences. Built for maintainability, type safety, and zero deployment friction.",
      deliverables: [
        "Full-Stack MERN codebase with modular clean architecture",
        "Horizontal scaling & sharded MongoDB Atlas deployment",
        "Type-safe API layer (TypeScript, Express, Zod validation)",
        "Automated CI/CD test gates (Jest, Supertest, Cypress)",
      ],
      tags: ["MongoDB", "Express", "React 18", "Node.js", "TypeScript"],
    },
    {
      number: "02",
      title: "REST & GRAPHQL API ENGINEERING",
      tagline: "High-concurrency API gateways, microservices, and federation.",
      description: "Scalable backend architectures designed for sub-50ms latency. Includes rate limiting, token authentication, and distributed caching layers.",
      deliverables: [
        "High-throughput Express / Fastify microservices",
        "GraphQL schema stitching & Apollo Federation",
        "Redis caching & token-bucket rate limiting",
        "Automated OpenAPI / Swagger interactive documentation",
      ],
      tags: ["Node.js", "Fastify", "GraphQL", "Redis", "Docker"],
    },
    {
      number: "03",
      title: "REALTIME WEBSOCKET INFRASTRUCTURE",
      tagline: "Multiplayer collaboration, presence tracking, and live sync.",
      description: "Eliminating polling overhead with event-driven architectures. Scalable Socket.io clusters backed by Redis pub/sub adapters and Mongo change streams.",
      deliverables: [
        "Clustered WebSocket architecture with Redis adapter",
        "CRDT state synchronization & live conflict resolution",
        "Optimistic UI rollbacks on React frontend",
        "Guaranteed message ordering and reconnection logic",
      ],
      tags: ["WebSockets", "Socket.io", "Redis Streams", "CRDTs"],
    },
    {
      number: "04",
      title: "DATABASE MODELING & PERFORMANCE TUNING",
      tagline: "Unlocking 10x query performance and optimizing cloud expenses.",
      description: "Compound indexing strategies, aggregation pipeline redesign, and memory profiling to eliminate connection pool bottlenecks in MongoDB Atlas.",
      deliverables: [
        "Compound indexing & explain plan query audits",
        "High-performance aggregation pipeline redesign",
        "Time-series and archived collection data strategy",
        "Connection pool and replica set failover tuning",
      ],
      tags: ["MongoDB Atlas", "Indexing", "Aggregation", "Profiling"],
    },
  ] as DevService[],

  marqueeStack: [
    "MongoDB Atlas",
    "Express.js",
    "React 18",
    "Node.js",
    "Next.js App Router",
    "TypeScript 5",
    "Tailwind CSS v4",
    "Docker Containerization",
    "Redis Pub/Sub",
    "WebSockets & CRDTs",
    "GraphQL Federation",
    "AWS Cloud Services",
    "Vercel Edge Network",
  ],

  journal: [
    {
      id: "scaling-mongo-10m-writes",
      date: "FEB 2026",
      readTime: "7 min read",
      title: "Scaling MongoDB to 10 Million Writes/Sec in High-Throughput Node.js Clusters",
      summary: "How unacknowledged bulk writes, targeted hash sharding, and connection pooling unlock astronomical database throughput.",
      tags: ["MongoDB", "Node.js", "Scalability", "Databases"],
    },
    {
      id: "react19-compiler-server-actions",
      date: "JAN 2026",
      readTime: "5 min read",
      title: "React Compiler & Server Actions in Modern MERN Stacks",
      summary: "Why the death of manual useMemo and the arrival of Server Actions are rewriting the full-stack development paradigm.",
      tags: ["React", "Next.js", "Performance", "Frontend"],
    },
    {
      id: "crdt-multiplayer-websockets",
      date: "DEC 2025",
      readTime: "8 min read",
      title: "Building Real-Time Collaborative Canvases with CRDTs and WebSockets",
      summary: "Deconstructing how Conflict-Free Replicated Data Types prevent state divergence across distributed multiplayer web apps.",
      tags: ["WebSockets", "CRDTs", "Node.js", "Architecture"],
    },
  ] as DevArticle[],

  experience: [
    {
      role: "Senior Software Engineer & Co-Founder",
      company: "Nayeraa Nazaakat",
      period: "Jul 2026 — Present",
      location: "Hanumangarh Junction, Rajasthan",
      description: "Co-founded the venture and spearheaded end-to-end technology architecture, custom e-commerce platform engineering, payment integrations, and administrative dashboards.",
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Payment Gateways", "REST APIs"],
    },
    {
      role: "Independent Full-Stack Developer",
      company: "Personal Projects & Upskilling",
      period: "Aug 2025 — Present",
      location: "Remote",
      description: "Designed and shipped three production-style full-stack applications (CodeSync, RideFlow, NexIDE) in React.js (Vite), TypeScript, Node.js, and Framer Motion. Solved 552 LeetCode DSA problems.",
      technologies: ["React.js (Vite)", "TypeScript", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Docker", "LeetCode (552 DSA)"],
    },
    {
      role: "Frontend & Backend Developer — Intern",
      company: "ZeTheta Algorithms Pvt. Ltd.",
      period: "May 2025 — Jul 2025",
      location: "Remote",
      description: "Built investor onboarding and risk-profiling UI and secure REST API endpoints for a SEBI-registered investment platform with strict input validation and data sanitization.",
      technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT", "Financial Compliance", "Data Sanitization"],
    },
    {
      role: "Full-Stack Development Lead",
      company: "VIT Student Organizations",
      period: "Aug 2021 — Apr 2025",
      location: "Vellore, India",
      description: "Led a team of 8+ developers to design, build, and ship multiple MERN stack applications, cutting delivery time by 40%. Architected real-time WebSocket features handling 50+ concurrent users.",
      technologies: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "WebSocket", "Socket.io", "Tailwind CSS", "Framer Motion"],
    },
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/sumitkumargarsa", handle: "@sumitkumargarsa" },
    { name: "LinkedIn", url: "https://linkedin.com/in/sumitkumargarsa", handle: "in/sumitkumargarsa" },
    { name: "Twitter / X", url: "https://twitter.com/sumitgarsa", handle: "@sumitgarsa" },
    { name: "Contact", url: "/contact", handle: "Inquiry Form" },
  ],
};
