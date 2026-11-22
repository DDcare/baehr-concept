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
  // con película: sólida al salir de ella; en las demás páginas, en cuanto se baja un poco
  const past = film ? film.getBoundingClientRect().bottom <= 90 : window.scrollY > 24;
  top.classList.toggle('is-solid', past);
  if (past && top.dataset.theme !== 'light') top.dataset.theme = 'light';
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
const items = document.querySelectorAll('.rv, .seal, .stretch:not(.is-in):not(.foot__mark)');
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

// La tarjeta profesional se rellena mientras escribes, y se inclina con el puntero
const pass = document.querySelector('.pass');
if (pass) {
  const card = pass.querySelector('.pass__card');
  document.querySelectorAll('.signup input').forEach((input) => {
    const slot = pass.querySelector(`[data-pass="${input.name}"]`);
    if (!slot) return;
    input.addEventListener('input', () => {
      const v = input.value.trim();
      try {
        const saved = JSON.parse(localStorage.getItem('baehr-pase') || '{}');
        saved[input.name] = v;
        localStorage.setItem('baehr-pase', JSON.stringify(saved));
      } catch (e) {}
      if (input.name === 'nif' && v) slot.textContent = v.slice(0, 2).toUpperCase() + '·'.repeat(Math.max(0, Math.min(7, v.length - 2)));
      else slot.textContent = v || slot.dataset.empty;
      slot.classList.toggle('is-set', !!v);
      card.classList.remove('is-pop');
      void card.offsetWidth;
      card.classList.add('is-pop');
    });
  });
  if (window.matchMedia('(hover: hover)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    pass.addEventListener('pointermove', (e) => {
      const r = pass.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--rx', `${(-y * 10).toFixed(2)}deg`);
      card.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`);
    });
    pass.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  }
}

// El logotipo del pie está pegado al final de la página: se estira en cuanto asoma
const mark = document.querySelector('.foot__mark');
if (mark && 'IntersectionObserver' in window) {
  const mo = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    mark.classList.add('is-in');
    mo.disconnect();
  });
  mo.observe(mark);
} else mark?.classList.add('is-in');
