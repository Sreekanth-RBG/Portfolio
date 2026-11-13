/**
 * Professional Portfolio Logic — Sreekanth Reddy Vennapusa
 * High performance, zero dependencies, rich interactive UI/UX suite.
 */

// Project Data for Interactive Modals & AI Assistant
const projectsData = {
  mecsec: {
    id: "mecsec",
    title: "MECSEC — GPS-Enabled AutoTech SaaS Marketplace",
    status: "Ongoing Engineering",
    period: "2025 – Present",
    role: "Frontend Developer",
    problem: "Identified the lack of a unified, trustworthy platform for vehicle servicing in the fragmented, unorganized Indian automotive aftermarket. Customers struggle with opaque pricing, untraceable maintenance histories, and inconsistent roadside assistance availability.",
    technologies: [
      "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", 
      "MongoDB Atlas", "Firebase", "Google Maps API", "Razorpay", 
      "MSG91", "Blockchain", "JWT/OAuth2"
    ],
    architecture: "Engineered responsive client architecture integrating Google Maps Geocoding and Places API for precision service-center discovery. Interfaced with distributed backend APIs, secure Razorpay checkout pipelines, and decentralized ledger components for tamper-evident service logging.",
    impact: "Enabled real-time GPS-based service discovery, tamper-proof vehicle maintenance history recorded on blockchain, and AI-driven diagnostics to establish measurable trust between vehicle owners and verified technicians.",
    takeaway: "Demonstrates production-ready frontend state management, complex multi-third-party API integration, and user experience engineering for high-stakes consumer workflows."
  },
  sentinel: {
    id: "sentinel",
    title: "Sentinel.eml — Phishing & Email Header Forensic Analysis Tool",
    status: "Completed",
    period: "August 2025",
    role: "Sole Developer (Faculty-Guided LPU Summer Training)",
    problem: "Addressed the difficulty and latency in manually parsing raw email RFC-822 headers to identify sophisticated email spoofing, relay hops, and credential harvesting threats.",
    technologies: [
      "Python", "Flask/FastAPI", "AbuseIPDB API", "dnspython", 
      "SPF / DKIM / DMARC Validation", "Regex Parsing"
    ],
    architecture: "Built an end-to-end analytical pipeline that decomposes raw .eml files, extracts originating IP hops, queries threat intelligence feeds (AbuseIPDB), and performs automated DNS queries to validate SPF alignment, DKIM signatures, and DMARC enforcement policies.",
    impact: "Empowered security teams and end-users to authenticate sender legitimacy, instantly expose forged headers, flag malicious infrastructure, and trace mail routing paths via an intuitive risk-scored visual breakdown.",
    takeaway: "Exemplifies deep knowledge of networking protocols, threat intelligence correlation, and defensive security engineering."
  },
  nexus7: {
    id: "nexus7",
    title: "NEXUS-7 — Real-Time Resource Allocation System for Multiprogramming",
    status: "Completed",
    period: "April 2025",
    role: "Team of 3 (Core Contributor to Scheduling Logic & Resource Allocation)",
    problem: "Addressed the pedagogical and diagnostic gap between static textbook scheduling algorithms (Round Robin, SJF, MLFQ) and actual dynamic operating system CPU execution and resource contention.",
    technologies: [
      "C++", "Process Scheduling Algorithms (RR, SJF, Priority, MLFQ)", 
      "WebSocket Streaming", "Node.js / Express", "Real-Time Gantt Simulation"
    ],
    architecture: "Implemented deterministic scheduling simulations in algorithmic C++ modules, tracking turnaround times, waiting times, and context switch penalties. Streamed live simulation states through WebSockets to render interactive process state queues and Gantt timelines.",
    impact: "Enabled real-time visualization, deterministic benchmarking, and comparative analysis of process scheduling efficiency under varying CPU burst loads and preemption constraints.",
    takeaway: "Highlights fundamental operating system architecture competence, concurrency control, and low-level algorithmic efficiency."
  }
};

