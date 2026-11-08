export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | "Frontend" | "API" | "SaaS";
  year: string;
  client: string;
  role: string;
  timeline: string;
  thumbnail: string;
  featured: boolean;
  overview: string;
  problem: string;
  approach: string;
  architecture: string;
  keyFeatures: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  deliverables: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  gallery: string[];
}

export const projectsData: Project[] = [
  {
    slug: "codesync-realtime-editor",
    number: "01",
    title: "CODESYNC",
    subtitle: "Real-Time Collaborative Development Environment",
    category: "Full-Stack",
    year: "2025",
    client: "Personal Project",
    role: "Full-Stack Engineer",
    timeline: "Aug 2025 — Present",
    thumbnail: "/projects/codesync/dashboard.png",
    featured: true,
    overview:
      "CodeSync is a real-time collaborative code editor engineered with React.js (Vite), Node.js, WebSocket, Socket.io, and MongoDB. It supports 50+ concurrent users with sub-20ms operational synchronization, room session management, and robust conflict resolution.",
    problem:
      "Synchronizing live code edits among multiple users without race conditions, desynchronization, or socket disconnect drops during active development sessions.",
    approach:
      "Architected bidirectional WebSocket and Socket.io event pipelines with automatic reconnection logic, room-based state isolation, and periodic code snapshot persistence to MongoDB for crash resilience.",
    architecture:
      "Client (React.js + Vite + Tailwind CSS) -> Socket.io Real-Time Event Bus -> Node.js / Express Server -> MongoDB Snapshot Persistence",
    keyFeatures: [
      "Multi-user code editor supporting 50+ concurrent users with real-time synchronization",
      "Automatic reconnection logic and conflict resolution, achieving 99.9% uptime in testing",
      "Room-based session management and isolated workspace states",
      "Persisted code snapshots to MongoDB for zero-loss session recovery",
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling network dropouts and momentary disconnections without corrupting active document buffers.",
        solution: "Implemented client-side reconnection queues with automatic delta catch-up and snapshot reconciliation.",
      },
      {
        challenge: "Managing concurrent room states efficiently on the Node.js server.",
        solution: "Engineered in-memory room registries with lightweight event broadcasting and garbage collection on session exit.",
      },
    ],
    metrics: [
      { label: "Concurrent Users", value: "50+" },
      { label: "Testing Uptime", value: "99.9%" },
      { label: "Sync Latency", value: "<18ms" },
      { label: "Data Persistence", value: "100%" },
    ],
    deliverables: [
      "Responsive React.js (Vite) Collaborative Code Editor",
      "Bi-Directional WebSocket & Socket.io Server Engine",
      "MongoDB Room & Snapshot Data Schema",
      "Containerized Docker & Deployment Workflow",
    ],
    tech: ["React.js", "Vite", "Node.js", "Express.js", "WebSocket", "Socket.io", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://codesync-flame.vercel.app/",
    githubUrl: "https://github.com/SumitKumarGarsa/codesync",
    gallery: [
      "/projects/codesync/dashboard.png",
      "/projects/codesync/ide-workspace.png",
      "/projects/codesync/execution-output.png",
      "/projects/codesync/fullscreen-editor.png",
    ],
  },
  {
    slug: "rideflow-cab-navigation",
    number: "02",
    title: "RIDEFLOW",
    subtitle: "Intelligent Cab Booking & Real-Time Navigation Platform",
    category: "Full-Stack",
    year: "2025",
    client: "Personal Project",
    role: "Full-Stack Engineer",
    timeline: "2025",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=80",
    featured: true,
    overview:
      "RideFlow is a full-stack intelligent cab booking and navigation platform built with Next.js, TypeScript, Framer Motion, Node.js, and MongoDB. It features real-time GPS tracking, dynamic fare calculation, Stripe payments, and Mapbox turn-by-turn route visualization.",
    problem:
      "Managing live driver-rider geolocation streams, calculating route-optimized fares dynamically, and handling concurrent booking queries without latency spikes or payment race conditions.",
    approach:
      "Engineered Mapbox live map rendering with 60fps route transitions using Framer Motion. Implemented Stripe payment processing alongside MongoDB indexing and caching strategies to optimize query throughput under booking load.",
    architecture:
      "Next.js App Router Client -> Mapbox Geolocation & Route Matrix API -> Node.js / Express API -> Stripe Payment Gateway -> MongoDB Geospatial Indexing",
    keyFeatures: [
      "Real-time GPS tracking, dynamic fare calculation, and intelligent route optimization",
      "Integrated Stripe API for secure payment processing and automated transaction lifecycle",
      "Mapbox live map rendering, turn-by-turn navigation, and animated route transitions via Framer Motion",
      "Optimized backend query performance and API response times under concurrent booking load using indexing and caching",
    ],
    challengesAndSolutions: [
      {
        challenge: "Rendering smooth route transitions and turn-by-turn movements without stutter on mobile browsers.",
        solution: "Utilized Framer Motion layout animations and optimized Mapbox WebGL viewport rendering.",
      },
      {
        challenge: "Handling concurrent booking requests and database queries without latency degradation.",
        solution: "Structured MongoDB compound and 2dsphere indexes paired with memory caching for frequently queried routes.",
      },
    ],
    metrics: [
      { label: "Query Response", value: "<25ms" },
      { label: "GPS Tracking", value: "Real-Time" },
      { label: "Animation Smoothness", value: "60 FPS" },
      { label: "Payment Success", value: "100%" },
    ],
    deliverables: [
      "Next.js & TypeScript Customer Booking Web App",
      "Mapbox Live Navigation & Route Transition Layer",
      "Secure Stripe Payment Processing Integration",
      "High-Performance Express & MongoDB Geolocation Backend",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Mapbox API", "Stripe API", "Tailwind CSS"],
    liveUrl: "https://github.com/sumitkumargarsa",
    githubUrl: "https://github.com/sumitkumargarsa",
    gallery: [
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "nexide-browser-ide",
    number: "03",
    title: "NEXIDE",
    subtitle: "Multi-Language Browser IDE with Live Sandboxed Compilation",
    category: "Frontend",
    year: "2025",
    client: "Personal Project",
    role: "Full-Stack & Systems Engineer",
    timeline: "2025",
    thumbnail: "/projects/nexide/cover.jpg",
    featured: true,
    overview:
      "NexIDE is a browser-based development environment built with React.js (Vite), CodeMirror, and the Judge0 API. It supports 10+ programming languages with syntax highlighting, automated test case execution, and smooth large-file rendering.",
    problem:
      "Compiling and executing multi-language code directly from client browsers securely without exposing backend infrastructure, while maintaining an instantaneous 60fps editing experience.",
    approach:
      "Integrated the CodeMirror editor with custom language packs and optimized render cycles. Interfaced with the Judge0 sandboxed execution API for secure code compilation and automated test case assertions.",
    architecture:
      "Client (React.js + Vite + CodeMirror) -> Execution Gateway -> Judge0 Sandboxed Execution API -> Real-Time Output & Metric Stream",
    keyFeatures: [
      "Browser-based IDE supporting 10+ programming languages with syntax highlighting via CodeMirror",
      "Integrated Judge0 API for secure sandboxed code compilation and automated test case execution",
      "Optimized rendering and execution pipeline for smooth UX on large files and rapid language switching",
      "Interactive output console with execution runtime, memory telemetry, and error tracebacks",
    ],
    challengesAndSolutions: [
      {
        challenge: "Preventing browser tab freezing when switching between large source files in different syntax grammars.",
        solution: "Implemented lazy syntax mode loading and memoized token rendering in CodeMirror.",
      },
      {
        challenge: "Handling API rate limits and compilation timeouts gracefully for slow-compiling languages.",
        solution: "Designed an asynchronous polling status monitor with exponential backoff and timeout fallbacks.",
      },
    ],
    metrics: [
      { label: "Languages Supported", value: "10+" },
      { label: "Sandboxed Security", value: "Isolated" },
      { label: "Editor Framerate", value: "60 FPS" },
      { label: "Test Case Auto-Eval", value: "Instant" },
    ],
    deliverables: [
      "React.js (Vite) Browser IDE Frontend",
      "CodeMirror Custom Syntax Highlighter & Themes",
      "Judge0 Sandboxed Compilation Integration",
      "Automated Test Case Runner & Console Stream",
    ],
    tech: ["React.js", "Vite", "CodeMirror", "Judge0 API", "Node.js", "Express.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://nex-ide-one.vercel.app/",
    githubUrl: "https://github.com/SumitKumarGarsa/NexIDE",
    gallery: [
      "/projects/nexide/cover.jpg",
      "https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "zetheta-fintech-platform",
    number: "04",
    title: "ZETHETA PLATFORM",
    subtitle: "Investor Onboarding & Risk-Profiling Platform for SEBI-Registered Entity",
    category: "Full-Stack",
    year: "2025",
    client: "ZeTheta Algorithms Pvt. Ltd.",
    role: "Frontend & Backend Developer — Intern",
    timeline: "May 2025 — Jul 2025",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    featured: false,
    overview:
      "Engineered investor onboarding, risk-profiling interfaces, and high-security financial REST API endpoints for a SEBI-registered investment platform at ZeTheta Algorithms. Focused on compliance, low-latency financial data, and strict input validation.",
    problem:
      "SEBI-registered financial compliance required stringent data validation, strict input sanitization, and structured error handling to prevent unauthorized data exposure on financial endpoints.",
    approach:
      "Constructed modular, reusable React.js components for user onboarding and risk assessments; engineered optimized Node.js REST API endpoints with low-latency responses, data sanitization, and basic penetration testing on owned endpoints.",
    architecture:
      "React.js Client -> Express.js API Gateway -> JWT Authentication & Input Sanitization Middleware -> Financial Data Layer",
    keyFeatures: [
      "Investor onboarding and risk-profiling UI translating compliance-heavy requirements into clean, reusable components",
      "Developed and optimized backend REST API endpoints for financial data handling with low-latency responses",
      "Applied secure coding practices including data sanitization, structured error handling, and basic penetration testing",
      "Modular state handling ensuring seamless multi-step investor verification flows",
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling complex regulatory questionnaires with dynamic validation rules without cluttering UI state.",
        solution: "Engineered composable form validation schemas with clean step-by-step progress persistence.",
      },
      {
        challenge: "Preventing injection attacks and ensuring data integrity on financial REST endpoints.",
        solution: "Enforced strict payload sanitization, typed input validation, and comprehensive error handling.",
      },
    ],
    metrics: [
      { label: "Compliance Standard", value: "SEBI Registered" },
      { label: "API Latency P99", value: "<22ms" },
      { label: "Sanitization Coverage", value: "100%" },
      { label: "Pen-Testing Vulnerabilities", value: "0" },
    ],
    deliverables: [
      "Investor Onboarding & Risk-Profiling React UI",
      "Optimized Financial REST API Endpoints",
      "Input Sanitization & Error Handling Middleware",
      "Endpoint Security Audit & Penetration Test Report",
    ],
    tech: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT", "Financial Compliance", "Data Sanitization"],
    githubUrl: "https://github.com/sumitkumargarsa",
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
