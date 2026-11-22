# Overzichtsblad van schermopnamen: python3 -I hoja.py <uit.jpg> <d|m> <beeld> [beeld ...]
import sys
from PIL import Image
out, kind, files = sys.argv[1], sys.argv[2], sys.argv[3:]
tw, per = (476, 3) if kind == 'd' else (232, 6)
ims = []
for f in files:
    im = Image.open(f).convert('RGB')
    ims.append(im.resize((tw, round(im.size[1] * tw / im.size[0]))))
th = max(i.size[1] for i in ims)
rows = (len(ims) + per - 1) // per
gap = 6
sheet = Image.new('RGB', (per * tw + (per - 1) * gap, rows * th + (rows - 1) * gap), (70, 70, 72))
for k, im in enumerate(ims):
    sheet.paste(im, ((k % per) * (tw + gap), (k // per) * (th + gap)))
sheet.save(out, quality=82)
