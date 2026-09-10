/* =========================================================
   VOYAGER ENTERPRISE — CONTENT DATA
   Edit this file to add new Directives, Projects, and Achievements.
   Dates use ISO format (YYYY-MM-DD) for reliable sorting;
   the "display" field controls what visitors see on the page.
   ========================================================= */

const DIRECTIVES = [
  {
    id: "summit-2025-p1",
    title: "December Summit 2025 — Part I",
    type: "December Summit",
    date: "2025-09-12",          // TODO: confirm exact date
    display: "12 Sep 2025",
    status: "Archived",
    summary: "The founding strategic session of the 2025 cycle — the Brain Initiative was chartered as Project Neuronexus, setting the tone for everything that followed.",
    youtubeId: "",               // TODO: paste YouTube video ID
    docUrl: "#",                 // TODO: paste Google Doc link
  },
  {
    id: "summit-2025-p2",
    title: "December Summit 2025 — Part II",
    type: "December Summit",
    date: "2026-09-12",
    display: "12 Sep 2026",
    status: "Active",
    summary: "The governing directive for the current period. Introduces the four Core Superior Projects — Falcon, Architect of Tomorrow, Touchdown America, and Operation Apex — each a long-horizon initiative that other projects ultimately converge into.",
    youtubeId: "JGFdlSlaeAg",
    docUrl: "#",                 // TODO: paste Google Doc link
  },
  {
    id: "liberation-day-2026",
    title: "Liberation Day Memorial",
    type: "Liberation Day Memorial",
    date: "2026-09-08",
    display: "08 Sep 2026",
    status: "Active",
    summary: "Goal: set up and land on fertile ground that becomes ground zero for the next stages of liberation — financial stability, and securing the sovereignty of selves through goal- and mission-oriented work only.",
    youtubeId: "JGFdlSlaeAg",
    docUrl: "#",                 // TODO: paste Google Doc link
  },
];

