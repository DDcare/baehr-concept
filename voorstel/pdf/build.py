import re, html, sys
src, out, fontdir = sys.argv[1], sys.argv[2], sys.argv[3]
lines = open(src).read().split('\n')
def inline(s):
    s = html.escape(s, quote=False)
    s = re.sub(r'&quot;|"([^"]+)"', lambda m: '“'+m.group(1)+'”' if m.group(1) else m.group(0), s)
    s = s.replace("'", "’")
    s = re.sub(r'(€[\d,]+|\d+ ml)', lambda m: '<span class="nw">'+m.group(1)+'</span>', s)
    return s
body=[]; i=0; section=''
while i < len(lines):
    l = lines[i]
    if l.startswith('# '):
        body.append(f'<header class="cover"><p class="for">For Proxy Beauty Spain, S.L.</p><h1>{inline(l[2:])}</h1><p class="date">November 2026</p></header>')
    elif l.startswith('## '):
        section = l[3:]
        if section.startswith("Let's talk"): body.append('<div class="closing">')
        body.append(f'<h2 class="newpage">{inline(section)}</h2>' if section=='What we found' else f'<h2>{inline(section)}</h2>')
    elif l.startswith('### '):
        body.append(f'<h3>{inline(l[4:])}</h3>')
    elif l.startswith('- '):
        items=[]
        while i < len(lines) and lines[i].startswith('- '):
            items.append(lines[i][2:]); i+=1
        if 'packages, each building' in section:
            cards=[]
            for it in items:
                m = re.match(r'([^,]+), (€[\d,]+) a month: (.*)', it)
                name, price, desc = m.groups()
                rec = ' rec' if name=='Plus Google Ads' else ''
                tag = '<p class="tag">Our recommendation</p>' if rec else '<p class="tag"></p>'
                cards.append(f'<div class="pkg{rec}">{tag}<p class="name">{inline(name)}</p><p class="price"><span class="nw">{price}</span><span class="per">a month</span></p><p class="desc">{inline(desc[0].upper()+desc[1:])}</p></div>')
            body.append('<div class="pkgs">'+''.join(cards)+'</div>')
        else:
            body.append('<ul>'+''.join(f'<li>{inline(x)}</li>' for x in items)+'</ul>')
        continue
    elif l.strip():
        cls=''
        if l.strip() in ('Hi Valeria,',): cls=' class="greet"'
        if l.strip() in ('Best wishes,',): cls=' class="sign"'
        if l.strip() in ('Denis',): cls=' class="name-sign"'
        if l.strip() in ('[agency name]','Meneer Marketing'): cls=' class="agency"'
        body.append(f'<p{cls}>{inline(l)}</p>')
    i+=1
if any('class="closing"' in b for b in body): body.append('</div>')
css = open(sys.argv[4]).read().replace('FONTDIR', fontdir)
open(out,'w').write(f'<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>Proposal for BAEHR España</title><style>{css}</style></head><body><main>{"".join(body)}</main></body></html>')
