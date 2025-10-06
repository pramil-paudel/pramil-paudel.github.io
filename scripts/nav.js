document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const tabs = document.getElementById('primary-tabs');

  if (!toggle || !tabs) return;

  function closeMenu() {
    tabs.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    const isOpen = tabs.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      const firstLink = tabs.querySelector('a');
      firstLink && firstLink.focus();
    }
  }

  toggle.addEventListener('click', toggleMenu);

  document.addEventListener('click', (e) => {
    if (!tabs.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  tabs.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
});
const isOpen = tabs.classList.toggle('open');
toggle.setAttribute('aria-expanded', String(isOpen));
document.body.classList.toggle('nav-open', isOpen);
