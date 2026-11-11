const fs = require('fs'), { JSDOM } = require('jsdom');
const html = fs.readFileSync('index.html', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');
const EXAMS = [
  { file: 'data.js', bank: 'QUESTIONS', label: 'AB-100' },
  { file: 'data_ab620.js', bank: 'QUESTIONS_AB620', label: 'AB-620' },
  { file: 'data_ai103.js', bank: 'QUESTIONS_AI103', label: 'AI-103' },
  { file: 'data_dp800.js', bank: 'QUESTIONS_DP800', label: 'DP-800' },
  { file: 'data_gh300.js', bank: 'QUESTIONS_GH300', label: 'GH-300' },
];
const dataJs = EXAMS.map(e => fs.readFileSync(e.file, 'utf8'));
const kwJs = fs.readFileSync('keywords.js', 'utf8');

function run(examIdx, bank, label) {
  const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true });
  const { window } = dom, { document } = window;
  window.confirm = () => true; window.scrollTo = () => {}; window.alert = () => {};
  dataJs.forEach(src => window.eval(src));
  window.eval(kwJs);
  window.eval(appJs);
  const $ = s => document.querySelector(s);
  const click = e => e.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
  const QS = window[bank];

  // home -> pick exam
  const cards = document.querySelectorAll('#screen-home .exam-card');
  if (cards.length !== EXAMS.length) throw new Error(`${label}: expected ${EXAMS.length} exam cards, got ${cards.length}`);
  click(cards[examIdx]);
  // setup -> start (the .btnrow start button)
  click(document.querySelector('#screen-setup .btnrow .btn'));

  const palette = () => document.querySelectorAll('#screen-exam .palette .pdot');
  for (let i = 0; i < QS.length; i++) {
    click(palette()[i]); const q = QS[i];
    if (q.type === 'single') { const keys = Object.keys(q.en.options); const ch = document.querySelectorAll('#screen-exam .choice'); click(ch[keys.indexOf(q.correctLetters[0])]); }
    else if (q.type === 'multi') { const keys = Object.keys(q.en.options); const ch = document.querySelectorAll('#screen-exam .choice'); q.correctLetters.forEach(l => click(ch[keys.indexOf(l)])); }
    else if (q.type === 'hotspot') { const sel = document.querySelectorAll('#screen-exam .hsbox select'); q.boxes.forEach((b, bi) => { sel[bi].value = String(b.options_en.indexOf(b.correct_en)); sel[bi].dispatchEvent(new window.Event('change', { bubbles: true })); }); }
    else if (q.type === 'dragdrop') { q.targets.forEach((t, ti) => { const ci = q.sources_en.indexOf(t.correct_en); click(document.querySelectorAll('#screen-exam .ddcol .source')[ci]); click(document.querySelectorAll('#screen-exam .target')[ti]); }); }
  }
  const examBtns = [...document.querySelectorAll('#screen-exam .actionbar .btn')];
  click(examBtns[examBtns.length - 1]); // submit
  const pct = $('#screen-result .pct').textContent;
  const stats = [...document.querySelectorAll('#screen-result .stat b')].map(b => b.textContent);
  console.log(`[${label}] full-correct -> score: ${pct}  [correct,wrong,unans,total]: ${stats}`);
  if (pct !== '100%') { console.error(`[${label}] EXPECTED 100% — got ${pct}`); process.exit(1); }
}

EXAMS.forEach((e, i) => run(i, e.bank, e.label));
console.log(`PASS: all ${EXAMS.length} exams reach 100% through the UI (home -> setup -> exam -> result).`);
