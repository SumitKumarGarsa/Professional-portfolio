import fs from "fs";
import path from "path";

function createPdf(title, subtitle, sections) {
  // Simple, compliant single-page PDF 1.4 generator using standard Type 1 fonts (Helvetica & Helvetica-Bold)
  // Page size: A4 = 595.28 x 841.89 points
  const pageWidth = 595.28;
  const pageHeight = 841.89;

  let streamContent = "";
  let currentY = 800;

  function escapePdfText(text) {
    return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }

  // Header Title
  streamContent += `BT\n/F2 20 Tf\n50 ${currentY} Td\n(${escapePdfText(title)}) Tj\nET\n`;
  currentY -= 20;

  // Header Subtitle & Contact
  streamContent += `BT\n/F1 10 Tf\n0.3 0.3 0.3 rg\n50 ${currentY} Td\n(${escapePdfText(subtitle)}) Tj\nET\n`;
  currentY -= 15;

  // Horizontal divider rule
  streamContent += `0.7 0.7 0.7 RG\n1 w\n50 ${currentY} m\n545 ${currentY} l\nS\n`;
  currentY -= 20;

  for (const sec of sections) {
    // Section Title
    streamContent += `BT\n/F2 12 Tf\n0.1 0.1 0.1 rg\n50 ${currentY} Td\n(${escapePdfText(sec.heading.toUpperCase())}) Tj\nET\n`;
    currentY -= 6;
    // Underline
    streamContent += `0.85 0.85 0.85 RG\n0.5 w\n50 ${currentY} m\n545 ${currentY} l\nS\n`;
    currentY -= 14;

    for (const item of sec.items) {
      if (item.title) {
        streamContent += `BT\n/F2 10 Tf\n0.15 0.15 0.15 rg\n50 ${currentY} Td\n(${escapePdfText(item.title)}) Tj\nET\n`;
        if (item.date) {
          const escapedDate = escapePdfText(item.date);
          streamContent += `BT\n/F1 9 Tf\n0.4 0.4 0.4 rg\n460 ${currentY} Td\n(${escapedDate}) Tj\nET\n`;
        }
        currentY -= 13;
      }
      if (item.sub) {
        streamContent += `BT\n/F1 9 Tf\n0.3 0.3 0.3 rg\n50 ${currentY} Td\n(${escapePdfText(item.sub)}) Tj\nET\n`;
        currentY -= 12;
      }
      if (item.bullets) {
        for (const b of item.bullets) {
          streamContent += `BT\n/F1 8.5 Tf\n0.25 0.25 0.25 rg\n60 ${currentY} Td\n(- ${escapePdfText(b)}) Tj\nET\n`;
          currentY -= 11.5;
        }
      }
      currentY -= 5;
    }
    currentY -= 8;
  }

  // Footer note
  streamContent += `BT\n/F1 8 Tf\n0.5 0.5 0.5 rg\n50 30 Td\n(Generated & Verified for Sumit Kumar Garsa | Portfolio: sumitkumargarsa.com) Tj\nET\n`;

  const streamBytes = Buffer.from(streamContent, "utf-8");

  // Construct PDF objects
  const objects = [];
  function addObject(content) {
    const objNum = objects.length + 1;
    objects.push({ num: objNum, content });
    return objNum;
  }

  const catalogObjNum = 1;
  const pagesObjNum = 2;
  const pageObjNum = 3;
  const fontRegularObjNum = 4;
  const fontBoldObjNum = 5;
  const contentObjNum = 6;

  objects.push({
    num: catalogObjNum,
    content: `<< /Type /Catalog /Pages ${pagesObjNum} 0 R >>`,
  });

  objects.push({
    num: pagesObjNum,
    content: `<< /Type /Pages /Kids [${pageObjNum} 0 R] /Count 1 >>`,
  });

  objects.push({
    num: pageObjNum,
    content: `<< /Type /Page /Parent ${pagesObjNum} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents ${contentObjNum} 0 R /Resources << /Font << /F1 ${fontRegularObjNum} 0 R /F2 ${fontBoldObjNum} 0 R >> >> >>`,
  });

  objects.push({
    num: fontRegularObjNum,
    content: `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>`,
  });

  objects.push({
    num: fontBoldObjNum,
    content: `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>`,
  });

  objects.push({
    num: contentObjNum,
    content: `<< /Length ${streamBytes.length} >>\nstream\n${streamContent}\nendstream`,
  });

  // Calculate byte offsets
  let header = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
  let output = header;
  const offsets = [];

  for (const obj of objects) {
    offsets.push(output.length);
    output += `${obj.num} 0 obj\n${obj.content}\nendobj\n`;
  }

  const xrefOffset = output.length;
  output += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const offset of offsets) {
    output += `${String(offset).padStart(10, "0")} 00000 n \n`;
  }
  output += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogObjNum} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return Buffer.from(output, "utf-8");
}

