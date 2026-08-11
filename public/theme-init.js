// Apply the stored mode before the page body renders to avoid a color flash.
try {
  const mode = localStorage.getItem('clicopre-mode');
  if (mode === 'light' || mode === 'dark') {
    document.documentElement.setAttribute('data-mode', mode);
  }
} catch {
  // Storage can be unavailable in hardened browsing modes; CSS handles auto mode.
}
