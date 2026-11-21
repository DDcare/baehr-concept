"""Haalt de omtrek van de letters B, A, E, H en R uit het koplettertype van de site (Archivo Variable).

De vijf stappen van de productfilm staan elk voor één letter; samen vormen ze het woord BAEHR.
De omtrekken komen uit hetzelfde lettertype en dezelfde stand (breedte en gewicht) als het logo
in de kop van de site, zodat de letters in 3D en de letters in de pagina één familie zijn.

Gebruik: python3 tools/letras.py <projectmap>
Nodig: pip install fonttools brotli
"""
import json
import os
import sys

from fontTools.pens.basePen import BasePen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = sys.argv[1]
FONT = os.path.join(ROOT, 'node_modules', '@fontsource-variable', 'archivo', 'files', 'archivo-latin-wdth-normal.woff2')
WGHT = 900
WDTH = 125
WORD = 'BAEHR'


class Recorder(BasePen):
    def __init__(self, glyph_set):
        super().__init__(glyph_set)
        self.cmds = []

    def _moveTo(self, pt):
        self.cmds.append(['M', pt[0], pt[1]])

    def _lineTo(self, pt):
        self.cmds.append(['L', pt[0], pt[1]])

    def _qCurveToOne(self, c, pt):
        self.cmds.append(['Q', c[0], c[1], pt[0], pt[1]])

    def _curveToOne(self, c1, c2, pt):
        self.cmds.append(['C', c1[0], c1[1], c2[0], c2[1], pt[0], pt[1]])

    def _closePath(self):
        self.cmds.append(['Z'])


font = TTFont(FONT)
axes = {a.axisTag: (a.minValue, a.defaultValue, a.maxValue) for a in font['fvar'].axes}
print('assen', axes)
inst = instancer.instantiateVariableFont(font, {'wght': WGHT, 'wdth': WDTH})
glyphs = inst.getGlyphSet()
cmap = inst.getBestCmap()
upm = inst['head'].unitsPerEm
cap = getattr(inst['OS/2'], 'sCapHeight', 0) or 700

out = {'unitsPerEm': upm, 'capHeight': cap, 'wght': WGHT, 'wdth': WDTH, 'glyphs': {}}
for ch in WORD:
    name = cmap[ord(ch)]
    pen = Recorder(glyphs)
    glyphs[name].draw(pen)
    cmds = [[c[0]] + [round(v, 1) for v in c[1:]] for c in pen.cmds]
    out['glyphs'][ch] = {'adv': glyphs[name].width, 'd': cmds}
    print(ch, name, 'breedte', glyphs[name].width, 'opdrachten', len(cmds))

# onderlinge afstand volgens het lettertype zelf (GPOS-kerning laten we weg: bij deze vijf letters is die nul of klein)
with open(os.path.join(ROOT, 'src', 'scripts', 'letras.js'), 'w') as f:
    f.write('// Omtrek van de letters B, A, E, H en R uit Archivo Variable (breedte %d, gewicht %d).\n' % (WDTH, WGHT))
    f.write('// Gemaakt met tools/letras.py. Niet met de hand aanpassen.\n')
    f.write('export const LETRAS = ' + json.dumps(out, separators=(',', ':')) + ';\n')
print('unitsPerEm', upm, 'capHeight', cap)
