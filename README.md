# 模拟考试平台 · Exam Simulator（日系淡色 / Japanese-pastel）

一个本地、离线的多考试练习平台。打开后先**选择考试**（AB-100 / AB-620 / AI-103 / DP-800 / GH-300），
再选择**练习模式**（背题 / 模拟考试）、**题目语言**（简体中文 / English）与**考试范围**即可开始。
A local, offline, multi-exam practice app. Pick an exam first (AB-100, AB-620, AI-103, DP-800 or GH-300),
then choose the practice mode (Study / Exam), question language (Simplified Chinese / English) and scope.

> **本压缩包为「应用版」**：只包含直接打开就能练习的文件（`index.html`、`app.js`、
> `data*.js`、`keywords.js`）。下文「文件说明」里提到的 `parse.py`、`*_build/`、`kw_build/`、
> `questions.json`、`vis/` 等**构建脚本与原始 PDF 未随包提供**（体积过大），
> 保留这些说明只是为了让你了解题库是怎么来的。
> `test_multi.js` 需要 `npm install` 安装 jsdom 后才能运行，日常练习用不到。

## 使用方法 / How to use

直接用浏览器打开 **`index.html`**（无需服务器、无需联网）。
Just open **`index.html`** in any browser — no server, no internet.

```
open index.html        # macOS
```

## 考试 / Exams

| 考试 | 题数 | 题型 |
|---|---|---|
| **AB-100** Agentic AI 商业解决方案架构师 | 112 | 单选 68 · 多选 11 · 热点 22 · 拖放 11 |
| **AB-620** Microsoft Copilot Studio 代理开发 | 84 | 单选 23 · 多选 15 · 热点 10 · 拖放 36 |
| **AI-103** 在 Azure 上开发 AI 应用和代理 | 117 | 单选 75 · 多选 5 · 热点 27 · 拖放 10 |
| **DP-800** 开发支持 AI 的数据库解决方案 | 101 | 单选 53 · 多选 4 · 热点 26 · 拖放 18 |
| **GH-300** GitHub Copilot | 129 | 单选 88 · 多选 37 · 热点 2 · 拖放 2 |

## 功能 / Features

- **考试选择主页 / Home picker**：进入后第一步先挑选 AB-100、AB-620、AI-103 或 DP-800。
- **两种练习模式 / Two practice modes**：
  - **背题模式 / Study**：每题**直接显示正确答案**（顶部绿色「答案」框 + 正确选项标绿 + 解析），题干关键词用**荧光笔**标出；按 → 快速翻页。
    设置页可改成「先遮住，按 ↑ 再看」做自测。
  - **标记不熟 / Flag shaky questions**：按 **M** 或点「☆ 标记不熟」，题号导航会出现 ★；标记保存在浏览器（localStorage，按考试分开），
    下次在「考试范围」选「只练标记不熟的题」即可专攻弱项，也可一键清除标记。
- **自动错题本 / Wrong-answer book**：交卷时，**答错**的题自动加上「不熟」★ 标记（未作答的不算）；错题复习交卷时又答错的也会补上标记。
  已标记的题在交卷（或错题复习交卷）时**答对就自动取消标记**，也可随时手动取消，形成「考 → 错 → 背 → 再考」的循环。
- **固定操作栏 / Sticky action bar**：上一题 / 显示解答 / 标记不熟 / 下一题 / 交卷固定在屏幕底部，题目再长也不用往下滚；
  触控板**双指左右滑动**也能切换上一题 / 下一题（向左滑 = 下一题）。
- **记住设置与进度 / Remembers settings & progress**：上次选的练习模式、答案显示、范围、题数、顺序与语言都会记住；
  练到一半关掉或刷新页面，首页会出现「继续上次的练习」，可从原题号接着做（交卷后自动清除）。
  - **模拟考试 / Exam**：不显示荧光笔标注，按真实考试作答。
- **语言切换 / Language**：简体中文 / English，随时可切（右上角）。
- **范围与顺序 / Scope & order**：全部题目 / 自定义题数；顺序 / 随机。
- **完整题型 / All question types**：单选、多选、热点（下拉）、拖放（拖动或点选放置，选项可重复）。
- **代码片段 / Code context**：「如何完成这段代码」类题目会在题干下方显示原题的代码 / Bicep / YAML / CLI 片段，
  待填处显示为 `〔框 1〕`，与下方的下拉框 / 拖放目标按编号一一对应；表格与图示类附件同样还原为文本。
- **成绩与复盘 / Scoring & review**：得分环、答对/答错/未作答、是否及格（70%）、逐题对错、错题复习与全部解析（含中文解析）。
- **日系淡色主题 / Japanese-pastel theme**：和纸米色背景 + 樱花粉 / 蓝色点缀，柔和圆角。

