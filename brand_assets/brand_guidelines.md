# CLICOPRE — Brand guidelines

These are the visual identity rules for the CLICOPRE project website.
The CSS tokens in `src/styles/global.css` are the source of truth for
implementation; this document is the human-readable spec they are derived
from. Keep them in sync.

---

## 1. Voice and tone

Academic, calm, credible. Plain English. Confident but not promotional.
The site is a permanent public record of a research project — not a
marketing landing page. Avoid hype language ("revolutionary",
"groundbreaking", "cutting-edge"). Prefer precise verbs ("studies",
"measures", "estimates", "documents").

---

## 2. Colour palette — "climate teal"

A muted, institutional base with a single climate-coded accent.

| Token              | Hex       | Role                                  |
|--------------------|-----------|----------------------------------------|
| `--c-bg`           | `#f6f4ee` | Warm off-white page background         |
| `--c-bg-alt`       | `#eceae2` | Subtle alternating section background  |
| `--c-ink`          | `#0b1d2a` | Primary ink — near-black slate         |
| `--c-ink-soft`     | `#3b4b58` | Secondary text                          |
| `--c-ink-muted`    | `#6b7985` | Tertiary text, captions                 |
| `--c-line`         | `#d8d4c7` | Hairline rules, dividers                |
| `--c-teal`         | `#0fb8a3` | **Primary accent** — climate teal       |
| `--c-teal-deep`    | `#0a8a7a` | Hover / dark accent variant             |
| `--c-teal-soft`    | `#c8ebe5` | Tinted backgrounds, badges              |
| `--c-amber`        | `#e6a94a` | Secondary accent — use sparingly        |

**Rules:**
- The teal is the only colour that "speaks". Use it for links, key data
  highlights, the active nav state, and one or two hero accents.
- Amber appears at most once per viewport — typically in a single chart
  or call-to-action. Never adjacent to the teal.
- Body text is `--c-ink-soft` on `--c-bg`, not pure black on white. The
  warmth matters.
- Dark sections (if any) use `--c-ink` as background and `--c-bg` as text.

---

## 3. Typography

| Use             | Family          | Weight   |
|-----------------|-----------------|----------|
| Display / H1–H4 | Fraunces        | 380–500  |
| UI / body       | IBM Plex Sans   | 300–500  |
| Eyebrow / meta  | IBM Plex Mono   | 400–500  |

**Why these three.** The site is conceived as an editorial scholarly
artefact, not a SaaS landing page. **Fraunces** is a contemporary variable
serif with optical sizes and a slight quirk (the WONK axis), giving
display headlines real character — closer to a literary magazine than a
generic news site. **IBM Plex Sans** is the body voice: institutional,
slightly mechanical, never trendy. **IBM Plex Mono** carries metadata,
section markers, eyebrows and dataset labels — borrowing the academic
paper / data-journalism convention of using monospace for structural cues.

**Variable axes used on Fraunces.**
- Display headings (`h1`): `opsz 144, SOFT 50, WONK 1`
- Section heads (`h2`): `opsz 96, SOFT 40, WONK 1`
- Sub-heads (`h3`): `opsz 36, SOFT 30, WONK 0`
- Italics: pushed to `SOFT 100, WONK 1` for a softer, more written feel.

**Type scale.** Fluid via `clamp()` — see `--step--2` through `--step-7`
in `global.css`.

**Line height.** 1.62 for body, 1.02–1.15 for display headings (very tight).

**Tracking.** −0.035em on the hero display, −0.025em on H2,
−0.015em on H3, +0.06em on mono eyebrows.

**Numerals.** Old-style proportional in body, **tabular lining** for any
numeric data via the `.tabular` utility.

**Generic fonts are forbidden.** Inter, Roboto, Arial, "system-ui only",
and Source Serif Pro are explicitly off-limits — they read as
AI-default and undermine the project's editorial identity.

---

## 4. Layout

- Max content width: **1180px**.
- Gutter: fluid `clamp(1.25rem, 4vw, 2.5rem)`.
- Section vertical rhythm: `clamp(4rem, 9vw, 7.5rem)`.
- Border radius: 14px on cards, 8px on small elements, 999px on pills.
- Generous whitespace is the most important visual rule. When in doubt,
  add more.

---

## 5. Motion principles

Animations exist to guide attention, not to entertain.

- **Scroll-reveal**: gentle 28px upward translate + opacity fade, 0.9s
  duration with the project easing curve. Already wired via the
  `.reveal` class in `Layout.astro` + `global.css`.
- **Hover**: 1px transform lift on buttons; colour transition 0.25s.
- **Hero**: at most one ambient animation (e.g. a slow-drifting SVG
  climate motif). Never autoplay video.
- **Easing**: `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease`) for everything
  reveal-related.
- **Reduced motion**: every animation must be disabled under
  `prefers-reduced-motion: reduce`.

---

## 6. Logo and climate signature

**Wordmark.** Until a final logo is commissioned, the site uses a
typographic wordmark: **Clicopre** set in Fraunces (`opsz 144, SOFT 60,
WONK 1`, weight ≈ 420), tracking −0.025em, in `--c-ink`. Below it sits a
mono-set tagline, "A research project", in `--c-ink-muted`. The wordmark
is set in title case rather than full caps — this matches the editorial
register and avoids the institutional-acronym look.

**Climate signature: warming stripes.** The project's visual signature is
a horizontal strip of warming stripes inspired by Ed Hawkins'
`#ShowYourStripes` chart of annual mean temperature anomaly (1900–present).
This is the most recognisable climate visualisation in the world; using
it as a design element communicates the project's subject instantly to a
climate-literate audience without resorting to decorative imagery.

The strip appears in three places, all controlled by the
`.warming-stripes` utility in `global.css`:
1. As a 4px line at the very top of the header (across the page).
2. As a 14px tall block anchoring the bottom of the hero, with a small
   monospace caption ("Annual mean temperature anomaly · 1900 ··· 2024 ·
   after E. Hawkins").
3. As a 5px line at the very top of the dark footer.

The favicon (`public/favicon.svg`, source in `brand_assets/logo/`) is
derived from the warming stripes palette — a small slate tile with a
single bright stripe.

---

## 7. Institutional logos

The footer must display, in this order:

1. Università degli Studi di Padova
2. Harvard University
3. MSCA Seal of Excellence
4. Fondazione Cassa di Risparmio di Padova e Rovigo

Source files go in `brand_assets/institutions/` once provided. Until
then, the footer uses placeholder text labels.

---

## 8. Imagery

- Prefer charts, maps, and data visualisations over stock photography.
- If a photo is needed (e.g. team page), use a single restrained portrait
  on a neutral background — never lifestyle or stock imagery.
- All imagery must have meaningful alt text.
