// Cesta de demostración: se guarda en este navegador y se abre como panel lateral en todas las páginas.
const KEY = 'baehr-cesta';
const data = (() => {
  try {
    return JSON.parse(document.getElementById('productos-data')?.textContent || '[]');
  } catch (e) {
    return [];
  }
})();
const byId = Object.fromEntries(data.map((p) => [p.id, p]));

function read() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(v) ? v.filter((i) => byId[i.id] && i.qty > 0) : [];
  } catch (e) {
    return [];
  }
}
let items = read();
function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch (e) {}
  render();
}

const drawer = document.getElementById('cesta');
const list = drawer?.querySelector('.drawer__list');
const empty = drawer?.querySelector('.drawer__empty');
const foot = drawer?.querySelector('.drawer__foot');
const tpl = drawer?.querySelector('template');

function count() {
  return items.reduce((n, i) => n + i.qty, 0);
}

function render() {
  const n = count();
  document.querySelectorAll('[data-cart-count]').forEach((el) => {
    if (el.textContent !== String(n)) {
      el.textContent = String(n);
      el.classList.remove('is-pop');
      void el.offsetWidth;
      el.classList.add('is-pop');
    }
  });
  if (!list || !tpl) return;
  list.textContent = '';
  for (const it of items) {
    const p = byId[it.id];
    const li = tpl.content.firstElementChild.cloneNode(true);
    li.querySelector('img').src = `/img/productos/${p.img}.webp`;
    li.querySelector('.line__name').textContent = p.name;
    li.querySelector('.line__type').textContent = p.type;
    li.querySelector('output').textContent = String(it.qty);
    li.querySelector('[data-step="-1"]').addEventListener('click', () => set(it.id, it.qty - 1));
    li.querySelector('[data-step="1"]').addEventListener('click', () => set(it.id, it.qty + 1));
    li.querySelector('[data-remove]').addEventListener('click', () => set(it.id, 0));
    list.append(li);
  }
  if (empty) empty.hidden = items.length > 0;
  if (foot) foot.hidden = items.length === 0;
}

function set(id, qty) {
  const q = Math.max(0, Math.min(99, qty));
  const at = items.findIndex((i) => i.id === id);
  if (at === -1 && q > 0) items.push({ id, qty: q });
  else if (at > -1 && q === 0) items.splice(at, 1);
  else if (at > -1) items[at].qty = q;
  save();
}
function add(id, qty = 1) {
  const at = items.find((i) => i.id === id);
  set(id, (at ? at.qty : 0) + qty);
}

// Abrir y cerrar el panel
let lastFocus = null;
function open() {
  if (!drawer) return;
  lastFocus = document.activeElement;
  drawer.hidden = false;
  requestAnimationFrame(() => drawer.classList.add('is-open'));
  document.documentElement.classList.add('has-drawer');
  drawer.querySelector('.drawer__close')?.focus();
}
function close() {
  if (!drawer || drawer.hidden) return;
  drawer.classList.remove('is-open');
  document.documentElement.classList.remove('has-drawer');
  setTimeout(() => (drawer.hidden = true), 380);
  lastFocus?.focus?.();
}
document.querySelectorAll('[data-open-cart]').forEach((a) =>
  a.addEventListener('click', (e) => {
    e.preventDefault();
    open();
  })
);
drawer?.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', close));
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') close();
});
drawer?.querySelector('.drawer__checkout')?.addEventListener('click', () => {
  const ok = drawer.querySelector('.drawer__ok');
  if (ok) ok.hidden = false;
});

window.baehrCesta = { add, set, open, items: () => items.slice() };
render();
