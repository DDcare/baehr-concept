// Visor 360 de un solo envase para la ficha de producto.
// Ligero a propósito: sin sombras calculadas ni reflejos, y solo dibuja cuando algo se mueve.
// three.js se descarga solo cuando el visor entra en pantalla: hasta entonces se ve la foto del producto
let THREE;
let createProducts;
let SIZE;

const box = document.querySelector('[data-visor]');
if (box) {
  const io = new IntersectionObserver(
    async (entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      try {
        THREE = await import('three');
        ({ createProducts, SIZE } = await import('./productos.js'));
      } catch (e) {
        box.classList.add('is-static');
        return;
      }
      init(box);
    },
    { rootMargin: '200px 0px' }
  );
  io.observe(box);
}

function radial(stops) {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  stops.forEach(([at, color]) => grad.addColorStop(at, color));
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  return c;
}

function init(box) {
  const canvas = box.querySelector('canvas');
  const pause = box.querySelector('[data-visor-pause]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) {
    box.classList.add('is-static');
    return;
  }
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(20, 1, 0.1, 100);

  // La misma luz de estudio que la película de la home
  {
    const env = new THREE.Scene();
    env.background = new THREE.Color(0x14080a);
    const panel = (w, h, x, y, z, power) => {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(power, power, power), side: THREE.DoubleSide, toneMapped: false })
      );
      m.position.set(x, y, z);
      m.lookAt(0, 0.5, 0);
      env.add(m);
    };
    panel(9, 9, 0, 10, 1, 4.5);
    panel(2.4, 10, -9, 3, 4, 9);
    panel(2.4, 10, 9, 3, 4, 9);
    panel(1.2, 7, 3.5, 3, 9.5, 5);
    panel(12, 3, 0, 0.5, 11, 0.9);
    panel(4, 7, -5, 4, -9, 5);
    const pm = new THREE.PMREMGenerator(renderer);
    scene.environment = pm.fromScene(env, 0.015).texture;
    pm.dispose();
  }
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8c1622, 0.35));
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(4, 6, 5);
  scene.add(key);

  let ready = false;
  const P = createProducts({
    maxAniso: renderer.capabilities.getMaxAnisotropy(),
    onLoad: () => {
      ready = true;
      box.classList.add('is-ready');
      kick();
    },
  });
  const can = P.buildCan();
  const holder = new THREE.Group();
  holder.add(can.group);
  can.group.position.y = -SIZE.can / 2;
  scene.add(holder);

  // sombra de contacto bajo el envase
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
      map: new THREE.CanvasTexture(radial([[0, 'rgba(20,0,3,0.55)'], [0.45, 'rgba(20,0,3,0.22)'], [1, 'rgba(20,0,3,0)']])),
      transparent: true,
      depthWrite: false,
    })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -SIZE.can / 2 + 0.002;
  shadow.scale.set(1.9, 1.9, 1);
  scene.add(shadow);

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // el envase ocupa unas tres cuartas partes del alto, o del ancho si la caja es estrecha
    const fitH = (SIZE.can * 1.62) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    const fitW = fitH * Math.max(1, 0.62 / camera.aspect);
    camera.position.set(0, 0.62, fitW);
    camera.lookAt(0, 0.14, 0);
    camera.updateProjectionMatrix();
    kick();
  }
  new ResizeObserver(resize).observe(canvas);

  // Giro: arrastrar, flechas del teclado, o solo, despacio
  const state = { angle: -0.35, vel: 0, auto: !reduce, drag: false, x: 0, last: 0 };
  canvas.addEventListener('pointerdown', (e) => {
    state.drag = true;
    state.x = e.clientX;
    canvas.setPointerCapture(e.pointerId);
    box.classList.add('is-used');
    kick();
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!state.drag) return;
    const dx = e.clientX - state.x;
    state.x = e.clientX;
    state.vel = dx * 0.0105;
    state.angle += state.vel;
    kick();
  });
  const release = () => (state.drag = false);
  canvas.addEventListener('pointerup', release);
  canvas.addEventListener('pointercancel', release);
  box.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    state.vel += e.key === 'ArrowLeft' ? -0.06 : 0.06;
    kick();
  });
  pause?.addEventListener('click', () => {
    state.auto = !state.auto;
    pause.setAttribute('aria-pressed', String(!state.auto));
    pause.textContent = state.auto ? pause.dataset.pause : pause.dataset.play;
    kick();
  });
  if (reduce && pause) {
    pause.setAttribute('aria-pressed', 'true');
    pause.textContent = pause.dataset.play;
  }

  let visible = true;
  new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (visible) kick();
  }).observe(box);

  let raf = 0;
  function kick() {
    if (!raf) raf = requestAnimationFrame(frame);
  }
  function frame(now) {
    raf = 0;
    const dt = state.last ? Math.min(0.05, (now - state.last) / 1000) : 1 / 60;
    state.last = now;
    if (!state.drag) {
      state.angle += state.vel;
      state.vel *= Math.pow(0.9, dt * 60);
      if (Math.abs(state.vel) < 0.0004) state.vel = 0;
      if (state.auto) state.angle += dt * 0.32;
    }
    holder.rotation.y = state.angle;
    holder.position.y = Math.sin(now / 1400) * 0.03 * (state.auto ? 1 : 0);
    renderer.render(scene, camera);
    const moving = state.drag || state.vel !== 0 || state.auto;
    if (moving && visible && ready) kick();
    else state.last = 0;
  }
  resize();
}
