/* ── LOADER ───────────────────────────────────────── */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;

  // Let the GIF play, then fade out
  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 750);
  }, 2000);
});

/* ── HAMBURGER ───────────────────────────────────── */
let activeBtn = null;

function toggleMenu(btn) {
  const overlay = document.getElementById('mobileOverlay');
  const isOpen  = overlay.classList.contains('open');
  if (isOpen && activeBtn && activeBtn !== btn) activeBtn.classList.remove('open');
  if (!isOpen || activeBtn !== btn) {
    overlay.classList.add('open');
    btn.classList.add('open');
    activeBtn = btn;
    document.body.style.overflow = 'hidden';
  } else {
    closeMenu();
  }
}

function closeMenu() {
  document.getElementById('mobileOverlay').classList.remove('open');
  if (activeBtn) { activeBtn.classList.remove('open'); activeBtn = null; }
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

/* ── SCROLL REVEAL ───────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-group').forEach(el => observer.observe(el));
});