export interface Service {
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  timeline: string;
  deliverables: string[];
  technologies: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface EngagementModel {
  title: string;
  subtitle: string;
  idealFor: string;
  pricing: string;
  features: string[];
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const servicesData: Service[] = [
  {
    number: "01",
    slug: "full-stack-web-apps",
    title: "FULL-STACK WEB APPS",
    tagline: "End-to-end modern web applications built for speed, scale, and longevity.",
    description:
      "From database schema design to 60fps responsive React user interfaces, I architect complete web products with clean MVC foundations, strict TypeScript typing, and battle-tested production deployments.",
    timeline: "4 to 8 Weeks",
    deliverables: [
      "Custom responsive React 18 / Next.js frontend with Tailwind CSS",
      "Robust Node.js & Express REST/GraphQL backend architecture",
      "Normalized or sharded MongoDB database models with indexes",
      "Authentication (JWT / NextAuth / OAuth2) & Role-Based Access Control",
      "Automated CI/CD deployment on Vercel, Railway, or AWS",
      "Complete documentation & handoff session",
    ],
    technologies: ["React 18", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    slug: "rest-graphql-apis",
    title: "REST & GRAPHQL APIS",
    tagline: "High-throughput, secure microservice architectures with microsecond latency.",
    description:
      "Designing and optimizing production-grade API engines capable of processing millions of daily requests. Includes schema validation, cryptographic token handling, Redis caching, and automated OpenAPI documentation.",
    timeline: "2 to 5 Weeks",
    deliverables: [
      "Modular, versioned Express.js RESTful or GraphQL endpoints",
      "Strict schema validation using Zod and express-validator",
      "Redis sliding-window rate limiting & distributed caching layers",
      "Automated unit & integration test suites in Jest / Supertest",
      "Interactive Swagger / Postman workspace documentation",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "GraphQL", "JWT", "Docker"],
  },
  {
    number: "03",
    slug: "saas-admin-dashboards",
    title: "SAAS & ADMIN DASHBOARDS",
    tagline: "Complex telemetry visualization, data tables, and management consoles.",
    description:
      "Transforming massive datasets into intuitive, real-time interactive dashboards. Features high-performance virtualized tables, dynamic charts, CSV exports, and multi-tenant permission hierarchies.",
    timeline: "3 to 6 Weeks",
    deliverables: [
      "Virtualized data tables handling 50k+ records without DOM lag",
      "Interactive SVG & Canvas charting engines (Recharts / Chart.js)",
      "Multi-tenant workspace management & team invitation flows",
      "Stripe customer billing portal & webhook integration",
      "Dark/Light mode token design systems",
    ],
    technologies: ["React 18", "Next.js", "Tailwind CSS", "MongoDB Aggregations", "Stripe API"],
  },
  {
    number: "04",
    slug: "performance-seo",
    title: "PERFORMANCE & SEO",
    tagline: "Achieving 95+ Core Web Vitals, sub-second TTFB, and top Google rankings.",
    description:
      "Comprehensive performance refactoring for sluggish web apps. Eliminating cumulative layout shifts, optimizing MongoDB aggregation bottlenecks, and implementing Next.js Server Components for lightning-quick First Contentful Paint.",
    timeline: "1 to 3 Weeks",
    deliverables: [
      "Core Web Vitals audit & Lighthouse 95+ score achievement",
      "Database query profiling, compound indexing, and aggregation tuning",
      "Bundle size minification, tree-shaking, and code-splitting",
      "Semantic HTML5, automated XML sitemaps, and Schema.org JSON-LD structured data",
      "Server-side cache configuration (Redis & Edge CDN)",
    ],
    technologies: ["Next.js SSR/ISR", "MongoDB Profiler", "Redis", "Lighthouse", "Edge Caching"],
  },
  {
    number: "05",
    slug: "deployment-devops",
    title: "DEPLOYMENT & DEVOPS",
    tagline: "Automated containerized pipelines, zero-downtime releases, and cloud security.",
    description:
      "Setting up dependable, automated delivery pipelines so your product deploys seamlessly on every commit with automatic rollbacks, health checking, and strict security headers.",
    timeline: "1 to 3 Weeks",
    deliverables: [
      "Multi-stage Dockerfile builds with minimal image size",
      "GitHub Actions CI/CD workflows for linting, testing, and cloud deployment",
      "Zero-downtime rolling deploys on Vercel, Render, Railway, or AWS ECS",
      "Strict security header enforcement (CSP, HSTS, CORS, X-Frame-Options)",
      "Automated MongoDB Atlas automated backups and monitoring alerts",
    ],
    technologies: ["Docker", "GitHub Actions", "AWS", "Vercel", "Render", "MongoDB Atlas"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER & SCOPE",
    description:
      "We dissect product requirements, analyze user user journeys, and establish technical constraints to form a deterministic delivery blueprint.",
    details: [
      "Technical architecture specification document",
      "Database schema & entity relationship mapping",
      "Scope matrix & milestone delivery schedule",
    ],
  },
  {
    number: "02",
    title: "ARCHITECT & DESIGN",
    description:
      "Establishing design tokens, API contracts, and clean repository foundations before writing production code.",
    details: [
      "Interactive UI component specifications",
      "OpenAPI / Swagger endpoint documentation",
      "Design token variables (--bg, --text, --accent)",
    ],
  },
  {
    number: "03",
    title: "ITERATIVE BUILD",
    description:
      "Rapid sprint-based development with weekly staging deployments and transparent Git commit logs.",
    details: [
      "Clean, modular TypeScript & MERN stack code",
      "Continuous integration with automated test validation",
      "Staging server access for real-time review",
    ],
  },
  {
    number: "04",
    title: "OPTIMIZE & LAUNCH",
    description:
      "Rigorous quality assurance, load testing, security auditing, and zero-downtime DNS deployment.",
    details: [
      "Lighthouse 95+ performance optimization",
      "Security audit (OWASP Top 10, rate limiting, sanitization)",
      "Production deployment on Vercel / Render / Atlas",
    ],
  },
  {
    number: "05",
    title: "SUPPORT & EVOLVE",
    description:
      "Post-launch telemetry monitoring, performance profiling, and continuous feature expansion.",
    details: [
      "30-day post-launch warranty & bug fixes",
      "Database maintenance & backup verification",
      "Long-term retainer or handoff training",
    ],
  },
];

export const engagementModels: EngagementModel[] = [
  {
    title: "FIXED PROJECT",
    subtitle: "Defined Scope & Milestone Delivery",
    idealFor: "Startups and teams with clear product requirements and a fixed timeline.",
    pricing: "Milestone-based",
    features: [
      "Deterministic fixed scope & milestone timeline",
      "Full source code & documentation ownership",
      "Weekly staging demonstrations",
      "30-day post-launch bug warranty",
    ],
    cta: "Scope a Project",
  },
  {
    title: "DEDICATED RETAINER",
    subtitle: "Continuous Engineering & Architecture",
    idealFor: "Growing businesses needing dedicated senior full-stack firepower every month.",
    pricing: "Monthly commitment",
    features: [
      "Guaranteed priority sprint hours each week",
      "Direct Slack / Discord channel collaboration",
      "Architectural consulting & code reviews",
      "Fast response SLA (< 4 hours)",
    ],
    cta: "Discuss Retainer",
  },
  {
    title: "TECHNICAL AUDIT / HOURLY",
    subtitle: "Performance & Architecture Overhauls",
    idealFor: "Existing products requiring performance tuning, refactoring, or security hardening.",
    pricing: "Flexible hourly",
    features: [
      "Deep-dive codebase & database query profiling",
      "Actionable refactoring roadmap report",
      "Targeted optimization of critical bottlenecks",
      "Zero long-term commitment",
    ],
    cta: "Book an Audit",
  },
];

export const faqsData: FAQItem[] = [
  {
    question: "What is your primary technology stack?",
    answer:
      "My primary specialization is the modern MERN stack: MongoDB (Mongoose), Express.js, React 18, and Node.js, built with TypeScript, Next.js (App Router), Tailwind CSS, Redis, and Framer Motion. I also deploy containerized microservices via Docker onto Vercel, Railway, Render, and AWS.",
  },
  {
    question: "How do we collaborate throughout the project?",
    answer:
      "Transparency is fundamental. We use private GitHub repositories for code review, weekly staging deployments for interactive testing, and dedicated communication channels (Slack, Discord, or Email) for async alignment.",
  },
  {
    question: "Do you handle both frontend and backend development?",
    answer:
      "Yes, completely. I handle everything from database schema design, Redis caching, and Express REST/GraphQL APIs on the backend, to responsive, accessible, 60fps React interfaces with custom animations on the frontend.",
  },
  {
    question: "What is your availability for new contracts?",
    answer:
      "I am currently accepting new select client engagements for Q2/Q3 2026. Reach out through the contact page to reserve a development slot.",
  },
];
