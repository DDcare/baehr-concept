// El protocolo en una sola toma: la cámara recorre cinco pasos de un tratamiento en un estudio rojo.
// Cada paso ocurre delante de una letra gigante; al final la cámara se aleja y las cinco forman BAEHR.
// El scroll da un valor de 0 a 1; la cámara, los envases y la materia (agua, sal, sobres, crema, espuma) lo siguen.
import * as THREE from 'three';
import { createProducts, SIZE } from './productos.js';
import { LETRAS } from './letras.js';

const html = document.documentElement;
// Teléfonos modestos (Android con poca memoria o pocos núcleos): empiezan ya con la calidad baja,
// sin suavizado de bordes ni reflejos, en lugar de rebajarla a mitad de película
const MODEST = /Android/i.test(navigator.userAgent) && ((navigator.deviceMemory || 8) <= 4 || (navigator.hardwareConcurrency || 8) <= 6);
const film = document.querySelector('.film');
const sticky = film?.querySelector('.film__sticky');
const canvas = document.getElementById('stage');
const header = document.querySelector('.top');
const hero = sticky?.querySelector('.hero');
const chapters = sticky ? Array.from(sticky.querySelectorAll('.chap')) : [];
const finale = sticky?.querySelector('.fin');
const stepper = sticky?.querySelector('.stepper');
const stepButtons = stepper ? Array.from(stepper.querySelectorAll('button')) : [];
const skip = sticky?.querySelector('.film__skip');

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const seg = (p, a, b) => clamp01((p - a) / (b - a));
const ease = (t) => t * t * (3 - 2 * t);
const lerp = (a, b, t) => a + (b - a) * t;
const pulse = (q, a, b, edge = 0.03) => Math.min(seg(q, a, a + edge), 1 - seg(q, b - edge, b));
// Llegada con un pequeño rebote
const back = (t) => 1 + 2.25 * Math.pow(t - 1, 3) + 1.25 * Math.pow(t - 1, 2);
// Números repetibles para repartir cristales y gotas
const rand = (i, k) => {
  const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const STUDIO = 0x5a0710;
const FOV = 26;
const REF_H = 3.0;

// Las letras: misma tipografía, ancho y peso que el logotipo de la cabecera
const WORD = 'BAEHR';
const CAP = 5.6;
const TRACK = 40;
const LS = CAP / LETRAS.capHeight;
const LETTER_Z = -3.4;
const LETTER_DEPTH = 1.3;
// Cada paso se coloca en el centro de su letra
const X = (() => {
  const out = [];
  let x = 0;
  for (const ch of WORD) {
    const adv = LETRAS.glyphs[ch].adv;
    out.push((x + adv / 2) * LS);
    x += adv + TRACK;
  }
  return out.map((v) => v - out[0]);
})();
const XC = X[4] / 2;
// El conjunto de los cinco envases del principio, antes de la primera letra
const XH = -9.5;

// Tramo del recorrido que ocupa cada paso, y el del plano final
const RANGE = [
  [0.1, 0.225],
  [0.255, 0.38],
  [0.41, 0.535],
  [0.565, 0.69],
  [0.72, 0.845],
];
const FIN = [0.885, 1];
const REVEAL = 0.84;

// Encuadres. t: punto al que mira la cámara, az y el: ángulos, hf: alto de un envase de referencia respecto
// a la pantalla, sx y sy: desplazamiento del encuadre (como un objetivo descentrable).
function shots(tall) {
  const K = (p, x, y, az, el, hf, sx, sy) => [p, { t: [x, y, 0], az, el, hf, sx, sy }];
  if (tall) {
    // En vertical la cámara gira poco: las letras se ven rectas
    return [
      K(0.0, XH, 1.8, 0.2, 0.11, 0.25, 0, 0.245),
      K(0.06, XH + 1.5, 1.7, 0.08, 0.13, 0.28, 0, 0.12),
      K(RANGE[0][0], X[0] + 0.35, 1.75, -0.06, 0.18, 0.27, 0, 0.2),
      K(RANGE[0][1], X[0] + 0.35, 1.7, 0.03, 0.16, 0.28, 0, 0.2),
      K(RANGE[1][0], X[1], 1.3, 0.08, 0.22, 0.36, 0, 0.21),
      K(RANGE[1][1], X[1], 1.25, -0.04, 0.2, 0.38, 0, 0.21),
      K(RANGE[2][0], X[2] - 1.5, 1.9, -0.06, 0.12, 0.3, 0, 0.2),
      K(RANGE[2][0] + 0.07, X[2] - 1.5, 3.1, -0.02, 0.1, 0.235, 0, 0.2),
      K(RANGE[2][1], X[2] - 1.5, 3.1, 0.03, 0.1, 0.24, 0, 0.2),
      K(RANGE[3][0], X[3] + 0.4, 2.05, 0.06, 0.14, 0.31, 0, 0.2),
      K(RANGE[3][1], X[3] + 0.4, 1.95, -0.02, 0.13, 0.32, 0, 0.2),
      K(RANGE[4][0], X[4] + 0.5, 1.6, -0.05, 0.11, 0.31, 0, 0.2),
      K(RANGE[4][1], X[4] + 0.55, 1.5, -0.02, 0.1, 0.32, 0, 0.2),
      // plano final: la palabra entera, de frente y recta. Queda al 60 % del alto y el texto se apoya justo encima
      // (ver .fin en la hoja de estilos): los dos forman un solo grupo en el centro de la pantalla
      K(FIN[0] + 0.03, XC, 2.6, -0.03, 0.1, 0.031, 0, 0.1),
      K(1.0, XC, 2.6, 0.03, 0.09, 0.0318, 0, 0.1),
    ];
  }
  return [
    K(0.0, XH, 1.8, 0.24, 0.11, 0.38, 0.255, 0.05),
    K(0.06, XH + 1.5, 1.7, 0.1, 0.13, 0.44, 0.1, 0.04),
    K(RANGE[0][0], X[0] + 0.35, 1.75, -0.2, 0.2, 0.43, 0.17, 0.03),
    K(RANGE[0][1], X[0] + 0.35, 1.65, 0.06, 0.17, 0.45, 0.17, 0.03),
    K(RANGE[1][0], X[1] - 0.1, 1.3, 0.22, 0.24, 0.5, -0.17, 0.05),
    K(RANGE[1][1], X[1] - 0.1, 1.25, -0.1, 0.2, 0.53, -0.17, 0.05),
    K(RANGE[2][0], X[2] - 1.5, 1.9, -0.2, 0.12, 0.46, 0.17, 0.02),
    K(RANGE[2][0] + 0.07, X[2] - 1.5, 3.1, -0.06, 0.1, 0.375, 0.17, 0.02),
    K(RANGE[2][1], X[2] - 1.5, 3.1, 0.08, 0.09, 0.385, 0.17, 0.02),
    K(RANGE[3][0], X[3] + 0.4, 2.05, 0.2, 0.14, 0.46, -0.17, 0.03),
    K(RANGE[3][1], X[3] + 0.4, 1.95, -0.08, 0.13, 0.49, -0.17, 0.03),
    K(RANGE[4][0], X[4] + 0.5, 1.6, -0.16, 0.11, 0.49, 0.17, 0.05),
    K(RANGE[4][1], X[4] + 0.55, 1.5, -0.06, 0.1, 0.51, 0.17, 0.05),
    K(FIN[0] + 0.03, XC - 0.9, 2.6, -0.28, 0.15, 0.113, 0, 0.1),
    K(1.0, XC - 0.7, 2.6, -0.1, 0.14, 0.116, 0, 0.1),
  ];
}

// La cámara pasa por cada encuadre sin pararse ni rebotar: interpolación cúbica monótona (velocidad continua,
// sin pasarse de largo). Antes cada tramo arrancaba y frenaba por separado y el movimiento iba a tirones.
const paths = new WeakMap();
const FIELDS = [(s) => s.t[0], (s) => s.t[1], (s) => s.az, (s) => s.el, (s) => 1 / s.hf, (s) => s.sx, (s) => s.sy];
function slopes(x, y) {
  const n = x.length;
  const d = [];
  for (let i = 0; i < n - 1; i++) d.push((y[i + 1] - y[i]) / (x[i + 1] - x[i]));
  const m = new Array(n).fill(0); // en los extremos, velocidad cero: sale del reposo y llega al reposo
  for (let i = 1; i < n - 1; i++) {
    if (d[i - 1] * d[i] <= 0) continue;
    const a = x[i] - x[i - 1];
    const b = x[i + 1] - x[i];
    const w1 = 2 * b + a;
    const w2 = b + 2 * a;
    m[i] = (w1 + w2) / (w1 / d[i - 1] + w2 / d[i]);
  }
  return m;
}
function pathOf(keys) {
  let path = paths.get(keys);
  if (!path) {
    const xs = keys.map((k) => k[0]);
    const ys = FIELDS.map((f) => keys.map((k) => f(k[1])));
    path = { xs, ys, ms: ys.map((y) => slopes(xs, y)) };
    paths.set(keys, path);
  }
  return path;
}
function shotAt(p, keys) {
  const { xs, ys, ms } = pathOf(keys);
  const n = xs.length;
  const x = Math.min(xs[n - 1], Math.max(xs[0], p));
  let i = 0;
  while (i < n - 2 && x > xs[i + 1]) i++;
  const h = xs[i + 1] - xs[i];
  const t = (x - xs[i]) / h;
  const t2 = t * t;
  const t3 = t2 * t;
  const h00 = 2 * t3 - 3 * t2 + 1;
  const h10 = t3 - 2 * t2 + t;
  const h01 = -2 * t3 + 3 * t2;
  const h11 = t3 - t2;
  const v = ys.map((y, k) => h00 * y[i] + h10 * h * ms[k][i] + h01 * y[i + 1] + h11 * h * ms[k][i + 1]);
  return { t: [v[0], v[1], 0], az: v[2], el: v[3], hf: 1 / v[4], sx: v[5], sy: v[6] };
}

function staticFallback() {
  html.classList.add('film-static');
  // sin película, los enlaces al protocolo llevan al panel de cada paso
  document.querySelectorAll('[data-go-step]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const panel = chapters[Number(a.dataset.goStep) || 0];
      if (!panel) return;
      e.preventDefault();
      panel.scrollIntoView({ block: 'start' });
    })
  );
}

