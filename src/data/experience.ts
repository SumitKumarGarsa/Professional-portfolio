export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level: string; highlighted?: boolean }[];
}

export interface Principle {
  number: string;
  title: string;
  description: string;
}

export interface AwardCertification {
  year: string;
  title: string;
  issuer: string;
  credentialId?: string;
}

export const studioData = {
  headline: "ENGINEERING SCALABLE PRODUCTS WITH ZERO COMPROMISE ON ARCHITECTURE OR INTERACTION DESIGN",
  introStory:
    "Hi, I’m Sumit Kumar Garsa — a Senior MERN Stack Developer and Full-Stack Systems Architect specializing in building scalable, high-performance web applications and resilient backend systems.",
  philosophy:
    "With over five years of experience in software engineering, I focus on designing robust architectures, developing efficient RESTful APIs and microservices, optimizing database performance, and delivering responsive user experiences using MongoDB, Express.js, React, Node.js, and Next.js.",
  storyParagraphs: [
    "Hi, I’m Sumit Kumar Garsa — a Senior MERN Stack Developer and Full-Stack Systems Architect specializing in building scalable, high-performance web applications and resilient backend systems.",
    "With over five years of experience in software engineering, I focus on designing robust architectures, developing efficient RESTful APIs and microservices, optimizing database performance, and delivering responsive user experiences using MongoDB, Express.js, React, Node.js, and Next.js.",
    "My engineering philosophy is rooted in simplicity, precision, and measurable performance. I believe in building the right solution before building a complex one — avoiding premature abstractions, profiling before optimizing, and enforcing reliable data contracts across client-server boundaries.",
    "From backend architecture and database optimization to frontend performance and system scalability, I approach every challenge with a focus on maintainability, reliability, security, and long-term growth.",
    "My goal is simple: to engineer software that performs exceptionally well today, adapts to tomorrow’s demands, and remains maintainable as it scales.",
  ],

  principles: [
    {
      number: "01",
      title: "DETERMINISTIC LATENCY OVER PREMATURE COMPLEXITY",
      description:
        "Every database query must be indexed. Every network payload must be lean. Before adding microservices or abstractions, we measure and profile to keep latency predictable under peak loads.",
    },
    {
      number: "02",
      title: "STRICT END-TO-END TYPE CONTRACTS",
      description:
        "From MongoDB schema validation with Mongoose and Zod to TypeScript on the client, data shapes are verified at the boundaries to prevent runtime exceptions.",
    },
    {
      number: "03",
      title: "60FPS INTERACTION DESIGN AS A CORE FEATURE",
      description:
        "User experience is not an afterthought. Animations must respect frame budgets, load without cumulative layout shifts (CLS), and enhance comprehension without frustrating power users.",
    },
    {
      number: "04",
      title: "SECURE & ACCESSIBLE BY DEFAULT",
      description:
        "Strict Content Security Policies, sanitized inputs, rate limiting, and WCAG AA accessibility standards are engineered into the codebase from the very first commit.",
    },
  ] as Principle[],

  skillCategories: [
    {
      category: "Frontend Development",
      description: "Modern, responsive, component-driven client architecture",
      skills: [
        { name: "React.js (Vite)", level: "Expert", highlighted: true },
        { name: "TypeScript", level: "Expert", highlighted: true },
        { name: "Next.js", level: "Advanced", highlighted: true },
        { name: "Tailwind CSS", level: "Expert", highlighted: true },
        { name: "Framer Motion", level: "Advanced", highlighted: true },
        { name: "Redux", level: "Advanced" },
        { name: "Material UI & Bootstrap", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Expert" },
      ],
    },
    {
      category: "Backend & Systems",
      description: "Scalable REST APIs, real-time WebSockets, and authentication",
      skills: [
        { name: "Node.js", level: "Expert", highlighted: true },
        { name: "Express.js", level: "Expert", highlighted: true },
        { name: "REST API Design", level: "Expert", highlighted: true },
        { name: "WebSocket & Socket.io", level: "Expert", highlighted: true },
        { name: "JWT Authentication", level: "Expert", highlighted: true },
        { name: "Microservices Architecture", level: "Advanced" },
        { name: "Input Validation & Sanitization", level: "Expert" },
      ],
    },
    {
      category: "Databases & Storage",
      description: "Schema design, aggregation, and persistent data management",
      skills: [
        { name: "MongoDB & Mongoose", level: "Expert", highlighted: true },
        { name: "MySQL", level: "Advanced", highlighted: true },
        { name: "Firebase Firestore", level: "Intermediate" },
        { name: "Database Indexing & Caching", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
      ],
    },
    {
      category: "DevOps, Tools & Foundations",
      description: "Deployment workflows, containerization, and problem solving",
      skills: [
        { name: "LeetCode (552 Problems Solved)", level: "Expert", highlighted: true },
        { name: "Git & GitHub", level: "Expert", highlighted: true },
        { name: "Docker", level: "Advanced", highlighted: true },
        { name: "Postman API Testing", level: "Expert" },
        { name: "Linux & Nginx", level: "Advanced" },
        { name: "Vercel & Render Deployment", level: "Expert" },
        { name: "C++ (Competitive Programming)", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      period: "2024 — Present",
      role: "Senior Developer & Co-Founder",
      company: "Nayeraa Nazaakat",
      location: "Hanumangarh Junction, Rajasthan",
      description:
        "Co-founded the venture and spearheaded end-to-end technology architecture, custom e-commerce platform engineering, and digital growth operations.",
      achievements: [
        "Architected and deployed a responsive, high-performance web platform from scratch using React.js/Next.js, Node.js, Express, and MongoDB.",
        "Engineered smooth, brand-aligned user experiences with Tailwind CSS and Framer Motion, achieving sub-second mobile page loads and seamless checkout flows.",
        "Integrated secure payment gateways, dynamic catalog filtering, inventory management, and automated order notification pipelines.",
        "Built administrative dashboards for sales telemetry, customer analytics, and inventory tracking with role-based access control.",
      ],
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Payment Gateways", "REST APIs"],
    },
    {
      period: "Aug 2025 — Present",
      role: "Independent Full-Stack Developer",
      company: "Personal Projects & Upskilling",
      location: "Remote",
      description:
        "Designing and shipping production-style full-stack applications to deepen hands-on expertise in React.js (Vite), TypeScript, Node.js, and Framer Motion.",
      achievements: [
        "Designed and shipped three production-style full-stack applications (CodeSync, RideFlow, NexIDE) with component-based UIs and robust backend architectures.",
        "Self-imposed sprint deadlines and scope constraints on each project to practice translating open-ended problems into working full-stack features.",
        "Solved 552 data structures and algorithms problems on LeetCode and competed in competitive programming contests to sharpen problem-solving fundamentals.",
        "Completed structured upskilling programs including McKinsey.org Forward Program, SAP Agentic Systems course, and Google Cloud AI/Cloud technical series.",
      ],
      technologies: ["React.js (Vite)", "TypeScript", "Node.js", "Express.js", "MongoDB", "Framer Motion", "Docker", "LeetCode DSA"],
    },
    {
      period: "May 2025 — Jul 2025",
      role: "Frontend & Backend Developer — Intern",
      company: "ZeTheta Algorithms Pvt. Ltd.",
      location: "Remote",
      description:
        "Engineered investor onboarding, risk-profiling interfaces, and financial data APIs for a SEBI-registered investment platform.",
      achievements: [
        "Built investor onboarding and risk-profiling UI for a SEBI-registered investment platform using React.js and Node.js, translating compliance-heavy requirements into clean, reusable components.",
        "Developed and optimized backend REST API endpoints for financial data handling, focusing on low-latency responses and strict input validation.",
        "Applied secure coding practices including data sanitization, structured error handling, and basic penetration testing on owned endpoints.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT", "Financial Compliance", "Data Sanitization"],
    },
    {
      period: "Aug 2021 — Apr 2025",
      role: "Full-Stack Development Lead",
      company: "VIT Student Organizations",
      location: "Vellore, India",
      description:
        "Led a development team building and shipping multiple MERN stack web applications and real-time collaboration tools across campus.",
      achievements: [
        "Led a team of 8+ developers to design, build, and ship multiple MERN stack web applications, cutting average delivery time by 40% through sprint planning and peer code reviews.",
        "Architected real-time features using WebSocket and Node.js, handling 50+ concurrent users with stable, low-latency performance.",
        "Owned backend API design with Express.js and MongoDB, implementing JWT-based auth and role-based access control across 5+ internal tools.",
        "Built and refined front-end interfaces in React (migrating build tooling to Vite for faster dev cycles) with Tailwind CSS and Framer Motion.",
        "Improved React performance via lazy loading, memoization, and code splitting — measurably reducing load times.",
        "Mentored junior developers, ran code reviews, and maintained documentation standards across the team.",
      ],
      technologies: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "WebSocket", "Socket.io", "Tailwind CSS", "Framer Motion", "JWT"],
    },
  ] as ExperienceItem[],

  education: [
    {
      period: "Aug 2021 — Apr 2025",
      degree: "B.Tech, Computer Science Engineering",
      institution: "Vellore Institute of Technology (VIT)",
      location: "Vellore, India",
      details:
        "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Computer Architecture, Cloud Computing, Cybersecurity, DBMS, Computer Networks. Currently Upskilling: Python, AI/LLM API integration, and advanced React/TypeScript patterns.",
    },
  ] as EducationItem[],

  certifications: [
    {
      year: "2025",
      title: "Forward Program",
      issuer: "McKinsey.org",
      credentialId: "MCK-FWD-2025",
    },
    {
      year: "2025",
      title: "Designing Agentic Systems with a Human-Centered Approach",
      issuer: "SAP",
      credentialId: "SAP-AGENTIC-2025",
    },
    {
      year: "2025",
      title: "Cloud Technical Series: AI in Action",
      issuer: "Google Cloud Asia Pacific",
      credentialId: "GCP-AI-ACTION",
    },
    {
      year: "2025",
      title: "Cloud Technical Series: OnBoard Edition",
      issuer: "Google Cloud Asia Pacific",
      credentialId: "GCP-ONBOARD",
    },
    {
      year: "2024",
      title: "Cyber Job Simulation",
      issuer: "Deloitte",
      credentialId: "DELOITTE-CYBER",
    },
    {
      year: "2024",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      credentialId: "CISCO-CYBER-INTRO",
    },
  ] as AwardCertification[],

  currently: {
    learning: "Python, AI/LLM API integration, and advanced React/TypeScript patterns",
    building: "Production-style full-stack applications (CodeSync, RideFlow, NexIDE) with real-time WebSockets and cloud deployment",
    availableFor: "Fast-paced product engineering teams seeking strong frontend craft, robust APIs, and end-to-end full-stack ownership",
  },
};
