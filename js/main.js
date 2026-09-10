/* =========================================================
   VOYAGER ENTERPRISE — SHARED BEHAVIOR
   ========================================================= */

let prefersReducedMotion = false;
try {
  prefersReducedMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
} catch (e) {
  prefersReducedMotion = false;
}

/* ---------- Ambient starfield ---------- */
function initStarfield() {
  const canvas = document.getElementById("starfield");
  if (!canvas || prefersReducedMotion) return;
  const ctx = canvas.getContext("2d");
  let w, h, points;

  function size() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const density = window.innerWidth < 640 ? 0.00006 : 0.00012;
    const count = Math.floor(w * h * density);
    points = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.1 + 0.3,
      vy: Math.random() * 0.06 + 0.02,
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(11, 61, 145, 0.35)";
    for (const p of points) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.y += p.vy;
      if (p.y > h) { p.y = 0; p.x = Math.random() * w; }
    }
    requestAnimationFrame(tick);
  }

  size();
  window.addEventListener("resize", size);
  tick();
}

/* ---------- Scroll reveal (scan-line wipe) ---------- */
function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;
  if (prefersReducedMotion) { targets.forEach((t) => t.classList.add("in")); return; }

  try {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
    targets.forEach((t) => io.observe(t));
  } catch (e) {
    targets.forEach((t) => t.classList.add("in"));
    return;
  }

  // Safety net: reveal anything already near the viewport almost immediately,
  // and guarantee everything is visible shortly after, regardless of whether
  // the scroll-watcher fires correctly in this browser/environment.
  setTimeout(() => {
    targets.forEach((t) => {
      const rect = t.getBoundingClientRect();
      if (rect.top < window.innerHeight + 400) t.classList.add("in");
    });
  }, 350);
  setTimeout(() => { targets.forEach((t) => t.classList.add("in")); }, 3000);
}

/* ---------- Count-up stats ---------- */
function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;
  const animate = (el) => {
    const target = parseInt(el.dataset.count, 10);
    if (prefersReducedMotion) { el.textContent = target; return; }
    const duration = 1100;
    const start = performance.now();
    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  };
  try {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { animate(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach((n) => io.observe(n));
  } catch (e) {
    // No IntersectionObserver support (or it misbehaved) — just show the final numbers.
    nums.forEach((n) => { n.textContent = n.dataset.count; });
  }
}

/* ---------- Nav toggle (mobile) ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("open"));
}

/* ---------- Warp streak on hero load ---------- */
function initWarpStreaks() {
  const host = document.querySelector(".warp-streaks");
  if (!host || prefersReducedMotion) return;
  const count = 14;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    const angle = (360 / count) * i + Math.random() * 10;
    s.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
    s.style.animationDelay = `${Math.random() * 0.25}s`;
    host.appendChild(s);
  }
}

/* ---------- Click-to-play YouTube embeds ---------- */
function mountVideoEmbeds() {
  document.querySelectorAll(".video-embed[data-yt]").forEach((el) => {
    const id = el.dataset.yt;
    if (!id) { el.classList.add("is-empty"); return; }
    el.addEventListener("click", function handler() {
      el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" title="Directive recording" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
      el.removeEventListener("click", handler);
    }, { once: true });
  });
}

/* ---------- Card / panel builders (used by index & archive) ---------- */
function badgeHtml(status, memorial = false) {
  if (memorial) return `<span class="badge badge--memorial">Memorial</span>`;
  if (status === "Active") return `<span class="badge badge--active"><span class="dot"></span>Active</span>`;
  return `<span class="badge badge--archived">${status}</span>`;
}

function docChipHtml(url) {
  if (!url || url === "#") return "";
  return `<a class="doc-chip" href="${url}" target="_blank" rel="noopener">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" stroke="currentColor" stroke-width="1.6"/><path d="M14 3v6h6" stroke="currentColor" stroke-width="1.6"/></svg>
    Linked document
  </a>`;
}

function videoHtml(youtubeId, thumbAlt) {
  if (!youtubeId) {
    return `<div class="video-embed is-empty" aria-label="Recording pending">
      <div class="play"><span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7L8 5Z" fill="#0B3D91"/></svg>
      </span></div>
    </div>`;
  }
  return `<div class="video-embed" data-yt="${youtubeId}">
    <img loading="lazy" src="https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg" alt="${thumbAlt}" />
    <div class="play"><span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7L8 5Z" fill="#0B3D91"/></svg>
    </span></div>
  </div>`;
}

function projectCardHtml(p) {
  return `<article class="card trace reveal">
    <span class="tag">${p.category}</span>
    <h3>${p.name}</h3>
    <p>${p.description}</p>
    ${badgeHtml(p.status)}
  </article>`;
}

/* Interactive "lab dashboard" tile: short description up front,
   click/tap/Enter reveals the mission-brief button. */
function labTileHtml(p) {
  const hasDoc = p.docUrl && p.docUrl !== "#";
  return `<article class="lab-tile reveal" tabindex="0" role="button" aria-expanded="false" data-project="${p.id}">
    <div class="tile-head">
      <span class="tag">${p.category}</span>
      ${badgeHtml(p.status)}
    </div>
    <h3>${p.name}</h3>
    <p class="tile-desc">${p.description}</p>
    <div class="tile-hint">
      Mission brief
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div class="tile-reveal">
      <div class="scan-line"></div>
      ${hasDoc
        ? `<a class="btn btn--primary" href="${p.docUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Open mission brief →</a>`
        : `<span style="font-size:0.85rem;color:var(--ink-faint);">Document link pending.</span>`}
    </div>
  </article>`;
}

function mountLabTiles(root = document) {
  root.querySelectorAll(".lab-tile").forEach((tile) => {
    const toggle = () => {
      const open = tile.classList.toggle("is-open");
      tile.setAttribute("aria-expanded", open ? "true" : "false");
    };
    tile.addEventListener("click", toggle);
    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  try { initStarfield(); } catch (e) { console.error("starfield failed", e); }
  try { initReveal(); } catch (e) { console.error("reveal failed", e); }
  try { initCounters(); } catch (e) { console.error("counters failed", e); }
  try { initNav(); } catch (e) { console.error("nav failed", e); }
  try { initWarpStreaks(); } catch (e) { console.error("warp streaks failed", e); }
  try { mountVideoEmbeds(); } catch (e) { console.error("video embeds failed", e); }
  if (typeof pageInit === "function") {
    try { pageInit(); } catch (e) { console.error("pageInit failed", e); }
  }
});
