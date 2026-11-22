"""Maakt de twee lettertypebestanden van de site: alleen de tekens en gewichten die we gebruiken.

Gebruik:
  python3 -I tools/fuentes.py            maakt src/fonts/*.woff2 uit de pakketten in node_modules
  python3 -I tools/fuentes.py --check    controleert de gebouwde site (dist/) op tekens die niet in de set zitten

Nodig: pip install fonttools brotli

Archivo blijft variabel (gewicht 400 tot 900, breedte 62 tot 125: de koppen rekken uit).
Newsreader cursief wordt één vast gewicht (400): het is alleen het accentlettertype.
Samen ongeveer 82 kB in plaats van 151 kB.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Spaans, Catalaans (bedrijfsnamen in Barcelona), Duits (productnamen) en wat een bezoeker in een formulier kan typen
LETTERS = 'áéíóúüñÁÉÍÓÚÜÑ¿¡ªº«»·€°×äöüßÄÖÜçÇàèòìùÀÈÒïÏâêîôûãõ©®'
PUNCT = [0x2013, 0x2014, 0x2018, 0x2019, 0x201A, 0x201C, 0x201D, 0x201E, 0x2022, 0x2026, 0x2030, 0x2032, 0x2033, 0x2039, 0x203A, 0x20AC, 0x2122, 0x2212, 0x2009, 0x202F]
UNICODES = sorted(set(list(range(0x20, 0x7F)) + [0xA0] + [ord(c) for c in LETTERS] + PUNCT))

FONTS = [
    ('node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2', 'src/fonts/archivo-baehr.woff2', {'wght': (400, 900)}),
    ('node_modules/@fontsource-variable/newsreader/files/newsreader-latin-wght-italic.woff2', 'src/fonts/newsreader-italica-baehr.woff2', {'wght': 400}),
]


def build():
    from fontTools import subset
    from fontTools.ttLib import TTFont
    from fontTools.varLib import instancer

    for src, out, limits in FONTS:
        font = instancer.instantiateVariableFont(TTFont(os.path.join(ROOT, src)), limits)
        opts = subset.Options()
        opts.layout_features = ['*']
        opts.notdef_outline = True
        opts.name_IDs = [1, 2, 3, 4, 6]
        opts.drop_tables += ['DSIG']
        sub = subset.Subsetter(opts)
        sub.populate(unicodes=UNICODES)
        sub.subset(font)
        font.flavor = 'woff2'
        font.save(os.path.join(ROOT, out))
        before = os.path.getsize(os.path.join(ROOT, src)) / 1024
        after = os.path.getsize(os.path.join(ROOT, out)) / 1024
        print(f'{out}: {after:.0f} kB (was {before:.0f} kB), {len(font.getGlyphOrder())} glyphs')


def check():
    have = set(UNICODES) | {0x09, 0x0A, 0x0D}
    missing = {}
    dist = os.path.join(ROOT, 'dist')
    for folder, _, files in os.walk(dist):
        for name in files:
            path = os.path.join(folder, name)
            if name.endswith('.html'):
                text = open(path, encoding='utf-8').read()
                text = re.sub(r'<script[\s\S]*?</script>|<style[\s\S]*?</style>', ' ', text)
                text = re.sub(r'<[^>]+>', ' ', text)
                import html

                text = html.unescape(text)
            elif name.endswith('.js') and not name.startswith('three.'):
                code = open(path, encoding='utf-8').read()
                # alleen tekst tussen aanhalingstekens telt: daar staan de zichtbare teksten van de scripts
                text = ' '.join(''.join(m) for m in re.findall(r'"([^"\\]{2,})"|\'([^\'\\]{2,})\'|`([^`\\]{2,})`', code))
            else:
                continue
            for ch in text:
                if ord(ch) not in have:
                    missing.setdefault(ch, set()).add(os.path.relpath(path, dist))
    if not missing:
        print('Alle tekens van de gebouwde site zitten in de lettertypes.')
        return 0
    for ch, where in sorted(missing.items()):
        print(f'ontbreekt: {ch!r} (U+{ord(ch):04X}) in {", ".join(sorted(where)[:3])}')
    return 1


if __name__ == '__main__':
    sys.exit(check() if '--check' in sys.argv else build())