const PROJECTS = [
  {
    id: "proj-warp-drive",
    name: "Project Warp Drive",
    description: "The foundational, first-principles basis for every future endeavour — priority number one right now. A life-staging, life-saving project, including portfolio work like GitHub projects, proposals, and legitimate academic output.",
    category: "Foundation",
    status: "Active",
    directiveId: "summit-2025-p2",
    docUrl: "https://docs.google.com/document/d/1X352jcoMYUxlnZSNl86VWUbYymoSvXKtTByj3U0P7Uo/edit?usp=sharing",
  },
  {
    id: "proj-axonforge",
    name: "Project AxonForge",
    description: "The global-level computational neuroscience and neuroscience flagship project — the ultimate flagship that takes us to the global stage, built on the foundation laid by Project Warp Drive. Significant progress is targeted by December Summit 2026.",
    category: "Neuroscience",
    status: "Active",
    directiveId: "summit-2025-p2",
    docUrl: "https://docs.google.com/document/d/131F3xY5urx2jr93H9B7Hj5BK9nImqX9cDG1Plb4Rt_U/edit?usp=sharing",
  },
  {
    id: "proj-emergence",
    name: "Project Emergence",
    description: "Real lab experience — modeling and experimental research methods in neuroscience — before pursuing a global research career. Local labs first, then global research internships (OIST/KAIST). The exact attack plan and execution live here.",
    category: "Neuroscience",
    status: "Active",
    directiveId: "summit-2025-p2",
    docUrl: "https://docs.google.com/document/d/1ABGcLnNtHY2KEIO9u-JWgtye0IggurbFbZ2TjVnON_4/edit?usp=sharing",
  },
  {
    id: "proj-neuronexus",
    name: "Project Neuronexus",
    description: "Started at December Summit 2025 Part I as the Brain Initiative, now carried into a new era. Weekly Neuronexus meetings share whatever's been independently studied in neuroscience — any branch, application, product, or paper — to improve the nexus events across our timeline.",
    category: "Neuroscience",
    status: "Active",
    directiveId: "summit-2025-p1",
    docUrl: "https://docs.google.com/document/d/1KBL9EAsNducY8RTScTGRc2XeYfq-bNVwH1BYAUgOUUI/edit?usp=sharing",
  },
  {
    id: "proj-presence",
    name: "Project Presence",
    description: "Think clearly. Speak powerfully. Be present. A weekly deliberate-practice system for developing confident, articulate, persuasive communicators through real speaking, real feedback, and repeated exposure to pressure.",
    category: "Communication",
    status: "Active",
    directiveId: "summit-2025-p2",
    docUrl: "https://docs.google.com/document/d/1GDsXSLTOOO10lacsxgAPsNi_urjR7RST0u_b04nU-Bo/edit?usp=sharing",
  },
  {
    id: "proj-falcon",
    name: "Project Falcon",
    description: "Long-term mission to build, or contribute to, scalable and impactful solutions that move human civilization forward. Many of our other projects ultimately converge into this grand project.",
    category: "Core Superior",
    status: "Active",
    directiveId: "summit-2025-p2",
    honored: true,
    trophyTier: "gold",
    docUrl: "https://docs.google.com/document/d/1bAYhPCn5aff2fAVQWrWIbaG89yHPpJAhKnImVCi-xd0/edit?usp=sharing",
  },
  {
    id: "proj-architect",
    name: "Architect of Tomorrow",
    description: "Build today as the architect of tomorrow. A lifelong, unlimited knowledge-building project — nearly every project above ultimately initiates under this grand umbrella.",
    category: "Core Superior",
    status: "Active",
    directiveId: "summit-2025-p2",
    docUrl: "https://docs.google.com/document/d/19Dtjo2hMxjJTRITDptqhoYQqDAYf-Jp9NW3qRptV0tU/edit?usp=sharing",
  },
  {
    id: "proj-touchdown-america",
    name: "Project Touchdown America",
    description: "The oldest project on record, started five years ago, to land on the USA. The mission is still active.",
    category: "Core Superior",
    status: "Active",
    directiveId: "summit-2025-p2",
    docUrl: "https://docs.google.com/document/d/1i7LlwebKltha6LLOxC08jBj6bLFCcQm6HphOn-j5v5w/edit?usp=sharing",
  },
  {
    id: "proj-operation-apex",
    name: "Operation Apex",
    description: "Achieve the Übermensch — the process of getting the optimal life as a Homo sapien. Covers fitness, fashion, and body shape; body language, soft power, and communication; spirituality; and health and a healthy lifestyle.",
    category: "Core Superior",
    status: "Active",
    directiveId: "summit-2025-p2",
    docUrl: "https://docs.google.com/document/d/1YuoC1fvEmBbkwCRSfBcl4h1YQvXdonPmCVbD7ou3AdQ/edit?usp=sharing",
  },
];

const ACHIEVEMENTS = [
  {
    id: "ach-1",
    category: "Best Execution",
    era: "December Summit 2025 — Part I",
    directiveId: "summit-2025-p1",
    projectId: "proj-neuronexus",
    citation: "The Brain Initiative launched as a weekly practice and never missed a beat carrying into the new era.",
    decidedAt: "12 Sep 2025",
  },
  {
    id: "ach-2",
    category: "Most Ambitious",
    era: "December Summit 2025 — Part II",
    directiveId: "summit-2025-p2",
    projectId: "proj-axonforge",
    citation: "A global-level flagship aimed squarely at the frontier of computational neuroscience.",
    decidedAt: "12 Sep 2026",
  },
  {
    id: "ach-3",
    category: "Longest-Running Commitment",
    era: "December Summit 2025 — Part II",
    directiveId: "summit-2025-p2",
    projectId: "proj-touchdown-america",
    citation: "Five years active and still the mission everything else has to answer to.",
    decidedAt: "12 Sep 2026",
  },
];

// ---- helpers shared across pages ----
const getDirective = (id) => DIRECTIVES.find((d) => d.id === id);
const getProjectsFor = (directiveId) => PROJECTS.filter((p) => p.directiveId === directiveId);
const getActiveProjects = () => PROJECTS.filter((p) => p.status === "Active");
const getCurrentSummit = () =>
  DIRECTIVES.filter((d) => d.type === "December Summit").sort((a, b) => new Date(b.date) - new Date(a.date))[0];
const getLatestLiberation = () =>
  DIRECTIVES.filter((d) => d.type === "Liberation Day Memorial").sort((a, b) => new Date(b.date) - new Date(a.date))[0];
