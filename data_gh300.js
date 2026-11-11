// Auto-generated GH-300 question bank (129 questions, EN + ZH).
// Source PDF is English-only: the ZH side is a translation; the 4 hotspot /
// drag-drop panels were read from the page images (gh300_build/overrides.json).
window.QUESTIONS_GH300 = [
 {
  "id": 1,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "What types of prompts or code snippets might be flagged by the GitHub Copilot toxicity filter? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Hate speech or discriminatory language (e.g., racial slurs, offensive stereotypes)",
    "B": "Sexually suggestive or explicit content",
    "C": "Code that contains logical errors or produces unexpected results",
    "D": "Code comments containing strong opinions or criticisms"
   },
   "explanation": "GitHub Copilot includes a toxicity filter to prevent the generation of harmful or inappropriate content. This filter flags prompts or code snippets that contain hate speech, discriminatory language, or sexually suggestive or explicit content. This ensures a safe and respectful coding environment.\nReference: GitHub Copilot documentation on safety and content filtering."
  },
  "zh": {
   "stem": "GitHub Copilot 的毒性过滤器（toxicity filter）可能会标记哪些类型的提示词或代码片段？（每个正确答案是解决方案的一部分。请选择两项。）",
   "options": {
    "A": "仇恨言论或歧视性语言（例如种族侮辱用语、冒犯性的刻板印象）",
    "B": "带有性暗示或露骨的内容",
    "C": "含有逻辑错误或产生意外结果的代码",
    "D": "包含强烈观点或批评的代码注释"
   },
   "explanation": "GitHub Copilot 内置毒性过滤器，用于防止生成有害或不当内容。该过滤器会标记包含仇恨言论、歧视性语言，或带有性暗示、露骨内容的提示词或代码片段，以确保安全且相互尊重的编码环境。\n参考：GitHub Copilot 关于安全与内容过滤的文档。"
  }
 },
 {
  "id": 2,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "Which of the following is correct about GitHub Copilot Knowledge Bases?",
   "options": {
    "A": "All repos are indexed",
    "B": "Indexing is static",
    "C": "It is an Enterprise feature",
    "D": "All file types are indexed"
   },
   "explanation": "GitHub Copilot Knowledge Bases is an Enterprise feature that allows the tool to use an organization's internal documentation and code for more accurate and relevant suggestions.\nReference: GitHub Copilot Enterprise Knowledge Base documentation."
  },
  "zh": {
   "stem": "关于 GitHub Copilot Knowledge Bases，下列哪项说法正确？",
   "options": {
    "A": "所有仓库都会被索引",
    "B": "索引是静态的",
    "C": "它是 Enterprise 功能",
    "D": "所有文件类型都会被索引"
   },
   "explanation": "GitHub Copilot Knowledge Bases 是 Enterprise 功能，可让工具使用组织的内部文档和代码，提供更准确、更相关的建议。\n参考：GitHub Copilot Enterprise Knowledge Base 文档。"
  }
 },
 {
  "id": 3,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Which of the following scenarios best describes the intended use of GitHub Copilot Chat as a tool?",
   "options": {
    "A": "A complete replacement for developers generating code.",
    "B": "A productivity tool that provides suggestions, but relying on human judgment.",
    "C": "A solution for software development, requiring no additional input or oversight.",
    "D": "A tool solely designed for debugging and error correction."
   },
   "explanation": "GitHub Copilot Chat is designed to be a productivity enhancer, not a replacement for human developers. It provides suggestions and assists with coding tasks, but the final decision and validation always rest with the developer. Copilot Chat is meant to augment the developer's workflow, making it faster and more efficient, but it does not remove the need for human oversight and judgment.\nReference: GitHub Copilot official documentation on the tool's purpose and usage."
  },
  "zh": {
   "stem": "下列哪个情境最能说明 GitHub Copilot Chat 作为工具的预期用途？",
   "options": {
    "A": "完全取代开发人员来生成代码。",
    "B": "一种提供建议、但仍依赖人类判断的生产力工具。",
    "C": "一种无需额外输入或监督的软件开发解决方案。",
    "D": "一种仅用于调试和错误修正的工具。"
   },
   "explanation": "GitHub Copilot Chat 的设计目的是提升生产力，而不是取代开发人员。它提供建议并协助编码任务，但最终的决定与验证始终由开发人员负责。Copilot Chat 旨在增强开发人员的工作流程，使其更快、更高效，但并不能免除人类监督与判断的必要性。\n参考：GitHub Copilot 官方文档中关于该工具目的与用法的说明。"
  }
 },
 {
  "id": 4,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "What is a likely effect of GitHub Copilot being trained on commonly used code patterns?",
   "options": {
    "A": "Suggest innovative coding solutions that are not yet popular.",
    "B": "Suggest completely novel projects, while reducing time on a project.",
    "C": "Suggest code snippets that reflect the most common practices in the training data.",
    "D": "Suggest homogeneous solutions if provided a diverse data set."
   },
   "explanation": "“Because GitHub Copilot is trained on a large amount of publicly available code, it often suggests snippets that reflect common coding practices and idioms.”\nThis shows that Copilot reflects the most common practices it has seen in its training data.\nReferences: GitHub Copilot documentation on training and suggestion patterns."
  },
  "zh": {
   "stem": "GitHub Copilot 以常用的代码模式进行训练，可能产生什么影响？",
   "options": {
    "A": "建议尚未流行的创新编码方案。",
    "B": "建议全新的项目，同时缩短项目时间。",
    "C": "建议反映训练数据中最常见做法的代码片段。",
    "D": "在提供多样化数据集时建议同质化的解决方案。"
   },
   "explanation": "“由于 GitHub Copilot 是以大量公开可用的代码训练的，它通常会建议反映常见编码实践和惯用法的代码片段。”\n这表明 Copilot 会反映它在训练数据中见过的最常见做法。\n参考：GitHub Copilot 关于训练与建议模式的文档。"
  }
 },
 {
  "id": 5,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "How can the concept of fairness be integrated into the process of operating an AI tool?",
   "options": {
    "A": "Focusing on accessibility will ensure fairness.",
    "B": "Focusing on collecting large datasets for training will ensure fairness.",
    "C": "Regularly monitoring the AI tool's performance will ensure fairness in its outputs.",
    "D": "Training AI data and algorithms to be free from biases will ensure fairness."
   },
   "explanation": "Fairness in AI tools is achieved by training the data and algorithms to be free from biases. This ensures that the tool treats all users equitably and avoids discriminatory outcomes.\nReference: Microsoft's AI principles and fairness guidelines."
  },
  "zh": {
   "stem": "如何将公平性（fairness）的概念融入 AI 工具的运作过程？",
   "options": {
    "A": "关注无障碍性就能确保公平。",
    "B": "重点收集大型训练数据集就能确保公平。",
    "C": "定期监控 AI 工具的表现就能确保其输出公平。",
    "D": "训练 AI 数据与算法使其不带偏见，就能确保公平。"
   },
   "explanation": "AI 工具的公平性是通过让数据和算法在训练时不带偏见来实现的，这样工具才能公平对待所有用户，避免歧视性的结果。\n参考：Microsoft 的 AI 原则与公平性指南。"
  }
 },
 {
  "id": 6,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You recently ended an interactive GitHub Copilot CLI session.\nYou need to start a new session that meets the following requirements:\n• Provides a list of previously saved interactive sessions\n• Resumes the most recently ended session\nWhich command should you run for each requirement? Each command may be used once, more than once, or not at all.",
   "options": {},
   "explanation": "copilot --resume opens a picker that lists previously saved interactive sessions so you can choose one to resume.\ncopilot --continue resumes the most recently ended session directly, without showing the list.\n--add-dir grants access to an extra directory, --model selects the model, and --prompt runs a single prompt non-interactively."
  },
  "zh": {
   "stem": "你最近结束了一个交互式 GitHub Copilot CLI 会话。\n你需要启动一个新会话，并满足以下要求：\n• 提供先前保存的交互式会话列表\n• 恢复最近结束的会话\n每项要求应运行哪个命令？每个命令可使用一次、多次或不使用。",
   "options": {},
   "explanation": "copilot --resume 会打开一个选择器，列出先前保存的交互式会话，供你选择要恢复的会话。\ncopilot --continue 直接恢复最近结束的会话，不显示列表。\n--add-dir 用于授予对额外目录的访问权限，--model 用于选择模型，--prompt 用于以非交互方式运行单个提示词。"
  },
  "sources_en": [
   "copilot --add-dir",
   "copilot --continue",
   "copilot --model",
   "copilot --prompt",
   "copilot --resume"
  ],
  "sources_zh": [
   "copilot --add-dir",
   "copilot --continue",
   "copilot --model",
   "copilot --prompt",
   "copilot --resume"
  ],
  "targets": [
   {
    "label_en": "Provides a list of previously saved interactive sessions",
    "label_zh": "提供先前保存的交互式会话列表",
    "correct_en": "copilot --resume",
    "correct_zh": "copilot --resume"
   },
   {
    "label_en": "Resumes the most recently ended session",
    "label_zh": "恢复最近结束的会话",
    "correct_en": "copilot --continue",
    "correct_zh": "copilot --continue"
   }
  ]
 },
 {
  "id": 7,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "C",
   "D"
  ],
  "en": {
   "stem": "Which of the following statements correctly describes how GitHub Copilot Individual uses prompt data?\n(Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Prompt data is stored unencrypted for faster processing.",
    "B": "Prompt data is used internally by GitHub for improving the search engine.",
    "C": "Prompt data is used to train machine learning models for better code suggestions.",
    "D": "Real-time user input helps generate context-aware code suggestions."
   },
   "explanation": "Exact extracts:\n“For GitHub Copilot Individual, prompts and code completions may be retained and used to train machine learning models to improve Copilot.”\nReferences: GitHub Copilot data usage and privacy documentation."
  },
  "zh": {
   "stem": "下列哪些说法正确描述了 GitHub Copilot Individual 如何使用提示词数据？\n（每个正确答案是解决方案的一部分。请选择两项。）",
   "options": {
    "A": "提示词数据以未加密方式存储，以加快处理速度。",
    "B": "GitHub 在内部使用提示词数据来改进搜索引擎。",
    "C": "提示词数据用于训练机器学习模型，以提供更好的代码建议。",
    "D": "实时的用户输入有助于生成感知上下文的代码建议。"
   },
   "explanation": "原文摘录：\n“对于 GitHub Copilot Individual，提示词和代码补全可能会被保留，并用于训练机器学习模型以改进 Copilot。”\n参考：GitHub Copilot 数据使用与隐私文档。"
  }
 },
 {
  "id": 8,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "What is a key consideration when relying on GitHub Copilot Chat's explanations of code functionality and proposed improvements?",
   "options": {
    "A": "The explanations are dynamically updated based on user feedback.",
    "B": "Reviewing and validating the generated output for accuracy and completeness.",
    "C": "GitHub Copilot Chat uses a static database for generating explanations.",
    "D": "The explanations are primarily derived from user-provided documentation."
   },
   "explanation": "While GitHub Copilot Chat can provide helpful explanations and suggestions, it's crucial to review and validate the generated output. Copilot's suggestions are based on its training data, and they may not always be perfectly accurate or complete. Human judgment is essential to ensure the quality and correctness of the code.\nReference: GitHub Copilot best practices and usage guidelines."
  },
  "zh": {
   "stem": "在依赖 GitHub Copilot Chat 对代码功能的解释和改进建议时，一个关键的考虑因素是什么？",
   "options": {
    "A": "这些解释会根据用户反馈动态更新。",
    "B": "检查并验证生成输出的准确性和完整性。",
    "C": "GitHub Copilot Chat 使用静态数据库来生成解释。",
    "D": "这些解释主要来自用户提供的文档。"
   },
   "explanation": "虽然 GitHub Copilot Chat 能提供有用的解释和建议，但务必检查并验证其生成的输出。Copilot 的建议基于其训练数据，不一定始终完全准确或完整。需要人类判断来确保代码的质量与正确性。\n参考：GitHub Copilot 最佳实践与使用指南。"
  }
 },
 {
  "id": 9,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "C"
  ],
  "en": {
   "stem": "Which scenarios can GitHub Copilot Chat be used to increase productivity? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "A project plan for the team needs to be generated using a project management software.",
    "B": "Create a documentation file for the newly created code base.",
    "C": "A developer is added to a new project and would like to understand the current software code.",
    "D": "Fast tracking of release management activities to move code to production main branch."
   },
   "explanation": "Exact extracts:\n“Copilot Chat can generate documentation based on your code.”\nReferences: GitHub Copilot Chat productivity documentation."
  },
  "zh": {
   "stem": "在哪些情境下可以使用 GitHub Copilot Chat 来提高生产力？（每个正确答案是解决方案的一部分。请选择两项。）",
   "options": {
    "A": "需要使用项目管理软件为团队生成项目计划。",
    "B": "为新创建的代码库创建文档文件。",
    "C": "开发人员加入新项目，想了解现有的软件代码。",
    "D": "加快发布管理活动，将代码推送到生产环境的 main 分支。"
   },
   "explanation": "原文摘录：\n“Copilot Chat 可以根据你的代码生成文档。”\n参考：GitHub Copilot Chat 生产力文档。"
  }
 },
 {
  "id": 10,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "E"
  ],
  "en": {
   "stem": "What kind of insights can the GitHub Copilot usage metrics API provide to help evaluate the effectiveness of GitHub Copilot? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "The API can generate detailed reports on code quality improvements made by GitHub Copilot.",
    "B": "The API can track the acceptance rate of code suggestions accepted and used in the organization.",
    "C": "The API can refactor your code to improve productivity.",
    "D": "The API can provide feedback on coding style and standards compliance.",
    "E": "The API can provide Copilot Chat specific suggestions acceptance metrics."
   },
   "explanation": "The GitHub Copilot usage metrics API provides insights into the acceptance rate of code suggestions and Copilot Chat specific suggestions acceptance metrics, helping organizations evaluate its effectiveness.\nReference: GitHub Copilot usage metrics API documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 使用情况指标 API 可以提供哪些见解，以帮助评估 GitHub Copilot 的有效性？（每个正确答案都是解决方案的一部分。请选择两项。）",
   "options": {
    "A": "该 API 可以生成关于 GitHub Copilot 所做代码质量改进的详细报告。",
    "B": "该 API 可以追踪组织内被接受并使用的代码建议的接受率。",
    "C": "该 API 可以重构你的代码以提高生产力。",
    "D": "该 API 可以提供关于编码风格和标准合规性的反馈。",
    "E": "该 API 可以提供 Copilot Chat 专属的建议接受率指标。"
   },
   "explanation": "GitHub Copilot 使用情况指标 API（usage metrics API）可提供代码建议的接受率以及 Copilot Chat 专属的建议接受率指标，帮助组织评估其成效。\n参考：GitHub Copilot usage metrics API 文档。"
  }
 },
 {
  "id": 11,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "What should developers consider when relying on GitHub Copilot for generating code that involves statistical analysis?",
   "options": {
    "A": "GitHub Copilot can independently verify the statistical significance of results.",
    "B": "GitHub Copilot's suggestions are based on statistical trends and may not always apply accurately to specific datasets.",
    "C": "GitHub Copilot will automatically correct any statistical errors found in the user's initial code.",
    "D": "GitHub Copilot can design new statistical methods that have not been previously documented."
   },
   "explanation": "Developers should consider that GitHub Copilot's suggestions are based on statistical trends and may not always be accurate for specific datasets, requiring careful validation.\nReference: GitHub Copilot data analysis limitations."
  },
  "zh": {
   "stem": "在依赖 GitHub Copilot 生成涉及统计分析的代码时，开发人员应考虑什么？",
   "options": {
    "A": "GitHub Copilot 可以独立验证结果的统计显著性。",
    "B": "GitHub Copilot 的建议基于统计趋势，不一定总能准确适用于特定数据集。",
    "C": "GitHub Copilot 会自动更正用户初始代码中的任何统计错误。",
    "D": "GitHub Copilot 可以设计先前未有文献记载的新统计方法。"
   },
   "explanation": "开发人员应当意识到，GitHub Copilot 的建议基于统计趋势，不一定总能准确适用于特定数据集，因此需要仔细验证。\n参考：GitHub Copilot 数据分析的局限性。"
  }
 },
 {
  "id": 12,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "What role does chat history play in GitHub Copilot's code suggestions?",
   "options": {
    "A": "Chat history is used to train the GitHub Copilot model in real-time.",
    "B": "Chat history provides context to GitHub Copilot, improving the relevance and accuracy of its code suggestions.",
    "C": "Chat history is stored and shared with other users to enhance collaboration.",
    "D": "Chat history is irrelevant to GitHub Copilot and does not affect its functionality."
   },
   "explanation": "Chat history provides valuable context to GitHub Copilot, helping it generate more relevant and accurate code suggestions based on previous interactions and conversations.\nReference: GitHub Copilot Chat history documentation."
  },
  "zh": {
   "stem": "聊天历史（chat history）在 GitHub Copilot 的代码建议中扮演什么角色？",
   "options": {
    "A": "聊天历史用于实时训练 GitHub Copilot 模型。",
    "B": "聊天历史为 GitHub Copilot 提供上下文，提升其代码建议的相关性和准确性。",
    "C": "聊天历史会被存储并与其他用户共享，以增强协作。",
    "D": "聊天历史与 GitHub Copilot 无关，不影响其功能。"
   },
   "explanation": "聊天历史为 GitHub Copilot 提供宝贵的上下文，帮助它根据先前的互动和对话生成更相关、更准确的代码建议。\n参考：GitHub Copilot Chat 聊天历史文档。"
  }
 },
 {
  "id": 13,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Where can you validate if GitHub Copilot is not returning suggestions because of content exclusions?",
   "options": {
    "A": "The GitHub Copilot icon in the status bar of the editor will display a message",
    "B": "The GitHub Copilot logs on GitHub.com under your user settings",
    "C": "The code suggestions window will display a warning message",
    "D": "The GitHub Copilot errors panel in your IDE"
   },
   "explanation": "Exact extracts:\n“When a file is affected by a content exclusion setting, GitHub Copilot will not suggest code completion in that file…”\nReferences: GitHub Copilot official troubleshooting documentation on content exclusions."
  },
  "zh": {
   "stem": "在哪里可以确认 GitHub Copilot 是否因内容排除（content exclusions）而没有返回建议？",
   "options": {
    "A": "编辑器状态栏中的 GitHub Copilot 图标会显示一条消息",
    "B": "GitHub.com 上用户设置下的 GitHub Copilot 日志",
    "C": "代码建议窗口会显示警告消息",
    "D": "IDE 中的 GitHub Copilot 错误面板"
   },
   "explanation": "原文摘录：\n“当文件受到内容排除设置影响时，GitHub Copilot 不会在该文件中建议代码补全……”\n参考：GitHub Copilot 官方关于内容排除的疑难解答文档。"
  }
 },
 {
  "id": 14,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "C"
  ],
  "en": {
   "stem": "What are the potential limitations of GitHub Copilot Chat? (Each correct answer presents part of the solution.\nChoose two.)",
   "options": {
    "A": "Limited training data",
    "B": "No biases in code suggestions",
    "C": "Ability to handle complex code structures",
    "D": "Extensive support for all programming languages"
   },
   "explanation": "Exact extracts:\n“GitHub Copilot Chat, like all AI models, is limited by its training data and may not always provide accurate or up-to-date answers.”\nReferences: GitHub Copilot Chat limitations documentation."
  },
  "zh": {
   "stem": "GitHub Copilot Chat 有哪些潜在的局限性？（每个正确答案是解决方案的一部分。\n请选择两项。）",
   "options": {
    "A": "训练数据有限",
    "B": "代码建议中没有偏见",
    "C": "处理复杂代码结构的能力",
    "D": "广泛支持所有编程语言"
   },
   "explanation": "原文摘录：\n“GitHub Copilot Chat 与所有 AI 模型一样，受限于其训练数据，不一定总能提供准确或最新的答案。”\n参考：GitHub Copilot Chat 局限性文档。"
  }
 },
 {
  "id": 15,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You are deploying a new development environment to a Windows 11 device.\nYou need to install GitHub Copilot CLI, and then start an interactive GitHub Copilot CLI session.\nWhich command should you run for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: gh extension install github/copilot (official answer in the source).\nBox 2: copilot — running the copilot command with no arguments starts an interactive session. /new and /session are slash commands used inside an already running session.\nNote: the current standalone GitHub Copilot CLI is also installed with npm install -g @github/copilot (or winget). The source's answer image marks the gh extension option, so that is what is scored here."
  },
  "zh": {
   "stem": "你正在 Windows 11 设备上部署新的开发环境。\n你需要安装 GitHub Copilot CLI，然后启动一个交互式 GitHub Copilot CLI 会话。\n每项要求应运行哪个命令？请在答题区选择适当的选项。\n注意：每个正确选择得一分。",
   "options": {},
   "explanation": "方框 1：gh extension install github/copilot（来源中的官方答案）。\n方框 2：copilot — 不带参数运行 copilot 命令即可启动交互式会话。/new 和 /session 是在已运行的会话内使用的斜杠命令。\n注：目前独立的 GitHub Copilot CLI 也可通过 npm install -g @github/copilot（或 winget）安装。来源的答案图片标示的是 gh extension 选项，因此此处以它计分。"
  },
  "boxes": [
   {
    "prompt_en": "To install GitHub Copilot CLI:",
    "prompt_zh": "安装 GitHub Copilot CLI：",
    "options_en": [
     "apt install copilot-cli",
     "npm install -g @github/copilot",
     "gh extension install github/copilot"
    ],
    "options_zh": [
     "apt install copilot-cli",
     "npm install -g @github/copilot",
     "gh extension install github/copilot"
    ],
    "correct_en": "gh extension install github/copilot",
    "correct_zh": "gh extension install github/copilot"
   },
   {
    "prompt_en": "To start the interactive session:",
    "prompt_zh": "启动交互式会话：",
    "options_en": [
     "copilot",
     "/new",
     "/session"
    ],
    "options_zh": [
     "copilot",
     "/new",
     "/session"
    ],
    "correct_en": "copilot",
    "correct_zh": "copilot"
   }
  ]
 },
 {
  "id": 16,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "Where is the proxy service hosted?",
   "options": {
    "A": "Self hosted",
    "B": "Amazon Web Service",
    "C": "Microsoft Azure",
    "D": "Google Cloud Platform"
   },
   "explanation": "The proxy service for GitHub Copilot is hosted on Microsoft Azure.\nReference: GitHub Copilot infrastructure and hosting information."
  },
  "zh": {
   "stem": "代理服务（proxy service）托管在哪里？",
   "options": {
    "A": "自行托管",
    "B": "Amazon Web Service",
    "C": "Microsoft Azure",
    "D": "Google Cloud Platform"
   },
   "explanation": "GitHub Copilot 的代理服务托管在 Microsoft Azure 上。\n参考：GitHub Copilot 基础设施与托管信息。"
  }
 },
 {
  "id": 17,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Which of the following describes role prompting?",
   "options": {
    "A": "Describing in your prompt what your role is to get a better suggestion",
    "B": "Tell GitHub Copilot in what tone of voice it should respond",
    "C": "Prompt GitHub Copilot to explain what was the role of a suggestion",
    "D": "Giving GitHub Copilot multiple examples of the form of the data you want to use"
   },
   "explanation": "Role prompting involves explicitly stating your role or the persona you want GitHub Copilot to adopt within your prompt. This helps Copilot provide more contextually relevant and accurate suggestions. By defining your role (e.g., \" As a senior software engineer, \" \" As a technical writer \" ), you guide Copilot to tailor its responses to align with the expertise and perspective associated with that role. This improves the quality and relevance of the generated code and explanations.\nReference: GitHub Copilot documentation on prompt engineering and best practices."
  },
  "zh": {
   "stem": "下列哪项描述了角色提示（role prompting）？",
   "options": {
    "A": "在提示词中描述你的角色，以获得更好的建议",
    "B": "告诉 GitHub Copilot 应以什么语气回应",
    "C": "提示 GitHub Copilot 解释某个建议的作用是什么",
    "D": "向 GitHub Copilot 提供多个你想使用的数据格式的示例"
   },
   "explanation": "角色提示是指在提示词中明确说明你的角色，或希望 GitHub Copilot 采用的角色设定（persona），帮助 Copilot 提供更贴合上下文、更准确的建议。通过定义你的角色（例如“作为资深软件工程师”“作为技术文档撰写者”），可引导 Copilot 按照该角色相应的专业知识和视角来调整回答，从而提高生成的代码和解释的质量与相关性。\n参考：GitHub Copilot 关于提示工程与最佳实践的文档。"
  }
 },
 {
  "id": 18,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "What GitHub Copilot pricing plan gives you access to your company's knowledge bases?",
   "options": {
    "A": "GitHub Copilot Individual",
    "B": "GitHub Copilot Business",
    "C": "GitHub Copilot Enterprise",
    "D": "GitHub Copilot Professional"
   },
   "explanation": "GitHub Copilot Enterprise provides access to your company's knowledge bases, enabling the tool to provide contextually relevant suggestions based on your organization's specific documentation and code.\nReference: GitHub Copilot Enterprise pricing and features."
  },
  "zh": {
   "stem": "哪种 GitHub Copilot 定价方案可让你访问公司的知识库（knowledge bases）？",
   "options": {
    "A": "GitHub Copilot Individual",
    "B": "GitHub Copilot Business",
    "C": "GitHub Copilot Enterprise",
    "D": "GitHub Copilot Professional"
   },
   "explanation": "GitHub Copilot Enterprise 可访问公司的知识库，使工具能根据组织特有的文档和代码提供贴合上下文的建议。\n参考：GitHub Copilot Enterprise 定价与功能。"
  }
 },
 {
  "id": 19,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "D"
  ],
  "en": {
   "stem": "How does GitHub Copilot Enterprise assist in code reviews during the pull request process? (Select two.)",
   "options": {
    "A": "It automatically merges pull requests after an automated review.",
    "B": "It generates a prose summary and a bulleted list of key changes for pull requests.",
    "C": "It can validate the accuracy of the changes in the pull request.",
    "D": "It can answer questions about the changeset of the pull request."
   },
   "explanation": "GitHub Copilot Enterprise assists in code reviews by generating summaries of pull requests and answering questions about the changes made.\nReference: GitHub Copilot Enterprise pull request review documentation."
  },
  "zh": {
   "stem": "GitHub Copilot Enterprise 如何在拉取请求（pull request）流程中协助代码审查？（请选择两项。）",
   "options": {
    "A": "在自动审查后自动合并拉取请求。",
    "B": "为拉取请求生成文字摘要和关键变更的项目符号列表。",
    "C": "可以验证拉取请求中变更的准确性。",
    "D": "可以回答关于拉取请求变更集的问题。"
   },
   "explanation": "GitHub Copilot Enterprise 通过生成拉取请求摘要并回答有关所做变更的问题来协助代码审查。\n参考：GitHub Copilot Enterprise 拉取请求审查文档。"
  }
 },
 {
  "id": 20,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "When crafting prompts for GitHub Copilot, what is a recommended strategy to enhance the relevance of the generated code?",
   "options": {
    "A": "Keep the prompt as short as possible, using single words or brief phrases.",
    "B": "Write the prompt in natural language without any programming language.",
    "C": "Avoid mentioning the programming language to allow for more flexible suggestions.",
    "D": "Provide examples of expected input and output within the prompt."
   },
   "explanation": "“To get the best results from GitHub Copilot, provide clear prompts and, when possible, include examples of expected input and output.”\nThis establishes that including examples is a recommended prompt engineering strategy.\nReferences: GitHub Copilot prompt engineering documentation."
  },
  "zh": {
   "stem": "在为 GitHub Copilot 编写提示词时，下列哪项是提高生成代码相关性的推荐策略？",
   "options": {
    "A": "让提示词尽可能简短，使用单词或简短短语。",
    "B": "用自然语言撰写提示词，完全不使用编程语言。",
    "C": "避免提及编程语言，以便获得更灵活的建议。",
    "D": "在提示词中提供预期输入和输出的示例。"
   },
   "explanation": "“要从 GitHub Copilot 获得最佳结果，请提供清晰的提示词，并在可能时加入预期输入和输出的示例。”\n这说明在提示词中加入示例是推荐的提示工程策略。\n参考：GitHub Copilot 提示工程文档。"
  }
 },
 {
  "id": 21,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "What configuration needs to be set to get help from Microsoft and GitHub protecting against IP infringement while using GitHub Copilot?",
   "options": {
    "A": "Suggestions matching public code to'blocked '",
    "B": "Enforce blocking of MIT or GPL licensed code",
    "C": "You need to check code suggestions yourself before accepting",
    "D": "Enable GitHub Copilot license checking"
   },
   "explanation": "To help protect against IP infringement, you need to configure GitHub Copilot to block suggestions that match public code. This ensures that the generated code is not directly copied from publicly available sources.\nReference: GitHub Copilot documentation on IP protection and code filtering."
  },
  "zh": {
   "stem": "要在使用 GitHub Copilot 时获得 Microsoft 和 GitHub 在防范知识产权侵权方面的协助，需要设置哪项配置？",
   "options": {
    "A": "将匹配公开代码的建议设为“已阻止（blocked）”",
    "B": "强制阻止 MIT 或 GPL 许可的代码",
    "C": "在接受之前需要自行检查代码建议",
    "D": "启用 GitHub Copilot 许可证检查"
   },
   "explanation": "为帮助防范知识产权侵权，需要将 GitHub Copilot 配置为阻止匹配公开代码的建议，以确保生成的代码不是直接复制自公开来源。\n参考：GitHub Copilot 关于知识产权保护与代码过滤的文档。"
  }
 },
 {
  "id": 22,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "How does the /tests slash command assist developers?",
   "options": {
    "A": "Constructs detailed test documentation.",
    "B": "Creates unit tests for the selected code.",
    "C": "Integrates with external testing frameworks.",
    "D": "Executes test cases to find issues with the code."
   },
   "explanation": "The /tests slash command in GitHub Copilot Chat creates unit tests for the selected code, helping developers ensure the functionality and reliability of their code.\nReference: GitHub Copilot Chat command documentation."
  },
  "zh": {
   "stem": "/tests 斜杠命令如何协助开发人员？",
   "options": {
    "A": "构建详细的测试文档。",
    "B": "为所选代码创建单元测试。",
    "C": "与外部测试框架集成。",
    "D": "执行测试用例以发现代码问题。"
   },
   "explanation": "GitHub Copilot Chat 中的 /tests 斜杠命令会为所选代码创建单元测试，帮助开发人员确保代码的功能性和可靠性。\n参考：GitHub Copilot Chat 命令文档。"
  }
 },
 {
  "id": 23,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "Which of the following does GitHub Copilot's LLM derive context from when producing a response?",
   "options": {
    "A": "Frequency of commits to the repository",
    "B": "Syntax highlighting scheme of the code in the IDE",
    "C": "Neighboring or related files within a project",
    "D": "Version control system integrated with the IDE"
   },
   "explanation": "“Copilot may use context from neighboring or related files in the project to improve the accuracy of its suggestions.”\nThis confirms that context is enriched with information from related files, making option C correct.\nReferences: GitHub Copilot context derivation documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 的 LLM 在生成回应时，会从下列哪项获取上下文？",
   "options": {
    "A": "向仓库提交的频率",
    "B": "IDE 中代码的语法高亮方案",
    "C": "项目中相邻或相关的文件",
    "D": "与 IDE 集成的版本控制系统"
   },
   "explanation": "“Copilot 可能会使用项目中相邻或相关文件的上下文，以提高建议的准确性。”\n这证实上下文会由相关文件的信息来充实，因此选项 C 正确。\n参考：GitHub Copilot 上下文来源文档。"
  }
 },
 {
  "id": 24,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "What is the best way to share feedback about GitHub Copilot Chat when using it on GitHub Mobile?",
   "options": {
    "A": "Use the emojis in the Copilot Chat interface.",
    "B": "The feedback section on the GitHub website.",
    "C": "By tweeting at GitHub's official X (Twitter) account.",
    "D": "The Settings menu in the GitHub Mobile app."
   },
   "explanation": "“On GitHub Mobile, you can use emojis in the Copilot Chat interface to provide quick feedback on the responses.”\nThis makes option A correct.\nReferences: GitHub Copilot Mobile documentation."
  },
  "zh": {
   "stem": "在 GitHub Mobile 上使用 GitHub Copilot Chat 时，分享反馈的最佳方式是什么？",
   "options": {
    "A": "使用 Copilot Chat 界面中的表情符号。",
    "B": "GitHub 网站上的反馈区。",
    "C": "在 GitHub 官方 X（Twitter）账号上发推。",
    "D": "GitHub Mobile 应用中的“设置”菜单。"
   },
   "explanation": "“在 GitHub Mobile 上，你可以使用 Copilot Chat 界面中的表情符号，对回应快速提供反馈。”\n因此选项 A 正确。\n参考：GitHub Copilot Mobile 文档。"
  }
 },
 {
  "id": 25,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "How does GitHub Copilot typically handle code suggestions that involve deprecated features or syntax of programming languages?",
   "options": {
    "A": "GitHub Copilot automatically updates deprecated features in its suggestions to the latest version.",
    "B": "GitHub Copilot may suggest deprecated syntax or features if they are present in its training data.",
    "C": "GitHub Copilot always filters out deprecated elements to promote the use of current standards.",
    "D": "GitHub Copilot rejects all prompts involving deprecated features to avoid compilation errors."
   },
   "explanation": "“GitHub Copilot may sometimes suggest deprecated code, APIs, or patterns if these appear in its training data. Users are responsible for reviewing and updating the suggestions.”\nThis confirms that Copilot does not automatically update or reject deprecated features, but may still suggest them if they were part of training.\nReferences: GitHub Copilot usage limitations documentation."
  },
  "zh": {
   "stem": "对于涉及编程语言已弃用（deprecated）功能或语法的代码建议，GitHub Copilot 通常如何处理？",
   "options": {
    "A": "GitHub Copilot 会在建议中自动将已弃用的功能更新为最新版本。",
    "B": "如果训练数据中存在已弃用的语法或功能，GitHub Copilot 可能会建议它们。",
    "C": "GitHub Copilot 总是过滤掉已弃用的元素，以推广使用当前标准。",
    "D": "GitHub Copilot 会拒绝所有涉及已弃用功能的提示词，以避免编译错误。"
   },
   "explanation": "“如果训练数据中出现已弃用的代码、API 或模式，GitHub Copilot 有时可能会建议它们。用户有责任检查并更新这些建议。”\n这说明 Copilot 不会自动更新或拒绝已弃用的功能，但若它们存在于训练数据中，仍可能被建议。\n参考：GitHub Copilot 使用限制文档。"
  }
 },
 {
  "id": 26,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "In what way can GitHub Copilot and GitHub Copilot Chat aid developers in modernizing applications?",
   "options": {
    "A": "GitHub Copilot can directly convert legacy applications into cloud-native architectures.",
    "B": "GitHub Copilot can suggest modern programming patterns based on your code.",
    "C": "GitHub Copilot can create and deploy full-stack applications based on a single query.",
    "D": "GitHub Copilot can refactor applications to align with upcoming standards."
   },
   "explanation": "GitHub Copilot and GitHub Copilot Chat are powerful AI-driven tools designed to assist developers by providing context-aware code suggestions and interactive support. Specifically, in the context of modernizing applications, GitHub Copilot excels at analyzing existing code and suggesting modern programming patterns, best practices, and syntax improvements that align with contemporary development standards. For example, it can recommend updates to outdated constructs, propose more efficient algorithms, or suggest frameworks and libraries that are widely used in modern application development.\nWhy not A?GitHub Copilot does not \" directly convert \" legacy applications into cloud-native architectures. It can assist by suggesting code changes or patterns that support such a transition, but it doesn’t autonomously perform the full conversion process, which involves architectural decisions and deployment steps beyond its scope.\nWhy not C?While GitHub Copilot can generate code snippets and even larger portions of an application, it cannot create and deploy full-stack applications from a single query. It requires developer input, refinement, and integration to achieve a complete, deployable solution.\nWhy not D?GitHub Copilot can assist with refactoring by suggesting improvements to existing code, but it doesn’t inherently \" align with upcoming standards \" in a predictive sense. Its suggestions are based on current best practices and the data it was trained on, not future standards that are yet to be defined.\nThus,Bis the most accurate and realistic way GitHub Copilot aids developers in modernizing applications, leveraging its ability to provide relevant, context-based suggestions to update and improve codebases.\nReference: GitHub Copilot documentation on application modernization."
  },
  "zh": {
   "stem": "GitHub Copilot 和 GitHub Copilot Chat 能以何种方式帮助开发人员实现应用程序现代化？",
   "options": {
    "A": "GitHub Copilot 可以直接将旧版应用程序转换为云原生架构。",
    "B": "GitHub Copilot 可以根据你的代码建议现代的编程模式。",
    "C": "GitHub Copilot 可以根据单个查询创建并部署全栈应用程序。",
    "D": "GitHub Copilot 可以重构应用程序以符合即将推出的标准。"
   },
   "explanation": "GitHub Copilot 和 GitHub Copilot Chat 是强大的 AI 驱动工具，通过提供感知上下文的代码建议和交互式支持来协助开发人员。具体到应用程序现代化，GitHub Copilot 擅长分析现有代码，并建议符合当代开发标准的现代编程模式、最佳实践和语法改进。例如，它可以建议更新过时的结构、提出更高效的算法，或推荐现代应用开发中广泛使用的框架和库。\n为什么不是 A？GitHub Copilot 不会“直接转换”旧版应用程序为云原生架构。它可以通过建议支持这种转型的代码变更或模式来提供协助，但无法自主完成整个转换过程，因为其中涉及的架构决策和部署步骤超出其范围。\n为什么不是 C？虽然 GitHub Copilot 可以生成代码片段，甚至应用程序的较大部分，但无法根据单个查询创建并部署全栈应用程序。它需要开发人员的输入、完善和集成，才能得到完整、可部署的解决方案。\n为什么不是 D？GitHub Copilot 可以通过对现有代码提出改进建议来协助重构，但它本质上并不会以预测方式“符合即将推出的标准”。它的建议基于当前的最佳实践和训练数据，而非尚未制定的未来标准。\n因此，B 是描述 GitHub Copilot 如何帮助开发人员实现应用程序现代化最准确、最现实的答案，它利用的是提供相关的、基于上下文的建议来更新和改进代码库的能力。\n参考：GitHub Copilot 关于应用程序现代化的文档。"
  }
 },
 {
  "id": 27,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "A social media manager wants to use AI to filter content. How can they promote transparency in the platform’ s AI operations?",
   "options": {
    "A": "By regularly updating the AI filtering algorithm.",
    "B": "By relying on a well-regarded AI development company.",
    "C": "By focusing on user satisfaction with the content filtering.",
    "D": "By providing clear explanations about the types of content the AI is designed to filter and how it arrives at its conclusion."
   },
   "explanation": "Exact extracts:\n“Transparency. AI systems should be understandable.”\nReferences: Microsoft Responsible AI guidelines and transparency notes."
  },
  "zh": {
   "stem": "一位社交媒体经理想使用 AI 来过滤内容。他们如何提升平台 AI 运作的透明度？",
   "options": {
    "A": "定期更新 AI 过滤算法。",
    "B": "依赖一家声誉良好的 AI 开发公司。",
    "C": "关注用户对内容过滤的满意度。",
    "D": "清楚说明 AI 被设计用来过滤哪些类型的内容，以及它如何得出结论。"
   },
   "explanation": "原文摘录：\n“透明度（Transparency）：AI 系统应当是可理解的。”\n参考：Microsoft 负责任 AI 指南与透明度说明。"
  }
 },
 {
  "id": 28,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "What is one of the recommended practices when using GitHub Copilot Chat to enhance code quality?",
   "options": {
    "A": "Avoid using Copilot for complex tasks.",
    "B": "Disable Copilot's inline suggestions.",
    "C": "Regularly review and refactor the code suggested by Copilot.",
    "D": "Rely solely on Copilot's suggestions without reviewing them."
   },
   "explanation": "“Developers should always review, test, and refactor code generated by GitHub Copilot. Copilot can speed up development, but maintaining code quality requires careful human oversight.”\nThis establishes that regularly reviewing and refactoring Copilot suggestions is the recommended best practice.\nReferences: GitHub Copilot responsible use guidelines."
  },
  "zh": {
   "stem": "在使用 GitHub Copilot Chat 提升代码质量时，下列哪项是推荐的做法？",
   "options": {
    "A": "避免将 Copilot 用于复杂任务。",
    "B": "停用 Copilot 的内联建议。",
    "C": "定期检查并重构 Copilot 建议的代码。",
    "D": "完全依赖 Copilot 的建议而不检查。"
   },
   "explanation": "“开发人员应始终检查、测试并重构 GitHub Copilot 生成的代码。Copilot 可以加快开发速度，但维持代码质量需要谨慎的人工监督。”\n这说明定期检查并重构 Copilot 的建议是推荐的最佳实践。\n参考：GitHub Copilot 负责任使用指南。"
  }
 },
 {
  "id": 29,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "How does GitHub Copilot assist developers in minimizing context switching?",
   "options": {
    "A": "GitHub Copilot can automatically handle project management tasks.",
    "B": "GitHub Copilot can completely replace the need for human collaboration.",
    "C": "GitHub Copilot can predict and prevent bugs before they occur.",
    "D": "GitHub Copilot allows developers to stay in their IDE."
   },
   "explanation": "“Copilot reduces the need to switch between documentation, browsers, and editors by bringing suggestions and explanations directly into the IDE.”\nThis demonstrates that minimizing context switching comes from enabling developers to stay within their IDE.\nReferences: GitHub Copilot productivity documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 如何帮助开发人员减少上下文切换？",
   "options": {
    "A": "GitHub Copilot 可以自动处理项目管理任务。",
    "B": "GitHub Copilot 可以完全取代人与人之间的协作。",
    "C": "GitHub Copilot 可以在错误发生之前预测并预防。",
    "D": "GitHub Copilot 让开发人员可以留在 IDE 中。"
   },
   "explanation": "“Copilot 将建议和解释直接带入 IDE，减少了在文档、浏览器和编辑器之间切换的需要。”\n这说明减少上下文切换的方式，是让开发人员能够留在 IDE 中。\n参考：GitHub Copilot 生产力文档。"
  }
 },
 {
  "id": 30,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "GitHub Copilot in the Command Line Interface (CLI) can be used to configure the following settings: (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "The default execution confirmation",
    "B": "Usage analytics",
    "C": "The default editor",
    "D": "GitHub CLI subcommands"
   },
   "explanation": "GitHub Copilot in the CLI allows configuration of settings such as the default execution confirmation and usage analytics. These settings help tailor the CLI experience to the user's preferences.\nReference: GitHub Copilot CLI configuration documentation."
  },
  "zh": {
   "stem": "命令行界面（CLI）中的 GitHub Copilot 可用于配置下列哪些设置？（每个正确答案是解决方案的一部分。请选择两项。）",
   "options": {
    "A": "默认的执行确认",
    "B": "使用情况分析",
    "C": "默认编辑器",
    "D": "GitHub CLI 子命令"
   },
   "explanation": "CLI 中的 GitHub Copilot 允许配置诸如默认执行确认和使用情况分析等设置，这些设置有助于根据用户偏好定制 CLI 体验。\n参考：GitHub Copilot CLI 配置文档。"
  }
 },
 {
  "id": 31,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "What is zero-shot prompting?",
   "options": {
    "A": "Only giving GitHub Copilot a question as a prompt and no examples",
    "B": "Giving GitHub Copilot examples of the problem you want to solve",
    "C": "Telling GitHub Copilot it needs to show only the correct answer",
    "D": "Giving GitHub Copilot examples of the algorithm and outcome you want to use",
    "E": "Giving as little context to GitHub Copilot as possible"
   },
   "explanation": "“Zero-shot prompting means asking the model to perform a task without providing examples—only the question or task description is given.”\nThis confirms that the correct definition of zero-shot prompting is providing no examples, only a direct prompt.\nReferences: GitHub Copilot and AI prompting documentation."
  },
  "zh": {
   "stem": "什么是零样本提示（zero-shot prompting）？",
   "options": {
    "A": "只向 GitHub Copilot 提供一个问题作为提示词，不给示例",
    "B": "向 GitHub Copilot 提供你想解决的问题的示例",
    "C": "告诉 GitHub Copilot 只需显示正确答案",
    "D": "向 GitHub Copilot 提供你想使用的算法和结果的示例",
    "E": "尽可能少地向 GitHub Copilot 提供上下文"
   },
   "explanation": "“零样本提示是指要求模型在不提供示例的情况下执行任务——只给出问题或任务描述。”\n这证实零样本提示的正确定义是不提供示例，只给出直接的提示词。\n参考：GitHub Copilot 与 AI 提示文档。"
  }
 },
 {
  "id": 32,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have a Windows development workstation that has Microsoft Visual Studio 2022 version 17.10 installed.\nYou have an active GitHub Copilot plan.\nYou plan to start using GitHub Copilot code suggestions in Visual Studio.\nYou need to ensure that the code suggestions are available in Visual Studio. The solution must minimize administrative effort.\nWhat should you do?",
   "options": {
    "A": "Install Node.js 18 or later on the workstation.",
    "B": "From Visual Studio Marketplace, install the GitHub Copilot extension.",
    "C": "Sign in to Visual Studio by using your GitHub account.",
    "D": "From the Visual Studio terminal, run copilot setup."
   },
   "explanation": "Visual Studio 2022 version 17.10 already includes the unified GitHub Copilot and GitHub Copilot Chat extension as a built-in component, so installing a separate Marketplace extension is unnecessary for this version. GitHub's documentation also requires the developer to add or sign in with the GitHub account that has access to the Copilot plan. Because the workstation already has Visual Studio 17.10 and the user already has an active Copilot plan, signing in with the GitHub account is the action that enables access with the least administrative effort. Node.js is not a prerequisite for Visual Studio Copilot suggestions, and copilot setup is not the documented Visual Studio activation method."
  },
  "zh": {
   "stem": "你有一台安装了 Microsoft Visual Studio 2022 17.10 版的 Windows 开发工作站。\n你拥有有效的 GitHub Copilot 方案。\n你计划开始在 Visual Studio 中使用 GitHub Copilot 代码建议。\n你需要确保代码建议在 Visual Studio 中可用。该解决方案必须尽量减少管理工作量。\n你应该怎么做？",
   "options": {
    "A": "在工作站上安装 Node.js 18 或更高版本。",
    "B": "从 Visual Studio Marketplace 安装 GitHub Copilot 扩展。",
    "C": "使用你的 GitHub 账户登录 Visual Studio。",
    "D": "在 Visual Studio 终端中运行 copilot setup。"
   },
   "explanation": "Visual Studio 2022 17.10 版已将统一的 GitHub Copilot 与 GitHub Copilot Chat 扩展作为内置组件，因此对此版本无需另外从 Marketplace 安装扩展。GitHub 文档也要求开发人员添加或登录具有 Copilot 方案访问权限的 GitHub 账户。由于工作站已安装 Visual Studio 17.10，且用户已有有效的 Copilot 方案，使用 GitHub 账户登录即是以最少管理工作量启用访问的操作。Node.js 不是 Visual Studio 中 Copilot 建议的先决条件，copilot setup 也不是文档中记载的 Visual Studio 激活方法。"
  }
 },
 {
  "id": 33,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "C",
   "E"
  ],
  "en": {
   "stem": "What reasons could apply if code suggestions are not working in your editor? (Select three.)",
   "options": {
    "A": "You are working in files included in your .gitignore",
    "B": "You do not have an active internet connection",
    "C": "Your programming language is not supported",
    "D": "Your content exclusion is active and blocks the use of GitHub Copilot",
    "E": "You do not have a valid GitHub Copilot license"
   },
   "explanation": "Exact extracts:\n“Copilot requires an active internet connection to provide suggestions.”\n“Copilot does not support all programming languages.”\nReferences: GitHub Copilot troubleshooting documentation."
  },
  "zh": {
   "stem": "如果代码建议在编辑器中无法运作，可能有哪些原因？（请选择三项。）",
   "options": {
    "A": "你正在处理包含在 .gitignore 中的文件",
    "B": "你没有可用的互联网连接",
    "C": "你的编程语言不受支持",
    "D": "你的内容排除（content exclusion）已启用，并阻止了 GitHub Copilot 的使用",
    "E": "你没有有效的 GitHub Copilot 许可证"
   },
   "explanation": "原文摘录：\n“Copilot 需要有效的互联网连接才能提供建议。”\n“Copilot 并不支持所有编程语言。”\n参考：GitHub Copilot 疑难解答文档。"
  }
 },
 {
  "id": 34,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "C"
  ],
  "en": {
   "stem": "How long does GitHub retain Copilot data for Business and Enterprise? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Prompts and Suggestions: Not retained",
    "B": "Prompts and Suggestions: Retained for 28 days",
    "C": "User Engagement Data: Kept for Two Years",
    "D": "User Engagement Data: Kept for One Year"
   },
   "explanation": "For GitHub Copilot Business and Enterprise, prompts and suggestions are retained for 28 days to provide context and improve the service. User engagement data, which includes usage patterns and interactions, is kept for two years. This data retention policy is designed to balance service improvement with user privacy.\nReference: GitHub Copilot documentation on data privacy and retention policies for Business andEnterprise plans."
  },
  "zh": {
   "stem": "GitHub 对 Business 和 Enterprise 版的 Copilot 数据保留多长时间？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "提示和建议：不保留",
    "B": "提示和建议：保留 28 天",
    "C": "用户参与数据：保留两年",
    "D": "用户参与数据：保留一年"
   },
   "explanation": "对于 GitHub Copilot Business 和 Enterprise，提示（prompts）和建议（suggestions）会保留 28 天，用于提供上下文并改进服务。用户参与数据（包括使用模式和交互）保留两年。该数据保留政策旨在在服务改进与用户隐私之间取得平衡。\n参考：GitHub Copilot 关于 Business 和 Enterprise 方案数据隐私与保留政策的文档。"
  }
 },
 {
  "id": 35,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "How can you get multiple suggestions from GitHub Copilot?",
   "options": {
    "A": "By asking for multiple suggestions using comments in your code",
    "B": "By opening the completions panel in your editor",
    "C": "By using the inline chat functionality with the command'multiple '",
    "D": "By using @workspace in the chat window"
   },
   "explanation": "You can get multiple suggestions by opening the completions panel in your editor, which displays alternative code suggestions.\nReference: GitHub Copilot usage documentation."
  },
  "zh": {
   "stem": "如何从 GitHub Copilot 获得多个建议？",
   "options": {
    "A": "通过在代码中使用注释请求多个建议",
    "B": "通过在编辑器中打开补全面板（completions panel）",
    "C": "通过使用内联聊天（inline chat）功能并输入命令 'multiple '",
    "D": "通过在聊天窗口中使用 @workspace"
   },
   "explanation": "可以通过在编辑器中打开补全面板来获得多个建议，该面板会显示其他可选的代码建议。\n参考：GitHub Copilot 使用文档。"
  }
 },
 {
  "id": 36,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "D"
  ],
  "en": {
   "stem": "What method can a developer use to generate sample data with GitHub Copilot? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Utilizing GitHub Copilot's ability to create fictitious information from patterns in training data.",
    "B": "Leveraging GitHub Copilot's ability to independently initiate and manage data storage services.",
    "C": "Utilize GitHub Copilot's capability to directly access and use databases to create sample data.",
    "D": "Leveraging GitHub Copilot's suggestions to create data based on API documentation in the repository."
   },
   "explanation": "GitHub Copilot can generate sample data by creating fictitious information based on patterns in its training data and by using suggestions based on API documentation within the repository.\nReference: GitHub Copilot documentation on data generation assistance."
  },
  "zh": {
   "stem": "开发人员可以使用什么方法通过 GitHub Copilot 生成示例数据？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "利用 GitHub Copilot 根据训练数据中的模式创建虚构信息的能力。",
    "B": "利用 GitHub Copilot 自主启动并管理数据存储服务的能力。",
    "C": "利用 GitHub Copilot 直接访问并使用数据库来创建示例数据的能力。",
    "D": "利用 GitHub Copilot 根据仓库中的 API 文档提供建议来创建数据的能力。"
   },
   "explanation": "GitHub Copilot 可以根据其训练数据中的模式创建虚构信息，并根据仓库内的 API 文档给出建议，从而生成示例数据。\n参考：GitHub Copilot 关于数据生成辅助的文档。"
  }
 },
 {
  "id": 37,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "What is the correct way to exclude specific files from being used by GitHub Copilot Business during code suggestions?",
   "options": {
    "A": "Modify the .gitignore file to include the specific files.",
    "B": "Add the specific files to a copilot.ignore file.",
    "C": "Use the GitHub Copilot settings in the user interface to exclude files.",
    "D": "Rename the files to include the suffix _no_copilot."
   },
   "explanation": ""
  },
  "zh": {
   "stem": "要在代码建议期间阻止 GitHub Copilot Business 使用特定文件，正确的做法是什么？",
   "options": {
    "A": "修改 .gitignore 文件，加入这些特定文件。",
    "B": "将这些特定文件添加到 copilot.ignore 文件中。",
    "C": "使用用户界面中的 GitHub Copilot 设置来排除文件。",
    "D": "重命名文件，加上后缀 _no_copilot。"
   },
   "explanation": ""
  }
 },
 {
  "id": 38,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "C"
  ],
  "en": {
   "stem": "What kind of insights can the GitHub Copilot usage metrics API provide to help evaluate the effectiveness of GitHub Copilot? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "The API can generate detailed reports on code quality improvements made by GitHub Copilot.",
    "B": "The API can track the number of code suggestions accepted and used in the organization.",
    "C": "The API can provide Copilot Chat specific suggestions acceptance metrics.",
    "D": "The API can refactor your code to improve productivity.",
    "E": "The API can provide feedback on coding style and standards compliance."
   },
   "explanation": "Exact extracts:\n“The Copilot usage metrics API allows organizations to track the number of suggestions shown and accepted by members.”\nReferences: GitHub Copilot metrics API documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 使用情况指标 API（usage metrics API）可以提供哪些洞察，以帮助评估 GitHub Copilot 的成效？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "该 API 可以生成关于 GitHub Copilot 所做代码质量改进的详细报告。",
    "B": "该 API 可以跟踪组织内被接受并使用的代码建议数量。",
    "C": "该 API 可以提供 Copilot Chat 专属的建议接受率指标。",
    "D": "该 API 可以重构你的代码以提高生产力。",
    "E": "该 API 可以提供关于编码风格和标准合规性的反馈。"
   },
   "explanation": "原文摘录：\n“Copilot 使用情况指标 API 允许组织跟踪成员看到并接受的建议数量。”\n参考：GitHub Copilot 指标 API 文档。"
  }
 },
 {
  "id": 39,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "What is the primary role of the /optimize slash command in Visual Studio?",
   "options": {
    "A": "Translates code into a more performant language.",
    "B": "Enhances the performance of the selected code by analyzing its runtime complexity.",
    "C": "Automatically formats the code according to the selected style guide.",
    "D": "Summarizes your documentation into more maintainable and readable formats."
   },
   "explanation": "“/optimize Analyze and improve running time of the selected code.” This statement from Visual Studio Copilot Chat slash command documentation shows that the role of /optimize is specifically to analyze and improve the runtime performance of selected code, aligning directly with option B.\nReferences: GitHub Copilot official documentation and Visual Studio Copilot Chat command reference."
  },
  "zh": {
   "stem": "/optimize 斜杠命令在 Visual Studio 中的主要作用是什么？",
   "options": {
    "A": "将代码翻译成性能更高的语言。",
    "B": "通过分析运行时复杂度来提升所选代码的性能。",
    "C": "按照所选风格指南自动格式化代码。",
    "D": "将你的文档总结为更易维护、更易读的格式。"
   },
   "explanation": "“/optimize 分析并改进所选代码的运行时间。”Visual Studio Copilot Chat 斜杠命令文档中的这句话表明，/optimize 的作用正是分析并改进所选代码的运行时性能，与选项 B 完全一致。\n参考：GitHub Copilot 官方文档和 Visual Studio Copilot Chat 命令参考。"
  }
 },
 {
  "id": 40,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "D"
  ],
  "en": {
   "stem": "Which GitHub Copilot pricing plans include features that exclude your GitHub Copilot data like usage, prompts, and suggestions from default training GitHub Copilot? (Choose two correct answers.)",
   "options": {
    "A": "GitHub Copilot Business",
    "B": "GitHub Copilot Codespace",
    "C": "GitHub Copilot Individual",
    "D": "GitHub Copilot Enterprise"
   },
   "explanation": "“For Copilot Business and Copilot Enterprise, user data such as code suggestions, prompts, and completions are excluded from training GitHub Copilot’s models.”\nThis confirms that only Business and Enterprise plans provide this exclusion feature.\nReferences: GitHub Copilot data usage and privacy documentation."
  },
  "zh": {
   "stem": "哪些 GitHub Copilot 定价方案包含将你的 GitHub Copilot 数据（如使用情况、提示和建议）排除在 GitHub Copilot 默认训练之外的功能？（请选择两个正确答案。）",
   "options": {
    "A": "GitHub Copilot Business",
    "B": "GitHub Copilot Codespace",
    "C": "GitHub Copilot Individual",
    "D": "GitHub Copilot Enterprise"
   },
   "explanation": "“对于 Copilot Business 和 Copilot Enterprise，代码建议、提示和补全等用户数据会被排除在 GitHub Copilot 模型的训练之外。”\n这确认只有 Business 和 Enterprise 方案提供此排除功能。\n参考：GitHub Copilot 数据使用与隐私文档。"
  }
 },
 {
  "id": 41,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Why is it important to ensure the security of the code used in Generative AI (Gen AI) tools?",
   "options": {
    "A": "Ensuring code security prevents unauthorized access and potential data breaches.",
    "B": "Ensuring code security supports the development of more advanced AI features.",
    "C": "Ensuring code security enables the AI system to handle larger datasets effectively.",
    "D": "Ensuring code security maintains the integrity of the AI system."
   },
   "explanation": "“Securing the code used with generative AI prevents unauthorized access, helps safeguard sensitive data, and protects against potential breaches.”\nThis confirms option A is correct because the primary importance lies in avoiding unauthorized access and breaches.\nReferences: GitHub Copilot responsible use and AI security documentation."
  },
  "zh": {
   "stem": "为什么确保 Generative AI（Gen AI）工具中所用代码的安全很重要？",
   "options": {
    "A": "确保代码安全可防止未经授权的访问和潜在的数据泄露。",
    "B": "确保代码安全有助于开发更先进的 AI 功能。",
    "C": "确保代码安全使 AI 系统能够有效处理更大的数据集。",
    "D": "确保代码安全可维护 AI 系统的完整性。"
   },
   "explanation": "“保护与生成式 AI 一起使用的代码可防止未经授权的访问，有助于保护敏感数据，并防范潜在的泄露。”\n这确认选项 A 正确，因为其首要重要性在于避免未经授权的访问和数据泄露。\n参考：GitHub Copilot 负责任使用与 AI 安全文档。"
  }
 },
 {
  "id": 42,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "What is few-shot prompting?",
   "options": {
    "A": "Telling GitHub Copilot about the mechanism you want it to use and how to incorporate that into the response",
    "B": "Telling GitHub Copilot from which sources it should base the response on",
    "C": "Telling GitHub Copilot to try multiple times to answer the prompt",
    "D": "Telling GitHub Copilot to iterate several times on the answer before returning it to you"
   },
   "explanation": "“Few-shot prompting is a technique where you provide examples of the mechanism or output you want the model to follow. These examples guide the AI’s responses.”\nThis proves that option A is correct.\nReferences: GitHub Copilot prompt engineering documentation."
  },
  "zh": {
   "stem": "什么是 few-shot prompting（少样本提示）？",
   "options": {
    "A": "告诉 GitHub Copilot 你希望它使用的机制，以及如何将其融入回答",
    "B": "告诉 GitHub Copilot 应基于哪些来源来生成回答",
    "C": "告诉 GitHub Copilot 多次尝试回答该提示",
    "D": "告诉 GitHub Copilot 在返回答案之前对答案迭代多次"
   },
   "explanation": "“Few-shot prompting 是一种技术，即提供你希望模型遵循的机制或输出的示例。这些示例会引导 AI 的回答。”\n这证明选项 A 正确。\n参考：GitHub Copilot 提示工程文档。"
  }
 },
 {
  "id": 43,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "C"
  ],
  "en": {
   "stem": "What are the potential risks associated with relying heavily on code generated from GitHub Copilot? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "GitHub Copilot may introduce security vulnerabilities by suggesting code with known exploits.",
    "B": "GitHub Copilot may decrease developer velocity by requiring too much time in prompt engineering.",
    "C": "GitHub Copilot's suggestions may not always reflect best practices or the latest coding standards.",
    "D": "GitHub Copilot may increase development lead time by providing irrelevant suggestions."
   },
   "explanation": "Heavy reliance on GitHub Copilot can introduce security vulnerabilities if the generated code contains known exploits. Additionally, Copilot's suggestions may not always align with best practices or the latest standards, requiring careful review and validation.\nReference: GitHub Copilot best practices and risk management."
  },
  "zh": {
   "stem": "过度依赖 GitHub Copilot 生成的代码有哪些潜在风险？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "GitHub Copilot 可能因建议带有已知漏洞利用的代码而引入安全漏洞。",
    "B": "GitHub Copilot 可能因在提示工程上耗费过多时间而降低开发人员的速度。",
    "C": "GitHub Copilot 的建议不一定总是反映最佳实践或最新的编码标准。",
    "D": "GitHub Copilot 可能因提供不相关的建议而增加开发前置时间（lead time）。"
   },
   "explanation": "过度依赖 GitHub Copilot，如果生成的代码包含已知漏洞利用，可能会引入安全漏洞。此外，Copilot 的建议不一定总是符合最佳实践或最新标准，需要仔细审查和验证。\n参考：GitHub Copilot 最佳实践与风险管理。"
  }
 },
 {
  "id": 44,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "What are the effects of content exclusions? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "The excluded content is not directly available to GitHub Copilot to use as context.",
    "B": "GitHub Copilot suggestions are no longer available in the excluded files.",
    "C": "The excluded content is no longer used while debugging the code.",
    "D": "The IDE will not count coding suggestions in the excluded content."
   },
   "explanation": "Content exclusions prevent GitHub Copilot from using the excluded content as context and stop suggestions from being generated in those files.\nReference: GitHub Copilot content exclusion documentation."
  },
  "zh": {
   "stem": "内容排除（content exclusions）有哪些效果？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "被排除的内容不会直接提供给 GitHub Copilot 用作上下文。",
    "B": "在被排除的文件中不再提供 GitHub Copilot 建议。",
    "C": "调试代码时不再使用被排除的内容。",
    "D": "IDE 不会统计被排除内容中的编码建议。"
   },
   "explanation": "内容排除会阻止 GitHub Copilot 将被排除的内容用作上下文，并停止在这些文件中生成建议。\n参考：GitHub Copilot 内容排除文档。"
  }
 },
 {
  "id": 45,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "C",
   "D"
  ],
  "en": {
   "stem": "How does GitHub Copilot identify matching code and ensure that public code is appropriately handled or blocked? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Using machine learning models trained only on private repositories",
    "B": "Reviewing and storing user-specific private repository data for future suggestions",
    "C": "Filtering out suggestions that match code from public repositories",
    "D": "Implementing safeguards to detect and avoid suggesting verbatim snippets from public code"
   },
   "explanation": "Exact extracts:\n“GitHub Copilot has a filter to detect code suggestions that match public code on GitHub. When this filter is enabled, Copilot checks suggestions with about 150 characters or more against public code and blocks them if a match is found.”\nReferences: GitHub Copilot duplication detection and safeguards documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 如何识别匹配的代码，并确保公共代码得到妥善处理或被阻止？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "使用仅在私有仓库上训练的机器学习模型",
    "B": "审查并存储用户特定的私有仓库数据以用于未来的建议",
    "C": "过滤掉与公共仓库中代码匹配的建议",
    "D": "实施保护措施，以检测并避免建议来自公共代码的逐字片段"
   },
   "explanation": "原文摘录：\n“GitHub Copilot 有一个过滤器，用于检测与 GitHub 上公共代码匹配的代码建议。启用此过滤器后，Copilot 会将约 150 个字符或更长的建议与公共代码进行比对，如发现匹配则予以阻止。”\n参考：GitHub Copilot 重复检测与保护措施文档。"
  }
 },
 {
  "id": 46,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a developer device named Device1 that runs macOS and has Homebrew installed.\nDevice1 will be used by a developer who has a GitHub Copilot plan.\nYou have a GitHub Enterprise Cloud enterprise account that has data residency at contoso.ghe.com.\nYou need to install the GitHub Copilot CLI on Device1 and start interactive authentication against the correct GitHub host.\nWhich two commands should you run in sequence?",
   "options": {
    "A": "brew install --cask copilot-cli # copilot login --host https://contoso.ghe.com",
    "B": "brew install copilot-cli # gh auth login --hostname contoso.ghe.com",
    "C": "brew install --cask copilot-cli # copilot login --host https://github.com",
    "D": "npm install -g @github/copilot # gh auth login --hostname github.com"
   },
   "explanation": "Current GitHub Copilot documentation uses the standalone Copilot CLI installation and authentication flow.\nOn macOS with Homebrew, GitHub documents brew install --cask copilot-cli. For a GitHub Enterprise Cloud account with data residency, the CLI should authenticate directly against the enterprise host by using copilot login --host https://SUBDOMAIN.ghe.com; in this scenario that host is https://contoso.ghe.com. This is important because the Copilot license and authentication context must correspond to the GHE.com account that provides access. The PDF's selected commands reflect an older CLI flow and contain OCR or typing errors. For current GitHub Copilot Docs, the verified sequence is the Homebrew cask installation followed by copilot login --host https://contoso.ghe.com."
  },
  "zh": {
   "stem": "你有一台名为 Device1 的开发人员设备，运行 macOS 并已安装 Homebrew。\nDevice1 将由拥有 GitHub Copilot 方案的开发人员使用。\n你有一个 GitHub Enterprise Cloud 企业账户，其数据驻留（data residency）位于 contoso.ghe.com。\n你需要在 Device1 上安装 GitHub Copilot CLI，并针对正确的 GitHub 主机启动交互式身份验证。\n应按顺序运行哪两条命令？",
   "options": {
    "A": "brew install --cask copilot-cli # copilot login --host https://contoso.ghe.com",
    "B": "brew install copilot-cli # gh auth login --hostname contoso.ghe.com",
    "C": "brew install --cask copilot-cli # copilot login --host https://github.com",
    "D": "npm install -g @github/copilot # gh auth login --hostname github.com"
   },
   "explanation": "当前的 GitHub Copilot 文档采用独立的 Copilot CLI 安装与身份验证流程。\n在装有 Homebrew 的 macOS 上，GitHub 文档给出的安装命令是 brew install --cask copilot-cli。对于具有数据驻留的 GitHub Enterprise Cloud 账户，CLI 应使用 copilot login --host https://SUBDOMAIN.ghe.com 直接针对企业主机进行身份验证；在本场景中该主机为 https://contoso.ghe.com。这一点很重要，因为 Copilot 许可证和身份验证上下文必须与提供访问权限的 GHE.com 账户相对应。PDF 中所选的命令反映的是较旧的 CLI 流程，并含有 OCR 或输入错误。根据当前的 GitHub Copilot 文档，经验证的顺序是先通过 Homebrew cask 安装，再运行 copilot login --host https://contoso.ghe.com。"
  }
 },
 {
  "id": 47,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "E"
  ],
  "en": {
   "stem": "A team is using GitHub Copilot Individual in their daily development activities. They need to exclude specific files from being used to inform code completion suggestions. How can they achieve this?",
   "options": {
    "A": "Have an organization owner configure content exclusions",
    "B": "Add a .gitignore file to the repo",
    "C": "Have a repo administrator configure content exclusions",
    "D": "Use the #file Chat variable to exclude the files",
    "E": "Upgrade to Copilot Business"
   },
   "explanation": "“Content exclusions are available only with GitHub Copilot Business and Enterprise. Copilot Individual users cannot configure exclusions.”\nThis confirms that the only way for the team to achieve exclusions is by upgrading to Copilot Business.\nReferences: GitHub Copilot content exclusions documentation."
  },
  "zh": {
   "stem": "某团队在日常开发活动中使用 GitHub Copilot Individual。他们需要将特定文件排除在用于代码补全建议的信息之外。他们应如何做到？",
   "options": {
    "A": "让组织所有者配置内容排除",
    "B": "在仓库中添加 .gitignore 文件",
    "C": "让仓库管理员配置内容排除",
    "D": "使用 #file Chat 变量来排除文件",
    "E": "升级到 Copilot Business"
   },
   "explanation": "“内容排除仅适用于 GitHub Copilot Business 和 Enterprise。Copilot Individual 用户无法配置排除。”\n这确认该团队实现排除的唯一方式是升级到 Copilot Business。\n参考：GitHub Copilot 内容排除文档。"
  }
 },
 {
  "id": 48,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "An independent contractor develops applications for a variety of different customers. Assuming no concerns from their customers, which GitHub Copilot plan is best suited?",
   "options": {
    "A": "GitHub Copilot Individual",
    "B": "GitHub Copilot Business",
    "C": "GitHub Copilot Business for non-GHE Customers",
    "D": "GitHub Copilot Enterprise",
    "E": "GitHub Copilot Teams"
   },
   "explanation": "For an independent contractor, GitHub Copilot Individual is the most suitable and cost-effective plan.\nReference: GitHub Copilot pricing documentation."
  },
  "zh": {
   "stem": "一名独立承包商为多个不同客户开发应用程序。假设客户没有顾虑，哪种 GitHub Copilot 方案最合适？",
   "options": {
    "A": "GitHub Copilot Individual",
    "B": "GitHub Copilot Business",
    "C": "GitHub Copilot Business for non-GHE Customers",
    "D": "GitHub Copilot Enterprise",
    "E": "GitHub Copilot Teams"
   },
   "explanation": "对于独立承包商，GitHub Copilot Individual 是最合适且最具成本效益的方案。\n参考：GitHub Copilot 定价文档。"
  }
 },
 {
  "id": 49,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "C",
   "D"
  ],
  "en": {
   "stem": "What do you check when GitHub Copilot content exclusions are not working? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "If GitHub Copilot can connect to the server selected in your user settings.",
    "B": "If the user is part of the content exclusion team that limits the use of content exclusions.",
    "C": "If the content exclusion settings changed in the last 30 minutes or before that.",
    "D": "If the user is in an organization that has content exclusions configured."
   },
   "explanation": "Exact extracts:\n“Changes to content exclusion settings can take up to 30 minutes to take effect.”\nReferences: GitHub Copilot troubleshooting and content exclusions documentation."
  },
  "zh": {
   "stem": "当 GitHub Copilot 内容排除不起作用时，你应检查什么？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "GitHub Copilot 是否能连接到用户设置中所选的服务器。",
    "B": "用户是否属于限制内容排除使用的内容排除团队。",
    "C": "内容排除设置是否在最近 30 分钟内或更早之前发生过更改。",
    "D": "用户是否所在组织已配置内容排除。"
   },
   "explanation": "原文摘录：\n“对内容排除设置的更改最多可能需要 30 分钟才能生效。”\n参考：GitHub Copilot 故障排除与内容排除文档。"
  }
 },
 {
  "id": 50,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "When can GitHub Copilot still use content that was excluded using content exclusion?",
   "options": {
    "A": "When the user prompts with @workspace.",
    "B": "When the repository-level settings allow overrides by the user.",
    "C": "If the contents of an excluded file are referenced in code that is not excluded, for example function calls.",
    "D": "If the content exclusion was configured at the enterprise level, and is overwritten at the organization level."
   },
   "explanation": "“If excluded content is referenced by non-excluded code, such as through function calls, Copilot may still use that reference context.”\nThis confirms that excluded content can indirectly appear if referenced elsewhere.\nReferences: GitHub Copilot content exclusions limitations documentation."
  },
  "zh": {
   "stem": "被内容排除所排除的内容，在什么情况下 GitHub Copilot 仍可使用？",
   "options": {
    "A": "当用户使用 @workspace 提示时。",
    "B": "当仓库级设置允许用户覆盖时。",
    "C": "如果被排除文件的内容在未被排除的代码中被引用，例如函数调用。",
    "D": "如果内容排除是在企业级别配置的，并在组织级别被覆盖。"
   },
   "explanation": "“如果被排除的内容被未排除的代码引用（例如通过函数调用），Copilot 仍可能使用该引用上下文。”\n这确认被排除的内容如果在其他地方被引用，仍可能间接出现。\n参考：GitHub Copilot 内容排除限制文档。"
  }
 },
 {
  "id": 51,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B",
   "E"
  ],
  "en": {
   "stem": "What content can be configured to be excluded with content exclusions? (Each correct answer presents part of the solution. Choose three.)",
   "options": {
    "A": "Files",
    "B": "Folders",
    "C": "Lines in files",
    "D": "Gists",
    "E": "Repositories"
   },
   "explanation": "“Enterprise administrators can configure content exclusions to exclude entire repositories, folders, or specific files from being used by Copilot.”\nThis confirms that files, folders, and repositories can be excluded, but not individual lines or gists.\nReferences: GitHub Copilot content exclusions documentation."
  },
  "zh": {
   "stem": "内容排除可以配置排除哪些内容？（每个正确答案给出解决方案的一部分。请选择三项。）",
   "options": {
    "A": "文件",
    "B": "文件夹",
    "C": "文件中的行",
    "D": "Gist",
    "E": "仓库"
   },
   "explanation": "“企业管理员可以配置内容排除，以将整个仓库、文件夹或特定文件排除在 Copilot 使用范围之外。”\n这确认可以排除文件、文件夹和仓库，但不能排除单独的行或 Gist。\n参考：GitHub Copilot 内容排除文档。"
  }
 },
 {
  "id": 52,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "How does GitHub Copilot Chat ensure that a function works correctly?",
   "options": {
    "A": "By suggesting assertions based on the code's context and semantics.",
    "B": "By automatically writing all the tests for the function.",
    "C": "By writing the implementation code for the function.",
    "D": "By executing the test cases to validate the correctness of the code."
   },
   "explanation": "GitHub Copilot Chat can suggest assertions based on the code's context and semantics to help developers verify the correctness of their functions. These assertions serve as checks that the function behaves as expected under various conditions.\nReference: GitHub Copilot documentation on testing and code verification."
  },
  "zh": {
   "stem": "GitHub Copilot Chat 如何确保函数正常工作？",
   "options": {
    "A": "根据代码的上下文和语义建议断言（assertions）。",
    "B": "自动编写该函数的所有测试。",
    "C": "编写该函数的实现代码。",
    "D": "执行测试用例以验证代码的正确性。"
   },
   "explanation": "GitHub Copilot Chat 可以根据代码的上下文和语义建议断言，帮助开发人员验证其函数的正确性。这些断言用于检查函数在各种条件下是否按预期运行。\n参考：GitHub Copilot 关于测试与代码验证的文档。"
  }
 },
 {
  "id": 53,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "How can GitHub Copilot aid developers in writing documentation for their code?",
   "options": {
    "A": "GitHub Copilot cannot assist in writing documentation or comments.",
    "B": "GitHub Copilot can automatically generate complete and detailed documentation.",
    "C": "GitHub Copilot can suggest summaries or descriptions based on the code's functionality.",
    "D": "GitHub Copilot can only generate content in markdown format."
   },
   "explanation": "“Copilot can suggest comments and documentation summaries that describe the functionality of the code being written.”\nThis makes option C correct, as Copilot provides summaries or descriptions rather than full automatic documentation.\nReferences: GitHub Copilot documentation features."
  },
  "zh": {
   "stem": "GitHub Copilot 如何帮助开发人员为其代码编写文档？",
   "options": {
    "A": "GitHub Copilot 无法协助编写文档或注释。",
    "B": "GitHub Copilot 可以自动生成完整而详细的文档。",
    "C": "GitHub Copilot 可以根据代码的功能建议摘要或描述。",
    "D": "GitHub Copilot 只能生成 markdown 格式的内容。"
   },
   "explanation": "“Copilot 可以建议注释和文档摘要，用于描述所编写代码的功能。”\n因此选项 C 正确，因为 Copilot 提供的是摘要或描述，而不是完整的自动文档。\n参考：GitHub Copilot 文档功能。"
  }
 },
 {
  "id": 54,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "How long does it take content exclusion to add or be updated?",
   "options": {
    "A": "Up to 30 minutes",
    "B": "45 - 60 minutes",
    "C": "60 - 90 minutes",
    "D": "24 hours"
   },
   "explanation": "Content exclusions typically take up to 30 minutes to be added or updated.\nReference: GitHub Copilot content exclusion documentation."
  },
  "zh": {
   "stem": "内容排除的添加或更新需要多长时间？",
   "options": {
    "A": "最多 30 分钟",
    "B": "45 - 60 分钟",
    "C": "60 - 90 分钟",
    "D": "24 小时"
   },
   "explanation": "内容排除通常最多需要 30 分钟来添加或更新。\n参考：GitHub Copilot 内容排除文档。"
  }
 },
 {
  "id": 55,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "How does GitHub Copilot Chat help in understanding the existing codebase?",
   "options": {
    "A": "By running code linters and formatters.",
    "B": "By providing visual diagrams of the code structure.",
    "C": "By answering questions about the code and generating explanations.",
    "D": "By automatically refactoring code to improve readability."
   },
   "explanation": "GitHub Copilot Chat helps in understanding existing codebases by answering questions about the code and generating explanations. This allows developers to quickly grasp the functionality and structure of unfamiliar code.\nReference: GitHub Copilot Chat documentation on code understanding."
  },
  "zh": {
   "stem": "GitHub Copilot Chat 如何帮助理解现有代码库？",
   "options": {
    "A": "通过运行代码 linter 和格式化工具。",
    "B": "通过提供代码结构的可视化图表。",
    "C": "通过回答有关代码的问题并生成解释。",
    "D": "通过自动重构代码以提高可读性。"
   },
   "explanation": "GitHub Copilot Chat 通过回答有关代码的问题并生成解释来帮助理解现有代码库，使开发人员能够快速掌握不熟悉代码的功能和结构。\n参考：GitHub Copilot Chat 关于代码理解的文档。"
  }
 },
 {
  "id": 56,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "What specific function does the /fix slash command perform?",
   "options": {
    "A": "Initiates a code review with static analysis tools for security and logic errors.",
    "B": "Converts pseudocode into executable code, optimizing for readability and maintainability.",
    "C": "Generates new code snippets based on language syntax and best practices.",
    "D": "Proposes changes for detected issues, suggesting corrections for syntax errors and programming mistakes."
   },
   "explanation": "“/fix: Propose changes to resolve detected issues, such as syntax errors or common programming mistakes, in the selected code.”\nThis confirms that the /fix command is used to suggest corrections for identified problems.\nReferences: GitHub Copilot Chat command reference."
  },
  "zh": {
   "stem": "/fix 斜杠命令具体执行什么功能？",
   "options": {
    "A": "使用静态分析工具发起代码审查，查找安全和逻辑错误。",
    "B": "将伪代码转换为可执行代码，并针对可读性和可维护性进行优化。",
    "C": "根据语言语法和最佳实践生成新的代码片段。",
    "D": "针对检测到的问题提出更改，建议修正语法错误和编程错误。"
   },
   "explanation": "“/fix：针对所选代码中检测到的问题（如语法错误或常见编程错误）提出解决更改。”\n这确认 /fix 命令用于针对已识别的问题建议修正。\n参考：GitHub Copilot Chat 命令参考。"
  }
 },
 {
  "id": 57,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "Which of the following GitHub Copilot Business related activities can be tracked using the organization audit logs?",
   "options": {
    "A": "Accepted chat suggestions",
    "B": "Code suggestions made by GitHub Copilot",
    "C": "Changes to content exclusion settings",
    "D": "Suggestions blocked by duplication detection filtering"
   },
   "explanation": "Organization audit logs track changes to content exclusion settings, providing administrators with visibility into configuration changes.\nReference: GitHub Copilot Business audit logs."
  },
  "zh": {
   "stem": "以下与 GitHub Copilot Business 相关的哪些活动可以通过组织审核日志（audit logs）进行跟踪？",
   "options": {
    "A": "被接受的聊天建议",
    "B": "GitHub Copilot 提出的代码建议",
    "C": "内容排除设置的更改",
    "D": "被重复检测过滤阻止的建议"
   },
   "explanation": "组织审核日志会跟踪内容排除设置的更改，使管理员能够了解配置变更。\n参考：GitHub Copilot Business 审核日志。"
  }
 },
 {
  "id": 58,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "What is the process behind identifying public code matches when using a public code filter enabled in GitHub Copilot?",
   "options": {
    "A": "Running code suggestions through filters designed to detect public code",
    "B": "Comparing suggestions against public code using machine learning.",
    "C": "Analyzing the context and structure of the code being written",
    "D": "Reviewing the user's browsing history to identify public repositories"
   },
   "explanation": "When the public code filter is enabled, GitHub Copilot runs code suggestions through filters designed to detect matches with publicly available code. This helps prevent the generation of code that might infringe on copyright or licensing agreements.\nReference: GitHub Copilot documentation on public code filtering and licensing."
  },
  "zh": {
   "stem": "启用公共代码过滤器（public code filter）后，GitHub Copilot 识别公共代码匹配的过程是什么？",
   "options": {
    "A": "让代码建议通过旨在检测公共代码的过滤器",
    "B": "使用机器学习将建议与公共代码进行比较。",
    "C": "分析正在编写的代码的上下文和结构",
    "D": "查看用户的浏览历史以识别公共仓库"
   },
   "explanation": "启用公共代码过滤器后，GitHub Copilot 会让代码建议通过旨在检测与公开代码匹配的过滤器。这有助于防止生成可能侵犯版权或许可协议的代码。\n参考：GitHub Copilot 关于公共代码过滤与许可的文档。"
  }
 },
 {
  "id": 59,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "How can you improve the context used by GitHub Copilot? (Each correct answer presents part of the solution.\nChoose two.)",
   "options": {
    "A": "By opening the relevant tabs in your IDE",
    "B": "By adding relevant code snippets to your prompt",
    "C": "By adding the important files to your .gitconfig",
    "D": "By adding the full file paths to your prompt of important files"
   },
   "explanation": "Improving the context for GitHub Copilot involves opening relevant files in your IDE to provide immediate context and adding relevant code snippets directly to your prompts to give Copilot specific examples and information.\nReference: GitHub Copilot prompt engineering and context management."
  },
  "zh": {
   "stem": "如何改善 GitHub Copilot 所使用的上下文？（每个正确答案给出解决方案的一部分。\n请选择两项。）",
   "options": {
    "A": "在 IDE 中打开相关的标签页",
    "B": "在提示中加入相关的代码片段",
    "C": "将重要文件添加到你的 .gitconfig 中",
    "D": "在提示中加入重要文件的完整文件路径"
   },
   "explanation": "改善 GitHub Copilot 的上下文，包括在 IDE 中打开相关文件以提供即时上下文，以及直接在提示中加入相关代码片段，为 Copilot 提供具体的示例和信息。\n参考：GitHub Copilot 提示工程与上下文管理。"
  }
 },
 {
  "id": 60,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "Which GitHub Copilot plan allows for prompt and suggestion collection?",
   "options": {
    "A": "GitHub Copilot Individuals",
    "B": "GitHub Copilot Business",
    "C": "GitHub Copilot Enterprise",
    "D": "GitHub Copilot Codespace"
   },
   "explanation": "GitHub Copilot Enterprise allows for prompt and suggestion collection, enabling organizations to analyze and improve their usage of the tool.\nReference: GitHub Copilot Enterprise data collection documentation."
  },
  "zh": {
   "stem": "哪种 GitHub Copilot 方案允许收集提示和建议？",
   "options": {
    "A": "GitHub Copilot Individuals",
    "B": "GitHub Copilot Business",
    "C": "GitHub Copilot Enterprise",
    "D": "GitHub Copilot Codespace"
   },
   "explanation": "GitHub Copilot Enterprise 允许收集提示和建议，使组织能够分析并改进其对该工具的使用。\n参考：GitHub Copilot Enterprise 数据收集文档。"
  }
 },
 {
  "id": 61,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "Which of the following statements best describes the impact of GitHub Copilot on the software development process?",
   "options": {
    "A": "It decreases software vulnerabilities from third party dependencies.",
    "B": "It reduces overhead by automating testing workflows.",
    "C": "It increases productivity by automating repetitive coding tasks.",
    "D": "It replaces the need for developers in the software development process."
   },
   "explanation": "GitHub Copilot primarily impacts the software development process by increasing productivity through automating repetitive coding tasks.\nReference: GitHub Copilot impact documentation."
  },
  "zh": {
   "stem": "以下哪项陈述最能描述 GitHub Copilot 对软件开发过程的影响？",
   "options": {
    "A": "它减少来自第三方依赖项的软件漏洞。",
    "B": "它通过自动化测试工作流来降低开销。",
    "C": "它通过自动化重复性编码任务来提高生产力。",
    "D": "它取代了软件开发过程中对开发人员的需求。"
   },
   "explanation": "GitHub Copilot 对软件开发过程的主要影响是通过自动化重复性编码任务来提高生产力。\n参考：GitHub Copilot 影响文档。"
  }
 },
 {
  "id": 62,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "What type of information can you retrieve through GitHub Copilot Business Subscriptions via REST API?\n(Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Get a summary of GitHub Copilot usage for organization members",
    "B": "List all GitHub Copilot seat assignments for an organization",
    "C": "View code suggestions for a specific user",
    "D": "List of all unsubscribed GitHub Copilot members within an organization"
   },
   "explanation": "Exact extracts:\n“The REST API for Copilot Business allows you to retrieve a summary of Copilot usage metrics for organization members.”\nReferences: GitHub Copilot Business REST API documentation."
  },
  "zh": {
   "stem": "通过 REST API 可以检索 GitHub Copilot Business 订阅的哪些类型的信息？\n（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "获取组织成员的 GitHub Copilot 使用情况摘要",
    "B": "列出组织的所有 GitHub Copilot 席位（seat）分配",
    "C": "查看特定用户的代码建议",
    "D": "列出组织内所有未订阅的 GitHub Copilot 成员"
   },
   "explanation": "原文摘录：\n“Copilot Business 的 REST API 允许你检索组织成员的 Copilot 使用情况指标摘要。”\n参考：GitHub Copilot Business REST API 文档。"
  }
 },
 {
  "id": 63,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "A company is currently storing code in Bitbucket and would like to use GitHub Copilot. Which GitHub Copilot plan will be most cost effective to allow them to manage users with their Identity Provider (e.g. Okta)?",
   "options": {
    "A": "GitHub Copilot Business for non-GHE customers",
    "B": "GitHub Copilot Individual",
    "C": "GitHub Copilot Enterprise",
    "D": "GitHub Copilot Teams"
   },
   "explanation": "GitHub Copilot Enterprise is the most cost-effective plan for managing users with an Identity Provider like Okta, as it provides enterprise-level features and integration.\nReference: GitHub Copilot pricing and features."
  },
  "zh": {
   "stem": "一家公司目前将代码存储在 Bitbucket，并希望使用 GitHub Copilot。哪种 GitHub Copilot 方案最具成本效益，且能让他们通过身份提供商（如 Okta）管理用户？",
   "options": {
    "A": "GitHub Copilot Business for non-GHE customers",
    "B": "GitHub Copilot Individual",
    "C": "GitHub Copilot Enterprise",
    "D": "GitHub Copilot Teams"
   },
   "explanation": "GitHub Copilot Enterprise 是通过 Okta 等身份提供商管理用户时最具成本效益的方案，因为它提供企业级功能和集成。\n参考：GitHub Copilot 定价与功能。"
  }
 },
 {
  "id": 64,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "You have a GitHub repository named Repo1 that has GitHub Copilot enabled.\nThe developers at your company use Repo1 in Microsoft Visual Studio Code.\nYou need to identify potentially unoriginal suggestions and prevent secrets from being committed to Repo1.\nThe solution must ensure that the developers can use inline GitHub Copilot suggestions in Visual Studio Code.\nWhich two actions should you perform? Each correct answer presents part of the solution.",
   "options": {
    "A": "Enable push protection for secret scanning on Repo1.",
    "B": "Enable code referencing for GitHub Copilot completions.",
    "C": "Disable inline GitHub Copilot suggestions in the IDE.",
    "D": "Add repository custom instructions for secure coding, or create a custom push policy and configure a code check run."
   },
   "explanation": "Two separate GitHub features satisfy the security requirements. Push protection is part of secret scanning and blocks supported secrets before they are pushed to a repository, helping prevent credentials from being committed. GitHub Copilot code referencing addresses potentially unoriginal suggestions: when public-code matches are allowed, accepted inline suggestions that match public GitHub code can be logged with source URLs and license information so developers can review the origin. Disabling inline suggestions would violate the requirement that developers continue using Copilot completions. Repository custom instructions may influence generated code, but they do not replace secret scanning or public-code matching. Therefore, enabling push protection together with Copilot code referencing is the correct combination."
  },
  "zh": {
   "stem": "你有一个名为 Repo1 的 GitHub 仓库，已启用 GitHub Copilot。\n贵公司的开发人员在 Microsoft Visual Studio Code 中使用 Repo1。\n你需要识别可能不是原创的建议，并防止密钥（secrets）被提交到 Repo1。\n该解决方案必须确保开发人员能够在 Visual Studio Code 中使用内联 GitHub Copilot 建议。\n你应执行哪两项操作？每个正确答案给出解决方案的一部分。",
   "options": {
    "A": "在 Repo1 上启用 secret scanning 的推送保护（push protection）。",
    "B": "为 GitHub Copilot 补全启用代码引用（code referencing）。",
    "C": "在 IDE 中禁用内联 GitHub Copilot 建议。",
    "D": "添加用于安全编码的仓库自定义指令，或创建自定义推送策略并配置代码检查运行（code check run）。"
   },
   "explanation": "有两个独立的 GitHub 功能可满足这些安全要求。推送保护是 secret scanning 的一部分，会在推送到仓库之前阻止受支持的密钥，帮助防止凭据被提交。GitHub Copilot 代码引用（code referencing）用于解决可能不是原创的建议：当允许公共代码匹配时，被接受的、与 GitHub 公共代码匹配的内联建议可以连同来源 URL 和许可证信息一起被记录，使开发人员能够审查其来源。禁用内联建议会违反开发人员继续使用 Copilot 补全的要求。仓库自定义指令可能会影响生成的代码，但不能取代 secret scanning 或公共代码匹配。因此，同时启用推送保护和 Copilot 代码引用是正确的组合。"
  }
 },
 {
  "id": 65,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "What role does the pre-processing of user input play in the data flow of GitHub Copilot Chat?",
   "options": {
    "A": "It filters out irrelevant information from the user's input prompt.",
    "B": "It enriches the input prompt with additional context before passing it to the language model.",
    "C": "It directly generates a response based on the user's input prompt.",
    "D": "It formats the output response before presenting it to the user."
   },
   "explanation": "“Before being sent to the model, user input is pre-processed to enrich the prompt with contextual information such as open files, code selections, or previous conversation history.”\nThis shows that pre-processing is used to enrich input with context, making option B correct.\nReferences: GitHub Copilot Chat architecture documentation."
  },
  "zh": {
   "stem": "在 GitHub Copilot Chat 的数据流中，用户输入的预处理（pre-processing）起什么作用？",
   "options": {
    "A": "它从用户的输入提示中过滤掉不相关的信息。",
    "B": "它在将输入提示传递给语言模型之前，用额外的上下文丰富该提示。",
    "C": "它根据用户的输入提示直接生成响应。",
    "D": "它在向用户呈现之前格式化输出响应。"
   },
   "explanation": "“在发送给模型之前，用户输入会经过预处理，以用打开的文件、代码选区或之前的对话历史等上下文信息来丰富提示。”\n这表明预处理用于以上下文丰富输入，因此选项 B 正确。\n参考：GitHub Copilot Chat 架构文档。"
  }
 },
 {
  "id": 66,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "What is the correct way to access the audit log events for GitHub Copilot Business?",
   "options": {
    "A": "Navigate to the Security tab in the organization's GitHub settings",
    "B": "Navigate to the Insights tab in the repository settings",
    "C": "Use the Audit log section in the organization's GitHub settings",
    "D": "Use the Code tab in the GitHub repository"
   },
   "explanation": "Audit log events for GitHub Copilot Business can be accessed through the Audit log section within the organization's GitHub settings. This log provides a record of activities related to Copilot usage and configuration.\nReference: GitHub Copilot Business documentation on audit logs."
  },
  "zh": {
   "stem": "访问 GitHub Copilot Business 的审核日志事件的正确方式是什么？",
   "options": {
    "A": "导航到组织 GitHub 设置中的 Security 选项卡",
    "B": "导航到仓库设置中的 Insights 选项卡",
    "C": "使用组织 GitHub 设置中的 Audit log 部分",
    "D": "使用 GitHub 仓库中的 Code 选项卡"
   },
   "explanation": "GitHub Copilot Business 的审核日志事件可以通过组织 GitHub 设置中的 Audit log 部分访问。该日志记录了与 Copilot 使用和配置相关的活动。\n参考：GitHub Copilot Business 关于审核日志的文档。"
  }
 },
 {
  "id": 67,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "What is a benefit of using custom models in GitHub Copilot?",
   "options": {
    "A": "Responses are faster to produce and appear sooner",
    "B": "Responses use practices and patterns in your repositories",
    "C": "Responses use the organization's LLM engine",
    "D": "Responses are guaranteed to be correct"
   },
   "explanation": "Custom models in GitHub Copilot allow the tool to learn from the specific code patterns and practices within your repositories. This results in suggestions that are more aligned with your organization's coding standards and conventions, improving the relevance and accuracy of the generated code.\nReference: GitHub Copilot Enterprise documentation on custom models."
  },
  "zh": {
   "stem": "在 GitHub Copilot 中使用自定义模型（custom models）有什么好处？",
   "options": {
    "A": "响应生成得更快、出现得更早",
    "B": "响应会采用你的仓库中的实践和模式",
    "C": "响应使用组织自己的 LLM 引擎",
    "D": "响应保证是正确的"
   },
   "explanation": "GitHub Copilot 中的自定义模型可以让工具学习你的仓库中特定的代码模式和实践。这样生成的建议会更符合组织的编码标准和惯例，从而提高生成代码的相关性和准确性。\n参考：GitHub Copilot Enterprise 关于自定义模型的文档。"
  }
 },
 {
  "id": 68,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "Why might a Generative AI (Gen AI) tool create inaccurate outputs?",
   "options": {
    "A": "The Gen AI tool is overloaded with too many requests at once.",
    "B": "The Gen AI tool is experiencing downtime and is not fully recovered.",
    "C": "The Gen AI tool is programmed with a focus on creativity over factual accuracy.",
    "D": "The training data might contain biases or inconsistencies."
   },
   "explanation": "Gen AI tools can produce inaccurate outputs if the training data contains biases or inconsistencies, which can lead to flawed or misleading results.\nReference: Generative AI limitations documentation."
  },
  "zh": {
   "stem": "为什么生成式 AI（Gen AI）工具可能产生不准确的输出？",
   "options": {
    "A": "Gen AI 工具同时收到过多请求而过载。",
    "B": "Gen AI 工具发生停机，尚未完全恢复。",
    "C": "Gen AI 工具在设计上重创造力而非事实准确性。",
    "D": "训练数据可能包含偏见或不一致。"
   },
   "explanation": "如果训练数据包含偏见或不一致，Gen AI 工具就可能产生不准确的输出，导致有缺陷或具误导性的结果。\n参考：生成式 AI 局限性文档。"
  }
 },
 {
  "id": 69,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "How do you generate code suggestions with GitHub Copilot in the CLI?",
   "options": {
    "A": "Type out the code snippet # Use the copilot refine command to enhance it # Review the suggested command.",
    "B": "Write code comments # Press the suggestion shortcut # Select the best suggestion from the list.",
    "C": "Use gh copilot suggest # Write the command you want # Select the best suggestion from the list.",
    "D": "Describe the project's architecture # Use the copilot generate command # Accept the generated suggestion."
   },
   "explanation": "“To generate a suggestion, run gh copilot suggest, provide your command description, then review and select from the suggestions returned.”\nThis confirms the CLI command flow in option C.\nReferences: GitHub Copilot CLI documentation."
  },
  "zh": {
   "stem": "如何在 CLI 中使用 GitHub Copilot 生成代码建议？",
   "options": {
    "A": "输入代码片段 # 使用 copilot refine 命令进行优化 # 查看建议的命令。",
    "B": "编写代码注释 # 按下建议快捷键 # 从列表中选择最佳建议。",
    "C": "使用 gh copilot suggest # 写下你想要的命令 # 从列表中选择最佳建议。",
    "D": "描述项目的架构 # 使用 copilot generate 命令 # 接受生成的建议。"
   },
   "explanation": "“要生成建议，请运行 gh copilot suggest，提供你的命令描述，然后查看并从返回的建议中选择。”\n这证实了选项 C 中的 CLI 操作流程。\n参考：GitHub Copilot CLI 文档。"
  }
 },
 {
  "id": 70,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "When can GitHub Copilot still use content that was excluded using content exclusion?",
   "options": {
    "A": "If the contents of an excluded file are referenced in code that is not excluded, for example function calls.",
    "B": "When the repository level settings allow overrides by the user.",
    "C": "If the content exclusion was configured at the enterprise level, and is overwritten at the organization level.",
    "D": "When the user prompts with @workspace."
   },
   "explanation": "GitHub Copilot can still use excluded content if it is referenced in code that is not excluded, such as function calls.\nReference: GitHub Copilot content exclusion documentation."
  },
  "zh": {
   "stem": "在什么情况下，GitHub Copilot 仍可使用已通过内容排除（content exclusion）排除的内容？",
   "options": {
    "A": "如果被排除文件的内容在未被排除的代码中被引用，例如函数调用。",
    "B": "当仓库级别设置允许用户覆盖时。",
    "C": "如果内容排除在企业级别配置，并在组织级别被覆盖。",
    "D": "当用户使用 @workspace 提示时。"
   },
   "explanation": "如果被排除的内容在未被排除的代码中被引用（例如函数调用），GitHub Copilot 仍然可以使用这些被排除的内容。\n参考：GitHub Copilot 内容排除文档。"
  }
 },
 {
  "id": 71,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "E"
  ],
  "en": {
   "stem": "Which of the following are true about code suggestions? (Each correct answer presents part of the solution.\nChoose two.)",
   "options": {
    "A": "Code suggestions are guaranteed to not expose known security vulnerabilities",
    "B": "You can use keyboard shortcuts to accept the next word in a suggestion",
    "C": "Code suggestions are limited to single-line suggestions",
    "D": "Code suggestions will always compile or run without modifications",
    "E": "Alternative code suggestions can be shown in a new tab"
   },
   "explanation": "Exact extracts:\n“You can accept individual words, lines, or entire suggestions with keyboard shortcuts.”\nReferences: GitHub Copilot editor usage documentation."
  },
  "zh": {
   "stem": "关于代码建议，以下哪些说法正确？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "代码建议保证不会暴露已知的安全漏洞",
    "B": "可以使用键盘快捷键接受建议中的下一个单词",
    "C": "代码建议仅限于单行建议",
    "D": "代码建议始终无需修改即可编译或运行",
    "E": "可以在新标签页中显示替代的代码建议"
   },
   "explanation": "原文摘录：\n“你可以使用键盘快捷键接受单个单词、单行或整个建议。”\n参考：GitHub Copilot 编辑器使用文档。"
  }
 },
 {
  "id": 72,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "When using GitHub Copilot Chat to generate unit tests, which slash command would you use?",
   "options": {
    "A": "/init-tests",
    "B": "/create-tests",
    "C": "/generate-tests",
    "D": "/tests"
   },
   "explanation": ""
  },
  "zh": {
   "stem": "使用 GitHub Copilot Chat 生成单元测试时，应使用哪个斜杠命令？",
   "options": {
    "A": "/init-tests",
    "B": "/create-tests",
    "C": "/generate-tests",
    "D": "/tests"
   },
   "explanation": ""
  }
 },
 {
  "id": 73,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "If you are working on open source projects, GitHub Copilot Individual can be paid:",
   "options": {
    "A": "Based on the payment method in your user profile",
    "B": "N/A – Copilot Individual is a free service for all open source projects",
    "C": "Through an invoice or a credit card",
    "D": "Through an Azure Subscription"
   },
   "explanation": "“GitHub Copilot Individual subscriptions are billed using the payment method configured in your GitHub user profile.”\nThere is no free tier for open source projects, so option A is correct.\nReferences: GitHub Copilot billing documentation."
  },
  "zh": {
   "stem": "如果你从事开源项目，GitHub Copilot Individual 可以通过以下方式付费：",
   "options": {
    "A": "根据你的用户资料中的付款方式",
    "B": "不适用——Copilot Individual 对所有开源项目免费",
    "C": "通过发票或信用卡",
    "D": "通过 Azure 订阅"
   },
   "explanation": "“GitHub Copilot Individual 订阅使用在你的 GitHub 用户资料中配置的付款方式计费。”\n开源项目没有免费层级，因此选项 A 正确。\n参考：GitHub Copilot 计费文档。"
  }
 },
 {
  "id": 74,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "C"
  ],
  "en": {
   "stem": "What two options navigate to configure duplicate detection? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Enterprise settings # Copilot # Policies",
    "B": "Repository settings # Copilot # Policies",
    "C": "Organization settings # Copilot # Policies",
    "D": "User settings # Copilot # Policies"
   },
   "explanation": "“Duplicate detection and blocking of public code matches can be configured by enterprise administrators in enterprise or organization-level Copilot policies.”\nThis confirms that enterprise and organization settings are the correct paths.\nReferences: GitHub Copilot policy configuration documentation."
  },
  "zh": {
   "stem": "通过哪两个路径可以导航到重复检测（duplicate detection）的配置？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "企业设置 # Copilot # 策略（Policies）",
    "B": "仓库设置 # Copilot # 策略（Policies）",
    "C": "组织设置 # Copilot # 策略（Policies）",
    "D": "用户设置 # Copilot # 策略（Policies）"
   },
   "explanation": "“公共代码匹配的重复检测与阻止功能，可由企业管理员在企业级或组织级 Copilot 策略中配置。”\n这证实了企业设置和组织设置是正确的路径。\n参考：GitHub Copilot 策略配置文档。"
  }
 },
 {
  "id": 75,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Are there any limitations to consider when using GitHub Copilot for code refactoring?",
   "options": {
    "A": "GitHub Copilot may not always produce optimized or best-practice code for refactoring.",
    "B": "GitHub Copilot can only be used with a limited set of programming languages.",
    "C": "GitHub Copilot always produces bug-free code during refactoring.",
    "D": "GitHub Copilot understands the context of your entire project and refactors code accordingly."
   },
   "explanation": "“While Copilot can suggest refactoring changes, the code may not always follow best practices or be fully optimized. Developers must review and validate suggestions.”\nThis confirms that limitations exist in optimization and best practices, making option A correct.\nReferences: GitHub Copilot limitations documentation."
  },
  "zh": {
   "stem": "使用 GitHub Copilot 进行代码重构时，有哪些需要考虑的局限性？",
   "options": {
    "A": "GitHub Copilot 在重构时不一定总能产生优化或符合最佳实践的代码。",
    "B": "GitHub Copilot 只能用于有限的几种编程语言。",
    "C": "GitHub Copilot 在重构时始终产生无 bug 的代码。",
    "D": "GitHub Copilot 理解整个项目的上下文，并据此重构代码。"
   },
   "explanation": "“虽然 Copilot 可以建议重构修改，但代码未必总是遵循最佳实践或完全优化。开发者必须审查并验证这些建议。”\n这证实了在优化和最佳实践方面存在局限，因此选项 A 正确。\n参考：GitHub Copilot 局限性文档。"
  }
 },
 {
  "id": 76,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "What caution should developers exercise when using GitHub Copilot for assistance with mathematical computations?",
   "options": {
    "A": "GitHub Copilot's capability to optimize complex mathematical algorithms beyond manual coding.",
    "B": "GitHub Copilot's ability to execute and verify mathematical results in real-time.",
    "C": "GitHub Copilot's reliance on pattern-based responses without verifying computation accuracy.",
    "D": "GitHub Copilot's automatic update of outdated mathematical formulas to modern standards."
   },
   "explanation": "“Copilot’s responses are generated based on patterns in training data and are not guaranteed to be mathematically accurate. Developers must verify calculations independently.”\nThis shows that Copilot cannot guarantee correctness in math and relies on patterns, making option C correct.\nReferences: GitHub Copilot responsible use documentation."
  },
  "zh": {
   "stem": "开发者在使用 GitHub Copilot 协助数学计算时应注意什么？",
   "options": {
    "A": "GitHub Copilot 能够比手动编码更好地优化复杂数学算法。",
    "B": "GitHub Copilot 能够实时执行并验证数学结果。",
    "C": "GitHub Copilot 依赖基于模式的响应，而不会验证计算的准确性。",
    "D": "GitHub Copilot 会自动将过时的数学公式更新到现代标准。"
   },
   "explanation": "“Copilot 的响应是基于训练数据中的模式生成的，不保证数学上的准确性。开发者必须独立验证计算结果。”\n这说明 Copilot 无法保证数学正确性，且依赖模式，因此选项 C 正确。\n参考：GitHub Copilot 负责任使用文档。"
  }
 },
 {
  "id": 77,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "Which of the following prompts can be used to guide GitHub Copilot Chat in refactoring code for quality improvements? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "\" Show me how to improve the readability of this function. \"",
    "B": "\" Suggest ways to enhance the maintainability of this code segment. \"",
    "C": "\" Refactor my application to meet the latest coding standards. \"",
    "D": "\" Predict future coding trends and update my codebase accordingly. \""
   },
   "explanation": "Effective prompts for refactoring include requests that focus on specific quality improvements, such as readability and maintainability. These prompts guide GitHub Copilot to provide relevant and actionable suggestions.\nReference: GitHub Copilot prompt engineering best practices."
  },
  "zh": {
   "stem": "以下哪些提示可用于引导 GitHub Copilot Chat 重构代码以提升质量？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "\"向我展示如何提高这个函数的可读性。\"",
    "B": "\"建议一些提升这段代码可维护性的方法。\"",
    "C": "\"重构我的应用程序以符合最新的编码标准。\"",
    "D": "\"预测未来的编码趋势并相应更新我的代码库。\""
   },
   "explanation": "有效的重构提示应针对具体的质量改进，例如可读性和可维护性。这类提示能引导 GitHub Copilot 提供相关且可操作的建议。\n参考：GitHub Copilot 提示工程最佳实践。"
  }
 },
 {
  "id": 78,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "Identify the steps involved in the life cycle of a GitHub Copilot code suggestion? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Generate suggestions",
    "B": "Capturing the user's context",
    "C": "Processing telemetry data",
    "D": "Retraining the model",
    "E": "Storing user data"
   },
   "explanation": "Exact extracts:\n“Copilot first captures the context of the developer’s code and environment.”\nReferences: GitHub Copilot technical overview documentation."
  },
  "zh": {
   "stem": "请找出 GitHub Copilot 代码建议生命周期中涉及的步骤。（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "生成建议",
    "B": "捕获用户的上下文",
    "C": "处理遥测数据",
    "D": "重新训练模型",
    "E": "存储用户数据"
   },
   "explanation": "原文摘录：\n“Copilot 首先捕获开发者代码和环境的上下文。”\n参考：GitHub Copilot 技术概述文档。"
  }
 },
 {
  "id": 79,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You use GitHub Copilot Chat to debug a function.\nYou discover that GitHub Copilot is using irrelevant chat threads to generate output.\nYou need to ensure that GitHub Copilot only uses new input to generate output.\nWhat should you do, and how will this affect the prompt process flow?",
   "options": {
    "A": "Start a new chat in GitHub Copilot Chat; the previous chat history will not be included in the new model input.",
    "B": "Continue the existing chat; the previous chat history will remain included in the model input.",
    "C": "Start a new chat in GitHub Copilot Chat; the previous chat history will remain included in the model input.",
    "D": "Continue the existing chat; the previous chat history will be removed from the model input."
   },
   "explanation": "GitHub Copilot Chat uses conversation history as part of the context for later responses. GitHub's prompt- engineering guidance recommends keeping chat history relevant, while GitHub's AI-usage guidance specifically advises starting a new conversation when moving to unrelated work because a long thread carries prior history into subsequent requests. In this scenario, irrelevant earlier chat threads are contaminating the context used for debugging. Starting a new Copilot Chat session creates a clean conversational context for the new prompt, so the previous thread is no longer included as model input for that new conversation.\nContinuing in the same chat would preserve the unwanted context. Therefore, the correct action is to start a new chat, with the effect of removing the prior chat history from the new model input."
  },
  "zh": {
   "stem": "你使用 GitHub Copilot Chat 调试一个函数。\n你发现 GitHub Copilot 在使用不相关的聊天线程来生成输出。\n你需要确保 GitHub Copilot 只使用新的输入来生成输出。\n你应该怎么做，这会如何影响提示处理流程？",
   "options": {
    "A": "在 GitHub Copilot Chat 中开启新聊天；之前的聊天历史不会包含在新的模型输入中。",
    "B": "继续现有聊天；之前的聊天历史仍会包含在模型输入中。",
    "C": "在 GitHub Copilot Chat 中开启新聊天；之前的聊天历史仍会包含在模型输入中。",
    "D": "继续现有聊天；之前的聊天历史将从模型输入中移除。"
   },
   "explanation": "GitHub Copilot Chat 会将对话历史作为后续响应的上下文的一部分。GitHub 的提示工程指南建议保持聊天历史相关；而 GitHub 的 AI 使用指南明确建议在转向无关工作时开启新对话，因为过长的线程会把先前的历史带入后续请求。在此场景中，不相关的早期聊天线程污染了用于调试的上下文。开启新的 Copilot Chat 会话会为新提示创建干净的对话上下文，因此之前的线程不再作为该新对话的模型输入。\n继续在同一聊天中会保留不需要的上下文。因此正确做法是开启新聊天，其效果是将之前的聊天历史从新的模型输入中移除。"
  }
 },
 {
  "id": 80,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "How does GitHub Copilot suggest code optimizations for improved performance?",
   "options": {
    "A": "By analyzing the codebase and suggesting more efficient algorithms or data structures.",
    "B": "By automatically rewriting the codebase to use more efficient code.",
    "C": "By enforcing strict coding standards that ensure optimal performance.",
    "D": "By providing detailed reports on the performance of the codebase."
   },
   "explanation": "GitHub Copilot suggests code optimizations by analyzing the codebase and recommending more efficient algorithms or data structures.\nReference: GitHub Copilot code optimization documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 如何建议代码优化以提升性能？",
   "options": {
    "A": "通过分析代码库并建议更高效的算法或数据结构。",
    "B": "通过自动重写代码库以使用更高效的代码。",
    "C": "通过强制执行严格的编码标准以确保最佳性能。",
    "D": "通过提供代码库性能的详细报告。"
   },
   "explanation": "GitHub Copilot 通过分析代码库并推荐更高效的算法或数据结构来建议代码优化。\n参考：GitHub Copilot 代码优化文档。"
  }
 },
 {
  "id": 81,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "How can GitHub Copilot be limited when it comes to suggesting unit tests?",
   "options": {
    "A": "GitHub Copilot can generate all types of unit tests, including those for edge cases and complex integration scenarios.",
    "B": "GitHub Copilot primarily suggests basic unit tests that focus on core functionalities, often requiring additional input from developers for comprehensive coverage.",
    "C": "GitHub Copilot can handle any complexity in code and automatically generate appropriate unit tests.",
    "D": "GitHub Copilot's limitations in generating unit tests can vary based on the IDE version you are using."
   },
   "explanation": "GitHub Copilot often suggests basic unit tests and may not cover all edge cases or complex integration scenarios, requiring developers to supplement its suggestions.\nReference: GitHub Copilot testing limitations."
  },
  "zh": {
   "stem": "在建议单元测试方面，GitHub Copilot 可能有哪些局限？",
   "options": {
    "A": "GitHub Copilot 可以生成所有类型的单元测试，包括边界情况和复杂集成场景的测试。",
    "B": "GitHub Copilot 主要建议侧重核心功能的基础单元测试，通常需要开发者提供额外输入才能实现全面覆盖。",
    "C": "GitHub Copilot 能处理任何复杂度的代码并自动生成合适的单元测试。",
    "D": "GitHub Copilot 在生成单元测试方面的局限会因你使用的 IDE 版本而异。"
   },
   "explanation": "GitHub Copilot 通常建议基础的单元测试，可能无法涵盖所有边界情况或复杂的集成场景，需要开发者补充其建议。\n参考：GitHub Copilot 测试局限性。"
  }
 },
 {
  "id": 82,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a GitHub Copilot subscription.\nYou need to start an interactive GitHub Copilot CLI session from the root folder of a project.\nIf you are NOT authenticated, GitHub Copilot must prompt you to sign in.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
   "options": {},
   "explanation": "1. Run gh auth login to authenticate the GitHub CLI.\n2. Complete the browser-based GitHub sign-in flow.\n3. Confirm folder trust so Copilot may read and modify files in the project folder.\n4. Run copilot from the project root to start the interactive session.\n/login is used inside an already running session, and copilot --resume resumes a previous session rather than starting a new one."
  },
  "zh": {
   "stem": "你拥有 GitHub Copilot 订阅。\n你需要在项目的根文件夹中启动交互式 GitHub Copilot CLI 会话。\n如果你尚未通过身份验证，GitHub Copilot 必须提示你登录。\n你应按顺序执行哪四个操作？请将适当的操作从操作列表移到答题区，并按正确顺序排列。",
   "options": {},
   "explanation": "1. 运行 gh auth login 以验证 GitHub CLI 身份。\n2. 完成基于浏览器的 GitHub 登录流程。\n3. 确认文件夹信任，使 Copilot 可以读取和修改项目文件夹中的文件。\n4. 在项目根目录运行 copilot 以启动交互式会话。\n/login 用于已在运行的会话内，而 copilot --resume 是恢复之前的会话，而不是启动新会话。"
  },
  "sources_en": [
   "Run /login.",
   "Run copilot --resume.",
   "Run gh auth login.",
   "Open a browser-based GitHub sign-in flow.",
   "Confirm folder trust.",
   "Run copilot."
  ],
  "sources_zh": [
   "运行 /login。",
   "运行 copilot --resume。",
   "运行 gh auth login。",
   "打开基于浏览器的 GitHub 登录流程。",
   "确认文件夹信任。",
   "运行 copilot。"
  ],
  "targets": [
   {
    "label_en": "Step 1",
    "label_zh": "步骤 1",
    "correct_en": "Run gh auth login.",
    "correct_zh": "运行 gh auth login。"
   },
   {
    "label_en": "Step 2",
    "label_zh": "步骤 2",
    "correct_en": "Open a browser-based GitHub sign-in flow.",
    "correct_zh": "打开基于浏览器的 GitHub 登录流程。"
   },
   {
    "label_en": "Step 3",
    "label_zh": "步骤 3",
    "correct_en": "Confirm folder trust.",
    "correct_zh": "确认文件夹信任。"
   },
   {
    "label_en": "Step 4",
    "label_zh": "步骤 4",
    "correct_en": "Run copilot.",
    "correct_zh": "运行 copilot。"
   }
  ]
 },
 {
  "id": 83,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "Which Copilot Individual features are available when using a supported extension for Visual Studio, VS Code, or JetBrains IDEs? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Code suggestions",
    "B": "Chat",
    "C": "Knowledge Base",
    "D": "Pull Request Diff Analysis"
   },
   "explanation": "GitHub Copilot Individual provides code suggestions and chat features when used with supported IDE extensions like Visual Studio, VS Code, and JetBrains IDEs.\nReference: GitHub Copilot Individual features documentation."
  },
  "zh": {
   "stem": "在 Visual Studio、VS Code 或 JetBrains IDE 中使用受支持的扩展时，Copilot Individual 提供哪些功能？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "代码建议",
    "B": "聊天（Chat）",
    "C": "知识库（Knowledge Base）",
    "D": "拉取请求差异分析（Pull Request Diff Analysis）"
   },
   "explanation": "GitHub Copilot Individual 在与 Visual Studio、VS Code 和 JetBrains IDE 等受支持的 IDE 扩展配合使用时，提供代码建议和聊天功能。\n参考：GitHub Copilot Individual 功能文档。"
  }
 },
 {
  "id": 84,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "How can GitHub Copilot assist with code refactoring tasks?",
   "options": {
    "A": "GitHub Copilot can fix syntax errors without user input.",
    "B": "GitHub Copilot can automatically rewrite code to follow best practices.",
    "C": "GitHub Copilot can suggest refactoring improvements for better code quality.",
    "D": "GitHub Copilot can remove unnecessary files from the project directory."
   },
   "explanation": "GitHub Copilot can analyze existing code and suggest refactoring improvements to enhance code quality, readability, and maintainability. It can propose changes to improve code structure, reduce complexity, and follow best practices.\nReference: GitHub Copilot documentation on code refactoring assistance."
  },
  "zh": {
   "stem": "GitHub Copilot 如何协助代码重构任务？",
   "options": {
    "A": "GitHub Copilot 无需用户输入即可修复语法错误。",
    "B": "GitHub Copilot 可以自动重写代码以遵循最佳实践。",
    "C": "GitHub Copilot 可以建议重构改进，以提升代码质量。",
    "D": "GitHub Copilot 可以从项目目录中删除不必要的文件。"
   },
   "explanation": "GitHub Copilot 可以分析现有代码并建议重构改进，以提升代码质量、可读性和可维护性。它可以提出改进代码结构、降低复杂度并遵循最佳实践的修改建议。\n参考：GitHub Copilot 关于代码重构辅助的文档。"
  }
 },
 {
  "id": 85,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "How does GitHub Copilot assist developers in reducing the amount of manual boilerplate code they write?",
   "options": {
    "A": "By engaging in real-time collaboration with multiple developers to write boilerplate code.",
    "B": "By predicting future coding requirements and pre-emptively generating boilerplate code.",
    "C": "By refactoring the entire codebase to eliminate boilerplate code without developer input.",
    "D": "By suggesting code snippets that can be reused across different parts of the project."
   },
   "explanation": "“Copilot helps reduce boilerplate by suggesting reusable code snippets for repetitive structures across your project.”\nThis proves that Copilot saves time by generating reusable snippets, not by preemptively or automatically refactoring entire codebases.\nReferences: GitHub Copilot productivity documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 如何帮助开发者减少手动编写的样板代码（boilerplate code）？",
   "options": {
    "A": "通过与多名开发者实时协作编写样板代码。",
    "B": "通过预测未来的编码需求并预先生成样板代码。",
    "C": "通过在无需开发者输入的情况下重构整个代码库以消除样板代码。",
    "D": "通过建议可在项目不同部分复用的代码片段。"
   },
   "explanation": "“Copilot 通过为项目中重复的结构建议可复用的代码片段来帮助减少样板代码。”\n这说明 Copilot 是通过生成可复用片段来节省时间，而不是预先生成或自动重构整个代码库。\n参考：GitHub Copilot 生产力文档。"
  }
 },
 {
  "id": 86,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "What is the impact of the \" Fill-In-the-Middle \" (FIM) technique on GitHub Copilot's code suggestions?",
   "options": {
    "A": "Restricts Copilot to use only external databases for generating code suggestions.",
    "B": "Allows Copilot to generate suggestions based only on the prefix of the code.",
    "C": "Ignores both the prefix and suffix of the code, focusing only on user comments for context.",
    "D": "Improves suggestions by considering both the prefix and suffix of the code, filling in the middle part more accurately."
   },
   "explanation": "“Fill-in-the-Middle (FIM) enables Copilot to consider both prefix and suffix code, generating more accurate suggestions for the missing middle portion.”\nThis makes option D correct, as it explains how FIM enhances suggestion accuracy.\nReferences: GitHub Copilot model training and FIM technique documentation."
  },
  "zh": {
   "stem": "“Fill-In-the-Middle”（FIM，中间填充）技术对 GitHub Copilot 的代码建议有什么影响？",
   "options": {
    "A": "限制 Copilot 仅使用外部数据库来生成代码建议。",
    "B": "使 Copilot 仅根据代码的前缀生成建议。",
    "C": "同时忽略代码的前缀和后缀，仅关注用户注释作为上下文。",
    "D": "通过同时考虑代码的前缀和后缀来改进建议，更准确地填充中间部分。"
   },
   "explanation": "“Fill-in-the-Middle (FIM) 使 Copilot 能同时考虑前缀和后缀代码，为缺失的中间部分生成更准确的建议。”\n因此选项 D 正确，它说明了 FIM 如何提高建议的准确性。\n参考：GitHub Copilot 模型训练与 FIM 技术文档。"
  }
 },
 {
  "id": 87,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "Which GitHub Copilot plan could an Azure DevOps organization use without requiring a GitHub Enterprise license?",
   "options": {
    "A": "GitHub Copilot Individual",
    "B": "GitHub Copilot Enterprise",
    "C": "GitHub Copilot for Azure DevOps",
    "D": "Copilot Teams"
   },
   "explanation": "“GitHub Copilot for Azure DevOps is available to Azure DevOps organizations without requiring a GitHub Enterprise license.”\nThis confirms that Copilot for Azure DevOps is the correct plan for such organizations.\nReferences: GitHub Copilot for Azure DevOps documentation."
  },
  "zh": {
   "stem": "Azure DevOps 组织无需 GitHub Enterprise 许可证即可使用哪个 GitHub Copilot 计划？",
   "options": {
    "A": "GitHub Copilot Individual",
    "B": "GitHub Copilot Enterprise",
    "C": "GitHub Copilot for Azure DevOps",
    "D": "Copilot Teams"
   },
   "explanation": "“GitHub Copilot for Azure DevOps 可供 Azure DevOps 组织使用，无需 GitHub Enterprise 许可证。”\n这证实了 Copilot for Azure DevOps 是此类组织的正确计划。\n参考：GitHub Copilot for Azure DevOps 文档。"
  }
 },
 {
  "id": 88,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "When using GitHub Copilot to identify missing tests in your codebase, which of the following is the most important factor to consider?",
   "options": {
    "A": "Using well-known coding practices in your repository.",
    "B": "Ensuring that the correct context is available to GitHub Copilot.",
    "C": "Close all the tabs in your IDE that do not have tests in them.",
    "D": "Having a high test coverage percentage in the codebase."
   },
   "explanation": "“The accuracy of Copilot’s test generation depends heavily on the available context, including existing code, file structure, and open selections.”\nThis confirms that providing the correct context is the most important factor.\nReferences: GitHub Copilot testing documentation."
  },
  "zh": {
   "stem": "使用 GitHub Copilot 找出代码库中缺失的测试时，以下哪个是最重要的考虑因素？",
   "options": {
    "A": "在你的仓库中使用众所周知的编码实践。",
    "B": "确保 GitHub Copilot 能获得正确的上下文。",
    "C": "关闭 IDE 中所有不含测试的标签页。",
    "D": "代码库具有较高的测试覆盖率百分比。"
   },
   "explanation": "“Copilot 生成测试的准确性在很大程度上取决于可用的上下文，包括现有代码、文件结构和打开的选区。”\n这证实了提供正确的上下文是最重要的因素。\n参考：GitHub Copilot 测试文档。"
  }
 },
 {
  "id": 89,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "What method can be used to interact with GitHub Copilot?",
   "options": {
    "A": "By using a properly configured GitHub CLI",
    "B": "By using chat capabilities in NeoVim",
    "C": "From a watch window in an IDE debug session",
    "D": "From a web browser at https://github.copilot.com"
   },
   "explanation": "GitHub Copilot is an AI-powered code completion tool that integrates directly into supported Integrated Development Environments (IDEs) and code editors, such as Visual Studio Code, JetBrains IDEs, NeoVim, and others. Developers interact with it through their coding environment, where it provides real-time code suggestions, autocompletions, and (in some cases) chat-like capabilities via extensions or plugins (e.g., GitHub Copilot Chat in supported editors).\nEvaluation of Options:\nA. By using a properly configured GitHub CLIThe GitHub CLI (Command Line Interface) is a tool for interacting with GitHub repositories and workflows from the terminal, but it is not a method for interacting with GitHub Copilot. Copilot operates within code editors/IDEs, not through the CLI.Incorrect.\nB. By using chat capabilities in NeoVimThis is partially correct. GitHub Copilot can be used in NeoVim with the appropriate plugin (e.g., the Copilot.vim plugin), and GitHub Copilot Chat—a feature that allows conversational interaction—may also be available depending on the setup and version. However, \" chat capabilities in NeoVim \" alone is not the primary or standard way to describe Copilot interaction, as it’s more about code suggestions than chat. This is the closest option but not perfectly precise.Partially correct.\nC. From a watch window in an IDE debug sessionThe \" watch window \" in an IDE is used during debugging to monitor variable values, not to interact with GitHub Copilot. Copilot provides suggestions while coding, not specifically in debug sessions or watch windows.Incorrect.\nD. From a web browser athttps://github.copilot.comThere is no such URL as \" https://github.copilot.com \"\ndedicated to interacting with GitHub Copilot. Copilot is accessed via GitHub’s authentication and integrated into editors/IDEs, not through a standalone web browser interface. Information about Copilot is available on GitHub’s official site (e.g.,https://github.com/features/copilot), but interaction happens in the coding environment.Incorrect.\nReference: GitHub Copilot interaction documentation."
  },
  "zh": {
   "stem": "可以使用什么方法与 GitHub Copilot 交互？",
   "options": {
    "A": "使用正确配置的 GitHub CLI",
    "B": "使用 NeoVim 中的聊天功能",
    "C": "从 IDE 调试会话的监视窗口",
    "D": "从网页浏览器访问 https://github.copilot.com"
   },
   "explanation": "GitHub Copilot 是一款由 AI 驱动的代码补全工具，直接集成到受支持的集成开发环境（IDE）和代码编辑器中，例如 Visual Studio Code、JetBrains IDE、NeoVim 等。开发者在编码环境中与其交互，它会提供实时代码建议、自动补全，以及（在某些情况下）通过扩展或插件提供类似聊天的功能（例如受支持编辑器中的 GitHub Copilot Chat）。\n选项评估：\nA. 使用正确配置的 GitHub CLI。GitHub CLI（命令行界面）是在终端中与 GitHub 仓库和工作流交互的工具，但并不是与 GitHub Copilot 交互的方法。Copilot 在代码编辑器/IDE 中运行，而不是通过 CLI。不正确。\nB. 使用 NeoVim 中的聊天功能。这部分正确。GitHub Copilot 可通过相应插件（如 Copilot.vim）在 NeoVim 中使用，且根据设置和版本，也可能提供 GitHub Copilot Chat（支持对话式交互的功能）。然而，仅说“NeoVim 中的聊天功能”并不是描述 Copilot 交互的主要或标准方式，因为它更多是关于代码建议而非聊天。这是最接近的选项，但不够精确。部分正确。\nC. 从 IDE 调试会话的监视窗口（watch window）。IDE 中的“监视窗口”用于调试时监控变量值，而不是与 GitHub Copilot 交互。Copilot 在编码时提供建议，而不是专门在调试会话或监视窗口中。不正确。\nD. 从网页浏览器访问 https://github.copilot.com。不存在这样的专用于与 GitHub Copilot 交互的 URL。Copilot 通过 GitHub 的身份验证访问并集成到编辑器/IDE 中，而不是通过独立的网页浏览器界面。关于 Copilot 的信息可在 GitHub 官方网站（如 https://github.com/features/copilot）上找到，但交互发生在编码环境中。不正确。\n参考：GitHub Copilot 交互文档。"
  }
 },
 {
  "id": 90,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "Why is code reviewing still necessary when using GitHub Copilot to write tests?",
   "options": {
    "A": "Because GitHub Copilot can cover all possible scenarios in your test cases.",
    "B": "Because GitHub Copilot generates the best code possible for the test scenario.",
    "C": "Because GitHub Copilot's generated test cases may not cover all possible scenarios.",
    "D": "Because GitHub Copilot replaces the need for manual testing."
   },
   "explanation": "Code review is necessary because GitHub Copilot's generated test cases might not cover all possible scenarios, especially edge cases and complex interactions.\nReference: GitHub Copilot testing best practices."
  },
  "zh": {
   "stem": "为什么在使用 GitHub Copilot 编写测试时仍需要代码审查？",
   "options": {
    "A": "因为 GitHub Copilot 能涵盖测试用例中所有可能的场景。",
    "B": "因为 GitHub Copilot 能为测试场景生成最佳的代码。",
    "C": "因为 GitHub Copilot 生成的测试用例可能无法涵盖所有可能的场景。",
    "D": "因为 GitHub Copilot 取代了手动测试的需要。"
   },
   "explanation": "需要代码审查是因为 GitHub Copilot 生成的测试用例可能无法涵盖所有可能的场景，尤其是边界情况和复杂的交互。\n参考：GitHub Copilot 测试最佳实践。"
  }
 },
 {
  "id": 91,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "E"
  ],
  "en": {
   "stem": "Which REST API endpoint is used to modify details about a GitHub Copilot Business subscription? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Add teams to the Copilot subscription for an organization",
    "B": "Upgrade or downgrade the subscription tier",
    "C": "Migrate Copilot seat assignments between GitHub organizations",
    "D": "Reassign Copilot seats based on GitHub repository size",
    "E": "Remove teams from the Copilot subscription for an organization"
   },
   "explanation": "The REST API endpoints are used to add and remove teams from the Copilot Business subscription within an organization.\nReference: GitHub Copilot Business API documentation."
  },
  "zh": {
   "stem": "哪些 REST API 端点用于修改 GitHub Copilot Business 订阅的详细信息？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "为组织的 Copilot 订阅添加团队",
    "B": "升级或降级订阅层级",
    "C": "在 GitHub 组织之间迁移 Copilot 席位分配",
    "D": "根据 GitHub 仓库大小重新分配 Copilot 席位",
    "E": "为组织的 Copilot 订阅移除团队"
   },
   "explanation": "这些 REST API 端点用于在组织内的 Copilot Business 订阅中添加和移除团队。\n参考：GitHub Copilot Business API 文档。"
  }
 },
 {
  "id": 92,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "C",
   "D"
  ],
  "en": {
   "stem": "What types of content can GitHub Copilot Knowledge Base answer questions about? (Each correct answer presents part of the solution. Choose three.)",
   "options": {
    "A": "Code snippets",
    "B": "Compiled binaries",
    "C": "Documentation",
    "D": "Design patterns",
    "E": "Screenshots"
   },
   "explanation": "“GitHub Copilot Knowledge Bases allow you to ask questions about your organization’s documentation, design patterns, and code snippets.”\nThis proves that Copilot Knowledge Base can work with code snippets, documentation, and design patterns, but not binaries or screenshots.\nReferences: GitHub Copilot Enterprise Knowledge Base documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 知识库（Knowledge Base）可以回答关于哪些类型内容的问题？（每个正确答案给出解决方案的一部分。请选择三项。）",
   "options": {
    "A": "代码片段",
    "B": "编译后的二进制文件",
    "C": "文档",
    "D": "设计模式",
    "E": "截图"
   },
   "explanation": "“GitHub Copilot 知识库让你可以询问有关组织文档、设计模式和代码片段的问题。”\n这说明 Copilot 知识库可处理代码片段、文档和设计模式，但不能处理二进制文件或截图。\n参考：GitHub Copilot Enterprise 知识库文档。"
  }
 },
 {
  "id": 93,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "What is used by GitHub Copilot in the IDE to determine the prompt context?",
   "options": {
    "A": "Information from the IDE like open tabs, cursor location, selected code.",
    "B": "All the code in the current repository and any git submodules.",
    "C": "The open tabs in the IDE and the current folder of the terminal.",
    "D": "All the code visible in the current IDE."
   },
   "explanation": "“GitHub Copilot generates suggestions based on context from the IDE, including the file you are editing, open tabs, cursor position, and any selected code.”\nThis proves that the context is drawn from editor state information, making option A correct.\nReferences: GitHub Copilot context and suggestions documentation."
  },
  "zh": {
   "stem": "IDE 中的 GitHub Copilot 使用什么来确定提示上下文？",
   "options": {
    "A": "来自 IDE 的信息，如打开的标签页、光标位置、选中的代码。",
    "B": "当前仓库及任何 git 子模块中的所有代码。",
    "C": "IDE 中打开的标签页和终端的当前文件夹。",
    "D": "当前 IDE 中可见的所有代码。"
   },
   "explanation": "“GitHub Copilot 根据来自 IDE 的上下文生成建议，包括你正在编辑的文件、打开的标签页、光标位置和任何选中的代码。”\n这说明上下文来自编辑器状态信息，因此选项 A 正确。\n参考：GitHub Copilot 上下文与建议文档。"
  }
 },
 {
  "id": 94,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "C"
  ],
  "en": {
   "stem": "What are the additional checks that need to pass before the GitHub Copilot responses are submitted to the user? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Code quality",
    "B": "Compatibility with user-specific settings",
    "C": "Suggestions matching public code (optional based on settings)",
    "D": "Performance benchmarking"
   },
   "explanation": "Exact extracts:\n“Copilot applies post-processing checks for code quality to ensure that responses meet baseline standards.”\nReferences: GitHub Copilot safeguards documentation."
  },
  "zh": {
   "stem": "在 GitHub Copilot 的响应提交给用户之前，还需要通过哪些额外检查？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "代码质量",
    "B": "与用户特定设置的兼容性",
    "C": "建议与公共代码的匹配检查（可根据设置选择启用）",
    "D": "性能基准测试"
   },
   "explanation": "原文摘录：\n“Copilot 会应用代码质量的后处理检查，以确保响应符合基准标准。”\n参考：GitHub Copilot 安全防护文档。"
  }
 },
 {
  "id": 95,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "When using an IDE with a supported GitHub Copilot plug-in, which Chat features can be accessed from within the IDE? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Explain code and suggest improvements",
    "B": "Generate unit tests",
    "C": "Plan coding tasks",
    "D": "Find out about releases and commits"
   },
   "explanation": "Exact extracts:\n“In supported IDEs, you can ask Copilot Chat to explain code or suggest improvements.”\nReferences: GitHub Copilot Chat IDE integration documentation."
  },
  "zh": {
   "stem": "在使用带有受支持 GitHub Copilot 插件的 IDE 时，可以在 IDE 内访问哪些 Chat 功能？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "解释代码并建议改进",
    "B": "生成单元测试",
    "C": "规划编码任务",
    "D": "了解发布版本和提交"
   },
   "explanation": "原文摘录：\n“在受支持的 IDE 中，你可以要求 Copilot Chat 解释代码或建议改进。”\n参考：GitHub Copilot Chat IDE 集成文档。"
  }
 },
 {
  "id": 96,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "How can GitHub Copilot assist developers during the requirements analysis phase of the Software Development Life Cycle (SDLC)?",
   "options": {
    "A": "By automatically generating detailed requirements documents.",
    "B": "By providing templates and code snippets that help in documenting requirements.",
    "C": "By identifying and fixing potential requirement conflicts when using /help.",
    "D": "By managing stakeholder communication and meetings."
   },
   "explanation": "GitHub Copilot can assist during the requirements analysis phase by providing templates and code snippets that aid in documenting requirements. This helps streamline the process of capturing and organizing project requirements.\nReference: GitHub Copilot documentation on SDLC assistance."
  },
  "zh": {
   "stem": "在软件开发生命周期（SDLC）的需求分析阶段，GitHub Copilot 如何协助开发者？",
   "options": {
    "A": "自动生成详细的需求文档。",
    "B": "提供有助于记录需求的模板和代码片段。",
    "C": "使用 /help 识别并修复潜在的需求冲突。",
    "D": "管理利益相关者的沟通和会议。"
   },
   "explanation": "GitHub Copilot 可在需求分析阶段提供模板和代码片段，帮助记录需求，从而简化需求的收集和整理过程。\n参考：GitHub Copilot 关于 SDLC 辅助的文档。"
  }
 },
 {
  "id": 97,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Which of the following is a risk associated with using AI?",
   "options": {
    "A": "AI algorithms are incapable of perpetuating existing biases.",
    "B": "AI systems can sometimes make decisions that are difficult to interpret.",
    "C": "AI eliminates the need for data privacy regulations.",
    "D": "AI replaces the need for developer opportunities in most fields."
   },
   "explanation": "A risk associated with AI is that its decisions can be difficult to interpret, leading to a lack of transparency and potential misunderstandings.\nReference: AI risk management documentation."
  },
  "zh": {
   "stem": "以下哪项是使用 AI 的相关风险？",
   "options": {
    "A": "AI 算法无法延续现有的偏见。",
    "B": "AI 系统有时会做出难以解释的决策。",
    "C": "AI 消除了对数据隐私法规的需求。",
    "D": "AI 在大多数领域取代了对开发者机会的需求。"
   },
   "explanation": "AI 的一个风险是其决策可能难以解释，导致缺乏透明度和潜在的误解。\n参考：AI 风险管理文档。"
  }
 },
 {
  "id": 98,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "How does GitHub Copilot Chat help to fix security issues in your codebase?",
   "options": {
    "A": "By enforcing strict coding standards that prevent the introduction of vulnerabilities.",
    "B": "By providing detailed reports on the security vulnerabilities present in the codebase.",
    "C": "By annotating the given suggestions with known vulnerability patterns.",
    "D": "By automatically refactoring the entire codebase to remove vulnerabilities."
   },
   "explanation": "“When Copilot Chat generates suggestions, it may annotate them with warnings about known insecure patterns, helping developers identify potential vulnerabilities in context.”\nThis indicates that Copilot Chat assists with security by annotating code suggestions with vulnerability patterns.\nReferences: GitHub Copilot Chat security and responsible use documentation."
  },
  "zh": {
   "stem": "GitHub Copilot Chat 如何帮助修复代码库中的安全问题？",
   "options": {
    "A": "通过强制执行严格的编码标准以防止引入漏洞。",
    "B": "通过提供代码库中存在的安全漏洞的详细报告。",
    "C": "通过用已知漏洞模式标注所给出的建议。",
    "D": "通过自动重构整个代码库以消除漏洞。"
   },
   "explanation": "“当 Copilot Chat 生成建议时，它可能会用已知不安全模式的警告对建议进行标注，帮助开发者在上下文中识别潜在漏洞。”\n这表明 Copilot Chat 通过用漏洞模式标注代码建议来协助解决安全问题。\n参考：GitHub Copilot Chat 安全与负责任使用文档。"
  }
 },
 {
  "id": 99,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Which Microsoft ethical AI principle is aimed at ensuring AI systems treat all people equally?",
   "options": {
    "A": "Inclusiveness",
    "B": "Fairness",
    "C": "Reliability and Safety",
    "D": "Privacy and Security"
   },
   "explanation": "“Fairness. AI systems should treat all people fairly.” This principle directly defines fairness as the standard for ensuring equality across all individuals.\nReferences: Microsoft Responsible AI principles."
  },
  "zh": {
   "stem": "微软的哪项 AI 道德原则旨在确保 AI 系统平等对待所有人？",
   "options": {
    "A": "包容性（Inclusiveness）",
    "B": "公平性（Fairness）",
    "C": "可靠性与安全性（Reliability and Safety）",
    "D": "隐私与安全（Privacy and Security）"
   },
   "explanation": "“公平性（Fairness）。AI 系统应公平对待所有人。”该原则直接将公平性定义为确保所有个体平等的标准。\n参考：微软负责任 AI 原则。"
  }
 },
 {
  "id": 100,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "D"
  ],
  "en": {
   "stem": "How can GitHub Copilot facilitate a smoother learning experience when diving into a new programming language? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "GitHub Copilot Chat can provide guidance and support for common coding tasks and challenges in the targeted programming language.",
    "B": "GitHub Copilot's /understand command will help GitHub Copilot to understand code written in a targeted programming language.",
    "C": "GitHub Copilot can provide contextualized code suggestions and answer sources from an organization ' s documentation.",
    "D": "GitHub Copilot can convert comments into code to grasp the syntax and nuances of a new programming language."
   },
   "explanation": "GitHub Copilot helps with learning new languages by providing guidance on common tasks and by converting comments into code, allowing developers to see syntax in action.\nReference: GitHub Copilot language learning documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 如何让学习一门新编程语言的过程更顺畅？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "GitHub Copilot Chat 可以针对目标编程语言中的常见编码任务和挑战提供指导与支持。",
    "B": "GitHub Copilot 的 /understand 命令可帮助 GitHub Copilot 理解以目标编程语言编写的代码。",
    "C": "GitHub Copilot 可以提供符合上下文的代码建议，并根据组织的文档来回答问题。",
    "D": "GitHub Copilot 可以将注释转换为代码，帮助掌握新编程语言的语法与细微差别。"
   },
   "explanation": "GitHub Copilot 通过为常见任务提供指导，以及将注释转换为代码（让开发者看到语法的实际运用），来帮助学习新语言。\n参考：GitHub Copilot 语言学习文档。"
  }
 },
 {
  "id": 101,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "C"
  ],
  "en": {
   "stem": "Identify the right use cases where GitHub Copilot Chat is most effective. (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Create a technical requirement specification from the business requirement documentation",
    "B": "Explain a legacy COBOL code and translate the code to another language like Python.",
    "C": "Creation of a unit test scenario for newly developed Python code",
    "D": "Creation of end-to-end performance testing scenarios for a web application"
   },
   "explanation": "GitHub Copilot Chat is effective for explaining and translating legacy code and generating unit test scenarios for new code.\nReference: GitHub Copilot Chat use cases."
  },
  "zh": {
   "stem": "找出 GitHub Copilot Chat 最有效的使用场景。（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "根据业务需求文档创建技术需求规格说明",
    "B": "解释遗留的 COBOL 代码，并将其转换为 Python 等其他语言。",
    "C": "为新开发的 Python 代码创建单元测试场景",
    "D": "为 Web 应用程序创建端到端性能测试场景"
   },
   "explanation": "GitHub Copilot Chat 擅长解释和转换遗留代码，以及为新代码生成单元测试场景。\n参考：GitHub Copilot Chat 使用场景。"
  }
 },
 {
  "id": 102,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Select a strategy to increase the performance of GitHub Copilot Chat.",
   "options": {
    "A": "Optimize the usage of memory-intensive operations within generated code",
    "B": "Apply prompt engineering techniques to be more specific",
    "C": "Use a single GitHub Copilot Chat query to find resolutions for the collection of technical requirements",
    "D": "Limit the number of concurrent users accessing GitHub Copilot Chat"
   },
   "explanation": "“Performance of Copilot Chat can be improved with prompt engineering. More specific prompts give more relevant and accurate answers.”\nThis confirms that applying prompt engineering techniques is the valid strategy.\nReferences: GitHub Copilot Chat best practices documentation."
  },
  "zh": {
   "stem": "选择一种可提升 GitHub Copilot Chat 表现的策略。",
   "options": {
    "A": "优化生成代码中占用大量内存的操作",
    "B": "运用提示工程（prompt engineering）技巧，让提示更具体",
    "C": "用单一的 GitHub Copilot Chat 查询来解决一整组技术需求",
    "D": "限制同时使用 GitHub Copilot Chat 的用户数量"
   },
   "explanation": "“Copilot Chat 的表现可以通过提示工程来改善。更具体的提示会得到更相关、更准确的回答。”\n这证实运用提示工程技巧是有效的策略。\n参考：GitHub Copilot Chat 最佳实践文档。"
  }
 },
 {
  "id": 103,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "When using GitHub Copilot Chat to generate boilerplate code for various test types, how can you guide the AI to follow the testing standards of your company?",
   "options": {
    "A": "By using a specific setting in GitHub Copilot's configuration.",
    "B": "By using a specific command in the terminal.",
    "C": "By using specific prompt examples in your chat request.",
    "D": "By using a specific slash command in the prompt."
   },
   "explanation": "“The quality of Copilot Chat responses depends on the clarity and specificity of your prompts. You can guide Copilot to follow organizational standards by including examples or requirements in your request.”\nThis means prompt engineering with specific examples is the way to align with company standards.\nReferences: GitHub Copilot Chat best practices documentation."
  },
  "zh": {
   "stem": "使用 GitHub Copilot Chat 为各类测试生成样板代码时，如何引导 AI 遵循贵公司的测试标准？",
   "options": {
    "A": "通过 GitHub Copilot 配置中的特定设置。",
    "B": "通过终端中的特定命令。",
    "C": "通过在聊天请求中使用特定的提示示例。",
    "D": "通过在提示中使用特定的斜杠命令。"
   },
   "explanation": "“Copilot Chat 回答的质量取决于提示的清晰度和具体程度。你可以在请求中加入示例或要求，引导 Copilot 遵循组织标准。”\n这意味着使用带有具体示例的提示工程，才是与公司标准保持一致的方式。\n参考：GitHub Copilot Chat 最佳实践文档。"
  }
 },
 {
  "id": 104,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "C",
   "D"
  ],
  "en": {
   "stem": "What practices enhance the quality of suggestions provided by GitHub Copilot? (Select three.)",
   "options": {
    "A": "Clearly defining the problem or task",
    "B": "Including personal information in the code comments",
    "C": "Using meaningful variable names",
    "D": "Providing examples of desired output",
    "E": "Use a .gitignore file to exclude irrelevant files"
   },
   "explanation": "The quality of Copilot's suggestions is enhanced by clearly defining the task, using meaningful variable names, and providing examples of the desired output.\nReference: GitHub Copilot prompt engineering best practices."
  },
  "zh": {
   "stem": "哪些做法能提升 GitHub Copilot 所提供建议的质量？（请选择三项。）",
   "options": {
    "A": "清楚定义问题或任务",
    "B": "在代码注释中包含个人信息",
    "C": "使用有意义的变量名称",
    "D": "提供期望输出的示例",
    "E": "使用 .gitignore 文件排除无关文件"
   },
   "explanation": "清楚定义任务、使用有意义的变量名称，以及提供期望输出的示例，都能提升 Copilot 建议的质量。\n参考：GitHub Copilot 提示工程最佳实践。"
  }
 },
 {
  "id": 105,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "How does GitHub Copilot Chat utilize its training data and external sources to generate responses when answering coding questions?",
   "options": {
    "A": "It primarily relies on the model's training data to generate responses.",
    "B": "It primarily uses search results from Bing to generate responses.",
    "C": "It combines its training data set, code in user repositories, and external sources like Bing to generate responses.",
    "D": "It uses user-provided documentation exclusively to generate responses."
   },
   "explanation": "GitHub Copilot Chat combines its training data, code from user repositories, and external sources like Bing to generate comprehensive and relevant responses to coding questions.\nReference: GitHub Copilot Chat documentation on data sources."
  },
  "zh": {
   "stem": "GitHub Copilot Chat 在回答编码问题时，如何运用其训练数据和外部来源来生成回答？",
   "options": {
    "A": "主要依赖模型的训练数据来生成回答。",
    "B": "主要使用 Bing 的搜索结果来生成回答。",
    "C": "结合其训练数据集、用户仓库中的代码，以及 Bing 等外部来源来生成回答。",
    "D": "仅使用用户提供的文档来生成回答。"
   },
   "explanation": "GitHub Copilot Chat 结合其训练数据、用户仓库中的代码，以及 Bing 等外部来源，为编码问题生成全面且相关的回答。\n参考：GitHub Copilot Chat 数据来源文档。"
  }
 },
 {
  "id": 106,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "Which Copilot Enterprise features are available in all commercially supported IDEs?",
   "options": {
    "A": "Inline suggestions",
    "B": "Pull request summaries",
    "C": "Knowledge bases",
    "D": "Chat"
   },
   "explanation": "“Copilot Enterprise provides inline code suggestions and Copilot Chat in all commercially supported IDEs.\nAdditional features, such as pull request summaries and knowledge bases, are available in GitHub.com.”\nThis confirms that inline suggestions and Chat are the features consistently available in IDEs.\nReferences: GitHub Copilot Enterprise feature documentation."
  },
  "zh": {
   "stem": "哪些 Copilot Enterprise 功能可在所有商业支持的 IDE 中使用？",
   "options": {
    "A": "内联建议（Inline suggestions）",
    "B": "拉取请求摘要（Pull request summaries）",
    "C": "知识库（Knowledge bases）",
    "D": "聊天（Chat）"
   },
   "explanation": "“Copilot Enterprise 在所有商业支持的 IDE 中提供内联代码建议和 Copilot Chat。\n其他功能，例如拉取请求摘要和知识库，则在 GitHub.com 上提供。”\n这证实内联建议和 Chat 是在 IDE 中一致可用的功能。\n参考：GitHub Copilot Enterprise 功能文档。"
  }
 },
 {
  "id": 107,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "C"
  ],
  "en": {
   "stem": "In what ways can GitHub Copilot support a developer during the code refactoring process? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "By offering code transformation examples that enhance performance and reduce complexity.",
    "B": "By independently ensuring compliance with regulatory standards across industries.",
    "C": "By providing suggestions for improving code readability and maintainability based on best practices.",
    "D": "By autonomously refactoring entire codebases to the latest programming language."
   },
   "explanation": "Exact extracts:\n“Copilot can propose code transformations that improve performance and reduce complexity.”\nReferences: GitHub Copilot code refactoring documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 在代码重构过程中可以通过哪些方式支持开发者？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "提供可提升性能并降低复杂度的代码转换示例。",
    "B": "自行确保符合各行业的法规标准。",
    "C": "根据最佳实践，提供改善代码可读性和可维护性的建议。",
    "D": "自主将整个代码库重构为最新的编程语言。"
   },
   "explanation": "原文摘录：\n“Copilot 可以提出能提升性能并降低复杂度的代码转换。”\n参考：GitHub Copilot 代码重构文档。"
  }
 },
 {
  "id": 108,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Which principle emphasizes that AI systems should be understandable and provide clear information on how they work?",
   "options": {
    "A": "Fairness",
    "B": "Transparency",
    "C": "Inclusiveness",
    "D": "Accountability"
   },
   "explanation": "The principle of transparency emphasizes that AI systems should be understandable and provide clear information about their operations. This ensures that users can understand how the AI arrives at its decisions and suggestions.\nReference: Microsoft's AI principles and ethical guidelines."
  },
  "zh": {
   "stem": "哪项原则强调 AI 系统应当易于理解，并清楚说明其运作方式？",
   "options": {
    "A": "公平性（Fairness）",
    "B": "透明性（Transparency）",
    "C": "包容性（Inclusiveness）",
    "D": "问责制（Accountability）"
   },
   "explanation": "透明性原则强调 AI 系统应当易于理解，并清楚说明其运作方式。这确保用户能够理解 AI 如何得出其决策和建议。\n参考：Microsoft 的 AI 原则与道德准则。"
  }
 },
 {
  "id": 109,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "How can the insights gained from the metrics API be used to improve the development process in conjunction with GitHub Copilot?",
   "options": {
    "A": "Real-time debugging and error resolution statistics.",
    "B": "Insights on the types of coding languages where GitHub Copilot is most helpful.",
    "C": "Automated generation of complete project documentation.",
    "D": "Detailed analysis of GitHub Copilot's suggestions vs. manual coding."
   },
   "explanation": "“The Copilot metrics API provides insights into how suggestions are being accepted and used, enabling teams to analyze the relative impact of Copilot-generated code versus manually written code.”\nThis confirms option D is correct, as the API enables analysis of Copilot versus manual coding.\nReferences: GitHub Copilot metrics API documentation."
  },
  "zh": {
   "stem": "如何将 metrics API 所获得的洞察，与 GitHub Copilot 结合以改进开发流程？",
   "options": {
    "A": "实时调试与错误解决统计数据。",
    "B": "关于 GitHub Copilot 在哪些编程语言中最有帮助的洞察。",
    "C": "自动生成完整的项目文档。",
    "D": "对 GitHub Copilot 建议与手动编码的详细分析。"
   },
   "explanation": "“Copilot metrics API 提供关于建议如何被接受和使用的洞察，使团队能够分析 Copilot 生成的代码与手动编写的代码之间的相对影响。”\n这证实选项 D 正确，因为该 API 可用于分析 Copilot 与手动编码的对比。\n参考：GitHub Copilot metrics API 文档。"
  }
 },
 {
  "id": 110,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "What is the primary purpose of organization audit logs in GitHub Copilot Business?",
   "options": {
    "A": "To track the number of lines of code suggested by Copilot",
    "B": "To assign software licenses within the organization",
    "C": "To monitor code conflicts across repositories",
    "D": "To monitor administrator activities and actions within the organization"
   },
   "explanation": "“Audit logs in Copilot Business allow enterprise and organization administrators to monitor administrator activities and configuration changes.”\nThis proves that their purpose is not line tracking or license assignment but monitoring admin activities.\nReferences: GitHub Copilot Business administration documentation."
  },
  "zh": {
   "stem": "GitHub Copilot Business 中组织审核日志（audit logs）的主要用途是什么？",
   "options": {
    "A": "追踪 Copilot 建议的代码行数",
    "B": "在组织内分配软件许可证",
    "C": "监控跨仓库的代码冲突",
    "D": "监控组织内管理员的活动和操作"
   },
   "explanation": "“Copilot Business 中的审核日志让企业和组织管理员能够监控管理员活动和配置变更。”\n这证明其用途不是追踪代码行数或分配许可证，而是监控管理员活动。\n参考：GitHub Copilot Business 管理文档。"
  }
 },
 {
  "id": 111,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "Which of the following steps correctly demonstrates how to establish an organization-wide policy for GitHub Copilot Business to restrict its use to certain repositories?",
   "options": {
    "A": "Apply policies through the GitHub Actions configuration",
    "B": "Create a copilot.policy file in each repository",
    "C": "Configure the policies in the organization settings",
    "D": "Create a copilot.policy in the .github repository"
   },
   "explanation": "“Organization administrators can configure GitHub Copilot Business policies within the organization settings, including restricting usage to certain repositories.”\nThis proves that the correct way is through organization settings, not repository-level files or GitHub Actions.\nReferences: GitHub Copilot Business policy management documentation."
  },
  "zh": {
   "stem": "以下哪个步骤能正确说明如何为 GitHub Copilot Business 建立组织范围的策略，以将其使用限制在特定仓库？",
   "options": {
    "A": "通过 GitHub Actions 配置应用策略",
    "B": "在每个仓库中创建 copilot.policy 文件",
    "C": "在组织设置中配置策略",
    "D": "在 .github 仓库中创建 copilot.policy"
   },
   "explanation": "“组织管理员可以在组织设置中配置 GitHub Copilot Business 策略，包括将使用限制在特定仓库。”\n这证明正确方式是通过组织设置，而不是仓库级文件或 GitHub Actions。\n参考：GitHub Copilot Business 策略管理文档。"
  }
 },
 {
  "id": 112,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "What GitHub Copilot configuration needs to be enabled to protect against IP infringements?",
   "options": {
    "A": "Blocking public code matches",
    "B": "Blocking license check configuration",
    "C": "Allowing public code matches",
    "D": "Allowing license check configuration"
   },
   "explanation": "“By default, suggestions matching public code are allowed, but you can choose to block public code matches.\nThis setting can be enabled to reduce the risk of intellectual property infringement.”\nThis shows that enabling “Blocking public code matches” is the configuration required to protect against IP issues.\nReferences: GitHub Copilot configuration settings documentation."
  },
  "zh": {
   "stem": "需要启用哪项 GitHub Copilot 配置来防范知识产权侵权？",
   "options": {
    "A": "阻止公共代码匹配（Blocking public code matches）",
    "B": "阻止许可证检查配置",
    "C": "允许公共代码匹配（Allowing public code matches）",
    "D": "允许许可证检查配置"
   },
   "explanation": "“默认情况下，与公共代码匹配的建议是被允许的，但你可以选择阻止公共代码匹配。\n启用此设置可降低知识产权侵权的风险。”\n这表明启用“阻止公共代码匹配”是防范知识产权问题所需的配置。\n参考：GitHub Copilot 配置设置文档。"
  }
 },
 {
  "id": 113,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "What is the best way to share feedback about GitHub Copilot Chat when using it on GitHub Mobile?",
   "options": {
    "A": "The Settings menu in the GitHub Mobile app.",
    "B": "The feedback section on the GitHub website.",
    "C": "Use the emojis in the Copilot Chat interface.",
    "D": "By tweeting at GitHub's official X (previously known as Twitter) account."
   },
   "explanation": "The best way to share feedback on GitHub Mobile is using the emojis in the Copilot Chat interface, which allows for direct and immediate feedback.\nReference: GitHub Copilot Mobile documentation."
  },
  "zh": {
   "stem": "在 GitHub Mobile 上使用 GitHub Copilot Chat 时，分享反馈的最佳方式是什么？",
   "options": {
    "A": "GitHub Mobile 应用中的“设置”菜单。",
    "B": "GitHub 网站上的反馈区。",
    "C": "使用 Copilot Chat 界面中的表情符号。",
    "D": "在 GitHub 官方 X（原 Twitter）账号上发推。"
   },
   "explanation": "在 GitHub Mobile 上分享反馈的最佳方式是使用 Copilot Chat 界面中的表情符号，这样可以直接且即时地给出反馈。\n参考：GitHub Copilot Mobile 文档。"
  }
 },
 {
  "id": 114,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "How can GitHub Copilot assist in maintaining consistency across your tests?",
   "options": {
    "A": "By identifying a pattern in the way you write tests and suggesting similar patterns for future tests.",
    "B": "By automatically fixing all tests in the code based on the context.",
    "C": "By providing documentation references based on industry best practices.",
    "D": "By writing the implementation code for the function based on context."
   },
   "explanation": "“Copilot learns from the patterns in your existing tests and suggests similar structures, which helps maintain consistency across the test suite.”\nThis confirms that Copilot supports test consistency through pattern recognition and suggestion.\nReferences: GitHub Copilot testing documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 如何协助保持测试之间的一致性？",
   "options": {
    "A": "通过识别你编写测试的模式，并为后续测试建议类似的模式。",
    "B": "通过根据上下文自动修复代码中的所有测试。",
    "C": "通过根据行业最佳实践提供文档参考。",
    "D": "通过根据上下文为函数编写实现代码。"
   },
   "explanation": "“Copilot 会从你现有测试的模式中学习，并建议类似的结构，这有助于保持整个测试套件的一致性。”\n这证实 Copilot 通过模式识别与建议来支持测试一致性。\n参考：GitHub Copilot 测试文档。"
  }
 },
 {
  "id": 115,
  "section": "Understand GitHub Copilot data and architecture",
  "sectionZh": "了解 GitHub Copilot 数据与架构",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "What are the potential limitations of GitHub Copilot in maintaining existing codebases?",
   "options": {
    "A": "GitHub Copilot can independently manage and resolve all merge conflicts in version control.",
    "B": "GitHub Copilot might not fully understand the context and dependencies within a large codebase.",
    "C": "GitHub Copilot's suggestions are always aware of the entire codebase.",
    "D": "GitHub Copilot can refactor and optimize the entire codebase up to 10,000 lines of code."
   },
   "explanation": "“Copilot may not always understand the full context or complex dependencies in large codebases, and suggestions may require significant review.”\nThis proves that the main limitation is a lack of deep awareness of complex or large codebase contexts.\nReferences: GitHub Copilot limitations documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 在维护既有代码库方面可能有哪些限制？",
   "options": {
    "A": "GitHub Copilot 可以独立管理并解决版本控制中的所有合并冲突。",
    "B": "GitHub Copilot 可能无法完全理解大型代码库中的上下文和依赖关系。",
    "C": "GitHub Copilot 的建议始终了解整个代码库。",
    "D": "GitHub Copilot 可以重构并优化最多 10,000 行代码的整个代码库。"
   },
   "explanation": "“Copilot 在大型代码库中可能无法始终理解完整的上下文或复杂的依赖关系，其建议可能需要大量审查。”\n这证明主要限制在于对复杂或大型代码库的上下文缺乏深入的感知。\n参考：GitHub Copilot 限制文档。"
  }
 },
 {
  "id": 116,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You use GitHub Copilot to develop a web app named App1 in a repository named Repo1.\nRepo1 contains generated files and supporting artifacts.\nYou discover that GitHub Copilot suggestions in the IDE are being generated based on files that are NOT part of the App1 source code.\nYou need to ensure that GitHub Copilot ignores these files.\nWhat should you do?",
   "options": {
    "A": "Configure Copilot content exclusion rules by modifying the GitHub Copilot settings of Repo1.",
    "B": "Add the generated files and supporting artifacts to the .gitignore file of Repo1.",
    "C": "Disable GitHub Copilot inline suggestions in the IDE.",
    "D": "Add repository custom instructions telling GitHub Copilot not to use the generated files."
   },
   "explanation": "GitHub Copilot content exclusion is the feature designed to prevent specified repository files or directories from being used as Copilot context. GitHub's documentation states that repository administrators can configure exclusions in the repository's settings under Copilot and Content exclusion. When content is excluded, it does not inform inline suggestions in other files, which directly addresses the problem of generated or supporting artifacts influencing suggestions for App1. A .gitignore file controls Git version tracking behavior, not Copilot context. Disabling inline suggestions would remove the desired feature rather than fix its context, and repository custom instructions are guidance rather than an access restriction.\nTherefore, configure Copilot content exclusion rules in the GitHub Copilot settings for Repo1."
  },
  "zh": {
   "stem": "你使用 GitHub Copilot 在名为 Repo1 的仓库中开发名为 App1 的 Web 应用。\nRepo1 包含生成的文件和辅助产物。\n你发现 IDE 中的 GitHub Copilot 建议是根据不属于 App1 源代码的文件生成的。\n你需要确保 GitHub Copilot 忽略这些文件。\n你应该怎么做？",
   "options": {
    "A": "通过修改 Repo1 的 GitHub Copilot 设置来配置 Copilot 内容排除（content exclusion）规则。",
    "B": "将生成的文件和辅助产物添加到 Repo1 的 .gitignore 文件中。",
    "C": "在 IDE 中停用 GitHub Copilot 内联建议。",
    "D": "添加仓库自定义指令，告诉 GitHub Copilot 不要使用生成的文件。"
   },
   "explanation": "GitHub Copilot 内容排除（content exclusion）是专门用来防止指定的仓库文件或目录被用作 Copilot 上下文的功能。GitHub 文档指出，仓库管理员可以在仓库设置的 Copilot 下的 Content exclusion 中配置排除。内容被排除后，就不会影响其他文件中的内联建议，这正好解决了生成文件或辅助产物影响 App1 建议的问题。.gitignore 文件控制的是 Git 的版本追踪行为，而非 Copilot 上下文。停用内联建议会移除所需功能而不是修正其上下文，而仓库自定义指令只是引导，并非访问限制。\n因此，应在 Repo1 的 GitHub Copilot 设置中配置 Copilot 内容排除规则。"
  }
 },
 {
  "id": 117,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "D"
  ],
  "en": {
   "stem": "What are the different ways to give context to GitHub Copilot to get more precise responses? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Utilize to interpret developer's thoughts and intentions without any code or comments.",
    "B": "Engage with chat participants such as @workspace to incorporate collaborative context into the responses.",
    "C": "Access developer's previous projects and code repositories to understand their coding style without explicit permission.",
    "D": "Utilize chat variables like #file to anchor the conversation within the specific context of the files or editors in use."
   },
   "explanation": "Exact extracts:\n“You can give Copilot Chat additional context using variables such as @workspace or @file to scope the conversation.”\nReferences: GitHub Copilot Chat variables and context documentation."
  },
  "zh": {
   "stem": "有哪些不同的方式可以为 GitHub Copilot 提供上下文，以获得更精确的回答？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "在没有任何代码或注释的情况下，借助工具解读开发者的想法和意图。",
    "B": "未经明确许可，访问开发者以往的项目和代码仓库以了解其编码风格。",
    "C": "与 @workspace 等聊天参与者（chat participants）互动，将协作上下文纳入回答。",
    "D": "使用 #file 等聊天变量，将对话锚定在正在使用的特定文件或编辑器的上下文中。"
   },
   "explanation": "原文摘录：\n“你可以使用 @workspace 或 @file 等变量为 Copilot Chat 提供额外的上下文，以限定对话范围。”\n参考：GitHub Copilot Chat 变量与上下文文档。"
  }
 },
 {
  "id": 118,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "What is a limitation of content exclusions?",
   "options": {
    "A": "Repository administrators and organization owners cannot manage content exclusion settings.",
    "B": "Content exclusions can be worked around as it is only available for Git repositories.",
    "C": "Content exclusions can only be configured by an enterprise administrator.",
    "D": "Content exclusions are only available in the GitHub Copilot Individual plan."
   },
   "explanation": "“Content exclusions can only be configured at the enterprise level by an enterprise administrator. Repository or organization admins cannot configure them directly.”\nThis confirms that configuration is limited to enterprise administrators, making option C correct.\nReferences: GitHub Copilot content exclusions configuration documentation."
  },
  "zh": {
   "stem": "内容排除（content exclusions）有什么限制？",
   "options": {
    "A": "仓库管理员和组织所有者无法管理内容排除设置。",
    "B": "内容排除可被绕过，因为它仅适用于 Git 仓库。",
    "C": "内容排除只能由企业管理员配置。",
    "D": "内容排除仅在 GitHub Copilot Individual 方案中可用。"
   },
   "explanation": "“内容排除只能由企业管理员在企业层级配置。仓库或组织管理员无法直接配置。”\n这证实配置仅限于企业管理员，因此选项 C 正确。\n参考：GitHub Copilot 内容排除配置文档。"
  }
 },
 {
  "id": 119,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "What is the main purpose of the duplication detection filter in GitHub Copilot?",
   "options": {
    "A": "To compare user-generated code against a private repository for potential matches.",
    "B": "To allow administrators to control which suggestions are visible to developers based on custom criteria.",
    "C": "To encourage the user to follow coding best practices preventing code duplication.",
    "D": "To detect and block suggestions that match public code snippets on GitHub if they contain about 150 characters."
   },
   "explanation": "“GitHub Copilot has a duplication detection filter that checks suggestions of about 150 characters or longer against public code on GitHub. If a match is found, the suggestion is blocked if you have configured blocking.”\nThis clearly defines the purpose as preventing Copilot from suggesting verbatim code found publicly.\nReferences: GitHub Copilot duplication detection documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 中重复检测过滤器（duplication detection filter）的主要用途是什么？",
   "options": {
    "A": "将用户生成的代码与私有仓库比对，以找出可能的匹配。",
    "B": "让管理员根据自定义条件控制开发者可见的建议。",
    "C": "鼓励用户遵循避免代码重复的编码最佳实践。",
    "D": "检测并阻止与 GitHub 上公共代码片段匹配（若包含约 150 个字符）的建议。"
   },
   "explanation": "“GitHub Copilot 有一个重复检测过滤器，会将约 150 个字符或更长的建议与 GitHub 上的公共代码进行比对。如果发现匹配，且你已配置阻止，则该建议会被阻止。”\n这清楚说明其用途是防止 Copilot 建议公开存在的逐字代码。\n参考：GitHub Copilot 重复检测文档。"
  }
 },
 {
  "id": 120,
  "section": "Use GitHub Copilot responsibly",
  "sectionZh": "负责任地使用 GitHub Copilot",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "What can be done during AI development to minimize bias?",
   "options": {
    "A": "Improve on the computational efficiency and speed.",
    "B": "Focus on accuracy of the data.",
    "C": "Collect massive amounts of data for training.",
    "D": "Use diverse data, fairness metrics, and human oversight."
   },
   "explanation": "“Minimizing bias requires diverse datasets, use of fairness metrics, and human oversight throughout development and deployment.”\nThis clearly confirms that the proper approach is a combination of diverse data, fairness metrics, and oversight.\nReferences: Microsoft Responsible AI and GitHub Copilot fairness guidelines."
  },
  "zh": {
   "stem": "在 AI 开发期间可以做什么来尽量减少偏见？",
   "options": {
    "A": "提高计算效率和速度。",
    "B": "注重数据的准确性。",
    "C": "收集大量数据用于训练。",
    "D": "使用多样化的数据、公平性指标和人工监督。"
   },
   "explanation": "“减少偏见需要多样化的数据集、公平性指标的使用，以及贯穿开发和部署全程的人工监督。”\n这清楚证实正确做法是结合多样化数据、公平性指标和监督。\n参考：Microsoft 负责任 AI 与 GitHub Copilot 公平性准则。"
  }
 },
 {
  "id": 121,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "D"
  ],
  "en": {
   "stem": "What are two techniques that can be used to improve prompts to GitHub Copilot? (Select two.)",
   "options": {
    "A": "Provide specific success criteria",
    "B": "Provide all information about the utilized files",
    "C": "Provide insight on where to get the content from to get a response",
    "D": "Provide links to supporting documentation"
   },
   "explanation": "Improving prompts involves providing specific success criteria and including links to supporting documentation to give GitHub Copilot more context and direction.\nReference: GitHub Copilot prompt engineering best practices."
  },
  "zh": {
   "stem": "有哪两种技巧可用于改进给 GitHub Copilot 的提示？（请选择两项。）",
   "options": {
    "A": "提供具体的成功标准",
    "B": "提供所用文件的全部信息",
    "C": "说明从何处获取内容以得出回答",
    "D": "提供支持文档的链接"
   },
   "explanation": "改进提示的做法包括提供具体的成功标准，以及附上支持文档的链接，为 GitHub Copilot 提供更多上下文和方向。\n参考：GitHub Copilot 提示工程最佳实践。"
  }
 },
 {
  "id": 122,
  "section": "Apply prompt engineering and context crafting",
  "sectionZh": "应用提示工程与上下文构建",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "How does GitHub Copilot utilize chat history to enhance its code completion capabilities?",
   "options": {
    "A": "By using chat history to offer personalized code snippets based on previous prompts.",
    "B": "By logging chat history to monitor user activity and ensure compliance with coding standards.",
    "C": "By analyzing past chat interactions to identify common programming patterns and errors.",
    "D": "By sharing chat history with third-party services to improve integration and functionality."
   },
   "explanation": "“GitHub Copilot Chat can reference the ongoing conversation history to analyze patterns, common coding styles, and errors, providing more accurate and contextual suggestions.”\nThis demonstrates that chat history is used to identify patterns and enhance contextual accuracy, making option C correct.\nReferences: GitHub Copilot Chat documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 如何利用聊天历史来增强其代码补全能力？",
   "options": {
    "A": "利用聊天历史，根据先前的提示提供个性化的代码片段。",
    "B": "记录聊天历史以监控用户活动，并确保符合编码标准。",
    "C": "分析过往的聊天互动，找出常见的编程模式和错误。",
    "D": "与第三方服务共享聊天历史，以改善集成和功能。"
   },
   "explanation": "“GitHub Copilot Chat 可以参考进行中的对话历史，分析模式、常见编码风格和错误，从而提供更准确、更符合上下文的建议。”\n这表明聊天历史用于识别模式并提高上下文准确性，因此选项 C 正确。\n参考：GitHub Copilot Chat 文档。"
  }
 },
 {
  "id": 123,
  "section": "Improve developer productivity with GitHub Copilot",
  "sectionZh": "使用 GitHub Copilot 提升开发效率",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "In what ways can GitHub Copilot contribute to the design phase of the Software Development Life Cycle (SDLC)?",
   "options": {
    "A": "GitHub Copilot can independently create a complete software design.",
    "B": "GitHub Copilot can suggest design patterns and best practices relevant to the project.",
    "C": "GitHub Copilot can manage design team collaboration and version control.",
    "D": "GitHub Copilot can generate user interface (UI) prototypes without prompting."
   },
   "explanation": "“Copilot can assist in the design phase by suggesting design patterns, frameworks, and best practices relevant to the context of your project.”\nThis shows Copilot contributes by offering design-related recommendations, not by independently producing full designs or managing collaboration.\nReferences: GitHub Copilot use case documentation."
  },
  "zh": {
   "stem": "GitHub Copilot 可以通过哪些方式对软件开发生命周期（SDLC）的设计阶段做出贡献？",
   "options": {
    "A": "GitHub Copilot 可以独立创建完整的软件设计。",
    "B": "GitHub Copilot 可以建议与项目相关的设计模式和最佳实践。",
    "C": "GitHub Copilot 可以管理设计团队协作和版本控制。",
    "D": "GitHub Copilot 可以在没有提示的情况下生成用户界面（UI）原型。"
   },
   "explanation": "“Copilot 可以在设计阶段提供协助，根据项目的上下文建议相关的设计模式、框架和最佳实践。”\n这表明 Copilot 的贡献在于提供设计相关的建议，而不是独立产出完整设计或管理协作。\n参考：GitHub Copilot 使用案例文档。"
  }
 },
 {
  "id": 124,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "E"
  ],
  "en": {
   "stem": "How can you use GitHub Copilot to get inline suggestions for refactoring your code? (Select two.)",
   "options": {
    "A": "By adding comments to your code and triggering a suggestion.",
    "B": "By highlighting the code you want to fix, right-clicking, and selecting \" Fix using GitHub Copilot. \"",
    "C": "By running the gh copilot fix command.",
    "D": "By using the \" /fix \" command in GitHub Copilot in-line chat.",
    "E": "By highlighting the code you want to fix, right-clicking, and selecting \" Refactor using GitHub Copilot. \""
   },
   "explanation": "You can use GitHub Copilot for inline refactoring suggestions by adding comments to your code to trigger suggestions and by highlighting the code and selecting \" Refactor using GitHub Copilot \" from the context menu.\nReference: GitHub Copilot refactoring documentation."
  },
  "zh": {
   "stem": "如何使用 GitHub Copilot 获取重构代码的内联建议？（请选择两项。）",
   "options": {
    "A": "在代码中添加注释并触发建议。",
    "B": "选中要修复的代码，右键单击，然后选择“Fix using GitHub Copilot”。",
    "C": "运行 gh copilot fix 命令。",
    "D": "在 GitHub Copilot 内联聊天（in-line chat）中使用 \"/fix\" 命令。",
    "E": "选中要修复的代码，右键单击，然后选择“Refactor using GitHub Copilot”。"
   },
   "explanation": "你可以通过在代码中添加注释来触发建议，以及选中代码后从上下文菜单中选择“Refactor using GitHub Copilot”，来使用 GitHub Copilot 获取内联重构建议。\n参考：GitHub Copilot 重构文档。"
  }
 },
 {
  "id": 125,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "How can users provide feedback about GitHub Copilot Chat using their IDE?",
   "options": {
    "A": "By filling out a feedback form on the GitHub website",
    "B": "By emailing the support team directly",
    "C": "By posting on the GitHub forums",
    "D": "Through the \" Share Feedback \" button in the Copilot Chat panel"
   },
   "explanation": "“In supported IDEs, you can provide feedback directly from the Copilot Chat panel by selecting the ‘Share Feedback’ option.”\nThis establishes that the in-IDE “Share Feedback” button is the official channel for submitting user feedback.\nReferences: GitHub Copilot Chat feedback documentation."
  },
  "zh": {
   "stem": "用户如何在 IDE 中提供关于 GitHub Copilot Chat 的反馈？",
   "options": {
    "A": "填写 GitHub 网站上的反馈表单",
    "B": "直接发电子邮件给支持团队",
    "C": "在 GitHub 论坛上发帖",
    "D": "通过 Copilot Chat 面板中的“Share Feedback”按钮"
   },
   "explanation": "“在受支持的 IDE 中，你可以直接在 Copilot Chat 面板中选择‘Share Feedback’选项来提供反馈。”\n这确立了 IDE 内的“Share Feedback”按钮是提交用户反馈的官方渠道。\n参考：GitHub Copilot Chat 反馈文档。"
  }
 },
 {
  "id": 126,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "How do you generate code suggestions with GitHub Copilot in the CLI?",
   "options": {
    "A": "Write code comments - > Press the suggestion shortcut - > Select the best suggestion from the list.",
    "B": "Use copilot suggest - > Write the command you want - > Select the best suggestion from the list.",
    "C": "Type out the code snippet - > Use the copilot refine command to enhance it - > Review the suggested command.",
    "D": "Describe the project's architecture - > Use the copilot generate command - > Accept the generated suggestion."
   },
   "explanation": "In the CLI, GitHub Copilot generates code suggestions by analyzing code comments. You write comments describing what you want, and Copilot provides relevant code suggestions. You then select the best suggestion from the list.\nReference: GitHub Copilot CLI documentation."
  },
  "zh": {
   "stem": "如何在 CLI 中使用 GitHub Copilot 生成代码建议？",
   "options": {
    "A": "编写代码注释 -> 按下建议快捷键 -> 从列表中选择最佳建议。",
    "B": "使用 copilot suggest -> 输入你想要的命令 -> 从列表中选择最佳建议。",
    "C": "输入代码片段 -> 使用 copilot refine 命令加以增强 -> 查看建议的命令。",
    "D": "描述项目架构 -> 使用 copilot generate 命令 -> 接受生成的建议。"
   },
   "explanation": "在 CLI 中，GitHub Copilot 通过分析代码注释来生成代码建议。你编写描述所需内容的注释，Copilot 即提供相关的代码建议，然后你从列表中选择最佳建议。\n参考：GitHub Copilot CLI 文档。"
  }
 },
 {
  "id": 127,
  "section": "Configure privacy, content exclusions, and safeguards",
  "sectionZh": "配置隐私、内容排除与安全措施",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "What GitHub Copilot feature can be configured at the organization level to prevent GitHub Copilot suggesting publicly available code snippets?",
   "options": {
    "A": "GitHub Copilot Chat in the IDE",
    "B": "GitHub Copilot Chat in GitHub Mobile",
    "C": "GitHub Copilot duplication detection filter",
    "D": "GitHub Copilot access to Bing"
   },
   "explanation": "The duplication detection filter can be configured at the organization level to prevent GitHub Copilot from suggesting publicly available code snippets."
  },
  "zh": {
   "stem": "可在组织层级配置哪项 GitHub Copilot 功能，以防止 GitHub Copilot 建议公开可用的代码片段？",
   "options": {
    "A": "IDE 中的 GitHub Copilot Chat",
    "B": "GitHub Mobile 中的 GitHub Copilot Chat",
    "C": "GitHub Copilot 重复检测过滤器（duplication detection filter）",
    "D": "GitHub Copilot 对 Bing 的访问"
   },
   "explanation": "重复检测过滤器可在组织层级配置，以防止 GitHub Copilot 建议公开可用的代码片段。"
  }
 },
 {
  "id": 128,
  "section": "Use GitHub Copilot features",
  "sectionZh": "使用 GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You start GitHub Copilot CLI from a directory named /repo/app. You store test files in a directory named /repo/tests.\nYou need to add /repo/tests as a trusted directory without restarting GitHub Copilot CLI. The solution must ensure that GitHub Copilot can access and modify the files.\nHow should you complete the command? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Inside a running Copilot CLI session, the /add-dir slash command adds a trusted directory so Copilot can read and modify its files, without restarting the CLI.\nThe argument is the plain path /repo/tests. The @ prefix is used to mention a file as context in a prompt, not to grant directory access.\n(The source image lists /repo/tests twice in the second dropdown; the duplicate is merged here.)"
  },
  "zh": {
   "stem": "你从名为 /repo/app 的目录启动 GitHub Copilot CLI。测试文件存放在名为 /repo/tests 的目录中。\n你需要在不重启 GitHub Copilot CLI 的情况下，将 /repo/tests 添加为受信任目录。该解决方案必须确保 GitHub Copilot 可以访问并修改这些文件。\n你应该如何完成该命令？请在答题区中选择适当的选项。\n注意：每个正确的选择计一分。",
   "options": {},
   "explanation": "在运行中的 Copilot CLI 会话里，/add-dir 斜杠命令可添加受信任目录，使 Copilot 能读取并修改其中的文件，且无需重启 CLI。\n参数是纯路径 /repo/tests。@ 前缀用于在提示中提及文件作为上下文，而不是授予目录访问权限。\n（来源图片的第二个下拉列表中 /repo/tests 出现了两次；此处已合并重复项。）"
  },
  "boxes": [
   {
    "prompt_en": "Command",
    "prompt_zh": "命令",
    "options_en": [
     "/ls",
     "/cwd",
     "/add-dir"
    ],
    "options_zh": [
     "/ls",
     "/cwd",
     "/add-dir"
    ],
    "correct_en": "/add-dir",
    "correct_zh": "/add-dir"
   },
   {
    "prompt_en": "Path",
    "prompt_zh": "路径",
    "options_en": [
     "@/repo/tests",
     "/repo/tests"
    ],
    "options_zh": [
     "@/repo/tests",
     "/repo/tests"
    ],
    "correct_en": "/repo/tests",
    "correct_zh": "/repo/tests"
   }
  ],
  "code": {
   "lang": "cli",
   "text": "[[1]] [[2]]",
   "title_en": "Command",
   "title_zh": "命令"
  }
 },
 {
  "id": 129,
  "section": "GitHub Copilot features",
  "sectionZh": "GitHub Copilot 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "How is GitHub Copilot Individual billed? (Each correct answer presents part of the solution. Choose two.)",
   "options": {
    "A": "Monthly as a subscription",
    "B": "Annually as a subscription",
    "C": "Monthly, as a metered service based on actual consumption",
    "D": "Free (not billed) for all open source projects"
   },
   "explanation": "GitHub Copilot Individual is billed as a monthly or annual subscription.\nReference: GitHub Copilot Individual pricing."
  },
  "zh": {
   "stem": "GitHub Copilot Individual 如何计费？（每个正确答案给出解决方案的一部分。请选择两项。）",
   "options": {
    "A": "按月订阅",
    "B": "按年订阅",
    "C": "按月计费，依实际使用量以计量方式收费",
    "D": "所有开源项目免费（不计费）"
   },
   "explanation": "GitHub Copilot Individual 以按月或按年订阅的方式计费。\n参考：GitHub Copilot Individual 定价。"
  }
 }
];