## 文件说明 / Files

| 文件 | 说明 |
|---|---|
| `index.html` | 应用入口（UI + 日系淡色样式）/ app entry (UI + theme) |
| `app.js` | 应用逻辑（多考试注册表 + 主页 + 考试/成绩/复盘）/ app logic (exam registry + home + flow) |
| `data.js` | AB-100 题库（112 题，中英双语，内嵌 `window.QUESTIONS`） |
| `data_ab620.js` | AB-620 题库（84 题，中英双语，内嵌 `window.QUESTIONS_AB620`） |
| `data_ai103.js` | AI-103 题库（117 题，中英双语，内嵌 `window.QUESTIONS_AI103`） |
| `data_dp800.js` | DP-800 题库（101 题，中英双语，内嵌 `window.QUESTIONS_DP800`） |
| `data_gh300.js` | GH-300 题库（129 题，中英双语，内嵌 `window.QUESTIONS_GH300`） |
| `gh300_build/` | GH-300 构建脚本（`extract.py` → `parse.py` → `assemble.py`）、图片题 `overrides.json`、逐段中译 `zh/` |
| `keywords.js` | 背题模式荧光笔关键词（`window.STUDY_KW[考试代码][题号]`，均为题干/正确选项的逐字子串）|
| `test_multi.js` | 四个考试的全流程烟雾测试（jsdom）/ end-to-end smoke test for all exams |
| `parse.py`, `build_data.py`, `questions.json`, `vis/` | AB-100 的 PDF 解析与重建脚本 / AB-100 PDF parser & rebuild |
| `ab620_build/` | AB-620 构建脚本与中间产物 / AB-620 build scripts & artifacts |
| `ai103_build/` | AI-103 构建脚本与中间产物（PDF 双栏切分、面板读图、代码片段转录 `code_blocks.json`、组装）|
| `dp800_build/` | DP-800 构建脚本与中间产物（PDF 切分、案例背景、面板读图、逐题中译 `zh/`、组装）|
| `kw_build/` | 背题模式关键词的抽取与组装脚本 / study-mode keyword build scripts |

## 测试 / Test

```bash
node test_multi.js   # 四个考试各自全答对应得 100% / all exams: answer-all-correct => 100%
```

## AB-620 题库的构建 / How the AB-620 bank was built

源为两份 PDF：`AB-620_en_with_discussion.pdf`（英文原题 + 社区讨论 + 官方答案）与
`AB-620_aizh.pdf`（同样内容 + 中文翻译 + 中文 AI 解析）。处理流程：

1. `ab620_build/extract.py`：按 `Topic / Question #` 切分两份 PDF 得到 84 道题，
   并按**图片在页面上的纵向位置**把 92 张插图分配给所属题目
   （一页常常同时含上一题的结尾与下一题的开头，只按页码匹配会重复计入）。
2. `ab620_build/parse.py`：抽取题干、选项、`Correct Answer` 字母与社区投票分布。
   两处需要特别处理：
   - **案例研究背景**：英文各题逐字重复，取组内最长公共前缀即为背景；
     中文是逐题独立翻译、措辞不同，公共前缀会退化为空，改为按题干引导语「您需要…」切分。
   - **换行选项**：长选项在 PDF 里跨行，需把续行拼回，否则选项会被截断。
3. **热点 / 拖放题的选项面板在源 PDF 中是图片**（46 题），因此由视觉步骤读图还原，
   并与中文解析的「推荐答案 / 官方答案」交叉比对；两者冲突时以答案图为准。
4. `ab620_build/assemble.py`：合并并校验后生成 `data_ab620.js`——
   校验每个 `correct_en` / `correct_zh` 都精确存在于对应选项列表、且中英索引一致。

> 已知来源问题：`_zh_` 版 PDF 里的选项图片其实是**未翻译的英文原图**，
> 因此热点 / 拖放题的中文标签为重新翻译；少数题目源 PDF 缺少答案图或官方答案标注为
> 「未识别到选中项」，这些题采用中文 AI 解析的推荐答案。
> 另有约 10 题官方答案与社区投票或 AI 解析不一致——**一律以官方答案计分**，
> 并在解析文字中说明分歧，便于自行判断。

## AI-103 题库的构建 / How the AI-103 bank was built

源为两份 PDF：`AI-103 117題.pdf`（纯英文原题 + 官方答案 + 解析）与
`AI-103 117题 中英对照.pdf`（**双栏**排版：左栏英文、右栏简体中文翻译）。处理流程：

