(function() {
  var root = document.documentElement;
  var toggle = document.querySelector('[data-theme-toggle]');

  if (!toggle) return;

  function syncLabel() {
    var mono = root.getAttribute('data-theme') === 'mono';
    toggle.querySelector('.theme-toggle__label').textContent = mono ? 'Color' : 'Mono';
    toggle.setAttribute('aria-pressed', mono ? 'true' : 'false');
  }

  toggle.addEventListener('click', function() {
    var mono = root.getAttribute('data-theme') === 'mono';

    try {
      if (mono) {
        root.removeAttribute('data-theme');
        localStorage.setItem('site-theme', 'color');
      } else {
        root.setAttribute('data-theme', 'mono');
        localStorage.setItem('site-theme', 'mono');
      }
    } catch (error) {
      if (mono) {
        root.removeAttribute('data-theme');
      } else {
        root.setAttribute('data-theme', 'mono');
      }
    }

    syncLabel();
  });

  syncLabel();
})();
