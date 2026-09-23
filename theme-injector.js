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

  const themeDefaults = {
    bg_light_blue: 'https://cdn.joe-menu.com/productos/recursos/fondos/azul_2.mp4',
    bg_dark_blue: 'https://cdn.joe-menu.com/productos/recursos/fondos/fondo_azul_obscuro.mp4',
    bg_dark_red: 'https://cdn.joe-menu.com/productos/recursos/fondos/rojo_1.mp4',
    bg_dark_green: 'https://cdn.joe-menu.com/productos/recursos/fondos/negro_verde.mp4',
    bg_white: 'https://cdn.joe-menu.com/productos/recursos/fondos/fondo_blanco.mp4'
  };

  const isNative = typeof window !== 'undefined' && (!!window.Capacitor || window.location.protocol === 'capacitor:' || window.location.hostname === 'localhost');
  const localCachedBg = isNative ? (localStorage.getItem('local_bg_video_' + savedTheme) || localStorage.getItem('local_bg_video_uri')) : null;
  const videoUrl = localCachedBg || localStorage.getItem('selectedVideoUrl') || themeDefaults[savedTheme] || themeDefaults.bg_light_blue;
  const savedScale = localStorage.getItem('sat_logo_scale') || 'small';

  document.body.setAttribute('data-theme', savedTheme);
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.documentElement.style.setProperty('--logo-current-size', `var(--logo-size-${savedScale})`);

  window.__initialThemeApplied = true;
  window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    if (video) {
      const source = video.querySelector('source');
      if (source && videoUrl) {
        video.dataset.originalSrc = videoUrl;
        source.src = videoUrl;
        video.load();
        video.play().catch(() => {});
      }
    }
  });
})();