// Certifications Data (Authentic Credentials with Original Preview and Download Files)
const certificationsData = [
  {
    rank: "01",
    id: "cert-comptia-network",
    category: "security",
    title: "CompTIA Network+",
    issuer: "CompTIA",
    date: "Aug 2026 - Aug 2029",
    verificationStatus: "Verified Industry Standard",
    credentialId: "COMP001023025038",
    verifyUrl: "http://verify.CompTIA.org",
    file: "assets/certificates/1787201612863.jpg",
    download: "assets/certificates/CompTIA_Network_Plus.pdf",
    description: "Globally recognized CompTIA Network+ ce credential validating mastery of enterprise networking topologies, routing protocols (BGP, OSPF), IPv4/IPv6 subnetting, perimeter firewalls, and defense-in-depth."
  },
  {
    rank: "02",
    id: "cert-oracle-agentic",
    category: "ai",
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle University",
    date: "Sep 2026",
    verificationStatus: "Verified Oracle Associate",
    credentialId: "Oracle Certified Associate",
    file: "assets/certificates/ecertificate.pdf",
    download: "assets/certificates/ecertificate.pdf",
    description: "Official Oracle University certification demonstrating foundational expertise in enterprise AI architectures, autonomous agents, and goal decomposition workflows."
  },
  {
    rank: "03",
    id: "cert-oracle-database",
    category: "ai",
    title: "Oracle AI Database Foundations Associate",
    issuer: "Oracle University",
    date: "Sep 2026",
    verificationStatus: "Verified Oracle Associate",
    credentialId: "Oracle Certified Associate",
    file: "assets/certificates/ecertificate(1).pdf",
    download: "assets/certificates/ecertificate(1).pdf",
    description: "Official Oracle University certification validating competence in vector databases, AI-driven SQL query optimization, and enterprise data models."
  },
  {
    rank: "04",
    id: "cert-quickheal-network",
    category: "security",
    title: "Network Configuration & Management",
    issuer: "Quick Heal Academy",
    date: "Apr 2026",
    verificationStatus: "Verified Academy Certificate",
    credentialId: "2025/QH/LPU27",
    file: "assets/certificates/NetworkConfigaration&Managment.jpg",
    download: "assets/certificates/NetworkConfigaration&Managment.pdf",
    description: "Comprehensive hands-on training in enterprise routing, switch management, firewall rule policies, and network security perimeter defense."
  },
  {
    rank: "05",
    id: "cert-quickheal-it",
    category: "security",
    title: "IT Fundamentals",
    issuer: "Quick Heal Academy",
    date: "Apr 2026",
    verificationStatus: "Verified Academy Certificate",
    credentialId: "2025/QH/LPU27",
    file: "assets/certificates/ItFundamentals.jpg",
    download: "assets/certificates/ItFundamentals.pdf",
    description: "In-depth instruction on core computer systems architectures, hardware components, operating systems, and cybersecurity hygiene."
  },
  {
    rank: "06",
    id: "cert-hacky-sec",
    category: "security",
    title: "Cybersecurity Hacking Workshop",
    issuer: "Hacky Security × LPU",
    date: "Jan 31, 2025",
    verificationStatus: "Workshop Credential",
    credentialId: "HACKYWRKLPU28038",
    file: "assets/certificates/WhatsApp Image 2026-09-02 at 10.52.46 PM (1).jpeg",
    download: "assets/certificates/WhatsApp Image 2026-09-02 at 10.52.46 PM (1).jpeg",
    description: "Practical hands-on workshop covering ethical hacking vectors, penetration testing workflows, and defensive security measures conducted with Lovely Professional University."
  },
  {
    rank: "07",
    id: "cert-iamneo-prog",
    category: "systems",
    title: "Computer Programming (72 Hours)",
    issuer: "iamneo × LPU",
    date: "May 05, 2025",
    verificationStatus: "Course Completion Certificate",
    credentialId: "10AE0CF2BG1cH6AI08e1",
    file: "assets/certificates/1781155914312.jpg",
    download: "assets/certificates/1781155914312.jpg",
    description: "Extensive 72-hour rigorous programming curriculum focusing on data structures, algorithmic complexity, and structured code architecture on the iamneo platform."
  },
  {
    rank: "08",
    id: "cert-cse-c",
    category: "systems",
    title: "C Programming (18-Hr Live Course)",
    issuer: "CSE Pathshala",
    date: "Jan 26, 2025",
    verificationStatus: "Proctored Examination Certificate",
    credentialId: "CP-202501-CP034",
    file: "assets/certificates/1781155834398.jpg",
    download: "assets/certificates/1781155834398.jpg",
    description: "Proctored live examination credential covering low-level procedural C programming, pointer arithmetic, dynamic memory layout, and system calls."
  },
  {
    rank: "09",
    id: "cert-skillera-linux",
    category: "systems",
    title: "Linux Commands & Shell Scripting",
    issuer: "Skillera",
    date: "Nov 26, 2024",
    verificationStatus: "Proctored Examination Certificate",
    credentialId: "CER/NT/OCT/LCS/0079",
    file: "assets/certificates/1781155795073.jpg",
    download: "assets/certificates/1781155795073.jpg",
    description: "17-hour MOOC and proctored examination credential in POSIX environments, Bash automation pipelines, process control, and Linux system administration."
  },
  {
    rank: "10",
    id: "cert-drive-dev",
    category: "systems",
    title: "Drive Dev Hackathon",
    issuer: "Lovely Professional University",
    date: "Sep 21, 2024",
    verificationStatus: "Badge of Participation",
    credentialId: "LPU-DRIVEDEV-2024",
    file: "assets/certificates/V SREEKANTH REDDY Certificate .jpg",
    download: "assets/certificates/V SREEKANTH REDDY Certificate .jpg",
    description: "Active sprint participation badge recognizing collaborative software architecture and prototyping in the competitive 24-hour hackathon at LPU."
  },
  {
    rank: "11",
    id: "cert-wns-cybersmart",
    category: "security",
    title: "Cyber Smart Certification",
    issuer: "WNS Cares Foundation",
    date: "2024",
    verificationStatus: "Verified Credential",
    credentialId: "Reg #12409277",
    file: "assets/certificates/Vennapusa Sreekanth Reddy (Registration Number- 12409277)_2.jpg",
    download: "assets/certificates/Vennapusa Sreekanth Reddy (Registration Number- 12409277).pdf",
    description: "Cybersecurity awareness, digital risk assessment, authentication defense, and cyber safety fundamentals certification issued to Vennapusa Sreekanth Reddy."
  },
  {
    rank: "12",
    id: "cert-infosys-cpp",
    category: "systems",
    title: "Programming Using C++",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    verificationStatus: "Verified Certificate",
    credentialId: "verify.onwingspan.com",
    verifyUrl: "https://verify.onwingspan.com",
    file: "assets/certificates/Certificate.pdf",
    download: "assets/certificates/Certificate.pdf",
    description: "Comprehensive assessment in object-oriented C++, memory management, standard template library (STL), and algorithmic efficiency."
  },
  {
    rank: "13",
    id: "cert-neocolab-c",
    category: "systems",
    title: "Computer Programming E-Certificate",
    issuer: "Neocolab / LPU Exams Media",
    date: "2025",
    verificationStatus: "Proctored Examination",
    credentialId: "12409277@neocolab.ai",
    file: "assets/certificates/Neocolab_C_Programming.pdf",
    download: "assets/certificates/Neocolab_C_Programming.pdf",
    description: "Official proctored examination credential awarded to Vennapusa Sreekanth Reddy (Reg: 12409277) for assessed performance in computer programming."
  }
];

