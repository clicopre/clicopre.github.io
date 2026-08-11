// Self-hosted webfonts (replaces the Google Fonts stylesheet).
// Bundled at build time via @fontsource, so no third-party request is made
// from the visitor's browser. Family names must match the --f-* tokens in
// global.css. Variable families register as "<Name> Variable".

// ── Default theme: Fraunces · IBM Plex Sans · IBM Plex Mono ──
import '@fontsource-variable/fraunces/full.css'; // opsz + SOFT + WONK + wght
import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';

// ── Dispatch theme: Newsreader · Literata · JetBrains Mono ──
import '@fontsource-variable/newsreader/opsz.css';
import '@fontsource-variable/literata/opsz.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';

// ── Frequency theme: Instrument Serif · Manrope · Space Mono ──
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/manrope/index.css'; // wght
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';

// ── Cartograph theme: Spectral · DM Sans · DM Mono ──
import '@fontsource/spectral/300.css';
import '@fontsource/spectral/400.css';
import '@fontsource/spectral/500.css';
import '@fontsource/spectral/600.css';
import '@fontsource-variable/dm-sans/opsz.css';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
