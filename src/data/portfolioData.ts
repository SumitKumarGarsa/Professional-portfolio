export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  longDescription: string;
  tech: string[];
  metrics: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  deliverables: string[];
}

export interface Service {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tags: string[];
}

export interface JournalPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export const MERN_PORTFOLIO_DATA = {
  brand: {
    name: "FORMA",
    creator: "Sumit Kumar Garsa",
    role: "MERN Full Stack Developer (React · Node.js · Vite)",
    badge: "MERN Stack Specialist",
    availability: "Open to Full-Stack Roles & High-Impact Opportunities",
    location: "Gurugram, Haryana | Remote (UTC +5:30)",
    email: "ersumitkumargarsa@gmail.com",
    bio: "Designing responsive, user-friendly web applications using React.js (Vite), Next.js, Tailwind CSS, and Framer Motion. Standing up Node.js REST APIs independently and owning features end-to-end.",
  },

  stats: [
    { label: "LeetCode DSA Solved", value: "552+" },
    { label: "Developers Led at VIT", value: "8+" },
    { label: "Concurrent Socket Users", value: "50+" },
    { label: "Testing WebSocket Uptime", value: "99.9%" },
  ],

  hero: {
    badge: "FULL-STACK MERN ARCHITECTURE",
    tagline: "REACT.JS (VITE) • NEXT.JS • NODE.JS • EXPRESS • MONGODB • 552 DSA",
    headlineLine1: "MERN FULL STACK",
    headlineLine2: "DEVELOPER",
    description: "Architecting high-scale web platforms from database indexing to 60fps React interfaces. Proficient across React.js (Vite), TypeScript, Node.js, Express, MongoDB, and real-time WebSockets.",
  },

  skills: [
    {
      title: "MERN Core & Frameworks",
      description: "Production-tested JavaScript & TypeScript full-stack ecosystem.",
      skills: [
        { name: "React.js (Vite) & Next.js", level: 98, highlight: true },
        { name: "Node.js & Express.js REST APIs", level: 96, highlight: true },
        { name: "MongoDB & Mongoose (Schema & Aggregations)", level: 95, highlight: true },
        { name: "TypeScript & JavaScript (ES6+)", level: 95, highlight: true },
        { name: "Tailwind CSS & Framer Motion", level: 96, highlight: true },
        { name: "Redux, Material UI & Bootstrap", level: 90 },
      ],
    },
    {
      title: "State, Realtime & DevOps",
      description: "Real-time synchronization, databases, and deployment pipelines.",
      skills: [
        { name: "WebSockets & Socket.io (Realtime)", level: 96, highlight: true },
        { name: "Data Structures & Algorithms (552 LeetCode)", level: 98, highlight: true },
        { name: "JWT Authentication & Role-Based Access", level: 95, highlight: true },
        { name: "MySQL & Firebase Firestore", level: 88 },
        { name: "Docker, Git & GitHub", level: 92, highlight: true },
        { name: "Vercel, Render, Linux & Nginx", level: 90 },
      ],
    },
  ] as SkillGroup[],