// Document Initializer
document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initThemeToggle();
  initNavigation();
  initTypewriterEffect();
  initGlobal3DBackground();
  initEndorsementCarousel();
  initProjectDeckExpanders();
  initExperienceExpanders();
  initResumeModal();
  initAIAssistantModal();
  initProjectsModal();
  initCertifications();
  initCopyButtons();
  initContactForm();
  initScrollAnimations();
  initFloatingButtons();
});

// 1. Theme Switcher (Default: Cyber Obsidian / Optional: Crisp Ice Light)
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("sr_portfolio_theme");

  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      if (isLight) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("sr_portfolio_theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("sr_portfolio_theme", "light");
      }
    });
  }
}

// 2. Navigation Pill Active State & Scrollspy
function initNavigation() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-pill-link");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen);
      menuBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  // Active section scrollspy
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 140;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// 3. Live Terminal Typing Effect (> Npm start | ,I am)
function initTypewriterEffect() {
  const el = document.getElementById("terminalTypewriter");
  if (!el) return;

  const phrases = [
    "Npm start | ,I am",
    "G++ main.cpp | ,I am",
    "Python3 analyze.py | ,I am",
    "Nmap -sV -sC | ,I am"
  ];
  let phraseIdx = 0;
  let charIdx = phrases[0].length;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIdx];
    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50;
    } else {
      el.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at end of phrase
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 400; // Pause before next phrase
    }

    setTimeout(type, typingSpeed);
  }

  // Kick off after a slight delay
  setTimeout(type, 1800);
}

// 4. Hero Endorsement / Credential Carousel
function initEndorsementCarousel() {
  const slider = document.getElementById("endorsementSlider");
  const dotsContainer = document.getElementById("endorseDots");
  const prevBtn = document.getElementById("endorsePrevBtn");
  const nextBtn = document.getElementById("endorseNextBtn");
  if (!slider) return;

  const slides = slider.querySelectorAll(".endorse-slide");
  const dots = dotsContainer ? dotsContainer.querySelectorAll(".dot") : [];
  let currentIdx = 0;
  let autoTimer = null;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === index);
    });
    currentIdx = index;
  }

  function nextSlide() {
    const nextIdx = (currentIdx + 1) % slides.length;
    showSlide(nextIdx);
  }

  function prevSlide() {
    const prevIdx = (currentIdx - 1 + slides.length) % slides.length;
    showSlide(prevIdx);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetTimer();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      showSlide(idx);
      resetTimer();
    });
  });

  function startTimer() {
    autoTimer = setInterval(nextSlide, 5000);
  }

  function resetTimer() {
    clearInterval(autoTimer);
    startTimer();
  }

  startTimer();
}

// 5. Project In-Card Expander Drawer (+ / x Flip)
function initProjectDeckExpanders() {
  const flipBtns = document.querySelectorAll("[data-project-flip]");
  const closeBtns = document.querySelectorAll("[data-project-close]");

  flipBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute("data-project-flip");
      const backPanel = document.getElementById(`deckBack-${projId}`);
      if (backPanel) {
        backPanel.classList.add("open");
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute("data-project-close");
      const backPanel = document.getElementById(`deckBack-${projId}`);
      if (backPanel) {
        backPanel.classList.remove("open");
      }
    });
  });
}

// 6. Experience In-Card Expander Drawer
function initExperienceExpanders() {
  const expandBtns = document.querySelectorAll(".exp-expand-btn");

  expandBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const isOpen = targetEl.classList.toggle("open");
      btn.innerHTML = isOpen 
        ? '<i class="fa-solid fa-minus"></i> <span>Close</span>' 
        : '<i class="fa-solid fa-plus"></i> <span>Details</span>';
    });
  });
}

