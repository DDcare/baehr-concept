"""Maakt 3D-texturen en omtrekprofielen uit de productfoto's van de fabrikant.

Gebruik: python3 -I tools/texturas.py <map met productfoto's> <projectmap>

Elke foto is een vooraanzicht. Het etiket wordt 'uitgerold' zodat het op het ronde
model weer precies zo staat als op de foto: een punt op hoek phi van de voorkant
ligt op de foto op afstand sin(phi) van het midden. De achterkant krijgt een
neutrale eigen tekening, want die staat niet op de foto.
"""
import json
import math
import os
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SRC, ROOT = sys.argv[1], sys.argv[2]
# Kwaliteit van de WebP-texturen. 82 voor uitgerolde etiketten (kleine tekst), 76 voor de vlakke doos en het sachet.
# Samen met de maten hieronder: zes texturen van samen ongeveer 260 kB in plaats van 670 kB.
Q, Q_FLAT = 82, 76
TEX = os.path.join(ROOT, 'public', 'tex')
os.makedirs(TEX, exist_ok=True)


def load(name):
    im = Image.open(os.path.join(SRC, name + '.png')).convert('RGBA')
    return np.asarray(im).astype(np.float32)


def silhouette(a, top, bottom):
    """Per rij het midden en de halve breedte van het product."""
    cx, half = [], []
    for y in range(top, bottom + 1):
        xs = np.where(a[y, :, 3] >= 128)[0]
        if len(xs) < 2:
            cx.append(cx[-1] if cx else 0)
            half.append(half[-1] if half else 1)
            continue
        cx.append((xs[0] + xs[-1]) / 2)
        half.append(max(1.0, (xs[-1] - xs[0]) / 2))
    cx = np.array(cx)
    half = np.array(half)
    # licht gladstrijken tegen ruis in de omtrek
    k = np.ones(9) / 9
    half_s = np.convolve(np.pad(half, 4, mode='edge'), k, mode='valid')
    cx_s = np.convolve(np.pad(cx, 4, mode='edge'), k, mode='valid')
    return cx_s, half_s


def bilinear(img, x, y):
    h, w = img.shape[:2]
    x = np.clip(x, 0, w - 1.001)
    y = np.clip(y, 0, h - 1.001)
    x0 = np.floor(x).astype(int)
    y0 = np.floor(y).astype(int)
    fx = (x - x0)[..., None]
    fy = (y - y0)[..., None]
    a = img[y0, x0]
    b = img[y0, x0 + 1]
    c = img[y0 + 1, x0]
    d = img[y0 + 1, x0 + 1]
    return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy


def smoothstep(e0, e1, x):
    t = np.clip((x - e0) / (e1 - e0), 0, 1)
    return t * t * (3 - 2 * t)


