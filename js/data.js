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
    summary: "The founding strategic session of the 2025 cycle — mission priorities set across health, career, and craft, with the first Liberation initiative charted.",
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
    summary: "The governing directive for the current period. Reaffirms the 2025 mission set, closes out completed initiatives, and commissions the next wave of projects.",
    youtubeId: "",               // TODO: paste YouTube video ID
    docUrl: "#",                 // TODO: paste Google Doc link
  },
  {
    id: "liberation-day-2026",
    title: "Liberation Day Memorial",
    type: "Liberation Day Memorial",
    date: "2026-09-08",
    display: "08 Sep 2026",
    status: "Active",
    summary: "The latest annual memorial marking the multi-year Liberation initiative — reviewing ground gained and recommitting to the founding independence goals.",
    youtubeId: "",               // TODO: paste YouTube video ID
    docUrl: "#",                 // TODO: paste Google Doc link
  },
];

const PROJECTS = [
  {
    id: "proj-1",
    name: "Deep Field Fitness Protocol",
    description: "A structured strength + conditioning program run in quarterly phases.",
    category: "Health",
    status: "Active",
    directiveId: "summit-2025-p2",
    honored: true,
    trophyTier: "gold",
  },
  {
    id: "proj-2",
    name: "Signal Corridor Career Track",
    description: "Career development plan targeting a senior role by the next Summit.",
    category: "Career",
    status: "Active",
    directiveId: "summit-2025-p2",
  },
  {
    id: "proj-3",
    name: "Ledger Stabilization Initiative",
    description: "Household finance system overhaul — budgets, reserves, and reporting.",
    category: "Finance",
    status: "Completed",
    directiveId: "summit-2025-p1",
  },
  {
    id: "proj-4",
    name: "Northbound Independence Track",
    description: "The core multi-year Liberation project — the flagship initiative reviewed each Liberation Day.",
    category: "Liberation",
    status: "Active",
    directiveId: "liberation-day-2026",
    honored: true,
    trophyTier: "gold",
  },
  {
    id: "proj-5",
    name: "Workshop Craft Rotation",
    description: "A rotating slate of hands-on craft projects, one per quarter.",
    category: "Craft",
    status: "Active",
    directiveId: "summit-2025-p2",
  },
  {
    id: "proj-6",
    name: "Archive Zero Migration",
    description: "Consolidating years of planning documents into one searchable record.",
    category: "Craft",
    status: "Completed",
    directiveId: "summit-2025-p1",
  },
];

const ACHIEVEMENTS = [
  {
    id: "ach-1",
    category: "Best Execution",
    era: "December Summit 2025 — Part I",
    directiveId: "summit-2025-p1",
    projectId: "proj-3",
    citation: "Delivered ahead of schedule with a reporting system still in daily use.",
    decidedAt: "12 Sep 2025",
  },
  {
    id: "ach-2",
    category: "Most Ambitious",
    era: "December Summit 2025 — Part I",
    directiveId: "summit-2025-p1",
    projectId: "proj-6",
    citation: "A full archive migration attempted and finished in a single cycle.",
    decidedAt: "12 Sep 2025",
  },
  {
    id: "ach-3",
    category: "Boldest Liberation Move",
    era: "Liberation Day 2026",
    directiveId: "liberation-day-2026",
    projectId: "proj-4",
    citation: "The clearest single-year gain the Liberation track has produced to date.",
    decidedAt: "08 Sep 2026",
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