// 1. MERN Stack Full-Stack Developer Resume (Synchronized with Official Resume)
const mernResume = createPdf(
  "SUMIT KUMAR GARSA",
  "MERN Full Stack Developer (React . Node.js . Vite) | Gurugram, Haryana | github.com/sumitkumargarsa",
  [
    {
      heading: "Professional Summary",
      items: [
        {
          bullets: [
            "MERN Full Stack Developer with B.Tech in CS from VIT (April 2025). Practical experience spans lead full-stack ownership at VIT student organizations, a professional internship on a SEBI-registered investment platform at ZeTheta Algorithms, and independent product building.",
            "Proficient in React.js (Vite), TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS, Framer Motion, WebSockets, secure REST APIs with JWT, and cloud deployment. 552 LeetCode problems solved.",
          ],
        },
      ],
    },
    {
      heading: "Technical Skills",
      items: [
        {
          sub: "Languages & Core: JavaScript (ES6+), TypeScript, C++, SQL, HTML5, CSS3, Data Structures & Algorithms",
        },
        {
          sub: "Frontend: React.js, Vite, Next.js, Redux, Tailwind CSS, Framer Motion, Material UI, Bootstrap",
        },
        {
          sub: "Backend & Databases: Node.js, Express.js, REST API Design, WebSocket, Socket.io, JWT, MongoDB, Mongoose, MySQL, Firebase Firestore",
        },
        {
          sub: "DevOps & Tools: Git, GitHub, Docker, Postman, Linux, Nginx, Vercel, Render",
        },
      ],
    },
    {
      heading: "Professional Experience",
      items: [
        {
          title: "Senior Software Engineer & Co-Founder | Nayeraa Nazaakat",
          date: "Jul 2026 - Present",
          sub: "Hanumangarh Junction, Rajasthan",
          bullets: [
            "Co-founded digital commerce venture; architected end-to-end full-stack web platform using React/Next.js, Node.js, and MongoDB.",
            "Engineered responsive luxury brand UI with Tailwind CSS and Framer Motion, integrating secure payment gateways and analytics.",
          ],
        },
        {
          title: "Independent Full-Stack Developer | Self-Directed Upskilling",
          date: "Aug 2025 - Present",
          sub: "Personal Projects | Remote",
          bullets: [
            "Designed and shipped three production-style full-stack applications (CodeSync, RideFlow, NexIDE) in React.js (Vite), TypeScript, Node.js, and Framer Motion.",
            "Solved 552 data structures and algorithms problems on LeetCode and completed programs with McKinsey.org, SAP, and Google Cloud.",
          ],
        },
        {
          title: "Frontend & Backend Developer - Intern | ZeTheta Algorithms Pvt. Ltd.",
          date: "May 2025 - Jul 2025",
          sub: "Remote",
          bullets: [
            "Built investor onboarding and risk-profiling UI for SEBI-registered investment platform using React.js and Node.js.",
            "Developed low-latency REST API endpoints for financial data handling with strict input validation and data sanitization.",
          ],
        },
        {
          title: "Full-Stack Development Lead | VIT Student Organizations",
          date: "Aug 2021 - Apr 2025",
          sub: "Vellore, India",
          bullets: [
            "Led a team of 8+ developers to design, build, and ship multiple MERN stack web applications, cutting delivery time by 40%.",
            "Architected real-time WebSocket features handling 50+ concurrent users with stable, low-latency performance.",
            "Owned Express.js and MongoDB backend API design with JWT auth and RBAC across 5+ internal tools.",
          ],
        },
      ],
    },
    {
      heading: "Projects",
      items: [
        {
          title: "CodeSync - Real-Time Collaborative Development Environment",
          sub: "React.js (Vite), Node.js, WebSocket, Socket.io, MongoDB",
          bullets: [
            "Multi-user code editor supporting 50+ concurrent users with real-time sync, automatic reconnection, and MongoDB snapshot recovery.",
          ],
        },
        {
          title: "RideFlow - Intelligent Cab Booking & Navigation Platform",
          sub: "Next.js, TypeScript, Framer Motion, Mapbox API, Stripe API, Node.js, MongoDB",
          bullets: [
            "Full-stack cab platform with real-time GPS tracking, Mapbox live map rendering, Stripe payments, and indexed queries.",
          ],
        },
        {
          title: "NexIDE - Multi-Language Browser IDE with Live Compilation",
          sub: "React.js (Vite), CodeMirror, Judge0 API",
          bullets: [
            "Browser-based IDE supporting 10+ programming languages with syntax highlighting and Judge0 sandboxed code execution.",
          ],
        },
      ],
    },
    {
      heading: "Education & Certifications",
      items: [
        {
          title: "Vellore Institute of Technology (VIT) - B.Tech, Computer Science Engineering",
          date: "Aug 2021 - Apr 2025",
        },
        {
          sub: "Certifications: McKinsey.org Forward Program | SAP Agentic Systems | Google Cloud AI in Action | Deloitte Cyber Job Simulation | Cisco Cybersecurity",
        },
      ],
    },
  ]
);

