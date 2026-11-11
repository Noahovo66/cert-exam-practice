"""Extract GH-300 PDF text line by line, dropping the KaiTi watermark layer.
pypdf's plain extract_text() emits the option letters (A./B./...) separately
from the option text, so we rebuild lines from (y, x) positions instead."""
import sys, json, pypdf

src, out = sys.argv[1], sys.argv[2]
r = pypdf.PdfReader(src)
lines_all = []
for pi, page in enumerate(r.pages):
    frags = []
    def v(text, cm, tm, fd, fs):
        if not text.strip():
            return
        font = (fd or {}).get('/BaseFont', '')
        if 'KaiTi' in str(font):
            return
        # effective position = tm * cm
        x = tm[4] * cm[0] + tm[5] * cm[2] + cm[4]
        y = tm[4] * cm[1] + tm[5] * cm[3] + cm[5]
        for k, part in enumerate(text.split('\n')):
            if part.strip():
                frags.append((round(y - k * fs * 1.15, 1), x, part, str(font)))
    page.extract_text(visitor_text=v)
    # group by y (tolerance 2pt), top to bottom
    frags.sort(key=lambda f: (-f[0], f[1]))
    rows = []
    for f in frags:
        if rows and abs(rows[-1]['y'] - f[0]) < 2.5:
            rows[-1]['parts'].append(f)
        else:
            rows.append({'y': f[0], 'parts': [f]})
    for row in rows:
        parts = sorted(row['parts'], key=lambda f: f[1])
        txt = ''.join(p[2] for p in parts).rstrip()
        bold = all('Bold' in p[3] for p in parts)
        lines_all.append({'page': pi + 1, 'y': row['y'], 'x': parts[0][1], 'text': txt, 'bold': bold})
json.dump(lines_all, open(out, 'w'), ensure_ascii=False, indent=0)
print(len(lines_all))
