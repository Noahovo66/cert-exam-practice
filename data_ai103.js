// Auto-generated AI-103 question bank (117 questions, EN + ZH).
// hotspot/dragdrop panels were image-only in the source PDF; their
// labels/options were read from the answer images and translated to zh.
window.QUESTIONS_AI103 = [
 {
  "id": 1,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": true,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You need to configure the model deployment for Agent1 to meet the technical requirements.\nWhat should you configure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Scenario: Technical Requirements The model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\nThe data processed by the model must remain within the EU.\n\nEnvironment\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\nProject1 is deployed to an Azure region located in the European Union (EU).\n\nBox 1: Standard Deployment type            The best deployment type among the choices provided is Standard.\n\nData Residency: A Standard deployment ensures that both data at rest and inferencing/processing remain strictly within the chosen local Azure region. Because your agent is located in an EU Azure region, selecting a Standard deployment guarantees that data processing does not leave the EU boundary.\n\nNo Reserved Capacity: Standard deployments operate on a flexible, pay-as-you-go, on-demand token model. They dynamically scale to accommodate variable customer support traffic without requiring pre-\npurchased or reserved capacity.\n\nIncorrect:\nHere is why Standard is the correct choice, along with explanations of why the other options do not meet the requirements:\n\nGlobal Standard & Global Provisioned: While global deployments offer the highest initial throughput and leverage Microsoft Azure's global infrastructure to dynamically route traffic, they do not guarantee that data processing stays within the EU. Microsoft specifies that prompts and completions sent to \"Global\" deployment types can be processed in any global Azure region where capacity is available. This violates your strict requirement that data processed by the model must remain within the EU.\n\nIncorrect:\nStandard: This deployment type restricts model inference strictly to a single, local Azure region. It is highly susceptible to regional capacity limits and does not support the massive, highly scalable throughput needed for variable customer traffic compared to global routing.\n\nGlobal Provisioned: This deployment type requires reserved throughput capacity. It forces you to pre-\npurchase a fixed number of Provisioned Throughput Units (PTUs), making it poorly suited for scenarios\n\nwhere avoiding reserved capacity is a strict requirement\n\nBox 2: Opt out of automatic model version upgrades Version update policy\n\nScenario:\nPlanned changes: Update the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\n\nTechnical requirements:\n*-> The model version used by Agent1 must remain consistent to ensure stable responses.\n\nThe best version update policy for this scenario is Opt out of automatic model version upgrades (also known as specifying a Specific model version or setting to manual upgrade).\n\nWhy This Policy Is Best Ensures Consistent and Stable Responses: By locking the deployment to a exact, specific model version, you prevent sudden shifts in the agent's behavior, latency, reasoning, or tone that naturally occur during automated model switches.\n\nProvides Deployment Control: This policy guarantees that the model will never automatically upgrade behind the scenes. The model version remains pinned until you manually decide to test, validate, and migrate to a newer version.\n\nProtects Customer-Facing Production: Because your agent interacts directly with public users via digital support channels, spontaneous upgrades under an automated policy could accidentally break prompt formatting, alter content safety guardrails, or introduce unexpected hallucinations.",
   "scenario": "Plan and manage an Azure AI solution\n\nTestlet 1\n\nCase Study\n\nThis is a case study. Case studies are not timed separately from other exam sections. You can use as much exam time as you would like to complete each case study. However, there might be additional case studies or other exam sections. Manage your time to ensure that you can complete all the exam sections in the time provided. Pay attention to the Exam Progress at the top of the screen so you have sufficient time to complete any exam sections that follow this case study.\n\nTo answer the case study questions, you will bed to reference information that is provided in the case.\nCase studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.\n\nA Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.\n\nTo start the case study\n\nTo display the first question in this case study, select the “Next” button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the “Question” button to return to the question.\n\nOverview\n\nCompany Information\n\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-\nbased solutions by using Microsoft Foundry.Existing Environment\n\nIdentity Environment\n\nContoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.\n\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\n\nThe team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications.\n\nContoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.\n\nGenerative Environment\n\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\n\nProject1\n\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\n\nAgent1 has the following configurations:\n\nAgent1 uses a base model deployment.\nA safety evaluation pipeline is NOT enabled.\n\nTool invocation approval workflows are NOT enabled.\nConversation memory constraints are NOT configured.\n\nAgent1 interacts with customers by using digital support channels and answers general questions about Contoso products.\n\nProject1 is deployed to an Azure region located in the European Union (EU).\n\nAgent1Dev Team will use Project1 to optimize and maintain Agent1.\n\nProject2\n\nProject2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.\n\nDevelopment of the solution is incomplete.\n\nData Environment\n\nContoso stores product-related information in Azure resources that support AI applications.\n\nThe Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nThe product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\n\nContoso identifies the following issues:\n\nAgent1 has only general knowledge of the Contoso products.\nA recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet.\nAgent1 does NOT use the detailed product information in the product sheets stored in storage1 when   responding to customer questions.\nThe finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n\nRequirements\n\nPlanned Changes\n\nContoso plans to implement the following changes:\n\nImplement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.\nUpdate the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\nEnable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.\nImplement an indexing solution for the product sheets that Agent1 can use to answer customer questions.\nComplete the development of the video creation solution.\n\nTechnical Requirements\n\nContoso identifies the following technical requirements:\n\nThe model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\n\nThe product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\nResponses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product details.\nThe model version used by Agent1 must remain consistent to ensure stable responses.\nThe data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\n\nContoso identifies the following security and compliance requirements:\n\nAPI keys must NOT be used to access Foundry-deployed models.\nAccess to the Azure resources must follow the principle of least privilege.\nThe developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.\nAccess to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.\nAccess to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test.\nAgent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\nThe product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.\n\nBusiness Requirements\n\nContoso identifies the following business requirements:\n\nUsers that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\nAgent1 must answer questions only about the products sold by Contoso."
  },
  "zh": {
   "stem": "您需要配置 Agent1 的模型部署以满足技术要求。\n您应该配置什么？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "场景： 技术要求\nAgent1 使用的模型部署必须支持可扩展的、高吞吐量的生成式人工智能工作负载并动态扩展以处理可变的客户支持流量，而无需保留吞吐量容量。\n模型处理的数据必须保留在欧盟内。\n\n环境\nProject1 包含一个名为 Agent1 的客户支持代理，帮助客户处理产品咨询和故障排除请求。\nProject1 部署在位于欧盟 (EU) 的 Azure 区域。\n\n框 1：标准部署类型                       在提供的选项中，最佳的部署类型是标准。\n\n数据驻留：标准部署确保静态数据和推理/处理数据严格保留在所选的本地 Azure 区域内。由于您的代理位于欧盟 Azure 区域，选择标准部署可确保数据处理不会离开欧盟边界。\n\n无预留容量：标准部署采用灵活的按需付费令牌模型。它们动态扩展以适应可变的客户支持流量，而无需预先购买或保留容量。\n\n错误：\n以下是标准是正确选择的原因，以及其他选项不符合要求的解释：\n\n全球标准与全球预配置：虽然全球部署提供最高的初始吞吐量，并利用 Microsoft Azure 的全球基础设施动态路由流量，但它们并不保证数据处理保持在欧盟内。Microsoft 指定发送到“全球”部署类型的提示和完成可以在任何可用容量的全球 Azure 区域进行处理。这违反了您对模型处理的数据必须保持在欧盟内的严格要求。\n\n不正确：\n标准：此部署类型严格限制模型推理在单个本地 Azure 区域内。它对区域容量限制高度敏感，并且不支持与全球路由相比，满足可变客户流量所需的大规模、高度可扩展的吞吐量。\n\n全球预配置：此部署类型需要保留的吞吐量容量。它迫使您预先购买固定数量的预配置吞吐单元（PT Us），使其不适合需要避免保留容量的场景。\n\n避免自动模型版本升级版本更新政策\n\n场景：\n计划变更：更新 Agent1 使用的基础模型部署，并标准化模型版本以确保连续性和一致的响应。\n\n技术要求：\n*-> Agent1 使用的模型版本必须保持一致，以确保响应稳定。\n\n在这种情况下，最佳版本更新策略是选择不自动升级模型版本（也称为指定特定模型版本或设置为手动升级）。\n\n为什么这个策略是最佳的确保一致和稳定的响应：通过将部署锁定到确切的特定模型版本，您可以防止代理的行为、延迟、推理或语气在自动模型切换期间自然发生的突然变化。\n\n提供部署控制：该策略保证模型不会在后台自动升级。模型版本保持固定，直到您手动决定测试、验证并迁移到更新版本。\n\n保护面向客户的生产环境：因为您的代理通过数字支持渠道直接与公共用户互动，在自动化策略下的自发升级可能会意外破坏提示格式、改变内容安全防护措施，或引入意外的幻觉。",
   "scenario": "规划和管理 Azure AI 解决方案\n\n测试单元 1\n\n案例研究\n\n这是一个案例研究。 案例研究的计时与其他考试部分不分开。您可以使用尽可能多的考试时间来完成每个案例研究。然而，可能会有额外的案例研究或其他考试部分。管理您的时间，以确保您能够在提供的时间内完成所有考试部分。请注意屏幕顶部的考试进度，以确保您有足够的时间完成此案例研究后面的任何考试部分。\n\n要回答案例研究问题，您需要参考案例中提供的信息。\n案例研究及相关问题可能包含展览或其他资源，提供有关案例中描述的场景的更多信息。 单个问题中提供的信息不适用于案例研究中的其他问题。\n\n在此案例研究结束时，将出现复查界面。从复查界面，您可以在进入下一个考试部分之前查看和更改您的答案。离开此案例研究后，您将无法返回。\n\n要开始案例研究\n\n要显示本案例研究中的第一个问题，请选择“下一步”按钮。在问题左侧，菜单提供了链接到信息的内容，例如业务需求、现有环境和问题陈述。在回答任何问题之前，请仔细阅读所有这些信息。当您准备好回答问题时，请选择“问题”按钮以返回问题。\n\n概述\n\n公司信息\n\nContoso 有限公司是一家跨国零售公司，通过使用 Microsoft Foundry 构建、部署和管理生成式人工智能和基于代理的解决方案。      现有环境\n\n身份环境\n\nContoso 使用 Microsoft Entra ID 进行身份管理、身份验证和授权功能，使代理能够访问组织资源和服务。\n\nContoso 最近成立了一个名为 Agent1Dev 团队的新 AI 工程团队，以优化和维护现有的 AI 解决方案。\n\n该团队与解决方案架构师、DevOps 工程师和安全工程师合作，设计、实施、监控和保护 AI 应用程序。\n\nContoso 还有一个名为 Agent1Test 团队的团队，负责在解决方案部署之前验证 AI 解决方案。\n\n生成环境\n\nContoso 有一个 Microsoft Foundry 部署，其中包含两个项目，分别名为 Project1 和 Project2。\n\n项目1\n\nProject1 包含一个名为 Agent1 的客户支持代理，帮助客户处理产品咨询和故障排除请求。\n\nAgent1 具有以下配置：\n\nAgent1 使用基础模型部署。\n安全评估流水线未启用。\n\n工具调用审批工作流未启用。\n对话记忆约束未配置。\n\nAgent1 通过数字支持渠道与客户互动，并回答有关Contoso 产品的一般问题。\n\nProject1 部署在位于欧盟 (EU) 的 Azure 区域。\n\nAgent1Dev 团队将使用 Project1 来优化和维护 Agent1。\n\n项目2\n\nProject2 包含一个已部署的视频生成模型。Contoso 的市场部门可以访问 Project2，并计划使用该模型开发视频创作解决方案。\n\n该解决方案的开发尚未完成。\n\n数据环境\n\nContoso 在支持 AI 应用的 Azure 资源中存储与产品相关的信息。\n\nAzure 环境包含一个名为 storage1 的 Azure Blob 存储帐户，该帐户存储所有 Contoso 产品的产品详细信息表。\n\n产品说明书包括规格、功能描述和产品支持信息，\nAgent1 可以用来回答客户问题。产品说明书以 PDF 格式存储。\n\n问题陈述\n\nContoso 确定了以下问题：\n\nAgent1 对 Contoso 产品的了解仅限于一般知识。\n最近与 Agent1 的聊天互动进行了情感分析。分析结果尚未 处理。\n\nAgent1 在回答客户问题时 不 使用存储在 storage1 中的产品说明书中的详细产品信息。\nContoso 的财务部门报告称，供应商发票必须手动审核，以确保发票与供应商合同中定义的条款相符。发票包含表格、徽标，以及各种布局，使得文档难以一致地处理。\n\n需求\n\n计划变更\n\nContoso 计划实施以下变更：\n\n为 Project1 实施一个解决方案，通过评估发票的视觉布局和文本内容来分析供应商发票，以便能够根据供应商合同条款验证发票细节。\n更新 Agent1 使用的基础模型部署，并标准化模型版本以确保连续性和一致的响应。\n启用 Agent1 从存储在storage1 中的产品表中检索和使用详细的产品信息。\n为产品表实施一个索引解决方案，以便 Agent1 可以用来回答客户问题。\n完成视频创作解决方案的开发。\n\n技术要求\n\nContoso 确定了以下技术要求：\n\nAgent1 使用的模型部署必须支持可扩展的高吞吐量生成式人工智能工作负载，并能够动态扩展以处理可变的客户支持流量，而无需预留吞吐量容量。\n\n产品表必须通过使用索引流水线进行处理，以支持语义和向量搜索，以便 Agent1 可以检索相关的产品信息。\n使用产品表信息生成的响应必须相关、完整且准确。\nAgent1 必须能够使用产品表回答有关产品详细信息的自然语言问题。\nAgent1 使用的模型版本必须保持一致，以确保稳定的响应。\n模型处理的数据必须保留在欧盟内。\n\n安全和合规要求\n\nContoso 确定了以下安全和合规要求：\n\nAPI 密钥必须 不 用于访问部署在 Foundry 上的模型。\n访问 Azure 资源必须遵循最小权限原则。\nContoso 的开发人员必须使用 Microsoft Entra 身份验证来访问 Microsoft Foundry 资源。\n\n访问 Project1 必须通过名为 SC_Agent1_Dev 的安全组分配给 Agent1Dev 团队的成员。\n\n访问 Project1 必须通过名为 SC_Agent1_Test 的安全组分配给 Agent1Test 团队的成员。\n\nAgent1 绝不能泄露客户信息，即使包含客户数据的文档错误地添加到 storage1 的产品表存储库中。\n产品表可能包含嵌入文本的图像。Agent1 必须受到保护，以防止潜在隐藏在图像中的恶意指令。\n\n业务需求\n\nContoso 确定了以下业务需求：\n\n与 Agent1 互动的用户必须在未来的互动中拥有个性化体验，包括 Agent1 能够保留对话上下文并回忆之前互动中的相关信息。\n\nAgent1 只能回答有关 Contoso 销售的产品的问题。"
  },
  "boxes": [
   {
    "prompt_en": "Deployment type:",
    "prompt_zh": "部署类型：",
    "options_en": [
     "Standard",
     "Global Standard",
     "Global Provisioned"
    ],
    "options_zh": [
     "标准",
     "全球标准",
     "全球预配"
    ],
    "correct_en": "Standard",
    "correct_zh": "标准"
   },
   {
    "prompt_en": "Version update policy:",
    "prompt_zh": "版本更新策略：",
    "options_en": [
     "Once the current version expires",
     "Opt out of automatic model version upgrades",
     "Upgrade once a new default version becomes available"
    ],
    "options_zh": [
     "当前版本过期后",
     "选择退出自动模型版本升级",
     "有新的默认版本可用后升级"
    ],
    "correct_en": "Opt out of automatic model version upgrades",
    "correct_zh": "选择退出自动模型版本升级"
   }
  ]
 },
 {
  "id": 2,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You need to configure Agent1 to meet the security and compliance requirements.What should you use?",
   "options": {
    "A": "self-harm content filtering",
    "B": "prompt shields",
    "C": "Personally identifiable information (PII) Detection",
    "D": "violence content filtering"
   },
   "explanation": "To prevent an AI agent from revealing customer data even when sensitive information is accidentally uploaded to the underlying storage, you must configure Agent Guardrails with PII Detection and Tool Response Filtering.\n\nBecause the data repository contains unstructured product sheets and could accidentally ingest unstructured customer data, relying solely on access controls at the storage level is not enough.\n\nScenario:\nSecurity and Compliance Requirements\n*-> Agent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\n\nThe product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.",
   "scenario": "Plan and manage an Azure AI solution\n\nTestlet 1\n\nCase Study\n\nThis is a case study. Case studies are not timed separately from other exam sections. You can use as much exam time as you would like to complete each case study. However, there might be additional case studies or other exam sections. Manage your time to ensure that you can complete all the exam sections in the time provided. Pay attention to the Exam Progress at the top of the screen so you have sufficient time to complete any exam sections that follow this case study.\n\nTo answer the case study questions, you will bed to reference information that is provided in the case.\nCase studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.\n\nA Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.\n\nTo start the case study\n\nTo display the first question in this case study, select the “Next” button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the “Question” button to return to the question.\n\nOverview\n\nCompany Information\n\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-\nbased solutions by using Microsoft Foundry.Existing Environment\n\nIdentity Environment\n\nContoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.\n\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\n\nThe team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications.\n\nContoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.\n\nGenerative Environment\n\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\n\nProject1\n\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\n\nAgent1 has the following configurations:\n\nAgent1 uses a base model deployment.\nA safety evaluation pipeline is NOT enabled.\n\nTool invocation approval workflows are NOT enabled.\nConversation memory constraints are NOT configured.\n\nAgent1 interacts with customers by using digital support channels and answers general questions about Contoso products.\n\nProject1 is deployed to an Azure region located in the European Union (EU).\n\nAgent1Dev Team will use Project1 to optimize and maintain Agent1.\n\nProject2\n\nProject2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.\n\nDevelopment of the solution is incomplete.\n\nData Environment\n\nContoso stores product-related information in Azure resources that support AI applications.\n\nThe Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nThe product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\n\nContoso identifies the following issues:\n\nAgent1 has only general knowledge of the Contoso products.\nA recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet.\nAgent1 does NOT use the detailed product information in the product sheets stored in storage1 when   responding to customer questions.\nThe finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n\nRequirements\n\nPlanned Changes\n\nContoso plans to implement the following changes:\n\nImplement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.\nUpdate the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\nEnable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.\nImplement an indexing solution for the product sheets that Agent1 can use to answer customer questions.\nComplete the development of the video creation solution.\n\nTechnical Requirements\n\nContoso identifies the following technical requirements:\n\nThe model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\n\nThe product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\nResponses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product details.\nThe model version used by Agent1 must remain consistent to ensure stable responses.\nThe data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\n\nContoso identifies the following security and compliance requirements:\n\nAPI keys must NOT be used to access Foundry-deployed models.\nAccess to the Azure resources must follow the principle of least privilege.\nThe developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.\nAccess to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.\nAccess to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test.\nAgent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\nThe product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.\n\nBusiness Requirements\n\nContoso identifies the following business requirements:\n\nUsers that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\nAgent1 must answer questions only about the products sold by Contoso."
  },
  "zh": {
   "stem": "您需要配置 Agent1 以满足安全和合规要求。      您应该使用什么？",
   "options": {
    "A": "自残内容过滤",
    "B": "提示屏障",
    "C": "个人可识别信息 (PII) 检测",
    "D": "暴力内容过滤"
   },
   "explanation": "为了防止 AI 代理在敏感信息意外上传到基础存储时泄露客户数据，您必须使用 PII 检测和工具响应过滤配置 Agent Guardrails。\n\n因为数据存储库包含非结构化的产品表，并可能意外摄取非结构化的客户数据，仅依赖存储级别的访问控制是不够的。\n\n场景：\n安全和合规要求\nAgent1 绝不能泄露客户信息，即使包含客户数据的文档错误地添加到 storage1 的产品表存储库中。\n\n产品表可能包含嵌入文本的图像。Agent1 必须受到保护，以防止潜在隐藏在图像中的恶意指令。",
   "scenario": "规划和管理 Azure AI 解决方案\n\n测试单元 1\n\n案例研究\n\n这是一个案例研究。 案例研究的计时与其他考试部分不分开。您可以使用尽可能多的考试时间来完成每个案例研究。然而，可能会有额外的案例研究或其他考试部分。管理您的时间，以确保您能够在提供的时间内完成所有考试部分。请注意屏幕顶部的考试进度，以确保您有足够的时间完成此案例研究后面的任何考试部分。\n\n要回答案例研究问题，您需要参考案例中提供的信息。\n案例研究及相关问题可能包含展览或其他资源，提供有关案例中描述的场景的更多信息。 单个问题中提供的信息不适用于案例研究中的其他问题。\n\n在此案例研究结束时，将出现复查界面。从复查界面，您可以在进入下一个考试部分之前查看和更改您的答案。离开此案例研究后，您将无法返回。\n\n要开始案例研究\n\n要显示本案例研究中的第一个问题，请选择“下一步”按钮。在问题左侧，菜单提供了链接到信息的内容，例如业务需求、现有环境和问题陈述。在回答任何问题之前，请仔细阅读所有这些信息。当您准备好回答问题时，请选择“问题”按钮以返回问题。\n\n概述\n\n公司信息\n\nContoso 有限公司是一家跨国零售公司，通过使用 Microsoft Foundry 构建、部署和管理生成式人工智能和基于代理的解决方案。      现有环境\n\n身份环境\n\nContoso 使用 Microsoft Entra ID 进行身份管理、身份验证和授权功能，使代理能够访问组织资源和服务。\n\nContoso 最近成立了一个名为 Agent1Dev 团队的新 AI 工程团队，以优化和维护现有的 AI 解决方案。\n\n该团队与解决方案架构师、DevOps 工程师和安全工程师合作，设计、实施、监控和保护 AI 应用程序。\n\nContoso 还有一个名为 Agent1Test 团队的团队，负责在解决方案部署之前验证 AI 解决方案。\n\n生成环境\n\nContoso 有一个 Microsoft Foundry 部署，其中包含两个项目，分别名为 Project1 和 Project2。\n\n项目1\n\nProject1 包含一个名为 Agent1 的客户支持代理，帮助客户处理产品咨询和故障排除请求。\n\nAgent1 具有以下配置：\n\nAgent1 使用基础模型部署。\n安全评估流水线未启用。\n\n工具调用审批工作流未启用。\n对话记忆约束未配置。\n\nAgent1 通过数字支持渠道与客户互动，并回答有关Contoso 产品的一般问题。\n\nProject1 部署在位于欧盟 (EU) 的 Azure 区域。\n\nAgent1Dev 团队将使用 Project1 来优化和维护 Agent1。\n\n项目2\n\nProject2 包含一个已部署的视频生成模型。Contoso 的市场部门可以访问 Project2，并计划使用该模型开发视频创作解决方案。\n\n该解决方案的开发尚未完成。\n\n数据环境\n\nContoso 在支持 AI 应用的 Azure 资源中存储与产品相关的信息。\n\nAzure 环境包含一个名为 storage1 的 Azure Blob 存储帐户，该帐户存储所有 Contoso 产品的产品详细信息表。\n\n产品说明书包括规格、功能描述和产品支持信息，\nAgent1 可以用来回答客户问题。产品说明书以 PDF 格式存储。\n\n问题陈述\n\nContoso 确定了以下问题：\n\nAgent1 对 Contoso 产品的了解仅限于一般知识。\n最近与 Agent1 的聊天互动进行了情感分析。分析结果尚未 处理。\n\nAgent1 在回答客户问题时 不 使用存储在 storage1 中的产品说明书中的详细产品信息。\nContoso 的财务部门报告称，供应商发票必须手动审核，以确保发票与供应商合同中定义的条款相符。发票包含表格、徽标，以及各种布局，使得文档难以一致地处理。\n\n需求\n\n计划变更\n\nContoso 计划实施以下变更：\n\n为 Project1 实施一个解决方案，通过评估发票的视觉布局和文本内容来分析供应商发票，以便能够根据供应商合同条款验证发票细节。\n更新 Agent1 使用的基础模型部署，并标准化模型版本以确保连续性和一致的响应。\n启用 Agent1 从存储在storage1 中的产品表中检索和使用详细的产品信息。\n为产品表实施一个索引解决方案，以便 Agent1 可以用来回答客户问题。\n完成视频创作解决方案的开发。\n\n技术要求\n\nContoso 确定了以下技术要求：\n\nAgent1 使用的模型部署必须支持可扩展的高吞吐量生成式人工智能工作负载，并能够动态扩展以处理可变的客户支持流量，而无需预留吞吐量容量。\n\n产品表必须通过使用索引流水线进行处理，以支持语义和向量搜索，以便 Agent1 可以检索相关的产品信息。\n使用产品表信息生成的响应必须相关、完整且准确。\nAgent1 必须能够使用产品表回答有关产品详细信息的自然语言问题。\nAgent1 使用的模型版本必须保持一致，以确保稳定的响应。\n模型处理的数据必须保留在欧盟内。\n\n安全和合规要求\n\nContoso 确定了以下安全和合规要求：\n\nAPI 密钥必须 不 用于访问部署在 Foundry 上的模型。\n访问 Azure 资源必须遵循最小权限原则。\nContoso 的开发人员必须使用 Microsoft Entra 身份验证来访问 Microsoft Foundry 资源。\n\n访问 Project1 必须通过名为 SC_Agent1_Dev 的安全组分配给 Agent1Dev 团队的成员。\n\n访问 Project1 必须通过名为 SC_Agent1_Test 的安全组分配给 Agent1Test 团队的成员。\n\nAgent1 绝不能泄露客户信息，即使包含客户数据的文档错误地添加到 storage1 的产品表存储库中。\n产品表可能包含嵌入文本的图像。Agent1 必须受到保护，以防止潜在隐藏在图像中的恶意指令。\n\n业务需求\n\nContoso 确定了以下业务需求：\n\n与 Agent1 互动的用户必须在未来的互动中拥有个性化体验，包括 Agent1 能够保留对话上下文并回忆之前互动中的相关信息。\n\nAgent1 只能回答有关 Contoso 销售的产品的问题。"
  }
 },
 {
  "id": 3,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You are planning a Microsoft Foundry project named Project1 that will contain multiple agents. Each agent will access the same Azure AI Search resource.\nYou need to recommend a solution to centrally manage the Azure AI Search credentials within Project1.\nThe solution must be implemented across all the agents.\nWhat should you recommend?",
   "options": {
    "A": "Enable role-based access control (RBAC) for the Azure AI Search resource.",
    "B": "Disable key-based access control on the Azure AI Search resource.",
    "C": "Add a connection to the Azure AI Search resource.",
    "D": "Create a managed private endpoint that connects to the Azure AI Search resource."
   },
   "explanation": "To best manage security and centrally handle credentials across multiple agents, you should add a connection to the Azure AI Search resource at the Azure AI Foundry project level.\n\nWhy This Works Central Hub: The project acts as the single security perimeter for all your agents.\n\nCredential Masking: Agents inherit access without hardcoding secrets, API keys, or connection strings in their code.\n\nIdentity Management: It allows you to leverage Microsoft Entra ID (formerly Azure AD) for role-based access control (RBAC).\nHow to Implement It\n1. Navigate to your Azure AI Foundry portal.\n2. Select your specific project from the dashboard.\n3. Open the \"Management Center\" or \"Project settings\" tab.\n4.  Click on \"Connected resources\" or \"Connections\".\n5. Add the Azure AI Search resource.\n6. Choose Entra ID (managed identity) over API keys for maximum security."
  },
  "zh": {
   "stem": "您正在规划一个名为 Project1 的 Microsoft Foundry 项目，该项目将包含多个代理。每个代理将访问相同的 Azure AI Search 资源。\n您需要推荐一个解决方案，以在 Project1 中集中管理 Azure AI Search 凭据。\n该解决方案必须在所有代理中实施。\n您应该推荐什么？",
   "options": {
    "A": "为 Azure AI Search 资源启用基于角色的访问控制 (RBAC)。",
    "B": "禁用 Azure AI Search 资源上的基于密钥的访问控制。",
    "C": "添加与 Azure AI Search 资源的连接。",
    "D": "创建一个连接到 Azure AI Search 资源的托管私有终端。"
   },
   "explanation": "为了最佳管理安全性并在多个代理之间集中处理凭据，您应该在 Azure AI Foundry 项目级别添加与Azure AI Search 资源的连接。\n\n为什么这样有效中央中心：该项目充当所有代理的单一安全边界。\n\n凭证屏蔽：代理在其代码中无需硬编码秘密、API 密钥或连接字符串即可继承访问权限。\n\n身份管理：它允许您利用 Microsoft Entra ID（前称 Azure AD）进行基于角色的访问控制（RBAC）。\n如何实施\n1. 导航到您的 Azure AI Foundry 门户。\n2. 从仪表板中选择您的特定项目。\n3. 打开“管理中心”或“项目设置”选项卡。\n4. 点击“连接资源”或“连接”。\n5. 添加 Azure AI Search 资源。\n6. 选择 Entra ID（托管身份）而不是 API 密钥以获得最大安全性。"
  }
 },
 {
  "id": 4,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "Your company is piloting a customer support agent in a Microsoft Foundry project name Project1. Project1 is connected to an existing Application Insights resource, and the company’s support team reviews runs in the Traces tab.\nThe Foundry Agent Service is configured to perform the following actions:\nRetrieve the Application Insights connection string by calling project_client.telemetry.get_application_insights_connection_string().\nCall configure_azure_monitor(connection_string=...) to enable telemetry.\nA separate LangChain service is configured to use OpenTelemetry and has the following configurations:\nUses AzureAIOpenTelemetryTracer(connection_string=..., enable_content_recording=False) Passes the tracer by using config={“callbacks”:[azure_tracer]} Company policy has the following requirements:\nTelemetry from LangChain and OpenTelemetry must be distinguishable within the same Application Insights resource.\nSecrets and credentials must NOT be stored in prompts, tool arguments, or span attributes.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: No No - The LangChain service will appear in Traces without configuring a tracer.\nThe LangChain service will not appear in Traces without configuring a tracer.\n\nBecause OpenTelemetry requires an explicit exporter or tracer provider to collect and send data, you must provide a valid tracer registration. However, since configure_azure_monitor() sets up a global OpenTelemetry tracer provider under the hood, any standard OpenTelemetry-instrumented service sharing the same process could theoretically export traces globally. Despite this, LangChain specifically relies on explicit callback handlers (like AzureAIOpenTelemetryTracer) passed in the config to map LangChain-\nspecific execution blocks (chains, tools, and prompts) into OpenTelemetry spans. Without configuring and passing this tracer, your LangChain orchestrations will not emit telemetry to Application Insights.\n\nBox 2: Yes\n\nYes - Setting different OTEL_SERVICE_NAME values separates the services in Application Insights.\n\nSetting different OTEL_SERVICE_NAME values distinguishes the services within the same Application Insights resource.\n\nIn Azure Monitor and Application Insights, the OpenTelemetry service.name attribute automatically maps to the cloud_RoleName property on your telemetry logs and spans. By specifying distinct names via OTEL_SERVICE_NAME (or setting it in the tracer providers), you can isolate and filter telemetry originating from the core Foundry Agent Service versus the LangChain components.\n\nBox 3: No No - When using enable_content_recording=False, prompts and tool data will be captured in the telemetry.\n\nPrompt text and tool data will not be captured in the telemetry.\n\nSetting enable_content_recording=False specifically instructs the AzureAIOpenTelemetryTracer to redact and mask user prompts, LLM responses, and tool call arguments from being emitted into span attributes.\nThis configuration successfully prevents credentials, secrets, or sensitive PII residing inside the text from bleeding into your Azure Application Insights resource."
  },
  "zh": {
   "stem": "您的公司正在 Microsoft Foundry 项目 Project1 中试点客户支持代理。Project1连接到现有的 Application Insights 资源，公司支持团队在Traces 选项卡中查看运行记录。\nFoundry Agent 服务配置为执行以下操作：\n通过调用project_client.telemetry.get_application_insights_connection_string() 来检索 Application Insights 连接字符串。\n调用 configure_azure_monitor(connection_string=...) 以启用遥测。\n一个单独的 LangChain 服务配置为使用 OpenTelemetry，并具有以下配置：\n使用 AzureAIOpenTelemetryTracer(connection_string=...,enable_content_recording=False)通过使用 config={“callbacks”:[azure_tracer]}传递跟踪器。公司政策有以下要求：\n来自 LangChain 和 OpenTelemetry 的遥测必须在同一 Application Insights 资源中可区分。\n秘密和凭据必须 不 存储在提示、工具参数或跨度属性中。\n对于以下每个陈述，如果该陈述为真，请选择“是”。否则，请选择“否”。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：否否 - LangChain 服务在未配置追踪器的情况下将出现在 Traces 中。\nLangChain 服务在未配置追踪器的情况下将不会出现在 Traces 中。\n\n因为 OpenTelemetry 需要一个显式的导出器或追踪器提供者来收集和发送数据，您必须提供一个有效的追踪器注册。然而，由于 configure_azure_monitor() 在后台设置了一个全局OpenTelemetry 追踪器提供者，任何共享同一进程的标准 OpenTelemetry 仪器化服务理论上都可以全局导出追踪。尽管如此，LangChain 特别依赖于在配置中传递的显式回调处理程序（如 AzureAIOpenTele metryTracer）来将 LangChain-特定的执行块（链、工具和提示）映射到 OpenTelemetry 跨度中。\n未配置和传递此追踪器，您的 LangChain 编排将不会向 Application Insights 发送遥测数据。\n\n框 2：是\n\n是 - 设置不同的 OTEL_SERVICE_NAME 值可以在 Application Insights 中区分服务。\n\n设置不同的 OTEL_SERVICE_NAME 值可以在同一 Application Insights 资源内区分服务。\n\n在 Azure Monitor 和 Application Insights 中，OpenTelemetry 的 service.name 属性会自动映射到您的遥测日志和跨度中的 cloud_RoleName 属性。通过通过 OTEL_SERVICE_NAME 指定不同的名称（或在跟踪提供程序中设置），您可以隔离和过滤来自核心 Foundry Agent Service 与 LangCha in 组件的遥测。\n\n框 3：否否 - 当使用 enable_content_recording=False 时，提示和工具数据将被捕获到遥测中。\n\n提示文本和工具数据将不会被捕获到遥测中。\n\n将 enable_content_recording=False 设置为特定指示 AzureAIOpenTelemetryTracer 从跨度属性中删除和屏蔽用户提示、LLM 响应和工具调用参数。\n此配置成功防止凭据、秘密或敏感的个人身份信息（PII）在文本中泄露到您的 Azure Application Insigh ts 资源中。"
  },
  "boxes": [
   {
    "prompt_en": "The LangChain service will appear in Traces without configuring a tracer.",
    "prompt_zh": "在未配置追踪器的情况下，LangChain 服务将出现在 Traces 中。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "No",
    "correct_zh": "否"
   },
   {
    "prompt_en": "Setting different OTEL_SERVICE_NAME values separates the services in Application Insights.",
    "prompt_zh": "设置不同的 OTEL_SERVICE_NAME 值可在 Application Insights 中区分各服务。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "Yes",
    "correct_zh": "是"
   },
   {
    "prompt_en": "When using enable_content_recording=False, prompts and tool data will be captured in the telemetry.",
    "prompt_zh": "使用 enable_content_recording=False 时，提示和工具数据将被捕获到遥测中。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "No",
    "correct_zh": "否"
   }
  ]
 },
 {
  "id": 5,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that processes procurement documents submitted by suppliers.\nYou need to implement two pipelines by using Azure Content Understanding in Foundry Tools. The solution must meet the following requirements:\nInclude a pipeline named Pipeline1 that supports cost-effective, high-volume processing of standalone PDF invoices.\nInclude a pipeline named Pipeline2 that supports cross-document validation by using multi-step   reasoning and reference data.\nHow should you configure each pipeline? To answer, drag the appropriate configurations to the correct pipelines. Each configuration may be used once, more than once, of not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Single-file task running in Standard mode\nPipeline1 To meet the requirements for a cost-effective, high-volume processing pipeline of standalone PDF invoices using Azure Content Understanding in Foundry Tools, you should configure the pipeline with a Single-file task running in Standard mode.\n\n1. Task Type: Single-file task The scenario involves processing standalone PDF invoices. A Single-file task is designed to process individual files independently, drawing structured field extractions schema-by-schema.\n\nWhen to avoid Multi-file: Multi-file tasks are intended for advanced use cases where you need to pass multiple distinct documents in a single request to cross-reference data, aggregate statistics, or run complex cross-file validation logic. Using it for high-volume standalone extraction would add unnecessary technical overhead.\n\n2. Analysis Mode: Standard mode\n\nStandard mode explicitly emphasizes cost-effectiveness and reduced latency. It is optimized for straightforward field extraction (such as gathering invoice numbers, dates, line items, and totals) from individual documents.\n\nCost Difference: Standard mode features lower pricing for Contextualization tokens ($1.00 per 1M tokens) compared to Pro mode ($1.50 per 1M tokens).\n\nWhen to avoid Pro mode: Pro mode is built for multi-step reasoning, drawing inferences, and comparing input files against a pre-uploaded knowledge base/reference data. For simple high-volume extraction, Pro mode adds unnecessary cost and latency.\n\nBox 2: Multi-file task in Pro modePipeline2\n\nTo implement cross-document validation using multi-step reasoning and reference data in Azure Content Understanding, your pipeline must be configured as a Multi-file task in Pro mode.\n\nHere is the breakdown of why this exact configuration is required:\n\n1. Task Type: Multi-file task Single-task (Single-file task) configurations are restricted to processing one isolated document per request.\n\nCapability: A Multi-file task allows Azure Content Understanding to accept multiple input files in a single request, enabling the system to collectively reason, validate results, and aggregate schemas across distinct documents.\n\n2. Processing Mode: Pro Mode Standard mode is built strictly for straightforward field extraction from single files without complex cognitive overhead.\n\nCapability: Pro mode unlocks advanced generative AI agentic capabilities. It allows you to inject an external knowledge base for reference data, run multi-step semantic reasoning, and perform cross-\ndocument data validation to flag errors before producing a final unified schema."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，用于处理供应商提交的采购文件。\n您需要使用 Azure Content Understanding 在 Foundry Tools 中实现两个流水线。该解决方案必须满足以下要求：\n包括一个名为 Pipeline1 的流水线，支持对独立的 PDF 发票进行具有成本效益的高容量处理。\n包括一个名为 Pipeline2 的流水线，支持通过多步骤推理和参考数据进行跨文档验证。\n您应该如何配置每个流水线？要回答此问题，请将适当的配置拖动到正确的流水线。每个配置可以使用一次、使用多次或根本不使用。您可能需要拖动分隔条以在窗格之间移动或滚动以查看内容。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：以标准模式运行的单文件任务\nPipeline1为了满足使用 Azure Content Understanding 在 Foundry Tools 中对独立 PDF 发票进行具有成本效益的高容量处理流水线的要求，您应该将流水线配置为以标准模式运行的单文件任务。\n\n1. 任务类型：单文件任务该场景涉及处理独立的 PDF 发票。单文件任务旨在独立处理单个文件，逐个提取结构化字段。\n\n何时避免使用多文件：多文件任务旨在用于高级用例，在这些用例中，您需要在单个请求中传递多个不同的文档，以交叉引用数据、汇总统计信息或运行复杂的跨文件验证逻辑。将其用于高容量独立提取会增加不必要的技术开销。\n\n2. 分析模式：标准模式\n\n标准模式明确强调成本效益和降低延迟。它针对从单个文档中提取简单字段（例如收集发票号码、日期、行项目和总额）进行了优化。\n\n成本差异：标准模式的上下文化令牌定价较低（每百万个令牌 $1.00），相比之下，专业模式为每百万个令牌 $1.50。\n\n何时避免使用专业模式：专业模式是为多步骤推理、进行推断以及将输入文件与预先上传的知识库/参考数据进行比较而构建的。对于简单的高容量提取，专业模式增加了不必要的成本和延迟。\n\n框2：专业模式下的多文件任务       管道2\n\n要在 Azure 内容理解中使用多步骤推理和参考数据实现跨文档验证，您的管道必须配置为专业模式下的多文件任务。\n\n以下是为什么需要这种确切配置的详细说明：\n\n1. 任务类型：多文件任务单任务（单文件任务）配置限制为每个请求处理一个孤立文档。\n\n能力：多文件任务允许 Azure 内容理解在单个请求中接受多个输入文件，使系统能够集体推理、验证结果并在不同文档之间聚合模式。\n\n2. 处理模式：专业模式标准模式严格用于从单个文件中提取简单字段，而不涉及复杂的认知overhead。\n\n功能：专业模式解锁了高级生成式人工智能代理能力。它允许您注入外部知识库作为参考数据，进行多步骤语义推理，并执行跨文档数据验证，以在生成最终统一架构之前标记错误。"
  },
  "sources_en": [
   "Multi-file task in pro mode",
   "Multi-file task in standard mode",
   "Single-file task in pro mode",
   "Single-file task in standard mode"
  ],
  "sources_zh": [
   "专业模式下的多文件任务",
   "标准模式下的多文件任务",
   "专业模式下的单文件任务",
   "标准模式下的单文件任务"
  ],
  "targets": [
   {
    "label_en": "Pipeline1",
    "label_zh": "Pipeline1",
    "correct_en": "Single-file task in standard mode",
    "correct_zh": "标准模式下的单文件任务"
   },
   {
    "label_en": "Pipeline2",
    "label_zh": "Pipeline2",
    "correct_en": "Multi-file task in pro mode",
    "correct_zh": "专业模式下的多文件任务"
   }
  ]
 },
 {
  "id": 6,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Python application named App1 that integrates with a Microsoft Foundry project named\nProject1.\nYou need to ensure that App1 meets the following requirements:\nAuthenticates by using a Microsoft Entra managed identity Sends prompts to a deployed model by using the Azure OpenAI Responses API How should you complete the Python code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: DefaultAzureCredential The azure.identity package provides DefaultAzureCredential, which automatically evaluates the environment to find a valid authentication mechanism. When deployed in Azure, it natively picks up the configured Microsoft Entra managed identity without requiring hardcoded secrets.\n\nBox 2: create¨ The get_openai_client() context manager returns an OpenAI-compatible instance pre-configured for your project endpoint. To generate responses using Microsoft Foundry's Responses API protocol, you interact with the .responses resource and call its create method."
  },
  "zh": {
   "stem": "您有一个名为 App1 的 Python 应用程序，它与一个名为 Project1 的 Microsoft Foundry 项目集成。\n您需要确保 App1 满足以下要求：\n通过 Microsoft Entra 管理的身份进行身份验证使用 Azure OpenAI Responses API 向已部署的模型发送提示您应该如何完成 Python 代码？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：DefaultAzureCredential azure.identity 包提供 DefaultAzureCredential，它会自动评估环境以找到有效的身份验证机制。当在 Azure 中部署时，它会原生获取配置的 Microsoft Entra 管理身份，而无需硬编码的机密。\n\n框 2: 创建¨get_openai_client() 上下文管理器返回一个与 OpenAI 兼容的实例，该实例为您的项目端点预先配置。\n要使用 Microsoft Foundry 的响应 API 协议生成响应，您需要与 .responses 资源交互并调用其创建方法。"
  },
  "boxes": [
   {
    "prompt_en": "credential =",
    "prompt_zh": "credential =",
    "options_en": [
     "AzureKeyCredential",
     "ClientSecretCredential",
     "DefaultAzureCredential"
    ],
    "options_zh": [
     "AzureKeyCredential",
     "ClientSecretCredential",
     "DefaultAzureCredential"
    ],
    "correct_en": "DefaultAzureCredential",
    "correct_zh": "DefaultAzureCredential"
   },
   {
    "prompt_en": "response = openai_client.responses.",
    "prompt_zh": "response = openai_client.responses.",
    "options_en": [
     "compact",
     "create",
     "retrieve"
    ],
    "options_zh": [
     "compact",
     "create",
     "retrieve"
    ],
    "correct_en": "create",
    "correct_zh": "create"
   }
  ],
  "code": {
   "lang": "python",
   "text": "from azure.identity import DefaultAzureCredential\nfrom azure.ai.projects import AIProjectClient\n\ncredential = [[1]]()\n\nproject_client = AIProjectClient(\n    endpoint=\"https://contosoai.services.ai.azure.com/api/projects/project1\",\n    credential=credential,\n)\n\nwith project_client.get_openai_client() as openai_client:\n    response = openai_client.responses.[[2]](\n        model=\"trail-guide-chat\",\n        input=\"Create a 3-day hiking itinerary near Seattle.\",\n    )\n    print(response.output_text)"
  }
 },
 {
  "id": 7,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a workflow for a customer support triage process.\nYou have an Ask a question node that stores user responses in a local variable named Var01.\nYou need to create the following Power Fx expressions:\nAn if/else condition expression that ensures that Var01 contains a value A Send message expression that returns the stored user response in uppercase How should you configure the expressions? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Not(IsBlank(Topic.Var01) An if/else condition expression that ensures that Var01 contains a value\n\nTo validate that a local variable has a value in Microsoft Foundry workflows (which use the Power Fx expression language), the most adequate expression is:\nIf(Not(IsBlank(Topic.VariableName)), \"Has Value Action\", \"Is Blank Action\")\n\nExpression BreakdownTopic.\nVariableName: Refers to a local variable scoped to the current workflow topic.\n\nIsBlank(): Checks if the variable is completely null or contains an empty string (\"\").\n\nNot(): Inverts the boolean result so that a variable with contents evaluates to true.\n\nIf(): Executes the first action path if the condition is true (contains a value) and the second action path if it is false (blank).\n\nBox 2: {Upper(Local.Var01)} A Send message expression that returns the stored user response in uppercase\n\nThe adequate Power Fx expression to use in the Message to send area is {Upper(Local.Var01)}.\n\nKey Implementation Rules Variable Scope Prefix:\nIn Microsoft Foundry Workflows, all variables defined within the scope of the workflow must use the Local.\n\nprefix.Uppercase Function:\nThe Upper() function converts text strings to all capital letters.\n\nMessage Interpolation: In a Send message node, Power Fx expressions must be enclosed in curly braces { } to be dynamically evaluated at runtime."
  },
  "zh": {
   "stem": "您有一个包含客户支持分流流程的 Microsoft Foundry 项目。\n您有一个 提问 节点，该节点将用户响应存储在名为 Var01 的本地变量中。\n您需要创建以下 Power Fx 表达式：\n一个 if/else 条件表达式，确保 Var01 包含一个值一个 发送消息 表达式，返回存储的用户响应的大写形式您应该如何配置这些表达式？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1: Not(IsBlank(Topic.Var01)一个 if/else 条件表达式，确保 Var01 包含一个值\n\n要验证 Microsoft Foundry 工作流中的本地变量是否有值（使用 Power Fx表达式语言），最合适的表达式是：\n如果(不(是空白(主题.变量名)), \"有值操作\", \"是空白操作\")\n\n表达式分解主题。\n变量名称：指当前工作流主题范围内的局部变量。\n\nIsBlank()：检查变量是否完全为 null 或包含空字符串（\"\"）。\n\nNot()：反转布尔结果，使得包含内容的变量评估为 true。\n\nIf()：如果条件为真（包含值），则执行第一个操作路径；如果为假（空白），则执行第二个操作路径。\n\n框 2：{Upper(Local.Var01)}一个 发送消息 表达式，返回以大写形式存储的用户响应。\n\n在发送消息区域使用的适当 Power Fx 表达式是 {Upper(Local.Var01)}。\n\n关键实施规则变量范围前缀：\n在 Microsoft Foundry 工作流中，所有在工作流范围内定义的变量必须使用 Local。\n\n前缀.大写函数:\nUpper() 函数将文本字符串转换为全大写字母。\n\n消息插值: 在发送消息节点中，Power Fx 表达式必须用大括号{ } 括起来，以便在运行时动态评估。"
  },
  "boxes": [
   {
    "prompt_en": "If/else condition expression:",
    "prompt_zh": "If/else 条件表达式：",
    "options_en": [
     "IsBlank(Local.Var01)",
     "IsEmpty(Local.Var01)",
     "Not(IsBlank(Local.Var01))"
    ],
    "options_zh": [
     "IsBlank(Local.Var01)",
     "IsEmpty(Local.Var01)",
     "Not(IsBlank(Local.Var01))"
    ],
    "correct_en": "Not(IsBlank(Local.Var01))",
    "correct_zh": "Not(IsBlank(Local.Var01))"
   },
   {
    "prompt_en": "Send message expression:",
    "prompt_zh": "发送消息表达式：",
    "options_en": [
     "{Local.Var01}",
     "{Upper(Local.Var01)}",
     "{Upper(Var01)}"
    ],
    "options_zh": [
     "{Local.Var01}",
     "{Upper(Local.Var01)}",
     "{Upper(Var01)}"
    ],
    "correct_en": "{Upper(Local.Var01)}",
    "correct_zh": "{Upper(Local.Var01)}"
   }
  ]
 },
 {
  "id": 8,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a customer support agent built by using the Foundry Agent Service.\nThe agent uploads user-provided screenshots to Azure Storage through a ticketing tool and receives a blob URL for additional reasoning.\nYou need to use image moderation during agent runs and prevent harmful content from being returned during runs. Azure AI Content Safety must access the images by using the blob URL. The solution must follow the principle of least privilege.\nWhat should you configure for Content Safety? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Select user input, output, tool response, and Tool call and set Action to Block.\nGuardrails\n\nThe correct configuration is option is: Select user input, output, tool response, and Tool call and set Action to Block.\n\nPoints Coverage:\nMicrosoft Foundry Guardrails support four key intervention points: User input, Tool call, Tool response, and Output. To thoroughly secure an agent run from harmful inputs, hidden instructions, or generated vulnerabilities, every stage of the lifecycle must be scanned.\n\nTool Call and Tool Response:\nBecause the customer support agent uploads files and processes blob URLs dynamically via a ticketing tool, evaluating both Tool call (what the agent sends) and PM/Tool response (what the tool sends back to            the agent) is critical to prevent indirect prompt injections or malicious content processing at runtime.\n\nAction Mode:\nSetting the action to Block ensures that if any harmful content or policy violation is detected at any point in the cycle, the application aggressively prevents it from executing or returning to the user, satisfying the strict safety mandate.\n\nIncorrect:\n* Select Tool call and set Action to Block Selecting only Tool call leaves the primary user prompt, tool output, and final agent response completely unmoderated. Furthermore, \"Black\" is not a valid configuration action.\n\n* Select user input and Output and Set action to Annotate and\n* Select user input and Tool response and set Action to Annotate Setting the action to Annotate flags or labels content with safety metadata/severity scores but does not proactively block the run or prevent harmful content from being returned. Additionally, these options omit necessary intervention points (such as Tool call), violating the security constraints of the agentic workflow.\n\nBox 2: A system-assigned managed identity that is assigned the Storage Blob Data Reader role Storage access To best configure storage access for image moderation, you should enable a system-assigned managed identity on the Azure AI Content Safety instance and assign it the Storage Blob Data Reader role on the Azure Storage account. This eliminates the security risk of passing raw storage account keys or generating insecure Shared Access Signature (SAS) tokens during agent execution."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，其中包含一个使用 Foundry代理服务构建的客户支持代理。\n代理通过工单工具将用户提供的截图上传到 Azure 存储，并接收一个blob URL 以进行额外推理。\n您需要在代理运行期间使用图像审核，并防止有害内容在运行期间被返回。Azure AI 内容安全必须通过blob URL 访问图像。该解决方案必须遵循最小权限原则。\n您应该为内容安全配置什么？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：选择用户输入、输出、工具响应和工具调用，并将操作设置为阻止。\n保护措施\n\n正确的配置选项是：选择用户输入、输出、工具响应和工具调用，并将操作设置为阻止。\n\n覆盖要点：\nMicrosoft Foundry 保护措施支持四个关键干预点：用户输入、工具调用、工具响应和输出。为了彻底保护代理运行免受有害输入、隐藏指令或生成的漏洞影响，生命周期的每个阶段都必须进行扫描。\n\n工具调用和工具响应：\n由于客户支持代理通过工单工具动态上传文件和处理 blob URL，评估工具调用（代理发送的内容）和 P M/工具响应（工具返回给代理的内容）对于防止间接提示注入或恶意内容在运行时处理至关重要。\n\n操作模式：\n将操作设置为阻止确保在周期的任何时刻，如果检测到任何有害内容或政策违规，应用程序会积极防止其执行或返回给用户，从而满足严格的安全要求。\n\n不正确：\n* 选择工具调用并将操作设置为阻止仅选择工具调用会使主要用户提示、工具输出和最终代理响应完全不受监管。此外，“黑色”不是有效的配置操作。\n\n* 选择用户输入和输出并将操作设置为注释和\n* 选择用户输入和工具响应并将操作设置为注释将操作设置为注释会用安全元数据/严重性评分标记或标记内容，但不会主动阻止运行或防止有害内容被返回。此外，这些选项省略了必要的干预点（例如工具调用），违反了代理工作流的安全约束。\n\n框2：系统分配的托管身份，分配了存储 Blob 数据读取器角色存储访问为了最佳配置图像审核的存储访问，您应该在 Azure AI 内容安全实例上启用系统分配的托管身份，并在 A zure 存储帐户上分配存储 Blob 数据读取器角色。这消除了在代理执行期间传递原始存储帐户密钥或生成不安全的共享访问签名（SAS）令牌的安全风险。"
  },
  "boxes": [
   {
    "prompt_en": "Guardrails:",
    "prompt_zh": "保护措施：",
    "options_en": [
     "Select Tool call and set Action to Block.",
     "Select User input and Output and set Action to Annotate.",
     "Select User input and Tool response and set Action to Annotate.",
     "Select User input, Output, Tool response, and Tool call and set Action to Block."
    ],
    "options_zh": [
     "选择工具调用并将操作设置为阻止。",
     "选择用户输入和输出并将操作设置为注释。",
     "选择用户输入和工具响应并将操作设置为注释。",
     "选择用户输入、输出、工具响应和工具调用并将操作设置为阻止。"
    ],
    "correct_en": "Select User input, Output, Tool response, and Tool call and set Action to Block.",
    "correct_zh": "选择用户输入、输出、工具响应和工具调用并将操作设置为阻止。"
   },
   {
    "prompt_en": "Storage access:",
    "prompt_zh": "存储访问：",
    "options_en": [
     "Storage account access keys",
     "A user-assigned identity that is assigned the Storage Queue Data Contributor role",
     "A system-assigned managed identity that is assigned the Storage Blob Data Reader role",
     "A system-assigned managed identity that is assigned the Storage Blob Data Contributor role"
    ],
    "options_zh": [
     "存储帐户访问密钥",
     "分配了存储队列数据参与者角色的用户分配标识",
     "分配了存储 Blob 数据读取者角色的系统分配的托管标识",
     "分配了存储 Blob 数据参与者角色的系统分配的托管标识"
    ],
    "correct_en": "A system-assigned managed identity that is assigned the Storage Blob Data Reader role",
    "correct_zh": "分配了存储 Blob 数据读取者角色的系统分配的托管标识"
   }
  ]
 },
 {
  "id": 9,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains three agents as shown in the following table.\nYou need to orchestrate the agents to ensure that the customer requests meet the following requirements:\nSupport a deterministic, step-based process that uses conditional branching and shared state across the agents.\nOptionally trigger a ticket action based on the triage result.\nThe solution must minimize development effort.\nWhat should you include in the solution?",
   "options": {
    "A": "a workflow",
    "B": "threads and runs without a workflow",
    "C": "a multi-agent group chat session",
    "D": "separate agent runs coordinated in the application code"
   },
   "explanation": "To fulfill your requirements while keeping development effort to an absolute minimum, you should leverage the native Microsoft Foundry Multi-Agent Workflows feature (built directly into the Foundry Agent Service and managed via the Foundry portal visual editor or declarative YAML files).Using this visual, low-code orchestration layer removes the need to write custom graph routing logic, state managers, or manual handoffs in code.\n\nThe minimum required architecture and features that must be included in your solution are structured below.\n\n1. The Orchestration Layer: Declarative Workflow Instead of writing a code-first orchestrator, you must define a Foundry Workflow Definition (YAML or Visual).\n\n2. State Management: Shared Context Variables\n\n3. Agent Configuration & Native Tooling"
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，其中包含如下表所示的三个代理。\n您需要协调这些代理，以确保客户请求满足以下要求：\n支持一个确定性的、基于步骤的过程，该过程在代理之间使用条件分支和共享状态。\n可选地根据分流结果触发工单操作。\n解决方案必须最小化开发工作量。\n您应该在解决方案中包含什么？",
   "options": {
    "A": "一个工作流",
    "B": "没有工作流的线程和运行",
    "C": "一个多代理群聊会话",
    "D": "在应用程序代码中协调的单独代理运行"
   },
   "explanation": "为了满足您的需求，同时将开发工作量降到最低，您应该利用原生的 Microsoft Foundry 多代理工作流功能（直接内置于 Foundry 代理服务中，并通过 Foundry 门户可视化编辑器或声明性 YAML 文件进行管理）。使用这个可视化的低代码编排层可以消除编写自定义图路由逻辑、状态管理器或代码中手动交接的需要。\n\n您解决方案中必须包含的最低要求架构和功能如下结构化。\n\n1. 编排层：声明式工作流您必须定义一个 Foundry 工作流定义（YAML 或可视化），而不是编写代码优先的编排器。\n\n2. 状态管理：共享上下文变量\n\n3. 代理配置和本地工具"
  },
  "code": {
   "lang": "table",
   "title_en": "Agents",
   "title_zh": "代理",
   "text": "Name           Description\n-------------  --------------------------------------------------\nTriageAgent    Classifies incoming customer requests\nPolicyAgent    Answers policy questions by searching internal content\nActionAgent    Creates or updates tickets by calling an HTTP API",
   "text_zh": "名称           说明\n-------------  --------------------------------------------------\nTriageAgent    对传入的客户请求进行分类\nPolicyAgent    通过搜索内部内容回答策略问题\nActionAgent    通过调用 HTTP API 创建或更新工单"
  }
 },
 {
  "id": 10,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent. The agent uses Azure Speech in Foundry Tools.\nYou fine-tune a baseline speech to text model for the en-us locale and publish the model.\nThe agent calls the Speech to text REST API and returns an error message indicating that the project ID is invalid.\nYou need to set the project property to the correct ID.\nTo what should you set the project property?",
   "options": {
    "A": "the project URL",
    "B": "the custom speech project ID",
    "C": "the project ID",
    "D": "the custom speech endpoint URL"
   },
   "explanation": "To remedy the \"invalid project ID\" error when calling the Azure Speech to Text REST API within your Microsoft AI Foundry project, you must update the project property in your API request body from a plain string name/ID to the fully qualified Azure Resource URI of the project.\n\nThe Speech to Text REST API (v3.0 and later) strictly expects resource links formatted as URIs rather than individual ID strings.\n\n*-> Step 1: Construct the Correct Project URI You need to pass the project as an absolute object reference. Construct your project property value using the following format:text\n\nhttps://<your-region>://<your-project-guid> Use code with caution.Replace <your-region> with your actual Azure Speech resource region (e.g., eastus, westeurope).Replace <your-project-guid> with the actual system-generated Unique Identifier of your project.\n\nStep 2: Retrieve your Project GUID\n\nStep 3: Update your Agent / REST API Request Body"
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。该代理在 Foundry工具中使用 Azure 语音。\n您为 en-us 区域微调了一个基线语音转文本模型并发布了该模型。\n该代理调用语音转文本 REST API，并返回一条错误消息，指示项目 ID无效。\n您需要将 project 属性设置为正确的 ID。\n您应该将 project 属性设置为什么？",
   "options": {
    "A": "项目 URL",
    "B": "自定义语音项目 ID",
    "C": "项目 ID",
    "D": "自定义语音端点 URL"
   },
   "explanation": "要解决在您的 Microsoft AI Foundry 项目中调用 Azure Speech to Text REST API 时出现的 \"无效项目ID\" 错误，您必须在 API 请求体中将项目属性从普通字符串名称/ID 更新为项目的完全限定 Azure 资源 U RI。\n\n语音转文本 REST API (v3.0 及更高版本) 严格要求资源链接格式为 URI，而不是单独的 ID 字符串。\n\n*-> 步骤 1：构建正确的项目 URI您需要将项目作为绝对对象引用传递。使用以下格式构建您的项目属性值：文本\n\nhttps://<您的区域>://<您的项目guid>请谨慎使用代码。将 <your-region> 替换为您实际的 Azure 语音资源区域（例如，eastus, westeur ope）。将 <your-project-guid> 替换为您项目的实际系统生成的唯一标识符。\n\n步骤 2：检索您的项目 GUID\n\n步骤 3：更新您的代理 / REST API 请求主体"
  }
 },
 {
  "id": 11,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent named PaymentAgent.\nPaymentAgent includes a function tool that issues customer refunds by using an external API.\nYou are creating a workflow in YAML.\nYou need to ensure that the workflow pauses for human approval and continues with the refund step only after approval is granted.\nHow should you complete the workflow definition? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: ask_question To create a human-in-the-loop approval step in a Microsoft Foundry workflow, you should fill in the missing type with ask_question.\n\nIn Microsoft Foundry, the ask_question step is specifically designed to pause a workflow, prompt a user for input (such as an approval or rejection), and store the response in a variable that can be evaluated by subsequent logic.\n\nBox 2: approval == \"approved\" Execute Condition:\nUse a condition such as steps.approval.output == 'approved' (or a similar logical check based on your choice variable) to ensure the refund only executes when authorized."
  },
  "zh": {
   "stem": "您有一个包含名为 PaymentAgent 的 Microsoft Foundry 项目。\nPaymentAgent 包含一个功能工具，通过使用外部 API 来发放客户退款。\n您正在创建一个 YAML 工作流。\n您需要确保工作流在获得人工批准后暂停，并仅在批准后继续进行退款步骤。\n您应该如何完成工作流定义？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1: ask_question要在 Microsoft Foundry 工作流中创建一个人机协作的审批步骤，您应该用 ask_question 填写缺失的类型。\n\n在 Microsoft Foundry 中，ask_question 步骤专门设计用于暂停工作流，提示用户输入（例如批准或拒绝），并将响应存储在可以被后续逻辑评估的变量中。\n\n框 2: approval == \"approved\"执行条件:\n使用条件，例如 steps.approval.output == 'approved'（或基于您的选择变量的类似逻辑检查），以确保退款仅在获得授权时执行。"
  },
  "boxes": [
   {
    "prompt_en": "type:",
    "prompt_zh": "type：",
    "options_en": [
     "ask_question",
     "basic_chat",
     "data_transformation"
    ],
    "options_zh": [
     "ask_question",
     "basic_chat",
     "data_transformation"
    ],
    "correct_en": "ask_question",
    "correct_zh": "ask_question"
   },
   {
    "prompt_en": "condition:",
    "prompt_zh": "condition：",
    "options_en": [
     "approval == \"approved\"",
     "propose_refund.output != null",
     "true"
    ],
    "options_zh": [
     "approval == \"approved\"",
     "propose_refund.output != null",
     "true"
    ],
    "correct_en": "approval == \"approved\"",
    "correct_zh": "approval == \"approved\""
   }
  ],
  "code": {
   "lang": "yaml",
   "text": "steps:\n  - id: propose_refund\n    type: agent\n    agent: PaymentAgent\n\n  - id: approval\n    type: [[1]]\n\n  - id: execute_refund\n    type: agent\n    agent: PaymentAgent\n    condition: [[2]]"
  }
 },
 {
  "id": 12,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have an Azure Speech in Foundry Tools resource that hosts a custom speech to text model deployed to a custom endpoint. An agent uses the endpoint to perform real-time speech recognition.\nYou are approaching the expiration date of the custom speech to text model.\nWhat is the expected behavior when the model expires?",
   "options": {
    "A": "Speech recognition requests will return a 4xx error until a new custom model is deployed.",
    "B": "Speech recognition requests will continue to use the expired custom model until the model is removed manually.",
    "C": "Speech recognition requests will fall back to the most recent base model for the same locale.",
    "D": "The custom model will be deleted automatically when the model expires."
   },
   "explanation": "When the custom speech-to-text model expires, the real-time endpoint will automatically fall back to using the most recent base model for that locale.\n\nBecause of this automated fallback design, your agent's real-time speech recognition streams will not fail or throw a connection error. However, you will likely experience a drop in transcription accuracy, as the fallback base model lacks the domain-specific vocabulary, acronyms, or unique audio adaptations built into your custom model.\n\nImmediate Impact Summary Real-Time Endpoints: Continue to process requests. The endpoint swaps the expired custom model for the newest standard base model behind the scenes.\n\nBatch Transcriptions (If used): Any batch transcription jobs explicitly targeting the expired custom model ID will fail with a 4xx error code.\n\nCustomization Loss: Specific jargon, formatting rules, or accents trained into your model will temporarily stop applying to incoming agent audio."
  },
  "zh": {
   "stem": "您在 Foundry Tools 资源中拥有一个 Azure Speech，托管一个部署到自定义端点的自定义语音转文本模型。一个代理使用该端点进行实时语音识别。\n您即将到达自定义语音转文本模型的到期日期。\n当模型过期时，预期的行为是什么？",
   "options": {
    "A": "语音识别请求将在部署新的自定义模型之前返回 4xx 错误。",
    "B": "语音识别请求将继续使用过期的自定义模型，直到该模型被手动移除 。",
    "C": "语音识别请求将回退到同一地区最新的基础模型。",
    "D": "自定义模型将在模型过期时自动删除。"
   },
   "explanation": "当自定义语音转文本模型过期时，实时端点将自动回退使用该地区最新的基础模型。\n\n由于这种自动回退设计，您的代理的实时语音识别流不会失败或抛出连接错误。然而，您可能会经历转录准确度的下降，因为回退的基础模型缺乏特定领域的词汇、缩略语或您自定义模型中构建的独特音频适配。\n\n即时影响摘要实时端点：继续处理请求。该端点在后台将过期的自定义模型替换为最新的标准基础模型。\n\n批量转录（如果使用）：任何明确针对过期自定义模型 ID 的批量转录作业将以 4xx 错误代码失败。\n\n定制损失：训练到您的模型中的特定术语、格式规则或口音将暂时停止应用于传入的代理音频。"
  }
 },
 {
  "id": 13,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a model deployment.\nYou have an application that calls the deployment by using the Azure OpenAI v1 API and DefaultAzureCredential.\nThe developers at your company receive HTTP 403 errors when they send inference requests, even after running az login.\nYou need to ensure that the developers can perform model inference. The solution must follow the principle of least privilege.\nWhich role-based access control (RBAC) role should you assign to the developers?",
   "options": {
    "A": "Cognitive Services User",
    "B": "Cognitive Services OpenAI User",
    "C": "Contributor",
    "D": "Cognitive Services Data Reader"
   },
   "explanation": "To resolve the HTTP 403 Forbidden errors when making inference calls via the Azure OpenAI v1 API and DefaultAzureCredential, users must be assigned the Cognitive Services OpenAI User built-in Azure RBAC role.\n\nWhy This Happens Running az login successfully authenticates the user with Microsoft Entra ID, but it does not grant data-\nplane access permissions. By default, standard control-plane roles (like Reader or Foundry User) only allow users to view project metadata or manage settings, not send prompts to the model deployment endpoint itself.\n\nRecommended Role Definition Role Name: Cognitive Services OpenAI User\n\nPermissions Granted: This role provides the absolute minimum privileges required to execute chatcompletions, embeddings, and general inference tasks (Microsoft.CognitiveServices/accounts/OpenAI/ deployments/search/action and Microsoft.CognitiveServices/accounts/OpenAI/deployments/ causalLanguageModeling/action). It does not allow users to deploy new models, view access keys, or alter configurations\n\nScope Placement: Assign this role to the users (or a Microsoft Entra ID Group) at the Azure OpenAI resource level or the Resource Group level containing your Microsoft Foundry infrastructure."
  },
  "zh": {
   "stem": "您有一个包含模型部署的 Microsoft Foundry 项目。\n您有一个应用程序，通过 Azure OpenAI v1 API 调用该部署，并且默认AzureCredentialt。\n您公司的开发人员在发送推理请求时收到 HTTP 403 错误，即使在运行 az login 之后也是如此。\n您需要确保开发人员能够执行模型推理。解决方案必须遵循最小权限原则。\n您应该将哪个基于角色的访问控制 (RBAC) 角色分配给开发人员？",
   "options": {
    "A": "认知服务用户",
    "B": "认知服务 OpenAI 用户",
    "C": "贡献者",
    "D": "认知服务数据读取器"
   },
   "explanation": "要解决通过 Azure OpenAI v1 API 和DefaultAzureCredential 进行推理调用时出现的 HTTP 403 Forbidden 错误，用户必须被分配 Cognitive Services OpenAI User 内置 Azure RBAC角色。\n\n为什么会发生这种情况运行 az login 成功地使用 Microsoft Entra ID 进行了用户身份验证，但并未授予数据平面访问权限。默认情况下，标准控制平面角色（如 Reader 或 Foundry User）仅允许用户查看项目元数据或管理设置，而不能向模型部署端点本身发送提示。\n\n推荐角色定义角色名称：认知服务 OpenAI 用户\n\n授予的权限：此角色提供执行聊天                          完成、嵌入和一般推理任务所需的绝对最低权限（Microsoft.CognitiveServices/accounts/OpenAI/deployments/search/action 和 Microsoft.CognitiveServices/accounts/OpenAI/deployments/causalLanguageModeling/action）。它不允许用户部署新模型、查看访问密钥或更改配置。\n\n范围设置：将此角色分配给 Azure OpenAI资源级别或包含您的 Microsoft Foundry 基础设施的资源组级别的用户（或 Microsoft Entra ID 组）。"
  }
 },
 {
  "id": 14,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent. The agent has a Model Context Protocol (MCP) tool that queries a knowledge base stored in Azure AI Search.\nSome agent runs return answers from the base model without invoking the knowledge base, which results in responses without grounded citations.\nYou are provided with the following code snippet that runs the agent.\nYou need to add the correct tool _choice parameter to the code to deterministically force the agent to invoke the MCP tool on each run.\nWhat should you add?",
   "options": {
    "A": "tool_choice={“required”}",
    "B": "tool_choice={“auto”}",
    "C": "tool_choice={“type”:“knowledge_base”}",
    "D": "tool_choice ={“type”:“mcp”}"
   },
   "explanation": "To deterministically force the agent to invoke your Model Context Protocol (MCP) tool on every run, you must pass tool_choice=\"required\" into the run_create_and_process method.\n\nThe 'required' tool choice: Setting this parameter to 'required' forces the underlying Azure OpenAI model to invoke one of your available tools on every response, ensuring the agent doesn't guess answers from the base model."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。该代理具有一个模型上下文协议（MCP）工具，用于查询存储在 Azure AI Search 中的知识库。\n一些代理运行返回来自基础模型的答案，而不调用知识库，这导致响应没有基于引用。\n您提供了以下运行代理的代码片段。\n您需要将正确的 tool _choice 参数添加到代码中，以确定性地强制代理在每次运行时调用 MCP 工具。\n你应该添加什么？",
   "options": {
    "A": "tool_choice={“必需”}",
    "B": "tool_choice={“自动”}",
    "C": "tool_choice={“类型”:“知识库”}",
    "D": "tool_choice ={“类型”:“mcp”}"
   },
   "explanation": "要确定性地强制代理在每次运行时调用你的模型上下文协议（MCP）工具，你必须将 tool_choice=\"required\" 传递给 run_create_and_process 方法。\n\n“必需”的工具选择：将此参数设置为“必需”会强制底层的 Azure OpenAI 模型在每个响应中调用您可用的工具，确保代理不会从基础模型中猜测答案。"
  },
  "code": {
   "lang": "python",
   "text": "run = project_client.agents.runs.create_and_process(\n    thread_id=thread.id,\n    agent_id=agent.id\n)"
  }
 },
 {
  "id": 15,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a customer support agent grounded in internal documentation.\nAfter a recent update, users report the following issues:  Some answers are unsupported by retrieved documents.\nA small number of responses are flagged for policy violations.\nYou need to evaluate each issue.\nWhich observability signals should you use for each issue? To answer, drag the appropriate observability signals to the correct issues. Each observability signal may be used once, more than once, or not at all.\nYou may need to drag the spit bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: The Groundedness evaluation metric Some answers are unsupported by retrieved documents.\n\nTo verify which claims in the agent's answers are unsupported by your retrieved internal documents, you need to use the Groundedness (or Faithfulness) observability signal. It is specifically designed to detect AI hallucinations by verifying if the generated response is factually consistent with the provided context.\n\nThis metric evaluates the fraction of claims in the agent’s answer that can be directly verified by the retrieved source context.\n\nTracking this metric as a aggregated Metric signal over time will tell you how widespread the issue is across all user sessions following the recent update.\n\nBox 2: Risk and safety metrics A small number of responses are flagged for policy violations.\n\nRisk and safety metrics is the best choice.\n\nBecause the recent update specifically triggers content policy violations, these evaluators use specialized            LLM-judge metrics (e.g., content filters, self-harm, hate, violence, and jailbreak detection) to diagnose exactly which phrases or data interactions are causing the platform to block the agent’s responses.\n\nDirect Alignment: Policy violations directly fall under the domain of AI safety, content filtering, and compliance alignment.\n\nTargeted Monitoring: In Microsoft Foundry, Risk and safety metrics track content filtering logs, jailbreak attempts, or policy non-compliance issues. This allows you to pinpoint exactly which responses were blocked and why (e.g., specific filters like hate speech or violence)."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，其中包含基于内部文档的客户支持代理。\n在最近的更新后，用户报告了以下问题：                         一些答案未得到检索文档的支持。\n少量响应被标记为违反政策。\n您需要评估每个问题。\n您应该使用哪些可观察信号来处理每个问题？要回答，请将适当的可观察信号拖动到正确的问题上。每个可观察信号可以使用一次、使用多次或根本不使用。\n您可能需要拖动窗格之间的分隔条或滚动以查看内容。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：基础性评估指标一些答案没有得到检索文档的支持。\n\n要验证代理答案中哪些主张没有得到您检索的内部文档的支持，您需要使用基础性（或忠实性）可观察信号。它专门设计用于通过验证生成的响应是否与提供的上下文在事实上一致来检测 AI幻觉。\n\n该指标评估代理答案中可以直接通过检索的源上下文进行验证的主张的比例。\n\n随着时间推移跟踪该指标作为聚合指标信号将告诉您在最近更新后，所有用户会话中该问题的普遍程度。\n\n框 2：风险和安全指标少量响应被标记为违反政策。\n\n风险和安全指标是最佳选择。\n\n由于最近的更新特别触发了内容政策违规，这些评估者使用专门的                            LLM-judge 指标（例如，内容过滤、自我伤害、仇恨、暴力和越狱检测）来诊断究竟哪些短语或数据交互导致平台阻止代理的响应。\n\n直接对齐：政策违规直接属于 AI 安全、内容过滤和合规对齐的领域。\n\n目标监控：在 Microsoft Foundry 中，风险和安全指标跟踪内容过滤日志、越狱尝试或政策不合规问题。这使您能够准确找出哪些响应被阻止以及原因（例如，特定过滤器如仇恨言论或暴力）。"
  },
  "sources_en": [
   "Groundedness evaluation metrics",
   "Latency breakdown traces",
   "Risk and safety metrics",
   "Token usage analytics"
  ],
  "sources_zh": [
   "基础性评估指标",
   "延迟分解跟踪",
   "风险和安全指标",
   "令牌使用情况分析"
  ],
  "targets": [
   {
    "label_en": "Unsupported responses:",
    "label_zh": "不受支持的响应：",
    "correct_en": "Groundedness evaluation metrics",
    "correct_zh": "基础性评估指标"
   },
   {
    "label_en": "Policy violations:",
    "label_zh": "策略违规：",
    "correct_en": "Risk and safety metrics",
    "correct_zh": "风险和安全指标"
   }
  ]
 },
 {
  "id": 16,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project named Project1 that contains an agent. The agent uses an OpenAPI\n3.0 specification to call an external weather service.\nThe weather service requires a key to be passed in an HTTP header. The key value is stored as a connection in Project1.\nYou need to ensure that the key value from the connection is included automatically whenever the OpenAPI tool is invoked.\nWhat should you configure in the OpenAPI specification?",
   "options": {
    "A": "a header parameter defined for each operation",
    "B": "an Azure Key Vault connection",
    "C": "an API key security scheme",
    "D": "a Bearer token security scheme"
   },
   "explanation": "To ensure Microsoft Foundry automatically injects the API key from your project connection whenever the OpenAPI tool is invoked, your OpenAPI 3.0 specification must explicitly include a securitySchemes component mapping to the exact header name, and a global or operation-level security requirement referencing that scheme.The orchestrator matches the name field in the specification against the key stored inside your project's custom connection.\n\n1. Required OpenAPI 3.0 Configuration You must add both the components.securitySchemes block and the security block to your specification file:\n\nopenapi: 3.0.0 info:\ntitle: External Weather Service version: 1.0.0 paths:\n/weather:\nget:\noperationId: getWeather responses:\n'200':\ndescription: Successful weather retrieval\n\n# 1. Define the security scheme in the components section components:\n*->  securitySchemes:   weatherApiKey:     # Arbitrary logicalidentifier for this scheme\n*->    type: apiKey in: header name: X-Weather-API-Key # MUST match the \"key\" name configured in your Foundry Connection\n\n# 2. Apply the security requirement globally (or inside individual operations) security:\n- weatherApiKey: []   # Instructs Foundry to enforce this scheme on the API requests\n\nin: header: Explicitly instructs the Foundry proxy layer to attach the credential value to the HTTP request headers (rather than as a query parameter).name: This string value is the exact HTTP header key (e.g., X-\nWeather-API-Key or Authorization). Crucially, this value must identically match the \"Key\" property given to the secret in your Microsoft Foundry Custom Connection.\n\nsecurity: Actively triggers the authentication workflow for the tool's endpoints. Without this block, Microsoft Foundry treats the API call as anonymous and strips out connection values."
  },
  "zh": {
   "stem": "您有一个名为 Project1 的 Microsoft Foundry 项目，其中包含一个代理。该代理使用 OpenAPI\n3.0 规范调用外部天气服务。\n天气服务要求在 HTTP 头中传递一个密钥。密钥值存储为\nProject1 中的连接。\n您需要确保在每次调用 OpenAPI 工具时，连接中的密钥值会自动包含。\n您应该在 OpenAPI 规范中配置什么？",
   "options": {
    "A": "为每个操作定义的头参数",
    "B": "一个 Azure Key Vault 连接",
    "C": "一个 API 密钥安全方案",
    "D": "一个 Bearer 令牌安全方案"
   },
   "explanation": "为了确保 Microsoft Foundry 在每次调用 OpenAPI 工具时自动注入您项目连接中的 API 密钥，您的 Open API 3.0 规范必须明确包含一个映射到确切头名称的 securitySchemes 组件，以及一个引用该方案的全局或操作级安全要求。协调器将规范中的名称字段与存储在您项目自定义连接中的密钥进行匹配。\n\n1. 必需的 OpenAPI 3.0 配置您必须将 components.securitySchemes 块和 security 块添加到您的规范文件中：\n\nopenapi: 3.0.0 info:\ntitle: 外部天气服务version: 1.0.0路径：\n/天气：\n得到：\n操作 ID：getWeathern 响应：\n'200':\ndescription: 成功获取天气\n\n# 1. 在组件部分定义安全方案components:\n*-> 安全方案：            weatherApiKey:    # 此方案的任意逻辑标识符\n*->    type: apiKey在：标题name: X-Weather-API-Key # 必须与您在 Foundry 连接中配置的 \"key\" 名称匹配\n\n# 2. 将安全要求应用于全局（或单个操作内部）安全：\n- weatherApiKey: []   # 指示 Foundry 在 API 请求中强制执行此方案in: header: 明确指\n\n示 Foundry 代理层将凭证值附加到 HTTP 请求headers（而不是作为查询参数）。name: 此字符串值是确切的 HTTP 头键（例如，X-Weather-API-Key 或 Authorization）。至关重要的是，此值必须与您在 Micr osoft Foundry 自定义连接中提供的 \"Key\" 属性完全匹配。\n\n安全性：主动触发工具端点的身份验证工作流。没有这个块，Microsoft Foundry 将 API 调用视为匿名，并删除连接值。"
  }
 },
 {
  "id": 17,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that serves a high-volume chat app.\nMost requests are simple FAQs, but some require advanced reasoning.\nYou need to reduce costs and latency for common queries, without degrading the quality of the responses to complex questions.\nWhat should you do?",
   "options": {
    "A": "Route all the requests to a smaller model.",
    "B": "Use a model cascade that routes the requests to different models.",
    "C": "Increase the value of the max_tokens parameter for all the requests.",
    "D": "Route all the requests to the most capable model."
   },
   "explanation": "One should absolutely use a model cascade to route requests to different models based on complexity.\nThis architectural pattern is highly effective for high-volume chat applications because it directly addresses the trade-off between operational cost, API latency, and response quality.\n\nUsing a model cascade router ensures that your high-volume Microsoft Foundry application scales efficiently by reserving expensive computational power exclusively for queries that actually require advanced cognitive processing.\n\nNote:\n1. Analyze Request Complexity Implement a lightweight intent classifier or routing layer at the entry point of your Microsoft Foundry project.\nThis router quickly inspects incoming user prompts using basic heuristic keyword matching, semantic embeddings, or a highly optimized, fast model (like Phi-3 or GPT-4o-mini) to categorize the query as either a \"Simple FAQ\" or a \"Complex Reasoning\" request.\n\n2. Route to the Optimal TierTier 1 (Fast & Cheap):\nRoute standard, predictable FAQ requests to a smaller, cost-effective model or a local cache/vector database lookup. This keeps latency in milliseconds and drastically lowers token costs.\n\nTier 2 (Advanced Reasoning): Route multi-step logic, coding, or highly contextual queries to a frontier model (like GPT-4o).\n\n3. Implement Fallback LogicDesign the cascade to be dynamic. If the smaller Tier 1 model generates aresponse with low confidence, or if the userasks a follow-up question that invalidates the simple FAQ status, seamlessly upgrade the conversation loop to the Tier 2 model."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，服务于一个高流量的聊天应用。\n大多数请求是简单的常见问题解答，但有些请求需要高级推理。\n您需要降低常见查询的成本和延迟，而不降低对复杂问题的响应质量。\n您应该怎么做？",
   "options": {
    "A": "将所有请求路由到一个较小的模型。",
    "B": "使用模型级联，将请求路由到不同的模型。",
    "C": "增加所有请求的 max_tokens 参数的值。",
    "D": "将所有请求路由到最强大的模型。"
   },
   "explanation": "绝对应该使用模型级联，根据复杂性将请求路由到不同的模型。\n这种架构模式对于高流量聊天应用非常有效，因为它直接解决了运营成本、API 延迟和响应质量之间的权衡。\n\n使用模型级联路由器可以确保您的高流量 Microsoft Foundry 应用高效扩展，通过将昂贵的计算能力专门保留给实际需要高级认知处理的查询。\n\n注意：\n1. 分析请求复杂性在您的 Microsoft Foundry 项目的入口点实现一个轻量级意图分类器或路由层。\n该路由器使用基本的启发式关键词匹配、语义嵌入或高度优化的快速模型（如 Phi-3 或 GPT-4o-mini）快速检查传入的用户提示，以将查询分类为“简单常见问题”或“复杂推理”请求。\n\n2. 路由到最佳层级层级 1（快速且便宜）：\n将标准、可预测的常见问题请求路由到一个较小的、具有成本效益的模型或本地缓存/向量数据库查找。这将延迟保持在毫秒级，并大幅降低令牌成本。\n\n层级 2（高级推理）：将多步骤逻辑、编码或高度上下文相关的查询路由到前沿模型（如 GPT-4o）。\n\n3. 实施回退逻辑设计级联为动态。如果较小的层级 1 模型生成的响应置信度低，或者用户提出的后续问                       题使简单常见问题状态失效，则无缝升级对话循环到层级 2 模型。"
  }
 },
 {
  "id": 18,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an internal Q&A agent.\nUsers report the following issues when they ask the agent questions:\nAn increase in the following response: “No relevant information found” Periodic HTTP 429 rate limit exceeded errors during peak hours You need to identify whether each issue is caused by model unavailability, resource limits, or inference failures.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Model Availability rate and Provisioned Utilization.\nMetrics to enable\n\nTo diagnose these issues, the Model Availability rate and Provisioned Utilization metrics are needed.\n\nProblem 1 (\"No relevant information found\"): This points to an inference failure (RAG hallucination or retrieval gap), which is often caused by the model hallucinating when it is missing contextual grounding.\n\nProblem 2 (HTTP 429 rate limit exceeded): This indicates resource limits. Monitoring provisioned utilization helps identify if your allocated capacity is simply maxing out during peak hours.\n\nBox 2: RequestResponse Diagnostic log to collect\n\nTo isolate whether your issues are caused by model unavailability, resource limits, or inference failures, you need to collect and analyze the RequestResponse diagnostic log category (also referred to as RequestResponseLogs).\n\nWhile your enabled metrics provide high-level context (e.g., Model Availability highlights backend service drops and Provisioned Utilization highlights capacity strain), they do not reveal per-request details. The RequestResponse log records the exact HTTP status codes, error codes, and backend latency for every\n\ntransaction."
  },
  "zh": {
   "stem": "您有一个包含内部问答代理的 Microsoft Foundry 项目。\n用户在向代理提问时报告了以下问题：\n以下响应的增加：“未找到相关信息”在高峰时段出现周期性的 HTTP 429 速率限制超出错误您需要确定每个问题是由于模型不可用、资源限制还是推理失败造成的。\n您应该怎么做？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：模型可用性率和预配利用率。\n需要启用的指标\n\n要诊断这些问题，需要模型可用性率和预配利用率指标。"
  },
  "boxes": [
   {
    "prompt_en": "Metrics to enable:",
    "prompt_zh": "要启用的指标：",
    "options_en": [
     "Model Availability Rate and Provisioned Utilization",
     "Only Tokens Cache Match Rate",
     "Only Total Requests filtered to status code 200",
     "Time To Response and Total Tokens"
    ],
    "options_zh": [
     "模型可用性率和预配利用率",
     "仅令牌缓存匹配率",
     "仅筛选为状态代码 200 的总请求数",
     "响应时间和总令牌数"
    ],
    "correct_en": "Model Availability Rate and Provisioned Utilization",
    "correct_zh": "模型可用性率和预配利用率"
   },
   {
    "prompt_en": "Diagnostic log to collect:",
    "prompt_zh": "要收集的诊断日志：",
    "options_en": [
     "AllMetrics",
     "audit",
     "RequestResponse",
     "trace"
    ],
    "options_zh": [
     "AllMetrics",
     "audit",
     "RequestResponse",
     "trace"
    ],
    "correct_en": "RequestResponse",
    "correct_zh": "RequestResponse"
   }
  ]
 },
 {
  "id": 19,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a high-traffic agent.\nAfter a recent update, operational costs increase significantly.\nMonitoring confirms that the volume of user traffic to the agent remains unchanged.\nYou suspect that changes to the request or response characteristics are causing the increase. You need to identify whether the additional costs are driven by the model input size, the model output size, or expanded tool usage.\nWhich observability capability should you use?",
   "options": {
    "A": "latency",
    "B": "evaluation metrics",
    "C": "run success rate",
    "D": "token usage"
   },
   "explanation": "To identify whether model input, model output, or expanded tool usage is driving the cost spike, you should focus on token usage.\n\nGranular tracking of token usage breaks down the costs directly:\nInput vs. Output Tokens: Tracing token usage isolates whether the user prompt (input) has grown or if the model is generating longer, more expensive responses (output).\nTool Calling: Expanded tool usage consumes extra tokens each time the agent schema processes an execution loop, which will clearly reflect as inflated token counts."
  },
  "zh": {
   "stem": "您有一个包含高流量代理的 Microsoft Foundry 项目。\n在最近的更新后，运营成本显著增加。\n监控确认用户流量到代理的数量保持不变。\n您怀疑请求或响应特征的变化导致了成本的增加。您需要确定额外的成本是由模型输入大小、模型输出大小还是扩展工具使用引起的。\n您应该使用哪种可观察性能力？",
   "options": {
    "A": "延迟",
    "B": "评估指标",
    "C": "运行成功率",
    "D": "令牌使用"
   },
   "explanation": "要确定模型输入、模型输出或扩展工具使用是否导致成本激增，您应该关注令牌使用。\n\n对令牌使用的细致跟踪直接分解了成本：\n输入与输出令牌：追踪令牌使用情况可以判断用户提示（输入）是否增长，或者模型是否生成了更长、更昂贵的响应（输出）。\n工具调用：扩展的工具使用每次在代理架构处理执行循环时都会消耗额外的令牌，这将明显反映为膨胀的令牌计数。"
  }
 },
 {
  "id": 20,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent.\nThe agent uses tools to retrieve internal content and call external APIs. The agent is configured to let the model decide when to call the tools.\nYou need to publish the agent for a compliance workflow. The solution must meet the following requirements:\nEach workflow run must include a retrieval step before generating a response.\nTool calls must authenticate by using the published agent’s own identity.\nTool access must use an identity isolated from other project resources.\nTool access must use support audit tracing.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: required Tool choice\n\nTo comply with your strict workflow and compliance requirements, you set tool_choice parameter required.\n\nSetting tool_choice to required mathematically forces the model to invoke at least one tool (your internal            retrieval mechanism) during the turn before it can finalize its answer.\n\nIncorrect [Not auto] Setting tool_choice to auto hands over absolute decision-making power to the underlying foundational model. If the model determines it already \"knows\" the answer from its training data, it can skip the retrieval step entirely.\n\nBox 2: Using a distinct agent identity bound to the client application Configure the tool to authenticate by\n\nRestriction: Use Published Agent's Own Identity Map the agent to a Microsoft Entra Agent Identity. This gives the published agent its own distinct service principal identity within Entra ID, ensuring it does not inherit or use user tokens or secondary administrative keys.\n\nRestriction: Identity Isolated from Project Resources Rather than sharing the default Microsoft Foundry project managed identity (project-mi), assign a unique User-Assigned Managed Identity exclusively to this agent instance. Limit its role-based access control (RBAC) scopes solely to the specific retrieval indexes and the target external API endpoints."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。\n该代理使用工具来检索内部内容并调用外部 API。该代理配置为让模型决定何时调用工具。\n您需要将代理发布用于合规工作流。解决方案必须满足以下要求：\n每个工作流运行必须在生成响应之前包含检索步骤。\n工具调用必须使用已发布代理的自身身份进行身份验证。\n工具访问必须使用与其他项目资源隔离的身份。\n工具访问必须使用支持审计追踪。\n您应该怎么做？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：必填工具选择\n\n为了遵守您的严格工作流程和合规要求，您将 tool_choice 参数设置为必填。\n\n将 tool_choice 设置为必填在数学上强制模型在最终确定答案之前至少调用一个工具（您的内部                       检索机制）。\n\n不正确[不自动]将 tool_choice 设置为自动将绝对决策权交给底层基础模型。如果模型确定它已经从训练数据中“知道”答案，它可以完全跳过检索步骤。\n\n框 2：使用绑定到客户端应用的独特代理身份配置工具以通过\n\n限制：使用已发布代理的自身身份将代理映射到 Microsoft Entra 代理身份。这为已发布代理提供了其在 Entra ID 中独特的服务主体身份，确保它不继承或使用用户令牌或次级管理密钥。\n\n限制：身份与项目资源隔离与其共享默认的 Microsoft Foundry 项目管理身份（project-mi），为此代理实例分配一个独特的用户分配的托管身份。将其基于角色的访问控制（RBAC）范围限制仅限于特定的检索索引和目标外部 API 端点。"
  },
  "boxes": [
   {
    "prompt_en": "Set tool_choice to:",
    "prompt_zh": "将 tool_choice 设置为：",
    "options_en": [
     "auto",
     "none",
     "required"
    ],
    "options_zh": [
     "auto",
     "none",
     "required"
    ],
    "correct_en": "required",
    "correct_zh": "required"
   },
   {
    "prompt_en": "Configure the tool to authenticate by:",
    "prompt_zh": "配置工具的身份验证方式：",
    "options_en": [
     "Storing API keys in prompts",
     "Using the shared project agent identity",
     "Using a distinct agent identity bound to the client application"
    ],
    "options_zh": [
     "在提示中存储 API 密钥",
     "使用共享的项目代理身份",
     "使用绑定到客户端应用的独特代理身份"
    ],
    "correct_en": "Using a distinct agent identity bound to the client application",
    "correct_zh": "使用绑定到客户端应用的独特代理身份"
   }
  ]
 },
 {
  "id": 21,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project named Project1 that contains the following:\nAn OpenAPI tool that calls an external API A project connection named Connection1 that stores the API key of the external API When an agent calls the OpenAPI tool, the API returns a 401 unauthorized error, and traces show that the API key header is NOT being sent.\nYou need to ensure that the OpenAPI tool automatically includes the API key from Connection1 on all requests.\nWhat should you do?",
   "options": {
    "A": "Enable identity passthrough so that the tool uses the Microsoft Entra token of the caller.",
    "B": "Add the API key header manually to the OpenAPI specification.",
    "C": "Configure the tool to use the default connection of Project1.",
    "D": "Connect the tool to Connection1."
   },
   "explanation": "To make sure that the OpenAPI tool automatically includes the API key from the connection on all requests, you should explicitly define the security schemes and security requirements in your OpenAPI specification file.\n\nIncorrect:\n[Not D] Even if you successfully link the tool to the custom connection in the portal UI, the Microsoft Foundry agent service will intentionally redact or withhold the API key if it cannot find a corresponding matching structure in the tool's code definition."
  },
  "zh": {
   "stem": "您有一个名为 Project1 的 Microsoft Foundry 项目，其中包含以下内容：\n一个调用外部 API 的 OpenAPI 工具一个名为 Connection1 的项目连接，用于存储外部 API 的 API 密钥当代理调用 OpenAPI 工具时，API 返回 401 未授权错误，追踪显示API 密钥头 未 被发送。\n您需要确保 OpenAPI 工具在所有请求中自动包含来自 Connection1 的 API 密钥。\n您应该怎么做？",
   "options": {
    "A": "启用身份透传，以便工具使用调用者的 Microsoft Entra 令牌。",
    "B": "手动将 API 密钥头添加到 OpenAPI 规范中。",
    "C": "配置工具以使用 Project1 的默认连接。",
    "D": "将工具连接到 Connection1。"
   },
   "explanation": "为了确保 OpenAPI 工具在所有请求中自动包含来自连接的 API 密钥，您应该在 OpenAPI规范文件中明确定义安全方案和安全要求。\n\n不正确：\n[不是 D]即使您成功将工具链接到门户 UI 中的自定义连接，如果 Microsoft Foundry 代理服务无法在工具的代码定义中找到相应的匹配结构，它将故意删除或保留 API 密钥。"
  }
 },
 {
  "id": 22,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project thatcontains a customer support agent. The agent calls an internal knowledge API tool before generating responses.\nUsers report the following issues:\nSome requests take more than 15 seconds to complete.\nSome responses are incorrect, even when the knowledge API returns the expected data.\nYou need to inspect individual agent runs to view the ordered sequence of large language model (LLM) calls, tool invocations, and timing information.\nWhich observability capability should you use?",
   "options": {
    "A": "token usage",
    "B": "monitoring",
    "C": "safety metrics",
    "D": "tracing"
   },
   "explanation": "Here is LLM tracing (also known as trace view or distributed tracing for GenAI) needed.\n\nTracks Execution Flow: It captures the exact ordered sequence of LLM calls and tool invocations.\n\nPinpoints Latency: It provides timestamps and durations for every individual step to catch the 15-second bottlenecks.\n\nInspects Inputs/Outputs: It lets you see the exact payload sent to and from the knowledge API and the final LLM prompt to find out why the agent hallucinated or ignored the data."
  },
  "zh": {
   "stem": "您有一个包含客户支持代理的 Microsoft Foundry 项目。该代理在生成响应之前调用一个内部知识 API 工具。\n用户报告了以下问题：\n某些请求完成时间超过 15 秒。\n某些响应不正确，即使知识 API 返回了预期的数据。\n您需要检查单个代理的运行，以查看大型语言模型（LLM）调用、工具调用和时间信息的有序序列。\n您应该使用哪种可观察性能力？",
   "options": {
    "A": "令牌使用",
    "B": "监控",
    "C": "安全指标",
    "D": "跟踪"
   },
   "explanation": "这是 LLM 跟踪（也称为跟踪视图或 GenAI 的分布式跟踪）所需的内容。\n\n跟踪执行流程：它捕获 LLM 调用和工具调用的确切顺序。\n\n确定延迟：它为每个单独步骤提供时间戳和持续时间，以捕捉 15 秒的瓶颈。\n\n检查输入/输出：它让您查看发送到知识 API 和从知识 API 返回的确切有效负载，以及最终的LLM 提示，以找出代理为何产生幻觉或忽略数据。"
  }
 },
 {
  "id": 23,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Note: This section contains one or more sets of questions with the same scenario and problem.\nEach question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\nYou have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses.\nYou discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model.\nYou need to implement controls to mitigate the risk.\nSolution: You configure a prompt shield for user prompts.\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* You configure a prompt shield for documents.\nPrompt Shield for Documents: Highly Effective (Critical Defense) How it helps: This shield specifically scans untrusted, third-party data inputs (like external documents or text extracted from uploaded images).\n\nMechanism: It evaluates the extracted image text before it is sent to the LLM to identify hidden jail\n\n* You configure a prompt shield for user prompts.\nPrompt Shield for User Prompts: Partially Effective (Defense in Depth)\n\nHow it helps: This shield targets direct jailbreak attempts written manually by the user in the text prompt field accompanying the upload.\n\nMechanism: It prevents the user from typing supporting instructions that prime the model to execute the hidden instructions found within the image.\n\n* You configure image moderation to block unsafe content before processing the images.\nImplementing rigorous image moderation is one of the most effective ways to secure multimodal AI systems against these threats. Moderation acts as a necessary gatekeeper, preventing malicious inputs from ever reaching the generative model.\n\nIncorrect:\n* You configure protected material detection.\n\nProtected Material Detection: Ineffective for this Threat\n\nWhy it does not help: This feature is designed to scan model outputs to prevent the generation of copyrighted text, proprietary source code, or licensed imagery.\n\nLimitation: It does not scan inputs for adversarial instructions and will not prevent a user from manipulating the model's logic."
  },
  "zh": {
   "stem": "注意：本节包含一个或多个具有相同场景和问题的问题集。\n每个问题提供了一个独特的解决方案。您必须确定该解决方案是否满足所述目标。该组中的多个解决方案可能解决该问题。也有可能该组中的解决方案都无法解决该问题。\n在您回答本节中的问题后，您将无法返回。因此，这些问题不会出现在复查界面上。\n您拥有一个多模态 AI 生成模型，该模型接受图像上传并使用提取的图像文本来生成响应。\n您发现用户可以上传不安全的图像并在图像中嵌入隐藏指令以操纵模型。\n您需要实施控制措施以降低风险。\n解决方案：您为用户提示配置了一个提示保护。\n这达到了目标吗？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "正确：\n* 您为文档配置了一个提示保护。\n文档的提示保护：非常有效（关键防御）它的帮助：该保护专门扫描不受信任的第三方数据输入（如外部文档或从上传的图像中提取的文本）。\n\n机制：它在提取的图像文本发送到 LLM 之前进行评估，以识别隐藏的监狱\n\n* 您为用户提示配置了一个提示保护。\n用户提示的提示保护：部分有效（深度防御）它的帮助：该保护针对用\n\n户在上传时文本提示字段中手动编写的直接越狱尝试。\n\n机制：它防止用户输入支持指令，从而使模型执行图像中隐藏的指令。\n\n* 您配置图像审核以在处理图像之前阻止不安全的内容。\n实施严格的图像审核是保护多模态 AI 系统免受这些威胁的最有效方法之一。审核充当必要的守门人，防止恶意输入到达生成模型。\n\n不正确：\n* 您配置了受保护材料检测。\n\n受保护材料检测：对该威胁无效\n\n为什么无效：此功能旨在扫描模型输出，以防止生成受版权保护的文本、专有源代码或许可图像。\n\n限制：它不会扫描输入中的对抗性指令，也不会阻止用户操纵模型的逻辑。"
  }
 },
 {
  "id": 24,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Note: This section contains one or more sets of questions with the same scenario and problem.\nEach question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\nYou have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses.\nYou discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model.\nYou need to implement controls to mitigate the risk.\nSolution: You configure image moderation to block unsafe content before processing the images.\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* You configure a prompt shield for documents.\nPrompt Shield for Documents: Highly Effective (Critical Defense) How it helps: This shield specifically scans untrusted, third-party data inputs (like external documents or text extracted from uploaded images).\n\nMechanism: It evaluates the extracted image text before it is sent to the LLM to identify hidden jail\n\n* You configure a prompt shield for user prompts.\nPrompt Shield for User Prompts: Partially Effective (Defense in Depth)\n\nHow it helps: This shield targets direct jailbreak attempts written manually by the user in the text prompt field accompanying the upload.\n\nMechanism: It prevents the user from typing supporting instructions that prime the model to execute the hidden instructions found within the image.\n\n* You configure image moderation to block unsafe content before processing the images.\nImplementing rigorous image moderation is one of the most effective ways to secure multimodal AI systems against these threats. Moderation acts as a necessary gatekeeper, preventing malicious inputs from ever reaching the generative model.\n\nIncorrect:\n* You configure protected material detection.\nProtected Material Detection: Ineffective for this Threat\n\nWhy it does not help: This feature is designed to scan model outputs to prevent the generation of copyrighted text, proprietary source code, or licensed imagery.\n\nLimitation: It does not scan inputs for adversarial instructions and will not prevent a user from manipulating the model's logic."
  },
  "zh": {
   "stem": "注意：本节包含一个或多个具有相同场景和问题的问题集。\n每个问题提供了一个独特的解决方案。您必须确定该解决方案是否满足所述目标。该组中的多个解决方案可能解决该问题。也有可能该组中的解决方案都无法解决该问题。\n在您回答本节中的问题后，您将无法返回。因此，这些问题不会出现在复查界面上。\n您拥有一个多模态 AI 生成模型，该模型接受图像上传并使用提取的图像文本来生成响应。\n您发现用户可以上传不安全的图像并在图像中嵌入隐藏指令以操纵模型。\n您需要实施控制措施以降低风险。\n解决方案：您配置图像审核以在处理图像之前阻止不安全内容。\n这达到了目标吗？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "正确：\n* 您为文档配置了一个提示保护。\n文档的提示保护：非常有效（关键防御）它的帮助：该保护专门扫描不受信任的第三方数据输入（如外部文档或从上传的图像中提取的文本）。\n\n机制：它在提取的图像文本发送到 LLM 之前进行评估，以识别隐藏的监狱\n\n* 您为用户提示配置了一个提示保护。\n用户提示的提示保护：部分有效（深度防御）它的帮助：该保护针对用\n\n户在上传时文本提示字段中手动编写的直接越狱尝试。\n\n机制：它防止用户输入支持指令，从而使模型执行图像中隐藏的指令。\n\n* 您配置图像审核以在处理图像之前阻止不安全的内容。\n实施严格的图像审核是保护多模态 AI 系统免受这些威胁的最有效方法之一。审核充当必要的守门人，防止恶意输入到达生成模型。\n\n不正确：\n* 您配置了受保护材料检测。\n受保护材料检测：对该威胁无效\n\n为什么无效：此功能旨在扫描模型输出，以防止生成受版权保护的文本、专有源代码或许可图像。\n\n限制：它不会扫描输入中的对抗性指令，也不会阻止用户操纵模型的逻辑。"
  }
 },
 {
  "id": 25,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Note: This section contains one or more sets of questions with the same scenario and problem.\nEach question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\nYou have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses.\nYou discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model.\nYou need to implement controls to mitigate the risk.\nSolution: You configure a prompt shield for documents.\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* You configure a prompt shield for documents.\nPrompt Shield for Documents: Highly Effective (Critical Defense) How it helps: This shield specifically scans untrusted, third-party data inputs (like external documents or text extracted from uploaded images).\n\nMechanism: It evaluates the extracted image text before it is sent to the LLM to identify hidden jail\n\n* You configure a prompt shield for user prompts.\nPrompt Shield for User Prompts: Partially Effective (Defense in Depth)\n\nHow it helps: This shield targets direct jailbreak attempts written manually by the user in the text prompt field accompanying the upload.\n\nMechanism: It prevents the user from typing supporting instructions that prime the model to execute the hidden instructions found within the image.\n\n* You configure image moderation to block unsafe content before processing the images.\nImplementing rigorous image moderation is one of the most effective ways to secure multimodal AI systems against these threats. Moderation acts as a necessary gatekeeper, preventing malicious inputs\n\nfrom ever reaching the generative model.\n\nIncorrect:\n* You configure protected material detection.\nProtected Material Detection: Ineffective for this Threat\n\nWhy it does not help: This feature is designed to scan model outputs to prevent the generation of copyrighted text, proprietary source code, or licensed imagery.\n\nLimitation: It does not scan inputs for adversarial instructions and will not prevent a user from manipulating the model's logic."
  },
  "zh": {
   "stem": "注意：本节包含一个或多个具有相同场景和问题的问题集。\n每个问题提供了一个独特的解决方案。您必须确定该解决方案是否满足所述目标。该组中的多个解决方案可能解决该问题。也有可能该组中的解决方案都无法解决该问题。\n在您回答本节中的问题后，您将无法返回。因此，这些问题不会出现在复查界面上。\n您拥有一个多模态 AI 生成模型，该模型接受图像上传并使用提取的图像文本来生成响应。\n您发现用户可以上传不安全的图像并在图像中嵌入隐藏指令以操纵模型。\n您需要实施控制措施以降低风险。\n解决方案：您为文档配置提示保护。\n这达到了目标吗？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "正确：\n* 您为文档配置了一个提示保护。\n文档的提示保护：非常有效（关键防御）它的帮助：该保护专门扫描不受信任的第三方数据输入（如外部文档或从上传的图像中提取的文本）。\n\n机制：它在提取的图像文本发送到 LLM 之前进行评估，以识别隐藏的监狱\n\n* 您为用户提示配置了一个提示保护。\n用户提示的提示保护：部分有效（深度防御）它的帮助：该保护针对用\n\n户在上传时文本提示字段中手动编写的直接越狱尝试。\n\n机制：它防止用户输入支持指令，从而使模型执行图像中隐藏的指令。\n\n* 您配置图像审核以在处理图像之前阻止不安全的内容。\n实施严格的图像审核是保护多模态 AI系统免受这些威胁的最有效方法之一。审核充当必要的守门人，防止恶意输入\n\n永远到达生成模型。\n\n不正确：\n* 您配置了受保护材料检测。\n受保护材料检测：对该威胁无效\n\n为什么无效：此功能旨在扫描模型输出，以防止生成受版权保护的文本、专有源代码或许可图像。\n\n限制：它不会扫描输入中的对抗性指令，也不会阻止用户操纵模型的逻辑。"
  }
 },
 {
  "id": 26,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This section contains one or more sets of questions with the same scenario and problem.\nEach question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\nYou have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses.\nYou discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model.\nYou need to implement controls to mitigate the risk.\nSolution: You configure protected material detection.Does this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* You configure a prompt shield for documents.\nPrompt Shield for Documents: Highly Effective (Critical Defense) How it helps: This shield specifically scans untrusted, third-party data inputs (like external documents or text extracted from uploaded images).\n\nMechanism: It evaluates the extracted image text before it is sent to the LLM to identify hidden jail\n\n* You configure a prompt shield for user prompts.\nPrompt Shield for User Prompts: Partially Effective (Defense in Depth)\n\nHow it helps: This shield targets direct jailbreak attempts written manually by the user in the text prompt field accompanying the upload.\n\nMechanism: It prevents the user from typing supporting instructions that prime the model to execute the hidden instructions found within the image.\n\n* You configure image moderation to block unsafe content before processing the images.\n\nImplementing rigorous image moderation is one of the most effective ways to secure multimodal AI systems against these threats. Moderation acts as a necessary gatekeeper, preventing malicious inputs from ever reaching the generative model.\n\nIncorrect:\n* You configure protected material detection.\nProtected Material Detection: Ineffective for this Threat\n\nWhy it does not help: This feature is designed to scan model outputs to prevent the generation of copyrighted text, proprietary source code, or licensed imagery.\n\nLimitation: It does not scan inputs for adversarial instructions and will not prevent a user from manipulating the model's logic."
  },
  "zh": {
   "stem": "注意：本节包含一个或多个具有相同场景和问题的问题集。\n每个问题提供了一个独特的解决方案。您必须确定该解决方案是否满足所述目标。该组中的多个解决方案可能解决该问题。也有可能该组中的解决方案都无法解决该问题。\n在您回答本节中的问题后，您将无法返回。因此，这些问题不会出现在复查界面上。\n您拥有一个多模态 AI 生成模型，该模型接受图像上传并使用提取的图像文本来生成响应。\n您发现用户可以上传不安全的图像并在图像中嵌入隐藏指令以操纵模型。\n您需要实施控制措施以降低风险。\n解决方案：您配置了受保护材料检测。      这达到了目标吗？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "正确：\n* 您为文档配置了一个提示保护。\n文档的提示保护：非常有效（关键防御）它的帮助：该保护专门扫描不受信任的第三方数据输入（如外部文档或从上传的图像中提取的文本）。\n\n机制：它在提取的图像文本发送到 LLM 之前进行评估，以识别隐藏的监狱\n\n* 您为用户提示配置了一个提示保护。\n用户提示的提示保护：部分有效（深度防御）它的帮助：该保护针对用\n\n户在上传时文本提示字段中手动编写的直接越狱尝试。\n\n机制：它防止用户输入支持指令，从而使模型执行图像中隐藏的指令。\n\n* 您配置图像审核以在处理图像之前阻止不安全的内容。\n\n实施严格的图像审核是保护多模态 AI 系统免受这些威胁的最有效方法之一。审核充当必要的守门人，防止恶意输入到达生成模型。\n\n不正确：\n* 您配置了受保护材料检测。\n受保护材料检测：对该威胁无效\n\n为什么无效：此功能旨在扫描模型输出，以防止生成受版权保护的文本、专有源代码或许可图像。\n\n限制：它不会扫描输入中的对抗性指令，也不会阻止用户操纵模型的逻辑。"
  }
 },
 {
  "id": 27,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains two agents named PolicyWriter and RskReviewer.\nPolicyWriter generates daft updates for customer polices, and RiskReviewer reviews the drafts.\nIn the visual builder, you need to create a workflow that meets the following requirements:\nFinalizes low-risk updates without manual intervention Ensures predictable execution across the agents Requires user approval for highs updates What should you configure? To answer, select the appropriate options in the answer area.\nNOTE: Each comet selection is worth one point.",
   "options": {},
   "explanation": "Box 1: The human-in-the-loop template that pauses execution of the workflow for input Human-in-the-loop template is correct. This pattern allows the system to run automatically for predictable, node-by-node agent execution while explicitly pausing the workflow when a high-risk condition is met to wait for human intervention.\n\nBox 2: Add a Condition statement Condition statement is correct. You must evaluate the risk level (low vs. high) before deciding whether to finalize the policy. A condition node checks the risk score output from RiskReviewer. If it is low, it routes to auto-finalization. If it is high, it routes to an approval step."
  },
  "zh": {
   "stem": "您有一个包含两个代理的 Microsoft Foundry 项目，分别名为 PolicyWriter 和 RskReviewer。\nPolicyWriter 为客户政策生成草稿更新，而 RiskReviewer 则审查这些草稿。\n在可视化构建器中，您需要创建一个满足以下要求的工作流：\n在没有人工干预的情况下完成低风险更新确保代理之间的可预测执行高风险更新需要用户批准您应该配置什么？要回答，请在答案区域选择适当的选项。\n注意： 每个彗星选择值为一分。",
   "options": {},
   "explanation": "框 1：人机协作模板，该模板在执行工作流时暂停以获取输入人机协作模板是正确的。该模式允许系统自动运行，以实现可预测的，逐节点代理执行，同时在满足高风险条件时明确暂停工作流，以等待人工干预。\n\n框 2：添加条件语句条件语句是正确的。您必须在决定是否完成策略之前评估风险级别（低与高）。条件节点检查来自 RiskR eviewer 的风险评分输出。如果它是低风险，则路由到自动完成。如果它是高风险，则路由到审批步骤。"
  },
  "boxes": [
   {
    "prompt_en": "Orchestration pattern:",
    "prompt_zh": "业务流程模式：",
    "options_en": [
     "The sequential template that passes outputs node by-node",
     "The group chat template to dynamically route control between the agents",
     "The human-in-the-loop template that pauses execution of the workflow for input"
    ],
    "options_zh": [
     "逐节点传递输出的顺序模板",
     "在代理之间动态路由控制权的群聊模板",
     "暂停工作流执行以等待输入的人机协作模板"
    ],
    "correct_en": "The human-in-the-loop template that pauses execution of the workflow for input",
    "correct_zh": "暂停工作流执行以等待输入的人机协作模板"
   },
   {
    "prompt_en": "Approval checkpoints:",
    "prompt_zh": "审批检查点：",
    "options_en": [
     "Add a Basic chat node.",
     "Add a Condition statement.",
     "Add an Ask a question node."
    ],
    "options_zh": [
     "添加一个基本聊天节点。",
     "添加一个条件语句。",
     "添加一个提问节点。"
    ],
    "correct_en": "Add a Condition statement.",
    "correct_zh": "添加一个条件语句。"
   }
  ]
 },
 {
  "id": 28,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent named Agent1.\nAgent runs successful, but Foundry Control Plane does NOT display values for error rates, runs, and token usage, and the Traces tab is empty.\nYou need to ensure that Found Control Plane displays the appropriate values for Agent1.\nWhat should you do?",
   "options": {
    "A": "Update Agent1 to a new version.",
    "B": "Restart Agent from Foundry Control Plan",
    "C": "Assign to a Log Analytics workspace to Agent1.",
    "D": "Enable Application Insights for Agent1."
   },
   "explanation": "To resolve this issue, you must connect and configure an Azure Application Insights resource for your Microsoft Foundry project.\n\nThe Foundry Control Plane, its Agent Monitoring Dashboard, and the Traces tab rely directly on telemetry data stored within the connected Application Insights instance. If this resource is missing, unlinked, or improperly configured, the dashboard cannot display runs, error rates, token usage, or transaction spans."
  },
  "zh": {
   "stem": "您有一个包含名为 Agent1 的代理的 Microsoft Foundry 项目。\n代理运行成功，但 Foundry 控制平面 不 显示错误率、运行次数和令牌使用情况的值，并且 Traces 选项卡为空。\n您需要确保 Found Control Plane 显示 Agent1 的适当值。\n您应该怎么做？",
   "options": {
    "A": "将 Agent1 更新到新版本。",
    "B": "从 Foundry Control Plan 重启 Agent",
    "C": "将 Agent1 分配到 Log Analytics 工作区。",
    "D": "为 Agent1 启用 Application Insights。"
   },
   "explanation": "说明：\n要解决此问题，您必须为您的 Microsoft Foundry 项目连接并配置一个 Azure Application Insights 资源。\n\nFoundry Control Plane、其 Agent 监控仪表板和 Traces 选项卡直接依赖于存储在连接的 Application Ins ights 实例中的遥测数据。如果此资源缺失、未链接或配置不当，仪表板将无法显示运行、错误率、令牌使用情况或事务跨度。"
  }
 },
 {
  "id": 29,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You are building a customer support web app named App1 in Microsoft Foundry that uses a GPT realtime model.\nApp1 must support:\nLive, low-latency voice conversations that use Azure OpenAI Streaming audio input from users and playback audio responses You need to configure a connection method that supports real-time audio streaming in client application and targets approximately 100 ms latency.\nWhich connection method should you use?",
   "options": {
    "A": "RTMP",
    "B": "WebRTC",
    "C": "SIP",
    "D": "WebSocket"
   },
   "explanation": "WebSockets is the best connection method for this application because it enables full-duplex, bi-directional streaming over a single TCP connection, meeting the strict ~100 ms latency requirement for real-time audio."
  },
  "zh": {
   "stem": "您正在 Microsoft Foundry 中构建一个名为 App1 的客户支持 Web 应用，该应用使用 GPT 实时模型。\nApp1 必须支持：\n实时、低延迟的语音对话，使用 Azure OpenAI从用户处流式传输音频输入并播放音频响应您需要配置一种支持客户端应用程序中实时音频流的连接方法并目标大约 100 毫秒的延迟。\n您应该使用哪种连接方法？\nA.RTMPnB。 WebRTCnC。啜饮D. WebSocket",
   "options": {
    "A": "RTMP",
    "B": "WebRTC",
    "C": "SIP",
    "D": "WebSocket"
   },
   "explanation": "说明：\nWebSockets 是此应用程序的最佳连接方法，因为它支持在单个 TCP 连接上进行全双工、双向流媒体传输，满足实时音频约 ~100 毫秒的严格延迟要求。"
  }
 },
 {
  "id": 30,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent and uses a GitHub repository. The repository contains a YAM file named File1 that defines the evaluation settings of the agent.\nYou need to create a GitHub Actions workflow that runs the evaluation defined in File1 when a pull request (PR) is opened. How should you configure the workflow?",
   "options": {
    "A": "Set project-endpoint to the endpoint of the project.",
    "B": "Set evaluation-config to the path of the YAML file.",
    "C": "Set model-deployment-name to the deployed model.",
    "D": "Set tenant-id to the Microsoft Entra tenant ID"
   },
   "explanation": "The correct configuration choice is to set project-endpoint to the endpoint of the project.\n\nazure-ai-project-endpoint: This parameter is required and must be set to the URL endpoint of your Microsoft Foundry project. This aligns with setting project-endpoint."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目，并使用 GitHub 存储库。该存储库包含一个名为 File1 的 YAML 文件，定义了代理的评估设置。\n您需要创建一个 GitHub Actions 工作流，当打开拉取请求（PR）时运行 File1 中定义的评估。您应该如何配置工作流？",
   "options": {
    "A": "将 project-endpoint 设置为项目的端点。",
    "B": "将 evaluation-config 设置为 YAML 文件的路径。",
    "C": "将 model-deployment-name 设置为已部署的模型。",
    "D": "将 tenant-id 设置为 Microsoft Entra 租户 ID"
   },
   "explanation": "说明：\n正确的配置选择是将 project-endpoint 设置为项目的端点。\n\nazure-ai-project-endpoint：此参数是必需的，必须设置为您的Microsoft Foundry 项目的 URL 端点。这与设置 project-endpoint 一致。"
  }
 },
 {
  "id": 31,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent.\nThe agent uses a stored access key to retrieve secrets from an Azure key vault, which violates a keyless-\ncredentials requirement.\nYou need to ensure that the agent can retrieve the secrets. The solution must follow the principle of least privilege.\nWhat should you configure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Enable a system-assigned managed identity at the project level The correct configuration is to enable a system-assigned managed identity at the project level.\n\nThis is the correct approach. Azure AI Foundry (formerly Azure Machine Learning) allows you to enable a system-assigned managed identity directly at the project level. This identity acts as a keyless credential native to Azure. To follow the principle of least privilege, you then assign this project-level identity a specific role (such as Key Vault Secrets User) restricted only to the required Azure Key Vault. This ensures that the agent can retrieve secrets securely without exposing credentials to other projects or resources\n\nBox 2: Assign the Key Vault Secrets User role to the managed identity\n\nTo comply with the keyless-credentials requirement and follow the principle of least privilege, you should configure the Key Vault authorization method to assign the Key Vault Secrets User role to the managed identity using Azure Role-Based Access Control (Azure RBAC)."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。\n代理使用存储的访问密钥从 Azure 密钥保管库中检索机密，这违反了无密钥凭据的要求。\n您需要确保代理能够检索机密。解决方案必须遵循最小权限原则。\n您应该配置什么？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：在项目级别启用系统分配的托管身份正确的配置是在项目级别启用系统分配的托管身份。\n\n这是正确的方法。Azure AI Foundry（前身为 Azure 机器学习）允许您直接在项目级别启用系统分配的托管身份。此身份作为 Azure 的无密钥凭据。为了遵循最小权限原则，您需要将此项目级别身份分配一个特定角色（例如密钥保管库机密用户），仅限于所需的 Azure 密钥保管库。这确保代理能够安全地检索机密，而不会将凭据暴露给其他项目或资源。框 2：将密钥保管库机密用户角色分配给托管身份\n\n为了遵守无密钥凭据的要求并遵循最小权限原则，您应该配置密钥保管库授权方法，以使用 Azure 基于角色的访问控制（Azure RBAC）将密钥保管库机密用户角色分配给托管身份。"
  },
  "boxes": [
   {
    "prompt_en": "Managed identity scope:",
    "prompt_zh": "托管身份范围：",
    "options_en": [
     "Enable a system-assigned managed identity at the Foundry level.",
     "Enable a system-assigned managed identity at the project level.",
     "Create a service principal and store the principal's client secret."
    ],
    "options_zh": [
     "在 Foundry 级别启用系统分配的托管身份。",
     "在项目级别启用系统分配的托管身份。",
     "创建服务主体并存储该主体的客户端密码。"
    ],
    "correct_en": "Enable a system-assigned managed identity at the project level.",
    "correct_zh": "在项目级别启用系统分配的托管身份。"
   },
   {
    "prompt_en": "Key Vault authorization method:",
    "prompt_zh": "密钥保管库授权方法：",
    "options_en": [
     "Add an API key to application settings.",
     "Add a Key Vault access policy for the secrets.",
     "Assign the Key Vault Secrets User role to the managed identity."
    ],
    "options_zh": [
     "将 API 密钥添加到应用程序设置。",
     "为机密添加密钥保管库访问策略。",
     "将密钥保管库机密用户角色分配给托管身份。"
    ],
    "correct_en": "Assign the Key Vault Secrets User role to the managed identity.",
    "correct_zh": "将密钥保管库机密用户角色分配给托管身份。"
   }
  ]
 },
 {
  "id": 32,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a customer support application.\nYou create an evaluation named Run1 that has the following configurations:\nIncludes risk and safety metrics Includes the protected material evaluation Includes harmful content metrics that use a medium severity threshold You create an evaluation named Run2 that has the following configurations:\nIncludes risk and safety metrics Includes the protected material evaluation Includes harmful content metrics that use a high severity threshold You run both evaluations against a dataset named DB1 and receive the following results:\nContent harm defect rate of Run1: 12% Content harm defect rate of Run2: 4% Protected material evaluation of Run1: 6% Protected material evaluation of Run1: 6% You start a fine-tuning job by using DB1. The job fails during automatic RAI checks for multiple content harm types.You discover that the content filtering configurationis set to high severity.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: No Changing the content filtering configuration to low severity will not resolve the fine-tuning job issues.\n\nBox 2: Yes The difference between a 12% defect rate in Run1 and a 4% defect rate in Run2 is entirely consistent with the different severity thresholds configured for the two evaluations.\n\nBox 3: Yes The protected material evaluation metric is entirely unaffected by changes to the content harm severity threshold."
  },
  "zh": {
   "stem": "您有一个包含客户支持应用的 Microsoft Foundry 项目。\n您创建了一个名为 Run1 的评估，具有以下配置：\n包括风险和安全指标包括受保护材料评估包括使用中等严重性阈值的有害内容指标您创建了一个名为 Run2 的评估，具有以下配置：\n包括风险和安全指标包括受保护材料评估包括使用高严重性阈值的有害内容指标您对名为 DB1 的数据集运行了这两个评估，并获得以下结果：\nRun1 的内容危害缺陷率：12%Run2 的内容危害缺陷率：4%Run1 的受保护材料评估：6%Run1 的受保护材料评估：6%您通过使用 DB1 开始一个微调作业。该作业在自动 RAI 检查期间因多种内容危害类型而失败。      您发现内容过滤配置设置为高严重性。\n对于以下每个陈述，如果该陈述为真，请选择“是”。否则，请选择“否”。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：否将内容过滤配置更改为低严重性不会解决微调作业的问题。\n\n框 2：是Run1 中 12% 的缺陷率与 Run2 中 4% 的缺陷率之间的差异完全与为两个评估配置的不同严重性阈值一致。\n\n框 3: 是受保护材料评估指标完全不受内容危害严重性阈值变化的影响。"
  },
  "boxes": [
   {
    "prompt_en": "Changing the content filtering configuration to low severity will resolve the fine-tuning job issues.",
    "prompt_zh": "将内容过滤配置更改为低严重性将解决微调作业的问题。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "No",
    "correct_zh": "否"
   },
   {
    "prompt_en": "The difference between the 12% and 4% content harm defect rate is consistent with the different severity thresholds used in Run1 and Run2.",
    "prompt_zh": "12% 与 4% 内容危害缺陷率之间的差异与 Run1 和 Run2 中使用的不同严重性阈值一致。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "Yes",
    "correct_zh": "是"
   },
   {
    "prompt_en": "The identical 6% protected material evaluation values across Run1 and Run2 indicate that this metric is unaffected by the change in the severity threshold.",
    "prompt_zh": "Run1 和 Run2 中相同的 6% 受保护材料评估值表明该指标不受严重性阈值变化的影响。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "Yes",
    "correct_zh": "是"
   }
  ]
 },
 {
  "id": 33,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a multi-agent solution. The agents use tool calling to query internal systems.\nYou need to implement responsible AI auditing to meet the following requirements:\nCapture all the nested operations across the entire agent run.\nRecord tool invocation arguments and retuned results as metadata.\nWhat should you use for each requirement? To answer, drag the appropriate options to the correct targets Each option may be used once, more than once, or not at all. You may need o dag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Hierarchical spans Hierarchical spans should be used in this case.\n\nParent-Child tracking: In OpenTelemetry and Azure Monitor Application Insights (which back Microsoft Foundry environments), hierarchical spans utilize a unique Trace ID for the entire request and distinct Span IDs for individual operations.\n\nNested capture: When a primary agent calls a sub-agent, or an agent invokes a specific system tool, each subsequent operation is recorded as a child span. This explicitly preserves the parent-child relationship, allowing auditors to reconstruct the exact execution tree of all nested operations across the entire multi-\nagent run\n\nBox 2: Tool call attributes To record tool invocation arguments and returned results as metadata for responsible AI auditing in a Microsoft Foundry multi-agent project, you should use Tool call attributes.\n\nIn GenAI and multi-agent systems leveraging OpenTelemetry semantic conventions (which Microsoft Foundry utilizes for its observability, tracing, and logging pillars), tool execution details are captured via specific span attributes. Configured tool call attributes explicitly map and record the parameters (tool.call.arguments) and outputs (tool.call.result) as metadata keys inside the tracing context for auditing and validation."
  },
  "zh": {
   "stem": "您有一个包含多代理解决方案的 Microsoft Foundry 项目。这些代理使用工具调用来查询内部系统。\n您需要实施负责任的 AI 审计以满足以下要求：\n捕获整个代理运行中的所有嵌套操作。\n将工具调用参数和返回结果记录为元数据。\n您应该为每个要求使用什么？要回答，请将适当的选项拖动到正确的目标每个选项可以使用一次、使用多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动以查看内容。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1: 层次跨度在这种情况下应使用层次跨度。\n\n父子跟踪：在 OpenTelemetry 和 Azure Monitor Application Insights（支持 MicrosoftFoundry 环境）中，层次跨度为整个请求利用唯一的追踪 ID，并为各个操作使用不同的跨度 ID。\n\n嵌套捕获：当主代理调用子代理，或代理调用特定系统工具时，每个后续操作都记录为子跨度。这明确保留了父子关系，使审计员能够重建整个多代理运行中所有嵌套操作的确切执行树。\n\n框 2：工具调用属性为了在 Microsoft Foundry 多代理项目中记录工具调用参数和返回结果作为负责任的 AI 审计元数据，您应该使用工具调用属性。\n\n在利用 OpenTelemetry 语义约定的 GenAI 和多代理系统中（Microsoft Foundry 利用这些约定进行可观察性、追踪和日志记录），工具执行细节通过特定的跨度属性捕获。配置的工具调用属性明确映射并记录参数(tool.call.arguments) 和输出 (tool.call.result) 作为审计和验证的追踪上下文中的元数据键。"
  },
  "sources_en": [
   "Hierarchical spans",
   "A KQL query filter",
   "Sampling",
   "Tool call attributes",
   "Trace sampling policy"
  ],
  "sources_zh": [
   "层次跨度",
   "KQL 查询筛选器",
   "采样",
   "工具调用属性",
   "跟踪采样策略"
  ],
  "targets": [
   {
    "label_en": "Capture all the nested operations across the entire agent run:",
    "label_zh": "捕获整个代理运行中的所有嵌套操作：",
    "correct_en": "Hierarchical spans",
    "correct_zh": "层次跨度"
   },
   {
    "label_en": "Record tool invocation arguments and results:",
    "label_zh": "记录工具调用参数和结果：",
    "correct_en": "Tool call attributes",
    "correct_zh": "工具调用属性"
   }
  ]
 },
 {
  "id": 34,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project.\nYou need to deploy a model from the model catalog to support a search solution for internal policy documents. The model must generate vector representations of the text in the documents and of user queries.\nWhich type of model should you use?",
   "options": {
    "A": "an embedding model",
    "B": "an image generation model",
    "C": "a large language model (LLM)",
    "D": "a small language model (SLM)"
   },
   "explanation": "To fulfill this requirement, you need an embeddings model from the Microsoft Foundry AI Model Catalog that captures semantic meaning and outputs numerical vectors for text chunks."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目。\n您需要从模型目录中部署一个模型，以支持内部政策文档的搜索解决方案。该模型必须生成文档中文本和用户查询的向量表示。\n您应该使用哪种类型的模型？",
   "options": {
    "A": "嵌入模型",
    "B": "图像生成模型",
    "C": "大型语言模型 (LLM)",
    "D": "小型语言模型 (SLM)"
   },
   "explanation": "说明：\n为了满足此要求，您需要从 Microsoft Foundry AI 模型目录中获取一个嵌入模型，该模型能够捕捉语义含义并为文本块输出数值向量。"
  }
 },
 {
  "id": 35,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project.\nYou need to deploy a model from the model catalog to support real-time inference. The solution must meetthe following requirements:\nUse key-based authentication.\nSupport real-time REST API access.\nNOT consume the vCPU quota of the virtual machines in the Azure subscription.\nWhich type of deployment should you use?",
   "options": {
    "A": "serverless API",
    "B": "batch",
    "C": "self-hosted container",
    "D": "standard"
   },
   "explanation": "The most appropriate type of deployment is a serverless API deployment (also referred to as a standard deployment or Models-as-a-Service / MaaS).\n\nKey-Based Authentication: Serverless API deployments natively provision an endpoint URL alongside primary and secondary API keys to secure your client applications.\n\nReal-Time REST API Access: When the model is successfully deployed, it exposes a scalable, real-time HTTP/REST endpoint matching the standardized Azure AI Model Inference API.\n\nNo Virtual Machine vCPU Quota Consumption: Unlike managed compute deployments—which provision dedicated virtual machines in your subscription and require VM vCPU quota—serverless API deployments are completely hosted and managed by Microsoft. They operate on a pay-as-you-go, token-based billing structure and do not consume any VM vCPU quota from your Azure subscription."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目。\n您需要从模型目录中部署一个模型以支持实时推理。该解决方案必须满足      以下要求：\n使用基于密钥的身份验证。\n支持实时 REST API 访问。\n不消耗 Azure 订阅中虚拟机的 vCPU 配额。\n您应该使用哪种类型的部署？",
   "options": {
    "A": "无服务器 API",
    "B": "批处理",
    "C": "自托管容器",
    "D": "标准"
   },
   "explanation": "说明：\n最合适的部署类型是无服务器 API 部署（也称为标准部署或模型即服务 / MaaS）。\n\n基于密钥的身份验证：无服务器 API 部署本地提供一个端点 URL，以及主 API 密钥和次 API 密钥，以保护您的客户端应用程序。\n\n实时 REST API 访问：当模型成功部署时，它会暴露一个可扩展的实时 HTTP/REST 端点，符合标准化的Azure AI 模型推理 API。\n\n不消耗虚拟机 vCPU 配额：与管理计算部署不同，后者在您的订阅中配置专用虚拟机并需要 VM vCPU 配额，无服务器 API 部署完全由微软托管和管理。它们采用按需付费的基于令牌的计费结构，不会消耗您 Azu re 订阅中的任何 VM vCPU 配额。"
  }
 },
 {
  "id": 36,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You plan to create a Microsoft Foundry project named Project1 that will contain an agent and use an Azure key vault named KV1.\nYou need to configure a connection from Project1 to KV1.\nHow should you complete the Bicep code? To answer, select the appropriate options in the answer area?\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: AzureKeyVault To configure a connection from a Microsoft Foundry project to an Azure Key Vault, you must use the AzureKeyVault connection category.\n\nBox 2: AccountManagedIdentity To connect a Microsoft Foundry project to an Azure Key Vault, you must use AccountManagedIdentity as the authType.\n\nMicrosoft Foundry secures its outbound connections to core Azure storage and security infrastructure using Microsoft Entra ID role-based access control (RBAC). Using AccountManagedIdentity completely eliminates the need to handle or rotate explicit credentials or api keys within your configuration."
  },
  "zh": {
   "stem": "您计划创建一个名为 Project1 的 Microsoft Foundry 项目，该项目将包含一个代理并使用名为 KV1 的 Azure密钥保管库。\n您需要配置从 Project1 到 KV1 的连接。\n您应该如何完成 Bicep 代码？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：AzureKeyVault要配置从 Microsoft Foundry 项目到 Azure Key Vault 的连接，您必须使用AzureKeyVault 连接类别。\n\n框 2：AccountManagedIdentity要将 Microsoft Foundry 项目连接到 Azure Key Vault，您必须使用 AccountManagedIdentity 作为authType。\n\nMicrosoft Foundry 通过 Microsoft Entra ID 基于角色的访问控制 (RBAC) 来保护其与核心 Azure 存储和安全基础设施的出站连接。使用 AccountManagedIdentity 完全消除了在配置中处理或轮换显式凭据或 API 密钥的需要。"
  },
  "boxes": [
   {
    "prompt_en": "category:",
    "prompt_zh": "category：",
    "options_en": [
     "'AzureAIService'",
     "'AzureKeyVault'",
     "'AzureOpenAI'"
    ],
    "options_zh": [
     "'AzureAIService'",
     "'AzureKeyVault'",
     "'AzureOpenAI'"
    ],
    "correct_en": "'AzureKeyVault'",
    "correct_zh": "'AzureKeyVault'"
   },
   {
    "prompt_en": "authType:",
    "prompt_zh": "authType：",
    "options_en": [
     "'AccountKey'",
     "'AccountManagedIdentity'",
     "'ApiKey'"
    ],
    "options_zh": [
     "'AccountKey'",
     "'AccountManagedIdentity'",
     "'ApiKey'"
    ],
    "correct_en": "'AccountManagedIdentity'",
    "correct_zh": "'AccountManagedIdentity'"
   }
  ],
  "code": {
   "lang": "bicep",
   "text": "resource existingKeyVault 'Microsoft.KeyVault/vaults@2024-11-01' existing = {\n    name: 'KV1'\n    scope: resourceGroup()\n}\n\nresource connection 'Microsoft.CognitiveSevices/accounts/connections@2025-04-01-preview' = {\n    name: '${aiFoundryName}-keyvault'\n    parent: aiFoundry\n    properties: {\n        category: [[1]]\n        target: existingKeyVault.id\n        authType: [[2]]\n        isSharedToAll:\n            metadata: {\n                ApiType: 'Azure'\n                ResourceId: existingKeyVault.id\n                location: existingKeyVault.location\n            }\n    }\n}"
  }
 },
 {
  "id": 37,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project.\nYou need to create a customer support agent that meets the following requirements:\nGrounds responses only in company policy documents stored in curated repositories Retains customer preferences across separate chat sessions How should you configure the agent? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Configure retrieval from approved data sources You should configure retrieval from approved data sources to meet this requirement.\n\nIn Microsoft Foundry (and broader Azure AI Foundry / Azure OpenAI architectures), grounding an agent exclusively in company policy documents requires implementing a Retrieval-Augmented Generation (RAG) pattern. This ensures the AI model only answers using the provided context and does not hallucinate or rely on its public training data.\n\nBox 2: Enable agent memory that uses persistent storage To retain user preferences across completely separate chat sessions or conversations, you must use persistent agent memory. Traditional chat history only tracks messages within a single active thread or session. By contrast, the Memory Store feature provides a managed, long-term memory system that structurally indexes user preferences and facts across different devices and separate sessions."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目。\n您需要创建一个满足以下要求的客户支持代理：\n仅根据存储在策划库中的公司政策文件提供响应在不同的聊天会话中保留客户偏好您应该如何配置代理？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：从批准的数据源配置检索您应该从批准的数据源配置检索以满足此要求。\n\n在 Microsoft Foundry（以及更广泛的 Azure AI Foundry / Azure OpenAI 架构）中，完全基于公司政策文件来构建代理需要实施检索增强生成（RAG）模式。这确保 AI 模型仅使用提供的上下文进行回答，而不会产生幻觉或依赖其公共训练数据。\n\n框 2：启用使用持久存储的代理记忆为了在完全独立的聊天会话或对话中保留用户偏好，您必须使用持久代理记忆。传统的聊天历史仅跟踪单个活动线程或会话中的消息。相比之下，记忆存储功能提供了一个管理的长期记忆系统，在不同设备和独立会话中结构性地索引用户偏好和事实。"
  },
  "boxes": [
   {
    "prompt_en": "Knowledge grounding:",
    "prompt_zh": "知识基础：",
    "options_en": [
     "Configure revival from approved data sources.",
     "Upload the policy documents direct to the agent.",
     "Embed the policy documents directly into the agent instructions."
    ],
    "options_zh": [
     "从批准的数据源配置检索。",
     "将策略文档直接上传到代理。",
     "将策略文档直接嵌入到代理指令中。"
    ],
    "correct_en": "Configure revival from approved data sources.",
    "correct_zh": "从批准的数据源配置检索。"
   },
   {
    "prompt_en": "Memory:",
    "prompt_zh": "记忆：",
    "options_en": [
     "Use orchestration-managed session context.",
     "Enable agent memory that uses persistent storage.",
     "Retain user preferences in the state of the client application"
    ],
    "options_zh": [
     "使用编排管理的会话上下文。",
     "启用使用持久存储的代理记忆。",
     "在客户端应用程序的状态中保留用户偏好"
    ],
    "correct_en": "Enable agent memory that uses persistent storage.",
    "correct_zh": "启用使用持久存储的代理记忆。"
   }
  ]
 },
 {
  "id": 38,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have an Azure subscription.\nYou plan to build an app that will use the Azure AI DALL-E model.\nYou need to deploy the model.\nWhat should you use?",
   "options": {
    "A": "the Azure SDK for Python and PowerShell cmdlets.",
    "B": "the Azure SDK for JavaScript and Azure Machine Learning Studio.",
    "C": "Microsoft Foundry and the Azure Command Line Interface (CLI)",
    "D": "the Azure portal and Microsoft Graph API"
   },
   "explanation": "To deploy the DALL-E model, you need Microsoft Foundry and the Azure Command Line Interface (CLI).\n\nDeployment vs. Application Logic: The Azure CLI along with Microsoft Foundry handles the administrative infrastructure layer required to provision, configure, and manage model deployments within your subscription.\n\nIncorrect:\n[Not B] The Role of the SDK: The Azure SDK for JavaScript is a client-side development library. It is used within your code to consume or call the model's API after it has already been deployed. It cannot deploy the DALL-E model asset itself.\nStudio Clarification: While Azure Machine Learning Studio manages custom ML pipelines, foundational generative AI models like DALL-E are provisioned and hosted through the Microsoft Foundry portal and its associated ecosystem."
  },
  "zh": {
   "stem": "您拥有一个 Azure 订阅。\n您计划构建一个将使用 Azure AI DALL-E 模型的应用。\n您需要部署该模型。\n您应该使用什么？",
   "options": {
    "A": "Azure Python SDK 和 PowerShell 命令行工具。",
    "B": "Azure JavaScript SDK 和 Azure 机器学习工作室。",
    "C": "Microsoft Foundry 和 Azure 命令行界面 (CLI)",
    "D": "Azure 门户和 Microsoft Graph API"
   },
   "explanation": "说明：\n要部署 DALL-E 模型，您需要 Microsoft Foundry 和 Azure 命令行界面 (CLI)。\n\n部署与应用逻辑：Azure CLI 和 Microsoft Foundry 处理所需的管理基础设施层，以便在您的订阅中配置、管理和管理模型部署。\n\n不正确：\n[不是 B] SDK 的角色：Azure JavaScript SDK 是一个客户端开发库。它在您的代码中用于消费或调用模型的 API，前提是该 API 已经被部署。它不能部署 DALL-E 模型资产本身。\n工作室说明：虽然 Azure 机器学习工作室管理自定义 ML 流水线，但像 DALL-E 这样的基础生成式 AI 模型是通过 Microsoft Foundry 门户及其相关生态系统进行配置和托管的。"
  }
 },
 {
  "id": 39,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure subscription.\nYou need to create a new resource that will generate fictional stores in response to user prompts. The solution must ensure that the resource uses a customer-managed key to protect data.\nHow should you complete the script? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: OpenAI To generate fictional stores in response to user prompts, you need a generative AI model (such as GPT-\n3.5 or GPT-4). The Azure OpenAI service natively supports this generative capability and allows you to secure your deployed models and data using customer-managed keys (CMK).\n\nBox 2: --assign-identity When defining the Azure Key Vault resource script to enable customer-managed keys (CMK), you must use --assign-identity (or assign-identity)."
  },
  "zh": {
   "stem": "您拥有一个 Azure 订阅。\n您需要创建一个新资源，该资源将在用户提示下生成虚构的商店。该解决方案必须确保资源使用客户管理的密钥来保护数据。\n您应该如何完成脚本？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：OpenAI为了根据用户提示生成虚构的商店，您需要一个生成式人工智能模型（例如 GPT-3.5 或 GPT-4）。Azure OpenAI 服务本地支持这种生成能力，并允许您使用客户管理的密钥（CMK）来保护已部署的模型和数据。\n\n框 2：--assign-identity在定义 Azure Key Vault 资源脚本以启用客户管理的密钥（CMK）时，您必须使用 --assign-identity（或 assign-identity）。"
  },
  "boxes": [
   {
    "prompt_en": "--kind",
    "prompt_zh": "--kind",
    "options_en": [
     "AIServices",
     "LanguageAuthoring",
     "OpenAI"
    ],
    "options_zh": [
     "AIServices",
     "LanguageAuthoring",
     "OpenAI"
    ],
    "correct_en": "OpenAI",
    "correct_zh": "OpenAI"
   },
   {
    "prompt_en": "CMK parameter",
    "prompt_zh": "CMK 参数",
    "options_en": [
     "--api-properties",
     "--assign-identity",
     "--encryption"
    ],
    "options_zh": [
     "--api-properties",
     "--assign-identity",
     "--encryption"
    ],
    "correct_en": "--assign-identity",
    "correct_zh": "--assign-identity"
   }
  ],
  "code": {
   "lang": "bash",
   "text": "az cognitiveservices account create -n myresource -g myResourceGroup --kind [[1]] --sku S -l WestEurope\n\n[[2]] '{\n    \"keySource\": \"Microsoft.KeyVault\",\n    \"keyVaultProperties\": {\n        \"keyName\": \"KeyName\",\n        \"keyVersion\": \"secretVersion\",\n        \"keyVaultUri\": \"https://issue23056kv.vault.azure.net/\"\n    }\n}'"
  }
 },
 {
  "id": 40,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You are developing a new sales system that will process user-generated video and text from a public-\nfacing website.\nYou plan to notify users that their data has been processed by the sales system.\nWhich responsible AI principle does this help meet?",
   "options": {
    "A": "fairness",
    "B": "transparency",
    "C": "inclusiveness",
    "D": "reliability and safety"
   },
   "explanation": "Notifying users that their data has been processed by your sales system fulfills the Transparency responsible AI principle. Transparency ensures that users are informed about how their data is collected and processed, which helps foster understanding and build trust between users and technology providers."
  },
  "zh": {
   "stem": "您正在开发一个新的销售系统，该系统将处理来自面向公众的网站的用户生成的视频和文本。\n您计划通知用户他们的数据已被销售系统处理。\n这有助于满足哪个负责任的人工智能原则？",
   "options": {
    "A": "公平性",
    "B": "透明性",
    "C": "包容性",
    "D": "可靠性和安全性"
   },
   "explanation": "说明：\n通知用户他们的数据已被您的销售系统处理，符合透明性负责任的人工智能原则。透明性确保用户了解他们的数据是如何被收集和处理的，这有助于促进理解并建立用户与技术提供者之间的信任。"
  }
 },
 {
  "id": 41,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You are designing a content management system.\nYou need to ensure that the reading experience is optimized for users who have reduced comprehension and learning differences, such as dyslexia. The solution must minimize development effort.\nWhich Azure service should you include in the solution?",
   "options": {
    "A": "Azure Document Intelligence in Foundry Tools",
    "B": "Azure Language in Foundry Tools",
    "C": "Azure AI Immersive Reader",
    "D": "Azure Translator in Foundry Tools"
   },
   "explanation": "Include Azure AI Immersive Reader in your solution. It is an applied AI service that provides built-in accessibility features like read-aloud (text-to-speech), real-time translation, line focusing, and customizable typography. It requires no machine learning expertise and integrates easily to minimize development effort."
  },
  "zh": {
   "stem": "您正在设计一个内容管理系统。\n您需要确保阅读体验针对理解能力降低和学习差异的用户进行了优化，例如阅读障碍。解决方案必须最小化开发工作量。\n您应该在解决方案中包含哪个 Azure 服务？",
   "options": {
    "A": "Foundry Tools 中的 Azure 文档智能",
    "B": "Foundry Tools 中的 Azure 语言",
    "C": "Azure AI 沉浸式阅读器",
    "D": "Foundry Tools 中的 Azure 翻译器"
   },
   "explanation": "说明：\n在您的解决方案中包含 Azure AI 沉浸式阅读器。它是一项应用 AI 服务，提供内置的无障碍功能，如朗读（文本转语音）、实时翻译、行聚焦和可自定义排版。它不需要机器学习专业知识，并且易于集成，以最小化开发工作量。"
  }
 },
 {
  "id": 42,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have an Azure subscription that contains an Azure App Service app named App1.\nYou provision a Microsoft Foundry Service resource named CSAccount1.\nYou need to configure App1 to access CSAccount1. The solution must minimize administrative effort.\nWhat should you use to configure App1?",
   "options": {
    "A": "the endpoint URI and subscription key",
    "B": "the endpoint URI and an OAuth token",
    "C": "the endpoint URI and a shared access signature (SAS) token",
    "D": "a system assigned managed identity and an X.509 certificate"
   },
   "explanation": "To configure the App Service app to access the Microsoft Foundry Service (part of Azure AI Services) with low administration, you need to configure the app with the endpoint URI and a subscription key.\n\nThese credentials can be found in the Azure Portal under the Keys & Endpoint section of your provisioned Foundry resource, allowing the app to seamlessly authenticate API calls."
  },
  "zh": {
   "stem": "您拥有一个包含名为 App1 的 Azure 应用服务应用的 Azure 订阅。\n您配置了一个名为 CSAccount1 的 Microsoft Foundry 服务资源。\n您需要配置 App1 以访问 CSAccount1。解决方案必须最小化管理工作。\n您应该使用什么来配置 App1？",
   "options": {
    "A": "端点 URI 和订阅密钥",
    "B": "端点 URI 和 OAuth 令牌",
    "C": "端点 URI 和共享访问签名 (SAS) 令牌",
    "D": "系统分配的托管身份和 X.509 证书"
   },
   "explanation": "说明：\n要配置应用服务应用以低管理权限访问 Microsoft Foundry 服务（Azure AI 服务的一部分），您需要使用端点 URI 和订阅密钥配置该应用。\n\n这些凭据可以在 Azure 门户的已配置 Foundry 资源的密钥和端点部分找到，从而使应用能够无缝地验证 A PI 调用。"
  }
 },
 {
  "id": 43,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a web app that uses Azure AI Search.\nWhen reviewing activity you see greater than expected search query volumes. You suspect that the query key is compromised.You need to prevent unauthorized accessto the search endpoint and ensure that users only have read only access to the documents collection. The solution must minimize app downtime.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
   "options": {},
   "explanation": "Enforces Read-Only Permissions: Query keys are specifically designed to provide read-only access to the documents collection of an index. Admin keys provide full read-write administrative privileges and should never be distributed to consumer-facing applications.\n\nZero Downtime: Azure AI Search lets you generate up to 50 individual query keys. Creating a new one\n\nallows the app to stay online throughout the entire key rotation process"
  },
  "zh": {
   "stem": "您有一个使用 Azure AI 搜索的 Web 应用。\n在审查活动时，您发现搜索查询量超出预期。您怀疑查询密钥已被泄露。      您需要防止对搜索端点的未经授权访问，并确保用户仅对文档集合具有只读访问权限。解决方案必须最小化应用停机时间。\n您应该按顺序执行哪三个操作？要回答，请将适当的操作从操作列表移动到答案区域，并按正确顺序排列它们。",
   "options": {},
   "explanation": "强制只读权限：查询密钥专门设计用于提供对索引文档集合的只读访问。管理员密钥提供完全的读写管理权限，绝不应分发给面向消费者的应用。\n\n零停机时间：Azure AI 搜索允许您生成多达 50 个单独的查询密钥。创建一个新的密钥\n\n使应用在整个密钥轮换过程中保持在线"
  },
  "sources_en": [
   "Regenerate the primary admin key",
   "Regenerate the secondary admin key",
   "Change the app to use the secondary admin key",
   "Add a new query key",
   "Change the app to use the new key",
   "Delete the compromised key"
  ],
  "sources_zh": [
   "重新生成主管理员密钥",
   "重新生成辅助管理员密钥",
   "将应用更改为使用辅助管理员密钥",
   "添加新的查询密钥",
   "将应用更改为使用新密钥",
   "删除已泄露的密钥"
  ],
  "targets": [
   {
    "label_en": "Step 1",
    "label_zh": "步骤 1",
    "correct_en": "Delete the compromised key",
    "correct_zh": "删除已泄露的密钥"
   },
   {
    "label_en": "Step 2",
    "label_zh": "步骤 2",
    "correct_en": "Add a new query key",
    "correct_zh": "添加新的查询密钥"
   },
   {
    "label_en": "Step 3",
    "label_zh": "步骤 3",
    "correct_en": "Change the app to use the new key",
    "correct_zh": "将应用更改为使用新密钥"
   }
  ]
 },
 {
  "id": 44,
  "section": "Plan and manage an Azure AI solution",
  "sectionZh": "规划和管理 Azure AI 解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You are building a model to detect objects in images.\nThe performance of the model based on training data is shown in the following exhibit.\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: 0 The percentage of false positives is 0%.\n\nBecause the model made zero incorrect positive predictions, the count and percentage of false positives must be exactly zero.\n\nBox 2: 25 The value for the number of true positives divided by the total number of true positives and false negatives is 25% (or 0.25).\n\nHigh Precision (100%): Every single object your model detects is correct; it generates zero false alarms.\n\nLow Recall (25%): Your model misses 75% of the actual objects it was supposed to find.\n'"
  },
  "zh": {
   "stem": "您正在构建一个模型来检测图像中的物体。\n基于训练数据的模型性能如以下图表所示。\n使用下拉菜单选择答案选项，以完成每个基于图形中提供的信息的陈述。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：0假阳性的百分比为 0%。\n\n因为模型没有做出任何错误的正预测，所以假阳性的计数和百分比必须完全为零。\n\n框 2: 25真正阳性数量与真正阳性和假阴性总数的比值为 25%（或 0.25）。\n\n高精度 (100%): 您的模型检测到的每一个对象都是正确的；它生成零个误报。\n\n低召回率 (25%): 您的模型错过了 75% 的实际对象。\n'"
  },
  "boxes": [
   {
    "prompt_en": "The percentage of false positives is:",
    "prompt_zh": "假阳性的百分比为：",
    "options_en": [
     "0",
     "25",
     "30",
     "50",
     "100"
    ],
    "options_zh": [
     "0",
     "25",
     "30",
     "50",
     "100"
    ],
    "correct_en": "0",
    "correct_zh": "0"
   },
   {
    "prompt_en": "The value for the number of true positives divided by the total number of true positives and false negatives is:",
    "prompt_zh": "真阳性数量除以真阳性和假阴性总数的值为：",
    "options_en": [
     "0",
     "25",
     "30",
     "50",
     "100"
    ],
    "options_zh": [
     "0",
     "25",
     "30",
     "50",
     "100"
    ],
    "correct_en": "25",
    "correct_zh": "25"
   }
  ],
  "code": {
   "lang": "exhibit",
   "title_en": "Exhibit — Custom Vision, Objects / Performance",
   "title_zh": "示意图 — Custom Vision，对象 / 性能",
   "text": "Probability Threshold: 50%      Overlap Threshold: 30%\n\nIteration 1\nFinished training on 18/02/2022, 17:08:38 using General domain\nIteration id: eedf9f1a-1a9f-4d98-bf2c-ffc28bd8cae1\n\n    Precision            Recall              mAP\n     100.0%              25.0%              77.2%",
   "text_zh": "概率阈值 (Probability Threshold): 50%      重叠阈值 (Overlap Threshold): 30%\n\n迭代 1 (Iteration 1)\n训练完成于 18/02/2022, 17:08:38，使用 General 域\n迭代 ID: eedf9f1a-1a9f-4d98-bf2c-ffc28bd8cae1\n\n    精确率 Precision      召回率 Recall        mAP\n     100.0%              25.0%              77.2%"
  }
 },
 {
  "id": 45,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You need to configure personalized user interactions for Agent1. The solution must meet the business requirements.\nWhat should you include in the solution?",
   "options": {
    "A": "knowledge",
    "B": "memory",
    "C": "guardrails",
    "D": "tools"
   },
   "explanation": "Scenario, Business Requirements:\n*-> Users that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\nAgent1 must answer questions only about the products sold by Contoso.\n\nTo configure personalized user interactions that retain context and recall previous information, you should use the Memory in Foundry Agent Service.\n\nManaged Long-Term Memory: This allows the agent to extract meaningful information from user\n\nconversations and store it as durable knowledge (e.g., user preferences or historical details) to be recalled across future interactions.\n\nScoped Memory Stores: By using the scope parameter when creating memory stores, you can segment memories to ensure a secure, personalized experience for distinct users.\n\nAutomatic Injection: The agent will automatically inject these learned facts and user profile details into the prompt before new interactions, eliminating the need to rehydrate context manually.\n\nReferences:\nhttps://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory",
   "scenario": "Implement generative AI and agentic solutions\n\nTestlet 1\n\nCase Study\n\nThis is a case study. Case studies are not timed separately from other exam sections. You can use as much exam time as you would like to complete each case study. However, there might be additional case studies or other exam sections. Manage your time to ensure that you can complete all the exam sections in the time provided. Pay attention to the Exam Progress at the top of the screen so you have sufficient time to complete any exam sections that follow this case study.\n\nTo answer the case study questions, you will bed to reference information that is provided in the case.\nCase studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.\n\nA Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.\n\nTo start the case study\n\nTo display the first question in this case study, select the “Next” button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the “Question” button to return to the question.\n\nOverview\n\nCompany Information\n\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-\nbased solutions by using Microsoft Foundry.Existing Environment\n\nIdentity Environment\n\nContoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.\n\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\n\nThe team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications.\n\nContoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.\n\nGenerative Environment\n\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\n\nProject1\n\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\n\nAgent1 has the following configurations:\n\nAgent1 uses a base model deployment.\nA safety evaluation pipeline is NOT enabled.\n\nTool invocation approval workflows are NOT enabled.\nConversation memory constraints are NOT configured.\n\nAgent1 interacts with customers by using digital support channels and answers general questions about Contoso products.\n\nProject1 is deployed to an Azure region located in the European Union (EU).\n\nAgent1Dev Team will use Project1 to optimize and maintain Agent1.\n\nProject2\n\nProject2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.\n\nDevelopment of the solution is incomplete.\n\nData Environment\n\nContoso stores product-related information in Azure resources that support AI applications.\n\nThe Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nThe product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\n\nContoso identifies the following issues:\n\nAgent1 has only general knowledge of the Contoso products.\nA recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet.\nAgent1 does NOT use the detailed product information in the product sheets stored in storage1 when   responding to customer questions.\nThe finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n\nRequirements\n\nPlanned Changes\n\nContoso plans to implement the following changes:\n\nImplement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.\nUpdate the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\nEnable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.\nImplement an indexing solution for the product sheets that Agent1 can use to answer customer questions.\nComplete the development of the video creation solution.\n\nTechnical Requirements\n\nContoso identifies the following technical requirements:\n\nThe model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\n\nThe product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\nResponses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product details.\nThe model version used by Agent1 must remain consistent to ensure stable responses.\nThe data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\n\nContoso identifies the following security and compliance requirements:\n\nAPI keys must NOT be used to access Foundry-deployed models.\nAccess to the Azure resources must follow the principle of least privilege.\nThe developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.\nAccess to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.\nAccess to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test.\nAgent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\nThe product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.\n\nBusiness Requirements\n\nContoso identifies the following business requirements:\n\nUsers that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\nAgent1 must answer questions only about the products sold by Contoso."
  },
  "zh": {
   "stem": "您需要为 Agent1 配置个性化用户交互。该解决方案必须满足业务需求。\n您应该在解决方案中包含什么？",
   "options": {
    "A": "知识",
    "B": "记忆",
    "C": "保护措施",
    "D": "工具"
   },
   "explanation": "说明：\n场景，业务需求:\n*-> 与 Agent1 互动的用户必须在未来的互动中拥有个性化体验，包括\nAgent1 能够保留对话上下文并回忆之前的相关信息交互。\nAgent1 只能回答有关 Contoso 销售的产品的问题。\n\n要配置保留上下文并回忆先前信息的个性化用户交互，您应该使用 Foundry Agent Service 中的 Memory。\n\n管理长期记忆：这允许代理从用户中提取有意义的信息\n\n对话并将其存储为持久知识（例如，用户偏好或历史细节），以便在未来的互动中进行回忆。\n\n作用域内存存储：通过在创建内存存储时使用作用域参数，您可以对记忆进行分段，以确保为不同用户提供安全、个性化的体验。\n\n自动注入：代理将在新的交互之前自动将这些学习到的事实和用户资料细节注入到提示中，消除手动重新填充上下文的需要。\n\n参考文献：\nhttps://learn.microsoft.com/en-us/azure/foundry/agents/concepts/what-is-memory",
   "scenario": "实施生成式人工智能和基于代理的解决方案\n\n测试单元 1\n\n案例研究\n\n这是一个案例研究。 案例研究的计时与其他考试部分不分开。您可以使用尽可能多的考试时间来完成每个案例研究。然而，可能会有额外的案例研究或其他考试部分。管理您的时间，以确保您能够在提供的时间内完成所有考试部分。请注意屏幕顶部的考试进度，以确保您有足够的时间完成此案例研究后面的任何考试部分。\n\n要回答案例研究问题，您需要参考案例中提供的信息。\n案例研究及相关问题可能包含展览或其他资源，提供有关案例中描述的场景的更多信息。 单个问题中提供的信息不适用于案例研究中的其他问题。\n\n在此案例研究结束时，将出现复查界面。从复查界面，您可以在进入下一个考试部分之前查看和更改您的答案。离开此案例研究后，您将无法返回。\n\n要开始案例研究\n\n要显示本案例研究中的第一个问题，请选择“下一步”按钮。在问题左侧，菜单提供了链接到信息的内容，例如业务需求、现有环境和问题陈述。在回答任何问题之前，请仔细阅读所有这些信息。当您准备好回答问题时，请选择“问题”按钮以返回问题。\n\n概述\n\n公司信息\n\nContoso 有限公司是一家跨国零售公司，通过使用 Microsoft Foundry 构建、部署和管理生成式人工智能和基于代理的解决方案。      现有环境\n\n身份环境\n\nContoso 使用 Microsoft Entra ID 进行身份管理、身份验证和授权功能，使代理能够访问组织资源和服务。\n\nContoso 最近成立了一个名为 Agent1Dev 团队的新 AI 工程团队，以优化和维护现有的 AI 解决方案。\n\n该团队与解决方案架构师、DevOps 工程师和安全工程师合作，设计、实施、监控和保护 AI 应用程序。\n\nContoso 还有一个名为 Agent1Test 团队的团队，负责在解决方案部署之前验证 AI 解决方案。\n\n生成环境\n\nContoso 有一个 Microsoft Foundry 部署，其中包含两个项目，分别名为 Project1 和 Project2。\n\n项目1\n\nProject1 包含一个名为 Agent1 的客户支持代理，帮助客户处理产品咨询和故障排除请求。\n\nAgent1 具有以下配置：\n\nAgent1 使用基础模型部署。\n安全评估流水线未启用。\n\n工具调用审批工作流未启用。\n对话记忆约束未配置。\n\nAgent1 通过数字支持渠道与客户互动，并回答有关Contoso 产品的一般问题。\n\nProject1 部署在位于欧盟 (EU) 的 Azure 区域。\n\nAgent1Dev 团队将使用 Project1 来优化和维护 Agent1。\n\n项目2\n\nProject2 包含一个已部署的视频生成模型。Contoso 的市场部门可以访问 Project2，并计划使用该模型开发视频创作解决方案。\n\n该解决方案的开发尚未完成。\n\n数据环境\n\nContoso 在支持 AI 应用的 Azure 资源中存储与产品相关的信息。\n\nAzure 环境包含一个名为 storage1 的 Azure Blob 存储帐户，该帐户存储所有 Contoso 产品的产品详细信息表。\n\n产品说明书包括规格、功能描述和产品支持信息，\nAgent1 可以用来回答客户问题。产品说明书以 PDF 格式存储。\n\n问题陈述\n\nContoso 确定了以下问题：\n\nAgent1 对 Contoso 产品的了解仅限于一般知识。\n最近与 Agent1 的聊天互动进行了情感分析。分析结果尚未 处理。\n\nAgent1 在回答客户问题时 不 使用存储在 storage1 中的产品说明书中的详细产品信息。\nContoso 的财务部门报告称，供应商发票必须手动审核，以确保发票与供应商合同中定义的条款相符。发票包含表格、徽标，以及各种布局，使得文档难以一致地处理。\n\n需求\n\n计划变更\n\nContoso 计划实施以下变更：\n\n为 Project1 实施一个解决方案，通过评估发票的视觉布局和文本内容来分析供应商发票，以便能够根据供应商合同条款验证发票细节。\n更新 Agent1 使用的基础模型部署，并标准化模型版本以确保连续性和一致的响应。\n启用 Agent1 从存储在storage1 中的产品表中检索和使用详细的产品信息。\n为产品表实施一个索引解决方案，以便 Agent1 可以用来回答客户问题。\n完成视频创作解决方案的开发。\n\n技术要求\n\nContoso 确定了以下技术要求：\n\nAgent1 使用的模型部署必须支持可扩展的高吞吐量生成式人工智能工作负载，并能够动态扩展以处理可变的客户支持流量，而无需预留吞吐量容量。\n\n产品表必须通过使用索引流水线进行处理，以支持语义和向量搜索，以便 Agent1 可以检索相关的产品信息。\n使用产品表信息生成的响应必须相关、完整且准确。\nAgent1 必须能够使用产品表回答有关产品详细信息的自然语言问题。\nAgent1 使用的模型版本必须保持一致，以确保稳定的响应。\n模型处理的数据必须保留在欧盟内。\n\n安全和合规要求\n\nContoso 确定了以下安全和合规要求：\n\nAPI 密钥必须 不 用于访问部署在 Foundry 上的模型。\n访问 Azure 资源必须遵循最小权限原则。\nContoso 的开发人员必须使用 Microsoft Entra 身份验证来访问 Microsoft Foundry 资源。\n\n访问 Project1 必须通过名为 SC_Agent1_Dev 的安全组分配给 Agent1Dev 团队的成员。\n\n访问 Project1 必须通过名为 SC_Agent1_Test 的安全组分配给 Agent1Test 团队的成员。\n\nAgent1 绝不能泄露客户信息，即使包含客户数据的文档错误地添加到 storage1 的产品表存储库中。\n产品表可能包含嵌入文本的图像。Agent1 必须受到保护，以防止潜在隐藏在图像中的恶意指令。\n\n业务需求\n\nContoso 确定了以下业务需求：\n\n与 Agent1 互动的用户必须在未来的互动中拥有个性化体验，包括 Agent1 能够保留对话上下文并回忆之前互动中的相关信息。\n\nAgent1 只能回答有关 Contoso 销售的产品的问题。"
  }
 },
 {
  "id": 46,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": true,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You need to ensure that Agent1Dev Team can access Agent1. The solution must meet the security and compliance requirements.\nHow should you complete the Python code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Scenario:\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\nAgent1Dev Team will use Project1 to optimize and maintain Agent1.\nSecurity and Compliance Requirements:\nAPI keys must NOT be used to access Foundry-deployed models.\nAccess to the Azure resources must follow the principle of least privilege.\nThe developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra            authentication.\n\nBox 1: DefaultAzureCredential The correct credential type to use for the team is DefaultAzureCredential.\n\nEnforces Keyless Access: DefaultAzureCredential fulfills the first security requirement by using token-\nbased authentication. This completely eliminates the need for hardcoded API keys.\n\nEnables Least Privilege: It integrates seamlessly with Microsoft Entra ID Role-Based Access Control (RBAC). This allows administrators to assign exact granular roles (such as the Azure AI Developer or Foundry User role).\n\nNative Entra Integration: It automatically manages token acquisition from Microsoft Entra ID during runtime, satisfying the requirement for native Microsoft Entra authentication.\n\nBox 2: get The get method fetches the existing, consumer-facing definition of an agent using its unique name argument (agent_name). In contrast, create_version would attempt to build a brand new snapshotted runtime configuration, and get_version requires passing a specific version identifier rather than a friendly agent name",
   "scenario": "Implement generative AI and agentic solutions\n\nTestlet 1\n\nCase Study\n\nThis is a case study. Case studies are not timed separately from other exam sections. You can use as much exam time as you would like to complete each case study. However, there might be additional case studies or other exam sections. Manage your time to ensure that you can complete all the exam sections in the time provided. Pay attention to the Exam Progress at the top of the screen so you have sufficient time to complete any exam sections that follow this case study.\n\nTo answer the case study questions, you will bed to reference information that is provided in the case.\nCase studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.\n\nA Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.\n\nTo start the case study\n\nTo display the first question in this case study, select the “Next” button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the “Question” button to return to the question.\n\nOverview\n\nCompany Information\n\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-\nbased solutions by using Microsoft Foundry.Existing Environment\n\nIdentity Environment\n\nContoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.\n\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\n\nThe team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications.\n\nContoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.\n\nGenerative Environment\n\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\n\nProject1\n\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\n\nAgent1 has the following configurations:\n\nAgent1 uses a base model deployment.\nA safety evaluation pipeline is NOT enabled.\n\nTool invocation approval workflows are NOT enabled.\nConversation memory constraints are NOT configured.\n\nAgent1 interacts with customers by using digital support channels and answers general questions about Contoso products.\n\nProject1 is deployed to an Azure region located in the European Union (EU).\n\nAgent1Dev Team will use Project1 to optimize and maintain Agent1.\n\nProject2\n\nProject2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.\n\nDevelopment of the solution is incomplete.\n\nData Environment\n\nContoso stores product-related information in Azure resources that support AI applications.\n\nThe Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nThe product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\n\nContoso identifies the following issues:\n\nAgent1 has only general knowledge of the Contoso products.\nA recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet.\nAgent1 does NOT use the detailed product information in the product sheets stored in storage1 when   responding to customer questions.\nThe finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n\nRequirements\n\nPlanned Changes\n\nContoso plans to implement the following changes:\n\nImplement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.\nUpdate the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\nEnable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.\nImplement an indexing solution for the product sheets that Agent1 can use to answer customer questions.\nComplete the development of the video creation solution.\n\nTechnical Requirements\n\nContoso identifies the following technical requirements:\n\nThe model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\n\nThe product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\nResponses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product details.\nThe model version used by Agent1 must remain consistent to ensure stable responses.\nThe data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\n\nContoso identifies the following security and compliance requirements:\n\nAPI keys must NOT be used to access Foundry-deployed models.\nAccess to the Azure resources must follow the principle of least privilege.\nThe developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.\nAccess to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.\nAccess to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test.\nAgent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\nThe product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.\n\nBusiness Requirements\n\nContoso identifies the following business requirements:\n\nUsers that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\nAgent1 must answer questions only about the products sold by Contoso."
  },
  "zh": {
   "stem": "您需要确保 Agent1Dev 团队可以访问 Agent1。解决方案必须满足安全和合规要求。\n您应该如何完成 Python 代码？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "场景：\nContoso 最近成立了一个名为 Agent1Dev 团队的新 AI 工程团队，以优化和维护现有的 AI 解决方案。\nAgent1Dev 团队将使用 Project1 来优化和维护 Agent1。\n安全和合规要求：\nAPI 密钥必须 不 用于访问部署在 Foundry 上的模型。\n访问 Azure 资源必须遵循最小权限原则。\nContoso 的开发人员必须使用 Microsoft Entra 身份验证来访问 Microsoft Foundry 资源。\n\n框 1：DefaultAzureCredential团队应使用的正确凭据类型是 DefaultAzureCredential。\n\n强制无密钥访问：DefaultAzureCredential 通过使用基于令牌的身份验证满足第一个安全要求。这完全消除了对硬编码 API 密钥的需求。\n\n启用最小权限：它与 Microsoft Entra ID 基于角色的访问控制（RBAC）无缝集成。这允许管理员分配精确的细粒度角色（例如 Azure AI 开发者或 Foundry 用户角色）。\n\n本地 Entra 集成：它在运行时自动管理从 Microsoft Entra ID 获取令牌，满足本地 Microsoft Entra身份验证的要求。\n\n框 2：get get 方法使用其唯一名称参数（agent_name）获取现有的面向消费者的代理定义。相比之下，cre ate_version 将尝试构建一个全新的快照运行时配置，而 get_version 需要传递特定的版本标识符，而不是友好的代理名称。",
   "scenario": "实施生成式人工智能和基于代理的解决方案\n\n测试单元 1\n\n案例研究\n\n这是一个案例研究。 案例研究的计时与其他考试部分不分开。您可以使用尽可能多的考试时间来完成每个案例研究。然而，可能会有额外的案例研究或其他考试部分。管理您的时间，以确保您能够在提供的时间内完成所有考试部分。请注意屏幕顶部的考试进度，以确保您有足够的时间完成此案例研究后面的任何考试部分。\n\n要回答案例研究问题，您需要参考案例中提供的信息。\n案例研究及相关问题可能包含展览或其他资源，提供有关案例中描述的场景的更多信息。 单个问题中提供的信息不适用于案例研究中的其他问题。\n\n在此案例研究结束时，将出现复查界面。从复查界面，您可以在进入下一个考试部分之前查看和更改您的答案。离开此案例研究后，您将无法返回。\n\n要开始案例研究\n\n要显示本案例研究中的第一个问题，请选择“下一步”按钮。在问题左侧，菜单提供了链接到信息的内容，例如业务需求、现有环境和问题陈述。在回答任何问题之前，请仔细阅读所有这些信息。当您准备好回答问题时，请选择“问题”按钮以返回问题。\n\n概述\n\n公司信息\n\nContoso 有限公司是一家跨国零售公司，通过使用 Microsoft Foundry 构建、部署和管理生成式人工智能和基于代理的解决方案。      现有环境\n\n身份环境\n\nContoso 使用 Microsoft Entra ID 进行身份管理、身份验证和授权功能，使代理能够访问组织资源和服务。\n\nContoso 最近成立了一个名为 Agent1Dev 团队的新 AI 工程团队，以优化和维护现有的 AI 解决方案。\n\n该团队与解决方案架构师、DevOps 工程师和安全工程师合作，设计、实施、监控和保护 AI 应用程序。\n\nContoso 还有一个名为 Agent1Test 团队的团队，负责在解决方案部署之前验证 AI 解决方案。\n\n生成环境\n\nContoso 有一个 Microsoft Foundry 部署，其中包含两个项目，分别名为 Project1 和 Project2。\n\n项目1\n\nProject1 包含一个名为 Agent1 的客户支持代理，帮助客户处理产品咨询和故障排除请求。\n\nAgent1 具有以下配置：\n\nAgent1 使用基础模型部署。\n安全评估流水线未启用。\n\n工具调用审批工作流未启用。\n对话记忆约束未配置。\n\nAgent1 通过数字支持渠道与客户互动，并回答有关Contoso 产品的一般问题。\n\nProject1 部署在位于欧盟 (EU) 的 Azure 区域。\n\nAgent1Dev 团队将使用 Project1 来优化和维护 Agent1。\n\n项目2\n\nProject2 包含一个已部署的视频生成模型。Contoso 的市场部门可以访问 Project2，并计划使用该模型开发视频创作解决方案。\n\n该解决方案的开发尚未完成。\n\n数据环境\n\nContoso 在支持 AI 应用的 Azure 资源中存储与产品相关的信息。\n\nAzure 环境包含一个名为 storage1 的 Azure Blob 存储帐户，该帐户存储所有 Contoso 产品的产品详细信息表。\n\n产品说明书包括规格、功能描述和产品支持信息，\nAgent1 可以用来回答客户问题。产品说明书以 PDF 格式存储。\n\n问题陈述\n\nContoso 确定了以下问题：\n\nAgent1 对 Contoso 产品的了解仅限于一般知识。\n最近与 Agent1 的聊天互动进行了情感分析。分析结果尚未 处理。\n\nAgent1 在回答客户问题时 不 使用存储在 storage1 中的产品说明书中的详细产品信息。\nContoso 的财务部门报告称，供应商发票必须手动审核，以确保发票与供应商合同中定义的条款相符。发票包含表格、徽标，以及各种布局，使得文档难以一致地处理。\n\n需求\n\n计划变更\n\nContoso 计划实施以下变更：\n\n为 Project1 实施一个解决方案，通过评估发票的视觉布局和文本内容来分析供应商发票，以便能够根据供应商合同条款验证发票细节。\n更新 Agent1 使用的基础模型部署，并标准化模型版本以确保连续性和一致的响应。\n启用 Agent1 从存储在storage1 中的产品表中检索和使用详细的产品信息。\n为产品表实施一个索引解决方案，以便 Agent1 可以用来回答客户问题。\n完成视频创作解决方案的开发。\n\n技术要求\n\nContoso 确定了以下技术要求：\n\nAgent1 使用的模型部署必须支持可扩展的高吞吐量生成式人工智能工作负载，并能够动态扩展以处理可变的客户支持流量，而无需预留吞吐量容量。\n\n产品表必须通过使用索引流水线进行处理，以支持语义和向量搜索，以便 Agent1 可以检索相关的产品信息。\n使用产品表信息生成的响应必须相关、完整且准确。\nAgent1 必须能够使用产品表回答有关产品详细信息的自然语言问题。\nAgent1 使用的模型版本必须保持一致，以确保稳定的响应。\n模型处理的数据必须保留在欧盟内。\n\n安全和合规要求\n\nContoso 确定了以下安全和合规要求：\n\nAPI 密钥必须 不 用于访问部署在 Foundry 上的模型。\n访问 Azure 资源必须遵循最小权限原则。\nContoso 的开发人员必须使用 Microsoft Entra 身份验证来访问 Microsoft Foundry 资源。\n\n访问 Project1 必须通过名为 SC_Agent1_Dev 的安全组分配给 Agent1Dev 团队的成员。\n\n访问 Project1 必须通过名为 SC_Agent1_Test 的安全组分配给 Agent1Test 团队的成员。\n\nAgent1 绝不能泄露客户信息，即使包含客户数据的文档错误地添加到 storage1 的产品表存储库中。\n产品表可能包含嵌入文本的图像。Agent1 必须受到保护，以防止潜在隐藏在图像中的恶意指令。\n\n业务需求\n\nContoso 确定了以下业务需求：\n\n与 Agent1 互动的用户必须在未来的互动中拥有个性化体验，包括 Agent1 能够保留对话上下文并回忆之前互动中的相关信息。\n\nAgent1 只能回答有关 Contoso 销售的产品的问题。"
  },
  "boxes": [
   {
    "prompt_en": "credential=",
    "prompt_zh": "credential=",
    "options_en": [
     "AzureKeyCredential()",
     "DefaultAzureCredential()",
     "None"
    ],
    "options_zh": [
     "AzureKeyCredential()",
     "DefaultAzureCredential()",
     "None"
    ],
    "correct_en": "DefaultAzureCredential()",
    "correct_zh": "DefaultAzureCredential()"
   },
   {
    "prompt_en": "project_client.agents.",
    "prompt_zh": "project_client.agents.",
    "options_en": [
     "create_version",
     "get",
     "get_version"
    ],
    "options_zh": [
     "create_version",
     "get",
     "get_version"
    ],
    "correct_en": "get",
    "correct_zh": "get"
   }
  ],
  "code": {
   "lang": "python",
   "text": "from azure.identity import DefaultAzureCredential\nfrom azure.ai.projects import AIProjectClient\nfrom azure.core.credentials import AzureKeyCredential\n\nmyEndpoint = \"https://contoso.services.ai.azure.com/api/projects/project1\"\n\nproject_client = AIProjectClient(\n    endpoint=myEndpoint,\n    credential=[[1]],\n)\n\nmyAgent = \"Agent1\"\nagent = project_client.agents.[[2]](agent_name=myAgent)\n\nprint(f\"Retrieved agent: {agent.name}\")"
  }
 },
 {
  "id": 47,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You need to recommend a solution to assess the responses generated by Agent1 when the agent uses the product information stored in storage1. The solution must meet the technical requirements.\nWhat should you include in the recommendation?",
   "options": {
    "A": "a Retrieval Augmented Generation (RAG) evaluator",
    "B": "a custom guardrail",
    "C": "model fine-tuning",
    "D": "a groundedness evaluator"
   },
   "explanation": "The best way for the Foundry Agent to access the product information stored in the Azure Blob Storage account is by connecting an Azure AI Search index as an indexed knowledge source via the Agent's file search tool.\n\nThis implementation creates a robust Retrieval-Augmented Generation (RAG) framework, ensuring the agent retrieves grounded, high-relevance product information.\n\nScenario:\nTechnical Requirements;\n*-> Responses generated by using the product sheet information must be relevant, complete, and accurate.\n\nData environment: The Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nPlanned changes: Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.Reference:\nhttps://learn.microsoft.com/en-nz/answers/questions/5868427/uploading-data-in-microsoft-foundry-agent",
   "scenario": "Implement generative AI and agentic solutions\n\nTestlet 1\n\nCase Study\n\nThis is a case study. Case studies are not timed separately from other exam sections. You can use as much exam time as you would like to complete each case study. However, there might be additional case studies or other exam sections. Manage your time to ensure that you can complete all the exam sections in the time provided. Pay attention to the Exam Progress at the top of the screen so you have sufficient time to complete any exam sections that follow this case study.\n\nTo answer the case study questions, you will bed to reference information that is provided in the case.\nCase studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.\n\nA Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.\n\nTo start the case study\n\nTo display the first question in this case study, select the “Next” button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the “Question” button to return to the question.\n\nOverview\n\nCompany Information\n\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-\nbased solutions by using Microsoft Foundry.Existing Environment\n\nIdentity Environment\n\nContoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.\n\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\n\nThe team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications.\n\nContoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.\n\nGenerative Environment\n\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\n\nProject1\n\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\n\nAgent1 has the following configurations:\n\nAgent1 uses a base model deployment.\nA safety evaluation pipeline is NOT enabled.\n\nTool invocation approval workflows are NOT enabled.\nConversation memory constraints are NOT configured.\n\nAgent1 interacts with customers by using digital support channels and answers general questions about Contoso products.\n\nProject1 is deployed to an Azure region located in the European Union (EU).\n\nAgent1Dev Team will use Project1 to optimize and maintain Agent1.\n\nProject2\n\nProject2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.\n\nDevelopment of the solution is incomplete.\n\nData Environment\n\nContoso stores product-related information in Azure resources that support AI applications.\n\nThe Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nThe product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\n\nContoso identifies the following issues:\n\nAgent1 has only general knowledge of the Contoso products.\nA recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet.\nAgent1 does NOT use the detailed product information in the product sheets stored in storage1 when   responding to customer questions.\nThe finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n\nRequirements\n\nPlanned Changes\n\nContoso plans to implement the following changes:\n\nImplement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.\nUpdate the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\nEnable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.\nImplement an indexing solution for the product sheets that Agent1 can use to answer customer questions.\nComplete the development of the video creation solution.\n\nTechnical Requirements\n\nContoso identifies the following technical requirements:\n\nThe model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\n\nThe product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\nResponses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product details.\nThe model version used by Agent1 must remain consistent to ensure stable responses.\nThe data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\n\nContoso identifies the following security and compliance requirements:\n\nAPI keys must NOT be used to access Foundry-deployed models.\nAccess to the Azure resources must follow the principle of least privilege.\nThe developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.\nAccess to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.\nAccess to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test.\nAgent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\nThe product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.\n\nBusiness Requirements\n\nContoso identifies the following business requirements:\n\nUsers that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\nAgent1 must answer questions only about the products sold by Contoso."
  },
  "zh": {
   "stem": "您需要推荐一个解决方案，以评估 Agent1 在使用存储在 storage1 中的产品信息时生成的响应。该解决方案必须满足技术要求。\n您应该在推荐中包含什么？",
   "options": {
    "A": "一个检索增强生成 (RAG) 评估器",
    "B": "一个自定义保护措施",
    "C": "模型微调",
    "D": "一个基础性评估器"
   },
   "explanation": "Foundry Agent 访问存储在 Azure Blob 存储账户中的产品信息的最佳方式是通过将 Azure AI 搜索索引作为索引知识源连接到代理的文件搜索工具。\n\n此实现创建了一个强大的检索增强生成 (RAG) 框架，确保代理检索到基础、相关性高的产品信息。\n\n场景：\n技术要求；\n*-> 使用产品信息表生成的响应必须相关、完整且准确。\n\n数据环境：Azure 环境包含一个名为 storage1 的 Azure Blob 存储账户，该账户存储所有 Contoso 产品的产品详细信息表。\n\n计划变更：启用 Agent1 从存储在 storage1 中的产品表中检索和使用详细的产品信息。      参考：\nhttps://learn.microsoft.com/en-nz/answers/questions/5868427/uploading-data-in-microsoft-foundry-agent",
   "scenario": "实施生成式人工智能和基于代理的解决方案\n\n测试单元 1\n\n案例研究\n\n这是一个案例研究。 案例研究的计时与其他考试部分不分开。您可以使用尽可能多的考试时间来完成每个案例研究。然而，可能会有额外的案例研究或其他考试部分。管理您的时间，以确保您能够在提供的时间内完成所有考试部分。请注意屏幕顶部的考试进度，以确保您有足够的时间完成此案例研究后面的任何考试部分。\n\n要回答案例研究问题，您需要参考案例中提供的信息。\n案例研究及相关问题可能包含展览或其他资源，提供有关案例中描述的场景的更多信息。 单个问题中提供的信息不适用于案例研究中的其他问题。\n\n在此案例研究结束时，将出现复查界面。从复查界面，您可以在进入下一个考试部分之前查看和更改您的答案。离开此案例研究后，您将无法返回。\n\n要开始案例研究\n\n要显示本案例研究中的第一个问题，请选择“下一步”按钮。在问题左侧，菜单提供了链接到信息的内容，例如业务需求、现有环境和问题陈述。在回答任何问题之前，请仔细阅读所有这些信息。当您准备好回答问题时，请选择“问题”按钮以返回问题。\n\n概述\n\n公司信息\n\nContoso 有限公司是一家跨国零售公司，通过使用 Microsoft Foundry 构建、部署和管理生成式人工智能和基于代理的解决方案。      现有环境\n\n身份环境\n\nContoso 使用 Microsoft Entra ID 进行身份管理、身份验证和授权功能，使代理能够访问组织资源和服务。\n\nContoso 最近成立了一个名为 Agent1Dev 团队的新 AI 工程团队，以优化和维护现有的 AI 解决方案。\n\n该团队与解决方案架构师、DevOps 工程师和安全工程师合作，设计、实施、监控和保护 AI 应用程序。\n\nContoso 还有一个名为 Agent1Test 团队的团队，负责在解决方案部署之前验证 AI 解决方案。\n\n生成环境\n\nContoso 有一个 Microsoft Foundry 部署，其中包含两个项目，分别名为 Project1 和 Project2。\n\n项目1\n\nProject1 包含一个名为 Agent1 的客户支持代理，帮助客户处理产品咨询和故障排除请求。\n\nAgent1 具有以下配置：\n\nAgent1 使用基础模型部署。\n安全评估流水线未启用。\n\n工具调用审批工作流未启用。\n对话记忆约束未配置。\n\nAgent1 通过数字支持渠道与客户互动，并回答有关Contoso 产品的一般问题。\n\nProject1 部署在位于欧盟 (EU) 的 Azure 区域。\n\nAgent1Dev 团队将使用 Project1 来优化和维护 Agent1。\n\n项目2\n\nProject2 包含一个已部署的视频生成模型。Contoso 的市场部门可以访问 Project2，并计划使用该模型开发视频创作解决方案。\n\n该解决方案的开发尚未完成。\n\n数据环境\n\nContoso 在支持 AI 应用的 Azure 资源中存储与产品相关的信息。\n\nAzure 环境包含一个名为 storage1 的 Azure Blob 存储帐户，该帐户存储所有 Contoso 产品的产品详细信息表。\n\n产品说明书包括规格、功能描述和产品支持信息，\nAgent1 可以用来回答客户问题。产品说明书以 PDF 格式存储。\n\n问题陈述\n\nContoso 确定了以下问题：\n\nAgent1 对 Contoso 产品的了解仅限于一般知识。\n最近与 Agent1 的聊天互动进行了情感分析。分析结果尚未 处理。\n\nAgent1 在回答客户问题时 不 使用存储在 storage1 中的产品说明书中的详细产品信息。\nContoso 的财务部门报告称，供应商发票必须手动审核，以确保发票与供应商合同中定义的条款相符。发票包含表格、徽标，以及各种布局，使得文档难以一致地处理。\n\n需求\n\n计划变更\n\nContoso 计划实施以下变更：\n\n为 Project1 实施一个解决方案，通过评估发票的视觉布局和文本内容来分析供应商发票，以便能够根据供应商合同条款验证发票细节。\n更新 Agent1 使用的基础模型部署，并标准化模型版本以确保连续性和一致的响应。\n启用 Agent1 从存储在storage1 中的产品表中检索和使用详细的产品信息。\n为产品表实施一个索引解决方案，以便 Agent1 可以用来回答客户问题。\n完成视频创作解决方案的开发。\n\n技术要求\n\nContoso 确定了以下技术要求：\n\nAgent1 使用的模型部署必须支持可扩展的高吞吐量生成式人工智能工作负载，并能够动态扩展以处理可变的客户支持流量，而无需预留吞吐量容量。\n\n产品表必须通过使用索引流水线进行处理，以支持语义和向量搜索，以便 Agent1 可以检索相关的产品信息。\n使用产品表信息生成的响应必须相关、完整且准确。\nAgent1 必须能够使用产品表回答有关产品详细信息的自然语言问题。\nAgent1 使用的模型版本必须保持一致，以确保稳定的响应。\n模型处理的数据必须保留在欧盟内。\n\n安全和合规要求\n\nContoso 确定了以下安全和合规要求：\n\nAPI 密钥必须 不 用于访问部署在 Foundry 上的模型。\n访问 Azure 资源必须遵循最小权限原则。\nContoso 的开发人员必须使用 Microsoft Entra 身份验证来访问 Microsoft Foundry 资源。\n\n访问 Project1 必须通过名为 SC_Agent1_Dev 的安全组分配给 Agent1Dev 团队的成员。\n\n访问 Project1 必须通过名为 SC_Agent1_Test 的安全组分配给 Agent1Test 团队的成员。\n\nAgent1 绝不能泄露客户信息，即使包含客户数据的文档错误地添加到 storage1 的产品表存储库中。\n产品表可能包含嵌入文本的图像。Agent1 必须受到保护，以防止潜在隐藏在图像中的恶意指令。\n\n业务需求\n\nContoso 确定了以下业务需求：\n\n与 Agent1 互动的用户必须在未来的互动中拥有个性化体验，包括 Agent1 能够保留对话上下文并回忆之前互动中的相关信息。\n\nAgent1 只能回答有关 Contoso 销售的产品的问题。"
  }
 },
 {
  "id": 48,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You need to configure Agent1 to answer customer questions about only the Contoso products. The solution must meet the business requirements.\nWhat should you do?",
   "options": {
    "A": "Modify the system message instructions.",
    "B": "Add few-shot examples.",
    "C": "Apply top-p sampling.",
    "D": "Increase the value of the temperature parameter."
   },
   "explanation": "Scenario: Contoso identifies the following business requirements:\nAgent1 must answer questions only about the products sold by Contoso.\n\n--\nSystem Message Instructions: This dictates the agent's persona, boundaries, and rules. By explicitly configuring the system prompt (e.g., instructing the agent: \"You are a product assistant. Only answer questions using the provided product detail sheets. If you do not know the answer based on the provided documents, state that you do not know\"), you prevent the model from answering with its general pre-\n\ntrained knowledge.\n\nIncorrect:\n[Not B] Few-shot examples: While useful for enforcing output formats or response tone, this does not explicitly stop a model from retrieving outside knowledge on unfamiliar topics.\n\n[Not C, Not D] Temperature & top-p: These parameters control the creativity and randomness of the model's responses.\nDecreasing them makes the model's outputs more deterministic and factual, but they do not actively restrict the model from generating information outside of the intended domain.",
   "scenario": "Implement generative AI and agentic solutions\n\nTestlet 1\n\nCase Study\n\nThis is a case study. Case studies are not timed separately from other exam sections. You can use as much exam time as you would like to complete each case study. However, there might be additional case studies or other exam sections. Manage your time to ensure that you can complete all the exam sections in the time provided. Pay attention to the Exam Progress at the top of the screen so you have sufficient time to complete any exam sections that follow this case study.\n\nTo answer the case study questions, you will bed to reference information that is provided in the case.\nCase studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.\n\nA Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.\n\nTo start the case study\n\nTo display the first question in this case study, select the “Next” button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the “Question” button to return to the question.\n\nOverview\n\nCompany Information\n\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-\nbased solutions by using Microsoft Foundry.Existing Environment\n\nIdentity Environment\n\nContoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.\n\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\n\nThe team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications.\n\nContoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.\n\nGenerative Environment\n\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\n\nProject1\n\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\n\nAgent1 has the following configurations:\n\nAgent1 uses a base model deployment.\nA safety evaluation pipeline is NOT enabled.\n\nTool invocation approval workflows are NOT enabled.\nConversation memory constraints are NOT configured.\n\nAgent1 interacts with customers by using digital support channels and answers general questions about Contoso products.\n\nProject1 is deployed to an Azure region located in the European Union (EU).\n\nAgent1Dev Team will use Project1 to optimize and maintain Agent1.\n\nProject2\n\nProject2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.\n\nDevelopment of the solution is incomplete.\n\nData Environment\n\nContoso stores product-related information in Azure resources that support AI applications.\n\nThe Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nThe product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\n\nContoso identifies the following issues:\n\nAgent1 has only general knowledge of the Contoso products.\nA recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet.\nAgent1 does NOT use the detailed product information in the product sheets stored in storage1 when   responding to customer questions.\nThe finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n\nRequirements\n\nPlanned Changes\n\nContoso plans to implement the following changes:\n\nImplement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.\nUpdate the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\nEnable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.\nImplement an indexing solution for the product sheets that Agent1 can use to answer customer questions.\nComplete the development of the video creation solution.\n\nTechnical Requirements\n\nContoso identifies the following technical requirements:\n\nThe model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\n\nThe product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\nResponses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product details.\nThe model version used by Agent1 must remain consistent to ensure stable responses.\nThe data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\n\nContoso identifies the following security and compliance requirements:\n\nAPI keys must NOT be used to access Foundry-deployed models.\nAccess to the Azure resources must follow the principle of least privilege.\nThe developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.\nAccess to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.\nAccess to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test.\nAgent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\nThe product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.\n\nBusiness Requirements\n\nContoso identifies the following business requirements:\n\nUsers that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\nAgent1 must answer questions only about the products sold by Contoso."
  },
  "zh": {
   "stem": "您需要配置 Agent1 仅回答关于 Contoso 产品的客户问题。解决方案必须满足业务需求。\n您应该怎么做？",
   "options": {
    "A": "修改系统消息指令。",
    "B": "添加少量示例。",
    "C": "应用 top-p 采样。",
    "D": "增加 temperature 参数的值。"
   },
   "explanation": "场景：Contoso 确定以下业务需求：\nAgent1 只能回答有关 Contoso 销售的产品的问题。\n\n--\n系统消息指令：这决定了代理的角色、边界和规则。通过明确配置系统提示（例如，指示代理：“您是产品助手。仅使用提供的产品详细信息表回答问题。如果您根据提供的文档不知道答案，请说明您不知道”），您可以防止模型使用其一般预训练知识进行回答。\n\n训练有素的知识。\n\n不正确：\n[不是 B]少量示例：虽然对强制输出格式或响应语气有用，但这并不明确阻止模型在不熟悉的主题上检索外部知识。\n\n[不是 C，不是 D]温度和 top-p：这些参数控制模型响应的创造力和随机性。\n减少它们使模型的输出更加确定和真实，但它们并不主动限制模型生成超出预期领域的信息。",
   "scenario": "实施生成式人工智能和基于代理的解决方案\n\n测试单元 1\n\n案例研究\n\n这是一个案例研究。 案例研究的计时与其他考试部分不分开。您可以使用尽可能多的考试时间来完成每个案例研究。然而，可能会有额外的案例研究或其他考试部分。管理您的时间，以确保您能够在提供的时间内完成所有考试部分。请注意屏幕顶部的考试进度，以确保您有足够的时间完成此案例研究后面的任何考试部分。\n\n要回答案例研究问题，您需要参考案例中提供的信息。\n案例研究及相关问题可能包含展览或其他资源，提供有关案例中描述的场景的更多信息。 单个问题中提供的信息不适用于案例研究中的其他问题。\n\n在此案例研究结束时，将出现复查界面。从复查界面，您可以在进入下一个考试部分之前查看和更改您的答案。离开此案例研究后，您将无法返回。\n\n要开始案例研究\n\n要显示本案例研究中的第一个问题，请选择“下一步”按钮。在问题左侧，菜单提供了链接到信息的内容，例如业务需求、现有环境和问题陈述。在回答任何问题之前，请仔细阅读所有这些信息。当您准备好回答问题时，请选择“问题”按钮以返回问题。\n\n概述\n\n公司信息\n\nContoso 有限公司是一家跨国零售公司，通过使用 Microsoft Foundry 构建、部署和管理生成式人工智能和基于代理的解决方案。      现有环境\n\n身份环境\n\nContoso 使用 Microsoft Entra ID 进行身份管理、身份验证和授权功能，使代理能够访问组织资源和服务。\n\nContoso 最近成立了一个名为 Agent1Dev 团队的新 AI 工程团队，以优化和维护现有的 AI 解决方案。\n\n该团队与解决方案架构师、DevOps 工程师和安全工程师合作，设计、实施、监控和保护 AI 应用程序。\n\nContoso 还有一个名为 Agent1Test 团队的团队，负责在解决方案部署之前验证 AI 解决方案。\n\n生成环境\n\nContoso 有一个 Microsoft Foundry 部署，其中包含两个项目，分别名为 Project1 和 Project2。\n\n项目1\n\nProject1 包含一个名为 Agent1 的客户支持代理，帮助客户处理产品咨询和故障排除请求。\n\nAgent1 具有以下配置：\n\nAgent1 使用基础模型部署。\n安全评估流水线未启用。\n\n工具调用审批工作流未启用。\n对话记忆约束未配置。\n\nAgent1 通过数字支持渠道与客户互动，并回答有关Contoso 产品的一般问题。\n\nProject1 部署在位于欧盟 (EU) 的 Azure 区域。\n\nAgent1Dev 团队将使用 Project1 来优化和维护 Agent1。\n\n项目2\n\nProject2 包含一个已部署的视频生成模型。Contoso 的市场部门可以访问 Project2，并计划使用该模型开发视频创作解决方案。\n\n该解决方案的开发尚未完成。\n\n数据环境\n\nContoso 在支持 AI 应用的 Azure 资源中存储与产品相关的信息。\n\nAzure 环境包含一个名为 storage1 的 Azure Blob 存储帐户，该帐户存储所有 Contoso 产品的产品详细信息表。\n\n产品说明书包括规格、功能描述和产品支持信息，\nAgent1 可以用来回答客户问题。产品说明书以 PDF 格式存储。\n\n问题陈述\n\nContoso 确定了以下问题：\n\nAgent1 对 Contoso 产品的了解仅限于一般知识。\n最近与 Agent1 的聊天互动进行了情感分析。分析结果尚未 处理。\n\nAgent1 在回答客户问题时 不 使用存储在 storage1 中的产品说明书中的详细产品信息。\nContoso 的财务部门报告称，供应商发票必须手动审核，以确保发票与供应商合同中定义的条款相符。发票包含表格、徽标，以及各种布局，使得文档难以一致地处理。\n\n需求\n\n计划变更\n\nContoso 计划实施以下变更：\n\n为 Project1 实施一个解决方案，通过评估发票的视觉布局和文本内容来分析供应商发票，以便能够根据供应商合同条款验证发票细节。\n更新 Agent1 使用的基础模型部署，并标准化模型版本以确保连续性和一致的响应。\n启用 Agent1 从存储在storage1 中的产品表中检索和使用详细的产品信息。\n为产品表实施一个索引解决方案，以便 Agent1 可以用来回答客户问题。\n完成视频创作解决方案的开发。\n\n技术要求\n\nContoso 确定了以下技术要求：\n\nAgent1 使用的模型部署必须支持可扩展的高吞吐量生成式人工智能工作负载，并能够动态扩展以处理可变的客户支持流量，而无需预留吞吐量容量。\n\n产品表必须通过使用索引流水线进行处理，以支持语义和向量搜索，以便 Agent1 可以检索相关的产品信息。\n使用产品表信息生成的响应必须相关、完整且准确。\nAgent1 必须能够使用产品表回答有关产品详细信息的自然语言问题。\nAgent1 使用的模型版本必须保持一致，以确保稳定的响应。\n模型处理的数据必须保留在欧盟内。\n\n安全和合规要求\n\nContoso 确定了以下安全和合规要求：\n\nAPI 密钥必须 不 用于访问部署在 Foundry 上的模型。\n访问 Azure 资源必须遵循最小权限原则。\nContoso 的开发人员必须使用 Microsoft Entra 身份验证来访问 Microsoft Foundry 资源。\n\n访问 Project1 必须通过名为 SC_Agent1_Dev 的安全组分配给 Agent1Dev 团队的成员。\n\n访问 Project1 必须通过名为 SC_Agent1_Test 的安全组分配给 Agent1Test 团队的成员。\n\nAgent1 绝不能泄露客户信息，即使包含客户数据的文档错误地添加到 storage1 的产品表存储库中。\n产品表可能包含嵌入文本的图像。Agent1 必须受到保护，以防止潜在隐藏在图像中的恶意指令。\n\n业务需求\n\nContoso 确定了以下业务需求：\n\n与 Agent1 互动的用户必须在未来的互动中拥有个性化体验，包括 Agent1 能够保留对话上下文并回忆之前互动中的相关信息。\n\nAgent1 只能回答有关 Contoso 销售的产品的问题。"
  }
 },
 {
  "id": 49,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project.\nYou plan to build a customer support solution that contains an agent. The solution must meet the following requirements:\nProvide accurate, context-aware responses grounded in internal product documentation stored in Azure AI Search.\nRequire deep, multi-step reasoning across long contexts.\nGenerate detailed natural language responses.\nWhich type of model should you use to power the agent?",
   "options": {
    "A": "a multimodal model",
    "B": "a small language model (SLM)",
    "C": "a key phrase extraction model",
    "D": "a large language model (LLM)"
   },
   "explanation": "For a support agent requiring deep multi-step reasoning, long context processing, and strict grounding in internal documents, the GPT-5.5 (or GPT-5.5-Pro) model from the Azure AI Foundry model catalog is the best choice.\n\nHere is how GPT-5.5 directly addresses the requirements:\nDeep Multi-Step Reasoning: These frontier models use deliberate reasoning and iterative planning before generating a response. This allows the agent to decompose complex support queries, analyzealternatives, and prevent hallucinationswithout requiring heavy custom prompt engineering.\n\nGrounded, Accurate Responses:\nRather than doing this alone, pair the model with Foundry IQ connected to your Azure AI Search indices.\nFoundry IQ's agentic retrieval engine will pull exactly the right context, allowing GPT-5.5 to synthesize the answer and cite the original documentation.\n\nLong Context Handling:\nGPT-5.5 models support massive context windows, allowing them to ingest extensive previous conversational turns alongside detailed internal documentation in a single pass without losing track of important rules.\n\nNote:\nGPT-5.5 is a large language model (LLM).While it is a flagship LLM built on OpenAI's advanced transformer architecture, it also features natively omnimodal capabilities that allow it to process both text and images seamlessly within a single unified framework. However, when choosing between the specific categories provided, its primary core classification is a Large Language Model (LLM).\nKey Details About GPT-5.5 Core Architecture: Large Language Model (LLM) built by OpenAI.\n\nPrimary Focus: Highly optimized for complex reasoning, multi-step problem solving, coding, and autonomous agentic workflows.\n\nInput/Output Capabilities: Supports text and image inputs with text-based outputs."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目。\n您计划构建一个包含代理的客户支持解决方案。该解决方案必须满足以下要求：\n提供基于存储在 Azure AI Search 中的内部产品文档的准确、上下文感知的响应。\n需要在长上下文中进行深度、多步骤推理。\n生成详细的自然语言响应。\n您应该使用哪种类型的模型来驱动代理？",
   "options": {
    "A": "多模态模型",
    "B": "小型语言模型 (SLM)",
    "C": "关键短语提取模型",
    "D": "大型语言模型 (LLM)"
   },
   "explanation": "对于需要深度多步骤推理、长上下文处理和严格基于内部文档的支持代理，Azure AI Foundry 模型目录中的 GPT-5.5（或 GPT-5.5-Pro）模型是最佳选择。\n\n以下是 GPT-5.5 如何直接满足要求：\n深度多步骤推理：这些前沿模型在生成响应之前使用深思熟虑的推理和迭代规划。这使得代理能够分解复杂的支持查询，分析替代方案，并防止幻觉，而无需大量定制提示工程。\n\n扎根的、准确的响应：\n与其单独完成此任务，不如将模型与连接到您的 Azure AI 搜索索引的 Foundry IQ 配对。\nFoundry IQ 的代理检索引擎将提取确切的上下文，使 GPT-5.5 能够合成答案并引用原始文档。\n\n长上下文处理：\nGPT-5.5 模型支持大规模上下文窗口，允许它们在单次处理过程中摄取大量先前的对话轮次以及详细的内部文档，而不会丢失重要规则。\n\n注意：\nGPT-5.5 是一个大型语言模型（LLM）。虽然它是基于 OpenAI 的先进变换器架构构建的旗舰 LL M，但它还具有原生的全模态能力，允许它在单一统一框架内无缝处理文本和图像。然而，在选择提供的特定类别时，它的主要核心分类是大型语言模型（LLM）。\n\n关于 GPT-5.5 的关键细节核心架构：由 OpenAI 构建的大型语言模型（LLM）。\n\n主要关注：高度优化以进行复杂推理、多步骤问题解决、编码和自主代理工作流。\n\n输入/输出能力：支持文本和图像输入，并提供基于文本的输出。"
  }
 },
 {
  "id": 50,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a deployed ticket-triage agent.\nYou discover that sometimes the agent responds without calling any tools, even when a tool is required.\nYou need to ensure that the agent calls a tool during execution.\nHow should you complete the Python code? To answer, drag the appropriate values to the correct targets.\nEach value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: \"tool_choice\" To fix this issue and ensure that the agent always calls a tool during execution, you need to configure the tool_choice parameter in the run_payload.\n\nBox 2: \"required\" In Microsoft Foundry's Agent Service (similar to the underlying Azure OpenAI / Assistants API architecture), setting \"tool_choice\": \"required\" forces the model to select and execute one or more tools before returning its response."
  },
  "zh": {
   "stem": "您有一个包含已部署的票据分类代理的 Microsoft Foundry 项目。\n您发现有时代理在需要工具时也会无工具响应。\n您需要确保代理在执行过程中调用工具。\n您应该如何完成 Python 代码？要回答，请将适当的值拖到正确的目标。\n每个值可以使用一次、使用多次或根本不使用。您可能需要拖动面板之间的分隔条或滚动以查看内容。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1: \"tool_choice\"要解决此问题并确保代理在执行过程中始终调用工具，您需要在 run_payload 中配置tool_choice 参数。\n\n框 2: \"required\"在 Microsoft Foundry 的代理服务中（类似于底层 Azure OpenAI / Assistants API架构），设置 \"tool_choice\": \"required\" 强制模型在返回响应之前选择并执行一个或多个工具。"
  },
  "sources_en": [
   "\"auto\"",
   "\"required\"",
   "\"response_format\"",
   "\"tool_choice\"",
   "\"tools\"",
   "\"type\""
  ],
  "sources_zh": [
   "\"auto\"",
   "\"required\"",
   "\"response_format\"",
   "\"tool_choice\"",
   "\"tools\"",
   "\"type\""
  ],
  "targets": [
   {
    "label_en": "Box 1",
    "label_zh": "框 1",
    "correct_en": "\"tool_choice\"",
    "correct_zh": "\"tool_choice\""
   },
   {
    "label_en": "Box 2",
    "label_zh": "框 2",
    "correct_en": "\"required\"",
    "correct_zh": "\"required\""
   }
  ],
  "code": {
   "lang": "python",
   "text": "run_payload = {\n    \"assistant_id\": agent_id,\n    [[1]]: [[2]],\n    \"metadata\": {\n        \"scenario\": \"ticket-triage\"\n    }\n}"
  }
 },
 {
  "id": 51,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You are building a web app named App1 that generates responses by using a model deployed to a Microsoft Foundry project named Project1.\nBefore sending the prompts to the model, App1 must retrieve documents by using Azure AI Search.\nYou need to integrate Project1 and App1. The solution must meet the following requirements:\nMultiple client applications must use the same search configuration.\nA security policy must prevent key-based authentication.\nAdministrative effort must be minimized.\nWhat should you do?",
   "options": {
    "A": "Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per application.",
    "B": "Configure an Azure AI Search connection in Project1 and reference the connection in each application.",
    "C": "Call Azure AI Search directly from each application by using Microsoft Entra authentication.",
    "D": "Enable a managed identity for each application and call Azure AI Search directly."
   },
   "explanation": "To meet your security and architecture requirements, you must add the Azure AI Search instance as a Connection within your Azure AI Foundry project and configure Managed Identities for role-based access control (RBAC).\n\nTo securely unify your search configuration without API keys, add the Azure AI Search instance as ashared Connection in your Azure AI Foundryproject, disable key authentication on the search service, and authorize your applications using Azure RBAC and Managed Identities.\n\nNote:\n*-> 1. Create a Project Connection Connect Azure AI Search directly inside the Azure AI Foundry hub or project.\n\n*-> Share the same search service configuration across all connected client applications automatically.\n\nCentralize your search endpoint details to reduce administrative overhead.\n\n2. Disable Key Authentication\n\n3. Enable Managed Identities\n\n4. Update the Web App Code"
  },
  "zh": {
   "stem": "您正在构建一个名为 App1 的网络应用，该应用通过使用部署到 Microsoft Foundry 项目 Project1的模型生成响应。\n在将提示发送到模型之前，App1 必须通过 Azure AI Search 检索文档。\n您需要将 Project1 和 App1 集成。解决方案必须满足以下要求：\n多个客户端应用程序必须使用相同的搜索配置。\n安全策略必须防止基于密钥的身份验证。\n必须最小化管理工作量。\n您应该怎么做？",
   "options": {
    "A": "在 Foundry 中创建自定义 HTTP 连接，并根据每个应用程序手动配置 Azure AI Search 端点。",
    "B": "在 Project1 中配置 Azure AI Search 连接，并在每个应用程序中引用该连接。",
    "C": "通过使用 Microsoft Entra 身份验证直接从每个应用程序调用 Azure AI Search。",
    "D": "为每个应用程序启用托管身份，并直接调用 Azure AI Search。"
   },
   "explanation": "为了满足您的安全和架构要求，您必须将 Azure AI Search 实例添加为您 Azure AI Foundry 项目中的连接，并为基于角色的访问控制 (RBAC) 配置托管身份。\n\n为了安全地统一您的搜索配置而不使用 API 密钥，请将 Azure AI Search 实例添加为您 Azure AI Foun            dry 项目中的共享连接，禁用搜索服务上的密钥身份验证，并使用Azure RBAC 和托管身份授权您的应用程序。\n\n注意：\n*-> 1. 创建项目连接直接在 Azure AI Foundry 中或项目内连接 Azure AI 搜索。\n\n*-> 自动在所有连接的客户端应用程序中共享相同的搜索服务配置。\n\n集中管理您的搜索端点详细信息，以减少管理开销。\n\n2. 禁用密钥身份验证\n\n3. 启用托管身份\n\n4. 更新 Web 应用代码"
  }
 },
 {
  "id": 52,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent used by the financial analysts at your company.\nYou need to optimize the agent workflow by providing additional data access and processing capabilities.\nThe solution must meet the following requirements:\nEnsure that the agent can perform calculations during conversations.\nEnsure that the agent can access up-to-date information from public websites.\nEnsure that the agent can retrieve information from documents uploaded directly to the agent.\nWhat should you use for each requirement? To answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Grounding with Bing Search Ensure that the agent can access up-to-date information from public websites.\n\nYou should use Grounding with Bing Search to optimize your Microsoft Foundry agent workflow.\n\nLarge Language Models (LLMs) suffer from fixed knowledge cutoffs and cannot natively access real-time information. Integrating Grounding with Bing Search enables your agent to autonomously fetch up-to-date, public web data, synthesize facts, and respond with exact inline URL citations.\n\nBox 2: Code interpreter Ensure that the agent can perform calculations during conversations.\n\nTo fulfill this requirement in a Microsoft Foundry Agent Service project, you should use Agent Tools (specifically Function Calling or a Code Interpreter tool).\n\nIn the Microsoft Agent Framework and Foundry Agent Service, tools are the native mechanism used to extend an agent's reasoning capabilities beyond text generation, allowing them to access real-time data and perform exact mathematical computations during a conversation.\n\nBox 3: File Search Ensure that the agent can retrieve information from documents uploaded directly to the agent.\n\nTo give your Microsoft AI Foundry agent the capability to directly reference and retrieve information from uploaded documents, you should enable and configure the File Search tool (via the Foundry Agent Service). This tool functions alongside the agent's system prompts to perform Retrieval-Augmented Generation (RAG) directly on your data."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，其中包含一个供您公司财务分析师使用的代理。\n您需要通过提供额外的数据访问和处理能力来优化代理工作流。\n该解决方案必须满足以下要求：\n确保代理在对话中能够进行计算。\n确保代理能够访问来自公共网站的最新信息。\n确保代理能够从直接上传到代理的文档中检索信息。\n您应该为每个需求使用什么？要回答，请将适当的工具拖到正确的需求上。每个工具可以使用一次、使用多次或根本不使用。您可能需要拖动面板之间的分隔条或滚动以查看内容。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：使用 Bing 搜索进行基础支持确保代理能够访问来自公共网站的最新信息。\n\n您应该使用使用 Bing 搜索进行基础支持来优化您的 Microsoft Foundry 代理工作流程。\n\n大型语言模型（LLMs）受到固定知识截止日期的限制，无法本地访问实时信息。将使用 Bing 搜索进行基础支持集成可以使您的代理自主获取最新的、公共的网络数据，综合事实，并以准确的内联 URL 引用进行响应。\n\n框 2：代码解释器确保代理在对话中能够进行计算。\n\n要在 Microsoft Foundry Agent Service 项目中满足此要求，您应使用代理工具（特别是函数调用或代码解释器工具）。\n\n在 Microsoft Agent Framework 和 Foundry Agent Service 中，工具是用于扩展代理推理能力的本机机制，超越文本生成，使其能够在对话中访问实时数据并执行精确的数学计算。\n\n框 3：文件搜索确保代理能够从直接上传到代理的文档中检索信息。\n\n为了使您的 Microsoft AI Foundry 代理能够直接引用和检索上传文档中的信息，您应启用并配置文件搜索工具（通过 Foundry AgentService）。该工具与代理的系统提示一起工作，直接在您的数据上执行检索增强生成（RAG）。"
  },
  "sources_en": [
   "Code interpreter",
   "Computer use",
   "File search",
   "Grounding with Bing Search",
   "Microsoft Fabric"
  ],
  "sources_zh": [
   "代码解释器",
   "计算机使用",
   "文件搜索",
   "使用 Bing 搜索进行基础支持",
   "Microsoft Fabric"
  ],
  "targets": [
   {
    "label_en": "Access up-to-date information from public websites:",
    "label_zh": "访问来自公共网站的最新信息：",
    "correct_en": "Grounding with Bing Search",
    "correct_zh": "使用 Bing 搜索进行基础支持"
   },
   {
    "label_en": "Perform calculations during conversations:",
    "label_zh": "在对话中执行计算：",
    "correct_en": "Code interpreter",
    "correct_zh": "代码解释器"
   },
   {
    "label_en": "Retrieve information from documents uploaded directly to the agent:",
    "label_zh": "从直接上传到代理的文档中检索信息：",
    "correct_en": "File search",
    "correct_zh": "文件搜索"
   }
  ]
 },
 {
  "id": 53,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "C"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a prompt agent used by a customer support web app.\nThe agent is invoked from a Python service that does NOT run in the Foundry portal.\nYou need to implement end-to-end tracing to capture latency breakdowns and exceptions across agent runs.\nWhich two components can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "a Log Analytics workspace",
    "B": "Application Insights",
    "C": "OpenTelemetry",
    "D": "the Azure Monitor Agent",
    "E": "Microsoft Sentinel"
   },
   "explanation": "To implement end-to-end tracing for a Microsoft Foundry prompt agent invoked from an external Python            service, you should use a combination of Azure Application Insights, the Azure AI Projects SDK, and OpenTelemetry.\n\nCore Components Azure Application Insights: This serves as the centralized telemetry store. You must connect an Application Insights resource to your Foundry project via the Tracing tab in the Foundry portal to enable ingestion.\n\nAzure AI Projects SDK (azure-ai-projects): Used in your Python service to create an AIProjectClient, which authenticates and communicates with the Foundry agent.\n\nOpenTelemetry Python SDK: Foundry tracing is built on the OpenTelemetry standard. You will need opentelemetry-sdk and azure-monitor-opentelemetry to instrument your external service."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，其中包含一个由客户支持网页应用使用的提示代理。\n该代理是从一个不在 Foundry 门户中运行的 Python 服务中调用的。不运行。\n您需要实现端到端跟踪，以捕获代理运行中的延迟细分和异常。\n您可以使用哪两个组件？每个正确答案都提供了完整的解决方案。\n注意： 每个正确的选择值为一分。",
   "options": {
    "A": "日志分析工作区",
    "B": "应用程序洞察",
    "C": "OpenTelemetry",
    "D": "Azure 监视代理",
    "E": "Microsoft Sentinel"
   },
   "explanation": "要实现从外部 Python 服务调用的 Microsoft Foundry 提示代理的端到端追踪，您应该使用 Azure 应用                         程序洞察、Azure AI 项目 SDK 和 OpenTelemetry 的组合。\n\n核心组件Azure 应用程序洞察：这作为集中式遥测存储。您必须通过 Foundry 门户中的追踪选项卡将应用程序洞察资源连接到您的 Foundry 项目，以启用数据摄取。\n\nAzure AI 项目 SDK (azure-ai-projects)：在您的 Python 服务中使用，以创建 AIProjectClient，该客户端用于身份验证并与 Foundry 代理进行通信。\n\nOpenTelemetry Python SDK：Foundry 追踪基于 OpenTelemetry 标准。您需要 opentelemetry-s dk 和 azure-monitor-opentelemetry 来为您的外部服务进行仪器化。"
  }
 },
 {
  "id": 54,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a customer support agent that uses the Microsoft Foundry Agent Service.\nSometimes, customers return to a session days later to continue the same support case, and the agent must resume with the full historical context. The agent must provide the following:\nMulti-turn continuity within the session Cross-session continuity for the same case Access to the full interaction history, including user messages, agent messages, tool calls, and tool outputs You need to ensure that the agent automatically reloads the complete history on each new turn.\nWhat should you do?",
   "options": {
    "A": "Create and reuse a conversation by storing the conversation’s ID and supplying the ID on subsequent requests.",
    "B": "Persist only the final model response stored in the client application and prepend the response to future prompts.",
    "C": "Enable memory summarization on the agent definition to persist the context automatically."
   },
   "explanation": "To achieve full, multi-turn, and cross-session continuity with complete historical context (including user messages, agent messages, tool calls, and tool outputs), you must leverage the durable Conversation lifecycle provided by the Microsoft Foundry Agent Service runtime.\n\nBecause the underlying Agent Service can be stateless at the inference tier, managing continuity across days requires linking your agent interactions to a persistent, server-side conversation ID.\n\nHere is exactly what must be done to meet your requirements:\n*-> 1. Maintain a Durable Conversation ID Instead of creating a brand-new conversation session every time a user returns, your application must persist and map the unique support case to a Microsoft Foundry Conversation ID (typically prefixed with resp_* or conv_*) in your external database.\nNew Case: Create a new session and capture the generated ConversationId.\n\nReturning Case: Retrieve the previously saved ConversationId associated with that customer's support case from your database.\n\n2. Resume Sessions via the SDK When the customer returns days later, initialize the agent's session by passing the existing Conversation ID into the session creation method. This forces the Microsoft Foundry Agent Service to automaticallyreload the complete, un-summarized threadhistory on the backend before processing the next turn."
  },
  "zh": {
   "stem": "您有一个使用 Microsoft Foundry 代理服务的客户支持代理。\n有时，客户在几天后返回会话以继续相同的支持案例，代理必须恢复完整的历史上下文。代理必须提供以下内容：\n会话内的多轮连续性同一案例的跨会话连续性访问完整的交互历史，包括用户消息、代理消息、工具调用和工具输出您需要确保代理在每个新回合自动重新加载完整历史记录。\n您应该怎么做？",
   "options": {
    "A": "通过存储对话的 ID 并在后续请求中提供该 ID 来创建和重用对话。",
    "B": "仅在客户端应用程序中持久化最终模型响应，并将响应添加到未来的 提示中。",
    "C": "在代理定义上启用记忆摘要，以自动持久化上下文。"
   },
   "explanation": "要实现完整的多轮和跨会话连续性，并保留完整的历史上下文（包括用户消息、代理消息、工具调用和工具输出），您必须利用 Microsoft Foundry Agent Service 运行时提供的持久对话生命周期。\n\n由于底层的代理服务在推理层可以是无状态的，因此在几天内管理连续性需要将您的代理交互链接到持久的服务器端对话 ID。\n\n以下是满足您要求的具体步骤：\n*-> 1. 维护持久的对话 ID您的应用程序必须在用户返回时，不是每次都创建一个全新的对话会话，而是将唯一的支持案例持久化并映射到 Microsoft Foundry 对话 ID（通常以 resp_* 或 conv_* 为前缀）在您的外部数据库中。\n\n新案例：创建一个新会话并捕获生成的 ConversationId。\n\n返回案例：从您的数据库中检索与该客户支持案例关联的先前保存的 ConversationId。\n\n2. 通过 SDK 恢复会话当客户在几天后返回时，通过将现有的对话ID 传递给会话创建方法来初始化代理的会话。这会强制 Microsoft Foundry 代理服务在处理下一轮之前，自动      重新加载后端的完整、未总结的线程历史。"
  }
 },
 {
  "id": 55,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a deployed chat model.\nYou have a Python service that sends API requests to the model. The service is integrated with an automated validation system that compares generated outputs against approved response patterns.\nStakeholders report that small wording differences are causing validation mismatches.\nYou need to update the request parameters to improve output stability. The solution must maximize reasoning quality.\nHow should you complete the Python code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: 0 The best configuration for the temperature is 0.\n\nWhy Temperature 0 is Best Maximizes Predictability: Setting temperature to 0 makes the model deterministic.Reduces Mismatches: It always selects the most likely tokens. This minimizes the small wording differences causing your validation failures.\n\nPreserves Reasoning: Lowering temperature does not degrade the core reasoning capability of a model; it simply eliminates random variations in how that reasoning is phrased.\n\nWhy Other Options Fail Temperature 1: This is the default creative balance. It allows standard token variance, which will continue to trigger your pattern-matching mismatches.\n\nTemperature 2: This creates maximum randomness. The output will become chaotic, nonsensical, and completely break both your validation system and reasoning quality.\n\nBox 2: \"high\" High output effort is the best configuration for this scenario.\n\nWhy High Effort is Best Maximizes Reasoning: High effort allocates more computational tokens for internal chain-of-thought processing.\n\nImproves Consistency: Better reasoning helps the model strictly adhere to the complex rules and approved response patterns you have defined.\n\nReduces Edge Cases: Subtle wording deviations usually happen when a model rushes its generation without sufficient planning."
  },
  "zh": {
   "stem": "您有一个包含已部署聊天模型的 Microsoft Foundry 项目。\n您有一个 Python 服务，它向模型发送 API 请求。该服务与一个自动化验证系统集成，该系统将生成的输出与批准的响应模式进行比较。\n利益相关者报告称，小的措辞差异导致验证不匹配。\n您需要更新请求参数以提高输出稳定性。解决方案必须最大化推理质量。\n您应该如何完成 Python 代码？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1: 0最佳温度配置为 0。\n\n为什么温度 0 是最佳选择最大化可预测性：将温度设置为 0 使模型确定性。减少不匹配：它始终选择最可能的标记。这最小化了导致您验证失败的小措辞差异。\n\n保持推理能力：降低温度不会降低模型的核心推理能力；它只是消除了推理措辞中的随机变化。\n\n为什么其他选项失败温度 1：这是默认的创造性平衡。它允许标准标记方差，这将继续触发您的模式匹配不匹配。\n\n温度 2：这会产生最大随机性。输出将变得混乱、无意义，并完全破坏您的验证系统和推理质量。\n\n框 2: \"高\"高输出努力是此场景的最佳配置。\n\n为什么高努力是最佳选择最大化推理：高努力为内部思维链处理分配更多计算令牌。\n\n提高一致性：更好的推理帮助模型严格遵循您定义的复杂规则和批准的响应模式。\n\n减少边缘案例：微妙的措辞偏差通常发生在模型在没有足够规划的情况下匆忙生成时。"
  },
  "boxes": [
   {
    "prompt_en": "temperature=",
    "prompt_zh": "temperature=",
    "options_en": [
     "0",
     "1",
     "2"
    ],
    "options_zh": [
     "0",
     "1",
     "2"
    ],
    "correct_en": "0",
    "correct_zh": "0"
   },
   {
    "prompt_en": "output_config={\"effort\":",
    "prompt_zh": "output_config={\"effort\":",
    "options_en": [
     "\"high\"",
     "\"low\"",
     "\"medium\""
    ],
    "options_zh": [
     "\"high\"",
     "\"low\"",
     "\"medium\""
    ],
    "correct_en": "\"high\"",
    "correct_zh": "\"high\""
   }
  ],
  "code": {
   "lang": "python",
   "text": "message = client.messages.create(\n    model=\"deployment-name\",\n    messages=[\n        {\"role\": \"user\", \"content\": \"Summarize the release notes in 3 bullet points.\"}\n    ],\n    max_tokens=800,\n    temperature=[[1]],\n    thinking={\"type\": \"enabled\"},\n    output_config={\"effort\": [[2]]}\n)"
  }
 },
 {
  "id": 56,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have a chat app in a Microsoft Foundry project and an Azure AI Search vectorized index.\nYou need to connect to the index to meet the following requirements:\nComplex questions must retrieve information from multiple chunks.\nMulti-turn conversations must influence retrieval planning.\nRetrievals must run in parallel to reduce latency.\nWhich retrieval approach should you use?",
   "options": {
    "A": "iterative retrieval",
    "B": "agentic Retrieval Augmented Generation (RAG)",
    "C": "chain of thought",
    "D": "classic Retrieval Augmented Generation (RAG)"
   },
   "explanation": "An agentic Retrieval-Augmented Generation (RAG) architecture is the best fit for your requirements.\nTraditional, linear RAG pipelines struggle with complex, multi-turn dependencies, whereas an agentic approach natively solves them through iterative reasoning and tool orchestration.\n\nHere is how an agentic RAG pattern specifically satisfies each the three technical requirements:\n\n1. Complex Questions & Multi-Chunk Retrieval The Challenge: Complex questions often require aggregating distinct pieces of information scattered across different documents or sections.\n\nThe Agentic Solution: An agent uses a Reasoning and Acting (ReAct) loop. It evaluates the user's query, breaks it down into sub-questions, and executes multiple distinct search queries. It then synthesizes the information from these diverse chunks before generating a final response.\n\n2. Multi-Turn Conversations & Retrieval Planning The Challenge: Standard RAG often just passes the latest user message or a simple chat history summary to the search index, which can lose context or misinterpret the user's true intent in long conversations.\n\nThe Agentic Solution: The agent acts as a query planner. It maintains the state of the conversation and dynamically decides if a retrieval is needed, what specific keywords or vectors to target based on past turns, and how to reformulate the query to bridge context gaps.\n\n3. Parallel Retrievals for Low Latency The Challenge: Sequential lookups drastically increase time-to-first-token (TTFT), harming the chat user experience.\n\nThe Agentic Solution: Modern AI agent frameworks allow the LLM to emit multiple tool calls simultaneously. The application layer can intercept these calls and execute parallel asynchronous queries against your Azure AI Search vectorized index, drastically minimizing latency."
  },
  "zh": {
   "stem": "您在 Microsoft Foundry 项目中有一个聊天应用和一个 Azure AI Search 向量化索引。\n您需要连接到该索引以满足以下要求：\n复杂问题必须从多个块中检索信息。\n多轮对话必须影响检索规划。\n检索必须并行运行以减少延迟。\n您应该使用哪种检索方法？",
   "options": {
    "A": "迭代检索",
    "B": "代理式检索增强生成 (RAG)",
    "C": "思维链",
    "D": "经典检索增强生成 (RAG)"
   },
   "explanation": "代理式检索增强生成 (RAG) 架构最适合您的需求。\n传统的线性 RAG 流水线在处理复杂的多轮依赖时表现不佳，而代理式方法通过迭代推理和工具编排本质上解决了这些问题。\n\n以下是代理型 RAG 模式如何具体满足三个技术要求：\n\n1. 复杂问题与多块检索挑战：复杂问题通常需要聚合散布在不同文档或部分的不同信息。\n\n代理解决方案：代理使用推理与行动（ReAct）循环。它评估用户的查询，将其分解为子问题，并执行多个不同的搜索查询。然后，它综合这些不同块的信息，生成最终响应。\n\n2. 多轮对话与检索规划挑战：标准 RAG 通常只是将最新的用户消息或简单的聊天历史摘要传递给搜索索引，这可能会丢失上下文或误解用户在长对话中的真实意图。\n\n代理解决方案：代理充当查询规划者。它维护对话的状态，并动态决定是否需要检索，基于过去的轮次确定特定的关键词或向量，并如何重新构建查询以弥补上下文差距。\n\n3. 低延迟的并行检索挑战：顺序查找会大幅增加首次令牌时间（TTFT），损害聊天用户体验。\n\n代理解决方案：现代 AI 代理框架允许 LLM 同时发出多个工具调用应用层可以拦截这些调用，并对您的 Azure AI 搜索向量化索引执行并行异步查询，极大地减少延迟。"
  }
 },
 {
  "id": 57,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You need to recommend a plan to create a customer support agent by using the Microsoft Foundry Agent Service. The agent must meet the following requirements:\nRetain user preferences across multiple conversations.\nEnable users to provide contextual grounding by directly uploading documents during a chat.\nWhich Foundry capability should you recommend for each requirement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Agent memory that uses persistent storage Retain user preferences across multiple conversations.\n\nTo enable a customer support agent built on the Microsoft Foundry Agent Service to retain user preferences across multiple distinct conversations, you must implement the platform's native managed long-term memory system.\n\nThe solution architecture must include the following specific components and configurations:\n*-> 1. Dedicated Long-Term Memory Store Agent-to-Store Mapping: Provision one dedicated memory store attached directly to your customer support agent to establish a clear knowledge boundary.\n\nManaged Lifecycle Operations: Rely on the service runtime to automatically manage the asynchronous extraction of preferences, consolidation (merging duplicates and resolving conflicting facts), and hybrid search retrieval.\n2. User-Scoped Partitioning (Memory Scope) Isolation Vaults: Define a mandatory Memory Scope for every interaction.\n\nUnique Identifiers: Bind the scope parameter to a persistent identifier like the customer’s Microsoft Entra ID or a custom system UUID. This ensures user preferences are securely isolated and do not leak into other customers' sessions.\n\n3. Dual Memory Types\n\nBox 2: File Search tool To enable users to directly upload documents during a chat for real-time contextual grounding, you should include the File Search tool.\n\nThis built-in tool is specifically designed to augment agents with knowledge from uploaded files or proprietary documents. When users upload a document during a chat thread, the Foundry Agent Service File Search Tool automatically handles the extraction, chunking, embedding, and vector searching of that file to ground the agent's responses dynamically.\n\nIncorrect:\n* Azure AI Search While it is a knowledge grounding tool, the Azure AI Search Tool is built to connect an agent to a pre-\nexisting, centralized corporate search index. It does not handle ad-hoc user file uploads directly inside a chat session.\n\n* Code Interpreter The Code Interpreter Tool is used for executing Python code in a sandboxed environment to perform advanced mathematical calculations, data analysis, and chart generation, rather than document vector\n\nretrieval."
  },
  "zh": {
   "stem": "您需要推荐一个计划，通过使用 Microsoft Foundry 代理服务创建一个客户支持代理。该代理必须满足以下要求：\n在多次对话中保留用户偏好。\n允许用户通过在聊天过程中直接上传文档来提供上下文支持。\n您应该为每个要求推荐哪个 Foundry 功能？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：使用持久存储的代理记忆在多次对话中保留用户偏好。\n\n为了使基于 Microsoft Foundry 代理服务构建的客户支持代理能够在多次不同对话中保留用户偏好，您必须实现该平台的本地托管长期记忆系统。\n\n解决方案架构必须包括以下特定组件和配置：\n*-> 1. 专用长期记忆存储代理到商店映射：为您的客户支持代理提供一个专用的内存存储，以建立明确的知识边界。\n\n托管生命周期操作：依赖服务运行时自动管理偏好的异步提取、合并（合并重复项和解决冲突事实）以及混合搜索检索。\n2. 用户范围分区（内存范围）隔离库：为每次交互定义一个强制性的内存范围。\n\n唯一标识符：将范围参数绑定到持久标识符，如客户的 Microsoft Entra ID 或自定义系统 UUID。这确保用户偏好被安全隔离，不会泄漏到其他客户的会话中。\n\n3. 双内存类型\n\n框 2：文件搜索工具为了使用户能够在聊天过程中直接上传文档以进行实时上下文支持，您应该包含文件搜索工具。\n\n此内置工具专门设计用于通过上传的文件或专有文档增强代理的知识。当用户在聊天线程中上传文档时，Foundry Agent Service 文件搜索工具会自动处理该文件的提取、分块、嵌入和向量搜索，以动态支持代理的响应。\n\n不正确：\n* Azure AI 搜索虽然它是一个知识基础工具，但 Azure AI 搜索工具旨在将代理连接到一个预先存在的集中式企业搜索索引。它不直接处理在聊天会话中临时用户文件的上传。\n\n* 代码解释器代码解释器工具用于在沙盒环境中执行 Python 代码，以进行高级数学计算、数据分析和图表生成，而不是文档向量\n\n检索。"
  },
  "boxes": [
   {
    "prompt_en": "To retain user preferences across conversations, use:",
    "prompt_zh": "在多次对话中保留用户偏好，使用：",
    "options_en": [
     "Agent memory that uses persistent storage",
     "Conversation history",
     "Orchestration-managed session context"
    ],
    "options_zh": [
     "使用持久存储的代理记忆",
     "对话历史记录",
     "编排管理的会话上下文"
    ],
    "correct_en": "Agent memory that uses persistent storage",
    "correct_zh": "使用持久存储的代理记忆"
   },
   {
    "prompt_en": "To enable users to provide contextual grounding during chats, use the:",
    "prompt_zh": "为使用户能够在聊天过程中提供上下文支持，使用：",
    "options_en": [
     "Azure AI Search tool",
     "Code interpreter tool",
     "File search tool"
    ],
    "options_zh": [
     "Azure AI Search 工具",
     "代码解释器工具",
     "文件搜索工具"
    ],
    "correct_en": "File search tool",
    "correct_zh": "文件搜索工具"
   }
  ]
 },
 {
  "id": 58,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents.\nYou need to improve response completeness. The solution must be implemented in the logic of the application code before responses are returned.\nWhat should you do?",
   "options": {
    "A": "Add a retry evaluation before the responses are returned.",
    "B": "Decrease the value of the max_tokens parameter.",
    "C": "Switch to Retrieval Augmented Generation (RAG).",
    "D": "Replace the model with a smaller deployment."
   },
   "explanation": "To enhance response completeness in your Microsoft Foundry agent, you must intercept the retrieved documents and the generated summary within your backend application logic before returning the payload to the user.\n\n1. Implement Completeness Verification Logic Add a verification step in your orchestration code (e.g., in your Python/Semantic Kernel or LangChain pipeline) that compares the generated summary against the retrieved chunks.'\n\nMap Key Assertions: Extract main policy rules from retrieved text.Cross-Reference Entities: Verify all key entities are in the summary.\nCheck Scope Coverage: Ensure every retrieved document is represented.\n\nScan for Gaps: Identify critical missing constraints or exceptions.\n\n2. Apply Application-Level Mitigation Strategies If the verification step detects that the summary is incomplete, use your code to correct it before the final response leaves your system."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。该代理从检索到的政策文件中生成摘要。\n您需要提高响应的完整性。解决方案必须在应用程序代码的逻辑中实现，然后才能返回响应。\n您应该怎么做？",
   "options": {
    "A": "在返回响应之前添加重试评估。",
    "B": "降低 max_tokens 参数的值。",
    "C": "切换到检索增强生成（RAG）。",
    "D": "用更小的部署替换模型。"
   },
   "explanation": "要增强您在 Microsoft Foundry 代理中的响应完整性，您必须在将有效负载返回给用户之前，在您的后端应用程序逻辑中拦截检索到的documents 和生成的摘要。\n\n1. 实现完整性验证逻辑在您的编排代码中添加一个验证步骤（例如，在您的 Python/Semantic Kernel 或 LangChain管道中），将生成的摘要与检索到的片段进行比较。\n\n映射关键断言：从检索到的文本中提取主要政策规则。交叉引用实体：验证所有关键实体是否在摘要中。\n检查范围覆盖：确保每个检索到的文档都有代表。\n\n扫描缺口：识别关键缺失的约束或例外。\n\n2. 应用应用级缓解策略如果验证步骤检测到摘要不完整，请使用您的代码在最终响应离开系统之前进行修正。"
  }
 },
 {
  "id": 59,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have a customer support agent built by using the Microsoft Foundry Agent Service. The agent calls an Azure OpenAI model deployment.\nDuring load testing, calls intermittently fail and return an HTTP 429 rate limit exceeded error.\nYou need to handle throttling to reduce call failures and improve reliability under load. The solution must remain within the service and model limits.\nWhat should you do?",
   "options": {
    "A": "Create a new thread and retry the calls immediately.",
    "B": "Reduce the number of registered tools.",
    "C": "Implement a retry policy that uses exponential backoff and jitter.",
    "D": "Spit uploaded content into smaller files."
   },
   "explanation": "To handle HTTP 429 throttling and improve load testing reliability for your Microsoft Foundry Agent Service, implement exponential backoff with jitter on the client side, deploy a load-balancing gateway across multiple Azure OpenAI regions, or upgrade your deployment to Provisioned Throughput Units (PTU).\n\n*-> 1. Implement Client-Side Retry LogicConfigure your agent's HTTP client or SDK to handle 429 errors gracefully rather than failing immediately.\n\nExponential Backoff: Increase the wait time between subsequent retry attempts exponentially  .\n\nJitter: Add a small amount of random delay (jitter) to the backoff time to prevent a \"thundering herd\" effect where all throttled requests retry simultaneously.\n\nHeader Inspection: Programmatically read the Retry-After or x-ratelimit-reset values from the HTTP 429 response headers to pause execution for the exact duration requested by Azure.\n\n2. Set Up Multi-Region Load Balancing\n\n3. Switch to Provisioned Throughput (PTU)\n\n4. Optimize Token Consumption"
  },
  "zh": {
   "stem": "您有一个使用 Microsoft Foundry Agent Service 构建的客户支持代理。该代理调用一个Azure OpenAI 模型部署。\n在负载测试期间，调用间歇性失败并返回 HTTP 429 速率限制超出错误。\n您需要处理限流以减少调用失败并在负载下提高可靠性。解决方案必须保持在服务和模型的限制内。\n您应该怎么做？",
   "options": {
    "A": "创建一个新线程并立即重试调用。",
    "B": "减少注册工具的数量。",
    "C": "实施使用指数退避和抖动的重试策略。",
    "D": "将上传的内容拆分成较小的文件。"
   },
   "explanation": "为了处理 HTTP 429 限流并提高 Microsoft Foundry Agent服务的负载测试可靠性，请在客户端实现带有抖动的指数退避，在多个 Azure OpenAI 区域之间部署负载均衡网关，或将您的部署升级为预配置吞吐量单位(PTU)。\n\n*-> 1. 实施客户端重试逻辑配置您的代理的 HTTP 客户端或 SDK，以优雅地处理 429 错误，而不是立即失败。\n\n指数退避：在后续重试尝试之间指数性地增加等待时间。\n\n抖动：在退避时间中添加少量随机延迟（抖动），以防止“雷鸣般的群体”效应，即所有被限流的请求同时重试。\n\n头部检查：以编程方式从 HTTP 429响应头中读取 Retry-After 或 x-ratelimit-reset 值，以暂停执行 Azure 请求的确切持续时间。\n\n2. 设置多区域负载均衡\n\n3. 切换到预配置吞吐量 (PTU)\n\n4. 优化令牌消耗"
  }
 },
 {
  "id": 60,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent.\nYou use a GitHub Actions workflow for CI/CD.\nYou need to configure the workflow to automatically evaluate the agent when a pull request (PR) is created and prevent branches from merging if the evaluation results do NOT meet the defined thresholds.\nHow should you configure the workflow? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: An Azure Login action that uses OpenID Connect(OIDC).\nThe most appropriate authentication method for this scenario is Microsoft Entra ID authentication using OpenID Connect (OIDC).\nUsing OIDC with the azure/login GitHub Action eliminates the need to store long-lived credentials (like passwords or client secrets) inside GitHub secrets, offering a highly secure and passwordless integration.\n\nWhy OIDC Is the Recommended Choice Short-Lived Tokens: GitHub Actions requests a temporary, scoped token from Microsoft Entra ID dynamically for each workflow run.\n\nNo Secret Rotations: Eliminates administrative overhead and safety risks associated with managing long-\nlived Azure Service Principal secrets.\n\nGranular RBAC: Permissions can be tightly scoped by assigning the Azure AI User role to the specific repository/workflow identity at the Microsoft Foundry resource level.\n\nBox 2: Fail\n\nConfiguring the GitHub Actions workflow to exit with a non-zero status code (fail) when thresholds are not met is the standard mechanism to block pull requests.To enforce this restriction, you must pair the workflow configuration with GitHub repository settings.\n\nExample code:\n\n- name: Enforce Thresholds run: | # Use node, python, or bash to read JSON and validate python -c \" import json, sys with open('results.json') as f:\ndata = json.load(f) if data['groundedness'] < 0.85:\nprint('Error: Groundedness score below 0.85 threshold.') sys.exit(1)"
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。\n您使用 GitHub Actions 工作流进行 CI/CD。\n您需要配置工作流，以便在创建拉取请求（PR）时自动评估代理，并防止分支合并，如果评估结果不满足定义的阈值。\n您应该如何配置工作流？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：一个使用 OpenID Connect（OIDC）的 Azure 登录操作。\n此场景最合适的身份验证方法是使用 OpenID Connect（OIDC）的 Microsoft Entra ID 身份验证。\n\n使用 OIDC 和 azure/login GitHub Action 消除了在 GitHub secrets 中存储长期凭据（如密码或客户端密钥）的需要，提供了高度安全且无密码的集成。\n\n为什么 OIDC 是推荐的选择短期令牌：GitHub Actions 为每次工作流运行动态请求来自 Microsoft Entra ID 的临时、范围限定的令牌。\n\n无密钥轮换：消除了与管理长期 Azure 服务主体密钥相关的管理开销和安全风险。\n\n细粒度 RBAC：通过在 Microsoft Foundry 资源级别将 Azure AI 用户角色分配给特定的存储库/工作流身份，可以严格限制权限。\n\n框 2：失败\n\n配置 GitHub Actions 工作流以在未满足阈值时以非零状态码（失败）退出是阻止拉取请求的标准机制。要强制执行此限制，您必须将工作流配置与 GitHub 存储库设置配对。\n\n示例代码：\n\n- 名称：强制阈值运行：|# 使用 node、python 或 bash 读取 JSON 并验证python -c \"导入 json, sysn with open('results.json') as f:\n数据 = json.load(f)n 如果数据['接地性'] < 0.85：\nprint('错误：基础分数低于 0.85 阈值。') sys.exit(1)"
  },
  "boxes": [
   {
    "prompt_en": "Authentication method:",
    "prompt_zh": "身份验证方法：",
    "options_en": [
     "A personal access token (PAT)",
     "A user-assigned managed identity",
     "An Azure Login action that uses OpenID Connect (OIDC)"
    ],
    "options_zh": [
     "个人访问令牌 (PAT)",
     "用户分配的托管标识",
     "使用 OpenID Connect (OIDC) 的 Azure Login 操作"
    ],
    "correct_en": "An Azure Login action that uses OpenID Connect (OIDC)",
    "correct_zh": "使用 OpenID Connect (OIDC) 的 Azure Login 操作"
   },
   {
    "prompt_en": "If the evaluation results are NOT met, configure the workflow to:",
    "prompt_zh": "如果未满足评估结果，请将工作流配置为：",
    "options_en": [
     "Lock the target branch",
     "Send an alert",
     "Fail"
    ],
    "options_zh": [
     "锁定目标分支",
     "发送警报",
     "失败"
    ],
    "correct_en": "Fail",
    "correct_zh": "失败"
   }
  ]
 },
 {
  "id": 61,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This section contains one or more sets of questions with the same scenario and problem.\nEach question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\nYou have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents.\nUsers report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content.\nYou need to improve response completeness.\nSolution: You increase the value of the max_tokens parameter.Does this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* You add a reflection pass that regenerates the response if the required clauses are missing.\n\nThis is Self-Correction Strategy: A reflection pass allows an agent to evaluate its own initial output against specified constraints (e.g., checking for the presence of mandatory regulatory clauses). If the required text is missing, the agent triggers a programmatic self-correction or regeneration loop to include them before final delivery.\n\nIncorrect:\n* You increase the value of the max_tokens parameter.\nIncreasing the max_tokens parameter prevents the response from being cut off mid-sentence due to length constraints. However, it does not force the model's logic to explicitly include missing information that it chose to leave out earlier in the text.\n\n* You increase the value of the temperature parameter.\nRaising the temperature parameter increases randomness and creativity. For rigid compliance tasks like summarizing regulatory documents, higher temperature actually increases the risk of hallucination and omission.\n\n* You run an evaluation flow that scores responses for completeness and blocks responses that fall below a defined threshold.\nEvaluation Flow Block: Running an evaluation flow to score completeness and blocking bad responses identifies and stops low-quality outputs, but it does not fix or actively improve the response completeness.\nIt simply filters failures out of the system."
  },
  "zh": {
   "stem": "注意：本节包含一个或多个具有相同场景和问题的问题集。\n每个问题提供了一个独特的解决方案。您必须确定该解决方案是否满足所述目标。该组中的多个解决方案可能解决该问题。也有可能该组中的解决方案都无法解决该问题。\n在您回答本节中的问题后，您将无法返回。因此，这些问题不会出现在复查界面上。\n您有一个包含代理的 Microsoft Foundry 项目。该代理从检索到的政策文件中生成摘要。\n用户报告称，一些响应省略了所需的监管条款，即使这些条款在检索的内容中存在。\n您需要提高响应的完整性。\n解决方案：您增加 max_tokens 参数的值。      这达到了目标吗？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "正确：\n* 您添加一个反思过程，如果缺少必要的条款，则重新生成响应。\n\n这是自我纠正策略：反思过程允许代理评估其初始输出是否符合指定的约束（例如，检查强制性监管条款的存在）。如果缺少所需文本，代理会触发程序化的自我纠正或再生循环，以在最终交付之前包含它们。\n\n不正确：\n* 您增加了 max_tokens 参数的值。\n增加 max_tokens 参数可以防止由于长度限制而导致的响应在句子中途被截断。然而，这并不会强制模型的逻辑明确包含它之前选择省略的缺失信息。\n\n* 您增加了 temperature 参数的值。\n提高温度参数会增加随机性和创造力。对于像总结监管文件这样的严格合规任务，较高的温度实际上会增加幻觉和遗漏的风险。\n\n* 您运行一个评估流程，对响应的完整性进行评分，并阻止低于定义阈值的响应。\n\n评估流程阻止：运行评估流程以评分完整性并阻止不良响应，识别并停止低质量输出，但它并不会修复或主动改善响应的完整性。\n它只是将失败的结果过滤出系统。"
  }
 },
 {
  "id": 62,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Note: This section contains one or more sets of questions with the same scenario and problem.\nEach question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\nYou have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents.\nUsers report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content.\nYou need to improve response completeness.\nSolution: You add a reflection pass that regenerates the response if the required clauses are missing.\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* You add a reflection pass that regenerates the response if the required clauses are missing.\n\nThis is Self-Correction Strategy: A reflection pass allows an agent to evaluate its own initial output against specified constraints (e.g., checking for the presence of mandatory regulatory clauses). If the required text is missing, the agent triggers a programmatic self-correction or regeneration loop to include them before final delivery.\n\nIncorrect:\n* You increase the value of the max_tokens parameter.\nIncreasing the max_tokens parameter prevents the response from being cut off mid-sentence due to length constraints. However, it does not force the model's logic to explicitly include missing information that it chose to leave out earlier in the text.\n\n* You increase the value of the temperature parameter.\nRaising the temperature parameter increases randomness and creativity. For rigid compliance tasks like summarizing regulatory documents, higher temperature actually increases the risk of hallucination and omission.\n\n* You run an evaluation flow that scores responses for completeness and blocks responses that fall below a defined threshold.\nEvaluation Flow Block: Running an evaluation flow to score completeness and blocking bad responses identifies and stops low-quality outputs, but it does not fix or actively improve the response completeness.\nIt simply filters failures out of the system."
  },
  "zh": {
   "stem": "注意：本节包含一个或多个具有相同场景和问题的问题集。\n每个问题提供了一个独特的解决方案。您必须确定该解决方案是否满足所述目标。该组中的多个解决方案可能解决该问题。也有可能该组中的解决方案都无法解决该问题。\n在您回答本节中的问题后，您将无法返回。因此，这些问题不会出现在复查界面上。\n您有一个包含代理的 Microsoft Foundry 项目。该代理从检索到的政策文件中生成摘要。\n用户报告称，一些响应省略了所需的监管条款，即使这些条款在检索的内容中存在。\n您需要提高响应的完整性。\n解决方案：您添加一个反思过程，如果缺少必要的条款，则重新生成响应。\n这达到了目标吗？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "正确：\n* 您添加一个反思过程，如果缺少必要的条款，则重新生成响应。\n\n这是自我纠正策略：反思过程允许代理评估其初始输出是否符合指定的约束（例如，检查强制性监管条款的存在）。如果缺少所需文本，代理会触发程序化的自我纠正或再生循环，以在最终交付之前包含它们。\n\n不正确：\n* 您增加了 max_tokens 参数的值。\n增加 max_tokens 参数可以防止由于长度限制而导致的响应在句子中途被截断。然而，这并不会强制模型的逻辑明确包含它之前选择省略的缺失信息。\n\n* 您增加了 temperature 参数的值。\n提高温度参数会增加随机性和创造力。对于像总结监管文件这样的严格合规任务，较高的温度实际上会增加幻觉和遗漏的风险。\n\n* 您运行一个评估流程，对响应的完整性进行评分，并阻止低于定义阈值的响应。\n\n评估流程阻止：运行评估流程以评分完整性并阻止不良响应，识别并停止低质量输出，但它并不会修复或主动改善响应的完整性。\n它只是将失败的结果过滤出系统。"
  }
 },
 {
  "id": 63,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This section contains one or more sets of questions with the same scenario and problem.\nEach question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\nYou have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents.\nUsers report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content.\nYou need to improve response completeness.\nSolution: You increase the value of the temperature parameter.\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:* You add a reflection pass that regeneratesthe response if the required clauses are missing.\n\nThis is Self-Correction Strategy: A reflection pass allows an agent to evaluate its own initial output against specified constraints (e.g., checking for the presence of mandatory regulatory clauses). If the required text is missing, the agent triggers a programmatic self-correction or regeneration loop to include them before final delivery.\n\nIncorrect:\n* You increase the value of the max_tokens parameter.\nIncreasing the max_tokens parameter prevents the response from being cut off mid-sentence due to length constraints. However, it does not force the model's logic to explicitly include missing information that it chose to leave out earlier in the text.\n\n* You increase the value of the temperature parameter.\nRaising the temperature parameter increases randomness and creativity. For rigid compliance tasks like summarizing regulatory documents, higher temperature actually increases the risk of hallucination and omission.\n\n* You run an evaluation flow that scores responses for completeness and blocks responses that fall below a defined threshold.\nEvaluation Flow Block: Running an evaluation flow to score completeness and blocking bad responses identifies and stops low-quality outputs, but it does not fix or actively improve the response completeness.\nIt simply filters failures out of the system."
  },
  "zh": {
   "stem": "注意：本节包含一个或多个具有相同场景和问题的问题集。\n每个问题提供了一个独特的解决方案。您必须确定该解决方案是否满足所述目标。该组中的多个解决方案可能解决该问题。也有可能该组中的解决方案都无法解决该问题。\n在您回答本节中的问题后，您将无法返回。因此，这些问题不会出现在复查界面上。\n您有一个包含代理的 Microsoft Foundry 项目。该代理从检索到的政策文件中生成摘要。\n用户报告称，一些响应省略了所需的监管条款，即使这些条款在检索的内容中存在。\n您需要提高响应的完整性。\n解决方案：您增加了 temperature 参数的值。\n这达到了目标吗？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "正确：             * 您添加一个反思过程，如果缺少必要的条款，则重新生成响应。\n这是自我纠正策略：反思过程允许代理评估其初始输出是否符合指定的约束（例如，检查强制性监管条款的存在）。如果缺少所需文本，代理会触发程序化的自我纠正或再生循环，以在最终交付之前包含它们。\n\n不正确：\n* 您增加了 max_tokens 参数的值。\n增加 max_tokens 参数可以防止由于长度限制而导致的响应在句子中途被截断。然而，这并不会强制模型的逻辑明确包含它之前选择省略的缺失信息。\n\n* 您增加了 temperature 参数的值。\n提高温度参数会增加随机性和创造力。对于像总结监管文件这样的严格合规任务，较高的温度实际上会增加幻觉和遗漏的风险。\n\n* 您运行一个评估流程，对响应的完整性进行评分，并阻止低于定义阈值的响应。\n\n评估流程阻止：运行评估流程以评分完整性并阻止不良响应，识别并停止低质量输出，但它并不会修复或主动改善响应的完整性。\n它只是将失败的结果过滤出系统。"
  }
 },
 {
  "id": 64,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This section contains one or more sets of questions with the same scenario and problem.\nEach question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem.\nAfter you answer a question in this section, you will NOT be able to return. As a result, these questions do not appear on the Review Screen.\nYou have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents.\nUsers report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content.\nYou need to improve response completeness.\nSolution: You run an evaluation flow that scores responses for completeness and blocks responses that fall below a defined threshold.\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* You add a reflection pass that regenerates the response if the required clauses are missing.\n\nThis is Self-Correction Strategy: A reflection pass allows an agent to evaluate its own initial output against specified constraints (e.g., checking for the presence of mandatory regulatory clauses). If the required text is missing, the agent triggers a programmatic self-correction or regeneration loop to include them before final delivery.\n\nIncorrect:\n* You increase the value of the max_tokens parameter.\nIncreasing the max_tokens parameter prevents the response from being cut off mid-sentence due to length constraints. However, it does not force the model's logic to explicitly include missing information that it chose to leave out earlier in the text.\n\n* You increase the value of the temperature parameter.\nRaising the temperature parameter increases randomness and creativity. For rigid compliance tasks like summarizing regulatory documents, higher temperature actually increases the risk of hallucination and omission.\n\n* You run an evaluation flow that scores responses for completeness and blocks responses that fall below a defined threshold.\nEvaluation Flow Block: Running an evaluation flow to score completeness and blocking bad responses identifies and stops low-quality outputs, but it does not fix or actively improve the response completeness.\nIt simply filters failures out of the system."
  },
  "zh": {
   "stem": "注意：本节包含一个或多个具有相同场景和问题的问题集。\n每个问题提供了一个独特的解决方案。您必须确定该解决方案是否满足所述目标。该组中的多个解决方案可能解决该问题。也有可能该组中的解决方案都无法解决该问题。\n在您回答本节中的问题后，您将无法返回。因此，这些问题不会出现在复查界面上。\n您有一个包含代理的 Microsoft Foundry 项目。该代理从检索到的政策文件中生成摘要。\n用户报告称，一些响应省略了所需的监管条款，即使这些条款在检索的内容中存在。\n您需要提高响应的完整性。\n解决方案：您运行一个评估流程，对响应的完整性进行评分，并阻止低于定义阈值的响应。\n这达到了目标吗？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "正确：\n* 您添加一个反思过程，如果缺少必要的条款，则重新生成响应。\n\n这是自我纠正策略：反思过程允许代理评估其初始输出是否符合指定的约束（例如，检查强制性监管条款的存在）。如果缺少所需文本，代理会触发程序化的自我纠正或再生循环，以在最终交付之前包含它们。\n\n不正确：\n* 您增加了 max_tokens 参数的值。\n增加 max_tokens 参数可以防止由于长度限制而导致的响应在句子中途被截断。然而，这并不会强制模型的逻辑明确包含它之前选择省略的缺失信息。\n\n* 您增加了 temperature 参数的值。\n提高温度参数会增加随机性和创造力。对于像总结监管文件这样的严格合规任务，较高的温度实际上会增加幻觉和遗漏的风险。\n\n* 您运行一个评估流程，对响应的完整性进行评分，并阻止低于定义阈值的响应。\n\n评估流程阻止：运行评估流程以评分完整性并阻止不良响应，识别并停止低质量输出，但它并不会修复或主动改善响应的完整性。\n它只是将失败的结果过滤出系统。"
  }
 },
 {
  "id": 65,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "D"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a Retrieval Augmented Generation (RAG) chat solution used by customer support agents.\nYou are adding an automated pre-production evaluation step to a CI/CD pipeline named Pipeline1. The evaluation will run against a labeled test dataset that contains support questions and the expected grounding context.\nYou need to ensure that Pipeline1 fails if unsupported content or a retrieval mismatch exceeds a defined threshold:\nresponses include claims not supported by the retrieved source content retrieved source content does not align with the labeled expected context Which two built-in evaluators should you use in Pipeline1? Each correct answer presents pat of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Retrieval",
    "B": "Fluency",
    "C": "Coherence",
    "D": "Groundedness",
    "E": "Response Completeness"
   },
   "explanation": "The Groundedness Evaluator evaluator validates that the model's responses include only claims supported by the retrieved source content\n\nIt flags ungrounded content or hallucinations. If the average score drops below your defined threshold, it triggers a pipeline failure.\n\nThe correct additional built-in evaluator appropriate for the pipeline is Retrieval (specifically, the RetrievalEvaluator or DocumentRetrievalEvaluator).\n\nA standard RAG evaluation pipeline assesses both the generator (the LLM producing the answer) and the            retriever (the search system pulling documentation). The CI/CD requirements specify two distinct failure thresholds:\n\nResponses including claims not supported by the retrieved source content: This checks for model hallucinations and is handled by the Groundedness Evaluator.\n\nRetrieved source content not aligning with the labeled expected context: This explicitly measures the performance of your search step against your ground-truth data. The built-in Retrieval evaluator maps to this requirement. It computes metrics like context recall to ensure your system successfully retrieves the exact reference documents specified in your labeled test dataset"
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，其中包含一个由客户支持代理使用的检索增强生成（RAG）聊天解决方案。\n您正在向名为 Pipeline1 的 CI/CD 流水线添加一个自动化的预生产评估步骤。该评估将针对一个标记的测试数据集运行，该数据集包含支持问题和预期的背景信息。\n您需要确保如果不支持的内容或检索不匹配超过定义阈值，Pipeline1 将失败：\n响应包括未被检索源内容支持的声明检索源内容与标记的预期背景不一致您应该在 Pipeline1 中使用哪两个内置评估器？每个正确答案都是解决方案的一部分。\n注意： 每个正确的选择值为一分。",
   "options": {
    "A": "检索",
    "B": "流畅性",
    "C": "一致性",
    "D": "基础性",
    "E": "响应完整性"
   },
   "explanation": "说明：\n基础性评估器验证模型的响应仅包含由检索到的源内容支持的声明\n\n它标记无基础内容或幻觉。如果平均分数低于您定义的阈值，它会触发流水线失败。\n\n适合该流水线的正确附加内置评估器是检索（具体来说，是RetrievalEvaluator 或 DocumentRetrievalEvaluator）。\n\n标准的 RAG 评估流水线评估生成器（生成答案的 LLM）和                        检索器（提取文档的搜索系统）。CI/CD 要求指定了两个不同的失败阈值：\n\n响应中包含未被检索源内容支持的声明：这检查模型幻觉，由 Groundedness Evaluator 处理。\n\n检索的源内容与标记的预期上下文不一致：这明确衡量您的搜索步骤与真实数据的性能。内置的检索评估器映射到此要求。它计算诸如上下文召回率等指标，以确保您的系统成功检索到您标记的测试数据集中指定的确切参考文档。"
  }
 },
 {
  "id": 66,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a support-ticket triage agent built by using the Foundry Agent Service.\nThe agent uses tool to classify the ticket type and sot the ticket priority.\nSometimes, the same support case continues across multiple sessions over several days.\nYou need to persist state by using a durable ID to ensure that the agent can automatically reuse the full interaction history. The solution must preserve previous user messages, tool calls and tool outputs across turns and sessions.\nWhich runtime component should you use?",
   "options": {
    "A": "output item",
    "B": "agent",
    "C": "conversation",
    "D": "response"
   },
   "explanation": "To achieve state persistence and ensure that the agent automatically reuses the full multi-session interaction history (including previous user messages, tool calls, and tool outputs), you must include a conversation component.\n\nReferences:\nhttps://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components"
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，其中包含一个使用 Foundry Agent Service 构建的支持工单分流代理。\n该代理使用工具对工单类型进行分类并设置工单优先级。\n有时，同一个支持案例会在几天内跨多个会话持续进行。\n您需要通过使用持久 ID 来保持状态，以确保代理能够自动重用完整的交互历史。解决方案必须在回合和会话之间保留先前的用户消息、工具调用和工具输出。\n您应该使用哪个运行时组件？",
   "options": {
    "A": "输出项",
    "B": "代理",
    "C": "对话",
    "D": "响应"
   },
   "explanation": "说明：\n为了实现状态持久性并确保代理自动重用完整的多会话交互历史（包括先前的用户消息、工具调用和工具输出），您必须包含一个对话组件。\n\n参考文献：\nhttps://learn.microsoft.com/en-us/azure/foundry/agents/concepts/runtime-components"
  }
 },
 {
  "id": 67,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Founcy project that contains a Retrieval Augmented Generation (RAG) solution.\nYou need to run a pre-production evaluation by using labeled CSV dataset that contains the query, context, response and ground truth. The evaluation must measure the following:\nWhether responses address the user query Whether responses are supported by the provided context Whether responses contain sensitive or proprietary information Which AI quality evaluation metrics should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Groundedness and Relevance The two best AI quality evaluation metrics for your pre-production evaluation in Microsoft Foundry are Relevance and Groundedness.\n\nMicrosoft Foundry provides built-in, AI-assisted quality evaluators specifically designed to measure these two critical dimensions of a Retrieval-Augmented Generation (RAG) system:\n\nRelevance: This metric directly addresses your first requirement: whether responses address the user query. It evaluates how well the gens.nerated response aligns with and answers the initial user query.Groundedness: This metric directly addressesyour second requirement: whether responses are supported by the provided context. It evaluates the degree to which the generated response is factually supported by and derived strictly from the retrieved context, which helps capture model hallucinatio\n\nBox 2: Protected material The best AI quality evaluation metric for this scenario is Protected material.\n\nDirect alignment: The Protected material metric specifically checks whether an AI model outputs copyrighted text, proprietary data, or sensitive information that matches its training data or internal context."
  },
  "zh": {
   "stem": "您有一个 Microsoft Founcy 项目，其中包含一个检索增强生成（RAG）解决方案。\n您需要使用包含查询、上下文、响应和真实值的标记 CSV 数据集进行预生产评估。评估必须测量以下内容：\n响应是否解决了用户查询响应是否得到了提供的上下文支持响应是否包含敏感或专有信息您应该使用哪些 AI 质量评估指标？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：基础性和相关性在 Microsoft Foundry 中，您进行预生产评估的两个最佳 AI 质量评估指标是相关性和基础性。\n\nMicrosoft Foundry 提供内置的、AI 辅助的质量评估工具，专门设计用于衡量这两个关键维度的检索增强生成（RAG）系统：\n\n相关性：该指标直接针对您的第一个要求：响应是否解决了用户的查询。它评估生成的响应与初始用户查询的对齐程度和回答质量。      基础性：该指标直接针对您的第二个要求：响应是否得到提供的上下文支持。它评估生成的响应在多大程度上是基于检索到的上下文，并严格从中得出的，这有助于捕捉模型的幻觉。\n\n框 2：受保护材料此场景的最佳 AI 质量评估指标是受保护材料。\n\n直接对齐：受保护材料指标专门检查 AI 模型是否输出与其训练数据或内部上下文匹配的受版权保护的文本、专有数据或敏感信息。"
  },
  "boxes": [
   {
    "prompt_en": "To measure whether the responses are supported by the provided context and address the user query:",
    "prompt_zh": "衡量响应是否得到所提供上下文的支持并解决用户查询：",
    "options_en": [
     "Coherence and Fluency",
     "GPT similarity and F1 score",
     "Groundedness and Relevance",
     "Groundedness and ROUGE score"
    ],
    "options_zh": [
     "连贯性和流畅性",
     "GPT 相似度和 F1 分数",
     "基础性和相关性",
     "基础性和 ROUGE 分数"
    ],
    "correct_en": "Groundedness and Relevance",
    "correct_zh": "基础性和相关性"
   },
   {
    "prompt_en": "To measure whether responses contain sensitive or proprietary information:",
    "prompt_zh": "衡量响应是否包含敏感或专有信息：",
    "options_en": [
     "Hateful and unfair content",
     "Indirect attack",
     "Protected material",
     "Violent content"
    ],
    "options_zh": [
     "仇恨和不公平内容",
     "间接攻击",
     "受保护材料",
     "暴力内容"
    ],
    "correct_en": "Protected material",
    "correct_zh": "受保护材料"
   }
  ]
 },
 {
  "id": 68,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "E"
  ],
  "en": {
   "stem": "You plan to configure an evaluation in Microsoft Foundry for a Retrieval Augmented Generation (RAG) chat app.\nYou need to provide scores for groundedness, relevance, and harmful content categories.\nWhich two evaluation categories can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "risk and safety metrics",
    "B": "fluency evaluator",
    "C": "similarity evaluators",
    "D": "AI quality (NLP) metrics",
    "E": "AI quality (AI assisted) metrics"
   },
   "explanation": "The two evaluation categories that would be of use are AI quality (AI assisted) metrics and risk and safety metrics\n\nRisk and safety metrics: Scoring harmful content categories (such as violence, sexual content, hate speech, and self-harm) is handled directly by the specialized safety evaluators contained within this category.\n\nAI quality (AI assisted) metrics: In Microsoft Foundry, evaluating RAG-specific criteria like groundedness and relevance requires large language models (LLMs) acting as a judge to assess semantic context.\nThese are explicitly categorized under AI-assisted quality metrics rather than standard natural language processing (NLP) rules."
  },
  "zh": {
   "stem": "您计划在 Microsoft Foundry 中为检索增强生成 (RAG) 聊天应用配置评估。\n您需要为基础性、相关性和有害内容类别提供评分。\n您可以使用哪两个评估类别？每个正确答案都提供了完整的解决方案。\n注意： 每个正确的选择值为一分。",
   "options": {
    "A": "风险和安全指标",
    "B": "流畅性评估器",
    "C": "相似性评估器",
    "D": "AI 质量 (NLP) 指标",
    "E": "AI 质量 (AI 辅助) 指标"
   },
   "explanation": "说明：\n有用的两个评估类别是 AI 质量 (AI 辅助) 指标和风险和安全指标。\n\n风险和安全指标：对有害内容类别（如暴力、色情内容、仇恨言论和自残）的评分由该类别中的专门安全评估器直接处理。\n\nAI 质量（AI 辅助）指标：在 Microsoft Foundry 中，评估 RAG 特定标准如基础性和相关性需要大型语言模型（LLMs）作为评判者来评估语义上下文。\n这些明确归类为 AI 辅助质量指标，而不是标准自然语言处理（NLP）规则。"
  }
 },
 {
  "id": 69,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains a customer support agent built on a deployed chat model.\nThe agent responses are validated by using an automated testing system that compares generated answers to stored expected outputs. Identical prompts must return consistent response to prevent automated test failures.\nYou need to reduce response variability, without modifying the prompt or reducing factual accuracy.\nWhat should you do for the model?",
   "options": {
    "A": "Increase the max_tokens parameter.",
    "B": "Remove stop sequences from the requests.",
    "C": "Decrease the temperature parameter.",
    "D": "Increase the temperature parameter."
   },
   "explanation": "To reduce response variability and ensure identical prompts return consistent answers, you should decrease the temperature parameter.\n\nTemperature controls the randomness of the model's output. Setting the temperature closer to 0 makes the model deterministic. It forces the model to choose the highest-probability words every time, ensuring that identical prompts consistently yield identical or near-identical responses to pass your automated testing."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，其中包含一个基于已部署聊天模型构建的客户支持代理。\n代理的响应通过使用自动化测试系统进行验证，该系统将生成的答案与存储的预期输出进行比较。\n相同的提示必须返回一致的响应，以防止自动化测试失败。\n您需要减少响应的可变性，而不修改提示或降低事实准确性。\n您应该对模型做什么？",
   "options": {
    "A": "增加 max_tokens 参数。",
    "B": "从请求中移除停止序列。",
    "C": "减少 temperature 参数。",
    "D": "增加 temperature 参数。"
   },
   "explanation": "说明：\n为了减少响应的可变性并确保相同的提示返回一致的答案，您应该减少温度参数。\n\n温度控制模型输出的随机性。将温度设置得更接近 0 会使模型变得确定性。它强制模型每次选择最高概率的单词，确保相同的提示始终产生相同或近似相同的响应，以通过您的自动化测试。"
  }
 },
 {
  "id": 70,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You are developing prompts for a Micosoft Foundry project that classifies incoming support tickets by category.\nYou need to improve accuracy by showing the model how correct classifications look, without retaining the model or storing knowledge permanently.\nWhich prompt engineering approach should you use?",
   "options": {
    "A": "Retrieval Augmented Generation (RAG)",
    "B": "zero-shot learning",
    "C": "chain of thought",
    "D": "few-shot learning"
   },
   "explanation": "Few-shot prompting is the best approach for this project. This technique improves classification accuracy by including a few high-quality examples directly inside the prompt, giving the model a clear pattern to follow without modifying its weights or storing data permanently.\n\nZero retraining: Works entirely through in-context learning during the API call.\n\nNo permanent storage: The knowledge disappears as soon as the inference request is completed.\n\nImmediate accuracy boost: Demonstrates formatting, nuances, and edge cases directly to the model."
  },
  "zh": {
   "stem": "您正在为一个 Microsoft Foundry 项目开发提示，该项目按类别对 incoming support tickets 进行分类。\n您需要通过向模型展示正确的分类样式来提高准确性，而不保留模型或永久存储知识。\n您应该使用哪种提示工程方法？",
   "options": {
    "A": "检索增强生成（RAG）",
    "B": "零样本学习",
    "C": "思维链",
    "D": "少样本学习"
   },
   "explanation": "说明：\n少样本提示是该项目的最佳方法。这种技术通过在提示中直接包含一些高质量的示例来提高分类准确性，给模型提供一个清晰的模式，以便在不修改其权重或永久存储数据的情况下进行跟随。\n\n零重训练：在 API 调用期间完全通过上下文学习工作。\n\n无永久存储：知识在推理请求完成后立即消失。\n\n即时准确性提升：直接向模型展示格式、细微差别和边缘案例。"
  }
 },
 {
  "id": 71,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent for a customer support chat app. The agent uses a memory store and a memory search tool.\nYou need to ensure that the conversation history does NOT persist across separate sessions.\nTo what should you set the scope of the memory tool?",
   "options": {
    "A": "session",
    "B": "{{$conversationId}}",
    "C": "{{$userId}}",
    "D": "global"
   },
   "explanation": "To ensure that conversation history does not persist across separate sessions, you must set the scope to session.\n\nThe session scope restricts data access to the current active chat instance. It automatically wipes or ignores previous data when a new session starts.\n\nIncorrect:\n[Not C] user or {{$userId}} scope: Persists data across multiple sessions for that specific user. This would cause the exact issue you want to avoid by carrying historical context into new conversations.\n\nReferences:\nhttps://ai.gopubby.com/agents-with-memory-conceptual-undestanding-part-01-f6caedfcd96d?\ngi=a9aa95df15c6"
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，其中包含一个客户支持聊天应用的代理。该代理使用内存存储和内存搜索工具。\n您需要确保对话历史不会在不同会话之间保留。\n您应该将记忆工具的范围设置为什么？                         一个。会话B. {{$conversationId}}C. {{$userId}}D. 全局",
   "options": {
    "A": "session",
    "B": "{{$conversationId}}",
    "C": "{{$userId}}",
    "D": "global"
   },
   "explanation": "说明：\n为了确保对话历史不会在不同会话之间持续，您必须将范围设置为会话。\n\n会话范围限制数据访问仅限于当前活动的聊天实例。当新会话开始时，它会自动清除或忽略之前的数据。\n\n不正确：\n[非 C]用户或 {{$userId}} 范围：在多个会话中为该特定用户持久化数据。这将导致you 想要避免的确切问题，即将历史上下文带入新的对话中。\n\n参考文献：\nhttps://ai.gopubby.com/agents-with-memory-conceptual-undestanding-part-01-f6caedfcd96d?\nJ = 屁股 Khidf 15 中"
  }
 },
 {
  "id": 72,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent.\nYou need to enable long-term memory to ensure that the agent can recall user preferences across separate conversations. Stored memories must be isolated per authenticated user without the client application manually generating user IDs.\nHow should you complete the Python code? To answer, drag the appropriate values to the correct targets.\nEach value may be used once, more than once, or not at all.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: \"{{$userId}}\" User Isolation (Scope) Setting scope=\"{{$userId}}\" instructs the Microsoft Foundry Agent Service to automatically map and partition memory to the logged-in individual using their Microsoft Entra user identity template. The platform handles this dynamically from request headers, removing the need for manual client-side user ID management\n\nBox 2: [memory_tool] Tool List: The tools configuration parameter expects an iterable containing instantiated tool objects.\nWrapping memory_tool inside a Python list ([memory_tool]) exposes the capability to the agent definition."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。\n您需要启用长期记忆，以确保代理能够在不同对话中回忆用户偏好。存储的记忆必须针对每个经过身份验证的用户进行隔离，而不需要客户端应用程序手动生成用户 ID。\n您应该如何完成 Python 代码？要回答，请将适当的值拖到正确的目标。\n每个值可以使用一次、使用多次或根本不使用。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1: \"{{$userId}}\"用户隔离（范围）设置范围=\"{{$userId}}\" 指示 Microsoft Foundry 代理服务自动映射和划分内存给使用其 Microsoft Entra 用户身份模板登录的个人。该平台动态处理请求头，从而消除手动客户端用户 ID 管理的需要。\n\n框 2: [memory_tool]工具列表: 工具配置参数期望一个包含实例化工具对象的可迭代对象。\n将 memory_tool 包裹在 Python 列表中（[memory_tool]）使其功能暴露给代理定义。"
  },
  "sources_en": [
   "\"session\"",
   "\"{{$conversationId}}\"",
   "\"{{$userId}}\"",
   "[mem_store_name]",
   "[memory_tool]",
   "MemorySearchTool(\"support_mem_store\")"
  ],
  "sources_zh": [
   "\"session\"",
   "\"{{$conversationId}}\"",
   "\"{{$userId}}\"",
   "[mem_store_name]",
   "[memory_tool]",
   "MemorySearchTool(\"support_mem_store\")"
  ],
  "targets": [
   {
    "label_en": "scope=",
    "label_zh": "scope=",
    "correct_en": "\"{{$userId}}\"",
    "correct_zh": "\"{{$userId}}\""
   },
   {
    "label_en": "tools=",
    "label_zh": "tools=",
    "correct_en": "[memory_tool]",
    "correct_zh": "[memory_tool]"
   }
  ],
  "code": {
   "lang": "python",
   "text": "from azure.ai.projects.models import MemorySearchTool, PromptAgentDefinition\n\nmem_store_name = \"agent_mem_store\"\n\nmemory_tool = MemorySearchTool(\n    memory_store_name=mem_store_name,\n    scope=[[1]],\n)\n\nagent_def = PromptAgentDefinition(\n    model=\"gpt-5.2\",\n    instructions=\"You are a customer support assistant.\",\n    tools=[[2]],\n)"
  }
 },
 {
  "id": 73,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have a web app named App1 that processes user prompts by integrating with a Microsoft Foundry project named Project1. App1 performs the following actions:\nSends prompts directly to a model by using the Azure OpenAI Responses API Invokes the Azure AI Content Safety tool by using a Foundry connection within the same request You need to configure end-to-end visibility into each step of the request workflow.\nWhat should you do?",
   "options": {
    "A": "Enable logging by using the client SDK for Content Safety.",
    "B": "Enable logging by using Foundry Local.",
    "C": "Enable application tracing in Project1.",
    "D": "Route requests through the Azure OpenAI endpoint."
   },
   "explanation": "To configure end-to-end visibility into each step of the request workflow, you should Enable application tracing in the project.\n\nProject-Level Observability: Enabling application tracing allows Microsoft Foundry to natively track, trace, and monitor every component of the workflow—including calls to the Azure OpenAI Responses API and associated tools like Azure AI Content Safety—within the same request without requiring complex,separate SDK configurations.\n\nCentralized Tracking: Tracing captures the exact execution path across the project endpoints, allowing you to see metrics, latency, and inputs/outputs sequentially for both the model invocation and the content safety check."
  },
  "zh": {
   "stem": "您有一个名为 App1 的 Web 应用，它通过与名为 Project1 的 Microsoft Foundry项目集成来处理用户提示。App1 执行以下操作：\n直接通过 Azure OpenAI Responses API 将提示发送到模型在同一请求中通过 Foundry 连接调用 Azure AI 内容安全工具您需要配置请求工作流每个步骤的端到端可见性。\n您应该怎么做？",
   "options": {
    "A": "使用内容安全的客户端 SDK 启用日志记录。",
    "B": "使用 Foundry Local 启用日志记录。",
    "C": "在 Project1 中启用应用程序追踪。",
    "D": "通过 Azure OpenAI 端点路由请求。"
   },
   "explanation": "说明：\n要配置请求工作流每个步骤的端到端可见性，您应该在项目中启用应用程序追踪。\n\n项目级可观察性：启用应用程序追踪允许 Microsoft Foundry 原生跟踪、追踪，并监控工作流的每个组件——包括对 Azure OpenAI Responses API 的调用和相关工具（如 Azure AI 内容安全）——在同一请求中，无需复杂的、      单独的 SDK 配置。\n\n集中跟踪：追踪捕获项目端点之间的确切执行路径，使您能够顺序查看模型调用和内容安全检查的指标、延迟以及输入/输出。"
  }
 },
 {
  "id": 74,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent. The agent uses threads and file uploads and calls an Azure OpenAI model deployment.\nDuring load testing, calls intermittently fall and return an HTTP 429 rate limit exceeded error. Some user uploads fail and generate an HTTP 400 file size exceeded error.\nYou need to mitigate the errors and reduce call failures. The solution must remain within the service and model limits.\nWhat should you do to resolve each error? To answer, drag the appropriate actions to the correct errors.\nEach action may be used once, more than once or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each comet selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Implement exponential backoff and jitter in the retry logic To remedy intermittent HTTP 429 rate limit errors while staying within service limits, you must implement a retry policy that uses exponential backoff and jitter.\n\nBecause the agent uses threads and file uploads, load testing triggers short-window concurrency spikes (bursting). Azure OpenAI evaluates rate limits in small slices (like 1- to 10-second windows), meaning overlapping file processing or concurrent thread steps will trigger a 429 even if your total Tokens-Per-\nMinute (TPM) or Requests-Per-Minute (RPM) look safe overall.\n\nBox 2: Split content into smaller files before uploading the files.\nInstead of uploading a large document in a single standard files.create request, utilize the Chunked Uploads REST API path. This splits the file payload on your client application layer before streaming it to Azure.\n\nNote: To resolve the HTTP 400 file size exceeded error in your Microsoft Foundry agent, you need to bypass the strict payload constraints of standard single-request uploads. In Azure OpenAI and Microsoft Foundry Agent architectures, a multipart standard upload has a rigid request body limit (typically 30 MB or 50 MB."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。该代理使用线程和文件上传，并调用 Azure OpenAI 模型部署。\n在负载测试期间，调用间歇性失败并返回 HTTP 429 速率限制超出错误。一些用户上传失败并生成 HTTP 400 文件大小超出错误。\n您需要减轻错误并减少调用失败。解决方案必须保持在服务和模型限制内。\n您应该如何解决每个错误？要回答，请将适当的操作拖动到正确的错误上。\n每个操作可以使用一次、使用多次或根本不使用。您可能需要拖动面板之间的分隔条或滚动以查看内容。\n注意： 每个彗星选择值为一分。",
   "options": {},
   "explanation": "框 1：在重试逻辑中实现指数退避和抖动为了在保持在服务限制内的同时解决间歇性 HTTP 429 速率限制错误，您必须实现使用指数退避和抖动的重试策略。\n\n由于代理使用线程和文件上传，负载测试会触发短时间的并发峰值（突发）。Azure OpenAI 在小时间段内（如 1 到 10 秒的窗口）评估速率限制，这意味着重叠的文件处理或并发线程步骤将触发 429，即使您的总每分钟令牌数（TPM）或每分钟请求数（RPM）看起来总体安全。\n\n框 2：在上传文件之前将内容拆分为较小的文件。\n不要在单个标准 files.create 请求中上传大型文档，而是利用分块上传 REST API 路径。这会在您的客户端应用程序层拆分文件负载，然后再将其流式传输到Azure。\n\n注意：要解决 Microsoft Foundry 代理中的 HTTP 400 文件大小超出错误，您需要绕过标准单请求上传的严格负载限制。在 Azure OpenAI 和 Microsoft Foundry 代理架构中，多部分标准上传有一个严格的请求体限制（通常为 30 MB 或 50 MB）。"
  },
  "sources_en": [
   "Increase tenant-wide quotas.",
   "Move large content to files and use file search.",
   "Use additional agent tools to reduce the message size.",
   "Implement exponential backoff and jitter in the retry logic.",
   "Split content into smaller files before uploading the files."
  ],
  "sources_zh": [
   "增加租户范围的配额。",
   "将大型内容移动到文件并使用文件搜索。",
   "使用额外的代理工具来减小消息大小。",
   "在重试逻辑中实现指数退避和抖动。",
   "在上传文件之前将内容拆分为较小的文件。"
  ],
  "targets": [
   {
    "label_en": "HTTP 429:",
    "label_zh": "HTTP 429：",
    "correct_en": "Implement exponential backoff and jitter in the retry logic.",
    "correct_zh": "在重试逻辑中实现指数退避和抖动。"
   },
   {
    "label_en": "HTTP 400:",
    "label_zh": "HTTP 400：",
    "correct_en": "Split content into smaller files before uploading the files.",
    "correct_zh": "在上传文件之前将内容拆分为较小的文件。"
   }
  ]
 },
 {
  "id": 75,
  "section": "Implement generative AI and agentic solutions",
  "sectionZh": "实施生成式人工智能和基于代理的解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents.\nYou need to improve response completeness. The solution must be implemented in the logic of the application code before responses are returned.\nWhat should you do?",
   "options": {
    "A": "Add a retry evaluation before the responses are returned.",
    "B": "Decrease the value of the temperature parameter.",
    "C": "Increase the value of the presence_penalty parameter",
    "D": "Replace the model with a smaller deployment."
   },
   "explanation": "You should implement an evaluation and retry loop in your application code.\n\nYou must wrap the agent call inside a conditional code loop that evaluates the output against required criteria (such as a checklist of regulatory clauses), and programmatically forces a retry if information is omitted."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。该代理从检索到的政策文件中生成摘要。\n您需要提高响应的完整性。解决方案必须在应用程序代码的逻辑中实现，然后才能返回响应。\n您应该怎么做？",
   "options": {
    "A": "在返回响应之前添加重试评估。",
    "B": "降低 temperature 参数的值。",
    "C": "增加 presence_penalty 参数的值",
    "D": "用更小的部署替换模型。"
   },
   "explanation": "说明：\n您应该在应用程序代码中实现评估和重试循环。\n\n您必须将代理调用包装在一个条件代码循环中，该循环根据所需的标准（例如监管条款的检查清单）评估输出，并在信息被省略时程序性地强制重试。"
  }
 },
 {
  "id": 76,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": true,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You need to ensure that the marketing department can generate videos by using the model deployed to\nProject2.\nHow should you complete the Python code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: create client.videos.create(...) initializes the generation job. This returns a video object containing a unique id and a status of \"queued\" or \"in_progress\".\n\nBox 2: retrieve client.videos.retrieve(video.id) refreshes the video object state from the server by fetching its updated completion progress and status until it finishes",
   "scenario": "Implement computer vision solutions\n\nTestlet 1\n\nCase Study\n\nThis is a case study. Case studies are not timed separately from other exam sections. You can use as much exam time as you would like to complete each case study. However, there might be additional case studies or other exam sections. Manage your time to ensure that you can complete all the exam sections in the time provided. Pay attention to the Exam Progress at the top of the screen so you have sufficient time to complete any exam sections that follow this case study.\n\nTo answer the case study questions, you will bed to reference information that is provided in the case.\nCase studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.\n\nA Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.\n\nTo start the case study\n\nTo display the first question in this case study, select the “Next” button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the “Question” button to return to the question.\n\nOverview\n\nCompany Information\n\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-\nbased solutions by using Microsoft Foundry.Existing Environment\n\nIdentity Environment\n\nContoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.\n\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\n\nThe team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications.\n\nContoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.\n\nGenerative Environment\n\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\n\nProject1\n\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\n\nAgent1 has the following configurations:\n\nAgent1 uses a base model deployment.\nA safety evaluation pipeline is NOT enabled.\n\nTool invocation approval workflows are NOT enabled.\nConversation memory constraints are NOT configured.\n\nAgent1 interacts with customers by using digital support channels and answers general questions about Contoso products.\n\nProject1 is deployed to an Azure region located in the European Union (EU).\n\nAgent1Dev Team will use Project1 to optimize and maintain Agent1.\n\nProject2\n\nProject2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.\n\nDevelopment of the solution is incomplete.\n\nData Environment\n\nContoso stores product-related information in Azure resources that support AI applications.\n\nThe Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nThe product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\n\nContoso identifies the following issues:\n\nAgent1 has only general knowledge of the Contoso products.\nA recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet.\nAgent1 does NOT use the detailed product information in the product sheets stored in storage1 when   responding to customer questions.\nThe finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n\nRequirements\n\nPlanned Changes\n\nContoso plans to implement the following changes:\n\nImplement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.\nUpdate the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\nEnable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.\nImplement an indexing solution for the product sheets that Agent1 can use to answer customer questions.\nComplete the development of the video creation solution.\n\nTechnical Requirements\n\nContoso identifies the following technical requirements:\n\nThe model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\n\nThe product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\nResponses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product details.\nThe model version used by Agent1 must remain consistent to ensure stable responses.\nThe data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\n\nContoso identifies the following security and compliance requirements:\n\nAPI keys must NOT be used to access Foundry-deployed models.\nAccess to the Azure resources must follow the principle of least privilege.\nThe developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.\nAccess to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.\nAccess to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test.\nAgent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\nThe product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.\n\nBusiness Requirements\n\nContoso identifies the following business requirements:\n\nUsers that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\nAgent1 must answer questions only about the products sold by Contoso."
  },
  "zh": {
   "stem": "您需要确保市场部门能够使用部署到\nProject2 的模型生成视频。\n您应该如何完成 Python 代码？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：创建client.videos.create(...) 初始化生成作业。这将返回一个包含唯一 ID 和“排队”或“进行中”状态的视频对象。\n\n框 2：检索client.videos.retrieve(video.id) 从服务器刷新视频对象状态，通过获取其更新的完成进度和状态，直到完成",
   "scenario": "实施计算机视觉解决方案\n\n测试单元 1\n\n案例研究\n\n这是一个案例研究。 案例研究的计时与其他考试部分不分开。您可以使用尽可能多的考试时间来完成每个案例研究。然而，可能会有额外的案例研究或其他考试部分。管理您的时间，以确保您能够在提供的时间内完成所有考试部分。请注意屏幕顶部的考试进度，以确保您有足够的时间完成此案例研究后面的任何考试部分。\n\n要回答案例研究问题，您需要参考案例中提供的信息。\n案例研究及相关问题可能包含展览或其他资源，提供有关案例中描述的场景的更多信息。 单个问题中提供的信息不适用于案例研究中的其他问题。\n\n在此案例研究结束时，将出现复查界面。从复查界面，您可以在进入下一个考试部分之前查看和更改您的答案。离开此案例研究后，您将无法返回。\n\n要开始案例研究\n\n要显示本案例研究中的第一个问题，请选择“下一步”按钮。在问题左侧，菜单提供了链接到信息的内容，例如业务需求、现有环境和问题陈述。在回答任何问题之前，请仔细阅读所有这些信息。当您准备好回答问题时，请选择“问题”按钮以返回问题。\n\n概述\n\n公司信息\n\nContoso 有限公司是一家跨国零售公司，通过使用 Microsoft Foundry 构建、部署和管理生成式人工智能和基于代理的解决方案。      现有环境\n\n身份环境\n\nContoso 使用 Microsoft Entra ID 进行身份管理、身份验证和授权功能，使代理能够访问组织资源和服务。\n\nContoso 最近成立了一个名为 Agent1Dev 团队的新 AI 工程团队，以优化和维护现有的 AI 解决方案。\n\n该团队与解决方案架构师、DevOps 工程师和安全工程师合作，设计、实施、监控和保护 AI 应用程序。\n\nContoso 还有一个名为 Agent1Test 团队的团队，负责在解决方案部署之前验证 AI 解决方案。\n\n生成环境\n\nContoso 有一个 Microsoft Foundry 部署，其中包含两个项目，分别名为 Project1 和 Project2。\n\n项目1\n\nProject1 包含一个名为 Agent1 的客户支持代理，帮助客户处理产品咨询和故障排除请求。\n\nAgent1 具有以下配置：\n\nAgent1 使用基础模型部署。\n安全评估流水线未启用。\n\n工具调用审批工作流未启用。\n对话记忆约束未配置。\n\nAgent1 通过数字支持渠道与客户互动，并回答有关Contoso 产品的一般问题。\n\nProject1 部署在位于欧盟 (EU) 的 Azure 区域。\n\nAgent1Dev 团队将使用 Project1 来优化和维护 Agent1。\n\n项目2\n\nProject2 包含一个已部署的视频生成模型。Contoso 的市场部门可以访问 Project2，并计划使用该模型开发视频创作解决方案。\n\n该解决方案的开发尚未完成。\n\n数据环境\n\nContoso 在支持 AI 应用的 Azure 资源中存储与产品相关的信息。\n\nAzure 环境包含一个名为 storage1 的 Azure Blob 存储帐户，该帐户存储所有 Contoso 产品的产品详细信息表。\n\n产品说明书包括规格、功能描述和产品支持信息，\nAgent1 可以用来回答客户问题。产品说明书以 PDF 格式存储。\n\n问题陈述\n\nContoso 确定了以下问题：\n\nAgent1 对 Contoso 产品的了解仅限于一般知识。\n最近与 Agent1 的聊天互动进行了情感分析。分析结果尚未 处理。\n\nAgent1 在回答客户问题时 不 使用存储在 storage1 中的产品说明书中的详细产品信息。\nContoso 的财务部门报告称，供应商发票必须手动审核，以确保发票与供应商合同中定义的条款相符。发票包含表格、徽标，以及各种布局，使得文档难以一致地处理。\n\n需求\n\n计划变更\n\nContoso 计划实施以下变更：\n\n为 Project1 实施一个解决方案，通过评估发票的视觉布局和文本内容来分析供应商发票，以便能够根据供应商合同条款验证发票细节。\n更新 Agent1 使用的基础模型部署，并标准化模型版本以确保连续性和一致的响应。\n启用 Agent1 从存储在storage1 中的产品表中检索和使用详细的产品信息。\n为产品表实施一个索引解决方案，以便 Agent1 可以用来回答客户问题。\n完成视频创作解决方案的开发。\n\n技术要求\n\nContoso 确定了以下技术要求：\n\nAgent1 使用的模型部署必须支持可扩展的高吞吐量生成式人工智能工作负载，并能够动态扩展以处理可变的客户支持流量，而无需预留吞吐量容量。\n\n产品表必须通过使用索引流水线进行处理，以支持语义和向量搜索，以便 Agent1 可以检索相关的产品信息。\n使用产品表信息生成的响应必须相关、完整且准确。\nAgent1 必须能够使用产品表回答有关产品详细信息的自然语言问题。\nAgent1 使用的模型版本必须保持一致，以确保稳定的响应。\n模型处理的数据必须保留在欧盟内。\n\n安全和合规要求\n\nContoso 确定了以下安全和合规要求：\n\nAPI 密钥必须 不 用于访问部署在 Foundry 上的模型。\n访问 Azure 资源必须遵循最小权限原则。\nContoso 的开发人员必须使用 Microsoft Entra 身份验证来访问 Microsoft Foundry 资源。\n\n访问 Project1 必须通过名为 SC_Agent1_Dev 的安全组分配给 Agent1Dev 团队的成员。\n\n访问 Project1 必须通过名为 SC_Agent1_Test 的安全组分配给 Agent1Test 团队的成员。\n\nAgent1 绝不能泄露客户信息，即使包含客户数据的文档错误地添加到 storage1 的产品表存储库中。\n产品表可能包含嵌入文本的图像。Agent1 必须受到保护，以防止潜在隐藏在图像中的恶意指令。\n\n业务需求\n\nContoso 确定了以下业务需求：\n\n与 Agent1 互动的用户必须在未来的互动中拥有个性化体验，包括 Agent1 能够保留对话上下文并回忆之前互动中的相关信息。\n\nAgent1 只能回答有关 Contoso 销售的产品的问题。"
  },
  "boxes": [
   {
    "prompt_en": "video = client.videos.",
    "prompt_zh": "video = client.videos.",
    "options_en": [
     "create",
     "download_content",
     "list",
     "retrieve"
    ],
    "options_zh": [
     "create",
     "download_content",
     "list",
     "retrieve"
    ],
    "correct_en": "create",
    "correct_zh": "create"
   },
   {
    "prompt_en": "video = client.videos.___(video.id)",
    "prompt_zh": "video = client.videos.___(video.id)",
    "options_en": [
     "create",
     "download_content",
     "list",
     "retrieve"
    ],
    "options_zh": [
     "create",
     "download_content",
     "list",
     "retrieve"
    ],
    "correct_en": "retrieve",
    "correct_zh": "retrieve"
   }
  ],
  "code": {
   "lang": "python",
   "text": "import time\nfrom openai import OpenAI\n\nclient = OpenAI(\n    base_url=\"https://Contoso.openai.azure.com/openai/v1/\",\n    api_key=...,\n)\n\nvideo = client.videos.[[1]](\n    model=deployment_name,\n    prompt=\"A video of our products\",\n)\n\nwhile video.status not in [\"completed\", \"failed\", \"cancelled\"]:\n    time.sleep(20)\n    video = client.videos.[[2]](video.id)\n\nprint(video.status)"
  }
 },
 {
  "id": 77,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You are creating an image-editing workflow in a Microsoft Foundry project.\nThe workflow must meet the following requirements:\nEnsure that background objects can be removed by applying a mask-based inpainting edit.\nPreserve the original lighting and style of the edited images.\nUse the built-in image editing controls, NOT a custom model.\nYou need to ensure that image edits apply exclusively inside the masked area.\nHow should you configure the workflow?",
   "options": {
    "A": "Set generation mode to image_variation and provide the original image as a reference.",
    "B": "Enable text_to_image mode and a prompt describing the desired background removal.",
    "C": "Enable image_to_image mode and a high-strength value to regenerate the full image based on the prompt.",
    "D": "Enable mask_inpainting and supply both the input image and a mask indicating which part of the image to modify."
   },
   "explanation": "You should enable mask_inpainting and supply both the input image and the mask to meet all the criteria for your Microsoft Foundry image-editing workflow.\n\nBy utilizing Microsoft Foundry’s built-in Image Generation Tool parameters, configuring the workflow this way ensures the desired edits are perfectly executed.\nWorkflow Configuration Requirements Mask-Based Object Removal: Passing the mask parameter explicitly flags the exact background object regions targeted for removal, replacing them seamlessly.\n\nPreserving Style and Lighting: Enabling mask_inpainting prompts the underlying built-in model (such as gpt-image-2) to inherit and maintain the exact lighting, textures, and style of the surrounding unmasked environment.\n\nBuilt-In Controls Only: This is entirely handled natively via the Foundry Agent Service API variables without deploying a single line of custom code or third-party model checkpoints.\n\nTargeted Area Enforcement: The system relies on the provided mask array to ensure pixels outside the marked coordinates are kept completely untouched and protected from VAE degradation."
  },
  "zh": {
   "stem": "您正在 Microsoft Foundry 项目中创建图像编辑工作流。\n工作流程必须满足以下要求：\n确保可以通过应用基于掩膜的修复编辑来移除背景对象。\n保留编辑图像的原始光照和风格。\n使用内置的图像编辑控件，而不是自定义模型。\n您需要确保图像编辑仅在掩膜区域内应用。\n您应该如何配置工作流程？",
   "options": {
    "A": "将生成模式设置为image_variation，并提供原始图像作为参考。",
    "B": "启用text_to_image模式，并提供描述所需背景移除的提示。",
    "C": "启用image_to_image模式，并设置高强度值以根据 提示重新生成完整图像。",
    "D": "启用mask_inpainting，并提供输入图像和指示要修改的 图像部分的掩膜。"
   },
   "explanation": "您应该启用 mask_inpainting，并提供输入图像和掩码，以满足您 Microsoft Foundry 图像编辑工作流的所有标准。\n\n通过利用 Microsoft Foundry 内置的图像生成工具参数，以这种方式配置工作流可确保所需的编辑被完美执行。\n工作流配置要求基于掩码的对象移除：显式传递掩码参数标记了目标移除的确切背景对象区域，无缝替换它们。\n\n保持风格和光照：启用 mask_inpainting 提示使得底层内置模型（如gpt-image-2）能够继承并保持周围未遮罩环境的确切光照、纹理和风格。\n\n仅限内置控制：这完全通过 Foundry Agent Service API 变量本地处理，无需部署一行自定义代码或第三方模型检查点。\n\n目标区域强制执行：系统依赖提供的遮罩数组，以确保标记坐标之外的像素完全不受影响，并保护免受VAE 降级。"
  }
 },
 {
  "id": 78,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that generates product marketing images from text prompts.\nAfter publishing several images, the legal team at your company identifies a competitor’s logo on a sign in the background of an image.\nYou need to remove only the logo, while preserving the rest of the image.\nWhat should you do?",
   "options": {
    "A": "Apply a mask-based inpainting edit to the part of the image that contains the logo.",
    "B": "Increase the prompt guidance strength.",
    "C": "Modify the original prompt to exclude brand names.",
    "D": "Rerun the prompt by using a different random seed."
   },
   "explanation": "To remove a logo from a generated image while preserving the rest of the content, you should use AI-\npowered inpainting tools or standard object removal features in professional image editing software.\n\nMicrosoft Designer or Azure AI (In-Engine Fixes) If your Foundry project is built on top of Azure OpenAI Service or Dall-E, you can often handle this programmatically or through related first-party tools.\n\nGenerative Erase / Inpainting: Use Microsoft Designer's \"Erase\" tool. Brush over the logo, and the AI will replace it by seamlessly blending the background.\n\nAPI Inpainting: If you have access to the underlying image generation API (like DALL-E 3 or Stable Diffusion), use the Inpainting API. Pass the original image along with a black-and-white mask highlighting the logo, and prompt it to \"fill the background naturally.\""
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，从文本提示生成产品营销图像。\n在发布几张图像后，您公司的法律团队在一张图像的背景中识别出竞争对手的标志。\n您需要仅删除该标志，同时保留图像的其余部分。\n您应该怎么做？",
   "options": {
    "A": "对包含标志的图像部分应用基于遮罩的修复编辑。",
    "B": "增加提示引导强度。",
    "C": "修改原始提示以排除品牌名称。",
    "D": "使用不同的随机种子重新运行提示。"
   },
   "explanation": "要从生成的图像中移除徽标，同时保留其余内容，您应该使用 AI-\n驱动的修复工具或专业图像编辑软件中的标准物体移除功能。\n\nMicrosoft Designer 或 Azure AI（引擎内修复）如果您的 Foundry 项目建立在 Azure OpenAI 服务或 Dall-E 之上，您通常可以通过编程或相关的第一方工具来处理此问题。\n\n生成式擦除 / 修复：使用 Microsoft Designer 的“擦除”工具。刷过徽标，AI 将通过无缝融合背景来替换它。\n\nAPI 修复：如果您可以访问底层图像生成 API（如 DALL-E 3 或 StableDiffusion），请使用修复 API。传递原始图像以及突出徽标的黑白掩码，并提示它“自然填充背景”。"
  }
 },
 {
  "id": 79,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent.\nThe agent ingests scanned PDF vendor invoices that contain tables and embedded QR codes.\nThe agent must preserve the PDF layout in the extracted output to ensure that downstream processing canreference sections and tables.\nYou plan to call Azure Content Understanding in Foundry Tools.\nYou need to extract content and layout elements and detect QR codes without requiring a language model deployment.\nWhich built-in analyzer should you use?",
   "options": {
    "A": "prebuilt-documentFieldSchema",
    "B": "prebuilt-read",
    "C": "prebuilt-documentSearch",
    "D": "prebuilt-layout"
   },
   "explanation": "To extract content, preserve tables and document layout, and detect embedded QR codes without deploying a large language model (LLM), you should use the built-in prebuilt-layout analyzer.\n\nNote:\nUnlike schema-driven extraction models in Content Understanding that utilize generative AI orchestration, the Layout analyzer is a highly efficient machine-learning-based model. It natively outputs structural geometry and decodes barcodes without requiring an active LLM deployment or provisioned throughput.\n\nStructural Preservation: It extracts headers, paragraphs, and nested sections, returning precise spatial bounding boxes for every single element. Downstream agents can utilize this geometric metadata to anchor or cross-reference sections accurately.\n\nAdvanced Table Mapping: It maps intricate, multi-page invoice tables, capturing text alongside row and column indices. You can configure the output structure format natively into Markdown or HTML tables to maintain formatting cleanliness.\n\nBuilt-in QR and Barcode Decoding: By default, the configuration parameter enableBarcode is set to true.\nThe analyzer scans the scanned PDF image, isolates 2D code regions, and appends the decoded string payload into the output JSON alongside text blocks.\n\nZero LLM Dependency: It does not route text to foundational models like GPT-4o for its extraction, keeping processing latency low and lowering operational costs significantly."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。\n代理处理包含表格和嵌入式二维码的扫描 PDF 供应商发票。\n代理必须在提取的输出中保留 PDF 布局，以确保下游处理可以      引用部分和表格。\n您计划在 Foundry 工具中调用 Azure 内容理解。\n您需要提取内容和布局元素，并检测二维码，而无需部署语言模型。\n您应该使用哪个内置分析器？",
   "options": {
    "A": "预构建文档字段架构",
    "B": "预构建读取",
    "C": "预构建文档搜索",
    "D": "预构建布局"
   },
   "explanation": "要提取内容、保留表格和文档布局，并检测嵌入的二维码而不需要\\ 部署大型语言模型（LLM），您应该使用内置的预构建布局分析器。\n\n注意：\n与内容理解中利用生成式人工智能编排的基于模式的提取模型不同，布局分析器是一个高效的基于机器学习的模型。它本地输出结构几何，并解码条形码，而无需激活 LLM 部署或预配置吞吐量。\n\n结构保留：它提取标题、段落和嵌套部分，为每个元素返回精确的空间边界框。下游代理可以利用这些几何元数据准确地锚定或交叉引用部分。\n\n高级表格映射：它映射复杂的多页发票表格，捕获文本以及行和列索引。您可以将输出结构格式本地配置为 Markdown 或 HTML 表格，以保持格式的整洁。\n\n内置二维码和条形码解码：默认情况下，配置参数 enableBarcode 设置为 true。\n分析器扫描扫描的 PDF 图像，隔离 2D 代码区域，并将解码的字符串有效负载附加到输出 JSON 中的文本块旁边。\n\n零 LLM 依赖性：它不会将文本路由到像 GPT-4o 这样的基础模型进行提取，从而保持处理延迟低并显著降低运营成本。"
  }
 },
 {
  "id": 80,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent and an image generation model deployment.\nThe agent generates original images from user-supplied product photos.\nYou need to ensure that the generated images maintain the product identity and visual characteristics of the provided photo.\nWhat should you do?",
   "options": {
    "A": "Set the input_fidelity parameter to high.",
    "B": "Apply a groundedness detection filter.",
    "C": "Include a prompt and input image in the request.",
    "D": "Decrease the value of the temperature parameter."
   },
   "explanation": "You should set the input_fidelity parameter to \"high\" in this scenario.\n\nIn Microsoft Foundry (built on Azure AI Foundry), the input_fidelity parameter specifically dictates how strictly the image generation model adheres to the visual features, layout, and style of the source image.\n\nWhy \"high\" is the Correct Choice Preserves Product Identity: Setting input_fidelity=\"high\" ensures that critical branding details, logos, structures, and product contours are preserved exactly as they appear in the original photo.\n\nDesigned for E-commerce: Microsoft explicitly designed this setting for e-commerce, commercial marketing assets, and product photography to prevent the model from hallucinating or altering key product characteristics.\n\nModel Support: This parameter is natively supported when configuring agent image generation tools (such as the ImageGenerationTool or ImageGenTool classes in the Foundry Agent Service) leveraging advanced models like GPT-image-1 or GPT-image-2."
  },
  "zh": {
   "stem": "您有一个包含代理和图像生成模型部署的 Microsoft Foundry 项目。\n该代理从用户提供的产品照片生成原始图像。\n您需要确保生成的图像保持提供的照片的产品身份和视觉特征。\n您应该怎么做？",
   "options": {
    "A": "将 input_fidelity 参数设置为 high。",
    "B": "应用一个基础检测过滤器。",
    "C": "在请求中包含提示和输入图像。",
    "D": "降低 temperature 参数的值。"
   },
   "explanation": "在这种情况下，您应该将 input_fidelity 参数设置为 \"high\"。\n\n在 Microsoft Foundry（基于 Azure AI Foundry 构建）中，input_fidelity 参数专门规定了图像生成模型在多大程度上严格遵循源图像的视觉特征、布局和风格。\n\n为什么“高”是正确的选择保持产品身份：设置 input_fidelity=\"high\" 确保关键品牌细节、标志、结构和产品轮廓与原始照片中的完全一致。\n\n为电子商务设计：微软明确为电子商务、商业营销资产和产品摄影设计了此设置，以防止模型产生幻觉或改变关键产品特征。\n\n模型支持：在配置代理图像生成工具（如 Foundry Agent Service 中的 ImageGenerationTool 或 ImageG enTool 类）时，原生支持此参数，利用像 GPT-image-1 或 GPT-image-2 这样的高级模型。"
  }
 },
 {
  "id": 81,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent.\nThe agent accepts user-uploaded screenshots and uses a multimodal chat model.\nSome screenshots contain potentially malicious embedded text.\nYou need to prevent a prompt injection attack and ensure that third-party content is treated as lower trust.\nHow should you configure prompt shields for document attacks? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "To prevent indirect prompt injection from malicious embedded text in user-uploaded screenshots, the Prompt Shield action must be set to \"block\" and Spotlighting should be enabled.\n\nBox 1: Set action to block Prompt shield action\n\nRecommended Azure AI Foundry Configuration To handle untrusted, third-party content within a Microsoft Foundry agent using a multimodal chat model, configure your Guardrails and Content Filters as follows:\n\n1. Risk Dropdown Selection: Select Document attack. Document attacks target hidden instructions embedded in external content like documents, images, or files.\n\n*-> 2. Prompt Shield Action: Set the action to Block. While \"Annotate\" flags the vulnerability for downstream handling, \"Block\" stops the injection attempt in real-time before the text reaches the model session.\n\nBox 2: Enable spotlighting\n\nAdditional mitigation\n\n3. Spotlighting Toggle: Enable Spotlighting. This technique transforms untrusted text to give the model a continuous signal of its source. It treats the extracted screenshot text as lower trust relative to the system prompt, preventing hidden commands from executing."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。\n代理接受用户上传的截图，并使用多模态聊天模型。\n一些截图可能包含恶意嵌入文本。\n您需要防止提示注入攻击，并确保第三方内容被视为低信任。\n您应该如何配置文档攻击的提示保护？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "为了防止用户上传的截图中恶意嵌入文本的间接提示注入，提示保护操作必须设置为“阻止”，并应启用聚焦功能。\n\n框 1：设置操作为阻止提示屏蔽操作\n\n推荐的 Azure AI Foundry 配置要在使用多模态聊天模型的 Microsoft Foundry 代理中处理不受信任的第三方内容，请按如下方式配置您的护栏和内容过滤器：\n\n1. 风险下拉选择：选择文档攻击。文档攻击针对嵌入在外部内容（如文档、图像或文件）中的隐藏指令。\n\n*-> 2. 提示屏蔽操作：将操作设置为阻止。虽然“注释”会标记漏洞以供后续处理，但“阻止”会在文本到达模型会话之前实时停止注入尝试。\n\n框 2：启用聚光灯\n\n额外缓解措施\n\n3. 聚光灯切换：启用聚光灯。该技术将不受信任的文本转换，以便为模型提供其来源的持续信号。它将提取的屏幕截图文本视为相对于系统提示的低信任，从而防止隐藏命令的执行。"
  },
  "boxes": [
   {
    "prompt_en": "Prompt shields action:",
    "prompt_zh": "提示防护操作：",
    "options_en": [
     "Disable the shield.",
     "Set action to block.",
     "Set action to annotate."
    ],
    "options_zh": [
     "禁用防护。",
     "将操作设置为阻止。",
     "将操作设置为注释。"
    ],
    "correct_en": "Set action to block.",
    "correct_zh": "将操作设置为阻止。"
   },
   {
    "prompt_en": "Additional mitigation:",
    "prompt_zh": "其他缓解措施：",
    "options_en": [
     "Enable Spotlighting.",
     "Create a custom blocklist.",
     "Use optical character recognition (OCR) to extract the text from the images first."
    ],
    "options_zh": [
     "启用聚焦。",
     "创建自定义阻止列表。",
     "先使用光学字符识别 (OCR) 从图像中提取文本。"
    ],
    "correct_en": "Enable Spotlighting.",
    "correct_zh": "启用聚焦。"
   }
  ]
 },
 {
  "id": 82,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You are deploying a support agent that enables users to upload photos.\nYou need to automatically classify uploaded images for harmful content. The solution must block content based on severity levels.\nWhat should you do?",
   "options": {
    "A": "Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry Tools.",
    "B": "Enable prompt shields.",
    "C": "Use blocklists.",
    "D": "Implement image moderation."
   },
   "explanation": "The best solution in this scenario is to implement image moderation.\n\nAzure AI Content Safety provides dedicated image moderation capabilities that automatically detect, classify, and score harmful visual content (such as violence, hate speech, sexual content, and self-harm).\nIt natively allows you to configure threshold blocklists based on four severity levels (Low, Medium, High),perfectly matching the requirements.\n\nIncorrect:\n[Not A] Optical Character Recognition (OCR) only extracts text embedded within an image. If a user uploads a harmful photo that contains no text (e.g., a violent image), OCR and keyword scanning will completely fail to detect it.\n\n[Not B] The Prompt shields feature is designed to protect generative AI models from text-based attacks, such as jailbreaking or prompt injection. It does not analyze or classify the visual pixels of an uploaded photo for harmful content.\n\n[Not C] While Azure AI Content Safety uses blocklists, standard text blocklists match specific exact terms or regex patterns. They are used for text moderation, not for evaluating the severity levels of raw visual imagery."
  },
  "zh": {
   "stem": "您正在部署一个支持代理，允许用户上传照片。\n您需要自动分类上传的图像以检测有害内容。该解决方案必须根据严重性级别阻止内容。\n您应该怎么做？",
   "options": {
    "A": "使用 Azure Vision 在 Foundry Tools 中对光学字符识别 (OCR) 输出应用关键字扫描。",
    "B": "启用提示保护。",
    "C": "使用黑名单。",
    "D": "实施图像审核。"
   },
   "explanation": "在这种情况下，最佳解决方案是实施图像审核。\n\nAzure AI 内容安全提供专门的图像审核功能，能够自动检测、分类和评分有害的视觉内容（如暴力、仇恨言论、色情内容和自残）。\n它本地允许您根据四个严重性级别（低、中、高）配置阈值黑名单，完美匹配要求。\n\n不正确：\n[不适用 A]光学字符识别 (OCR) 仅提取嵌入图像中的文本。如果用户上传一张不包含文本的有害照片（例如，暴力图像），OCR 和关键字扫描将完全无法检测到它。\n\n[不是 B]提示保护功能旨在保护生成式 AI 模型免受基于文本的攻击，例如越狱或提示注入。它不会分析或分类上传照片的视觉像素以检测有害内容。\n\n[非 C]虽然 Azure AI 内容安全使用黑名单，但标准文本黑名单匹配特定的确切术语或正则表达式模式。它们用于文本审核，而不是用于评估原始视觉图像的严重性级别。"
  }
 },
 {
  "id": 83,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have an app named App1 that uses a Microsoft Foundry multimodal model deployment.\nApp1 runs optical character recognition (OCR) on uploaded images and appends the OCR output to the prompt as additional context.\nSome uploaded images contain embedded text.\nYou need to prevent potentially malicious instructions from being processed by the model.\nWhat should you use?",
   "options": {
    "A": "image moderation",
    "B": "prompt shields for documents",
    "C": "protected material text",
    "D": "prompt shields for user prompts"
   },
   "explanation": "To prevent potentially malicious instructions embedded within untrusted external sources (such as text extracted from uploaded images via OCR) from being processed by the model, you should use Prompt Shields for Documents (specifically designed for Indirect Prompt Attacks or Cross-Domain Prompt Injections).\n\nKey Features to Implement Prompt Shields for Documents: This specific component of Azure AI Content Safety / Prompt Shields analyzes external data—like text pulled from files, emails, or OCR outputs—appended to the prompt. It identifies and neutralizes hidden adversarial instructions trying to trick the model into overriding its system protocols.\n\nSpotlighting: A native capability within Microsoft Foundry's Prompt Shields, Spotlighting uses advanced text-formatting techniques to separate valid user commands from the untrusted document text. This prevents the model from mistaking malicious instructions embedded inside the OCR output for instructions from the developer or end-user."
  },
  "zh": {
   "stem": "您有一个名为 App1 的应用程序，它使用 Microsoft Foundry 多模态模型部署。\nApp1 对上传的图像进行光学字符识别（OCR），并将 OCR 输出附加到提示中作为额外上下文。\n一些上传的图像包含嵌入的文本。\n您需要防止潜在的恶意指令被模型处理。\n您应该使用什么？",
   "options": {
    "A": "图像审核",
    "B": "文档的提示保护",
    "C": "受保护材料文本",
    "D": "用户提示的提示保护"
   },
   "explanation": "为了防止潜在的恶意指令（例如通过 OCR 从上传的图像提取的文本）被处理，您应该使用文档的提示保护（专门设计用于间接提示攻击或跨域提示注入）。\n\n实施的关键特性文档的提示保护：Azure AI 内容安全/提示保护的这个特定组件分析附加到提示的外部数据——例如从文件、电子邮件或 OCR 输出中提取的文本。它识别并中和试图欺骗模型以覆盖其系统协议的隐藏对抗性指令。\n\n聚焦：聚焦是 Microsoft Foundry 的 Prompt Shields 中的一项原生功能，使用先进的文本格式化技术将有效的用户命令与不受信任的文档文本分开。这防止模型将嵌入在 OCR 输出中的恶意指令误认为来自开发者或最终用户的指令。"
  }
 },
 {
  "id": 84,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project thatcontains an agent.\nYou need to process mixed-format documents that contain scanned text, tables, and multicolumn layouts.\nThe extracted content must preserve the document structure and be converted into the Markdown format for downstream reasoning.\nWhat should you configure first?",
   "options": {
    "A": "an Azure Language in Foundry Tools text analysis model deployment",
    "B": "a generative chat completion request",
    "C": "an Azure OpenAI Responses API call that uses a multimodal model",
    "D": "an Azure Content Understanding in Foundry Tools analyzer"
   },
   "explanation": "The first step should be an Azure Content Understanding analyzer within Microsoft Foundry Tools.\n\nThis specific tool is designed to handle the complexities in this scenario—scanned text, complex tables, and multi-column layouts—by converting unstructured documents into a structured Markdown format. This preserves the document's original hierarchy and structural relationships, which is critical for accurate downstream reasoning by an agent.\n\nIncorrect:\n[Not A]\n\nAzure Language is designed for text-based natural language processing (NLP) like sentiment analysis or PII redaction on raw text strings. It cannot parse scanned images, optical character recognition (OCR), tables, or complex multi-column visual layouts.\n\n[Not C] The first step in this specific Microsoft Foundry agent configuration should not be an Azure OpenAI Responses API call.While multimodal models can read images, they frequently hallucinate data, fail to capture complex multi-column reading orders, and degrade table structures when processing dense, mixed-format documents."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry项目。\n您需要处理包含扫描文本、表格和多列布局的混合格式文档。\n提取的内容必须保留文档结构，并转换为 Markdown 格式以便后续推理。\n您应该首先配置什么？",
   "options": {
    "A": "在 Foundry Tools 中部署 Azure 语言文本分析模型",
    "B": "生成式聊天完成请求",
    "C": "使用多模态模型的 Azure OpenAI 响应 API 调用",
    "D": "在 Foundry Tools 中的 Azure 内容理解分析器"
   },
   "explanation": "第一步应该是在 Microsoft Foundry Tools 中使用 Azure 内容理解分析器。\n\n这个特定工具旨在处理这种场景中的复杂性——扫描文本、复杂表格，和多列布局——通过将非结构化文档转换为结构化的 Markdown 格式。这保留了文档的原始层次结构和结构关系，这对于代理的准确后续推理至关重要。\n\n不正确：\n[不是 A]\n\nAzure 语言旨在处理基于文本的自然语言处理（NLP），如情感分析或对原始文本字符串的 PII 删除。它无法解析扫描图像、光学字符识别（OCR）、表格或复杂的多列视觉布局。\n\n[非 C]在此特定的 Microsoft Foundry 代理配置中，第一步不应是 Azure OpenAIResponses API 调用。虽然多模态模型可以读取图像，但它们经常会产生虚假数据，无法捕捉复杂的多列阅读顺序，并在处理密集的、混合格式的文档时降低表格结构的质量。"
  }
 },
 {
  "id": 85,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have an application that processes scanned PDF invoices. The invoices have varied layouts and include multipage tables.\nYou have a pipeline that uses optical character recognition (OCR) and extracts totals and invoice numbers.\nThe results are often incorrect because the document structure is ignored.\nYou need to implement a solution that provides OCR, layout analysis, and template-generalizing field extraction. The solution must NOT require training a custom model. The solution must minimize administrative effort.\nWhat should you include in the solution?",
   "options": {
    "A": "Azure Language in Foundry Tools",
    "B": "Azure Content Understanding in Foundry Tools",
    "C": "an Azure Machine Learning model"
   },
   "explanation": "The most appropriate solution is Azure Content Understanding in Foundry Tools.\n\nThe Azure Content Understanding service natively combines advanced Optical Character Recognition (OCR), deep layout analysis, and pre-built generative capabilities. It handles varied document structures, multi-page tables, and template-generalizing field extraction without requiring custom machine learning model training. It operates as a low-administration, out-of-the-box solution perfectly aligned with document intelligence needs.\n\nIncorrect:\n[Not A] Azure Language in Foundry Tools: Azure AI Language focuses primarily on unstructured text analytics, sentiment analysis, text summarization, and conversational capabilities. It lacks the built-in document layout analysis, table parsing, and visual OCR capabilities necessary to process complex scanned PDF invoice structures.\n\n[Not C] Azure Machine Learning model: Building, training, deploying, and managing a custom model in Azure Machine Learning requires significant data science expertise. This approach introduces high administrative overhead, complex infrastructure management, and manual pipeline maintenance, which violates the requirement for low administration."
  },
  "zh": {
   "stem": "您有一个处理扫描的 PDF 发票的应用程序。这些发票具有不同的布局，并包含多页表格。\n您有一个使用光学字符识别（OCR）并提取总额和发票号码的流水线。\n由于忽略了文档结构，结果通常是不正确的。\n您需要实施一个提供 OCR、布局分析和模板泛化字段提取的解决方案。该解决方案必须不需要训练自定义模型。该解决方案必须最小化管理工作量。\n您应该在解决方案中包含什么？",
   "options": {
    "A": "Foundry 工具中的 Azure 语言",
    "B": "Foundry 工具中的 Azure 内容理解",
    "C": "一个 Azure 机器学习模型"
   },
   "explanation": "最合适的解决方案是 Foundry 工具中的 Azure 内容理解。\n\nAzure 内容理解服务本地结合了先进的光学字符识别（OCR）、深度布局分析和预构建的生成能力。它处理各种文档结构、多页表格和模板泛化字段提取，而无需自定义机器学习模型训练。它作为一个低管理、开箱即用的解决方案，完美符合文档智能需求。\n\n不正确：\n[不是 A] Foundry 工具中的 Azure 语言：Azure AI 语言主要专注于非结构化文本分析、情感分析、文本摘要和对话功能。它缺乏处理复杂扫描 PDF 发票结构所需的内置文档布局分析、表格解析和视觉 OCR 功能。\n\n[非 C] Azure 机器学习模型：在 Azure 机器学习中构建、训练、部署和管理自定义模型需要大量数据科学专业知识。这种方法带来了高管理开销、复杂的基础设施管理和手动流水线维护，违背了低管理要求。"
  }
 },
 {
  "id": 86,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent.\nThe agent uses a knowledge source built from documents stored in Azure Blob Storage. The documents include digitally scanned PDFs that contain multipage tables.\nYou have an ingestion job that extracts only plain text, causing loss of table structure, headings, and page-\nnumber metadata.\nUsers frequently ask questions that require the retrieval of specific table rows across the pages.\nYou need to configure an ingestion job for a Retrieval Augmented Generation (RAG) pipeline that performs optical character recognition (OCR) on scanned PDFs, preserves tables and headings as structure-aware chunks, and stores page-number metadata with each chunk.\nHow should you configure the ingestion job?",
   "options": {
    "A": "Use advanced data parsing to reingest the documents.",
    "B": "Use OCR and page-level chunking.",
    "C": "Use page-level OCR extraction and store each page as a single chunk.",
    "D": "Use basic parsing and fixed-size chunking."
   },
   "explanation": "Use OCR and page-level chunking.\n\nStructure Preservation: OCR combined with document layout analysis (such as layout-aware or page-level chunking) detects visual structures like tables, headers, and reading order.\n\nRow-Level Granularity: Page-level chunking retains the boundaries and context of multipage tables, enabling the RAG system to isolate and retrieve specific rows effectively.\n\nMetadata Enrichment: Processing documents page-by-page allows the ingestion pipeline to automaticallytag each extracted text chunk with its sourcepage-number metadata.\n\nIncorrect:\n[not C] Use page-level OCR extraction and store each page as a single chunk:\nWhile this captures page numbers, storing an entire page as a single chunk introduces too much noise. It prevents the model from pinpointing specific table rows and often exceeds the optimal context window size for precise RAG retrieval.\n\n[Not D] Use basic parsing and fixed-size chunking:\nBasic parsing cannot read digitally scanned PDFs, resulting in empty or completely garbled text.\nFurthermore, fixed-size chunking splits text at arbitrary character limits, which destroys table structures and splits individual rows across different chunks."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。\n该代理使用基于存储在 Azure Blob 存储中的文档构建的知识源。文档包括包含多页表格的数字扫描 PDF。\n您有一个仅提取纯文本的摄取作业，导致表格结构、标题和页码元数据丢失。\n用户经常提出需要跨页检索特定表格行的问题。\n您需要配置一个用于检索增强生成（RAG）流水线的摄取作业，该作业对扫描的 PDF 执行光学字符识别（O CR），将表格和标题保留为结构感知的块，并将页码元数据与每个块一起存储。\n您应该如何配置数据摄取作业？",
   "options": {
    "A": "使用高级数据解析重新摄取文档。",
    "B": "使用光学字符识别（OCR）和页面级分块。",
    "C": "使用页面级OCR提取，并将每个页面存储为一个单独的块。",
    "D": "使用基本解析和固定大小的分块。"
   },
   "explanation": "使用光学字符识别（OCR）和页面级分块。\n\n结构保留：OCR结合文档布局分析（如布局感知或页面级分块）可以检测表格、标题和阅读顺序等视觉结构。\n\n行级粒度：页面级分块保留了多页表格的边界和上下文，使RAG系统能够有效地隔离和检索特定行。\n\n元数据丰富：逐页处理文档使摄取流水线能够自动      tag每个提取的文本块及其源页面编号元数据。\n\n不正确：\n[不是C]使用页面级 OCR 提取并将每个页面存储为单个块：\n虽然这可以捕获页码，但将整个页面存储为单个块会引入过多噪声。它阻止模型准确定位特定的表格行，并且通常超过了精确 RAG 检索的最佳上下文窗口大小。\n\n[不是 D]使用基本解析和固定大小的块：\n基本解析无法读取数字扫描的 PDF，导致文本为空或完全乱码。\n此外，固定大小的分块在任意字符限制处拆分文本，这会破坏表格结构并将单独的行分割到不同的块中。"
  }
 },
 {
  "id": 87,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent.\nThe agent uses Azure AI Search as the retriever.\nYou plan to ingest PDF into an Azure AI Search index to ensure that the agent can ground responses in texts in both documents and embedded images.\nUsers require citations that link to the source files.\nYou need to ensure that during indexing, the images are extracted into a structure that can be used as input for the built-in optical character recognition (OCR) skill.\nWhich indexing approach should you use?",
   "options": {
    "A": "an indexer to extract image data into a normalized_images collection",
    "B": "a Shaper skill to restructure the OCR input",
    "C": "a skillset to run the OCR skill directly against the content field of the index",
    "D": "the outputFieldMappings parameter to write image data to a searchable field"
   },
   "explanation": "The best configuration step an indexer to extract image data into a normalized_images collection.\n\nCracking Foundation: In Azure AI Search, document cracking automatically separates textual data from visual content. To make embedded images available to image-processing skills like OCR, the indexer must be explicitly configured with an imageAction configuration property (such as generateNormalizedImages or generateNormalizedImagePerPage).\n\nInput Structure for OCR: This indexer step extracts embedded images from the PDF and restructures them into an internal normalized_images array (accessed via the path /document/normalized_images/*). The built-in OCR skill strictly requires this normalized image collection format as its input payload.\n\nIncorrect:\n[Not C] Content Field Limitations: The /document/content field generated during document cracking holds only the raw text extracted from the file. It does not contain the binary data or structural properties of embedded images.\n\nTargeting Errors: Pointing an OCR skill directly at the raw text content field would fail to analyze the actual images, leaving the agent unable to ground answers in visual elements like diagrams or embedded infographics."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。\n该代理使用 Azure AI Search 作为检索器。\n您计划将 PDF 导入 Azure AI Search 索引，以确保代理能够在文档和嵌入图像中的文本中提供基于内容的响应。\n用户需要链接到源文件的引用。\n您需要确保在索引期间，图像被提取到可以用作内置光学字符识别 (OCR) 技能的输入的结构中。\n您应该使用哪种索引方法？",
   "options": {
    "A": "使用索引器将图像数据提取到 normalized_images 集合中",
    "B": "使用 Shaper 技能重构 OCR 输入",
    "C": "使用技能集直接对索引的内容字段运行 OCR 技能",
    "D": "使用 outputFieldMappings 参数将图像数据写入可搜索字段"
   },
   "explanation": "索引器提取图像数据到 normalized_images 集合的最佳配置步骤。\n\n文档破解：在 Azure AI Search 中，文档破解会自动将文本数据与视觉内容分离。为了使嵌入的图像可供像 OCR 这样的图像处理技能使用，索引器必须显式配置图像操作配置属性（例如 generateNormalizedImages 或generateNormalizedImagePerPage）。\n\nOCR 输入结构：此索引步骤从 PDF 中提取嵌入的图像，并将其重构为内部 normalized_images 数组（通过路径 /document/normalized_images/* 访问）。内置的 OCR 技能严格要求此规范化图像集合格式作为其输入负载。\n\n不正确：\n[非 C]内容字段限制：在文档破解过程中生成的 /document/content 字段仅包含从文件中提取的原始文本。它不包含嵌入图像的二进制数据或结构属性。\n\n目标错误：将 OCR 技能直接指向原始文本内容字段将无法分析实际图像，使代理无法在视觉元素（如图表或嵌入的信息图）中提供基于视觉的答案。"
  }
 },
 {
  "id": 88,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You are building an Azure AI Search indexing pipeline named Pipeline1 that ingests invoices stored in Azure Blob Storage. The invoices are stored as scanned images.\nYou need to enable users to search invoice data across the invoice fields.\nWhich built-in skill should you add to the skillset of Pipeline1?",
   "options": {
    "A": "Text Split",
    "B": "Text Translation",
    "C": "optical character recognition (OCR)",
    "D": "Image Analysis"
   },
   "explanation": "You should add the Azure Machine Learning OCR skill (historically known as the Microsoft.Skills.Vision.OcrSkill) to your skillset pipeline.\n\nText Extraction: Scanned images contain unsearchable pixels rather than text.\n\nData Ingestion: The OCR skill extracts the printed text and layout information from the images.\n\nDownstream Processing: It feeds raw text into subsequent skills (like Entity Recognition) or directly into your search index fields."
  },
  "zh": {
   "stem": "您正在构建一个名为 Pipeline1 的 Azure AI 搜索索引管道，该管道处理存储在 Azure Blob 存储中的发票。这些发票以扫描图像的形式存储。\n您需要使用户能够在发票字段中搜索发票数据。\n您应该向 Pipeline1 的技能集添加哪个内置技能？",
   "options": {
    "A": "文本拆分",
    "B": "文本翻译",
    "C": "光学字符识别 (OCR)",
    "D": "图像分析"
   },
   "explanation": "说明：\n您应该将 Azure 机器学习 OCR 技能（历史上称为 Microsoft.Skills.Vision.OcrSkil l）添加到您的技能集管道中。\n\n文本提取：扫描的图像包含不可搜索的像素而不是文本。\n\n数据摄取：OCR 技能从图像中提取打印文本和布局信息。\n\n下游处理：它将原始文本输入到后续技能（如实体识别）或直接输入到your 搜索索引字段中。"
  }
 },
 {
  "id": 89,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Foundry project that uses Azure Content Understanding in Foundry Tools to analyze marketing videos.\nVideo segmentation is enabled.\nYou need to configure an analyzer to output a generated JSON field that describes the color scheme of each video segment.\nHow should you configure the analyzer? To answer, drag the appropriate values to the correct targets.\nEach value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: string The Type (string): While you want the output schema to contain a description of the color palette or style, Azure Content Understanding schemas map the underlying data types using fundamental types like string, number, or array. The field will output the final result in the JSON response under a key like \"valueString\"\n\nBox 2: generate The Method (generate): The extract method is only used for pulling literal text exactly as it appears in content (such as speech-to-text transcripts or OCR). Because analyzing visual aesthetics and synthesizing descriptive text about a \"color scheme\" requires multimodal AI reasoning, you must use the generate method. This instructs the underlying model to analyze the segment and synthesize a completely new descriptive insight.\n\nReferences:\nhttps://learn.microsoft.com/en-us/azure/ai-services/content-understanding/video/elements"
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，使用 Azure 内容理解在 Foundry 工具中分析营销视频。\n视频分割已启用。\n您需要配置一个分析器，以输出描述每个视频片段颜色方案的生成 JSON 字段。\n您应该如何配置分析器？要回答，请将适当的值拖到正确的目标。\n每个值可以使用一次、使用多次或根本不使用。您可能需要拖动面板之间的分隔条或滚动以查看内容。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1: 字符串类型（字符串）：虽然您希望输出模式包含颜色调色板或样式的描述，Azure 内容理解模式使用基本类型（如字符串、数字或数组）映射底层数据类型。该字段将在 JSON 响应中以类似 \"valueString\" 的键输出最终结果。\n\n框 2: 生成方法（生成）：提取方法仅用于精确提取内容中出现的文字（例如语音转文本的记录或光学字符识别）。因为分析视觉美学和合成关于“色彩方案”的描述性文本需要多模态 AI 推理，所以必须使用生成方法。这指示底层模型分析该片段并合成全新的描述性见解。\n\n参考文献：\nhttps://learn.microsoft.com/en-us/azure/ai-services/content-understanding/video/elements"
  },
  "sources_en": [
   "classify",
   "generate",
   "group",
   "string",
   "table"
  ],
  "sources_zh": [
   "classify",
   "generate",
   "group",
   "string",
   "table"
  ],
  "targets": [
   {
    "label_en": "Field value type:",
    "label_zh": "字段值类型：",
    "correct_en": "string",
    "correct_zh": "string"
   },
   {
    "label_en": "Field method:",
    "label_zh": "字段方法：",
    "correct_en": "generate",
    "correct_zh": "generate"
   }
  ]
 },
 {
  "id": 90,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that generates short promotional product videos.\nAfter several clips are approved, reviewers notice a small watermark in the top-right corner of some videos.\nYou need to remove the watermark without regenerating the videos.\nWhat should you do?",
   "options": {
    "A": "Modify the original prompt to exclude watermarks.",
    "B": "Crop the video by using the size parameter.",
    "C": "Increase the guidance scale.",
    "D": "Apply a mask-based inpainting edit to the affected part of the video."
   },
   "explanation": "The correct action to take is to apply a mask-based inpainting edit to the affected part of the video.\n\nThis is the only option that directly modifies the existing, approved video files. Inpainting allows you to isolate the specific top-right corner using a mask and seamlessly blend it with the surrounding pixels to erase the watermark without altering or regenerating the rest of the video footage."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，用于生成短促销产品视频。\n在几个剪辑获得批准后，审阅者注意到某些视频的右上角有一个小水印。\n您需要在不重新生成视频的情况下去除水印。\n您应该怎么做？",
   "options": {
    "A": "修改原始提示以排除水印。",
    "B": "使用 size 参数裁剪视频。",
    "C": "增加引导比例。",
    "D": "对视频受影响部分应用基于掩码的修复编辑。"
   },
   "explanation": "说明：\n正确的操作是对视频受影响部分应用基于掩码的修复编辑。\n\n这是唯一一个直接修改现有已批准视频文件的选项。修复技术允许您使用遮罩隔离特定的右上角，并与周围像素无缝融合，以erase水印而不改变或重新生成其余视频画面。"
  }
 },
 {
  "id": 91,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You develop a test method to verify the results retrieved from a call to the Azure Vision in Foundry Tools API. The call is used to analyze the existence of company logos in images. The call returns a collection of brands named brands.\nYou have the following code segment:\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Yes The code segment correctly filters for and displays the name (and coordinates) of each detected brand only if the model's confidence score is 75 percent or higher.The expression if brand.confidence >= 0.75 guarantees that only brands meeting or exceeding this threshold are printed.\n\nBox 2: Yes The code segment will display the coordinates. Specifically, it prints the x and y values of the rectangle's top-left corner alongside its width (w) and height (h) for any detected brand with a confidence score equal to or greater than 0.75 (75%).\n\nThe provided code uses the properties directly to extract the bounding box:\nbrand.rectangle.x and brand.rectangle.y: The coordinates of the top-left corner of the bounding box.\n\nbrand.rectangle.w and brand.rectangle.h: The width and height of the bounding box.\n\nBox 3: No See Box 2 above."
  },
  "zh": {
   "stem": "您开发了一种测试方法，以验证从 Foundry ToolsAPI 调用 Azure Vision 获取的结果。该调用用于分析图像中公司标志的存在。该调用返回一个名为 brands 的品牌集合。\n您有以下代码段：\n对于以下每个陈述，如果该陈述为真，请选择“是”。否则，请选择“否”。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：是该代码段正确过滤并显示每个检测到的品牌的名称（和坐标），仅当模型的置信度分数为 75% 或更高时。表达式 if brand.confidence >= 0.75确保仅打印满足或超过此阈值的品牌。\n\n框 2：是该代码段将显示坐标。具体来说，它打印检测到的品牌的矩形左上角的 x 和 y 值，以及其宽度（w）和高度（h），对于任何置信度分数等于或大于 0.75（75%）的品牌。\n\n提供的代码直接使用属性提取边界框：\nbrand.rectangle.x 和 brand.rectangle.y：边界框左上角的坐标。\n\nbrand.rectangle.w 和 brand.rectangle.h：边界框的宽度和高度。\n\n框 3：否请参见上面的框 2。"
  },
  "boxes": [
   {
    "prompt_en": "The code will display the name of each detected brand with a confidence equal to or higher than 75 percent.",
    "prompt_zh": "代码将显示置信度等于或高于 75% 的每个检测到的品牌的名称。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "Yes",
    "correct_zh": "是"
   },
   {
    "prompt_en": "The code will display coordinates for the top-left corner of the rectangle that contains the brand logo of the displayed brands.",
    "prompt_zh": "代码将显示所显示品牌的品牌徽标所在矩形左上角的坐标。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "Yes",
    "correct_zh": "是"
   },
   {
    "prompt_en": "The code will display coordinates for the bottom-right corner of the rectangle that contains the brand logo of the displayed brands.",
    "prompt_zh": "代码将显示所显示品牌的品牌徽标所在矩形右下角的坐标。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "No",
    "correct_zh": "否"
   }
  ],
  "code": {
   "lang": "python",
   "text": "for brand in image_analysis.brands:\n    if brand.confidence >= 0.75:\n        print(f\"\\nLogo of {brand.name} between {brand.rectangle.x}, {brand.rectangle.y} and {brand.rectangle.w}, {brand.rectangle.h}\")"
  }
 },
 {
  "id": 92,
  "section": "Implement computer vision solutions",
  "sectionZh": "实施计算机视觉解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You are developing an application that will detect faulty components produced on a factory production line.\nThe components are specific to your business.\nYou need to use the Azure Custom Vision API to help detect common faults.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
   "options": {},
   "explanation": "Step 1:  Create a project\n\nYou must first set up a new project in the Custom Vision portal or via the SDK to store your data and configuration.\n\nStep 2:  Upload and tag images Next, you need to upload photos of your specific factory components and draw bounding boxes around the faults to tag them.\n\nStep 3:  Train the object detection model Because you need to identify and locate specific, localizable faults on a component, you must train an object detection model rather than a general classifier model."
  },
  "zh": {
   "stem": "您正在开发一个应用程序，用于检测在工厂生产线上生产的故障组件。\n这些组件是特定于您的业务的。\n您需要使用 Azure 自定义视觉 API 来帮助检测常见故障。\n您应该按顺序执行哪三个操作？要回答，请将适当的操作从操作列表移动到答案区域，并按正确顺序排列它们。",
   "options": {},
   "explanation": "步骤 1：创建项目\n\n您必须首先在自定义视觉门户或通过 SDK 设置一个新项目，以存储您的数据和配置。\n\n步骤 2：上传和标记图像接下来，您需要上传您特定工厂组件的照片，并在故障周围绘制边界框以标记它们。\n\n步骤 3：训练目标检测模型因为您需要识别和定位组件上的特定可定位故障，所以您必须训练一个目标检测模型，而不是一个通用分类模型。"
  },
  "sources_en": [
   "Initialize the training dataset.",
   "Train the classifier model.",
   "Create a project.",
   "Upload and tag images.",
   "Train the object detection model."
  ],
  "sources_zh": [
   "初始化训练数据集。",
   "训练分类器模型。",
   "创建项目。",
   "上传并标记图像。",
   "训练目标检测模型。"
  ],
  "targets": [
   {
    "label_en": "1",
    "label_zh": "1",
    "correct_en": "Create a project.",
    "correct_zh": "创建项目。"
   },
   {
    "label_en": "2",
    "label_zh": "2",
    "correct_en": "Upload and tag images.",
    "correct_zh": "上传并标记图像。"
   },
   {
    "label_en": "3",
    "label_zh": "3",
    "correct_en": "Train the object detection model.",
    "correct_zh": "训练目标检测模型。"
   }
  ]
 },
 {
  "id": 93,
  "section": "Implement text analysis solutions",
  "sectionZh": "实施文本分析解决方案",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You need to recommend an invoice review solution that resolves the issue reported by the finance department.\nWhat should you include in the recommendation?",
   "options": {
    "A": "chat completions",
    "B": "Azure Document Intelligence in Foundry Tools",
    "C": "Azure Content Understanding in Foundry Tools",
    "D": "Image Analysis"
   },
   "explanation": "Scenario:\nProblem Statements: Contoso identifies the following issues:\nThe finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n\n--\n\nThe correct tool to include in your solution is Azure Document Intelligence in Foundry Tools.\n\nStructured Data Extraction: Azure Document Intelligence is a cloud-based AI service specifically optimized for extracting structured data, key-value pairs, and text from complex documents such as vendor invoices, receipts, and contracts.\n\nLayout and Table Handling: Invoices frequently contain unpredictable tables, complex spacing, logos, and mixed image-and-text variations. Azure Document Intelligence uses dedicated, prebuilt invoice models and layout analysis capabilities engineered to map and preserve the semantic structure of tabular data across inconsistent layouts.\n\nConfidence Scoring for Manual Review: The service generates confidence scores for extracted fields. This allows you to automatically flag low-confidence Extractions and seamlessly route complex anomalies to human operators for manual validation against vendor contracts.\n\nIncorrect:\n[Not C] Azure Content Understanding: While useful for multi-modal analysis and schema-based image querying, it currently lacks the specialized, highly optimized parsing engine required for complex multi-page tables.\nUsing it for varied invoice processing often results in inconsistent line-item mapping and tabular errors compared to the robust, specialized Document Intelligence invoice models.",
   "scenario": "Implement text analysis solutions\n\nTestlet 1\n\nCase Study\n\nThis is a case study. Case studies are not timed separately from other exam sections. You can use as much exam time as you would like to complete each case study. However, there might be additional case studies or other exam sections. Manage your time to ensure that you can complete all the exam sections in the time provided. Pay attention to the Exam Progress at the top of the screen so you have sufficient time to complete any exam sections that follow this case study.\n\nTo answer the case study questions, you will bed to reference information that is provided in the case.\nCase studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.\n\nA Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.\n\nTo start the case study\n\nTo display the first question in this case study, select the “Next” button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the “Question” button to return to the question.\n\nOverview\n\nCompany Information\n\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-\nbased solutions by using Microsoft Foundry.Existing Environment\n\nIdentity Environment\n\nContoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.\n\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\n\nThe team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications.\n\nContoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.\n\nGenerative Environment\n\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\n\nProject1\n\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\n\nAgent1 has the following configurations:\n\nAgent1 uses a base model deployment.\nA safety evaluation pipeline is NOT enabled.\n\nTool invocation approval workflows are NOT enabled.\nConversation memory constraints are NOT configured.\n\nAgent1 interacts with customers by using digital support channels and answers general questions about Contoso products.\n\nProject1 is deployed to an Azure region located in the European Union (EU).\n\nAgent1Dev Team will use Project1 to optimize and maintain Agent1.\n\nProject2\n\nProject2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.\n\nDevelopment of the solution is incomplete.\n\nData Environment\n\nContoso stores product-related information in Azure resources that support AI applications.\n\nThe Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nThe product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\n\nContoso identifies the following issues:\n\nAgent1 has only general knowledge of the Contoso products.\nA recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet.\nAgent1 does NOT use the detailed product information in the product sheets stored in storage1 when   responding to customer questions.\nThe finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n\nRequirements\n\nPlanned Changes\n\nContoso plans to implement the following changes:\n\nImplement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.\nUpdate the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\nEnable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.\nImplement an indexing solution for the product sheets that Agent1 can use to answer customer questions.\nComplete the development of the video creation solution.\n\nTechnical Requirements\n\nContoso identifies the following technical requirements:\n\nThe model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\n\nThe product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\nResponses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product details.\nThe model version used by Agent1 must remain consistent to ensure stable responses.\nThe data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\n\nContoso identifies the following security and compliance requirements:\n\nAPI keys must NOT be used to access Foundry-deployed models.\nAccess to the Azure resources must follow the principle of least privilege.\nThe developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.\nAccess to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.\nAccess to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test.\nAgent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\nThe product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.\n\nBusiness Requirements\n\nContoso identifies the following business requirements:\n\nUsers that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\nAgent1 must answer questions only about the products sold by Contoso."
  },
  "zh": {
   "stem": "您需要推荐一个发票审核解决方案，以解决财务部门报告的问题。\n您应该在推荐中包含什么？",
   "options": {
    "A": "聊天完成",
    "B": "Foundry 工具中的 Azure 文档智能",
    "C": "Foundry 工具中的 Azure 内容理解",
    "D": "图像分析"
   },
   "explanation": "场景：\n问题陈述：Contoso 确定了以下问题：\nContoso 的财务部门报告说，供应商发票必须手动审核，以确保发票与供应商合同中定义的条款相符。发票包含表格、徽标和多种布局，使得文档难以一致地处理。\n\n--\n\n在您的解决方案中包含的正确工具是 Foundry Tools 中的 Azure Document Intelligence。\n\n结构化数据提取：Azure Document Intelligence 是一种基于云的 AI 服务，专门优化用于从复杂文档中提取结构化数据、键值对和文本，例如供应商发票、收据和合同。\n\n布局和表格处理：发票通常包含不可预测的表格、复杂的间距、徽标和混合的图像与文本变体。Azure Doc ument Intelligence 使用专用的、预构建的发票模型和布局分析能力，旨在映射和保留跨不一致布局的表格数据的语义结构。\n\n手动审核的置信度评分：该服务为提取的字段生成置信度评分。这使您能够自动标记低置信度的提取，并无缝地将复杂异常路由到人工操作员进行与供应商合同的手动验证。\n\n不正确：\n[非 C] Azure 内容理解：虽然在多模态分析和基于模式的图像查询中很有用，但它目前缺乏处理复杂多页表格所需的专门、高度优化的解析引擎。\n将其用于多样化的发票处理通常会导致与强大、专门的 Document Intelligence 发票模型相比，行项目映射和表格错误不一致。",
   "scenario": "实施文本分析解决方案\n\n测试单元 1\n\n案例研究\n\n这是一个案例研究。 案例研究的计时与其他考试部分不分开。您可以使用尽可能多的考试时间来完成每个案例研究。然而，可能会有额外的案例研究或其他考试部分。管理您的时间，以确保您能够在提供的时间内完成所有考试部分。请注意屏幕顶部的考试进度，以确保您有足够的时间完成此案例研究后面的任何考试部分。\n\n要回答案例研究问题，您需要参考案例中提供的信息。\n案例研究及相关问题可能包含展览或其他资源，提供有关案例中描述的场景的更多信息。 单个问题中提供的信息不适用于案例研究中的其他问题。\n\n在此案例研究结束时，将出现复查界面。从复查界面，您可以在进入下一个考试部分之前查看和更改您的答案。离开此案例研究后，您将无法返回。\n\n要开始案例研究\n\n要显示本案例研究中的第一个问题，请选择“下一步”按钮。在问题左侧，菜单提供了链接到信息的内容，例如业务需求、现有环境和问题陈述。在回答任何问题之前，请仔细阅读所有这些信息。当您准备好回答问题时，请选择“问题”按钮以返回问题。\n\n概述\n\n公司信息\n\nContoso 有限公司是一家跨国零售公司，通过使用 Microsoft Foundry 构建、部署和管理生成式人工智能和基于代理的解决方案。      现有环境\n\n身份环境\n\nContoso 使用 Microsoft Entra ID 进行身份管理、身份验证和授权功能，使代理能够访问组织资源和服务。\n\nContoso 最近成立了一个名为 Agent1Dev 团队的新 AI 工程团队，以优化和维护现有的 AI 解决方案。\n\n该团队与解决方案架构师、DevOps 工程师和安全工程师合作，设计、实施、监控和保护 AI 应用程序。\n\nContoso 还有一个名为 Agent1Test 团队的团队，负责在解决方案部署之前验证 AI 解决方案。\n\n生成环境\n\nContoso 有一个 Microsoft Foundry 部署，其中包含两个项目，分别名为 Project1 和 Project2。\n\n项目1\n\nProject1 包含一个名为 Agent1 的客户支持代理，帮助客户处理产品咨询和故障排除请求。\n\nAgent1 具有以下配置：\n\nAgent1 使用基础模型部署。\n安全评估流水线未启用。\n\n工具调用审批工作流未启用。\n对话记忆约束未配置。\n\nAgent1 通过数字支持渠道与客户互动，并回答有关Contoso 产品的一般问题。\n\nProject1 部署在位于欧盟 (EU) 的 Azure 区域。\n\nAgent1Dev 团队将使用 Project1 来优化和维护 Agent1。\n\n项目2\n\nProject2 包含一个已部署的视频生成模型。Contoso 的市场部门可以访问 Project2，并计划使用该模型开发视频创作解决方案。\n\n该解决方案的开发尚未完成。\n\n数据环境\n\nContoso 在支持 AI 应用的 Azure 资源中存储与产品相关的信息。\n\nAzure 环境包含一个名为 storage1 的 Azure Blob 存储帐户，该帐户存储所有 Contoso 产品的产品详细信息表。\n\n产品说明书包括规格、功能描述和产品支持信息，\nAgent1 可以用来回答客户问题。产品说明书以 PDF 格式存储。\n\n问题陈述\n\nContoso 确定了以下问题：\n\nAgent1 对 Contoso 产品的了解仅限于一般知识。\n最近与 Agent1 的聊天互动进行了情感分析。分析结果尚未 处理。\n\nAgent1 在回答客户问题时 不 使用存储在 storage1 中的产品说明书中的详细产品信息。\nContoso 的财务部门报告称，供应商发票必须手动审核，以确保发票与供应商合同中定义的条款相符。发票包含表格、徽标，以及各种布局，使得文档难以一致地处理。\n\n需求\n\n计划变更\n\nContoso 计划实施以下变更：\n\n为 Project1 实施一个解决方案，通过评估发票的视觉布局和文本内容来分析供应商发票，以便能够根据供应商合同条款验证发票细节。\n更新 Agent1 使用的基础模型部署，并标准化模型版本以确保连续性和一致的响应。\n启用 Agent1 从存储在storage1 中的产品表中检索和使用详细的产品信息。\n为产品表实施一个索引解决方案，以便 Agent1 可以用来回答客户问题。\n完成视频创作解决方案的开发。\n\n技术要求\n\nContoso 确定了以下技术要求：\n\nAgent1 使用的模型部署必须支持可扩展的高吞吐量生成式人工智能工作负载，并能够动态扩展以处理可变的客户支持流量，而无需预留吞吐量容量。\n\n产品表必须通过使用索引流水线进行处理，以支持语义和向量搜索，以便 Agent1 可以检索相关的产品信息。\n使用产品表信息生成的响应必须相关、完整且准确。\nAgent1 必须能够使用产品表回答有关产品详细信息的自然语言问题。\nAgent1 使用的模型版本必须保持一致，以确保稳定的响应。\n模型处理的数据必须保留在欧盟内。\n\n安全和合规要求\n\nContoso 确定了以下安全和合规要求：\n\nAPI 密钥必须 不 用于访问部署在 Foundry 上的模型。\n访问 Azure 资源必须遵循最小权限原则。\nContoso 的开发人员必须使用 Microsoft Entra 身份验证来访问 Microsoft Foundry 资源。\n\n访问 Project1 必须通过名为 SC_Agent1_Dev 的安全组分配给 Agent1Dev 团队的成员。\n\n访问 Project1 必须通过名为 SC_Agent1_Test 的安全组分配给 Agent1Test 团队的成员。\n\nAgent1 绝不能泄露客户信息，即使包含客户数据的文档错误地添加到 storage1 的产品表存储库中。\n产品表可能包含嵌入文本的图像。Agent1 必须受到保护，以防止潜在隐藏在图像中的恶意指令。\n\n业务需求\n\nContoso 确定了以下业务需求：\n\n与 Agent1 互动的用户必须在未来的互动中拥有个性化体验，包括 Agent1 能够保留对话上下文并回忆之前互动中的相关信息。\n\nAgent1 只能回答有关 Contoso 销售的产品的问题。"
  }
 },
 {
  "id": 94,
  "section": "Implement text analysis solutions",
  "sectionZh": "实施文本分析解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent.\nThe knowledge source for the agent is a set of scanned PDF troubleshooting guides stored in Azure Blob Storage. The guide pages contain two-column layouts and tables.\nYou use Azure Content Understanding in Foundry Tools to process the PDFs.\nYou plan to ingest the processed content into an index for Retrieval Augmented Generation (RAG) and store extracted fields for downstream automation.\nStakeholders must be able to verify where each extracted field value came from in the original PDF and route low-reliability extractions for manual review.\nYou need to ensure that the Content Understanding document analyzer output includes a per-field confidence score and source grounding to locations within the source document.\nWhat should you do?",
   "options": {
    "A": "Set enableSegment to true.",
    "B": "Provide labeled samples.",
    "C": "Enable estimateFieldSourceAndConfidence.",
    "D": "Configure the analyzer to use generative extraction for all fields."
   },
   "explanation": "To fulfill all your requirements using Azure Content Understanding in Foundry Tools, you need to configure            a custom document analyzer with specific flags, set up an index ingestion pipeline, and build a downstream human-in-the-loop validation rule.\n\n*-> 1. Enable Confidence Scores and Source Grounding To force the analyzer to provide per-field confidence metrics and precise layout/bounding box coordinates for verification, you must opt-in to the estimate FieldSourceAndConfidence parameter within your configuration.\n\nOption A (Global): Set estimateFieldSourceAndConfidence = true in the main analyzer config to evaluate all fields.\n\nOption B (Field-Level): Set estimateSourceAndConfidence = true under individual field schemas.This ensures the generated JSON response populates the bounding box coordinates, page numbers, and a confidence score 0.0 to 1.0 for every extracted entity.\n\n2. Configure Document Extraction for Two-Column & Table Layouts\n\n3. Build the Ingestion Pipeline (RAG vs. Automation Dual-Path)\n\n4. Implement Threshold Routing and Source Verification"
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。\n代理的知识来源是一组存储在 Azure Blob存储中的扫描 PDF 故障排除指南。指南页面包含两栏布局和表格。\n您在 Foundry 工具中使用 Azure 内容理解来处理 PDF。\n您计划将处理后的内容摄取到用于检索增强生成（RAG）的索引中，并存储提取的字段以便后续自动化。\n利益相关者必须能够验证每个提取字段值来自原始 PDF 的位置，并将低可靠性的提取结果路由到人工审核。\n您需要确保内容理解文档分析器的输出包括每个字段的置信度评分和源文档中的位置基础。\n您应该怎么做？",
   "options": {
    "A": "将 enableSegment 设置为 true。",
    "B": "提供标记样本。",
    "C": "启用 estimateFieldSourceAndConfidence。",
    "D": "配置分析器以对所有字段使用生成式提取。"
   },
   "explanation": "要使用 Azure Content Understanding 在 Foundry Tools 中满足所有要求，您需要配置                       一个具有特定标志的自定义文档分析器，设置索引摄取流水线，并构建一个下游人机协作验证规则。\n\n*-> 1. 启用置信度分数和源基础为了强制分析器提供每个字段的置信度指标和精确的布局/边界框坐标以供验证，您必须选择在您的配置中启用 FieldSourceAndConfidence 参数。\n\n选项 A（全局）：在主分析器配置中设置 estimateFieldSourceAndConfidence = true 以评估所有字段。\n\n选项 B（字段级）：在各个字段模式下设置 estimateSourceAndConfidence = true。这确保生成的 J SON 响应填充边界框坐标、页码，以及每个提取实体的置信度分数 0.0 到 1.0。\n\n2. 配置文档提取以适应双列和表格布局\n\n3. 构建摄取流水线（RAG 与自动化双路径）\n\n4. 实施阈值路由和源验证"
  }
 },
 {
  "id": 95,
  "section": "Implement text analysis solutions",
  "sectionZh": "实施文本分析解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You are building a speech processing solution in Microsoft Foundry for a customer support platform.\nThe platform will transcribe live phone calls, so that supervisors at your company can view call transcripts and detect issues while the calls are in progress. The call audio will arrive as a continuous stream from the telephony system.\nYou need to ensure that the call transcripts appear within only a few seconds of the audio stream.\nWhat should you do?",
   "options": {
    "A": "Use text to speech by using a custom neural voice.",
    "B": "Use speech translation to generate the transcripts into multiple languages.",
    "C": "Run a batch transcription job on recorded audio files.",
    "D": "Use real-time speech to text to process streaming audio input."
   },
   "explanation": "You should use Real-Time Speech-to-Text (Streaming STT) for this project.\n\nWhy Real-Time STT is Required Low Latency: It transcribes audio within seconds.\n\nContinuous Input: It processes live, ongoing audio streams.\n\nLive Monitoring: Supervisors need immediate text to flag issues."
  },
  "zh": {
   "stem": "您正在为客户支持平台在 Microsoft Foundry 中构建语音处理解决方案。\n该平台将实时转录电话通话，以便您公司的主管可以查看通话记录并在通话进行时检测问题。通话音频将作为来自电话系统的连续流传输。\n您需要确保通话记录在音频流的几秒钟内出现。\n您应该怎么做？",
   "options": {
    "A": "使用自定义神经语音的文本转语音。",
    "B": "使用语音翻译将记录生成多种语言的文本。",
    "C": "对录制的音频文件运行批量转录作业。",
    "D": "使用实时语音转文本处理流式音频输入。"
   },
   "explanation": "您应该在此项目中使用实时语音转文本（流式 STT）。\n\n为什么需要实时 STT低延迟：它在几秒钟内转录音频。\n\n连续输入：它处理实时、持续的音频流。\n\n实时监控：监督人员需要立即的文本来标记问题。"
  }
 },
 {
  "id": 96,
  "section": "Implement text analysis solutions",
  "sectionZh": "实施文本分析解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You are creating an agent workflow in a Microsoft Foundry project to support natural voice interactions.\nThe agent must receive continuous audio input, convert the input into text for reasoning, and then returnspoken responses to a user. The workflowmust meet the following requirements:\nSupport turn-taking dynamics, where the agent begins to generate the speech output before the user finishes speaking.\nOperate with low latency to maintain conversational experience.\nYou need to enable both speech to text and text to speech in a real-time agent interaction.\nWhat should you do?",
   "options": {
    "A": "Use batch transcription to convert the audio input and return text responses from the agent.",
    "B": "Use real-time speech to text for incoming audio and text to speech for agent responses.",
    "C": "Use an embeddings model to encode the audio, and then decode the audio into text and speech.",
    "D": "Use speech translation to convert the audio into another language and return the translated text."
   },
   "explanation": "To achieve low latency and natural turn-taking dynamics in this specific Microsoft Foundry workflow, the best approach is to use real-time speech-to-text for incoming audio and text-to-speech for agent responses.\n\nLow Latency: Streaming, real-time Speech-to-Text (STT) and Text-to-Speech (TTS) pipelines process audio chunks concurrently. This allows the system to analyze text and prepare responses while the user is still speaking.\n\nTurn-Taking Support: Real-time STT systems utilize voice activity detection (VAD) and continuous streaming. This enables the agent to instantly detect pauses, interruptions, or trailing speech to naturally shift conversational turns.\n\nDirect Reasoning Compatibility: Because your workflow requires converting input into text for reasoning (such as prompting a Large Language Model), a highly optimized text-based pipeline fits seamlessly without extra translation layers."
  },
  "zh": {
   "stem": "您正在 Microsoft Foundry 项目中创建一个代理工作流，以支持自然语音交互。\n代理必须接收连续的音频输入，将输入转换为文本以进行推理，然后返回      口头响应给用户。工作流必须满足以下要求：\n支持轮流发言的动态，代理在用户完成讲话之前开始生成语音输出。\n以低延迟运行，以保持对话体验。\n您需要在实时代理交互中启用语音转文本和文本转语音。\n您应该怎么做？",
   "options": {
    "A": "使用批量转录将音频输入转换为文本响应。",
    "B": "对于传入音频使用实时语音转文本，对于代理响应使用文本转语音。",
    "C": "使用嵌入模型对音频进行编码，然后将音频解码为文本和语音。",
    "D": "使用语音翻译将音频转换为另一种语言，并返回翻译后的文本。"
   },
   "explanation": "为了在这个特定的 Microsoft Foundry 工作流中实现低延迟和自然的轮流对话动态，最佳方法是对传入音频使用实时语音转文本，对代理响应使用文本转语音。\n\n低延迟：流式实时语音转文本（STT）和文本转语音（TTS）管道并行处理audio chunks。这使得系统能够在用户仍在讲话时分析文本并准备响应。\n\n轮流对话支持：实时 STT 系统利用语音活动检测（VAD）和持续流式传输。这使得代理能够立即检测到停顿、打断或拖延的语音，从而自然地转换对话轮次。\n\n直接推理兼容性：因为您的工作流需要将输入转换为文本以进行推理（例如提示大型语言模型），高度优化的基于文本的管道可以无缝适配，而无需额外的翻译层。"
  }
 },
 {
  "id": 97,
  "section": "Implement text analysis solutions",
  "sectionZh": "实施文本分析解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have an application named App1 that uses Azure Speech in Foundry Tools to transcribe live calls.\nTranscript segments often contain both English and Spanish. App1 sends each segment to Azure Translator in Foundry Tools to translate to another language.\nSometimes, mixed-language segments result in incomplete or incorrect translations.\nYou need to reduce translation errors. The solution must ensure that the entire transcript is translated successfully.\nWhat should you do before sending the segments to Translator?",
   "options": {
    "A": "Use document translation to translate the entire transcript as a single document.",
    "B": "Split the mixed-language segments into single-language segments and translate each segment separately.",
    "C": "Enable automatic language detection for the translation request.",
    "D": "Specify English as the source language in the translation request for all the segments."
   },
   "explanation": "To fix incomplete or incorrect translations from mixed-language transcripts, you must identify and isolate the languages at the sentence or phrase level before sending the text to Azure Translator.\n\nAzure Translator performs best when a single request contains only one source language. When it receives a mixed-language segment under a single source language code, it often fails to parse the secondary language correctly.\n\nHere is the step-by-step pipeline you should implement inside your application before hitting the Translator API.\n\n1. Split Segments into Sentences Live call transcript segments can contain multiple sentences. Do not send the raw, multi-sentence segment directly to the translator if it contains mixed languages.Break the segment into individual sentences.Use regex punctuation rules or a lightweight sentence-splitting library.\n\n2. Run Language Detection Per Sentence Azure Translator has a built-in Detect API, but for mixed-language live calls, executing a dedicated detection step per sentence provides better control."
  },
  "zh": {
   "stem": "您有一个名为 App1 的应用程序，它在 Foundry Tools 中使用 Azure Speech 来转录实时通话。\n转录片段通常包含英语和西班牙语。App1 将每个片段发送到 Azure Translator 在 Foundry Tools 中翻译成另一种语言。\n有时，混合语言片段会导致翻译不完整或不正确。\n您需要减少翻译错误。解决方案必须确保整个转录成功翻译。\n在将片段发送到 Translator 之前，您应该怎么做？",
   "options": {
    "A": "使用文档翻译将整个转录作为单个文档进行翻译。",
    "B": "将混合语言片段拆分为单一语言片段，并分别翻译每个片段。",
    "C": "为翻译请求启用自动语言检测。",
    "D": "在所有片段的翻译请求中指定英语为源语言。"
   },
   "explanation": "要修复混合语言转录中的不完整或不正确的翻译，您必须在将文本发送到 Azure Translator 之前，识别并隔离句子或短语级别的语言。\n\n当单个请求仅包含一种源语言时，Azure Translator 的性能最佳。当它接收到一个单一源语言代码下的混合语言片段时，通常无法正确解析第二种语言。\n\n在您调用翻译器 API 之前，您应该在应用程序中实现的逐步流程。\n\n1. 将段落拆分为句子实时通话转录段落可能包含多个句子。如果段落包含混合语言，请不要直接将原始的多句段落发送给翻译器。将段落拆分为单独的句子。使用正则表达式标点规则或轻量级句子拆分库。\n\n2. 对每个句子进行语言检测Azure 翻译器内置了检测 API，但对于混合语言的实时通话，逐句执行专门的检测步骤可以提供更好的控制。"
  }
 },
 {
  "id": 98,
  "section": "Implement text analysis solutions",
  "sectionZh": "实施文本分析解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Python application collects customer comments before posting them to a public forum.\nYou need to send a text comment to Azure AI Content Safety and return the self-harm severity from the response.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: AnalyzeTextOptions(text=comment) To set up the request in your Python script, you must use AnalyzeTextOptions(text=comment), passing the text as a single string rather than a list.\n\nExample:\nBuild the request options focusing on Text analysis # You can optionally restrict analysis to specific categories request_options = AnalyzeTextOptions( text=user_comment, categories=[TextCategory.SELF_HARM]\n\nBox 2: client.analyze_text(request) You must use client.analyze_text(request)\n\n1. Send the request: Call client.analyze_text(request) to retrieve the multi-severity results.\n\n2. Extract the self-harm result: Locate the self-harm categories from the response list.\n\n3. Return the severity: Access the .severity attribute"
  },
  "zh": {
   "stem": "您有一个 Python 应用程序，在将客户评论发布到公共论坛之前收集这些评论。\n您需要将文本评论发送到 Azure AI 内容安全，并从响应中返回自残严重性。\n您应该如何完成代码？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1: AnalyzeTextOptions(text=comment)要在您的 Python 脚本中设置请求，您必须使用 AnalyzeTextOptions(text=comment)，将文本作为单个字符串传递，而不是列表。\n\n示例：\n构建请求选项，专注于文本分析# 您可以选择性地将分析限制为特定类别request_options = AnalyzeTextOptions(text=user_comment,n个类别=[TextCategory.SELF_HARM]nBox 2:\n\nclient.analyze_text(request)您必须使用 client.analyze_text(request)\n\n1. 发送请求：调用 client.analyze_text(request) 以检索多严重性结果。\n\n2. 提取自残结果：从响应列表中找到自残类别。\n\n3. 返回严重性：访问 .severity 属性"
  },
  "boxes": [
   {
    "prompt_en": "request =",
    "prompt_zh": "request =",
    "options_en": [
     "AnalyzeTextOptions(categories=comment)",
     "AnalyzeTextOptions(text=[comment])",
     "AnalyzeTextOptions(text=comment)",
     "TextCategory.SELF_HARM(comment)"
    ],
    "options_zh": [
     "AnalyzeTextOptions(categories=comment)",
     "AnalyzeTextOptions(text=[comment])",
     "AnalyzeTextOptions(text=comment)",
     "TextCategory.SELF_HARM(comment)"
    ],
    "correct_en": "AnalyzeTextOptions(text=comment)",
    "correct_zh": "AnalyzeTextOptions(text=comment)"
   },
   {
    "prompt_en": "response =",
    "prompt_zh": "response =",
    "options_en": [
     "client.analyze_image(request)",
     "client.analyze_text(request)",
     "client.moderate_text(request)",
     "client.path(\"/text:analyze\").post(request)"
    ],
    "options_zh": [
     "client.analyze_image(request)",
     "client.analyze_text(request)",
     "client.moderate_text(request)",
     "client.path(\"/text:analyze\").post(request)"
    ],
    "correct_en": "client.analyze_text(request)",
    "correct_zh": "client.analyze_text(request)"
   }
  ],
  "code": {
   "lang": "python",
   "text": "def get_self_harm_severity(comment: str) -> int:\n    key = os.environ[\"CONTENT_SAFETY_KEY\"]\n    endpoint = os.environ[\"CONTENT_SAFETY_ENDPOINT\"]\n    client = ContentSafetyClient(endpoint, AzureKeyCredential(key))\n\n    request = [[1]]\n    response = [[2]]\n\n    result = next(\n        item for item in response.categories_analysis\n        if item.category == TextCategory.SELF_HARM\n    )\n    return result.severity"
  }
 },
 {
  "id": 99,
  "section": "Implement text analysis solutions",
  "sectionZh": "实施文本分析解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a custom named entity recognition (NER) project in Azure Language in Foundry Tools for support tickets. The schema for the project contains an entity type named ContactInfo.\nIn tagged training files, ContactInfo is used for phone numbers, email addresses, and social media handles.\nModel evaluation shows low precision for ContactInfo, including false positives in which nearby text is extracted as ContactInfo.\nYou need to improve the precision of the project.\nWhat should you do before retraining the model?",
   "options": {
    "A": "Lower the confidence threshold for ContactInfo.",
    "B": "Trigger an auto-labeling job.",
    "C": "Add more support tickets as training data and label more ContactInfo entities.",
    "D": "Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span."
   },
   "explanation": "To improve the precision of the project before retraining the model, you should replace ContactInfo by using Phone, Email, and SocialMedia entities, and then relabel every matching span.\n\nReduces Model Confusion: Combining distinct types of data (like phone numbers, emails, and usernames) into a single generic entity (ContactInfo) creates conflicting patterns for the model. Splitting them allows the model to learn the specific, unique syntax rules of each type.\n\nEliminates Over-extraction: When an entity is too broad, the model struggles to identify where the entity begins and ends, leading to false positives by grabbing adjacent text. Distinct entities provide sharper, cleaner boundaries."
  },
  "zh": {
   "stem": "您在 Azure Language 的 Foundry Tools 中有一个自定义命名实体识别（NER）项目，用于支持票据。该项目的架构包含一个名为 ContactInfo 的实体类型。\n在标记的训练文件中，ContactInfo 用于电话号码、电子邮件地址和社交媒体账号。\n模型评估显示 ContactInfo 的精确度较低，包括将附近文本错误提取为 ContactInfo 的假阳性。\n您需要提高项目的精确度。\n在重新训练模型之前，您应该做什么？",
   "options": {
    "A": "降低 ContactInfo 的置信度阈值。",
    "B": "触发自动标记任务。",
    "C": "添加更多支持票据作为训练数据，并标记更多 ContactInfo 实体。",
    "D": "使用 Phone、Email 和 SocialMedia 实体替换 ContactInfo。重新标记每个匹配的 范围。"
   },
   "explanation": "说明：\n为了在重新训练模型之前提高项目的精确度，您应该使用 Phone、Email 和 SocialMedia 实体替换 Co ntactInfo，然后重新标记每个匹配的范围。\n\n减少模型混淆：将不同类型的数据（如电话号码、电子邮件和用户名）合并为一个通用实体（ContactInfo）会为模型创建冲突模式。将它们分开可以让模型学习每种类型的特定、独特的语法规则。\n\n消除过度提取：当一个实体过于宽泛时，模型很难识别实体的开始和结束，导致通过抓取相邻文本而产生误报。不同的实体提供更清晰、更干净的边界。                       参考：\nhttps://learn.microsoft.com/en-us/azure/ai-services/language-service/custom-named-entity-recognition/overview"
  }
 },
 {
  "id": 100,
  "section": "Implement text analysis solutions",
  "sectionZh": "实施文本分析解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You are building a text-to-speech solution that uses Azure Speech in Foundry Tools to read instructions from the script in a text file.\nYou discover that the solution often pronounces technical terms incorrectly.\nYou need to prevent the incorrect pronunciations. The solution must minimize development effort.\nWhat should you do?",
   "options": {
    "A": "From Speech Studio, train a custom neural voice",
    "B": "Use Speech Synthesis Markup Language (SSML) to specify phonemes.",
    "C": "Use Speech Synthesis Markup Language (SSML) to apply say as rules.",
    "D": "Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice.",
    "E": "From Azure OpenAI use the Whisper model."
   },
   "explanation": "Using Speech Synthesis Markup Language (SSML) with the <phoneme> element is the ideal way to fix mispronunciations for technical terms.\n\nThe <phoneme> tag lets you override the default text-to-speech model by explicitly defining the sounds using the International Phonetic Alphabet (IPA)."
  },
  "zh": {
   "stem": "您正在构建一个文本转语音解决方案，该解决方案使用 Azure Speech 在 Foundry Tools 中读取文本文件中的脚本指令。\n您发现该解决方案经常错误地发音技术术语。\n您需要防止错误的发音。解决方案必须最小化开发工作量。\n您应该怎么做？",
   "options": {
    "A": "从语音工作室训练自定义神经语音",
    "B": "使用语音合成标记语言（SSML）指定音素。",
    "C": "使用语音合成标记语言（SSML）应用说法规则。",
    "D": "使用语音合成标记语言（SSML）调整语音的韵律。",
    "E": "从 Azure OpenAI 使用 Whisper 模型。"
   },
   "explanation": "说明：\n使用语音合成标记语言（SSML）与 <phoneme> 元素结合是修正技术术语发音错误的理想方法。\n\n<phoneme> 标签允许您通过使用国际音标（IPA）明确定义声音，来覆盖默认的文本转语音模型。"
  }
 },
 {
  "id": 101,
  "section": "Implement text analysis solutions",
  "sectionZh": "实施文本分析解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Python application that redacts sensitive information before sending prompt text to a language model. The application has the following code:\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: No The audit list will not include entity records for \"Contact\" and \"SSN\" because neither word is a target PII entity type defined in the configuration.\n\nThe code limits scanning to Person and PhoneNumber via the piiCategories list.\n\n\"Contact\" Definition: This is a regular English verb/noun, not a person's name or a telephone number.\n\n\"SSN\" Definition: While \"SSN\" is a text label that points to sensitive data, it is a descriptor rather than an actual Social Security Number.\n\nBox 2: Yes For the given sample_text, text_for_model will include both or john.doe@contoso.com and 859-98-0987 completely unredacted.\n\nThe payload explicitly restricts the Personally Identifiable Information (PII) recognition to only two specific categories by setting piiCategories: [\"Person\", \"PhoneNumber\"].\n\nEmail Address Excluded: Because the Email category is omitted from the configuration list, the service bypasses the email address (john.doe@contoso.com) and leaves it fully intact.\n\nSSN Excluded: Similarly, because the USSSN (or equivalent Social Security Number) category is not specified in the piiCategories array, the SSN (859-98-0987) is completely ignored by the redaction policy and remains visible.\n\nBox 3: Yes text_for_model will contain entity type masks for \"John Doe\" and \"312-555-1234\", but only for those two specific items.\n\nThe piiCategories array explicitly requests Person and PhoneNumber.\n\nApplied Redaction: The Azure AI Language service will replace \"John Doe\" and \"312-555-1234\" with masks like * or entity labels (depending on exact policy settings).\n\nSkipped Data: The email (john.doe@contoso.com) and the SSN (859-98-0987) will not be redacted because their categories (Email and USSSN) were omitted from your piiCategories list."
  },
  "zh": {
   "stem": "您有一个 Python 应用程序，在将提示文本发送到语言模型之前，会删除敏感信息。该应用程序具有以下代码：\n对于以下每个陈述，如果该陈述为真，请选择“是”。否则，请选择“否”。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：否审计列表将不包括“联系人”和“社会安全号码”的实体记录，因为这两个词都不是配置中定义的目标PII 实体类型。\n\n该代码通过 piiCategories 列表将扫描限制为 Person 和 PhoneNumber。\n\n“联系人”定义：这是一个常规的英语动词/名词，而不是一个人的名字或电话号码。\n\n“SSN” 定义：虽然 “SSN” 是指向敏感数据的文本标签，但它是一个描述符，而不是实际的社会安全号码。\n\n框 2：是对于给定的 sample_text，text_for_model 将包括 john.doe@contoso.com 和 859-98-0987完全未被编辑。\n\n有效负载明确限制个人可识别信息（PII）的识别仅限于两个特定类别，通过设置 piiCategories: [“Person”, “PhoneNumber”]。\n\n电子邮件地址被排除：由于电子邮件类别在配置列表中被省略，服务绕过电子邮件地址 (john.doe@contoso.com) 并保持其完全不变。\n\nSSN 被排除：同样，由于 USSSN（或等效的社会安全号码）类别未在 piiCategories 数组中指定，SSN（859-98-0987）被编辑政策完全忽略并保持可见。\n\n框 3: 是text_for_model 将包含 “John Doe” 和 “312-555-1234” 的实体类型掩码，但仅限于这两个特定项目。\n\npiiCategories 数组明确请求 Person 和 PhoneNumber。\n\n应用的编辑：Azure AI 语言服务将用掩码如 * 或实体标签替换 “John Doe” 和 “312-555-1234”（具体取决于确切的政策设置）。\n\n跳过的数据：电子邮件 (john.doe@contoso.com) 和社会安全号码 (859-98-0987) 将不会被删除因为它们的类别 (电子邮件和美国社会安全号码) 被从您的 piiCategories 列表中省略。"
  },
  "boxes": [
   {
    "prompt_en": "For sample_text, audit will include entity records for Contact and SSN.",
    "prompt_zh": "对于 sample_text，audit 将包含 Contact 和 SSN 的实体记录。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "No",
    "correct_zh": "否"
   },
   {
    "prompt_en": "For sample_text, text_for_model will include john.doe@contoso.com and 859-98-0987.",
    "prompt_zh": "对于 sample_text，text_for_model 将包含 john.doe@contoso.com 和 859-98-0987。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "Yes",
    "correct_zh": "是"
   },
   {
    "prompt_en": "For sample_text, text_for_model will contain entity type masks for John Doe and 312-555-1234.",
    "prompt_zh": "对于 sample_text，text_for_model 将包含 John Doe 和 312-555-1234 的实体类型掩码。",
    "options_en": [
     "Yes",
     "No"
    ],
    "options_zh": [
     "是",
     "否"
    ],
    "correct_en": "Yes",
    "correct_zh": "是"
   }
  ],
  "code": {
   "lang": "python",
   "text": "sample_text = \"Contact John Doe at 312-555-1234 or john.doe@contoso.com. His SSN is 859-98-0987.\"\n\ndef redact_for_model(input_text):\n    payload = {\n        \"kind\": \"PiiEntityRecognition\",\n        \"parameters\": {\n            \"modelVersion\": \"latest\",\n            \"piiCategories\": [\"Person\", \"PhoneNumber\"],\n            \"redactionPolicies\": [\n                {\n                    \"policyKind\": \"entityMask\"\n                }\n            ]\n        },\n        \"analysisInput\": {\n            \"documents\": [\n                {\n                    \"id\": \"1\",\n                    \"language\": \"en\",\n                    \"text\": input_text\n                }\n            ]\n        }\n    }\n    ...\n    return {\n        \"text_for_model\": doc.get(\"redactedText\", \"\"),\n        \"audit\": [\n            (entity[\"text\"], entity[\"category\"], entity[\"confidenceScore\"])\n            for entity in doc[\"entities\"]\n        ]\n    }\n\nresult = redact_for_model(sample_text)"
  }
 },
 {
  "id": 102,
  "section": "Implement text analysis solutions",
  "sectionZh": "实施文本分析解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You need to create a new resource that will be used to perform sentiment analysis and optical character recognition (OCR). The solution must meet the following requirements:\nUse a single key and endpoint to access multiple services.\nConsolidate billing for future services that you might use.\nSupport the use of Azure Vision in Foundry Tools in the future.\nHow should you complete the HTTP request to create the new resource? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: PUT Need to create a Cognitive Services Multi-Service resource using the PUT method. This specific resource type provides a single endpoint and key for multiple AI services, consolidates billing, and supports Azure Vision.\n\nBox 2: CognitiveServices Using the CognitiveServices kind creates a multi-service resource. This fulfills all the requirements by providing a single key and endpoint for multiple services, consolidating billing, and enabling access to features like Azure AI Vision and Text Analytics under one roof."
  },
  "zh": {
   "stem": "您需要创建一个新资源，用于执行情感分析和光学字符识别 (OCR)。该解决方案必须满足以下要求：\n使用单个密钥和端点访问多个服务。\n合并您可能使用的未来服务的账单。\n支持将来在 Foundry 工具中使用 Azure Vision。\n您应该如何完成 HTTP 请求以创建新资源？要回答，请在答案区域中选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：PUT需要使用 PUT 方法创建一个认知服务多服务资源。此特定资源type 提供多个 AI 服务的单一端点和密钥，合并账单，并支持 Azure Vision。\n\n框 2：CognitiveServices使用 CognitiveServices 类型创建一个多服务资源。这满足了所有要求，通过提供一个密钥和多个服务的端点，整合账单，并使得能够访问像 Azure AI Vision 和文本分析这样的功能。"
  },
  "boxes": [
   {
    "prompt_en": "HTTP method:",
    "prompt_zh": "HTTP 方法：",
    "options_en": [
     "PATCH",
     "POST",
     "PUT"
    ],
    "options_zh": [
     "PATCH",
     "POST",
     "PUT"
    ],
    "correct_en": "PUT",
    "correct_zh": "PUT"
   },
   {
    "prompt_en": "kind:",
    "prompt_zh": "kind：",
    "options_en": [
     "CognitiveServices",
     "ComputerVision",
     "TextAnalytics"
    ],
    "options_zh": [
     "CognitiveServices",
     "ComputerVision",
     "TextAnalytics"
    ],
    "correct_en": "CognitiveServices",
    "correct_zh": "CognitiveServices"
   }
  ],
  "code": {
   "lang": "http",
   "text": "[[1]] https://management.azure.com/subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/resourceGroups/RG1/providers/Microsoft.CognitiveService/accounts/CS1?api-version=2021-04-30\n\n{\n    \"location\": \"West US\",\n    \"kind\": \"[[2]]\",\n    \"sku\": {\n        \"name\": \"S0\"\n    },\n    \"properties\": {},\n    \"identity\": {\n        \"type\": \"SystemAssigned\"\n    }\n}"
  }
 },
 {
  "id": 103,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": true,
  "type": "multi",
  "correctLetters": [
   "A",
   "C"
  ],
  "en": {
   "stem": "You need to configure an indexing pipeline for Agent1 to retrieve the relevant product information in storage1. The solution must meet the technical requirement.\nWhich two built-in skills should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Azure OpenAI Embedding",
    "B": "Entity Recognition",
    "C": "Text Split",
    "D": "Merge",
    "E": "Language Detection F. key phrase extraction"
   },
   "explanation": "The most essential skills for this scenario are Azure OpenAI Embedding and Text Split.\n\nAzure OpenAI Embedding: This skill is critical for generating the vector representations (embeddings) of your text, which directly enables the required vector search capability.\n\nText Split: This skill is essential because LLMs and embedding models have strict token limits. Breaking\n\nlarge product detail sheets into smaller chunks ensures the text fits into the embedding model and improves the accuracy of semantic search.\n\nIncorrect:\n[Not B] Entity Recognition: This extracts specific entities like names, dates, or locations. While helpful for advanced filtering, it is not a foundational requirement to enable basic semantic or vector search.\n\n[Not D] Merge: This skill combines text from multiple fields into a single string. Since product sheets are already unified documents, splitting and chunking them is the priority rather than merging separate fields.\n\n[Not E] Language Detection: This identifies the language of the input text. Unless your product sheets are completely multilingual and require conditional routing to different language models, this skill is secondary.\n\n[Not F] Key Phrase Extraction: This pulls out main talking points or keywords. This is primary used for traditional keyword tagging or basic search indexing, whereas your requirement specifically dictates vector and semantic-based retrieval.\n\nScenario:\nTechnical Requirements;\n*-> The product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\n\nData environment: The Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nPlanned changes: Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.",
   "scenario": "Implement information extraction solutions\n\nTestlet 1\n\nCase Study\n\nThis is a case study. Case studies are not timed separately from other exam sections. You can use as much exam time as you would like to complete each case study. However, there might be additional case studies or other exam sections. Manage your time to ensure that you can complete all the exam sections in the time provided. Pay attention to the Exam Progress at the top of the screen so you have sufficient time to complete any exam sections that follow this case study.\n\nTo answer the case study questions, you will bed to reference information that is provided in the case.\nCase studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.\n\nA Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.\n\nTo start the case study\n\nTo display the first question in this case study, select the “Next” button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the “Question” button to return to the question.\n\nOverview\n\nCompany Information\n\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-\nbased solutions by using Microsoft Foundry.Existing Environment\n\nIdentity Environment\n\nContoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.\n\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\n\nThe team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications.\n\nContoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.\n\nGenerative Environment\n\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\n\nProject1\n\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\n\nAgent1 has the following configurations:\n\nAgent1 uses a base model deployment.\nA safety evaluation pipeline is NOT enabled.\n\nTool invocation approval workflows are NOT enabled.\nConversation memory constraints are NOT configured.\n\nAgent1 interacts with customers by using digital support channels and answers general questions about Contoso products.\n\nProject1 is deployed to an Azure region located in the European Union (EU).\n\nAgent1Dev Team will use Project1 to optimize and maintain Agent1.\n\nProject2\n\nProject2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.\n\nDevelopment of the solution is incomplete.\n\nData Environment\n\nContoso stores product-related information in Azure resources that support AI applications.\n\nThe Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nThe product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\n\nContoso identifies the following issues:\n\nAgent1 has only general knowledge of the Contoso products.\nA recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet.\nAgent1 does NOT use the detailed product information in the product sheets stored in storage1 when   responding to customer questions.\nThe finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n\nRequirements\n\nPlanned Changes\n\nContoso plans to implement the following changes:\n\nImplement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.\nUpdate the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\nEnable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.\nImplement an indexing solution for the product sheets that Agent1 can use to answer customer questions.\nComplete the development of the video creation solution.\n\nTechnical Requirements\n\nContoso identifies the following technical requirements:\n\nThe model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\n\nThe product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\nResponses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product details.\nThe model version used by Agent1 must remain consistent to ensure stable responses.\nThe data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\n\nContoso identifies the following security and compliance requirements:\n\nAPI keys must NOT be used to access Foundry-deployed models.\nAccess to the Azure resources must follow the principle of least privilege.\nThe developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.\nAccess to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.\nAccess to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test.\nAgent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\nThe product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.\n\nBusiness Requirements\n\nContoso identifies the following business requirements:\n\nUsers that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\nAgent1 must answer questions only about the products sold by Contoso."
  },
  "zh": {
   "stem": "您需要为 Agent1 配置一个索引流水线，以检索存储在 storage1 中的相关产品信息。该解决方案必须满足技术要求。\n您应该使用哪两个内置技能？每个正确答案都是解决方案的一部分。\n注意： 每个正确的选择值为一分。",
   "options": {
    "A": "Azure OpenAI 嵌入",
    "B": "实体识别",
    "C": "文本拆分",
    "D": "合并",
    "E": "语言检测 F. 关键短语提取"
   },
   "explanation": "此场景中最重要的技能是 Azure OpenAI 嵌入和文本拆分。\n\nAzure OpenAI 嵌入：此技能对于生成文本的向量表示（嵌入）至关重要，这直接启用所需的向量搜索能力。\n\n文本拆分：此技能是必需的，因为 LLM 和嵌入模型有严格的令牌限制。拆分\n\n将大型产品详细信息表拆分为较小的块可以确保文本适合嵌入模型，并提高语义搜索的准确性。\n\n不正确：\n[不是 B]实体识别：这提取特定实体，如名称、日期或地点。虽然对高级过滤很有帮助，但它并不是启用基本语义或向量搜索的基础要求。\n\n[不是 D]合并：此技能将多个字段的文本合并为一个字符串。由于产品表已经是统一的文档，因此优先考虑拆分和分块，而不是合并单独的字段。\n\n[不适用 E]语言检测：此功能识别输入文本的语言。除非您的产品表完全支持多语言并需要将其路由到不同的语言模型，否则此技能是次要的。\n\n[不适用 F]关键短语提取：此功能提取主要的讨论要点或关键词。它主要用于传统的关键词标记或基本搜索索引，而您的需求特别要求基于向量和语义的检索。\n\n场景：\n技术要求；\n*-> 产品表必须通过使用索引流水线进行处理，以支持语义和向量搜索，以便 Agent1 能够检索相关的产品信息。\n\n数据环境：Azure 环境包含一个名为 storage1 的 Azure Blob 存储账户，该账户存储所有 Contoso 产品的产品详细信息表。\n\n计划变更：启用 Agent1 从存储在 storage1 中的产品表中检索和使用详细的产品信息。",
   "scenario": "实施信息提取解决方案\n\n测试单元 1\n\n案例研究\n\n这是一个案例研究。 案例研究的计时与其他考试部分不分开。您可以使用尽可能多的考试时间来完成每个案例研究。然而，可能会有额外的案例研究或其他考试部分。管理您的时间，以确保您能够在提供的时间内完成所有考试部分。请注意屏幕顶部的考试进度，以确保您有足够的时间完成此案例研究后面的任何考试部分。\n\n要回答案例研究问题，您需要参考案例中提供的信息。\n案例研究及相关问题可能包含展览或其他资源，提供有关案例中描述的场景的更多信息。 单个问题中提供的信息不适用于案例研究中的其他问题。\n\n在此案例研究结束时，将出现复查界面。从复查界面，您可以在进入下一个考试部分之前查看和更改您的答案。离开此案例研究后，您将无法返回。\n\n要开始案例研究\n\n要显示本案例研究中的第一个问题，请选择“下一步”按钮。在问题左侧，菜单提供了链接到信息的内容，例如业务需求、现有环境和问题陈述。在回答任何问题之前，请仔细阅读所有这些信息。当您准备好回答问题时，请选择“问题”按钮以返回问题。\n\n概述\n\n公司信息\n\nContoso 有限公司是一家跨国零售公司，通过使用 Microsoft Foundry 构建、部署和管理生成式人工智能和基于代理的解决方案。      现有环境\n\n身份环境\n\nContoso 使用 Microsoft Entra ID 进行身份管理、身份验证和授权功能，使代理能够访问组织资源和服务。\n\nContoso 最近成立了一个名为 Agent1Dev 团队的新 AI 工程团队，以优化和维护现有的 AI 解决方案。\n\n该团队与解决方案架构师、DevOps 工程师和安全工程师合作，设计、实施、监控和保护 AI 应用程序。\n\nContoso 还有一个名为 Agent1Test 团队的团队，负责在解决方案部署之前验证 AI 解决方案。\n\n生成环境\n\nContoso 有一个 Microsoft Foundry 部署，其中包含两个项目，分别名为 Project1 和 Project2。\n\n项目1\n\nProject1 包含一个名为 Agent1 的客户支持代理，帮助客户处理产品咨询和故障排除请求。\n\nAgent1 具有以下配置：\n\nAgent1 使用基础模型部署。\n安全评估流水线未启用。\n\n工具调用审批工作流未启用。\n对话记忆约束未配置。\n\nAgent1 通过数字支持渠道与客户互动，并回答有关Contoso 产品的一般问题。\n\nProject1 部署在位于欧盟 (EU) 的 Azure 区域。\n\nAgent1Dev 团队将使用 Project1 来优化和维护 Agent1。\n\n项目2\n\nProject2 包含一个已部署的视频生成模型。Contoso 的市场部门可以访问 Project2，并计划使用该模型开发视频创作解决方案。\n\n该解决方案的开发尚未完成。\n\n数据环境\n\nContoso 在支持 AI 应用的 Azure 资源中存储与产品相关的信息。\n\nAzure 环境包含一个名为 storage1 的 Azure Blob 存储帐户，该帐户存储所有 Contoso 产品的产品详细信息表。\n\n产品说明书包括规格、功能描述和产品支持信息，\nAgent1 可以用来回答客户问题。产品说明书以 PDF 格式存储。\n\n问题陈述\n\nContoso 确定了以下问题：\n\nAgent1 对 Contoso 产品的了解仅限于一般知识。\n最近与 Agent1 的聊天互动进行了情感分析。分析结果尚未 处理。\n\nAgent1 在回答客户问题时 不 使用存储在 storage1 中的产品说明书中的详细产品信息。\nContoso 的财务部门报告称，供应商发票必须手动审核，以确保发票与供应商合同中定义的条款相符。发票包含表格、徽标，以及各种布局，使得文档难以一致地处理。\n\n需求\n\n计划变更\n\nContoso 计划实施以下变更：\n\n为 Project1 实施一个解决方案，通过评估发票的视觉布局和文本内容来分析供应商发票，以便能够根据供应商合同条款验证发票细节。\n更新 Agent1 使用的基础模型部署，并标准化模型版本以确保连续性和一致的响应。\n启用 Agent1 从存储在storage1 中的产品表中检索和使用详细的产品信息。\n为产品表实施一个索引解决方案，以便 Agent1 可以用来回答客户问题。\n完成视频创作解决方案的开发。\n\n技术要求\n\nContoso 确定了以下技术要求：\n\nAgent1 使用的模型部署必须支持可扩展的高吞吐量生成式人工智能工作负载，并能够动态扩展以处理可变的客户支持流量，而无需预留吞吐量容量。\n\n产品表必须通过使用索引流水线进行处理，以支持语义和向量搜索，以便 Agent1 可以检索相关的产品信息。\n使用产品表信息生成的响应必须相关、完整且准确。\nAgent1 必须能够使用产品表回答有关产品详细信息的自然语言问题。\nAgent1 使用的模型版本必须保持一致，以确保稳定的响应。\n模型处理的数据必须保留在欧盟内。\n\n安全和合规要求\n\nContoso 确定了以下安全和合规要求：\n\nAPI 密钥必须 不 用于访问部署在 Foundry 上的模型。\n访问 Azure 资源必须遵循最小权限原则。\nContoso 的开发人员必须使用 Microsoft Entra 身份验证来访问 Microsoft Foundry 资源。\n\n访问 Project1 必须通过名为 SC_Agent1_Dev 的安全组分配给 Agent1Dev 团队的成员。\n\n访问 Project1 必须通过名为 SC_Agent1_Test 的安全组分配给 Agent1Test 团队的成员。\n\nAgent1 绝不能泄露客户信息，即使包含客户数据的文档错误地添加到 storage1 的产品表存储库中。\n产品表可能包含嵌入文本的图像。Agent1 必须受到保护，以防止潜在隐藏在图像中的恶意指令。\n\n业务需求\n\nContoso 确定了以下业务需求：\n\n与 Agent1 互动的用户必须在未来的互动中拥有个性化体验，包括 Agent1 能够保留对话上下文并回忆之前互动中的相关信息。\n\nAgent1 只能回答有关 Contoso 销售的产品的问题。"
  }
 },
 {
  "id": 104,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You need to recommend a solution to support the planned changes and technical requirements for Agent1 to use the product information stored in storage1.\nWhat should you include in the recommendation?",
   "options": {
    "A": "Azure Translator in Foundry Tools",
    "B": "Grounding with Bing Search",
    "C": "Azure AI Search",
    "D": "Azure Document intelligence in Foundry Tools"
   },
   "explanation": "The best choice to include to support this scenario is Azure AI Search.\n\nRetrieval-Augmented Generation (RAG): Azure AI Search acts as the primary knowledge base and indexing infrastructure for AI agents. It ingests raw unstructured data directly from Azure Blob Storage, indexes it, and creates vector embeddings.\n\nNatural Language Queries: It supports semantic ranking and vector search. This allows the Foundry agent to handle user questions written in natural language and find exact matches or conceptual relevance.\n\nRelevance and Accuracy: By leveraging grounding data through an indexer, it ensures the agent's responses are strictly tied back to the product detail sheets, preventing hallucinations and verifying accuracy.\n\nIncorrect:\n[Not B] Grounding with Bing Search: This tool connects the agent to the live internet. Because the product sheets are proprietary company data stored securely inside your private Azure Blob Storage account, Bing Search cannot access them and will not help answer specific questions about Contoso products.\n\n[Not D] Why Document Intelligence is Incorrect\n\nExtraction vs. Retrieval: Azure Document Intelligence  is used to extract structure, text, tables, and form fields from files to turn unstructured data into structured data formats.\n\nMissing Search Infrastructure: It does not possess a native search indexer, vector database, or semantic query engine to accept natural language user questions and dynamically return grounded answers. It is instead used as a tool prior to or alongside Azure AI Search to help clean and structure highly complex layouts during the data ingestion pipeline.\n\nScenario:\nTechnical Requirements;\nResponses generated by using the product sheet information must be relevant, complete, and accurate.\n*-> Agent1 must be able to use the product sheets to answer natural language questions about product details.\n\nData environment: The Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nPlanned changes: Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.",
   "scenario": "Implement information extraction solutions\n\nTestlet 1\n\nCase Study\n\nThis is a case study. Case studies are not timed separately from other exam sections. You can use as much exam time as you would like to complete each case study. However, there might be additional case studies or other exam sections. Manage your time to ensure that you can complete all the exam sections in the time provided. Pay attention to the Exam Progress at the top of the screen so you have sufficient time to complete any exam sections that follow this case study.\n\nTo answer the case study questions, you will bed to reference information that is provided in the case.\nCase studies and associated questions might contain exhibits or other resources that provide more information about the scenario described in the case. Information provided in an individual question does not apply to the other questions in the case study.\n\nA Review Screen will appear at the end of this case study. From the Review Screen, you can review and change your answers before you move to the next exam section. After you leave this case study, you will NOT be able to return to it.\n\nTo start the case study\n\nTo display the first question in this case study, select the “Next” button. To the left of the question, a menu provides links to information such as business requirements, the existing environment, and problem statements. Please read through all this information before answering any questions. When you are ready to answer a question, select the “Question” button to return to the question.\n\nOverview\n\nCompany Information\n\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent-\nbased solutions by using Microsoft Foundry.Existing Environment\n\nIdentity Environment\n\nContoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities that enable agents to access organizational resources and services.\n\nContoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain existing AI solutions.\n\nThe team collaborates with solution architects, DevOps engineers, and security engineers to design, implement. monitor, and secure AI applications.\n\nContoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the solution deployments.\n\nGenerative Environment\n\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\n\nProject1\n\nProject1 contains a customer support agent named Agent1 that assists customers with product inquiries and troubleshooting requests.\n\nAgent1 has the following configurations:\n\nAgent1 uses a base model deployment.\nA safety evaluation pipeline is NOT enabled.\n\nTool invocation approval workflows are NOT enabled.\nConversation memory constraints are NOT configured.\n\nAgent1 interacts with customers by using digital support channels and answers general questions about Contoso products.\n\nProject1 is deployed to an Azure region located in the European Union (EU).\n\nAgent1Dev Team will use Project1 to optimize and maintain Agent1.\n\nProject2\n\nProject2 contains a deployed video generation model. The marketing department at Contoso has access to Project2 and plans to use the model to develop a video creation solution.\n\nDevelopment of the solution is incomplete.\n\nData Environment\n\nContoso stores product-related information in Azure resources that support AI applications.\n\nThe Azure environment contains an Azure Blob Storage account named storage1 that stores product detail sheets for all the Contoso products.\n\nThe product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\n\nContoso identifies the following issues:\n\nAgent1 has only general knowledge of the Contoso products.\nA recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT been processed yet.\nAgent1 does NOT use the detailed product information in the product sheets stored in storage1 when   responding to customer questions.\nThe finance department at Contoso reports that vendor invoices must be reviewed manually to ensure that the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and varied layouts that make the documents difficult to process consistently.\n\nRequirements\n\nPlanned Changes\n\nContoso plans to implement the following changes:\n\nImplement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout and the textual content of the invoices, so that the invoice details can be verified against the vendor contract terms.\nUpdate the base model deployment used by Agent1 and standardize the model version to ensure continuity and consistent responses.\nEnable Agent1 to retrieve and use the detailed product information from the product sheets stored in storage1.\nImplement an indexing solution for the product sheets that Agent1 can use to answer customer questions.\nComplete the development of the video creation solution.\n\nTechnical Requirements\n\nContoso identifies the following technical requirements:\n\nThe model deployment used by Agent1 must support scalable, high-throughput generative AI workloads and dynamically scale to handle variable customer support traffic, without requiring reserved throughput capacity.\n\nThe product sheets must be processed by using an indexing pipeline that enables semantic and vector search, so that Agent1 can retrieve the relevant product information.\nResponses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product details.\nThe model version used by Agent1 must remain consistent to ensure stable responses.\nThe data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\n\nContoso identifies the following security and compliance requirements:\n\nAPI keys must NOT be used to access Foundry-deployed models.\nAccess to the Azure resources must follow the principle of least privilege.\nThe developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra authentication.\nAccess to Project1 must be assigned to the members of Agent1Dev Team by using a security group named SC_Agent1_Dev.\nAccess to Project1 must be assigned to the members of Agent1Test Team by using a security group named SC_Agent1_Test.\nAgent1 must never reveal customer information, even if a document that contains customer data is added erroneously to the product sheet repository in storage1.\nThe product sheets might contain images that include embedded text. Agent1 must be protected from malicious instructions potentially hidden within the images.\n\nBusiness Requirements\n\nContoso identifies the following business requirements:\n\nUsers that interact with Agent1 must have a personalized experience in future interactions, including the ability for Agent1 to retain conversation context and recall relevant information from previous interactions.\nAgent1 must answer questions only about the products sold by Contoso."
  },
  "zh": {
   "stem": "您需要推荐一个解决方案，以支持计划的变更和技术要求，使 Agent1 能够使用存储在 storage1 中的产品信息。\n您应该在推荐中包含什么？",
   "options": {
    "A": "Foundry Tools 中的 Azure Translator",
    "B": "与 Bing Search 的基础连接",
    "C": "Azure AI Search",
    "D": "Azure 文档智能在 Foundry 工具中的应用"
   },
   "explanation": "支持此场景的最佳选择是 Azure AI 搜索。\n\n检索增强生成 (RAG)：Azure AI 搜索作为 AI 代理的主要知识库和索引基础设施。它直接从 Azure Blob 存储中获取原始非结构化数据，对其进行索引，并创建向量嵌入。\n\n自然语言查询：它支持语义排名和向量搜索。这使得 Foundry 代理能够处理以自然语言书写的用户问题，并找到精确匹配或概念相关的答案。\n\n相关性和准确性：通过利用索引器的基础数据，它确保代理的响应严格与产品详细信息表相关联，防止幻觉并验证准确性。\n\n不正确：\n[不是 B]与 Bing 搜索的基础连接：该工具将代理连接到实时互联网。由于产品表是存储在您私人 Azure Blob 存储帐户中的专有公司数据，Bing 搜索无法访问它们，也无法帮助回答有关 Contoso 产品的具体问题。\n\n[不是 D]为什么文档智能是不正确的\n\n提取与检索：Azure 文档智能用于从文件中提取结构、文本、表格和表单字段，以将非结构化数据转换为结构化数据格式。\n\n缺失搜索基础设施：它没有本地搜索索引器、向量数据库或语义查询引擎来接受自然语言用户问题并动态返回有根据的答案。它被用作 Azure AI Search 之前或同时的工具，以帮助在数据摄取流水线中清理和结构化高度复杂的布局。\n\n场景：\n技术要求；\n使用产品表信息生成的响应必须相关、完整且准确。\n*-> Agent1 必须能够使用产品表回答有关产品详细信息的自然语言问题。\n\n数据环境：Azure 环境包含一个名为 storage1 的 Azure Blob 存储账户，该账户存储所有 Contoso 产品的产品详细信息表。\n\n计划变更：启用 Agent1 从存储在 storage1 中的产品表中检索和使用详细的产品信息。",
   "scenario": "实施信息提取解决方案\n\n测试单元 1\n\n案例研究\n\n这是一个案例研究。 案例研究的计时与其他考试部分不分开。您可以使用尽可能多的考试时间来完成每个案例研究。然而，可能会有额外的案例研究或其他考试部分。管理您的时间，以确保您能够在提供的时间内完成所有考试部分。请注意屏幕顶部的考试进度，以确保您有足够的时间完成此案例研究后面的任何考试部分。\n\n要回答案例研究问题，您需要参考案例中提供的信息。\n案例研究及相关问题可能包含展览或其他资源，提供有关案例中描述的场景的更多信息。 单个问题中提供的信息不适用于案例研究中的其他问题。\n\n在此案例研究结束时，将出现复查界面。从复查界面，您可以在进入下一个考试部分之前查看和更改您的答案。离开此案例研究后，您将无法返回。\n\n要开始案例研究\n\n要显示本案例研究中的第一个问题，请选择“下一步”按钮。在问题左侧，菜单提供了链接到信息的内容，例如业务需求、现有环境和问题陈述。在回答任何问题之前，请仔细阅读所有这些信息。当您准备好回答问题时，请选择“问题”按钮以返回问题。\n\n概述\n\n公司信息\n\nContoso 有限公司是一家跨国零售公司，通过使用 Microsoft Foundry 构建、部署和管理生成式人工智能和基于代理的解决方案。      现有环境\n\n身份环境\n\nContoso 使用 Microsoft Entra ID 进行身份管理、身份验证和授权功能，使代理能够访问组织资源和服务。\n\nContoso 最近成立了一个名为 Agent1Dev 团队的新 AI 工程团队，以优化和维护现有的 AI 解决方案。\n\n该团队与解决方案架构师、DevOps 工程师和安全工程师合作，设计、实施、监控和保护 AI 应用程序。\n\nContoso 还有一个名为 Agent1Test 团队的团队，负责在解决方案部署之前验证 AI 解决方案。\n\n生成环境\n\nContoso 有一个 Microsoft Foundry 部署，其中包含两个项目，分别名为 Project1 和 Project2。\n\n项目1\n\nProject1 包含一个名为 Agent1 的客户支持代理，帮助客户处理产品咨询和故障排除请求。\n\nAgent1 具有以下配置：\n\nAgent1 使用基础模型部署。\n安全评估流水线未启用。\n\n工具调用审批工作流未启用。\n对话记忆约束未配置。\n\nAgent1 通过数字支持渠道与客户互动，并回答有关Contoso 产品的一般问题。\n\nProject1 部署在位于欧盟 (EU) 的 Azure 区域。\n\nAgent1Dev 团队将使用 Project1 来优化和维护 Agent1。\n\n项目2\n\nProject2 包含一个已部署的视频生成模型。Contoso 的市场部门可以访问 Project2，并计划使用该模型开发视频创作解决方案。\n\n该解决方案的开发尚未完成。\n\n数据环境\n\nContoso 在支持 AI 应用的 Azure 资源中存储与产品相关的信息。\n\nAzure 环境包含一个名为 storage1 的 Azure Blob 存储帐户，该帐户存储所有 Contoso 产品的产品详细信息表。\n\n产品说明书包括规格、功能描述和产品支持信息，\nAgent1 可以用来回答客户问题。产品说明书以 PDF 格式存储。\n\n问题陈述\n\nContoso 确定了以下问题：\n\nAgent1 对 Contoso 产品的了解仅限于一般知识。\n最近与 Agent1 的聊天互动进行了情感分析。分析结果尚未 处理。\n\nAgent1 在回答客户问题时 不 使用存储在 storage1 中的产品说明书中的详细产品信息。\nContoso 的财务部门报告称，供应商发票必须手动审核，以确保发票与供应商合同中定义的条款相符。发票包含表格、徽标，以及各种布局，使得文档难以一致地处理。\n\n需求\n\n计划变更\n\nContoso 计划实施以下变更：\n\n为 Project1 实施一个解决方案，通过评估发票的视觉布局和文本内容来分析供应商发票，以便能够根据供应商合同条款验证发票细节。\n更新 Agent1 使用的基础模型部署，并标准化模型版本以确保连续性和一致的响应。\n启用 Agent1 从存储在storage1 中的产品表中检索和使用详细的产品信息。\n为产品表实施一个索引解决方案，以便 Agent1 可以用来回答客户问题。\n完成视频创作解决方案的开发。\n\n技术要求\n\nContoso 确定了以下技术要求：\n\nAgent1 使用的模型部署必须支持可扩展的高吞吐量生成式人工智能工作负载，并能够动态扩展以处理可变的客户支持流量，而无需预留吞吐量容量。\n\n产品表必须通过使用索引流水线进行处理，以支持语义和向量搜索，以便 Agent1 可以检索相关的产品信息。\n使用产品表信息生成的响应必须相关、完整且准确。\nAgent1 必须能够使用产品表回答有关产品详细信息的自然语言问题。\nAgent1 使用的模型版本必须保持一致，以确保稳定的响应。\n模型处理的数据必须保留在欧盟内。\n\n安全和合规要求\n\nContoso 确定了以下安全和合规要求：\n\nAPI 密钥必须 不 用于访问部署在 Foundry 上的模型。\n访问 Azure 资源必须遵循最小权限原则。\nContoso 的开发人员必须使用 Microsoft Entra 身份验证来访问 Microsoft Foundry 资源。\n\n访问 Project1 必须通过名为 SC_Agent1_Dev 的安全组分配给 Agent1Dev 团队的成员。\n\n访问 Project1 必须通过名为 SC_Agent1_Test 的安全组分配给 Agent1Test 团队的成员。\n\nAgent1 绝不能泄露客户信息，即使包含客户数据的文档错误地添加到 storage1 的产品表存储库中。\n产品表可能包含嵌入文本的图像。Agent1 必须受到保护，以防止潜在隐藏在图像中的恶意指令。\n\n业务需求\n\nContoso 确定了以下业务需求：\n\n与 Agent1 互动的用户必须在未来的互动中拥有个性化体验，包括 Agent1 能够保留对话上下文并回忆之前互动中的相关信息。\n\nAgent1 只能回答有关 Contoso 销售的产品的问题。"
  }
 },
 {
  "id": 105,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project named Project1.\nProject1 contains an application that processes PDF vendor invoices.\nYou need to configure Azure Document Intelligence in Foundry Tools to generate a Markdown output that preserves the sections and table structure of the PDFs. The solution must minimize development effort.\nWhat should you do?",
   "options": {
    "A": "Configure output=figures when you analyze the PDF.",
    "B": "Configure content=markdown when you analyze the document.",
    "C": "Increase the confidence threshold.",
    "D": "Set the output_content_format=ContentFormat.MARKDOWN value."
   },
   "explanation": "Setting the output format parameter to Markdown is the correct and recommended action, but the exact property and enum name depend on whether you are interacting with the REST API directly or using the Python SDK.\n\nTo process PDF invoices and preserve their tables, headings, and visual sections in GitHub Flavored Markdown (GFM), configure your Azure Document Intelligence layout model parameters using the precise syntax detailed below.\n\nImplementation Details            Python SDK Syntax: In the Azure Python client library, the parameter name is output_content_format, and its required value is DocumentContentFormat.MARKDOWN (rather than ContentFormat.MARKDOWN, which is used in the .NET C# SDK)"
  },
  "zh": {
   "stem": "您有一个名为 Project1 的 Microsoft Foundry 项目。\nProject1 包含一个处理 PDF 供应商发票的应用程序。\n您需要在 Foundry Tools 中配置 Azure Document Intelligence，以生成一个保留 PDF 部分和表格结构的Markdown 输出。该解决方案必须最小化开发工作量。\n您应该怎么做？",
   "options": {
    "A": "在分析 PDF 时配置 output=figures。",
    "B": "在分析文档时配置 content=markdown。",
    "C": "提高置信度阈值。",
    "D": "设置 output_content_format=ContentFormat.MARKDOWN 值。"
   },
   "explanation": "将输出格式参数设置为 Markdown 是正确且推荐的操作，但确切的属性和枚举名称取决于您是直接与 REST API 交互还是使用Python SDK。\n\n要处理 PDF 发票并保留其表格、标题和视觉部分在 GitHub FlavoredMarkdown (GFM) 中，请使用下面详细的精确语法配置您的 Azure 文档智能布局模型参数。\n\n实施细节                            Python SDK 语法：在 Azure Python 客户端库中，参数名称为 output_content_format，其必需值为 DocumentContentFormat.MARKDOWN（而不是 ContentFormat.MARKDOWN，后者在 .NET C# SDK 中使用）"
  }
 },
 {
  "id": 106,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that ingests scanned PDF invoices stored in Azure Blob Storage.\nEach invoice contains printed fine items and has a table-based layout.\nExtracted results are stored as structured JSON and used as grounding data for an agent in a Retrieval Augmented Generation (RAG) solution.\nYou need to create a single analyzer that meets the following requirements:\nExtracts the invoice number, invoice date, vendor name, and total amount across varying templates Returns confidence scores so that results with confidence below 0.80 can be routed for supervisor review What should you use?",
   "options": {
    "A": "a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence scores",
    "B": "a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the extracted fields and the returned confidence scores for routing",
    "C": "the Azure Content Understanding in Foundry Tools prebuilt-layout analyzer",
    "D": "the Azure Content Understanding in Foundry Tools prebuilt-documentSearch analyzer and search.score from the Azure AI Search results for routing"
   },
   "explanation": "The best option in this scenario is a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the extracted fields and the returned confidence scores for routing.\n\nCustom Field Targeting with Confidence Scores: Azure Content Understanding allows you to build a document analyzer with a user-defined schema. By defining your required fields (InvoiceNumber, InvoiceDate, VendorName, and TotalAmount), the service will handle extraction across varying layouts and return a dedicated field-level confidence score. You can natively evaluate these confidence metrics to implement your supervisor routing workflow.\n\nRAG-Ready Output Structure: The service naturally returns highly structured JSON payloads. This makes it perfectly optimized to be ingested directly as grounding data for a Retrieval-Augmented Generation (RAG) agent.\n\nIncorrect:\n[Not C] The prebuilt-layout analyzer extracts raw structural elements such as blocks of text, hierarchy, selection marks, and complete tables. It does not automatically classify or cleanly isolate specific target entities (like vendor name or total amount) into dedicated schema properties, leaving you with heavy post-processing work to isolate the text.\n\n[Not D] The prebuilt-documentSearch analyzer is optimized for broad, layout-aware text extraction for indexing.\nRelying on Azure AI Search's search.score for supervisor routing is conceptually flawed; search.score represents a relevance score for a search query ranking rather than an accuracy metric for data extraction confidence."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 项目，该项目获取存储在 Azure Blob 存储中的扫描 PDF 发票。\n每个发票包含打印的细项，并具有基于表格的布局。\n提取的结果以结构化 JSON 存储，并用作检索增强生成 (RAG) 解决方案中代理的基础数据。\n您需要创建一个满足以下要求的单一分析器：\n提取发票号码、发票日期、供应商名称和总金额，适用于不同模板返回置信度分数，以便置信度低于 0.80 的结果可以转交给主管审核您应该使用什么？",
   "options": {
    "A": "一个启用了基础性保护措施的 Foundry 代理，用于提取发票字段和置信度 分数",
    "B": "一个自定义的 Azure 内容理解工具分析器，在 Foundry 工具中定义所需字段为 提取字段和返回的置信度分数以供路由",
    "C": "Azure 内容理解工具中的 预构建布局 分析器",
    "D": "Azure 内容理解工具中的 预构建文档搜索 分析器和 search.score 来自 Azure AI 搜索结果以供路由"
   },
   "explanation": "在这种情况下，最佳选项是一个自定义的 Azure 内容理解工具分析器，它将所需字段定义为提取字段，并返回用于路由的置信度分数。\n\n带有置信度分数的自定义字段定位：Azure 内容理解允许您构建一个具有用户定义架构的文档分析器。通过定义所需字段（发票号码、发票日期、供应商名称和总金额），该服务将处理不同布局的提取，并返回专用的字段级置信度分数。您可以原生评估这些置信度指标，以实施您的主管路由工作流。\n\nRAG-就绪输出结构：该服务自然返回高度结构化的 JSON 负载。这使得它完美优化为可以直接作为检索增强生成（RAG）代理的基础数据。\n\n不正确：\n[非 C]预构建布局分析器提取原始结构元素，如文本块、层次结构、选择标记和完整表格。它不会自动分类或干净地将特定目标实体（如供应商名称或总金额）隔离到专用的模式属性中，导致您需要进行大量后处理工作来隔离文本。\n\n[不是 D]预构建文档搜索分析器经过优化，能够进行广泛的、布局感知的文本提取以便于索引。\n依赖 Azure AI Search 的 search.score 进行监督路由在概念上是错误的；search.score代表的是搜索查询排名的相关性分数，而不是数据提取置信度的准确性指标。"
  }
 },
 {
  "id": 107,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that uses Azure AI Search to ground an agent in internal documentation.\nAfter a recent content update, users report that the agent’s answers have become less accurate.\nYou need to identify whether the retrieved content is negatively influencing the model’s generated responses.\nWhich observability signal should you review?",
   "options": {
    "A": "indexer status and failure history",
    "B": "latency breakdown traces",
    "C": "prediction drift metrics",
    "D": "groundedness evaluation metrics"
   },
   "explanation": "The most interesting observability signal in this scenario is Retrieval Score vs. Response Quality (Groundedness Evaluation), specifically analyzing the Context Relevance metric alongside Retrieval Confidence Scores.\n\nBecause your LLM agent uses a Retrieval-Augmented Generation (RAG) pattern via Azure AI Search, a sudden drop in accuracy after a content update usually implies that the search index is either surface-\nmatching bad keywords, or the ranking algorithm is pulling technically relevant but contextually wrong documents."
  },
  "zh": {
   "stem": "您有一个使用 Azure AI Search 将代理与内部文档相结合的 Microsoft Foundry 项目。\n在最近的内容更新后，用户报告代理的回答变得不够准确。\n您需要确定检索到的内容是否对模型生成的响应产生了负面影响。\n您应该查看哪个可观察信号？",
   "options": {
    "A": "索引器状态和失败历史",
    "B": "延迟分解跟踪",
    "C": "预测漂移指标",
    "D": "相关性评估指标"
   },
   "explanation": "在这种情况下，最有趣的可观察信号是检索分数与响应质量（相关性评估），特别是分析上下文相关性指标与检索置信度分数。\n\n因为您的 LLM 代理通过 Azure AI Search 使用检索增强生成（RAG）模式，内容更新后准确度的突然下降通常意味着搜索索引要么在表面上匹配不良关键字，要么排名算法拉取了技术上相关但上下文上错误的文档。"
  }
 },
 {
  "id": 108,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent. The agent uses two tools to perform the following actions:\nUse Azure AI Search to retrieve answers from a private product documentation index.\nUse the web search tool to retrieve public information on the internet.\nYou need to ensure that for a specific run, the agent deterministically retrieves information only from the internet.\nTo what should you set tool_choice?",
   "options": {
    "A": "{“type”: “bing_grouding”}",
    "B": "{“type”: “azure_ai-search”}",
    "C": "“auto”",
    "D": "“required”"
   },
   "explanation": "To force a specific run to exclusively use public information from the internet instead of your private documents, override the tool orchestration payload at the run level. Set the tool_choice directive specifically to the web grounding tool (e.g., bing_grounding or web_search) and constrain the tools arrayfor that run."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。该代理使用两个工具执行以下操作：\n使用 Azure AI Search 从私有产品文档索引中检索答案。\n使用网络搜索工具从互联网上检索公共信息。\n您需要确保在特定运行中，代理仅从互联网上确定性地检索信息。\n你应该将 tool_choice 设置为什么？",
   "options": {
    "A": "{“类型”：“bing_grouding”}",
    "B": "{“类型”：“azure_ai-搜索”}",
    "C": "“自动”",
    "D": "“必需”"
   },
   "explanation": "说明：\n要强制特定运行仅使用来自互联网的公共信息，而不是你的私人documents，请在运行级别覆盖工具编排有效负载。将 tool_choice 指令专门设置为网络基础工具（例如，bing_grounding 或 we b_search），并约束该运行的工具数组。"
  }
 },
 {
  "id": 109,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent.\nThe agent uses Azure Content Understanding in Foundry Too to process vendor onboarding packets. The packs include digital PDFs that contain tables and hyperlinks.\nThe extracted content is indexed for search and provided to a downstream agent in the Markdown format.\nYou need to generate a Markdown output that has a layout and a semantic structure optimized for Retrieval Augmented Generation (RAG) workflows.\nWhich built-in analyzer should you use?",
   "options": {
    "A": "prebuilt-documentFieldSchema",
    "B": "prebuilt-documentSearch",
    "C": "prebuilt-read",
    "D": "prebuilt-layout"
   },
   "explanation": "The appropriate built-in analyzer to use is prebuilt-documentSearch.\n\nRAG Optimization: The prebuilt-documentSearch analyzer is part of the dedicated Retrieval-Augmented Generation (RAG) analyzer suite within Azure Content Understanding. It is specifically built to perform semantic analysis and extract documents in structures optimized for chunking, indexing, and vector workflows.\n\nNative Markdown Layout: It extracts layout structures (such as paragraphs, complex multi-page tables, and hierarchical sections) directly into clean Markdown format. This structural preservation is ideal for downstream consumption by large language models (LLMs) or other AI agents."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。\n代理在 Foundry Too 中使用 Azure 内容理解来处理供应商入职包。该包包括包含表格和超链接的数字 PDF。\n提取的内容被编入索引以供搜索，并以 Markdown 格式提供给下游代理。\n你需要生成一个 Markdown 输出，其布局和语义结构经过优化，以适应检索增强生成（RAG）工作流。\n您应该使用哪个内置分析器？",
   "options": {
    "A": "预构建文档字段架构",
    "B": "预构建文档搜索",
    "C": "预构建阅读",
    "D": "预构建布局"
   },
   "explanation": "说明：\n适合使用的内置分析器是预构建文档搜索。\n\nRAG 优化：预构建文档搜索分析器是 Azure 内容理解中专用的增强检索生成（RAG）分析器套件的一部分。它专门用于执行语义分析并提取以优化分块、索引和向量工作流的结构中的文档。\n\n本地 Markdown 布局：它将布局结构（例如段落、复杂的多页表格和层次部分）直接提取为干净的 Markdo wn 格式。这种结构保留非常适合大型语言模型（LLMs）或其他 AI 代理的下游使用。"
  }
 },
 {
  "id": 110,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry project that contains an agent.\nThe agent uses Azure AI Search for Retrieval Augmented Generation (RAG).\nYou plan to ingest and index PDF product manuals.\nYou need to build a solution that supports semantic similarity matching. The solution must ensure that the agent retrieves relevant data when user questions use different wording than the product manuals.\nWhich indexing approach should you use?",
   "options": {
    "A": "vector search",
    "B": "semantic ranking",
    "C": "suggesters",
    "D": "analyzers"
   },
   "explanation": "Vector search is the correct indexing and retrieval type to use for this solution.\n\nVector search versus semantic ranking While both features help bridge the gap between different wordings, vector search is specifically designed at the indexing and retrieval layer to handle semantic similarity matching by converting text into mathematical vectors (embeddings) based on conceptual meaning. Semantic ranking is a secondary re-\nranking layer applied after initial retrieval to improve precision, but it cannot function as the primary indexing method on its own."
  },
  "zh": {
   "stem": "您有一个包含代理的 Microsoft Foundry 项目。\n该代理使用 Azure AI 搜索进行检索增强生成（RAG）。\n您计划摄取和索引 PDF 产品手册。\n您需要构建一个支持语义相似性匹配的解决方案。该解决方案必须确保在用户提问使用与产品手册不同的措辞时，代理能够检索相关数据。\n您应该使用哪种索引方法？",
   "options": {
    "A": "向量搜索",
    "B": "语义排名",
    "C": "建议者",
    "D": "分析器"
   },
   "explanation": "说明：\n向量搜索是此解决方案中正确的索引和检索类型。\n\n向量搜索与语义排名虽然这两种功能都有助于弥合不同措辞之间的差距，但向量搜索专门设计用于索引和检索层，以通过将文本转换为基于概念意义的数学向量（嵌入）来处理语义相似性匹配。语义排名是应用于初始检索后的二次重新排名层，以提高精度，但它不能单独作为主要的索引方法。"
  }
 },
 {
  "id": 111,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have a Microsoft Foundry agent that grounds responses from an Azure Search index that contains the following:\nSearchable text fields for product names and product codes A vector field that stores embeddings for product descriptions You need to ensure that users can query the index by using the following:\nExact product names or codes Natural language descriptions of the products What should you configure?",
   "options": {
    "A": "vector search only",
    "B": "hybrid search",
    "C": "keyword search only",
    "D": "semantic search only"
   },
   "explanation": "To meet your requirements, you need to configure a Hybrid Search with Semantic Ranking in Azure AI Search. This setup combines keyword matching for exact identifiers with vector search for natural language queries, delivering the most accurate grounding data to your Microsoft Foundry agent."
  },
  "zh": {
   "stem": "您有一个 Microsoft Foundry 代理，它从包含以下内容的 Azure 搜索索引中获取响应：\n可搜索的产品名称和产品代码的文本字段存储产品描述嵌入的向量字段您需要确保用户可以通过以下方式查询索引：\n确切的产品名称或代码产品的自然语言描述您应该配置什么？",
   "options": {
    "A": "仅向量搜索",
    "B": "混合搜索",
    "C": "仅关键字搜索",
    "D": "仅语义搜索"
   },
   "explanation": "说明：\n为了满足您的要求，您需要在 Azure AI 搜索中配置带有语义排名的混合搜索。此设置结合了对确切标识符的关键字匹配和对自然语言查询的向量搜索，为您的 Microsoft Foundry 代理提供最准确的基础数据。"
  }
 },
 {
  "id": 112,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have an Azure AI Search indexer that ingests PDF policy manuals.\nClient applications must display page-level citations that have bounding polygons for both text and images.\nYou need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. The solution must meet the following requirements:\nProvide text and image location metadata.\nExtract tables that span multiple pages.\nWhat should you add?",
   "options": {
    "A": "Document Extraction",
    "B": "Azure Content Understanding in Foundry Tools",
    "C": "GenAI Prompt",
    "D": "Document Layout"
   },
   "explanation": "To meet all requirements for this project, you need the Azure Content Understanding skill (integrated via Azure AI Foundry / Microsoft Foundry Tools).\n\n1. Extracting Cross-Page Tables: A critical constraint is the ability to recognize and extract tables that span multiple pages as a single unit. The Azure Content Understanding skill natively supports this capability, whereas the older Document Layout skill outputs layout content as flattened text/markdown boundaries that break across pages, leading to information loss.\n\n2. Page-Level Bounding Polygons: It functions as a layout-aware, built-in multimodal content extraction skill that maps out text and image location metadata (location_metadata), satisfying your client application requirement for strict page-level citation boundaries."
  },
  "zh": {
   "stem": "您有一个 Azure AI 搜索索引器，它摄取 PDF 政策手册。\n客户端应用程序必须显示具有文本和图像的边界多边形的页面级引用。\n您需要向 Azure AI 搜索技能集添加一个内置的多模态内容提取技能。该解决方案必须满足以下要求：\n提供文本和图像位置元数据。\n提取跨多页的表格。\n你应该添加什么？",
   "options": {
    "A": "文档提取",
    "B": "Azure 内容理解在 Foundry 工具中的应用",
    "C": "GenAI 提示",
    "D": "文档布局"
   },
   "explanation": "说明：\n为了满足该项目的所有要求，您需要 Azure 内容理解技能（通过Azure AI Foundry / Microsoft Foundry 工具集成）。\n\n1. 提取跨页表格：一个关键约束是能够识别和提取跨多页的表格作为一个单元。Azure 内容理解技能本地支持此功能，而较旧的文档布局技能将布局内容输出为扁平文本/markdown 边界，在页面之间断裂，导致信息丢失。\n\n2. 页面级边界多边形：它作为一个布局感知的内置多模态内容提取技能，绘制文本和图像位置元数据（location_metadata），满足您的客户端应用程序对严格页面级引用边界的要求。"
  }
 },
 {
  "id": 113,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have an invoice-processing application named App1 that uses Azure Constant Understanding in Foundry Tools.\nYou are building a new Content Understanding pipeline named Pipeline1 that must meet the following requirements:\nCompare an invoice to its related purchase order Validate the voice against static vendor contact documents Return a single structured output that includes discrepancy findings You need to configure Pipeline1 and expose the pipeline as a single analyzer endpoint. What should you configure?",
   "options": {
    "A": "a single-file task in standard mode that uses the vendor contract provided as an additional document during analysis.",
    "B": "a single-file task in standard mode that uses confidence scores enabled for the extracted fields.",
    "C": "a multiple-file task in pro mode that uses the vendor contract files as reference data",
    "D": "a multi-file task in standard mode that uses the invoice and purchase order as input to the analyzer"
   },
   "explanation": "Multiple-file task: Required over a single-file task. Your pipeline needs to reconcile data across two separate active transactional documents (the invoice and the purchase order) within a single analyzer request.\n\nPro mode is required instead of standard mode. Pro mode is specifically designed for advanced scenarios requiring multi-step reasoning, cross-file analysis, and validation against a knowledge base. Note that Pro mode currently supports classify and generate fields but does not support confidence scores for specific extracted fields.\n\nVendor contract files as reference data: Required. Because the vendor contracts are static compliance documents, they should be uploaded and treated as the analyzer's background knowledge base (reference data) to guide the validation logic."
  },
  "zh": {
   "stem": "您有一个名为 App1 的发票处理应用程序，它使用 Azure 内容理解在Foundry 工具中。\n您正在构建一个名为 Pipeline1 的新内容理解流水线，必须满足以下要求：\n将发票与相关的采购订单进行比较验证语音与静态供应商联系文件返回一个包含差异发现的单一结构化输出您需要配置 Pipeline1 并将管道暴露为单一分析器端点。您应该如何配置？",
   "options": {
    "A": "在标准模式下使用作为附加文件提供的供应商合同的单文件任务 在分析期间。",
    "B": "在标准模式下使用为提取字段启用的置信度分数的单文件任务。",
    "C": "在专业模式下使用供应商合同文件作为参考数据的多文件任务",
    "D": "在标准模式下使用发票和采购订单作为分析器输入的多文件任务"
   },
   "explanation": "说明：\n多文件任务：需要比单文件任务更高。您的管道需要在单一分析器请求中对两个独立的活动交易文件（发票和采购订单）进行数据对账。\n\n专业模式是必需的，而不是标准模式。专业模式专为需要多步骤推理、跨文件分析和与知识库验证的高级场景而设计。请注意，专业模式目前支持分类和生成字段，但不支持特定提取字段的置信度分数。\n\n供应商合同文件作为参考数据：必需。由于供应商合同是静态合规文档，因此应上传并视为分析器的背景知识库（参考数据），以指导验证逻辑。"
  }
 },
 {
  "id": 114,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a web app named App1 that sends requests to a multimodal chat model deployment in a Microsoft Foundry project.\nUser messages can contain both text and images.\nCurrently, App1 includes image URL: as plain text inside the message content so the model cannot recognize them as images.\nTraces show that the requests contain a single text message instead of a multimodal content array.\nYou need to send the message as a structured array that includes both the text portion and the image reference to ensure that the model can process the image correctly.\nWhat should you do?",
   "options": {
    "A": "Set the user message content array to include items that have type: text and type: image_url.",
    "B": "Encode the image to base64 and include the encoded data inside the content string of the user message.",
    "C": "Add the image URL to the request metadata section, so the model can resolve the processing issue automatically.",
    "D": "Place the image URL inside the System Message and set type to image_url so the model loads the image at initialization."
   },
   "explanation": "To fix this, you must change your request payload structure from a single string to a structured content array. Multimodal models in Azure AI Foundry expect an array of distinct objects for text and images."
  },
  "zh": {
   "stem": "您有一个名为 App1 的 Web 应用，它向 Microsoft Foundry 项目中的多模态聊天模型部署发送请求。\n用户消息可以包含文本和图像。\n目前，App1 在消息内容中将图像 URL 作为纯文本包含，因此模型无法将其识别为图像。\n跟踪显示请求包含单个文本消息，而不是多模态内容数组。\n您需要将消息作为结构化数组发送，其中包括文本部分和图像引用，以确保模型能够正确处理图像。\n您应该怎么做？",
   "options": {
    "A": "将用户消息内容数组设置为包含具有 type: text 和 type: image_url 的项。",
    "B": "将图像编码为 base64，并将编码数据包含在用户消息的 content 字符串中。",
    "C": "将图像 URL 添加到请求元数据部分，以便模型可以自动解决处理问题。",
    "D": "将图像 URL 放入系统消息中，并将类型设置为 image_url ，以便模型在初始化时加载 图像。"
   },
   "explanation": "说明/参考：\n说明：\n要解决此问题，您必须将请求有效负载结构从单个字符串更改为结构化内容数组。Azure AI Foundry 中的多模态模型期望文本和图像的不同对象数组。"
  }
 },
 {
  "id": 115,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "A",
   "E"
  ],
  "en": {
   "stem": "You are developing an application that will use Azure AI Search for internal documents.\nYou need to implement document-level filtering for Azure AI Search.\nWhich three actions should you include in the solution? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Add allowed groups to each index entry",
    "B": "Create one index per group.",
    "C": "Send access tokens from Microsoft Entra ID, with the search request.",
    "D": "Retrieve all the groups.",
    "E": "Retrieve the group memberships of the user F. Supply the groups as a filter for the search requests"
   },
   "explanation": "[A] Add allowed groups to each index entry: Each document in your search index must include a field (e.g., group_ids) listing the security groups or principals that have permission to view that document.\n[E] Retrieve the group memberships of the user: When a user submits a query, your application must query Microsoft Entra ID to fetch the list of all security groups the user belongs to.\n\n[F] Supply the groups as a filter for the search requests: Your application will then translate the user's group memberships into an OData filter (using the search.in() function) and append it to the search API query, restricting the results only to documents the user has access to."
  },
  "zh": {
   "stem": "您正在开发一个将使用 Azure AI Search 处理内部文档的应用程序。\n您需要为 Azure AI Search 实现文档级过滤。\n您应该在解决方案中包含哪三项操作？每个正确答案都是解决方案的一部分。\n注意： 每个正确的选择值为一分。",
   "options": {
    "A": "将允许的组添加到每个索引条目中",
    "B": "为每个组创建一个索引。",
    "C": "在搜索请求中发送来自 Microsoft Entra ID 的访问令牌。",
    "D": "检索所有组。",
    "E": "检索用户的组成员资格 F. 将组作为搜索请求的过滤器"
   },
   "explanation": "说明：\n[一个]将允许的组添加到每个索引条目：您的搜索索引中的每个文档必须包含一个字段（例如，group_ids），列出有权限查看该文档的安全组或主体。\n[和]检索用户的组成员资格：当用户提交查询时，您的应用程序必须查询Microsoft Entra ID 以获取用户所属的所有安全组的列表。\n\n[F]将组作为搜索请求的过滤器：您的应用程序将把用户的组成员资格转换为 OData 过滤器（使用 search.in() 函数），并将其附加到搜索 API 查询中，仅限制结果为用户可以访问的文档。"
  }
 },
 {
  "id": 116,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have an Azure AI Search indexer that ingest PDF policy manuals.\nClient applications must display page-level citations that have bounding polygons for both text and images.\nYou need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. The solution must meet the following requirements:\nProvide text and image location metadata.\nExtract tables that span multiple pages.\nWhat should you add?",
   "options": {
    "A": "Document Layout",
    "B": "Document Extraction",
    "C": "Azure Content Understanding",
    "D": "GenAI Prompt"
   },
   "explanation": "To meet the requirements, you need to use the Azure Content Understanding skill in your Azure AI Search skillset."
  },
  "zh": {
   "stem": "您有一个 Azure AI 搜索索引器，用于摄取 PDF 政策手册。\n客户端应用程序必须显示具有文本和图像的边界多边形的页面级引用。\n您需要向 Azure AI 搜索技能集添加一个内置的多模态内容提取技能。该解决方案必须满足以下要求：\n提供文本和图像位置元数据。\n提取跨多页的表格。\n你应该添加什么？",
   "options": {
    "A": "文档布局",
    "B": "文档提取",
    "C": "Azure 内容理解",
    "D": "GenAI 提示"
   },
   "explanation": "说明：\n为了满足要求，您需要在 Azure AI 搜索技能集中使用 Azure 内容理解技能。"
  }
 },
 {
  "id": 117,
  "section": "Implement information extraction solutions",
  "sectionZh": "实施信息提取解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You are creating an enrichment pipeline that will use Azure AI Search. The knowledge store contains unstructured JSON data and the text from scanned PDF documents.\nWhich projection type should you use for each data type? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Object projection For the unstructured JSON data, you must use object projection, and for the extracted text data from the scanned PDF documents, you must use file projection.\n\nObject Projection: Projects your data as a full JSON representation. It is ideal for maintaining the original structure alongside any applied AI enrichments within a single JSON document inside Azure Blob Storage.\n\nBox 2: File projection File Projection: Captures the binary or image extraction layer required during Optical Character Recognition (OCR) processing. It isolates and outputs raw text and graphic details directly from unstructured physical binary files into a designated container"
  },
  "zh": {
   "stem": "您正在创建一个将使用 Azure AI Search 的增强管道。知识库包含非结构化的 JSON 数据和扫描的 PDF 文档中的文本。\n对于每种数据类型，您应该使用哪种投影类型？要回答，请在答案区域选择适当的选项。\n注意： 每个正确的选择值为一分。",
   "options": {},
   "explanation": "框 1：对象投影对于非结构化的 JSON 数据，您必须使用对象投影，而对于从扫描的 PDF 文档中提取的文本数据，您必须使用文件投影。\n\n对象投影：将您的数据作为完整的 JSON 表示。它非常适合在 Azure Blob 存储中的单个 JSON 文档内维护原始结构以及任何应用的 AI 增强。\n\n框 2：文件投影文件投影：捕获在光学字符识别（OCR）处理过程中所需的二进制或图像提取层。它将原始文本和图形细节从非结构化的物理二进制文件中隔离并直接输出到指定容器。"
  },
  "boxes": [
   {
    "prompt_en": "JSON data:",
    "prompt_zh": "JSON 数据：",
    "options_en": [
     "File projection",
     "Object projection",
     "Table projection"
    ],
    "options_zh": [
     "文件投影",
     "对象投影",
     "表投影"
    ],
    "correct_en": "Object projection",
    "correct_zh": "对象投影"
   },
   {
    "prompt_en": "Extracted text data:",
    "prompt_zh": "提取的文本数据：",
    "options_en": [
     "File projection",
     "Object projection",
     "Table projection"
    ],
    "options_zh": [
     "文件投影",
     "对象投影",
     "表投影"
    ],
    "correct_en": "File projection",
    "correct_zh": "文件投影"
   }
  ]
 }
];