  projects: [
    {
      id: "codesync-collab",
      title: "CODESYNC REAL-TIME EDITOR",
      category: "Realtime Collaboration",
      year: "2025",
      client: "Personal Project",
      description: "Multi-user code editor supporting 50+ concurrent users with real-time synchronization via WebSocket and Socket.io.",
      longDescription: "Built a multi-user collaborative code editor supporting 50+ concurrent users with real-time synchronization via WebSocket and Socket.io. Implemented automatic reconnection logic and conflict resolution, achieving 99.9% uptime in testing. Designed room-based session management and persisted code snapshots to MongoDB for session recovery.",
      tech: ["React.js", "Vite", "Node.js", "WebSocket", "Socket.io", "MongoDB", "Tailwind CSS"],
      metrics: "50+ concurrent users • 99.9% testing uptime • <18ms latency",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com/sumitkumargarsa",
      githubUrl: "https://github.com/sumitkumargarsa",
      featured: true,
      deliverables: ["React.js (Vite) Code Editor", "Socket.io Reconnection Gateway", "Room State Registry", "MongoDB Snapshot Persistence"],
    },
    {
      id: "rideflow-navigation",
      title: "RIDEFLOW CAB NAVIGATION",
      category: "Full-Stack Web App",
      year: "2025",
      client: "Personal Project",
      description: "Full-stack cab booking platform with real-time GPS tracking, Mapbox route optimization, and Stripe payment processing.",
      longDescription: "Developed a full-stack cab booking platform in TypeScript with real-time GPS tracking, route optimization, and dynamic fare calculation. Integrated Stripe for secure payment processing and Mapbox for live map rendering, turn-by-turn navigation, and animated route transitions using Framer Motion. Optimized backend query performance and API response times under concurrent booking load using indexing and caching strategies.",
      tech: ["Next.js", "TypeScript", "Framer Motion", "Mapbox API", "Stripe API", "Node.js", "MongoDB"],
      metrics: "Real-time GPS tracking • Sub-25ms query latency • 60fps route transitions",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com/sumitkumargarsa",
      githubUrl: "https://github.com/sumitkumargarsa",
      featured: true,
      deliverables: ["Next.js Customer Booking App", "Mapbox Real-Time Route Layer", "Dynamic Pricing Engine", "Stripe Checkout Integration"],
    },
    {
      id: "nexide-compiler",
      title: "NEXIDE BROWSER COMPILER",
      category: "Frontend & Systems",
      year: "2025",
      client: "Personal Project",
      description: "Browser-based IDE supporting 10+ programming languages with syntax highlighting via CodeMirror and Judge0 sandboxed execution.",
      longDescription: "Built a browser-based IDE supporting 10+ programming languages with syntax highlighting via CodeMirror. Integrated Judge0 API for secure sandboxed code compilation and automated test case execution. Optimized rendering and execution pipeline for smooth UX on large files and rapid language switching.",
      tech: ["React.js", "Vite", "CodeMirror", "Judge0 API", "Node.js", "Express.js", "Tailwind CSS"],
      metrics: "10+ languages supported • 60fps UX on large files • Isolated sandbox execution",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com/sumitkumargarsa",
      githubUrl: "https://github.com/sumitkumargarsa",
      featured: true,
      deliverables: ["React.js CodeMirror Interface", "Judge0 Execution API Gateway", "Automated Test Case Runner", "Syntax Theme System"],
    },
    {
      id: "zetheta-platform",
      title: "ZETHETA INVESTOR PLATFORM",
      category: "FinTech Compliance",
      year: "2025",
      client: "ZeTheta Algorithms Pvt. Ltd.",
      description: "Investor onboarding and risk-profiling UI and secure REST API endpoints for a SEBI-registered investment platform.",
      longDescription: "Built investor onboarding and risk-profiling UI for a SEBI-registered investment platform using React.js and Node.js, translating compliance-heavy requirements into clean, reusable components. Developed and optimized backend REST API endpoints for financial data handling, focusing on low-latency responses and strict input validation. Applied secure coding practices including data sanitization, structured error handling, and basic penetration testing on owned endpoints.",
      tech: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT", "Financial Compliance", "Data Sanitization"],
      metrics: "SEBI compliance standard • Sub-22ms P99 latency • Zero security vulnerabilities",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://github.com/sumitkumargarsa",
      githubUrl: "https://github.com/sumitkumargarsa",
      featured: false,
      deliverables: ["Investor Onboarding UI", "Low-Latency REST Endpoints", "Input Sanitization Middleware", "Pen-Testing Security Audit"],
    },
  ] as Project[],

  services: [
    {
      id: "mern-arch",
      num: "01",
      title: "ENTERPRISE MERN APPLICATION ENGINEERING",
      subtitle: "Bespoke full-stack web applications built for extreme scale.",
      description: "Full-lifecycle architecture from schema design in MongoDB to responsive React 19 / Next.js client experiences. Engineered for maintainability, end-to-end type safety, and seamless CI/CD delivery.",
      deliverables: [
        "Full-Stack MERN codebase with clean MVC / Clean Architecture",
        "Horizontal scaling & sharded MongoDB Atlas setup",
        "Type-safe API layer (TypeScript, Express, Zod validation)",
        "Automated unit, integration, and E2E test suites",
      ],
      tags: ["MongoDB", "Express", "React 19", "Node.js", "TypeScript"],
    },
    {
      id: "realtime-socket",
      num: "02",
      title: "REAL-TIME & WEBSOCKET INFRASTRUCTURE",
      subtitle: "Sub-20ms live updates, chat systems, and collaboration engines.",
      description: "Eliminate polling overhead with event-driven architectures. We build scalable WebSocket clusters backed by Redis pub/sub adapters and MongoDB change streams.",
      deliverables: [
        "Horizontal WebSocket cluster with Redis adapter",
        "Multiplayer state synchronization & presence tracking",
        "Optimistic UI updates on React frontend",
        "Reconnection handling and guaranteed message ordering",
      ],
      tags: ["WebSockets", "Socket.io", "Redis Pub/Sub", "Change Streams"],
    },
    {
      id: "mongo-tuning",
      num: "03",
      title: "DATABASE MODELING & PERFORMANCE TUNING",
      subtitle: "Unlocking 10x query performance and optimizing cloud expenses.",
      description: "Database audits, compound index strategy, aggregation pipeline optimization, and memory profiling to eliminate slow queries and connection bottlenecks.",
      deliverables: [
        "Compound indexing & explain plan audits",
        "High-performance aggregation pipeline redesign",
        "Data archiving and time-series collections strategy",
        "Connection pool and replica set failover tuning",
      ],
      tags: ["MongoDB Atlas", "Indexing", "Aggregation", "Memory Profiling"],
    },
  ] as Service[],

