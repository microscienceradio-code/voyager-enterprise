# Voyager Enterprise

A static "living document" site tracking December Summits, Liberation Day memorials,
and the projects they spawn — light Starfleet/LCARS aesthetic, no build step required.

## Structure
- `index.html` — Bridge (home)
- `archive.html` — filterable mission-log timeline
- `achievements.html` — Hall of Honor trophy gallery
- `css/style.css` — design system (colors, panels, motion)
- `js/data.js` — **edit this file** to add Directives, Projects, and Achievements
- `js/main.js` — shared behavior (starfield, reveals, counters, embeds)

## Editing content
Everything lives in `js/data.js`. Add a new object to `DIRECTIVES`, `PROJECTS`, or
`ACHIEVEMENTS` and it will show up automatically — no other file needs to change.
Fill in each directive's `youtubeId` (the part after `v=` in a YouTube URL) and
`docUrl` (a Google Doc share link) as they become available.

## Deploying to GitHub Pages
See the in-chat guide, or:
1. Push this folder to a GitHub repo (root, or a `/docs` folder on `main`).
2. Repo → Settings → Pages → Source: deploy from the branch/folder above.
3. Wait ~1 minute; your URL appears at the top of that Pages settings screen.
