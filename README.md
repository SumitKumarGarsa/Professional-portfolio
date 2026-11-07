# Sumit Kumar Garsa — MERN Stack Developer & Systems Architect

An agency-grade, editorial developer portfolio for **Sumit Kumar Garsa**, architected with Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion, and an Express + MongoDB backend.

The aesthetic is dark, editorial, and typographic: huge condensed uppercase headlines in **Bebas Neue**, warm cream text on warm near-black (`#141312`), monospace micro-labels in **JetBrains Mono**, body text in **Inter**, and an animated fullscreen overlay navigation.

---

## 🏗️ Repository Architecture

```
portfolio/
├── src/                                  # Next.js App Router Frontend
│   ├── app/
│   │   ├── api/contact/route.ts          # Edge API route handler (Zod validation + honeypot)
│   │   ├── contact/page.tsx              # Contact brief with interactive Zod validation & confetti
│   │   ├── journal/page.tsx              # Technical notes with search & tag filtering
│   │   ├── journal/[slug]/page.tsx       # Reading layout, table of contents, and syntax blocks
│   │   ├── services/page.tsx             # 5 expandable service accordions, 5-step process, engagement models, FAQs
│   │   ├── studio/page.tsx               # Philosophy, story, principles, grouped skills, and career timeline
│   │   ├── work/page.tsx                 # Project index with filter tabs & animated layout
│   │   ├── work/[slug]/page.tsx          # Deep-dive case studies with topology architecture diagrams
│   │   ├── layout.tsx                    # Root layout with Schema.org Person JSON-LD & film-grain overlay
│   │   ├── page.tsx                      # Home landing (Hero, Work, Services, Count-up stats, Marquee, CTA)
│   │   ├── not-found.tsx                 # Typographic 404 screen
│   │   ├── loading.tsx                   # Monogram SKG pulsing telemetry loader
│   │   ├── sitemap.ts                    # Automated XML Sitemap generator
│   │   ├── robots.ts                     # Search engine crawler directives
│   │   └── globals.css                   # CSS design tokens & film-grain overlays
│   ├── components/
│   │   ├── common/SocialIcons.tsx        # Resilient inline SVG brand icons
│   │   ├── home/                         # Modular Home page sections
│   │   │   ├── HeroSection.tsx           # Oversized headline & rotating typewriter titles
│   │   │   ├── SelectedWorkSection.tsx   # Featured editorial rows with hover image preview
│   │   │   ├── ServicesTeaserSection.tsx # Core capabilities cards
│   │   │   ├── StatsStrip.tsx            # Animated intersection-observer count-up stats
│   │   │   ├── TechMarquee.tsx           # Infinite pure-CSS tech stack ticker
│   │   │   ├── LatestJournalSection.tsx  # Latest 3 technical notes
│   │   │   └── CtaBanner.tsx             # Typographic CTA banner
│   │   ├── layout/
│   │   │   ├── Header.tsx                # Fixed header with responsive wordmarks (Desktop/Tablet/Mobile)
│   │   │   ├── FullscreenMenu.tsx        # Fullscreen overlay with giant Bebas items & live IST clock
│   │   │   ├── Footer.tsx                # Giant responsive wordmark & quick links
│   │   │   └── PageTransition.tsx        # Curtain wipe page transitions
│   │   └── providers/Providers.tsx       # Navigation state context
│   ├── data/
│   │   ├── site.ts                       # Single source of truth for brand, name, socials & meta
│   │   ├── projects.ts                   # Production case studies with metrics, problem & topology
│   │   ├── services.ts                   # 5 services, deliverables, 5-step process, pricing models, FAQs
│   │   ├── experience.ts                 # 4 engineering principles, grouped skills, career roles & degree
│   │   └── posts.ts                      # Technical journal articles & code samples
│   └── lib/
│       ├── fonts.ts                      # Next/font loaders (Bebas Neue, JetBrains Mono, Inter)
│       └── utils.ts                      # Tailwind merge utility
├── server/                               # Express.js + MongoDB API
│   ├── src/
│   │   ├── config/db.js                  # Mongoose MongoDB connection pooling
│   │   ├── controllers/
│   │   │   ├── contactController.js      # Form validation & email dispatch
│   │   │   ├── projectController.js      # REST API for projects with static fallback
│   │   │   └── postController.js         # REST API for posts with static fallback
│   │   ├── middleware/
│   │   │   ├── rateLimiter.js            # Sliding-window rate limiter
│   │   │   └── validator.js              # Express-validator sanitize & validate rules
│   │   ├── models/
│   │   │   ├── Contact.js                # Contact lead schema
│   │   │   ├── Project.js                # Project database schema
│   │   │   └── Post.js                   # Journal post database schema
│   │   ├── routes/
│   │   │   ├── contactRoutes.js          # POST /api/contact
│   │   │   ├── projectRoutes.js          # GET /api/projects & GET /api/projects/:slug
│   │   │   ├── postRoutes.js             # GET /api/posts & GET /api/posts/:slug
│   │   │   └── healthRoutes.js           # GET /api/health
│   │   └── services/emailService.js      # Nodemailer SMTP transporter
│   ├── package.json
│   ├── .env.example
│   └── server.js                         # Helmet, CORS whitelist & Express initialization
├── next.config.ts                        # Strict CSP & HSTS security headers
├── .env.example                          # Client environment variables
└── README.md
```