  journal: [
    {
      id: "mongo-10m-writes",
      title: "Scaling MongoDB to 10 Million Writes/Sec in High-Throughput Node.js Clusters",
      date: "FEB 2026",
      readTime: "7 min read",
      summary: "How unacknowledged bulk writes, targeted hash sharding, and connection pooling unlock astronomical database throughput.",
      content: `When scaling MongoDB for millions of concurrent telemetry points, traditional synchronous insertOne operations saturate the connection pool within milliseconds.\n\nBy transitioning to ordered bulkWrite operations combined with pre-split chunk sharding on a high-cardinality hash key, we achieved a sustained 10,000,000 writes per second while maintaining sub-15ms P99 latency across replica set secondaries.`,
      tags: ["MongoDB", "Node.js", "Scalability", "Databases"],
    },
    {
      id: "react19-compiler-mern",
      title: "React 19 Compiler & Server Actions in Modern MERN Stacks",
      date: "JAN 2026",
      readTime: "5 min read",
      summary: "Why the death of manual useMemo and the arrival of Server Actions are rewriting the MERN development paradigm.",
      content: `The React 19 Compiler eliminates the need for defensive manual memoization, optimizing the AST at compile time. In full-stack MERN workflows, pairing Next.js Server Actions with Node.js microservice APIs reduces client-side JavaScript by over 40% while preserving instant optimistic rollbacks.`,
      tags: ["React 19", "Next.js", "Performance", "Frontend"],
    },
  ] as JournalPost[],
};