1. `ai103_build/chunk.py`：中英对照 PDF 是左英右中的两栏，直接读整页会把两种语言混在一起。
   按页面宽度中线裁剪出**左半（英文流）与右半（中文流）**，各自按题号标记
   （`QUESTION n` / `问题 n`，题号在每个 Topic 内重置）切成 117 段，
   再按**文档顺序**对齐中英（而非按会重置的题号）。共 117 题，中英一一对应。
2. `ai103_build/parse.py`：解析单选 / 多选的题干、选项、`Correct Answer` 字母与解析（中英）。
   两处特别处理：第一个选项 `A.` 常与题干问号同行，改用**A→E 递增标记的偏移**定位选项；
   个别中文把 `A.` 误译成「一个。」等，做了归一化。少数中文选项在源 PDF 里损坏
   （如 `A.RTMPnB`、把 `E.` 印成「和。」），改由英文重新翻译（见 `overrides.json`）。
3. **热点 / 拖放题（37 题）的选项面板在源 PDF 中是图片**，且中英对照版右栏用的仍是**英文原图**。
   因此 `render_panels.py` 把这些题的英文面板渲染成 PNG，由视觉步骤读图还原每个下拉框 / 拖放目标的
   完整选项与**绿色高亮的正确答案**，并与解析里的「Box 1 / Box 2…」交叉比对，
   再把所有英文标签 / 选项**翻译成简体中文**（产品名、代码标识、枚举值保留英文）。
4. **代码 / 图表附件也是图片**。凡是题目引用了代码片段、表格或截图（共 16 题）的，都从
   `ai103_build/render/` 的英文页图逐行转录到 `ai103_build/code_blocks.json`，
   待填空处写成 `[[n]]`，组装时校验 `[[n]]` 的编号与该题 `boxes` / `targets` 的数量严格一一对应。
   代码本身中英通用；仅表格 / 图示（第 9、44 题）额外提供中文文本。
5. `ai103_build/scenario.py`：抽取 5 个案例研究（Testlet）的背景（中英），关联到各自的案例题。
6. `ai103_build/assemble.py`：合并并校验后生成 `data_ai103.js`——
   校验每个选择题答案字母都在选项内、每个热点 `correct_en` 在该框 `options_en` 内、
   每个拖放 `correct_en` 在 `sources_en` 内、中英选项一一对应；并对因 PDF 硬换行 / 缩进而
   碎裂的段落做重排（reflow）。全部 117 题校验 0 错误。

> 已知来源问题：极少数英文选项在原图里本身有拼写错（如把 “retrieval” 印成 “revival”），
> 为忠实于考试原图，英文按图保留、中文按正确含义翻译（「检索」）。正确答案一律以答案图的绿色高亮为准。

## DP-800 题库的构建 / How the DP-800 bank was built

源只有一份**纯英文** PDF：`DP-800 101题.pdf`（英文原题 + 官方答案 + 解析），没有中英对照版，
因此中文一侧全部为本项目翻译。处理流程：

1. `dp800_build/chunk.py`：PDF 是单栏排版，按行首的 `QUESTION n` 标记切成 101 段。
   题号在每个 Topic 内会重置（3 个考试领域 × Testlet 1 / Testlet 2 / Question Set 3），
   因此改按**文档顺序**编号 1–101，并记录每题所属领域与页码范围。
2. `dp800_build/parse.py`：解析题干、`A.`–`H.` 选项、`Correct Answer` 字母与英文解析。
   两处需要特别处理：选项字母必须**按 A→B→C 递增**才算选项行（否则解析正文里的 `A.` 会被误判）；
   `Correct Answer:` 之后用 `[ \t]*` 而非 `\s*` 匹配，否则热点 / 拖放题会把下一行的
   `Section: (none)` 当成答案。全部 101 题解析 0 错误。
3. `dp800_build/scenario.py`：抽取案例研究背景。三个领域的 Testlet 1 / Testlet 2 **正文完全相同**，
   实际只有两个案例（Contoso 车队情报平台、Fabrikam 医疗），其中的表结构、JSON 示例、
   慢查询、`CREATE TABLE`、DAB 配置等附件都是图片，已逐行转录并翻译进 `scenarios_final.json`。
4. **热点 / 拖放题（44 题）的选项面板在源 PDF 中是图片**。`dp800_build/render_panels.py` 依据
   每题 `QUESTION n` 与 `Correct Answer:` 的**页面纵坐标**把插图分成「题目面板」与「答案面板」
   （同一页常常同时含上一题的结尾，只按页码会错配），渲染成 PNG 后由视觉步骤读图还原每个
   下拉框 / 拖放目标的完整选项与**绿色高亮的正确答案**，并与解析里的「Box 1 / Box 2…」交叉比对，
   再把英文标签翻译成简体中文（SQL 关键字、函数名、标识符保留英文）。
