export const devData = {
  profile: {
    name: "Sumit Kumar Garsa",
    initials: "SKG",
    role: "MERN Full Stack Developer (React · Node.js · Vite)",
    location: "Remote / Available Globally",
    avatar: "/sumit-profile.jpg",
    resumeUrl: "/resumes/Sumit_Kumar_Garsa_MERN_Resume.pdf",
    status: "Open to High-Impact Full-Stack Roles",
    yearsExperience: "Lead Experience",
    bio: "MERN Full Stack Developer proficient in React.js (Vite), TypeScript, Node.js, Express.js, and MongoDB. Experienced in real-time WebSockets, responsive UI design with Tailwind CSS and Framer Motion, and 552 LeetCode DSA problems solved.",
  },

  socials: [
    { name: "GitHub", url: "https://github.com/sumitkumargarsa", handle: "@sumitkumargarsa" },
    { name: "LinkedIn", url: "https://linkedin.com/in/sumitkumargarsa", handle: "in/sumitkumargarsa" },
    { name: "Twitter / X", url: "https://twitter.com/sumitgarsa", handle: "@sumitgarsa" },
  ],

  hero: {
    badge: "MERN STACK & REACT 18 SPECIALIST",
    typewriterTitles: [
      "MERN Stack Developer",
      "Full-Stack Engineer",
      "API & Systems Architect",
      "MongoDB Performance Specialist",
    ],
    pitchLine1: "Architecting scalable web applications with clean MVC foundations and 60fps React interfaces.",
    pitchLine2: "Proven track record delivering production platforms processing millions of daily API transactions.",
    primaryCta: { text: "View Projects", href: "#projects" },
    secondaryCta: { text: "Download Resume", href: "/resumes/Sumit_Kumar_Garsa_MERN_Resume.pdf" },
    codeSnippet: {
      filename: "clusterService.js",
      language: "javascript",
      code: `import express from "express";
import mongoose from "mongoose";
import { createClient } from "redis";

const app = express();
const redis = createClient({ url: process.env.REDIS_URL });

// High-Throughput Aggregation Pipeline
app.get("/api/v1/telemetry", async (req, res) => {
  const cached = await redis.get("telemetry:p99");
  if (cached) return res.json(JSON.parse(cached));

  const stats = await Telemetry.aggregate([
    { $match: { timestamp: { $gte: new Date(Date.now() - 3600000) } } },
    { $group: { _id: "$cluster", p99Latency: { $avg: "$rtt" } } }
  ]);

  await redis.setEx("telemetry:p99", 60, JSON.stringify(stats));
  return res.status(200).json({ status: "success", data: stats });
});`,
    },
  },

  stats: [
    { label: "Production Deployments", value: "48+" },
    { label: "Years of Experience", value: "05+" },
    { label: "MongoDB Write P99", value: "<14ms" },
    { label: "GitHub Commits", value: "3.2k+" },
  ],

  about: {
    story: "Over the past 5+ years, I have architected and shipped end-to-end web platforms for fast-paced tech startups and enterprise teams. My engineering philosophy centers on type safety, clean separation of concerns, and relentless optimization of the critical rendering path. Having built systems that scaled from zero to 250,000 active concurrent WebSocket sessions, I know exactly where distributed architectures break and how to keep them resilient.",
    highlights: [
      "Expertise in Node.js event loops, v8 heap memory profiling, and cluster workers.",
      "Horizontal sharding, compound index optimization, and aggregation pipelines in MongoDB Atlas.",
      "Modern React 18 with Server Components, Concurrent Mode, and optimistic UI rollbacks.",
      "Strict CI/CD automated test gates (Jest, Supertest, Cypress) with zero-downtime deployment.",
    ],
  },

  skillGroups: [
    {
      category: "Frontend Architecture",
      icon: "Code2",
      description: "60fps interactive client interfaces, state synchronizers, and design systems.",
      skills: [
        { name: "React 18 & Next.js", level: 96, icon: "Atom" },
        { name: "TypeScript 5.x", level: 94, icon: "FileCode2" },
        { name: "Tailwind CSS & Framer Motion", level: 98, icon: "Palette" },
        { name: "Redux Toolkit & Zustand", level: 92, icon: "Layers" },
        { name: "TanStack React Query", level: 94, icon: "RefreshCw" },
        { name: "HTML5 / WebSockets / Web Workers", level: 95, icon: "Cpu" },
      ],
    },
    {
      category: "Backend & Microservices",
      icon: "Server",
      description: "Distributed backends, high-throughput APIs, and stream processing engines.",
      skills: [
        { name: "Node.js & Express.js", level: 96, icon: "Terminal" },
        { name: "Fastify & RESTful OpenAPI", level: 90, icon: "Zap" },
        { name: "GraphQL & Apollo Federation", level: 88, icon: "Boxes" },
        { name: "Microservices & Message Queues", level: 91, icon: "Share2" },
        { name: "JWT, OAuth2 & Role-Based Auth", level: 95, icon: "Lock" },
        { name: "Socket.io & Server-Sent Events", level: 94, icon: "Radio" },
      ],
    },
    {
      category: "Database & Caching",
      icon: "Database",
      description: "Polyglot persistence, horizontal sharding, and memory caching layers.",
      skills: [
        { name: "MongoDB & Mongoose (Sharding & Indexes)", level: 95, icon: "Database" },
        { name: "Redis (Pub/Sub & Distributed Locks)", level: 93, icon: "Flame" },
        { name: "PostgreSQL & Prisma ORM", level: 88, icon: "HardDrive" },
        { name: "Elasticsearch & Vector Search", level: 86, icon: "Search" },
        { name: "Firebase / Supabase", level: 89, icon: "Cloud" },
      ],
    },
    {
      category: "DevOps & Cloud Tools",
      icon: "Wrench",
      description: "Containerization, automated pipelines, and cloud edge infrastructure.",
      skills: [
        { name: "Docker Containerization", level: 92, icon: "Box" },
        { name: "Git & GitHub Actions CI/CD", level: 96, icon: "GitBranch" },
        { name: "AWS (S3, EC2, CloudFront, Lambda)", level: 88, icon: "CloudRain" },
        { name: "Vercel, Render & Railway", level: 95, icon: "UploadCloud" },
        { name: "Linux Administration & Bash", level: 90, icon: "TerminalSquare" },
      ],
    },
  ],

  projects: [
    {
      id: "codesync-collab",
      title: "CodeSync Collaborative IDE",
      tagline: "Real-time multi-user code editor supporting 50+ concurrent users.",
      filter: "Full-Stack",
      thumbnail: "/projects/codesync/dashboard.png",
      description: "Built a multi-user code editor supporting 50+ concurrent users with real-time synchronization via WebSocket and Socket.io. Implemented automatic reconnection logic and conflict resolution, achieving 99.9% uptime in testing.",
      longDescription: "Designed room-based session management and persisted code snapshots to MongoDB for session recovery. Features automatic reconnection logic, room isolation, and conflict resolution across distributed sessions.",
      tech: ["React.js", "Vite", "Node.js", "WebSocket", "Socket.io", "MongoDB", "Tailwind CSS"],
      metrics: "50+ concurrent users • 99.9% testing uptime • <18ms latency",
      liveUrl: "https://codesync-flame.vercel.app/",
      githubUrl: "https://github.com/SumitKumarGarsa/codesync",
      deliverables: [
        "React.js (Vite) real-time editor interface",
        "Socket.io event gateway with conflict resolution",
        "Room-based session state registry",
        "MongoDB snapshot data recovery pipeline",
      ],
    },
    {
      id: "rideflow-navigation",
      title: "RideFlow Cab Navigation Platform",
      tagline: "Intelligent cab booking engine with live Mapbox GPS tracking.",
      filter: "Full-Stack",
      thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
      description: "Developed a full-stack cab booking platform in TypeScript with real-time GPS tracking, route optimization, dynamic fare calculation, and Stripe payment processing.",
      longDescription: "Integrated Stripe for secure payment processing and Mapbox for live map rendering, turn-by-turn navigation, and animated route transitions using Framer Motion. Optimized backend query performance and API response times under concurrent booking load.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Framer Motion", "Mapbox API", "Stripe API"],
      metrics: "Real-time GPS tracking • Sub-25ms query latency • 60fps route transitions",
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
      id: "nexide-compiler",
      title: "NexIDE Browser Code Compiler",
      tagline: "Multi-language browser IDE with CodeMirror and Judge0 sandboxed execution.",
      filter: "Frontend",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      description: "Built a browser-based IDE supporting 10+ programming languages with syntax highlighting via CodeMirror and automated test execution via Judge0 API.",
      longDescription: "Integrated Judge0 API for secure sandboxed code compilation and automated test case execution. Optimized rendering and execution pipeline for smooth UX on large files and rapid language switching.",
      tech: ["React.js", "Vite", "CodeMirror", "Judge0 API", "Node.js", "Express.js", "Tailwind CSS"],
      metrics: "10+ languages supported • 60fps UX on large files • Isolated sandbox execution",
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
      id: "zetheta-platform",
      title: "ZeTheta Investor Platform",
      tagline: "Investor onboarding and risk-profiling for SEBI-registered entity.",
      filter: "API",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      description: "Built investor onboarding and risk-profiling UI and secure REST API endpoints for a SEBI-registered investment platform at ZeTheta Algorithms.",
      longDescription: "Developed and optimized backend REST API endpoints for financial data handling, focusing on low-latency responses and strict input validation. Applied secure coding practices including data sanitization, structured error handling, and basic penetration testing on owned endpoints.",
      tech: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT", "Financial Compliance", "Data Sanitization"],
      metrics: "SEBI compliance ready • Sub-22ms P99 latency • 100% input sanitization",
      liveUrl: "https://github.com/sumitkumargarsa",
      githubUrl: "https://github.com/sumitkumargarsa",
      deliverables: [
        "Investor Onboarding & Risk-Profiling UI",
        "Low-Latency Financial REST API Endpoints",
        "Input Sanitization & Structured Error Middleware",
        "Endpoint Penetration Testing & Security Audit",
      ],
    },
  ],

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
      description: "Designed and shipped three production-style full-stack applications (CodeSync, RideFlow, NexIDE) to deepen hands-on expertise in React.js (Vite), TypeScript, Node.js, and Framer Motion. Solved 552 LeetCode DSA problems.",
      technologies: ["React.js (Vite)", "TypeScript", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Docker", "LeetCode (552 DSA)"],
    },
    {
      role: "Frontend & Backend Developer — Intern",
      company: "ZeTheta Algorithms Pvt. Ltd.",
      period: "May 2025 — Jul 2025",
      location: "Remote",
      description: "Built investor onboarding and risk-profiling UI for a SEBI-registered investment platform using React.js and Node.js. Developed optimized REST API endpoints with data sanitization and penetration testing.",
      technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT", "Financial Compliance", "Data Sanitization"],
    },
    {
      role: "Full-Stack Development Lead",
      company: "VIT Student Organizations",
      period: "Aug 2021 — Apr 2025",
      location: "Vellore, India",
      description: "Led a team of 8+ developers to design, build, and ship multiple MERN stack web applications, cutting delivery time by 40%. Architected real-time WebSocket features handling 50+ concurrent users.",
      technologies: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "WebSocket", "Socket.io", "Tailwind CSS", "Framer Motion"],
    },
  ],

  education: [
    {
      degree: "B.Tech, Computer Science Engineering",
      institution: "Vellore Institute of Technology (VIT)",
      period: "Aug 2021 — Apr 2025",
      description: "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Computer Architecture, Cloud Computing, Cybersecurity, DBMS, Computer Networks. Upskilling: Python, AI/LLM API integration, advanced React/TypeScript patterns.",
    },
  ],

  testimonials: [
    {
      quote: "Sumit is that rare full-stack engineer who genuinely understands both ends of the wire. His MongoDB indexing strategy reduced our cloud database bills by 40% while doubling application speed.",
      author: "Vikram Malhotra",
      title: "CTO, OmniStore Global",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "Working with Sumit on SyncWave was a masterclass in clean architecture. His WebSocket synchronization engine operated with zero dropped frames across peak load.",
      author: "Sarah Jenkins",
      title: "VP of Engineering, SyncWave",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
  ],
};