// 2. Cybersecurity & DevSecOps Resume (Synchronized with Official Credentials)
const cyberResume = createPdf(
  "SUMIT KUMAR GARSA",
  "Cybersecurity & DevSecOps Engineer | Gurugram, Haryana | github.com/sumitkumargarsa",
  [
    {
      heading: "Security Profile",
      items: [
        {
          bullets: [
            "Computer Science graduate from VIT with hands-on focus in secure full-stack development, input sanitization, penetration testing, and cloud security.",
            "Completed industry credentials including Deloitte Cyber Job Simulation and Cisco Introduction to Cybersecurity.",
          ],
        },
      ],
    },
    {
      heading: "Domains & Tooling",
      items: [
        {
          sub: "Security Practices: Data Sanitization, Input Validation, Role-Based Access Control, JWT Cryptography, Basic Penetration Testing",
        },
        {
          sub: "Tools & Environments: Linux, Nginx, Docker, Git, Postman, Wireshark, OWASP Principles",
        },
        {
          sub: "Languages & Runtimes: JavaScript, TypeScript, Node.js, C++, Python (Upskilling)",
        },
      ],
    },
    {
      heading: "Experience & Practical Applications",
      items: [
        {
          title: "Frontend & Backend Developer - Intern | ZeTheta Algorithms Pvt. Ltd.",
          date: "May 2025 - Jul 2025",
          sub: "Remote",
          bullets: [
            "Applied secure coding practices including data sanitization, structured error handling, and basic penetration testing on owned endpoints.",
            "Engineered compliant investor verification and financial data handling for SEBI-registered platform.",
          ],
        },
        {
          title: "Full-Stack Development Lead | VIT Student Organizations",
          date: "Aug 2021 - Apr 2025",
          sub: "Vellore, India",
          bullets: [
            "Implemented JWT-based authentication and role-based access control (RBAC) across 5+ production campus tools.",
          ],
        },
      ],
    },
    {
      heading: "Certifications & Education",
      items: [
        {
          title: "Cyber Job Simulation - Deloitte | Introduction to Cybersecurity - Cisco",
          date: "Verified",
        },
        {
          title: "Google Cloud AI in Action | SAP Agentic Systems | McKinsey.org Forward Program",
          date: "Verified",
        },
        {
          title: "Vellore Institute of Technology (VIT) - B.Tech in Computer Science Engineering",
          date: "2021 - 2025",
        },
      ],
    },
  ]
);

// Write to public directories
const publicDir = path.resolve("public");
const resumesDir = path.resolve("public", "resumes");

if (!fs.existsSync(resumesDir)) {
  fs.mkdirSync(resumesDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, "Sumit-Kumar-Garsa-Resume.pdf"), mernResume);
fs.writeFileSync(path.join(resumesDir, "Sumit_Kumar_Garsa_MERN_Resume.pdf"), mernResume);
fs.writeFileSync(path.join(resumesDir, "Sumit_Kumar_Garsa_Cybersecurity_Resume.pdf"), cyberResume);

console.log("Successfully generated all resume PDFs:");
console.log("- public/Sumit-Kumar-Garsa-Resume.pdf");
console.log("- public/resumes/Sumit_Kumar_Garsa_MERN_Resume.pdf");
console.log("- public/resumes/Sumit_Kumar_Garsa_Cybersecurity_Resume.pdf");