def back_design(w, h, base, bands, block):
    """Achterkant: wit, dezelfde metalen band(en), klein merkblok en regels kleine tekst als streepjes."""
    im = Image.new('RGB', (w, h), tuple(int(c) for c in base))
    d = ImageDraw.Draw(im)
    for (t0, t1) in bands:
        y0, y1 = int(t0 * h), int(t1 * h)
        for y in range(y0, y1):
            f = (y - y0) / max(1, y1 - y0)
            g = int(190 + 55 * math.sin(f * math.pi))
            d.line([(0, y), (w, y)], fill=(g, g + 1, g + 4))
    if block:
        t, size = block
        bw, bh = int(w * 0.13 * size), int(h * 0.02 * size)
        y = int(t * h)
        # het midden van de achterkant ligt op de naad van de textuur (u = 0 en u = 1)
        for cx in (0, w):
            d.rectangle([cx - bw // 2, y, cx + bw // 2, y + bh], fill=(166, 13, 28))
            # regels kleine tekst als grijze streepjes: geen verzonnen tekst
            yy = y + bh + int(h * 0.03)
            rnd = np.random.RandomState(4)
            for i in range(18):
                lw = int(bw * (0.9 + rnd.rand() * 0.9))
                d.rectangle([cx - bw, yy, cx - bw + lw, yy + max(2, h // 600)], fill=(176, 176, 174))
                yy += int(h * 0.011)
    return np.asarray(im).astype(np.float32)


def unroll(name, top, bottom, out, tex_w, tex_h, bands=(), block=(0.2, 1.0), keep_from=0.0):
    """Rolt het vooraanzicht uit tot een textuur over 360 graden. Geeft het omtrekprofiel terug."""
    a = load(name)
    cx, half = silhouette(a, top, bottom)
    n = bottom - top + 1
    rgb = a[:, :, :3]
    alpha = a[:, :, 3:4] / 255
    # basiskleur: de mediaan van een etiketvrije strook in het midden bovenaan
    base = np.array([247.0, 246.0, 243.0])
    rgb_w = rgb * alpha + base * (1 - alpha)

    u = (np.arange(tex_w) + 0.5) / tex_w
    v = (np.arange(tex_h) + 0.5) / tex_h
    rows = keep_from + (1 - keep_from) * v  # t van boven naar beneden
    ri = np.clip((rows * (n - 1)).astype(int), 0, n - 1)
    phi = 2 * math.pi * (u - 0.5)
    front = (u >= 0.25) & (u <= 0.75)
    s = np.sin(phi)
    xs = cx[ri][:, None] + s[None, :] * half[ri][:, None] * 0.992
    ys = (top + rows * (n - 1))[:, None] + np.zeros((1, tex_w))
    photo = bilinear(rgb_w, xs, ys)

    back = back_design(tex_w, tex_h, base, [((b0 - keep_from) / (1 - keep_from), (b1 - keep_from) / (1 - keep_from)) for b0, b1 in bands], block)
    # overgang naar de achterkant bij de randen, behalve in de metalen band
    edge = smoothstep(0.86, 0.985, np.abs(s))[None, :, None] * np.ones((tex_h, 1, 1))
    for b0, b1 in bands:
        in_band = ((rows >= b0 - 0.004) & (rows <= b1 + 0.004))[:, None, None]
        edge = np.where(in_band, edge * 0.0, edge)
    mix = np.where(front[None, :, None], edge, 1.0)
    tex = photo * (1 - mix) + back * mix
    Image.fromarray(np.clip(tex, 0, 255).astype(np.uint8)).save(os.path.join(TEX, out), 'WEBP', quality=Q, method=6)

    # profiel: halve breedte gedeeld door de totale hoogte, van boven naar beneden
    samples = 97
    idx = np.clip((np.linspace(0, 1, samples) * (n - 1)).astype(int), 0, n - 1)
    return [round(float(half[i] / n), 5) for i in idx]


def flat(name, box, out, w, h, corner=0):
    a = load(name)
    rgb = a[:, :, :3]
    alpha = a[:, :, 3:4] / 255
    base = np.array([250.0, 250.0, 249.0])
    im = Image.fromarray(np.clip(rgb * alpha + base * (1 - alpha), 0, 255).astype(np.uint8))
    im = im.crop(box).resize((w, h), Image.LANCZOS)
    if corner:
        # afgeronde hoeken als doorzichtigheid (voor het sachet)
        mask = Image.new('L', (w * 2, h * 2), 0)
        ImageDraw.Draw(mask).rounded_rectangle([2, 2, w * 2 - 3, h * 2 - 3], radius=corner * 2, fill=255)
        im.putalpha(mask.resize((w, h), Image.LANCZOS))
    im.save(os.path.join(TEX, out), 'WEBP', quality=Q_FLAT, method=6)


def unroll_band(name, out, cx, radius, y0, y1, sag, tex_w, tex_h, clean=(37.5, 44.5), fade=(37, 44)):
    """Rolt een etiketband uit van een pot die licht van boven is gefotografeerd.

    De foto kijkt een paar graden omlaag, dus de band is een boog: het midden van de voorkant
    ligt 'sag' pixels lager dan de rand. y0 en y1 zijn de boven- en onderkant van de band aan
    de rand van het silhouet. Alleen het midden van de voorkant komt uit de foto: de kleine
    tekst aan de zijkanten staat te schuin op de foto om leesbaar uit te rollen en zou half
    wegvallen (dan staat er '25 ml' in plaats van '125 ml'). De rest krijgt per rij de kale
    bandkleur.
    """
    a = load(name)
    rgb = a[:, :, :3]
    u = (np.arange(tex_w) + 0.5) / tex_w
    v = (np.arange(tex_h) + 0.5) / tex_h
    phi = 2 * math.pi * (u - 0.5)
    side = (y0 + v * (y1 - y0))[:, None]
    xs = cx + radius * np.sin(phi)[None, :] + np.zeros((tex_h, 1))
    ys = side + sag * np.cos(phi)[None, :]
    photo = bilinear(rgb, xs, ys)
    deg = np.degrees(np.abs(phi))
    # kale bandkleur per rij: mediaan van twee stroken zonder tekst, links en rechts van het midden
    strip = (deg >= clean[0]) & (deg <= clean[1])
    row = np.median(photo[:, strip, :], axis=1)
    row = np.stack([np.convolve(np.pad(row[:, c], 6, mode='edge'), np.ones(13) / 13, mode='valid') for c in range(3)], axis=1)
    back = row[:, None, :] * np.ones((1, tex_w, 1))
    mix = smoothstep(fade[0], fade[1], deg)[None, :, None]
    tex = photo * (1 - mix) + back * mix
    Image.fromarray(np.clip(tex, 0, 255).astype(np.uint8)).save(os.path.join(TEX, out), 'WEBP', quality=Q, method=6)


shapes = {}
# Fußcreme Orange-Lemongras, 125 ml: tube op zijn dop
shapes['tube'] = unroll('creme', 404, 2111, 'tubo.webp', 1152, 1536, bands=[(0.643, 0.694)], block=(0.12, 1.0))
# Cremeschaum Orange-Lemongras, 125 ml: spuitbus
shapes['can'] = unroll('schuim', 319, 1944, 'bote.webp', 1536, 1536, bands=[(0.802, 0.849)], block=(0.36, 1.0))
# SPA Wellness Fußbad, 500 ml: fles (alleen de fles zelf, de pomp is los gemodelleerd)
shapes['bottle'] = unroll('bad', 221, 2900, 'botella.webp', 1536, 1536, bands=[], block=(0.22, 1.2), keep_from=0.235)
# Fuß-Vliesmaske Orange-Lemongras: voorkant van de doos
flat('masker', (522, 226, 1886, 2110), 'caja.webp', 1024, 1415)
# Het sachet uit dezelfde doos (tweede productfoto, het sachet staat vooraan)
flat('masker2', (1003, 428, 2128, 1880), 'sobre.webp', 768, 992, corner=22)
# fresh feet Fußpeeling, 125 ml: de etiketband van de pot
unroll_band('peeling', 'tarro.webp', cx=1207.5, radius=536.5, y0=1319, y1=1679, sag=89, tex_w=4096, tex_h=440)

with open(os.path.join(ROOT, 'src', 'scripts', 'shapes.js'), 'w') as f:
    f.write('// Omtrekprofielen uit de productfoto\'s van de fabrikant (halve breedte gedeeld door de hoogte, van boven naar beneden).\n')
    f.write('// Gemaakt met tools/texturas.py. Niet met de hand aanpassen.\n')
    f.write('export const SHAPES = ' + json.dumps(shapes) + ';\n')

for k, v in shapes.items():
    print(k, len(v), 'max', max(v), 'eerste', v[:4], 'laatste', v[-4:])
for fn in sorted(os.listdir(TEX)):
    print(fn, os.path.getsize(os.path.join(TEX, fn)) // 1024, 'kB')