export const CYBER_PORTFOLIO_DATA = {
  brand: {
    name: "FORMA // CYBER",
    creator: "Sumit Kumar Garsa",
    role: "Offensive Security Researcher & DevSecOps Engineer",
    badge: "Red Team & DevSecOps Specialist",
    availability: "Available for Security Audits & Technical Scoping",
    location: "Gurugram, Haryana | Remote",
    email: "ersumitkumargarsa@gmail.com",
    bio: "Hardening web architectures, applying secure coding practices, automated input sanitization, and endpoint penetration testing backed by Deloitte and Cisco cybersecurity credentials.",
  },

  stats: [
    { label: "Vulnerabilities Audited", value: "180+" },
    { label: "Critical CVEs Mitigated", value: "14" },
    { label: "Penetration Tests", value: "38+" },
    { label: "Zero-Trust Mesh MTLS", value: "100%" },
  ],

  hero: {
    badge: "OFFENSIVE SECURITY & ZERO TRUST",
    tagline: "PENETRATION TESTING • DEVSECOPS • OWASP AUDITING • CRYPTOGRAPHY",
    headlineLine1: "CYBERSECURITY",
    headlineLine2: "THREAT DEFENSE",
    description: "Hunting vulnerabilities before threat actors exploit them. Bridging adversarial penetration testing, DevSecOps pipeline automation, and zero-trust cryptographic state enforcement.",
  },

  skills: [
    {
      title: "Offensive Security & Pen-Testing",
      description: "Adversarial simulations, exploit payload crafting, and vulnerability discovery.",
      skills: [
        { name: "Web & API Penetration Testing (OWASP Top 10)", level: 98, highlight: true },
        { name: "Burp Suite Professional & Custom Extension Dev", level: 96, highlight: true },
        { name: "SSRF, SQLi, IDOR, Prototype Pollution & XSS Exploit Dev", level: 97, highlight: true },
        { name: "Network Protocol Analysis (Wireshark, Nmap, Metasploit)", level: 93 },
        { name: "Reverse Engineering & Binary Analysis (Ghidra)", level: 88 },
        { name: "Cloud Infrastructure Pentesting (AWS / GCP IAM)", level: 92, highlight: true },
      ],
    },
    {
      title: "Defensive Security & DevSecOps",
      description: "Securing codebases, cryptographic protocols, and automated CI/CD guardrails.",
      skills: [
        { name: "Zero-Trust Architecture & mTLS Mesh", level: 95, highlight: true },
        { name: "DevSecOps CI/CD Hardening (SAST, DAST & SCA)", level: 94, highlight: true },
        { name: "JWT, OAuth2.0, WebAuthn & FIDO2 Cryptography", level: 96, highlight: true },
        { name: "WAF Tuning, Rate Limiting & DDoS Mitigation", level: 93 },
        { name: "Container Security (Docker, Kubernetes Pod Hardening)", level: 90 },
        { name: "SIEM & SOC Telemetry (Elastic, Splunk, Suricata)", level: 89 },
      ],
    },
  ] as SkillGroup[],

  projects: [
    {
      id: "aegis-siem",
      title: "AEGIS THREAT SENTINEL",
      category: "Threat Intelligence & SIEM",
      year: "2026",
      client: "CyberDefend Global",
      description: "Autonomous threat detection engine analyzing 50,000 events/sec with automated heuristic anomaly scoring and firewall quarantine.",
      longDescription: "Engineered a high-speed SIEM ingestion pipeline capturing network packet flows and application audit logs. Integrated machine learning behavioral baselining to automatically detect and sever lateral movement attempts within 350 milliseconds.",
      tech: ["Rust", "Python", "eBPF", "Elasticsearch", "Suricata", "Docker", "Next.js"],
      metrics: "<350ms incident detection • 99.4% precision rate",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://example.com/aegis",
      githubUrl: "https://github.com",
      featured: true,
      deliverables: ["eBPF Kernel Packet Filter", "Autonomous Quarantine Webhook", "Real-time SOC Alert Dashboard"],
    },
    {
      id: "cerberus-scanner",
      title: "CERBERUS EXPLOIT AUDITOR",
      category: "Adversarial Automation",
      year: "2025",
      client: "DefSec Labs",
      description: "Automated dynamic application security testing (DAST) engine discovering hidden injection vectors in microservice APIs.",
      longDescription: "A specialized penetration testing scanner designed to discover broken object level authorization (BOLA/IDOR), server-side request forgery (SSRF), and prototype pollution vulnerabilities across polyglot microservice environments.",
      tech: ["Go", "Node.js", "Burp Suite API", "Docker", "OWASP ZAP", "TypeScript"],
      metrics: "140+ high/critical vulnerabilities uncovered before prod",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://example.com/cerberus",
      githubUrl: "https://github.com",
      featured: true,
      deliverables: ["Automated Payload Fuzzing Engine", "CVSS v3.1 Scoring Engine", "CI/CD Gatekeeper Integration"],
    },
    {
      id: "cipherlock-vault",
      title: "CIPHERLOCK HARDENED ENCLAVE",
      category: "Cryptography & Zero Trust",
      year: "2025",
      client: "Kryptos Financial",
      description: "Zero-knowledge encryption vault for enterprise secrets with hardware security module (HSM) key derivation and automated key rotation.",
      longDescription: "Built for a fintech institution requiring strict FIPS 140-2 compliance. Features envelope encryption utilizing AES-256-GCM, automated cryptographic key sharding, and memory-safe secret zeroization.",
      tech: ["Rust", "AES-256-GCM", "Node.js", "HSM PKCS#11", "PostgreSQL", "mTLS"],
      metrics: "$120M sensitive transaction volume secured • Zero leaks",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://example.com/cipherlock",
      githubUrl: "https://github.com",
      featured: true,
      deliverables: ["Hardware Security Module (HSM) Driver", "Memory Zeroization Layer", "Cryptographic Audit Trail"],
    },
  ] as Project[],

  services: [
    {
      id: "web-pentest",
      num: "01",
      title: "OFFENSIVE APPLICATION PENETRATION TESTING",
      subtitle: "Uncovering exploitable attack vectors before malicious threat actors.",
      description: "In-depth black-box and gray-box penetration testing of web applications, cloud APIs, and microservices. We simulate real-world APT threats targeting business logic, authentication bypasses, and data exfiltration.",
      deliverables: [
        "Executive & technical remediation report (CVSS v3.1 scored)",
        "Proof-of-concept exploit scripts & mitigation blueprints",
        "OWASP Top 10 & API Top 10 comprehensive assessment",
        "Post-fix verification and re-testing certification",
      ],
      tags: ["Penetration Testing", "OWASP Top 10", "Burp Suite", "API Security"],
    },
    {
      id: "devsecops-hardening",
      num: "02",
      title: "DEVSECOPS PIPELINE & CI/CD HARDENING",
      subtitle: "Injecting continuous automated security checks into developer workflows.",
      description: "Automate vulnerability detection with zero developer friction. We integrate static application security testing (SAST), software composition analysis (SCA), and secret leak scanning directly into Git pull requests.",
      deliverables: [
        "Automated SAST & DAST gates in GitHub Actions / GitLab CI",
        "Secret leak prevention & automated key revocation hooks",
        "Container vulnerability scanning & base image minimization",
        "Infrastructure as Code (IaC) security auditing (Terraform/K8s)",
      ],
      tags: ["DevSecOps", "SAST / DAST", "GitHub Actions", "Docker Hardening"],
    },
    {
      id: "zero-trust-audit",
      num: "03",
      title: "ZERO-TRUST ARCHITECTURE & CODE REVIEW",
      subtitle: "Eliminating implicit trust across distributed cloud networks.",
      description: "Manual line-by-line secure code reviews and architecture threat modeling. We design mutual TLS (mTLS) microservice identity meshes, hardened OAuth2/OIDC workflows, and role-based access control hierarchies.",
      deliverables: [
        "STRIDE threat modeling & data flow diagram analysis",
        "Mutual TLS (mTLS) service-to-service cryptographic mesh",
        "Manual source code security audit (JavaScript, Python, Go)",
        "Hardened authentication & session state implementation",
      ],
      tags: ["Zero Trust", "mTLS", "Code Review", "Threat Modeling"],
    },
  ] as Service[],

  journal: [
    {
      id: "bypassing-wafs-unicode",
      title: "Hunting Prototype Pollution & Injection Flaws in Modern Full-Stack Runtimes",
      date: "FEB 2026",
      readTime: "8 min read",
      summary: "How subtle object merge algorithms and unvalidated query parameters lead to remote code execution in Node.js backends.",
      content: `Object prototype pollution remains one of the most stealthy attack vectors in JavaScript applications. When an application recursively merges untrusted user JSON into existing object prototypes, attackers can hijack Object.prototype to manipulate environment variables, bypass authentication gates, or trigger arbitrary child_process execution.\n\nIn this technical breakdown, we walk through dissecting deep-merge vulnerabilities and implementing immutable prototype freezing alongside schema-enforced validation.`,
      tags: ["Exploit Dev", "Node.js", "Prototype Pollution", "AppSec"],
    },
    {
      id: "zero-trust-mtls-k8s",
      title: "Zero-Trust Service Meshes: Enforcing Cryptographic mTLS at Wire Speed",
      date: "JAN 2026",
      readTime: "6 min read",
      summary: "Why perimeter security is dead: enforcing ephemeral cryptographic identities between every internal microservice.",
      content: `Perimeter firewalls are obsolete the instant an attacker gains an internal foothold through a phishing link or compromised dependency. By enforcing short-lived SPIFFE/SPIRE x509 certificates and strict mTLS encryption between microservices, every single internal packet is cryptographically authenticated and authorized independently of network topology.`,
      tags: ["Zero Trust", "Cryptography", "DevSecOps", "Networking"],
    },
  ] as JournalPost[],
};

export const CROSSOVER_ADVANTAGE = {
  title: "THE MERN + CYBERSECURITY ADVANTAGE",
  subtitle: "Why Hire a Developer Who is Also a Security Engineer?",
  description: "Most cybersecurity auditors have never built and deployed an enterprise production application; most full-stack developers have never executed a reverse shell or bypassed a WAF. By bridging both disciplines, we construct architectures that are both lightning-fast to use and practically impenetrable to exploit.",
  points: [
    {
      title: "Secure By Design From Line Zero",
      text: "Eliminating SQLi, NoSQL injection, SSRF, and broken access controls directly during feature development—not as an expensive afterthought.",
    },
    {
      title: "Realistic Adversarial Mindset",
      text: "Every API endpoint, MongoDB aggregation, and React component is designed by anticipating how a malicious actor will attempt to abuse it.",
    },
    {
      title: "Zero Developer-Security Friction",
      text: "Security findings are accompanied by actual production-ready code pull requests, not vague 80-page generic audit PDF reports.",
    },
    {
      title: "DevSecOps Speed & Velocity",
      text: "Automated vulnerability scanning without slowing down sprint velocity or breaking developer workflow pipelines.",
    },
  ],
};
