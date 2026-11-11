// Auto-generated AB-620 question bank (84 questions, EN + ZH).
window.QUESTIONS_AB620 = [
 {
  "id": 1,
  "topic": 1,
  "qnum": 1,
  "isCaseStudy": true,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You need to configure the agent in Copilot Studio to meet Blue Vender's Responsible AI and data protection requirements.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.",
   "options": {},
   "explanation": "Responsible AI and data protection for a Copilot Studio agent is configured from the outside in: first define Data Loss Prevention (DLP) policies at the Power Platform environment level so the agent's connectors can never move sensitive data to unapproved destinations, then add custom prompt modifications (custom instructions) so generative answers stay inside the tone, scope and safety rules the business requires, and finally conduct adversarial testing to prove the agent resists jailbreaks and harmful prompts before it goes live. Integrate with Microsoft Purview is not a Copilot Studio configuration step, and Disable generative answers would defeat the whole purpose of the agent, which must still give accurate and helpful responses. Configure content moderation filters is a plausible distractor, but the answer image ranks the built-in DLP / prompt-modification / adversarial-testing sequence as the graded three-step flow.",
   "scenario": "Background -\nBlue Yonder Airlines is a global carrier headquartered in Los Angeles, California, operating domestic and international flights. The company serves\nmillions of passengers annually through its website, mobile app, and call centers. To improve customer service efficiency and reduce call center\nvolume, Blue Yonder is deploying an AI agent in Microsoft Copilot Studio.\nThe agent will handle customer inquiries across multiple channels – web chat, mobile app, and Microsoft Teams (for internal support staff). It will\nanswer questions, retrieve data from enterprise systems, and escalate to human agents when needed.\nThe project is led by a cross-function team:\nProduct manager: Defines requirements and success metrics.\nLead agent author: Designs topics, intents, and generative behavior.\nFlow designers: Build agent flows and integrations.\nIT/security and compliance: Oversees identity, data protection, and Responsible AI (RAI) compliance.\nCurrent environment -\nChannels -\nPublic website: Embedded web chat\nMobile app: In-app chatbot -\nMicrosoft Teams: Internal support agent access\nIdentity and access -\nCustomers: Anonymous access for general inquiries (e.g., flight status, baggage policy).\nAuthentication is required for personal data access (e.g., bookings, loyalty points).\nInternal staff: Authenticate via Microsoft Entra ID.\nData sources -\nReservation and Ticketing System (internal): REST API, no prebuilt connector with custom enterprise database.\nFlight Status and Weather APIs (external): REST APIs with API keys.\nCustomer Support Knowledge Base: SharePoint library with PDFs and policy documents.\nLoyalty Program Data: Stored in Dynamics 365 and Dataverse.\nTravel Advisory Content: Uses REST API with partner services.\nIntegration mechanisms -\nCustom connectors must be used for internal APIs that lack prebuilt connectors.\nHTTP request nodes may be used for lightweight external APIs.\nKnowledge sources must be used for unstructured content.\nAgent flows must be used to encapsulate reusable logic (e.g., rebooking).\nBusiness requirements -\nOmnichannel support -\nDeploy the agent across web, mobile, and Teams with a consistent user experience. The Teams deployment must also support internal staff.\nSelf-service capabilities -\nThe agent must handle common inquiries such as:\nFlight status -\nBooking and rebooking -\nLoyalty program questions -\nTravel policies and baggage rules\nHuman escalation -\nIf the agent cannot resolve an issue or the user requests help, it must:\nEscalate to a human agent.\nTransfer the conversation transcript and relevant context.\nRedact any sensitive personal data before escalation.\nKnowledge integration -\nThe agent must use scalable methods for knowledge integration and must not rely on manually authored Q&A topics for each document.\nPerformance metrics -\nFirst-contact resolution: +25%\nTier-1 call deflection: ≥20%\nResponse time: 90% of queries answered within 30 seconds\nAccuracy: ≥95% for known FAQs -\nCSAT: ≥85% for AI-handled interactions\nTechnical requirements -\nPlatform constraints -\nNo custom code is permitted; only Copilot Studio's built-in tools may be used.\nAll backend logic must be implemented using agent flows.\nMarkdown must be used for formatting (e.g., bold, bullet points); HTML is not supported.\nAuthentication -\nSign-in is required for personal data access.\nAnonymous access is allowed for general inquiries.\nUser identity must be used for data access; shared or builder credentials must not be used.\nCompliance and security -\nPower Platform DLP policies must be enforced to block unauthorized data flows.\nResponsible AI content moderation filters must be enabled.\nPrompt modifications must be added to enforce tone, disclaimers, and refusal behavior.\nDisclaimers must be applied consistently across all generative responses. Manual edits to individual topics must be avoided.\nMonitoring and maintenance -\nAll conversations and actions must be logged for auditing.\nWeekly reviews of transcripts and metrics must be conducted.\nIssues and constraints -\nAPI rate limits: External APIs (e.g., flight status) have usage limits. Agent flows must handle retries and caching to avoid exceeding quotas.\nKnowledge base limits: Copilot Studio has limits on the number and size of indexed documents. Large files must be split or summarized.\nGenerative answer risks: Generative responses must be constrained to avoid policy violations. Prompt modifications and filters must be used to\nenforce tone, safety, and compliance.\nUser input variability: Users phrase questions in diverse ways. Topics must include varied trigger phrases and fallback handling.\nAuthentication UX: The agent must clearly explain when sign-in is required and handle transitions smoothly across channels.\nProblem statement -\nBlue Yonder Airlines must deploy a secure, scalable, and policy-compliant AI agent using Microsoft Copilot Studio. The agent must deliver\naccurate, helpful, and safe responses across multiple channels, integrate with enterprise systems, and support both anonymous and\nauthenticated users. It must adhere to strict data protection and Responsible AI standards while improving customer service efficiency and\nsatisfaction."
  },
  "zh": {
   "stem": "您需要在 Copilot Studio 中配置代理以满足蓝天航空的负责任 AI 和数据保护要求。\n您应该按顺序执行哪三项操作？要回答，请将适当的操作从操作列表移动到答案区域并按正确顺序排列。\n建议答案:",
   "options": {},
   "explanation": "为 Copilot Studio 代理配置负责任 AI 与数据保护的顺序是由外向内：先在 Power Platform 环境层定义数据丢失防护（DLP）策略，限制连接器把敏感数据流向未授权目标；再添加自定义提示词修改（自定义指令），确保生成式回答符合企业的语气、范围与安全规则；最后进行对抗性测试，在上线前验证代理能抵御越狱和有害提示。Integrate with Microsoft Purview 不是 Copilot Studio 的配置步骤；Disable generative answers 会关闭生成能力，与题目要求提供准确、有帮助的回答相矛盾。Configure content moderation filters 是有迷惑性的干扰项，但答案图片给出的三步顺序是 DLP、提示词修改、对抗性测试。",
   "scenario": "背景 -\nBlue Yonder Airlines 是一家总部位于加利福尼亚州洛杉矶的全球航空公司，运营国内和国际航班。该公司通过其网站、移动应用程序\n和呼叫中心每年为数百万乘客提供服务。为了提高客户服务效率并减少呼叫中心的工作量，Blue Yonder 正在 Microsoft Copilot Studio\n中部署一个 AI 代理。\n该代理将通过多个渠道处理客户查询——网页聊天、移动应用程序和 Microsoft Teams（用于内部支持员工）。它将回答问题、从企业\n系统中检索数据，并在需要时升级到人工代理。\n该项目由一个跨职能团队领导：\n产品经理：定义需求和成功指标。\n首席代理作者：设计主题、意图和生成行为。\n流程设计师：构建代理流程和集成。\nIT/安全与合规：监督身份、数据保护和负责任的 AI（RAI）合规性。\n现有环境 -\n渠道 -\n公共网站：嵌入式网页聊天\n移动应用程序：应用内聊天机器人 -\nMicrosoft Teams：内部支持代理访问\n身份和访问 -\n客户：一般查询（例如航班状态、行李政策）允许匿名访问。\n访问个人数据（例如预订、忠诚度积分）需要身份验证。\n内部员工：通过 Microsoft Entra ID 进行身份验证。\n数据源 -\n预订和票务系统（内部）：REST API，无预构建连接器，使用自定义企业数据库。\n航班状态和天气 API（外部）：REST API，使用 API 密钥。\n客户支持知识库：SharePoint 库，包含 PDF 和政策文件。\n忠诚度计划数据：存储在 Dynamics 365 和 Dataverse 中。\n旅行建议内容：使用 REST API 与合作伙伴服务集成。\n集成机制 -\n对于缺乏预构建连接器的内部 API，必须使用自定义连接器。\n轻量级外部 API 可使用 HTTP 请求节点。\n知识源必须用于非结构化内容。\n代理流程必须用于封装可重用逻辑（例如重新预订）。\n业务需求 -\n全渠道支持 -\n在网页、移动端和 Teams 上部署代理，提供一致的用户体验。Teams 部署还必须支持内部员工。\n自助服务能力 -\n代理必须处理常见查询，例如：\n航班状态 -\n预订和重新预订 -\n忠诚度计划问题 -\n旅行政策和行李规则\n人工升级 -\n如果代理无法解决问题或用户请求帮助，它必须：\n升级到人工代理。\n传递对话记录和相关上下文。\n在升级之前编辑任何敏感个人数据。\n知识集成 -\n代理必须使用可扩展的方法进行知识集成，不能依赖于为每个文档手动编写的问答主题。\n性能指标 -\n首次接触解决率：+25%\n一级呼叫分流：≥20%\n响应时间：90%的查询在30秒内回答\n准确性：已知常见问题的准确率≥95% -\n客户满意度：AI 处理的交互满意度≥85%\n技术需求 -\n平台限制 -\n不允许使用自定义代码；只能使用 Copilot Studio 的内置工具。\n所有后端逻辑必须使用代理流程实现。\n必须使用 Markdown 进行格式化（例如加粗、项目符号）；不支持 HTML。\n身份验证 -\n访问个人数据需要登录。\n一般查询允许匿名访问。\n必须使用用户身份进行数据访问；不得使用共享或构建者凭据。\n合规性和安全性 -\n必须强制执行 Power Platform DLP 策略以阻止未经授权的数据流。\n必须启用负责任的 AI 内容审核过滤器。\n必须添加提示修改以强制执行语气、免责声明和拒绝行为。\n必须在所有生成响应中一致地应用免责声明。不得对单个主题进行手动编辑。\n监控和维护 -\n所有对话和操作必须记录以供审计。\n必须每周审查对话记录和指标。\n问题和限制 -\nAPI 速率限制：外部 API（例如航班状态）有使用限制。代理流程必须处理重试和缓存以避免超出配额。\n知识库限制：Copilot Studio 对索引文档的数量和大小有限制。大文件必须拆分或摘要化。\n生成回答风险：生成的响应必须受到约束以避免违反政策。必须使用提示修改和过滤器以强制执行语气、安全性和合规性。\n用户输入多样性：用户以多种方式表达问题。主题必须包括多样化的触发短语和回退处理。\n身份验证用户体验：代理必须清楚说明何时需要登录，并在各渠道之间平稳处理过渡。\n问题陈述 -\nBlue Yonder Airlines 必须使用 Microsoft Copilot Studio 部署一个安全、可扩展且符合政策的 AI 代理。该代理必须在多个渠道提供准\n确、有帮助且安全的响应，与企业系统集成，并支持匿名和认证用户。它必须遵守严格的数据保护和负责任的 AI 标准，同时提高客\n户服务效率和满意度。"
  },
  "sources_en": [
   "Add custom prompt modifications.",
   "Conduct adversarial testing.",
   "Define Data Loss Prevention (DLP) policies.",
   "Integrate with Microsoft Purview.",
   "Disable generative answers.",
   "Configure content moderation filters."
  ],
  "sources_zh": [
   "添加自定义提示词修改。",
   "进行对抗性测试。",
   "定义数据丢失防护 (DLP) 策略。",
   "与 Microsoft Purview 集成。",
   "禁用生成式回答。",
   "配置内容审核过滤器。"
  ],
  "targets": [
   {
    "label_en": "Step 1",
    "label_zh": "步骤 1",
    "correct_en": "Define Data Loss Prevention (DLP) policies.",
    "correct_zh": "定义数据丢失防护 (DLP) 策略。"
   },
   {
    "label_en": "Step 2",
    "label_zh": "步骤 2",
    "correct_en": "Add custom prompt modifications.",
    "correct_zh": "添加自定义提示词修改。"
   },
   {
    "label_en": "Step 3",
    "label_zh": "步骤 3",
    "correct_en": "Conduct adversarial testing.",
    "correct_zh": "进行对抗性测试。"
   }
  ]
 },
 {
  "id": 2,
  "topic": 2,
  "qnum": 1,
  "isCaseStudy": true,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You need to evaluate whether the current configuration decisions for the Blue Yonder Copilot agent comply with the company's security and\ngovernance policies.\nWhich compliance status should you assign to each configuration decision? To answer, move the appropriate compliance statuses to the correct\nconfiguration decisions. You may use each compliance status once, more than once, or not at all. You may need to move the split bar between\npanes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Only the first decision matches the stated policy: general, non-personal inquiries such as baggage policies are explicitly allowed anonymously, so that configuration is Compliant. Using an open web search to answer questions beyond internal knowledge is Non-compliant because answers must be grounded in approved internal sources and open web grounding risks inaccurate or leaked content. Relying only on the default content filters is Non-compliant because the requirements call for custom Responsible AI instructions and prompt modifications on top of the defaults. Using one shared admin credential for all internal data access is Non-compliant because every data call must run under the individual user's authenticated identity, which shared credentials destroy along with any per-user auditing.",
   "scenario": "Background -\nBlue Yonder Airlines is a global carrier headquartered in Los Angeles, California, operating domestic and international flights. The company serves\nmillions of passengers annually through its website, mobile app, and call centers. To improve customer service efficiency and reduce call center\nvolume, Blue Yonder is deploying an AI agent in Microsoft Copilot Studio.\nThe agent will handle customer inquiries across multiple channels – web chat, mobile app, and Microsoft Teams (for internal support staff). It will\nanswer questions, retrieve data from enterprise systems, and escalate to human agents when needed.\nThe project is led by a cross-function team:\nProduct manager: Defines requirements and success metrics.\nLead agent author: Designs topics, intents, and generative behavior.\nFlow designers: Build agent flows and integrations.\nIT/security and compliance: Oversees identity, data protection, and Responsible AI (RAI) compliance.\nCurrent environment -\nChannels -\nPublic website: Embedded web chat\nMobile app: In-app chatbot -\nMicrosoft Teams: Internal support agent access\nIdentity and access -\nCustomers: Anonymous access for general inquiries (e.g., flight status, baggage policy).\nAuthentication is required for personal data access (e.g., bookings, loyalty points).\nInternal staff: Authenticate via Microsoft Entra ID.\nData sources -\nReservation and Ticketing System (internal): REST API, no prebuilt connector with custom enterprise database.\nFlight Status and Weather APIs (external): REST APIs with API keys.\nCustomer Support Knowledge Base: SharePoint library with PDFs and policy documents.\nLoyalty Program Data: Stored in Dynamics 365 and Dataverse.\nTravel Advisory Content: Uses REST API with partner services.\nIntegration mechanisms -\nCustom connectors must be used for internal APIs that lack prebuilt connectors.\nHTTP request nodes may be used for lightweight external APIs.\nKnowledge sources must be used for unstructured content.\nAgent flows must be used to encapsulate reusable logic (e.g., rebooking).\nBusiness requirements -\nOmnichannel support -\nDeploy the agent across web, mobile, and Teams with a consistent user experience. The Teams deployment must also support internal staff.\nSelf-service capabilities -\nThe agent must handle common inquiries such as:\nFlight status -\nBooking and rebooking -\nLoyalty program questions -\nTravel policies and baggage rules\nHuman escalation -\nIf the agent cannot resolve an issue or the user requests help, it must:\nEscalate to a human agent.\nTransfer the conversation transcript and relevant context.\nRedact any sensitive personal data before escalation.\nKnowledge integration -\nThe agent must use scalable methods for knowledge integration and must not rely on manually authored Q&A topics for each document.\nPerformance metrics -\nFirst-contact resolution: +25%\nTier-1 call deflection: ≥20%\nResponse time: 90% of queries answered within 30 seconds\nAccuracy: ≥95% for known FAQs -\nCSAT: ≥85% for AI-handled interactions\nTechnical requirements -\nPlatform constraints -\nNo custom code is permitted; only Copilot Studio's built-in tools may be used.\nAll backend logic must be implemented using agent flows.\nMarkdown must be used for formatting (e.g., bold, bullet points); HTML is not supported.\nAuthentication -\nSign-in is required for personal data access.\nAnonymous access is allowed for general inquiries.\nUser identity must be used for data access; shared or builder credentials must not be used.\nCompliance and security -\nPower Platform DLP policies must be enforced to block unauthorized data flows.\nResponsible AI content moderation filters must be enabled.\nPrompt modifications must be added to enforce tone, disclaimers, and refusal behavior.\nDisclaimers must be applied consistently across all generative responses. Manual edits to individual topics must be avoided.\nMonitoring and maintenance -\nAll conversations and actions must be logged for auditing.\nWeekly reviews of transcripts and metrics must be conducted.\nIssues and constraints -\nAPI rate limits: External APIs (e.g., flight status) have usage limits. Agent flows must handle retries and caching to avoid exceeding quotas.\nKnowledge base limits: Copilot Studio has limits on the number and size of indexed documents. Large files must be split or summarized.\nGenerative answer risks: Generative responses must be constrained to avoid policy violations. Prompt modifications and filters must be used to\nenforce tone, safety, and compliance.\nUser input variability: Users phrase questions in diverse ways. Topics must include varied trigger phrases and fallback handling.\nAuthentication UX: The agent must clearly explain when sign-in is required and handle transitions smoothly across channels.\nProblem statement -\nBlue Yonder Airlines must deploy a secure, scalable, and policy-compliant AI agent using Microsoft Copilot Studio. The agent must deliver\naccurate, helpful, and safe responses across multiple channels, integrate with enterprise systems, and support both anonymous and\nauthenticated users. It must adhere to strict data protection and Responsible AI standards while improving customer service efficiency and\nsatisfaction."
  },
  "zh": {
   "stem": "您需要评估 Blue Yonder Copilot 代理当前的配置决策是否符合公司的安全与治理策略。\n您应该为每项配置决策分配哪种合规状态？要回答，请将适当的合规状态移动到正确的配置决策上。每种合规状态可以使用一次、多次或不使用。您可能需要移动窗格之间的分隔条或滚动以查看内容。\n注意：每个正确选择得一分。",
   "options": {},
   "explanation": "只有第一项决策符合策略：行李政策这类一般性、非个人的查询明确允许匿名访问，因此为 Compliant。使用开放的网络搜索回答内部知识之外的问题为 Non-compliant，因为回答必须基于经批准的内部来源，开放网络搜索会带来不准确回答与数据泄露风险。仅依赖默认内容过滤器为 Non-compliant，因为要求在默认过滤之上启用自定义 Responsible AI 指令与提示词修改。所有内部数据访问使用同一个共享管理员凭据为 Non-compliant，因为每次数据调用都必须使用用户本人的已验证身份，共享凭据会破坏身份验证要求和按用户审计的能力。",
   "scenario": "背景 -\nBlue Yonder Airlines 是一家总部位于加利福尼亚州洛杉矶的全球航空公司，运营国内和国际航班。该公司通过其网站、移动应用程序\n和呼叫中心每年为数百万乘客提供服务。为了提高客户服务效率并减少呼叫中心的工作量，Blue Yonder 正在 Microsoft Copilot Studio\n中部署一个 AI 代理。\n该代理将通过多个渠道处理客户查询——网页聊天、移动应用程序和 Microsoft Teams（用于内部支持员工）。它将回答问题、从企业\n系统中检索数据，并在需要时升级到人工代理。\n该项目由一个跨职能团队领导：\n产品经理：定义需求和成功指标。\n首席代理作者：设计主题、意图和生成行为。\n流程设计师：构建代理流程和集成。\nIT/安全与合规：监督身份、数据保护和负责任的 AI（RAI）合规性。\n现有环境 -\n渠道 -\n公共网站：嵌入式网页聊天\n移动应用程序：应用内聊天机器人 -\nMicrosoft Teams：内部支持代理访问\n身份和访问 -\n客户：一般查询（例如航班状态、行李政策）允许匿名访问。\n访问个人数据（例如预订、忠诚度积分）需要身份验证。\n内部员工：通过 Microsoft Entra ID 进行身份验证。\n数据源 -\n预订和票务系统（内部）：REST API，无预构建连接器，使用自定义企业数据库。\n航班状态和天气 API（外部）：REST API，使用 API 密钥。\n客户支持知识库：SharePoint 库，包含 PDF 和政策文件。\n忠诚度计划数据：存储在 Dynamics 365 和 Dataverse 中。\n旅行建议内容：使用 REST API 与合作伙伴服务集成。\n集成机制 -\n对于缺乏预构建连接器的内部 API，必须使用自定义连接器。\n轻量级外部 API 可使用 HTTP 请求节点。\n知识源必须用于非结构化内容。\n代理流程必须用于封装可重用逻辑（例如重新预订）。\n业务需求 -\n全渠道支持 -\n在网页、移动端和 Teams 上部署代理，提供一致的用户体验。Teams 部署还必须支持内部员工。\n自助服务能力 -\n代理必须处理常见查询，例如：\n航班状态 -\n预订和重新预订 -\n忠诚度计划问题 -\n旅行政策和行李规则\n人工升级 -\n如果代理无法解决问题或用户请求帮助，它必须：\n升级到人工代理。\n传递对话记录和相关上下文。\n在升级之前编辑任何敏感个人数据。\n知识集成 -\n代理必须使用可扩展的方法进行知识集成，不能依赖于为每个文档手动编写的问答主题。\n性能指标 -\n首次接触解决率：+25%\n一级呼叫分流：≥20%\n响应时间：90%的查询在30秒内回答\n准确性：已知常见问题的准确率≥95% -\n客户满意度：AI 处理的交互满意度≥85%\n技术需求 -\n平台限制 -\n不允许使用自定义代码；只能使用 Copilot Studio 的内置工具。\n所有后端逻辑必须使用代理流程实现。\n必须使用 Markdown 进行格式化（例如加粗、项目符号）；不支持 HTML。\n身份验证 -\n访问个人数据需要登录。\n一般查询允许匿名访问。\n必须使用用户身份进行数据访问；不得使用共享或构建者凭据。\n合规性和安全性 -\n必须强制执行 Power Platform DLP 策略以阻止未经授权的数据流。\n必须启用负责任的 AI 内容审核过滤器。\n必须添加提示修改以强制执行语气、免责声明和拒绝行为。\n必须在所有生成响应中一致地应用免责声明。不得对单个主题进行手动编辑。\n监控和维护 -\n所有对话和操作必须记录以供审计。\n必须每周审查对话记录和指标。\n问题和限制 -\nAPI 速率限制：外部 API（例如航班状态）有使用限制。代理流程必须处理重试和缓存以避免超出配额。\n知识库限制：Copilot Studio 对索引文档的数量和大小有限制。大文件必须拆分或摘要化。\n生成回答风险：生成的响应必须受到约束以避免违反政策。必须使用提示修改和过滤器以强制执行语气、安全性和合规性。\n用户输入多样性：用户以多种方式表达问题。主题必须包括多样化的触发短语和回退处理。\n身份验证用户体验：代理必须清楚说明何时需要登录，并在各渠道之间平稳处理过渡。\n问题陈述 -\nBlue Yonder Airlines 必须使用 Microsoft Copilot Studio 部署一个安全、可扩展且符合政策的 AI 代理。该代理必须在多个渠道提供准\n确、有帮助且安全的响应，与企业系统集成，并支持匿名和认证用户。它必须遵守严格的数据保护和负责任的 AI 标准，同时提高客\n户服务效率和满意度。"
  },
  "sources_en": [
   "Compliant",
   "Non-compliant"
  ],
  "sources_zh": [
   "合规",
   "不合规"
  ],
  "targets": [
   {
    "label_en": "The agent allows anonymous access general inquiries such as baggage policies.",
    "label_zh": "代理允许匿名访问行李政策等一般性查询。",
    "correct_en": "Compliant",
    "correct_zh": "合规"
   },
   {
    "label_en": "The agent uses an open web search to answer questions beyond internal knowledge.",
    "label_zh": "代理使用开放的网络搜索来回答内部知识之外的问题。",
    "correct_en": "Non-compliant",
    "correct_zh": "不合规"
   },
   {
    "label_en": "The team relies only on default content filters without custom RAI instructions.",
    "label_zh": "团队仅依赖默认内容过滤器，未使用自定义 RAI 指令。",
    "correct_en": "Non-compliant",
    "correct_zh": "不合规"
   },
   {
    "label_en": "The agent uses one shared admin credential for all internal data access.",
    "label_zh": "代理对所有内部数据访问使用同一个共享管理员凭据。",
    "correct_en": "Non-compliant",
    "correct_zh": "不合规"
   }
  ]
 },
 {
  "id": 3,
  "topic": 2,
  "qnum": 2,
  "isCaseStudy": true,
  "type": "multi",
  "correctLetters": [
   "A",
   "E"
  ],
  "en": {
   "stem": "You need to deploy the Blue Yonder Copilot agent to the public website and Microsoft Teams while ensuring compliance with the company's\nsecurity and Responsible AI requirements.\nWhich two actions should you perform before making the agent available on both channels? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Configure prompt modifications to enforce tone, disclaimers, and refusal behavior at the system level.",
    "B": "Manually add disclaimers to each topic before publishing.",
    "C": "Embed the web channel and then rely on channel-level settings to enforce content moderation.",
    "D": "Configure Power Platform DLP policies to restrict unauthorized data connectors.",
    "E": "Publish the agent and then enable Responsible AI filters individually for each channel."
   },
   "explanation": "The case study requires tone, disclaimers and refusal behavior to be enforced once, centrally, rather than by hand-editing content, so option A (system-level prompt modifications) is required and applies to both the website and the Teams channel. The graded official answer pairs it with E, on the reading that Responsible AI filtering is confirmed per channel after publishing. B is wrong because the requirements explicitly forbid manually editing individual topics, and C is wrong because content moderation must be governed centrally, not left to channel-level settings. Note that 100% of community voters chose A and D instead, arguing that DLP policies restricting unauthorized connectors are the stated security requirement while Responsible AI filters are a system-level setting, not a per-channel one; ExamTopics' official answer AE is still the graded one.",
   "scenario": "Background -\nBlue Yonder Airlines is a global carrier headquartered in Los Angeles, California, operating domestic and international flights. The company serves\nmillions of passengers annually through its website, mobile app, and call centers. To improve customer service efficiency and reduce call center\nvolume, Blue Yonder is deploying an AI agent in Microsoft Copilot Studio.\nThe agent will handle customer inquiries across multiple channels – web chat, mobile app, and Microsoft Teams (for internal support staff). It will\nanswer questions, retrieve data from enterprise systems, and escalate to human agents when needed.\nThe project is led by a cross-function team:\nProduct manager: Defines requirements and success metrics.\nLead agent author: Designs topics, intents, and generative behavior.\nFlow designers: Build agent flows and integrations.\nIT/security and compliance: Oversees identity, data protection, and Responsible AI (RAI) compliance.\nCurrent environment -\nChannels -\nPublic website: Embedded web chat\nMobile app: In-app chatbot -\nMicrosoft Teams: Internal support agent access\nIdentity and access -\nCustomers: Anonymous access for general inquiries (e.g., flight status, baggage policy).\nAuthentication is required for personal data access (e.g., bookings, loyalty points).\nInternal staff: Authenticate via Microsoft Entra ID.\nData sources -\nReservation and Ticketing System (internal): REST API, no prebuilt connector with custom enterprise database.\nFlight Status and Weather APIs (external): REST APIs with API keys.\nCustomer Support Knowledge Base: SharePoint library with PDFs and policy documents.\nLoyalty Program Data: Stored in Dynamics 365 and Dataverse.\nTravel Advisory Content: Uses REST API with partner services.\nIntegration mechanisms -\nCustom connectors must be used for internal APIs that lack prebuilt connectors.\nHTTP request nodes may be used for lightweight external APIs.\nKnowledge sources must be used for unstructured content.\nAgent flows must be used to encapsulate reusable logic (e.g., rebooking).\nBusiness requirements -\nOmnichannel support -\nDeploy the agent across web, mobile, and Teams with a consistent user experience. The Teams deployment must also support internal staff.\nSelf-service capabilities -\nThe agent must handle common inquiries such as:\nFlight status -\nBooking and rebooking -\nLoyalty program questions -\nTravel policies and baggage rules\nHuman escalation -\nIf the agent cannot resolve an issue or the user requests help, it must:\nEscalate to a human agent.\nTransfer the conversation transcript and relevant context.\nRedact any sensitive personal data before escalation.\nKnowledge integration -\nThe agent must use scalable methods for knowledge integration and must not rely on manually authored Q&A topics for each document.\nPerformance metrics -\nFirst-contact resolution: +25%\nTier-1 call deflection: ≥20%\nResponse time: 90% of queries answered within 30 seconds\nAccuracy: ≥95% for known FAQs -\nCSAT: ≥85% for AI-handled interactions\nTechnical requirements -\nPlatform constraints -\nNo custom code is permitted; only Copilot Studio's built-in tools may be used.\nAll backend logic must be implemented using agent flows.\nMarkdown must be used for formatting (e.g., bold, bullet points); HTML is not supported.\nAuthentication -\nSign-in is required for personal data access.\nAnonymous access is allowed for general inquiries.\nUser identity must be used for data access; shared or builder credentials must not be used.\nCompliance and security -\nPower Platform DLP policies must be enforced to block unauthorized data flows.\nResponsible AI content moderation filters must be enabled.\nPrompt modifications must be added to enforce tone, disclaimers, and refusal behavior.\nDisclaimers must be applied consistently across all generative responses. Manual edits to individual topics must be avoided.\nMonitoring and maintenance -\nAll conversations and actions must be logged for auditing.\nWeekly reviews of transcripts and metrics must be conducted.\nIssues and constraints -\nAPI rate limits: External APIs (e.g., flight status) have usage limits. Agent flows must handle retries and caching to avoid exceeding quotas.\nKnowledge base limits: Copilot Studio has limits on the number and size of indexed documents. Large files must be split or summarized.\nGenerative answer risks: Generative responses must be constrained to avoid policy violations. Prompt modifications and filters must be used to\nenforce tone, safety, and compliance.\nUser input variability: Users phrase questions in diverse ways. Topics must include varied trigger phrases and fallback handling.\nAuthentication UX: The agent must clearly explain when sign-in is required and handle transitions smoothly across channels.\nProblem statement -\nBlue Yonder Airlines must deploy a secure, scalable, and policy-compliant AI agent using Microsoft Copilot Studio. The agent must deliver\naccurate, helpful, and safe responses across multiple channels, integrate with enterprise systems, and support both anonymous and\nauthenticated users. It must adhere to strict data protection and Responsible AI standards while improving customer service efficiency and\nsatisfaction."
  },
  "zh": {
   "stem": "您需要将蓝天 Copilot 代理部署到公共网站和 Microsoft Teams，同时确保符合公司的安全和负责任的 AI 要求。\n在将代理在两个渠道上可用之前，您需要执行哪两项操作？每个正确答案是解决方案的一部分。\n注意：每个正确选择值一分。",
   "options": {
    "A": "配置提示修改以在系统级别强制执行语气、免责声明和拒绝行为。",
    "B": "在发布之前手动向每个主题添加免责声明。",
    "C": "嵌入网页渠道，然后依赖渠道级设置强制执行内容审核。",
    "D": "配置 Power Platform DLP 策略以限制未经授权的数据连接器。",
    "E": "发布代理后，为每个渠道单独启用负责任的 AI 过滤器。"
   },
   "explanation": "案例要求语气、免责声明和拒绝行为必须在系统级别统一强制执行，避免手动逐个编辑主题，因此 A（系统级提示修改）是必选项，并同时覆盖网站与 Teams 两个渠道。官方答案将其与 E 搭配。B 错误：技术要求明确禁止手动编辑单个主题。C 错误：内容审核必须集中治理，不能依赖渠道级设置。注意：社区 100% 投 AD，理由是 DLP 策略是题干明确的安全要求，而 Responsible AI 过滤器属于系统级设置而非逐渠道配置；但以官方答案 AE 计分。",
   "scenario": "背景 -\nBlue Yonder Airlines 是一家总部位于加利福尼亚州洛杉矶的全球航空公司，运营国内和国际航班。该公司通过其网站、移动应用程序\n和呼叫中心每年为数百万乘客提供服务。为了提高客户服务效率并减少呼叫中心的工作量，Blue Yonder 正在 Microsoft Copilot Studio\n中部署一个 AI 代理。\n该代理将通过多个渠道处理客户查询——网页聊天、移动应用程序和 Microsoft Teams（用于内部支持员工）。它将回答问题、从企业\n系统中检索数据，并在需要时升级到人工代理。\n该项目由一个跨职能团队领导：\n产品经理：定义需求和成功指标。\n首席代理作者：设计主题、意图和生成行为。\n流程设计师：构建代理流程和集成。\nIT/安全与合规：监督身份、数据保护和负责任的 AI（RAI）合规性。\n现有环境 -\n渠道 -\n公共网站：嵌入式网页聊天\n移动应用程序：应用内聊天机器人 -\nMicrosoft Teams：内部支持代理访问\n身份和访问 -\n客户：一般查询（例如航班状态、行李政策）允许匿名访问。\n访问个人数据（例如预订、忠诚度积分）需要身份验证。\n内部员工：通过 Microsoft Entra ID 进行身份验证。\n数据源 -\n预订和票务系统（内部）：REST API，无预构建连接器，使用自定义企业数据库。\n航班状态和天气 API（外部）：REST API，使用 API 密钥。\n客户支持知识库：SharePoint 库，包含 PDF 和政策文件。\n忠诚度计划数据：存储在 Dynamics 365 和 Dataverse 中。\n旅行建议内容：使用 REST API 与合作伙伴服务集成。\n集成机制 -\n对于缺乏预构建连接器的内部 API，必须使用自定义连接器。\n轻量级外部 API 可使用 HTTP 请求节点。\n知识源必须用于非结构化内容。\n代理流程必须用于封装可重用逻辑（例如重新预订）。\n业务需求 -\n全渠道支持 -\n在网页、移动端和 Teams 上部署代理，提供一致的用户体验。Teams 部署还必须支持内部员工。\n自助服务能力 -\n代理必须处理常见查询，例如：\n航班状态 -\n预订和重新预订 -\n忠诚度计划问题 -\n旅行政策和行李规则\n人工升级 -\n如果代理无法解决问题或用户请求帮助，它必须：\n升级到人工代理。\n传递对话记录和相关上下文。\n在升级之前编辑任何敏感个人数据。\n知识集成 -\n代理必须使用可扩展的方法进行知识集成，不能依赖于为每个文档手动编写的问答主题。\n性能指标 -\n首次接触解决率：+25%\n一级呼叫分流：≥20%\n响应时间：90%的查询在30秒内回答\n准确性：已知常见问题的准确率≥95% -\n客户满意度：AI 处理的交互满意度≥85%\n技术需求 -\n平台限制 -\n不允许使用自定义代码；只能使用 Copilot Studio 的内置工具。\n所有后端逻辑必须使用代理流程实现。\n必须使用 Markdown 进行格式化（例如加粗、项目符号）；不支持 HTML。\n身份验证 -\n访问个人数据需要登录。\n一般查询允许匿名访问。\n必须使用用户身份进行数据访问；不得使用共享或构建者凭据。\n合规性和安全性 -\n必须强制执行 Power Platform DLP 策略以阻止未经授权的数据流。\n必须启用负责任的 AI 内容审核过滤器。\n必须添加提示修改以强制执行语气、免责声明和拒绝行为。\n必须在所有生成响应中一致地应用免责声明。不得对单个主题进行手动编辑。\n监控和维护 -\n所有对话和操作必须记录以供审计。\n必须每周审查对话记录和指标。\n问题和限制 -\nAPI 速率限制：外部 API（例如航班状态）有使用限制。代理流程必须处理重试和缓存以避免超出配额。\n知识库限制：Copilot Studio 对索引文档的数量和大小有限制。大文件必须拆分或摘要化。\n生成回答风险：生成的响应必须受到约束以避免违反政策。必须使用提示修改和过滤器以强制执行语气、安全性和合规性。\n用户输入多样性：用户以多种方式表达问题。主题必须包括多样化的触发短语和回退处理。\n身份验证用户体验：代理必须清楚说明何时需要登录，并在各渠道之间平稳处理过渡。\n问题陈述 -\nBlue Yonder Airlines 必须使用 Microsoft Copilot Studio 部署一个安全、可扩展且符合政策的 AI 代理。该代理必须在多个渠道提供准\n确、有帮助且安全的响应，与企业系统集成，并支持匿名和认证用户。它必须遵守严格的数据保护和负责任的 AI 标准，同时提高客\n户服务效率和满意度。"
  },
  "communityVote": {
   "answer": "AD",
   "pct": 100
  }
 },
 {
  "id": 4,
  "topic": 2,
  "qnum": 3,
  "isCaseStudy": true,
  "type": "multi",
  "correctLetters": [
   "B",
   "C"
  ],
  "en": {
   "stem": "You need to configure the Blue Yonder Copilot agent's responses in accordance with the company's content control and platform requirements.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Add required disclaimer text inside each individual topic.",
    "B": "Configure prompt instructions that include disclaimer text.",
    "C": "Use Markdown syntax within response content.",
    "D": "Insert HTML formatting directly into topic responses.",
    "E": "Duplicate disclaimer text across reusable topics."
   },
   "explanation": "Prompt instructions are the central place in Copilot Studio to shape generative behavior, so putting the disclaimer text there (B) applies it consistently to every generated response without touching individual topics. Copilot Studio renders Markdown but not HTML, so response formatting must use Markdown syntax (C). A and E both rely on repeating the disclaimer by hand across topics, which the requirements rule out because it creates maintenance overhead and inconsistency, and D fails outright because raw HTML will not render in the agent's responses.",
   "scenario": "Background -\nBlue Yonder Airlines is a global carrier headquartered in Los Angeles, California, operating domestic and international flights. The company serves\nmillions of passengers annually through its website, mobile app, and call centers. To improve customer service efficiency and reduce call center\nvolume, Blue Yonder is deploying an AI agent in Microsoft Copilot Studio.\nThe agent will handle customer inquiries across multiple channels – web chat, mobile app, and Microsoft Teams (for internal support staff). It will\nanswer questions, retrieve data from enterprise systems, and escalate to human agents when needed.\nThe project is led by a cross-function team:\nProduct manager: Defines requirements and success metrics.\nLead agent author: Designs topics, intents, and generative behavior.\nFlow designers: Build agent flows and integrations.\nIT/security and compliance: Oversees identity, data protection, and Responsible AI (RAI) compliance.\nCurrent environment -\nChannels -\nPublic website: Embedded web chat\nMobile app: In-app chatbot -\nMicrosoft Teams: Internal support agent access\nIdentity and access -\nCustomers: Anonymous access for general inquiries (e.g., flight status, baggage policy).\nAuthentication is required for personal data access (e.g., bookings, loyalty points).\nInternal staff: Authenticate via Microsoft Entra ID.\nData sources -\nReservation and Ticketing System (internal): REST API, no prebuilt connector with custom enterprise database.\nFlight Status and Weather APIs (external): REST APIs with API keys.\nCustomer Support Knowledge Base: SharePoint library with PDFs and policy documents.\nLoyalty Program Data: Stored in Dynamics 365 and Dataverse.\nTravel Advisory Content: Uses REST API with partner services.\nIntegration mechanisms -\nCustom connectors must be used for internal APIs that lack prebuilt connectors.\nHTTP request nodes may be used for lightweight external APIs.\nKnowledge sources must be used for unstructured content.\nAgent flows must be used to encapsulate reusable logic (e.g., rebooking).\nBusiness requirements -\nOmnichannel support -\nDeploy the agent across web, mobile, and Teams with a consistent user experience. The Teams deployment must also support internal staff.\nSelf-service capabilities -\nThe agent must handle common inquiries such as:\nFlight status -\nBooking and rebooking -\nLoyalty program questions -\nTravel policies and baggage rules\nHuman escalation -\nIf the agent cannot resolve an issue or the user requests help, it must:\nEscalate to a human agent.\nTransfer the conversation transcript and relevant context.\nRedact any sensitive personal data before escalation.\nKnowledge integration -\nThe agent must use scalable methods for knowledge integration and must not rely on manually authored Q&A topics for each document.\nPerformance metrics -\nFirst-contact resolution: +25%\nTier-1 call deflection: ≥20%\nResponse time: 90% of queries answered within 30 seconds\nAccuracy: ≥95% for known FAQs -\nCSAT: ≥85% for AI-handled interactions\nTechnical requirements -\nPlatform constraints -\nNo custom code is permitted; only Copilot Studio's built-in tools may be used.\nAll backend logic must be implemented using agent flows.\nMarkdown must be used for formatting (e.g., bold, bullet points); HTML is not supported.\nAuthentication -\nSign-in is required for personal data access.\nAnonymous access is allowed for general inquiries.\nUser identity must be used for data access; shared or builder credentials must not be used.\nCompliance and security -\nPower Platform DLP policies must be enforced to block unauthorized data flows.\nResponsible AI content moderation filters must be enabled.\nPrompt modifications must be added to enforce tone, disclaimers, and refusal behavior.\nDisclaimers must be applied consistently across all generative responses. Manual edits to individual topics must be avoided.\nMonitoring and maintenance -\nAll conversations and actions must be logged for auditing.\nWeekly reviews of transcripts and metrics must be conducted.\nIssues and constraints -\nAPI rate limits: External APIs (e.g., flight status) have usage limits. Agent flows must handle retries and caching to avoid exceeding quotas.\nKnowledge base limits: Copilot Studio has limits on the number and size of indexed documents. Large files must be split or summarized.\nGenerative answer risks: Generative responses must be constrained to avoid policy violations. Prompt modifications and filters must be used to\nenforce tone, safety, and compliance.\nUser input variability: Users phrase questions in diverse ways. Topics must include varied trigger phrases and fallback handling.\nAuthentication UX: The agent must clearly explain when sign-in is required and handle transitions smoothly across channels.\nProblem statement -\nBlue Yonder Airlines must deploy a secure, scalable, and policy-compliant AI agent using Microsoft Copilot Studio. The agent must deliver\naccurate, helpful, and safe responses across multiple channels, integrate with enterprise systems, and support both anonymous and\nauthenticated users. It must adhere to strict data protection and Responsible AI standards while improving customer service efficiency and\nsatisfaction."
  },
  "zh": {
   "stem": "您需要根据公司的内容控制和平台要求配置蓝天 Copilot 代理的响应。\n您应该执行哪两项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择值一分。",
   "options": {
    "A": "在每个单独的主题中添加所需的免责声明文本。",
    "B": "配置包含免责声明文本的提示说明。",
    "C": "在响应内容中使用 Markdown 语法。",
    "D": "直接将 HTML 格式插入主题响应中。",
    "E": "在可重用主题中重复免责声明文本。"
   },
   "explanation": "提示指令（prompt instructions）是 Copilot Studio 中集中定义生成式行为的位置，把免责声明写在其中（B）即可让每条生成回复统一带上，且无需改动单个主题。Copilot Studio 支持 Markdown 但不支持 HTML，因此响应格式化应使用 Markdown 语法（C）。A 与 E 都是手动、重复地在各主题中添加免责声明，违反“避免手动编辑单个主题”的要求，会造成维护困难与不一致；D 直接错误，因为 HTML 无法正确渲染。",
   "scenario": "背景 -\nBlue Yonder Airlines 是一家总部位于加利福尼亚州洛杉矶的全球航空公司，运营国内和国际航班。该公司通过其网站、移动应用程序\n和呼叫中心每年为数百万乘客提供服务。为了提高客户服务效率并减少呼叫中心的工作量，Blue Yonder 正在 Microsoft Copilot Studio\n中部署一个 AI 代理。\n该代理将通过多个渠道处理客户查询——网页聊天、移动应用程序和 Microsoft Teams（用于内部支持员工）。它将回答问题、从企业\n系统中检索数据，并在需要时升级到人工代理。\n该项目由一个跨职能团队领导：\n产品经理：定义需求和成功指标。\n首席代理作者：设计主题、意图和生成行为。\n流程设计师：构建代理流程和集成。\nIT/安全与合规：监督身份、数据保护和负责任的 AI（RAI）合规性。\n现有环境 -\n渠道 -\n公共网站：嵌入式网页聊天\n移动应用程序：应用内聊天机器人 -\nMicrosoft Teams：内部支持代理访问\n身份和访问 -\n客户：一般查询（例如航班状态、行李政策）允许匿名访问。\n访问个人数据（例如预订、忠诚度积分）需要身份验证。\n内部员工：通过 Microsoft Entra ID 进行身份验证。\n数据源 -\n预订和票务系统（内部）：REST API，无预构建连接器，使用自定义企业数据库。\n航班状态和天气 API（外部）：REST API，使用 API 密钥。\n客户支持知识库：SharePoint 库，包含 PDF 和政策文件。\n忠诚度计划数据：存储在 Dynamics 365 和 Dataverse 中。\n旅行建议内容：使用 REST API 与合作伙伴服务集成。\n集成机制 -\n对于缺乏预构建连接器的内部 API，必须使用自定义连接器。\n轻量级外部 API 可使用 HTTP 请求节点。\n知识源必须用于非结构化内容。\n代理流程必须用于封装可重用逻辑（例如重新预订）。\n业务需求 -\n全渠道支持 -\n在网页、移动端和 Teams 上部署代理，提供一致的用户体验。Teams 部署还必须支持内部员工。\n自助服务能力 -\n代理必须处理常见查询，例如：\n航班状态 -\n预订和重新预订 -\n忠诚度计划问题 -\n旅行政策和行李规则\n人工升级 -\n如果代理无法解决问题或用户请求帮助，它必须：\n升级到人工代理。\n传递对话记录和相关上下文。\n在升级之前编辑任何敏感个人数据。\n知识集成 -\n代理必须使用可扩展的方法进行知识集成，不能依赖于为每个文档手动编写的问答主题。\n性能指标 -\n首次接触解决率：+25%\n一级呼叫分流：≥20%\n响应时间：90%的查询在30秒内回答\n准确性：已知常见问题的准确率≥95% -\n客户满意度：AI 处理的交互满意度≥85%\n技术需求 -\n平台限制 -\n不允许使用自定义代码；只能使用 Copilot Studio 的内置工具。\n所有后端逻辑必须使用代理流程实现。\n必须使用 Markdown 进行格式化（例如加粗、项目符号）；不支持 HTML。\n身份验证 -\n访问个人数据需要登录。\n一般查询允许匿名访问。\n必须使用用户身份进行数据访问；不得使用共享或构建者凭据。\n合规性和安全性 -\n必须强制执行 Power Platform DLP 策略以阻止未经授权的数据流。\n必须启用负责任的 AI 内容审核过滤器。\n必须添加提示修改以强制执行语气、免责声明和拒绝行为。\n必须在所有生成响应中一致地应用免责声明。不得对单个主题进行手动编辑。\n监控和维护 -\n所有对话和操作必须记录以供审计。\n必须每周审查对话记录和指标。\n问题和限制 -\nAPI 速率限制：外部 API（例如航班状态）有使用限制。代理流程必须处理重试和缓存以避免超出配额。\n知识库限制：Copilot Studio 对索引文档的数量和大小有限制。大文件必须拆分或摘要化。\n生成回答风险：生成的响应必须受到约束以避免违反政策。必须使用提示修改和过滤器以强制执行语气、安全性和合规性。\n用户输入多样性：用户以多种方式表达问题。主题必须包括多样化的触发短语和回退处理。\n身份验证用户体验：代理必须清楚说明何时需要登录，并在各渠道之间平稳处理过渡。\n问题陈述 -\nBlue Yonder Airlines 必须使用 Microsoft Copilot Studio 部署一个安全、可扩展且符合政策的 AI 代理。该代理必须在多个渠道提供准\n确、有帮助且安全的响应，与企业系统集成，并支持匿名和认证用户。它必须遵守严格的数据保护和负责任的 AI 标准，同时提高客\n户服务效率和满意度。"
  }
 },
 {
  "id": 5,
  "topic": 2,
  "qnum": 4,
  "isCaseStudy": true,
  "type": "multi",
  "correctLetters": [
   "A",
   "D"
  ],
  "en": {
   "stem": "You need to configure the agent in Copilot Studio to use internal and external partner knowledge sources to answer user questions about the\nairline services.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Use a Microsoft Graph connector to index the partner's travel advisory content.",
    "B": "Write individual Q&A pairs for each document as separate topics.",
    "C": "Enable unrestricted web search for the agent.",
    "D": "Add the internal policy documents as a knowledge source."
   },
   "explanation": "Knowledge sources are the scalable way to ground an agent, so the internal policy documents stored in SharePoint are added directly as a knowledge source (D), and the partner's external travel advisory content is surfaced through a Microsoft Graph connector so it can be indexed and searched alongside the internal content (A). B is rejected because hand-authoring a Q&A topic per document is exactly the non-scalable approach the requirements forbid, and C is rejected because unrestricted web search would ground answers in uncontrolled public content, breaking the strict data protection and Responsible AI standards. Note that the zh_analysis author disputes A, arguing a Graph connector cannot index content delivered over a REST API and that only D is defensible.",
   "scenario": "Background -\nBlue Yonder Airlines is a global carrier headquartered in Los Angeles, California, operating domestic and international flights. The company serves\nmillions of passengers annually through its website, mobile app, and call centers. To improve customer service efficiency and reduce call center\nvolume, Blue Yonder is deploying an AI agent in Microsoft Copilot Studio.\nThe agent will handle customer inquiries across multiple channels – web chat, mobile app, and Microsoft Teams (for internal support staff). It will\nanswer questions, retrieve data from enterprise systems, and escalate to human agents when needed.\nThe project is led by a cross-function team:\nProduct manager: Defines requirements and success metrics.\nLead agent author: Designs topics, intents, and generative behavior.\nFlow designers: Build agent flows and integrations.\nIT/security and compliance: Oversees identity, data protection, and Responsible AI (RAI) compliance.\nCurrent environment -\nChannels -\nPublic website: Embedded web chat\nMobile app: In-app chatbot -\nMicrosoft Teams: Internal support agent access\nIdentity and access -\nCustomers: Anonymous access for general inquiries (e.g., flight status, baggage policy).\nAuthentication is required for personal data access (e.g., bookings, loyalty points).\nInternal staff: Authenticate via Microsoft Entra ID.\nData sources -\nReservation and Ticketing System (internal): REST API, no prebuilt connector with custom enterprise database.\nFlight Status and Weather APIs (external): REST APIs with API keys.\nCustomer Support Knowledge Base: SharePoint library with PDFs and policy documents.\nLoyalty Program Data: Stored in Dynamics 365 and Dataverse.\nTravel Advisory Content: Uses REST API with partner services.\nIntegration mechanisms -\nCustom connectors must be used for internal APIs that lack prebuilt connectors.\nHTTP request nodes may be used for lightweight external APIs.\nKnowledge sources must be used for unstructured content.\nAgent flows must be used to encapsulate reusable logic (e.g., rebooking).\nBusiness requirements -\nOmnichannel support -\nDeploy the agent across web, mobile, and Teams with a consistent user experience. The Teams deployment must also support internal staff.\nSelf-service capabilities -\nThe agent must handle common inquiries such as:\nFlight status -\nBooking and rebooking -\nLoyalty program questions -\nTravel policies and baggage rules\nHuman escalation -\nIf the agent cannot resolve an issue or the user requests help, it must:\nEscalate to a human agent.\nTransfer the conversation transcript and relevant context.\nRedact any sensitive personal data before escalation.\nKnowledge integration -\nThe agent must use scalable methods for knowledge integration and must not rely on manually authored Q&A topics for each document.\nPerformance metrics -\nFirst-contact resolution: +25%\nTier-1 call deflection: ≥20%\nResponse time: 90% of queries answered within 30 seconds\nAccuracy: ≥95% for known FAQs -\nCSAT: ≥85% for AI-handled interactions\nTechnical requirements -\nPlatform constraints -\nNo custom code is permitted; only Copilot Studio's built-in tools may be used.\nAll backend logic must be implemented using agent flows.\nMarkdown must be used for formatting (e.g., bold, bullet points); HTML is not supported.\nAuthentication -\nSign-in is required for personal data access.\nAnonymous access is allowed for general inquiries.\nUser identity must be used for data access; shared or builder credentials must not be used.\nCompliance and security -\nPower Platform DLP policies must be enforced to block unauthorized data flows.\nResponsible AI content moderation filters must be enabled.\nPrompt modifications must be added to enforce tone, disclaimers, and refusal behavior.\nDisclaimers must be applied consistently across all generative responses. Manual edits to individual topics must be avoided.\nMonitoring and maintenance -\nAll conversations and actions must be logged for auditing.\nWeekly reviews of transcripts and metrics must be conducted.\nIssues and constraints -\nAPI rate limits: External APIs (e.g., flight status) have usage limits. Agent flows must handle retries and caching to avoid exceeding quotas.\nKnowledge base limits: Copilot Studio has limits on the number and size of indexed documents. Large files must be split or summarized.\nGenerative answer risks: Generative responses must be constrained to avoid policy violations. Prompt modifications and filters must be used to\nenforce tone, safety, and compliance.\nUser input variability: Users phrase questions in diverse ways. Topics must include varied trigger phrases and fallback handling.\nAuthentication UX: The agent must clearly explain when sign-in is required and handle transitions smoothly across channels.\nProblem statement -\nBlue Yonder Airlines must deploy a secure, scalable, and policy-compliant AI agent using Microsoft Copilot Studio. The agent must deliver\naccurate, helpful, and safe responses across multiple channels, integrate with enterprise systems, and support both anonymous and\nauthenticated users. It must adhere to strict data protection and Responsible AI standards while improving customer service efficiency and\nsatisfaction."
  },
  "zh": {
   "stem": "您需要在 Copilot Studio 中配置代理，以使用内部和外部合作伙伴知识源回答用户关于航空公司服务的问题。\n您应该执行哪两项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择都值一分。",
   "options": {
    "A": "使用 Microsoft Graph 连接器索引合作伙伴的旅行建议内容。",
    "B": "为每个文档编写单独的问答对作为独立主题。",
    "C": "启用代理的无限制网页搜索。",
    "D": "将内部政策文件添加为知识源。"
   },
   "explanation": "知识源（knowledge sources）是可扩展的接地方式：存放在 SharePoint 的内部政策文档直接添加为知识源（D）；合作伙伴的外部旅行建议内容通过 Microsoft Graph 连接器索引，从而与内部内容一起被检索（A）。B 错误：为每份文档手写问答主题正是题目禁止的不可扩展做法。C 错误：无限制网页搜索会引入不受控的公开内容，违反严格的数据保护与负责任 AI 标准。注意：zh_analysis 作者质疑 A，认为 Graph 连接器无法索引通过 REST API 提供的内容，主张只选 D。",
   "scenario": "背景 -\nBlue Yonder Airlines 是一家总部位于加利福尼亚州洛杉矶的全球航空公司，运营国内和国际航班。该公司通过其网站、移动应用程序\n和呼叫中心每年为数百万乘客提供服务。为了提高客户服务效率并减少呼叫中心的工作量，Blue Yonder 正在 Microsoft Copilot Studio\n中部署一个 AI 代理。\n该代理将通过多个渠道处理客户查询——网页聊天、移动应用程序和 Microsoft Teams（用于内部支持员工）。它将回答问题、从企业\n系统中检索数据，并在需要时升级到人工代理。\n该项目由一个跨职能团队领导：\n产品经理：定义需求和成功指标。\n首席代理作者：设计主题、意图和生成行为。\n流程设计师：构建代理流程和集成。\nIT/安全与合规：监督身份、数据保护和负责任的 AI（RAI）合规性。\n现有环境 -\n渠道 -\n公共网站：嵌入式网页聊天\n移动应用程序：应用内聊天机器人 -\nMicrosoft Teams：内部支持代理访问\n身份和访问 -\n客户：一般查询（例如航班状态、行李政策）允许匿名访问。\n访问个人数据（例如预订、忠诚度积分）需要身份验证。\n内部员工：通过 Microsoft Entra ID 进行身份验证。\n数据源 -\n预订和票务系统（内部）：REST API，无预构建连接器，使用自定义企业数据库。\n航班状态和天气 API（外部）：REST API，使用 API 密钥。\n客户支持知识库：SharePoint 库，包含 PDF 和政策文件。\n忠诚度计划数据：存储在 Dynamics 365 和 Dataverse 中。\n旅行建议内容：使用 REST API 与合作伙伴服务集成。\n集成机制 -\n对于缺乏预构建连接器的内部 API，必须使用自定义连接器。\n轻量级外部 API 可使用 HTTP 请求节点。\n知识源必须用于非结构化内容。\n代理流程必须用于封装可重用逻辑（例如重新预订）。\n业务需求 -\n全渠道支持 -\n在网页、移动端和 Teams 上部署代理，提供一致的用户体验。Teams 部署还必须支持内部员工。\n自助服务能力 -\n代理必须处理常见查询，例如：\n航班状态 -\n预订和重新预订 -\n忠诚度计划问题 -\n旅行政策和行李规则\n人工升级 -\n如果代理无法解决问题或用户请求帮助，它必须：\n升级到人工代理。\n传递对话记录和相关上下文。\n在升级之前编辑任何敏感个人数据。\n知识集成 -\n代理必须使用可扩展的方法进行知识集成，不能依赖于为每个文档手动编写的问答主题。\n性能指标 -\n首次接触解决率：+25%\n一级呼叫分流：≥20%\n响应时间：90%的查询在30秒内回答\n准确性：已知常见问题的准确率≥95% -\n客户满意度：AI 处理的交互满意度≥85%\n技术需求 -\n平台限制 -\n不允许使用自定义代码；只能使用 Copilot Studio 的内置工具。\n所有后端逻辑必须使用代理流程实现。\n必须使用 Markdown 进行格式化（例如加粗、项目符号）；不支持 HTML。\n身份验证 -\n访问个人数据需要登录。\n一般查询允许匿名访问。\n必须使用用户身份进行数据访问；不得使用共享或构建者凭据。\n合规性和安全性 -\n必须强制执行 Power Platform DLP 策略以阻止未经授权的数据流。\n必须启用负责任的 AI 内容审核过滤器。\n必须添加提示修改以强制执行语气、免责声明和拒绝行为。\n必须在所有生成响应中一致地应用免责声明。不得对单个主题进行手动编辑。\n监控和维护 -\n所有对话和操作必须记录以供审计。\n必须每周审查对话记录和指标。\n问题和限制 -\nAPI 速率限制：外部 API（例如航班状态）有使用限制。代理流程必须处理重试和缓存以避免超出配额。\n知识库限制：Copilot Studio 对索引文档的数量和大小有限制。大文件必须拆分或摘要化。\n生成回答风险：生成的响应必须受到约束以避免违反政策。必须使用提示修改和过滤器以强制执行语气、安全性和合规性。\n用户输入多样性：用户以多种方式表达问题。主题必须包括多样化的触发短语和回退处理。\n身份验证用户体验：代理必须清楚说明何时需要登录，并在各渠道之间平稳处理过渡。\n问题陈述 -\nBlue Yonder Airlines 必须使用 Microsoft Copilot Studio 部署一个安全、可扩展且符合政策的 AI 代理。该代理必须在多个渠道提供准\n确、有帮助且安全的响应，与企业系统集成，并支持匿名和认证用户。它必须遵守严格的数据保护和负责任的 AI 标准，同时提高客\n户服务效率和满意度。"
  }
 },
 {
  "id": 6,
  "topic": 2,
  "qnum": 5,
  "isCaseStudy": true,
  "type": "multi",
  "correctLetters": [
   "A",
   "B"
  ],
  "en": {
   "stem": "You need to ensure that every AI-generated response from the agent in Copilot Studio includes a disclaimer that complies with the company's\nsecurity and governance policies.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Add a greeting message that includes the disclaimer.",
    "B": "Add a prompt modification in the generative answers node settings.",
    "C": "Create a disclaimer topic that always runs first.",
    "D": "Disable generative answers and use only pre-authored responses.",
    "E": "Edit every topic's first message to include the disclaimer."
   },
   "explanation": "A prompt modification on the generative answers node (B) is the mechanism that injects the disclaimer into the model's output itself, so it rides along with every AI-generated response — this is the core of the answer. The official answer pairs it with a greeting message carrying the disclaimer (A), which surfaces the governance notice at the start of every conversation. C and E are rejected because topic ordering and hand-edited topic messages cannot guarantee coverage of generative responses and violate the requirement to avoid manual per-topic editing, and D is rejected because disabling generative answers removes the very capability the business needs. Note that the community voted BC and the zh_analysis argues only B truly covers every generated response, since a greeting fires once per session rather than per response.",
   "scenario": "Background -\nBlue Yonder Airlines is a global carrier headquartered in Los Angeles, California, operating domestic and international flights. The company serves\nmillions of passengers annually through its website, mobile app, and call centers. To improve customer service efficiency and reduce call center\nvolume, Blue Yonder is deploying an AI agent in Microsoft Copilot Studio.\nThe agent will handle customer inquiries across multiple channels – web chat, mobile app, and Microsoft Teams (for internal support staff). It will\nanswer questions, retrieve data from enterprise systems, and escalate to human agents when needed.\nThe project is led by a cross-function team:\nProduct manager: Defines requirements and success metrics.\nLead agent author: Designs topics, intents, and generative behavior.\nFlow designers: Build agent flows and integrations.\nIT/security and compliance: Oversees identity, data protection, and Responsible AI (RAI) compliance.\nCurrent environment -\nChannels -\nPublic website: Embedded web chat\nMobile app: In-app chatbot -\nMicrosoft Teams: Internal support agent access\nIdentity and access -\nCustomers: Anonymous access for general inquiries (e.g., flight status, baggage policy).\nAuthentication is required for personal data access (e.g., bookings, loyalty points).\nInternal staff: Authenticate via Microsoft Entra ID.\nData sources -\nReservation and Ticketing System (internal): REST API, no prebuilt connector with custom enterprise database.\nFlight Status and Weather APIs (external): REST APIs with API keys.\nCustomer Support Knowledge Base: SharePoint library with PDFs and policy documents.\nLoyalty Program Data: Stored in Dynamics 365 and Dataverse.\nTravel Advisory Content: Uses REST API with partner services.\nIntegration mechanisms -\nCustom connectors must be used for internal APIs that lack prebuilt connectors.\nHTTP request nodes may be used for lightweight external APIs.\nKnowledge sources must be used for unstructured content.\nAgent flows must be used to encapsulate reusable logic (e.g., rebooking).\nBusiness requirements -\nOmnichannel support -\nDeploy the agent across web, mobile, and Teams with a consistent user experience. The Teams deployment must also support internal staff.\nSelf-service capabilities -\nThe agent must handle common inquiries such as:\nFlight status -\nBooking and rebooking -\nLoyalty program questions -\nTravel policies and baggage rules\nHuman escalation -\nIf the agent cannot resolve an issue or the user requests help, it must:\nEscalate to a human agent.\nTransfer the conversation transcript and relevant context.\nRedact any sensitive personal data before escalation.\nKnowledge integration -\nThe agent must use scalable methods for knowledge integration and must not rely on manually authored Q&A topics for each document.\nPerformance metrics -\nFirst-contact resolution: +25%\nTier-1 call deflection: ≥20%\nResponse time: 90% of queries answered within 30 seconds\nAccuracy: ≥95% for known FAQs -\nCSAT: ≥85% for AI-handled interactions\nTechnical requirements -\nPlatform constraints -\nNo custom code is permitted; only Copilot Studio's built-in tools may be used.\nAll backend logic must be implemented using agent flows.\nMarkdown must be used for formatting (e.g., bold, bullet points); HTML is not supported.\nAuthentication -\nSign-in is required for personal data access.\nAnonymous access is allowed for general inquiries.\nUser identity must be used for data access; shared or builder credentials must not be used.\nCompliance and security -\nPower Platform DLP policies must be enforced to block unauthorized data flows.\nResponsible AI content moderation filters must be enabled.\nPrompt modifications must be added to enforce tone, disclaimers, and refusal behavior.\nDisclaimers must be applied consistently across all generative responses. Manual edits to individual topics must be avoided.\nMonitoring and maintenance -\nAll conversations and actions must be logged for auditing.\nWeekly reviews of transcripts and metrics must be conducted.\nIssues and constraints -\nAPI rate limits: External APIs (e.g., flight status) have usage limits. Agent flows must handle retries and caching to avoid exceeding quotas.\nKnowledge base limits: Copilot Studio has limits on the number and size of indexed documents. Large files must be split or summarized.\nGenerative answer risks: Generative responses must be constrained to avoid policy violations. Prompt modifications and filters must be used to\nenforce tone, safety, and compliance.\nUser input variability: Users phrase questions in diverse ways. Topics must include varied trigger phrases and fallback handling.\nAuthentication UX: The agent must clearly explain when sign-in is required and handle transitions smoothly across channels.\nProblem statement -\nBlue Yonder Airlines must deploy a secure, scalable, and policy-compliant AI agent using Microsoft Copilot Studio. The agent must deliver\naccurate, helpful, and safe responses across multiple channels, integrate with enterprise systems, and support both anonymous and\nauthenticated users. It must adhere to strict data protection and Responsible AI standards while improving customer service efficiency and\nsatisfaction."
  },
  "zh": {
   "stem": "您需要确保 Copilot Studio 中的代理生成的每个 AI 响应都包含符合公司安全和治理政策的免责声明。\n您应该执行哪两项操作？每个正确答案均为解决方案的一部分。\n注意：每个正确选择值一分。",
   "options": {
    "A": "添加包含免责声明的问候消息。",
    "B": "在生成答案节点设置中添加提示修改。",
    "C": "创建一个始终首先运行的免责声明主题。",
    "D": "禁用生成答案，仅使用预编写的响应。",
    "E": "编辑每个主题的第一条消息以包含免责声明。"
   },
   "explanation": "在生成答案节点上配置提示修改（B）会把免责声明注入模型输出本身，从而伴随每一条 AI 生成的回复，是本题的核心。官方答案将其与带免责声明的欢迎消息（A）搭配，用于在每次会话开始时呈现治理提示。C、E 错误：主题触发顺序与手工编辑主题消息都无法覆盖生成式回复，且违反“避免手动编辑单个主题”的要求；D 错误：禁用生成答案会取消业务所需的能力。注意：社区投 BC，zh_analysis 认为只有 B 真正覆盖每条生成回复，因为欢迎消息每会话只出现一次。",
   "scenario": "背景 -\nBlue Yonder Airlines 是一家总部位于加利福尼亚州洛杉矶的全球航空公司，运营国内和国际航班。该公司通过其网站、移动应用程序\n和呼叫中心每年为数百万乘客提供服务。为了提高客户服务效率并减少呼叫中心的工作量，Blue Yonder 正在 Microsoft Copilot Studio\n中部署一个 AI 代理。\n该代理将通过多个渠道处理客户查询——网页聊天、移动应用程序和 Microsoft Teams（用于内部支持员工）。它将回答问题、从企业\n系统中检索数据，并在需要时升级到人工代理。\n该项目由一个跨职能团队领导：\n产品经理：定义需求和成功指标。\n首席代理作者：设计主题、意图和生成行为。\n流程设计师：构建代理流程和集成。\nIT/安全与合规：监督身份、数据保护和负责任的 AI（RAI）合规性。\n现有环境 -\n渠道 -\n公共网站：嵌入式网页聊天\n移动应用程序：应用内聊天机器人 -\nMicrosoft Teams：内部支持代理访问\n身份和访问 -\n客户：一般查询（例如航班状态、行李政策）允许匿名访问。\n访问个人数据（例如预订、忠诚度积分）需要身份验证。\n内部员工：通过 Microsoft Entra ID 进行身份验证。\n数据源 -\n预订和票务系统（内部）：REST API，无预构建连接器，使用自定义企业数据库。\n航班状态和天气 API（外部）：REST API，使用 API 密钥。\n客户支持知识库：SharePoint 库，包含 PDF 和政策文件。\n忠诚度计划数据：存储在 Dynamics 365 和 Dataverse 中。\n旅行建议内容：使用 REST API 与合作伙伴服务集成。\n集成机制 -\n对于缺乏预构建连接器的内部 API，必须使用自定义连接器。\n轻量级外部 API 可使用 HTTP 请求节点。\n知识源必须用于非结构化内容。\n代理流程必须用于封装可重用逻辑（例如重新预订）。\n业务需求 -\n全渠道支持 -\n在网页、移动端和 Teams 上部署代理，提供一致的用户体验。Teams 部署还必须支持内部员工。\n自助服务能力 -\n代理必须处理常见查询，例如：\n航班状态 -\n预订和重新预订 -\n忠诚度计划问题 -\n旅行政策和行李规则\n人工升级 -\n如果代理无法解决问题或用户请求帮助，它必须：\n升级到人工代理。\n传递对话记录和相关上下文。\n在升级之前编辑任何敏感个人数据。\n知识集成 -\n代理必须使用可扩展的方法进行知识集成，不能依赖于为每个文档手动编写的问答主题。\n性能指标 -\n首次接触解决率：+25%\n一级呼叫分流：≥20%\n响应时间：90%的查询在30秒内回答\n准确性：已知常见问题的准确率≥95% -\n客户满意度：AI 处理的交互满意度≥85%\n技术需求 -\n平台限制 -\n不允许使用自定义代码；只能使用 Copilot Studio 的内置工具。\n所有后端逻辑必须使用代理流程实现。\n必须使用 Markdown 进行格式化（例如加粗、项目符号）；不支持 HTML。\n身份验证 -\n访问个人数据需要登录。\n一般查询允许匿名访问。\n必须使用用户身份进行数据访问；不得使用共享或构建者凭据。\n合规性和安全性 -\n必须强制执行 Power Platform DLP 策略以阻止未经授权的数据流。\n必须启用负责任的 AI 内容审核过滤器。\n必须添加提示修改以强制执行语气、免责声明和拒绝行为。\n必须在所有生成响应中一致地应用免责声明。不得对单个主题进行手动编辑。\n监控和维护 -\n所有对话和操作必须记录以供审计。\n必须每周审查对话记录和指标。\n问题和限制 -\nAPI 速率限制：外部 API（例如航班状态）有使用限制。代理流程必须处理重试和缓存以避免超出配额。\n知识库限制：Copilot Studio 对索引文档的数量和大小有限制。大文件必须拆分或摘要化。\n生成回答风险：生成的响应必须受到约束以避免违反政策。必须使用提示修改和过滤器以强制执行语气、安全性和合规性。\n用户输入多样性：用户以多种方式表达问题。主题必须包括多样化的触发短语和回退处理。\n身份验证用户体验：代理必须清楚说明何时需要登录，并在各渠道之间平稳处理过渡。\n问题陈述 -\nBlue Yonder Airlines 必须使用 Microsoft Copilot Studio 部署一个安全、可扩展且符合政策的 AI 代理。该代理必须在多个渠道提供准\n确、有帮助且安全的响应，与企业系统集成，并支持匿名和认证用户。它必须遵守严格的数据保护和负责任的 AI 标准，同时提高客\n户服务效率和满意度。"
  },
  "communityVote": {
   "answer": "BC",
   "pct": 100
  }
 },
 {
  "id": 7,
  "topic": 2,
  "qnum": 6,
  "isCaseStudy": true,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You need to determine which authentication model should be applied to each Blue Yonder Copilot interaction scenario to comply with the\ncompany's security and governance requirements.\nWhich authentication requirement should you apply to each scenario? To answer, move the appropriate authentication requirements to the correct\nuser scenarios. You may use each authentication requirement once, more than once, or not at all. You may need to move the split bar between\npanes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "The authentication model follows the sensitivity of the data being returned. A baggage allowance question is general public information that returns no personal data, so anonymous access is allowed and forcing a sign-in would hurt self-service. Asking to review my upcoming trips returns the customer's own booking records, which is personal data, so the customer must sign in with an account so the agent can resolve their identity. An internal support agent looking up a loyalty member's profile from Microsoft Teams is an employee reaching internal systems, so sign-in with Microsoft Entra ID is required. Use agent author credentials for authenticated data calls is never correct here: it would run every request under a single maker identity, breaking per-user authorization and auditing.",
   "scenario": "Background -\nBlue Yonder Airlines is a global carrier headquartered in Los Angeles, California, operating domestic and international flights. The company serves\nmillions of passengers annually through its website, mobile app, and call centers. To improve customer service efficiency and reduce call center\nvolume, Blue Yonder is deploying an AI agent in Microsoft Copilot Studio.\nThe agent will handle customer inquiries across multiple channels – web chat, mobile app, and Microsoft Teams (for internal support staff). It will\nanswer questions, retrieve data from enterprise systems, and escalate to human agents when needed.\nThe project is led by a cross-function team:\nProduct manager: Defines requirements and success metrics.\nLead agent author: Designs topics, intents, and generative behavior.\nFlow designers: Build agent flows and integrations.\nIT/security and compliance: Oversees identity, data protection, and Responsible AI (RAI) compliance.\nCurrent environment -\nChannels -\nPublic website: Embedded web chat\nMobile app: In-app chatbot -\nMicrosoft Teams: Internal support agent access\nIdentity and access -\nCustomers: Anonymous access for general inquiries (e.g., flight status, baggage policy).\nAuthentication is required for personal data access (e.g., bookings, loyalty points).\nInternal staff: Authenticate via Microsoft Entra ID.\nData sources -\nReservation and Ticketing System (internal): REST API, no prebuilt connector with custom enterprise database.\nFlight Status and Weather APIs (external): REST APIs with API keys.\nCustomer Support Knowledge Base: SharePoint library with PDFs and policy documents.\nLoyalty Program Data: Stored in Dynamics 365 and Dataverse.\nTravel Advisory Content: Uses REST API with partner services.\nIntegration mechanisms -\nCustom connectors must be used for internal APIs that lack prebuilt connectors.\nHTTP request nodes may be used for lightweight external APIs.\nKnowledge sources must be used for unstructured content.\nAgent flows must be used to encapsulate reusable logic (e.g., rebooking).\nBusiness requirements -\nOmnichannel support -\nDeploy the agent across web, mobile, and Teams with a consistent user experience. The Teams deployment must also support internal staff.\nSelf-service capabilities -\nThe agent must handle common inquiries such as:\nFlight status -\nBooking and rebooking -\nLoyalty program questions -\nTravel policies and baggage rules\nHuman escalation -\nIf the agent cannot resolve an issue or the user requests help, it must:\nEscalate to a human agent.\nTransfer the conversation transcript and relevant context.\nRedact any sensitive personal data before escalation.\nKnowledge integration -\nThe agent must use scalable methods for knowledge integration and must not rely on manually authored Q&A topics for each document.\nPerformance metrics -\nFirst-contact resolution: +25%\nTier-1 call deflection: ≥20%\nResponse time: 90% of queries answered within 30 seconds\nAccuracy: ≥95% for known FAQs -\nCSAT: ≥85% for AI-handled interactions\nTechnical requirements -\nPlatform constraints -\nNo custom code is permitted; only Copilot Studio's built-in tools may be used.\nAll backend logic must be implemented using agent flows.\nMarkdown must be used for formatting (e.g., bold, bullet points); HTML is not supported.\nAuthentication -\nSign-in is required for personal data access.\nAnonymous access is allowed for general inquiries.\nUser identity must be used for data access; shared or builder credentials must not be used.\nCompliance and security -\nPower Platform DLP policies must be enforced to block unauthorized data flows.\nResponsible AI content moderation filters must be enabled.\nPrompt modifications must be added to enforce tone, disclaimers, and refusal behavior.\nDisclaimers must be applied consistently across all generative responses. Manual edits to individual topics must be avoided.\nMonitoring and maintenance -\nAll conversations and actions must be logged for auditing.\nWeekly reviews of transcripts and metrics must be conducted.\nIssues and constraints -\nAPI rate limits: External APIs (e.g., flight status) have usage limits. Agent flows must handle retries and caching to avoid exceeding quotas.\nKnowledge base limits: Copilot Studio has limits on the number and size of indexed documents. Large files must be split or summarized.\nGenerative answer risks: Generative responses must be constrained to avoid policy violations. Prompt modifications and filters must be used to\nenforce tone, safety, and compliance.\nUser input variability: Users phrase questions in diverse ways. Topics must include varied trigger phrases and fallback handling.\nAuthentication UX: The agent must clearly explain when sign-in is required and handle transitions smoothly across channels.\nProblem statement -\nBlue Yonder Airlines must deploy a secure, scalable, and policy-compliant AI agent using Microsoft Copilot Studio. The agent must deliver\naccurate, helpful, and safe responses across multiple channels, integrate with enterprise systems, and support both anonymous and\nauthenticated users. It must adhere to strict data protection and Responsible AI standards while improving customer service efficiency and\nsatisfaction."
  },
  "zh": {
   "stem": "您需要确定应对每个蓝天 Copilot 交互场景应用哪种身份验证模型，以符合公司的安全和治理要求。\n您应对每个场景应用哪种身份验证要求？要回答，请将适当的身份验证要求移动到正确的用户场景。您可以对每个身份验证要求使\n用一次、多次或不使用。您可能需要移动分隔条或滚动以查看内容。\n注意：每个正确选择得一分。\n建议答案：",
   "options": {},
   "explanation": "身份验证模型取决于返回数据的敏感度。询问行李限额属于一般公开信息，不返回任何个人数据，因此允许匿名访问，强制登录反而会削弱自助服务体验。询问“我可以查看我的即将出行的行程吗？”会返回客户本人的预订记录，属于个人数据，因此必须要求客户使用账户登录以确认身份。内部支持代理通过 Microsoft Teams 查找忠诚度会员资料属于员工访问内部系统，必须要求使用 Microsoft Entra ID 登录。Use agent author credentials for authenticated data calls 在此均不正确，它会让所有请求都以制作者的单一身份运行，破坏按用户授权与审计。",
   "scenario": "背景 -\nBlue Yonder Airlines 是一家总部位于加利福尼亚州洛杉矶的全球航空公司，运营国内和国际航班。该公司通过其网站、移动应用程序\n和呼叫中心每年为数百万乘客提供服务。为了提高客户服务效率并减少呼叫中心的工作量，Blue Yonder 正在 Microsoft Copilot Studio\n中部署一个 AI 代理。\n该代理将通过多个渠道处理客户查询——网页聊天、移动应用程序和 Microsoft Teams（用于内部支持员工）。它将回答问题、从企业\n系统中检索数据，并在需要时升级到人工代理。\n该项目由一个跨职能团队领导：\n产品经理：定义需求和成功指标。\n首席代理作者：设计主题、意图和生成行为。\n流程设计师：构建代理流程和集成。\nIT/安全与合规：监督身份、数据保护和负责任的 AI（RAI）合规性。\n现有环境 -\n渠道 -\n公共网站：嵌入式网页聊天\n移动应用程序：应用内聊天机器人 -\nMicrosoft Teams：内部支持代理访问\n身份和访问 -\n客户：一般查询（例如航班状态、行李政策）允许匿名访问。\n访问个人数据（例如预订、忠诚度积分）需要身份验证。\n内部员工：通过 Microsoft Entra ID 进行身份验证。\n数据源 -\n预订和票务系统（内部）：REST API，无预构建连接器，使用自定义企业数据库。\n航班状态和天气 API（外部）：REST API，使用 API 密钥。\n客户支持知识库：SharePoint 库，包含 PDF 和政策文件。\n忠诚度计划数据：存储在 Dynamics 365 和 Dataverse 中。\n旅行建议内容：使用 REST API 与合作伙伴服务集成。\n集成机制 -\n对于缺乏预构建连接器的内部 API，必须使用自定义连接器。\n轻量级外部 API 可使用 HTTP 请求节点。\n知识源必须用于非结构化内容。\n代理流程必须用于封装可重用逻辑（例如重新预订）。\n业务需求 -\n全渠道支持 -\n在网页、移动端和 Teams 上部署代理，提供一致的用户体验。Teams 部署还必须支持内部员工。\n自助服务能力 -\n代理必须处理常见查询，例如：\n航班状态 -\n预订和重新预订 -\n忠诚度计划问题 -\n旅行政策和行李规则\n人工升级 -\n如果代理无法解决问题或用户请求帮助，它必须：\n升级到人工代理。\n传递对话记录和相关上下文。\n在升级之前编辑任何敏感个人数据。\n知识集成 -\n代理必须使用可扩展的方法进行知识集成，不能依赖于为每个文档手动编写的问答主题。\n性能指标 -\n首次接触解决率：+25%\n一级呼叫分流：≥20%\n响应时间：90%的查询在30秒内回答\n准确性：已知常见问题的准确率≥95% -\n客户满意度：AI 处理的交互满意度≥85%\n技术需求 -\n平台限制 -\n不允许使用自定义代码；只能使用 Copilot Studio 的内置工具。\n所有后端逻辑必须使用代理流程实现。\n必须使用 Markdown 进行格式化（例如加粗、项目符号）；不支持 HTML。\n身份验证 -\n访问个人数据需要登录。\n一般查询允许匿名访问。\n必须使用用户身份进行数据访问；不得使用共享或构建者凭据。\n合规性和安全性 -\n必须强制执行 Power Platform DLP 策略以阻止未经授权的数据流。\n必须启用负责任的 AI 内容审核过滤器。\n必须添加提示修改以强制执行语气、免责声明和拒绝行为。\n必须在所有生成响应中一致地应用免责声明。不得对单个主题进行手动编辑。\n监控和维护 -\n所有对话和操作必须记录以供审计。\n必须每周审查对话记录和指标。\n问题和限制 -\nAPI 速率限制：外部 API（例如航班状态）有使用限制。代理流程必须处理重试和缓存以避免超出配额。\n知识库限制：Copilot Studio 对索引文档的数量和大小有限制。大文件必须拆分或摘要化。\n生成回答风险：生成的响应必须受到约束以避免违反政策。必须使用提示修改和过滤器以强制执行语气、安全性和合规性。\n用户输入多样性：用户以多种方式表达问题。主题必须包括多样化的触发短语和回退处理。\n身份验证用户体验：代理必须清楚说明何时需要登录，并在各渠道之间平稳处理过渡。\n问题陈述 -\nBlue Yonder Airlines 必须使用 Microsoft Copilot Studio 部署一个安全、可扩展且符合政策的 AI 代理。该代理必须在多个渠道提供准\n确、有帮助且安全的响应，与企业系统集成，并支持匿名和认证用户。它必须遵守严格的数据保护和负责任的 AI 标准，同时提高客\n户服务效率和满意度。"
  },
  "sources_en": [
   "Allow anonymous access.",
   "Require customer sign-in using an account.",
   "Require internal agent sign-in using Microsoft Entra ID.",
   "Use agent author credentials for authenticated data calls."
  ],
  "sources_zh": [
   "允许匿名访问。",
   "要求客户使用账户登录。",
   "要求内部代理使用 Microsoft Entra ID 登录。",
   "对已验证的数据调用使用代理创建者的凭据。"
  ],
  "targets": [
   {
    "label_en": "A customer asks, \"What is the baggage allowance for international flights?\"",
    "label_zh": "客户询问：“国际航班的行李限额是多少？”",
    "correct_en": "Allow anonymous access.",
    "correct_zh": "允许匿名访问。"
   },
   {
    "label_en": "A customer asks, \"Can I review my upcoming trips?\"",
    "label_zh": "客户询问：“我可以查看我的即将出行的行程吗？”",
    "correct_en": "Require customer sign-in using an account.",
    "correct_zh": "要求客户使用账户登录。"
   },
   {
    "label_en": "An internal support agent accesses the Copilot agent from Microsoft Teams to look up a loyalty member's profile.",
    "label_zh": "内部支持代理通过 Microsoft Teams 访问 Copilot 代理以查找忠诚度会员的个人资料。",
    "correct_en": "Require internal agent sign-in using Microsoft Entra ID.",
    "correct_zh": "要求内部代理使用 Microsoft Entra ID 登录。"
   }
  ]
 },
 {
  "id": 8,
  "topic": 2,
  "qnum": 7,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company has an existing custom connector that is approved and available in the environment. A builder wants an agent in Copilot Studio to call\nthe connector during a conversation to retrieve information from an internal system.\nTo meet the business needs, the solution must meet the following requirements:\nThe agent must make the connector available for topic steps.\nThe agent must run the connector call with a valid connection.\nThe connector call must receive the required input values at runtime.\nYou need to configure the agent so the custom connector can be used as a tool.\nWhat should you configure for each requirement? To answer, move the appropriate configurations to the correct requirements. You may use each\nconfiguration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Each requirement maps to one step of wiring a custom connector into an agent. To make the connector available for topic steps you add the connector as a tool in the agent, which surfaces its actions to topics and to the agent's orchestration. To run the call with a valid connection you create or reuse a connection for the connector, since the tool cannot authenticate to the internal system without one. To pass the required input values at runtime you map topic variables to the tool inputs, binding conversation data to the connector's parameters. Add the connector as a knowledge source is the distractor: knowledge sources are used to ground answers in searchable content, not to invoke an action with typed inputs during a topic."
  },
  "zh": {
   "stem": "一家公司拥有一个现有的自定义连接器，该连接器已获批准并在环境中可用。一位开发者希望在Copilot Studio中让代理在对话期间\n调用该连接器，以从内部系统中检索信息。\n为了满足业务需求，解决方案必须满足以下要求：\n代理必须使连接器可用于主题步骤。\n代理必须使用有效的连接运行连接器调用。\n连接器调用必须在运行时接收所需的输入值。\n您需要配置代理，以便可以将自定义连接器用作工具。\n对于每个要求，您应该配置什么？要回答，请将适当的配置移动到正确的要求。每个配置可以使用一次、多次或不使用。您可能需\n要移动分割条或滚动以查看内容。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "三个要求分别对应把自定义连接器接入代理的三个步骤。要让连接器可用于主题步骤，需将连接器添加为代理中的工具，这样它的操作才会出现在主题和代理编排中。要使用有效连接运行调用，需为连接器创建或重用连接，否则工具无法通过身份验证访问内部系统。要在运行时接收所需的输入值，需将主题变量映射到工具输入，把对话数据绑定到连接器参数。Add the connector as a knowledge source 是干扰项：知识源用于基于可检索内容生成回答，而不是在主题中带参数调用操作。"
  },
  "sources_en": [
   "Map topic variables to the tool inputs.",
   "Add the connector as a tool in the agent.",
   "Add the connector as a knowledge source.",
   "Create or reuse a connection for the connector."
  ],
  "sources_zh": [
   "将主题变量映射到工具输入。",
   "在代理中将连接器添加为工具。",
   "将连接器添加为知识源。",
   "为连接器创建或重用连接。"
  ],
  "targets": [
   {
    "label_en": "The agent must make the connector available for topic steps.",
    "label_zh": "代理必须使连接器可用于主题步骤。",
    "correct_en": "Add the connector as a tool in the agent.",
    "correct_zh": "在代理中将连接器添加为工具。"
   },
   {
    "label_en": "The agent must run the connector call with a valid connection.",
    "label_zh": "代理必须使用有效的连接运行连接器调用。",
    "correct_en": "Create or reuse a connection for the connector.",
    "correct_zh": "为连接器创建或重用连接。"
   },
   {
    "label_en": "The connector call must receive the required input values at runtime.",
    "label_zh": "连接器调用必须在运行时接收所需的输入值。",
    "correct_en": "Map topic variables to the tool inputs.",
    "correct_zh": "将主题变量映射到工具输入。"
   }
  ]
 },
 {
  "id": 9,
  "topic": 2,
  "qnum": 8,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company needs to ground an agent in Copilot Studio answers using live enterprise data from a supported system via a Microsoft Power\nPlatform connector.\nTo meet the business needs, the builder must meet the following requirements:\nAuthenticate using a valid connection.\nAdd the connector as a real-time knowledge source.\nSelect the tables for knowledge grounding.\nYou need to add a Power Platform connector as a real-time knowledge source for the agent.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the\ncorrect order.",
   "options": {},
   "explanation": "The flow starts inside the agent, not in the connector: you open the agent's Knowledge experience and select Add knowledge, then pick the real-time connector from the Add knowledge dialog so Copilot Studio knows which system to ground against. Only then does the dialog prompt you to select Sign in and create a new connection or reuse an existing connection, because the connection is scoped to the connector you just chose. With the connection authenticated, the dialog lists the connector's tables and you select the tables to include as the knowledge source, and finally you select Add to agent to complete the connection and register the real-time knowledge source. Signing in first is the common wrong ordering, since there is no connector context to authenticate against before the connector is selected."
  },
  "zh": {
   "stem": "一家公司需要通过 Microsoft Power Platform 连接器，使用来自支持系统的实时企业数据，在 Copilot Studio 中为代理提供答案。\n为了满足业务需求，构建者必须满足以下要求：\n使用有效的连接进行身份验证。\n将连接器添加为实时知识源。\n选择用于知识基础的表。\n您需要将 Power Platform 连接器添加为代理的实时知识源。\n您应该按照什么顺序执行这些操作？要回答，请将所有操作从操作列表移动到答案区域，并按正确顺序排列。\n建议答案：",
   "options": {},
   "explanation": "整个流程从代理内部开始，而不是从连接器开始：先在代理的 Knowledge 体验中选择“添加知识”，然后在“添加知识”对话框中选择实时连接器，让 Copilot Studio 知道要基于哪个系统。此时对话框才会提示登录并创建新连接或重用现有连接，因为连接是针对刚选定的连接器的。完成身份验证后，对话框会列出该连接器的表，选择要作为知识源的表，最后选择“添加到代理”以完成连接并注册实时知识源。先登录是常见的错误顺序，因为在选择连接器之前没有可供验证的连接器上下文。"
  },
  "sources_en": [
   "Select Sign in and create a new connection or reuse an existing connection.",
   "Select the tables to include as the knowledge source.",
   "Select Add knowledge from the agent Knowledge experience.",
   "Select the real-time connector from the Add knowledge dialog.",
   "Select Add to agent to complete the connection."
  ],
  "sources_zh": [
   "选择“登录”并创建新连接或重用现有连接。",
   "选择要作为知识源包含的表。",
   "在代理的 Knowledge 体验中选择“添加知识”。",
   "在“添加知识”对话框中选择实时连接器。",
   "选择“添加到代理”以完成连接。"
  ],
  "targets": [
   {
    "label_en": "Step 1",
    "label_zh": "步骤 1",
    "correct_en": "Select Add knowledge from the agent Knowledge experience.",
    "correct_zh": "在代理的 Knowledge 体验中选择“添加知识”。"
   },
   {
    "label_en": "Step 2",
    "label_zh": "步骤 2",
    "correct_en": "Select the real-time connector from the Add knowledge dialog.",
    "correct_zh": "在“添加知识”对话框中选择实时连接器。"
   },
   {
    "label_en": "Step 3",
    "label_zh": "步骤 3",
    "correct_en": "Select Sign in and create a new connection or reuse an existing connection.",
    "correct_zh": "选择“登录”并创建新连接或重用现有连接。"
   },
   {
    "label_en": "Step 4",
    "label_zh": "步骤 4",
    "correct_en": "Select the tables to include as the knowledge source.",
    "correct_zh": "选择要作为知识源包含的表。"
   },
   {
    "label_en": "Step 5",
    "label_zh": "步骤 5",
    "correct_en": "Select Add to agent to complete the connection.",
    "correct_zh": "选择“添加到代理”以完成连接。"
   }
  ]
 },
 {
  "id": 10,
  "topic": 2,
  "qnum": 9,
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You deploy an agent in Microsoft Copilot Studio that triggers a cloud flow to update customer records in Microsoft Dataverse.\nYou observe the following after deploying the agent:\nSeveral runs fail due to a temporary authentication issue.\nThe flow continues to trigger and generate additional failed runs.\nYou must:\nStop additional failed executions while troubleshooting.\nProcess a failed execution after resolving the authentication issue.\nValidate if the most recent executions succeeded immediately after resolution.\nYou need to use the appropriate monitoring and management actions to restore normal flow operation and validate successful execution.\nWhich action should you perform for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Turning the flow off at the trigger is the correct containment step: Disable the flow stops new runs from being created while you investigate, without losing the flow definition, its history, or its connections the way Delete the flow would, and unlike Cancel the most recent run it prevents future failures rather than just the current one. After the authentication issue is fixed, Resubmit the run replays the specific failed run with its original trigger payload, so the customer record update actually completes; Restart or Refresh the flow do not reprocess an individual failed run. To confirm the fix took effect, Review the Activity history shows the per-run status of the most recent executions, whereas the Analytics summary only gives aggregated trends and Republish or Export the flow to a solution have nothing to do with validating execution results."
  },
  "zh": {
   "stem": "您在 Microsoft Copilot Studio 中部署了一个代理，该代理触发云流以更新 Microsoft Dataverse 中的客户记录。\n部署代理后，您观察到以下情况：\n由于临时身份验证问题，多个运行失败。\n流继续触发并生成额外的失败运行。\n您必须：\n在排查问题时停止额外的失败执行。\n在解决身份验证问题后处理一次失败的执行。\n在解决后立即验证最近的执行是否成功。\n您需要使用适当的监控和管理操作来恢复正常的流操作并验证成功执行。\n对于每个要求，您应该执行哪些操作？请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "正确的止损做法是在触发器层面关闭流：Disable the flow 会在排查期间阻止产生新的运行，同时保留流定义、运行历史和连接，不像 Delete the flow 那样不可恢复；相比 Cancel the most recent run 只影响当前这一次运行，禁用可以阻止后续继续失败。身份验证问题解决后，Resubmit the run 会用原始触发数据重放那次失败的运行，从而真正完成客户记录更新；Restart the flow 和 Refresh the flow 都不会重新处理单次失败运行。要验证修复是否生效，Review the Activity history 可以查看最近各次运行的成功/失败状态；Inspect the Analytics summary 只提供汇总趋势，而 Republish the flow 和 Export the flow to a solution 与验证执行结果无关。"
  },
  "boxes": [
   {
    "prompt_en": "Stop additional failed executions while troubleshooting.",
    "prompt_zh": "在排查问题时停止额外的失败执行。",
    "options_en": [
     "Delete the flow.",
     "Disable the flow.",
     "Cancel the most recent run.",
     "Modify the trigger condition."
    ],
    "options_zh": [
     "删除流。",
     "禁用流。",
     "取消最近的运行。",
     "修改触发条件。"
    ],
    "correct_en": "Disable the flow.",
    "correct_zh": "禁用流。"
   },
   {
    "prompt_en": "Process a failed execution after resolving the authentication issue.",
    "prompt_zh": "在解决身份验证问题后处理一次失败的执行。",
    "options_en": [
     "Restart the flow.",
     "Refresh the flow.",
     "Resubmit the run.",
     "Recreate the trigger."
    ],
    "options_zh": [
     "重新启动流。",
     "刷新流。",
     "重新提交运行。",
     "重新创建触发器。"
    ],
    "correct_en": "Resubmit the run.",
    "correct_zh": "重新提交运行。"
   },
   {
    "prompt_en": "Validate if the most recent executions succeeded immediately after resolution.",
    "prompt_zh": "在解决后立即验证最近的执行是否成功。",
    "options_en": [
     "Republish the flow.",
     "Review the Activity history.",
     "Export the flow to a solution.",
     "Inspect the Analytics summary."
    ],
    "options_zh": [
     "重新发布流。",
     "查看活动历史记录。",
     "将流导出到解决方案。",
     "检查分析摘要。"
    ],
    "correct_en": "Review the Activity history.",
    "correct_zh": "查看活动历史记录。"
   }
  ]
 },
 {
  "id": 11,
  "topic": 2,
  "qnum": 10,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company is preparing an agent flow so that it can be invoked by an agent during conversations.\nThe agent flow must meet the following requirements:\nThe agent must be able to trigger the flow.\nThe agent flow must be verified.\nYou need to prepare an agent flow so that it can be used by the agent.\nIn which order should you perform the actions to prepare the agent flow? To answer, move all actions from the list of actions to the answer area\nand arrange them in the correct order.",
   "options": {},
   "explanation": "The agent flow must exist before anything can be configured on it, so you first create a new agent flow artifact in the environment. Next you configure the invocation trigger, because an agent flow started by an agent uses the \"When an agent calls the flow\" trigger, and the trigger defines the inputs the rest of the flow depends on. You then configure the actions that implement the required behavior and validate that behavior with representative test runs, so the flow is verified before anyone can depend on it. Finally you make the agent flow available for agent usage (publish it and add it to the agent), which must come last because publishing an unverified flow would expose broken behavior to live conversations."
  },
  "zh": {
   "stem": "拖放 -\n一家公司正在准备一个代理流程，以便代理在对话中可以调用它。\n代理流程必须满足以下要求：\n代理必须能够触发该流程。\n代理流程必须经过验证。\n您需要准备一个代理流程，以便代理可以使用它。\n您应该按照什么顺序执行操作来准备代理流程？要回答此问题，请将所有操作从操作列表移动到答案区域，并按正确的顺序排列。",
   "options": {},
   "explanation": "必须先在环境中创建新的 agent flow 工件，之后才能进行任何配置。接着配置调用触发器，因为由 agent 调用的 agent flow 使用“当 agent 调用该流”触发器，触发器定义了后续动作所依赖的输入。然后配置实现所需行为的动作，并通过有代表性的测试运行验证行为，确保流程在被使用前已经过验证。最后一步才是使该 agent flow 可供 agent 使用（发布并添加到 agent），因为发布未经验证的流程会把错误行为暴露到实际对话中。"
  },
  "sources_en": [
   "Configure the invocation trigger that allows the agent to call the agent flow.",
   "Make the agent flow available for agent usage.",
   "Validate the agent flow behavior with representative test runs.",
   "Configure the actions that implement the required behavior.",
   "Create a new agent flow artifact in the environment."
  ],
  "sources_zh": [
   "配置允许 agent 调用该 agent flow 的调用触发器。",
   "使该 agent flow 可供 agent 使用。",
   "通过有代表性的测试运行验证 agent flow 的行为。",
   "配置实现所需行为的动作。",
   "在环境中创建新的 agent flow 工件。"
  ],
  "targets": [
   {
    "label_en": "Step 1",
    "label_zh": "步骤 1",
    "correct_en": "Create a new agent flow artifact in the environment.",
    "correct_zh": "在环境中创建新的 agent flow 工件。"
   },
   {
    "label_en": "Step 2",
    "label_zh": "步骤 2",
    "correct_en": "Configure the invocation trigger that allows the agent to call the agent flow.",
    "correct_zh": "配置允许 agent 调用该 agent flow 的调用触发器。"
   },
   {
    "label_en": "Step 3",
    "label_zh": "步骤 3",
    "correct_en": "Configure the actions that implement the required behavior.",
    "correct_zh": "配置实现所需行为的动作。"
   },
   {
    "label_en": "Step 4",
    "label_zh": "步骤 4",
    "correct_en": "Validate the agent flow behavior with representative test runs.",
    "correct_zh": "通过有代表性的测试运行验证 agent flow 的行为。"
   },
   {
    "label_en": "Step 5",
    "label_zh": "步骤 5",
    "correct_en": "Make the agent flow available for agent usage.",
    "correct_zh": "使该 agent flow 可供 agent 使用。"
   }
  ]
 },
 {
  "id": 12,
  "topic": 2,
  "qnum": 11,
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "A company uses an agent flow that occasionally requires human input before continuing execution.\nSome automated actions must pause until a human provides a decision or additional information. The flow must be configured to:\nCapture a human response for use in later steps.\nContinue processing within the same flow run after the response is submitted.\nWait for a manual decision before proceeding.\nYou need to configure a human-in-the-loop agent flow.\nWhich setting should you configure for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "To reuse what a person entered, the approval or human-input action's response outputs must be referenced in the steps that follow; a notification is one-way and analytics logging only records data for reporting, so neither makes the response usable downstream. To keep everything in one flow run, the action must be allowed to wait for and return a response before continuing - republishing is a design-time operation and triggering a new flow run deliberately breaks the single-run requirement. To pause for a manual decision, add a human approval action; a manual trigger only starts a flow and a message that asks for input does not suspend execution until a decision is made."
  },
  "zh": {
   "stem": "一家公司使用一个代理流程，该流程偶尔需要人工输入才能继续执行。\n某些自动化操作必须暂停，直到人工提供决策或额外信息。该流程必须配置为：\n捕获人工响应以供后续步骤使用。\n在提交响应后，在同一流程运行中继续处理。\n在继续之前等待人工决策。\n您需要配置一个人工参与的代理流程。\n应为每个需求配置哪些设置？请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "要在后续逻辑中重用人工输入的内容，必须在后续步骤中引用该操作的响应输出；发送通知是单向的，启用分析日志记录只用于报表和审计，二者都无法让响应供下游使用。要在同一次流程运行中继续处理，必须允许该操作等待并返回响应后再继续；重新发布流程属于设计时操作，而在收到响应时触发新的流程运行则违背了“同一流程运行”的要求。要在继续之前等待人工决策，应添加人工审批操作；手动触发器只用于启动流程，发送请求输入的消息也不会暂停执行直到作出决策。"
  },
  "boxes": [
   {
    "prompt_en": "Capture a human response for use in downstream logic.",
    "prompt_zh": "捕获人工响应以供下游逻辑使用。",
    "options_en": [
     "Send a notification to a user.",
     "Use the action's response outputs in subsequent steps.",
     "Enable analytics logging for the response."
    ],
    "options_zh": [
     "向用户发送通知。",
     "在后续步骤中使用该操作的响应输出。",
     "为该响应启用分析日志记录。"
    ],
    "correct_en": "Use the action's response outputs in subsequent steps.",
    "correct_zh": "在后续步骤中使用该操作的响应输出。"
   },
   {
    "prompt_en": "Continue processing within the same flow run after a response is submitted.",
    "prompt_zh": "在提交响应后，在同一流程运行中继续处理。",
    "options_en": [
     "Republish the flow after the decision is submitted.",
     "Trigger a new flow run when a response is received.",
     "Allow the action to wait for and return a response before continuing."
    ],
    "options_zh": [
     "在提交决策后重新发布该流程。",
     "在收到响应时触发新的流程运行。",
     "允许该操作等待并返回响应后再继续。"
    ],
    "correct_en": "Allow the action to wait for and return a response before continuing.",
    "correct_zh": "允许该操作等待并返回响应后再继续。"
   },
   {
    "prompt_en": "Wait for a manual decision before proceeding.",
    "prompt_zh": "在继续之前等待人工决策。",
    "options_en": [
     "Add a human approval action.",
     "Add a manual trigger to the flow.",
     "Send a message that asks for input."
    ],
    "options_zh": [
     "添加人工审批操作。",
     "向流程中添加手动触发器。",
     "发送请求输入的消息。"
    ],
    "correct_en": "Add a human approval action.",
    "correct_zh": "添加人工审批操作。"
   }
  ]
 },
 {
  "id": 13,
  "topic": 2,
  "qnum": 12,
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "A company uses an agent that invokes an agent flow to exchange information during a conversation.\nThe company requires that the agent send data into the flow and receive structured results back from the same flow run. To support this business\nneed, the flow must be configured to do the following:\nCapture the data provided by the agent.\nReturn data results to the agent.\nYou need to configure the flow so that it can exchange data with the agent.\nWhat should you configure for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "An agent flow exchanges data with the calling agent through its trigger's input parameters and its Respond to agent output parameters, so you add a text input parameter to capture what the agent sends in and a text output parameter to return structured results in the same flow run. An internal variable exists only inside the flow run and is never exposed to the agent, and storing values only in the topic or only in the flow keeps the data on one side of the boundary instead of passing it across. Logging values to run history is for troubleshooting and auditing only; the agent cannot read run history to obtain results."
  },
  "zh": {
   "stem": "热点 -\n一家公司使用一个代理来调用代理流程，以在对话中交换信息。\n该公司要求代理将数据发送到流程中，并从同一流程运行中接收结构化结果。为了支持这一业务需求，流程必须配置为执行以下操\n作：\n捕获代理提供的数据。\n将数据结果返回给代理。\n您需要配置流程，以便它可以与代理交换数据。\n对于每个需求，您应该配置什么？请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。\n建议答案：",
   "options": {},
   "explanation": "Agent flow 通过触发器的输入参数以及“回复 agent”的输出参数与调用它的 agent 交换数据，因此用文本输入参数捕获 agent 传入的数据，用文本输出参数在同一次流程运行中返回结构化结果。内部变量只存在于流程运行内部，agent 无法访问；仅在主题中存储值或仅在流中存储值都只是把数据留在边界的一侧，没有真正传递。将值记录到运行历史仅用于排查和审计，agent 无法从运行历史中读取结果。"
  },
  "boxes": [
   {
    "prompt_en": "Capture the data provided by the agent.",
    "prompt_zh": "捕获 agent 提供的数据。",
    "options_en": [
     "Use an internal variable.",
     "Add a text input parameter.",
     "Store values only in the topic."
    ],
    "options_zh": [
     "使用内部变量。",
     "添加文本输入参数。",
     "仅在主题中存储值。"
    ],
    "correct_en": "Add a text input parameter.",
    "correct_zh": "添加文本输入参数。"
   },
   {
    "prompt_en": "Return data results to the agent.",
    "prompt_zh": "将数据结果返回给 agent。",
    "options_en": [
     "Log values to run history.",
     "Store values only in the flow.",
     "Add a text output parameter."
    ],
    "options_zh": [
     "将值记录到运行历史。",
     "仅在流中存储值。",
     "添加文本输出参数。"
    ],
    "correct_en": "Add a text output parameter.",
    "correct_zh": "添加文本输出参数。"
   }
  ]
 },
 {
  "id": 14,
  "topic": 2,
  "qnum": 13,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You are configuring an agent in Copilot Studio for an organization. The organization uses Microsoft Dataverse, Dynamics 365, and SharePoint\nOnline.\nThe agent must retrieve information from enterprise systems and internal documents. The agent must meet the following requirements:\nMust retrieve the current balance of a customer account stored in Dataverse.\nMust retrieve the real-time shipping status of an order that updates throughout the day in Dynamics 365.\nMust answer questions based on the content of a static PDF policy document.\nMust provide a welcome message that does NOT depend on enterprise data.\nYou need to configure the agent to meet the requirements.\nHow should the agent retrieve the data? To answer, move the appropriate solutions to the correct requirements. You may use each solution once,\nmore than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Live, transactional values such as an account balance in Dataverse and a shipping status that changes throughout the day in Dynamics 365 must be read at run time, so both requirements use a Power Platform connector action rather than any cached or generated content. A static PDF policy document is unstructured reference content, so uploading the file to the agent's knowledge base lets generative answers ground responses in that document. A welcome message contains no enterprise data at all, so a manual response authored directly in the topic is the simplest and most deterministic option. Configuring a generative answer without enterprise data is not used, because it would produce non-deterministic text where a fixed greeting is required."
  },
  "zh": {
   "stem": "您正在为一个组织在 Copilot Studio 中配置一个代理。该组织使用 Microsoft Dataverse、Dynamics 365 和 SharePoint Online。\n该代理必须从企业系统和内部文档中检索信息。代理必须满足以下要求：\n必须检索存储在 Dataverse 中的客户账户当前余额。\n必须检索在 Dynamics 365 中全天更新的订单实时运输状态。\n必须基于静态 PDF 政策文档的内容回答问题。\n必须提供一个不依赖企业数据的欢迎消息。\n您需要配置代理以满足这些要求。\n代理应如何检索数据？要回答，请将适当的解决方案移动到正确的要求中。您可以对每个解决方案使用一次、多次或不使用。您可\n能需要移动分隔条或滚动以查看内容。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "账户余额存放在 Dataverse、订单运输状态在 Dynamics 365 中全天变化，这类实时事务数据必须在运行时读取，因此这两个要求都使用 Power Platform 连接器，而不是缓存或生成的内容。静态 PDF 政策文档属于非结构化参考内容，将文件上传到 agent 的知识库后，生成式回答即可基于该文档作答。欢迎消息完全不依赖企业数据，因此在主题中直接创建手动响应最简单也最确定。配置不使用企业数据的生成式回答不适用，因为它会产生不确定的文本，而此处需要固定的问候语。"
  },
  "sources_en": [
   "Create a manual response in the topic.",
   "Connect to a Power Platform connector.",
   "Upload a file to Agents Knowledge Base.",
   "Configure a generative answer without enterprise data."
  ],
  "sources_zh": [
   "在主题中创建手动响应。",
   "连接到 Power Platform 连接器。",
   "将文件上传到 Agents Knowledge Base。",
   "配置不使用企业数据的生成式回答。"
  ],
  "targets": [
   {
    "label_en": "Retrieve the current balance of a customer account stored in Dataverse.",
    "label_zh": "检索存储在 Dataverse 中的客户账户当前余额。",
    "correct_en": "Connect to a Power Platform connector.",
    "correct_zh": "连接到 Power Platform 连接器。"
   },
   {
    "label_en": "Retrieve the real-time shipping status of an order that updates throughout the day in Dynamics 365.",
    "label_zh": "检索在 Dynamics 365 中全天更新的订单实时运输状态。",
    "correct_en": "Connect to a Power Platform connector.",
    "correct_zh": "连接到 Power Platform 连接器。"
   },
   {
    "label_en": "Answer questions based on the content of a static PDF policy document.",
    "label_zh": "基于静态 PDF 政策文档的内容回答问题。",
    "correct_en": "Upload a file to Agents Knowledge Base.",
    "correct_zh": "将文件上传到 Agents Knowledge Base。"
   },
   {
    "label_en": "Provide a welcome message that does NOT depend on enterprise data.",
    "label_zh": "提供不依赖企业数据的欢迎消息。",
    "correct_en": "Create a manual response in the topic.",
    "correct_zh": "在主题中创建手动响应。"
   }
  ]
 },
 {
  "id": 15,
  "topic": 2,
  "qnum": 14,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "An agent calls a flow. The agent requires structured output values to be returned.\nThe agent receives unexpected or empty values.\nYou need to configure the agent so that data is exchanged correctly between the agent and the flow.\nWhat should you do?",
   "options": {
    "A": "Validate parameter definitions.",
    "B": "Change the trigger schema.",
    "C": "Review the flow run history.",
    "D": "Add a Parse JSON inside the flow.",
    "E": "Republish the agent."
   },
   "explanation": "When an agent calls a flow, the data contract between them is the flow's input and output parameter definitions; if a parameter is missing, misnamed, or typed differently on either side, the agent receives empty or unexpected values. Validating those parameter definitions (A) is therefore the fix that makes structured output flow back correctly. Reviewing run history (C) only diagnoses the symptom, republishing the agent (E) redeploys the same broken contract, and changing the trigger schema (B) or adding a Parse JSON action (D) addresses the flow's inbound or intermediate data rather than the output values the agent is failing to read."
  },
  "zh": {
   "stem": "一个代理调用了一个流程。代理需要返回结构化的输出值。\n代理接收到意外的值或空值。\n您需要配置代理，以便在代理和流程之间正确交换数据。\n您应该怎么做？",
   "options": {
    "A": "验证参数定义。",
    "B": "更改触发器架构。",
    "C": "查看流程运行历史记录。",
    "D": "在流程中添加一个解析 JSON 操作。",
    "E": "重新发布代理。"
   },
   "explanation": "代理调用流程时，双方的数据契约就是流程的输入/输出参数定义；只要参数缺失、命名不一致或类型不匹配，代理就会收到空值或意外值。因此验证参数定义（A）才是让结构化输出正确返回的解决办法。C 只是诊断手段，不解决问题；E 重新发布只是把同一个错误契约再部署一次；B 改触发器架构、D 加 Parse JSON 处理的是流程的输入或中间数据，而非代理读不到的输出值。"
  }
 },
 {
  "id": 16,
  "topic": 2,
  "qnum": 15,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "A company is building an agent in Copilot Studio.\nThe agent must meet the following requirements:\nResponses must be grounded in approved internal content.\nThe agent must be able to retrieve information from configured data sources in a topic.\nYou need to configure the agent so that topic responses are grounded from custom data sources.\nWhat should you configure?",
   "options": {
    "A": "Enable analytics to review which topics users trigger most often.",
    "B": "Add a custom prompt that tells the agent to answer only from company data.",
    "C": "Configure knowledge sources in a generative answers node.",
    "D": "Add SharePoint as a knowledge source only at the agent level.",
    "E": "Increase the response length limit to improve answer completeness."
   },
   "explanation": "The requirement is that responses inside a topic be grounded in approved internal content, and the generative answers node is where a topic points at specific knowledge sources, so configuring knowledge sources on that node (C) satisfies both requirements. D is close but insufficient: agent-level SharePoint knowledge grounds the agent generally and does not give a topic its own configured data sources. A only reports on topic usage, B is a wording instruction that cannot actually retrieve or restrict data, and E changes answer length rather than grounding."
  },
  "zh": {
   "stem": "一家公司正在 Copilot Studio 中构建一个代理。\n该代理必须满足以下要求：\n回复必须基于批准的内部内容。\n代理必须能够从配置的数据源中检索主题信息。\n您需要配置代理，以确保主题回复基于自定义数据源。\n您应该配置什么？",
   "options": {
    "A": "启用分析功能以审查用户最常触发的主题。",
    "B": "添加一个自定义提示，指示代理仅从公司数据中回答。",
    "C": "在生成式答案节点中配置知识源。",
    "D": "仅在代理级别添加 SharePoint 作为知识源。",
    "E": "增加回复长度限制以提高答案的完整性。"
   },
   "explanation": "题目要求主题内的回复必须基于批准的内部内容，而生成式答案节点正是主题指定知识源的位置，因此在该节点配置知识源（C）同时满足两项要求。D 接近但不足：仅在代理级别添加 SharePoint 只是整体接地，无法让某个主题使用自己配置的数据源。A 只是使用情况分析；B 只是措辞指令，无法真正检索或限制数据；E 调整回复长度与接地无关。"
  }
 },
 {
  "id": 17,
  "topic": 2,
  "qnum": 16,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company is building an agent in Copilot Studio topic that must retrieve real-time status information from an external REST API using a Send\nHTTP request node.\nTo meet the business needs, the topic must meet the following requirements:\nThe request must include the required authentication header.\nThe request must call the endpoint using the correct HTTP method.\nThe response must be configured with an appropriate response data type based on a schema and saved so the topic can reuse the returned\nvalues.\nYou need to configure the Send HTTP request node.\nWhich configuration should you use for each requirement? To answer, move the appropriate configurations to the correct requirements. You may\nuse each configuration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "In a Send HTTP request node, authentication credentials such as an Authorization bearer token are passed in the request headers, so adding the required headers satisfies the authentication requirement. Retrieving status information is a read operation, so the method must be GET; setting the method to POST and sending JSON in a request body is for creating or updating a resource and would not match a read-only status endpoint. To reuse the returned values later in the topic, the response data type must be set to a JSON schema so the payload is parsed into typed properties, and the result must be saved to a variable that subsequent nodes can reference."
  },
  "zh": {
   "stem": "一家公司正在 Copilot Studio 主题中构建一个代理，该代理必须使用“发送 HTTP 请求”节点从外部 REST API 检索实时状态信息。\n为了满足业务需求，该主题必须满足以下要求：\n请求必须包含所需的身份验证头。\n请求必须使用正确的 HTTP 方法调用端点。\n响应必须根据架构配置为适当的响应数据类型，并保存以便主题可以重用返回值。\n您需要配置“发送 HTTP 请求”节点。\n您应该为每个要求使用哪种配置？要回答，请将适当的配置移动到正确的要求。每个配置可以使用一次、多次或不使用。您可能需\n要移动分割条或滚动以查看内容。\n注意：每个正确选择都值得一分。",
   "options": {},
   "explanation": "在“发送 HTTP 请求”节点中，Authorization 持有者令牌等身份验证凭据通过请求头传递，因此添加所需的请求头即可满足身份验证要求。检索状态信息属于读取操作，方法必须为 GET；将方法设为 POST 并在请求正文中发送 JSON 用于创建或更新资源，不适用于只读的状态端点。要在主题的后续节点中重用返回值，必须将响应数据类型设置为 JSON 架构以便把负载解析为带类型的属性，并将结果保存到变量中供后续节点引用。"
  },
  "sources_en": [
   "Add required headers to the HTTP request.",
   "Set the method to GET in the HTTP request.",
   "Select JSON data type and save response to a variable.",
   "Set the method to POST and send JSON in a request body."
  ],
  "sources_zh": [
   "向 HTTP 请求添加所需的请求头。",
   "在 HTTP 请求中将方法设置为 GET。",
   "选择 JSON 数据类型并将响应保存到变量。",
   "将方法设置为 POST 并在请求正文中发送 JSON。"
  ],
  "targets": [
   {
    "label_en": "Configure authentication for the request.",
    "label_zh": "为请求配置身份验证。",
    "correct_en": "Add required headers to the HTTP request.",
    "correct_zh": "向 HTTP 请求添加所需的请求头。"
   },
   {
    "label_en": "Select the correct HTTP method for retrieving data.",
    "label_zh": "选择用于检索数据的正确 HTTP 方法。",
    "correct_en": "Set the method to GET in the HTTP request.",
    "correct_zh": "在 HTTP 请求中将方法设置为 GET。"
   },
   {
    "label_en": "Configure structured data handling and storage of data for reuse in the topic.",
    "label_zh": "配置结构化数据处理以及数据存储，以便在主题中重用。",
    "correct_en": "Select JSON data type and save response to a variable.",
    "correct_zh": "选择 JSON 数据类型并将响应保存到变量。"
   }
  ]
 },
 {
  "id": 18,
  "topic": 2,
  "qnum": 17,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "A company is deploying an agent for employees.\nThe company has the following requirements:\nAccess must be restricted to the internal employees only.\nEnd-user authentication must be enforced.\nYou need to configure the agent based on the company requirements.\nWhat should you do?",
   "options": {
    "A": "Select Authenticate with Microsoft Entra ID for the agent.",
    "B": "Enable Require Secure Access in the Web channel security.",
    "C": "Publish the agent as a public website experience.",
    "D": "Select Authenticate with personal account for the agent."
   },
   "explanation": "Setting the agent's authentication to Microsoft Entra ID (A) both enforces end-user sign-in and scopes access to accounts in the company tenant, which is exactly the pair of requirements stated. D authenticates users with personal Microsoft accounts, which enforces sign-in but does not restrict access to internal employees. B secures the web channel transport and embedding but does not authenticate individual end users, and C publishes the agent for anonymous public access, directly contradicting the internal-only requirement."
  },
  "zh": {
   "stem": "一家公司正在为员工部署一个代理。\n公司有以下要求：\n访问必须仅限于内部员工。\n必须强制执行终端用户身份验证。\n您需要根据公司的要求配置代理。\n您应该怎么做？",
   "options": {
    "A": "为代理选择使用 Microsoft Entra ID 进行身份验证。",
    "B": "在 Web 渠道安全性中启用“需要安全访问”。",
    "C": "将代理发布为公共网站体验。",
    "D": "为代理选择使用个人账户进行身份验证。"
   },
   "explanation": "将代理的身份验证设置为 Microsoft Entra ID（A），既强制终端用户登录，又把访问范围限定在公司租户内的账户，正好同时满足两项要求。D 使用个人账户验证，虽然要求登录，但无法限定为内部员工。B 只保障 Web 渠道的安全访问/嵌入，不对终端用户进行身份验证。C 将代理发布为公开网站体验，允许匿名访问，与“仅限内部员工”直接冲突。"
  }
 },
 {
  "id": 19,
  "topic": 2,
  "qnum": 18,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company is integrating an agent in Copilot Studio into a custom application by using the Microsoft 365 Agents SDK.\nThe company has the following requirements for the application:\nThe deployment workflow must follow a dependency driven sequence.\nThe agent must be published before configuration values are retrieved.\nEnd-to-end validation must occur before production deployment.\nYou need to plan the deployment workflow to integrate the agent.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the\ncorrect order.",
   "options": {},
   "explanation": "The sequence is dependency driven, so the agent must be published first because the configuration values the app needs only exist for a published agent; you then retrieve those current agent configuration values. The target integration channel must be configured and enabled next, since the channel settings determine the endpoint and identity the SDK client connects to. Only then can you implement the Microsoft 365 Agents SDK in the app using that agent configuration. Finally you validate the end-to-end conversation workflow in a test environment before deploying the web app to production, because the requirements state that end-to-end validation must precede production deployment."
  },
  "zh": {
   "stem": "一家公司正在通过使用 Microsoft 365 Agents SDK 将一个代理集成到定制应用程序中。\n该公司对该应用程序有以下要求：\n部署工作流必须遵循依赖驱动的顺序。\n代理必须在检索配置值之前发布。\n在生产部署之前必须进行端到端验证。\n您需要规划部署工作流以集成代理。\n应该以什么顺序执行这些操作？要回答，请将所有操作从操作列表移动到答案区域，并按正确顺序排列。\n建议答案：",
   "options": {},
   "explanation": "该顺序由依赖关系驱动：必须先发布 agent，因为应用所需的配置值只有在 agent 发布后才存在；随后检索当前的 agent 配置值。接着配置并启用 agent 的目标集成渠道，因为渠道设置决定了 SDK 客户端要连接的终结点和标识。之后才能使用该 agent 配置在应用中实现 Microsoft 365 Agents SDK。最后在测试环境中验证端到端会话工作流，再将 Web 应用部署到生产环境，因为需求明确要求端到端验证必须先于生产部署完成。"
  },
  "sources_en": [
   "Configure and enable the agent's target integration channel.",
   "Retrieve current agent configuration values.",
   "Deploy the web app to production.",
   "Implement the Microsoft 365 Agents SDK in the app using the agent configuration.",
   "Publish the agent.",
   "Validate the end-to-end conversation workflow in a test environment."
  ],
  "sources_zh": [
   "配置并启用 agent 的目标集成渠道。",
   "检索当前的 agent 配置值。",
   "将 Web 应用部署到生产环境。",
   "使用该 agent 配置在应用中实现 Microsoft 365 Agents SDK。",
   "发布 agent。",
   "在测试环境中验证端到端会话工作流。"
  ],
  "targets": [
   {
    "label_en": "Step 1",
    "label_zh": "步骤 1",
    "correct_en": "Publish the agent.",
    "correct_zh": "发布 agent。"
   },
   {
    "label_en": "Step 2",
    "label_zh": "步骤 2",
    "correct_en": "Retrieve current agent configuration values.",
    "correct_zh": "检索当前的 agent 配置值。"
   },
   {
    "label_en": "Step 3",
    "label_zh": "步骤 3",
    "correct_en": "Configure and enable the agent's target integration channel.",
    "correct_zh": "配置并启用 agent 的目标集成渠道。"
   },
   {
    "label_en": "Step 4",
    "label_zh": "步骤 4",
    "correct_en": "Implement the Microsoft 365 Agents SDK in the app using the agent configuration.",
    "correct_zh": "使用该 agent 配置在应用中实现 Microsoft 365 Agents SDK。"
   },
   {
    "label_en": "Step 5",
    "label_zh": "步骤 5",
    "correct_en": "Validate the end-to-end conversation workflow in a test environment.",
    "correct_zh": "在测试环境中验证端到端会话工作流。"
   },
   {
    "label_en": "Step 6",
    "label_zh": "步骤 6",
    "correct_en": "Deploy the web app to production.",
    "correct_zh": "将 Web 应用部署到生产环境。"
   }
  ]
 },
 {
  "id": 20,
  "topic": 2,
  "qnum": 19,
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "E"
  ],
  "en": {
   "stem": "An agent in Copilot Studio already exists in a development environment.\nYou need to prepare the agent so it can be moved to a production environment using the supported solution-based approach.\nYou need to create an exportable package that contains the existing agent.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Remove agent topics directly from the solution to prevent export errors.",
    "B": "Convert the solution to a managed solution so it can be exported.",
    "C": "Export the unmanaged solution that contains the agent.",
    "D": "Publish the agent to a channel and export the channel configuration.",
    "E": "Create a custom solution and add the existing agent to the solution."
   },
   "explanation": "The supported ALM path is to place the agent into a solution and export that solution, so you first create a custom solution and add the existing agent to it (E). The official answer then takes B, exporting it as a managed solution, which is the form intended for deployment into a production environment where components should not be edited. A is wrong because stripping topics out would ship an incomplete agent, and D is wrong because publishing to a channel makes the agent available to users and has nothing to do with building an export package. Note that the zh_analysis argues for C instead of B, on the grounds that the development environment holds the unmanaged solution and that is what you export; the official graded answer remains BE."
  },
  "zh": {
   "stem": "Copilot Studio 中的一个代理已存在于开发环境中。\n您需要准备该代理，以便可以使用支持的基于解决方案的方法将其移动到生产环境中。\n您需要创建一个包含现有代理的可导出包。\n您应该执行哪两项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择都值一分。",
   "options": {
    "A": "直接从解决方案中移除代理主题以防止导出错误。",
    "B": "将解决方案转换为托管解决方案，以便可以导出。",
    "C": "导出包含代理的非托管解决方案。",
    "D": "将代理发布到一个渠道并导出该渠道的配置。",
    "E": "创建一个自定义解决方案并将现有代理添加到该解决方案中。"
   },
   "explanation": "受支持的 ALM 做法是把代理放进解决方案再导出，因此先创建自定义解决方案并把现有代理加入其中（E）。官方答案随后选 B，即转换为托管解决方案后导出——托管形式正是用于部署到生产环境、不允许直接编辑的形态。A 错误：移除主题会导出一个不完整的代理。D 错误：发布到渠道只是让用户可用，与生成导出包无关。注意：zh_analysis 主张用 C 取代 B，理由是开发环境中的是非托管解决方案、导出的应是它；但以官方答案 BE 计分。"
  }
 },
 {
  "id": 21,
  "topic": 2,
  "qnum": 20,
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "A company wants to use content from a non-Microsoft enterprise knowledge base to ground agent responses.\nTo meet the business needs, the knowledge source must meet the following requirements:\nSupport grounding from indexed data.\nUse existing access controls from the source system.\nSupport read-only operations.\nYou need to determine the correct behavior to meet the requirements.\nWhich behavior meets each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "A Microsoft Copilot connector (Graph connector) ingests content from a non-Microsoft system into a search index, so grounding is served from that index rather than from a live call to the source — the correct behavior is \"Retrieve indexed content\", not \"Retrieve live data at runtime\" or \"Execute runtime operations\", which describe action/tool behavior instead of knowledge behavior. Copilot connectors carry the source system's own access control lists into the index and trim results per user, so the connector honors the source's permissions: \"Respect existing permissions.\" \"Bypass permissions for faster retrieval.\" breaks the security requirement, and \"Respect existing permissions from agent authors.\" applies the wrong identity (the maker, not the source system). Because a knowledge connector only reads and grounds, it cannot write back — \"Prevent transactional updates.\" is what makes the integration read-only, while \"Allow authenticated write operations.\" and \"Enable updates for enhanced performance.\" both introduce writes."
  },
  "zh": {
   "stem": "一家公司希望使用来自非微软企业知识库的内容来作为客服响应的依据。\n为了满足业务需求，知识源必须满足以下要求：\n支持从索引数据中获取依据。\n使用源系统中现有的访问控制。\n支持只读操作。\n您需要确定满足这些要求的正确行为。\n哪种行为满足每个要求？请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。\n建议答案：",
   "options": {},
   "explanation": "Microsoft Copilot 连接器会把非微软系统的内容抓取到索引中，因此接地（grounding）来自索引数据而不是实时调用，正确行为是 Retrieve indexed content；Execute runtime operations 和 Retrieve live data at runtime 描述的是运行时操作/实时取数，不符合“从索引数据接地”的要求。Copilot 连接器会把源系统的访问控制一并带入索引并按用户裁剪结果，因此应选 Respect existing permissions；Bypass permissions for faster retrieval 违反安全要求，Respect existing permissions from agent authors 用的是代理作者的权限而非源系统权限。知识连接器只读取用于接地、不能回写，所以 Prevent transactional updates 才能实现只读；Allow authenticated write operations 与 Enable updates for enhanced performance 都会引入写操作。"
  },
  "boxes": [
   {
    "prompt_en": "Support grounding from indexed data.",
    "prompt_zh": "支持从索引数据进行接地。",
    "options_en": [
     "Retrieve indexed content",
     "Execute runtime operations.",
     "Retrieve live data at runtime."
    ],
    "options_zh": [
     "检索已索引的内容",
     "执行运行时操作。",
     "在运行时检索实时数据。"
    ],
    "correct_en": "Retrieve indexed content",
    "correct_zh": "检索已索引的内容"
   },
   {
    "prompt_en": "Use existing access controls from the source system.",
    "prompt_zh": "使用源系统中现有的访问控制。",
    "options_en": [
     "Respect existing permissions.",
     "Bypass permissions for faster retrieval.",
     "Respect existing permissions from agent authors."
    ],
    "options_zh": [
     "遵循现有权限。",
     "绕过权限以加快检索速度。",
     "遵循代理作者的现有权限。"
    ],
    "correct_en": "Respect existing permissions.",
    "correct_zh": "遵循现有权限。"
   },
   {
    "prompt_en": "Support read-only operations.",
    "prompt_zh": "支持只读操作。",
    "options_en": [
     "Prevent transactional updates.",
     "Allow authenticated write operations.",
     "Enable updates for enhanced performance."
    ],
    "options_zh": [
     "阻止事务性更新。",
     "允许经过身份验证的写操作。",
     "启用更新以提升性能。"
    ],
    "correct_en": "Prevent transactional updates.",
    "correct_zh": "阻止事务性更新。"
   }
  ]
 },
 {
  "id": 22,
  "topic": 2,
  "qnum": 21,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear on the review screen.\nAn agent uses a flow that calls an external service which can occasionally fail or time out.\nWhen a failure occurs, the agent must meet the following requirements:\nMust not terminate silently.\nMust send a notification containing the error details.\nYou need to configure the agent flow so that failures are handled in a controlled and predictable way.\nSolution: Retry the failing action without handling failure.\nDoes the solution meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "The answer is No. Retrying a failing action only gives the external service more chances to succeed; it adds no failure branch, so when the retries are exhausted the flow still ends on an unhandled error and no notification is produced. That leaves both stated requirements unmet — the run can still terminate silently and nothing sends the error details. Controlled handling requires an explicit failure path, such as run-after conditions on failure or a scope with a catch branch, that captures the error and sends the notification."
  },
  "zh": {
   "stem": "注意：本问题是一个系列问题的一部分，呈现了相同的场景。系列中的每个问题包含一个可能满足所述目标的独特解决方案。一些\n问题集可能有多个正确解决方案，而另一些可能没有正确解决方案。\n在您回答本部分中的问题后，您将无法返回。因此，这些问题不会出现在复查屏幕上。\n一个代理使用一个调用外部服务的流程，该服务可能偶尔会失败或超时。\n当发生故障时，代理必须满足以下要求：\n不得无声终止。\n必须发送包含错误详细信息的通知。\n您需要配置代理流程，以便故障以可控且可预测的方式处理。\n解决方案：重试失败的操作而不处理故障。\n该解决方案是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "答案是「否」。重试失败的操作只是给外部服务更多成功机会，并没有添加任何失败分支；重试用尽后，流程仍以未处理的错误结束，也不会发出任何通知。这样两项要求都无法满足：流程仍可能静默终止，且没有发送错误详情。要实现可控处理，必须显式配置失败路径，例如失败时的运行后条件或带 catch 分支的作用域，用以捕获错误并发送通知。"
  }
 },
 {
  "id": 23,
  "topic": 2,
  "qnum": 22,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear on the review screen.\nAn agent uses a flow that calls an external service which can occasionally fail or time out.\nWhen a failure occurs, the agent must meet the following requirements:\nMust not terminate silently.\nMust send a notification containing the error details.\nYou need to configure the agent flow so that failures are handled in a controlled and predictable way.\nSolution: Configure run after conditions for failure paths.\nDoes the solution meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "The answer is Yes. Run after conditions let you attach an action that executes specifically when the preceding step has failed, timed out, or been skipped, which creates an explicit failure branch instead of letting the run end on an unhandled error. That branch can reference the failed action's error output and send a notification containing the details, satisfying both requirements: the flow does not terminate silently and the error details are reported. This is the standard, predictable error-handling pattern for an agent flow calling an unreliable external service."
  },
  "zh": {
   "stem": "注意：本问题是一个系列问题的一部分，呈现了相同的场景。系列中的每个问题包含一个可能满足所述目标的独特解决方案。一些\n问题集可能有多个正确解决方案，而另一些可能没有正确解决方案。\n在您回答本部分中的问题后，您将无法返回。因此，这些问题将不会出现在复查屏幕上。\n一个代理使用一个调用外部服务的流程，该服务可能偶尔会失败或超时。\n当发生故障时，代理必须满足以下要求：\n不得无声终止。\n必须发送包含错误详细信息的通知。\n您需要配置代理流程，以便故障以可控且可预测的方式处理。\n解决方案：为失败路径配置运行后条件。\n该解决方案是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "答案是「是」。运行后条件（run after conditions）可以让某个操作在前一步骤失败、超时或被跳过时才执行，从而建立显式的失败分支，而不是让流程以未处理的错误直接结束。该分支可以引用失败操作的错误输出并发送包含错误详情的通知，同时满足两项要求：流程不会静默终止，且错误详情会被上报。这是代理流程调用不可靠外部服务时标准且可预测的错误处理模式。"
  }
 },
 {
  "id": 24,
  "topic": 2,
  "qnum": 23,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear on the review screen.\nAn agent uses a flow that calls an external service which can occasionally fail or time out.\nWhen a failure occurs, the agent must meet the following requirements:\nMust not terminate silently.\nMust send a notification containing the error details.\nYou need to configure the agent flow so that failures are handled in a controlled and predictable way.\nSolution: Send a notification with relevant error details.\nDoes the solution meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "The official answer is B (No). Sending a notification only reports that something went wrong; by itself it does not make the failure handled in a controlled and predictable way. Without an error-handling construct around the external call - a Try/Catch style scope in the agent flow with \"Configure run after\" set to catch failed/timed-out actions - the flow still ends in a failed state and the branch that sends the notification is never guaranteed to run, so the agent can still terminate silently. The notification is the last step of a correct solution, not the solution itself: you must first catch the failure, then send the notification with the error details. Note that the AI walkthrough in the source recommended A because the wording matches the second requirement, but ExamTopics' graded answer is B."
  },
  "zh": {
   "stem": "注意：本问题是一个系列问题的一部分，呈现了相同的场景。系列中的每个问题包含一个可能满足所述目标的独特解决方案。一些\n问题集可能有多个正确解决方案，而另一些可能没有正确解决方案。\n在您回答本部分中的问题后，您将无法返回。因此，这些问题将不会出现在复查屏幕上。\n一个代理使用一个调用外部服务的流程，该服务可能偶尔会失败或超时。\n当发生故障时，代理必须满足以下要求：\n不得无声终止。\n必须发送包含错误详情的通知。\n您需要配置代理流程，以便故障以可控且可预测的方式处理。\n解决方案：发送包含相关错误详情的通知。\n该解决方案是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "官方答案为 B（否）。仅仅\"发送包含错误详情的通知\"只是报告故障，并不能让故障以可控、可预测的方式被处理。如果没有在外部调用外层配置错误处理结构（agent flow 中的 Try/Catch 范围，配合\"配置运行后\"捕获失败或超时的操作），流程仍会以失败状态结束，发送通知的分支也不保证会执行，代理依然可能静默终止。通知只是正确方案的最后一步：必须先捕获异常，再发送带错误详情的通知。注意：源文件中的 AI 推荐答案为 A，与官方答案 B 不一致。"
  }
 },
 {
  "id": 25,
  "topic": 2,
  "qnum": 24,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear on the review screen.\nA company is configuring an agent in Copilot Studio that uses a generative answers node inside multiple topics.\nThe company requires responses to meet the following requirements:\nMust use an executive summary format.\nMust apply only within a specific topic.\nMust continue using configured knowledge sources.\nMust comply with connector security controls.\nYou need to configure a custom prompt to meet the formatting requirements.\nSolution: Remove the generative answers node and rely only on the custom prompt to produce formatted responses.\nDoes the solution meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "The answer is B (No). A custom prompt shapes the wording and format of a response, but it is not grounded in the agent's configured knowledge sources and it does not run under the connector security controls that the generative answers node enforces. If you delete the generative answers node, the topic loses its grounding on the configured knowledge sources, so the requirements \"must continue using configured knowledge sources\" and \"must comply with connector security controls\" both fail - even though the executive summary formatting requirement would be met. The correct approach is to keep the generative answers node and apply the custom prompt to it within that specific topic so the formatting is scoped to that topic only."
  },
  "zh": {
   "stem": "注意：本问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足所述目标的独特解决方案。某些问\n题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在您回答本部分中的问题后，您将无法返回。因此，这些问题不会出现在复查屏幕上。\n一家公司正在 Copilot Studio 中配置一个代理，该代理在多个主题中使用生成式回答节点。\n该公司要求响应满足以下要求：\n必须使用执行摘要格式。\n必须仅适用于特定主题。\n必须继续使用配置的知识来源。\n必须遵守连接器安全控制。\n您需要配置一个自定义提示以满足格式要求。\n解决方案：移除生成式回答节点，仅依赖自定义提示生成格式化响应。\n该解决方案是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "答案为 B（否）。自定义提示只能控制回复的措辞与格式，本身不会基于代理配置的知识源，也不受生成式回答节点所强制执行的连接器安全控制约束。删除生成式回答节点后，该主题就失去了对已配置知识源的接地能力，因此\"继续使用配置的知识源\"和\"遵守连接器安全控制\"两项要求都无法满足，尽管执行摘要格式的要求可以达成。正确做法是保留生成式回答节点，并在该特定主题内对其应用自定义提示，使格式要求仅作用于该主题。"
  }
 },
 {
  "id": 26,
  "topic": 2,
  "qnum": 25,
  "isCaseStudy": true,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You need to determine how the agent in Copilot Studio should integrate with two different systems in the Blue Yonder environment, based on their\ncharacteristics and the tools available.\nWhich integration mechanism should you use for each system? To answer, move the appropriate integrations to the correct system or data\nsources. You may use each integration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view\ncontent.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "The Internal Reservation system is a proprietary in-house database with no prebuilt Power Platform connector, so the agent needs a Custom connector — it wraps the internal API definition, security scheme and connection references so the action can be reused, governed by DLP policies and shipped in a solution. The Flight Status and Weather Service is an external REST API secured with an API key, and a lightweight HTTP request node calls it directly from the agent without the overhead of authoring and maintaining a connector. A Dataverse connector is wrong because neither system stores its data in Dataverse, and Generative AI knowledge is wrong because both systems require live transactional/lookup calls rather than grounding over documents.",
   "scenario": "Background -\nBlue Yonder Airlines is a global carrier headquartered in Los Angeles, California, operating domestic and international flights. The company serves\nmillions of passengers annually through its website, mobile app, and call centers. To improve customer service efficiency and reduce call center\nvolume, Blue Yonder is deploying an AI agent in Microsoft Copilot Studio.\nThe agent will handle customer inquiries across multiple channels – web chat, mobile app, and Microsoft Teams (for internal support staff). It will\nanswer questions, retrieve data from enterprise systems, and escalate to human agents when needed.\nThe project is led by a cross-function team:\nProduct manager: Defines requirements and success metrics.\nLead agent author: Designs topics, intents, and generative behavior.\nFlow designers: Build agent flows and integrations.\nIT/security and compliance: Oversees identity, data protection, and Responsible AI (RAI) compliance.\nCurrent environment -\nChannels -\nPublic website: Embedded web chat\nMobile app: In-app chatbot -\nMicrosoft Teams: Internal support agent access\nIdentity and access -\nCustomers: Anonymous access for general inquiries (e.g., flight status, baggage policy).\nAuthentication is required for personal data access (e.g., bookings, loyalty points).\nInternal staff: Authenticate via Microsoft Entra ID.\nData sources -\nReservation and Ticketing System (internal): REST API, no prebuilt connector with custom enterprise database.\nFlight Status and Weather APIs (external): REST APIs with API keys.\nCustomer Support Knowledge Base: SharePoint library with PDFs and policy documents.\nLoyalty Program Data: Stored in Dynamics 365 and Dataverse.\nTravel Advisory Content: Uses REST API with partner services.\nIntegration mechanisms -\nCustom connectors must be used for internal APIs that lack prebuilt connectors.\nHTTP request nodes may be used for lightweight external APIs.\nKnowledge sources must be used for unstructured content.\nAgent flows must be used to encapsulate reusable logic (e.g., rebooking).\nBusiness requirements -\nOmnichannel support -\nDeploy the agent across web, mobile, and Teams with a consistent user experience. The Teams deployment must also support internal staff.\nSelf-service capabilities -\nThe agent must handle common inquiries such as:\nFlight status -\nBooking and rebooking -\nLoyalty program questions -\nTravel policies and baggage rules\nHuman escalation -\nIf the agent cannot resolve an issue or the user requests help, it must:\nEscalate to a human agent.\nTransfer the conversation transcript and relevant context.\nRedact any sensitive personal data before escalation.\nKnowledge integration -\nThe agent must use scalable methods for knowledge integration and must not rely on manually authored Q&A topics for each document.\nPerformance metrics -\nFirst-contact resolution: +25%\nTier-1 call deflection: ≥20%\nResponse time: 90% of queries answered within 30 seconds\nAccuracy: ≥95% for known FAQs -\nCSAT: ≥85% for AI-handled interactions\nTechnical requirements -\nPlatform constraints -\nNo custom code is permitted; only Copilot Studio's built-in tools may be used.\nAll backend logic must be implemented using agent flows.\nMarkdown must be used for formatting (e.g., bold, bullet points); HTML is not supported.\nAuthentication -\nSign-in is required for personal data access.\nAnonymous access is allowed for general inquiries.\nUser identity must be used for data access; shared or builder credentials must not be used.\nCompliance and security -\nPower Platform DLP policies must be enforced to block unauthorized data flows.\nResponsible AI content moderation filters must be enabled.\nPrompt modifications must be added to enforce tone, disclaimers, and refusal behavior.\nDisclaimers must be applied consistently across all generative responses. Manual edits to individual topics must be avoided.\nMonitoring and maintenance -\nAll conversations and actions must be logged for auditing.\nWeekly reviews of transcripts and metrics must be conducted.\nIssues and constraints -\nAPI rate limits: External APIs (e.g., flight status) have usage limits. Agent flows must handle retries and caching to avoid exceeding quotas.\nKnowledge base limits: Copilot Studio has limits on the number and size of indexed documents. Large files must be split or summarized.\nGenerative answer risks: Generative responses must be constrained to avoid policy violations. Prompt modifications and filters must be used to\nenforce tone, safety, and compliance.\nUser input variability: Users phrase questions in diverse ways. Topics must include varied trigger phrases and fallback handling.\nAuthentication UX: The agent must clearly explain when sign-in is required and handle transitions smoothly across channels.\nProblem statement -\nBlue Yonder Airlines must deploy a secure, scalable, and policy-compliant AI agent using Microsoft Copilot Studio. The agent must deliver\naccurate, helpful, and safe responses across multiple channels, integrate with enterprise systems, and support both anonymous and\nauthenticated users. It must adhere to strict data protection and Responsible AI standards while improving customer service efficiency and\nsatisfaction."
  },
  "zh": {
   "stem": "您需要根据 Blue Yonder 环境中两个不同系统的特性以及可用工具，确定 Copilot Studio 中的代理应如何与这些系统集成。\n您将为每个系统选择哪种集成机制？要回答，请将适当的集成方式移动到正确的系统或数据源。每种集成方式可以使用一次、多次\n或不使用。您可能需要移动分隔条或滚动以查看内容。\n注意：每个正确选择得一分。\n建议答案：",
   "options": {},
   "explanation": "Internal Reservation 是企业自有的专用数据库，没有现成的预构建连接器，因此需要 Custom connector：自定义连接器封装内部 API 定义与身份验证方式，可复用、可被 DLP 策略治理并随解决方案一起部署。Flight Status and Weather Service 是使用 API 密钥的外部 REST API，用轻量的 HTTP request 节点即可直接调用，无需额外开发和维护连接器。Dataverse connector 不正确，因为两个系统的数据都不存放在 Dataverse 中；Generative AI knowledge 也不正确，因为这两个系统需要的是实时调用取数，而不是基于文档的接地问答。",
   "scenario": "背景 -\nBlue Yonder Airlines 是一家总部位于加利福尼亚州洛杉矶的全球航空公司，运营国内和国际航班。该公司通过其网站、移动应用程序\n和呼叫中心每年为数百万乘客提供服务。为了提高客户服务效率并减少呼叫中心的工作量，Blue Yonder 正在 Microsoft Copilot Studio\n中部署一个 AI 代理。\n该代理将通过多个渠道处理客户查询——网页聊天、移动应用程序和 Microsoft Teams（用于内部支持员工）。它将回答问题、从企业\n系统中检索数据，并在需要时升级到人工代理。\n该项目由一个跨职能团队领导：\n产品经理：定义需求和成功指标。\n首席代理作者：设计主题、意图和生成行为。\n流程设计师：构建代理流程和集成。\nIT/安全与合规：监督身份、数据保护和负责任的 AI（RAI）合规性。\n现有环境 -\n渠道 -\n公共网站：嵌入式网页聊天\n移动应用程序：应用内聊天机器人 -\nMicrosoft Teams：内部支持代理访问\n身份和访问 -\n客户：一般查询（例如航班状态、行李政策）允许匿名访问。\n访问个人数据（例如预订、忠诚度积分）需要身份验证。\n内部员工：通过 Microsoft Entra ID 进行身份验证。\n数据源 -\n预订和票务系统（内部）：REST API，无预构建连接器，使用自定义企业数据库。\n航班状态和天气 API（外部）：REST API，使用 API 密钥。\n客户支持知识库：SharePoint 库，包含 PDF 和政策文件。\n忠诚度计划数据：存储在 Dynamics 365 和 Dataverse 中。\n旅行建议内容：使用 REST API 与合作伙伴服务集成。\n集成机制 -\n对于缺乏预构建连接器的内部 API，必须使用自定义连接器。\n轻量级外部 API 可使用 HTTP 请求节点。\n知识源必须用于非结构化内容。\n代理流程必须用于封装可重用逻辑（例如重新预订）。\n业务需求 -\n全渠道支持 -\n在网页、移动端和 Teams 上部署代理，提供一致的用户体验。Teams 部署还必须支持内部员工。\n自助服务能力 -\n代理必须处理常见查询，例如：\n航班状态 -\n预订和重新预订 -\n忠诚度计划问题 -\n旅行政策和行李规则\n人工升级 -\n如果代理无法解决问题或用户请求帮助，它必须：\n升级到人工代理。\n传递对话记录和相关上下文。\n在升级之前编辑任何敏感个人数据。\n知识集成 -\n代理必须使用可扩展的方法进行知识集成，不能依赖于为每个文档手动编写的问答主题。\n性能指标 -\n首次接触解决率：+25%\n一级呼叫分流：≥20%\n响应时间：90%的查询在30秒内回答\n准确性：已知常见问题的准确率≥95% -\n客户满意度：AI 处理的交互满意度≥85%\n技术需求 -\n平台限制 -\n不允许使用自定义代码；只能使用 Copilot Studio 的内置工具。\n所有后端逻辑必须使用代理流程实现。\n必须使用 Markdown 进行格式化（例如加粗、项目符号）；不支持 HTML。\n身份验证 -\n访问个人数据需要登录。\n一般查询允许匿名访问。\n必须使用用户身份进行数据访问；不得使用共享或构建者凭据。\n合规性和安全性 -\n必须强制执行 Power Platform DLP 策略以阻止未经授权的数据流。\n必须启用负责任的 AI 内容审核过滤器。\n必须添加提示修改以强制执行语气、免责声明和拒绝行为。\n必须在所有生成响应中一致地应用免责声明。不得对单个主题进行手动编辑。\n监控和维护 -\n所有对话和操作必须记录以供审计。\n必须每周审查对话记录和指标。\n问题和限制 -\nAPI 速率限制：外部 API（例如航班状态）有使用限制。代理流程必须处理重试和缓存以避免超出配额。\n知识库限制：Copilot Studio 对索引文档的数量和大小有限制。大文件必须拆分或摘要化。\n生成回答风险：生成的响应必须受到约束以避免违反政策。必须使用提示修改和过滤器以强制执行语气、安全性和合规性。\n用户输入多样性：用户以多种方式表达问题。主题必须包括多样化的触发短语和回退处理。\n身份验证用户体验：代理必须清楚说明何时需要登录，并在各渠道之间平稳处理过渡。\n问题陈述 -\nBlue Yonder Airlines 必须使用 Microsoft Copilot Studio 部署一个安全、可扩展且符合政策的 AI 代理。该代理必须在多个渠道提供准\n确、有帮助且安全的响应，与企业系统集成，并支持匿名和认证用户。它必须遵守严格的数据保护和负责任的 AI 标准，同时提高客\n户服务效率和满意度。"
  },
  "sources_en": [
   "HTTP request",
   "Custom connector",
   "Dataverse connector",
   "Generative AI knowledge"
  ],
  "sources_zh": [
   "HTTP 请求",
   "自定义连接器",
   "Dataverse 连接器",
   "生成式 AI 知识"
  ],
  "targets": [
   {
    "label_en": "Internal Reservation",
    "label_zh": "Internal Reservation（内部预订系统）",
    "correct_en": "Custom connector",
    "correct_zh": "自定义连接器"
   },
   {
    "label_en": "Flight Status and Weather Service",
    "label_zh": "Flight Status and Weather Service（航班状态与天气服务）",
    "correct_en": "HTTP request",
    "correct_zh": "HTTP 请求"
   }
  ]
 },
 {
  "id": 27,
  "topic": 2,
  "qnum": 26,
  "isCaseStudy": true,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You need to determine an appropriate implementation related to the use of agent flows that is based on Blue Vender's design and compliance\nstandards.\nWhich implementation method should you use for each scenario? To answer, move the appropriate implementation methods to the correct\nscenarios. You may use each implementation method once, more than once, or not at all. You may need to move the split bar between panes or\nscroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "When a topic repeats logic that already exists in another flow, the governed pattern is to call that logic once from a single place: \"Use a Go to another topic node.\" redirects the conversation into the existing topic instead of duplicating steps, which is why \"Manually rebuild the logic in the topic.\" is wrong — it creates a second copy that must be maintained and re-certified. A topic that only explains a process in natural language and never runs it is a grounding scenario, so \"Use a generative answers node.\" produces the explanation from the approved knowledge sources with citations. A topic step that triggers a reusable process to update booking details must invoke the agent flow as an action, which is what \"Use a tool node.\" does; \"Prompt the user for manual input.\" only collects a value and never performs the update.",
   "scenario": "Background -\nBlue Yonder Airlines is a global carrier headquartered in Los Angeles, California, operating domestic and international flights. The company serves\nmillions of passengers annually through its website, mobile app, and call centers. To improve customer service efficiency and reduce call center\nvolume, Blue Yonder is deploying an AI agent in Microsoft Copilot Studio.\nThe agent will handle customer inquiries across multiple channels – web chat, mobile app, and Microsoft Teams (for internal support staff). It will\nanswer questions, retrieve data from enterprise systems, and escalate to human agents when needed.\nThe project is led by a cross-function team:\nProduct manager: Defines requirements and success metrics.\nLead agent author: Designs topics, intents, and generative behavior.\nFlow designers: Build agent flows and integrations.\nIT/security and compliance: Oversees identity, data protection, and Responsible AI (RAI) compliance.\nCurrent environment -\nChannels -\nPublic website: Embedded web chat\nMobile app: In-app chatbot -\nMicrosoft Teams: Internal support agent access\nIdentity and access -\nCustomers: Anonymous access for general inquiries (e.g., flight status, baggage policy).\nAuthentication is required for personal data access (e.g., bookings, loyalty points).\nInternal staff: Authenticate via Microsoft Entra ID.\nData sources -\nReservation and Ticketing System (internal): REST API, no prebuilt connector with custom enterprise database.\nFlight Status and Weather APIs (external): REST APIs with API keys.\nCustomer Support Knowledge Base: SharePoint library with PDFs and policy documents.\nLoyalty Program Data: Stored in Dynamics 365 and Dataverse.\nTravel Advisory Content: Uses REST API with partner services.\nIntegration mechanisms -\nCustom connectors must be used for internal APIs that lack prebuilt connectors.\nHTTP request nodes may be used for lightweight external APIs.\nKnowledge sources must be used for unstructured content.\nAgent flows must be used to encapsulate reusable logic (e.g., rebooking).\nBusiness requirements -\nOmnichannel support -\nDeploy the agent across web, mobile, and Teams with a consistent user experience. The Teams deployment must also support internal staff.\nSelf-service capabilities -\nThe agent must handle common inquiries such as:\nFlight status -\nBooking and rebooking -\nLoyalty program questions -\nTravel policies and baggage rules\nHuman escalation -\nIf the agent cannot resolve an issue or the user requests help, it must:\nEscalate to a human agent.\nTransfer the conversation transcript and relevant context.\nRedact any sensitive personal data before escalation.\nKnowledge integration -\nThe agent must use scalable methods for knowledge integration and must not rely on manually authored Q&A topics for each document.\nPerformance metrics -\nFirst-contact resolution: +25%\nTier-1 call deflection: ≥20%\nResponse time: 90% of queries answered within 30 seconds\nAccuracy: ≥95% for known FAQs -\nCSAT: ≥85% for AI-handled interactions\nTechnical requirements -\nPlatform constraints -\nNo custom code is permitted; only Copilot Studio's built-in tools may be used.\nAll backend logic must be implemented using agent flows.\nMarkdown must be used for formatting (e.g., bold, bullet points); HTML is not supported.\nAuthentication -\nSign-in is required for personal data access.\nAnonymous access is allowed for general inquiries.\nUser identity must be used for data access; shared or builder credentials must not be used.\nCompliance and security -\nPower Platform DLP policies must be enforced to block unauthorized data flows.\nResponsible AI content moderation filters must be enabled.\nPrompt modifications must be added to enforce tone, disclaimers, and refusal behavior.\nDisclaimers must be applied consistently across all generative responses. Manual edits to individual topics must be avoided.\nMonitoring and maintenance -\nAll conversations and actions must be logged for auditing.\nWeekly reviews of transcripts and metrics must be conducted.\nIssues and constraints -\nAPI rate limits: External APIs (e.g., flight status) have usage limits. Agent flows must handle retries and caching to avoid exceeding quotas.\nKnowledge base limits: Copilot Studio has limits on the number and size of indexed documents. Large files must be split or summarized.\nGenerative answer risks: Generative responses must be constrained to avoid policy violations. Prompt modifications and filters must be used to\nenforce tone, safety, and compliance.\nUser input variability: Users phrase questions in diverse ways. Topics must include varied trigger phrases and fallback handling.\nAuthentication UX: The agent must clearly explain when sign-in is required and handle transitions smoothly across channels.\nProblem statement -\nBlue Yonder Airlines must deploy a secure, scalable, and policy-compliant AI agent using Microsoft Copilot Studio. The agent must deliver\naccurate, helpful, and safe responses across multiple channels, integrate with enterprise systems, and support both anonymous and\nauthenticated users. It must adhere to strict data protection and Responsible AI standards while improving customer service efficiency and\nsatisfaction."
  },
  "zh": {
   "stem": "您需要根据蓝天航空的设计和合规标准，确定与使用代理流程相关的适当实施方法。\n您应该为每种场景使用哪种实施方法？要回答，请将适当的实施方法移动到正确的场景。您可以对每种实施方法使用一次、多次或\n不使用。您可能需要在窗格之间移动分隔条或滚动以查看内容。\n注意：每个正确的选择都值一分。\n建议答案：",
   "options": {},
   "explanation": "当某个主题重复了另一个流程中已定义的逻辑时，正确做法是复用而不是重建：Use a Go to another topic node 会把对话重定向到已有主题，因此 Manually rebuild the logic in the topic 错误——手工重建会产生需要重复维护和重新审核的副本。只用自然语言解释某个流程、并不真正执行它的主题属于接地问答场景，应使用 Use a generative answers node，由已批准的知识源生成带引用的答案。需要触发可复用流程来更新预订详情的步骤，必须把 agent flow 作为操作调用，即 Use a tool node；Prompt the user for manual input 只收集输入，并不会执行更新。",
   "scenario": "背景 -\nBlue Yonder Airlines 是一家总部位于加利福尼亚州洛杉矶的全球航空公司，运营国内和国际航班。该公司通过其网站、移动应用程序\n和呼叫中心每年为数百万乘客提供服务。为了提高客户服务效率并减少呼叫中心的工作量，Blue Yonder 正在 Microsoft Copilot Studio\n中部署一个 AI 代理。\n该代理将通过多个渠道处理客户查询——网页聊天、移动应用程序和 Microsoft Teams（用于内部支持员工）。它将回答问题、从企业\n系统中检索数据，并在需要时升级到人工代理。\n该项目由一个跨职能团队领导：\n产品经理：定义需求和成功指标。\n首席代理作者：设计主题、意图和生成行为。\n流程设计师：构建代理流程和集成。\nIT/安全与合规：监督身份、数据保护和负责任的 AI（RAI）合规性。\n现有环境 -\n渠道 -\n公共网站：嵌入式网页聊天\n移动应用程序：应用内聊天机器人 -\nMicrosoft Teams：内部支持代理访问\n身份和访问 -\n客户：一般查询（例如航班状态、行李政策）允许匿名访问。\n访问个人数据（例如预订、忠诚度积分）需要身份验证。\n内部员工：通过 Microsoft Entra ID 进行身份验证。\n数据源 -\n预订和票务系统（内部）：REST API，无预构建连接器，使用自定义企业数据库。\n航班状态和天气 API（外部）：REST API，使用 API 密钥。\n客户支持知识库：SharePoint 库，包含 PDF 和政策文件。\n忠诚度计划数据：存储在 Dynamics 365 和 Dataverse 中。\n旅行建议内容：使用 REST API 与合作伙伴服务集成。\n集成机制 -\n对于缺乏预构建连接器的内部 API，必须使用自定义连接器。\n轻量级外部 API 可使用 HTTP 请求节点。\n知识源必须用于非结构化内容。\n代理流程必须用于封装可重用逻辑（例如重新预订）。\n业务需求 -\n全渠道支持 -\n在网页、移动端和 Teams 上部署代理，提供一致的用户体验。Teams 部署还必须支持内部员工。\n自助服务能力 -\n代理必须处理常见查询，例如：\n航班状态 -\n预订和重新预订 -\n忠诚度计划问题 -\n旅行政策和行李规则\n人工升级 -\n如果代理无法解决问题或用户请求帮助，它必须：\n升级到人工代理。\n传递对话记录和相关上下文。\n在升级之前编辑任何敏感个人数据。\n知识集成 -\n代理必须使用可扩展的方法进行知识集成，不能依赖于为每个文档手动编写的问答主题。\n性能指标 -\n首次接触解决率：+25%\n一级呼叫分流：≥20%\n响应时间：90%的查询在30秒内回答\n准确性：已知常见问题的准确率≥95% -\n客户满意度：AI 处理的交互满意度≥85%\n技术需求 -\n平台限制 -\n不允许使用自定义代码；只能使用 Copilot Studio 的内置工具。\n所有后端逻辑必须使用代理流程实现。\n必须使用 Markdown 进行格式化（例如加粗、项目符号）；不支持 HTML。\n身份验证 -\n访问个人数据需要登录。\n一般查询允许匿名访问。\n必须使用用户身份进行数据访问；不得使用共享或构建者凭据。\n合规性和安全性 -\n必须强制执行 Power Platform DLP 策略以阻止未经授权的数据流。\n必须启用负责任的 AI 内容审核过滤器。\n必须添加提示修改以强制执行语气、免责声明和拒绝行为。\n必须在所有生成响应中一致地应用免责声明。不得对单个主题进行手动编辑。\n监控和维护 -\n所有对话和操作必须记录以供审计。\n必须每周审查对话记录和指标。\n问题和限制 -\nAPI 速率限制：外部 API（例如航班状态）有使用限制。代理流程必须处理重试和缓存以避免超出配额。\n知识库限制：Copilot Studio 对索引文档的数量和大小有限制。大文件必须拆分或摘要化。\n生成回答风险：生成的响应必须受到约束以避免违反政策。必须使用提示修改和过滤器以强制执行语气、安全性和合规性。\n用户输入多样性：用户以多种方式表达问题。主题必须包括多样化的触发短语和回退处理。\n身份验证用户体验：代理必须清楚说明何时需要登录，并在各渠道之间平稳处理过渡。\n问题陈述 -\nBlue Yonder Airlines 必须使用 Microsoft Copilot Studio 部署一个安全、可扩展且符合政策的 AI 代理。该代理必须在多个渠道提供准\n确、有帮助且安全的响应，与企业系统集成，并支持匿名和认证用户。它必须遵守严格的数据保护和负责任的 AI 标准，同时提高客\n户服务效率和满意度。"
  },
  "sources_en": [
   "Use a tool node.",
   "Use a generative answers node.",
   "Use a Go to another topic node.",
   "Prompt the user for manual input.",
   "Manually rebuild the logic in the topic."
  ],
  "sources_zh": [
   "使用工具节点。",
   "使用生成式答案节点。",
   "使用“转到另一主题”节点。",
   "提示用户手动输入。",
   "在主题中手动重建该逻辑。"
  ],
  "targets": [
   {
    "label_en": "A topic includes a series of steps that replicate logic already defined in another flow.",
    "label_zh": "某个主题包含一系列步骤，这些步骤重复了另一个流程中已定义的逻辑。",
    "correct_en": "Use a Go to another topic node.",
    "correct_zh": "使用“转到另一主题”节点。"
   },
   {
    "label_en": "A topic provides a natural language explanation of a process but does not execute it.",
    "label_zh": "某个主题以自然语言解释某个流程，但并不执行该流程。",
    "correct_en": "Use a generative answers node.",
    "correct_zh": "使用生成式答案节点。"
   },
   {
    "label_en": "A topic includes a step that triggers a reusable process to update booking details.",
    "label_zh": "某个主题包含一个步骤，用于触发可复用的流程以更新预订详情。",
    "correct_en": "Use a tool node.",
    "correct_zh": "使用工具节点。"
   }
  ]
 },
 {
  "id": 28,
  "topic": 2,
  "qnum": 27,
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You need to enable Operations Concierge to delegate shipment tracking inquiries according to Fabrikam Inc.'s defined architecture and technical\nrequirements.\nWhich integration approach should you use?",
   "options": {
    "A": "Configure the partner capability as an enterprise knowledge source with indexed retrieval enabled.",
    "B": "Configure the partner capability as an MCP tool and invoke it as a transactional operation.",
    "C": "Configure the partner capability as an A2A integration and supply its endpoint information.",
    "D": "Configure the primary agent to handle shipment tracking through generative responses after publishing."
   },
   "explanation": "The answer is C. Fabrikam's partner shipment-tracking capability is exposed only through a standardized agent-to-agent endpoint, which is exactly what an A2A (agent-to-agent) integration consumes: you register the partner agent in Copilot Studio and supply its endpoint information so Operations Concierge can delegate the inquiry to it at runtime. A is wrong because an enterprise knowledge source with indexed retrieval only searches static content - it cannot delegate a live tracking request to another agent. B is wrong because the partner exposes an A2A endpoint, not an MCP server with callable tools, so it cannot be registered as an MCP transactional tool. D is wrong because generative responses would have the primary agent invent an answer instead of delegating to the partner agent, which breaks the required architecture and the accuracy of the tracking data.",
   "scenario": "Background -\nFabrikam Inc. is a Canada-based manufacturer with a growing service organization that supports field technicians and internal operations teams.\nFabrikam Inc. plans to launch a new internal agent solution named Operations Concierge to reduce time spent searching policy content, retrieving\noperational metrics, and executing routine transactions.\nThe agent will be used by three groups:\nService coordinators who triage incoming service requests\nField technicians who need guided procedures and parts availability\nOperations managers who monitor KPIs and exceptions\nThe agent solution must work in real-world operational conditions. Users often ask questions mid-call with a customer or while coordinating parts\nshipments. The agents require quick, reliable outcomes. As a result, Fabrikam Inc. requires the solution to:\nProvide grounded answers with traceability when it provides guidance.\nRetrieve real-time metrics when users ask for operational status.\nExecute authenticated updates when users initiate a flow (such as creating a parts request).\nFabrikam Inc. also expects the solution to be maintained by multiple makers and developers across the year. The company has experienced\nduplicated logic and inconsistent behavior across different agents. This project emphasizes reuse, governance, and maintainability across teams.\nCurrent environment -\nFabrikam Inc. runs three Microsoft Power Platform environments for agent development and release: Dev, Test, and Prod.\nThe team plans to build the agent and validate it in Dev and Test, then promote to Prod by using a controlled release process that supports\nrepeatable deployments.\nFabrikam Inc. already has two assets the team wants to reuse:\nA partially completed Copilot Studio agent named Service Desk Agent, used by IT to create internal tickets and route requests\nA Microsoft Foundry agent created by a central AI team that performs specialized summarization and classification for long-form text (for\nexample, summarizing call transcripts into an incident narrative)\nFabrikam Inc. also has operational and knowledge data sources:\nA curated policy library (internal SOPs, service warranty rules, escalation criteria, and standard operating procedures)\nA set of indexed documents and procedures in an Azure AI Search service that supports vector search for the policy library\nA Microsoft Fabric workspace that includes a semantic model used by operations leadership for reporting\nBusiness requirements -\nFabrikam Inc. requires Operations Concierge to meet the following business requirements:\nTraceability requirement: When the agent provides policy guidance or procedural recommendations, users must be able to see where the answer\ncame from.\nMetrics requirement: When users ask about service performance (backlog, SLA risk, parts shortages, dispatch delays), the solution must return\nup-to-date metrics in a structured format that operations managers can use in weekly reviews.\nTransaction requirement: The solution must support authenticated updates initiated during conversations, including creating a parts request and\nupdating a service case status.\nIn addition, Fabrikam Inc. wants to avoid duplicating common assets across agents:\nThe team must reuse the same set of escalation topics, MCP tool definitions, and a standard safety disclaimer across three different agents.\nOnly the platform engineering group as allowed to edit shared assets. However, all agent authors must be able to use them.\nTechnical requirements -\nThe Fabrikam Inc. solution architecture uses a multi-agent approach so that specialist responsibilities are isolated and can evolve independently.\nThe Operations Concierge (primary agent) must coordinate the following specialist capabilities:\nPolicy and procedure Q&A: Use an enterprise knowledge source that supports indexed retrieval across the curated policy library and service\nprocedures.\nOperational metrics: Delegate metric queries to a Fabric Data Agent that reads governed business data through the Fabric semantic model.\nAuthenticated updates: Use tools exposed by an existing internal Model Context Protocol (MCP) server that provides transactional operations for\nthe service organization.\nSpecialized processing: Delegate summarization and classification requests to an existing Microsoft Foundry agent.\nFabrikam Inc. will onboard two MCP servers as tools:\nPartsOps MCP server: exposes tools for parts availability checks and parts request creation. The server requires per-user authentication because\nactions must be traceable to the requesting user.\nWarrantyRules MCP server: exposes a read-only tool for validating warranty coverage. The server uses an API key shared by the agent team.\nFabrikam Inc. has also defined a collaboration requirement with the existing Service Desk Agent:\nThe primary agent must delegate IT-specific requests to the existing Service Desk Agent rather than reimplement ticket creation logic.\nFinally, Fabrikarn Inc. plans to support a partner integration:\nFor shipment tracking inquiries, Fabrikam Inc. will delegate to a partner-provided agent that is only available through a standardized agent-to-\nagent endpoint.\nIssues and constraints -\nDuring early testing, Fabrikam Inc. found three recurring problems:\nMakers are copying and modifying the same components across agents, resulting in inconsistent disclaimers and duplicated tools.\nUsers can obtain a correct answer, but the response is not consistently traceable to a source when the agent uses knowledge.\nThe primary agent can route some requests, but specialist capabilities are not consistently delegated (for example, some metric questions are\nanswered generatively instead of being routed to the Fabric Data Agent).\nYou are part of the engineering team responsible for correcting the design and configuration to meet the preceding requirements and constraints."
  },
  "zh": {
   "stem": "您需要使“运营礼宾”能够根据 Fabrikam Inc. 定义的架构和技术需求委托运输跟踪查询。\n您应该使用哪种集成方法？",
   "options": {
    "A": "将合作伙伴功能配置为启用索引检索的企业知识源。",
    "B": "将合作伙伴功能配置为 MCP 工具并将其作为事务操作调用。",
    "C": "将合作伙伴功能配置为 A2A 集成并提供其端点信息。",
    "D": "将主代理配置为在发布后通过生成式响应处理运输跟踪。"
   },
   "explanation": "答案为 C。合作伙伴的运输跟踪能力只通过标准化的代理间（agent-to-agent）端点对外提供，这正是 A2A 集成的适用场景：在 Copilot Studio 中注册该合作伙伴代理并提供其端点信息，Operations Concierge 即可在运行时把查询委托给它。A 错误，企业知识源加索引检索只能检索静态内容，无法把实时跟踪请求委托给另一个代理。B 错误，合作伙伴暴露的是 A2A 端点而非带可调用工具的 MCP 服务器，无法注册为 MCP 事务工具。D 错误，生成式响应会让主代理自行编造答案而不是委托给合作伙伴代理，既违反规定的架构，也无法保证跟踪数据的准确性。",
   "scenario": "背景 -\nFabrikam Inc. 是一家总部位于加拿大的制造商，拥有一个不断发展的服务组织，支持现场技术人员和内部运营团队。Fabrikam Inc. 计\n划推出一个名为 Operations Concierge 的新内部代理解决方案，以减少搜索政策内容、检索运营指标和执行常规事务所花费的时间。\n该代理将被以下三组人员使用：\n服务协调员：负责分流传入的服务请求\n现场技术人员：需要指导程序和零件可用性信息\n运营经理：负责监控关键绩效指标 (KPI) 和异常情况\n该代理解决方案必须在真实的运营条件下工作。用户经常在与客户通话中途或协调零件运输时提出问题。代理需要快速、可靠的结\n果。因此，Fabrikam Inc. 要求该解决方案：\n在提供指导时提供可追溯的答案。\n在用户询问运营状态时检索实时指标。\n在用户启动流程（例如创建零件请求）时执行经过身份验证的更新。\nFabrikam Inc. 还希望该解决方案能够由多位开发者和制作者在一年内进行维护。公司曾经历过不同代理之间逻辑重复和行为不一致\n的情况。该项目强调团队之间的复用、治理和可维护性。\n现有环境 -\nFabrikam Inc. 运行三个 Microsoft Power Platform 环境用于代理开发和发布：开发 (Dev)、测试 (Test) 和生产 (Prod)。\n团队计划在开发和测试环境中构建并验证代理，然后通过支持可重复部署的受控发布流程将其推广到生产环境。\nFabrikam Inc. 已经拥有两个团队希望复用的资产：\n一个部分完成的 Copilot Studio 代理，名为 Service Desk Agent，用于 IT 创建内部工单和分配请求\n一个由中央 AI 团队创建的 Microsoft Foundry 代理，用于对长文本进行专业化的摘要和分类（例如，将通话记录摘要为事件叙述）\nFabrikam Inc. 还拥有运营和知识数据源：\n一个策划的政策库（包括内部标准操作程序 (SOP)、服务保修规则、升级标准和标准操作程序）\n一个 Azure AI Search 服务中索引的文档和程序集，支持对政策库的向量搜索\n一个 Microsoft Fabric 工作区，其中包含运营领导用于报告的语义模型\n业务需求 -\nFabrikam Inc. 要求 Operations Concierge 满足以下业务需求：\n可追溯性需求：当代理提供政策指导或程序建议时，用户必须能够看到答案的来源。\n指标需求：当用户询问服务绩效（积压、SLA 风险、零件短缺、调度延迟）时，解决方案必须以结构化格式返回最新指标，供运营\n经理在每周审查中使用。\n事务需求：解决方案必须支持在对话中启动的经过身份验证的更新，包括创建零件请求和更新服务案例状态。\n此外，Fabrikam Inc. 希望避免在代理之间重复常见资产：\n团队必须在三个不同的代理中复用相同的升级主题、MCP 工具定义和标准安全免责声明。\n只有平台工程组可以编辑共享资产。然而，所有代理作者必须能够使用它们。\n技术需求 -\nFabrikam Inc. 的解决方案架构使用多代理方法，以便专业职责可以独立隔离和演进。\nOperations Concierge（主代理）必须协调以下专业能力：\n政策和程序问答：使用支持对策划政策库和服务程序进行索引检索的企业知识源。\n运营指标：将指标查询委派给一个 Fabric 数据代理，该代理通过 Fabric 语义模型读取受治理的业务数据。\n经过身份验证的更新：使用现有内部模型上下文协议 (MCP) 服务器提供的工具，为服务组织提供事务操作。\n专业化处理：将摘要和分类请求委派给现有的 Microsoft Foundry 代理。\nFabrikam Inc. 将上线两个 MCP 服务器作为工具：\nPartsOps MCP 服务器：提供零件可用性检查和零件请求创建的工具。该服务器需要每用户身份验证，因为操作必须可追溯到请求用\n户。\nWarrantyRules MCP 服务器：提供用于验证保修覆盖范围的只读工具。该服务器使用代理团队共享的 API 密钥。\nFabrikam Inc. 还定义了与现有 Service Desk Agent 的协作需求：\n主代理必须将 IT 特定请求委派给现有的 Service Desk Agent，而不是重新实现工单创建逻辑。\n最后，Fabrikam Inc. 计划支持合作伙伴集成：\n对于运输跟踪查询，Fabrikam Inc. 将委派给仅通过标准化代理到代理端点可用的合作伙伴提供的代理。\n问题和限制 -\n在早期测试中，Fabrikam Inc. 发现了三个反复出现的问题：\n制作者在代理之间复制和修改相同的组件，导致免责声明不一致和工具重复。\n当代理使用知识时，用户可以获得正确答案，但响应无法始终追溯到来源。\n主代理可以路由某些请求，但专业能力未被一致地委派（例如，某些指标问题是通过生成式回答的，而不是路由到 Fabric 数据代\n理）。\n您是负责根据上述需求和限制纠正设计和配置的工程团队成员。"
  }
 },
 {
  "id": 29,
  "topic": 2,
  "qnum": 28,
  "isCaseStudy": true,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You need to integrate Fabrikam Inc.'s existing Foundry agent so Operations Concierge can delegate summarization requests.\nWhich action should you perform for each requirement? To answer, move the appropriate actions to the correct requirements. You may use each\naction once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "To let Operations Concierge hand summarization work to an existing Foundry agent, you register that agent inside Copilot Studio: \"Add an external agent of type Microsoft Foundry.\" creates the multi-agent delegation target so the main agent can call it. Pointing that external agent at the right instance requires the connection details, so \"Enter the Foundry project endpoint URL to create the connection.\" is what makes it reference the correct Foundry project and agent. \"Publish the Copilot Studio agent to enable external calls.\" is backwards — publishing exposes the Copilot Studio agent to its own channels and does not let it consume a Foundry agent. \"Add the Foundry output as an indexed knowledge source.\" would only add static content for grounding, which cannot delegate a summarization request to another agent.",
   "scenario": "Background -\nFabrikam Inc. is a Canada-based manufacturer with a growing service organization that supports field technicians and internal operations teams.\nFabrikam Inc. plans to launch a new internal agent solution named Operations Concierge to reduce time spent searching policy content, retrieving\noperational metrics, and executing routine transactions.\nThe agent will be used by three groups:\nService coordinators who triage incoming service requests\nField technicians who need guided procedures and parts availability\nOperations managers who monitor KPIs and exceptions\nThe agent solution must work in real-world operational conditions. Users often ask questions mid-call with a customer or while coordinating parts\nshipments. The agents require quick, reliable outcomes. As a result, Fabrikam Inc. requires the solution to:\nProvide grounded answers with traceability when it provides guidance.\nRetrieve real-time metrics when users ask for operational status.\nExecute authenticated updates when users initiate a flow (such as creating a parts request).\nFabrikam Inc. also expects the solution to be maintained by multiple makers and developers across the year. The company has experienced\nduplicated logic and inconsistent behavior across different agents. This project emphasizes reuse, governance, and maintainability across teams.\nCurrent environment -\nFabrikam Inc. runs three Microsoft Power Platform environments for agent development and release: Dev, Test, and Prod.\nThe team plans to build the agent and validate it in Dev and Test, then promote to Prod by using a controlled release process that supports\nrepeatable deployments.\nFabrikam Inc. already has two assets the team wants to reuse:\nA partially completed Copilot Studio agent named Service Desk Agent, used by IT to create internal tickets and route requests\nA Microsoft Foundry agent created by a central AI team that performs specialized summarization and classification for long-form text (for\nexample, summarizing call transcripts into an incident narrative)\nFabrikam Inc. also has operational and knowledge data sources:\nA curated policy library (internal SOPs, service warranty rules, escalation criteria, and standard operating procedures)\nA set of indexed documents and procedures in an Azure AI Search service that supports vector search for the policy library\nA Microsoft Fabric workspace that includes a semantic model used by operations leadership for reporting\nBusiness requirements -\nFabrikam Inc. requires Operations Concierge to meet the following business requirements:\nTraceability requirement: When the agent provides policy guidance or procedural recommendations, users must be able to see where the answer\ncame from.\nMetrics requirement: When users ask about service performance (backlog, SLA risk, parts shortages, dispatch delays), the solution must return\nup-to-date metrics in a structured format that operations managers can use in weekly reviews.\nTransaction requirement: The solution must support authenticated updates initiated during conversations, including creating a parts request and\nupdating a service case status.\nIn addition, Fabrikam Inc. wants to avoid duplicating common assets across agents:\nThe team must reuse the same set of escalation topics, MCP tool definitions, and a standard safety disclaimer across three different agents.\nOnly the platform engineering group as allowed to edit shared assets. However, all agent authors must be able to use them.\nTechnical requirements -\nThe Fabrikam Inc. solution architecture uses a multi-agent approach so that specialist responsibilities are isolated and can evolve independently.\nThe Operations Concierge (primary agent) must coordinate the following specialist capabilities:\nPolicy and procedure Q&A: Use an enterprise knowledge source that supports indexed retrieval across the curated policy library and service\nprocedures.\nOperational metrics: Delegate metric queries to a Fabric Data Agent that reads governed business data through the Fabric semantic model.\nAuthenticated updates: Use tools exposed by an existing internal Model Context Protocol (MCP) server that provides transactional operations for\nthe service organization.\nSpecialized processing: Delegate summarization and classification requests to an existing Microsoft Foundry agent.\nFabrikam Inc. will onboard two MCP servers as tools:\nPartsOps MCP server: exposes tools for parts availability checks and parts request creation. The server requires per-user authentication because\nactions must be traceable to the requesting user.\nWarrantyRules MCP server: exposes a read-only tool for validating warranty coverage. The server uses an API key shared by the agent team.\nFabrikam Inc. has also defined a collaboration requirement with the existing Service Desk Agent:\nThe primary agent must delegate IT-specific requests to the existing Service Desk Agent rather than reimplement ticket creation logic.\nFinally, Fabrikarn Inc. plans to support a partner integration:\nFor shipment tracking inquiries, Fabrikam Inc. will delegate to a partner-provided agent that is only available through a standardized agent-to-\nagent endpoint.\nIssues and constraints -\nDuring early testing, Fabrikam Inc. found three recurring problems:\nMakers are copying and modifying the same components across agents, resulting in inconsistent disclaimers and duplicated tools.\nUsers can obtain a correct answer, but the response is not consistently traceable to a source when the agent uses knowledge.\nThe primary agent can route some requests, but specialist capabilities are not consistently delegated (for example, some metric questions are\nanswered generatively instead of being routed to the Fabric Data Agent).\nYou are part of the engineering team responsible for correcting the design and configuration to meet the preceding requirements and constraints."
  },
  "zh": {
   "stem": "您需要集成 Fabrikam Inc. 的现有 Foundry 代理，以便 Operations Concierge 可以委派摘要请求。\n您应该为每个需求执行哪些操作？要回答，请将适当的操作移动到正确的需求中。您可以使用每个操作一次、多次或不使用。您可\n能需要在窗格之间移动分隔条或滚动以查看内容。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "要让 Operations Concierge 把摘要请求委派给现有的 Foundry 代理，需要在 Copilot Studio 中注册该代理：Add an external agent of type Microsoft Foundry 创建了可供主代理调用的外部代理（多代理委派目标）。而要让这个外部代理指向正确的 Foundry 项目和代理，必须填写连接信息，即 Enter the Foundry project endpoint URL to create the connection。Publish the Copilot Studio agent to enable external calls 方向相反，发布只是把 Copilot Studio 代理暴露到其自身渠道，并不能让它调用 Foundry 代理。Add the Foundry output as an indexed knowledge source 只是把静态内容作为知识源接地，无法实现代理间的功能委派。",
   "scenario": "背景 -\nFabrikam Inc. 是一家总部位于加拿大的制造商，拥有一个不断发展的服务组织，支持现场技术人员和内部运营团队。Fabrikam Inc. 计\n划推出一个名为 Operations Concierge 的新内部代理解决方案，以减少搜索政策内容、检索运营指标和执行常规事务所花费的时间。\n该代理将被以下三组人员使用：\n服务协调员：负责分流传入的服务请求\n现场技术人员：需要指导程序和零件可用性信息\n运营经理：负责监控关键绩效指标 (KPI) 和异常情况\n该代理解决方案必须在真实的运营条件下工作。用户经常在与客户通话中途或协调零件运输时提出问题。代理需要快速、可靠的结\n果。因此，Fabrikam Inc. 要求该解决方案：\n在提供指导时提供可追溯的答案。\n在用户询问运营状态时检索实时指标。\n在用户启动流程（例如创建零件请求）时执行经过身份验证的更新。\nFabrikam Inc. 还希望该解决方案能够由多位开发者和制作者在一年内进行维护。公司曾经历过不同代理之间逻辑重复和行为不一致\n的情况。该项目强调团队之间的复用、治理和可维护性。\n现有环境 -\nFabrikam Inc. 运行三个 Microsoft Power Platform 环境用于代理开发和发布：开发 (Dev)、测试 (Test) 和生产 (Prod)。\n团队计划在开发和测试环境中构建并验证代理，然后通过支持可重复部署的受控发布流程将其推广到生产环境。\nFabrikam Inc. 已经拥有两个团队希望复用的资产：\n一个部分完成的 Copilot Studio 代理，名为 Service Desk Agent，用于 IT 创建内部工单和分配请求\n一个由中央 AI 团队创建的 Microsoft Foundry 代理，用于对长文本进行专业化的摘要和分类（例如，将通话记录摘要为事件叙述）\nFabrikam Inc. 还拥有运营和知识数据源：\n一个策划的政策库（包括内部标准操作程序 (SOP)、服务保修规则、升级标准和标准操作程序）\n一个 Azure AI Search 服务中索引的文档和程序集，支持对政策库的向量搜索\n一个 Microsoft Fabric 工作区，其中包含运营领导用于报告的语义模型\n业务需求 -\nFabrikam Inc. 要求 Operations Concierge 满足以下业务需求：\n可追溯性需求：当代理提供政策指导或程序建议时，用户必须能够看到答案的来源。\n指标需求：当用户询问服务绩效（积压、SLA 风险、零件短缺、调度延迟）时，解决方案必须以结构化格式返回最新指标，供运营\n经理在每周审查中使用。\n事务需求：解决方案必须支持在对话中启动的经过身份验证的更新，包括创建零件请求和更新服务案例状态。\n此外，Fabrikam Inc. 希望避免在代理之间重复常见资产：\n团队必须在三个不同的代理中复用相同的升级主题、MCP 工具定义和标准安全免责声明。\n只有平台工程组可以编辑共享资产。然而，所有代理作者必须能够使用它们。\n技术需求 -\nFabrikam Inc. 的解决方案架构使用多代理方法，以便专业职责可以独立隔离和演进。\nOperations Concierge（主代理）必须协调以下专业能力：\n政策和程序问答：使用支持对策划政策库和服务程序进行索引检索的企业知识源。\n运营指标：将指标查询委派给一个 Fabric 数据代理，该代理通过 Fabric 语义模型读取受治理的业务数据。\n经过身份验证的更新：使用现有内部模型上下文协议 (MCP) 服务器提供的工具，为服务组织提供事务操作。\n专业化处理：将摘要和分类请求委派给现有的 Microsoft Foundry 代理。\nFabrikam Inc. 将上线两个 MCP 服务器作为工具：\nPartsOps MCP 服务器：提供零件可用性检查和零件请求创建的工具。该服务器需要每用户身份验证，因为操作必须可追溯到请求用\n户。\nWarrantyRules MCP 服务器：提供用于验证保修覆盖范围的只读工具。该服务器使用代理团队共享的 API 密钥。\nFabrikam Inc. 还定义了与现有 Service Desk Agent 的协作需求：\n主代理必须将 IT 特定请求委派给现有的 Service Desk Agent，而不是重新实现工单创建逻辑。\n最后，Fabrikam Inc. 计划支持合作伙伴集成：\n对于运输跟踪查询，Fabrikam Inc. 将委派给仅通过标准化代理到代理端点可用的合作伙伴提供的代理。\n问题和限制 -\n在早期测试中，Fabrikam Inc. 发现了三个反复出现的问题：\n制作者在代理之间复制和修改相同的组件，导致免责声明不一致和工具重复。\n当代理使用知识时，用户可以获得正确答案，但响应无法始终追溯到来源。\n主代理可以路由某些请求，但专业能力未被一致地委派（例如，某些指标问题是通过生成式回答的，而不是路由到 Fabric 数据代\n理）。\n您是负责根据上述需求和限制纠正设计和配置的工程团队成员。"
  },
  "sources_en": [
   "Add an external agent of type Microsoft Foundry.",
   "Publish the Copilot Studio agent to enable external calls.",
   "Add the Foundry output as an indexed knowledge source.",
   "Enter the Foundry project endpoint URL to create the connection."
  ],
  "sources_zh": [
   "添加类型为 Microsoft Foundry 的外部代理。",
   "发布 Copilot Studio 代理以启用外部调用。",
   "将 Foundry 输出添加为索引知识源。",
   "输入 Foundry 项目终结点 URL 以创建连接。"
  ],
  "targets": [
   {
    "label_en": "The main agent must be able to call an external Foundry agent.",
    "label_zh": "主代理必须能够调用外部 Foundry 代理。",
    "correct_en": "Add an external agent of type Microsoft Foundry.",
    "correct_zh": "添加类型为 Microsoft Foundry 的外部代理。"
   },
   {
    "label_en": "The external Foundry agent must reference the correct Foundry project and agent.",
    "label_zh": "外部 Foundry 代理必须引用正确的 Foundry 项目和代理。",
    "correct_en": "Enter the Foundry project endpoint URL to create the connection.",
    "correct_zh": "输入 Foundry 项目终结点 URL 以创建连接。"
   }
  ]
 },
 {
  "id": 30,
  "topic": 2,
  "qnum": 29,
  "isCaseStudy": true,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You need to plan how Fabrikam Inc. will reuse shared components across multiple agents while limiting who can change the shared components.\nWhich approach should you use for each requirement? To answer, move the appropriate components to the correct requirements. You may use\neach component once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "A component collection is the Copilot Studio construct for packaging reusable assets (topics, tools, knowledge) so several agents can consume the same components by reference rather than by copy — \"Create a component collection and move shared components into it.\" satisfies the reuse requirement, whereas \"Export the primary agent as a solution and copy assets into other agents.\" produces divergent duplicates that drift apart. Governance over who may change those assets comes from sharing the collection itself with explicit permission levels, so \"Share the component collection with teammates while controlling edit access.\" lets most builders consume but not edit. Finally, scoping a collection so only its owning agent may use it is done with \"Restrict component collection to the primary agent.\" — that is a usage boundary, not an edit permission, which is why the two sharing/restricting answers are not interchangeable.",
   "scenario": "Background -\nFabrikam Inc. is a Canada-based manufacturer with a growing service organization that supports field technicians and internal operations teams.\nFabrikam Inc. plans to launch a new internal agent solution named Operations Concierge to reduce time spent searching policy content, retrieving\noperational metrics, and executing routine transactions.\nThe agent will be used by three groups:\nService coordinators who triage incoming service requests\nField technicians who need guided procedures and parts availability\nOperations managers who monitor KPIs and exceptions\nThe agent solution must work in real-world operational conditions. Users often ask questions mid-call with a customer or while coordinating parts\nshipments. The agents require quick, reliable outcomes. As a result, Fabrikam Inc. requires the solution to:\nProvide grounded answers with traceability when it provides guidance.\nRetrieve real-time metrics when users ask for operational status.\nExecute authenticated updates when users initiate a flow (such as creating a parts request).\nFabrikam Inc. also expects the solution to be maintained by multiple makers and developers across the year. The company has experienced\nduplicated logic and inconsistent behavior across different agents. This project emphasizes reuse, governance, and maintainability across teams.\nCurrent environment -\nFabrikam Inc. runs three Microsoft Power Platform environments for agent development and release: Dev, Test, and Prod.\nThe team plans to build the agent and validate it in Dev and Test, then promote to Prod by using a controlled release process that supports\nrepeatable deployments.\nFabrikam Inc. already has two assets the team wants to reuse:\nA partially completed Copilot Studio agent named Service Desk Agent, used by IT to create internal tickets and route requests\nA Microsoft Foundry agent created by a central AI team that performs specialized summarization and classification for long-form text (for\nexample, summarizing call transcripts into an incident narrative)\nFabrikam Inc. also has operational and knowledge data sources:\nA curated policy library (internal SOPs, service warranty rules, escalation criteria, and standard operating procedures)\nA set of indexed documents and procedures in an Azure AI Search service that supports vector search for the policy library\nA Microsoft Fabric workspace that includes a semantic model used by operations leadership for reporting\nBusiness requirements -\nFabrikam Inc. requires Operations Concierge to meet the following business requirements:\nTraceability requirement: When the agent provides policy guidance or procedural recommendations, users must be able to see where the answer\ncame from.\nMetrics requirement: When users ask about service performance (backlog, SLA risk, parts shortages, dispatch delays), the solution must return\nup-to-date metrics in a structured format that operations managers can use in weekly reviews.\nTransaction requirement: The solution must support authenticated updates initiated during conversations, including creating a parts request and\nupdating a service case status.\nIn addition, Fabrikam Inc. wants to avoid duplicating common assets across agents:\nThe team must reuse the same set of escalation topics, MCP tool definitions, and a standard safety disclaimer across three different agents.\nOnly the platform engineering group as allowed to edit shared assets. However, all agent authors must be able to use them.\nTechnical requirements -\nThe Fabrikam Inc. solution architecture uses a multi-agent approach so that specialist responsibilities are isolated and can evolve independently.\nThe Operations Concierge (primary agent) must coordinate the following specialist capabilities:\nPolicy and procedure Q&A: Use an enterprise knowledge source that supports indexed retrieval across the curated policy library and service\nprocedures.\nOperational metrics: Delegate metric queries to a Fabric Data Agent that reads governed business data through the Fabric semantic model.\nAuthenticated updates: Use tools exposed by an existing internal Model Context Protocol (MCP) server that provides transactional operations for\nthe service organization.\nSpecialized processing: Delegate summarization and classification requests to an existing Microsoft Foundry agent.\nFabrikam Inc. will onboard two MCP servers as tools:\nPartsOps MCP server: exposes tools for parts availability checks and parts request creation. The server requires per-user authentication because\nactions must be traceable to the requesting user.\nWarrantyRules MCP server: exposes a read-only tool for validating warranty coverage. The server uses an API key shared by the agent team.\nFabrikam Inc. has also defined a collaboration requirement with the existing Service Desk Agent:\nThe primary agent must delegate IT-specific requests to the existing Service Desk Agent rather than reimplement ticket creation logic.\nFinally, Fabrikarn Inc. plans to support a partner integration:\nFor shipment tracking inquiries, Fabrikam Inc. will delegate to a partner-provided agent that is only available through a standardized agent-to-\nagent endpoint.\nIssues and constraints -\nDuring early testing, Fabrikam Inc. found three recurring problems:\nMakers are copying and modifying the same components across agents, resulting in inconsistent disclaimers and duplicated tools.\nUsers can obtain a correct answer, but the response is not consistently traceable to a source when the agent uses knowledge.\nThe primary agent can route some requests, but specialist capabilities are not consistently delegated (for example, some metric questions are\nanswered generatively instead of being routed to the Fabric Data Agent).\nYou are part of the engineering team responsible for correcting the design and configuration to meet the preceding requirements and constraints."
  },
  "zh": {
   "stem": "您需要规划 Fabrikam Inc. 如何在多个代理中重用共享组件，同时限制可以更改共享组件的人员。\n您应该为每个需求使用哪种方法？要回答，请将适当的组件移动到正确的需求中。您可以对每个组件使用一次、多次或不使用。您\n可能需要移动分隔条或滚动以查看内容。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "组件集合（component collection）是 Copilot Studio 中打包可复用资产（主题、工具、知识）的机制，多个代理可以按引用而非复制的方式使用同一组组件，因此复用需求应选 Create a component collection and move shared components into it；Export the primary agent as a solution and copy assets into other agents 会产生互相分叉的副本。要控制谁能修改这些共享资产，则通过共享组件集合并设置权限级别实现，即 Share the component collection with teammates while controlling edit access，让大多数构建者只能使用而不能编辑。最后，把共享组件限定为只能由其预期的主代理使用，应选 Restrict component collection to the primary agent——这是使用范围的限制，而不是编辑权限，所以两者不可互换。",
   "scenario": "背景 -\nFabrikam Inc. 是一家总部位于加拿大的制造商，拥有一个不断发展的服务组织，支持现场技术人员和内部运营团队。Fabrikam Inc. 计\n划推出一个名为 Operations Concierge 的新内部代理解决方案，以减少搜索政策内容、检索运营指标和执行常规事务所花费的时间。\n该代理将被以下三组人员使用：\n服务协调员：负责分流传入的服务请求\n现场技术人员：需要指导程序和零件可用性信息\n运营经理：负责监控关键绩效指标 (KPI) 和异常情况\n该代理解决方案必须在真实的运营条件下工作。用户经常在与客户通话中途或协调零件运输时提出问题。代理需要快速、可靠的结\n果。因此，Fabrikam Inc. 要求该解决方案：\n在提供指导时提供可追溯的答案。\n在用户询问运营状态时检索实时指标。\n在用户启动流程（例如创建零件请求）时执行经过身份验证的更新。\nFabrikam Inc. 还希望该解决方案能够由多位开发者和制作者在一年内进行维护。公司曾经历过不同代理之间逻辑重复和行为不一致\n的情况。该项目强调团队之间的复用、治理和可维护性。\n现有环境 -\nFabrikam Inc. 运行三个 Microsoft Power Platform 环境用于代理开发和发布：开发 (Dev)、测试 (Test) 和生产 (Prod)。\n团队计划在开发和测试环境中构建并验证代理，然后通过支持可重复部署的受控发布流程将其推广到生产环境。\nFabrikam Inc. 已经拥有两个团队希望复用的资产：\n一个部分完成的 Copilot Studio 代理，名为 Service Desk Agent，用于 IT 创建内部工单和分配请求\n一个由中央 AI 团队创建的 Microsoft Foundry 代理，用于对长文本进行专业化的摘要和分类（例如，将通话记录摘要为事件叙述）\nFabrikam Inc. 还拥有运营和知识数据源：\n一个策划的政策库（包括内部标准操作程序 (SOP)、服务保修规则、升级标准和标准操作程序）\n一个 Azure AI Search 服务中索引的文档和程序集，支持对政策库的向量搜索\n一个 Microsoft Fabric 工作区，其中包含运营领导用于报告的语义模型\n业务需求 -\nFabrikam Inc. 要求 Operations Concierge 满足以下业务需求：\n可追溯性需求：当代理提供政策指导或程序建议时，用户必须能够看到答案的来源。\n指标需求：当用户询问服务绩效（积压、SLA 风险、零件短缺、调度延迟）时，解决方案必须以结构化格式返回最新指标，供运营\n经理在每周审查中使用。\n事务需求：解决方案必须支持在对话中启动的经过身份验证的更新，包括创建零件请求和更新服务案例状态。\n此外，Fabrikam Inc. 希望避免在代理之间重复常见资产：\n团队必须在三个不同的代理中复用相同的升级主题、MCP 工具定义和标准安全免责声明。\n只有平台工程组可以编辑共享资产。然而，所有代理作者必须能够使用它们。\n技术需求 -\nFabrikam Inc. 的解决方案架构使用多代理方法，以便专业职责可以独立隔离和演进。\nOperations Concierge（主代理）必须协调以下专业能力：\n政策和程序问答：使用支持对策划政策库和服务程序进行索引检索的企业知识源。\n运营指标：将指标查询委派给一个 Fabric 数据代理，该代理通过 Fabric 语义模型读取受治理的业务数据。\n经过身份验证的更新：使用现有内部模型上下文协议 (MCP) 服务器提供的工具，为服务组织提供事务操作。\n专业化处理：将摘要和分类请求委派给现有的 Microsoft Foundry 代理。\nFabrikam Inc. 将上线两个 MCP 服务器作为工具：\nPartsOps MCP 服务器：提供零件可用性检查和零件请求创建的工具。该服务器需要每用户身份验证，因为操作必须可追溯到请求用\n户。\nWarrantyRules MCP 服务器：提供用于验证保修覆盖范围的只读工具。该服务器使用代理团队共享的 API 密钥。\nFabrikam Inc. 还定义了与现有 Service Desk Agent 的协作需求：\n主代理必须将 IT 特定请求委派给现有的 Service Desk Agent，而不是重新实现工单创建逻辑。\n最后，Fabrikam Inc. 计划支持合作伙伴集成：\n对于运输跟踪查询，Fabrikam Inc. 将委派给仅通过标准化代理到代理端点可用的合作伙伴提供的代理。\n问题和限制 -\n在早期测试中，Fabrikam Inc. 发现了三个反复出现的问题：\n制作者在代理之间复制和修改相同的组件，导致免责声明不一致和工具重复。\n当代理使用知识时，用户可以获得正确答案，但响应无法始终追溯到来源。\n主代理可以路由某些请求，但专业能力未被一致地委派（例如，某些指标问题是通过生成式回答的，而不是路由到 Fabric 数据代\n理）。\n您是负责根据上述需求和限制纠正设计和配置的工程团队成员。"
  },
  "sources_en": [
   "Restrict component collection to the primary agent.",
   "Create a component collection and move shared components into it.",
   "Export the primary agent as a solution and copy assets into other agents.",
   "Share the component collection with teammates while controlling edit access."
  ],
  "sources_zh": [
   "将组件集合限制为仅供主代理使用。",
   "创建组件集合并将共享组件移入其中。",
   "将主代理导出为解决方案，并把资产复制到其他代理中。",
   "与团队成员共享组件集合，同时控制编辑权限。"
  ],
  "targets": [
   {
    "label_en": "Prevent shared assets from being modified by most builders.",
    "label_zh": "防止大多数构建者修改共享资产。",
    "correct_en": "Share the component collection with teammates while controlling edit access.",
    "correct_zh": "与团队成员共享组件集合，同时控制编辑权限。"
   },
   {
    "label_en": "Reuse the same set of components across multiple agents without copying.",
    "label_zh": "在多个代理中复用同一组组件，而无需复制。",
    "correct_en": "Create a component collection and move shared components into it.",
    "correct_zh": "创建组件集合并将共享组件移入其中。"
   },
   {
    "label_en": "Limit a shared set of components so it can be used only by its intended primary agent.",
    "label_zh": "限制共享组件集，使其只能被预期的主代理使用。",
    "correct_en": "Restrict component collection to the primary agent.",
    "correct_zh": "将组件集合限制为仅供主代理使用。"
   }
  ]
 },
 {
  "id": 31,
  "topic": 2,
  "qnum": 30,
  "isCaseStudy": true,
  "type": "multi",
  "correctLetters": [
   "C",
   "E"
  ],
  "en": {
   "stem": "You need to configure Operations Concierge so that prompt-driven summarization behavior aligns with Fabrikam Inc.'s architectural requirements.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Configure Azure AI Search as the grounding source for summarization prompts.",
    "B": "Publish the agent to ensure the selected model is enforced for summarization.",
    "C": "Select a model from the Foundry model catalog in the custom prompt configuration.",
    "D": "Enable citations to control how summarization output is generated.",
    "E": "Create a reusable custom prompt template and apply it where summarization responses are generated."
   },
   "explanation": "The answers are C and E. Fabrikam requires summarization to run on the Microsoft Foundry model and to be reusable across agents, so you select a model from the Foundry model catalog in the custom prompt configuration (C) and create a reusable custom prompt template that you apply wherever summarization responses are generated (E). A is wrong because Azure AI Search is the indexed knowledge source for the policy library and service procedures - grounding is not what selects or governs the summarization model. B is wrong because publishing only deploys the agent; it does not choose or enforce a model. D is wrong because citations improve traceability of grounded answers but do not control how summarization output is produced.",
   "scenario": "Background -\nFabrikam Inc. is a Canada-based manufacturer with a growing service organization that supports field technicians and internal operations teams.\nFabrikam Inc. plans to launch a new internal agent solution named Operations Concierge to reduce time spent searching policy content, retrieving\noperational metrics, and executing routine transactions.\nThe agent will be used by three groups:\nService coordinators who triage incoming service requests\nField technicians who need guided procedures and parts availability\nOperations managers who monitor KPIs and exceptions\nThe agent solution must work in real-world operational conditions. Users often ask questions mid-call with a customer or while coordinating parts\nshipments. The agents require quick, reliable outcomes. As a result, Fabrikam Inc. requires the solution to:\nProvide grounded answers with traceability when it provides guidance.\nRetrieve real-time metrics when users ask for operational status.\nExecute authenticated updates when users initiate a flow (such as creating a parts request).\nFabrikam Inc. also expects the solution to be maintained by multiple makers and developers across the year. The company has experienced\nduplicated logic and inconsistent behavior across different agents. This project emphasizes reuse, governance, and maintainability across teams.\nCurrent environment -\nFabrikam Inc. runs three Microsoft Power Platform environments for agent development and release: Dev, Test, and Prod.\nThe team plans to build the agent and validate it in Dev and Test, then promote to Prod by using a controlled release process that supports\nrepeatable deployments.\nFabrikam Inc. already has two assets the team wants to reuse:\nA partially completed Copilot Studio agent named Service Desk Agent, used by IT to create internal tickets and route requests\nA Microsoft Foundry agent created by a central AI team that performs specialized summarization and classification for long-form text (for\nexample, summarizing call transcripts into an incident narrative)\nFabrikam Inc. also has operational and knowledge data sources:\nA curated policy library (internal SOPs, service warranty rules, escalation criteria, and standard operating procedures)\nA set of indexed documents and procedures in an Azure AI Search service that supports vector search for the policy library\nA Microsoft Fabric workspace that includes a semantic model used by operations leadership for reporting\nBusiness requirements -\nFabrikam Inc. requires Operations Concierge to meet the following business requirements:\nTraceability requirement: When the agent provides policy guidance or procedural recommendations, users must be able to see where the answer\ncame from.\nMetrics requirement: When users ask about service performance (backlog, SLA risk, parts shortages, dispatch delays), the solution must return\nup-to-date metrics in a structured format that operations managers can use in weekly reviews.\nTransaction requirement: The solution must support authenticated updates initiated during conversations, including creating a parts request and\nupdating a service case status.\nIn addition, Fabrikam Inc. wants to avoid duplicating common assets across agents:\nThe team must reuse the same set of escalation topics, MCP tool definitions, and a standard safety disclaimer across three different agents.\nOnly the platform engineering group as allowed to edit shared assets. However, all agent authors must be able to use them.\nTechnical requirements -\nThe Fabrikam Inc. solution architecture uses a multi-agent approach so that specialist responsibilities are isolated and can evolve independently.\nThe Operations Concierge (primary agent) must coordinate the following specialist capabilities:\nPolicy and procedure Q&A: Use an enterprise knowledge source that supports indexed retrieval across the curated policy library and service\nprocedures.\nOperational metrics: Delegate metric queries to a Fabric Data Agent that reads governed business data through the Fabric semantic model.\nAuthenticated updates: Use tools exposed by an existing internal Model Context Protocol (MCP) server that provides transactional operations for\nthe service organization.\nSpecialized processing: Delegate summarization and classification requests to an existing Microsoft Foundry agent.\nFabrikam Inc. will onboard two MCP servers as tools:\nPartsOps MCP server: exposes tools for parts availability checks and parts request creation. The server requires per-user authentication because\nactions must be traceable to the requesting user.\nWarrantyRules MCP server: exposes a read-only tool for validating warranty coverage. The server uses an API key shared by the agent team.\nFabrikam Inc. has also defined a collaboration requirement with the existing Service Desk Agent:\nThe primary agent must delegate IT-specific requests to the existing Service Desk Agent rather than reimplement ticket creation logic.\nFinally, Fabrikarn Inc. plans to support a partner integration:\nFor shipment tracking inquiries, Fabrikam Inc. will delegate to a partner-provided agent that is only available through a standardized agent-to-\nagent endpoint.\nIssues and constraints -\nDuring early testing, Fabrikam Inc. found three recurring problems:\nMakers are copying and modifying the same components across agents, resulting in inconsistent disclaimers and duplicated tools.\nUsers can obtain a correct answer, but the response is not consistently traceable to a source when the agent uses knowledge.\nThe primary agent can route some requests, but specialist capabilities are not consistently delegated (for example, some metric questions are\nanswered generatively instead of being routed to the Fabric Data Agent).\nYou are part of the engineering team responsible for correcting the design and configuration to meet the preceding requirements and constraints."
  },
  "zh": {
   "stem": "您需要配置 Operations Concierge，以使基于提示的摘要行为符合 Fabrikam Inc. 的架构要求。\n您应该执行哪两项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择的答案值 1 分。",
   "options": {
    "A": "将 Azure AI Search 配置为摘要提示的基础来源。",
    "B": "发布代理以确保为摘要选择的模型被强制执行。",
    "C": "在自定义提示配置中从 Foundry 模型目录中选择一个模型。",
    "D": "启用引用以控制摘要输出的生成方式。",
    "E": "创建一个可复用的自定义提示模板，并将其应用于生成摘要响应的地方。"
   },
   "explanation": "答案为 C 和 E。Fabrikam 要求摘要由 Microsoft Foundry 模型处理且能跨代理复用，因此需在自定义提示配置中从 Foundry 模型目录选择模型（C），并创建可复用的自定义提示模板、应用到所有生成摘要响应的位置（E）。A 错误，Azure AI Search 是政策库与服务程序的索引知识源，接地来源并不决定或约束摘要所用模型。B 错误，发布只是部署代理，不能选择或强制某个模型。D 错误，启用引用可提升接地答案的可追溯性，但无法控制摘要输出的生成方式。",
   "scenario": "背景 -\nFabrikam Inc. 是一家总部位于加拿大的制造商，拥有一个不断发展的服务组织，支持现场技术人员和内部运营团队。Fabrikam Inc. 计\n划推出一个名为 Operations Concierge 的新内部代理解决方案，以减少搜索政策内容、检索运营指标和执行常规事务所花费的时间。\n该代理将被以下三组人员使用：\n服务协调员：负责分流传入的服务请求\n现场技术人员：需要指导程序和零件可用性信息\n运营经理：负责监控关键绩效指标 (KPI) 和异常情况\n该代理解决方案必须在真实的运营条件下工作。用户经常在与客户通话中途或协调零件运输时提出问题。代理需要快速、可靠的结\n果。因此，Fabrikam Inc. 要求该解决方案：\n在提供指导时提供可追溯的答案。\n在用户询问运营状态时检索实时指标。\n在用户启动流程（例如创建零件请求）时执行经过身份验证的更新。\nFabrikam Inc. 还希望该解决方案能够由多位开发者和制作者在一年内进行维护。公司曾经历过不同代理之间逻辑重复和行为不一致\n的情况。该项目强调团队之间的复用、治理和可维护性。\n现有环境 -\nFabrikam Inc. 运行三个 Microsoft Power Platform 环境用于代理开发和发布：开发 (Dev)、测试 (Test) 和生产 (Prod)。\n团队计划在开发和测试环境中构建并验证代理，然后通过支持可重复部署的受控发布流程将其推广到生产环境。\nFabrikam Inc. 已经拥有两个团队希望复用的资产：\n一个部分完成的 Copilot Studio 代理，名为 Service Desk Agent，用于 IT 创建内部工单和分配请求\n一个由中央 AI 团队创建的 Microsoft Foundry 代理，用于对长文本进行专业化的摘要和分类（例如，将通话记录摘要为事件叙述）\nFabrikam Inc. 还拥有运营和知识数据源：\n一个策划的政策库（包括内部标准操作程序 (SOP)、服务保修规则、升级标准和标准操作程序）\n一个 Azure AI Search 服务中索引的文档和程序集，支持对政策库的向量搜索\n一个 Microsoft Fabric 工作区，其中包含运营领导用于报告的语义模型\n业务需求 -\nFabrikam Inc. 要求 Operations Concierge 满足以下业务需求：\n可追溯性需求：当代理提供政策指导或程序建议时，用户必须能够看到答案的来源。\n指标需求：当用户询问服务绩效（积压、SLA 风险、零件短缺、调度延迟）时，解决方案必须以结构化格式返回最新指标，供运营\n经理在每周审查中使用。\n事务需求：解决方案必须支持在对话中启动的经过身份验证的更新，包括创建零件请求和更新服务案例状态。\n此外，Fabrikam Inc. 希望避免在代理之间重复常见资产：\n团队必须在三个不同的代理中复用相同的升级主题、MCP 工具定义和标准安全免责声明。\n只有平台工程组可以编辑共享资产。然而，所有代理作者必须能够使用它们。\n技术需求 -\nFabrikam Inc. 的解决方案架构使用多代理方法，以便专业职责可以独立隔离和演进。\nOperations Concierge（主代理）必须协调以下专业能力：\n政策和程序问答：使用支持对策划政策库和服务程序进行索引检索的企业知识源。\n运营指标：将指标查询委派给一个 Fabric 数据代理，该代理通过 Fabric 语义模型读取受治理的业务数据。\n经过身份验证的更新：使用现有内部模型上下文协议 (MCP) 服务器提供的工具，为服务组织提供事务操作。\n专业化处理：将摘要和分类请求委派给现有的 Microsoft Foundry 代理。\nFabrikam Inc. 将上线两个 MCP 服务器作为工具：\nPartsOps MCP 服务器：提供零件可用性检查和零件请求创建的工具。该服务器需要每用户身份验证，因为操作必须可追溯到请求用\n户。\nWarrantyRules MCP 服务器：提供用于验证保修覆盖范围的只读工具。该服务器使用代理团队共享的 API 密钥。\nFabrikam Inc. 还定义了与现有 Service Desk Agent 的协作需求：\n主代理必须将 IT 特定请求委派给现有的 Service Desk Agent，而不是重新实现工单创建逻辑。\n最后，Fabrikam Inc. 计划支持合作伙伴集成：\n对于运输跟踪查询，Fabrikam Inc. 将委派给仅通过标准化代理到代理端点可用的合作伙伴提供的代理。\n问题和限制 -\n在早期测试中，Fabrikam Inc. 发现了三个反复出现的问题：\n制作者在代理之间复制和修改相同的组件，导致免责声明不一致和工具重复。\n当代理使用知识时，用户可以获得正确答案，但响应无法始终追溯到来源。\n主代理可以路由某些请求，但专业能力未被一致地委派（例如，某些指标问题是通过生成式回答的，而不是路由到 Fabric 数据代\n理）。\n您是负责根据上述需求和限制纠正设计和配置的工程团队成员。"
  }
 },
 {
  "id": 32,
  "topic": 2,
  "qnum": 31,
  "isCaseStudy": true,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You need to connect Operations Concierge to Fabrikam Inc.'s Azure AI Search knowledge index while complying with security requirements.\nWhich configuration should you use for each requirement? To answer, move the appropriate configurations to the correct requirements. You may\nuse each configuration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Fabrikam's governance rule requires authenticated, non-interactive access to Azure AI Search, so the connection must be created with \"Select the service principal as the authentication type.\" rather than an API key or the maker's own identity. The remaining two requirements are both satisfied in the connection details: the endpoint URL is what binds the knowledge source to the specific Azure AI Search service instance holding the indexed policy documents, so \"Provide the Azure AI Search Endpoint URL in the connection details.\" is shown for both. \"Enable citations for grounded answers.\" is a response-behavior setting, not part of establishing the connection, so it is the distractor here.",
   "scenario": "Background -\nFabrikam Inc. is a Canada-based manufacturer with a growing service organization that supports field technicians and internal operations teams.\nFabrikam Inc. plans to launch a new internal agent solution named Operations Concierge to reduce time spent searching policy content, retrieving\noperational metrics, and executing routine transactions.\nThe agent will be used by three groups:\nService coordinators who triage incoming service requests\nField technicians who need guided procedures and parts availability\nOperations managers who monitor KPIs and exceptions\nThe agent solution must work in real-world operational conditions. Users often ask questions mid-call with a customer or while coordinating parts\nshipments. The agents require quick, reliable outcomes. As a result, Fabrikam Inc. requires the solution to:\nProvide grounded answers with traceability when it provides guidance.\nRetrieve real-time metrics when users ask for operational status.\nExecute authenticated updates when users initiate a flow (such as creating a parts request).\nFabrikam Inc. also expects the solution to be maintained by multiple makers and developers across the year. The company has experienced\nduplicated logic and inconsistent behavior across different agents. This project emphasizes reuse, governance, and maintainability across teams.\nCurrent environment -\nFabrikam Inc. runs three Microsoft Power Platform environments for agent development and release: Dev, Test, and Prod.\nThe team plans to build the agent and validate it in Dev and Test, then promote to Prod by using a controlled release process that supports\nrepeatable deployments.\nFabrikam Inc. already has two assets the team wants to reuse:\nA partially completed Copilot Studio agent named Service Desk Agent, used by IT to create internal tickets and route requests\nA Microsoft Foundry agent created by a central AI team that performs specialized summarization and classification for long-form text (for\nexample, summarizing call transcripts into an incident narrative)\nFabrikam Inc. also has operational and knowledge data sources:\nA curated policy library (internal SOPs, service warranty rules, escalation criteria, and standard operating procedures)\nA set of indexed documents and procedures in an Azure AI Search service that supports vector search for the policy library\nA Microsoft Fabric workspace that includes a semantic model used by operations leadership for reporting\nBusiness requirements -\nFabrikam Inc. requires Operations Concierge to meet the following business requirements:\nTraceability requirement: When the agent provides policy guidance or procedural recommendations, users must be able to see where the answer\ncame from.\nMetrics requirement: When users ask about service performance (backlog, SLA risk, parts shortages, dispatch delays), the solution must return\nup-to-date metrics in a structured format that operations managers can use in weekly reviews.\nTransaction requirement: The solution must support authenticated updates initiated during conversations, including creating a parts request and\nupdating a service case status.\nIn addition, Fabrikam Inc. wants to avoid duplicating common assets across agents:\nThe team must reuse the same set of escalation topics, MCP tool definitions, and a standard safety disclaimer across three different agents.\nOnly the platform engineering group as allowed to edit shared assets. However, all agent authors must be able to use them.\nTechnical requirements -\nThe Fabrikam Inc. solution architecture uses a multi-agent approach so that specialist responsibilities are isolated and can evolve independently.\nThe Operations Concierge (primary agent) must coordinate the following specialist capabilities:\nPolicy and procedure Q&A: Use an enterprise knowledge source that supports indexed retrieval across the curated policy library and service\nprocedures.\nOperational metrics: Delegate metric queries to a Fabric Data Agent that reads governed business data through the Fabric semantic model.\nAuthenticated updates: Use tools exposed by an existing internal Model Context Protocol (MCP) server that provides transactional operations for\nthe service organization.\nSpecialized processing: Delegate summarization and classification requests to an existing Microsoft Foundry agent.\nFabrikam Inc. will onboard two MCP servers as tools:\nPartsOps MCP server: exposes tools for parts availability checks and parts request creation. The server requires per-user authentication because\nactions must be traceable to the requesting user.\nWarrantyRules MCP server: exposes a read-only tool for validating warranty coverage. The server uses an API key shared by the agent team.\nFabrikam Inc. has also defined a collaboration requirement with the existing Service Desk Agent:\nThe primary agent must delegate IT-specific requests to the existing Service Desk Agent rather than reimplement ticket creation logic.\nFinally, Fabrikarn Inc. plans to support a partner integration:\nFor shipment tracking inquiries, Fabrikam Inc. will delegate to a partner-provided agent that is only available through a standardized agent-to-\nagent endpoint.\nIssues and constraints -\nDuring early testing, Fabrikam Inc. found three recurring problems:\nMakers are copying and modifying the same components across agents, resulting in inconsistent disclaimers and duplicated tools.\nUsers can obtain a correct answer, but the response is not consistently traceable to a source when the agent uses knowledge.\nThe primary agent can route some requests, but specialist capabilities are not consistently delegated (for example, some metric questions are\nanswered generatively instead of being routed to the Fabric Data Agent).\nYou are part of the engineering team responsible for correcting the design and configuration to meet the preceding requirements and constraints."
  },
  "zh": {
   "stem": "您需要将 Operations Concierge 连接到 Fabrikam Inc. 的 Azure AI 搜索知识索引，同时遵守安全要求。\n您应该为每个需求使用哪种配置？要回答，请将适当的配置移动到正确的需求中。您可以对每个配置使用一次、多次或不使用。您\n可能需要移动分隔条或滚动以查看内容。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "Fabrikam 的治理要求是以经过身份验证的非交互式方式访问 Azure AI Search，因此连接必须使用 Select the service principal as the authentication type，而不是 API 密钥或制作者本人的身份。另外两个需求都在连接详细信息中完成：终结点 URL 决定了知识源绑定到哪个存放已索引政策文档的 Azure AI Search 服务实例，因此答案图对这两项都显示 Provide the Azure AI Search Endpoint URL in the connection details。Enable citations for grounded answers 属于答案呈现行为的设置，与建立连接无关，是干扰项。",
   "scenario": "背景 -\nFabrikam Inc. 是一家总部位于加拿大的制造商，拥有一个不断发展的服务组织，支持现场技术人员和内部运营团队。Fabrikam Inc. 计\n划推出一个名为 Operations Concierge 的新内部代理解决方案，以减少搜索政策内容、检索运营指标和执行常规事务所花费的时间。\n该代理将被以下三组人员使用：\n服务协调员：负责分流传入的服务请求\n现场技术人员：需要指导程序和零件可用性信息\n运营经理：负责监控关键绩效指标 (KPI) 和异常情况\n该代理解决方案必须在真实的运营条件下工作。用户经常在与客户通话中途或协调零件运输时提出问题。代理需要快速、可靠的结\n果。因此，Fabrikam Inc. 要求该解决方案：\n在提供指导时提供可追溯的答案。\n在用户询问运营状态时检索实时指标。\n在用户启动流程（例如创建零件请求）时执行经过身份验证的更新。\nFabrikam Inc. 还希望该解决方案能够由多位开发者和制作者在一年内进行维护。公司曾经历过不同代理之间逻辑重复和行为不一致\n的情况。该项目强调团队之间的复用、治理和可维护性。\n现有环境 -\nFabrikam Inc. 运行三个 Microsoft Power Platform 环境用于代理开发和发布：开发 (Dev)、测试 (Test) 和生产 (Prod)。\n团队计划在开发和测试环境中构建并验证代理，然后通过支持可重复部署的受控发布流程将其推广到生产环境。\nFabrikam Inc. 已经拥有两个团队希望复用的资产：\n一个部分完成的 Copilot Studio 代理，名为 Service Desk Agent，用于 IT 创建内部工单和分配请求\n一个由中央 AI 团队创建的 Microsoft Foundry 代理，用于对长文本进行专业化的摘要和分类（例如，将通话记录摘要为事件叙述）\nFabrikam Inc. 还拥有运营和知识数据源：\n一个策划的政策库（包括内部标准操作程序 (SOP)、服务保修规则、升级标准和标准操作程序）\n一个 Azure AI Search 服务中索引的文档和程序集，支持对政策库的向量搜索\n一个 Microsoft Fabric 工作区，其中包含运营领导用于报告的语义模型\n业务需求 -\nFabrikam Inc. 要求 Operations Concierge 满足以下业务需求：\n可追溯性需求：当代理提供政策指导或程序建议时，用户必须能够看到答案的来源。\n指标需求：当用户询问服务绩效（积压、SLA 风险、零件短缺、调度延迟）时，解决方案必须以结构化格式返回最新指标，供运营\n经理在每周审查中使用。\n事务需求：解决方案必须支持在对话中启动的经过身份验证的更新，包括创建零件请求和更新服务案例状态。\n此外，Fabrikam Inc. 希望避免在代理之间重复常见资产：\n团队必须在三个不同的代理中复用相同的升级主题、MCP 工具定义和标准安全免责声明。\n只有平台工程组可以编辑共享资产。然而，所有代理作者必须能够使用它们。\n技术需求 -\nFabrikam Inc. 的解决方案架构使用多代理方法，以便专业职责可以独立隔离和演进。\nOperations Concierge（主代理）必须协调以下专业能力：\n政策和程序问答：使用支持对策划政策库和服务程序进行索引检索的企业知识源。\n运营指标：将指标查询委派给一个 Fabric 数据代理，该代理通过 Fabric 语义模型读取受治理的业务数据。\n经过身份验证的更新：使用现有内部模型上下文协议 (MCP) 服务器提供的工具，为服务组织提供事务操作。\n专业化处理：将摘要和分类请求委派给现有的 Microsoft Foundry 代理。\nFabrikam Inc. 将上线两个 MCP 服务器作为工具：\nPartsOps MCP 服务器：提供零件可用性检查和零件请求创建的工具。该服务器需要每用户身份验证，因为操作必须可追溯到请求用\n户。\nWarrantyRules MCP 服务器：提供用于验证保修覆盖范围的只读工具。该服务器使用代理团队共享的 API 密钥。\nFabrikam Inc. 还定义了与现有 Service Desk Agent 的协作需求：\n主代理必须将 IT 特定请求委派给现有的 Service Desk Agent，而不是重新实现工单创建逻辑。\n最后，Fabrikam Inc. 计划支持合作伙伴集成：\n对于运输跟踪查询，Fabrikam Inc. 将委派给仅通过标准化代理到代理端点可用的合作伙伴提供的代理。\n问题和限制 -\n在早期测试中，Fabrikam Inc. 发现了三个反复出现的问题：\n制作者在代理之间复制和修改相同的组件，导致免责声明不一致和工具重复。\n当代理使用知识时，用户可以获得正确答案，但响应无法始终追溯到来源。\n主代理可以路由某些请求，但专业能力未被一致地委派（例如，某些指标问题是通过生成式回答的，而不是路由到 Fabric 数据代\n理）。\n您是负责根据上述需求和限制纠正设计和配置的工程团队成员。"
  },
  "sources_en": [
   "Enable citations for grounded answers.",
   "Enter the name of the Azure AI Search index.",
   "Select the service principal as the authentication type.",
   "Provide the Azure AI Search Endpoint URL in the connection details."
  ],
  "sources_zh": [
   "为接地答案启用引用。",
   "输入 Azure AI Search 索引的名称。",
   "选择服务主体作为身份验证类型。",
   "在连接详细信息中提供 Azure AI Search 终结点 URL。"
  ],
  "targets": [
   {
    "label_en": "Ensure the Azure AI Search connection complies with the governance requirement for authenticated access.",
    "label_zh": "确保 Azure AI Search 连接符合已验证访问的治理要求。",
    "correct_en": "Select the service principal as the authentication type.",
    "correct_zh": "选择服务主体作为身份验证类型。"
   },
   {
    "label_en": "Ensure policy and procedure Q&A uses the required curated, indexed enterprise knowledge source.",
    "label_zh": "确保政策与流程问答使用规定的、经过整理并已索引的企业知识源。",
    "correct_en": "Provide the Azure AI Search Endpoint URL in the connection details.",
    "correct_zh": "在连接详细信息中提供 Azure AI Search 终结点 URL。"
   },
   {
    "label_en": "Ensure the connection targets the Azure AI Search service instance that stores the indexed policy documents.",
    "label_zh": "确保该连接指向存储已索引政策文档的 Azure AI Search 服务实例。",
    "correct_en": "Provide the Azure AI Search Endpoint URL in the connection details.",
    "correct_zh": "在连接详细信息中提供 Azure AI Search 终结点 URL。"
   }
  ]
 },
 {
  "id": 33,
  "topic": 2,
  "qnum": 32,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company is building a Copilot Studio solution that must answer policy questions, retrieve operational metrics from structured data, and execute\nauthenticated updates in backend systems. The company decides to use multiple specialized agents rather than a single monolithic agent.\nCustom agents for each action already exist.\nTo meet the business needs, the solution must meet the following requirements:\nThe solution must retrieve up to date metrics from structured data.\nThe solution must answer policy questions using curated knowledge.\nThe solution must execute authenticated updates during conversations.\nYou need to select the appropriate agent design for each requirement.\nWhich approach should you use for each requirement? To answer, move the appropriate configurations to the correct requirements. You may use\neach configuration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "The answer image published with this question assigns a tools-first agent to the metrics requirement and to the authenticated-update requirement, and a knowledge-focused agent to the policy-question requirement. A knowledge-focused agent is the right pattern for answering policy questions because it is grounded on curated knowledge sources rather than on live actions. A tools-first agent is the right pattern for executing authenticated updates during a conversation because the work is performed by connector or API tools that carry the user's authenticated connection. \"Delegate the request to a single agent\" is wrong for every requirement because the scenario explicitly rejects a single monolithic agent in favour of specialized agents. Note that the AI walkthrough recommends a data-access agent for the structured-data metrics requirement, which is the more intuitive reading of that row; the graded answer here follows the answer image."
  },
  "zh": {
   "stem": "一家公司正在构建一个 Copilot Studio 解决方案，该解决方案必须回答政策问题、从结构化数据中检索操作指标，并在后端系统中执\n行经过身份验证的更新。公司决定使用多个专门的代理，而不是单一的单体代理。每个操作的自定义代理已经存在。\n为了满足业务需求，解决方案必须满足以下要求：\n解决方案必须从结构化数据中检索最新的指标。\n解决方案必须使用精心整理的知识回答政策问题。\n解决方案必须在对话中执行经过身份验证的更新。\n您需要为每个需求选择适当的代理设计。\n您应该为每个需求使用哪种方法？要回答，请将适当的配置移动到正确的需求中。每个配置可以使用一次、多次或不使用。您可能\n需要移动分割条以查看内容或滚动查看。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "本题随附的答案图把\"检索最新指标\"和\"执行经过身份验证的更新\"都配给 tools-first agent，把\"回答政策问题\"配给 knowledge-focused agent。knowledge-focused agent 基于精心整理的知识源作答，适合政策类问题；tools-first agent 通过连接器/API 工具执行动作并携带已验证的连接，适合对话中的认证更新。\"Delegate the request to a single agent\"（委派给单一代理）在任何一行都不正确，因为题干明确要求用多个专门代理而非单体代理。注意：中文 AI 解析推荐第一行使用 data-access agent（从结构化数据检索指标），这在语义上更直观，但按规范以答案图为准。"
  },
  "sources_en": [
   "Delegate the request to a single agent.",
   "Delegate the request to a tools-first agent.",
   "Delegate the request to a data-access agent.",
   "Delegate the request to a knowledge-focused agent."
  ],
  "sources_zh": [
   "将请求委派给单一代理。",
   "将请求委派给 tools-first agent。",
   "将请求委派给 data-access agent。",
   "将请求委派给 knowledge-focused agent。"
  ],
  "targets": [
   {
    "label_en": "The solution must retrieve up to date metrics from structured data.",
    "label_zh": "解决方案必须从结构化数据中检索最新的指标。",
    "correct_en": "Delegate the request to a tools-first agent.",
    "correct_zh": "将请求委派给 tools-first agent。"
   },
   {
    "label_en": "The solution must answer policy questions using curated data sources.",
    "label_zh": "解决方案必须使用精心整理的数据源回答政策问题。",
    "correct_en": "Delegate the request to a knowledge-focused agent.",
    "correct_zh": "将请求委派给 knowledge-focused agent。"
   },
   {
    "label_en": "The solution must execute authenticated updates during conversations.",
    "label_zh": "解决方案必须在对话中执行经过身份验证的更新。",
    "correct_en": "Delegate the request to a tools-first agent.",
    "correct_zh": "将请求委派给 tools-first agent。"
   }
  ]
 },
 {
  "id": 34,
  "topic": 2,
  "qnum": 33,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company has an approved custom connector that uses a REST API for an internal system.\nAn agent in Copilot Studio must call this connector during conversations to retrieve or update data.\nTo meet the business needs, the solution must meet the following requirements:\nMake the connector actions available for the agent to invoke.\nEnsure authentication is handled at the service level, not per user.\nPass conversation context into the connector when it is called.\nSurface the returned data of the connector to the user in the conversation.\nYou need to configure the agent and the connector action to meet the requirements.\nWhat should you configure for each requirement? To answer, move the appropriate configurations to the correct requirements. You may use each\nconfiguration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Each requirement maps to one distinct step of wiring a custom connector into a Copilot Studio agent. Adding the connector as a tool in the agent is what exposes its actions so the agent can invoke them. Creating or reusing a connection for the connector stores the credentials once at the service level instead of prompting each end user to authenticate. Mapping topic variables to the tool inputs is how conversation context is passed into the connector call. Parsing the JSON response and assigning it to a topic variable is what makes the returned data usable in a message so it can be surfaced to the user. No option is a distractor here: all four are used exactly once, and swapping any two breaks the requirement it was meant to satisfy."
  },
  "zh": {
   "stem": "一家公司有一个已批准的自定义连接器，该连接器使用内部系统的 REST API。\nCopilot Studio 中的一个代理必须在对话中调用此连接器以检索或更新数据。\n为了满足业务需求，解决方案必须满足以下要求：\n使连接器操作可供代理调用。\n确保身份验证在服务级别处理，而不是每个用户级别。\n在调用连接器时传递对话上下文。\n在对话中将连接器返回的数据呈现给用户。\n您需要配置代理和连接器操作以满足这些要求。\n您应该为每个要求配置什么？要回答，请将适当的配置移动到正确的要求。每个配置可以使用一次、多次或不使用。您可能需要移\n动分割条或滚动以查看内容。\n注意：每个正确选择都值一分。",
   "options": {},
   "explanation": "每个需求对应把自定义连接器接入 Copilot Studio agent 的一个步骤。把连接器添加为 agent 的工具，才能让 agent 调用其操作；为连接器创建或重用连接，可在服务级别统一保存凭据，而不是让每个用户各自认证；把主题变量映射到工具输入，即可在调用时传入对话上下文；解析 JSON 响应并赋值给主题变量，才能把连接器返回的数据在对话中呈现给用户。四个配置各用一次，没有多余干扰项，互换任意两项都会导致对应需求无法满足。"
  },
  "sources_en": [
   "Map topic variables to the tool inputs.",
   "Parse the JSON response and assign it to a topic variable.",
   "Add the connector as a tool in the agent.",
   "Create or reuse a connection for the connector."
  ],
  "sources_zh": [
   "将主题变量映射到工具输入。",
   "解析 JSON 响应并将其赋值给主题变量。",
   "在 agent 中将该连接器添加为工具。",
   "为该连接器创建或重用连接。"
  ],
  "targets": [
   {
    "label_en": "Make connector actions available for agent to invoke.",
    "label_zh": "使连接器操作可供 agent 调用。",
    "correct_en": "Add the connector as a tool in the agent.",
    "correct_zh": "在 agent 中将该连接器添加为工具。"
   },
   {
    "label_en": "Handle authentication at service level, not per user.",
    "label_zh": "在服务级别处理身份验证，而不是按用户处理。",
    "correct_en": "Create or reuse a connection for the connector.",
    "correct_zh": "为该连接器创建或重用连接。"
   },
   {
    "label_en": "Pass conversation context into connector when called.",
    "label_zh": "在调用连接器时传入对话上下文。",
    "correct_en": "Map topic variables to the tool inputs.",
    "correct_zh": "将主题变量映射到工具输入。"
   },
   {
    "label_en": "Surface connector's returned data to the user.",
    "label_zh": "将连接器返回的数据呈现给用户。",
    "correct_en": "Parse the JSON response and assign it to a topic variable.",
    "correct_zh": "解析 JSON 响应并将其赋值给主题变量。"
   }
  ]
 },
 {
  "id": 35,
  "topic": 2,
  "qnum": 34,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company has an Azure AI Search vector index that contains enterprise content and wants to use it as a knowledge source for an agent in\nCopilot Studio.\nTo meet business needs, the knowledge source must meet the following requirements:\nThe agent must connect to the Azure AI Search service.\nThe agent must use a supported authentication method for the connection.\nThe agent must ensure answers are grounded using the specified Azure AI Search index.\nYou need to connect to Azure AI Search as a knowledge source for the agent.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the\ncorrect order.",
   "options": {},
   "explanation": "The flow follows the Copilot Studio authoring UI: you start inside the agent by initiating the add-a-knowledge-source process, then create a new Azure AI Search connection, then configure the authentication method and supply the connection details for that connection, then choose the specific Azure AI Search index that answers will be grounded on, and finally associate the fully configured knowledge source with the agent so it is used at runtime. Creating the connection before starting the wizard also works in practice, but the graded order starts from the agent. Specifying the index cannot come before the connection exists and is authenticated, and associating the source must be last because there is nothing complete to associate until the index is chosen."
  },
  "zh": {
   "stem": "一家公司拥有一个包含企业内容的 Azure AI Search 向量索引，并希望将其用作 Copilot Studio 中代理的知识来源。\n为了满足业务需求，知识来源必须满足以下要求：\n代理必须连接到 Azure AI Search 服务。\n代理必须使用支持的身份验证方法进行连接。\n代理必须确保答案基于指定的 Azure AI Search 索引。\n您需要将 Azure AI Search 连接为代理的知识来源。\n您应该以什么顺序执行这些操作？要回答，请将所有操作从操作列表移动到答案区域，并按正确顺序排列。\n建议答案：",
   "options": {},
   "explanation": "顺序遵循 Copilot Studio 的实际操作流程：先在 agent 中启动\"添加知识源\"流程，再创建新的 Azure AI Search 连接，然后配置身份验证方法并提供所需连接详细信息，接着指定用于接地（grounding）的 Azure AI Search 索引，最后把配置完成的知识源与 agent 关联，使其在运行时生效。索引必须在连接建立并完成认证之后才能选择；关联知识源只能放在最后，因为在选定索引之前没有完整的知识源可关联。中文 AI 解析推荐的顺序是 3→1→4→5→2，与答案图不同，本题以答案图为准。"
  },
  "sources_en": [
   "Configure the authentication method and provide the required connection details.",
   "Associate the configured knowledge source with the agent.",
   "Create a new Azure AI Search connection.",
   "Initiate the process to add a knowledge source to the agent.",
   "Specify the Azure AI Search index to use for grounding."
  ],
  "sources_zh": [
   "配置身份验证方法并提供所需的连接详细信息。",
   "将配置好的知识源与 agent 关联。",
   "创建新的 Azure AI Search 连接。",
   "启动向 agent 添加知识源的流程。",
   "指定用于接地的 Azure AI Search 索引。"
  ],
  "targets": [
   {
    "label_en": "Step 1",
    "label_zh": "步骤 1",
    "correct_en": "Initiate the process to add a knowledge source to the agent.",
    "correct_zh": "启动向 agent 添加知识源的流程。"
   },
   {
    "label_en": "Step 2",
    "label_zh": "步骤 2",
    "correct_en": "Create a new Azure AI Search connection.",
    "correct_zh": "创建新的 Azure AI Search 连接。"
   },
   {
    "label_en": "Step 3",
    "label_zh": "步骤 3",
    "correct_en": "Configure the authentication method and provide the required connection details.",
    "correct_zh": "配置身份验证方法并提供所需的连接详细信息。"
   },
   {
    "label_en": "Step 4",
    "label_zh": "步骤 4",
    "correct_en": "Specify the Azure AI Search index to use for grounding.",
    "correct_zh": "指定用于接地的 Azure AI Search 索引。"
   },
   {
    "label_en": "Step 5",
    "label_zh": "步骤 5",
    "correct_en": "Associate the configured knowledge source with the agent.",
    "correct_zh": "将配置好的知识源与 agent 关联。"
   }
  ]
 },
 {
  "id": 36,
  "topic": 2,
  "qnum": 35,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company uses a primary agent in Copilot Studio to handle user intake.\nFor some requests, the company wants the primary agent to delegate work to another Copilot Studio agent that already exists.\nTo meet the business needs, the solution must allow agents to perform the following on the connected agent:\nMust allow calls from other agents.\nMust allow agents to use the connected agent for collaboration.\nMust allow agents to invoke the connected agent in conversations.\nYou need to integrate the existing Copilot Studio agent with the connected agent.\nWhich setting should you configure for each requirement? To answer, move the appropriate configurations to the correct requirements. You may\nuse each configuration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Agent-to-agent delegation in Copilot Studio is enabled by connection settings on the target agent plus adding that agent to the primary one. Configuring connections to the connected agent is what permits inbound calls from other agents and what lets the primary agent actually invoke it during a conversation, because the connection defines and authorizes the calling interface. Adding the connected agent registers it inside the primary agent so it can be used for collaboration. \"Publish the connected agent\" only deploys the agent to an environment or channel and does not by itself grant other agents access. \"Add the connected agent as an indexed knowledge source\" is wrong because it would only let the primary agent search the other agent's content, not delegate work to it."
  },
  "zh": {
   "stem": "一家公司在 Copilot Studio 中使用一个主代理来处理用户接待。\n对于某些请求，公司希望主代理将工作委派给另一个已经存在的 Copilot Studio 代理。\n为了满足业务需求，解决方案必须允许代理在连接的代理上执行以下操作：\n必须允许来自其他代理的调用。\n必须允许代理使用连接的代理进行协作。\n必须允许代理在对话中调用连接的代理。\n您需要将现有的 Copilot Studio 代理与连接的代理集成。\n应为每个需求配置哪一项设置？要回答此问题，请将适当的配置移动到正确的需求中。每个配置可以使用一次、多次或不使用。您\n可能需要移动分隔条或滚动以查看内容。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "Copilot Studio 中的代理间委派依靠对被连接代理的连接配置，以及在主代理中添加该代理。配置到被连接代理的连接，既允许其他代理发起调用，也让主代理能在对话中真正调用它，因为连接定义并授权了调用接口。添加被连接代理则是把它注册到主代理中以便协作使用。\"发布被连接代理\"只是把代理部署到环境或渠道，本身并不授予其他代理访问权限；\"将被连接代理添加为索引知识源\"只能让主代理检索其内容，无法把工作委派给它。"
  },
  "sources_en": [
   "Publish the connected agent.",
   "Add the connected agent.",
   "Configure connections to the connected agent.",
   "Add the connected agent as an indexed knowledge source."
  ],
  "sources_zh": [
   "发布被连接的代理。",
   "添加被连接的代理。",
   "配置到被连接代理的连接。",
   "将被连接的代理添加为索引知识源。"
  ],
  "targets": [
   {
    "label_en": "Must allow calls from other agents",
    "label_zh": "必须允许来自其他代理的调用",
    "correct_en": "Configure connections to the connected agent.",
    "correct_zh": "配置到被连接代理的连接。"
   },
   {
    "label_en": "Must allow agents to use the connected agent for collaboration.",
    "label_zh": "必须允许代理使用被连接的代理进行协作。",
    "correct_en": "Add the connected agent.",
    "correct_zh": "添加被连接的代理。"
   },
   {
    "label_en": "Must allow agents to invoke the connected agent in conversations.",
    "label_zh": "必须允许代理在对话中调用被连接的代理。",
    "correct_en": "Configure connections to the connected agent.",
    "correct_zh": "配置到被连接代理的连接。"
   }
  ]
 },
 {
  "id": 37,
  "topic": 2,
  "qnum": 36,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "A company uses multiple Copilot Studio agents that perform specialized tasks.\nThe company needs to enable one agent to directly delegate and invoke another agent within Copilot Studio by using a standard Copilot Studio\ninterface.\nYou need to configure collaboration among agents by using Copilot Studio.\nWhat should you do?",
   "options": {
    "A": "Add the target agent as a Microsoft Fabric Data Agent.",
    "B": "Provide A2A endpoint information for the target agent.",
    "C": "Upload documentation about the target agent for referencing.",
    "D": "Add the target agent as an indexed knowledge source."
   },
   "explanation": "The answer is B. Direct agent-to-agent delegation in Copilot Studio is done through the A2A protocol: you connect the target agent by supplying its A2A endpoint information, after which the calling agent can hand off work to it and receive the result as part of the conversation. A is wrong because a Microsoft Fabric Data Agent is for querying governed analytical data, not for invoking another Copilot Studio agent. C is wrong because uploaded documentation only becomes reference content the agent can read - it grants no ability to invoke anything. D is wrong for the same reason: an indexed knowledge source can be searched for information but cannot be called to perform work."
  },
  "zh": {
   "stem": "一家公司使用多个 Copilot Studio 代理来执行专门任务。\n该公司需要使一个代理能够通过标准的 Copilot Studio 接口直接委派并调用另一个代理。\n您需要使用 Copilot Studio 配置代理之间的协作。\n您应该怎么做？",
   "options": {
    "A": "将目标代理添加为 Microsoft Fabric 数据代理。",
    "B": "为目标代理提供 A2A 端点信息。",
    "C": "上传关于目标代理的文档以供参考。",
    "D": "将目标代理添加为索引的知识源。"
   },
   "explanation": "答案为 B。在 Copilot Studio 中实现代理之间的直接委派要通过 A2A 协议：提供目标代理的 A2A 端点信息完成连接后，调用方代理即可把任务移交给它并在对话中获取结果。A 错误，Microsoft Fabric 数据代理用于查询受治理的分析数据，不能用来调用另一个 Copilot Studio 代理。C 错误，上传文档只是让代理可以参考的内容，不具备调用能力。D 错误同理，索引知识源只能被检索信息，无法被调用去执行工作。"
  }
 },
 {
  "id": 38,
  "topic": 2,
  "qnum": 37,
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "E"
  ],
  "en": {
   "stem": "A company uses an agent in Copilot Studio that produces structured responses using a reusable instruction template. The responses follow the\nrequired tone and format. During a compliance review, the team discovers that the responses were generated using a model that is not on the\napproved list.\nThe company requires that the reusable instruction template continues to be used and the model used for prompt-driven responses meets\ngovernance requirements.\nThe solution must ensure that prompt-driven responses are generated using an approved model.\nYou need to configure the solution that meets the requirements.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Publish the agent so that the model used by prompt-driven responses is updated automatically.",
    "B": "Enable citations so generated responses can be traced and comply with governance requirements.",
    "C": "Add a line to the instruction template that requires the agent to use only approved models when generating responses.",
    "D": "Configure Azure AI Search as the grounding source so the approved model requirement is enforced during response generation.",
    "E": "Ensure the reusable instruction template is the one applied to the agent that generates the structured response."
   },
   "explanation": "The answers are A and E. The model used by prompt-driven responses is part of the custom prompt configuration, so after choosing the approved model you must publish the agent for that selection to take effect in the running agent (A); and you must verify that the reusable instruction template is actually the one applied to the agent that generates the structured response, so the required tone and format are preserved while the model changes (E). B is wrong because citations add traceability to grounded content but place no restriction on which model runs. C is wrong because instruction text cannot select the underlying model - model choice is a configuration setting, not something the agent can obey from a prompt. D is wrong because Azure AI Search is a grounding source and has nothing to do with enforcing an approved model."
  },
  "zh": {
   "stem": "一家公司在 Copilot Studio 中使用一个代理，该代理通过可重复使用的指令模板生成结构化的响应。这些响应符合所需的语气和格\n式。在合规性审查期间，团队发现这些响应是使用未在批准列表中的模型生成的。\n公司要求继续使用可重复的指令模板，并且用于生成基于提示的响应的模型必须符合治理要求。\n解决方案必须确保基于提示的响应是使用批准的模型生成的。\n您需要配置满足要求的解决方案。\n以下两项操作应执行？每个正确答案构成解决方案的一部分。\n注意：每个正确选择值一分。",
   "options": {
    "A": "发布代理，以便基于提示的响应所使用的模型自动更新。",
    "B": "启用引用功能，以便生成的响应可以被追溯并符合治理要求。",
    "C": "在指令模板中添加一行，要求代理在生成响应时仅使用批准的模型。",
    "D": "配置 Azure AI Search 作为基础来源，以便在响应生成期间强制执行批准的模型要求。",
    "E": "确保可重复使用的指令模板是应用于生成结构化响应的代理的模板。"
   },
   "explanation": "答案为 A 和 E。基于提示的响应所用模型属于自定义提示配置的一部分，选定已批准模型后必须发布代理，该选择才会在运行中的代理生效（A）；同时要确认可复用指令模板确实应用在生成结构化响应的那个代理上，才能在更换模型的同时保持所需的语气与格式（E）。B 错误，引用功能只增加接地内容的可追溯性，无法限制使用哪个模型。C 错误，指令文本无法选择底层模型，模型选择是配置项而不是代理能通过提示遵守的内容。D 错误，Azure AI Search 是接地来源，与强制使用已批准模型无关。"
  }
 },
 {
  "id": 39,
  "topic": 2,
  "qnum": 38,
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "C"
  ],
  "en": {
   "stem": "A team has an agent in Copilot Studio that handles user intake. For some requests, the team wants the agent to delegate work to a Microsoft\nFoundry agent that performs specialized processing. The Foundry agent already exists.\nTo meet the business needs, the solution must meet the following requirements:\nThe primary agent must be able to call the Foundry agent.\nThe external agent connection must reference the correct Foundry project and agent.\nYou need to integrate the primary agent with the Foundry agent.\nWhich two actions should you take? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Add an external agent.",
    "B": "Configure the Copilot Studio endpoint URL.",
    "C": "Configure the project endpoint URL.",
    "D": "Add an indexed knowledge source.",
    "E": "Publish the Copilot Studio agent."
   },
   "explanation": "The answers are A and C. To let a Copilot Studio agent delegate work to an existing Microsoft Foundry agent, you add it under Agents as an external agent (A), and you configure the Foundry project endpoint URL so the connection points at the correct project and agent within it (C). B is wrong because the Copilot Studio endpoint URL identifies the calling agent itself, not the external Foundry agent being connected. D is wrong because an indexed knowledge source only supplies content for grounding and cannot invoke another agent. E is wrong because publishing makes the primary agent available to users but is not part of establishing the external agent connection."
  },
  "zh": {
   "stem": "一个团队在 Copilot Studio 中有一个负责用户接待的代理。对于某些请求，团队希望该代理将工作委派给一个执行专业处理的\nMicrosoft Foundry 代理。Foundry 代理已经存在。\n为满足业务需求，解决方案必须满足以下要求：\n主代理必须能够调用 Foundry 代理。\n外部代理连接必须引用正确的 Foundry 项目和代理。\n您需要将主代理与 Foundry 代理集成。\n您应该采取哪两项行动？每个正确答案构成解决方案的一部分。\n注意：每个正确选择的答案值一分。",
   "options": {
    "A": "添加一个外部代理。",
    "B": "配置 Copilot Studio 的端点 URL。",
    "C": "配置项目的端点 URL。",
    "D": "添加一个索引的知识源。",
    "E": "发布 Copilot Studio 代理。"
   },
   "explanation": "答案为 A 和 C。要让 Copilot Studio 代理把工作委派给已存在的 Microsoft Foundry 代理，需要在代理设置中添加一个外部代理（A），并配置 Foundry 项目的端点 URL，使连接指向正确的项目及其中的代理（C）。B 错误，Copilot Studio 端点 URL 标识的是调用方代理本身，而不是要连接的外部 Foundry 代理。D 错误，索引知识源只提供接地内容，无法调用另一个代理。E 错误，发布是让主代理对用户可用，并不属于建立外部代理连接的步骤。"
  }
 },
 {
  "id": 40,
  "topic": 2,
  "qnum": 39,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "A company must enable an agent in Copilot Studio to execute operations exposed by an external MCP server.\nThe MCP server publishes callable tools and requires authentication.\nThe agent must be able to invoke MCP tools during conversations.\nYou need to configure MCP tools so the agent can execute MCP tool calls.\nWhat should you do?",
   "options": {
    "A": "Upload documentation about the MCP server so the agent can answer questions about it.",
    "B": "Enable generative answers so the model can automatically invoke MCP tools.",
    "C": "Publish the agent and rely on default settings for tool availability.",
    "D": "Add the MCP server to the agent's tool configuration."
   },
   "explanation": "The answer is D. In Copilot Studio, an MCP server is registered under the agent's Tools, where you point at the server, supply the connection and authentication, and the tools it publishes become available for the agent to call during a conversation. A is wrong because uploaded documentation only lets the agent talk about the MCP server; it grants no ability to execute its operations. B is wrong because generative answers produce grounded natural-language responses - they do not discover or invoke tools that have not been added to the agent. C is wrong because external MCP tools are never available by default; publishing without adding the server leaves the agent with nothing to call."
  },
  "zh": {
   "stem": "公司必须在 Copilot Studio 中启用一个代理，以执行由外部 MCP 服务器公开的操作。\nMCP 服务器发布可调用的工具，并要求进行身份验证。\n代理必须能够在对话中调用 MCP 工具。\n您需要配置 MCP 工具，以便代理可以执行 MCP 工具调用。\n您应该怎么做？",
   "options": {
    "A": "上传有关 MCP 服务器的文档，以便代理可以回答有关它的问题。",
    "B": "启用生成式回答，以便模型可以自动调用 MCP 工具。",
    "C": "发布代理并依赖工具可用性的默认设置。",
    "D": "将 MCP 服务器添加到代理的工具配置中。"
   },
   "explanation": "答案为 D。在 Copilot Studio 中，MCP 服务器需要添加到代理的\"工具\"配置里：指定服务器、提供连接与身份验证后，它发布的工具才会出现在代理可调用的工具列表中，从而能在对话中被调用。A 错误，上传文档只能让代理谈论该 MCP 服务器，无法执行其操作。B 错误，生成式回答产生的是基于知识源的自然语言回复，不会自行发现或调用未添加到代理的工具。C 错误，外部 MCP 工具不会默认可用，不添加服务器就直接发布，代理没有任何可调用的工具。"
  }
 },
 {
  "id": 41,
  "topic": 2,
  "qnum": 40,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company needs an agent to answer questions using live enterprise records and to execute a limited set of operations in the same system.\nTo meet the business needs, the agent must meet the following requirements:\nThe agent must update a record using authenticated access.\nThe agent must answer questions using live data at runtime.\nThe agent must avoid indexing enterprise data into a search index.\nYou need to select the correct Power Platform connector approach for each requirement.\nWhich option should you use for each requirement? To answer, move the appropriate solutions to the correct requirements. You may use each\nsolution once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "A Power Platform connector added as a tool exposes connector actions that the agent can execute with the user's authenticated connection, which is what an update to a record requires. Using a Power Platform connector as real-time knowledge queries the source system at runtime, so the agent answers from live records and, because nothing is copied into a search index, it also satisfies the requirement to avoid indexing enterprise data. \"Copilot connector knowledge source for indexed content\" is the distractor: it crawls and indexes enterprise content for search, which directly violates the no-indexing requirement and cannot guarantee live values. It also cannot perform write operations."
  },
  "zh": {
   "stem": "一家公司需要一个代理来使用实时企业记录回答问题，并在同一系统中执行一组有限的操作。\n为了满足业务需求，代理必须满足以下要求：\n代理必须使用经过身份验证的访问权限更新记录。\n代理必须在运行时使用实时数据回答问题。\n代理必须避免将企业数据索引到搜索索引中。\n您需要为每个需求选择正确的 Power Platform 连接器方法。\n您应该为每个需求使用哪个选项？要回答，请将适当的解决方案移动到正确的需求中。您可以对每个解决方案使用一次、多次或不\n使用。您可能需要在窗格之间移动分隔条或滚动以查看内容。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "将 Power Platform connector 添加为工具，可暴露连接器操作，agent 使用已通过身份验证的连接执行这些操作，正好满足\"更新记录\"的需求。将 Power Platform connector 用作实时知识（real-time knowledge）会在运行时直接查询源系统，因此既能基于实时数据作答，又不会把企业数据复制到搜索索引中，同时满足后两条需求。干扰项是 \"Copilot connector knowledge source for indexed content\"：它需要对企业内容进行爬取和索引，直接违反\"避免索引\"的要求，也无法保证数据实时，更不能执行写入操作。"
  },
  "sources_en": [
   "Power Platform connector tool.",
   "Power Platform connector as real-time knowledge.",
   "Copilot connector knowledge source for indexed content."
  ],
  "sources_zh": [
   "Power Platform connector 工具。",
   "将 Power Platform connector 用作实时知识。",
   "用于索引内容的 Copilot connector 知识源。"
  ],
  "targets": [
   {
    "label_en": "The agent must update a record using authenticated access.",
    "label_zh": "代理必须使用经过身份验证的访问权限更新记录。",
    "correct_en": "Power Platform connector tool.",
    "correct_zh": "Power Platform connector 工具。"
   },
   {
    "label_en": "The agent must answer questions using live data at runtime.",
    "label_zh": "代理必须在运行时使用实时数据回答问题。",
    "correct_en": "Power Platform connector as real-time knowledge.",
    "correct_zh": "将 Power Platform connector 用作实时知识。"
   },
   {
    "label_en": "The agent must avoid indexing enterprise data into a search index.",
    "label_zh": "代理必须避免将企业数据索引到搜索索引中。",
    "correct_en": "Power Platform connector as real-time knowledge.",
    "correct_zh": "将 Power Platform connector 用作实时知识。"
   }
  ]
 },
 {
  "id": 42,
  "topic": 2,
  "qnum": 41,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "A company uses an agent in Copilot Studio to coordinate user interactions.\nThe company wants the agent to delegate requests to a Microsoft Fabric Data Agent that accesses governed business data.\nThe agent must retrieve structured analytical data while enforcing data security and scope controls.\nYou need to select the integration approach that meets the requirements.\nWhat should you use?",
   "options": {
    "A": "A Microsoft Fabric Data Agent and bind it to the model.",
    "B": "A REST API action that queries Fabric tables directly.",
    "C": "A Power Automate flow and call it from a topic.",
    "D": "A Copilot connector knowledge source that indexes Fabric data."
   },
   "explanation": "The answer is A. A Microsoft Fabric Data Agent is the purpose-built integration for delegating questions to governed Fabric data: it returns structured analytical results and honors the underlying Fabric security model and scope of the data items it is configured over, and you bind it to the model so the agent can reason over its answers. B is wrong because a hand-built REST API action queries tables directly and bypasses the governance and scoping the Fabric Data Agent enforces. C is wrong because a Power Automate flow is an automation mechanism, not a governed analytical data-access integration. D is wrong because a Copilot connector knowledge source indexes content for search and grounding - it does not perform structured analytical queries with enforced data security."
  },
  "zh": {
   "stem": "一家公司在 Copilot Studio 中使用一个代理来协调用户交互。\n该公司希望代理将请求委派给一个 Microsoft Fabric 数据代理，以访问受管的业务数据。\n代理必须在执行数据安全和范围控制的同时，检索结构化的分析数据。\n您需要选择满足这些要求的集成方法。\n您应该使用什么？",
   "options": {
    "A": "一个 Microsoft Fabric 数据代理，并将其绑定到模型。",
    "B": "一个直接查询 Fabric 表的 REST API 操作。",
    "C": "一个 Power Automate 流，并从一个主题中调用它。",
    "D": "一个 Copilot 连接器知识源，用于索引 Fabric 数据。"
   },
   "explanation": "答案为 A。Microsoft Fabric 数据代理是把问题委派给受治理 Fabric 数据的专用集成方式：它返回结构化分析结果，并遵循底层 Fabric 的安全模型与所配置数据项的范围；将其绑定到模型后，代理即可基于其结果进行推理。B 错误，自建 REST API 操作直接查询表，会绕过 Fabric 数据代理所强制的治理与范围控制。C 错误，Power Automate 流是自动化机制，并非受治理的分析数据访问集成。D 错误，Copilot 连接器知识源用于索引内容以供搜索和接地，不能在强制数据安全的前提下执行结构化分析查询。"
  }
 },
 {
  "id": 43,
  "topic": 2,
  "qnum": 42,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company is building an agent in Copilot Studio that must answer questions using enterprise systems and must also perform authenticated\noperations.\nTo meet the business needs, the agent must meet the following requirements.\nThe agent must provide searchable answers from indexed enterprise content.\nThe agent must retrieve up-to-date facts at runtime without indexing data.\nThe agent must perform an authenticated update operation during the conversation.\nYou need to select the correct integration approach for each requirement.\nWhich option should you use for each requirement? To answer, move the appropriate solutions to the correct requirements. You may use each\nsolution once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "A Copilot connector knowledge source ingests and indexes enterprise content so the agent can return searchable, grounded answers with citations, which matches the first requirement. Using a Power Platform connector for real-time knowledge queries the backing system at request time, so facts are current and nothing has to be indexed in advance, matching the second requirement. A Power Platform connector tool is the only option that performs an action rather than a read, so it is the one that carries out an authenticated update during the conversation. Swapping the two Power Platform options fails: the read-only real-time knowledge path cannot write, and the connector tool does not provide indexed search over content."
  },
  "zh": {
   "stem": "一家公司正在 Copilot Studio 中构建一个代理，该代理必须使用企业系统回答问题，并且还必须执行认证操作。\n为了满足业务需求，该代理必须满足以下要求。\n代理必须从已索引的企业内容中提供可搜索的答案。\n代理必须在运行时检索最新事实，而无需索引数据。\n代理必须在对话期间执行认证更新操作。\n您需要为每个需求选择正确的集成方法。\n对于每个需求，您应该使用哪个选项？要回答，请将适当的解决方案移动到正确的需求中。每个解决方案可以使用一次、多次或不\n使用。您可能需要移动分隔条或滚动以查看内容。\n注意：每个正确选择值一分。",
   "options": {},
   "explanation": "Copilot connector 知识源会摄取并索引企业内容，使 agent 能给出可检索、带引用的接地答案，满足第一条需求。将 Power Platform connector 用作实时知识会在请求时查询后端系统，数据始终最新且无需预先索引，满足第二条需求。Power Platform connector 工具是唯一执行动作（而非只读）的选项，因此负责在对话中执行经过身份验证的更新。两个 Power Platform 选项不可互换：实时知识路径是只读的，无法写入；连接器工具也不提供对内容的索引式检索。"
  },
  "sources_en": [
   "Power Platform connector tool",
   "Copilot connector knowledge source",
   "Power Platform connector for real-time knowledge"
  ],
  "sources_zh": [
   "Power Platform connector 工具",
   "Copilot connector 知识源",
   "用作实时知识的 Power Platform connector"
  ],
  "targets": [
   {
    "label_en": "The agent must provide searchable answers from indexed enterprise content.",
    "label_zh": "代理必须从已索引的企业内容中提供可检索的答案。",
    "correct_en": "Copilot connector knowledge source",
    "correct_zh": "Copilot connector 知识源"
   },
   {
    "label_en": "The agent must retrieve up-to-date facts at runtime without indexing data.",
    "label_zh": "代理必须在运行时检索最新事实，且不索引数据。",
    "correct_en": "Power Platform connector for real-time knowledge",
    "correct_zh": "用作实时知识的 Power Platform connector"
   },
   {
    "label_en": "The agent must perform an authenticated update operation during the conversation.",
    "label_zh": "代理必须在对话期间执行经过身份验证的更新操作。",
    "correct_en": "Power Platform connector tool",
    "correct_zh": "Power Platform connector 工具"
   }
  ]
 },
 {
  "id": 44,
  "topic": 2,
  "qnum": 43,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company is extending agents in Copilot Studio with both external capabilities and enterprise content access. Some user requests require\ngrounded answers, while other requests require executing actions.\nTo meet the business needs, the agent must meet the following requirements:\nGround answers using results from enterprise data.\nInvoke callable functions exposed through a standardized tool interface.\nWrite an update to a system by using an authenticated action during the conversation.\nYou need to integrate the correct approach to meet the requirements.\nWhat should you integrate for each requirement? To answer, move the appropriate integrations to the correct requirements. You may use each\nintegration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Each requirement maps to a different Copilot Studio extensibility surface. Grounding answers on enterprise data is done by adding Dataverse tables as a structured data knowledge source, so the agent can reason over live business records. Invoking callable functions through a standardized tool interface is exactly what Model Context Protocol provides, so you connect to an MCP server and add its tools to the agent. Writing an update to a system with an authenticated action is done with a Power Platform connector tool called from a topic, because connectors carry the user or service connection credentials needed for a write operation. Adding a Copilot connector knowledge source for indexed content is a distractor: it only indexes external content for read-only grounding and cannot invoke tools or write data."
  },
  "zh": {
   "stem": "一家公司正在通过 Copilot Studio 扩展代理功能，既包括外部能力，也包括企业内容访问。一些用户请求需要基于事实的回答，而其\n他请求则需要执行操作。\n为了满足业务需求，代理必须满足以下要求：\n使用企业数据的结果来提供基于事实的回答。\n通过标准化工具接口调用可调用的功能。\n在对话过程中使用经过身份验证的操作向系统写入更新。\n您需要集成正确的方法以满足这些要求。\n应该为每个要求集成什么？要回答，请将适当的集成移动到正确的要求。每个集成可以使用一次、多次或不使用。您可能需要移动\n分割条或滚动以查看内容。\n注意：每个正确选择都值一分。",
   "options": {},
   "explanation": "三个需求分别对应 Copilot Studio 的不同扩展方式。用企业数据支撑回答，应把 Dataverse 表添加为结构化数据知识源，让代理直接基于业务记录作答。通过标准化工具接口调用可调用函数，正是 MCP 的用途，因此连接到 MCP 服务器并把其工具添加到代理。在对话中使用经过身份验证的操作向系统写入更新，则应添加 Power Platform 连接器工具并从主题中调用，因为连接器携带写操作所需的连接凭据。干扰项“添加 Copilot 连接器知识源以访问索引内容”只能做只读的索引内容检索，既不能调用工具也不能写入数据。"
  },
  "sources_en": [
   "Connect to an MCP server and add its tools to the agent.",
   "Add Dataverse tables as a structured data knowledge source.",
   "Add a Power Platform connector tool and call it from a topic.",
   "Add a Copilot connector knowledge source for indexed content."
  ],
  "sources_zh": [
   "连接到 MCP 服务器并将其工具添加到代理。",
   "将 Dataverse 表添加为结构化数据知识源。",
   "添加 Power Platform 连接器工具并从主题中调用它。",
   "添加用于索引内容的 Copilot 连接器知识源。"
  ],
  "targets": [
   {
    "label_en": "Ground answers using results from enterprise data.",
    "label_zh": "使用企业数据的结果来支撑回答。",
    "correct_en": "Add Dataverse tables as a structured data knowledge source.",
    "correct_zh": "将 Dataverse 表添加为结构化数据知识源。"
   },
   {
    "label_en": "Invoke callable functions exposed through a standardized tool interface.",
    "label_zh": "调用通过标准化工具接口公开的可调用函数。",
    "correct_en": "Connect to an MCP server and add its tools to the agent.",
    "correct_zh": "连接到 MCP 服务器并将其工具添加到代理。"
   },
   {
    "label_en": "Write an update to a system by using an authenticated action during the conversation.",
    "label_zh": "在对话期间使用经过身份验证的操作向系统写入更新。",
    "correct_en": "Add a Power Platform connector tool and call it from a topic.",
    "correct_zh": "添加 Power Platform 连接器工具并从主题中调用它。"
   }
  ]
 },
 {
  "id": 45,
  "topic": 2,
  "qnum": 44,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company plans to use Copilot connectors to ground answers from a third-party system for an agent in Copilot Studio.\nTo meet the business needs, responsibilities for configuring and using Copilot connectors must be separated, based on the following\nrequirements:\nFor tenant administration, the connector must be available at the tenant level.\nFor agent runtime behavior, answers must be grounded from authorized sources.\nFor builder configuration, you must add the connector to the agent.\nYou need to determine how Copilot connector set-up responsibilities are handled across tenant, runtime, and builder stages.\nWhat should you configure for each requirement? To answer, move the appropriate configuration to the correct requirements. You may use each\nconfiguration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "The graded answer is taken from the ExamTopics answer image, which maps Tenant administration to \"Configure the Copilot connector in Power Platform Admin Center.\", Agent runtime behavior to \"Add the Copilot connector as a knowledge source.\", and Builder configuration to \"Configure the Copilot connector in Microsoft 365 Admin Center.\" The idea being tested is that the connector must first be provisioned and approved at the tenant level by an administrator, the maker then attaches it to the agent, and at runtime the agent grounds answers from the authorized connector content. \"Create a new Copilot connector directly in Copilot Studio.\" is a distractor because Copilot connectors are created and published in an admin center, not inside Copilot Studio. Note that the AI walkthrough and normal Microsoft guidance would place the tenant-level step in the Microsoft 365 admin center and the builder step on \"Add the Copilot connector as a knowledge source.\"; the answer image disagrees and is kept as the graded answer."
  },
  "zh": {
   "stem": "拖放 -\n一家公司计划使用 Copilot 连接器在 Copilot Studio 中为代理从第三方系统获取答案。\n为了满足业务需求，配置和使用 Copilot 连接器的职责必须根据以下要求进行分离：\n对于租户管理，连接器必须在租户级别可用。\n对于代理运行时行为，答案必须从授权来源获取。\n对于构建者配置，您必须将连接器添加到代理中。\n您需要确定如何在租户、运行时和构建者阶段处理 Copilot 连接器设置职责。\n您应该为每个要求配置什么？要回答，请将适当的配置移动到正确的要求。每个配置可以使用一次、多次或不使用。您可能需要移\n动分割条或滚动以查看内容。\n注意：每个正确选择值一分。",
   "options": {},
   "explanation": "本题的判分答案取自 ExamTopics 的答案截图：租户管理对应“在 Power Platform 管理中心配置 Copilot 连接器”，代理运行时行为对应“将 Copilot 连接器添加为知识源”，构建者配置对应“在 Microsoft 365 管理中心配置 Copilot 连接器”。考点是职责分离：连接器必须先由管理员在租户级别预配并授权，制作者再把它挂载到代理，运行时代理才能从已授权的来源获取答案。“直接在 Copilot Studio 中创建新的 Copilot 连接器”是干扰项，因为 Copilot 连接器是在管理中心创建和发布的，而不是在 Copilot Studio 内。需要注意：AI 讲解与常规微软文档会把租户级步骤放在 Microsoft 365 管理中心、把构建者步骤定为“将 Copilot 连接器添加为知识源”，与答案截图不一致，此处仍以答案截图为准。"
  },
  "sources_en": [
   "Call the connector knowledge source.",
   "Add the Copilot connector as a knowledge source.",
   "Create a new Copilot connector directly in Copilot Studio.",
   "Configure the Copilot connector in Microsoft 365 Admin Center.",
   "Configure the Copilot connector in Power Platform Admin Center."
  ],
  "sources_zh": [
   "调用该连接器知识源。",
   "将 Copilot 连接器添加为知识源。",
   "直接在 Copilot Studio 中创建新的 Copilot 连接器。",
   "在 Microsoft 365 管理中心配置 Copilot 连接器。",
   "在 Power Platform 管理中心配置 Copilot 连接器。"
  ],
  "targets": [
   {
    "label_en": "Tenant administration",
    "label_zh": "租户管理",
    "correct_en": "Configure the Copilot connector in Power Platform Admin Center.",
    "correct_zh": "在 Power Platform 管理中心配置 Copilot 连接器。"
   },
   {
    "label_en": "Agent runtime behavior",
    "label_zh": "代理运行时行为",
    "correct_en": "Add the Copilot connector as a knowledge source.",
    "correct_zh": "将 Copilot 连接器添加为知识源。"
   },
   {
    "label_en": "Builder configuration",
    "label_zh": "构建者配置",
    "correct_en": "Configure the Copilot connector in Microsoft 365 Admin Center.",
    "correct_zh": "在 Microsoft 365 管理中心配置 Copilot 连接器。"
   }
  ]
 },
 {
  "id": 46,
  "topic": 2,
  "qnum": 45,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company uses an agent in Copilot Studio to answer questions based on enterprise content.\nThe content is indexed in Azure AI Search. Responses must be generated by a Microsoft Foundry model.\nTo meet the business needs, the solution must meet the following requirements:\nUsers are able to trace each answer back to its source.\nThe agent retrieves information from a centralized data index.\nResponses are generated by an enterprise-approved foundation model.\nYou need to configure generative answers for the agent.\nWhat should you configure for each requirement? To answer, move the appropriate configurations to the correct requirements. You may use each\nconfiguration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Traceability comes from citations, so you instruct the agent to cite sources in knowledge settings, which makes every generated answer show the document or record it came from. Retrieval from a centralized data index is satisfied by configuring Azure AI Search as the grounding data source, because the enterprise content is already indexed there. Generation by an enterprise-approved foundation model requires deploying a model in Foundry to an agent and connecting it to Copilot Studio, so the agent uses the governed model instead of the default one. \"Upload documents directly into the agent.\" is the main distractor: it creates a per-agent file store rather than using the centralized index, and it does not address citations or model choice."
  },
  "zh": {
   "stem": "拖放 -\n一家公司在 Copilot Studio 中使用代理来基于企业内容回答问题。\n内容已在 Azure AI Search 中建立索引。回答必须由 Microsoft Foundry 模型生成。\n为了满足业务需求，解决方案必须满足以下要求：\n用户能够追溯每个答案的来源。\n代理从集中式数据索引中检索信息。\n回答由企业批准的基础模型生成。\n您需要为代理配置生成式回答。\n应该为每个需求配置什么？要回答，请将适当的配置移动到正确的需求中。每个配置可以使用一次、多次或不使用。您可能需要移\n动分割条以调整窗格或滚动查看内容。\n注意：每个正确选择都值一分。",
   "options": {},
   "explanation": "可追溯性来自引用：在知识设置中让代理引用来源，每条生成回答都会显示其出处文档或记录。从集中式数据索引检索，应将 Azure AI Search 配置为基础（grounding）数据源，因为企业内容已在其中建立索引。由企业批准的基础模型生成回答，则需要在 Foundry 中把模型部署到代理并连接到 Copilot Studio，使代理使用受治理的模型而非默认模型。主要干扰项“直接将文档上传到代理”只会生成单个代理内的文件存储，既没有使用集中式索引，也无法解决引用和模型选择的问题。"
  },
  "sources_en": [
   "Upload documents directly into the agent.",
   "Configure Azure AI Search as the grounding data source.",
   "Instruct the agent to cite sources in knowledge settings.",
   "Deploy a model in Foundry to an agent and connect to Copilot Studio."
  ],
  "sources_zh": [
   "直接将文档上传到代理。",
   "将 Azure AI Search 配置为基础数据源。",
   "在知识设置中指示代理引用来源。",
   "在 Foundry 中将模型部署到代理并连接到 Copilot Studio。"
  ],
  "targets": [
   {
    "label_en": "Users trace each answer back to its source.",
    "label_zh": "用户能够将每条回答追溯到其来源。",
    "correct_en": "Instruct the agent to cite sources in knowledge settings.",
    "correct_zh": "在知识设置中指示代理引用来源。"
   },
   {
    "label_en": "The agent retrieves information from a centralized data index.",
    "label_zh": "代理从集中式数据索引中检索信息。",
    "correct_en": "Configure Azure AI Search as the grounding data source.",
    "correct_zh": "将 Azure AI Search 配置为基础数据源。"
   },
   {
    "label_en": "Responses are generated by an enterprise-approved foundational model.",
    "label_zh": "回答由企业批准的基础模型生成。",
    "correct_en": "Deploy a model in Foundry to an agent and connect to Copilot Studio.",
    "correct_zh": "在 Foundry 中将模型部署到代理并连接到 Copilot Studio。"
   }
  ]
 },
 {
  "id": 47,
  "topic": 2,
  "qnum": 46,
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "D",
   "E"
  ],
  "en": {
   "stem": "A company uses an agent in Copilot Studio to generate structured responses for internal users.\nThe agent must meet the following requirements:\nConsistently follow a reusable instruction template for response tone and structure.\nUse an enterprise-approved foundation model for responses generated through the template.\nYou need to configure custom prompts so the agent uses the Microsoft Foundry model catalog.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Publish the agent to apply the Foundry model selection automatically.",
    "B": "Configure Azure AI Search as the grounding source, so the model choice is enforced.",
    "C": "Allow topic authors to define tone and structure directly in topic steps.",
    "D": "Select a model from the Foundry model catalog for the custom prompt configuration.",
    "E": "Create a custom prompt template and apply it where the agent generates the structured response.",
    "F": "Enable citations, so the model is restricted to approved outputs."
   },
   "explanation": "The answers are D and E. Both requirements map directly to custom prompt configuration: pick a model from the Microsoft Foundry model catalog in the custom prompt so responses run on an enterprise-approved foundation model (D), and create a reusable custom prompt template that you apply wherever the agent generates the structured response so tone and structure stay consistent (E). A is wrong because publishing deploys the agent but does not select a Foundry model. B is wrong because Azure AI Search is a grounding source and cannot enforce a model choice. C is wrong because letting topic authors define tone and structure per topic defeats the reusable-template requirement and produces inconsistent output. F is wrong because citations attribute sources; they do not restrict the model or its outputs."
  },
  "zh": {
   "stem": "一家公司在 Copilot Studio 中使用代理为内部用户生成结构化响应。\n代理必须满足以下要求：\n始终遵循可重复使用的指令模板，以确保响应的语气和结构一致。\n使用企业批准的基础模型，通过模板生成响应。\n您需要配置自定义提示，以便代理使用 Microsoft Foundry 模型目录。\n应该执行哪两项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择都值一分。",
   "options": {
    "A": "发布代理以自动应用 Foundry 模型选择。",
    "B": "配置 Azure AI Search 作为基础来源，以强制执行模型选择。",
    "C": "允许主题作者直接在主题步骤中定义语气和结构。",
    "D": "从 Foundry 模型目录中选择一个模型，用于自定义提示配置。",
    "E": "创建一个自定义提示模板，并将其应用于代理生成结构化响应的地方。",
    "F": "启用引用功能，以限制模型输出为批准内容。"
   },
   "explanation": "答案为 D 和 E。两项要求都落在自定义提示的配置上：在自定义提示中从 Microsoft Foundry 模型目录选择模型，使响应由企业批准的基础模型生成（D）；创建可复用的自定义提示模板并应用到代理生成结构化响应的位置，从而保持语气与结构一致（E）。A 错误，发布只是部署代理，不能选择 Foundry 模型。B 错误，Azure AI Search 是接地来源，无法强制模型选择。C 错误，让主题作者在各主题步骤中自行定义语气和结构，违背了可复用模板的要求，还会导致输出不一致。F 错误，引用只是标注来源，并不限制模型或其输出。"
  }
 },
 {
  "id": 48,
  "topic": 2,
  "qnum": 47,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company integrates an MCP service that exposes ticket-management operations.\nThe MCP service requires authenticated requests and exposes multiple callable operations that must be selectively governed for agent use.\nTo meet the business needs, the MCP configuration must meet the following requirements:\nOnly the allowed capabilities must be callable during conversations.\nRequests must succeed without embedding credentials in topic steps.\nThe agent must be configured to send requests to the correct backend.\nYou need to configure MCP tools for the agent.\nWhich setting should you configure for each requirement? To answer, move the appropriate settings to the correct requirements. You may use\neach setting once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Each MCP setting controls a different part of the integration. Limiting which operations the agent may call is done by listing the allowed capabilities, so \"CreateTicket, EscalateIncident, GetTicket, UpdateSLA\" is the setting that governs what is callable during conversations. Authentication is handled at the connection level by the API key header X-API-Key, which lets requests succeed without any credential being typed into a topic step. The Server URL is the endpoint the agent sends its MCP requests to, so it is what points the agent at the correct backend. Confusing these leads to the common mistakes of hard-coding the key inside a topic or assuming the server URL somehow restricts which tools are exposed."
  },
  "zh": {
   "stem": "一家公司集成了一个MCP服务，该服务提供票务管理操作。\nMCP服务需要经过身份验证的请求，并提供多个可调用的操作，这些操作必须为代理使用进行选择性管理。\n为了满足业务需求，MCP配置必须满足以下要求：\n在对话期间只能调用允许的功能。\n请求必须在主题步骤中不嵌入凭据的情况下成功。\n代理必须配置为向正确的后端发送请求。\n您需要为代理配置MCP工具。\n应为每个要求配置哪些设置？要回答，请将适当的设置移动到正确的要求。每个设置可以使用一次、多次或不使用。您可能需要移\n动拆分栏或滚动以查看内容。\n注意：每个正确选择都值一分。",
   "options": {},
   "explanation": "三个 MCP 设置各自负责集成的不同环节。限制代理可调用的操作，靠的是列出允许的功能，因此“CreateTicket, EscalateIncident, GetTicket, UpdateSLA”决定了对话期间哪些功能可被调用。身份验证在连接层通过 API 密钥标头 X-API-Key 处理，使请求无需在主题步骤中嵌入任何凭据即可成功。Server URL 是代理发送 MCP 请求的终结点，用于把请求指向正确的后端。混淆这三者会导致把密钥硬编码在主题里，或误以为 Server URL 能限制公开哪些工具。"
  },
  "sources_en": [
   "Server URL",
   "API key header X-API-Key",
   "CreateTicket, EscalateIncident, GetTicket, UpdateSLA"
  ],
  "sources_zh": [
   "Server URL",
   "API 密钥标头 X-API-Key",
   "CreateTicket、EscalateIncident、GetTicket、UpdateSLA"
  ],
  "targets": [
   {
    "label_en": "Only the allowed capabilities must be callable during conversations.",
    "label_zh": "对话期间只能调用允许的功能。",
    "correct_en": "CreateTicket, EscalateIncident, GetTicket, UpdateSLA",
    "correct_zh": "CreateTicket、EscalateIncident、GetTicket、UpdateSLA"
   },
   {
    "label_en": "Requests must succeed without embedding credentials in topic steps.",
    "label_zh": "请求必须在不于主题步骤中嵌入凭据的情况下成功。",
    "correct_en": "API key header X-API-Key",
    "correct_zh": "API 密钥标头 X-API-Key"
   },
   {
    "label_en": "The agent must be configured to send requests to the correct backend.",
    "label_zh": "代理必须配置为向正确的后端发送请求。",
    "correct_en": "Server URL",
    "correct_zh": "Server URL"
   }
  ]
 },
 {
  "id": 49,
  "topic": 2,
  "qnum": 48,
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "C"
  ],
  "en": {
   "stem": "An agent in Copilot Studio must complete tasks by automating interactions with a legacy desktop application that does not use APIs.\nDuring testing, the builder must confirm that the automation runs in a supported execution context and can inspect how each automation step\nexecutes during conversations.\nTo meet the business needs, the solution must:\nExecute UI automation in a supported, platform-managed environment.\nProvide visibility into how automation steps run during agent conversations.\nYou need to configure the agent based on the requirements.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Publish the agent so automation settings are applied at runtime.",
    "B": "Inspect automation execution details by using the agent runtime view.",
    "C": "Enable computer use for the agent so UI automation runs in the supported execution environment.",
    "D": "Add the desktop application as a knowledge source so the agent can reference its UI structure.",
    "E": "Configure a custom connector to simulate UI interactions through REST calls."
   },
   "explanation": "Automating a legacy desktop application that exposes no APIs requires the agent to drive the application's user interface, and in Copilot Studio that capability is delivered by computer use, which runs the UI automation inside a supported, Microsoft-managed execution environment (C). The second requirement, visibility into how each automation step executes during a conversation, is met by the agent runtime view, which shows the step-by-step execution details while testing (B). Publishing (A) only moves an already-configured agent to production and adds no execution context or visibility. Adding the desktop application as a knowledge source (D) supplies retrievable content, not UI control. A custom connector (E) is explicitly ruled out because the application has no REST surface to call."
  },
  "zh": {
   "stem": "在 Copilot Studio 中的代理必须通过自动化与不使用 API 的传统桌面应用程序进行交互来完成任务。\n在测试期间，构建者必须确认自动化在受支持的执行上下文中运行，并能够检查每个自动化步骤在对话期间的执行情况。\n为满足业务需求，解决方案必须：\n在受支持的、平台管理的环境中执行 UI 自动化。\n提供对代理对话期间自动化步骤运行情况的可见性。\n您需要根据要求配置代理。\n您应该执行哪两项操作？每个正确答案构成解决方案的一部分。\n注意：每个正确选择的价值为一分。",
   "options": {
    "A": "发布代理，以便在运行时应用自动化设置。",
    "B": "通过使用代理运行时视图检查自动化执行的详细信息。",
    "C": "启用代理的计算机使用，以便 UI 自动化在受支持的执行环境中运行。",
    "D": "将桌面应用程序添加为知识源，以便代理可以引用其 UI 结构。",
    "E": "配置自定义连接器，通过 REST 调用模拟 UI 交互。"
   },
   "explanation": "该桌面应用没有 API，只能通过操作界面来自动化。在 Copilot Studio 中，这由 computer use 提供：启用后 UI 自动化会在受支持的、平台托管的执行环境中运行，满足第一项要求（C）。第二项要求是查看每个自动化步骤在对话中的执行情况，这由 agent runtime view 提供，测试时可逐步查看执行细节（B）。A 的发布只是把已配置好的代理推到生产，不涉及执行环境或可见性；D 的知识源只提供可检索内容，无法控制 UI；E 的自定义连接器依赖 REST 调用，而题目已说明该应用不支持 API。"
  }
 },
 {
  "id": 50,
  "topic": 2,
  "qnum": 49,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company configures an agent flow that interacts with multiple systems to complete user requests.\nThe company must integrate external services, retrieve data, and notify users as part of the same automated flow run. To support this scenario,\nthe agent flow must be able to do the following:\nCall an external API.\nRetrieve stored data from a supported internal data source.\nSend a Teams message.\nYou need to select a connector or action type for each requirement.\nWhat should you use? To answer, move the appropriate connectors or actions to the correct requirements. You may use each connector or action\nonce, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Calling an external API that has no prebuilt connector is done with the HTTP action, so \"Make an HTTPS request.\" is used for the external service. Retrieving stored data from a supported internal data source is done through a standard connector such as Dataverse, SharePoint, or SQL Server, so \"Add a standard connector.\" covers that requirement. Sending a Teams message to the user is a notification action, so \"Trigger a notification.\" is the correct choice. The three are not interchangeable: an HTTPS request would require you to hand-build authentication and payloads for an internal source that already has a connector, and a standard connector alone does not describe the notify-the-user step."
  },
  "zh": {
   "stem": "一家公司配置了一个代理流程，该流程与多个系统交互以完成用户请求。\n公司必须在同一个自动化流程运行中集成外部服务、检索数据并通知用户。为支持此场景，代理流程必须能够执行以下操作：\n调用外部 API。\n从受支持的内部数据源检索存储的数据。\n发送 Teams 消息。\n您需要为每个需求选择一个连接器或操作类型。\n您应该使用什么？请将适当的连接器或操作移动到正确的需求中。每个连接器或操作可以使用一次、多次或不使用。您可能需要移\n动分隔条或滚动以查看内容。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "调用没有现成连接器的外部 API，应使用 HTTP 操作，因此外部服务对应“发出 HTTPS 请求”。从受支持的内部数据源检索存储的数据，应通过 Dataverse、SharePoint、SQL Server 等标准连接器完成，对应“添加标准连接器”。向用户发送 Teams 消息属于通知类操作，对应“触发通知”。三者不可互换：对已有连接器的内部数据源改用 HTTPS 请求，需要自行处理身份验证和请求负载；而仅“添加标准连接器”并不足以表达通知用户这一步。"
  },
  "sources_en": [
   "Trigger a notification.",
   "Make an HTTPS request.",
   "Add a standard connector."
  ],
  "sources_zh": [
   "触发通知。",
   "发出 HTTPS 请求。",
   "添加标准连接器。"
  ],
  "targets": [
   {
    "label_en": "Call an external API.",
    "label_zh": "调用外部 API。",
    "correct_en": "Make an HTTPS request.",
    "correct_zh": "发出 HTTPS 请求。"
   },
   {
    "label_en": "Retrieve stored data from a supported internal data source.",
    "label_zh": "从受支持的内部数据源检索存储的数据。",
    "correct_en": "Add a standard connector.",
    "correct_zh": "添加标准连接器。"
   },
   {
    "label_en": "Send a Teams message.",
    "label_zh": "发送 Teams 消息。",
    "correct_en": "Trigger a notification.",
    "correct_zh": "触发通知。"
   }
  ]
 },
 {
  "id": 51,
  "topic": 2,
  "qnum": 50,
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "C"
  ],
  "en": {
   "stem": "An agent in Copilot Studio must retrieve real-time data from an external system that exposes a REST API.\nThe API returns structured JSON data and requires authentication.\nThe agent must call the API during conversations to fulfill user requests.\nThe agent must retrieve real-time data from the external system by calling an authenticated REST API during a conversation.\nThe solution must use a supported mechanism that executes the REST API call and the call must be explicitly configured to run at runtime.\nYou need to determine which approaches add the REST API to the agent.\nWhich two solutions meet the goal? Each correct answer is a complete solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Configure an HTTP action and invoke it from a topic during the conversation.",
    "B": "Create a topic variable and use a Formula to parse the API endpoint string.",
    "C": "Add the REST API as a tool and call it either by using a topic or agent instruction.",
    "D": "Add the REST API as a knowledge source so the agent can query it during conversations.",
    "E": "Enable generative answers and rely on the model to fetch the REST API data automatically.",
    "F": "Create a global variable to store the API URL and call it using a Redirect node."
   },
   "explanation": "Copilot Studio offers two supported ways to make an explicit, authenticated REST call at runtime. An HTTP request action placed in a topic calls the endpoint directly and lets you configure the authentication and parse the JSON response (A). Alternatively the REST API can be registered as a tool and then invoked either from a topic or from the agent's instructions, which is the newer first-class mechanism for external operations (C). Both are explicitly configured calls, as the requirement demands. A Formula on a topic variable (B) only manipulates strings and never performs a request. A knowledge source (D) is for retrieving indexed static content, not for calling a live authenticated endpoint. Generative answers (E) cannot invoke an arbitrary API on its own, and a Redirect node (F) transfers control to another topic rather than to an external service."
  },
  "zh": {
   "stem": "代理在 Copilot Studio 中必须从公开 REST API 的外部系统检索实时数据。\n该 API 返回结构化的 JSON 数据，并需要身份验证。\n代理必须在对话期间调用 API 以满足用户请求。\n代理必须通过在对话期间调用经过身份验证的 REST API，从外部系统检索实时数据。\n解决方案必须使用支持的机制来执行 REST API 调用，并且调用必须明确配置为在运行时执行。\n您需要确定哪些方法可以将 REST API 添加到代理中。\n哪两个解决方案符合目标？每个正确答案都是一个完整的解决方案。\n注意：每个正确选择都值一分。",
   "options": {
    "A": "配置一个 HTTP 操作，并在对话期间从主题中调用它。",
    "B": "创建一个主题变量，并使用公式解析 API 端点字符串。",
    "C": "将 REST API 添加为工具，并通过使用主题或代理指令调用它。",
    "D": "将 REST API 添加为知识源，以便代理可以在对话期间查询它。",
    "E": "启用生成式答案，并依赖模型自动获取 REST API 数据。",
    "F": "创建一个全局变量来存储 API URL，并使用重定向节点调用它。"
   },
   "explanation": "在 Copilot Studio 中，能在运行时显式发起已验证 REST 调用的受支持机制有两种。一是在主题中添加 HTTP 请求操作，直接调用端点、配置身份验证并解析返回的 JSON（A）；二是把该 REST API 注册为工具（tool），再由主题或代理指令调用（C）。两者都属于明确配置的运行时调用，符合题意。B 的公式只能处理字符串，不会发出请求；D 的知识源用于检索静态索引内容，无法进行实时的带认证调用；E 的生成式答案不能自行调用任意 API；F 的重定向节点只是跳转到其他主题，不涉及外部服务。"
  }
 },
 {
  "id": 52,
  "topic": 2,
  "qnum": 51,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "A company must enable an agent in Copilot Studio to execute operations exposed by an external MCP server.\nThe MCP server publishes callable tools and requires authentication.\nThe agent must be able to invoke MCP tools during conversations.\nYou need to configure MCP tools so the agent can execute MCP tool calls.\nWhat should you do?",
   "options": {
    "A": "Enable generative answers so the model can automatically invoke MCP tools.",
    "B": "Add a Power Platform connector as real-time knowledge to replace MCP tools.",
    "C": "Add the MCP server output as an indexed knowledge source.",
    "D": "Configure authentication for the MCP server connection used by the agent."
   },
   "explanation": "The MCP server already publishes the callable tools, so nothing needs to be re-modelled inside the agent; what is missing is the credential the agent presents when it connects. Configuring authentication for the MCP server connection used by the agent (D) establishes that connection and is what allows the tools to actually be invoked during a conversation. Generative answers (A) produce grounded text and never authenticate or trigger MCP tool calls by themselves. A Power Platform connector (B) is a different integration path and does not expose the MCP server's operations. Indexing the MCP server output as a knowledge source (C) would only make static content searchable, which is retrieval rather than the tool execution the scenario requires."
  },
  "zh": {
   "stem": "公司必须在 Copilot Studio 中启用一个代理，以执行由外部 MCP 服务器公开的操作。\nMCP 服务器发布可调用的工具，并要求进行身份验证。\n代理必须能够在对话中调用 MCP 工具。\n您需要配置 MCP 工具，以便代理可以执行 MCP 工具调用。\n您应该怎么做？",
   "options": {
    "A": "启用生成式答案，以便模型可以自动调用 MCP 工具。",
    "B": "添加一个 Power Platform 连接器作为实时知识，以替代 MCP 工具。",
    "C": "将 MCP 服务器输出添加为索引的知识来源。",
    "D": "为代理使用的 MCP 服务器连接配置身份验证。"
   },
   "explanation": "MCP 服务器本身已经发布了可调用的工具，代理端不需要重新建模，缺的是连接时使用的凭据。为代理所用的 MCP 服务器连接配置身份验证（D），才能建立连接并在对话中真正调用这些工具。A 的生成式答案只负责生成有依据的文本，不会自行完成认证或触发 MCP 工具调用；B 的 Power Platform 连接器是另一条集成路径，无法暴露该 MCP 服务器的操作；C 把 MCP 输出加为索引知识源只能让静态内容可检索，属于检索而非题目要求的工具执行。"
  }
 },
 {
  "id": 53,
  "topic": 2,
  "qnum": 52,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "An agent in Copilot Studio must retrieve real-time data from an external system that exposes a REST API. The API returns structured JSON\nresponses and requires authentication.\nTo meet the business needs, the solution must meet the following requirements:\nThe agent calls a REST API during a conversation.\nThe REST API call runs with proper authentication.\nThe REST API response is available to the topic at runtime.\nYou need to configure the REST API to meet the requirements.\nWhat should you configure for each requirement? To answer, move the appropriate configurations to the correct requirements. You may use each\nconfiguration once, more than once, or not at au. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "The three requirements map to the three steps of wiring a REST API into an agent. To have the agent call the API during a conversation you configure a REST action and call it from a topic, which turns the endpoint into an invokable step in the conversation flow. To make the call run with proper authentication you build an authenticated connection for the API, so credentials are managed by the connection rather than by the topic. To make the JSON response usable later in the conversation you store the API response in a topic variable. \"Add the API as an indexed knowledge source.\" is the distractor: indexing is for static retrieval and grounding, and it cannot return real-time data or execute the call."
  },
  "zh": {
   "stem": "在 Copilot Studio 中，一个代理必须从公开 REST API 的外部系统中检索实时数据。该 API 返回结构化的 JSON 响应，并需要身份验\n证。\n为满足业务需求，解决方案必须满足以下要求：\n代理在对话期间调用 REST API。\nREST API 调用以适当的身份验证运行。\nREST API 响应在运行时可用于主题。\n您需要配置 REST API 以满足这些要求。\n您应该为每个要求配置什么？要回答，请将适当的配置移动到正确的要求中。您可以对每个配置使用一次、多次或不使用。您可能\n需要移动分隔条或滚动以查看内容。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "三个需求对应把 REST API 接入代理的三个步骤。要让代理在对话中调用该 API，需配置 REST 操作并从主题中调用，这样终结点就成为对话流程中可调用的步骤。要让调用以正确的身份验证运行，需为该 API 建立经过身份验证的连接，凭据由连接管理而不是写在主题里。要让 JSON 响应在运行时可供主题后续使用，需将 API 响应存储到主题变量中。干扰项“将该 API 添加为索引知识源”属于静态检索与知识支撑的用法，既无法返回实时数据，也不会真正执行调用。"
  },
  "sources_en": [
   "Store the API response in a topic variable.",
   "Add the API as an indexed knowledge source.",
   "Build an authenticated connection for the API.",
   "Configure a REST action and call it from a topic."
  ],
  "sources_zh": [
   "将 API 响应存储在主题变量中。",
   "将该 API 添加为索引知识源。",
   "为该 API 建立经过身份验证的连接。",
   "配置 REST 操作并从主题中调用它。"
  ],
  "targets": [
   {
    "label_en": "Agent calls a REST API during a conversation.",
    "label_zh": "代理在对话期间调用 REST API。",
    "correct_en": "Configure a REST action and call it from a topic.",
    "correct_zh": "配置 REST 操作并从主题中调用它。"
   },
   {
    "label_en": "REST API call runs with proper authentication.",
    "label_zh": "REST API 调用以适当的身份验证运行。",
    "correct_en": "Build an authenticated connection for the API.",
    "correct_zh": "为该 API 建立经过身份验证的连接。"
   },
   {
    "label_en": "REST API response is available to the topic at runtime.",
    "label_zh": "REST API 响应在运行时可供主题使用。",
    "correct_en": "Store the API response in a topic variable.",
    "correct_zh": "将 API 响应存储在主题变量中。"
   }
  ]
 },
 {
  "id": 54,
  "topic": 2,
  "qnum": 53,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "A company is configuring generative answers for an agent in Copilot Studio agent.\nThe agent must use Azure AI Search to retrieve enterprise content, and all responses must be generated by a Microsoft Foundry model.\nThe agent sometimes generates answers that are not grounded in Azure AI Search content. The company requires that the agent only generate\nresponses when relevant indexed content is retrieved.\nYou need to configure the agent so that its generative answer behavior meets the organization's requirements.\nWhat should you do?",
   "options": {
    "A": "Use Azure AI Search as a tailback source and enable answer expansion.",
    "B": "Upload documents into the agent and disable fallback responses.",
    "C": "Require grounding for generative answers and use Azure AI Search as the retrieval source.",
    "D": "Enable citations and configure a public model endpoint.",
    "E": "Enable conversational boosting and select a Foundry-approved model."
   },
   "explanation": "The graded answer is B: uploading the documents into the agent puts the content under the agent's own knowledge handling, and disabling fallback responses stops the model from answering when no relevant content is retrieved, which is the behavior the company asked for. Using Azure AI Search only as a tailback source with answer expansion (A) does the opposite, since answer expansion lets the model go beyond retrieved content. Citations with a public model endpoint (D) surfaces sources but does not restrict ungrounded generation and conflicts with the Microsoft Foundry model requirement. Conversational boosting (E) broadens where answers come from instead of constraining them. Note that option C reads as the cleaner fit, because it names both grounding and Azure AI Search as the retrieval source; the AI walkthrough in the source PDF recommends C and disagrees with the official key. B is retained as the graded answer per ExamTopics."
  },
  "zh": {
   "stem": "一家公司正在为Copilot Studio代理配置生成式答案。\n该代理必须使用Azure AI Search检索企业内容，并且所有响应必须由Microsoft Foundry模型生成。\n该代理有时会生成不基于Azure AI Search内容的答案。公司要求代理仅在检索到相关的索引内容时生成响应。\n您需要配置代理，以使其生成式答案行为符合组织的要求。\n您应该怎么做？",
   "options": {
    "A": "将Azure AI Search用作后备来源并启用答案扩展。",
    "B": "将文档上传到代理并禁用后备响应。",
    "C": "要求生成式答案必须有依据，并使用Azure AI Search作为检索来源。",
    "D": "启用引用并配置一个公共模型端点。",
    "E": "启用对话增强并选择一个Foundry批准的模型。"
   },
   "explanation": "官方答案为 B：把文档上传到代理后由代理自身的知识处理机制管理，再禁用后备（fallback）响应，模型在检索不到相关内容时就不会作答，这正是公司要求的行为。A 把 Azure AI Search 仅当作后备来源并启用答案扩展，方向相反——答案扩展会让模型超出检索内容。D 的引用只是显示来源，并不限制无依据的生成，且公共模型端点与必须使用 Microsoft Foundry 模型的要求冲突。E 的对话增强是扩大答案来源，而非约束。需要注意：选项 C 同时点明了内容绑定（grounding）与 Azure AI Search 检索源，看起来更贴合题意，源 PDF 的 AI 解析也推荐 C 并质疑官方答案；此处仍以官方答案 B 计分。"
  }
 },
 {
  "id": 55,
  "topic": 2,
  "qnum": 54,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company wants to extend an agent in Copilot Studio by calling an external REST API to retrieve and update data.\nTo meet the business needs, the REST API must be added following a correct dependency order.\nYou need to add a REST API to the agent so it can be invoked during conversations.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the\ncorrect order.",
   "options": {},
   "explanation": "Adding a REST API tool to a Copilot Studio agent follows a dependency chain: the connection must be able to authenticate before the endpoint can be reached, the tool has to exist before its endpoint details (base URL, path, method, parameters, response schema) can be filled in, and nothing can be validated until the whole definition is complete. The ExamTopics answer image therefore places authentication configuration first, then adding the REST API tool, then configuring the endpoint details, and finally testing the API configuration. Testing is always last because it is the verification step that exercises the finished tool from the agent's test pane. Note that the Chinese AI walkthrough recommends adding the tool first and configuring authentication second; the official answer image is used here as the graded order."
  },
  "zh": {
   "stem": "一家公司希望通过调用外部 REST API 来扩展 Copilot Studio 中的代理，以检索和更新数据。\n为了满足业务需求，必须按照正确的依赖顺序添加 REST API。\n您需要将 REST API 添加到代理中，以便可以在对话期间调用它。\n您应该按照什么顺序执行这些操作？请将所有操作从操作列表移动到答案区域，并按正确的顺序排列。",
   "options": {},
   "explanation": "向 Copilot Studio 代理添加 REST API 工具存在依赖顺序：必须先能通过身份验证，才能真正访问 API；工具存在后才能填写端点详情（基址、路径、方法、参数、响应结构）；而在整个定义完成之前无法进行验证。官方答案图给出的顺序为：先配置 API 的身份验证，再添加 REST API 工具，然后配置 API 端点详情，最后测试 API 配置。测试必然是最后一步，因为它是在代理测试面板中验证已完成工具的环节。注意：中文 AI 解析推荐先添加工具再配置身份验证，本题以官方答案图为准。"
  },
  "sources_en": [
   "Add the REST API tool.",
   "Test the API configuration.",
   "Configure authentication for the API.",
   "Configure the API endpoint details."
  ],
  "sources_zh": [
   "添加 REST API 工具。",
   "测试 API 配置。",
   "配置 API 的身份验证。",
   "配置 API 端点详情。"
  ],
  "targets": [
   {
    "label_en": "Step 1",
    "label_zh": "步骤 1",
    "correct_en": "Configure authentication for the API.",
    "correct_zh": "配置 API 的身份验证。"
   },
   {
    "label_en": "Step 2",
    "label_zh": "步骤 2",
    "correct_en": "Add the REST API tool.",
    "correct_zh": "添加 REST API 工具。"
   },
   {
    "label_en": "Step 3",
    "label_zh": "步骤 3",
    "correct_en": "Configure the API endpoint details.",
    "correct_zh": "配置 API 端点详情。"
   },
   {
    "label_en": "Step 4",
    "label_zh": "步骤 4",
    "correct_en": "Test the API configuration.",
    "correct_zh": "测试 API 配置。"
   }
  ]
 },
 {
  "id": 56,
  "topic": 2,
  "qnum": 55,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company needs an agent in Copilot Studio to complete tasks by interacting with a legacy desktop application that does NOT have APIs.\nTo meet the business needs, the solution must meet the following requirements:\nThe agent must interact with the application's UI.\nThe execution must run on supported infrastructure.\nThe builder must be able to observe how the tool runs during execution.\nYou need to configure the agent based on the requirements.\nWhich setting should you configure for each requirement? To answer, move the appropriate settings to the correct requirements. You may use\neach setting once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "A legacy desktop application without APIs can only be driven through its user interface, which is exactly what the Computer use tool in Copilot Studio does - it lets the agent see the screen and act on UI elements such as buttons and fields. Computer use runs in a platform-hosted (Microsoft-hosted) execution environment, which is the supported infrastructure for these runs, so no machine or machine group of your own has to be attached. To watch what the tool actually did, the builder opens the run details in the agent's runtime view, where each step of the computer use session is recorded. The three settings therefore map one-to-one to the three requirements."
  },
  "zh": {
   "stem": "一家公司需要在 Copilot Studio 中配置一个代理，通过与没有 API 的传统桌面应用程序交互来完成任务。\n为满足业务需求，解决方案必须满足以下要求：\n代理必须与应用程序的用户界面进行交互。\n执行必须在受支持的基础设施上运行。\n构建者必须能够观察工具在执行期间的运行情况。\n您需要根据要求配置代理。\n应为每个要求配置哪些设置？要回答，请将适当的设置移动到正确的要求中。每个设置可以使用一次、多次或不使用。您可能需要\n移动分隔条或滚动以查看内容。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "没有 API 的传统桌面应用只能通过其用户界面进行操作，这正是 Copilot Studio 中 Computer use 工具的作用——它让代理能够看到屏幕并操作按钮、输入框等 UI 元素。Computer use 运行在平台托管（Microsoft 托管）的执行环境中，这就是受支持的基础设施，因此不需要自行连接计算机或计算机组。要观察工具的实际执行情况，构建者可在代理的运行时视图中查看运行详情，其中记录了 computer use 会话的每一个步骤。因此三个设置与三个要求一一对应。"
  },
  "sources_en": [
   "Enable Computer use tool for the agent.",
   "Monitor run details in the agent runtime view.",
   "Use a platform-hosted execution environment."
  ],
  "sources_zh": [
   "为代理启用 Computer use 工具。",
   "在代理运行时视图中监视运行详情。",
   "使用平台托管的执行环境。"
  ],
  "targets": [
   {
    "label_en": "Agent interacts with the application's UI.",
    "label_zh": "代理与应用程序的 UI 交互。",
    "correct_en": "Enable Computer use tool for the agent.",
    "correct_zh": "为代理启用 Computer use 工具。"
   },
   {
    "label_en": "Execution runs on supported infrastructure.",
    "label_zh": "执行在受支持的基础设施上运行。",
    "correct_en": "Use a platform-hosted execution environment.",
    "correct_zh": "使用平台托管的执行环境。"
   },
   {
    "label_en": "Builder observes how the tool runs during execution.",
    "label_zh": "构建者观察工具在执行期间的运行情况。",
    "correct_en": "Monitor run details in the agent runtime view.",
    "correct_zh": "在代理运行时视图中监视运行详情。"
   }
  ]
 },
 {
  "id": 57,
  "topic": 2,
  "qnum": 56,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear on the review screen.\nA company is configuring an agent in Copilot Studio that uses a generative answers node inside multiple topics.\nThe company requires responses to meet the following requirements:\nMust use an executive summary format.\nMust apply only within a specific topic.\nMust continue using configured knowledge sources.\nMust comply with connector security controls.\nYou need to configure a custom prompt to meet the formatting requirements.\nSolution: Add instructions in the custom prompt tool to restrict connector access during runtime.\nDoes the solution meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "The answer is No. The task is to satisfy a formatting requirement, so the custom prompt must tell the model how to shape the response, for example by instructing it to produce an executive summary. Adding instructions that restrict connector access at runtime addresses none of that: it targets a security concern, and connector security is in any case enforced by the platform's DLP and connection settings, not by wording inside a prompt. The solution therefore leaves the executive-summary format and the topic-scoped requirement unmet, so it does not meet the goal."
  },
  "zh": {
   "stem": "注意：本问题是一个系列问题的一部分，呈现了相同的场景。系列中的每个问题包含一个可能满足所述目标的独特解决方案。某些\n问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在您回答本部分中的问题后，您将无法返回。因此，这些问题将不会出现在复查屏幕上。\n一家公司正在 Copilot Studio 中配置一个代理，该代理在多个主题中使用生成式回答节点。\n该公司要求响应满足以下要求：\n必须使用执行摘要格式。\n必须仅适用于特定主题。\n必须继续使用配置的知识来源。\n必须遵守连接器安全控制。\n您需要配置一个自定义提示以满足格式要求。\n解决方案：在自定义提示工具中添加指令以限制运行时的连接器访问。\n该解决方案是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "答案是否。本题要满足的是格式要求，因此自定义提示应当告诉模型如何组织回答，例如指示其输出执行摘要结构。在自定义提示中添加限制运行时连接器访问的指令与此无关：它针对的是安全问题，而连接器安全本来就由平台的 DLP 与连接设置强制执行，不是靠提示词的措辞实现的。该方案既没有实现执行摘要格式，也没有解决仅适用于特定主题的要求，因此不满足目标。"
  }
 },
 {
  "id": 58,
  "topic": 2,
  "qnum": 57,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear on the review screen.\nA company is configuring an agent in Copilot Studio that uses a generative answers node inside multiple topics.\nThe company requires responses to meet the following requirements:\nMust use an executive summary format.\nMust apply only within a specific topic.\nMust continue using configured knowledge sources.\nMust comply with connector security controls.\nYou need to configure a custom prompt to meet the formatting requirements.\nSolution: Create a custom prompt tool in the specific topic that instructs the model to respond using an executive-summary structure.\nDoes the solution meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "The answer is Yes. Creating a custom prompt tool inside the specific topic and instructing the model to respond with an executive-summary structure directly delivers the formatting requirement, and because the tool lives in that one topic it applies only there and leaves the other topics using the generative answers node untouched. The prompt only shapes how the response is written, so the agent keeps drawing on its configured knowledge sources, and it changes nothing about connections, so connector security controls still apply. All four stated requirements are therefore satisfied."
  },
  "zh": {
   "stem": "注意：本问题是一个系列问题的一部分，呈现了相同的场景。系列中的每个问题包含一个可能满足所述目标的独特解决方案。一些\n问题集可能有多个正确解决方案，而其他问题可能没有正确解决方案。\n在您回答本部分中的问题后，您将无法返回。因此，这些问题不会出现在复查屏幕上。\n一家公司正在 Copilot Studio 中配置一个代理，该代理在多个主题中使用生成式回答节点。\n该公司要求响应满足以下要求：\n必须使用执行摘要格式。\n必须仅适用于特定主题。\n必须继续使用配置的知识来源。\n必须遵守连接器安全控制。\n您需要配置一个自定义提示以满足格式要求。\n解决方案：在特定主题中创建一个自定义提示工具，指示模型使用执行摘要结构进行响应。\n该解决方案是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "答案是。在特定主题中创建自定义提示工具并指示模型以执行摘要结构作答，直接满足了格式要求；由于该工具只存在于这一个主题内，它仅在该主题生效，其他使用生成式回答节点的主题不受影响。提示只影响回答的表述方式，代理仍会继续使用已配置的知识来源；它也不改动任何连接，因此连接器安全控制依然有效。四项要求全部满足。"
  }
 },
 {
  "id": 59,
  "topic": 3,
  "qnum": 1,
  "isCaseStudy": true,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You need to implement tool usage in topics that meet the Blue Yonder design and governance requirements.\nWhich implementation method should you use for each requirement? To answer, move the appropriate implementation methods to the correct\nrequirements. You may use each implementation method once, more than once, or not at all. You may need to move the split bar between panes\nor scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "This case-study item maps three tool-usage requirements to implementation methods, and the graded answer comes from the ExamTopics answer image. It pairs \"Let the agent decide when to run a tool based on user input\" with adding a Question node for the user to choose the tool, \"Run a specific agent flow at a defined step in a topic\" with adding an Adaptive Card, and \"Use a connector action to retrieve data during a conversation\" with adding a tool node. Only a tool node can host a connector action inside a topic, which is why the third pairing is uncontroversial. Be aware that the Chinese walkthrough disagrees on the first two: it argues that letting the agent decide when to call a tool is what a tool node (with generative orchestration) does, and that a Question node is what forces a specific choice at a defined step - the community-style reasoning and the official image are in conflict here, and the official image is the graded answer.",
   "scenario": "Background -\nBlue Yonder Airlines is a global carrier headquartered in Los Angeles, California, operating domestic and international flights. The company serves\nmillions of passengers annually through its website, mobile app, and call centers. To improve customer service efficiency and reduce call center\nvolume, Blue Yonder is deploying an AI agent in Microsoft Copilot Studio.\nThe agent will handle customer inquiries across multiple channels – web chat, mobile app, and Microsoft Teams (for internal support staff). It will\nanswer questions, retrieve data from enterprise systems, and escalate to human agents when needed.\nThe project is led by a cross-function team:\nProduct manager: Defines requirements and success metrics.\nLead agent author: Designs topics, intents, and generative behavior.\nFlow designers: Build agent flows and integrations.\nIT/security and compliance: Oversees identity, data protection, and Responsible AI (RAI) compliance.\nCurrent environment -\nChannels -\nPublic website: Embedded web chat\nMobile app: In-app chatbot -\nMicrosoft Teams: Internal support agent access\nIdentity and access -\nCustomers: Anonymous access for general inquiries (e.g., flight status, baggage policy).\nAuthentication is required for personal data access (e.g., bookings, loyalty points).\nInternal staff: Authenticate via Microsoft Entra ID.\nData sources -\nReservation and Ticketing System (internal): REST API, no prebuilt connector with custom enterprise database.\nFlight Status and Weather APIs (external): REST APIs with API keys.\nCustomer Support Knowledge Base: SharePoint library with PDFs and policy documents.\nLoyalty Program Data: Stored in Dynamics 365 and Dataverse.\nTravel Advisory Content: Uses REST API with partner services.\nIntegration mechanisms -\nCustom connectors must be used for internal APIs that lack prebuilt connectors.\nHTTP request nodes may be used for lightweight external APIs.\nKnowledge sources must be used for unstructured content.\nAgent flows must be used to encapsulate reusable logic (e.g., rebooking).\nBusiness requirements -\nOmnichannel support -\nDeploy the agent across web, mobile, and Teams with a consistent user experience. The Teams deployment must also support internal staff.\nSelf-service capabilities -\nThe agent must handle common inquiries such as:\nFlight status -\nBooking and rebooking -\nLoyalty program questions -\nTravel policies and baggage rules\nHuman escalation -\nIf the agent cannot resolve an issue or the user requests help, it must:\nEscalate to a human agent.\nTransfer the conversation transcript and relevant context.\nRedact any sensitive personal data before escalation.\nKnowledge integration -\nThe agent must use scalable methods for knowledge integration and must not rely on manually authored Q&A topics for each document.\nPerformance metrics -\nFirst-contact resolution: +25%\nTier-1 call deflection: ≥20%\nResponse time: 90% of queries answered within 30 seconds\nAccuracy: ≥95% for known FAQs -\nCSAT: ≥85% for AI-handled interactions\nTechnical requirements -\nPlatform constraints -\nNo custom code is permitted; only Copilot Studio's built-in tools may be used.\nAll backend logic must be implemented using agent flows.\nMarkdown must be used for formatting (e.g., bold, bullet points); HTML is not supported.\nAuthentication -\nSign-in is required for personal data access.\nAnonymous access is allowed for general inquiries.\nUser identity must be used for data access; shared or builder credentials must not be used.\nCompliance and security -\nPower Platform DLP policies must be enforced to block unauthorized data flows.\nResponsible AI content moderation filters must be enabled.\nPrompt modifications must be added to enforce tone, disclaimers, and refusal behavior.\nDisclaimers must be applied consistently across all generative responses. Manual edits to individual topics must be avoided.\nMonitoring and maintenance -\nAll conversations and actions must be logged for auditing.\nWeekly reviews of transcripts and metrics must be conducted.\nIssues and constraints -\nAPI rate limits: External APIs (e.g., flight status) have usage limits. Agent flows must handle retries and caching to avoid exceeding quotas.\nKnowledge base limits: Copilot Studio has limits on the number and size of indexed documents. Large files must be split or summarized.\nGenerative answer risks: Generative responses must be constrained to avoid policy violations. Prompt modifications and filters must be used to\nenforce tone, safety, and compliance.\nUser input variability: Users phrase questions in diverse ways. Topics must include varied trigger phrases and fallback handling.\nAuthentication UX: The agent must clearly explain when sign-in is required and handle transitions smoothly across channels.\nProblem statement -\nBlue Yonder Airlines must deploy a secure, scalable, and policy-compliant AI agent using Microsoft Copilot Studio. The agent must deliver\naccurate, helpful, and safe responses across multiple channels, integrate with enterprise systems, and support both anonymous and\nauthenticated users. It must adhere to strict data protection and Responsible AI standards while improving customer service efficiency and\nsatisfaction."
  },
  "zh": {
   "stem": "您需要在符合蓝天航空设计和治理要求的主题中实施工具使用。\n对于每个需求，您应该使用哪种实施方法？要回答，请将适当的实施方法移动到正确的需求中。每种实施方法可以使用一次、多次\n或不使用。您可能需要移动分隔条或滚动以查看内容。\n注意：每个正确选择得一分。\n建议答案：",
   "options": {},
   "explanation": "本案例研究题要求把三个工具使用需求对应到实现方法，评分以官方答案图为准：『让代理根据用户输入决定何时运行工具』对应『添加问题节点供用户选择工具』；『在主题的特定步骤运行指定的代理流』对应『添加自适应卡片』；『在对话中使用连接器操作检索数据』对应『添加工具节点』。第三项没有争议，因为在主题中只有工具节点才能承载连接器操作。需要注意的是，中文解析对前两项持不同看法：它认为由代理自主决定何时调用工具正是工具节点（配合生成式编排）的行为，而问题节点才是在特定步骤强制用户做出选择的方式。此处解析与官方答案图存在冲突，本题以官方答案图为准。",
   "scenario": "背景 -\nBlue Yonder Airlines 是一家总部位于加利福尼亚州洛杉矶的全球航空公司，运营国内和国际航班。该公司通过其网站、移动应用程序\n和呼叫中心每年为数百万乘客提供服务。为了提高客户服务效率并减少呼叫中心的工作量，Blue Yonder 正在 Microsoft Copilot Studio\n中部署一个 AI 代理。\n该代理将通过多个渠道处理客户查询——网页聊天、移动应用程序和 Microsoft Teams（用于内部支持员工）。它将回答问题、从企业\n系统中检索数据，并在需要时升级到人工代理。\n该项目由一个跨职能团队领导：\n产品经理：定义需求和成功指标。\n首席代理作者：设计主题、意图和生成行为。\n流程设计师：构建代理流程和集成。\nIT/安全与合规：监督身份、数据保护和负责任的 AI（RAI）合规性。\n现有环境 -\n渠道 -\n公共网站：嵌入式网页聊天\n移动应用程序：应用内聊天机器人 -\nMicrosoft Teams：内部支持代理访问\n身份和访问 -\n客户：一般查询（例如航班状态、行李政策）允许匿名访问。\n访问个人数据（例如预订、忠诚度积分）需要身份验证。\n内部员工：通过 Microsoft Entra ID 进行身份验证。\n数据源 -\n预订和票务系统（内部）：REST API，无预构建连接器，使用自定义企业数据库。\n航班状态和天气 API（外部）：REST API，使用 API 密钥。\n客户支持知识库：SharePoint 库，包含 PDF 和政策文件。\n忠诚度计划数据：存储在 Dynamics 365 和 Dataverse 中。\n旅行建议内容：使用 REST API 与合作伙伴服务集成。\n集成机制 -\n对于缺乏预构建连接器的内部 API，必须使用自定义连接器。\n轻量级外部 API 可使用 HTTP 请求节点。\n知识源必须用于非结构化内容。\n代理流程必须用于封装可重用逻辑（例如重新预订）。\n业务需求 -\n全渠道支持 -\n在网页、移动端和 Teams 上部署代理，提供一致的用户体验。Teams 部署还必须支持内部员工。\n自助服务能力 -\n代理必须处理常见查询，例如：\n航班状态 -\n预订和重新预订 -\n忠诚度计划问题 -\n旅行政策和行李规则\n人工升级 -\n如果代理无法解决问题或用户请求帮助，它必须：\n升级到人工代理。\n传递对话记录和相关上下文。\n在升级之前编辑任何敏感个人数据。\n知识集成 -\n代理必须使用可扩展的方法进行知识集成，不能依赖于为每个文档手动编写的问答主题。\n性能指标 -\n首次接触解决率：+25%\n一级呼叫分流：≥20%\n响应时间：90%的查询在30秒内回答\n准确性：已知常见问题的准确率≥95% -\n客户满意度：AI 处理的交互满意度≥85%\n技术需求 -\n平台限制 -\n不允许使用自定义代码；只能使用 Copilot Studio 的内置工具。\n所有后端逻辑必须使用代理流程实现。\n必须使用 Markdown 进行格式化（例如加粗、项目符号）；不支持 HTML。\n身份验证 -\n访问个人数据需要登录。\n一般查询允许匿名访问。\n必须使用用户身份进行数据访问；不得使用共享或构建者凭据。\n合规性和安全性 -\n必须强制执行 Power Platform DLP 策略以阻止未经授权的数据流。\n必须启用负责任的 AI 内容审核过滤器。\n必须添加提示修改以强制执行语气、免责声明和拒绝行为。\n必须在所有生成响应中一致地应用免责声明。不得对单个主题进行手动编辑。\n监控和维护 -\n所有对话和操作必须记录以供审计。\n必须每周审查对话记录和指标。\n问题和限制 -\nAPI 速率限制：外部 API（例如航班状态）有使用限制。代理流程必须处理重试和缓存以避免超出配额。\n知识库限制：Copilot Studio 对索引文档的数量和大小有限制。大文件必须拆分或摘要化。\n生成回答风险：生成的响应必须受到约束以避免违反政策。必须使用提示修改和过滤器以强制执行语气、安全性和合规性。\n用户输入多样性：用户以多种方式表达问题。主题必须包括多样化的触发短语和回退处理。\n身份验证用户体验：代理必须清楚说明何时需要登录，并在各渠道之间平稳处理过渡。\n问题陈述 -\nBlue Yonder Airlines 必须使用 Microsoft Copilot Studio 部署一个安全、可扩展且符合政策的 AI 代理。该代理必须在多个渠道提供准\n确、有帮助且安全的响应，与企业系统集成，并支持匿名和认证用户。它必须遵守严格的数据保护和负责任的 AI 标准，同时提高客\n户服务效率和满意度。"
  },
  "sources_en": [
   "Add a tool node.",
   "Add an Adaptive Card.",
   "Enable generative orchestration.",
   "Display a static message instead of using a tool.",
   "Add a Question node for the user to choose the tool."
  ],
  "sources_zh": [
   "添加工具节点。",
   "添加自适应卡片。",
   "启用生成式编排。",
   "显示静态消息而不使用工具。",
   "添加问题节点供用户选择工具。"
  ],
  "targets": [
   {
    "label_en": "Let the agent decide when to run a tool based on user input.",
    "label_zh": "让代理根据用户输入决定何时运行工具。",
    "correct_en": "Add a Question node for the user to choose the tool.",
    "correct_zh": "添加问题节点供用户选择工具。"
   },
   {
    "label_en": "Run a specific agent flow at a defined step in a topic.",
    "label_zh": "在主题的特定步骤运行指定的代理流。",
    "correct_en": "Add an Adaptive Card.",
    "correct_zh": "添加自适应卡片。"
   },
   {
    "label_en": "Use a connector action to retrieve data during a conversation.",
    "label_zh": "在对话中使用连接器操作检索数据。",
    "correct_en": "Add a tool node.",
    "correct_zh": "添加工具节点。"
   }
  ]
 },
 {
  "id": 60,
  "topic": 4,
  "qnum": 1,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear on the review screen.\nA company is configuring an agent in Copilot Studio that uses a generative answers node inside multiple topics.\nThe company requires responses to meet the following requirements:\nMust use an executive summary format.\nMust apply only within a specific topic.\nMust continue using configured knowledge sources.\nMust comply with connector security controls.\nYou need to configure a custom prompt to meet the formatting requirements.\nSolution: Configure the custom prompt tool at the topic level so that other topics are not affected.\nDoes the solution meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "The graded answer is No. The stated action only decides where the custom prompt tool is placed so that other topics are not affected; it says nothing about what the prompt actually instructs the model to do. Since the task is specifically to meet the formatting requirement, scoping alone does not produce the executive-summary structure, and the solution is incomplete. The version of this scenario that does meet the goal is the one where the custom prompt in the topic explicitly instructs an executive-summary response. Note that the AI walkthrough in the source PDF argues for Yes on the grounds that topic-level configuration satisfies the scope requirement; ExamTopics' official key is No and is kept as the graded answer."
  },
  "zh": {
   "stem": "注意：本问题是一个系列问题的一部分，呈现了相同的场景。系列中的每个问题包含一个可能满足所述目标的独特解决方案。某些\n问题集可能有多个正确解决方案，而其他问题可能没有正确解决方案。\n在您回答本部分中的问题后，您将无法返回。因此，这些问题不会出现在复习屏幕上。\n一家公司正在 Copilot Studio 中配置一个代理，该代理在多个主题中使用生成式回答节点。\n该公司要求响应满足以下要求：\n必须使用执行摘要格式。\n必须仅适用于特定主题。\n必须继续使用配置的知识来源。\n必须遵守连接器安全控制。\n您需要配置一个自定义提示以满足格式要求。\n解决方案：在主题级别配置自定义提示工具，以便其他主题不受影响。\n该解决方案是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "官方答案为否。该方案只说明了自定义提示工具放置的位置，使其他主题不受影响，却完全没有说明提示中要让模型做什么。而本题要满足的恰恰是格式要求，仅做范围限定并不能产生执行摘要结构，因此方案不完整。真正满足目标的做法是在该主题的自定义提示中明确指示模型以执行摘要结构作答。需注意：源 PDF 的 AI 解析以“主题级配置满足范围要求”为由推荐“是”，与官方答案不一致；此处仍以官方答案“否”计分。"
  }
 },
 {
  "id": 61,
  "topic": 4,
  "qnum": 2,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "A team is developing an agent in Copilot Studio and wants to evaluate its behavior before expanding access.\nThe team needs a repeatable, consistent method to test the agent using predefined interactions.\nYou need to ensure that agent responses can be evaluated consistently across multiple test runs.\nWhat should you do?",
   "options": {
    "A": "Review evaluation scores from previous production sessions.",
    "B": "Enable telemetry and analytics to monitor intent matches, fallback usage, and response frequency.",
    "C": "Define test sets of prompts and expectations.",
    "D": "Change the evaluation method to a qualitative approach.",
    "E": "Publish the agent to additional channels for broader usage."
   },
   "explanation": "Copilot Studio's evaluation feature works from test sets: a fixed collection of prompts paired with the expected outcome for each one. Because the same inputs and expectations are replayed on every run, results are directly comparable across runs, which is exactly the repeatable and consistent method the team needs before widening access (C). Evaluation scores from previous production sessions (A) come from unpredictable real user traffic and cannot be reproduced. Telemetry and analytics (B) monitor aggregate behavior such as intent matches and fallback rates after the fact rather than testing defined interactions. A qualitative approach (D) relies on human judgement and is not reproducible. Publishing to more channels (E) expands exposure instead of evaluating the agent."
  },
  "zh": {
   "stem": "一个团队正在 Copilot Studio 中开发一个代理，并希望在扩大访问权限之前评估其行为。\n团队需要一种可重复、一致的方法，通过预定义的交互来测试代理。\n您需要确保代理的响应能够在多次测试运行中一致地进行评估。\n您应该怎么做？",
   "options": {
    "A": "审查之前生产会话中的评估分数。",
    "B": "启用遥测和分析以监控意图匹配、回退使用情况和响应频率。",
    "C": "定义提示和期望的测试集。",
    "D": "将评估方法更改为定性方法。",
    "E": "将代理发布到其他渠道以扩大使用范围。"
   },
   "explanation": "Copilot Studio 的评估功能基于测试集（test set）：一组固定的提示及每条提示的预期结果。每次运行都重放相同的输入与期望，结果因此可跨运行直接比较，正是团队在扩大访问权限前所需的可重复、一致的方法（C）。A 的生产会话评估分数来自不可预测的真实用户流量，无法复现；B 的遥测与分析是事后监控意图匹配率、回退率等汇总指标，并非对既定交互的测试；D 的定性方法依赖主观判断，不具可重复性；E 发布到更多渠道只是扩大使用范围，不是评估手段。"
  }
 },
 {
  "id": 62,
  "topic": 4,
  "qnum": 3,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company builds agents in Copilot Studio in a development environment.\nThe agents are packaged inside a solution and deployed by using Power Platform Pipelines to test and production environments.\nThe company has the following requirements that must be met:\nProduction deployments are limited to a defined set of users who are responsible for that stage.\nThe same solution is reused across all environments without editing its components.\nThe production environment always receives a locked-down version of the solution.\nYou need to configure the pipeline and solution behavior to meet the requirements.\nWhat should you configure? To answer, move the appropriate configurations to the correct requirements. You may use each configuration once,\nmore than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Power Platform Pipelines controls who may run a deployment through stage access: configuring stage access on the production stage restricts that stage to the defined set of deployment owners, so that requirement is met at the pipeline level rather than in the solution. Environment variables let the same solution move through dev, test and production while only the values differ per environment, so no component has to be edited to reuse the solution. Deploying as managed gives production a locked-down, non-editable version whose components cannot be customized in place and that can be cleanly uninstalled; deploying as unmanaged would leave everything editable in production and is therefore wrong."
  },
  "zh": {
   "stem": "一家公司在开发环境中使用 Copilot Studio 构建代理。\n这些代理被打包在一个解决方案中，并通过 Power Platform Pipelines 部署到测试和生产环境。\n公司必须满足以下要求：\n生产部署仅限于负责该阶段的一组定义用户。\n同一个解决方案在所有环境中重复使用，而无需编辑其组件。\n生产环境始终接收解决方案的锁定版本。\n您需要配置管道和解决方案行为以满足这些要求。\n应该如何配置？要回答，请将适当的配置移动到正确的要求。每个配置可以使用一次、多次或不使用。您可能需要移动分割条以调\n整窗格或滚动查看内容。\n注意：每个正确选择都值一分。",
   "options": {},
   "explanation": "Power Platform Pipelines 通过阶段访问权限控制谁可以执行部署：为生产阶段配置阶段访问权限，即可将该阶段限定给指定的部署负责人，因此该需求在管道层面而非解决方案层面解决。环境变量让同一个解决方案在开发、测试和生产之间流转时只需改变各环境的值，无需修改任何组件即可复用解决方案。以托管（managed）方式部署可使生产环境获得锁定的、不可就地自定义的版本，并且能够干净卸载；而以非托管（unmanaged）方式部署会让生产中的所有组件都可编辑，因此是错误选项。"
  },
  "sources_en": [
   "Deploy the solution as managed.",
   "Deploy the solution as unmanaged.",
   "Use environment variables in the solution.",
   "Configure stage access for the production stage."
  ],
  "sources_zh": [
   "以托管方式部署解决方案。",
   "以非托管方式部署解决方案。",
   "在解决方案中使用环境变量。",
   "为生产阶段配置阶段访问权限。"
  ],
  "targets": [
   {
    "label_en": "Limit users who can deploy to production.",
    "label_zh": "限制可以部署到生产环境的用户。",
    "correct_en": "Configure stage access for the production stage.",
    "correct_zh": "为生产阶段配置阶段访问权限。"
   },
   {
    "label_en": "Reuse the same solution across environments without modifying its components.",
    "label_zh": "在各环境中复用同一个解决方案而不修改其组件。",
    "correct_en": "Use environment variables in the solution.",
    "correct_zh": "在解决方案中使用环境变量。"
   },
   {
    "label_en": "Ensure production receives a locked-down version of the solution.",
    "label_zh": "确保生产环境收到锁定版本的解决方案。",
    "correct_en": "Deploy the solution as managed.",
    "correct_zh": "以托管方式部署解决方案。"
   }
  ]
 },
 {
  "id": 63,
  "topic": 4,
  "qnum": 4,
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You run multiple evaluation tests for an agent in Copilot Studio before expanding user access.\nThe tests provide the following results:\nEach evaluation case is reported as meeting or missing the expected response.\nSome evaluation cases fail repeatedly across several runs.\nEach run displays the expected response and the response generated by the agent.\nYou need to provide a conclusion based on the evaluation results.\nWhich conclusions should you make? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Each dropdown asks what a specific evaluation result actually tells you, nothing more. Reporting every case as meeting or missing the expected response is a pass or fail status per case; it says nothing about how the agent is configured (failure configuration) or whether the agent is ready for production. Cases that fail repeatedly across several runs demonstrate consistent outcomes - the failures are reproducible rather than intermittent, and while that may eventually lead to prompt revisions, revising prompts is an action you take, not a conclusion the results support on their own. Showing both the expected response and the response the agent generated is simply a side-by-side of expected and generated responses; it does not by itself identify the root cause of failures or constitute deployment approval."
  },
  "zh": {
   "stem": "热点 -\n您在 Copilot Studio 中为代理运行多个评估测试，然后再扩大用户访问权限。\n测试提供以下结果：\n每个评估案例均报告为符合或未达到预期响应。\n某些评估案例在多次运行中反复失败。\n每次运行都会显示预期响应以及代理生成的响应。\n您需要根据评估结果提供一个结论。\n您应该得出哪些结论？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
   "options": {},
   "explanation": "每个下拉框只问某项评估结果本身能说明什么。每个评估案例被报告为符合或未达到预期响应，这就是逐案例的通过或失败状态；它并不涉及代理的配置（失败配置），也不能说明是否具备生产就绪性。某些案例在多次运行中反复失败，说明结果具有一致性——失败是可重现的，而非间歇性的；虽然这可能促使后续修订提示词，但『提示词修订』是要采取的行动，而不是结果本身支持的结论。每次运行同时显示预期响应和代理生成的响应，仅仅是预期与生成响应的并列对比，本身既无法确定失败的根本原因，也不构成部署批准。"
  },
  "boxes": [
   {
    "prompt_en": "Evaluation case meeting or missing expected response.",
    "prompt_zh": "评估案例符合或未达到预期响应。",
    "options_en": [
     "Pass or fail status",
     "Failure configuration",
     "Production readiness"
    ],
    "options_zh": [
     "通过或失败状态",
     "失败配置",
     "生产就绪性"
    ],
    "correct_en": "Pass or fail status",
    "correct_zh": "通过或失败状态"
   },
   {
    "prompt_en": "Some evaluation cases fail repeatedly.",
    "prompt_zh": "某些评估案例反复失败。",
    "options_en": [
     "Prompt revisions",
     "Consistent outcomes",
     "Intermittent outcomes"
    ],
    "options_zh": [
     "提示词修订",
     "一致性结果",
     "间歇性结果"
    ],
    "correct_en": "Consistent outcomes",
    "correct_zh": "一致性结果"
   },
   {
    "prompt_en": "Each run displays expected response and agent response.",
    "prompt_zh": "每次运行都会显示预期响应和代理的响应。",
    "options_en": [
     "Deployment approval",
     "Root cause of failures",
     "Expected and generated responses"
    ],
    "options_zh": [
     "部署批准",
     "失败的根本原因",
     "预期与生成的响应"
    ],
    "correct_en": "Expected and generated responses",
    "correct_zh": "预期与生成的响应"
   }
  ]
 },
 {
  "id": 64,
  "topic": 4,
  "qnum": 5,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "An agent in Copilot Studio is evaluated using a fixed test set and an automated evaluation method.\nAfter running the evaluation, the team observes that the same three interactions fail in every run, while all other interactions pass consistently.\nYou need to use the evaluation results to determine an accurate conclusion.\nWhat should you conclude from the evaluation results?",
   "options": {
    "A": "The agent's overall design is flawed and requires a full redesign.",
    "B": "The failing interactions are caused by an issue in the underlying language model.",
    "C": "The outcomes isolate which portions of the agent's functional scope require remediation.",
    "D": "The agent should not be deployed."
   },
   "explanation": "A fixed test set run repeatedly is a diagnostic instrument, and the pattern here is highly informative: three interactions fail every time while everything else passes every time. That consistency points to specific, reproducible defects in a narrow part of the agent's behavior, so the correct conclusion is that the results isolate which portions of the agent's functional scope need remediation (C). Concluding that the overall design is flawed and needs a full redesign (A) contradicts the fact that the vast majority of interactions pass. Blaming the underlying language model (B) is unsupported, as the failures are just as likely to come from topic logic, instructions, or knowledge coverage. Deciding the agent should not be deployed (D) is a business judgement the results alone do not justify, especially since the failures are localized and fixable."
  },
  "zh": {
   "stem": "在 Copilot Studio 中的一个代理通过固定的测试集和自动化评估方法进行评估。\n运行评估后，团队观察到每次运行中相同的三个交互都会失败，而所有其他交互始终通过。\n你需要使用评估结果来得出一个准确的结论。\n根据评估结果，你应该得出什么结论？",
   "options": {
    "A": "代理的整体设计存在缺陷，需要完全重新设计。",
    "B": "失败的交互是由底层语言模型中的问题引起的。",
    "C": "结果隔离了代理功能范围中需要修复的部分。",
    "D": "代理不应被部署。"
   },
   "explanation": "固定测试集反复运行是一种诊断工具，而这里的模式信息量很大：同样的三个交互每次都失败，其余交互每次都通过。这种一致性说明缺陷是具体的、可复现的，且集中在代理行为的很小一部分，因此正确结论是评估结果隔离出了代理功能范围中需要修复的部分（C）。A 认为整体设计有缺陷需要重做，与绝大多数交互都通过的事实矛盾；B 归因于底层语言模型缺乏依据，失败同样可能来自主题逻辑、指令或知识覆盖；D 断定不应部署属于业务判断，仅凭评估结果不足以支撑，何况问题是局部且可修复的。"
  }
 },
 {
  "id": 65,
  "topic": 4,
  "qnum": 6,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "A team has an existing agent in Copilot Studio and must move it to a different target location without rebuilding the agent. Some builders use\nCopilot Studio in the web app, while others use Copilot Studio in Microsoft Teams.\nYou need a supported approach to move the existing agent to the target location using ALM practices. The solution must avoid rebuilding the\nagent.\nYou need to move the existing agent to the target location using a supported method.\nWhat should you do?",
   "options": {
    "A": "Remove agent components directly from the solution so that export and import will succeed.",
    "B": "Duplicate the agent in the source and manually recreate the changes in the target to avoid solution dependencies.",
    "C": "Create a custom solution, add the existing agent to the solution, export the solution with the agent, and import the solution into the target environment.",
    "D": "Publish the agent to a channel and use the channel configuration as the transport mechanism to the target environment."
   },
   "explanation": "Solutions are the supported ALM transport in Power Platform, and Copilot Studio agents are solution-aware components. The correct approach is therefore to create a custom (unmanaged) solution, add the existing agent to it, export the solution containing the agent, and import it into the target environment (C). This carries the agent and its dependencies across intact and avoids any rebuilding, regardless of whether builders work in the Copilot Studio web app or in Microsoft Teams. Removing agent components from the solution (A) would strip out exactly what needs to move. Duplicating the agent and manually recreating changes (B) is the rebuild the requirement rules out and is error-prone. Publishing to a channel (D) makes the agent available to users; it is a runtime surface, not a migration mechanism."
  },
  "zh": {
   "stem": "一个团队在 Copilot Studio 中已有一个现有的代理，必须将其移动到不同的目标位置，而无需重新构建代理。一些构建者在网络应用\n中使用 Copilot Studio，而另一些人在 Microsoft Teams 中使用 Copilot Studio。\n您需要一种受支持的方法，使用 ALM 实践将现有代理移动到目标位置。解决方案必须避免重新构建代理。\n您需要使用受支持的方法将现有代理移动到目标位置。\n您应该怎么做？",
   "options": {
    "A": "直接从解决方案中移除代理组件，以便导出和导入能够成功。",
    "B": "在源中复制代理，并在目标中手动重新创建更改，以避免解决方案依赖性。",
    "C": "创建一个自定义解决方案，将现有代理添加到解决方案中，导出包含代理的解决方案，并将解决方案导入目标环境。",
    "D": "将代理发布到一个频道，并使用频道配置作为传输机制将其移动到目标环境。"
   },
   "explanation": "在 Power Platform 中，解决方案（solution）是受支持的 ALM 迁移载体，而 Copilot Studio 代理是可加入解决方案的组件。因此正确做法是创建一个自定义（非托管）解决方案，把现有代理加入其中，导出包含该代理的解决方案，再导入目标环境（C）。这样代理及其依赖项可完整迁移，无需重建，且无论构建者使用 Web 应用还是 Microsoft Teams 中的 Copilot Studio 都适用。A 从解决方案中移除代理组件，恰恰删掉了要迁移的内容；B 手动复制并重建即题目明确禁止的重建做法，且易出错；D 发布到频道只是让用户可以使用代理，属于运行时接入面，不是迁移机制。"
  }
 },
 {
  "id": 66,
  "topic": 4,
  "qnum": 7,
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You are setting up an evaluation for an agent in Copilot Studio before expanding access to more users.\nYou must configure the evaluation so that the agent is tested by using prepared interactions rather than impromptu conversations.\nThe evaluation should provide the following functionality for users:\nAn administrator updates a sensitive configuration value. The administrator requires the change to take effect at runtime without republishing the\nagent.\nA builder needs to confirm a configuration value but must not be able to modify it from Copilot Studio.\nAn administrator updates a non-secret configuration value and requires the updated value to be used by the published agent at runtime.\nYou need to create a test set-based evaluation that supports consistent test runs for each scenario.\nWhat should you configure for each scenario? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "All three scenarios are solved with environment variables, which is why every other choice in the lists is a distractor. A secret environment variable stores its value in Azure Key Vault and is read at runtime, so an administrator can rotate the sensitive value in the vault and the published agent picks it up without republishing. A managed environment variable carries a value set by the administrator and surfaces it read-only to the builder in Copilot Studio, which is exactly the \"confirm but not modify\" requirement. A string environment variable holds a plain non-secret value whose current value is resolved at runtime by the published agent, so updating the value updates the agent's behavior. Options such as Only in production, Only after publishing, Publishing settings, Conversation volume, Live chat history and Channel rollout status are either analytics or publishing concepts and are unrelated to configuration values."
  },
  "zh": {
   "stem": "热点 -\n您正在为 Copilot Studio 中的代理设置评估，以便在向更多用户扩展访问权限之前进行测试。\n您必须配置评估，使代理通过预先准备的交互进行测试，而不是即兴对话。\n评估应为用户提供以下功能：\n管理员更新一个敏感的配置值。管理员要求更改在运行时生效，而无需重新发布代理。\n构建者需要确认一个配置值，但不得从 Copilot Studio 修改该值。\n管理员更新一个非机密的配置值，并要求已更新的值在运行时被已发布的代理使用。\n您需要创建一个基于测试集的评估，以支持每种场景的一致测试运行。\n对于每种场景，您应该配置什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "三个场景都靠环境变量解决，因此列表中的其他选项都是干扰项。机密环境变量（secret environment variable）将值存放在 Azure Key Vault 中并在运行时读取，管理员在保管库中更新敏感值后，已发布的代理无需重新发布即可生效。托管环境变量（managed environment variable）承载由管理员设定的值，并在 Copilot Studio 中以只读方式呈现给构建者，正好满足『可确认但不可修改』的要求。字符串环境变量（string environment variable）保存普通的非机密值，其当前值由已发布的代理在运行时解析，因此更新值即可改变代理行为。而 Only in production、Only after publishing、Publishing settings、Conversation volume、Live chat history、Channel rollout status 属于发布或分析类概念，与配置值无关。"
  },
  "boxes": [
   {
    "prompt_en": "Update a sensitive configuration value and the change takes effect at runtime without republishing the agent.",
    "prompt_zh": "更新敏感的配置值，且更改在运行时生效而无需重新发布代理。",
    "options_en": [
     "Only in production",
     "Only after publishing",
     "Secret environment variable"
    ],
    "options_zh": [
     "仅在生产环境中",
     "仅在发布之后",
     "机密环境变量"
    ],
    "correct_en": "Secret environment variable",
    "correct_zh": "机密环境变量"
   },
   {
    "prompt_en": "Confirm a configuration value but not modify it from Copilot Studio.",
    "prompt_zh": "确认某个配置值，但不能从 Copilot Studio 修改它。",
    "options_en": [
     "Publishing settings",
     "Conversation volume",
     "Managed environment variable"
    ],
    "options_zh": [
     "发布设置",
     "对话量",
     "托管环境变量"
    ],
    "correct_en": "Managed environment variable",
    "correct_zh": "托管环境变量"
   },
   {
    "prompt_en": "Update a non-secret configuration value and the updated value needs to be used by the published agent at runtime.",
    "prompt_zh": "更新非机密的配置值，且已发布的代理需要在运行时使用更新后的值。",
    "options_en": [
     "String environment variable",
     "Live chat history",
     "Channel rollout status"
    ],
    "options_zh": [
     "字符串环境变量",
     "实时聊天记录",
     "渠道发布状态"
    ],
    "correct_en": "String environment variable",
    "correct_zh": "字符串环境变量"
   }
  ]
 },
 {
  "id": 67,
  "topic": 4,
  "qnum": 8,
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "A team is preparing to evaluate an agent in Copilot Studio before expanding access to additional users.\nThe team must select an evaluation method that meets the following requirements:\nUse a fixed set of prepared interactions.\nDetermine responses against a predefined baseline.\nSupport consistent comparison across repeated test runs.\nYou need to determine the evaluation method that satisfies the evaluation requirements.\nWhich evaluation method should you select for each requirement? To answer, select the appropriate option in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "A curated prompt list gives you a fixed, prepared set of interactions that can be replayed identically, which live conversations cannot provide and which growing traffic does nothing to control. A baseline requires something to measure against, so responses must be compared against predefined expected outcomes; a successful publish status only proves deployment, and general impressions of quality are subjective and unrepeatable. Repeatable comparison across runs requires a consistent scoring evaluation matrix so every run is graded the same way, whereas post-rollout user feedback arrives too late and varies, and changing channel settings is unrelated to evaluation."
  },
  "zh": {
   "stem": "热点 -\n一个团队正在准备在 Copilot Studio 中评估一个代理，以便在扩大对其他用户的访问之前进行测试。\n团队必须选择一种符合以下要求的评估方法：\n使用一组固定的预设交互。\n根据预定义的基准确定响应。\n支持跨重复测试运行的一致比较。\n您需要确定满足评估要求的评估方法。\n对于每个要求，应选择哪种评估方法？请在答案区域选择适当的选项。\n注意：每个正确选择都值一分。\n建议答案：",
   "options": {},
   "explanation": "精心整理的提示列表提供了一组固定、可重复回放的预设交互，实时对话无法保证交互一致，扩大访问量只会增加流量而无法控制交互内容。建立基线需要有比较对象，因此必须将响应与预定义的预期结果进行比较；确认发布状态成功只说明部署完成，依赖质量的总体印象则过于主观且无法重复。要在多次运行之间进行一致比较，需要使用统一的评分评估矩阵，使每次运行都以相同标准评分；而发布后收集用户反馈时机太晚且波动大，更改频道设置与评估无关。"
  },
  "boxes": [
   {
    "prompt_en": "Use a fixed set of prepared interactions.",
    "prompt_zh": "使用一组固定的预设交互。",
    "options_en": [
     "Use a curated prompt list.",
     "Use only live conversations.",
     "Expand access to increase traffic."
    ],
    "options_zh": [
     "使用精心整理的提示列表。",
     "仅使用实时对话。",
     "扩大访问范围以增加流量。"
    ],
    "correct_en": "Use a curated prompt list.",
    "correct_zh": "使用精心整理的提示列表。"
   },
   {
    "prompt_en": "Establish a baseline for determining responses.",
    "prompt_zh": "建立用于判定响应的基线。",
    "options_en": [
     "Confirm publishing status as success.",
     "Rely on general impressions of quality.",
     "Compare against predefined expected outcomes."
    ],
    "options_zh": [
     "确认发布状态为成功。",
     "依赖对质量的总体印象。",
     "与预定义的预期结果进行比较。"
    ],
    "correct_en": "Compare against predefined expected outcomes.",
    "correct_zh": "与预定义的预期结果进行比较。"
   },
   {
    "prompt_en": "Support repeatable comparisons across runs.",
    "prompt_zh": "支持跨多次运行的可重复比较。",
    "options_en": [
     "Collect user feedback after rollout.",
     "Use a consistent scoring evaluation matrix.",
     "Change channel settings before publishing."
    ],
    "options_zh": [
     "在推出后收集用户反馈。",
     "使用一致的评分评估矩阵。",
     "在发布前更改频道设置。"
    ],
    "correct_en": "Use a consistent scoring evaluation matrix.",
    "correct_zh": "使用一致的评分评估矩阵。"
   }
  ]
 },
 {
  "id": 68,
  "topic": 4,
  "qnum": 9,
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "C",
   "D",
   "F"
  ],
  "en": {
   "stem": "A solution containing an agent in Copilot Studio is moved across environments. The agent relies on configuration values that are different\nbetween environments and are managed as environment variables.\nYou must ensure the following:\nConfiguration values are managed through environment variables that supports ALM.\nRuntime behavior reflects updates to environment variable values.\nYou need to implement environment-variable usage that supports ALM and ensures correct runtime behavior.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Replace environment variables with hard-coded values inside the agent so that runtime behavior is always consistent across environments.",
    "B": "Allow builders to change environment variable values directly in Copilot Studio during topic authoring to speed deployment.",
    "C": "Use environment variables as read-only in Copilot Studio and change their values in the appropriate administrative authoring experience.",
    "D": "Store external reference values as environment variables so the agent solution can move between environments while keeping the agent definition the same.",
    "E": "Assume that all environment variable updates take effect immediately at runtime for all variable types without republishing.",
    "F": "After an administrator updates a non-secret environment variable, republish any agents that use the variable so the change is effective at runtime."
   },
   "explanation": "Environment variables exist so that configuration that differs per environment can travel with the solution while the agent definition itself stays unchanged, which is exactly what D describes. In Copilot Studio the variables are surfaced read-only: makers reference them in topics, but the actual values are set in the administrative authoring experience (Power Apps / solution settings), which is what C states and is what keeps values consistent and governed across Dev, Test and Prod. C also rules out B, since letting builders edit values inline during topic authoring breaks that governance. Finally, an updated non-secret environment variable does not automatically reach a running agent, so the agent must be republished for the new value to take effect at runtime (F), which is also why E is false. A is wrong because hard-coding values defeats the entire purpose of ALM-friendly configuration."
  },
  "zh": {
   "stem": "一个包含代理的 Copilot Studio 解决方案被跨环境移动。该代理依赖于在不同环境中不同的配置值，这些值作为环境变量进行管理。\n您必须确保以下内容：\n配置值通过支持 ALM 的环境变量进行管理。\n运行时行为反映环境变量值的更新。\n您需要实现支持 ALM 的环境变量使用，并确保正确的运行时行为。\n您应该执行哪三项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择值一分。",
   "options": {
    "A": "将环境变量替换为代理中的硬编码值，以便运行时行为在各个环境中始终保持一致。",
    "B": "允许构建者在主题创作期间直接在 Copilot Studio 中更改环境变量值，以加快部署速度。",
    "C": "在 Copilot Studio 中将环境变量设置为只读，并在适当的管理创作体验中更改其值。",
    "D": "将外部引用值存储为环境变量，以便代理解决方案可以在环境之间移动，同时保持代理定义不变。",
    "E": "假设所有环境变量更新在运行时对所有变量类型立即生效，无需重新发布。",
    "F": "在管理员更新非机密环境变量后，重新发布使用该变量的任何代理，以便更改在运行时生效。"
   },
   "explanation": "环境变量的作用是让随环境变化的配置随解决方案一起迁移，而代理定义本身保持不变，这正是 D。C 正确：在 Copilot Studio 中环境变量是只读引用，实际值应在相应的管理创作体验中设置，从而保证各环境值的一致与受控；因此 B（让构建者在主题创作时直接改值）错误。F 正确：管理员更新非机密环境变量后，必须重新发布使用该变量的代理，新值才会在运行时生效；这也说明 E（假设所有更新立即生效、无需重新发布）错误。A 用硬编码值替代环境变量，完全违背 ALM 配置管理原则。官方答案与推荐答案一致，均为 C、D、F。"
  }
 },
 {
  "id": 69,
  "topic": 4,
  "qnum": 10,
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "An organization uses separate development and production environments for agents in Copilot Studio.\nYou create an agent in the development environment.\nThe agent must be deployed to production by using an ALM process.\nYou must configure the solution strategy to meet the following requirements:\nDevelopers continue modifying the agent in development.\nThe production deployment prevents direct modification.\nThe agent is exported from development and imported into production in a deployment-ready state.\nYou need to configure solutions to support deployment and lifecycle management of the agents.\nWhich solution type should you use for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Unmanaged solutions are editable containers, so developers keep working on the agent in the development environment inside an unmanaged solution. When that solution is exported as managed and imported into production, its components become locked and cannot be edited directly in production, which satisfies both the \"prevent modification\" and the \"deployment-ready state\" requirements. The default solution is intended only for ad-hoc work and cannot be exported for ALM, and an agent left standalone outside a solution has no supported export/import path at all."
  },
  "zh": {
   "stem": "热点 -\n一个组织在 Copilot Studio 中为代理使用了独立的开发和生产环境。\n您在开发环境中创建了一个代理。\n必须使用 ALM 流程将代理部署到生产环境。\n您必须配置解决方案策略以满足以下要求：\n开发人员继续在开发环境中修改代理。\n生产部署阻止直接修改。\n代理从开发环境导出，并以可部署的状态导入到生产环境。\n您需要配置解决方案以支持代理的部署和生命周期管理。\n对于每个要求，您应该使用哪种解决方案类型？请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "非托管解决方案是可编辑的容器，因此开发人员应在开发环境中使用非托管解决方案持续修改代理。将该解决方案以托管形式导出并导入生产环境后，其组件将被锁定、无法在生产环境中直接编辑，这同时满足“阻止生产环境修改”和“以可部署状态导入”两项要求。默认解决方案只适用于临时开发，不能用于 ALM 导出；而位于解决方案之外的独立代理没有受支持的导出/导入路径。"
  },
  "boxes": [
   {
    "prompt_en": "Allow ongoing development.",
    "prompt_zh": "允许持续开发。",
    "options_en": [
     "Default solution",
     "Managed solution",
     "Unmanaged solution",
     "Standalone agent outside a solution"
    ],
    "options_zh": [
     "默认解决方案",
     "托管解决方案",
     "非托管解决方案",
     "解决方案之外的独立代理"
    ],
    "correct_en": "Unmanaged solution",
    "correct_zh": "非托管解决方案"
   },
   {
    "prompt_en": "Prevent modification in production.",
    "prompt_zh": "阻止在生产环境中修改。",
    "options_en": [
     "Default solution",
     "Managed solution",
     "Temporary solution",
     "Unmanaged solution"
    ],
    "options_zh": [
     "默认解决方案",
     "托管解决方案",
     "临时解决方案",
     "非托管解决方案"
    ],
    "correct_en": "Managed solution",
    "correct_zh": "托管解决方案"
   },
   {
    "prompt_en": "Export from development and import into production in deployment-ready state.",
    "prompt_zh": "从开发环境导出并以可部署状态导入生产环境。",
    "options_en": [
     "Default solution",
     "Managed solution",
     "Unmanaged solution",
     "Standalone agent outside a solution"
    ],
    "options_zh": [
     "默认解决方案",
     "托管解决方案",
     "非托管解决方案",
     "解决方案之外的独立代理"
    ],
    "correct_en": "Managed solution",
    "correct_zh": "托管解决方案"
   }
  ]
 },
 {
  "id": 70,
  "topic": 4,
  "qnum": 11,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "A team is standardizing ALM for agents in Copilot Studio.\nThe team requires a custom solution that includes agents. The solution must support ALM scenarios, such as managing and transporting agent\nassets across environments and pipeline deployments.\nYou need to create an ALM-ready custom solution in Copilot Studio.\nWhat should you do?",
   "options": {
    "A": "Publish the agent to a channel and use that channel configuration as the ALM container.",
    "B": "Create a new custom solution from the Solutions area.",
    "C": "Export the custom solution as a managed solution and import it into production.",
    "D": "Export the agent directly and then import it into another environment."
   },
   "explanation": "The question asks how to create the ALM-ready container itself, not how to move it later. In Copilot Studio (and Power Platform generally) the unit of ALM is a Dataverse solution, so you start in the Solutions area and create a new custom solution that the agent and its dependent components live in (B). Once the agent sits in that solution it can be versioned, added to pipelines, and exported/imported across environments. C describes the later export-as-managed step, which is a downstream part of the same lifecycle but not the act of creating the solution the question asks for. A is wrong because publishing to a channel only makes the agent available to end users at runtime; it carries no assets. D is wrong because exporting an agent on its own bypasses solution packaging and loses dependencies."
  },
  "zh": {
   "stem": "一个团队正在为 Copilot Studio 中的代理标准化 ALM。\n团队需要一个包含代理的自定义解决方案。该解决方案必须支持 ALM 场景，例如管理和跨环境传输代理资产以及管道部署。\n您需要在 Copilot Studio 中创建一个支持 ALM 的自定义解决方案。\n您应该怎么做？",
   "options": {
    "A": "将代理发布到一个通道，并使用该通道配置作为 ALM 容器。",
    "B": "从解决方案区域创建一个新的自定义解决方案。",
    "C": "将自定义解决方案导出为托管解决方案，并将其导入生产环境。",
    "D": "直接导出代理，然后将其导入另一个环境。"
   },
   "explanation": "题目问的是如何“创建”支持 ALM 的自定义解决方案，而不是之后如何迁移。在 Copilot Studio / Power Platform 中，ALM 的载体是 Dataverse 解决方案，因此应从“解决方案”区域新建一个自定义解决方案，把代理及其依赖组件放入其中（B）。之后才能进行版本管理、加入管道并跨环境导出/导入。C（导出为托管解决方案并导入生产）属于生命周期的后续步骤，不是本题所问的创建动作。A 发布到通道只是让终端用户可用，不承载资产。D 直接导出代理会绕过解决方案打包并丢失依赖项。"
  }
 },
 {
  "id": 71,
  "topic": 4,
  "qnum": 12,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You run the same fixed test set three times in Copilot Studio.\nDuring evaluation, you observe the following:\nThe same interaction fails in all three runs.\nScore values range from 0.58 to 0.61.\nThe reasoning states that the response partially matches the expected answer.\nThe knowledge source that is used is internal documentation.\nNo tools are invoked.\nYou need to determine which conclusions are supported based on the evaluation results.\nWhich conclusions should you make? To answer, move the appropriate conclusions to the correct evaluation results. You may use each\nconclusion once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Because the same interaction fails in all three runs with scores clustered between 0.58 and 0.61, the results show a pattern of failure across repeated runs, which is the evidence of a recurring issue. The reasoning text states that the response partially matches the expected answer, so that is what the results tell you about response quality. The limitation is that evaluation reports the symptom, not the specific underlying cause of the failure - you would still need to inspect the topic, prompt, or knowledge content to find the root cause. \"Use of a connected knowledge source during the interaction\" is not a conclusion about a limitation; the knowledge source used was internal documentation and no tools were invoked."
  },
  "zh": {
   "stem": "您在 Copilot Studio 中运行相同的固定测试集三次。\n在评估过程中，您观察到以下情况：\n相同的交互在三次运行中均失败。\n得分值范围为 0.58 到 0.61。\n推理表明响应部分匹配预期答案。\n使用的知识来源是内部文档。\n未调用任何工具。\n您需要根据评估结果确定支持哪些结论。\n您应该得出哪些结论？要回答此问题，请将适当的结论移动到正确的评估结果中。每个结论可以使用一次、多次或不使用。您可能\n需要移动分隔条或滚动以查看内容。\n注意：每个正确选择值 1 分。",
   "options": {},
   "explanation": "同一交互在三次运行中都失败，且分数集中在 0.58 到 0.61 之间，说明存在跨多次运行的失败模式，这就是重复性问题的证据。推理文本指出响应部分匹配预期答案，因此这就是评估结果对响应质量的说明。评估的局限在于它只报告现象，无法指出失败的具体根本原因，仍需检查主题、提示或知识内容才能定位根因。“在交互中使用了已连接的知识源”并不是关于局限性的结论：本题使用的知识源是内部文档，且未调用任何工具。"
  },
  "sources_en": [
   "A pattern of failure across repeated runs.",
   "The specific underlying cause of the failure.",
   "Use of a connected knowledge source during the interaction.",
   "The response partially matches the expected answer."
  ],
  "sources_zh": [
   "跨多次运行的失败模式。",
   "失败的具体根本原因。",
   "在交互中使用了已连接的知识源。",
   "响应部分匹配预期答案。"
  ],
  "targets": [
   {
    "label_en": "Evidence of a recurring issue.",
    "label_zh": "重复性问题的证据。",
    "correct_en": "A pattern of failure across repeated runs.",
    "correct_zh": "跨多次运行的失败模式。"
   },
   {
    "label_en": "Information provided about response quality.",
    "label_zh": "关于响应质量提供的信息。",
    "correct_en": "The response partially matches the expected answer.",
    "correct_zh": "响应部分匹配预期答案。"
   },
   {
    "label_en": "Evaluation limitations.",
    "label_zh": "评估的局限性。",
    "correct_en": "The specific underlying cause of the failure.",
    "correct_zh": "失败的具体根本原因。"
   }
  ]
 },
 {
  "id": 72,
  "topic": 4,
  "qnum": 13,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A team wants to automate solution deployment between environments. Deployments must follow a controlled, repeatable process.\nThe team needs to implement a pipeline-based deployment process that enforces the correct dependency order.\nYou need to implement a deployment pipeline and determine the correct sequence of actions.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the\ncorrect order.",
   "options": {},
   "explanation": "Pipelines are a tenant-level Power Platform feature, so the host must be installed and pipelines enabled for the tenant before anything else can be configured. Next you assign the development, test, and production environments to the pipeline stages, which is what defines the controlled dependency order. Only after the stages exist can you trigger a pipeline run to deploy the solution, and finally you review the deployment results to confirm success and troubleshoot failures. Any other order fails because you cannot assign environments to stages that do not exist, and you cannot run a pipeline that has no stages."
  },
  "zh": {
   "stem": "一个团队希望在不同环境之间自动化解决方案的部署。部署必须遵循受控的、可重复的流程。\n该团队需要实施一个基于管道的部署流程，以强制执行正确的依赖顺序。\n您需要实施一个部署管道并确定正确的操作顺序。\n您应该按照什么顺序执行这些操作？要回答此问题，请将所有操作从操作列表移动到答案区域，并按正确顺序排列。",
   "options": {},
   "explanation": "管道是 Power Platform 的租户级功能，因此必须先为租户启用管道，才能进行后续配置。接着将开发、测试和生产环境分配到管道的各个阶段，这一步定义了受控的依赖顺序。只有阶段存在之后，才能触发管道运行来部署解决方案，最后审查部署结果以确认成功并排查失败。其他顺序都不成立，因为无法把环境分配到尚不存在的阶段，也无法运行没有阶段的管道。"
  },
  "sources_en": [
   "Assign environments to pipeline stages.",
   "Trigger a pipeline run.",
   "Enable pipelines for the tenant.",
   "Review deployment results."
  ],
  "sources_zh": [
   "将环境分配到管道阶段。",
   "触发管道运行。",
   "为租户启用管道。",
   "审查部署结果。"
  ],
  "targets": [
   {
    "label_en": "Step 1",
    "label_zh": "步骤 1",
    "correct_en": "Enable pipelines for the tenant.",
    "correct_zh": "为租户启用管道。"
   },
   {
    "label_en": "Step 2",
    "label_zh": "步骤 2",
    "correct_en": "Assign environments to pipeline stages.",
    "correct_zh": "将环境分配到管道阶段。"
   },
   {
    "label_en": "Step 3",
    "label_zh": "步骤 3",
    "correct_en": "Trigger a pipeline run.",
    "correct_zh": "触发管道运行。"
   },
   {
    "label_en": "Step 4",
    "label_zh": "步骤 4",
    "correct_en": "Review deployment results.",
    "correct_zh": "审查部署结果。"
   }
  ]
 },
 {
  "id": 73,
  "topic": 4,
  "qnum": 14,
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "E"
  ],
  "en": {
   "stem": "A company needs an agent in Copilot Studio to complete tasks by interacting with a legacy desktop application that does not use APIs. The\nbuilder needs to validate that UI automation can run in the supported execution context and needs a way to inspect how the automation behaves\nduring testing conversations.\nTo meet the business needs, the solution must meet the following requirements:\nEnable the agent to perform UI automation against the legacy application.\nInspect execution details for the automation during conversations.\nYou need to configure the agent based on the requirements.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Configure a custom connector for the desktop app so the agent can automate the UI through authenticated calls.",
    "B": "Add a Power Platform Desktop flow to control the desktop app.",
    "C": "Access the remote session within the testing pane to monitor the real-time execution of the agent's desktop interactions.",
    "D": "Publish the agent so the automation runs in the supported environment automatically.",
    "E": "Enable the Computer use capability."
   },
   "explanation": "A legacy desktop application with no API can only be driven through UI automation, which in Power Platform means a desktop flow; adding that desktop flow as a tool gives the agent control over the application (B). For the agent to actually drive a screen and be observable while doing it, the Computer use capability must be turned on (E) — this is the supported execution context for UI automation and it is what lets the builder watch the remote session and inspect execution details during test conversations. A is wrong because a custom connector requires an API, which the legacy app does not have. C describes the outcome that enabling Computer use provides rather than an action you configure. D is wrong because publishing is a deployment step and does nothing to enable UI automation or its diagnostics."
  },
  "zh": {
   "stem": "一家公司需要在 Copilot Studio 中配置一个代理，通过与不使用 API 的传统桌面应用程序交互来完成任务。开发者需要验证 UI 自动化\n是否可以在支持的执行环境中运行，并需要一种方法来检查自动化在测试对话中的行为表现。\n为满足业务需求，解决方案必须满足以下要求：\n使代理能够针对传统应用程序执行 UI 自动化。\n在对话期间检查自动化的执行细节。\n您需要根据这些要求配置代理。\n您应该执行哪两项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择都值一分。",
   "options": {
    "A": "为桌面应用程序配置一个自定义连接器，以便代理可以通过经过身份验证的调用实现 UI 自动化。",
    "B": "添加一个 Power Platform Desktop 流来控制桌面应用程序。",
    "C": "在测试面板中访问远程会话，以监控代理与桌面交互的实时执行情况。",
    "D": "发布代理，以便自动化在支持的环境中自动运行。",
    "E": "启用计算机使用功能。"
   },
   "explanation": "没有 API 的传统桌面应用只能通过 UI 自动化操作，在 Power Platform 中即为桌面流（desktop flow）；把桌面流添加为工具即可让代理控制该应用（B）。要让代理真正在受支持的执行环境中操作界面，并能在测试对话中观察其行为，必须启用“计算机使用”（Computer use）功能（E），这也是查看远程会话与执行细节的前提。A 错误：自定义连接器需要 API，而传统应用没有。C 描述的是启用计算机使用后得到的结果，而非需要配置的操作。D 错误：发布只是部署步骤，与启用 UI 自动化或其诊断无关。官方答案与推荐答案一致，均为 B、E。"
  }
 },
 {
  "id": 74,
  "topic": 4,
  "qnum": 15,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A development team is reusing agents in Copilot Studio across development, test, and production environments.\nYou need to ensure the agents meet the following requirements:\nReusable components must support governed promotion across environments.\nEnvironment-specific configuration must not be hard-coded.\nDeployments must support automated, multi-stage approvals.\nYou need to configure the agents based on the business requirements.\nWhich configurations should you use for each requirement? To answer, move the appropriate configurations to the correct requirements. You may\nuse each configuration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Exporting authored topics and prompts as a component collection packages reusable agent content so it can be promoted into other environments in a governed way. Connection references and environment variables externalize environment-specific values such as connections and secrets, so those values are supplied per environment instead of being hard-coded into the solution. An ALM pipeline is what orchestrates automated, multi-stage deployment across dev, test, and production with approval gates; a component collection only packages content and connection references only parameterize configuration, so neither can provide the staged approvals."
  },
  "zh": {
   "stem": "一个开发团队正在跨开发、测试和生产环境在 Copilot Studio 中重用代理。\n您需要确保代理满足以下要求：\n可重用组件必须支持跨环境的受控推广。\n环境特定的配置不得硬编码。\n部署必须支持自动化的多阶段审批。\n您需要根据业务需求配置代理。\n对于每个要求，您应该使用哪些配置？要回答，请将适当的配置移动到正确的要求。每个配置可以使用一次、多次或不使用。您可\n能需要移动分割条或滚动以查看内容。\n注意：每个正确选择都值一分。",
   "options": {},
   "explanation": "将编写的主题和提示导出为组件集合，可以把可重用的代理内容打包，从而以受控方式推广到其他环境。连接引用和环境变量把连接、密钥等环境特定配置外部化，使这些值按环境提供，而不是硬编码在解决方案中。ALM 管道则负责在开发、测试和生产环境之间编排自动化的多阶段部署与审批；组件集合只负责打包内容，连接引用只负责参数化配置，二者都无法提供分阶段审批。"
  },
  "sources_en": [
   "Use an ALM pipeline.",
   "Export as a component collection.",
   "Use connection references and environment variables."
  ],
  "sources_zh": [
   "使用 ALM 管道。",
   "导出为组件集合。",
   "使用连接引用和环境变量。"
  ],
  "targets": [
   {
    "label_en": "Share authored topics and prompts across environments.",
    "label_zh": "跨环境共享编写的主题和提示。",
    "correct_en": "Export as a component collection.",
    "correct_zh": "导出为组件集合。"
   },
   {
    "label_en": "Move environment-specific configurations including connections and secrets.",
    "label_zh": "移动包括连接和密钥在内的环境特定配置。",
    "correct_en": "Use connection references and environment variables.",
    "correct_zh": "使用连接引用和环境变量。"
   },
   {
    "label_en": "Automate multi-stage deployments with approvals.",
    "label_zh": "通过审批实现自动化的多阶段部署。",
    "correct_en": "Use an ALM pipeline.",
    "correct_zh": "使用 ALM 管道。"
   }
  ]
 },
 {
  "id": 75,
  "topic": 4,
  "qnum": 16,
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "C"
  ],
  "en": {
   "stem": "An agent calls a flow that intermittently produces unexpected results during execution.\nThe agent behaves inconsistently.\nYou need to investigate agent flow executions to diagnose the issue.\nWhich two actions should you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Inspect failed run details.",
    "B": "Update the flow trigger definition.",
    "C": "Check the Error column in the Activity tab.",
    "D": "Review flow analytics summary.",
    "E": "Review flow run history.",
    "F": "Increase the connector timeout."
   },
   "explanation": "Intermittent failures have to be diagnosed from what actually happened on individual runs. Opening the details of a failed run shows the exact action that failed, its inputs/outputs and the error message, which pinpoints the cause (A). The Error column on the Activity tab surfaces the errors recorded for agent flow executions, letting you spot which runs went wrong and why (C). B and F are remediation or tuning steps, not investigation, and changing a trigger or a timeout before you know the cause can mask the problem. D is wrong because the analytics summary aggregates usage and success rates and does not expose per-run error detail."
  },
  "zh": {
   "stem": "一个代理调用了一个在执行过程中间歇性地产生意外结果的流程。\n该代理表现出不一致的行为。\n您需要调查代理流程的执行情况以诊断问题。\n您应该使用哪两个操作？每个正确答案都提供了一个完整的解决方案。\n注意：每个正确选择都值一分。",
   "options": {
    "A": "检查失败运行的详细信息。",
    "B": "更新流程触发器定义。",
    "C": "检查活动选项卡中的错误列。",
    "D": "查看流程分析摘要。",
    "E": "查看流程运行历史。",
    "F": "增加连接器超时时间。"
   },
   "explanation": "间歇性问题必须从单次运行的实际记录来诊断。打开失败运行的详细信息可看到具体失败的操作、其输入输出和错误消息，从而定位原因（A）。“活动”选项卡中的错误列会显示代理流执行所记录的错误，便于找出哪些运行出错及原因（C）。B、F 属于修复或调优动作而非调查手段，在未确定原因前修改触发器或超时反而会掩盖问题。D 错误：流程分析摘要只汇总使用量与成功率，不提供单次运行的错误细节。"
  }
 },
 {
  "id": 76,
  "topic": 4,
  "qnum": 17,
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "C",
   "D"
  ],
  "en": {
   "stem": "You create a test set in Copilot Studio to evaluate an agent that answers policy questions and retrieves data from connected knowledge sources.\nYou run the evaluation and review the following result for one test case:\nExpected response: Digital products are non-refundable after download.\nActual response: Digital products cannot be refunded once downloaded.\nResult: Pass -\nScore: 0.92 -\nReasoning: The actual response semantically matches the expected response.\nKnowledge sources used: RefundPolicy_KB\nTools invoked: None -\nYou need to determine whether additional corrective action is required based on the evaluation results.\nWhich two actions should you perform? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Investigate external tool configuration for this test case.",
    "B": "Rerun the evaluation because the score is below 1.00.",
    "C": "Accept the result because semantic matching is sufficient for a passing evaluation.",
    "D": "Confirm that the connected knowledge source is functioning as expected.",
    "E": "Modify the test case because the response is not an exact match."
   },
   "explanation": "Copilot Studio evaluations score responses by semantic similarity, not string equality, so a result of Pass with a score of 0.92 and reasoning that the actual response semantically matches the expected one is a good outcome that needs no correction (C). The only sensible follow-up is a sanity check that RefundPolicy_KB — the knowledge source the answer was grounded in — is still connected and returning current content, so the pass reflects real retrieval rather than a stale or coincidental match (D). B is wrong because a score below 1.00 is normal for semantic scoring and is not a reason to rerun. E is wrong because exact matching was never the criterion. A is wrong because the result explicitly shows 'Tools invoked: None', so there is no tool configuration to investigate."
  },
  "zh": {
   "stem": "您在 Copilot Studio 中创建了一个测试集，用于评估一个回答政策问题并从连接的知识源中检索数据的代理。\n您运行了评估并查看了以下测试用例的结果：\n预期响应：数字产品在下载后不可退款。\n实际响应：数字产品一旦下载便无法退款。\n结果：通过 -\n评分：0.92 -\n推理：实际响应在语义上与预期响应匹配。\n使用的知识源：RefundPolicy_KB\n调用的工具：无 -\n您需要根据评估结果确定是否需要采取额外的纠正措施。\n您应该执行哪两项操作？每个正确答案都代表一个完整的解决方案。\n注意：每个正确选择的答案都值一分。",
   "options": {
    "A": "调查此测试用例的外部工具配置。",
    "B": "重新运行评估，因为评分低于 1.00。",
    "C": "接受结果，因为语义匹配对于通过评估来说已经足够。",
    "D": "确认连接的知识源是否正常运行。",
    "E": "修改测试用例，因为响应不是完全匹配。建议答案：CD 🗳️"
   },
   "explanation": "Copilot Studio 的评估按语义相似度打分，而非逐字匹配。结果为 Pass、评分 0.92、推理说明“实际响应在语义上与预期响应匹配”，说明结果已达标，无需纠正（C）。唯一合理的后续动作是确认答案所依据的知识源 RefundPolicy_KB 仍连接正常、返回最新内容，以确保这次通过来自真实检索（D）。B 错误：语义评分低于 1.00 属正常，不构成重跑理由。E 错误：本来就不要求完全匹配。A 错误：结果明确显示“调用的工具：无”，不存在需要排查的工具配置。官方答案与推荐答案一致，均为 C、D。"
  }
 },
 {
  "id": 77,
  "topic": 4,
  "qnum": 18,
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "A team deploys Copilot Studio solutions by using Power Platform Pipelines.\nYou must configure a deployment strategy that meets the following requirements:\nEnsure that the solutions deploy in dev, test, and production environments in order.\nIdentify missing connection references or environment variables before the deployment process begins.\nManage all pipeline stages and security from a single, unified location for all linked environments.\nYou need to configure the pipeline to meet the requirements.\nWhat should you configure for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Sequential stage progression forces a solution to move through dev, then test, then production in order, whereas direct target environment selection would let a deployer skip stages and environment-specific packages say nothing about ordering. Deployment input validation is the pre-deployment check that surfaces missing connection references and environment variables before the run starts; managed solution deployment and deployment configuration override happen at or after deployment and do not detect the missing inputs in advance. For the single unified administration point, the answer image marks Environment-level customization, although the more literal match for \"manage all pipeline stages and security from one location\" is Centralized pipeline configuration, since that is the host-environment configuration where stages and their security roles are defined."
  },
  "zh": {
   "stem": "热点区域 -\n一个团队使用 Power Platform Pipelines 部署 Copilot Studio 解决方案。\n您必须配置一个部署策略，以满足以下要求：\n确保解决方案按顺序部署到开发、测试和生产环境。\n在部署过程开始之前，识别缺失的连接引用或环境变量。\n从一个统一的位置管理所有链接环境的所有管道阶段和安全性。\n您需要配置管道以满足这些要求。\n您应该为每个要求配置什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。\n建议答案：",
   "options": {},
   "explanation": "顺序阶段推进会强制解决方案按开发、测试、生产的顺序逐级部署；直接选择目标环境会让部署者跳过阶段，而环境特定的部署包与顺序无关。部署输入验证是在运行开始前进行的预检查，用于发现缺失的连接引用和环境变量；托管解决方案部署和部署配置替代都发生在部署时或之后，无法提前检测缺失项。关于统一的集中管理位置，答案图标记的是 Environment-level customization；不过从字面看，“从单一位置管理所有管道阶段和安全性”更符合 Centralized pipeline configuration，因为管道阶段及其安全角色正是在管道宿主环境中集中配置的。"
  },
  "boxes": [
   {
    "prompt_en": "Solutions deploy in dev, test and production environments in order.",
    "prompt_zh": "解决方案按顺序部署到开发、测试和生产环境。",
    "options_en": [
     "Sequential stage progression",
     "Direct target environment selection",
     "Environment-specific deployment packages"
    ],
    "options_zh": [
     "顺序阶段推进",
     "直接选择目标环境",
     "环境特定的部署包"
    ],
    "correct_en": "Sequential stage progression",
    "correct_zh": "顺序阶段推进"
   },
   {
    "prompt_en": "Identify missing connection references or environment variables before deployment.",
    "prompt_zh": "在部署前识别缺失的连接引用或环境变量。",
    "options_en": [
     "Deployment input validation",
     "Managed solution deployment",
     "Deployment configuration override"
    ],
    "options_zh": [
     "部署输入验证",
     "托管解决方案部署",
     "部署配置替代"
    ],
    "correct_en": "Deployment input validation",
    "correct_zh": "部署输入验证"
   },
   {
    "prompt_en": "Manage pipeline stages and security from a single, unified location for linked environments.",
    "prompt_zh": "从单一统一的位置管理所有已链接环境的管道阶段和安全性。",
    "options_en": [
     "Environment-level customization",
     "Centralized pipeline configuration",
     "Builder-defined deployment settings"
    ],
    "options_zh": [
     "环境级自定义",
     "集中式管道配置",
     "构建者定义的部署设置"
    ],
    "correct_en": "Environment-level customization",
    "correct_zh": "环境级自定义"
   }
  ]
 },
 {
  "id": 78,
  "topic": 4,
  "qnum": 19,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A team is preparing a test set to evaluate an agent in Copilot Studio before expanding access to additional users.\nThe test set must support consistent evaluation across repeated runs and focus on the agent's most important behaviors.\nYou need to create a test set that enables repeatable and meaningful evaluation.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the\ncorrect order.",
   "options": {},
   "explanation": "Building a repeatable test set starts with scope: identify the high-value conversational intents the agent must handle, so the test set focuses on the behaviors that matter most. Next, author representative user prompts that trigger those intents, which become the actual test cases. Then define the expected outcomes and success criteria for each interaction so every case can be scored objectively. Finally, baseline the test set so the same prompts and expectations are reused on every run, giving deterministic evaluation across repeated runs. Baselining first would lock in an incomplete set, and writing prompts before knowing the intents produces coverage that misses the agent's key behaviors."
  },
  "zh": {
   "stem": "一个团队正在准备一个测试集，以便在将访问权限扩展到更多用户之前，在 Copilot Studio 中评估一个代理。\n测试集必须支持跨多次运行的一致性评估，并专注于代理最重要的行为。\n您需要创建一个能够实现可重复且有意义评估的测试集。\n您应该按照什么顺序执行这些操作？请将所有操作从操作列表移动到答案区域，并按正确顺序排列。",
   "options": {},
   "explanation": "构建可重复的测试集要先确定范围：识别代理必须处理的高价值对话意图，使测试集聚焦最重要的行为。接着编写能触发这些意图的代表性用户提示，它们就是实际的测试用例。然后为每次交互定义预期结果和成功标准，使每个用例都能被客观评分。最后对测试集进行基线化，使每次运行都复用相同的提示与预期，从而实现跨多次运行的确定性评估。若先基线化会锁定不完整的测试集；在未确定意图前就编写提示，则覆盖面会遗漏代理的关键行为。"
  },
  "sources_en": [
   "Define the expected outcomes and success criteria for each interaction.",
   "Author representative user prompts that trigger the identified intents.",
   "Identify the high-value conversational intents the agent must handle.",
   "Baseline the test set to ensure deterministic evaluation across repeated runs."
  ],
  "sources_zh": [
   "为每次交互定义预期结果和成功标准。",
   "编写能够触发已识别意图的代表性用户提示。",
   "识别代理必须处理的高价值对话意图。",
   "对测试集进行基线化，以确保跨多次重复运行的确定性评估。"
  ],
  "targets": [
   {
    "label_en": "Step 1",
    "label_zh": "步骤 1",
    "correct_en": "Identify the high-value conversational intents the agent must handle.",
    "correct_zh": "识别代理必须处理的高价值对话意图。"
   },
   {
    "label_en": "Step 2",
    "label_zh": "步骤 2",
    "correct_en": "Author representative user prompts that trigger the identified intents.",
    "correct_zh": "编写能够触发已识别意图的代表性用户提示。"
   },
   {
    "label_en": "Step 3",
    "label_zh": "步骤 3",
    "correct_en": "Define the expected outcomes and success criteria for each interaction.",
    "correct_zh": "为每次交互定义预期结果和成功标准。"
   },
   {
    "label_en": "Step 4",
    "label_zh": "步骤 4",
    "correct_en": "Baseline the test set to ensure deterministic evaluation across repeated runs.",
    "correct_zh": "对测试集进行基线化，以确保跨多次重复运行的确定性评估。"
   }
  ]
 },
 {
  "id": 79,
  "topic": 4,
  "qnum": 20,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A team is preparing to assess an agent in Copilot Studio before expanding access to additional users.\nThe team requires an evaluation that provides controlled, repeatable, and consistently measured test runs.\nThe evaluation must:\nBe triggered directly by the team to control when testing occurs.\nDetermine success based on clearly established acceptance criteria.\nRely on a predefined source that ensures consistency across repeated runs.\nYou need to configure the evaluation to meet the requirements.\nWhat should you configure? To answer, move the appropriate configurations to the correct evaluation requirements. You may use each\nconfiguration once, more than once, or not at all. You may need to move the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Running the evaluation on demand lets the team decide exactly when a test run happens, which satisfies the requirement for a team-triggered evaluation. Comparing responses against defined expectations is what turns each case into a pass or fail against clearly established acceptance criteria. Using a curated prompt list as the interaction source means every run replays the same fixed set of inputs, which is what makes results consistent and comparable across repeated runs. Expanding rollout to additional channels only widens where the agent is available, and enabling analytics reports usage trends from real traffic - neither one triggers, scores, or stabilizes an evaluation run."
  },
  "zh": {
   "stem": "一个团队正在准备在 Copilot Studio 中评估一个代理，以便在向更多用户扩展访问权限之前进行测试。\n该团队需要一个提供受控、可重复且一致测量的测试运行的评估。\n评估必须：\n由团队直接触发，以控制测试发生的时间。\n根据明确建立的验收标准来确定成功。\n依赖于一个预定义的来源，以确保重复运行的一致性。\n您需要配置评估以满足这些要求。\n您应该配置什么？要回答，请将适当的配置移动到正确的评估要求中。您可以使用每个配置一次、多次或不使用。您可能需要移动\n分隔条或滚动以查看内容。\n注意：每个正确的选择都值一分。",
   "options": {},
   "explanation": "按需执行评估让团队自行决定测试何时运行，满足“由团队直接触发”的要求。将响应与已定义的预期进行比较，可依据明确的验收标准判定每个用例通过或失败。使用精选提示列表作为交互来源，意味着每次运行都重放同一组固定输入，从而使多次重复运行的结果保持一致、可比较。扩展到更多渠道只是扩大代理的可用范围；启用分析是基于真实流量报告使用趋势——两者都不能触发、评分或稳定评估运行。"
  },
  "sources_en": [
   "Execute the evaluation on demand.",
   "Expand rollout to additional channels.",
   "Enable analytics to monitor agent usage trends.",
   "Compare responses against defined expectations.",
   "Use a curated prompt list as the interaction source."
  ],
  "sources_zh": [
   "按需执行评估。",
   "将推出范围扩展到更多渠道。",
   "启用分析以监控代理使用趋势。",
   "将响应与已定义的预期进行比较。",
   "使用精选提示列表作为交互来源。"
  ],
  "targets": [
   {
    "label_en": "Triggered directly by the team to control when testing occurs.",
    "label_zh": "由团队直接触发，以控制测试发生的时间。",
    "correct_en": "Execute the evaluation on demand.",
    "correct_zh": "按需执行评估。"
   },
   {
    "label_en": "Determine success based on clearly established acceptance criteria.",
    "label_zh": "根据明确建立的验收标准来确定是否成功。",
    "correct_en": "Compare responses against defined expectations.",
    "correct_zh": "将响应与已定义的预期进行比较。"
   },
   {
    "label_en": "Rely on a predefined source that ensures consistency across repeated runs.",
    "label_zh": "依赖预定义的来源，以确保跨多次重复运行的一致性。",
    "correct_en": "Use a curated prompt list as the interaction source.",
    "correct_zh": "使用精选提示列表作为交互来源。"
   }
  ]
 },
 {
  "id": 80,
  "topic": 4,
  "qnum": 21,
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You run multiple evaluation tests for an agent in Copilot Studio before expanding user access.\nYou observe the following about the evaluation results:\nEach evaluation case is reported as meeting or missing the expected response.\nSome evaluation cases fail repeatedly across several runs.\nEach run displays the expected response and the response generated by the agent.\nYou need to interpret what the evaluation results reveal.\nWhat should you conclude based on each interpretation? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Reporting each evaluation case as meeting or missing the expected response is simply a pass or fail status per case - it does not by itself reveal a failure configuration or prove production readiness. Cases that fail repeatedly across several runs show consistent outcomes; if the same case sometimes passed and sometimes failed, that would be intermittent, and nothing in the observation says the prompts need revision. Displaying the expected response next to the response the agent generated means the output presents expected and generated responses; the evaluation shows the difference, not the root cause of the failure, and it does not grant deployment approval."
  },
  "zh": {
   "stem": "热点区域 -\n在扩展用户访问之前，您在Copilot Studio中为一个代理运行了多次评估测试。\n您对评估结果观察到以下内容：\n每个评估案例都被报告为符合或未达到预期响应。\n一些评估案例在多次运行中反复失败。\n每次运行都会显示预期响应和代理生成的响应。\n您需要解释评估结果揭示了什么。\n根据每种解释，您应该得出什么结论？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
   "options": {},
   "explanation": "每个评估用例被报告为符合或未达到预期响应，这只是每个用例的通过或失败状态，本身既不能揭示失败配置，也不能证明生产就绪。多次运行中反复失败的用例表明结果是一致的（Consistent outcomes）；若同一用例时而通过时而失败才属于间歇性，题干也未提到需要修改提示词。每次运行同时显示预期响应和代理生成的响应，说明输出呈现的是预期与生成的响应；评估显示的是差异而非失败的根本原因，也不构成部署批准。"
  },
  "boxes": [
   {
    "prompt_en": "Outcome of individual evaluation cases",
    "prompt_zh": "单个评估用例的结果",
    "options_en": [
     "Pass or fail status",
     "Failure configuration",
     "Production readiness"
    ],
    "options_zh": [
     "通过或失败状态",
     "失败配置",
     "生产就绪度"
    ],
    "correct_en": "Pass or fail status",
    "correct_zh": "通过或失败状态"
   },
   {
    "prompt_en": "Behavior observed across repeated runs",
    "prompt_zh": "跨多次重复运行观察到的行为",
    "options_en": [
     "Prompt revisions",
     "Consistent outcomes",
     "Intermittent outcomes"
    ],
    "options_zh": [
     "提示词修订",
     "一致的结果",
     "间歇性的结果"
    ],
    "correct_en": "Consistent outcomes",
    "correct_zh": "一致的结果"
   },
   {
    "prompt_en": "Details presented in evaluation output",
    "prompt_zh": "评估输出中呈现的详细信息",
    "options_en": [
     "Deployment approval",
     "Root cause of failures",
     "Expected and generated responses"
    ],
    "options_zh": [
     "部署批准",
     "失败的根本原因",
     "预期响应和生成的响应"
    ],
    "correct_en": "Expected and generated responses",
    "correct_zh": "预期响应和生成的响应"
   }
  ]
 },
 {
  "id": 81,
  "topic": 4,
  "qnum": 22,
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "A company uses an agent in Copilot Studio in production and requires centralized monitoring for operational visibility and troubleshooting.\nThe team decides to use Application Insights as the monitoring solution.\nAn agent activity is not included in the monitoring data.\nYou need to enable monitoring the agent by using Application Insights.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\narrange them in the correct order.",
   "options": {},
   "explanation": "The telemetry has to have somewhere to land, so you first create or identify the Application Insights resource that will receive it. Then you configure which monitoring destination the agent uses, pointing the agent at that resource with its connection string. With the destination set, you enable monitoring for the agent so it starts emitting telemetry. Finally you publish the agent, because monitoring configuration changes only take effect in the running agent after publishing - which is why the missing agent activity was not appearing in the monitoring data. Configuring grounded answers or model selection from a catalog are agent capability settings and have nothing to do with telemetry."
  },
  "zh": {
   "stem": "一家公司在生产环境中使用 Copilot Studio 的代理，并需要集中监控以实现操作可见性和故障排除。\n团队决定使用 Application Insights 作为监控解决方案。\n代理活动未包含在监控数据中。\n您需要通过使用 Application Insights 启用对代理的监控。\n您应该按顺序执行哪四个操作？要回答，请将适当的操作从操作列表移动到答案区域，并按正确的顺序排列。",
   "options": {},
   "explanation": "遥测数据必须有接收端，因此首先创建或确定用于接收遥测的 Application Insights 资源。然后配置代理使用哪个监控目标，通过连接字符串把代理指向该资源。目标设置好后，为代理启用监控，使其开始发送遥测数据。最后发布代理，因为监控配置更改只有在发布后才会在运行中的代理上生效——这正是缺失的代理活动未出现在监控数据中的原因。配置生成 grounded answers 或从目录中选择模型属于代理功能设置，与遥测无关。"
  },
  "sources_en": [
   "Enable monitoring for the agent.",
   "Publish the agent so the monitoring configuration takes effect.",
   "Configure which monitoring destination the agent uses.",
   "Create or identify the Application Insights destination for telemetry.",
   "Configure the agent feature that generates grounded answers.",
   "Configure the agent feature that selects a model from a catalog."
  ],
  "sources_zh": [
   "为代理启用监控。",
   "发布代理，使监控配置生效。",
   "配置代理使用哪个监控目标。",
   "创建或确定用于遥测的 Application Insights 目标。",
   "配置生成 grounded answers 的代理功能。",
   "配置从目录中选择模型的代理功能。"
  ],
  "targets": [
   {
    "label_en": "Step 1",
    "label_zh": "步骤 1",
    "correct_en": "Create or identify the Application Insights destination for telemetry.",
    "correct_zh": "创建或确定用于遥测的 Application Insights 目标。"
   },
   {
    "label_en": "Step 2",
    "label_zh": "步骤 2",
    "correct_en": "Configure which monitoring destination the agent uses.",
    "correct_zh": "配置代理使用哪个监控目标。"
   },
   {
    "label_en": "Step 3",
    "label_zh": "步骤 3",
    "correct_en": "Enable monitoring for the agent.",
    "correct_zh": "为代理启用监控。"
   },
   {
    "label_en": "Step 4",
    "label_zh": "步骤 4",
    "correct_en": "Publish the agent so the monitoring configuration takes effect.",
    "correct_zh": "发布代理，使监控配置生效。"
   }
  ]
 },
 {
  "id": 82,
  "topic": 4,
  "qnum": 23,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear on the review screen.\nA team is implementing ALM for agents in Copilot Studio across multiple environments.\nThe team requires a consistent way to manage and transport agent assets.\nYou need to recommend a solution that supports creation and use of ALM scenarios for agents in Copilot Studio.\nSolution: To export, import, and manage agents between environments, you need to create and use a custom solution.\nDoes the solution meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "The graded answer is No. In this series the intended ALM container is the standard Power Platform solution mechanism — put the agent and its components in a solution, then export it as a managed solution and import it (or promote it through a pipeline) into the next environment. The proposed 'custom solution' built for export, import and management of agents is treated as not meeting the goal, because ALM for Copilot Studio agents is expected to rely on the platform's built-in solution export/import and pipeline tooling rather than on a bespoke construct. Answering Yes would imply that a hand-built mechanism is an acceptable substitute for the supported ALM path."
  },
  "zh": {
   "stem": "注意：本问题是一个系列问题的一部分，呈现了相同的场景。系列中的每个问题包含一个可能满足所述目标的独特解决方案。某些\n问题集可能有多个正确解决方案，而其他问题可能没有正确解决方案。\n在您回答本部分中的问题后，您将无法返回。因此，这些问题将不会出现在复查屏幕上。\n一个团队正在为多个环境中的 Copilot Studio 中的代理实施 ALM。\n团队需要一种一致的方法来管理和传输代理资产。\n您需要推荐一个支持在 Copilot Studio 中为代理创建和使用 ALM 场景的解决方案。\n解决方案：为了在环境之间导出、导入和管理代理，您需要创建并使用一个自定义解决方案。\n该解决方案是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "本题答案为“否”。在本系列场景中，正确的 ALM 载体是 Power Platform 标准的解决方案机制：把代理及其组件放入解决方案，再导出为托管解决方案并导入（或通过管道推送）到下一个环境。题目提出的“创建并使用自定义解决方案”来导出、导入和管理代理，被判定为不满足目标，因为 Copilot Studio 代理的 ALM 应依赖平台内置的解决方案导出/导入与管道工具，而不是自行构建的方案。选“是”等于认可自制机制可以替代受支持的 ALM 路径。"
  }
 },
 {
  "id": 83,
  "topic": 4,
  "qnum": 24,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear on the review screen.\nA team is implementing ALM for agents in Copilot Studio across multiple environments.\nThe team requires a consistent way to manage and transport agent assets.\nYou need to recommend a solution that supports creation and use of ALM scenarios for agents in Copilot Studio.\nSolution: Publishing an agent to a channel is the required ALM container for transporting agents between environments.\nDoes the solution meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "The graded answer is No. Publishing an agent to a channel (Teams, a website, Microsoft 365 Copilot, and so on) is a runtime distribution step: it makes the published version of the agent reachable by end users in that environment. It carries no packaging of components, no dependency tracking and no versioning, so it cannot move agent assets from one environment to another. The supported ALM container is a Dataverse solution that is exported and imported, or promoted through a Power Platform pipeline. Because channel publishing is not a transport mechanism at all, the proposed solution does not meet the goal."
  },
  "zh": {
   "stem": "注意：本问题是一个系列问题的一部分，呈现了相同的场景。系列中的每个问题包含一个可能满足所述目标的独特解决方案。某些\n问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在您回答本部分中的问题后，您将无法返回。因此，这些问题将不会出现在复查屏幕上。\n一个团队正在为多个环境中的 Copilot Studio 中的代理实施 ALM。\n团队需要一种一致的方法来管理和传输代理资产。\n您需要推荐一个支持在 Copilot Studio 中为代理创建和使用 ALM 场景的解决方案。\n解决方案：将代理发布到一个频道是用于在环境之间传输代理的所需 ALM 容器。\n该解决方案是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "本题答案为“否”。把代理发布到通道（Teams、网站、Microsoft 365 Copilot 等）属于运行时分发步骤，只是让终端用户在该环境中可以访问已发布的代理版本。它不打包组件、不跟踪依赖、也没有版本管理，因此无法在环境之间传输代理资产。受支持的 ALM 载体是 Dataverse 解决方案，通过导出/导入或 Power Platform 管道进行推送。通道发布根本不是传输机制，所以该方案不满足目标。"
  }
 },
 {
  "id": 84,
  "topic": 4,
  "qnum": 25,
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear on the review screen.\nA team is implementing ALM for agents in Copilot Studio across multiple environments.\nThe team requires a consistent way to manage and transport agent assets.\nYou need to recommend a solution that supports creation and use of ALM scenarios for agents in Copilot Studio.\nSolution: Builders can change environment variable values directly in Copilot Studio to complete ALM configuration without administrative tools.\nDoes the solution meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "The graded answer is Yes. The official position taken by this item is that a maker working inside Copilot Studio can supply the per-environment values that environment variables need, so the ALM configuration can be completed without an administrator opening a separate admin tool. Note that this sits uneasily with the wider guidance in this exam area — elsewhere the expected practice is that environment variables are referenced read-only in Copilot Studio and their values are set in the administrative authoring experience, and that agents must be republished before a new value takes effect. Treat Yes as the answer to select, but remember the read-only/administrative-authoring rule when a question presents it directly."
  },
  "zh": {
   "stem": "注意：本问题是一个系列问题的一部分，呈现了相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。某些\n问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在您回答本部分中的问题后，您将无法返回。因此，这些问题将不会出现在复查屏幕上。\n一个团队正在为 Copilot Studio 中的代理在多个环境中实施 ALM。\n该团队需要一种一致的方法来管理和传输代理资产。\n您需要推荐一个支持在 Copilot Studio 中创建和使用代理的 ALM 场景的解决方案。\n解决方案：构建者可以直接在 Copilot Studio 中更改环境变量值，以完成 ALM 配置，而无需使用管理工具。\n该解决方案是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "本题官方答案为“是”。该题的立场是：构建者可在 Copilot Studio 内为环境变量提供各环境所需的值，从而无需管理员另行使用管理工具即可完成 ALM 配置。需要注意的是，这与本考区其他题目的口径存在张力——在别处的标准做法是：环境变量在 Copilot Studio 中以只读方式引用，值应在管理创作体验中设置，且更新后需重新发布代理才会在运行时生效。考试时按“是”作答，但遇到直接考查该规则的题目仍应记住只读/管理创作的原则。"
  }
 }
];
