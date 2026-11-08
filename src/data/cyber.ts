export interface CyberCase {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "Web & API" | "Infrastructure" | "Cryptography" | "Malware Analysis";
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  cvss: string;
  target: string;
  problem: string;
  approach: string;
  impact: string;
  remediation: string;
  tech: string[];
  metrics?: string;
  githubUrl?: string;
  reportUrl?: string;
  deliverables: string[];
}

export interface CyberService {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tags: string[];
}

export interface CyberIntelArticle {
  id: string;
  date: string;
  readTime: string;
  severity?: string;
  title: string;
  summary: string;
  tags: string[];
}

export const cyberData = {
  brand: {
    name: "FORMA // CYBER",
    badge: "MODE: CYBERSECURITY & THREAT DEFENSE",
    switchLabel: "Switch to MERN Stack",
    switchTarget: "dev" as const,
    author: "Sumit Kumar Garsa",
    callsign: "SHADOW_ROOT",
    role: "Offensive Security Researcher & DevSecOps Lead",
    location: "Remote / Available Globally",
    resumeUrl: "/resumes/Sumit_Kumar_Garsa_Cybersecurity_Resume.pdf",
    pgpKeyId: "0x4F92B3C8E190A72D",
    pgpFingerprint: "E738 9B12 4C5D 88FA 901E  45B2 4F92 B3C8 E190 A72D",
    bio: "Adversarial security engineer specializing in web application penetration testing, DevSecOps pipeline automation, and Zero-Trust cloud hardening. Discovering critical zero-day vulnerabilities before malicious actors exploit them.",
  },

  menu: [
    { number: "01", label: "THREAT LAB", href: "#studio", badge: "Offensive & Defensive Doctrine" },
    { number: "02", label: "EXPLOITS & CASES", href: "#work", badge: "CVE Credits & Red-Team Cases" },
    { number: "03", label: "SEC-SERVICES", href: "#services", badge: "Pen-Testing & Hardening" },
    { number: "04", label: "THREAT INTEL", href: "#journal", badge: "Vulnerability Briefings & Labs" },
    { number: "05", label: "CONTACT", href: "#contact", badge: "Encrypted Scoping Transmission" },
  ],

  hero: {
    headline: "CYBERSECURITY & THREAT DEFENSE",
    terminalBoot: [
      { cmd: "whoami", output: "sumit_kumar_garsa (uid=0[root] gid=0[wheel])" },
      { cmd: "cat /etc/role.txt", output: "Cybersecurity Engineer | Offensive Pen-Tester | DevSecOps Lead" },
      { cmd: "./recon --target=all --stealth", output: "[+] 180+ vulnerabilities discovered | 0 zero-day leaks in managed infrastructure" },
      { cmd: "tail -n 1 /var/log/defense.log", output: "[ACTIVE] Zero-Trust mTLS Mesh Enforced. All packets cryptographically verified." },
    ],
    titles: [
      "Cybersecurity Engineer",
      "Offensive Penetration Tester",
      "DevSecOps & Cloud Security Specialist",
      "Vulnerability Researcher",
    ],
    pitch: "Simulating sophisticated threat actors to discover and eliminate critical vulnerabilities. Hardening cloud infrastructure, automating CI/CD security gates, and architecting Zero-Trust identity frameworks.",
    ctas: {
      primary: { label: "View Exploit Cases", href: "#work" },
      secondary: { label: "Initiate Audit Brief", href: "#contact" },
    },
  },

  stats: [
    { label: "Vulnerabilities Audited", value: "180+" },
    { label: "Critical CVEs Mitigated", value: "14" },
    { label: "HackTheBox Rank", value: "Pro Hacker" },
    { label: "TryHackMe Global Rank", value: "Top 1%" },
  ],

  about: {
    headline: "ADVERSARIAL REALITY: PERIMETER SECURITY IS DEAD",
    philosophy: "The only resilient architecture is one designed with the assumption of breach. Having audited enterprise web applications and orchestrated black-box red team simulations, I evaluate systems through the adversary's tactical playbook. I don't just generate automated vulnerability scans; I write weaponized proof-of-concept exploits to validate impact, followed by production-ready code fixes that permanently eliminate the attack surface.",
    focusSplit: {
      offensive: 55, // 55% Offensive / Pen-Testing
      defensive: 45, // 45% Defensive / DevSecOps & Hardening
    },
    specializations: [
      "Black-Box & Gray-Box Web Application Penetration Testing (OWASP Top 10)",
      "Zero-Trust Network Architecture & Mutual TLS (mTLS) Cryptographic Enclaves",
      "Automated DevSecOps Pipeline Integration (SAST, DAST, Container Security)",
      "Adversarial Payload Engineering (SSRF, Prototype Pollution, IDOR, SQLi Bypasses)",
    ],
  },

  toolBadges: [
    "Kali Linux 2024",
    "Burp Suite Pro",
    "Nmap / Masscan",
    "Metasploit",
    "Wireshark",
    "OWASP ZAP",
    "SQLmap",
    "Ghidra 11",
    "Semgrep SAST",
    "Trivy Container",
    "Splunk Enterprise",
    "Docker Security",
  ],

  cases: [
    {
      id: "aegis-siem",
      number: "01",
      title: "AEGIS SENTINEL THREAT SIEM",
      subtitle: "Autonomous telemetry engine analyzing 50k events/sec with eBPF filtering.",
      category: "Infrastructure",
      severity: "CRITICAL",
      cvss: "9.6",
      target: "Enterprise Cloud Infrastructure",
      problem: "Enterprise security operations teams were overwhelmed by false-positive alert fatigue and could not detect lateral internal reconnaissance in real time.",
      approach: "Engineered an eBPF Linux kernel packet filter connected to a high-speed Rust and Python correlation engine. Integrated behavioral baselining to flag credential stuffing within 350ms.",
      impact: "Zero lateral movement undetected across 5,000 container pods; dropped mean-time-to-detect from 4 hours to sub-second.",
      remediation: "Automated real-time iptables quarantine webhooks and isolated compromised microservice pods instantaneously.",
      tech: ["Rust", "Python", "eBPF", "Elasticsearch", "Suricata", "Docker"],
      metrics: "<350ms incident detection • 99.4% precision rate",
      githubUrl: "https://github.com/sumitkumargarsa/aegis-sentinel-siem",
      deliverables: [
        "eBPF Kernel Packet Inspection Filter",
        "Autonomous Network Quarantine Webhooks",
        "Real-time SOC Alerting Dashboard",
        "MITRE ATT&CK Automated Telemetry Mapper",
      ],
    },
    {
      id: "cerberus-scanner",
      number: "02",
      title: "CERBERUS ADVERSARIAL API FUZZER",
      subtitle: "Automated DAST probe uncovering hidden BOLA/IDOR and injection vectors.",
      category: "Web & API",
      severity: "HIGH",
      cvss: "8.8",
      target: "Microservice REST & GraphQL APIs",
      problem: "Traditional vulnerability scanners fail to understand complex multi-step microservice authorization states, leaving critical IDOR vulnerabilities undetected.",
      approach: "Developed an intelligent stateful fuzzer that parses OpenAPI specifications, creates dual-session token state machines, and dynamically tests object IDs across user permission boundaries.",
      impact: "Discovered 140+ high and critical vulnerabilities across 18 private microservice codebases before production deployment.",
      remediation: "Implemented strict object-level ownership gates and UUID v4 identifiers across all database lookups.",
      tech: ["Go", "Node.js", "Burp Suite API", "Docker", "OWASP ZAP", "TypeScript"],
      metrics: "140+ vulnerabilities mitigated • 0 false positives on IDOR",
      githubUrl: "https://github.com/sumitkumargarsa/cerberus-api-scanner",
      deliverables: [
        "Automated OpenAPI State-Machine Fuzzer",
        "CVSS v3.1 Impact Calculation Engine",
        "CI/CD Gatekeeper Integration for GitHub Actions",
        "Proof-of-Concept Exploit Generator",
      ],
    },
    {
      id: "cipherlock-vault",
      number: "03",
      title: "CIPHERLOCK HARDENED CRYPTO ENCLAVE",
      subtitle: "Zero-knowledge encryption vault with AES-256-GCM and memory zeroization.",
      category: "Cryptography",
      severity: "CRITICAL",
      cvss: "9.2",
      target: "FinTech Transaction Engine",
      problem: "Fintech payment application required FIPS 140-2 Level 3 compliance and automated protection against memory dump attacks (cold-boot attacks).",
      approach: "Constructed a secure memory enclave in Rust utilizing AES-256-GCM authenticated envelope encryption with Hardware Security Module (HSM) PKCS#11 key derivation.",
      impact: "Secured $120M in monthly transactional volume with zero key leakage; verified zeroization of cleartext keys upon process termination.",
      remediation: "Migrated all static API secrets to ephemeral HSM tokens with automated 24-hour key rotation.",
      tech: ["Rust", "AES-256-GCM", "Node.js", "PKCS#11 HSM", "PostgreSQL", "mTLS"],
      metrics: "$120M volume secured • 100% memory zeroization verified",
      githubUrl: "https://github.com/sumitkumargarsa/cipherlock-enclave",
      deliverables: [
        "Hardware Security Module (HSM) Integration Driver",
        "Memory-Safe Secret Zeroization Routine",
        "Automated Cryptographic Key Sharding Protocol",
        "FIPS 140-2 Compliance Technical Audit Dossier",
      ],
    },
  ] as CyberCase[],

  services: [
    {
      number: "01",
      title: "WEB & API PENETRATION TESTING",
      tagline: "Uncovering exploitable attack vectors before malicious threat actors.",
      description: "In-depth black-box and gray-box penetration testing of web applications, cloud APIs, and microservices. We simulate real-world APT threats targeting business logic, authentication bypasses, and data exfiltration.",
      deliverables: [
        "Executive & technical remediation report (CVSS v3.1 scored)",
        "Proof-of-concept exploit scripts & mitigation blueprints",
        "OWASP Top 10 & API Top 10 comprehensive assessment",
        "Post-fix verification and re-testing certification",
      ],
      tags: ["Penetration Testing", "OWASP Top 10", "Burp Suite Pro", "API Security"],
    },
    {
      number: "02",
      title: "DEVSECOPS CI/CD PIPELINE HARDENING",
      tagline: "Injecting continuous automated security checks into developer workflows.",
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
      number: "03",
      title: "ZERO-TRUST ARCHITECTURE & MTLS MESH",
      tagline: "Eliminating implicit trust across distributed cloud networks.",
      description: "Manual line-by-line secure code reviews and architecture threat modeling. We design mutual TLS (mTLS) microservice identity meshes, hardened OAuth2/OIDC workflows, and role-based access control hierarchies.",
      deliverables: [
        "STRIDE threat modeling & data flow diagram analysis",
        "Mutual TLS (mTLS) service-to-service cryptographic mesh",
        "Manual source code security audit (JavaScript, Python, Go)",
        "Hardened authentication & session state implementation",
      ],
      tags: ["Zero Trust", "mTLS", "Code Review", "Threat Modeling"],
    },
    {
      number: "04",
      title: "CLOUD & KUBERNETES INFRASTRUCTURE AUDIT",
      tagline: "Hardening cloud assets against privilege escalation and bucket leaks.",
      description: "Comprehensive audits of AWS/GCP IAM permission boundaries, VPC security groups, S3 access control lists, and Kubernetes cluster pod security standards.",
      deliverables: [
        "CIS Benchmark automated cloud compliance scan",
        "IAM privilege escalation path remediation",
        "Kubernetes network policy & pod security admission",
        "Egress traffic filtering and bastion host architecture",
      ],
      tags: ["AWS Security", "Kubernetes", "CIS Benchmarks", "IAM"],
    },
  ] as CyberService[],

  certifications: [
    {
      name: "Cyber Job Simulation",
      issuer: "Deloitte",
      date: "2024",
      credentialId: "DELOITTE-CYBER",
      credentialUrl: "https://www.theforage.com",
      status: "Verified",
      badgeColor: "#00E58A",
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2024",
      credentialId: "CISCO-CYBER-INTRO",
      credentialUrl: "https://www.netacad.com",
      status: "Verified",
      badgeColor: "#38BDF8",
    },
    {
      name: "Cloud Technical Series: AI in Action",
      issuer: "Google Cloud Asia Pacific",
      date: "2025",
      credentialId: "GCP-AI-ACTION",
      credentialUrl: "https://cloud.google.com",
      status: "Verified",
      badgeColor: "#F59E0B",
    },
    {
      name: "Designing Agentic Systems with Human-Centered Approach",
      issuer: "SAP",
      date: "2025",
      credentialId: "SAP-AGENTIC-2025",
      credentialUrl: "https://open.sap.com",
      status: "Verified",
      badgeColor: "#8B5CF6",
    },
  ],

  labStats: [
    { platform: "Hack The Box", rank: "Pro Hacker", points: "3,850 pts", pwned: "42 Machines", url: "https://hackthebox.com" },
    { platform: "TryHackMe", rank: "Top 1% Global", points: "18,400 pts", badges: "56 Badges", url: "https://tryhackme.com" },
    { platform: "picoCTF", rank: "Top 500", points: "5,200 pts", solved: "78 Challenges", url: "https://picoctf.org" },
  ],

  intel: [
    {
      id: "prototype-pollution-rce",
      date: "FEB 2026",
      readTime: "8 min read",
      severity: "CRITICAL 9.8",
      title: "Weaponized Prototype Pollution: From Deep-Merge to Remote Code Execution in Node.js",
      summary: "How subtle object merge algorithms and unvalidated query parameters lead to arbitrary child_process execution in full-stack runtimes.",
      tags: ["Exploit Dev", "Node.js", "Prototype Pollution", "AppSec"],
    },
    {
      id: "zero-trust-mtls-k8s",
      date: "JAN 2026",
      readTime: "6 min read",
      severity: "DEFENSIVE GUIDE",
      title: "Zero-Trust Service Meshes: Enforcing Ephemeral Cryptographic mTLS at Wire Speed",
      summary: "Why perimeter firewalls are obsolete: enforcing SPIFFE/SPIRE x509 certificates between internal microservices.",
      tags: ["Zero Trust", "mTLS", "DevSecOps", "Cloud"],
    },
    {
      id: "waf-unicode-normalization",
      date: "DEC 2025",
      readTime: "7 min read",
      severity: "HIGH 8.2",
      title: "Bypassing Web Application Firewalls using Unicode Normalization Inconsistencies",
      summary: "Demonstrating how multi-byte character normalization post-WAF inspection allows full SQLi and XSS payloads to execute cleanly.",
      tags: ["WAF Bypass", "Web AppSec", "Penetration Testing"],
    },
  ] as CyberIntelArticle[],

  experience: [
    {
      role: "Lead Offensive Security & DevSecOps Engineer",
      company: "Vanguard Cyber Systems",
      period: "2023 — Present",
      location: "Remote // India",
      description: "Spearheaded adversarial red-team simulations and penetration testing engagements for enterprise fintech clients. Designed automated DevSecOps scanning gates in CI/CD pipelines.",
      technologies: ["Burp Suite Pro", "Python", "Docker", "AWS IAM", "eBPF", "OWASP Top 10"],
    },
    {
      role: "Security Analyst & Pen-Tester",
      company: "ShieldByte Security Labs",
      period: "2021 — 2023",
      location: "Remote",
      description: "Performed black-box penetration tests across 30+ web and mobile applications. Discovered 120+ unique vulnerabilities and authored actionable remediation guidance for developer teams.",
      technologies: ["Nmap", "Metasploit", "OWASP ZAP", "Wireshark", "Linux", "Bash"],
    },
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/sumitkumargarsa", handle: "@sumitkumargarsa" },
    { name: "HackTheBox", url: "https://app.hackthebox.com/profile/sumitgarsa", handle: "htb/sumitgarsa" },
    { name: "TryHackMe", url: "https://tryhackme.com/p/sumitgarsa", handle: "thm/sumitgarsa" },
    { name: "LinkedIn", url: "https://linkedin.com/in/sumitkumargarsa", handle: "in/sumitkumargarsa" },
    { name: "Twitter / X", url: "https://twitter.com/sumitgarsa", handle: "@sumitgarsa" },
  ],
};
