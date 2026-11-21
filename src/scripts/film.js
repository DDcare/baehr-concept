// Película de producto: un estudio rojo en 3D con suelo brillante, luz de estudio y cámara en movimiento.
// El tubo y el bote de crema en espuma están sobre el suelo; el scroll mueve la cámara y los productos.
import * as THREE from 'three';

const html = document.documentElement;
const film = document.querySelector('.film');
const sticky = film?.querySelector('.film__sticky');
const canvas = document.getElementById('stage');
const header = document.querySelector('.top');
const hero = sticky?.querySelector('.hero');
const beatEls = {
  a: sticky?.querySelector('.beat--a'),
  b: sticky?.querySelector('.beat--b'),
  c: sticky?.querySelector('.beat--c'),
};

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const seg = (p, a, b) => clamp01((p - a) / (b - a));
const ease = (t) => t * t * (3 - 2 * t);
const easeIn = (t) => t * t * t;
const lerp = (a, b, t) => a + (b - a) * t;
const bounceOut = (t) => {
  const n = 7.5625;
  const d = 2.75;
  if (t < 1 / d) return n * t * t;
  if (t < 2 / d) return n * (t -= 1.5 / d) * t + 0.75;
  if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + 0.9375;
  return n * (t -= 2.625 / d) * t + 0.984375;
};

const RED = '#A60D1C';
const INK = '#18181A';
const STUDIO = 0x6f0813;
const TUBE_H = 3.0;
const CAN_H = 3.05;
const FOV = 26;
const REF_H = 3.0;

// Encuadres. t: punto al que mira la cámara, az y el: ángulos, hf: alto del producto respecto a la pantalla,
// sx y sy: desplazamiento del encuadre en fracción de pantalla (como un objetivo descentrable).
function shots(tall) {
  const S = tall ? 0.95 : 1.3;
  const fx = 1.17;
  const keys = tall
    ? [
        [0.0, { t: [-S, 1.5, 0], az: 0.26, el: 0.1, hf: 0.36, sx: 0, sy: 0.245 }],
        [0.13, { t: [-S, 1.5, 0], az: -0.16, el: 0.14, hf: 0.43, sx: 0, sy: -0.02 }],
        [0.385, { t: [-S, 1.5, 0], az: 0.2, el: 0.12, hf: 0.44, sx: 0, sy: -0.02 }],
        [0.5, { t: [0, 1.5, 0], az: 0.05, el: 0.11, hf: 0.36, sx: 0, sy: 0.085 }],
        [0.62, { t: [0, 1.5, 0], az: -0.05, el: 0.11, hf: 0.37, sx: 0, sy: 0.085 }],
        [0.76, { t: [S + 0.5, 1.3, 0], az: -0.1, el: 0.1, hf: 0.32, sx: 0.07, sy: 0.12 }],
        [0.89, { t: [S + 0.54, 1.25, 0], az: -0.05, el: 0.1, hf: 0.33, sx: 0.07, sy: 0.12 }],
        [1.0, { t: [S + fx, 0.7, 0], az: 0, el: 0.2, hf: 2.4, sx: 0, sy: 0 }],
      ]
    : [
        [0.0, { t: [-S, 1.52, 0], az: 0.3, el: 0.1, hf: 0.55, sx: 0.312, sy: 0.05 }],
        [0.13, { t: [-S, 1.5, 0], az: -0.2, el: 0.15, hf: 0.68, sx: 0, sy: 0.005 }],
        [0.385, { t: [-S, 1.5, 0], az: 0.24, el: 0.12, hf: 0.7, sx: 0, sy: 0.005 }],
        [0.5, { t: [0, 1.5, 0], az: 0.06, el: 0.11, hf: 0.5, sx: 0, sy: 0.105 }],
        [0.62, { t: [0, 1.5, 0], az: -0.07, el: 0.11, hf: 0.51, sx: 0, sy: 0.105 }],
        [0.76, { t: [S + 0.55, 1.3, 0], az: -0.14, el: 0.1, hf: 0.5, sx: -0.125, sy: 0.07 }],
        [0.89, { t: [S + 0.6, 1.25, 0], az: -0.08, el: 0.1, hf: 0.52, sx: -0.125, sy: 0.07 }],
        [1.0, { t: [S + fx, 0.75, 0], az: 0, el: 0.2, hf: 3.0, sx: 0, sy: 0 }],
      ];
  return { S, foamX: S + fx, foamSize: tall ? 0.5 : 0.62, keys };
}

function blendShot(A, B, t) {
  return {
    t: [lerp(A.t[0], B.t[0], t), lerp(A.t[1], B.t[1], t), lerp(A.t[2], B.t[2], t)],
    az: lerp(A.az, B.az, t),
    el: lerp(A.el, B.el, t),
    hf: 1 / lerp(1 / A.hf, 1 / B.hf, t),
    sx: lerp(A.sx, B.sx, t),
    sy: lerp(A.sy, B.sy, t),
  };
}

