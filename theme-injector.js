/**
 * Early Theme Injector
 * Applies user preference BEFORE initial paint to avoid FOUC/Flash of Red
 */
(function () {
  let savedTheme = localStorage.getItem('selectedTheme') || 'bg_light_blue';
  
  // Normalize theme name to match Zod Schema and variables
  savedTheme = savedTheme.replace(/-/g, '_');
  if (!savedTheme.startsWith('bg_')) {
    savedTheme = `bg_${savedTheme}`;
  }
  savedTheme = savedTheme.replace('light_white', 'white');
  savedTheme = savedTheme.replace('bg_light_white', 'bg_white');

  const savedVideo = localStorage.getItem('selectedVideoUrl') || '';
  const savedScale = localStorage.getItem('sat_logo_scale') || 'small';

  document.body.setAttribute('data-theme', savedTheme);
  document.documentElement.style.setProperty('--logo-current-size', `var(--logo-size-${savedScale})`);
  

  
  window.__initialThemeApplied = true;
  // Pre-set video source if possible
  window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    if (video) {
      const source = video.querySelector('source');
      if (source) source.src = savedVideo;
      video.load();
    }
  });
})();
