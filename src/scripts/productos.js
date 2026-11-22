// Los cinco envases reales, construidos a partir del contorno y de la etiqueta de las fotos del fabricante.
import * as THREE from 'three';
import { SHAPES } from './shapes.js';

export const SIZE = { tube: 3.0, can: 2.8, bottle: 3.87, jar: 0.962, box: 3.18, sachet: 2.6 };

const WHITE = 0xf8f7f4;

export function createProducts({ maxAniso, onLoad }) {
  const manager = new THREE.LoadingManager();
  if (onLoad) manager.onLoad = onLoad;
  const loader = new THREE.TextureLoader(manager);

  function photo(url) {
    const t = loader.load(url);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = maxAniso;
    t.wrapS = THREE.RepeatWrapping;
    return t;
  }

  function canvasTex(c, color = true) {
    const t = new THREE.CanvasTexture(c);
    if (color) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = maxAniso;
    t.wrapS = THREE.RepeatWrapping;
    return t;
  }

  // Sin capa de barniz (clearcoat): un plástico un poco más pulido da casi el mismo brillo con mucho menos cálculo por píxel.
  // Los parámetros de barniz o de brillo sedoso que lleguen se traducen a una rugosidad algo menor.
  const std = ({ clearcoat = 0, clearcoatRoughness, sheen, sheenRoughness, sheenColor, ...rest }) => {
    if (clearcoat > 0 && rest.roughness !== undefined) rest.roughness = Math.max(0.06, rest.roughness * (1 - 0.32 * clearcoat));
    return new THREE.MeshStandardMaterial(rest);
  };

  const plastic = (extra = {}) => std({ color: WHITE, roughness: 0.3, metalness: 0, clearcoat: 0.8, envMapIntensity: 1.1, ...extra });

  const labelled = (map, extra = {}) =>
    std({ map, roughness: 0.32, metalness: 0, clearcoat: 0.75, envMapIntensity: 1.15, ...extra });


  // Un cuerpo de revolución a partir de un tramo del perfil (t0 arriba, t1 abajo).
  function lathe(profile, height, t0, t1, { vFrom = 0, close = 'both', segs = 80 } = {}) {
    const n = profile.length;
    const i0 = Math.round(t0 * (n - 1));
    const i1 = Math.round(t1 * (n - 1));
    const pts = [];
    const yOf = (i) => (1 - i / (n - 1)) * height;
    if (close === 'both' || close === 'bottom') pts.push(new THREE.Vector2(0.0005, yOf(i1)));
    for (let i = i1; i >= i0; i--) pts.push(new THREE.Vector2(Math.max(0.0005, profile[i] * height), yOf(i)));
    if (close === 'both' || close === 'top') pts.push(new THREE.Vector2(0.0005, yOf(i0)));
    const g = new THREE.LatheGeometry(pts, segs);
    // La textura va por altura real: v = 1 arriba del envase
    const pos = g.attributes.position;
    const uv = g.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const t = 1 - pos.getY(i) / height;
      uv.setY(i, 1 - (t - vFrom) / (1 - vFrom));
    }
    g.rotateY(Math.PI); // el centro de la etiqueta (u = 0,5) mira al frente
    return g;
  }

  // ---------- Tubo: Fußcreme Orange-Lemongras ----------
  function ellipseB(a, P) {
    if (a >= P / 4) return 0;
    let lo = 0;
    let hi = a;
    for (let i = 0; i < 40; i++) {
      const b = (lo + hi) / 2;
      const per = Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
      if (per > P) hi = b;
      else lo = b;
    }
    return (lo + hi) / 2;
  }

  function tubeGeometry(height) {
    const prof = SHAPES.tube;
    const n = prof.length;
    const segs = 80;
    const tCrimp = 0.026;
    const tCap = 0.838;
    const aRef = prof[Math.round(tCap * (n - 1)) - 2] * height;
    const P = 2 * Math.PI * aRef;
    const pos = [];
    const uv = [];
    const idx = [];
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const a = prof[i] * height;
      let b;
      if (t >= tCap) b = a; // tapón: redondo
      else if (t <= tCrimp) b = 0.014; // cierre aplanado
      else b = Math.max(0.014, ellipseB(a, P)); // tubo: el contorno se conserva
      const y = (1 - t) * height;
      for (let j = 0; j <= segs; j++) {
        const u = j / segs;
        const th = 2 * Math.PI * (u - 0.25);
        pos.push(-a * Math.cos(th), y, b * Math.sin(th));
        uv.push(u, 1 - t);
      }
    }
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < segs; j++) {
        const p0 = i * (segs + 1) + j;
        const p1 = p0 + segs + 1;
        idx.push(p0, p1, p0 + 1, p0 + 1, p1, p1 + 1);
      }
    }
    // base del tapón
    const base = pos.length / 3;
    pos.push(0, 0, 0);
    uv.push(0.5, 0);
    const last = (n - 1) * (segs + 1);
    for (let j = 0; j < segs; j++) idx.push(base, last + j, last + j + 1);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  // Cada envase devuelve: group (posición sobre el suelo y giro), pivot (centro, para inclinar) y su altura.
  function wrap(height, build) {
    const group = new THREE.Group();
    const pivot = new THREE.Group();
    pivot.position.y = height / 2;
    const inner = new THREE.Group();
    inner.position.y = -height / 2;
    pivot.add(inner);
    group.add(pivot);
    const extra = build(inner) || {};
    return { group, pivot, inner, height, ...extra };
  }

  function buildTube() {
    return wrap(SIZE.tube, (inner) => {
      const mesh = new THREE.Mesh(tubeGeometry(SIZE.tube), labelled(photo('/tex/tubo.webp'), { side: THREE.DoubleSide }));
      inner.add(mesh);
      // boquilla: punto por donde sale la crema (centro de la base del tapón)
      return { nozzle: new THREE.Vector3(0, 0, 0) };
    });
  }

  // ---------- Bote: Cremeschaum Orange-Lemongras ----------
  function buildCan() {
    const H = SIZE.can;
    return wrap(H, (inner) => {
      const map = photo('/tex/bote.webp');
      const tCap = 0.235;
      const body = new THREE.Mesh(lathe(SHAPES.can, H, tCap, 1, { close: 'both' }), labelled(map));
      inner.add(body);
      const cap = new THREE.Mesh(lathe(SHAPES.can, H, 0, tCap, { close: 'top' }), labelled(map));
      inner.add(cap);
      // válvula bajo el tapón
      const topY = (1 - tCap) * H;
      const head = new THREE.Group();
      head.position.y = topY;
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.2, 48), plastic());
      stem.position.y = 0.1;
      head.add(stem);
      const button = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.16, 0.16, 48), plastic());
      button.position.y = 0.27;
      head.add(button);
      const spout = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.07, 0.09), plastic());
      spout.position.set(0.2, 0.27, 0);
      head.add(spout);
      inner.add(head);
      return { cap, head, headY: topY, nozzle: new THREE.Vector3(0.31, topY + 0.27 - H / 2, 0) };
    });
  }

  // ---------- Frasco con dosificador: SPA Wellness Fußbad ----------
  function buildBottle() {
    const H = SIZE.bottle;
    return wrap(H, (inner) => {
      const tBody = 0.235;
      const body = new THREE.Mesh(
        lathe(SHAPES.bottle, H, tBody, 1, { vFrom: tBody, close: 'both' }),
        labelled(photo('/tex/botella.webp'), { roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.1 })
      );
      inner.add(body);
      const neckY = (1 - tBody) * H;
      // rosca estriada
      const ribs = document.createElement('canvas');
      ribs.width = 256;
      ribs.height = 8;
      const rg = ribs.getContext('2d');
      for (let x = 0; x < 256; x += 8) {
        rg.fillStyle = '#d8d8d8';
        rg.fillRect(x, 0, 4, 8);
        rg.fillStyle = '#585858';
        rg.fillRect(x + 4, 0, 4, 8);
      }
      const ribTex = canvasTex(ribs, false);
      ribTex.repeat.set(6, 1);
      const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.272, 0.272, 0.44, 64), plastic({ bumpMap: ribTex, bumpScale: 1.2 }));
      collar.position.y = neckY + 0.22;
      inner.add(collar);
      const pump = new THREE.Group();
      pump.position.y = neckY + 0.44;
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.34, 32), plastic());
      stem.position.y = 0.12;
      pump.add(stem);
      const top = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.17, 0.13, 48), plastic());
      top.position.y = 0.34;
      pump.add(top);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.1, 0.17), plastic());
      arm.position.set(0.33, 0.35, 0);
      pump.add(arm);
      const tip = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.17, 0.15), plastic());
      tip.position.set(0.58, 0.29, 0);
      pump.add(tip);
      inner.add(pump);
      return { pump, pumpY: neckY + 0.44, nozzle: new THREE.Vector3(0.58, neckY + 0.44 + 0.2 - H / 2, 0) };
    });
  }

  // ---------- Tarro: fresh feet Fußpeeling ----------
  // Proporciones medidas en la foto del fabricante: radio de la tapa 0,80; cuerpo 0,749; alto total 0,962.
  function ribs(n) {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 8;
    const g = c.getContext('2d');
    const w = 512 / n;
    for (let i = 0; i < n; i++) {
      const grad = g.createLinearGradient(i * w, 0, (i + 1) * w, 0);
      grad.addColorStop(0, '#404040');
      grad.addColorStop(0.5, '#d0d0d0');
      grad.addColorStop(1, '#404040');
      g.fillStyle = grad;
      g.fillRect(i * w, 0, w + 1, 8);
    }
    return canvasTex(c, false);
  }

  function buildJar() {
    const H = SIZE.jar;
    const RL = 0.8;
    const RB = 0.749;
    const bodyH = 0.642;
    return wrap(H, (inner) => {
      const V = (x, y) => new THREE.Vector2(x, y);
      // cuerpo: base redondeada, pared, cuello con rosca y borde
      const body = new THREE.Mesh(
        new THREE.LatheGeometry(
          [
            V(0.0005, 0.012),
            V(RB - 0.13, 0.012),
            V(RB - 0.1, 0),
            V(RB - 0.05, 0.006),
            V(RB - 0.016, 0.03),
            V(RB, 0.085),
            V(RB, bodyH - 0.004),
            V(RB - 0.035, bodyH + 0.012),
            V(RB - 0.05, bodyH + 0.05),
            V(RB - 0.05, bodyH + 0.2),
            V(RB - 0.07, bodyH + 0.215),
            V(RB - 0.1, bodyH + 0.215),
            V(RB - 0.115, bodyH + 0.2),
            V(RB - 0.115, bodyH + 0.1),
          ],
          80
        ),
        plastic({ side: THREE.DoubleSide })
      );
      inner.add(body);
      // etiqueta: la banda real, desenrollada de la foto
      const band = new THREE.Mesh(
        new THREE.CylinderGeometry(RB + 0.003, RB + 0.003, 0.5026, 80, 1, true),
        labelled(photo('/tex/tarro.webp'), { clearcoat: 0.45, roughness: 0.42 })
      );
      band.rotation.y = Math.PI;
      band.position.y = 0.106 + 0.2513;
      inner.add(band);
      // contenido: el exfoliante, con relieve de grano
      const pasteGeo = new THREE.CircleGeometry(RB - 0.115, 96, 0, Math.PI * 2);
      const paste = new THREE.Mesh(
        pasteGeo,
        std({ color: 0xf7f5ee, roughness: 0.78 })
      );
      paste.rotation.x = -Math.PI / 2;
      paste.position.y = bodyH + 0.13;
      inner.add(paste);
      // tapa: pared con estrías finas y hombro redondeado
      const lid = new THREE.Group();
      const shell = new THREE.Mesh(
        new THREE.LatheGeometry(
          [
            V(RL - 0.035, 0.0),
            V(RL - 0.008, 0.004),
            V(RL, 0.025),
            V(RL, 0.2),
            V(RL - 0.006, 0.245),
            V(RL - 0.028, 0.285),
            V(RL - 0.062, 0.31),
            V(RL - 0.1, 0.32),
            V(RL - 0.135, 0.32),
            V(RL - 0.155, 0.311),
            V(0.0005, 0.311),
          ],
          80
        ),
        plastic({ side: THREE.DoubleSide })
      );
      lid.add(shell);
      const ribTex = ribs(8);
      ribTex.repeat.set(26, 1);
      const grip = new THREE.Mesh(
        new THREE.CylinderGeometry(RL + 0.0025, RL + 0.0025, 0.115, 80, 1, true),
        plastic({ bumpMap: ribTex, bumpScale: 0.9, roughness: 0.42, clearcoat: 0.4 })
      );
      grip.position.y = 0.135;
      lid.add(grip);
      lid.position.y = bodyH;
      inner.add(lid);
      return { lid, lidY: bodyH, paste, mouth: new THREE.Vector3(0, bodyH + 0.13 - H / 2, 0), mouthY: bodyH + 0.13, radius: RB, lidRadius: RL };
    });
  }

  // ---------- Caja: Fuß-Vliesmaske Orange-Lemongras ----------
  function buildBox() {
    const H = SIZE.box;
    const W = H * (1024 / 1415);
    const Dp = 0.34;
    return wrap(H, (inner) => {
      const side = plastic({ roughness: 0.55, clearcoat: 0.15 });
      const front = std({ map: photo('/tex/caja.webp'), roughness: 0.5, clearcoat: 0.3 });
      const slot = new THREE.MeshStandardMaterial({ color: 0x8f8f8c, roughness: 0.9 });
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(W, H, Dp), [side, side, slot, side, front, side]);
      mesh.position.y = H / 2;
      inner.add(mesh);
      return { width: W, depth: Dp, mouth: new THREE.Vector3(0, H / 2, 0) };
    });
  }

  // ---------- Sobre: cada caja lleva cinco, con un par de mascarillas de tejido ----------
  function buildSachet() {
    const H = SIZE.sachet;
    const W = H * (768 / 992);
    const pillow = (sign) => {
      const g = new THREE.PlaneGeometry(W, H, 14, 18);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const x = (p.getX(i) / W) * 2;
        const y = (p.getY(i) / H) * 2;
        // un poco abombado en el centro y plano en el borde sellado
        const k = Math.max(0, 1 - Math.pow(Math.abs(x), 3)) * Math.max(0, 1 - Math.pow(Math.abs(y), 3));
        p.setZ(i, sign * (0.004 + 0.045 * k));
      }
      g.computeVertexNormals();
      return g;
    };
    const blank = document.createElement('canvas');
    blank.width = 192;
    blank.height = 248;
    const bg = blank.getContext('2d');
    bg.fillStyle = '#f4f4f2';
    bg.beginPath();
    if (bg.roundRect) bg.roundRect(1, 1, 190, 246, 6);
    else bg.rect(1, 1, 190, 246);
    bg.fill();
    const foil = { roughness: 0.3, metalness: 0.12, clearcoat: 0.9, clearcoatRoughness: 0.18, alphaTest: 0.5, envMapIntensity: 1.25 };
    const front = std({ map: photo('/tex/sobre.webp'), ...foil });
    const back = std({ map: canvasTex(blank), side: THREE.BackSide, ...foil });
    const group = new THREE.Group();
    const a = new THREE.Mesh(pillow(1), front);
    const b = new THREE.Mesh(pillow(-1), back);
    a.position.y = H / 2;
    b.position.y = H / 2;
    group.add(a, b);
    return { group, width: W, height: H };
  }

  return { buildTube, buildCan, buildBottle, buildJar, buildBox, buildSachet, canvasTex, plastic };
}