5. **少数选择题的选项本身也是图片**（第 5、36、47、51 题，共 17 个选项），
   同样读图转录到 `overrides.json`；另有 13 题的代码 / 表格附件转录到 `code_blocks.json`。
6. `dp800_build/zh/*.json`：逐题的简体中文题干、选项与解析。英文解析平均约 1300 字符且含大量
   重复的官方文档摘录，中文侧做了**忠实但精简**的改写——保留全部「Box n / 正确答案 / 为什么错」
   的判定要点与代码示例，删去重复段落。
7. `dp800_build/assemble.py`：合并并校验后生成 `data_dp800.js`——校验每个选择题答案字母都在选项内、
   每个热点 `correct_en/zh` 在该框 `options_en/zh` 内、每个拖放 `correct_en/zh` 在 `sources_en/zh` 内、
   中英选项一一对应、选项文本非空；并对因 PDF 硬换行而碎裂的段落做重排（reflow，代码块原样保留）。
   全部 101 题校验 0 错误。

> 已知来源问题：第 28 题在 PDF 中被标为 `HOTSPOT`，但题干与面板实为拖放题，已按拖放题收录
> （见 `overrides.json`）。少数题目的官方答案与常识存在张力（例如第 26 题第 3 问、第 84 题框 1、
> 第 71 题第 3 问），**一律以答案图的绿色高亮 / 官方解析为准**并在中文解析中注明「按官方答案」。

## GH-300 题库的构建 / How the GH-300 bank was built

源为一份纯英文 PDF：`GH-300 129题.pdf`。

1. `gh300_build/extract.py`：PDF 每页叠了「店铺：IT认证考试服务」水印（KaiTi 字体），直接抽文字会把水印字插进正文。
   改用 pypdf 的逐片段回调，**按字体丢弃水印**，再按坐标重组每一行（否则选项字母 `A.` 会和选项文字分开）。
2. `gh300_build/parse.py`：按 `Question #:n - [领域]` 切成 129 题，解析题干、选项、`Answer:` 与解析。全部答案字母都在选项内。
3. 4 道热点 / 拖放题（第 6、15、82、128 题）的面板是图片，读图还原到 `overrides.json`（第 82 题为排序题）。
4. `zh/chunk*.json`：逐题中译；`assemble.py` 合并、清除 PDF 版面残留的 `B.` / `D.` 碎片、校验后生成 `data_gh300.js`。

> 已知来源问题：第 10 题源 PDF 的题干是坏的（只有 `blog.yatricloud.com`），与第 38 题为同一题，题干按第 38 题补回。
> 第 15 题官方答案为 `gh extension install github/copilot`，但目前独立版 Copilot CLI 用 `npm install -g @github/copilot` 安装——按官方答案计分，解析中已注明。
> 第 128 题第二个下拉框在原图中重复列了 `/repo/tests`，已合并。GH-300 暂无荧光笔关键词。

## 背题模式关键词的构建 / How the study-mode highlights were built

背题模式需要知道每题「决定答案的那句话」。做法：

1. `kw_build/` 把 AB-100 / AB-620 / AI-103 三个题库导出为逐题上下文（题干、选项、正确项、解析）。
2. 由 AI 逐题精选**决定性线索**：题干里 1–2 个最快指向答案的短语，以及正确选项里的关键词短语（中英各一套）。
3. `kw_build/assemble_kw.py` 生成 `keywords.js`——**关键约束**：每个短语必须是对应题干 / 正确选项的**逐字子串**
   （前端靠精确子串匹配来定位并套上 `<mark>` 荧光笔），组装时会再对照真实题库校验，非子串的一律剔除。
   最终 414 题全部得到题干线索，0 个非子串。
   DP-800 的题干线索改由 `kw_build/dp800_stem_kw.py` **机械抽取**——该考试的题干遵循固定模板，
   决定性的一句就是 `You need to …` / `您需要…`（必要时再加 `The solution must …` / `该解决方案必须…`），
   机械抽取同时天然满足「逐字子串」的约束；7 道纯看图的 Yes/No 题与全部正确选项线索
   仍是人工挑选，存放在 `kw_build/dp800_answer_kw.json`。
4. 荧光笔仅在**背题模式**显示：题干关键词常驻高亮；正确选项关键词在你点「查看解答」时才高亮，
   以便先自测再看答案。模拟考试模式完全不显示。

## 说明 / Notes

- 本工具仅供个人学习练习。/ For personal study practice only.
- `node_modules/` 仅供测试用，可安全删除。/ `node_modules/` is only for the test.
