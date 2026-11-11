/* Multi-exam Simulator — logic (AB-100 / AB-620 / AI-103 / DP-800 / GH-300), 日系淡色 theme
   Two practice modes: 'exam' (模拟考试, no highlights) and 'study' (背题, keyword highlighter). */
(function () {
  'use strict';

  // ---------- exam registry ----------
  const EXAMS = [
    {
      id: 'ab100', code: 'AB-100', logo: 'AB', pass: 70,
      data: window.QUESTIONS || [],
      name: { zh: 'Agentic AI 商业解决方案架构师', en: 'Agentic AI Business Solutions Architect' },
      desc: {
        zh: '面向 Agentic AI 商业解决方案的架构与设计能力认证。',
        en: 'Architecture & design certification for Agentic AI business solutions.'
      }
    },
    {
      id: 'ab620', code: 'AB-620', logo: 'AB', pass: 70,
      data: window.QUESTIONS_AB620 || [],
      name: { zh: 'Microsoft Copilot Studio 代理开发', en: 'Microsoft Copilot Studio Agent Development' },
      desc: {
        zh: '使用 Microsoft Copilot Studio 构建、集成与治理 AI 代理的开发认证。',
        en: 'Building, integrating and governing AI agents with Microsoft Copilot Studio.'
      }
    },
    {
      id: 'ai103', code: 'AI-103', logo: 'AI', pass: 70,
      data: window.QUESTIONS_AI103 || [],
      name: { zh: '在 Azure 上开发 AI 应用和代理', en: 'Developing AI Apps and Agents on Azure' },
      desc: {
        zh: '使用 Microsoft Foundry 在 Azure 上构建生成式 AI 应用与代理解决方案的开发认证。',
        en: 'Building generative AI apps and agent solutions on Azure with Microsoft Foundry.'
      }
    },
    {
      id: 'dp800', code: 'DP-800', logo: 'DP', pass: 70,
      data: window.QUESTIONS_DP800 || [],
      name: { zh: '开发支持 AI 的数据库解决方案', en: 'Developing AI-Enabled Database Solutions' },
      desc: {
        zh: '在 Azure SQL 与 SQL Server 上设计、保护并实现支持 AI（向量搜索 / RAG）的数据库解决方案。',
        en: 'Designing, securing and implementing AI-enabled (vector search / RAG) database solutions on Azure SQL and SQL Server.'
      }
    },
    {
      id: 'gh300', code: 'GH-300', logo: 'GH', pass: 70,
      data: window.QUESTIONS_GH300 || [],
      name: { zh: 'GitHub Copilot 认证', en: 'GitHub Copilot' },
      desc: {
        zh: 'GitHub Copilot 的功能、隐私与内容排除、负责任 AI、提示工程与开发效率。',
        en: 'GitHub Copilot features, privacy & content exclusions, responsible AI, prompt engineering and productivity.'
      }
    }
  ];

  // ---------- i18n for UI chrome ----------
  const I18N = {
    zh: {
      brandSub: '日系淡色 · 模拟考试',
      homeTitle: '选择你要练习的考试',
      homeSub: '从下方选择一门考试，进入后可选择语言（简体中文 / English）与考试范围。',
      questions: '题', start: '开始练习',
      langLabel: '题目语言', scopeLabel: '考试范围',
      modeLabel: '练习模式', modeExam: '模拟考试', modeStudy: '背题模式', studyTag: '背题',
      modeStudyHint: '背题模式：每题直接显示正确答案与解析（题干关键词用荧光笔标出），按 → 快速翻页；不熟的题按 M 标记，之后可只练标记题。',
      studyShowLabel: '答案显示', studyShowOn: '直接显示答案（推荐）', studyShowOff: '先遮住，按 ↑ 再看（自测）',
      answerBanner: '答案', markUnsure: '☆ 标记不熟', unmarkUnsure: '★ 已标记不熟',
      scopeUnsure: n => `只练标记不熟的题（${n} 题）`, clearMarks: '清除标记',
      clearMarksConfirm: n => `确定清除本考试的 ${n} 个「不熟」标记吗？`,
      modeExamHint: '模拟考试：不显示荧光笔标注，按真实考试作答。',
      typesLabel: '题型（可多选）', typesHint: '至少选择一种题型', typesNone: '请至少选择一种题型',
      scopeAll: n => `全部题目（${n} 题）`, scopeCustom: '自定义题数',
      countLabel: '题数', countHint: n => `范围 1 – ${n}`,
      orderLabel: '出题顺序', orderSeq: '顺序（第 1 题 → 最后一题）', orderRand: '随机顺序',
      startExam: '开始考试', backHome: '← 选择其他考试',
      showAnswer: '查看解答', hideAnswer: '隐藏解答', solution: '参考答案',
      typeLabel: { single: '单选题', multi: '多选题', hotspot: '热点题', dragdrop: '拖放题' },
      caseStudy: '案例研究', scenario: '案例背景（点击展开）',
      multiNote: n => `多选题：请选择 ${n} 个正确答案。`,
      hotspotNote: '为每一项从下拉菜单中选择正确选项。',
      dragNote: '将左侧选项拖到（或点选后再点击）右侧对应的目标。选项可重复使用。',
      pickPlaceholder: '— 请选择 —', emptySlot: '拖放 / 点选放置于此',
      prev: '上一题', next: '下一题', finish: '交卷',
      finishConfirm: n => n > 0 ? `还有 ${n} 题未作答，确定要交卷吗？` : '确定要交卷吗？',
      jump: '题号导航', resultTitle: '考试结果',
      score: '得分', correct: '答对', wrong: '答错', unanswered: '未作答', total: '总题数',
      passNote: (p, m) => p >= m ? `达到及格线（${m}%）🎉` : `未达及格线（${m}%）`,
      reviewWrong: '复习错题', reviewAll: '查看全部解析', retry: '重新开始', backResult: '返回结果',
      yourAns: '你的答案', correctAns: '正确答案', explanation: '解析', none: '（未作答）',
      reviewTitleWrong: '错题复习', reviewTitleAll: '全部题目解析', noWrong: '太棒了，没有错题！🎉',
      checkAnswer: '检查答案', redo: '再答一次', answerHint: '先重新作答，再点「检查答案」揭晓。',
      reviewHint: '重新作答全部错题后，点「复习交卷」查看这次的成绩。',
      reviewSubmit: '复习交卷',
      reviewSubmitConfirm: n => n > 0 ? `还有 ${n} 题未作答，确定要交卷吗？` : '确定要交这次复习的卷吗？',
      reviewResultTitle: '错题复习结果',
      reviewCorrect: '这次答对', reviewWrongAgain: '又答错',
      reviewAgainTitle: '再次错题复习', reviewAgain: n => `复习又错的题目（${n}）`,
      reviewAllPracticed: '查看本次全部解析', allRight: '全部答对了，太棒了！🎉',
      autoMarked: n => `已把 ${n} 道答错的题自动加入「不熟」标记（错题本），下次可在考试范围选「只练标记不熟的题」。`,
      unmarkedDone: n => `${n} 道标记题这次答对了，已自动取消「不熟」标记。`,
      resumeTitle: '继续上次的练习', resumeGo: '继续 →', resumeDrop: '放弃',
      resumeInfo: (code, mode, a, b, n) => `${code} · ${mode} · 第 ${a} / ${b} 题 · 已作答 ${n} 题`,
      kbHint: '键盘：↑ 显示解答 ／ ↓ 隐藏解答 ／ → 下一题 ／ ← 上一题 ／ M 标记不熟　·　触控板：双指左右滑动切换上一题 / 下一题',
      footnote: code => `当前题库：${code} · 本工具仅供学习练习`,
      qof: (a, b) => `第 ${a} / ${b} 题`, box: n => `第 ${n} 项`,
      items: '可选项', targets: '目标',
      codeLabel: { code: '代码片段', exhibit: '题目附图' },
      codeSlot: n => `〔框 ${n}〕`, boxTag: n => `框 ${n}`
    },
    en: {
      brandSub: 'Japanese-pastel · Exam Simulator',
      homeTitle: 'Choose an exam to practice',
      homeSub: 'Pick an exam below. Inside you can choose the language (Simplified Chinese / English) and the scope.',
      questions: 'questions', start: 'Practice',
      langLabel: 'Question language', scopeLabel: 'Exam scope',
      modeLabel: 'Practice mode', modeExam: 'Exam simulation', modeStudy: 'Study (memorize)', studyTag: 'Study',
      modeStudyHint: 'Study mode: every question shows its correct answer and explanation right away (stem keywords highlighted); press → to flip through. Press M to flag shaky questions and drill only those later.',
      studyShowLabel: 'Answer display', studyShowOn: 'Show answers right away (recommended)', studyShowOff: 'Hide first, press ↑ to reveal (self-test)',
      answerBanner: 'Answer', markUnsure: '☆ Flag as shaky', unmarkUnsure: '★ Flagged as shaky',
      scopeUnsure: n => `Only flagged questions (${n})`, clearMarks: 'Clear flags',
      clearMarksConfirm: n => `Clear all ${n} flag(s) for this exam?`,
      modeExamHint: 'Exam mode: no highlighting; answer like the real exam.',
      typesLabel: 'Question types (multi-select)', typesHint: 'Select at least one type', typesNone: 'Please select at least one question type',
      scopeAll: n => `All questions (${n})`, scopeCustom: 'Custom number',
      countLabel: 'Questions', countHint: n => `Range 1 – ${n}`,
      orderLabel: 'Question order', orderSeq: 'Sequential (Q1 → last)', orderRand: 'Random order',
      startExam: 'Start exam', backHome: '← Choose another exam',
      showAnswer: 'Show answer', hideAnswer: 'Hide answer', solution: 'Answer',
      typeLabel: { single: 'Single choice', multi: 'Multiple choice', hotspot: 'Hotspot', dragdrop: 'Drag & drop' },
      caseStudy: 'Case study', scenario: 'Case study background (click to expand)',
      multiNote: n => `Multiple choice: select ${n} correct answer(s).`,
      hotspotNote: 'Select the correct option from each dropdown.',
      dragNote: 'Drag (or tap to pick, then tap a target) the items on the left into the targets on the right. Items can be reused.',
      pickPlaceholder: '— Select —', emptySlot: 'Drop / tap to place here',
      prev: 'Previous', next: 'Next', finish: 'Submit',
      finishConfirm: n => n > 0 ? `${n} question(s) are unanswered. Submit anyway?` : 'Submit the exam?',
      jump: 'Question navigator', resultTitle: 'Exam results',
      score: 'Score', correct: 'Correct', wrong: 'Wrong', unanswered: 'Unanswered', total: 'Total',
      passNote: (p, m) => p >= m ? `Passing (≥${m}%) 🎉` : `Below passing mark (${m}%)`,
      reviewWrong: 'Review wrong', reviewAll: 'Review all', retry: 'Restart', backResult: 'Back to results',
      yourAns: 'Your answer', correctAns: 'Correct answer', explanation: 'Explanation', none: '(no answer)',
      reviewTitleWrong: 'Wrong-answer review', reviewTitleAll: 'All questions review', noWrong: 'Perfect — no wrong answers! 🎉',
      checkAnswer: 'Check answer', redo: 'Try again', answerHint: 'Answer it again first, then tap “Check answer”.',
      reviewHint: 'Re-answer every question, then tap “Submit review” to see how you did.',
      reviewSubmit: 'Submit review',
      reviewSubmitConfirm: n => n > 0 ? `${n} question(s) are unanswered. Submit anyway?` : 'Submit this review round?',
      reviewResultTitle: 'Wrong-answer review results',
      reviewCorrect: 'Correct this time', reviewWrongAgain: 'Wrong again',
      reviewAgainTitle: 'Review round · still wrong', reviewAgain: n => `Review the ${n} still wrong`,
      reviewAllPracticed: 'Review all in this round', allRight: 'All correct this time! 🎉',
      autoMarked: n => `${n} wrong answer(s) were flagged as shaky automatically. Pick “Only flagged questions” next time to drill them.`,
      unmarkedDone: n => `${n} flagged question(s) answered correctly this time — flag removed automatically.`,
      resumeTitle: 'Continue where you left off', resumeGo: 'Continue →', resumeDrop: 'Discard',
      resumeInfo: (code, mode, a, b, n) => `${code} · ${mode} · Question ${a} / ${b} · ${n} answered`,
      kbHint: 'Keyboard: ↑ show answer / ↓ hide answer / → next / ← previous / M flag  ·  Trackpad: swipe left / right for next / previous',
      footnote: code => `Question bank: ${code} · For study practice only`,
      qof: (a, b) => `Question ${a} / ${b}`, box: n => `Item ${n}`,
      items: 'Items', targets: 'Targets',
      codeLabel: { code: 'Code segment', exhibit: 'Exhibit' },
      codeSlot: n => `[Box ${n}]`, boxTag: n => `Box ${n}`
    }
  };

  // ---------- state ----------
  const S = {
    lang: 'zh',
    mode: 'exam',      // 'exam' = 模拟考试 (no highlights) | 'study' = 背题 (highlights)
    studyShow: true,   // study mode: answers start revealed unless the learner hides them
    exam: null,        // active exam object
    questions: [],     // working set (question objects)
    answers: {},
    current: 0,
    finished: false,
    review: null,
    reveal: {},        // id -> bool : show solution for this question during the exam
    seen: {},          // id -> bool : solution was revealed at least once (unlocks the navigator colour)
    reviewAnswers: {}, // id -> answer : fresh re-attempt during wrong-answer practice
    reviewReveal: {},  // id -> bool : show solution for this question during wrong-answer practice
    reviewSeen: {},    // id -> bool : solution was revealed at least once during that practice
  };
  // Arrow-key navigation for whichever question view is on screen.
  // Each render sets the four handlers it supports; null disables the keys.
  let keyNav = null;
  const T = () => I18N[S.lang];
  const bank = () => (S.exam ? S.exam.data : []);

  const $ = sel => document.querySelector(sel);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = s => (s == null ? '' : String(s)).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ---------- language helpers ----------
  function L(q) { return q[S.lang] || q.en; }
  function qStem(q) { return L(q).stem || q.en.stem; }
  function qOptions(q) { const o = L(q).options; return (o && Object.keys(o).length) ? o : q.en.options; }
  function qScenario(q) { return (L(q).scenario || q.en.scenario || ''); }
  function qExplanation(q) { return L(q).explanation || q.en.explanation || ''; }
  function boxPrompt(b) { return S.lang === 'zh' ? (b.prompt_zh || b.prompt_en) : b.prompt_en; }
  function boxOptions(b) { return S.lang === 'zh' ? (b.options_zh && b.options_zh.length ? b.options_zh : b.options_en) : b.options_en; }
  function ddSources(q) { return S.lang === 'zh' ? (q.sources_zh && q.sources_zh.length ? q.sources_zh : q.sources_en) : q.sources_en; }
  function tgtLabel(t) { return S.lang === 'zh' ? (t.label_zh || t.label_en) : t.label_en; }

  function boxCorrectIdx(b) { return b.options_en.indexOf(b.correct_en); }
  function tgtCorrectIdx(q, t) { return q.sources_en.indexOf(t.correct_en); }

  // ---------- study-mode keyword highlight ----------
  function studyOn() { return S.mode === 'study'; }
  // Exam mode starts every question hidden; study mode starts it revealed
  // (unless the learner chose self-test). An explicit toggle always wins.
  function isRevealed(q) { return S.reveal[q.id] != null ? S.reveal[q.id] : (studyOn() && S.studyShow); }

  // ---------- "shaky" flags (persisted per exam in localStorage) ----------
  const MARK_KEY = 'examsim.unsure';
  let MARKS = {};
  try { MARKS = JSON.parse(localStorage.getItem(MARK_KEY)) || {}; } catch (e) { MARKS = {}; }
  function markList() { return (S.exam && MARKS[S.exam.code]) || []; }
  function isMarked(q) { return markList().includes(q.id); }
  function saveMarks() { try { localStorage.setItem(MARK_KEY, JSON.stringify(MARKS)); } catch (e) { /* private mode: flags last for this tab only */ } }
  function toggleMark(q) {
    const list = markList().slice();
    const i = list.indexOf(q.id);
    if (i >= 0) list.splice(i, 1); else list.push(q.id);
    MARKS[S.exam.code] = list; saveMarks();
  }
  function setMarks(ids, on) {
    const list = markList().filter(id => on || !ids.includes(id));
    if (on) ids.forEach(id => { if (!list.includes(id)) list.push(id); });
    MARKS[S.exam.code] = list; saveMarks();
  }

  // ---------- remembered settings + in-progress session (localStorage) ----------
  const SETTINGS_KEY = 'examsim.settings', SESSION_KEY = 'examsim.session';
  function loadJSON(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function saveJSON(k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage blocked */ } }
  function saveSettings() {
    const { mode, studyShow, scope, count, order } = setupCfg;
    saveJSON(SETTINGS_KEY, { lang: S.lang, mode, studyShow, scope, count, order });
  }
  // Snapshot of the running exam/study round so a reload or closed tab can resume it.
  function saveSession() {
    if (!S.exam || S.finished || !S.questions.length) return;
    saveJSON(SESSION_KEY, {
      code: S.exam.code, ids: S.questions.map(q => q.id), current: S.current,
      mode: S.mode, studyShow: S.studyShow, answers: S.answers, reveal: S.reveal, seen: S.seen
    });
  }
  function qKW(q) {
    const m = (window.STUDY_KW && S.exam) ? window.STUDY_KW[S.exam.code] : null;
    const rec = (m && m[q.id]) ? m[q.id] : null;
    if (!rec) return { stem: [], answer: [] };
    return {
      stem: (S.lang === 'zh' ? rec.stem_zh : rec.stem_en) || [],
      answer: (S.lang === 'zh' ? rec.answer_zh : rec.answer_en) || []
    };
  }
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // HTML-escape `text`, then wrap each verbatim phrase in <mark class="hl">.
  // A single alternation regex (longest phrase first) does one left-to-right
  // pass, so matches never overlap and marks never nest.
  function hlText(text, phrases) {
    const safe = esc(text);
    if (!phrases || !phrases.length) return safe;
    const list = [...new Set(phrases.filter(Boolean))]
      .map(esc).filter(Boolean)
      .sort((a, b) => b.length - a.length);
    if (!list.length) return safe;
    const re = new RegExp('(' + list.map(reEsc).join('|') + ')', 'g');
    return safe.replace(re, '<mark class="hl">$1</mark>');
  }
  // stem HTML: highlighted in study mode, plain escaped otherwise
  function stemHTML(q) { return studyOn() ? hlText(qStem(q), qKW(q).stem) : esc(qStem(q)); }

  // ---------- code / exhibit block ----------
  // Some questions ask you to "complete the code": the snippet lives in an
  // image in the source PDF, so the boxes alone give no context. q.code holds
  // the transcribed snippet with `[[n]]` where box / target n goes.
  // Boxes/targets are numbered only when a code block references them.
  function hasSlots(q) { return !!(q.code && q.code.text && /\[\[\d+\]\]/.test(q.code.text)); }
  // Prefix a box/target label with its number so it maps onto the `[[n]]`
  // slot in the code. A label that is already just "Box 1" is replaced, not
  // doubled up.
  const GENERIC_LABEL = /^(box|target|item|框|项)\s*\d+[.:：]?$/i;
  function slotLabel(q, i, label) {
    if (!hasSlots(q)) return label;
    const tag = T().boxTag(i + 1);
    return GENERIC_LABEL.test((label || '').trim()) ? tag : tag + ' · ' + label;
  }
  function codeTitle(c) {
    const t = S.lang === 'zh' ? c.title_zh : c.title_en;
    if (t) return t;
    const kind = (c.lang === 'table' || c.lang === 'exhibit') ? 'exhibit' : 'code';
    return T().codeLabel[kind];
  }
  function codeBlock(q) {
    const c = q.code;
    if (!c || !c.text) return null;
    const raw = (S.lang === 'zh' && c.text_zh) ? c.text_zh : c.text;
    const slot = T().codeSlot;
    const html = esc(raw).replace(/\[\[(\d+)\]\]/g,
      (_, n) => `<span class="cslot">${esc(slot(n))}</span>`);
    const wrap = el('div', 'codewrap');
    wrap.appendChild(el('div', 'clabel', esc(codeTitle(c))));
    const pre = el('pre', 'codeblock');
    pre.appendChild(el('code', null, html));
    wrap.appendChild(pre);
    return wrap;
  }

  // Compact "the answer is …" summary shown on top of the solution in study
  // mode, so the answer can be memorised at a glance.
  function answerBanner(q) {
    const t = T();
    let lines = [];
    if (q.type === 'single' || q.type === 'multi') {
      const opts = qOptions(q);
      lines = q.correctLetters.map(l => `<b>${esc(l)}.</b> ${esc(opts[l])}`);
    } else if (q.type === 'hotspot') {
      lines = q.boxes.map((b, i) => `${esc(slotLabel(q, i, boxPrompt(b)))} → <b>${esc(boxOptions(b)[boxCorrectIdx(b)])}</b>`);
    } else if (q.type === 'dragdrop') {
      const src = ddSources(q);
      lines = q.targets.map((tg, i) => `${esc(slotLabel(q, i, tgtLabel(tg)))} → <b>${esc(src[tgtCorrectIdx(q, tg)])}</b>`);
    }
    const box = el('div', 'answer-banner');
    box.appendChild(el('div', 'ab-label', esc(t.answerBanner)));
    box.appendChild(el('div', 'ab-body', lines.join('<br>')));
    return box;
  }

  // ---------- grading ----------
  function isAnswered(q, store) {
    const a = (store || S.answers)[q.id];
    if (a == null) return false;
    if (q.type === 'single') return !!a;
    if (q.type === 'multi') return Array.isArray(a) && a.length > 0;
    if (q.type === 'hotspot') return Array.isArray(a) && a.some(x => x != null && x !== '');
    if (q.type === 'dragdrop') return Array.isArray(a) && a.some(x => x != null && x !== '');
    return false;
  }
  function gradeQuestion(q, store) {
    const a = (store || S.answers)[q.id];
    if (q.type === 'single') return { correct: a === q.correctLetters[0], answered: !!a };
    if (q.type === 'multi') {
      const sel = Array.isArray(a) ? a.slice().sort() : [];
      const cor = q.correctLetters.slice().sort();
      return { correct: sel.length === cor.length && sel.every((x, i) => x === cor[i]), answered: sel.length > 0 };
    }
    if (q.type === 'hotspot') {
      const sel = Array.isArray(a) ? a : [];
      let all = true, answered = false, parts = [];
      q.boxes.forEach((b, i) => {
        const ci = boxCorrectIdx(b); const si = sel[i];
        if (si != null && si !== '') answered = true;
        const ok = Number(si) === ci; parts.push(ok); if (!ok) all = false;
      });
      return { correct: all, answered, parts };
    }
    if (q.type === 'dragdrop') {
      const sel = Array.isArray(a) ? a : [];
      let all = true, answered = false, parts = [];
      q.targets.forEach((t, i) => {
        const ci = tgtCorrectIdx(q, t); const si = sel[i];
        if (si != null && si !== '') answered = true;
        const ok = Number(si) === ci; parts.push(ok); if (!ok) all = false;
      });
      return { correct: all, answered, parts };
    }
    return { correct: false, answered: false };
  }

  // ===================================================================
  //  HOME / EXAM PICKER
  // ===================================================================
  function renderHome() {
    const t = T();
    const c = $('#screen-home');
    c.innerHTML = '';
    const hero = el('div', 'home-hero');
    hero.appendChild(el('h1', null, t.homeTitle));
    hero.appendChild(el('p', 'sub', t.homeSub));
    c.appendChild(hero);

    const sess = loadJSON(SESSION_KEY);
    const sessExam = sess && EXAMS.find(ex => ex.code === sess.code);
    if (sessExam && sess.ids && sess.ids.length) {
      const rc = el('div', 'card resume-card');
      rc.appendChild(el('div', 'flabel', esc(t.resumeTitle)));
      const answered = sess.ids.filter(id => {
        const q = sessExam.data.find(x => x.id === id);
        return q && isAnswered(q, sess.answers || {});
      }).length;
      rc.appendChild(el('div', 'resume-info', esc(t.resumeInfo(sess.code, sess.mode === 'study' ? t.modeStudy : t.modeExam,
        (sess.current | 0) + 1, sess.ids.length, answered))));
      const row = el('div', 'btnrow');
      const go = el('button', 'btn', esc(t.resumeGo));
      go.addEventListener('click', () => resumeSession(sess, sessExam));
      const drop = el('button', 'btn ghost', esc(t.resumeDrop));
      drop.addEventListener('click', () => { saveJSON(SESSION_KEY, null); renderHome(); });
      row.appendChild(go); row.appendChild(drop);
      rc.appendChild(row);
      c.appendChild(rc);
    }

    const grid = el('div', 'exam-grid');
    EXAMS.forEach(ex => {
      const n = ex.data.length;
      const card = el('div', 'exam-card');
      const top = el('div', 'ec-top');
      const logo = el('div', 'ec-logo');
      logo.style.background = {
        pl500: 'linear-gradient(135deg,#6f86ad,#9fb1cf)',
        ab620: 'linear-gradient(135deg,#b58aa6,#d8b3c6)',
      }[ex.id] || 'linear-gradient(135deg,#8a93a3,#b6bdc9)';
      logo.textContent = ex.logo;
      top.appendChild(logo);
      const head = el('div');
      head.appendChild(el('div', 'ec-code', ex.code));
      head.appendChild(el('div', 'ec-name', ex.name[S.lang]));
      top.appendChild(head);
      card.appendChild(top);
      card.appendChild(el('div', 'ec-desc', esc(ex.desc[S.lang])));
      const meta = el('div', 'ec-meta');
      meta.appendChild(el('span', 'chip', `${n} ${t.questions}`));
      const counts = typeCounts(ex.data);
      Object.keys(counts).forEach(k => meta.appendChild(el('span', 'chip', `${t.typeLabel[k]} ${counts[k]}`)));
      card.appendChild(meta);
      card.appendChild(el('div', 'ec-go', t.start + ' →'));
      if (n === 0) { card.style.opacity = '.5'; card.style.pointerEvents = 'none'; }
      card.addEventListener('click', () => { S.exam = ex; setupCfg.types = null; show('setup'); renderSetup(); applyLangChrome(); window.scrollTo(0, 0); });
      grid.appendChild(card);
    });
    c.appendChild(grid);
  }

  function typeCounts(data) {
    const c = {};
    data.forEach(q => { c[q.type] = (c[q.type] || 0) + 1; });
    return c;
  }

  // ===================================================================
  //  SETUP SCREEN
  // ===================================================================
  let setupCfg = { mode: 'exam', studyShow: true, scope: 'all', count: 20, order: 'seq', types: null };
  {
    const saved = loadJSON(SETTINGS_KEY);
    if (saved) {
      ['mode', 'studyShow', 'scope', 'count', 'order'].forEach(k => { if (saved[k] != null) setupCfg[k] = saved[k]; });
      if (I18N[saved.lang]) S.lang = saved.lang;
    }
  }

  // a radio pill that re-renders the whole setup screen (so dependent hints update)
  function modePill(val, label, on) {
    const p = el('div', 'opt-pill' + (on ? ' sel' : ''));
    p.innerHTML = `<span class="ic">${on ? '●' : '○'}</span><span>${esc(label)}</span>`;
    p.addEventListener('click', () => { setupCfg.mode = val; renderSetup(); });
    return p;
  }

  const TYPE_ORDER = ['single', 'multi', 'hotspot', 'dragdrop'];
  // pool of the active bank restricted to the currently selected question types
  function filteredPool() {
    const sel = setupCfg.types || [];
    return bank().filter(q => sel.includes(q.type));
  }

  function renderSetup() {
    const t = T(); const ex = S.exam;
    const c = $('#screen-setup'); c.innerHTML = '';
    const card = el('div', 'card');

    const back = el('button', 'btn ghost sm', t.backHome);
    back.style.marginBottom = '6px';
    back.addEventListener('click', () => { show('home'); renderHome(); applyLangChrome(); window.scrollTo(0, 0); });
    card.appendChild(back);

    // ---- available question types (in fixed order) for this exam ----
    const counts = typeCounts(bank());
    const availTypes = TYPE_ORDER.filter(k => counts[k]);
    if (setupCfg.types == null) setupCfg.types = availTypes.slice();       // default: all types
    else setupCfg.types = setupCfg.types.filter(k => availTypes.includes(k));

    const fc = filteredPool().length;                                     // # questions in current selection
    setupCfg.count = Math.max(1, Math.min(setupCfg.count, Math.max(1, fc)));

    card.appendChild(el('h1', null, `${ex.code} · ${ex.name[S.lang]}`));
    card.appendChild(el('p', 'sub', `${t.scopeAll(fc)} · ${t.start}`));

    // ---- practice mode (study vs exam) ----
    const fMode = el('div', 'field');
    fMode.appendChild(el('label', 'flabel', t.modeLabel));
    const modeOpts = el('div', 'opts');
    modeOpts.appendChild(modePill('exam', t.modeExam, setupCfg.mode === 'exam'));
    modeOpts.appendChild(modePill('study', t.modeStudy, setupCfg.mode === 'study'));
    fMode.appendChild(modeOpts);
    fMode.appendChild(el('div', 'hint', setupCfg.mode === 'study' ? t.modeStudyHint : t.modeExamHint));
    card.appendChild(fMode);

    if (setupCfg.mode === 'study') {
      const fShow = el('div', 'field');
      fShow.appendChild(el('label', 'flabel', t.studyShowLabel));
      const showOpts = el('div', 'opts');
      showOpts.appendChild(pill('studyShow', true, t.studyShowOn, setupCfg.studyShow));
      showOpts.appendChild(pill('studyShow', false, t.studyShowOff, !setupCfg.studyShow));
      fShow.appendChild(showOpts);
      card.appendChild(fShow);
    }

    // ---- question-type filter (multi-select) ----
    const fTypes = el('div', 'field');
    fTypes.appendChild(el('label', 'flabel', t.typesLabel));
    const typeOpts = el('div', 'opts');
    availTypes.forEach(k => {
      typeOpts.appendChild(multiPill(k, `${t.typeLabel[k]}（${counts[k]}）`, setupCfg.types.includes(k)));
    });
    fTypes.appendChild(typeOpts);
    fTypes.appendChild(el('div', 'hint', setupCfg.types.length ? t.typesHint : t.typesNone));
    card.appendChild(fTypes);

    const fScope = el('div', 'field');
    fScope.appendChild(el('label', 'flabel', t.scopeLabel));
    const scopeOpts = el('div', 'opts');
    scopeOpts.appendChild(pill('scope', 'all', t.scopeAll(fc), setupCfg.scope === 'all'));
    scopeOpts.appendChild(pill('scope', 'custom', t.scopeCustom, setupCfg.scope === 'custom'));
    const nMarked = filteredPool().filter(isMarked).length;
    if (nMarked) scopeOpts.appendChild(pill('scope', 'unsure', t.scopeUnsure(nMarked), setupCfg.scope === 'unsure'));
    else if (setupCfg.scope === 'unsure') setupCfg.scope = 'all';
    fScope.appendChild(scopeOpts);
    if (markList().length) {
      const clr = el('button', 'btn ghost sm', t.clearMarks);
      clr.style.marginTop = '8px';
      clr.addEventListener('click', () => {
        if (!confirm(t.clearMarksConfirm(markList().length))) return;
        delete MARKS[S.exam.code]; saveMarks(); renderSetup();
      });
      fScope.appendChild(clr);
    }
    card.appendChild(fScope);

    const fCount = el('div', 'field'); fCount.id = 'fCount';
    fCount.appendChild(el('label', 'flabel', t.countLabel));
    const ci = el('input'); ci.type = 'number'; ci.min = 1; ci.max = fc; ci.value = setupCfg.count; ci.id = 'countInput';
    ci.addEventListener('input', () => { setupCfg.count = Math.max(1, Math.min(fc, parseInt(ci.value || '1', 10))); });
    fCount.appendChild(ci);
    fCount.appendChild(el('div', 'hint', t.countHint(fc)));
    if (setupCfg.scope !== 'custom') fCount.classList.add('hidden');
    card.appendChild(fCount);

    const fOrder = el('div', 'field');
    fOrder.appendChild(el('label', 'flabel', t.orderLabel));
    const orderOpts = el('div', 'opts');
    orderOpts.appendChild(pill('order', 'seq', t.orderSeq, setupCfg.order === 'seq'));
    orderOpts.appendChild(pill('order', 'rand', t.orderRand, setupCfg.order === 'rand'));
    fOrder.appendChild(orderOpts);
    card.appendChild(fOrder);

    const row = el('div', 'btnrow');
    const startBtn = el('button', 'btn', t.startExam);
    startBtn.disabled = setupCfg.types.length === 0 || fc === 0;
    startBtn.addEventListener('click', startExam);
    row.appendChild(startBtn);
    card.appendChild(row);

    c.appendChild(card);
  }

  // multi-select pill: toggles a value in setupCfg.types, then re-renders setup
  function multiPill(val, label, on) {
    const p = el('div', 'opt-pill' + (on ? ' sel' : ''));
    p.innerHTML = `<span class="ic">${on ? '✓' : '○'}</span><span>${esc(label)}</span>`;
    p.addEventListener('click', () => {
      const i = setupCfg.types.indexOf(val);
      if (i >= 0) setupCfg.types.splice(i, 1); else setupCfg.types.push(val);
      renderSetup();
    });
    return p;
  }

  function pill(group, val, label, on) {
    const p = el('div', 'opt-pill' + (on ? ' sel' : ''));
    p.innerHTML = `<span class="ic">${on ? '●' : '○'}</span><span>${esc(label)}</span>`;
    p.addEventListener('click', () => {
      setupCfg[group] = val;
      if (group === 'scope') { const fc = $('#fCount'); if (fc) fc.classList.toggle('hidden', val !== 'custom'); }
      p.parentElement.querySelectorAll('.opt-pill').forEach(x => x.classList.remove('sel'));
      p.parentElement.querySelectorAll('.opt-pill .ic').forEach(x => x.textContent = '○');
      p.classList.add('sel'); p.querySelector('.ic').textContent = '●';
    });
    return p;
  }

  function startExam() {
    let pool = filteredPool();
    if (pool.length === 0) return;
    if (setupCfg.order === 'rand') pool = shuffle(pool);
    if (setupCfg.scope === 'custom') pool = pool.slice(0, setupCfg.count);
    if (setupCfg.scope === 'unsure') pool = pool.filter(isMarked);
    if (pool.length === 0) return;
    S.mode = setupCfg.mode; S.studyShow = setupCfg.studyShow;
    S.questions = pool; S.answers = {}; S.current = 0; S.finished = false; S.review = null; S.reveal = {}; S.seen = {};
    S.reviewAnswers = {}; S.reviewReveal = {}; S.reviewSeen = {};
    saveSettings();
    show('exam'); renderExam(); window.scrollTo(0, 0);
  }

  function resumeSession(sess, ex) {
    S.exam = ex; setupCfg.types = null;
    S.questions = sess.ids.map(id => ex.data.find(q => q.id === id)).filter(Boolean);
    S.mode = sess.mode; S.studyShow = sess.studyShow !== false;
    S.answers = sess.answers || {}; S.reveal = sess.reveal || {}; S.seen = sess.seen || {};
    S.current = Math.min(sess.current | 0, S.questions.length - 1);
    S.finished = false; S.review = null; S.reviewAnswers = {}; S.reviewReveal = {}; S.reviewSeen = {};
    show('exam'); renderExam(); applyLangChrome(); window.scrollTo(0, 0);
  }

  // ===================================================================
  //  EXAM SCREEN
  // ===================================================================
  function renderExam() {
    const t = T();
    const q = S.questions[S.current];
    const c = $('#screen-exam'); c.innerHTML = '';
    const card = el('div', 'card');

    const pb = el('div', 'progressbar'); const pi = el('i');
    pi.style.width = ((S.current + 1) / S.questions.length * 100) + '%';
    pb.appendChild(pi); card.appendChild(pb);

    const meta = el('div', 'qmeta');
    const left = el('div', 'left');
    left.appendChild(el('span', 'tag type', t.typeLabel[q.type]));
    if (studyOn()) left.appendChild(el('span', 'tag study', t.studyTag));
    if (q.isCaseStudy) left.appendChild(el('span', 'tag cs', t.caseStudy));
    left.appendChild(el('span', 'tag', '#' + q.id));
    if (q.section) left.appendChild(el('span', 'tag', esc(S.lang === 'zh' && q.sectionZh ? q.sectionZh : q.section)));
    meta.appendChild(left);
    meta.appendChild(el('span', 'counter', t.qof(S.current + 1, S.questions.length)));
    card.appendChild(meta);

    if (q.isCaseStudy && qScenario(q).trim()) {
      const d = el('details', 'scenario');
      d.appendChild(el('summary', null, esc(t.scenario)));
      d.appendChild(el('div', 'body', esc(qScenario(q).trim())));
      card.appendChild(d);
    }

    card.appendChild(el('div', 'stem', stemHTML(q)));
    { const cb = codeBlock(q); if (cb) card.appendChild(cb); }

    const revealed = isRevealed(q);
    if (revealed) S.seen[q.id] = true;
    if (revealed) {
      // ---- solution view (non-interactive) ----
      const g = gradeQuestion(q);
      // Choice questions show the answer on the highlighted option itself; the
      // banner is for hotspot / drag-drop, where it is the clearest summary.
      const boxed = q.type === 'hotspot' || q.type === 'dragdrop';
      if (studyOn() && boxed) card.appendChild(answerBanner(q));
      // an unattempted hotspot / drag-drop would only repeat the banner box by box
      const bannerOnly = studyOn() && boxed && !isAnswered(q);
      if (bannerOnly) { /* banner already lists every box */ }
      else if (q.type === 'single' || q.type === 'multi') {
        const ch = reviewChoices(q);
        if (studyOn()) ch.classList.add('study');
        card.appendChild(ch);
      }
      else if (q.type === 'hotspot') card.appendChild(reviewHotspot(q, g));
      else if (q.type === 'dragdrop') card.appendChild(reviewDragDrop(q, g));
      const exp = qExplanation(q).trim();
      if (exp) {
        const e = el('div', 'explain');
        e.appendChild(el('h4', null, t.explanation));
        e.appendChild(el('div', 'body', esc(exp)));
        card.appendChild(e);
      }
    } else {
      // ---- interactive view ----
      if (q.type === 'single') card.appendChild(renderChoices(q, false));
      else if (q.type === 'multi') {
        card.appendChild(el('div', 'multi-note', t.multiNote(q.correctLetters.length)));
        card.appendChild(renderChoices(q, true));
      } else if (q.type === 'hotspot') {
        card.appendChild(el('div', 'multi-note', t.hotspotNote));
        card.appendChild(renderHotspot(q));
      } else if (q.type === 'dragdrop') {
        card.appendChild(el('div', 'multi-note', t.dragNote));
        card.appendChild(renderDragDrop(q));
      }
    }

    // per-question: show answer or keep going
    // One action bar, pinned to the bottom of the screen (position: sticky) so
    // "next" stays reachable however long the question and explanation are.
    card.appendChild(el('div', 'kbhint', esc(t.kbHint)));
    const bar = el('div', 'actionbar');
    const prev = el('button', 'btn ghost', '‹ ' + t.prev);
    prev.disabled = S.current === 0;
    prev.addEventListener('click', () => { S.current--; renderExam(); window.scrollTo(0, 0); });
    bar.appendChild(prev);
    const revBtn = el('button', 'btn ghost', (revealed ? t.hideAnswer : t.showAnswer));
    revBtn.addEventListener('click', () => { S.reveal[q.id] = !revealed; S.seen[q.id] = true; renderExam(); });
    bar.appendChild(revBtn);
    const markBtn = el('button', 'btn ghost' + (isMarked(q) ? ' marked' : ''), isMarked(q) ? t.unmarkUnsure : t.markUnsure);
    markBtn.addEventListener('click', () => { toggleMark(q); renderExam(); });
    bar.appendChild(markBtn);
    bar.appendChild(el('div', 'spacer'));
    if (S.current < S.questions.length - 1) {
      const next = el('button', 'btn', t.next + ' ›');
      next.addEventListener('click', () => { S.current++; renderExam(); window.scrollTo(0, 0); });
      bar.appendChild(next);
    }
    const fin = el('button', 'btn' + (S.current < S.questions.length - 1 ? ' ghost' : ''), t.finish);
    fin.addEventListener('click', finishExam);
    bar.appendChild(fin);
    card.appendChild(bar);

    card.appendChild(el('div', 'flabel navlabel', t.jump));
    const pal = el('div', 'palette');
    S.questions.forEach((qq, i) => {
      const d = el('div', 'pdot' + (i === S.current ? ' current' : '') + paletteState(qq) + (isMarked(qq) ? ' marked' : ''), String(i + 1));
      d.addEventListener('click', () => { S.current = i; renderExam(); window.scrollTo(0, 0); });
      pal.appendChild(d);
    });
    card.appendChild(pal);
    c.appendChild(card);

    saveSession();
    const go = i => { S.current = i; renderExam(); window.scrollTo(0, 0); };
    keyNav = {
      showAns: () => { if (!isRevealed(q)) { S.reveal[q.id] = true; S.seen[q.id] = true; renderExam(); } },
      hideAns: () => { if (isRevealed(q)) { S.reveal[q.id] = false; S.seen[q.id] = true; renderExam(); } },
      mark: () => { toggleMark(q); renderExam(); },
      next: () => { if (S.current < S.questions.length - 1) go(S.current + 1); },
      prev: () => { if (S.current > 0) go(S.current - 1); }
    };
  }

  function renderChoices(q, multi, ctx) {
    ctx = ctx || { store: S.answers, redraw: renderExam };
    const store = ctx.store;
    const wrap = el('div', 'choices');
    const opts = qOptions(q);
    const a = store[q.id];
    Object.keys(opts).forEach(letter => {
      const sel = multi ? (Array.isArray(a) && a.includes(letter)) : (a === letter);
      const ch = el('div', 'choice ' + (multi ? 'check' : 'radio') + (sel ? ' sel' : ''));
      ch.innerHTML = `<div class="mark">${sel ? (multi ? '✓' : '●') : ''}</div>` +
        `<div class="ltxt"><span class="lkey">${letter}.</span>${esc(opts[letter])}</div>`;
      ch.addEventListener('click', () => {
        if (multi) {
          let arr = Array.isArray(store[q.id]) ? store[q.id].slice() : [];
          if (arr.includes(letter)) arr = arr.filter(x => x !== letter); else arr.push(letter);
          store[q.id] = arr;
        } else store[q.id] = letter;
        ctx.redraw();
      });
      wrap.appendChild(ch);
    });
    return wrap;
  }

  function renderHotspot(q, ctx) {
    ctx = ctx || { store: S.answers, redraw: renderExam, refreshDot: refreshPaletteDot };
    const store = ctx.store;
    const wrap = el('div');
    const a = Array.isArray(store[q.id]) ? store[q.id] : new Array(q.boxes.length).fill(null);
    q.boxes.forEach((b, i) => {
      const box = el('div', 'hsbox');
      box.appendChild(el('div', 'prompt', esc(slotLabel(q, i, boxPrompt(b)))));
      const sel = el('select');
      const ph = el('option', null, esc(T().pickPlaceholder)); ph.value = ''; sel.appendChild(ph);
      boxOptions(b).forEach((opt, oi) => {
        const o = el('option', null, esc(opt)); o.value = String(oi);
        if (a[i] != null && Number(a[i]) === oi) o.selected = true;
        sel.appendChild(o);
      });
      sel.addEventListener('change', () => {
        const arr = Array.isArray(store[q.id]) ? store[q.id].slice() : new Array(q.boxes.length).fill(null);
        arr[i] = sel.value === '' ? null : Number(sel.value);
        store[q.id] = arr;
        if (ctx.refreshDot) ctx.refreshDot(); else ctx.redraw();
      });
      box.appendChild(sel);
      wrap.appendChild(box);
    });
    return wrap;
  }

  let dragPick = null;
  function renderDragDrop(q, ctx) {
    ctx = ctx || { store: S.answers, redraw: renderExam };
    const store = ctx.store;
    const wrap = el('div', 'ddwrap');
    const a = Array.isArray(store[q.id]) ? store[q.id].slice() : new Array(q.targets.length).fill(null);
    const sources = ddSources(q);
    const lcol = el('div', 'ddcol');
    lcol.appendChild(el('h3', null, T().items));
    sources.forEach((s, si) => {
      const sEl = el('div', 'source' + (dragPick && dragPick.qid === q.id && dragPick.srcIdx === si ? ' picked' : ''), esc(s));
      sEl.draggable = true;
      sEl.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', String(si)); dragPick = { qid: q.id, srcIdx: si }; });
      sEl.addEventListener('click', () => {
        dragPick = (dragPick && dragPick.qid === q.id && dragPick.srcIdx === si) ? null : { qid: q.id, srcIdx: si };
        ctx.redraw();
      });
      lcol.appendChild(sEl);
    });
    wrap.appendChild(lcol);
    const rcol = el('div', 'ddcol');
    rcol.appendChild(el('h3', null, T().targets));
    q.targets.forEach((tg, ti) => {
      const tEl = el('div', 'target');
      tEl.appendChild(el('div', 'tlabel', esc(slotLabel(q, ti, tgtLabel(tg)))));
      const slot = el('div', 'slot' + (a[ti] == null ? ' empty' : ''));
      if (a[ti] == null) slot.textContent = T().emptySlot;
      else {
        slot.innerHTML = `<span>${esc(sources[a[ti]])}</span>`;
        const clr = el('button', 'clr', '✕');
        clr.addEventListener('click', e => { e.stopPropagation(); assignTarget(q, ti, null, ctx); });
        slot.appendChild(clr);
      }
      tEl.appendChild(slot);
      tEl.addEventListener('dragover', e => { e.preventDefault(); tEl.classList.add('over'); });
      tEl.addEventListener('dragleave', () => tEl.classList.remove('over'));
      tEl.addEventListener('drop', e => {
        e.preventDefault(); tEl.classList.remove('over');
        const si = Number(e.dataTransfer.getData('text/plain')); assignTarget(q, ti, si, ctx);
      });
      tEl.addEventListener('click', () => {
        if (dragPick && dragPick.qid === q.id) { assignTarget(q, ti, dragPick.srcIdx, ctx); dragPick = null; }
      });
      rcol.appendChild(tEl);
    });
    wrap.appendChild(rcol);
    return wrap;
  }

  function assignTarget(q, ti, si, ctx) {
    ctx = ctx || { store: S.answers, redraw: renderExam };
    const store = ctx.store;
    const arr = Array.isArray(store[q.id]) ? store[q.id].slice() : new Array(q.targets.length).fill(null);
    arr[ti] = si; store[q.id] = arr; ctx.redraw();
  }

  // Navigator dot class for a question: green/red only once its solution has
  // been revealed at least once; until then an answered question is merely
  // shaded (darker than an untouched one) so progress is visible without
  // giving the verdict away.
  function paletteState(q, store) {
    if (!isAnswered(q, store)) return '';
    if (!S.seen[q.id]) return ' answered';
    return gradeQuestion(q, store).correct ? ' correct' : ' wrong';
  }

  function refreshPaletteDot() {
    const q = S.questions[S.current];
    const dots = $('#screen-exam').querySelectorAll('.palette .pdot');
    const d = dots[S.current];
    saveSession();
    if (!d) return;
    const st = paletteState(q);
    d.classList.toggle('answered', st === ' answered');
    d.classList.toggle('correct', st === ' correct');
    d.classList.toggle('wrong', st === ' wrong');
  }

  function finishExam() {
    const unanswered = S.questions.filter(q => !isAnswered(q)).length;
    if (!confirm(T().finishConfirm(unanswered))) return;
    // wrong-answer book: answered-but-wrong questions get the "shaky" flag
    const wrongIds = S.questions.filter(q => isAnswered(q) && !gradeQuestion(q).correct).map(q => q.id);
    S.autoMarked = wrongIds.filter(id => !markList().includes(id)).length;
    setMarks(wrongIds, true);
    // …and a flagged question answered correctly leaves the book on its own
    const rightIds = S.questions.filter(q => isMarked(q) && gradeQuestion(q).correct).map(q => q.id);
    setMarks(rightIds, false);
    S.unmarked = rightIds.length;
    S.finished = true; saveJSON(SESSION_KEY, null);
    show('result'); renderResult(); window.scrollTo(0, 0);
  }

  // ===================================================================
  //  RESULT SCREEN
  // ===================================================================
  function renderResult() {
    keyNav = null;
    const t = T(); const c = $('#screen-result'); c.innerHTML = '';
    const graded = S.questions.map(q => ({ q, g: gradeQuestion(q) }));
    const correct = graded.filter(x => x.g.correct).length;
    const total = graded.length;
    const unans = graded.filter(x => !x.g.answered).length;
    const wrong = total - correct;
    const pct = Math.round(correct / total * 100);
    const passMark = S.exam.pass;

    const card = el('div', 'card');
    card.appendChild(el('h2', null, `${S.exam.code} · ${t.resultTitle}`));

    const sb = el('div', 'scorebig');
    const ring = el('div', 'ring');
    ring.style.setProperty('--p', pct);
    ring.style.setProperty('--rc', pct >= passMark ? 'var(--good)' : (pct >= 40 ? 'var(--warn)' : 'var(--bad)'));
    ring.innerHTML = `<div class="inner"><div class="pct">${pct}%</div><div class="lab">${esc(t.score)}</div></div>`;
    sb.appendChild(ring);
    sb.appendChild(el('div', null, `<span class="verdict ${pct >= passMark ? 'g' : 'r'}">${esc(t.passNote(pct, passMark))}</span>`));
    card.appendChild(sb);

    const sr = el('div', 'statrow');
    sr.appendChild(el('div', 'stat g', `<b>${correct}</b><span>${esc(t.correct)}</span>`));
    sr.appendChild(el('div', 'stat r', `<b>${wrong}</b><span>${esc(t.wrong)}</span>`));
    sr.appendChild(el('div', 'stat', `<b>${unans}</b><span>${esc(t.unanswered)}</span>`));
    sr.appendChild(el('div', 'stat', `<b>${total}</b><span>${esc(t.total)}</span>`));
    card.appendChild(sr);
    if (S.autoMarked) card.appendChild(el('div', 'hint center', esc(t.autoMarked(S.autoMarked))));
    if (S.unmarked) card.appendChild(el('div', 'hint center', esc(t.unmarkedDone(S.unmarked))));

    const bl = el('div', 'breaklist');
    graded.forEach((x, i) => {
      const d = el('div', 'pdot ' + (x.g.correct ? 'correct' : 'wrong'), String(i + 1));
      d.title = (x.g.correct ? '✔ ' : '✗ ') + '#' + x.q.id;
      d.addEventListener('click', () => openReview(graded.map(y => y.q.id), t.reviewTitleAll, i));
      bl.appendChild(d);
    });
    card.appendChild(bl);

    const row = el('div', 'btnrow'); row.style.marginTop = '22px';
    const wrongIds = graded.filter(x => !x.g.correct).map(x => x.q.id);
    const rw = el('button', 'btn', t.reviewWrong + (wrongIds.length ? ` (${wrongIds.length})` : ''));
    rw.disabled = wrongIds.length === 0;
    rw.addEventListener('click', () => openReview(wrongIds, t.reviewTitleWrong, 0, true));
    row.appendChild(rw);
    const ra = el('button', 'btn ghost', t.reviewAll);
    ra.addEventListener('click', () => openReview(S.questions.map(q => q.id), t.reviewTitleAll));
    row.appendChild(ra);
    const rt = el('button', 'btn ghost', t.retry);
    rt.addEventListener('click', () => { show('setup'); renderSetup(); window.scrollTo(0, 0); });
    row.appendChild(rt);
    const hb = el('button', 'btn ghost', t.backHome);
    hb.addEventListener('click', () => { show('home'); renderHome(); applyLangChrome(); window.scrollTo(0, 0); });
    row.appendChild(hb);
    card.appendChild(row);
    c.appendChild(card);
  }

  // ===================================================================
  //  REVIEW
  // ===================================================================
  // `viewStore` (optional, non-practice only) picks which answers the solution
  // view shows as "your answer" — the exam answers by default.
  function openReview(ids, title, startIndex, practice, viewStore, onBack) {
    const c = $('#screen-result');
    keyNav = null;
    const goBack = onBack || (() => { renderResult(); window.scrollTo(0, 0); });
    if (practice) {
      // fresh re-attempt: clear any prior practice answers/reveals for these questions
      ids.forEach(id => { delete S.reviewAnswers[id]; delete S.reviewReveal[id]; delete S.reviewSeen[id]; });
    }
    if (ids.length === 0) {
      const t = T(); c.innerHTML = '';
      const head = el('div', 'card');
      head.appendChild(el('h2', null, title));
      const row = el('div', 'btnrow');
      const back = el('button', 'btn ghost', '‹ ' + t.backResult);
      back.addEventListener('click', goBack);
      row.appendChild(back); head.appendChild(row);
      head.appendChild(el('p', 'center', t.noWrong));
      c.appendChild(head);
      return;
    }
    let idx = Math.min(Math.max(0, startIndex | 0), ids.length - 1);
    const qOf = id => S.questions.find(x => x.id === id) || bank().find(x => x.id === id);
    function goto(i) { idx = i; draw(); window.scrollTo(0, 0); }
    function draw() {
      const t = T(); c.innerHTML = '';
      const head = el('div', 'card');
      head.appendChild(el('h2', null, title));
      const row = el('div', 'btnrow');
      const back = el('button', 'btn ghost', '‹ ' + t.backResult);
      back.addEventListener('click', goBack);
      row.appendChild(back);
      const prev = el('button', 'btn ghost', '‹ ' + t.prev);
      prev.disabled = idx === 0;
      prev.addEventListener('click', () => { if (idx > 0) goto(idx - 1); });
      row.appendChild(prev);
      row.appendChild(el('span', 'review-counter', esc(t.qof(idx + 1, ids.length))));
      const next = el('button', 'btn ghost', t.next + ' ›');
      next.disabled = idx === ids.length - 1;
      next.addEventListener('click', () => { if (idx < ids.length - 1) goto(idx + 1); });
      row.appendChild(next);
      if (practice) {
        const sub = el('button', 'btn', t.reviewSubmit);
        sub.addEventListener('click', () => submitReview(ids));
        row.appendChild(sub);
      }
      head.appendChild(row);
      head.appendChild(el('div', 'hint', esc(t.kbHint)));
      if (practice) head.appendChild(el('div', 'hint', esc(t.reviewHint)));
      c.appendChild(head);

      const q = qOf(ids[idx]);
      c.appendChild(renderReviewQuestion(q, practice, draw, viewStore));

      if (ids.length > 1) {
        const nav = el('div', 'card');
        nav.appendChild(el('div', 'flabel', t.jump));
        const pal = el('div', 'palette');
        ids.forEach((qid, i) => {
          const qq = qOf(qid);
          let state = ' answered';
          if (practice) {
            const answered = isAnswered(qq, S.reviewAnswers);
            state = !answered ? ''
              : !S.reviewSeen[qq.id] ? ' answered'
                : (gradeQuestion(qq, S.reviewAnswers).correct ? ' correct' : ' wrong');
          }
          const d = el('div', 'pdot' + (i === idx ? ' current' : '') + state, String(i + 1));
          d.addEventListener('click', () => goto(i));
          pal.appendChild(d);
        });
        nav.appendChild(pal);
        c.appendChild(nav);
      }

      keyNav = {
        showAns: () => { if (!S.reviewReveal[q.id]) { S.reviewReveal[q.id] = true; S.reviewSeen[q.id] = true; draw(); } },
        hideAns: () => { if (S.reviewReveal[q.id]) { S.reviewReveal[q.id] = false; draw(); } },
        next: () => { if (idx < ids.length - 1) goto(idx + 1); },
        prev: () => { if (idx > 0) goto(idx - 1); }
      };
    }
    draw();
    window.scrollTo(0, 0);
  }

  // Grade a finished practice round and show its own score screen.
  function submitReview(ids) {
    const t = T();
    const unanswered = ids.filter(id => {
      const q = S.questions.find(x => x.id === id) || bank().find(x => x.id === id);
      return !isAnswered(q, S.reviewAnswers);
    }).length;
    if (!confirm(t.reviewSubmitConfirm(unanswered))) return;
    const qOf = id => S.questions.find(x => x.id === id) || bank().find(x => x.id === id);
    const rightNow = id => gradeQuestion(qOf(id), S.reviewAnswers).correct;
    setMarks(ids.filter(id => isAnswered(qOf(id), S.reviewAnswers) && !rightNow(id)), true);
    setMarks(ids.filter(rightNow), false);
    renderReviewResult(ids);
    window.scrollTo(0, 0);
  }

  function renderReviewResult(ids) {
    keyNav = null;
    const t = T(); const c = $('#screen-result'); c.innerHTML = '';
    const graded = ids.map(id => {
      const q = S.questions.find(x => x.id === id) || bank().find(x => x.id === id);
      return { q, g: gradeQuestion(q, S.reviewAnswers) };
    });
    const total = graded.length;
    const correct = graded.filter(x => x.g.correct).length;
    const wrongAgain = graded.filter(x => !x.g.correct);
    const pct = total ? Math.round(correct / total * 100) : 0;

    const card = el('div', 'card');
    card.appendChild(el('h2', null, t.reviewResultTitle));

    const sb = el('div', 'scorebig');
    const ring = el('div', 'ring');
    ring.style.setProperty('--p', pct);
    ring.style.setProperty('--rc', pct === 100 ? 'var(--good)' : (pct >= 60 ? 'var(--warn)' : 'var(--bad)'));
    ring.innerHTML = `<div class="inner"><div class="pct">${pct}%</div><div class="lab">${esc(t.score)}</div></div>`;
    sb.appendChild(ring);
    if (!wrongAgain.length) sb.appendChild(el('div', null, `<span class="verdict g">${esc(t.allRight)}</span>`));
    card.appendChild(sb);

    const sr = el('div', 'statrow');
    sr.appendChild(el('div', 'stat g', `<b>${correct}</b><span>${esc(t.reviewCorrect)}</span>`));
    sr.appendChild(el('div', 'stat r', `<b>${wrongAgain.length}</b><span>${esc(t.reviewWrongAgain)}</span>`));
    sr.appendChild(el('div', 'stat', `<b>${total}</b><span>${esc(t.total)}</span>`));
    card.appendChild(sr);

    const bl = el('div', 'breaklist');
    graded.forEach((x, i) => {
      const d = el('div', 'pdot ' + (x.g.correct ? 'correct' : 'wrong'), String(i + 1));
      d.title = (x.g.correct ? '✔ ' : '✗ ') + '#' + x.q.id;
      d.addEventListener('click', () => openReviewSolutions(ids, i));
      bl.appendChild(d);
    });
    card.appendChild(bl);

    const row = el('div', 'btnrow'); row.style.marginTop = '22px';
    if (wrongAgain.length) {
      const again = el('button', 'btn', t.reviewAgain(wrongAgain.length));
      again.addEventListener('click', () => openReview(wrongAgain.map(x => x.q.id), t.reviewAgainTitle, 0, true));
      row.appendChild(again);
    }
    const all = el('button', 'btn ghost', t.reviewAllPracticed);
    all.addEventListener('click', () => openReviewSolutions(ids, 0));
    row.appendChild(all);
    const back = el('button', 'btn ghost', '‹ ' + t.backResult);
    back.addEventListener('click', () => { renderResult(); window.scrollTo(0, 0); });
    row.appendChild(back);
    card.appendChild(row);
    c.appendChild(card);
  }

  // Read-only walkthrough of a practice round: shows the answers the learner
  // gave during the round (S.reviewAnswers) against the correct ones.
  function openReviewSolutions(ids, startIndex) {
    openReview(ids, T().reviewAllPracticed, startIndex, false, S.reviewAnswers,
      () => renderReviewResult(ids));
  }

  function renderReviewQuestion(q, practice, redraw, viewStore) {
    const t = T();
    // In practice mode the learner re-answers the question and stays free to
    // change the answer; the solution is only a peek (↑ / "Show answer") and the
    // round is graded on submit. Otherwise it's a plain solution view.
    const revealed = practice ? !!S.reviewReveal[q.id] : true;
    const store = practice ? S.reviewAnswers : (viewStore || S.answers);
    const g = gradeQuestion(q, store);
    const card = el('div', 'review-q');
    const meta = el('div', 'qmeta');
    const left = el('div', 'left');
    left.appendChild(el('span', 'tag type', t.typeLabel[q.type]));
    left.appendChild(el('span', 'tag', '#' + q.id));
    meta.appendChild(left);
    if (revealed && (!practice || isAnswered(q, S.reviewAnswers))) {
      meta.appendChild(el('span', 'verdict ' + (g.correct ? 'g' : 'r'), g.correct ? '✔ ' + t.correct : '✗ ' + t.wrong));
    }
    card.appendChild(meta);
    if (q.isCaseStudy && qScenario(q).trim()) {
      const d = el('details', 'scenario');
      d.appendChild(el('summary', null, esc(t.scenario)));
      d.appendChild(el('div', 'body', esc(qScenario(q).trim())));
      card.appendChild(d);
    }
    card.appendChild(el('div', 'stem', stemHTML(q)));
    { const cb = codeBlock(q); if (cb) card.appendChild(cb); }

    if (practice) {
      // Revealing marks the learner's own answer in place — right/wrong colouring
      // on the options themselves, exactly like the post-exam solution view —
      // instead of listing the answer separately below.
      if (revealed) {
        if (q.type === 'single' || q.type === 'multi') card.appendChild(reviewChoices(q, store));
        else if (q.type === 'hotspot') card.appendChild(reviewHotspot(q, g, store));
        else if (q.type === 'dragdrop') card.appendChild(reviewDragDrop(q, g, store));
      } else {
        // ---- interactive re-attempt; answer stays editable ----
        const ctx = { store: S.reviewAnswers, redraw };
        if (q.type === 'single') card.appendChild(renderChoices(q, false, ctx));
        else if (q.type === 'multi') {
          card.appendChild(el('div', 'multi-note', t.multiNote(q.correctLetters.length)));
          card.appendChild(renderChoices(q, true, ctx));
        } else if (q.type === 'hotspot') {
          card.appendChild(el('div', 'multi-note', t.hotspotNote));
          card.appendChild(renderHotspot(q, ctx));
        } else if (q.type === 'dragdrop') {
          card.appendChild(el('div', 'multi-note', t.dragNote));
          card.appendChild(renderDragDrop(q, ctx));
        }
      }
      const row = el('div', 'btnrow'); row.style.marginTop = '14px';
      const revBtn = el('button', 'btn ghost', revealed ? t.hideAnswer : t.showAnswer);
      revBtn.addEventListener('click', () => { S.reviewReveal[q.id] = !revealed; S.reviewSeen[q.id] = true; redraw(); });
      row.appendChild(revBtn);
      if (isAnswered(q, S.reviewAnswers)) {
        const clr = el('button', 'btn ghost', t.redo);
        clr.addEventListener('click', () => {
          delete S.reviewAnswers[q.id];
          delete S.reviewReveal[q.id];   // re-answering starts from a clean slate
          delete S.reviewSeen[q.id];
          redraw();
        });
        row.appendChild(clr);
      }
      card.appendChild(row);
      if (revealed) {
        const exp = qExplanation(q).trim();
        if (exp) {
          const e = el('div', 'explain');
          e.appendChild(el('h4', null, t.explanation));
          e.appendChild(el('div', 'body', esc(exp)));
          card.appendChild(e);
        }
      }
      return card;
    }

    // ---- solution view ----
    if (q.type === 'single' || q.type === 'multi') card.appendChild(reviewChoices(q, store));
    else if (q.type === 'hotspot') card.appendChild(reviewHotspot(q, g, store));
    else if (q.type === 'dragdrop') card.appendChild(reviewDragDrop(q, g, store));
    const exp = qExplanation(q).trim();
    if (exp) {
      const e = el('div', 'explain');
      e.appendChild(el('h4', null, t.explanation));
      e.appendChild(el('div', 'body', esc(exp)));
      card.appendChild(e);
    }
    return card;
  }

  function reviewChoices(q, store) {
    const wrap = el('div', 'choices');
    const opts = qOptions(q);
    const a = (store || S.answers)[q.id];
    const mine = q.type === 'multi' ? (Array.isArray(a) ? a : []) : (a ? [a] : []);
    const correct = q.correctLetters;
    Object.keys(opts).forEach(letter => {
      const isC = correct.includes(letter);
      const isMine = mine.includes(letter);
      let cls = 'choice ' + (q.type === 'multi' ? 'check' : 'radio');
      if (isC) cls += ' correct'; else if (isMine) cls += ' wrong';
      const ch = el('div', cls);
      let badge = ''; if (isC) badge = ' ✔'; else if (isMine) badge = ' ✗';
      const otxt = (studyOn() && isC) ? hlText(opts[letter], qKW(q).answer) : esc(opts[letter]);
      ch.innerHTML = `<div class="mark">${isMine ? (q.type === 'multi' ? '✓' : '●') : (isC ? '✓' : '')}</div>` +
        `<div class="ltxt"><span class="lkey">${letter}.</span>${otxt}<b>${badge}</b></div>`;
      wrap.appendChild(ch);
    });
    return wrap;
  }

  function reviewHotspot(q, g, store) {
    const wrap = el('div');
    const a = Array.isArray((store || S.answers)[q.id]) ? (store || S.answers)[q.id] : [];
    const answered = isAnswered(q, store);
    q.boxes.forEach((b, i) => {
      const opts = boxOptions(b); const ci = boxCorrectIdx(b); const si = a[i];
      const ok = Number(si) === ci;
      if (studyOn() && !answered) {
        // nothing attempted: just the answer, no "your answer: (none)" noise
        const box = el('div', 'hsbox ok');
        box.appendChild(el('div', 'prompt', esc(slotLabel(q, i, boxPrompt(b)))));
        box.appendChild(el('div', 'ansline', `${esc(T().correctAns)}: <span class="ok">${esc(opts[ci])}</span>`));
        wrap.appendChild(box);
        return;
      }
      const box = el('div', 'hsbox ' + (ok ? 'ok' : 'no'));
      box.appendChild(el('div', 'prompt', esc(slotLabel(q, i, boxPrompt(b)))));
      const yours = (si == null || si === '') ? T().none : esc(opts[si]);
      box.appendChild(el('div', 'ansline', `${esc(T().yourAns)}: <span class="${ok ? 'ok' : 'no'}">${yours}</span>`));
      if (!ok) box.appendChild(el('div', 'ansline', `${esc(T().correctAns)}: <span class="ok">${esc(opts[ci])}</span>`));
      wrap.appendChild(box);
    });
    return wrap;
  }

  function reviewDragDrop(q, g, store) {
    const wrap = el('div');
    const a = Array.isArray((store || S.answers)[q.id]) ? (store || S.answers)[q.id] : [];
    const sources = ddSources(q);
    const answered = isAnswered(q, store);
    q.targets.forEach((tg, ti) => {
      const ci = tgtCorrectIdx(q, tg); const si = a[ti];
      const ok = Number(si) === ci;
      if (studyOn() && !answered) {
        const box = el('div', 'hsbox ok');
        box.appendChild(el('div', 'prompt', esc(slotLabel(q, ti, tgtLabel(tg)))));
        box.appendChild(el('div', 'ansline', `${esc(T().correctAns)}: <span class="ok">${esc(sources[ci])}</span>`));
        wrap.appendChild(box);
        return;
      }
      const box = el('div', 'hsbox ' + (ok ? 'ok' : 'no'));
      box.appendChild(el('div', 'prompt', esc(slotLabel(q, ti, tgtLabel(tg)))));
      const yours = (si == null || si === '') ? T().none : esc(sources[si]);
      box.appendChild(el('div', 'ansline', `${esc(T().yourAns)}: <span class="${ok ? 'ok' : 'no'}">${yours}</span>`));
      if (!ok) box.appendChild(el('div', 'ansline', `${esc(T().correctAns)}: <span class="ok">${esc(sources[ci])}</span>`));
      wrap.appendChild(box);
    });
    return wrap;
  }

  // ===================================================================
  //  CHROME / NAV
  // ===================================================================
  function show(name) {
    keyNav = null;   // each render re-arms the arrow keys for its own view
    ['home', 'setup', 'exam', 'result'].forEach(n => $('#screen-' + n).classList.toggle('hidden', n !== name));
  }
  function activeScreen() {
    return ['home', 'setup', 'exam', 'result'].find(n => !$('#screen-' + n).classList.contains('hidden')) || 'home';
  }
  function applyLangChrome() {
    const t = T();
    $('#brandSub').textContent = S.exam ? `${S.exam.code} · ${t.brandSub}` : t.brandSub;
    $('#brandLogo').textContent = S.exam ? S.exam.logo : '試';
    $('#footnote').textContent = S.exam ? t.footnote(S.exam.code) : '';
    document.documentElement.lang = S.lang;
    $('#langToggle').querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.lang === S.lang));
  }
  function rerenderActive() {
    const s = activeScreen();
    if (s === 'exam') renderExam();
    else if (s === 'result') renderResult();
    else if (s === 'setup') renderSetup();
    else renderHome();
  }

  $('#langToggle').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    S.lang = b.dataset.lang; saveSettings(); applyLangChrome(); rerenderActive();
  });
  $('#brandHome').addEventListener('click', () => { show('home'); renderHome(); applyLangChrome(); window.scrollTo(0, 0); });

  // ---- arrow keys: ↑ show answer / ↓ hide answer / → next / ← previous ----
  document.addEventListener('keydown', e => {
    if (!keyNav) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'select' || tag === 'textarea' || e.target.isContentEditable) return;
    const fn = { ArrowUp: keyNav.showAns, ArrowDown: keyNav.hideAns, ArrowRight: keyNav.next, ArrowLeft: keyNav.prev, m: keyNav.mark, M: keyNav.mark }[e.key];
    if (!fn) return;
    e.preventDefault();
    fn();
  });

  // ---- trackpad / horizontal wheel: swipe left → next, swipe right → previous ----
  // Deltas are summed until a threshold, then a short cooldown swallows the
  // rest of the same gesture's momentum so one swipe moves one question.
  let swipeSum = 0, swipeLock = 0, swipeIdle = null;
  document.addEventListener('wheel', e => {
    if (!keyNav || Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    // leave genuinely scrollable wide content (code blocks) alone
    const sc = e.target.closest && e.target.closest('pre, .codewrap, .ddwrap');
    if (sc && sc.scrollWidth > sc.clientWidth) return;
    e.preventDefault();
    clearTimeout(swipeIdle);
    swipeIdle = setTimeout(() => { swipeSum = 0; }, 200);
    if (Date.now() < swipeLock) return;
    swipeSum += e.deltaX;
    if (Math.abs(swipeSum) < 80) return;
    const fn = swipeSum > 0 ? keyNav.next : keyNav.prev;
    swipeSum = 0; swipeLock = Date.now() + 700;
    fn();
  }, { passive: false });

  applyLangChrome();
  renderHome();
  show('home');
})();
