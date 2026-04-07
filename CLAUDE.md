# CLICOPRE — Project Rules for Claude Code

This is the source repo for the CLICOPRE project website. It is an Astro
static site that will be deployed to GitHub Pages at
`https://clicopre.github.io` (and later to `clicopre.com`).

Always read this file before taking any action.

---

## 1. Project context

**CLICOPRE** is a research project led by Duccio Gamannossi degl’Innocenti
(University of Padua and Harvard University). It studies how extreme weather
events shape climate-related communication by politicians and news outlets on
social media, and whether these shocks influence political action, legislative
activity, and voting behaviour in the EU and the US.

Funding: MSCA Seal of Excellence framework at the University of Padua, with
the contribution of Fondazione Cassa di Risparmio di Padova e Rovigo.

The website is the project’s **permanent public-facing infrastructure** —
keep it light, sustainable, and low-maintenance. Prefer static, simple,
durable patterns over clever or heavyweight ones.

---

## 2. Always invoke the front-end design skill

**Before writing any front-end code (HTML, CSS, Astro components, animations),
invoke the front-end design skill if it is available. No exceptions.**

If the skill is not installed, proceed but flag it in the response so the
user knows to install it.

---

## 3. Local-first rule (do not auto-push)

This is the most important rule.

- We always preview changes on `localhost` first.
- **Never run `git push`, `gh repo create`, or any command that publishes to
  GitHub unless the user explicitly says so in the same message** (e.g.
  "push it", "deploy", "ship it", "publish").
- `git add` and `git commit` are also opt-in — do not commit unless asked.
- The autodeploy pipeline (GitHub Actions → GitHub Pages) means any push to
  `main` becomes public immediately. Treat pushes as production releases.

---

## 4. Brand assets

All brand material lives in `brand_assets/`:

- `brand_assets/brand_guidelines.md` — palette, typography, motion, voice,
  institutional logos to display
- `brand_assets/logo/` — wordmark + favicon source files
- `brand_assets/institutions/` — partner logos (UniPD, Harvard, MSCA SoE,
  Fondazione CARIPARO) once provided

Always read `brand_guidelines.md` before changing colours, fonts, spacing,
or any visual identity element. The CSS tokens in `src/styles/global.css`
must stay in sync with the guidelines.

---

## 5. Design language

- Reference site for structure & tone: **energy-a.eu** (academic, minimal,
  institutional, credibility-first — but CLICOPRE should feel a touch more
  modern and a touch more animated).
- Palette: deep slate ink on warm off-white, climate-teal accent, warm
  amber as a sparing secondary. See `brand_guidelines.md` for hex codes.
- Typography: **Fraunces** for display headings (variable, optical sizes,
  WONK axis on for italics), **IBM Plex Sans** for UI/body, **IBM Plex
  Mono** for eyebrows, section markers, captions and dataset labels.
  Inter / Roboto / Arial / Source Serif Pro are explicitly forbidden —
  they read as AI-default. See `brand_guidelines.md` §3.
- Climate signature: a strip of **warming stripes** (after Ed Hawkins)
  appears at the top of the header, anchoring the hero, and at the top
  of the footer. This is the project's visual signature — do not replace
  it with decorative wave shapes or generic gradients.
- Generous whitespace, clear typographic hierarchy, grid-based layout,
  data-viz friendly.
- Animations are welcome but must be **subtle, purposeful, and respect
  `prefers-reduced-motion`**. No gratuitous parallax, no autoplay video,
  no aggressive scroll-jacking.

---

## 6. Site architecture (minimum)

The homepage and small set of subpages should cover:

1. **Project overview** — what CLICOPRE is, in one paragraph.
2. **Research agenda** — three pillars (e.g. Weather shocks · Political
   communication · Policy & voting).
3. **People & institutions** — PI, affiliations, funders.
4. **Updates / blog** — short posts; can be empty at launch.
5. **Outputs** — papers, working papers, data, code links.
6. **Dashboards** — placeholder section, populated when interfaces ship.
7. **Contact** — academic email + institutional address.

Do not invent content. If you need facts, ask the user.

---

## 7. Screenshot workflow (Puppeteer)

We use Puppeteer to let the agent visually self-review the site.

- Screenshots go in `temporary_screenshots/` (gitignored).
- Naming convention: `NN_section-name_pass-N.png` (e.g.
  `01_hero_pass-1.png`). This matters — without naming, the screenshots
  are unreadable later.
- Always do **at least two passes**: first build, screenshot, compare to
  intent, refine, screenshot again.
- After each major change, clean out stale screenshots before the next
  round so the folder doesn’t accumulate cruft.

### When NOT to use the screenshot loop

**Skip the screenshot loop for animated components.** Animations (canvas,
WebGL, CSS keyframe-driven backgrounds, scroll-triggered motion) do not
capture well in static screenshots, and the loop will fall into an
"it's not good enough yet" infinite cycle, over-engineering things.

For animated work:
- Build the component
- Tell the user it's ready to view
- Wait for the user's verbal feedback
- Iterate from there

---

## 8. Component inspiration

For micro-interactions, animated backgrounds, and individual UI primitives,
draw inspiration from `21st.dev` rather than reinventing. Pull a single
component, adapt it to the CLICOPRE palette, and document where it came
from in a code comment.

For overall layout/structure inspiration, the user has selected energy-a.eu.

---

## 9. Tech stack guardrails

- **Astro 4.x**, no UI framework unless absolutely required.
- Vanilla JS for interactivity (IntersectionObserver for scroll-reveal is
  already wired in `Layout.astro`).
- No Tailwind. We use plain CSS with design tokens in `global.css`.
- No analytics, no trackers, no third-party scripts at launch.
- Fonts loaded from Google Fonts via `<link>` (already set up).
- Keep dependencies minimal — every added package is a maintenance burden.

---

## 10. Deployment

- Hosting: GitHub Pages, served from `clicopre/clicopre.github.io` repo,
  `main` branch, via the official Astro GitHub Action.
- Custom domain: a `CNAME` file in `public/` will be added later when
  `clicopre.com` (or similar) is purchased.
- The deploy pipeline is opt-in: see rule §3.

---

## 11. Communication style

- Be concise. The user prefers terse, direct responses.
- Show, don’t narrate. Diffs and screenshots over prose.
- Surface decisions that need user input; do not invent project facts.