---

## 🎨 Design System Tokens

Defined in `src/app/globals.css`:

| Token | Hex / Value | Purpose |
| :--- | :--- | :--- |
| `--bg` | `#141312` | Warm near-black page foundation |
| `--surface` | `#1C1A19` | Editorial cards and elevated containers |
| `--surface-2` | `#232120` | Secondary pills, inputs, and circle buttons |
| `--text` | `#EFEAE2` | Warm cream typography |
| `--muted` | `#6F6A62` | Taupe grey numbers, arrows, and secondary copy |
| `--border` | `rgba(239,234,226,0.12)` | Hairline dividers |
| `--accent` | `#FF6A1A` | High-impact agency orange highlight |

---

## 🏷️ Brand Name Rules & Centralization

To guarantee brand consistency across all pages, metadata, Open Graph, and schemas, all identity strings are maintained **exclusively** in [`src/data/site.ts`](src/data/site.ts):
- **Full Name:** `"Sumit Kumar Garsa"`
- **Header Wordmark:**
  - Desktop (1024px+): `"SUMIT KUMAR GARSA"`
  - Tablet (640px to 1023px): `"SUMIT GARSA"`
  - Mobile (<640px): Monogram `"SKG"`
- **Mode Badge Pill:** `"MODE: MERN STACK DEVELOPMENT"` (hidden below 1024px to prevent name collision)
- **Footer Wordmark:** Giant `"SUMIT KUMAR GARSA"` scaled with `clamp(44px, 8.5vw, 150px)` on one line (splits into `"SUMIT KUMAR"` / `"GARSA"` on mobile).
- **Page Titles:** Automatic pattern `"%s | Sumit Kumar Garsa"`.
- **Copyright:** `"© 2026 Sumit Kumar Garsa. All rights reserved."`.
- **Resume File:** `Sumit-Kumar-Garsa-Resume.pdf`.

---

## 🚀 Local Development Setup

### 1. Frontend (Next.js 16)
```bash
# In repository root
bun install
# or npm install

# Copy environment file
cp .env.example .env.local

# Start frontend dev server on http://localhost:3000
bun run dev
```

### 2. Backend (Express.js)
```bash
# Navigate to server directory
cd server

bun install
# or npm install

# Copy server environment file
cp .env.example .env

# Start Express API server on http://localhost:5000
bun run server.js
# or node server.js
```

---

## 🌐 Production Deployment Guide

### A. Deploy Frontend on Vercel
1. Push your repository to GitHub.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the `portfolio` repository.
4. Set Framework Preset to **Next.js**.
5. Add Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://yourdomain.com`
   - `NEXT_PUBLIC_API_URL`: `https://api.yourdomain.com/api` (or your Render/Railway backend URL)
6. Click **Deploy**. Vercel will automatically run `next build` and deploy to global Edge CDN.