// 7. Interactive Official Resume Modal (Preview & Download)
function initResumeModal() {
  const resumeModal = document.getElementById("resumeModal");
  const resumeBtn = document.getElementById("resumeBtn");
  const headerResumeBtn = document.getElementById("headerResumeBtn");
  const contactResumeBtn = document.getElementById("contactResumeModalBtn");
  const closeBtn = document.getElementById("resumeModalCloseBtn");
  const footerCloseBtn = document.getElementById("resumeCloseFooterBtn");

  if (!resumeModal) return;

  function openResume() {
    resumeModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeResume() {
    resumeModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (resumeBtn) {
    resumeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openResume();
    });
  }

  if (headerResumeBtn) {
    headerResumeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openResume();
    });
  }

  if (contactResumeBtn) {
    contactResumeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openResume();
    });
  }

  if (closeBtn) closeBtn.addEventListener("click", closeResume);
  if (footerCloseBtn) footerCloseBtn.addEventListener("click", closeResume);

  resumeModal.addEventListener("click", (e) => {
    if (e.target === resumeModal) closeResume();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && resumeModal.classList.contains("active")) {
      closeResume();
    }
  });
}

// 8. Interactive AI Assistant Modal ("Ask me anything" - yashahire style)
function initAIAssistantModal() {
  const triggerBtn = document.getElementById("askMeAnythingBtn");
  const mascot = document.getElementById("mascotDog");
  const modal = document.getElementById("aiModal");
  const closeBtn = document.getElementById("aiModalCloseBtn");
  const chatBody = document.getElementById("aiChatBody");
  const userInput = document.getElementById("aiUserInput");
  const sendBtn = document.getElementById("aiSendBtn");
  const chips = document.querySelectorAll(".prompt-chip");

  if (!modal) return;

  function openModal() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    if (userInput) setTimeout(() => userInput.focus(), 300);
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (triggerBtn) triggerBtn.addEventListener("click", openModal);
  if (mascot) mascot.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Pre-programmed Knowledge Base for instant intelligent answers
  const knowledge = {
    projects: "Sreekanth has engineered three core systems:\n\n1. 🚗 **MECSEC** — GPS-enabled AutoTech SaaS marketplace built with React, TypeScript, Node.js, and Blockchain for tamper-evident maintenance history.\n\n2. 🛡️ **Sentinel.eml** — Python defensive security utility for RFC-822 email forensics, SPF/DKIM/DMARC analysis, and AbuseIPDB threat correlation.\n\n3. ⚙️ **NEXUS-7** — Real-time operating system CPU scheduling simulator (RR, SJF, Priority, MLFQ) written in C++ with live WebSocket telemetry.",
    skills: "Sreekanth's core competencies:\n\n• **Languages**: C++, Python, C, Data Structures & Algorithms (DSA)\n• **Frameworks & Web**: React, TypeScript, Node.js, Express, HTML/CSS\n• **Cloud & DB**: MySQL, DBMS, Oracle Cloud\n• **Security & Systems**: CompTIA Network+, SPF/DKIM/DMARC protocols, Linux shell scripting, TryHackMe CTF forensics (Top 15% globally).",
    academics: "Sreekanth is currently a **Third-Year B.Tech Computer Science and Engineering** undergraduate at **Lovely Professional University (LPU)** with a cumulative **CGPA of 7.62**.\n\nPrior to this, he scored **90.50%** in Intermediate (Race Junior College) and **92.83%** in Matriculation (Keshava Reddy Concept School).",
    certifications: "Sreekanth holds **13 verified credentials**, including:\n\n1. CompTIA Network+ (Industry Standard)\n2. Oracle Certified Associate — Agentic AI Foundations\n3. Oracle Certified Associate — AI Database Foundations\n4. Infosys Springboard — Programming Using C++\n5. Quick Heal Academy — Network Configuration & Management\n6. TryHackMe Top 15% Global Ranking.",
    whyhire: "Why hire Sreekanth?\n\n• **Systems Rigor**: Understands low-level execution (CPU scheduling, memory management, C/C++) rather than just surface frameworks.\n• **Security Mindset**: CompTIA Network+ certified with hands-on threat parsing experience.\n• **Disciplined Execution**: High academic consistency (CGPA 7.62) paired with production frontend SaaS engineering in React & TypeScript.\n• **Immediate Availability**: Open for placement interviews, internships, and technical assessments.",
    contact: "You can reach Sreekanth directly:\n\n📧 **Email**: vsreekanthreddy1818@gmail.com\n📞 **Phone**: +91-6305598886\n💼 **LinkedIn**: linkedin.com/in/sreekanth-reddy-vennapusa\n🐙 **GitHub**: github.com/Sreekanth-RBG"
  };

  function appendMessage(text, isUser = false) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `ai-msg ${isUser ? 'user' : 'bot'}`;
    const bubble = document.createElement("div");
    bubble.className = "ai-msg-bubble";
    // Format bold and linebreaks
    bubble.innerHTML = text.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    msgDiv.appendChild(bubble);
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleQuestion(key, questionText) {
    appendMessage(questionText, true);

    // Show bot typing simulation
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "ai-msg bot";
    typingIndicator.innerHTML = '<div class="ai-msg-bubble" style="color:var(--text-muted);"><i class="fa-solid fa-spinner fa-spin"></i> Sreekanth is typing...</div>';
    chatBody.appendChild(typingIndicator);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      typingIndicator.remove();
      const answer = knowledge[key] || "I don't have that specific detail yet, but feel free to email Sreekanth directly at vsreekanthreddy1818@gmail.com!";
      appendMessage(answer, false);
    }, 450);
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const qKey = chip.getAttribute("data-question");
      const qText = chip.textContent.trim();
      handleQuestion(qKey, qText);
    });
  });

  function processCustomInput() {
    const query = userInput.value.trim();
    if (!query) return;

    userInput.value = "";
    const lower = query.toLowerCase();

    let matchedKey = null;
    if (lower.includes("project") || lower.includes("build") || lower.includes("mecsec") || lower.includes("sentinel") || lower.includes("nexus")) {
      matchedKey = "projects";
    } else if (lower.includes("skill") || lower.includes("stack") || lower.includes("tech") || lower.includes("language") || lower.includes("c++") || lower.includes("python")) {
      matchedKey = "skills";
    } else if (lower.includes("cgpa") || lower.includes("gpa") || lower.includes("college") || lower.includes("university") || lower.includes("lpu") || lower.includes("year")) {
      matchedKey = "academics";
    } else if (lower.includes("cert") || lower.includes("comptia") || lower.includes("oracle") || lower.includes("tryhackme")) {
      matchedKey = "certifications";
    } else if (lower.includes("hire") || lower.includes("why") || lower.includes("resume") || lower.includes("strengths")) {
      matchedKey = "whyhire";
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("reach") || lower.includes("hire")) {
      matchedKey = "contact";
    }

    if (matchedKey) {
      handleQuestion(matchedKey, query);
    } else {
      appendMessage(query, true);
      setTimeout(() => {
        appendMessage(`Thanks for asking! Sreekanth specializes in Cybersecurity, Systems Architecture, and Full-Stack Engineering (3rd Year, CGPA 7.62, Top 15% TryHackMe). Feel free to click any suggestion chip above or drop him a note at vsreekanthreddy1818@gmail.com!`, false);
      }, 500);
    }
  }

  if (sendBtn) sendBtn.addEventListener("click", processCustomInput);
  if (userInput) {
    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        processCustomInput();
      }
    });
  }
}

