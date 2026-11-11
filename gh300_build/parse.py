"""Split lines.json into 129 questions: stem / options / answer / explanation."""
import json, re, sys

L = json.load(open(sys.argv[1]))
SKIP = re.compile(r'^(Microsoft - GH-300|\d+ of 68|=+|Number of Questions.*)$')
qs, cur, sect = [], None, None
for l in L:
    t = l['text'].replace(" ' ", "'").replace(" ’ ", "’").strip()
    if l['page'] < 2 or SKIP.match(t):
        continue
    m = re.match(r'^Question #:\s*(\d+)\s*-\s*\[(.+)\]$', t)
    if m:
        cur = {'n': int(m.group(1)), 'cat': m.group(2).strip(), 'stem': [], 'opts': [],
               'answer': None, 'exp': [], 'page': l['page']}
        qs.append(cur); sect = 'stem'; continue
    if cur is None:
        continue
    if l['bold'] and t.startswith('Answer:'):
        cur['answer'] = t[len('Answer:'):].split(); sect = 'ans'; continue
    if l['bold'] and t == 'Explanation':
        sect = 'exp'; continue
    om = re.match(r'^([A-H])\.\s+(.*)$', t)
    if sect in ('stem', 'opts') and om and l['x'] > 45 and l['x'] < 60:
        cur['opts'].append([om.group(1), om.group(2)]); sect = 'opts'; continue
    if sect == 'opts':
        cur['opts'][-1][1] += ' ' + t; continue
    if sect == 'stem':
        cur['stem'].append(t)
    elif sect in ('exp', 'ans'):
        cur['exp'].append(t)

def reflow(lines):
    """Join PDF hard-wrapped lines; keep bullets / short lines as paragraph breaks."""
    out = []
    for t in lines:
        starts_new = re.match(r'^(•|-|\d+\.|Box \d|Reference|“|"|Which |What |How |You |NOTE)', t)
        if out and not starts_new and not out[-1].endswith(('.', ':', '?', '”', '"')):
            out[-1] += ' ' + t
        else:
            out.append(t)
    return '\n'.join(out)

res = []
for q in qs:
    res.append({'n': q['n'], 'cat': q['cat'], 'page': q['page'],
                'stem': reflow(q['stem']), 'options': {k: v.strip() for k, v in q['opts']},
                'answer': q['answer'] or [], 'explanation': reflow(q['exp'])})
json.dump(res, open(sys.argv[2], 'w'), ensure_ascii=False, indent=1)
print(len(res), [q['n'] for q in res if not q['answer']])
print('nums ok:', [q['n'] for q in res] == list(range(1, 130)))
bad = [q['n'] for q in res if q['answer'] and any(a not in q['options'] for a in q['answer'])]
print('bad answers:', bad)