### B. Deploy Backend on Render / Railway
1. Create a new **Web Service** on [Render](https://render.com) or [Railway](https://railway.app).
2. Set **Root Directory** to `server`.
3. Set **Build Command** to: `npm install` (or `bun install`).
4. Set **Start Command** to: `node server.js` (or `bun run server.js`).
5. Configure Environment Variables in the service settings:
   - `PORT`: `5000`
   - `NODE_ENV`: `production`
   - `CORS_ORIGIN`: `https://yourdomain.com`
   - `MONGODB_URI`: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority`
   - `SMTP_HOST`: `smtp.gmail.com`
   - `SMTP_PORT`: `587`
   - `SMTP_USER`: `your-email@gmail.com`
   - `SMTP_PASS`: `your-app-password`
   - `CONTACT_RECEIVER_EMAIL`: `sumitkumargarsa@gmail.com`
6. Deploy the service. Your API will be live at `https://your-service.onrender.com`.

### C. MongoDB Atlas Database Setup
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Under **Database Access**, create a database user with Read and Write permissions.
3. Under **Network Access**, allow access from anywhere (`0.0.0.0/0`) or whitelist your Render/Railway server IPs.
4. Click **Connect -> Drivers** and copy the connection string into your `MONGODB_URI`.

---

## 🛠️ Customization Guide

### 1. Changing Brand Name & Personal Copy
Open [`src/data/site.ts`](src/data/site.ts) and modify `fullName`, `role`, `email`, `location`, or `socials`. All components, header wordmarks, footer wordmarks, and JSON-LD schemas update instantly.

### 2. Adding a New Case Study
Open [`src/data/projects.ts`](src/data/projects.ts) and append a new object to `projectsData`:
```typescript
{
  slug: "your-project-slug",
  number: "05",
  title: "PROJECT NAME",
  subtitle: "One-line technical summary",
  category: "Full-Stack", // "Full-Stack" | "Frontend" | "API" | "SaaS"
  year: "2026",
  client: "Client Name",
  role: "Lead Architect",
  timeline: "3 Months",
  thumbnail: "https://images.unsplash.com/...",
  featured: true,
  overview: "...",
  problem: "...",
  approach: "...",
  architecture: "Client -> API -> Database",
  keyFeatures: ["Feature 1", "Feature 2"],
  challengesAndSolutions: [{ challenge: "...", solution: "..." }],
  metrics: [{ label: "Latency", value: "<15ms" }],
  deliverables: ["Deliverable 1"],
  tech: ["React 18", "Node.js", "MongoDB"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/...",
  gallery: ["https://images.unsplash.com/..."],
}
```
Next.js will automatically generate the static page `/work/your-project-slug` and add it to `sitemap.xml` upon build!

### 3. Adding a New Journal Post
Open [`src/data/posts.ts`](src/data/posts.ts) and append your article:
```typescript
{
  slug: "your-article-slug",
  number: "04",
  title: "YOUR ESSAY TITLE IN UPPERCASE",
  excerpt: "Short 2-line summary...",
  date: "May 2026",
  readTime: "8 min read",
  category: "Backend Architecture",
  tags: ["Node.js", "Performance"],
  featured: true,
  tableOfContents: [{ id: "section-1", title: "1. Section Title" }],
  content: `### 1. Section Title\nYour markdown body here...`,
}
```

### 4. Customizing Theme Colors
Open [`src/app/globals.css`](src/app/globals.css):
- Change `--accent: #FF6A1A` to your preferred color (e.g. Electric Blue `#2F5BFF` or Cream `#EFEAE2`).
- The entire site (links, highlights, numbers, marquee dots, and buttons) will automatically reflect the new accent color.

---

## 🛡️ Security Audit Checklist

- [x] **Strict Content Security Policy (CSP)** configured in `next.config.ts`.
- [x] **HTTP Strict Transport Security (HSTS)** with subdomains and preload.
- [x] **X-Frame-Options: DENY** preventing clickjacking attacks.
- [x] **X-Content-Type-Options: nosniff** preventing MIME-sniffing.
- [x] **Client & Server Zod Validation** preventing payload corruption.
- [x] **Invisible Honeypot Input** neutralizing automated spam bots.
- [x] **Sliding-Window Express Rate Limiting** preventing brute force and denial of service.
- [x] **CORS Whitelist** ensuring only authorized origins can access backend resources.
- [x] **WCAG AA Compliance** with visible focus rings and skip-to-content accessibility.

---

## 📄 License
© 2026 Sumit Kumar Garsa. All rights reserved.