// 9. Floating Buttons (Say Hi & Back to Top)
function initFloatingButtons() {
  const backTopBtn = document.getElementById("floatingBackTopBtn");

  window.addEventListener("scroll", () => {
    if (backTopBtn) {
      if (window.pageYOffset > 500) {
        backTopBtn.classList.add("visible");
      } else {
        backTopBtn.classList.remove("visible");
      }
    }
  });

  if (backTopBtn) {
    backTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// 10. Project Modal Handler
function initProjectsModal() {
  const modalOverlay = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const triggerBtns = document.querySelectorAll("[data-project-trigger]");

  if (!modalOverlay) return;

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    document.getElementById("modalStatusBadge").textContent = data.status;
    document.getElementById("modalProjectPeriod").textContent = data.period;
    document.getElementById("modalProjectTitle").textContent = data.title;
    document.getElementById("modalProjectRole").textContent = data.role;
    document.getElementById("modalProblemStatement").textContent = data.problem;
    document.getElementById("modalArchitecture").textContent = data.architecture;
    document.getElementById("modalRealWorldImpact").textContent = data.impact;
    document.getElementById("modalEngineeringTakeaway").textContent = data.takeaway;

    // Populate tech pills
    const techContainer = document.getElementById("modalTechContainer");
    techContainer.innerHTML = "";
    data.technologies.forEach(tech => {
      const span = document.createElement("span");
      span.className = "pill active";
      span.textContent = tech;
      techContainer.appendChild(span);
    });

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projId = btn.getAttribute("data-project-trigger");
      openModal(projId);
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
}

// 11. Render Original Certifications & Authentic Credential Inspector
function initCertifications() {
  const container = document.getElementById("certsContainer");
  const filterBtns = document.querySelectorAll("[data-cert-filter]");
  const certModal = document.getElementById("certDetailModal");
  const certModalClose = document.getElementById("certModalCloseBtn");
  const certCloseFooterBtn = document.getElementById("certCloseFooterBtn");
  const copyCertIdBtn = document.getElementById("copyCertIdBtn");

  let currentCert = null;

  if (!container) return;

  function render(filter = "all") {
    container.innerHTML = "";
    const filtered = filter === "all" 
      ? certificationsData 
      : certificationsData.filter(c => c.category === filter);

    filtered.forEach(cert => {
      const card = document.createElement("div");
      card.className = "cert-card";
      card.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span class="cert-priority-rank">#${cert.rank}</span>
          <span class="cert-date"><i class="fa-regular fa-calendar-check"></i> ${cert.date}</span>
        </div>
        <div class="cert-issuer-group">
          <i class="fa-solid fa-shield-halved cert-issuer-icon"></i>
          <span class="cert-issuer-name">${cert.issuer}</span>
        </div>
        <h4 class="cert-title">${cert.title}</h4>
        <div class="cert-footer">
          <span style="font-size:0.75rem;color:var(--text-muted);font-weight:600;">${cert.verificationStatus}</span>
          <div class="cert-card-actions">
            <button class="cert-inspect-btn" data-cert-view="${cert.id}" title="Inspect & Preview Original Document">
              <i class="fa-solid fa-eye"></i> <span>Preview</span>
            </button>
            <a href="${cert.download}" download class="cert-quick-dl-btn" title="Download Original File">
              <i class="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    // Attach inspect click handlers
    container.querySelectorAll("[data-cert-view]").forEach(btn => {
      btn.addEventListener("click", () => {
        const certId = btn.getAttribute("data-cert-view");
        openCertModal(certId);
      });
    });
  }

  function openCertModal(certId) {
    const cert = certificationsData.find(c => c.id === certId);
    if (!cert || !certModal) return;

    currentCert = cert;

    document.getElementById("certModalRank").textContent = `Priority #${cert.rank}`;
    document.getElementById("certModalTitle").textContent = cert.title;
    document.getElementById("certModalIssuer").textContent = cert.issuer;
    document.getElementById("certModalDate").textContent = cert.date;
    const statusTextEl = document.getElementById("certModalStatusText");
    if (statusTextEl) statusTextEl.textContent = cert.verificationStatus;
    document.getElementById("certModalId").textContent = cert.credentialId;
    document.getElementById("certModalDescription").textContent = cert.description;

    // Load actual document preview (image or PDF embed)
    const visualContent = document.getElementById("certModalVisualContent");
    if (visualContent) {
      visualContent.innerHTML = "";
      if (cert.file.endsWith(".jpg") || cert.file.endsWith(".jpeg") || cert.file.endsWith(".png")) {
        visualContent.innerHTML = `<img src="${cert.file}" alt="${cert.title}" class="cert-preview-img" loading="eager">`;
      } else if (cert.file.endsWith(".pdf")) {
        visualContent.innerHTML = `<iframe src="${cert.file}#toolbar=1" class="cert-preview-iframe" title="${cert.title} PDF Document"></iframe>`;
      }
    }

    // Set download button href
    const dlBtn = document.getElementById("certModalDownloadBtn");
    if (dlBtn) {
      dlBtn.href = cert.download;
      dlBtn.setAttribute("download", cert.download.split("/").pop());
    }

    // Set open button href
    const openBtn = document.getElementById("certModalOpenBtn");
    if (openBtn) {
      openBtn.href = cert.download || cert.file;
    }

    // Set verify online external link if available
    const verifyLink = document.getElementById("certVerifyExternalLink");
    if (verifyLink) {
      if (cert.verifyUrl) {
        verifyLink.href = cert.verifyUrl;
        verifyLink.style.display = "inline-flex";
      } else {
        verifyLink.style.display = "none";
      }
    }

    certModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeCertModal() {
    if (certModal) {
      certModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (certModalClose) certModalClose.addEventListener("click", closeCertModal);
  if (certCloseFooterBtn) certCloseFooterBtn.addEventListener("click", closeCertModal);

  if (certModal) {
    certModal.addEventListener("click", (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  // Copy ID button
  if (copyCertIdBtn) {
    copyCertIdBtn.addEventListener("click", () => {
      if (currentCert && currentCert.credentialId) {
        navigator.clipboard.writeText(currentCert.credentialId).then(() => {
          const original = copyCertIdBtn.innerHTML;
          copyCertIdBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
          setTimeout(() => {
            copyCertIdBtn.innerHTML = original;
          }, 2000);
        });
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-cert-filter");
      render(filter);
    });
  });

  render("all");
}

// 12. Clipboard Copy Button with Visual Feedback
function initCopyButtons() {
  const copyBtns = document.querySelectorAll("[data-copy-target]");

  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy-target");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        btn.style.color = "var(--crimson-500)";
        btn.style.borderColor = "var(--crimson-500)";

        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.style.color = "";
          btn.style.borderColor = "";
        }, 2200);
      }).catch(err => {
        console.error("Copy failed:", err);
      });
    });
  });
}

// 13. Sticky Notepad Form Handler
function initContactForm() {
  const form = document.getElementById("portfolioContactForm");
  const feedback = document.getElementById("formFeedback");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all note fields before sending.");
      return;
    }

    const mailtoUrl = `mailto:vsreekanthreddy1818@gmail.com?subject=${encodeURIComponent("Portfolio Inquiry from " + name)}&body=${encodeURIComponent("Sender: " + name + " (" + email + ")\n\n" + message)}`;
    
    if (feedback) {
      feedback.textContent = `Thank you, ${name}! Your email client will now open to deliver your note to Sreekanth.`;
      feedback.style.color = "var(--crimson-500)";
      feedback.style.fontWeight = "600";
      feedback.style.marginTop = "0.75rem";
    }

    setTimeout(() => {
      window.location.href = mailtoUrl;
      form.reset();
    }, 600);
  });
}