function init() {
  if (!film || !sticky || !canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return staticFallback();

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: !MODEST, alpha: false, powerPreference: 'high-performance' });
  } catch (e) {
    return staticFallback();
  }

  // En pantallas pequeñas se dibuja lo mismo con menos piezas y sombras más ligeras
  const LIGHT = window.innerWidth < 820;

  renderer.setClearColor(STUDIO, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 0.96;
  // Sin mapa de sombras: las sombras de contacto bajo cada envase dan el apoyo, y se ahorra una pasada entera por imagen

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(STUDIO, 14, 40);
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 260);
  const maxAniso = renderer.capabilities.getMaxAnisotropy();

  // ---------- Luz de estudio ----------
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
    panel(9, 9, 0, 10, 1, 4.5);
    panel(2.4, 10, -9, 3, 4, 9);
    panel(2.4, 10, 9, 3, 4, 9);
    panel(1.2, 7, 3.5, 3, 9.5, 5);
    panel(12, 3, 0, 0.5, 11, 0.9);
    panel(4, 7, -5, 4, -9, 5);
    panel(4, 7, 6, 4, -8, 3.5);
    const pm = new THREE.PMREMGenerator(renderer);
    const tex = pm.fromScene(env, 0.015).texture;
    pm.dispose();
    return tex;
  }
  scene.environment = studioEnvironment();
  scene.environmentIntensity = 1.0;

  scene.add(new THREE.HemisphereLight(0xffffff, 0x8c1622, 0.3));
  const key = new THREE.DirectionalLight(0xffffff, 1.9);
  scene.add(key, key.target);
  const rim = new THREE.DirectionalLight(0xfff1ea, 2.4);
  scene.add(rim, rim.target);

  // ---------- Envases ----------
  let loaded = false;
  const P = createProducts({ maxAniso, onLoad: () => (loaded = true) });
  const { canvasTex, plastic } = P;

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

  // ---------- Estudio ----------
  // El fondo y la niebla tienen exactamente el mismo color, así el suelo se funde con el fondo sin línea de horizonte
  // El resplandor del fondo va dentro del propio fondo, y la mancha de luz dentro del propio suelo:
  // dos capas a pantalla completa en lugar de cuatro (lo que más pesaba en equipos modestos).
  const uGlow = { value: new THREE.Vector3(0, 6.5, -14) }; // centro del resplandor, en un plano vertical al fondo
  const uGlowSize = { value: new THREE.Vector2(20, 9) }; // medio ancho y medio alto
  const domeMat = new THREE.MeshBasicMaterial({ color: STUDIO, side: THREE.BackSide, fog: false, depthWrite: false, toneMapped: false });
  domeMat.onBeforeCompile = (sh) => {
    sh.uniforms.uGlow = uGlow;
    sh.uniforms.uGlowSize = uGlowSize;
    sh.vertexShader =
      'varying vec3 vDomeW;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vDomeW = (modelMatrix * vec4(position, 1.0)).xyz;');
    sh.fragmentShader =
      'uniform vec3 uGlow;\nuniform vec2 uGlowSize;\nvarying vec3 vDomeW;\n' +
      sh.fragmentShader.replace(
        '#include <colorspace_fragment>',
        `#include <colorspace_fragment>
        {
          vec3 gd = normalize(vDomeW - cameraPosition);
          if (gd.z < -0.0001) {
            float gt = (uGlow.z - cameraPosition.z) / gd.z;
            vec2 gp = cameraPosition.xy + gd.xy * gt;
            float gr = length((gp - uGlow.xy) / uGlowSize);
            vec3 gc;
            float ga;
            if (gr < 0.4) {
              float k = gr / 0.4;
              gc = mix(vec3(0.690, 0.071, 0.141), vec3(0.549, 0.051, 0.110), k);
              ga = mix(0.7, 0.36, k);
            } else if (gr < 0.8) {
              float k = (gr - 0.4) / 0.4;
              gc = mix(vec3(0.549, 0.051, 0.110), vec3(0.408, 0.035, 0.078), k);
              ga = mix(0.36, 0.07, k);
            } else {
              float k = clamp((gr - 0.8) / 0.2, 0.0, 1.0);
              gc = mix(vec3(0.408, 0.035, 0.078), vec3(0.353, 0.027, 0.063), k);
              ga = mix(0.07, 0.0, k);
            }
            gl_FragColor.rgb = mix(gl_FragColor.rgb, gc, ga);
          }
        }`
      );
  };
  const dome = new THREE.Mesh(new THREE.SphereGeometry(180, 32, 16), domeMat);
  dome.renderOrder = -10;
  scene.add(dome);

  const uPool = { value: new THREE.Vector4(0, 0, 7.5, 5) }; // centro (x, z) y medio tamaño (x, z) de la mancha de luz
  // El suelo es plano y los focos son direccionales: la luz es la misma en todo el suelo.
  // Se calcula una vez por imagen (floorLight) en lugar de píxel a píxel.
  const FLOOR = new THREE.Color(0x8e0b1c);
  const floorMat = new THREE.MeshBasicMaterial({ color: FLOOR, transparent: true, opacity: 0.8 });
  floorMat.onBeforeCompile = (sh) => {
    sh.uniforms.uPool = uPool;
    sh.vertexShader =
      'varying vec2 vFloorW;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vFloorW = (modelMatrix * vec4(position, 1.0)).xz;');
    sh.fragmentShader =
      'uniform vec4 uPool;\nvarying vec2 vFloorW;\n' +
      sh.fragmentShader.replace(
        '#include <opaque_fragment>',
        `{
          float pr = clamp(length((vFloorW - uPool.xy) / uPool.zw), 0.0, 1.0);
          outgoingLight += vec3(0.62, 0.018, 0.036) * pow(1.0 - pr, 2.2);
        }
        #include <opaque_fragment>`
      );
  };
  const up = new THREE.Vector3(0, 1, 0);
  const lightDir = new THREE.Vector3();
  function floorLight() {
    // la misma cuenta que haría un material mate: luz ambiente desde arriba más los dos focos según su inclinación
    let e = 0.3;
    for (const lamp of [key, rim]) {
      lightDir.subVectors(lamp.position, lamp.target.position).normalize();
      e += lamp.intensity * Math.max(0, lightDir.dot(up));
    }
    floorMat.color.copy(FLOOR).multiplyScalar(e / Math.PI);
  }
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(700, 320), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.renderOrder = 2;
  scene.add(floor);

  const shadowTex = canvasTex(radial([[0, 'rgba(24,0,3,0.62)'], [0.4, 'rgba(24,0,3,0.27)'], [1, 'rgba(24,0,3,0)']]));
  function contactShadow(parent, size) {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0.85 })
    );
    m.rotation.x = -Math.PI / 2;
    m.position.y = 0.006;
    m.scale.set(size, size, 1);
    m.renderOrder = 4;
    parent.add(m);
    return m;
  }

  // Reflejos: copias en espejo bajo el suelo, que siguen a los originales
  const mirror = new THREE.Group();
  mirror.scale.y = -1;
  scene.add(mirror);
  const pairs = [];
  // El reflejo se ve a través del suelo, muy atenuado: basta una copia sin iluminación de cada material
  const twins = new Map();
  function twinOf(m) {
    if (m.isMeshBasicMaterial) return m;
    let t = twins.get(m);
    if (!t) {
      t = new THREE.MeshBasicMaterial({
        map: m.map || null,
        color: m.color ? m.color.clone().multiplyScalar(0.8) : new THREE.Color(0xcccccc),
        transparent: m.transparent,
        opacity: m.opacity,
        side: m.side,
        alphaTest: m.alphaTest,
      });
      twins.set(m, t);
    }
    return t;
  }
  function reflect(root, cheap = null) {
    const copy = root.clone();
    copy.traverse((o) => {
      if (!o.isMesh) return;
      o.material = cheap || (Array.isArray(o.material) ? o.material.map(twinOf) : twinOf(o.material));
    });
    // las piezas con instancias comparten su posición con el original
    const src = [];
    const dst = [];
    root.traverse((o) => src.push(o));
    copy.traverse((o) => dst.push(o));
    for (let i = 0; i < src.length; i++) {
      if (src[i].isInstancedMesh) dst[i].instanceMatrix = src[i].instanceMatrix;
    }
    mirror.add(copy);
    pairs.push([src, dst]);
    return copy;
  }
  function syncReflections() {
    for (let k = 0; k < pairs.length; k++) {
      const [src, dst] = pairs[k];
      if (!src[0].visible) {
        dst[0].visible = false;
        continue;
      }
      for (let i = 0; i < src.length; i++) {
        const a = src[i];
        const b = dst[i];
        b.position.copy(a.position);
        b.quaternion.copy(a.quaternion);
        b.scale.copy(a.scale);
        b.visible = a.visible;
        if (a.isInstancedMesh) b.count = a.count;
      }
    }
  }

  // ---------- Las cinco letras ----------
  function letterGeometry(ch) {
    const glyph = LETRAS.glyphs[ch];
    const path = new THREE.ShapePath();
    for (const c of glyph.d) {
      if (c[0] === 'M') path.moveTo(c[1] * LS, c[2] * LS);
      else if (c[0] === 'L') path.lineTo(c[1] * LS, c[2] * LS);
      else if (c[0] === 'Q') path.quadraticCurveTo(c[1] * LS, c[2] * LS, c[3] * LS, c[4] * LS);
      else if (c[0] === 'C') path.bezierCurveTo(c[1] * LS, c[2] * LS, c[3] * LS, c[4] * LS, c[5] * LS, c[6] * LS);
    }
    const bevel = 0.07;
    const geo = new THREE.ExtrudeGeometry(path.toShapes(false), {
      depth: LETTER_DEPTH,
      bevelEnabled: true,
      bevelThickness: bevel,
      bevelSize: bevel,
      bevelSegments: 2,
      curveSegments: LIGHT ? 8 : 12,
    });
    geo.translate((-glyph.adv * LS) / 2, 0, -(LETTER_DEPTH + bevel));
    return geo;
  }
  // Las letras ocupan media pantalla: se iluminan solo con los focos (sin consultar el entorno), con un brillo suave en el bisel
  const letterMat = new THREE.MeshPhongMaterial({
    color: 0x86091a,
    specular: 0x40161b,
    shininess: 20,
    emissive: 0xb00f22,
    emissiveIntensity: 0,
  });
  // un degradado de luz cenital (más claras arriba), como el que daba la caja de luz
  letterMat.onBeforeCompile = (sh) => {
    sh.vertexShader =
      'varying float vLetterY;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n  vLetterY = (modelMatrix * vec4(position, 1.0)).y;');
    sh.fragmentShader =
      'varying float vLetterY;\n' +
      sh.fragmentShader.replace(
        '#include <emissivemap_fragment>',
        '#include <emissivemap_fragment>\n  totalEmissiveRadiance += diffuseColor.rgb * (0.05 + 0.34 * smoothstep(0.0, 5.6, vLetterY));'
      );
  };
  const letters = new THREE.Group();
  WORD.split('').forEach((ch, i) => {
    const m = new THREE.Mesh(letterGeometry(ch), letterMat);
    m.position.set(X[i], 0, LETTER_Z);
    letters.add(m);
  });
  scene.add(letters);
  reflect(letters, new THREE.MeshLambertMaterial({ color: 0x6a0714 }));

  // ---------- Fruta de la serie Orange-Lemongras ----------
  function sliceTexture(peel, pith, pulp, line) {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 512;
    const g = c.getContext('2d');
    g.fillStyle = peel;
    g.beginPath();
    g.arc(256, 256, 256, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = pith;
    g.beginPath();
    g.arc(256, 256, 232, 0, Math.PI * 2);
    g.fill();
    for (let i = 0; i < 10; i++) {
      const a0 = (i / 10) * Math.PI * 2 + 0.05;
      const a1 = ((i + 1) / 10) * Math.PI * 2 - 0.05;
      const grad = g.createRadialGradient(256, 256, 20, 256, 256, 214);
      grad.addColorStop(0, pulp[0]);
      grad.addColorStop(1, pulp[1]);
      g.fillStyle = grad;
      g.beginPath();
      g.moveTo(256 + Math.cos((a0 + a1) / 2) * 16, 256 + Math.sin((a0 + a1) / 2) * 16);
      g.arc(256, 256, 214, a0, a1);
      g.closePath();
      g.fill();
      g.strokeStyle = line;
      g.lineWidth = 2;
      for (let k = 1; k < 4; k++) {
        const a = a0 + ((a1 - a0) * k) / 4;
        g.beginPath();
        g.moveTo(256 + Math.cos(a) * 60, 256 + Math.sin(a) * 60);
        g.lineTo(256 + Math.cos(a) * 200, 256 + Math.sin(a) * 200);
        g.stroke();
      }
    }
    return c;
  }
  const orangeTex = canvasTex(sliceTexture('#F28C13', '#FFE7B8', ['#FFC766', '#F79A12'], 'rgba(255,255,255,0.35)'));
  const limeTex = canvasTex(sliceTexture('#6FA82A', '#EAF5C8', ['#D6EE8E', '#93C63A'], 'rgba(255,255,255,0.4)'));
  const sliceGeo = new THREE.CylinderGeometry(1, 1, 0.16, 64);
  const dropGeo = new THREE.SphereGeometry(1, 20, 14);
  const dropMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.03, metalness: 0, transparent: true, opacity: 0.55, envMapIntensity: 2 });

  function fruit(drops = LIGHT ? 8 : 14) {
    const g = new THREE.Group();
    const slice = (tex, peel) => {
      const face = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.24 });
      const rindM = new THREE.MeshStandardMaterial({ color: peel, roughness: 0.42 });
      const m = new THREE.Mesh(sliceGeo, [rindM, face, face]);
      g.add(m);
      return m;
    };
    const orange = slice(orangeTex, 0xf28c13);
    const lime = slice(limeTex, 0x6fa82a);
    const beads = new THREE.InstancedMesh(dropGeo, dropMat, drops);
    beads.frustumCulled = false;
    g.add(beads);
    return { group: g, orange, lime, beads, drops };
  }
  const dummy = new THREE.Object3D();
  // La fruta flota alrededor de un punto (cx, cy), siempre del lado del envase y lejos del texto
  function animateFruit(f, time, amount, cx, cy, spread = 1, size = 1) {
    f.group.visible = amount > 0.01;
    if (!f.group.visible) return;
    const a = time * 0.35;
    f.orange.position.set(cx + Math.cos(a) * 1.25 * spread, cy + 0.55 + Math.sin(time * 0.6) * 0.16, -1.0 + Math.sin(a) * 0.45);
    f.orange.rotation.set(Math.PI / 2 + Math.sin(time * 0.4) * 0.3, time * 0.3, 0.3);
    f.orange.scale.setScalar(0.56 * amount * size);
    f.lime.position.set(cx + Math.cos(a + 2.6) * 1.45 * spread, cy - 0.2 + Math.sin(time * 0.5 + 1) * 0.18, -0.7 + Math.sin(a + 2.6) * 0.5);
    f.lime.rotation.set(Math.PI / 2 - 0.35 + Math.sin(time * 0.33) * 0.25, -time * 0.25, -0.2);
    f.lime.scale.setScalar(0.45 * amount * size);
    for (let i = 0; i < f.drops; i++) {
      const ang = rand(i, 1) * Math.PI * 2 + time * (0.15 + rand(i, 2) * 0.25);
      const rad = (0.9 + rand(i, 3) * 1.1) * spread;
      dummy.position.set(cx + Math.cos(ang) * rad, cy - 0.7 + rand(i, 4) * 1.9 + Math.sin(time * 0.7 + i) * 0.12, -0.8 + Math.sin(ang) * 0.8);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.setScalar((0.03 + rand(i, 5) * 0.055) * amount);
      dummy.updateMatrix();
      f.beads.setMatrixAt(i, dummy.matrix);
    }
    f.beads.instanceMatrix.needsUpdate = true;
  }

  // Un hilo de materia (crema, espuma) entre dos puntos, curvado como una caída real
  function makeStrand(material, rings = 18, sides = 10) {
    const geo = new THREE.BufferGeometry();
    const count = (rings + 1) * (sides + 1);
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    const idx = [];
    for (let i = 0; i < rings; i++) {
      for (let j = 0; j < sides; j++) {
        const a = i * (sides + 1) + j;
        const b = a + sides + 1;
        idx.push(a, a + 1, b, a + 1, b + 1, b);
      }
    }
    geo.setIndex(idx);
    const mesh = new THREE.Mesh(geo, material);
    mesh.frustumCulled = false;
    return { mesh, geo, rings, sides };
  }
  const sp = new THREE.Vector3();
  const st = new THREE.Vector3();
  const sn = new THREE.Vector3();
  const sb = new THREE.Vector3();
  const zRef = new THREE.Vector3(0, 0, 1);
  function updateStrand(S, p0, p1, p2, r0, r1) {
    const pos = S.geo.attributes.position;
    const nor = S.geo.attributes.normal;
    for (let i = 0; i <= S.rings; i++) {
      const t = i / S.rings;
      const u = 1 - t;
      sp.set(u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x, u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y, u * u * p0.z + 2 * u * t * p1.z + t * t * p2.z);
      st.set(u * (p1.x - p0.x) + t * (p2.x - p1.x), u * (p1.y - p0.y) + t * (p2.y - p1.y), u * (p1.z - p0.z) + t * (p2.z - p1.z)).normalize();
      sn.crossVectors(st, zRef);
      if (sn.lengthSq() < 1e-6) sn.set(1, 0, 0);
      sn.normalize();
      sb.crossVectors(st, sn).normalize();
      const r = lerp(r0, r1, t);
      for (let j = 0; j <= S.sides; j++) {
        const a = (j / S.sides) * Math.PI * 2;
        const c = Math.cos(a);
        const s = Math.sin(a);
        const k = i * (S.sides + 1) + j;
        const nx = sn.x * c + sb.x * s;
        const ny = sn.y * c + sb.y * s;
        const nz = sn.z * c + sb.z * s;
        pos.setXYZ(k, sp.x + nx * r, sp.y + ny * r, sp.z + nz * r);
        nor.setXYZ(k, nx, ny, nz);
      }
    }
    pos.needsUpdate = true;
    nor.needsUpdate = true;
  }

  // ---------- Conjunto de los cinco envases (principio) ----------
  const cluster = new THREE.Group();
  const clusterItems = [
    [P.buildBottle(), -1.15, -0.95, 0.12, 1.7],
    [P.buildBox(), 0.8, -1.3, -0.2, 1.7],
    [P.buildTube(), -0.05, 0.3, 0.12, 1.7],
    [P.buildCan(), 1.3, 0.6, -0.2, 1.7],
    [P.buildJar(), -1.3, 1.15, 0.2, 2.4],
  ];
  clusterItems.forEach(([item, x, z, ry, shadow]) => {
    item.group.position.set(x, 0, z);
    item.group.rotation.y = ry;
    contactShadow(item.group, shadow);
    cluster.add(item.group);
  });
  const clusterFruit = fruit();
  cluster.add(clusterFruit.group);
  cluster.position.x = XH;
  scene.add(cluster);
  reflect(cluster);

  // ---------- Paso 1: baño de pies ----------
  const s0 = new THREE.Group();
  s0.position.x = X[0];
  const BOWL = new THREE.Vector3(0.95, 0, 0.25);
  const bottle = P.buildBottle();
  bottle.group.position.set(-1.45, 0, -0.35);
  // el dosificador apunta al centro del cuenco
  bottle.group.rotation.y = -Math.atan2(BOWL.z + 0.35, BOWL.x + 1.45);
  contactShadow(bottle.group, 2);
  s0.add(bottle.group);
  const V2 = (x, y) => new THREE.Vector2(x, y);
  const bowl = new THREE.Mesh(
    new THREE.LatheGeometry(
      [V2(0.001, 0.0), V2(1.15, 0.0), V2(1.3, 0.04), V2(1.76, 0.72), V2(1.8, 0.79), V2(1.79, 0.83), V2(1.75, 0.85), V2(1.71, 0.83), V2(1.69, 0.78), V2(1.22, 0.14), V2(0.001, 0.12)],
      128
    ),
    new THREE.MeshStandardMaterial({ color: 0xfaf9f6, roughness: 0.09, envMapIntensity: 1.15, side: THREE.DoubleSide })
  );
  const bowlGroup = new THREE.Group();
  bowlGroup.position.copy(BOWL);
  bowlGroup.add(bowl);
  contactShadow(bowlGroup, 5.4);
  s0.add(bowlGroup);

  // Gotas que saltan cuando el producto cae al agua
  const liquidMat = new THREE.MeshStandardMaterial({ color: 0xf2fdfc, roughness: 0.04, transparent: true, opacity: 0.86, envMapIntensity: 2 });
  const PRESS = [0.1, 0.36, 0.62];
  const SPLASH = LIGHT ? 6 : 9;
  const splash = new THREE.InstancedMesh(dropGeo, liquidMat, PRESS.length * SPLASH);
  splash.frustumCulled = false;
  s0.add(splash);
  scene.add(s0);
  reflect(s0);

  // Agua: superficie con ondas que nacen donde cae el producto
  const WATER_Y = 0.6;
  const DROP = new THREE.Vector2(-0.873, -0.218);
  const uTime = { value: 0 };
  const uAmp = { value: 0 };
  const uDrop = { value: DROP };
  const waterGeo = new THREE.RingGeometry(0.001, 1.62, 96, LIGHT ? 28 : 44);
  waterGeo.rotateX(-Math.PI / 2);
  // más profunda en el centro, casi transparente en el borde
  const waterMat = new THREE.MeshStandardMaterial({
    map: canvasTex(radial([[0, '#6fc3cb'], [0.55, '#9ad8dc'], [0.9, '#d2f0ef'], [1, '#e6f8f6']])),
    roughness: 0.02,
    metalness: 0,
    transparent: true,
    opacity: 0.88,
    envMapIntensity: 2.6,
  });
  waterMat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = uTime;
    sh.uniforms.uAmp = uAmp;
    sh.uniforms.uDrop = uDrop;
    sh.vertexShader =
      'uniform float uTime;\nuniform float uAmp;\nuniform vec2 uDrop;\n' +
      sh.vertexShader
        .replace(
          '#include <beginnormal_vertex>',
          `float wr = distance(position.xz, uDrop);
           float wenv = uAmp * exp(-wr * 0.8);
           float wph = 9.0 * wr - 5.5 * uTime;
           float wdh = wenv * (9.0 * cos(wph) - 0.8 * sin(wph));
           vec2 wdir = wr > 0.0001 ? (position.xz - uDrop) / wr : vec2(0.0);
           float wamb = 0.013;
           vec3 objectNormal = normalize(vec3(
             -wdh * wdir.x - wamb * 3.0 * cos(position.x * 3.0 + uTime),
             1.0,
             -wdh * wdir.y - wamb * 2.6 * cos(position.z * 2.6 - uTime * 1.3)));`
        )
        .replace(
          '#include <begin_vertex>',
          `vec3 transformed = vec3(position);
           transformed.y += wenv * sin(wph) + wamb * (sin(position.x * 3.0 + uTime) + sin(position.z * 2.6 - uTime * 1.3));`
        );
  };
  const water = new THREE.Mesh(waterGeo, waterMat);
  water.position.set(X[0] + BOWL.x, WATER_Y, BOWL.z);
  water.renderOrder = 5;
  scene.add(water);

  // El chorro del dosificador: una dosis que viaja en arco hasta el agua
  s0.updateMatrixWorld(true);
  const pourFrom = bottle.pivot.localToWorld(bottle.nozzle.clone());
  const pourTo = new THREE.Vector3(X[0] + BOWL.x + DROP.x, WATER_Y + 0.02, BOWL.z + DROP.y);
  const pourCurve = new THREE.QuadraticBezierCurve3(pourFrom, new THREE.Vector3(lerp(pourFrom.x, pourTo.x, 0.55), pourFrom.y + 0.02, lerp(pourFrom.z, pourTo.z, 0.55)), pourTo);
  const DOSE = LIGHT ? 8 : 11;
  const pour = new THREE.InstancedMesh(dropGeo, liquidMat, DOSE);
  pour.frustumCulled = false;
  scene.add(pour);

  // Vapor suave sobre el agua templada
  const steamTex = canvasTex(radial([[0, 'rgba(255,255,255,0.55)'], [0.45, 'rgba(255,255,255,0.2)'], [1, 'rgba(255,255,255,0)']]));
  const STEAM = LIGHT ? 4 : 6;
  const steam = [];
  for (let i = 0; i < STEAM; i++) {
    const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: steamTex, transparent: true, depthWrite: false, opacity: 0 }));
    m.renderOrder = 6;
    scene.add(m);
    steam.push(m);
  }

  // ---------- Paso 2: exfoliación ----------
  const s1 = new THREE.Group();
  s1.position.x = X[1];
  const JAR_SCALE = 1.45;
  const jar = P.buildJar();
  jar.group.scale.setScalar(JAR_SCALE);
  contactShadow(jar.group, 2.5);
  s1.add(jar.group);
  const grain = (() => {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const g = c.getContext('2d');
    g.fillStyle = '#7a7a7a';
    g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2200; i++) {
      const v = Math.floor(70 + rand(i, 21) * 170);
      g.fillStyle = `rgba(${v},${v},${v},0.7)`;
      const r = 0.8 + rand(i, 22) * 2.6;
      g.fillRect(rand(i, 23) * 256, rand(i, 24) * 256, r, r);
    }
    const t = canvasTex(c, false);
    t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(3, 3);
    return t;
  })();
  jar.paste.material.bumpMap = grain;
  jar.paste.material.bumpScale = 1.4;
  const CRYSTALS = LIGHT ? 160 : 360;
  const crystalMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.07,
    metalness: 0,
    envMapIntensity: 2.4,
    flatShading: true,
  });
  // cristal de sal: un poliedro irregular, no un cubo perfecto
  const crystalGeo = new THREE.IcosahedronGeometry(1, 0);
  {
    const cp = crystalGeo.attributes.position;
    for (let i = 0; i < cp.count; i++) {
      const x = cp.getX(i);
      const y = cp.getY(i);
      const z = cp.getZ(i);
      const h = rand(Math.round(x * 10) * 7 + Math.round(y * 10) * 13 + Math.round(z * 10) * 29, 51);
      const k = 0.6 + 0.62 * h;
      cp.setXYZ(i, x * k, y * k * 0.85, z * k);
    }
    crystalGeo.computeVertexNormals();
  }
  const crystals = new THREE.InstancedMesh(crystalGeo, crystalMat, CRYSTALS);
  crystals.frustumCulled = false;
  {
    const tint = new THREE.Color();
    for (let i = 0; i < CRYSTALS; i++) {
      tint.setHSL(0.5 + rand(i, 31) * 0.06, 0.25 * rand(i, 32), 0.9 + rand(i, 33) * 0.1);
      crystals.setColorAt(i, tint);
    }
  }
  s1.add(crystals);
  scene.add(s1);
  reflect(s1);

  // ---------- Paso 3: mascarilla ----------
  const s2 = new THREE.Group();
  s2.position.x = X[2];
  const box = P.buildBox();
  // la caja se coloca delante del asta de la E, para que sus tres brazos se vean al lado
  const BOX_X = -1.5;
  box.group.position.set(BOX_X, 0, 0);
  contactShadow(box.group, 3);
  s2.add(box.group);
  // solapa de la caja
  const flap = new THREE.Group();
  flap.position.set(0, SIZE.box + 0.004, -box.depth / 2);
  const flapMesh = new THREE.Mesh(new THREE.PlaneGeometry(box.width, box.depth), plastic({ roughness: 0.55, clearcoat: 0.15, side: THREE.DoubleSide }));
  flapMesh.rotation.x = -Math.PI / 2;
  flapMesh.position.z = box.depth / 2;
  flap.add(flapMesh);
  box.group.add(flap);
  // los cinco sobres del pack
  const SACHETS = 5;
  const FAN_Y = SIZE.box + 0.1;
  const sachets = [];
  for (let k = 0; k < SACHETS; k++) {
    const pivot = new THREE.Group();
    pivot.position.set(0, FAN_Y, (k - 2) * 0.055);
    const sa = P.buildSachet();
    pivot.add(sa.group);
    box.group.add(pivot);
    sachets.push({ pivot, group: sa.group, k });
  }
  const fruit2 = fruit();
  s2.add(fruit2.group);
  scene.add(s2);
  reflect(s2);

  // ---------- Paso 4: crema ----------
  const s3 = new THREE.Group();
  s3.position.x = X[3];
  const tube = P.buildTube();
  tube.group.position.set(0.35, 0, 0);
  const tubeShadow = contactShadow(s3, 1.7);
  s3.add(tube.group);
  const creamMat = new THREE.MeshStandardMaterial({ color: 0xfff4e2, roughness: 0.33 });
  const CREAM_X = 0.35 + 0.6;
  const coilPts = [];
  const TURNS = 3.6;
  for (let i = 0; i <= 240; i++) {
    const t = i / 240;
    const ang = t * TURNS * Math.PI * 2;
    const rad = lerp(0.47, 0.035, Math.pow(t, 0.85));
    coilPts.push(new THREE.Vector3(CREAM_X + Math.cos(ang) * rad, 0.09 + t * 0.66 + Math.pow(t, 6) * 0.12, 0.15 + Math.sin(ang) * rad));
  }
  const coilCurve = new THREE.CatmullRomCurve3(coilPts);
  const COIL_SEG = 280;
  const COIL_RAD = 12;
  const coilGeo = new THREE.TubeGeometry(coilCurve, COIL_SEG, 0.09, COIL_RAD);
  const coil = new THREE.Mesh(coilGeo, creamMat);
  coil.frustumCulled = false;
  s3.add(coil);
  const coilShadow = contactShadow(s3, 1.6);
  coilShadow.position.set(CREAM_X, 0.006, 0.15);
  const strand = makeStrand(creamMat, 20, 12);
  s3.add(strand.mesh);
  const fruit3 = fruit();
  s3.add(fruit3.group);
  scene.add(s3);
  reflect(s3);

  // ---------- Paso 5: crema en espuma ----------
  const s4 = new THREE.Group();
  s4.position.x = X[4];
  const can = P.buildCan();
  can.group.position.set(0, 0, 0);
  const canShadow = contactShadow(s4, 1.8);
  s4.add(can.group);
  const foamBump = (() => {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const g = c.getContext('2d');
    g.fillStyle = '#808080';
    g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 1500; i++) {
      const v = Math.floor(90 + rand(i, 12) * 120);
      g.fillStyle = `rgba(${v},${v},${v},0.5)`;
      g.beginPath();
      g.arc(rand(i, 13) * 256, rand(i, 14) * 256, 1.5 + rand(i, 15) * 5, 0, Math.PI * 2);
      g.fill();
    }
    const t = canvasTex(c, false);
    t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(4, 3);
    return t;
  })();
  const foamMat = new THREE.MeshPhysicalMaterial({ color: 0xfffdf9, roughness: 0.9, sheen: 1, sheenRoughness: 0.5, sheenColor: 0xffffff, bumpMap: foamBump, bumpScale: 0.5, envMapIntensity: 0.6 });
  const foam = new THREE.Group();
  {
    const v = new THREE.Vector3();
    const lump = (radius, x, y, z, seed) => {
      const g = new THREE.SphereGeometry(1, LIGHT ? 36 : 56, LIGHT ? 24 : 40);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        v.fromBufferAttribute(p, i);
        let n = 0;
        for (let k = 0; k < 5; k++) {
          n += (Math.sin(v.x * (2.2 + k) + seed * 1.7 + k) * Math.cos(v.y * (1.9 + k * 0.8) + seed + k * 2.1) * Math.sin(v.z * (2.4 + k * 0.6) + seed * 0.6)) / (1.3 + k * 0.7);
        }
        v.multiplyScalar(1 + n * 0.07);
        p.setXYZ(i, v.x, v.y, v.z);
      }
      g.computeVertexNormals();
      const m = new THREE.Mesh(g, foamMat);
      m.scale.setScalar(radius);
      m.position.set(x, y, z);
      m.rotation.set(seed, seed * 2.3, seed * 0.7);
      foam.add(m);
    };
    lump(0.84, 0, -0.18, 0, 1);
    lump(0.58, 0.5, -0.04, 0.22, 2);
    lump(0.54, -0.52, 0.0, 0.18, 3);
    lump(0.52, 0.08, 0.04, 0.52, 4);
    lump(0.5, -0.06, 0.02, -0.5, 5);
    lump(0.52, 0.27, 0.4, 0.1, 6);
    lump(0.46, -0.25, 0.48, 0.06, 7);
    lump(0.38, 0.03, 0.78, 0.04, 8);
    lump(0.22, 0.05, 1.07, 0.02, 9);
  }
  s4.add(foam);
  const foamShadow = contactShadow(s4, 2);
  const stream = makeStrand(foamMat, 16, 12);
  s4.add(stream.mesh);
  const BUBBLES = LIGHT ? 12 : 22;
  const bubbles = new THREE.InstancedMesh(dropGeo, foamMat, BUBBLES);
  bubbles.frustumCulled = false;
  s4.add(bubbles);
  const fruit4 = fruit();
  s4.add(fruit4.group);
  scene.add(s4);
  reflect(s4);

  const TILT = 1.15;
  const LIFT = 0.5;
  const FOAM_SIZE = 0.62;

  // Velocidad máxima de la película, en fracción del recorrido por segundo: un paso tarda al menos 0,7 s
  const PIXELS_MAX = 2.3e6;
  const MAX_SPEED = 0.22;
  // Rigidez del muelle que sigue al scroll (1/s): más alto, más pegado al dedo; más bajo, más suave
  const SPRING = 10.5;

  // ---------- Encuadre ----------
  let W = 1;
  let H = 1;
  let tall = false;
  let wdthBase = 125;
  let keys = shots(false);
  const TAN = Math.tan(THREE.MathUtils.degToRad(FOV / 2));

  function layout(w, h) {
    W = w;
    H = h;
    tall = w / h < 0.85;
    camera.aspect = w / h;
    keys = shots(tall);
    fitHero();
  }

  // En vertical la cápsula empieza justo debajo del texto del hero. En un teléfono real la ventana es más baja
  // que en el ensayo (barra de Safari) y con una altura fija la cápsula pisaba los botones.
  function fitHero() {
    const cta = hero?.querySelector('.hero__cta') || hero;
    if (!cta) return;
    if (!tall) {
      sticky.style.removeProperty('--n-top');
      return;
    }
    let bottom = cta.offsetHeight;
    for (let el = cta; el && el !== sticky; el = el.offsetParent) bottom += el.offsetTop;
    const top = Math.max(H * 0.53, bottom + 18);
    sticky.style.setProperty('--n-top', `${Math.round(top)}px`);
    // el encuadre inicial sigue a la cápsula: su centro es el centro del grupo de productos
    const centre = (top + H * 0.97) / 2 / H;
    keys[0][1].sy = centre - 0.5;
    // y si la cápsula queda más baja de lo previsto (44 % del alto), los productos se encogen con ella
    keys[0][1].hf = 0.25 * Math.min(1, (H * 0.97 - top) / (H * 0.44));
    paths.delete(keys);
  }

  // Resolución: como mucho 1,5 píxeles por punto; si el equipo no llega, baja sola (ver el bucle)
  const DPR_MAX = Math.min(window.devicePixelRatio || 1, MODEST ? 1 : 1.5);
  let dpr = DPR_MAX;
  let dprFixed = false;
  // Solo se rehace el lienzo si su tamaño cambia de verdad. En el móvil la barra de Safari sube y baja al
  // desplazarse y cada vez llegaba un aviso de cambio de tamaño: rehacer el lienzo ahí era un tirón seguro.
  const sized = { w: 0, h: 0, dpr: 0 };
  function resize(force = false) {
    const w = sticky.clientWidth;
    const h = sticky.clientHeight;
    measure();
    if (!force && w === sized.w && h === sized.h && dpr === sized.dpr) return;
    sized.w = w;
    sized.h = h;
    sized.dpr = dpr;
    // tope de píxeles: en una pantalla grande de alta densidad no se dibuja más de lo que cabe en 1920 x 1200
    renderer.setPixelRatio(Math.min(dpr, Math.sqrt(PIXELS_MAX / Math.max(1, w * h))));
    renderer.setSize(w, h, false);
    layout(w, h);
    wdthBase = parseFloat(getComputedStyle(sticky).getPropertyValue('--wdth-base')) || 125;
  }
  // las letras cambian el alto del texto del hero: se vuelve a medir cuando han cargado
  document.fonts?.ready.then(() => fitHero());

  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  if (window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('pointermove', (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    });
  }

  // Arrastrar para girar el envase del paso en el que estás
  const drag = { on: false, x: 0, rot: 0, vel: 0 };
  sticky.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a,button,input')) return;
    drag.on = true;
    drag.x = e.clientX;
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
  window.addEventListener('baehr:modo', () => {
    drag.vel += 0.377;
  });

  function frameCamera(s, parallax = 1, wide = 0) {
    // en pantallas más cuadradas o más estrechas la cámara se aleja un poco para que quepa el mismo encuadre;
    // en el plano final manda el ancho: cuanto más ancha la pantalla, más cerca
    const fit = tall
      ? Math.min(lerp(1.12, 1.6, wide), Math.max(0.84, camera.aspect / 0.46))
      : Math.min(lerp(1, 1.3, wide), Math.max(0.74, camera.aspect / 1.55));
    const hf = s.hf * fit;
    const d = REF_H / (2 * TAN * hf);
    const az = s.az + pointer.sx * 0.1 * parallax;
    const el = Math.max(0.03, s.el - pointer.sy * 0.035 * parallax);
    camera.position.set(s.t[0] + Math.sin(az) * Math.cos(el) * d, s.t[1] + Math.sin(el) * d, s.t[2] + Math.cos(az) * Math.cos(el) * d);
    camera.lookAt(s.t[0], s.t[1], s.t[2]);
    camera.setViewOffset(W, H, -s.sx * W, -s.sy * H, W, H);
    scene.fog.near = d + 4;
    scene.fog.far = d + 34 + d * 0.5;
    return d;
  }

  const v1 = new THREE.Vector3();
  const v2 = new THREE.Vector3();
  const v3 = new THREE.Vector3();
  const v4 = new THREE.Vector3();
  const upV = new THREE.Vector3(0, 1, 0);

  // Escribir una variable CSS solo cuando cambia: cada escritura obliga al navegador a recalcular estilos
  const written = new WeakMap();
  function setVar(el, name, value) {
    let c = written.get(el);
    if (!c) written.set(el, (c = {}));
    if (c[name] === value) return;
    c[name] = value;
    el.style.setProperty(name, value);
  }

  let stepsOn = false;
  let wasOpen = false;
  let activeStep = -2;
  function setStep(i) {
    if (i === activeStep) return;
    activeStep = i;
    stepButtons.forEach((b, k) => b.setAttribute('aria-current', k === i ? 'step' : 'false'));
    if (stepper) setVar(stepper, '--step', String(Math.max(0, i)));
  }

  let lastQ1 = -1;

  // Cada paso aparece cuando llega la cámara y se retira cuando se va; en el plano final vuelven los cinco, uno tras otro
  function presence(i, p) {
    const [a, b] = RANGE[i];
    const arrive = back(seg(p, a - 0.03, a + 0.002));
    const leave = i === 4 ? 1 : 1 - ease(seg(p, b + 0.012, b + 0.04));
    const again = i === 4 ? 0 : back(seg(p, REVEAL + 0.015 + (3 - i) * 0.012, REVEAL + 0.047 + (3 - i) * 0.012));
    return Math.max(Math.min(arrive, leave), again);
  }

  function apply(p, time, intro = 1) {
    const io = 1 - Math.pow(1 - intro, 3);
    setVar(sticky, '--intro', io.toFixed(3));

    // ----- Capas HTML -----
    const open = ease(seg(p, 0.012, 0.075));
    const heroOut = seg(p, 0.016, 0.062);
    setVar(sticky, '--k', (1 - open).toFixed(3));
    // a pantalla completa el recorte sobra: sobre un lienzo 3D obliga al navegador a componer cada imagen por el camino lento
    const isOpen = open >= 1;
    if (isOpen !== wasOpen) {
      wasOpen = isOpen;
      sticky.classList.toggle('is-open', isOpen);
    }
    setVar(sticky, '--hero-out', heroOut.toFixed(3));
    // en vertical el título no se estrecha al abrir: recolocar el texto en cada imagen cuesta fluidez en el móvil
    setVar(sticky, '--wdth', (tall ? wdthBase : lerp(wdthBase, 64, ease(seg(p, 0, 0.07)))).toFixed(0));
    setVar(sticky, '--flash', ease(seg(p, 0.99, 1)).toFixed(3));
    const stepsO = Math.min(seg(p, RANGE[0][0] - 0.02, RANGE[0][0] + 0.005), 1 - seg(p, FIN[0] - 0.025, FIN[0] - 0.005));
    setVar(sticky, '--steps-o', stepsO.toFixed(3));
    if (stepsOn !== stepsO > 0.4) {
      stepsOn = stepsO > 0.4;
      sticky.classList.toggle('has-steps', stepsOn);
    }
    hero?.classList.toggle('is-gone', heroOut > 0.6);

    let current = -1;
    for (let i = 0; i < chapters.length; i++) {
      const [a, b] = RANGE[i];
      const v = Math.min(ease(seg(p, a + 0.004, a + 0.032)), 1 - ease(seg(p, b - 0.016, b + 0.006)));
      setVar(chapters[i], '--v', v.toFixed(3));
      chapters[i].classList.toggle('is-on', v > 0.01);
      if (p >= a - 0.02 && p <= b + 0.015) current = i;
    }
    setStep(current);
    if (finale) {
      const v = ease(seg(p, FIN[0] + 0.012, FIN[0] + 0.045));
      setVar(finale, '--v', v.toFixed(3));
      finale.classList.toggle('is-on', v > 0.01);
    }

    const onScreen = film.getBoundingClientRect().bottom > 90;
    const theme = onScreen && open > 0.6 && p < 0.994 ? 'red' : 'light';
    if (header && header.dataset.theme !== theme) header.dataset.theme = theme;

    // ----- Cámara y luz -----
    pointer.sx += (pointer.x - pointer.sx) * 0.05;
    pointer.sy += (pointer.y - pointer.sy) * 0.05;
    if (!drag.on) {
      drag.rot += drag.vel;
      drag.vel *= 0.94;
    }
    const s = shotAt(p, keys);
    const wide = ease(seg(p, REVEAL, FIN[0] + 0.03));
    const d = frameCamera(s, 1, wide);

    key.position.set(s.t[0] + 6, 8 + wide * 10, 5.5 + wide * 6);
    key.target.position.set(s.t[0], 0.6, 0);
    rim.position.set(s.t[0] - 6, 4.5, -6);
    rim.target.position.set(s.t[0], 1.2, 0);
    floorLight();
    // en el plano final las letras se encienden: la marca aparece
    letterMat.emissiveIntensity = 0.5 * wide;
    scene.environmentRotation.y = Math.sin(time * 0.22) * 0.4 + p * 6 + pointer.sx * 0.25;
    uGlow.value.set(s.t[0], 6.5, -14);
    uGlowSize.value.set(lerp(20, 55, wide), lerp(9, 20, wide));
    uPool.value.set(s.t[0], 0, lerp(7.5, 30, wide), lerp(5, 11, wide));
    uTime.value = time;

    // ----- Conjunto del principio -----
    cluster.visible = p < RANGE[0][0] + 0.04;
    if (cluster.visible) {
      cluster.scale.setScalar(lerp(0.7, 1, io));
      cluster.rotation.y = -(1 - io) * 0.9 + Math.sin(time * 0.3) * 0.02;
      animateFruit(clusterFruit, time, io, 0, 2.7, 1.3);
    }

    const reveal = p > REVEAL;
    const k0 = presence(0, p);
    const k1 = presence(1, p);
    const k2 = presence(2, p);
    const k3 = presence(3, p);
    const k4 = presence(4, p);

    // ----- Paso 1: baño de pies -----
    const q0 = seg(p, RANGE[0][0], RANGE[0][1]);
    s0.visible = k0 > 0.001;
    s0.scale.setScalar(k0);
    water.visible = s0.visible;
    water.position.set(X[0] + BOWL.x * k0, WATER_Y * k0, BOWL.z * k0);
    water.scale.setScalar(k0);
    let slugA = 0;
    let slugB = 0;
    if (s0.visible) {
      let press = 0;
      let amp = 0;
      for (let j = 0; j < PRESS.length; j++) {
        const t0 = PRESS[j];
        press = Math.max(press, pulse(q0, t0, t0 + 0.15, 0.04));
        const head = seg(q0, t0 + 0.03, t0 + 0.12);
        const tail = seg(q0, t0 + 0.1, t0 + 0.19);
        if (head > 0 && tail < 1) {
          slugA = tail;
          slugB = head;
        }
        const since = (q0 - (t0 + 0.115)) / 0.24;
        if (since > 0) amp = Math.max(amp, Math.exp(-since * 2.4) * Math.min(1, since / 0.06));
        // gotas del impacto
        const sq = (q0 - (t0 + 0.115)) / 0.13;
        for (let k = 0; k < SPLASH; k++) {
          const n = j * SPLASH + k;
          const live = sq > 0 && sq < 1;
          const ang = rand(n, 41) * Math.PI * 2;
          const reach = (0.25 + rand(n, 42) * 0.55) * (live ? sq : 0);
          const high = 0.35 + rand(n, 43) * 0.75;
          const size = live ? (0.028 + rand(n, 44) * 0.04) * Math.sqrt(Math.sin(Math.PI * sq)) : 0.0001;
          dummy.position.set(BOWL.x + DROP.x + Math.cos(ang) * reach, WATER_Y + 4 * high * sq * (1 - sq) * (live ? 1 : 0), BOWL.z + DROP.y + Math.sin(ang) * reach);
          dummy.rotation.set(0, 0, 0);
          dummy.scale.setScalar(size);
          dummy.updateMatrix();
          splash.setMatrixAt(n, dummy.matrix);
        }
      }
      splash.instanceMatrix.needsUpdate = true;
      bottle.pump.position.y = bottle.pumpY - 0.14 * press;
      uAmp.value = 0.01 + 0.085 * amp;
      // vapor
      const steamK = k0 > 0.98 ? (reveal ? 1 : seg(p, RANGE[0][0] - 0.01, RANGE[0][0] + 0.03)) : 0;
      for (let i = 0; i < steam.length; i++) {
        const age = (time * 0.11 + i / steam.length) % 1;
        const m = steam[i];
        m.visible = steamK > 0.01;
        m.position.set(X[0] + BOWL.x + Math.sin(i * 2.4 + time * 0.25) * 0.75, WATER_Y + 0.25 + age * 2.6, BOWL.z + Math.cos(i * 1.7) * 0.5);
        const sc = 0.9 + age * 1.9;
        m.scale.set(sc, sc * 1.25, 1);
        m.material.opacity = Math.sin(Math.PI * age) * 0.12 * steamK;
      }
    } else {
      for (let i = 0; i < steam.length; i++) steam[i].visible = false;
    }
    pour.visible = slugB > slugA + 0.01 && k0 > 0.99;
    if (pour.visible) {
      // la dosis: una fila de gotas alargadas, la primera más gruesa
      for (let k = 0; k < DOSE; k++) {
        const f = k / (DOSE - 1);
        const t = lerp(slugA, slugB, f);
        pourCurve.getPoint(t, v1);
        pourCurve.getTangent(t, v2);
        const r = 0.024 + 0.04 * f * f;
        dummy.position.copy(v1);
        dummy.quaternion.setFromUnitVectors(upV, v2);
        dummy.scale.set(r, r * (2.4 - f), r);
        dummy.updateMatrix();
        pour.setMatrixAt(k, dummy.matrix);
      }
      pour.instanceMatrix.needsUpdate = true;
    }

    // ----- Paso 2: exfoliación -----
    const q1 = seg(p, RANGE[1][0], RANGE[1][1]);
    s1.visible = k1 > 0.001;
    s1.scale.setScalar(k1);
    if (s1.visible) {
      const lift = ease(seg(q1, 0.03, 0.24));
      jar.lid.position.set((tall ? -0.16 : -0.58) * lift, jar.lidY + ((tall ? 0.92 : 0.8) + Math.sin(time * 0.9) * 0.03) * lift, -0.42 * lift);
      jar.lid.rotation.set(0.32 * lift, 0, 0.5 * lift);
      jar.group.rotation.y = 0.1 + Math.sin(time * 0.3) * 0.04 + drag.rot;
      if (q1 !== lastQ1) {
        lastQ1 = q1;
        const mouthY = jar.mouthY * JAR_SCALE;
        const squeeze = tall ? 1 : 0.5;
        for (let i = 0; i < CRYSTALS; i++) {
          const start = 0.14 + rand(i, 1) * 0.5;
          const tau = clamp01((q1 - start) / 0.3);
          const te = 1 - (1 - tau) * (1 - tau);
          const th1 = rand(i, 2) * Math.PI * 2;
          const r1 = 1.3 + Math.pow(rand(i, 5), 1.5) * 1.5;
          const r0 = rand(i, 4) * 0.5;
          const ang = th1 - (1 - te) * (2.4 + rand(i, 3) * 2.6);
          const rad = lerp(r0, r1, te);
          const apex = 1.3 + rand(i, 6) * 1.7;
          const size = (0.016 + Math.pow(rand(i, 7), 2.4) * 0.05) * Math.min(1, tau * 9);
          const cx = Math.cos(ang);
          const side = cx > 0 ? lerp(1, squeeze, te) : 1;
          dummy.position.set(cx * rad * side, lerp(mouthY, size * 0.5, tau * tau) + apex * 4 * tau * (1 - tau) * 0.5, Math.sin(ang) * rad * 0.8 + 0.25 * te);
          dummy.rotation.set((1 - tau) * 9 * rand(i, 8) + rand(i, 9) * 0.5, (1 - tau) * 7 * rand(i, 10) + rand(i, 11) * 6, (1 - tau) * 5 * rand(i, 12));
          dummy.scale.set(size, size * (0.6 + rand(i, 13) * 0.7), size * (0.7 + rand(i, 14) * 0.6));
          dummy.updateMatrix();
          crystals.setMatrixAt(i, dummy.matrix);
        }
        crystals.instanceMatrix.needsUpdate = true;
      }
    }

    // ----- Paso 3: mascarilla -----
    const q2 = seg(p, RANGE[2][0], RANGE[2][1]);
    s2.visible = k2 > 0.001;
    s2.scale.setScalar(k2);
    if (s2.visible) {
      box.group.rotation.y = 0.1 + Math.sin(time * 0.3) * 0.03 + drag.rot * 0.6;
      flap.rotation.x = -1.95 * ease(seg(q2, 0.0, 0.12));
      // en el plano final el abanico se cierra a medias para dejar ver la letra
      const fan = ease(seg(q2, 0.38, 0.74)) * (1 - 0.72 * wide);
      for (let i = 0; i < SACHETS; i++) {
        const S = sachets[i];
        const k = S.k - 2;
        const rise = ease(seg(q2, 0.07 + i * 0.035, 0.36 + i * 0.035)) * (1 - 0.6 * wide);
        S.group.position.y = lerp(-(FAN_Y - 0.14), 0.05, rise) + fan * (0.26 - Math.abs(k) * 0.09);
        S.pivot.rotation.z = -k * 0.275 * fan + Math.sin(time * 0.6 + i) * 0.012 * fan;
        S.pivot.rotation.x = -0.06 * fan;
      }
      animateFruit(fruit2, time, ease(seg(q2, 0.5, 0.85)), BOX_X + (tall ? 0 : 0.2), tall ? 1.5 : 1.6, tall ? 1.5 : 2.1, 0.9);
    }

    // ----- Paso 4: crema -----
    const q3 = seg(p, RANGE[3][0], RANGE[3][1]);
    s3.visible = k3 > 0.001;
    s3.scale.setScalar(k3);
    if (s3.visible) {
      const lift = ease(seg(q3, 0.03, 0.26));
      tube.group.position.set(0.35 + 0.2 * lift, 1.05 * lift, 0.15 * lift);
      tube.group.rotation.y = 0.2 + Math.sin(time * 0.3) * 0.04 + drag.rot;
      tube.pivot.rotation.z = -0.32 * lift;
      tubeShadow.position.set(tube.group.position.x, 0.006, tube.group.position.z);
      tubeShadow.material.opacity = 0.85 * (1 - lift * 0.6);
      // la crema sale del tapón y forma una espiral
      const g = ease(seg(q3, 0.28, 0.86));
      const rings = Math.floor(g * COIL_SEG);
      coilGeo.setDrawRange(0, rings * COIL_RAD * 6);
      coil.visible = rings > 0;
      coilShadow.material.opacity = 0.75 * Math.min(1, g * 3);
      const flow = Math.min(seg(q3, 0.265, 0.3), 1 - seg(q3, 0.85, 0.89));
      strand.mesh.visible = flow > 0.02;
      if (strand.mesh.visible) {
        tube.group.updateMatrixWorld(true);
        v1.copy(tube.nozzle);
        tube.inner.localToWorld(v1);
        tube.pivot.getWorldPosition(v4);
        v4.subVectors(v1, v4).normalize();
        s3.worldToLocal(v1);
        coilCurve.getPoint(Math.min(0.999, g), v2);
        const len = v1.distanceTo(v2);
        v3.copy(v1).addScaledVector(v4, len * 0.42);
        updateStrand(strand, v1, v3, v2, 0.085 * flow, 0.088 * flow);
      }
      animateFruit(fruit3, time, ease(seg(q3, 0.0, 0.2)), tall ? 0.2 : -1.2, tall ? 1.9 : 2.5, tall ? 1.3 : 1, 0.9);
    }

    // ----- Paso 5: crema en espuma -----
    const q4 = seg(p, RANGE[4][0], RANGE[4][1]);
    s4.visible = k4 > 0.001;
    s4.scale.setScalar(k4);
    if (s4.visible) {
      const off = ease(seg(q4, 0.03, 0.2));
      can.cap.position.set(-1.6 * off, 2.4 * off - 1.2 * off * off, 0.5 * off);
      can.cap.rotation.set(1.6 * off, 0, 2.4 * off);
      can.cap.visible = off < 0.985;
      const u2 = ease(seg(q4, 0.14, 0.36));
      const press = Math.min(seg(q4, 0.36, 0.4), 1 - seg(q4, 0.86, 0.9));
      can.group.position.set(-0.12 * u2, LIFT * u2, 0);
      can.group.rotation.y = (-0.2 + Math.sin(time * 0.45 + 2) * 0.04 + drag.rot) * (1 - u2);
      can.pivot.rotation.z = -TILT * u2;
      can.head.position.y = can.headY - 0.05 * press;
      canShadow.position.set(can.group.position.x, 0.006, 0);
      canShadow.material.opacity = 0.85 * (1 - u2 * 0.7);

      const reach = ease(seg(q4, 0.4, 0.47));
      const f1 = ease(seg(q4, 0.45, 0.88));
      const fs = lerp(0.0001, FOAM_SIZE, f1);
      can.group.updateMatrixWorld(true);
      v1.copy(can.nozzle);
      can.pivot.localToWorld(v1);
      v4.set(0, can.nozzle.y, 0);
      can.pivot.localToWorld(v4);
      v4.subVectors(v1, v4).normalize();
      s4.worldToLocal(v1);
      foam.position.set(v1.x + 0.04, fs * 0.96, v1.z);
      foam.scale.setScalar(fs);
      foam.rotation.set(0, 0.5 + f1 * 0.9 + time * 0.05, 0);
      foam.visible = f1 > 0.001;
      foamShadow.position.set(foam.position.x, 0.006, foam.position.z);
      foamShadow.scale.set(3.4 * fs, 3.4 * fs, 1);
      foamShadow.material.opacity = 0.8 * f1;
      const flow = Math.min(seg(q4, 0.4, 0.44), 1 - seg(q4, 0.84, 0.89));
      stream.mesh.visible = flow > 0.01;
      if (stream.mesh.visible) {
        // el hilo de espuma baja desde la boquilla hasta la nube
        v2.set(foam.position.x, Math.max(0.03, foam.position.y + fs * 0.9), foam.position.z).lerp(v1, 1 - reach);
        v3.copy(v1).addScaledVector(v4, 0.2 * reach);
        v3.x += Math.sin(time * 3.1) * 0.02;
        updateStrand(stream, v1, v3, v2, 0.034 * flow, 0.056 * flow);
      }
      bubbles.visible = f1 > 0.02;
      if (bubbles.visible) {
        for (let i = 0; i < BUBBLES; i++) {
          const cycle = (time * (0.07 + (i % 5) * 0.012) + i * 0.137) % 1;
          const ang = i * 2.39996 + time * 0.15;
          const rad = (1.05 + (i % 6) * 0.26) * fs;
          const size = (0.045 + (i % 4) * 0.028) * fs * f1 * Math.sin(cycle * Math.PI);
          dummy.position.set(foam.position.x + Math.cos(ang) * rad, foam.position.y + (-0.6 + cycle * 3.1) * fs, foam.position.z + Math.sin(ang) * rad * 0.6);
          dummy.rotation.set(0, 0, 0);
          dummy.scale.setScalar(Math.max(size, 0.0001));
          dummy.updateMatrix();
          bubbles.setMatrixAt(i, dummy.matrix);
        }
        bubbles.instanceMatrix.needsUpdate = true;
      }
      animateFruit(fruit4, time, ease(seg(q4, 0.0, 0.2)), tall ? 0.3 : 1.9, tall ? 2.0 : 2.9, tall ? 1.3 : 0.8, 0.85);
    }

    syncReflections();
    return d;
  }

  // ---------- Bucle ----------
  let target = 0;
  let p = 0;
  let vel = 0;
  let running = false;
  let forced = null;
  let introT = 0;
  let introStart = 0;
  const t0 = performance.now();

  // Medidas de la película, tomadas solo al cambiar el tamaño: leerlas en cada imagen obligaba al navegador
  // a recalcular la página 60 veces por segundo
  const filmBox = { top: 0, total: 1 };
  function measure() {
    const r = film.getBoundingClientRect();
    filmBox.top = r.top + window.scrollY;
    filmBox.total = r.height - sticky.offsetHeight;
  }
  function readScroll() {
    target = filmBox.total > 0 ? clamp01((window.scrollY - filmBox.top) / filmBox.total) : 0;
  }

  const hasPoster = !!sticky.querySelector('.stage-poster');
  let last = 0;
  let idleFlip = false;
  const perf = { win: [], skip: 20 };
  let lastDrop = null;
  // para pruebas: coste del cálculo por imagen (sin contar el dibujo)
  const stat = { apply: 0, n: 0 };
  function frame(now) {
    if (!running) return;
    const dt = last ? Math.min(0.1, (now - last) / 1000) : 1 / 60;
    last = now;
    if (forced === null) {
      readScroll();
      // Seguimiento del scroll con un muelle de amortiguación crítica: la cámara acelera y frena sin saltos aunque
      // el scroll llegue a golpes (rueda del ratón, impulso del dedo). Solución exacta: no depende de la velocidad del equipo.
      const x0 = p - target;
      const c2 = vel + SPRING * x0;
      const e = Math.exp(-SPRING * dt);
      let next = target + (x0 + c2 * dt) * e;
      vel = (c2 - SPRING * (x0 + c2 * dt)) * e;
      // velocidad máxima: un gesto rápido no salta de un paso a otro, la cámara recorre el camino
      const cap = MAX_SPEED * dt;
      if (next - p > cap) {
        next = p + cap;
        vel = MAX_SPEED;
      } else if (p - next > cap) {
        next = p - cap;
        vel = -MAX_SPEED;
      }
      p = next;
      if (Math.abs(target - p) < 0.00004 && Math.abs(vel) < 0.0004) {
        p = target;
        vel = 0;
        vel = 0;
      }
    } else {
      p = forced;
    }
    // Quieto o en movimiento, siempre todas las imágenes: a media velocidad el agua y la fruta se veían a tirones
    const idle = forced === null && p === target && !drag.on && introT >= 1;
    // Si el equipo va lento mientras se mueve, se rebaja la calidad paso a paso:
    // resolución hasta 1, reflejos del suelo y, por último, resolución 0,75
    if (!idle && !dprFixed && introT >= 1) {
      if (perf.skip > 0) perf.skip--;
      else {
        perf.win.push(dt);
        if (perf.win.length >= 30) {
          // mediana: un tirón suelto (por ejemplo al cargar un paso) no rebaja la calidad
          const sorted = perf.win.slice().sort((x, y) => x - y);
          const avg = sorted[sorted.length >> 1] * 1000;
          perf.win.length = 0;
          if (avg > 21 && lastDrop && avg > lastDrop.avg * 0.88) {
            // rebajar no ha servido: el límite no es el dibujo (por ejemplo, el modo de ahorro del móvil
            // limita a 30 imágenes por segundo). Se deshace y no se toca más.
            dpr = lastDrop.dpr;
            mirror.visible = lastDrop.mirror;
            dprFixed = true;
            resize();
          } else if (avg > 21) {
            lastDrop = { avg, dpr, mirror: mirror.visible };
            if (dpr > 1) {
              dpr = Math.max(1, dpr - 0.25);
              resize();
              perf.skip = 30;
            } else if (avg > 26 && mirror.visible) {
              mirror.visible = false;
              perf.skip = 30;
            } else if (avg > 26 && dpr > 0.75) {
              dpr = 0.75;
              resize();
              perf.skip = 30;
            }
          }
        }
      }
    }
    if (loaded) {
      if (!introStart) {
        introStart = now;
        html.classList.add('film-ready');
        warmUp();
      }
      // con imagen fija en la cápsula, el 3D aparece encima sin animación de entrada
      if (introT < 1) introT = hasPoster ? 1 : Math.min(1, (now - introStart) / 1800);
    }
    if (loaded && introT >= 1) startupProbe(dt);
    if (dead) return;
    const a0 = performance.now();
    apply(p, (now - t0) / 1000, introT);
    stat.apply += performance.now() - a0;
    stat.n++;
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  // Compilar de antemano los materiales de los cinco pasos: así no hay tirones al llegar a cada uno
  let warmed = false;
  function warmUp() {
    if (warmed) return;
    warmed = true;
    const hidden = [];
    scene.traverse((o) => {
      if (!o.visible) {
        hidden.push(o);
        o.visible = true;
      }
    });
    const done = () => hidden.forEach((o) => (o.visible = false));
    if (renderer.compileAsync) renderer.compileAsync(scene, camera).then(done, done);
    else {
      renderer.compile(scene, camera);
      done();
    }
  }

  function start() {
    if (running || dead) return;
    running = true;
    last = 0;
    requestAnimationFrame(frame);
  }

  // Red de seguridad: si el equipo no llega ni a 25 imágenes por segundo con la calidad más baja, se queda con
  // la versión de imágenes fijas (la misma que con "menos movimiento"). Nadie ve la película a tirones.
  let dead = false;
  function goStatic() {
    dead = true;
    running = false;
    sticky.classList.remove('is-open', 'has-steps');
    sticky.style.removeProperty('--n-top');
    html.classList.remove('film-ready');
    staticFallback();
  }
  // Prueba de arranque: se mide con el primer plano (los cinco productos juntos, el más pesado) mientras
  // el visitante aún está arriba. Solo cuenta si la página está a la vista.
  const probe = { win: [], skip: 24, lowered: false, done: false };
  function startupProbe(dt) {
    if (probe.done || dprFixed || document.hidden) return;
    if (target > 0.02) {
      probe.done = true; // ya se está desplazando: decide el ajuste normal
      return;
    }
    if (probe.skip > 0) {
      probe.skip--;
      return;
    }
    probe.win.push(dt);
    if (probe.win.length < 36) return;
    const sorted = probe.win.slice().sort((x, y) => x - y);
    const med = sorted[sorted.length >> 1] * 1000;
    probe.win.length = 0;
    if (med <= 40) {
      probe.done = true;
    } else if (!probe.lowered) {
      probe.lowered = true;
      probe.skip = 24;
      dpr = Math.min(dpr, 0.75);
      mirror.visible = false;
      resize();
    } else {
      probe.done = true;
      goStatic();
    }
  }

  if (MODEST) mirror.visible = false;
  resize();
  readScroll();
  p = target;
  vel = 0;
  if (p > 0.01) introT = 1;
  apply(p, 0, introT);
  renderer.render(scene, camera);

  window.addEventListener('resize', () => resize());
  new ResizeObserver(() => resize()).observe(sticky);
  new ResizeObserver(() => measure()).observe(film);
  new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) return start();
      running = false;
      if (forced === null) {
        readScroll();
        p = target;
        vel = 0;
      }
      apply(p, (performance.now() - t0) / 1000, 1);
    },
    { rootMargin: '10% 0px' }
  ).observe(film);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) running = false;
    else start();
  });

  // Ir a un paso desde el indicador, o desde otra página con /#protocolo o /#paso-3
  function goStep(i, jump = false) {
    const total = filmBox.total;
    const at = RANGE[i][0] + (RANGE[i][1] - RANGE[i][0]) * 0.55;
    window.scrollTo({ top: film.offsetTop + total * at, behavior: jump ? 'auto' : 'smooth' });
    // al llegar desde otra página, la cámara salta directamente al paso en vez de recorrer el camino
    if (jump) {
      readScroll();
      p = target;
      vel = 0;
      introT = 1;
    }
  }
  // Reproducir: un clic recorre toda la película sin tener que desplazarse. Cualquier gesto la detiene.
  const PLAY_END = 0.965;
  const PLAY_SECONDS = 27; // duración de la película entera
  let playing = null;
  function stopPlay() {
    if (playing) playing.stop = true;
    playing = null;
  }
  function play() {
    stopPlay();
    const total = filmBox.total;
    readScroll();
    // desde donde está el visitante si ya está en la película; si no, desde el principio
    const inFilm = film.getBoundingClientRect().bottom > window.innerHeight * 0.5 && target < 0.9;
    const from = inFilm ? target : 0;
    if (!inFilm) {
      window.scrollTo({ top: film.offsetTop, behavior: 'auto' });
      p = 0;
      introT = 1;
    }
    const me = { stop: false };
    playing = me;
    const dur = (PLAY_END - from) * PLAY_SECONDS * 1000;
    let t0 = 0;
    function tick(now) {
      if (me.stop) return;
      if (!loaded) return requestAnimationFrame(tick); // espera a que estén las texturas
      if (!t0) t0 = now;
      const k = Math.min(1, (now - t0) / dur);
      // velocidad constante, con arranque y parada suaves
      const e = k < 0.05 ? (k * k) / 0.1 : k > 0.95 ? 1 - ((1 - k) * (1 - k)) / 0.1 : k;
      window.scrollTo(0, film.offsetTop + total * lerp(from, PLAY_END, e));
      if (k < 1) requestAnimationFrame(tick);
      else playing = null;
    }
    requestAnimationFrame(tick);
  }
  // cualquier gesto detiene la reproducción, salvo pulsar "Añadir a la cesta": se puede comprar sin parar la película
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach((ev) =>
    window.addEventListener(ev, (e) => e.target?.closest?.('[data-film-add]') || stopPlay(), { passive: true })
  );
  document.addEventListener('visibilitychange', () => document.hidden && stopPlay());

  const deep = location.hash.match(/^#(?:protocolo|paso-([1-5]))$/);
  if (deep) setTimeout(() => (deep[1] ? goStep(Number(deep[1]) - 1, true) : play()), 60);
  stepButtons.forEach((b, i) => b.addEventListener('click', () => goStep(i)));
  document.querySelectorAll('[data-go-step]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      if (a.hasAttribute('data-play')) play();
      else goStep(Number(a.dataset.goStep) || 0);
    });
  });
  // Comprar sin salir de la película: añade a la cesta el producto del paso que se está viendo
  const addBtn = document.querySelector('[data-film-add]');
  const STEP_IDS = ['bano', 'exfoliante', 'mascarilla', 'crema', 'espuma'];
  if (addBtn) {
    const label = addBtn.innerHTML;
    let back = 0;
    addBtn.addEventListener('click', () => {
      const i = Math.max(0, Math.min(4, Number(getComputedStyle(stepper).getPropertyValue('--step')) || 0));
      window.baehrCesta?.add(STEP_IDS[i], 1);
      addBtn.textContent = addBtn.dataset.done || '';
      // el lector de pantalla también oye la confirmación
      addBtn.setAttribute('aria-label', 'Añadido a la cesta');
      clearTimeout(back);
      back = setTimeout(() => {
        addBtn.innerHTML = label;
        addBtn.setAttribute('aria-label', 'Añadir a la cesta');
      }, 1500);
    });
  }
  // Saltar la película: directo a lo que viene después
  skip?.addEventListener('click', (e) => {
    e.preventDefault();
    stopPlay();
    window.scrollTo({ top: film.offsetTop + film.offsetHeight - (header ? header.offsetHeight : 0), behavior: 'auto' });
  });

  // Para pruebas y capturas
  window.__film = {
    loaded: () => loaded,
    // para pruebas: resolución fija, sin ajuste automático
    fixDpr(v) {
      dprFixed = true;
      dpr = v;
      resize();
    },
    quality: () => ({ dpr, reflections: mirror.visible, static: dead }),
    // para pruebas: fuerza la red de seguridad
    goStatic,
    pos: () => p,
    shot: (v) => {
      const s = shotAt(v, keys);
      return [s.t[0], s.t[1], s.az, s.el, 1 / s.hf, s.sx, s.sy];
    },
    info: () => {
      const r = { calls: renderer.info.render.calls, tris: renderer.info.render.triangles, applyMs: stat.n ? +(stat.apply / stat.n).toFixed(2) : 0, frames: stat.n };
      stat.apply = 0;
      stat.n = 0;
      return r;
    },
    dpr: () => dpr,
    range: RANGE,
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
      layout(w, h);
      apply(v, 3, 1);
      if (shot) frameCamera({ ...shotAt(v, keys), ...shot }, 0, ease(seg(v, REVEAL, FIN[0] + 0.03)));
      renderer.render(scene, camera);
      const url = renderer.domElement.toDataURL('image/webp', 0.82);
      resize(true);
      return url;
    },
  };
}

init();
