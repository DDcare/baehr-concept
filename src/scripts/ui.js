// Interacciones tranquilas: tipo de cliente, cabecera, menú, formulario de demostración, apariciones.
const html = document.documentElement;
const top = document.querySelector('.top');
const film = document.querySelector('.film');

// Profesional o particular
const modeButtons = document.querySelectorAll('[data-set-mode]');
function setMode(mode, announce = false) {
  html.dataset.mode = mode;
  if (announce) window.dispatchEvent(new CustomEvent('baehr:modo', { detail: mode }));
  modeButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setMode === mode)));
  try {
    localStorage.setItem('baehr-modo', mode);
  } catch (e) {}
}
modeButtons.forEach((b) => b.addEventListener('click', () => setMode(b.dataset.setMode, true)));
setMode(html.dataset.mode === 'home' ? 'home' : 'pro');

// Cabecera
function onScroll() {
  if (!top) return;
  top.classList.toggle('is-scrolled', window.scrollY > 24);
  if (film) {
    const past = film.getBoundingClientRect().bottom <= 90;
    top.classList.toggle('is-solid', past);
    if (past) top.dataset.theme = 'light';
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Menú en pantallas pequeñas
const menuBtn = document.querySelector('.menu');
const sheet = document.getElementById('menu-movil');
function closeMenu() {
  if (!sheet || !menuBtn) return;
  sheet.hidden = true;
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.textContent = 'Menú';
  top?.classList.remove('is-open');
}
menuBtn?.addEventListener('click', () => {
  const open = sheet.hidden;
  if (!open) return closeMenu();
  sheet.hidden = false;
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.textContent = 'Cerrar';
  top?.classList.add('is-open');
});
sheet?.addEventListener('click', (e) => {
  if (e.target.closest('a')) closeMenu();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// Formulario de alta: demostración, no envía nada
const form = document.querySelector('.signup');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll('input').forEach((input) => {
    const valid = input.checkValidity();
    input.setAttribute('aria-invalid', String(!valid));
    if (!valid && ok) {
      input.focus();
      ok = false;
    }
  });
  const msg = form.querySelector('.signup__ok');
  if (msg) msg.hidden = !ok;
});

// Apariciones al hacer scroll
const items = document.querySelectorAll('.rv');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    io.observe(el);
  });
} else {
  items.forEach((el) => el.classList.add('is-in'));
}