// 14. Scroll Entrance Section Reveal
function initScrollAnimations() {
  const sections = document.querySelectorAll(".section:not(.hero-section)");
  
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px"
    });

    sections.forEach(sec => observer.observe(sec));
  } else {
    sections.forEach(sec => sec.classList.add("revealed"));
  }
}

// 15. Global Interactive Three.js 3D Isometric Keycap Matrix (Spanning Entire Website)
function initGlobal3DBackground() {
  const canvas = document.getElementById("siteBgCanvas");
  if (!canvas) return;

  // Ensure Three.js is loaded
  if (typeof THREE === "undefined") {
    setTimeout(initGlobal3DBackground, 150);
    return;
  }

  let w = window.innerWidth;
  let h = window.innerHeight;

  // 1. WebGL Renderer Setup
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w, h, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // 2. Three.js Scene Setup
  const scene = new THREE.Scene();

  // 3. Orthographic Camera with 45-degree Isometric Tilt
  const frustumSize = 26;
  let aspect = w / h;
  const camera = new THREE.OrthographicCamera(
    (frustumSize * aspect) / -2,
    (frustumSize * aspect) / 2,
    frustumSize / 2,
    frustumSize / -2,
    0.1,
    1000
  );

  const initialCamPos = { x: 26, y: 32, z: 26 };
  camera.position.set(initialCamPos.x, initialCamPos.y, initialCamPos.z);
  camera.lookAt(0, -1, 0);

  // 4. Lighting Suite (Theme: Blue and White Shade)
  const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.85);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 1.35);
  mainLight.position.set(20, 36, 16);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 1024;
  mainLight.shadow.mapSize.height = 1024;
  mainLight.shadow.camera.near = 10;
  mainLight.shadow.camera.far = 90;
  scene.add(mainLight);

  // Vibrant Electric Cyan / Sky Blue accent rim light
  const blueRimLight = new THREE.PointLight(0x00d4ff, 3.2, 70);
  blueRimLight.position.set(-6, 16, -6);
  scene.add(blueRimLight);

  // Subtle Sky Blue fill light
  const blueFillLight = new THREE.PointLight(0x38bdf8, 1.8, 60);
  blueFillLight.position.set(16, 14, 16);
  scene.add(blueFillLight);

  // 5. Expansive Keycap Matrix (Spans Whole Page Viewport Seamlessly Edge-to-Edge Without Visible Borders)
  const rows = 60;
  const cols = 80;
  const keySpacing = 1.15;
  const keyWidth = 0.94;
  const keyHeight = 0.44;
  const keyDepth = 0.94;
  const totalKeys = rows * cols;

  const keyGeometry = new THREE.BoxGeometry(keyWidth, keyHeight, keyDepth);
  const keyMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.28,
    metalness: 0.08,
    flatShading: false
  });

  const instancedMesh = new THREE.InstancedMesh(keyGeometry, keyMaterial, totalKeys);
  instancedMesh.castShadow = true;
  instancedMesh.receiveShadow = true;
  scene.add(instancedMesh);

  // Setup Keycap Data
  const keysData = [];
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  const startX = -((cols - 1) * keySpacing) / 2;
  const startZ = -((rows - 1) * keySpacing) / 2;

  let keyIndex = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const baseX = startX + c * keySpacing;
      const baseZ = startZ + r * keySpacing;

      dummy.position.set(baseX, 0, baseZ);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(keyIndex, dummy.matrix);

      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      color.setHex(isLight ? 0xffffff : 0x131f37);
      instancedMesh.setColorAt(keyIndex, color);

      keysData.push({
        x: baseX,
        z: baseZ,
        currentY: 0,
        targetY: 0,
        velocity: 0,
        colorIntensity: 0
      });

      keyIndex++;
    }
  }

  instancedMesh.instanceMatrix.needsUpdate = true;
  if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;

  // 6. Ground Plane for Precision Raycasting Across Entire Window
  const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(-999, -999);
  const planeHit = new THREE.Vector3();
  let hasHit = false;
  let isMouseActive = false;
  let lastMouseMoveTime = performance.now();
  const keyExplosions = [];

  window.addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    isMouseActive = true;
    lastMouseMoveTime = performance.now();
  });

  window.addEventListener("mouseleave", () => {
    isMouseActive = false;
  });

  // Synthesize Crisp Mechanical Switch Sound (Web Audio API)
  let audioCtx = null;
  function playSwitchSound() {
    try {
      if (!audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) audioCtx = new AudioCtx();
      }
      if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(320 + Math.random() * 80, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.04);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch (err) {}
  }

  // Keyboard typing ripple explosion
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    const originX = hasHit && isMouseActive ? planeHit.x : (Math.random() * 12 - 6);
    const originZ = hasHit && isMouseActive ? planeHit.z : (Math.random() * 8 - 4);

    keyExplosions.push({
      x: originX,
      z: originZ,
      radius: 0.1,
      maxRadius: 22,
      speed: 18
    });

    playSwitchSound();
  });

  // Click ripple explosion
  window.addEventListener("click", () => {
    if (hasHit) {
      keyExplosions.push({
        x: planeHit.x,
        z: planeHit.z,
        radius: 0.1,
        maxRadius: 20,
        speed: 16
      });
      playSwitchSound();
    }
  });

  // Scroll parallax progress tracking
  let scrollProgress = 0;
  window.addEventListener("scroll", () => {
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    scrollProgress = window.scrollY / maxScroll;
  }, { passive: true });

  // 7. Render Loop with Asymmetric Spring Damping & Idle Wave
  let lastTime = performance.now();

  function animate(currentTime) {
    requestAnimationFrame(animate);

    const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
    lastTime = currentTime;

    const now = performance.now();
    const idleSeconds = (now - lastMouseMoveTime) / 1000;

    // Continuous camera scroll parallax across entire page
    camera.position.x = initialCamPos.x + scrollProgress * 8;
    camera.position.z = initialCamPos.z + scrollProgress * 10;
    camera.lookAt(scrollProgress * 4, -1, scrollProgress * 4);

    // Raycast global mouse position onto ground plane
    hasHit = false;
    if (isMouseActive) {
      raycaster.setFromCamera(mouse, camera);
      if (raycaster.ray.intersectPlane(groundPlane, planeHit)) {
        hasHit = true;
      }
    }

    // Expand ripple explosions
    for (let i = keyExplosions.length - 1; i >= 0; i--) {
      const exp = keyExplosions[i];
      exp.radius += delta * exp.speed;
      if (exp.radius > exp.maxRadius) {
        keyExplosions.splice(i, 1);
      }
    }

    // Theme color recognition (Blue and White Shade)
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const baseColorHex = isLight ? 0xffffff : 0x131f37;
    const activeColorHex = isLight ? 0x0284c7 : 0x00d4ff;

    const baseCol = new THREE.Color(baseColorHex);
    const glowCol = new THREE.Color(activeColorHex);
    const peakWhiteCol = new THREE.Color(0xf0f9ff);

    // Update each keycap
    for (let i = 0; i < totalKeys; i++) {
      const k = keysData[i];
      let targetY = 0;
      let targetIntensity = 0;

      // 1. Mouse Proximity Lift (Smooth Cosine Curve)
      if (hasHit) {
        const dist = Math.hypot(k.x - planeHit.x, k.z - planeHit.z);
        const radius = 4.8;
        if (dist < radius) {
          const factor = Math.cos((dist / radius) * (Math.PI / 2));
          targetY += factor * 1.5;
          targetIntensity = Math.max(targetIntensity, factor);
        }
      }

      // Note: Idle wave removed per user request so keycaps remain calm and completely still when still.

      // 2. Typing / Click Ripple Explosions
      for (let j = 0; j < keyExplosions.length; j++) {
        const exp = keyExplosions[j];
        const dist = Math.hypot(k.x - exp.x, k.z - exp.z);
        const diff = Math.abs(dist - exp.radius);
        if (diff < 2.0) {
          const rippleFactor = (1 - diff / 2.0);
          targetY += rippleFactor * 1.6;
          targetIntensity = Math.max(targetIntensity, rippleFactor);
        }
      }

      // Physics: Spring with asymmetric damping
      const springStiffness = 24;
      const springDamping = 7.2;
      const springForce = (targetY - k.currentY) * springStiffness;
      const dampingForce = k.velocity * springDamping;

      k.velocity += (springForce - dampingForce) * delta;
      k.currentY += k.velocity * delta;

      // Smooth color lerping in Blue & White shade
      k.colorIntensity += (targetIntensity - k.colorIntensity) * 0.14;

      dummy.position.set(k.x, k.currentY, k.z);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);

      if (k.colorIntensity > 0.5) {
        const whiteBlend = (k.colorIntensity - 0.5) / 0.5;
        color.copy(glowCol).lerp(peakWhiteCol, whiteBlend * 0.7);
      } else {
        color.copy(baseCol).lerp(glowCol, k.colorIntensity / 0.5);
      }
      instancedMesh.setColorAt(i, color);
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
    if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;

    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);

  // 8. Responsive Window Resize Handler
  function handleResize() {
    w = window.innerWidth;
    h = window.innerHeight;
    aspect = w / h;

    camera.left = (frustumSize * aspect) / -2;
    camera.right = (frustumSize * aspect) / 2;
    camera.top = frustumSize / 2;
    camera.bottom = frustumSize / -2;
    camera.updateProjectionMatrix();

    renderer.setSize(w, h, false);
  }

  window.addEventListener("resize", handleResize);
}

// 16. Custom Red Dot Cursor System
function initCustomCursor() {
  const dot = document.getElementById("cursorDot");
  if (!dot) return;

  // Check if touch device
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    dot.style.display = "none";
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let isVisible = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      dot.classList.add("visible");
    }

    // Dot snaps immediately to the exact mouse point with zero latency
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  window.addEventListener("mousedown", () => {
    dot.classList.add("active");
  });

  window.addEventListener("mouseup", () => {
    dot.classList.remove("active");
  });

  document.addEventListener("mouseleave", () => {
    isVisible = false;
    dot.classList.remove("visible");
  });

  document.addEventListener("mouseenter", () => {
    isVisible = true;
    dot.classList.add("visible");
  });

  // Attach hover expanding feedback on all interactive elements
  const interactiveSelector = 'a, button, input, textarea, select, .project-card, .cert-card, .stat-card, .interactive-key, [role="button"], label, .prompt-chip, .btn-pill-resume, .btn-copy-chip, .filter-btn';
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactiveSelector)) {
      dot.classList.add("hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactiveSelector)) {
      dot.classList.remove("hover");
    }
  });
}

