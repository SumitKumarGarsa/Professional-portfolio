export interface BlogPost {
  slug: string;
  number: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  tableOfContents: {
    id: string;
    title: string;
  }[];
  content: string;
}

export const postsData: BlogPost[] = [
  {
    slug: "scaling-mongodb-aggregations-under-high-concurrency",
    number: "01",
    title: "SCALING MONGODB AGGREGATION PIPELINES UNDER HIGH CONCURRENCY",
    excerpt:
      "A deep dive into compound indexing strategies, pipeline stage reordering, and memory-conscious grouping operators for sub-15ms analytics queries in production Node.js backends.",
    date: "April 2026",
    readTime: "7 min read",
    category: "Database Engineering",
    tags: ["MongoDB", "Node.js", "Performance", "Indexing", "Backend"],
    featured: true,
    tableOfContents: [
      { id: "the-memory-barrier", title: "1. The 100MB RAM Barrier in MongoDB" },
      { id: "compound-indexes", title: "2. The ESR Rule in Aggregation Match Stages" },
      { id: "project-early", title: "3. Pruning Fields Early via $project" },
      { id: "redis-ring-buffer", title: "4. Integrating Redis Ring Buffers for Live Aggs" },
      { id: "benchmarks", title: "5. Production Benchmarks & Results" },
    ],
    content: `
### 1. The 100MB RAM Barrier in MongoDB
When processing analytics or telemetry workloads, MongoDB allocates a maximum of 100MB RAM per aggregation stage by default. Exceeding this boundary without proper configuration triggers the infamous \`QueryExceededMemoryLimitNoDiskUseAllowed\` runtime fault.

While passing \`{ allowDiskUse: true }\` prevents crashes, disk spill degrades latency by up to 20x. In high-concurrency systems processing thousands of queries per second, disk-based aggregation is unacceptable.

### 2. The ESR Rule in Aggregation Match Stages
The golden rule of MongoDB indexing is **ESR**:
1. **E**quality fields first
2. **S**ort fields second
3. **R**ange fields last

When constructing aggregation pipelines, ensuring that the primary \`$match\` and subsequent \`$sort\` stages can satisfy an index prefix completely avoids in-memory sorts and unindexed collection scans.

\`\`\`javascript
// Recommended Compound Index Definition
db.telemetry_events.createIndex({
  tenantId: 1,      // Equality
  createdAt: -1,    // Sort
  statusCode: 1     // Range / Filter
});
\`\`\`

### 3. Pruning Fields Early via $project
Always place your projection or field exclusions immediately after the initial match. By discarding large nested payloads, JSON strings, or array attributes before reaching \`$group\` or \`$lookup\`, you preserve the RAM allocation budget for grouping hash tables.

\`\`\`javascript
const pipeline = [
  {
    $match: {
      tenantId: new ObjectId(tenantId),
      createdAt: { $gte: startDate, $lte: endDate }
    }
  },
  {
    $project: {
      _id: 0,
      statusCode: 1,
      durationMs: 1,
      createdAt: 1
    }
  },
  {
    $group: {
      _id: { $hour: "$createdAt" },
      avgLatency: { $avg: "$durationMs" },
      count: { $sum: 1 }
    }
  }
];
\`\`\`

### 4. Integrating Redis Ring Buffers for Live Aggs
For rolling metrics (such as the last 60 seconds or last 5 minutes), avoid hitting MongoDB directly on every poll. Maintain sliding-window sorted sets in Redis (\`ZADD\` with UNIX millisecond timestamps as scores), compute rollups in memory, and periodically write flushed summaries down to MongoDB collections.

### 5. Production Benchmarks & Results
Applying index alignment, early field trimming, and memory-aware grouping reduced P99 latency on our telemetry endpoints from 184ms to 12.8ms under 15,000 requests per minute, eliminating disk-spill warnings completely.
    `,
  },
  {
    slug: "building-60fps-interactive-interfaces-in-react-18",
    number: "02",
    title: "BUILDING 60FPS INTERACTION DESIGN IN REACT 18 WITH ZERO RUNTIME JANK",
    excerpt:
      "How to leverage React 18 concurrent transitions, CSS transform hardware acceleration, and Framer Motion layoutId to deliver agency-grade smoothness without frame drops.",
    date: "March 2026",
    readTime: "9 min read",
    category: "Frontend Architecture",
    tags: ["React 18", "Framer Motion", "Animations", "TypeScript", "Performance"],
    featured: true,
    tableOfContents: [
      { id: "frame-budgets", title: "1. The 16.6ms Render Budget" },
      { id: "concurrent-transitions", title: "2. Concurrent React & useTransition" },
      { id: "framer-motion-layoutid", title: "3. Fluid Morphing with layoutId" },
      { id: "will-change-transform", title: "4. GPU Layer Promotion & will-change" },
      { id: "conclusion", title: "5. Key Takeaways" },
    ],
    content: `
### 1. The 16.6ms Render Budget
At 60 frames per second, a browser has exactly 16.67 milliseconds to calculate styles, execute JavaScript, layout the DOM tree, and composite pixels to the screen. If React execution locks the main thread for 25ms, a frame is dropped, creating perceptible jank.

In modern editorial web design, animations and state changes must never block user input.

### 2. Concurrent React & useTransition
React 18 introduced concurrent rendering capabilities. By wrapping non-critical UI updates (such as large filtered lists, tab switching, or heavy visualizations) inside \`startTransition\`, React prioritizes immediate interactions like typing, button hovers, and menu toggles.

\`\`\`typescript
const [isPending, startTransition] = useTransition();

function handleFilterChange(newCategory: string) {
  // Urgent: immediately update UI tab highlight
  setActiveCategory(newCategory);

  // Non-urgent: filter 2,000 project records in the background
  startTransition(() => {
    setFilteredProjects(filterDataset(allProjects, newCategory));
  });
}
\`\`\`

### 3. Fluid Morphing with layoutId
Framer Motion's \`layoutId\` prop enables declarative shared-element transitions. When switching active navigation pills or moving indicators, the browser calculates inverse transforms rather than animating layout properties like \`left\` or \`width\`.

\`\`\`tsx
{isActive && (
  <motion.div
    layoutId="activeIndicator"
    transition={{ type: "spring", stiffness: 450, damping: 32 }}
    className="absolute inset-0 bg-[#EFEAE2] rounded-full"
  />
)}
\`\`\`

### 4. GPU Layer Promotion & will-change
Never animate layout properties (\`width\`, \`height\`, \`top\`, \`padding\`). Restrict animation properties strictly to:
- \`transform: translate3d(), scale(), rotate()\`
- \`opacity\`

These two properties are handled directly by the GPU compositor thread, entirely bypassing browser layout and repaint passes.

### 5. Key Takeaways
Combine hardware-accelerated transforms with React 18 transitions to guarantee buttery 60fps interaction polish across mobile and desktop displays.
    `,
  },
  {
    slug: "architecting-bulletproof-express-apis-with-zod-and-jwt",
    number: "03",
    title: "ARCHITECTING BULLETPROOF EXPRESS APIS: FROM ZOD CONTRACTS TO SECURITY HEADERS",
    excerpt:
      "A complete guide to securing Express.js applications in production: strict runtime request validation, token rotation, rate limiting, and defensive HTTP headers.",
    date: "February 2026",
    readTime: "6 min read",
    category: "Backend Security",
    tags: ["Express", "Node.js", "Zod", "Security", "JWT"],
    featured: false,
    tableOfContents: [
      { id: "strict-validation", title: "1. Runtime Validation at the Edge with Zod" },
      { id: "rate-limiting", title: "2. Sliding-Window Rate Limiting" },
      { id: "secure-headers", title: "3. Hardening Headers with Helmet" },
      { id: "csrf-and-cors", title: "4. Strict CORS & Cookie Configurations" },
    ],
    content: `
### 1. Runtime Validation at the Edge with Zod
TypeScript types vanish at runtime during compilation. Never trust raw client input. Every incoming payload to an Express route handler must be validated against a strict Zod schema before invoking business logic.

\`\`\`typescript
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  projectType: z.enum(["Full-Stack", "Backend API", "SaaS Dashboard", "Audit"]),
  budget: z.string().min(1, "Please select an estimated budget"),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000),
  honeypot: z.string().max(0, "Bot detected"),
});
\`\`\`

### 2. Sliding-Window Rate Limiting
Prevent brute-force authentication attacks and denial-of-service spam on contact routes using \`express-rate-limit\` backed by Redis in distributed environments.

### 3. Hardening Headers with Helmet
Enforce strict Content Security Policies (CSP), HSTS, no-sniff, and deny framing to prevent clickjacking and injection attacks.

\`\`\`typescript
app.use(helmet({
  contentSecurityPolicy: true,
  crossOriginEmbedderPolicy: true,
  xFrameOptions: { action: "deny" }
}));
\`\`\`

### 4. Strict CORS & Cookie Configurations
Always set explicit origin whitelists rather than wildcard \`*\` headers, and store authentication tokens inside \`httpOnly\`, \`secure\`, \`sameSite="strict"\` cookies to neutralize XSS credential theft.
    `,
  },
];
