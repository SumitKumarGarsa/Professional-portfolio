import { Project } from "../models/Project.js";

// Fallback seed projects for offline / cold database starts
const STATIC_PROJECTS = [
  {
    slug: "nexusflow-realtime-engine",
    number: "01",
    title: "NEXUSFLOW",
    subtitle: "Enterprise Realtime Collaboration & Event Streaming Platform",
    category: "Full-Stack",
    year: "2025",
    client: "HyperScale Tech",
    role: "Lead Full-Stack Architect",
    timeline: "4 Months",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    featured: true,
    overview: "NexusFlow is a high-concurrency enterprise collaboration suite built on the MERN stack with distributed Redis pub/sub clusters.",
    problem: "The client's legacy microservices suffered from socket dropouts during sudden traffic spikes.",
    approach: "Engineered an event-driven Node.js worker pipeline paired with an in-memory Redis cluster for volatile state caching.",
    architecture: "Client (React 18 + WebSocket) -> NGINX Load Balancer -> Node.js / Express Gateway -> Redis Pub/Sub Cluster -> MongoDB Sharded Cluster",
    keyFeatures: [
      "Sub-20ms distributed WebSocket synchronization using binary payloads",
      "Dynamic multi-tenant organization tenancy with role-based access control (RBAC)",
      "Automated MongoDB aggregation pipelines for weekly telemetry audits",
    ],
    challengesAndSolutions: [
      {
        challenge: "Handling 40,000 simultaneous WebSocket connections without memory leaks.",
        solution: "Implemented Redis-backed horizontal clustering with Socket.io adapters.",
      },
    ],
    metrics: [
      { label: "P99 Sync Latency", value: "<18ms" },
      { label: "Active Connections", value: "40k+" },
      { label: "Throughput Increase", value: "+340%" },
    ],
    deliverables: ["React 18 Portal", "Express REST & WebSocket Engine", "MongoDB Sharded Schema"],
    tech: ["React 18", "Node.js", "Express", "MongoDB", "Redis", "TypeScript", "Socket.io"],
    liveUrl: "https://nexusflow.example.com",
    githubUrl: "https://github.com/sumitkumargarsa/nexusflow",
  },
  {
    slug: "devpulse-telemetry-saas",
    number: "02",
    title: "DEVPULSE",
    subtitle: "Cloud Performance Monitoring & Distributed APM Dashboard",
    category: "SaaS",
    year: "2024",
    client: "Apex Metrics Corp",
    role: "Senior Backend & React Engineer",
    timeline: "3 Months",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=80",
    featured: true,
    overview: "DevPulse is an intelligent developer observability and real-user monitoring (RUM) platform.",
    problem: "Ingesting millions of high-frequency metrics created severe database write locks.",
    approach: "Implemented a high-ingestion time-series MongoDB schema pattern combined with an in-memory aggregation ring buffer in Node.js.",
    architecture: "Microservice Agents -> Ingestion Node.js Buffer -> MongoDB Time-Series Collections -> Express GraphQL API",
    keyFeatures: [
      "High-throughput timeseries metric pipeline ingesting 15k events/sec",
      "Interactive SVG + Canvas data graphs with smooth temporal zooming",
    ],
    challengesAndSolutions: [
      {
        challenge: "Rendering 100,000 data points on client browsers without frame drops.",
        solution: "Implemented WebGL-assisted downsampling before feeding canvas.",
      },
    ],
    metrics: [
      { label: "Daily Ingestion", value: "12M+" },
      { label: "Query Speedup", value: "12x" },
    ],
    deliverables: ["Custom SaaS Dashboard", "Time-Series Mongo Architecture", "GraphQL Gateway"],
    tech: ["Node.js", "Express", "MongoDB", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://devpulse.example.com",
    githubUrl: "https://github.com/sumitkumargarsa/devpulse",
  },
  {
    slug: "omnivault-digital-commerce",
    number: "03",
    title: "OMNIVAULT",
    subtitle: "Headless E-Commerce Platform & High-Throughput Checkout",
    category: "Full-Stack",
    year: "2024",
    client: "Omni Brands Global",
    role: "Full-Stack Developer",
    timeline: "5 Months",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    featured: true,
    overview: "A modern headless commerce engine engineered for luxury lifestyle retailers.",
    problem: "High flash-sale concurrency regularly oversold limited-run inventory items.",
    approach: "Architected atomic MongoDB optimistic concurrency operations with two-phase commit transactions.",
    architecture: "Next.js App Router Storefront -> Node.js / Express Core -> MongoDB Distributed Replica Set -> Stripe Billing",
    keyFeatures: [
      "Sub-100ms globally distributed page loads using Next.js ISR",
      "Strict atomic stock reservation preventing double-purchase races",
    ],
    challengesAndSolutions: [
      {
        challenge: "Flash sales generating 5,000 checkout requests within 3 seconds.",
        solution: "Implemented Redis token bucket rate limiters and atomic Mongo $inc operations.",
      },
    ],
    metrics: [
      { label: "Checkout Dropoff", value: "-42%" },
      { label: "Flash Sale Volume", value: "$1.4M" },
    ],
    deliverables: ["Storefront in Next.js", "Order Processing API", "Stripe Webhook Handlers"],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveUrl: "https://omnivault.example.com",
    githubUrl: "https://github.com/sumitkumargarsa/omnivault",
  },
  {
    slug: "apexscale-api-gateway",
    number: "04",
    title: "APEXSCALE",
    subtitle: "High-Throughput Microservice Gateway & Rate Limiting Engine",
    category: "API",
    year: "2023",
    client: "Core Infrastructure Labs",
    role: "Backend Architect",
    timeline: "2 Months",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    featured: false,
    overview: "A production-grade reverse proxy and API routing gateway built on Node.js and Express.",
    problem: "Multiple backend teams were duplicating auth, rate-limiting, and validation.",
    approach: "Consolidated cross-cutting concerns into a unified high-speed gateway layer.",
    architecture: "Client Requests -> Edge Cloudflare -> ApexScale Gateway (Node.js) -> Redis Cache -> Microservice Mesh",
    keyFeatures: [
      "Zero-dependency high-speed route proxying with custom circuit breakers",
      "Distributed Redis sliding-window counter rate limiting",
    ],
    challengesAndSolutions: [
      {
        challenge: "Maintaining gateway latency under 5ms per request.",
        solution: "Cached asymmetric public keys in memory with automated JWKS refresh cycles.",
      },
    ],
    metrics: [
      { label: "P99 Gateway Overhead", value: "<3.4ms" },
      { label: "Daily Transactions", value: "35M+" },
    ],
    deliverables: ["Express Gateway Service", "Redis Rate Limiter", "Telemetry Dashboard"],
    tech: ["Node.js", "Express", "TypeScript", "Redis", "Docker"],
    githubUrl: "https://github.com/sumitkumargarsa/apexscale",
  },
];

export const getProjects = async (req, res, next) => {
  try {
    const { category, featured } = req.query;
    let filter = {};

    if (category && category !== "All") {
      filter.category = category;
    }

    if (featured === "true") {
      filter.featured = true;
    }

    let projects = [];
    try {
      projects = await Project.find(filter).sort({ number: 1 }).lean();
    } catch (dbErr) {
      console.warn("[ProjectController] MongoDB unavailable, serving static fallback:", dbErr.message);
    }

    if (!projects || projects.length === 0) {
      projects = STATIC_PROJECTS;
      if (category && category !== "All") {
        projects = projects.filter((p) => p.category === category);
      }
      if (featured === "true") {
        projects = projects.filter((p) => p.featured);
      }
    }

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

export const getProjectBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    let project = null;

    try {
      project = await Project.findOne({ slug }).lean();
    } catch (dbErr) {
      console.warn("[ProjectController] MongoDB query failed, checking static fallback:", dbErr.message);
    }

    if (!project) {
      project = STATIC_PROJECTS.find((p) => p.slug === slug);
    }

    if (!project) {
      return res.status(404).json({
        success: false,
        code: "PROJECT_NOT_FOUND",
        message: `Project with slug '${slug}' was not found.`,
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
};