function shotAt(p, keys) {
  if (p <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (p <= keys[i][0]) return blendShot(keys[i - 1][1], keys[i][1], ease(seg(p, keys[i - 1][0], keys[i][0])));
  }
  return keys[keys.length - 1][1];
}

function staticFallback() {
  html.classList.add('film-static');
}

function init() {
  if (!film || !sticky || !canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return staticFallback();

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch (e) {
    return staticFallback();
  }

  renderer.setClearColor(STUDIO, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 0.96;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(STUDIO, 14, 40);

  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 200);
  const maxAniso = renderer.capabilities.getMaxAnisotropy();

  // ---------- Luz de estudio ----------
  // Entorno propio para los reflejos: cajas de luz arriba y a los lados sobre una sala oscura.
  function studioEnvironment() {
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
    panel(9, 9, 0, 10, 1, 4.5); // techo
    panel(2.4, 10, -9, 3, 4, 9); // tira izquierda
    panel(2.4, 10, 9, 3, 4, 9); // tira derecha
    panel(1.2, 7, 3.5, 3, 9.5, 5); // tira frontal estrecha
    panel(12, 3, 0, 0.5, 11, 0.9); // relleno bajo
    panel(4, 7, -5, 4, -9, 5); // contraluz
    panel(4, 7, 6, 4, -8, 3.5);
    const pm = new THREE.PMREMGenerator(renderer);
    const tex = pm.fromScene(env, 0.015).texture;
    pm.dispose();
    return tex;
  }
  scene.environment = studioEnvironment();
  scene.environmentIntensity = 1.0;

  scene.add(new THREE.HemisphereLight(0xffffff, 0x8c1622, 0.34));
  const key = new THREE.DirectionalLight(0xffffff, 1.9);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.camera.left = -8;
  key.shadow.camera.right = 8;
  key.shadow.camera.top = 8;
  key.shadow.camera.bottom = -8;
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 40;
  key.shadow.radius = 7;
  key.shadow.blurSamples = 20;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.03;
  scene.add(key, key.target);
  const rim = new THREE.DirectionalLight(0xfff1ea, 2.6);
  scene.add(rim, rim.target);

  // ---------- Texturas dibujadas en canvas ----------
  function canvasTex(c, color = true) {
    const t = new THREE.CanvasTexture(c);
    if (color) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = maxAniso;
    t.wrapS = THREE.RepeatWrapping;
    return t;
  }

  function wideText(g, text, x, y, { size, weight = 800, color = INK, align = 'left', stretch = 1.22, spacing = 0 }) {
    g.save();
    g.font = `${weight} ${size}px "Archivo Variable", "Archivo", Arial, sans-serif`;
    g.fillStyle = color;
    g.textAlign = align;
    g.textBaseline = 'alphabetic';
    if ('letterSpacing' in g) g.letterSpacing = `${spacing}px`;
    g.translate(x, y);
    g.scale(stretch, 1);
    g.fillText(text, 0, 0);
    g.restore();
  }

  function softText(g, text, x, y, size, color) {
    g.save();
    g.font = `italic 400 ${size}px "Newsreader Variable", "Newsreader", Georgia, serif`;
    g.fillStyle = color;
    g.textAlign = 'left';
    g.fillText(text, x, y);
    g.restore();
  }

  function drop(g, x, y, s, color) {
    g.save();
    g.fillStyle = color;
    g.beginPath();
    g.moveTo(x, y - s);
    g.bezierCurveTo(x + s * 0.9, y + s * 0.1, x + s * 0.62, y + s, x, y + s);
    g.bezierCurveTo(x - s * 0.62, y + s, x - s * 0.9, y + s * 0.1, x, y - s);
    g.fill();
    g.restore();
  }

  function brandBlock(g, cx, y, w, h, text, size) {
    g.fillStyle = RED;
    g.fillRect(cx - w / 2, y, w, h);
    wideText(g, text, cx, y + h * 0.71, { size, color: '#fff', align: 'center', stretch: 1.24, spacing: 5 });
  }

  function tubeLabel() {
    const c = document.createElement('canvas');
    c.width = 2048;
    c.height = 1024;
    const g = c.getContext('2d');
    g.fillStyle = '#FBFAF7';
    g.fillRect(0, 0, c.width, c.height);
    const cx = 1024;
    const left = cx - 250;
    brandBlock(g, cx, 318, 500, 88, 'PEDIBAEHR', 54);
    wideText(g, 'Schutzcreme', left, 552, { size: 76, weight: 800, stretch: 1.02 });
    wideText(g, 'mit 10 % Urea', left, 636, { size: 58, weight: 500, stretch: 1.02 });
    g.fillStyle = INK;
    g.fillRect(left, 676, 500, 3);
    softText(g, 'Crema para pies con urea al 10 %', left, 732, 36, '#4b4a48');
    drop(g, cx + 222, 800, 26, '#2D7FB8');
    // Franja metálica junto al tapón
    const band = g.createLinearGradient(0, 892, 0, 992);
    band.addColorStop(0, '#d5d7db');
    band.addColorStop(0.45, '#ffffff');
    band.addColorStop(1, '#c6c9ce');
    g.fillStyle = band;
    g.fillRect(0, 892, c.width, 100);
    // Reverso
    brandBlock(g, 0, 318, 300, 60, 'BAEHR', 38);
    brandBlock(g, 2048, 318, 300, 60, 'BAEHR', 38);
    return c;
  }

  function tubeSurface() {
    // Verde = rugosidad, azul = metal. La franja inferior es metálica y pulida.
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 256;
    const g = c.getContext('2d');
    g.fillStyle = 'rgb(0,86,0)';
    g.fillRect(0, 0, 512, 256);
    g.fillStyle = 'rgb(0,46,235)';
    g.fillRect(0, 223, 512, 25);
    return c;
  }

  function canLabel() {
    const c = document.createElement('canvas');
    c.width = 2048;
    c.height = 1024;
    const g = c.getContext('2d');
    g.fillStyle = '#FBFAF7';
    g.fillRect(0, 0, c.width, c.height);
    const cx = 1024;
    const left = cx - 245;
    brandBlock(g, cx, 196, 490, 86, 'PEDIBAEHR', 53);
    wideText(g, 'Cremeschaum', left, 452, { size: 78, weight: 800, stretch: 1 });
    wideText(g, 'Orange-Lemongrass', left, 528, { size: 49, weight: 500, stretch: 1 });
    g.fillStyle = INK;
    g.fillRect(left, 566, 490, 3);
    softText(g, 'Crema en espuma', left, 622, 38, '#4b4a48');
    g.fillStyle = '#F08A1C';
    g.beginPath();
    g.arc(left + 30, 730, 30, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = '#8DB33F';
    g.beginPath();
    g.arc(left + 80, 730, 30, 0, Math.PI * 2);
    g.fill();
    wideText(g, '125 ml', left + 490, 744, { size: 40, weight: 600, align: 'right', stretch: 1 });
    g.fillStyle = '#F08A1C';
    g.fillRect(0, 900, c.width, 44);
    brandBlock(g, 0, 196, 300, 60, 'BAEHR', 38);
    brandBlock(g, 2048, 196, 300, 60, 'BAEHR', 38);
    return c;
  }

  function ribsBump() {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 16;
    const g = c.getContext('2d');
    g.fillStyle = '#808080';
    g.fillRect(0, 0, 256, 16);
    for (let x = 0; x < 256; x += 8) {
      g.fillStyle = '#e8e8e8';
      g.fillRect(x, 0, 3, 16);
      g.fillStyle = '#404040';
      g.fillRect(x + 4, 0, 2, 16);
    }
    return c;
  }

  function speckle() {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const g = c.getContext('2d');
    g.fillStyle = '#808080';
    g.fillRect(0, 0, 256, 256);
    let s = 7;
    const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 1500; i++) {
      const r = 1.5 + rnd() * 5;
      const v = Math.floor(90 + rnd() * 120);
      g.fillStyle = `rgba(${v},${v},${v},0.5)`;
      g.beginPath();
      g.arc(rnd() * 256, rnd() * 256, r, 0, Math.PI * 2);
      g.fill();
    }
    return c;
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

  // ---------- Geometría ----------
  // Semieje a de una elipse con semieje b y perímetro P (Ramanujan): el tubo conserva su contorno al aplanarse.
  function ellipseA(b, P) {
    let lo = b;
    let hi = P / 2;
    for (let i = 0; i < 40; i++) {
      const a = (lo + hi) / 2;
      const per = Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
      if (per > P) hi = a;
      else lo = a;
    }
    return (lo + hi) / 2;
  }

  function tubeBodyGeometry(r, h, rings = 80, segs = 144) {
    const P = 2 * Math.PI * r;
    const pos = [];
    const uv = [];
    const idx = [];
    let aTop = r;
    for (let i = 0; i <= rings; i++) {
      const t = i / rings;
      const b = lerp(r, 0.02, Math.pow(t, 1.85));
      const a = ellipseA(b, P);
      aTop = a;
      for (let j = 0; j <= segs; j++) {
        const u = j / segs;
        const th = 2 * Math.PI * (u - 0.25);
        pos.push(-a * Math.cos(th), t * h, b * Math.sin(th));
        uv.push(u, t);
      }
    }
    for (let i = 0; i < rings; i++) {
      for (let j = 0; j < segs; j++) {
        const p0 = i * (segs + 1) + j;
        const p1 = p0 + segs + 1;
        idx.push(p0, p0 + 1, p1, p0 + 1, p1 + 1, p1);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return { geometry: g, aTop };
  }

  const gloss = (extra = {}) =>
    new THREE.MeshPhysicalMaterial({ color: 0xfbfaf7, roughness: 0.24, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.16, ...extra });

  function shadows(group) {
    group.traverse((o) => {
      if (o.isMesh) o.castShadow = true;
    });
    return group;
  }

  function buildTube() {
    const group = new THREE.Group();
    const r = 0.5;
    const bodyH = 2.2;
    const capH = 0.64;
    const crimpH = 0.16;
    const y0 = -TUBE_H / 2;

    const { geometry, aTop } = tubeBodyGeometry(r, bodyH);
    const labelTex = canvasTex(tubeLabel());
    const surfTex = canvasTex(tubeSurface(), false);
    const body = new THREE.Mesh(
      geometry,
      new THREE.MeshPhysicalMaterial({
        map: labelTex,
        roughnessMap: surfTex,
        metalnessMap: surfTex,
        roughness: 1,
        metalness: 1,
        clearcoat: 0.7,
        clearcoatRoughness: 0.2,
        envMapIntensity: 1.15,
        sheen: 0.35,
        sheenRoughness: 0.6,
        sheenColor: 0xffffff,
        side: THREE.DoubleSide,
      })
    );
    body.position.y = y0 + capH;
    group.add(body);

    const bump = canvasTex(ribsBump(), false);
    bump.repeat.set(5, 1);
    const crimp = new THREE.Mesh(
      new THREE.BoxGeometry(aTop * 2 + 0.012, crimpH, 0.05),
      new THREE.MeshPhysicalMaterial({ color: 0xfbfaf7, roughness: 0.42, bumpMap: bump, bumpScale: 2.4, clearcoat: 0.2 })
    );
    crimp.position.y = y0 + capH + bodyH + crimpH / 2 - 0.012;
    group.add(crimp);

    // Tapón abatible sobre el que se apoya el tubo
    const capR = 0.47;
    const pts = [
      new THREE.Vector2(0, 0),
      new THREE.Vector2(capR - 0.05, 0),
      new THREE.Vector2(capR - 0.012, 0.014),
      new THREE.Vector2(capR, 0.05),
      new THREE.Vector2(capR, capH - 0.05),
      new THREE.Vector2(capR - 0.02, capH - 0.012),
      new THREE.Vector2(r * 0.98, capH),
    ];
    const cap = new THREE.Mesh(new THREE.LatheGeometry(pts, 120), gloss());
    cap.position.y = y0;
    group.add(cap);
    const seam = new THREE.Mesh(
      new THREE.CylinderGeometry(capR + 0.002, capR + 0.002, 0.008, 120, 1, true),
      new THREE.MeshStandardMaterial({ color: 0xb4b4b4, roughness: 0.5 })
    );
    seam.position.y = y0 + capH * 0.42;
    group.add(seam);

    return {
      group: shadows(group),
      redraw: () => {
        labelTex.image = tubeLabel();
        labelTex.needsUpdate = true;
      },
    };
  }

  function buildCan() {
    const group = new THREE.Group();
    const r = 0.5;
    const bodyH = 2.3;
    const y0 = -CAN_H / 2;
    const chrome = () => new THREE.MeshStandardMaterial({ color: 0xe2e4e7, roughness: 0.16, metalness: 1 });

    const labelTex = canvasTex(canLabel());
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(r, r, bodyH, 144, 1, true),
      new THREE.MeshPhysicalMaterial({ map: labelTex, roughness: 0.26, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.1 })
    );
    body.rotation.y = Math.PI;
    body.position.y = y0 + 0.03 + bodyH / 2;
    group.add(body);

    const base = new THREE.Mesh(
      new THREE.LatheGeometry(
        [new THREE.Vector2(0, 0.012), new THREE.Vector2(r - 0.07, 0.012), new THREE.Vector2(r - 0.03, 0), new THREE.Vector2(r, 0.03)],
        120
      ),
      chrome()
    );
    base.position.y = y0;
    group.add(base);

    const topY = 0.03 + bodyH;
    const capR = 0.36;
    const shoulder = [];
    for (let i = 0; i <= 16; i++) {
      const a = ((i / 16) * Math.PI) / 2;
      shoulder.push(new THREE.Vector2(lerp(r, capR + 0.02, 1 - Math.cos(a)), topY + Math.sin(a) * 0.2));
    }
    const sh = new THREE.Mesh(new THREE.LatheGeometry(shoulder, 120), chrome());
    sh.position.y = y0;
    group.add(sh);

    const capH = CAN_H - topY - 0.2;
    const capPts = [
      new THREE.Vector2(capR, 0),
      new THREE.Vector2(capR, capH - 0.1),
      new THREE.Vector2(capR - 0.03, capH - 0.03),
      new THREE.Vector2(capR - 0.1, capH),
      new THREE.Vector2(0, capH),
    ];
    const head = new THREE.Group();
    head.add(new THREE.Mesh(new THREE.LatheGeometry(capPts, 120), gloss()));
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.07, 0.17), new THREE.MeshStandardMaterial({ color: 0x242426, roughness: 0.7 }));
    slot.position.set(capR - 0.02, capH * 0.62, 0);
    head.add(slot);
    const headY = y0 + topY + 0.2;
    head.position.y = headY;
    group.add(head);

    return {
      group: shadows(group),
      head,
      headY,
      nozzle: new THREE.Vector3(capR + 0.03, headY + capH * 0.62, 0),
      redraw: () => {
        labelTex.image = canLabel();
        labelTex.needsUpdate = true;
      },
    };
  }

  const foamBump = canvasTex(speckle(), false);
  foamBump.wrapT = THREE.RepeatWrapping;
  foamBump.repeat.set(4, 3);
  const foamMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xfffdf9,
    roughness: 0.9,
    metalness: 0,
    sheen: 1,
    sheenRoughness: 0.5,
    sheenColor: 0xffffff,
    bumpMap: foamBump,
    bumpScale: 0.5,
    envMapIntensity: 0.6,
  });

  function buildFoam() {
    // Un copo de espuma: varias esferas deformadas que se funden, como un montón de mousse.
    const group = new THREE.Group();
    const v = new THREE.Vector3();
    function lump(radius, x, y, z, seed) {
      const g = new THREE.SphereGeometry(1, 72, 48);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        v.fromBufferAttribute(p, i);
        let n = 0;
        for (let k = 0; k < 5; k++) {
          n +=
            (Math.sin(v.x * (2.2 + k) + seed * 1.7 + k) * Math.cos(v.y * (1.9 + k * 0.8) + seed + k * 2.1) * Math.sin(v.z * (2.4 + k * 0.6) + seed * 0.6)) /
            (1.3 + k * 0.7);
        }
        v.multiplyScalar(1 + n * 0.085);
        p.setXYZ(i, v.x, v.y, v.z);
      }
      g.computeVertexNormals();
      const m = new THREE.Mesh(g, foamMaterial);
      m.scale.setScalar(radius);
      m.position.set(x, y, z);
      m.rotation.set(seed, seed * 2.3, seed * 0.7);
      group.add(m);
    }
    lump(0.82, 0, -0.18, 0, 1);
    lump(0.56, 0.5, -0.02, 0.22, 2);
    lump(0.52, -0.5, 0.02, 0.18, 3);
    lump(0.5, 0.08, 0.06, 0.52, 4);
    lump(0.5, -0.06, 0.02, -0.5, 5);
    lump(0.5, 0.26, 0.42, 0.1, 6);
    lump(0.44, -0.24, 0.5, 0.06, 7);
    lump(0.36, 0.02, 0.8, 0.04, 8);
    lump(0.2, 0.06, 1.08, 0.02, 9);
    return shadows(group);
  }

  // ---------- Escena ----------
  // Fondo del estudio: una esfera del mismo rojo que la niebla, para que el horizonte desaparezca.
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(90, 32, 16),
    new THREE.MeshBasicMaterial({ color: STUDIO, side: THREE.BackSide, fog: false, depthWrite: false })
  );
  dome.renderOrder = -10;
  scene.add(dome);

  // Resplandor en el fondo, detrás del producto
  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
      map: canvasTex(radial([[0, 'rgba(190,20,38,0.85)'], [0.45, 'rgba(150,13,28,0.42)'], [0.85, 'rgba(118,9,20,0.06)'], [1, 'rgba(111,8,19,0)']])),
      transparent: true,
      depthWrite: false,
      fog: false,
    })
  );
  glow.renderOrder = -9;
  scene.add(glow);

  // Suelo pulido: deja ver un poco de lo que hay debajo, donde viven los reflejos.
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 120),
    new THREE.MeshLambertMaterial({ color: 0xa80d20, transparent: true, opacity: 0.78 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  floor.renderOrder = 2;
  scene.add(floor);

  // Charco de luz sobre el suelo
  const pool = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
      map: canvasTex(radial([[0, 'rgba(255,40,60,0.2)'], [0.45, 'rgba(210,24,44,0.08)'], [1, 'rgba(160,10,30,0)']])),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  pool.rotation.x = -Math.PI / 2;
  pool.position.y = 0.003;
  pool.renderOrder = 3;
  scene.add(pool);

  function contactShadow() {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        map: canvasTex(radial([[0, 'rgba(30,0,4,0.6)'], [0.4, 'rgba(30,0,4,0.26)'], [1, 'rgba(30,0,4,0)']])),
        transparent: true,
        depthWrite: false,
        opacity: 0,
      })
    );
    m.rotation.x = -Math.PI / 2;
    m.position.y = 0.006;
    m.renderOrder = 4;
    scene.add(m);
    return m;
  }

  const tube = buildTube();
  const can = buildCan();
  const foam = buildFoam();
  scene.add(tube.group, can.group, foam);
  const tubeShadow = contactShadow();
  const canShadow = contactShadow();
  const foamShadow = contactShadow();

  // Reflejos: copias en espejo bajo el suelo
  const mirror = new THREE.Group();
  mirror.scale.y = -1;
  scene.add(mirror);
  const twin = (obj) => {
    const c = obj.clone();
    c.traverse((o) => {
      if (o.isMesh) o.castShadow = false;
    });
    mirror.add(c);
    return c;
  };
  const tubeTwin = twin(tube.group);
  const canTwin = twin(can.group);
  const foamTwin = twin(foam);
  const follow = (twinObj, obj) => {
    twinObj.position.copy(obj.position);
    twinObj.quaternion.copy(obj.quaternion);
    twinObj.scale.copy(obj.scale);
    twinObj.visible = obj.visible;
  };

  // Chorro de espuma entre la boquilla y el copo
  const stream = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.085, 1, 20, 1), foamMaterial);
  stream.visible = false;
  scene.add(stream);

  // Burbujas que suben alrededor del copo
  const BUBBLES = 22;
  const bubbles = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 20, 14), foamMaterial, BUBBLES);
  bubbles.frustumCulled = false;
  scene.add(bubbles);
  const dummy = new THREE.Object3D();

  // Las etiquetas se redibujan cuando las tipografías están cargadas
  if (document.fonts?.load) {
    Promise.all([
      document.fonts.load('800 100px "Archivo Variable"'),
      document.fonts.load('500 60px "Archivo Variable"'),
      document.fonts.load('italic 400 40px "Newsreader Variable"'),
    ])
      .then(() => {
        tube.redraw();
        can.redraw();
      })
      .catch(() => {});
  }

  // ---------- Encuadre ----------
  let W = 1;
  let H = 1;
  let wdthBase = 125;
  let L = shots(false);
  const TAN = Math.tan(THREE.MathUtils.degToRad(FOV / 2));

  function resize() {
    W = sticky.clientWidth;
    H = sticky.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, W < 820 ? 1.6 : 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    L = shots(W / H < 0.85);
    wdthBase = parseFloat(getComputedStyle(sticky).getPropertyValue('--wdth-base')) || 125;
    if (typeof placeFoam === 'function') placeFoam();
  }

  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  if (window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('pointermove', (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    });
  }

  // Arrastrar para girar el producto
  const drag = { on: false, x: 0, rot: 0, vel: 0, used: false };
  sticky.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a,button,input')) return;
    drag.on = true;
    drag.x = e.clientX;
    drag.used = true;
  });
  window.addEventListener('pointermove', (e) => {
    if (!drag.on) return;
    const dx = e.clientX - drag.x;
    drag.x = e.clientX;
    drag.vel = dx * 0.012;
    drag.rot += drag.vel;
  });
  window.addEventListener('pointerup', () => (drag.on = false));
  window.addEventListener('pointercancel', () => (drag.on = false));
  // Al cambiar entre profesional y particular, el producto da una vuelta completa
  window.addEventListener('baehr:modo', () => {
    drag.vel += 0.377;
  });

  // Postura del bote al dosificar y punto donde cae la espuma, justo bajo la boquilla
  const TILT = 1.15;
  const LIFT = 0.75;
  let foamX = 0;
  function placeFoam() {
    foamX = L.S - 0.12 + can.nozzle.x * Math.cos(TILT) + can.nozzle.y * Math.sin(TILT);
  }
  placeFoam();

  const nozzleW = new THREE.Vector3();
  const foamTop = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const dir = new THREE.Vector3();

  function setBeat(el, v, local) {
    if (!el) return;
    el.style.setProperty('--v', v.toFixed(3));
    if (local !== undefined) el.style.setProperty('--l', local.toFixed(3));
    el.classList.toggle('is-on', v > 0.01);
  }

  function frameCamera(s, parallax = 1) {
    const d = REF_H / (2 * TAN * s.hf);
    const az = s.az + pointer.sx * 0.1 * parallax;
    const el = Math.max(0.03, s.el - pointer.sy * 0.035 * parallax);
    camera.position.set(s.t[0] + Math.sin(az) * Math.cos(el) * d, s.t[1] + Math.sin(el) * d, s.t[2] + Math.cos(az) * Math.cos(el) * d);
    camera.lookAt(s.t[0], s.t[1], s.t[2]);
    camera.setViewOffset(W, H, -s.sx * W, -s.sy * H, W, H);
    scene.fog.near = d + 2.5;
    scene.fog.far = d + 30;
    return d;
  }

  function apply(p, time, intro = 1) {
    const io = 1 - Math.pow(1 - intro, 3);
    sticky.style.setProperty('--intro', io.toFixed(4));

    // ----- Capas HTML -----
    const open = ease(seg(p, 0.015, 0.125));
    const heroOut = seg(p, 0.03, 0.11);
    const fill = seg(p, 0.9, 0.995);
    sticky.style.setProperty('--k', (1 - open).toFixed(4));
    sticky.style.setProperty('--hero-out', heroOut.toFixed(3));
    sticky.style.setProperty('--p', p.toFixed(4));
    sticky.style.setProperty('--ribs-o', Math.min(seg(p, 0.1, 0.14), 1 - seg(p, 0.9, 0.94)).toFixed(3));
    sticky.style.setProperty('--wdth', lerp(wdthBase, 64, ease(seg(p, 0, 0.11))).toFixed(1));
    sticky.style.setProperty('--flash', ease(seg(p, 0.955, 0.995)).toFixed(3));
    sticky.style.setProperty('--hint', (Math.min(seg(p, 0.17, 0.2), 1 - seg(p, 0.33, 0.37)) * (drag.used ? 0 : 1)).toFixed(3));
    hero?.classList.toggle('is-gone', heroOut > 0.6);
    sticky.classList.toggle('is-white', fill > 0.92);

    setBeat(beatEls.a, Math.min(ease(seg(p, 0.135, 0.185)), 1 - ease(seg(p, 0.385, 0.425))), seg(p, 0.16, 0.37));
    setBeat(beatEls.b, Math.min(ease(seg(p, 0.48, 0.53)), 1 - ease(seg(p, 0.6, 0.64))));
    setBeat(beatEls.c, Math.min(ease(seg(p, 0.75, 0.81)), 1 - ease(seg(p, 0.885, 0.925))));

    const onScreen = film.getBoundingClientRect().bottom > 90;
    if (header) header.dataset.theme = onScreen && open > 0.6 && fill < 0.7 ? 'red' : 'light';

    // ----- Cámara -----
    pointer.sx += (pointer.x - pointer.sx) * 0.05;
    pointer.sy += (pointer.y - pointer.sy) * 0.05;
    if (!drag.on) {
      drag.rot += drag.vel;
      drag.vel *= 0.94;
    }
    const s = shotAt(p, L.keys);
    frameCamera(s, 1 - seg(p, 0.9, 1));

    key.position.set(s.t[0] + 6, 8, 5.5);
    key.target.position.set(s.t[0], 0.6, 0);
    rim.position.set(s.t[0] - 6, 4.5, -6);
    rim.target.position.set(s.t[0], 1.2, 0);
    // Los reflejos del estudio se deslizan despacio sobre los envases
    scene.environmentRotation.y = Math.sin(time * 0.22) * 0.4 + p * 2.4 + pointer.sx * 0.25;
    glow.position.set(s.t[0], 7, -10);
    glow.scale.set(30, 14, 1);
    pool.position.x = s.t[0];
    pool.scale.set(12, 8, 1);

    // ----- Tubo -----
    const t1 = ease(seg(p, 0.02, 0.14));
    const spin = ease(seg(p, 0.15, 0.385));
    const t3 = ease(seg(p, 0.62, 0.74));
    const tubeScale = lerp(0.55, 1, io);
    tube.group.position.set(-L.S - t3 * 5.5, (TUBE_H / 2) * tubeScale, 0);
    tube.group.scale.setScalar(tubeScale);
    tube.group.rotation.set(0, 0.32 - (1 - io) * 3.4 - t1 * 0.32 + spin * Math.PI * 2 + Math.sin(time * 0.5) * 0.05 + drag.rot, 0);
    tube.group.visible = t3 < 0.999;
    tubeShadow.position.x = tube.group.position.x;
    tubeShadow.scale.set(1.7 * tubeScale, 1.7 * tubeScale, 1);
    tubeShadow.material.opacity = 0.9 * io * (1 - t3);

    // ----- Bote de crema en espuma -----
    const dropT = seg(p, 0.4, 0.52);
    const u1 = bounceOut(dropT);
    const u2 = ease(seg(p, 0.62, 0.76));
    const press = Math.min(seg(p, 0.745, 0.765), 1 - seg(p, 0.875, 0.895));
    can.group.position.set(L.S - u2 * 0.12, CAN_H / 2 + (1 - u1) * 7 + u2 * LIFT, 0);
    can.group.rotation.set(0, (-0.2 + Math.sin(time * 0.45 + 2) * 0.04 + drag.rot) * (1 - u2) + (1 - ease(dropT)) * 2.2, -TILT * u2);
    can.group.visible = dropT > 0.001;
    can.head.position.y = can.headY - 0.055 * press;
    canShadow.position.x = can.group.position.x;
    canShadow.scale.set(1.8 * (1 - u2 * 0.25), 1.8 * (1 - u2 * 0.25), 1);
    canShadow.material.opacity = 0.9 * ease(seg(dropT, 0.55, 1)) * (1 - u2 * 0.7);

    // ----- Espuma -----
    const f1 = ease(seg(p, 0.755, 0.885));
    const f2 = easeIn(seg(p, 0.9, 1));
    const fs = lerp(0.0001, L.foamSize, f1) * (1 + f2 * 1.6);
    foam.position.set(foamX, fs * 0.96, 0);
    foam.scale.setScalar(fs);
    foam.rotation.set(0, 0.5 + f1 * 0.9 + time * 0.05, 0);
    foam.visible = f1 > 0.001;
    foamShadow.position.set(foam.position.x, 0.006, foam.position.z);
    foamShadow.scale.set(3.4 * fs, 3.4 * fs, 1);
    foamShadow.material.opacity = 0.8 * f1 * (1 - seg(p, 0.9, 0.95));

    // Chorro desde la boquilla
    can.group.updateMatrixWorld(true);
    nozzleW.copy(can.nozzle);
    can.group.localToWorld(nozzleW);
    const flow = Math.min(seg(p, 0.757, 0.775), 1 - seg(p, 0.862, 0.885));
    stream.visible = flow > 0.01;
    if (stream.visible) {
      foamTop.set(foam.position.x, foam.position.y + fs * 0.85, foam.position.z);
      dir.subVectors(foamTop, nozzleW);
      const len = dir.length();
      stream.position.copy(nozzleW).addScaledVector(dir, 0.5);
      stream.quaternion.setFromUnitVectors(up, dir.normalize());
      stream.scale.set(flow, len, flow);
    }

    // Burbujas
    const bub = f1 * (1 - seg(p, 0.9, 0.95));
    bubbles.visible = bub > 0.01;
    if (bubbles.visible) {
      for (let i = 0; i < BUBBLES; i++) {
        const cycle = (time * (0.07 + (i % 5) * 0.012) + i * 0.137) % 1;
        const ang = i * 2.39996 + time * 0.15;
        const rad = (1.05 + (i % 6) * 0.26) * fs;
        const size = (0.045 + (i % 4) * 0.028) * fs * bub * Math.sin(cycle * Math.PI);
        dummy.position.set(foam.position.x + Math.cos(ang) * rad, foam.position.y + (-0.6 + cycle * 3.1) * fs, foam.position.z + Math.sin(ang) * rad * 0.6);
        dummy.scale.setScalar(Math.max(size, 0.0001));
        dummy.updateMatrix();
        bubbles.setMatrixAt(i, dummy.matrix);
      }
      bubbles.instanceMatrix.needsUpdate = true;
    }

    follow(tubeTwin, tube.group);
    follow(canTwin, can.group);
    follow(foamTwin, foam);
  }

  // ---------- Bucle ----------
  let target = 0;
  let p = 0;
  let running = false;
  let forced = null;
  let introT = 0;
  let introStart = 0;
  const t0 = performance.now();

  function readScroll() {
    const r = film.getBoundingClientRect();
    const total = r.height - window.innerHeight;
    target = total > 0 ? clamp01(-r.top / total) : 0;
  }

  function frame(now) {
    if (!running) return;
    if (forced === null) {
      readScroll();
      p += (target - p) * 0.14;
      if (Math.abs(target - p) < 0.0003) p = target;
    } else {
      p = forced;
    }
    if (!introStart) introStart = now;
    if (introT < 1) introT = Math.min(1, (now - introStart) / 1700);
    apply(p, (now - t0) / 1000, introT);
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  function start() {
    if (running) return;
    running = true;
    requestAnimationFrame(frame);
  }

  resize();
  readScroll();
  p = target;
  if (p > 0.01) introT = 1;
  apply(p, 0, introT);
  renderer.render(scene, camera);
  html.classList.add('film-ready');

  window.addEventListener('resize', resize);
  new ResizeObserver(resize).observe(sticky);
  new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) return start();
      // Al salir de pantalla se deja la película en su estado real, sin suavizado pendiente
      running = false;
      if (forced === null) {
        readScroll();
        p = target;
      }
      apply(p, (performance.now() - t0) / 1000, 1);
    },
    { rootMargin: '10% 0px' }
  ).observe(film);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) running = false;
    else start();
  });

  // Para pruebas y capturas: fijar el progreso a mano y sacar imágenes fijas
  window.__film = {
    set(v) {
      forced = v;
      start();
    },
    release() {
      forced = null;
    },
    still(v, w, h, shot) {
      renderer.setPixelRatio(1);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      W = w;
      H = h;
      L = shots(w / h < 0.85);
      placeFoam();
      apply(v, 0, 1);
      if (shot) frameCamera({ ...shotAt(v, L.keys), ...shot }, 0);
      renderer.render(scene, camera);
      const url = renderer.domElement.toDataURL('image/webp', 0.9);
      resize();
      return url;
    },
  };
}

init();
