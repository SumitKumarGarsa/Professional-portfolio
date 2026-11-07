export const cybersecData = {
  profile: {
    name: "Sumit Kumar Garsa",
    initials: "SKG",
    callsign: "SHADOW_ROOT",
    role: "Cybersecurity Engineer & Offensive Security Researcher",
    location: "Remote // Available for Global Security Audits",
    email: "security.sumitgarsa@proton.me",
    avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    resumeUrl: "/resumes/Sumit_Kumar_Garsa_Cybersecurity_Resume.pdf",
    status: "STATUS: ACTIVE // DEFCON 4 // MONITORING",
    pgpKeyId: "0x4F92B3C8E190A72D",
    pgpFingerprint: "E738 9B12 4C5D 88FA 901E  45B2 4F92 B3C8 E190 A72D",
    bio: "Adversarial security engineer specializing in web application penetration testing, DevSecOps pipeline automation, and Zero-Trust cloud hardening. Discovering critical zero-day vulnerabilities before malicious actors exploit them.",
  },

  socials: [
    { name: "GitHub", url: "https://github.com/sumitkumargarsa", handle: "@sumitkumargarsa" },
    { name: "HackTheBox", url: "https://app.hackthebox.com/profile/sumitgarsa", handle: "htb/sumitgarsa" },
    { name: "TryHackMe", url: "https://tryhackme.com/p/sumitgarsa", handle: "thm/sumitgarsa" },
    { name: "LinkedIn", url: "https://linkedin.com/in/sumitkumargarsa", handle: "in/sumitkumargarsa" },
    { name: "Twitter / X", url: "https://twitter.com/sumitgarsa", handle: "@sumitgarsa" },
  ],

  hero: {
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
    pitchLine1: "Simulating sophisticated threat actors to discover and eliminate critical vulnerabilities.",
    pitchLine2: "Hardening cloud infrastructure, automating CI/CD security gates, and architecting Zero-Trust identity frameworks.",
    primaryCta: { text: "View Security Reports", href: "#reports" },
    secondaryCta: { text: "Initiate Audit Brief", href: "#contact" },
  },

  stats: [
    { label: "Vulnerabilities Audited", value: "180+" },
    { label: "Critical CVEs Mitigated", value: "14" },
    { label: "HackTheBox Rank", value: "Pro Hacker" },
    { label: "TryHackMe Global Rank", value: "Top 1%" },
  ],

  about: {
    philosophy: "Perimeter security is obsolete. The only resilient architecture is one designed with the assumption of breach. Having audited enterprise web applications and orchestrated black-box red team simulations, I evaluate systems through the adversary's tactical playbook. I don't just generate automated vulnerability scans; I write weaponized proof-of-concept exploits to validate impact, followed by production-ready code fixes that permanently eliminate the attack surface.",
    focusSplit: {
      offensive: 55, // Offensive Security / Pen-Testing
      defensive: 45, // Defensive Security / DevSecOps & Hardening
    },
    specializations: [
      "Black-Box & Gray-Box Web Application Penetration Testing (OWASP Top 10)",
      "Zero-Trust Network Architecture & Mutual TLS (mTLS) Cryptographic Enclaves",
      "Automated DevSecOps Pipeline Integration (SAST, DAST, Container Security)",
      "Adversarial Payload Engineering (SSRF, Prototype Pollution, IDOR, SQLi Bypasses)",
    ],
  },

  expertise: [
    {
      id: "web-pentest",
      title: "Web App Penetration Testing",
      badge: "OWASP Top 10",
      description: "Comprehensive manual and automated vulnerability assessment of web applications, REST/GraphQL APIs, and microservice meshes.",
      deliverables: ["Executive & technical risk reports", "Reproducible PoC exploit scripts", "CVSS v3.1 impact scoring"],
      icon: "ShieldAlert",
    },
    {
      id: "devsecops",
      title: "DevSecOps & CI/CD Hardening",
      badge: "Shift Left",
      description: "Automating security testing in developer workflows without disrupting deployment velocity. Injecting SAST, DAST, and secret scanners.",
      deliverables: ["GitHub Actions / GitLab CI security gates", "Secret leak prevention hooks", "Container image vulnerability scanning"],
      icon: "GitBranch",
    },
    {
      id: "zero-trust",
      title: "Zero-Trust Architecture",
      badge: "Identity Mesh",
      description: "Eliminating implicit network trust. Implementing SPIFFE/SPIRE x509 ephemeral certificates, hardware security modules, and mTLS.",
      deliverables: ["Service-to-service cryptographic mesh", "OAuth2/OIDC token hardening", "Role-based least privilege enforcement"],
      icon: "Lock",
    },
    {
      id: "api-security",
      title: "API Security & Threat Modeling",
      badge: "OWASP API Top 10",
      description: "Auditing authentication gates, broken object level authorization (BOLA/IDOR), rate limit bypasses, and data exfiltration vectors.",
      deliverables: ["STRIDE threat modeling diagrams", "JWT signature forgery analysis", "Mass assignment mitigation"],
      icon: "Cpu",
    },
    {
      id: "cloud-security",
      title: "Cloud & Infrastructure Hardening",
      badge: "AWS / GCP",
      description: "Auditing IAM policies, VPC security groups, S3 bucket permissions, and Kubernetes cluster pod security standards.",
      deliverables: ["CIS benchmark compliance audit", "IAM privilege escalation remediation", "Kubernetes network policy enforcement"],
      icon: "CloudRain",
    },
    {
      id: "reverse-engineering",
      title: "Reverse Engineering & Malware Analysis",
      badge: "Binary Triage",
      description: "Dissecting compiled binaries, decompiling suspect JavaScript bundles, and analyzing obfuscated payload command-and-control logic.",
      deliverables: ["Assembly & Ghidra decompilation review", "Memory corruption analysis", "Malicious telemetry isolation"],
      icon: "Terminal",
    },
  ],

  toolkit: [
    {
      category: "Adversarial & Pen-Testing",
      tools: [
        { name: "Burp Suite Pro", role: "Web proxy, automated scanner & custom extension development" },
        { name: "Nmap & Masscan", role: "High-speed network discovery & port scanning" },
        { name: "Metasploit Framework", role: "Exploit execution & post-exploitation credential harvesting" },
        { name: "OWASP ZAP", role: "Automated vulnerability scanning & API fuzzing" },
        { name: "SQLmap", role: "Automated SQL injection detection & database takeover" },
      ],
    },
    {
      category: "Traffic & Forensic Analysis",
      tools: [
        { name: "Wireshark & TShark", role: "Deep packet inspection & anomalous protocol dissection" },
        { name: "Zeek & Suricata", role: "Network security monitoring & intrusion detection (IDS/IPS)" },
        { name: "Ghidra / IDA Pro", role: "Static binary reverse engineering & decompilation" },
        { name: "Volatility", role: "RAM memory forensics & rootkit discovery" },
      ],
    },
    {
      category: "DevSecOps & Defensive Automation",
      tools: [
        { name: "Semgrep & Snyk", role: "Static application security testing (SAST) in CI/CD" },
        { name: "Trivy & Grype", role: "Docker container and OS package vulnerability scanning" },
        { name: "TruffleHog & GitGuardian", role: "Real-time high-entropy secret and credential leak detection" },
        { name: "Splunk & Elastic SIEM", role: "Centralized telemetry ingestion & correlation rule alerting" },
      ],
    },
  ],

  labsAndCtfs: {
    platforms: [
      { name: "Hack The Box", rank: "Pro Hacker", rankClass: "rank-gold", points: "3,850 pts", pwned: "42 Machines", url: "https://hackthebox.com" },
      { name: "TryHackMe", rank: "Top 1% Global", rankClass: "rank-red", points: "18,400 pts", badges: "56 Badges", url: "https://tryhackme.com" },
      { name: "picoCTF", rank: "Top 500", rankClass: "rank-cyan", points: "5,200 pts", solved: "78 Challenges", url: "https://picoctf.org" },
    ],
    writeups: [
      {
        title: "HTB: Obscurity — Exploiting Custom Encryption & Bad Python Sudo Logic",
        difficulty: "Medium",
        category: "Cryptanalysis & Privilege Escalation",
        summary: "Deconstructed a homemade Python encryption cipher to extract cleartext SSH keys, followed by exploiting a root-level path traversal vulnerability in a custom web server.",
        url: "#",
      },
      {
        title: "Bypassing Modern WAF Rules using Unicode Normalization Flaws",
        difficulty: "Hard",
        category: "Web Application Firewall Bypass",
        summary: "Demonstrated how web servers normalize multi-byte UTF-8 characters post-WAF inspection, allowing full SQL injection and XSS payloads to execute cleanly without triggering signatures.",
        url: "#",
      },
      {
        title: "THM: Retro — Exploiting CVE-2019-1388 Windows UAC Bypass",
        difficulty: "Medium",
        category: "Active Directory & Windows PrivEsc",
        summary: "Leveraged certificate dialogue execution in Windows Error Reporting to spawn an elevated NT AUTHORITY\\SYSTEM command prompt.",
        url: "#",
      },
    ],
  },

  projects: [
    {
      id: "aegis-siem",
      title: "Aegis Sentinel Threat SIEM",
      tagline: "Autonomous telemetry engine analyzing 50k events/sec with eBPF filtering.",
      problem: "Enterprise security operations teams were overwhelmed by false-positive alert fatigue and could not detect lateral internal reconnaissance in real time.",
      approach: "Engineered an eBPF Linux kernel packet filter connected to a high-speed Rust and Python correlation engine. Integrated behavioral baselining to flag credential stuffing within 350ms.",
      result: "Achieved 99.4% detection accuracy, dropped mean-time-to-detect (MTTD) from 4 hours to sub-second, and automated firewall quarantine webhooks.",
      tech: ["Rust", "Python", "eBPF", "Elasticsearch", "Docker", "Suricata"],
      metrics: "<350ms incident detection • 99.4% precision rate",
      githubUrl: "https://github.com/sumitkumargarsa/aegis-sentinel-siem",
    },
    {
      id: "cerberus-scanner",
      title: "Cerberus Adversarial API Fuzzer",
      tagline: "Automated DAST probe uncovering hidden BOLA/IDOR and injection vectors.",
      problem: "Traditional vulnerability scanners fail to understand complex multi-step microservice authorization states, leaving critical IDOR vulnerabilities undetected.",
      approach: "Developed an intelligent stateful fuzzer that parses OpenAPI specifications, creates dual-session token state machines, and dynamically tests object IDs across user permission boundaries.",
      result: "Discovered 140+ high and critical vulnerabilities across 18 private microservice codebases before production deployment.",
      tech: ["Go", "Node.js", "Burp Suite Extender API", "Docker", "TypeScript"],
      metrics: "140+ vulnerabilities mitigated • 0 false positives on IDOR",
      githubUrl: "https://github.com/sumitkumargarsa/cerberus-api-scanner",
    },
    {
      id: "cipherlock-vault",
      title: "CipherLock Cryptographic HSM Enclave",
      tagline: "Zero-knowledge encryption vault with AES-256-GCM and memory zeroization.",
      problem: "Fintech payment application required FIPS 140-2 Level 3 compliance and automated protection against memory dump attacks (cold-boot attacks).",
      approach: "Constructed a secure memory enclave in Rust utilizing AES-256-GCM authenticated envelope encryption with Hardware Security Module (HSM) PKCS#11 key derivation.",
      result: "Secured $120M in monthly transactional volume with zero key leakage and passed external CREST cryptographic compliance audit.",
      tech: ["Rust", "AES-256-GCM", "Node.js", "PKCS#11 HSM", "PostgreSQL", "mTLS"],
      metrics: "$120M volume secured • 100% memory zeroization verified",
      githubUrl: "https://github.com/sumitkumargarsa/cipherlock-enclave",
    },
  ],

  certifications: [
    {
      name: "Certified Ethical Hacker (CEH v12)",
      issuer: "EC-Council",
      date: "2023",
      credentialId: "ECC-98214309",
      credentialUrl: "https://aspen.eccouncil.org",
      status: "Active",
      badgeColor: "#00FF9C",
    },
    {
      name: "CompTIA Security+ (SY0-601)",
      issuer: "CompTIA",
      date: "2022",
      credentialId: "COMP001021489",
      credentialUrl: "https://www.credly.com",
      status: "Active",
      badgeColor: "#38BDF8",
    },
    {
      name: "eJPT (Junior Penetration Tester)",
      issuer: "INE Security / eLearnSecurity",
      date: "2023",
      credentialId: "INE-EJPT-582910",
      credentialUrl: "https://ine.com",
      status: "Active",
      badgeColor: "#F59E0B",
    },
    {
      name: "Offensive Security Certified Professional (OSCP)",
      issuer: "OffSec",
      date: "In Progress",
      credentialId: "PEN-200 Active Candidate",
      credentialUrl: "https://www.offsec.com",
      status: "Lab Phase & Exam Scheduled",
      badgeColor: "#EF4444",
    },
  ],

  reportsAndWriteups: [
    {
      id: "sanitized-report-01",
      title: "Sanitized Penetration Test Report: FinTech Banking Portal",
      type: "Sample Assessment Report",
      severity: "2 Critical, 4 High, 3 Medium",
      date: "NOV 2025",
      summary: "Executive summary and remediation blueprints from a gray-box penetration test uncovering unauthenticated account takeover via BOLA in payment routing APIs.",
      downloadUrl: "/reports/Sample_Pentest_Report_SKG.pdf",
    },
    {
      id: "cve-disclosure-01",
      title: "Responsible Disclosure: Remote Code Execution via Prototype Pollution in Popular NPM Library",
      type: "Vulnerability Disclosure",
      severity: "CVSS 9.8 (Critical)",
      date: "AUG 2025",
      summary: "Identified unsafe recursive merge routines allowing unauthenticated attackers to override Object.prototype and hijack process.env to achieve remote code execution.",
      downloadUrl: "/reports/CVE_Disclosure_Prototype_Pollution.pdf",
    },
  ],

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
};
