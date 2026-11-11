"""Merge parsed EN + image overrides + zh translations into data_gh300.js, with validation."""
import json, re

Q = json.load(open('gh300_build/parsed.json'))
O = json.load(open('gh300_build/overrides.json'))
ZH = {}
for i in range(1, 5):
    for z in json.load(open(f'gh300_build/zh/chunk{i}.json')):
        ZH[z['n']] = z

SECT_ZH = {
    'Configure privacy, content exclusions, and safeguards': '配置隐私、内容排除与安全措施',
    'GitHub Copilot features': 'GitHub Copilot 功能',
    'Use GitHub Copilot features': '使用 GitHub Copilot 功能',
    'Understand GitHub Copilot data and architecture': '了解 GitHub Copilot 数据与架构',
    'Use GitHub Copilot responsibly': '负责任地使用 GitHub Copilot',
    'Improve developer productivity with GitHub Copilot': '使用 GitHub Copilot 提升开发效率',
    'Apply prompt engineering and context crafting': '应用提示工程与上下文构建',
}
# Q10's stem in the source PDF is broken (only "1. blog.yatricloud.com"); it is
# the same question as Q38, so the stem is restored from there.
FIX_STEM = {10: (
    'What kind of insights can the GitHub Copilot usage metrics API provide to help evaluate the effectiveness of GitHub Copilot? (Each correct answer presents part of the solution. Choose two.)',
    'GitHub Copilot 使用情况指标 API 可以提供哪些见解，以帮助评估 GitHub Copilot 的有效性？（每个正确答案都是解决方案的一部分。请选择两项。）')}
STRAY = re.compile(r'\s*(?<![A-Za-z0-9])[A-H]\.\s*$')   # "… B." letter fragments left by the PDF layout

def clean(s):
    return STRAY.sub('', s or '').strip()

out, errs = [], []
for q in Q:
    n, z, o = q['n'], ZH[q['n']], O.get(str(q['n']))
    stem_en, stem_zh = clean(q['stem']), clean(z['stem'])
    if n in FIX_STEM:
        stem_en, stem_zh = FIX_STEM[n]
    rec = {'id': n, 'section': q['cat'], 'sectionZh': SECT_ZH[q['cat']], 'isCaseStudy': False}
    if o:
        rec['type'] = o['type']; rec['correctLetters'] = []
        rec['en'] = {'stem': stem_en, 'options': {}, 'explanation': o['explanation_en']}
        rec['zh'] = {'stem': stem_zh, 'options': {}, 'explanation': z['explanation']}
        if o['type'] == 'hotspot':
            rec['boxes'] = []
            for b, bz in zip(o['boxes'], z['boxes']):
                rec['boxes'].append({'prompt_en': b['prompt_en'], 'prompt_zh': bz['prompt'],
                                     'options_en': b['options_en'], 'options_zh': bz['options'],
                                     'correct_en': b['correct_en'],
                                     'correct_zh': bz['options'][b['options_en'].index(b['correct_en'])]})
                if len(bz['options']) != len(b['options_en']): errs.append((n, 'box len'))
            if o.get('code'):
                rec['code'] = {'lang': 'cli', 'text': o['code'], 'title_en': 'Command', 'title_zh': '命令'}
        else:
            rec['sources_en'], rec['sources_zh'] = o['sources_en'], z['sources']
            rec['targets'] = [{'label_en': t['label_en'], 'label_zh': tz, 'correct_en': t['correct_en'],
                               'correct_zh': z['sources'][o['sources_en'].index(t['correct_en'])]}
                              for t, tz in zip(o['targets'], z['targets'])]
            if len(z['sources']) != len(o['sources_en']): errs.append((n, 'src len'))
    else:
        opts_en = {k: clean(v).replace('*file', '#file') for k, v in q['options'].items()}
        opts_zh = {k: clean(v) for k, v in z['options'].items()}
        rec['type'] = 'multi' if len(q['answer']) > 1 else 'single'
        rec['correctLetters'] = q['answer']
        rec['en'] = {'stem': stem_en, 'options': opts_en, 'explanation': q['explanation']}
        rec['zh'] = {'stem': stem_zh, 'options': opts_zh, 'explanation': z['explanation']}
        if list(opts_en) != list(opts_zh): errs.append((n, 'letters'))
        if any(a not in opts_en for a in q['answer']): errs.append((n, 'answer'))
        if any(not v for v in list(opts_en.values()) + list(opts_zh.values())): errs.append((n, 'empty opt'))
    if not stem_en or not stem_zh: errs.append((n, 'stem'))
    out.append(rec)

assert not errs, errs
with open('data_gh300.js', 'w') as f:
    f.write('// Auto-generated GH-300 question bank (129 questions, EN + ZH).\n'
            '// Source PDF is English-only: the ZH side is a translation; the 4 hotspot /\n'
            '// drag-drop panels were read from the page images (gh300_build/overrides.json).\n')
    f.write('window.QUESTIONS_GH300 = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';\n')
import collections
print(len(out), collections.Counter(r['type'] for r in out))
