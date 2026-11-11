// Auto-generated DP-800 question bank (101 questions, EN + ZH).
// The source PDF is English-only: the ZH side is a translation, and the
// hotspot/dragdrop panels + code exhibits were read from the page images.
window.QUESTIONS_DP800 = [
 {
  "id": 1,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": true,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You need to meet the development requirements for the FeedbackJson column.\nHow should you complete the Transact-SQL query? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Scenario:\nContoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:\nExtract the customer feedback text from the JSON document.\nFilter rows where the JSON text contains a keyword.\nCalculate a fuzzy similarity score between the feedback text and a known issue description.\nOrder the results by similarity score, with the highest score first.\n---\nThe FeedbackJson column has a full-text index and stores JSON documents in the following format.\n\nBox 1: JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText Use the JSON_VALUE function.\nExample Query Assuming you have a table named CustomerFeedback with a column FeedbackDetails (of type NVARCHAR(MAX) or the new JSON native type) and you want to find feedback where the comment field is similar to the word 'unhappy' (allowing for a maximum edit distance of 1):\nDECLARE @Keyword NVARCHAR(100) = 'unhappy';\nDECLARE @MaxDistance INT = 1;\nSELECT FeedbackID,\nJSON_VALUE(FeedbackDetails, '$.comment') AS ExtractedComment FROM CustomerFeedback WHERE EDIT_DISTANCE(JSON_VALUE(FeedbackDetails, '$.comment'), @Keyword) <= @MaxDistance;\nBox 2: EDIT_DISTANCE(JSON_VALUE(F.FeedbackJson, '$.text'), @KEYWORD) <= 3 Scenario: Filter rows where the JSON text contains a keyword.\nThis is in the WHERE statement that filters the resulting rows.\nThe JSON key is \"text\", not \"details.comment\".\nNote:\nTo filter rows in an Azure SQL database where a specific value within a JSON column has an edit distance relationship to a @KEYWORD, the WHERE clause can use the EDIT_DISTANCE function in conjunction with JSON_VALUE.\nThe WHERE clause of the T-SQL statement should be formed as follows:\nWHERE EDIT_DISTANCE(JSON_VALUE(FeedbackColumn, '$.YourJsonKey'), @KEYWORD) <= @MaxDistance FeedbackColumn: This is the name of your table column that stores the customer feedback in JSON format.\n$.YourJsonKey: This is the JSON path expression used by the JSON_VALUE function to extract the scalar value (e.g., text, number) from the JSON text within the FeedbackColumn. You will need to replace '$.YourJsonKey' with the actual path to the specific field in your JSON data you want to filter on (e.g.,\n'$.comment', '$.feedbackSummary').\n@KEYWORD: This is a variable holding the target keyword you are comparing against.\n@MaxDistance or @MinSimilarity: The EDIT_DISTANCE function returns an integer representing the number of transformations (insertions, deletions, substitutions) needed to change one string into the other.\nEDIT_DISTANCE_SIMILARITY returns a percentage value from 0 to 100. You would define a threshold to filter results based on how \"close\" the JSON value is to your keyword.\n\nBox 3: SimilarityScore Scenario: Order the results by similarity score, with the highest score first.\nThis is in the ORDER BY statement.\nReference:",
   "scenario": "Existing Environment\nAzure Environment\nContoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.\n\nTable names            Column names\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (primary key)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (primary key)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (primary key)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (primary key)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (primary key)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (primary key)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (primary key)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (primary key)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nThe FeedbackJson column has a full-text index and stores JSON documents in the following format.\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nThe support staff at Contoso never has the UNMASK permission.\n\nProblem Statements\nContoso is deploying a new Azure SQL database that will become the authoritative data store for the following:\nAI workloads\nVector search\nModernized API access\nRetrieval Augmented Generation (RAG) pipelines\nSometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.\nThe engineers at Contoso report that the following dashboard query runs slowly.\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\nYou review the execution plan and discover that the plan shows a clustered index scan.\nVehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.\n\nRequirements\nPlanned Changes\nContoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.\n\nSecurity Requirements\nContoso identifies the following security requirements:\nRestrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.\nEnforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.\n\nDatabase Performance and Requirements\nContoso identifies the following telemetry requirements:\nTelemetry data must be stored in a partitioned table.\nTelemetry data must provide predictable performance for ingestion and retention operations.\nlatitude, longitude, and accuracy JSON properties must be filtered by using an index seek.\nContoso identifies the following maintenance data requirements:\nEnsure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.\nAvoid recursive updates.\n\nAI Search, Embeddings, and Vector Indexing\nContoso plans to implement semantic search over incident data to meet the following requirements:\nEmbeddings must be stored in dedicated Azure SQL Database tables.\nEmbeddings must be generated from rich natural language fields.\nChunking must preserve semantic coherence.\nHybrid search must combine the following:\n    - Vector similarity\n    - Keyword filtering or boosting\n\nDevelopment Requirements\nThe development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.\nContoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:\nExtract the customer feedback text from the JSON document.\nFilter rows where the JSON text contains a keyword.\nCalculate a fuzzy similarity score between the feedback text and a known issue description.\nOrder the results by similarity score, with the highest score first."
  },
  "zh": {
   "stem": "您需要满足 FeedbackJson 列的开发要求。\n您应如何完成该 Transact-SQL 查询？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "场景：\nContoso 确定了以下针对查询 CustomerFeedback 表 FeedbackJson 列中数据的要求：\n从 JSON 文档中提取客户反馈文本。\n筛选 JSON 文本中包含关键字的行。\n计算反馈文本与已知问题描述之间的模糊相似度分数。\n按相似度分数排序，分数最高的排在最前面。\n\n框 1：JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText\n使用 JSON_VALUE 函数从 JSON 文档中提取标量值。示例：\nDECLARE @Keyword NVARCHAR(100) = 'unhappy';\nDECLARE @MaxDistance INT = 1;\nSELECT FeedbackID, JSON_VALUE(FeedbackDetails, '$.comment') AS ExtractedComment\nFROM CustomerFeedback\nWHERE EDIT_DISTANCE(JSON_VALUE(FeedbackDetails, '$.comment'), @Keyword) <= @MaxDistance;\n\n框 2：EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3\n场景要求：筛选 JSON 文本中包含关键字的行。这属于 WHERE 子句。注意 JSON 键是 \"text\"，而不是 \"details.comment\"。\nEDIT_DISTANCE 返回把一个字符串变成另一个字符串所需的编辑次数（插入、删除、替换）；EDIT_DISTANCE_SIMILARITY 则返回 0 到 100 的百分比。可通过阈值筛选出与关键字足够“接近”的结果。\n\n框 3：SimilarityScore\n场景要求：按相似度分数排序，分数最高的排在最前面。这属于 ORDER BY 子句。",
   "scenario": "现有环境\nAzure 环境\nContoso 在 North Europe 有一个 Azure 订阅，其中包含公司基础结构。当前的基础结构包含一个 Microsoft SQL Server 2017 数据库。该数据库包含以下表。\n\n表名                   列名\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (主键)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (主键)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (主键)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (主键)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (主键)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (主键)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (主键)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (主键)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nFeedbackJson 列具有全文索引，并以下列格式存储 JSON 文档。\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nContoso 的支持人员从不具有 UNMASK 权限。\n\n问题陈述\nContoso 正在部署一个新的 Azure SQL 数据库，它将成为以下各项的权威数据存储：\nAI 工作负载\n向量搜索\n现代化的 API 访问\n检索增强生成 (RAG) 管道\n引入管道有时会因格式错误的 JSON 和重复的有效负载而失败。\nContoso 的工程师报告以下仪表板查询运行缓慢。\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\n您查看执行计划后发现该计划显示为聚集索引扫描。\nVehicleIncidentReports 中经常包含有关天气、交通状况和位置的详细信息。分析师报告称，很难根据这些详细信息查找相似的事件。\n\n要求\n计划的更改\nContoso 希望对 Fleet Intelligence Platform 进行现代化改造，以支持对事件报告进行 AI 驱动的语义搜索。\n\n安全要求\nContoso 确定了以下安全要求：\n限制支持人员查看个人身份信息 (PII) 数据，即完整的电子邮件地址和电话号码。\n强制执行行级筛选，使分析师只能看到分配给他们的车队的事件。分析师可以被分配到多个车队。\n\n数据库性能与要求\nContoso 确定了以下遥测要求：\n遥测数据必须存储在分区表中。\n遥测数据必须为引入和保留操作提供可预测的性能。\n必须使用索引查找 (index seek) 对 latitude、longitude 和 accuracy 这几个 JSON 属性进行筛选。\nContoso 确定了以下维护数据要求：\n确保对 MaintenanceEvents 表中某一行的任何更改都会将 LastModifiedUtc 列中的相应值更新为更改发生的时间。\n避免递归更新。\n\nAI 搜索、嵌入和向量索引\nContoso 计划对事件数据实施语义搜索，以满足以下要求：\n嵌入必须存储在专用的 Azure SQL Database 表中。\n嵌入必须从内容丰富的自然语言字段生成。\n分块必须保持语义连贯性。\n混合搜索必须结合以下各项：\n    - 向量相似度\n    - 关键字筛选或加权\n\n开发要求\nContoso 的开发团队将使用 Microsoft Visual Studio Code 和 GitHub Copilot，并将从数据库检索实时元数据。\nContoso 确定了以下针对查询 CustomerFeedback 表的 FeedbackJson 列中数据的要求：\n从 JSON 文档中提取客户反馈文本。\n筛选 JSON 文本中包含某个关键字的行。\n计算反馈文本与已知问题描述之间的模糊相似度分数。\n按相似度分数对结果排序，分数最高的排在最前面。"
  },
  "boxes": [
   {
    "prompt_en": "Box 1 (SELECT list)",
    "prompt_zh": "框 1（SELECT 列表）",
    "options_en": [
     "CONTAINS(FeedbackJson, @Keyword)",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.details.comment'), @Keyword) < 3",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3",
     "JSON_QUERY(f.FeedbackJson, '$.text', @KnownIssueDescription) AS FeedbackText",
     "JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText",
     "SimilarityScore"
    ],
    "options_zh": [
     "CONTAINS(FeedbackJson, @Keyword)",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.details.comment'), @Keyword) < 3",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3",
     "JSON_QUERY(f.FeedbackJson, '$.text', @KnownIssueDescription) AS FeedbackText",
     "JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText",
     "SimilarityScore"
    ],
    "correct_en": "JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText",
    "correct_zh": "JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText"
   },
   {
    "prompt_en": "Box 2 (WHERE)",
    "prompt_zh": "框 2（WHERE）",
    "options_en": [
     "CONTAINS(FeedbackJson, @Keyword)",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.details.comment'), @Keyword) < 3",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3",
     "JSON_QUERY(f.FeedbackJson, '$.text', @KnownIssueDescription) AS FeedbackText",
     "JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText",
     "SimilarityScore"
    ],
    "options_zh": [
     "CONTAINS(FeedbackJson, @Keyword)",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.details.comment'), @Keyword) < 3",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3",
     "JSON_QUERY(f.FeedbackJson, '$.text', @KnownIssueDescription) AS FeedbackText",
     "JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText",
     "SimilarityScore"
    ],
    "correct_en": "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3",
    "correct_zh": "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3"
   },
   {
    "prompt_en": "Box 3 (ORDER BY)",
    "prompt_zh": "框 3（ORDER BY）",
    "options_en": [
     "CONTAINS(FeedbackJson, @Keyword)",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.details.comment'), @Keyword) < 3",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3",
     "JSON_QUERY(f.FeedbackJson, '$.text', @KnownIssueDescription) AS FeedbackText",
     "JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText",
     "SimilarityScore"
    ],
    "options_zh": [
     "CONTAINS(FeedbackJson, @Keyword)",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.details.comment'), @Keyword) < 3",
     "EDIT_DISTANCE(JSON_VALUE(f.FeedbackJson, '$.text'), @Keyword) < 3",
     "JSON_QUERY(f.FeedbackJson, '$.text', @KnownIssueDescription) AS FeedbackText",
     "JSON_VALUE(f.FeedbackJson, '$.text') AS FeedbackText",
     "SimilarityScore"
    ],
    "correct_en": "SimilarityScore",
    "correct_zh": "SimilarityScore"
   }
  ]
 },
 {
  "id": 2,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": true,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You need to create a solution that meets the development requirements for retrieving the patient lists.\nHow should you complete the Transact-SQL code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Scenario:\nFabrikam identifies the following development requirements:\n*-> Provide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.\nBox 1: WHERE p.PatientId IN WHERE: Used to filter the rows returned by the main query.\nIN: Used to check if the PatientId exists within the list generated by the subquery.\nBox 2: WHERE pr.PatientId = p.PatientId Correlated Subquery: Using WHERE pr.PatientId = p.PatientId links the subquery to the main query,\nensuring the database only looks at procedures belonging to that specific patient.\n\nIncorrect:\n* HAVING HAVING is used to filter groups after an GROUP BY clause is applied. Since your subquery does not use GROUP BY, HAVING would cause a syntax error.\nReference:\nhttps://medium.com/sql-explained/sql-basics-for-everyone-part-2-1638493175cd",
   "scenario": "Existing Environment\nAzure Environment\nFabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\nYou store a column master key as a secret in Azure Key Vault.\nYou have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.\n\nProblem Statements\nUsers report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.\n\nRequirements\nPlanned Changes\nFabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.\n\nSecurity Requirements\nFabrikam identifies the following security requirements:\nThe TransactionProcessing application must use a passwordless connection to DB1.\nThe Employees table contains two columns named TaxID and Salary that must be encrypted at rest.\nAuditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.\n\nDatabase Performance Requirements\nRecords accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.\n\nAI Search, Embeddings, and Vector Indexing\nFabrikam identifies the following AI-related requirements:\nQueries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).\nUsers must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.\nThe UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.\n\nDevelopment Requirements\nFabrikam identifies the following development requirements:\nProvide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.\nExpose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API:\n    - Read data from the procedures table without authentication.\n    - Read and insert data into the Transactions table once authenticated.\n    - Execute the sp_UpdateProcedurePatient stored procedure.\nProvide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.\nInformation for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\nYou create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "zh": {
   "stem": "您需要创建一个满足检索患者列表开发要求的解决方案。\n您应如何完成该 Transact-SQL 代码？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "场景：\nFabrikam 确定了以下开发要求：\n* 提供检索过去 30 天内接受过医疗程序的患者姓名列表的功能。\n\n框 1：WHERE p.PatientId IN\nWHERE：用于筛选主查询返回的行。IN：用于检查 PatientId 是否存在于子查询生成的列表中。\n\n框 2：WHERE pr.PatientId = p.PatientId\n相关子查询：使用 WHERE pr.PatientId = p.PatientId 把子查询与主查询关联起来，确保数据库只查看属于该特定患者的医疗程序。\n\n错误选项：\n* HAVING\nHAVING 用于在应用 GROUP BY 之后筛选分组。由于子查询没有使用 GROUP BY，HAVING 会导致语法错误。",
   "scenario": "现有环境\nAzure 环境\nFabrikam 在 East US 2 Azure 区域有一个 Azure 订阅。该订阅包含一个名为 DB1 的 Azure SQL 数据库。DB1 包含以下表：\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\n您将一个列主密钥作为机密存储在 Azure Key Vault 中。\n您有一个名为 TransactionProcessing 的本地应用程序，它在连接字符串中使用硬编码的用户名和密码来访问 DB1。\n\n问题陈述\n用户报告称，在执行一个名为 sp_UpdateProcedureForPatient 的长时间运行的存储过程后，对基础数据的更新有时并不一致。\n\n要求\n计划的更改\nFabrikam 计划使用 GitHub 中的源代码管理来管理对 Azure SQL Database 对象的所有更改。提交到生产环境的每个拉取请求在合并前都必须经过验证。部署必须使用 Release 配置。\n\n安全要求\nFabrikam 确定了以下安全要求：\nTransactionProcessing 应用程序必须使用无密码连接来连接 DB1。\nEmployees 表包含两个名为 TaxID 和 Salary 的列，它们必须进行静态加密。\n审核员必须拥有防篡改的事务历史记录，并对员工数据的更改提供加密证明。\n\n数据库性能要求\n在 sp_UpdateProcedureForPatient 运行期间，它所访问的记录不得被其他事务更改。\n\nAI 搜索、嵌入和向量索引\nFabrikam 确定了以下 AI 相关要求：\n对 ProcedureDocuments 表的查询必须使用倒数排名融合 (Reciprocal Rank Fusion, RRF)。\n用户必须能够在 Microsoft Fabric 中的 Copilot 里使用提示来查询 DB1 中的数据。\nUsefulPrompts 表将存储供医生使用的提示，这些提示通过连接到 Azure OpenAI 终结点来帮助诊断患者的疾病。\n\n开发要求\nFabrikam 确定了以下开发要求：\n提供检索给定患者在两个日期之间所有事务的功能，并显示累计合计。\n公开一个 Data API builder (DAB) 配置文件，以便 Azure 服务能够通过 REST API 执行以下操作：\n    - 无需身份验证即可从 procedures 表读取数据。\n    - 通过身份验证后即可读取数据并将数据插入 Transactions 表。\n    - 执行 sp_UpdateProcedurePatient 存储过程。\n提供检索过去 30 天内接受过医疗程序的患者姓名列表的功能。\n每个医疗程序的信息将存储在一个表中。该表将与大型语言模型 (LLM) 一起用于用户查询，并具有以下结构。\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\n您创建了一个 DAB 配置文件，它满足 DB1 的开发要求，并包含以下实体。\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "boxes": [
   {
    "prompt_en": "Box 1 (after FROM dbo.Patients AS p)",
    "prompt_zh": "框 1（FROM dbo.Patients AS p 之后）",
    "options_en": [
     "WHERE EXISTS",
     "WHERE NOT EXISTS",
     "WHERE p.PatienId IN",
     "WHERE p.PatienId NOT IN"
    ],
    "options_zh": [
     "WHERE EXISTS",
     "WHERE NOT EXISTS",
     "WHERE p.PatienId IN",
     "WHERE p.PatienId NOT IN"
    ],
    "correct_en": "WHERE p.PatienId IN",
    "correct_zh": "WHERE p.PatienId IN"
   },
   {
    "prompt_en": "Box 2 (inside the subquery)",
    "prompt_zh": "框 2（子查询内部）",
    "options_en": [
     "HAVING p.PatientId = pr.PatientId",
     "HAVING p.TransactionId = pr.TransactionId",
     "WHERE p.PatientId = pr.PatientId",
     "WHERE p.TransactionId = pr.TransactionId"
    ],
    "options_zh": [
     "HAVING p.PatientId = pr.PatientId",
     "HAVING p.TransactionId = pr.TransactionId",
     "WHERE p.PatientId = pr.PatientId",
     "WHERE p.TransactionId = pr.TransactionId"
    ],
    "correct_en": "WHERE p.PatientId = pr.PatientId",
    "correct_zh": "WHERE p.PatientId = pr.PatientId"
   }
  ]
 },
 {
  "id": 3,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named dbo.Orders.\nYou have an application that calls a stored procedure named dbo.usp_CreateOrder to insert rows into dbo.Orders.\nWhen an insert fails, the application receives inconsistent error details.\nYou need to implement error handling to ensure that any failures inside the procedure abort the transaction and return a consistent error to the caller.\nHow should you complete the stored procedure? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: SET @OrderID = SCOPE_IDENTITY()\nBy exclusion. The other statements cannot be inserted here.\nNote:\nIn an Azure SQL database, the code SET @OrderID = SCOPE_IDENTITY() captures the last auto-\ngenerated identity value (such as an ID) created by an INSERT statement and assigns it to a variable\ncalled @OrderID.\nThis is a standard way to retrieve the unique ID of a record you just created so you can use it in\nsubsequent steps, like adding related \"Order Details\" rows.\nNote 2:\nBEGIN TRY\n        BEGIN TRANSACTION;\n        -- Your logic here (e.g., calling the INSERT)\n        INSERT INTO YourTable (Column1)\n        VALUES (@Param1);\n        -- If everything succeeds, commit\n        COMMIT TRANSACTION;\nBox 2: IF @@TRANCOUNT > 0\nBEGIN CATCH\n        Check for an active transaction before rolling back\n        IF @@TRANCOUNT > 0\n        BEGIN\n            ROLLBACK TRANSACTION;\n        END\n\n        -- Re-throw the error to the calling application\n        THROW;\n    END CATCH\nEND;\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 dbo.Orders 的表。\n您有一个应用程序，它调用名为 dbo.usp_CreateOrder 的存储过程向 dbo.Orders 插入行。\n当插入失败时，该应用程序收到的错误详细信息并不一致。\n您需要实现错误处理，以确保该过程内部的任何失败都会中止事务，并向调用方返回一致的错误。\n您应如何完成该存储过程？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：SET @OrderId = SCOPE_IDENTITY()\n用排除法即可确定：其他语句都不能插入到这个位置。\n在 Azure SQL 数据库中，SET @OrderId = SCOPE_IDENTITY() 会捕获 INSERT 语句刚刚生成的标识值（自增 ID）并赋给变量 @OrderId。这是获取刚创建记录的唯一 ID 的标准做法，便于在后续步骤（例如插入相关的订单明细行）中使用。\n\n框 2：IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION\n典型模式：\nBEGIN TRY\n    BEGIN TRANSACTION;\n    -- 业务逻辑（例如 INSERT）\n    COMMIT TRANSACTION;\nEND TRY\nBEGIN CATCH\n    -- 回滚前先检查是否存在活动事务\n    IF @@TRANCOUNT > 0\n        ROLLBACK TRANSACTION;\n    -- 把错误重新抛给调用方应用程序\n    THROW;\nEND CATCH"
  },
  "sources_en": [
   "BEGIN CATCH",
   "IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION",
   "RAISERROR('CreateOrder failed', 16, 1)",
   "ROLLBACK TRANSACTION",
   "SET @OrderId = SCOPE_IDENTITY()",
   "THROW"
  ],
  "sources_zh": [
   "BEGIN CATCH",
   "IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION",
   "RAISERROR('CreateOrder failed', 16, 1)",
   "ROLLBACK TRANSACTION",
   "SET @OrderId = SCOPE_IDENTITY()",
   "THROW"
  ],
  "targets": [
   {
    "label_en": "Box 1 (inside BEGIN TRY, after the INSERT)",
    "label_zh": "框 1（BEGIN TRY 内，INSERT 之后）",
    "correct_en": "SET @OrderId = SCOPE_IDENTITY()",
    "correct_zh": "SET @OrderId = SCOPE_IDENTITY()"
   },
   {
    "label_en": "Box 2 (inside BEGIN CATCH, before THROW)",
    "label_zh": "框 2（BEGIN CATCH 内，THROW 之前）",
    "correct_en": "IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION",
    "correct_zh": "IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION"
   }
  ]
 },
 {
  "id": 4,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Your team is developing an Azure SQL dataset solution from a locally cloned GitHub repository by using Microsoft Visual Studio Code and GitHub Copilot Chat.\nYou need to disable the GitHub Copilot repository-level instructions for yourself without affecting other users.\nWhat should you do?",
   "options": {
    "A": "From Visual Studio Code, modify your GitHub Copilot Chat user settings.",
    "B": "Add a --debug flag when you start the GitHub Copilot Chat extension.",
    "C": "Delete .github/copilot-instructions.md."
   },
   "explanation": "To disable GitHub Copilot repository-level instructions for yourself without affecting others, you can modify your User Settings in Visual Studio Code. This allows you to override or ignore specific repository-wide configurations like copilot-instructions.md at a personal level.\nHow to Disable Repository-Level Instructions\n1. Open User Settings: Press Ctrl+, (Windows/Linux) or Cmd+, (macOS) to open the VS Code Settings editor.\n2. Search for Copilot Chat: In the search bar, type github.copilot.chat.customInstructions.\n3. Configure Custom Instructions:\nFind the setting for Github > Copilot > Chat: Custom Instructions.\nEnsure the User tab is selected at the top to apply changes only to your account and not the shared workspace.\n4. Toggle via Chat UI:\nOpen the Chat view (Ctrl+Alt+I or Cmd+Shift+L).\nClick the Configure Chat (gear icon) at the bottom of the chat panel.\nSelect the Instructions tab and uncheck or remove any active repository-level files to disable their influence on your session.\nReference:"
  },
  "zh": {
   "stem": "您的团队正在使用 Microsoft Visual Studio Code 和 GitHub Copilot Chat，基于本地克隆的 GitHub 存储库开发 Azure SQL 数据集解决方案。\n您需要为自己禁用 GitHub Copilot 存储库级指令，同时不影响其他用户。\n您应该怎么做？",
   "options": {
    "A": "在 Visual Studio Code 中，修改您的 GitHub Copilot Chat 用户设置。",
    "B": "启动 GitHub Copilot Chat 扩展时添加 --debug 标志。",
    "C": "删除 .github/copilot-instructions.md。"
   },
   "explanation": "要在不影响他人的情况下为自己禁用 GitHub Copilot 存储库级指令，可以修改 Visual Studio Code 中的用户设置 (User Settings)。这样就能在个人级别覆盖或忽略 copilot-instructions.md 之类的存储库范围配置。\n\n操作步骤：\n1. 打开用户设置：按 Ctrl+,（Windows/Linux）或 Cmd+,（macOS）。\n2. 搜索 Copilot Chat：在搜索框中输入 github.copilot.chat.customInstructions。\n3. 配置自定义指令：找到 Github > Copilot > Chat: Custom Instructions 设置，确保顶部选中的是 User 选项卡，使更改只应用于您的账户而不是共享工作区。\n4. 也可通过聊天界面切换：打开聊天视图，点击底部的“配置聊天”（齿轮图标），选择“Instructions”选项卡，取消勾选或移除任何活动的存储库级文件。\n\n删除 .github/copilot-instructions.md 会影响所有用户，因此不正确。"
  }
 },
 {
  "id": 5,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have an Azure SQL database that contains the following SQL graph tables:\nA NODE table named dbo.Person An EDGE table named dbo.Knows Each row in dbo.Person contains the following columns:\nPersonID (int) DisplayName (nvarchar(100)) You need to use a MATCH operator and exactly two directed Knows relationships to return the PersonID and DisplayName of people that are reachable from the person identified by an input parameter named\n\n@StartPersonId.\nWhich Transact-SQL query should you use?",
   "options": {
    "A": "SELECT p2.PersonId, @StartPersonId\nFROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2, dbo.Knows AS k2, dbo.Person AS p3\nWHERE p1.DisplayName = p2.DisplayName\n  AND MATCH(p1-(k1)->p2-(k2)->p3);",
    "B": "SELECT p3.PersonId, p3.DisplayName FROM dbo.Person AS p1\nJOIN dbo.Knows AS k1 ON 1 = 1\nJOIN dbo.Person AS p2 ON 1 = 1\nJOIN dbo.Knows AS k2 ON 1 = 1\nJOIN dbo.Person AS p3 ON 1 = 1\nWHERE p1.PersonId = @StartPersonId\n  AND MATCH(p3<-(k2)-p2<-(k1)-p1);",
    "C": "SELECT p3.PersonId, p3.DisplayName\nFROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2, dbo.Knows AS k2, dbo.Person AS p3\nWHERE p1.PersonId = @StartPersonId\n  AND MATCH(p1-(k1)->p2)   AND MATCH(p2-(k2)->p3);",
    "D": "SELECT p3.PersonId, p3.DisplayName\nFROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2, dbo.Knows AS k2, dbo.Person AS p3\nWHERE p1.PersonId = @StartPersonId\n  AND MATCH(p1-(k1)->p2-(k2)->p3);"
   },
   "explanation": "To achieve this using SQL Graph in Azure SQL, you use the MATCH clause to define the path. Since you\nneed exactly two directed relationships (A → B → C), you must chain the edge table twice in the same\ndirection.\nTransact-SQL Statement\nSELECT\n    Person3.ID,\n    Person3.NameColumn -- Replace with your actual nvarchar(100) column name\nFROM\n    PersonNodeTable AS Person1,\n    KnowsEdgeTable AS Knows1,\n    PersonNodeTable AS Person2,\n    KnowsEdgeTable AS Knows2,\n    PersonNodeTable AS Person3\nWHERE\n    MATCH(Person1-(Knows1)->Person2-(Knows2)->Person3)\n    AND Person1.ID = @InputID;\nUse code with caution.\nKey Components\nMATCH Clause: Defines the traversal pattern. The syntax (Node)-(Edge)->(Node) ensures the relationship\nis directed.\nChaining: To get \"exactly two\" steps, you define three node aliases and two edge aliases.\nAliases: Each instance of the table must have a unique alias (e.g., Person1, Person2, Person3) so the\nengine can distinguish between the different points in the path.\n\nFiltering: The WHERE clause uses your input parameter (@InputID) to set the starting point of the graph traversal Incorrect:\n[Not A] Need three persons, not two.\n[Not B] Do not use JOIN.\n[Not C] Incorrect MATCH statement.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含以下 SQL 图表：\n一个名为 dbo.Person 的 NODE 表\n一个名为 dbo.Knows 的 EDGE 表\ndbo.Person 中的每一行包含以下列：\nPersonID (int)\nDisplayName (nvarchar(100))\n您需要使用 MATCH 运算符和恰好两个有向 Knows 关系，返回从输入参数 @StartPersonId 所标识的人员可达的人员的 PersonID 和 DisplayName。\n您应该使用哪个 Transact-SQL 查询？",
   "options": {
    "A": "SELECT p2.PersonId, @StartPersonId\nFROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2, dbo.Knows AS k2, dbo.Person AS p3\nWHERE p1.DisplayName = p2.DisplayName\n  AND MATCH(p1-(k1)->p2-(k2)->p3);",
    "B": "SELECT p3.PersonId, p3.DisplayName FROM dbo.Person AS p1\nJOIN dbo.Knows AS k1 ON 1 = 1\nJOIN dbo.Person AS p2 ON 1 = 1\nJOIN dbo.Knows AS k2 ON 1 = 1\nJOIN dbo.Person AS p3 ON 1 = 1\nWHERE p1.PersonId = @StartPersonId\n  AND MATCH(p3<-(k2)-p2<-(k1)-p1);",
    "C": "SELECT p3.PersonId, p3.DisplayName\nFROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2, dbo.Knows AS k2, dbo.Person AS p3\nWHERE p1.PersonId = @StartPersonId\n  AND MATCH(p1-(k1)->p2)   AND MATCH(p2-(k2)->p3);",
    "D": "SELECT p3.PersonId, p3.DisplayName\nFROM dbo.Person AS p1, dbo.Knows AS k1, dbo.Person AS p2, dbo.Knows AS k2, dbo.Person AS p3\nWHERE p1.PersonId = @StartPersonId\n  AND MATCH(p1-(k1)->p2-(k2)->p3);"
   },
   "explanation": "在 Azure SQL 的 SQL Graph 中，使用 MATCH 子句定义路径。由于需要恰好两个有向关系（A → B → C），必须沿同一方向把边表串联两次。\n\nSELECT Person3.ID, Person3.NameColumn\nFROM PersonNodeTable AS Person1,\n     KnowsEdgeTable AS Knows1,\n     PersonNodeTable AS Person2,\n     KnowsEdgeTable AS Knows2,\n     PersonNodeTable AS Person3\nWHERE MATCH(Person1-(Knows1)->Person2-(Knows2)->Person3)\n  AND Person1.ID = @InputID;\n\n要点：\nMATCH 子句定义遍历模式，(节点)-(边)->(节点) 语法保证关系是有向的。\n串联：要走“恰好两步”，需要定义三个节点别名和两个边别名。\n别名：每个表实例必须有唯一别名（Person1、Person2、Person3），引擎才能区分路径上的不同位置。\n筛选：WHERE 子句用输入参数设置图遍历的起点。\n\n错误选项：\n[A] 需要三个 person 别名，而不是两个（且选择列表也不对）。\n[B] 不能使用 JOIN。\n[C] MATCH 语句写法不正确（两个独立的 MATCH 不等于一条两跳路径）。"
  }
 },
 {
  "id": 6,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have a SQL database in Microsoft Fabric that contains a column named Payload. Payload stores customer data in JSON documents that have the following format.\nData analysis shows that some customers have subaddressing in their email address, for example, user1 +promo@contoso.com.\nYou need to return a normalized email value that removes the subaddressing, for example, user1 +promo@contoso.com must be normalized to user1@contoso.com.\nWhich Transact-SQL expression should you use?",
   "options": {
    "A": "REGEXP_REPLACE(JSON_VALUE(Payload, ‘$.customer_email’), ‘\\+.*$’, ‘’)",
    "B": "REGEXP_SUBSTR(JSON_VALUE(Payload, ‘$.customer_email’), ‘^[^+]+@.*$=’)",
    "C": "REGEXP_REPLACE(JSON_VALUE(Payload, ‘$.customer_email’), ‘\\+.*@’, ‘@’)",
    "D": "REGEXP_REPLACE(JSON_VALUE(Payload, ‘$.customer_email’), ‘\\+.*’, ‘’)"
   },
   "explanation": "In a Microsoft Fabric SQL database, you can use the REGEXP_REPLACE function (introduced as part of the SQL Server 2025/Always-up-to-date engine updates) to normalize email subaddresses.\nSolution using REGEXP_REPLACE The command you proposed correctly extracts the email string from the JSON document and applies a regular expression to strip the plus-sign subaddress.\n\nSELECT\n    REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\\+.*@', '@') AS NormalizedEmail\nFROM YourTable;\nBreakdown of the Command\nJSON_VALUE: Efficiently extracts the customer_email as a scalar string from your Payload column.\n\nREGEXP_REPLACE: Searches for the pattern \\+.*@ (a literal plus sign followed by any characters until an @) and replaces that entire matched segment with just @.\nNative Support: Unlike older versions of SQL Server that required complex CHARINDEX and SUBSTRING workarounds, Fabric SQL databases now include this modern regex functionality.\nReference:"
  },
  "zh": {
   "stem": "您在 Microsoft Fabric 中有一个 SQL 数据库，其中包含一个名为 Payload 的列。Payload 以下列格式的 JSON 文档存储客户数据。\n数据分析显示，某些客户的电子邮件地址中带有子地址，例如 user1+promo@contoso.com。\n您需要返回去掉子地址后的规范化电子邮件值，例如 user1+promo@contoso.com 必须规范化为 user1@contoso.com。\n您应该使用哪个 Transact-SQL 表达式？",
   "options": {
    "A": "REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\\+.*$', '')",
    "B": "REGEXP_SUBSTR(JSON_VALUE(Payload, '$.customer_email'), '^[^+]+@.*$=')",
    "C": "REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\\+.*@', '@')",
    "D": "REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\\+.*', '')"
   },
   "explanation": "在 Microsoft Fabric SQL 数据库中，可以使用 REGEXP_REPLACE 函数（随 SQL Server 2025 引擎更新引入）来规范化带子地址的电子邮件。\n\nSELECT REGEXP_REPLACE(JSON_VALUE(Payload, '$.customer_email'), '\\+.*@', '@') AS NormalizedEmail\nFROM YourTable;\n\n拆解：\nJSON_VALUE：从 Payload 列中把 customer_email 提取为标量字符串。\nREGEXP_REPLACE：查找模式 \\+.*@（一个字面加号后跟任意字符直到 @），并把整段匹配替换为单个 @。\n原生支持：旧版 SQL Server 需要用 CHARINDEX 和 SUBSTRING 变通实现，Fabric SQL 数据库现在内置了这种现代正则功能。\n\n其他选项会把 @ 及其后的域名一并删除，得不到 user1@contoso.com。"
  },
  "code": {
   "lang": "json",
   "title_en": "Payload JSON format",
   "title_zh": "Payload 的 JSON 格式",
   "text": "{\n  \"date\": \"2020-01-25\",\n  \"customer_email\": \"user@contoso.com\",\n  ...\n}"
  }
 },
 {
  "id": 7,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named dbo.Orders. dbo.Orders contains a column named CreateDate that stores order creation dates.\nYou need to create a stored procedure that filters Orders by CreateDate for a single calendar day. The solution must be SARGable.\nHow should you complete the Transact-SQL code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: DATEADD(day, 1, @StartDate)\n-- Define the boundaries for a SARGable range DECLARE @StartOfNextDay DATE = DATEADD(day, 1, @TargetDate);\nSee sample code below.\nBox 2: @StartDate To filter a table by a single calendar day in a SARGable (Search ARGument-able) way, you must avoid applying functions (like YEAR(), MONTH(), or CAST()) to the database column itself. Applying a function to the column forces the database to perform an index scan (checking every row) rather than a more efficient index seek.\n\nThe recommended pattern is to use a half-open interval: Column >= StartDate AND Column < NextDay.\nBox 3: @EndDate\nSample code:\nCREATE PROCEDURE dbo.GetOrdersByDate\n    @TargetDate DATE\nAS\nBEGIN\n    SET NOCOUNT ON;\n    -- Define the boundaries for a SARGable range\n    DECLARE @StartOfNextDay DATE = DATEADD(day, 1, @TargetDate);\n    SELECT\n        OrderID,\n        OrderDate,\n        CustomerID\n    FROM dbo.Orders\n    WHERE OrderDate >= @TargetDate\n      AND OrderDate < @StartOfNextDay;\nEND;\nGO\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 dbo.Orders 的表。dbo.Orders 包含一个名为 CreateDate 的列，用于存储订单创建日期。\n您需要创建一个存储过程，按 CreateDate 筛选出某一个日历日的订单。该解决方案必须是可 SARG 化的 (SARGable)。\n您应如何完成该 Transact-SQL 代码？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：DATEADD(day, 1, @StartDate)\n先算出 SARG 化区间的边界：DECLARE @StartOfNextDay DATE = DATEADD(day, 1, @TargetDate);\n\n框 2：@StartDate\n要以可 SARG 化的方式按单个日历日筛选，必须避免对数据库列本身应用函数（如 YEAR()、MONTH() 或 CAST()）。对列应用函数会迫使数据库执行索引扫描（检查每一行），而不是效率更高的索引查找。推荐使用半开区间：列 >= 起始日期 AND 列 < 次日。\n\n框 3：@EndDate\n\n示例代码：\nCREATE PROCEDURE dbo.GetOrdersByDate\n    @TargetDate DATE\nAS\nBEGIN\n    SET NOCOUNT ON;\n    DECLARE @StartOfNextDay DATE = DATEADD(day, 1, @TargetDate);\n    SELECT OrderID, OrderDate, CustomerID\n    FROM dbo.Orders\n    WHERE OrderDate >= @TargetDate\n      AND OrderDate < @StartOfNextDay;\nEND;\nGO"
  },
  "sources_en": [
   "@EndDate",
   "@StartDate",
   "CONVERT(char(10), CreateDate, 121)",
   "CONVERT(date, @StartDate)",
   "DATEADD(day, 1, @StartDate)",
   "GETDATE()"
  ],
  "sources_zh": [
   "@EndDate",
   "@StartDate",
   "CONVERT(char(10), CreateDate, 121)",
   "CONVERT(date, @StartDate)",
   "DATEADD(day, 1, @StartDate)",
   "GETDATE()"
  ],
  "targets": [
   {
    "label_en": "Box 1 (SET @EndDate =)",
    "label_zh": "框 1（SET @EndDate =）",
    "correct_en": "DATEADD(day, 1, @StartDate)",
    "correct_zh": "DATEADD(day, 1, @StartDate)"
   },
   {
    "label_en": "Box 2 (WHERE o.CreateDate >=)",
    "label_zh": "框 2（WHERE o.CreateDate >=）",
    "correct_en": "@StartDate",
    "correct_zh": "@StartDate"
   },
   {
    "label_en": "Box 3 (AND o.CreateDate <)",
    "label_zh": "框 3（AND o.CreateDate <）",
    "correct_en": "@EndDate",
    "correct_zh": "@EndDate"
   }
  ]
 },
 {
  "id": 8,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have an Azure SQL database.\nYou need to create a scalar user-defined function (UDF) that returns the number of whole years between an input parameter named @OrderDate and the current date/time as a single positive integer. The function must be created in Azure SQL Database.\nYou write the following code.\n\nWhat should you insert at line 05?",
   "options": {
    "A": "RETURN DATEDIFF(year, GETDATE(), @OrderDate);",
    "B": "DATEDIFF(month, @orderdate, GETDATE()) / 12",
    "C": "DATEPART(year, GETDATE()) - DATEPART(year, @orderdate)",
    "D": "RETURN DATEDIFF(year, @OrderDate, GETDATE());"
   },
   "explanation": "Use RETURN to produce the scalar value of the function.\nIn an Azure SQL Database scalar function (a user-defined function that returns a single value), you must use the RETURN statement to return the scalar value.\nThe RETURN statement immediately terminates the function's execution and returns the value specified in its argument to the calling statement or procedure. The value returned must be of the data type specified in the RETURNS clause of the function definition.\nThe second argument to DATEDIFF should be @OrderDate as it is the start date, while the third argument is the end date, which is the current date.\nNote:\nDATEDIFF (Transact-SQL) This function returns the count (as a signed integer value) of the specified datepart boundaries crossed between the specified startdate and enddate.\nSyntax DATEDIFF ( datepart , startdate , enddate ) Arguments datepart Specifies the units in which DATEDIFF reports the difference between the startdate and enddate.\nCommonly used datepart units include month or second.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库。\n您需要创建一个标量用户定义函数 (UDF)，它返回输入参数 @OrderDate 与当前日期/时间之间的整年数，结果为单个正整数。该函数必须在 Azure SQL Database 中创建。\n您编写了以下代码。\n您应该在第 05 行插入什么？",
   "options": {
    "A": "RETURN DATEDIFF(year, GETDATE(), @OrderDate);",
    "B": "DATEDIFF(month, @orderdate, GETDATE()) / 12",
    "C": "DATEPART(year, GETDATE()) - DATEPART(year, @orderdate)",
    "D": "RETURN DATEDIFF(year, @OrderDate, GETDATE());"
   },
   "explanation": "使用 RETURN 产生函数的标量返回值。\n在 Azure SQL Database 的标量函数（返回单个值的用户定义函数）中，必须使用 RETURN 语句返回标量值。RETURN 会立即结束函数执行，并把其参数指定的值返回给调用语句或过程；返回值的数据类型必须与函数定义中 RETURNS 子句指定的类型一致。\nDATEDIFF 的第二个参数应为 @OrderDate（起始日期），第三个参数是结束日期（当前日期），这样结果才是正数。\n\n说明：DATEDIFF ( datepart , startdate , enddate ) 返回 startdate 与 enddate 之间跨越的指定 datepart 边界数（带符号整数）。\n\n选项 B、C 缺少 RETURN 关键字；选项 A 的起止日期顺序颠倒，会返回负数。"
  },
  "code": {
   "lang": "sql",
   "title_en": "The code you write",
   "title_zh": "您编写的代码",
   "text": "01 CREATE FUNCTION dbo.ufnYearsSinceOrder (@OrderDate datetime2)\n02 RETURNS int\n03 AS\n04 BEGIN\n05\n06 END"
  }
 },
 {
  "id": 9,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have an Azure SQL database.\nYou deploy Data API builder (DAB) to Azure Container Apps by using the mcr.microsoft.com/azure-\ndatabases/data-api-builder:latest image.\nYou have the following Container Apps secrets:\nMSSQL_CONNECTION_STRING that maps to the SQL connection string DAB_CONFIG_BASE64 that maps to the DAB configuration You need to initialize the DAB configuration to read the SQL connection string.\nWhich command should you run?",
   "options": {
    "A": "dab init --database-type mssql --connection-string “secretref:DAB_CONFIG_BASE64” --host-mode Production --config dab- config.json",
    "B": "dab init --database-type mssql --connection-string “@env (‘MSSQL_CONNECTION_STRING’)” --host-mode Production --config dab-config.json",
    "C": "dab init --database-type mssql --connection-string “secretref:mssql- connection-string” --host-mode Production --config dab-config.json",
    "D": "dab init --database-type mssql --connection-string “@env (‘DAB_CONFIG_BASE64’)” --host-mode Production --config dab-config.json"
   },
   "explanation": "To initialize the Data API builder (DAB) configuration to read the SQL connection string from your Container Apps secret, use the following dab init command:\ndab init --database-type mssql --connection-string \"@env('MSSQL_CONNECTION_STRING')\" Why this command works\n--database-type mssql: Specifies that you are connecting to an Azure SQL or SQL Server database.\n@env('MSSQL_CONNECTION_STRING'): This is the built-in DAB function that tells the runtime to substitute the value of the specified environment variable at load time. Since your Container Apps secret is mapped to MSSQL_CONNECTION_STRING, DAB will resolve it automatically when the container starts.\n--connection-string: This flag sets the data source connection. By using the @env() syntax here, you ensure the secret remains out of the static configuration file.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库。\n您使用 mcr.microsoft.com/azure-databases/data-api-builder:latest 映像把 Data API builder (DAB) 部署到 Azure Container Apps。\n您有以下 Container Apps 机密：\nMSSQL_CONNECTION_STRING，映射到 SQL 连接字符串\nDAB_CONFIG_BASE64，映射到 DAB 配置\n您需要初始化 DAB 配置以读取该 SQL 连接字符串。\n您应该运行哪个命令？",
   "options": {
    "A": "dab init --database-type mssql --connection-string \"secretref:DAB_CONFIG_BASE64\" --host-mode Production --config dab-config.json",
    "B": "dab init --database-type mssql --connection-string \"@env('MSSQL_CONNECTION_STRING')\" --host-mode Production --config dab-config.json",
    "C": "dab init --database-type mssql --connection-string \"secretref:mssql-connection-string\" --host-mode Production --config dab-config.json",
    "D": "dab init --database-type mssql --connection-string \"@env('DAB_CONFIG_BASE64')\" --host-mode Production --config dab-config.json"
   },
   "explanation": "要让 Data API builder (DAB) 配置从 Container Apps 机密读取 SQL 连接字符串，应使用：\ndab init --database-type mssql --connection-string \"@env('MSSQL_CONNECTION_STRING')\"\n\n原因：\n--database-type mssql：指明连接的是 Azure SQL 或 SQL Server 数据库。\n@env('MSSQL_CONNECTION_STRING')：这是 DAB 内置的函数，告诉运行时在加载时替换指定环境变量的值。由于 Container Apps 机密已映射到 MSSQL_CONNECTION_STRING，容器启动时 DAB 会自动解析它。\n--connection-string：设置数据源连接。使用 @env() 语法可确保机密不会写入静态配置文件。\n\nDAB_CONFIG_BASE64 存的是 DAB 配置而不是连接字符串，因此 A、D 不正确。"
  }
 },
 {
  "id": 10,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a SQL database in Microsoft Fabric that contains a nvarchar (max) column named MessageText. An ID is always contained within the first paragraph of MessageText.\nYou need to write a Transact-SQL query that uses REGEXP_SUBSTR to extract the ID from MessageText.\nWhat should you include in the query?",
   "options": {
    "A": "Apply STRING_ESCAPE(MessageText, ‘json’) before calling REGEXP_SUBSTR.",
    "B": "Cast MessageText to nvarchar (4000) before calling REGEXP_SUBSTR.",
    "C": "Add a COLLATE Latin1_General_CS_AS clause to MessageText before calling REGEXP_SUBSTR.",
    "D": "Run TRY_CONVERT(varchar(max), MessageText) before calling REGEXP_SUBSTR."
   },
   "explanation": "To extract an ID (e.g., alphanumeric) from the first paragraph of an nvarchar(max) column in Microsoft Fabric using STRING_ESCAPE, use STRING_SPLIT or CHARINDEX to isolate the first paragraph, apply STRING_ESCAPE, and a regex pattern.\nNote: T-SQL does not natively support a REGEXP_SUBSTR function like Oracle/Snowflake. The solution below uses STRING_ESCAPE followed by pattern matching via PATINDEX and SUBSTRING to extract a typical alphanumeric ID.\nReference:"
  },
  "zh": {
   "stem": "您在 Microsoft Fabric 中有一个 SQL 数据库，其中包含一个名为 MessageText 的 nvarchar(max) 列。ID 始终包含在 MessageText 的第一段中。\n您需要编写一个使用 REGEXP_SUBSTR 从 MessageText 中提取 ID 的 Transact-SQL 查询。\n您应该在查询中包含什么？",
   "options": {
    "A": "在调用 REGEXP_SUBSTR 之前对 MessageText 应用 STRING_ESCAPE(MessageText, 'json')。",
    "B": "在调用 REGEXP_SUBSTR 之前把 MessageText 强制转换为 nvarchar(4000)。",
    "C": "在调用 REGEXP_SUBSTR 之前为 MessageText 添加 COLLATE Latin1_General_CS_AS 子句。",
    "D": "在调用 REGEXP_SUBSTR 之前运行 TRY_CONVERT(varchar(max), MessageText)。"
   },
   "explanation": "要在 Microsoft Fabric 中从 nvarchar(max) 列的第一段里提取 ID（例如字母数字组合），可先用 STRING_SPLIT 或 CHARINDEX 定位第一段，再应用 STRING_ESCAPE 与正则模式。\n\n说明：T-SQL 并不像 Oracle/Snowflake 那样原生支持 REGEXP_SUBSTR 函数；上述做法是先用 STRING_ESCAPE，再通过 PATINDEX 与 SUBSTRING 做模式匹配来提取典型的字母数字 ID。"
  }
 },
 {
  "id": 11,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have an Azure SQL database that contains database-level Data Definition Language (DDL) triggers,\nincluding a trigger named ddl_Audit.\nYou need to prevent ddl_Audit from firing during the next deployment. The trigger object must remain in place.\nWhich Transact-SQL statement should you use?",
   "options": {
    "A": "ALTER TRIGGER",
    "B": "ALTER DATABASE",
    "C": "ALTER SERVER AUDIT SPECIFICATION",
    "D": "DISABLE TRIGGER",
    "E": "ALTER DATABASE AUDIT SPECIFICATION"
   },
   "explanation": "The DISABLE TRIGGER Transact-SQL statement is the correct and appropriate solution for this scenario.\n\nSolution Breakdown To prevent a specific database-level DDL trigger from firing without removing the object, you can use the following syntax:\nDISABLE TRIGGER [TriggerName] ON DATABASE;\n\nKey Considerations Object Retention: A disabled trigger remains in the database as an object and is visible in catalog views like sys.triggers, but it will not execute when its programmed events occur.\nReactivation: You can re-enable the trigger after your deployment is complete using the ENABLE TRIGGER statement.\nPermissions: To execute this command on a database-scoped DDL trigger in Azure SQL, you must have at least ALTER ANY DATABASE DDL TRIGGER permission.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含数据库级数据定义语言 (DDL) 触发器，其中包括一个名为 ddl_Audit 的触发器。\n您需要在下一次部署期间阻止 ddl_Audit 触发。该触发器对象必须保留。\n您应该使用哪个 Transact-SQL 语句？",
   "options": {
    "A": "ALTER TRIGGER",
    "B": "ALTER DATABASE",
    "C": "ALTER SERVER AUDIT SPECIFICATION",
    "D": "DISABLE TRIGGER",
    "E": "ALTER DATABASE AUDIT SPECIFICATION"
   },
   "explanation": "DISABLE TRIGGER 语句正是本场景的正确解决方案。\n\n语法：\nDISABLE TRIGGER [TriggerName] ON DATABASE;\n\n要点：\n对象保留：被禁用的触发器仍作为对象保留在数据库中，可在 sys.triggers 等目录视图中看到，但在其编程事件发生时不会执行。\n重新启用：部署完成后可使用 ENABLE TRIGGER 语句重新启用。\n权限：在 Azure SQL 中对数据库范围的 DDL 触发器执行此命令，至少需要 ALTER ANY DATABASE DDL TRIGGER 权限。"
  }
 },
 {
  "id": 12,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Your development team uses GitHub Copilot Chat in Microsoft SQL Server Management Studio (SSMS) to generate and run Transact-SQL queries against an Azure SQL database named DB1. DB1 contains tables that store sensitive customer data.\nYou need to ensure that any Transact-SQL queries that run from GitHub Copilot Chat in SSMS are restricted by the same permissions as the developer’s database login.\nWhat prevents the GitHub Copilot Chat-run queries from accessing data beyond the developer’s access?",
   "options": {
    "A": "GitHub Copilot Chat runs queries in a read-only sandbox that is isolated from production database permissions.",
    "B": "GitHub Copilot Chat runs queries by using the developer’s database identity and permissions.",
    "C": "GitHub Copilot Chat filters query results on the client side to remove rows the developer is unauthorized to see.",
    "D": "GitHub Copilot Chat uses different row-level security (RLS) policies than the developer."
   },
   "explanation": "GitHub Copilot Chat in SSMS acts as an extension of the user, meaning it does not have its own separate service account or elevated privileges.\nIt operates within the security context of your active connection. If your database login is restricted by Role-\nBased Access Control (RBAC), Row-Level Security (RLS), or specific DENY permissions on sensitive tables, Copilot cannot bypass those hurdles to fetch or manipulate data you couldn't otherwise access manually.\n\nReference:"
  },
  "zh": {
   "stem": "您的开发团队在 Microsoft SQL Server Management Studio (SSMS) 中使用 GitHub Copilot Chat 针对一个名为 DB1 的 Azure SQL 数据库生成并运行 Transact-SQL 查询。DB1 包含存储敏感客户数据的表。\n您需要确保从 SSMS 中的 GitHub Copilot Chat 运行的任何 Transact-SQL 查询都受与开发人员数据库登录名相同的权限约束。\n是什么阻止了 GitHub Copilot Chat 运行的查询访问超出开发人员访问范围的数据？",
   "options": {
    "A": "GitHub Copilot Chat 在与生产数据库权限隔离的只读沙盒中运行查询。",
    "B": "GitHub Copilot Chat 使用开发人员的数据库标识和权限运行查询。",
    "C": "GitHub Copilot Chat 在客户端筛选查询结果，移除开发人员无权查看的行。",
    "D": "GitHub Copilot Chat 使用与开发人员不同的行级安全性 (RLS) 策略。"
   },
   "explanation": "SSMS 中的 GitHub Copilot Chat 是用户的延伸，它没有自己独立的服务账户，也没有更高的权限。\n它在您当前活动连接的安全上下文中运行。如果您的数据库登录名受基于角色的访问控制 (RBAC)、行级安全性 (RLS) 或敏感表上特定 DENY 权限的限制，Copilot 无法绕过这些限制去获取或操作您手动也无法访问的数据。"
  }
 },
 {
  "id": 13,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "C",
   "D"
  ],
  "en": {
   "stem": "You have an Azure SQL database named AdventureWorksDB that contains a table named dbo.Employee.\nYou have a C# Azure Functions app that uses an HTTP-triggered function with an Azure SQL input binding to query dbo.Employee.\nYou are adding a second function that will react to row changes in dbo.Employee and write structured logs.\nYou need to configure AdventureWorksDB and the app to meet the following requirements:\nChanges to dbo.Employee must trigger the new function within five seconds.\nEach invocation must process no more than 100 changes.\nWhich two database configurations should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Create an AFTER trigger on dbo.Employee for Data Manipulation Language (DML).",
    "B": "Set Sql_Trigger_MaxBatchSize to 100.",
    "C": "Enable change tracking on the dbo.Employee table.",
    "D": "Enable change tracking at the database level.",
    "E": "Set Sql_Trigger_PollingIntervalMs to 5000.",
    "F": "Enable change data capture (CDC) for dbo.Employee table changes."
   },
   "explanation": "To use an Azure SQL trigger in an Azure Functions app, you must perform the following two database configurations:\nEnable change tracking on the database: You must turn on change tracking at the database level to allow the system to monitor for row-level modifications.\nEnable change tracking on the table: You must specifically enable change tracking for the table that the second function is monitoring.\n\nThese configurations are mandatory for the Azure SQL trigger to detect inserts, updates, and deletes.\nIncorrect:\nConfiguring Timing and Batching While the database setup enables the tracking mechanism, the specific performance requirements (triggering within five seconds and processing no more than 100 changes) are managed through application settings in the Azure Function app, rather than database-side configurations:\nSql_Trigger_MaxBatchSize: Set this to 100 to ensure each invocation processes no more than 100 changes.\nSql_Trigger_PollingIntervalMs: Set this to 5000 (5,000 milliseconds) or less to ensure changes are detected and triggered within five seconds.\nReference:"
  },
  "zh": {
   "stem": "您有一个名为 AdventureWorksDB 的 Azure SQL 数据库，其中包含一个名为 dbo.Employee 的表。\n您有一个 C# Azure Functions 应用，它使用带 Azure SQL 输入绑定的 HTTP 触发函数来查询 dbo.Employee。\n您正在添加第二个函数，用于响应 dbo.Employee 中的行更改并写入结构化日志。\n您需要配置 AdventureWorksDB 和该应用以满足以下要求：\ndbo.Employee 的更改必须在五秒内触发新函数。\n每次调用处理的更改不得超过 100 条。\n您应该执行哪两项数据库配置？每个正确答案都是解决方案的一部分。\n注意：每个正确的选择值一分。",
   "options": {
    "A": "在 dbo.Employee 上为数据操作语言 (DML) 创建 AFTER 触发器。",
    "B": "将 Sql_Trigger_MaxBatchSize 设置为 100。",
    "C": "在 dbo.Employee 表上启用更改跟踪。",
    "D": "在数据库级别启用更改跟踪。",
    "E": "将 Sql_Trigger_PollingIntervalMs 设置为 5000。",
    "F": "为 dbo.Employee 表的更改启用变更数据捕获 (CDC)。"
   },
   "explanation": "要在 Azure Functions 应用中使用 Azure SQL 触发器，必须完成以下两项数据库配置：\n在数据库上启用更改跟踪：必须在数据库级别打开更改跟踪，系统才能监视行级修改。\n在表上启用更改跟踪：必须专门为第二个函数所监视的表启用更改跟踪。\n这两项配置是 Azure SQL 触发器检测插入、更新和删除的必要条件。\n\n错误选项：\n数据库配置只是启用跟踪机制；具体的性能要求（五秒内触发、每次不超过 100 条更改）是通过 Azure Functions 应用的应用程序设置管理的，而不是数据库端配置：\nSql_Trigger_MaxBatchSize：设为 100，确保每次调用处理的更改不超过 100 条。\nSql_Trigger_PollingIntervalMs：设为 5000 毫秒或更小，确保在五秒内检测到更改并触发。"
  }
 },
 {
  "id": 14,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft SQL Server 2025 database that contains a table named dbo.CustomerMessages.\ndbo.CustomerMessages contains two columns named MessageID (int) and MessageRaw (nvarchar(max)).\nMessageRaw can contain a phone number in multiple formats, and some rows do NOT contain a phone number.\nYou need to write a single SELECT query that meets the following requirements:\nThe query must return MessageID, RawNumber, DigitsOnly, and PhoneStatus.\nRawNumber must contain the first substring that matches a phone-number pattern, or NULL if no match exists.\nDigitsOnly must remove all non-digit characters from RawNumber, or return NULL.\nPhoneStatus must return valid when a phone number exists in MessageRaw, otherwise return Missing.\nHow should you complete the Transact-SQL query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: REGEXP_SUBSTR( RawNumber must contain the first substring that matches a phone-number pattern, or NULL if no match exists.\nThe best Transact-SQL statement to extract the first substring matching a regular expression is the newly introduced REGEXP_SUBSTR function.\n\nThis function specifically returns the portion of a string that matches a given pattern, or NULL if no match is found. To satisfy your requirement using the provided pattern, the query would be:\n\nSELECT REGEXP_SUBSTR(PhoneNumberColumn, '\\d{3}[)\\-\\s]*\\d{3}[ \\-\\s]*\\d{4}')\nFROM YourTableName;\nUse code with caution.\nWhy this is the best choice:\nNative Support: Prior to SQL Server 2025, performing regex extraction required complex workarounds like\nCLR assemblies or nested string functions.\nAutomatic NULL Handling: If the pattern does not exist within the string, REGEXP_SUBSTR naturally\nreturns NULL.\nDefault Behavior: By default, the function retrieves the first occurrence (position 1, occurrence 1), though\nthese can be customized using optional parameters if needed.\nPattern Correction: Note that standard regex syntax uses curly braces {} for quantifiers (e.g., \\d{3}) rather\nthan parentheses ().\nBox 2: REGEXP_REPLACE(   REGEXP_SUBSTR(\nDigitsOnly must remove all non-digit characters from RawNumber, or return NULL.\nThe solution to extract only digits from the RawNumber column in Microsoft SQL Server 2025 using a\nsingle T-SQL query is:\nSELECT\n    REGEXP_REPLACE(\n        REGEXP_SUBSTR(RawNumber, '\\d{3}[)\\-\\s]*\\d{3}[ \\-\\s]*\\d{4}'),\n        '\\D',\n        ''\n    ) AS CleanedNumber\nFROM YourTableName;\n1. Extract valid phone pattern\nThe inner function, REGEXP_SUBSTR(RawNumber, '\\d{3}[)\\-\\s]*\\d{3}[ \\-\\s]*\\d{4}'), searches the\nRawNumber string for a specific pattern matching a standard 10-digit phone number.\n\nPattern: It looks for 3 digits, followed by optional separators like closing parentheses, hyphens, or spaces,\nfollowed by another 3 digits, more optional separators, and finally 4 digits.\nResult: If a match is found, it returns that specific substring. If no match exists, it returns NULL.\n\n2. Strip non-digit characters The outer function, REGEXP_REPLACE(..., '\\D', ''), takes the substring extracted in the previous step and cleans it.\nPattern: The \\D regular expression matches any character that is not a digit (0-9).\nReplacement: It replaces every non-digit character with an empty string (''), effectively removing them.\nResult: The final output is a string containing only the 10 digits of the phone number.\n3. Handle null values Because REGEXP_SUBSTR returns NULL if the pattern isn't found, the entire expression will result in NULL for any row that doesn't contain a validly formatted 10-digit number. This ensures you only get cleaned data for entries that meet your specified criteria\nBox 3: REGEXP_LIKE( PhoneStatus must return valid when a phone number exists in MessageRaw, otherwise return Missing.\nWith the introduction of native regular expression support in SQL Server 2025, the best approach to validate the phone number column using the provided regex pattern is by utilizing the REGEXP_LIKE function within a CASE expression.\nSELECT\n\n    PhoneNumberColumn,\n    CASE\n        WHEN REGEXP_LIKE(PhoneNumberColumn, '\\d{3}[)\\-\\s]*\\d{3}[ \\-\\s]*\\d{4}') THEN 'Valid'\n        ELSE 'Missing'\n    END AS ValidationStatus\nFROM YourTableName;\nDetails:\nREGEXP_LIKE(column, pattern): This function directly checks if the nvarchar column matches the\nspecified regular expression.\nRegex Correction: The provided regex '\\d(3)[)\\-\\s]*\\d(3)[ \\-\\s]*\\d(4)\" requires a slight adjustment to \\d{3}\n(curly braces) for standard quantifier syntax in many regex engines, though the logic remains the same (3\ndigits, separators, 3 digits, separators, 4 digits).\nCASE WHEN...: Evaluates the regex match and returns 'Valid' if true, 'Missing' otherwise.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Microsoft SQL Server 2025 数据库，其中包含一个名为 dbo.CustomerMessages 的表。dbo.CustomerMessages 包含两个列：MessageID (int) 和 MessageRaw (nvarchar(max))。\nMessageRaw 中可能以多种格式包含电话号码，某些行则不包含电话号码。\n您需要编写一个满足以下要求的 SELECT 查询：\n查询必须返回 MessageID、RawNumber、DigitsOnly 和 PhoneStatus。\nRawNumber 必须包含与电话号码模式匹配的第一个子字符串；若无匹配则为 NULL。\nDigitsOnly 必须从 RawNumber 中删除所有非数字字符，或返回 NULL。\nPhoneStatus 在 MessageRaw 中存在电话号码时必须返回 valid，否则返回 Missing。\n您应如何完成该 Transact-SQL 查询？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：REGEXP_SUBSTR(\nRawNumber 必须包含与电话号码模式匹配的第一个子字符串，若无匹配则为 NULL。提取首个正则匹配子串的最佳 T-SQL 函数就是新引入的 REGEXP_SUBSTR。它返回字符串中匹配给定模式的部分，若未找到匹配则返回 NULL。例如：\nSELECT REGEXP_SUBSTR(PhoneNumberColumn, '\\d{3}[)\\-\\s]*\\d{3}[ \\-\\s]*\\d{4}') FROM YourTableName;\n\n为什么最合适：\n原生支持：SQL Server 2025 之前做正则提取需要 CLR 程序集或嵌套字符串函数等复杂变通方案。\n自动处理 NULL：模式不存在时 REGEXP_SUBSTR 自然返回 NULL。\n默认行为：默认取第一次出现（位置 1、第 1 次匹配），也可用可选参数自定义。\n\n框 2：REGEXP_REPLACE( REGEXP_SUBSTR(\nDigitsOnly 必须从 RawNumber 中删除所有非数字字符，或返回 NULL——先用 REGEXP_SUBSTR 取出号码，再用 REGEXP_REPLACE 把非数字字符替换掉。\n\n框 3：REGEXP_LIKE(\nPhoneStatus 用 CASE WHEN REGEXP_LIKE(...) THEN 'valid' ELSE 'Missing' END 判断 MessageRaw 中是否存在电话号码。"
  },
  "sources_en": [
   "REGEXP_COUNT(",
   "REGEXP_INSTR(",
   "REGEXP_LIKE(",
   "REGEXP_REPLACE( REGEXP_SUBSTR(",
   "REGEXP_SUBSTR(",
   "STRING_SIMILARITY("
  ],
  "sources_zh": [
   "REGEXP_COUNT(",
   "REGEXP_INSTR(",
   "REGEXP_LIKE(",
   "REGEXP_REPLACE( REGEXP_SUBSTR(",
   "REGEXP_SUBSTR(",
   "STRING_SIMILARITY("
  ],
  "targets": [
   {
    "label_en": "Box 1 (... AS RawNumber)",
    "label_zh": "框 1（... AS RawNumber）",
    "correct_en": "REGEXP_SUBSTR(",
    "correct_zh": "REGEXP_SUBSTR("
   },
   {
    "label_en": "Box 2 (... AS DigitsOnly)",
    "label_zh": "框 2（... AS DigitsOnly）",
    "correct_en": "REGEXP_REPLACE( REGEXP_SUBSTR(",
    "correct_zh": "REGEXP_REPLACE( REGEXP_SUBSTR("
   },
   {
    "label_en": "Box 3 (CASE WHEN ...)",
    "label_zh": "框 3（CASE WHEN ...）",
    "correct_en": "REGEXP_LIKE(",
    "correct_zh": "REGEXP_LIKE("
   }
  ]
 },
 {
  "id": 15,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named Rooms. Rooms was created by using the following Transact-SQL statement.\nYou discover that some records in the Rooms table contain NULL values for the Owner field.\nYou need to ensure that all future records have a value for the Owner field.\nWhat should you add?",
   "options": {
    "A": "a foreign key",
    "B": "a check constraint",
    "C": "a nonclustered index",
    "D": "a unique constraint"
   },
   "explanation": "A CHECK constraint is one way to do it.\nIf you use a CHECK constraint (e.g., CHECK (ColumnName IS NOT NULL)), the database will indeed reject new NULL entries. However, the column's metadata will still technically allow NULLs, which can sometimes affect how external tools or APIs interact with your schema.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 Rooms 的表。Rooms 是使用以下 Transact-SQL 语句创建的。\n您发现 Rooms 表中的某些记录的 Owner 字段包含 NULL 值。\n您需要确保将来所有记录的 Owner 字段都有值。\n您应该添加什么？",
   "options": {
    "A": "外键",
    "B": "检查约束",
    "C": "非聚集索引",
    "D": "唯一约束"
   },
   "explanation": "CHECK 约束是实现该目标的一种方式。\n如果使用 CHECK 约束（例如 CHECK (ColumnName IS NOT NULL)），数据库确实会拒绝新的 NULL 值。不过该列的元数据在技术上仍然允许 NULL，这有时会影响外部工具或 API 与架构交互的方式。\n\n外键、非聚集索引和唯一约束都不能阻止写入 NULL 值。"
  },
  "code": {
   "lang": "sql",
   "title_en": "The statement that created Rooms",
   "title_zh": "创建 Rooms 表的语句",
   "text": "CREATE TABLE Rooms\n(\n    RoomID int PRIMARY KEY,\n    Owner nvarchar(100),\n    Capacity int\n);"
  }
 },
 {
  "id": 16,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a SQL database in Microsoft Fabric that contains a table named WebSite.Logs.\nWebSite.Logs stores application telemetry data. WebSite.Logs contains a nvarchar (max) column\n\nnamed log that stores JSON documents.\nYou have a daily report that filters by the $.severity JSON property and returns LogId, LogDateTime,\nand log. The report frequently causes full table scans.\nYou need to modify WebSite.Logs to support efficient filtering by $.severity and avoid key lookups for the columns returned by the report.\nHow should you complete the Transact-SQL code to avoid full table scans? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: AS JSON_VALUE([log], 'severity') PERSISTED To optimize the query and avoid both full table scans and key lookups, you should add a computed column for the JSON property and then include it in a non-clustered index that includes the other two required columns.\nThe most appropriate ADD statement to define the JSON property as a persistent, indexable column is:\nALTER TABLE [YourTableName] ADD [JsonPropertyColumnName] AS JSON_VALUE([JsonColumnName], '$.YourPropertyPath') PERSISTED;\nUse code with caution.\nWhy this works:\nJSON_VALUE: Extracts the specific scalar value from the JSON document.\nPERSISTED: Stores the value physically in the table, which is a prerequisite for creating certain types of indexes and ensures the calculation isn't repeated during every read.\nIndexing: Once added, you can create a Non-Clustered Index on this new column and use the INCLUDE clause for the other two columns. This creates a \"covering index,\" allowing the engine to satisfy the report entirely from the index without hitting the base table (avoiding the key lookup).\nBox 2: INCLUDE (LogID, LogDateTime, [log])\n\nTo optimize the query, the non-clustered index should include the persisted JSON property column in the index key for filtering, and the two columns returned by the report in the INCLUDE clause. This strategy enables an index seek and covers the query, avoiding costly key lookups.\nRecommended Non-Clustered Index Structure:\nIndex Key: The new computed column holding the persisted JSON property.\nIncluded Columns: The two columns specified in the report's SELECT list.\nWhy this works:\nPERSISTED: Acts like a regular column, allowing direct indexing.\nCovering Index: By including the result columns, the query engine retrieves all necessary data directly from the index leaf nodes, eliminating key lookups.\nEfficiency: Prevents full table scans, reducing I/O and increasing query speed.\nReference:"
  },
  "zh": {
   "stem": "您在 Microsoft Fabric 中有一个 SQL 数据库，其中包含一个名为 WebSite.Logs 的表。WebSite.Logs 存储应用程序遥测数据。WebSite.Logs 包含一个名为 log 的 nvarchar(max) 列，用于存储 JSON 文档。\n您有一个每日报表，它按 $.severity JSON 属性筛选，并返回 LogId、LogDateTime 和 log。该报表经常导致全表扫描。\n您需要修改 WebSite.Logs 以支持按 $.severity 高效筛选，并避免报表所返回列的键查找。\n您应如何完成该 Transact-SQL 代码以避免全表扫描？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：AS JSON_VALUE([log], '$.severity') PERSISTED\n要同时避免全表扫描和键查找，应为该 JSON 属性添加计算列，然后把它放进包含其他两个必需列的非聚集索引。定义可索引持久化列的 ADD 语句为：\nALTER TABLE [表名] ADD [列名] AS JSON_VALUE([JSON列], '$.属性路径') PERSISTED;\n\n原理：\nJSON_VALUE：从 JSON 文档中提取指定的标量值。\nPERSISTED：把该值物理存储在表中，这是创建某些类型索引的前提，也避免每次读取时重复计算。\n索引：添加后即可在该新列上创建非聚集索引，并用 INCLUDE 子句包含另外两列，形成“覆盖索引”，使引擎完全从索引即可满足报表查询，无需回表（避免键查找）。\n\n框 2：INCLUDE (LogId, LogDateTime, [log])\n非聚集索引应把持久化的 JSON 属性列作为索引键用于筛选，并把报表返回的列放入 INCLUDE 子句。这样既能实现索引查找，又能覆盖查询，避免代价高昂的键查找。"
  },
  "sources_en": [
   "AS JSON_QUERY([log], '$.severity')",
   "AS JSON_VALUE([log], '$.severity') PERSISTED",
   "INCLUDE (log)",
   "INCLUDE (LogId, LogDateTime, [log])"
  ],
  "sources_zh": [
   "AS JSON_QUERY([log], '$.severity')",
   "AS JSON_VALUE([log], '$.severity') PERSISTED",
   "INCLUDE (log)",
   "INCLUDE (LogId, LogDateTime, [log])"
  ],
  "targets": [
   {
    "label_en": "Box 1 (ALTER TABLE WebSite.Logs ADD severity ...)",
    "label_zh": "框 1（ALTER TABLE WebSite.Logs ADD severity ...）",
    "correct_en": "AS JSON_VALUE([log], '$.severity') PERSISTED",
    "correct_zh": "AS JSON_VALUE([log], '$.severity') PERSISTED"
   },
   {
    "label_en": "Box 2 (CREATE INDEX ix_severity ON WebSite.Logs(severity) ...)",
    "label_zh": "框 2（CREATE INDEX ix_severity ON WebSite.Logs(severity) ...）",
    "correct_en": "INCLUDE (LogId, LogDateTime, [log])",
    "correct_zh": "INCLUDE (LogId, LogDateTime, [log])"
   }
  ]
 },
 {
  "id": 17,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have an Azure SQL database named ToDo that contains a table named dbo.ToDo.\nYour company plans to develop an Azure Functions app to run whenever the rows in dbo.ToDo change.\nThe app will process INSERT, UPDATE, and DELETE events by using the Azure SQL trigger binding.\nYou need to configure ToDo to support the planned app.\nWhat should you do?",
   "options": {
    "A": "Enable change tracking on ToDo and dbo.ToDo.",
    "B": "On dbo.ToDo, create a Data Manipulation Language (DML) trigger that calls the Azure Functions HTTP endpoint.",
    "C": "Enable change data capture (CDC) on ToDo and dbo.ToDo.",
    "D": "On dbo.ToDo, create a Data Definition Language (DDL) trigger that calls the Azure Functions HTTP endpoint."
   },
   "explanation": "To use the Azure SQL trigger for Azure Functions, your database table must have Change Tracking enabled. This is the underlying mechanism the trigger uses to monitor row-level modifications.\nRequired Table Configuration To facilitate the app, you must follow these three steps:\n1. Enable Change Tracking on the Database Before the table can be tracked, the feature must be turned on at the database level.\n2. Enable Change Tracking on the Table The specific table the Function monitors must have tracking enabled.\n3. Define a Primary Key The Azure SQL trigger requires the table to have a Primary Key.\nThe trigger uses the Primary Key to identify which specific rows were changed.\nIf your table lacks a Primary Key, the Function will fail to start.\nReference:\nhttps://demiliani.com/2025/05/08/azure-function-sql-trigger-how-to-use-it-and-why-it-can-be-useful-in-your-\nbusiness-central-projects/"
  },
  "zh": {
   "stem": "您有一个名为 ToDo 的 Azure SQL 数据库，其中包含一个名为 dbo.ToDo 的表。\n贵公司计划开发一个 Azure Functions 应用，在 dbo.ToDo 中的行发生更改时运行。该应用将使用 Azure SQL 触发器绑定来处理 INSERT、UPDATE 和 DELETE 事件。\n您需要配置 ToDo 以支持该计划中的应用。\n您应该怎么做？",
   "options": {
    "A": "在 ToDo 和 dbo.ToDo 上启用更改跟踪。",
    "B": "在 dbo.ToDo 上创建一个调用 Azure Functions HTTP 终结点的数据操作语言 (DML) 触发器。",
    "C": "在 ToDo 和 dbo.ToDo 上启用变更数据捕获 (CDC)。",
    "D": "在 dbo.ToDo 上创建一个调用 Azure Functions HTTP 终结点的数据定义语言 (DDL) 触发器。"
   },
   "explanation": "要在 Azure Functions 中使用 Azure SQL 触发器，数据库表必须启用更改跟踪 (Change Tracking)，这是触发器监视行级修改的底层机制。\n\n必需的配置：\n1. 在数据库上启用更改跟踪——必须先在数据库级别打开该功能，表才能被跟踪。\n2. 在表上启用更改跟踪——函数监视的具体表必须启用跟踪。\n3. 定义主键——Azure SQL 触发器要求表具有主键，触发器用主键识别哪些行发生了更改；若表没有主键，函数将无法启动。"
  }
 },
 {
  "id": 18,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named dbo.Customers. dbo.Customers contains the following columns:\nCustomerId (int)(primary key) ProfileJson (nvarchar(max)) You have an application that returns phone numbers in a format of +000 000-000-0000. The phone numbers are stored in ProfileJson.\nYou need to write a query that returns:\nOne row per customer A PhoneNUmerals column that contains only the digits How should you complete the Transact-SQL query? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "To extract only the digits from a JSON property in T-SQL, you need to use JSON_VALUE to parse the string and TRANSLATE combined with REPLACE (or a similar pattern like REGEXP_REPLACE) to strip non-numeric characters.\nBox 1: JSON_VALUE(c.ProfileJson, '$.phone') Extracting from JSON JSON_VALUE(c.ProfileJson, '$.phone') JSON_VALUE extracts a scalar value from a JSON string.\nBox 2: REGEXP_REPLACE(p.PhoneRaw [^0-9]. ' ') In Transact-SQL (T-SQL), the REGEXP_REPLACE function can be used as a more powerful and concise alternative to the REPLACE(TRANSLATE(...)) pattern.\nBox 3: p.PhoneRaw Filter p.PhoneRaw This ensures that only customers who actually have a phone number in their JSON profile are included in the final set.\nReference:\nhttps://techgenies.com/what-data-type-would-a-phone-number-be-in-sql https://devblogs.microsoft.com/azure-sql/general-availability-announcement-regex-support-in-sql-server-\n2025-azure-sql/"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 dbo.Customers 的表。dbo.Customers 包含以下列：\nCustomerId (int)（主键）\nProfileJson (nvarchar(max))\n您有一个应用程序，它以 +000 000-000-0000 的格式返回电话号码。电话号码存储在 ProfileJson 中。\n您需要编写一个返回下列内容的查询：\n每个客户一行\n一个仅包含数字的 PhoneNUmerals 列\n您应如何完成该 Transact-SQL 查询？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "要从 T-SQL 中的 JSON 属性里只提取数字，需要用 JSON_VALUE 解析字符串，再用 REGEXP_REPLACE（或 TRANSLATE 与 REPLACE 组合的传统写法）去掉非数字字符。\n\n框 1：JSON_VALUE(c.ProfileJson, '$.contact.phone')\nJSON_VALUE 从 JSON 字符串中提取标量值。\n\n框 2：REGEXP_REPLACE(p.PhoneRaw, '[^0-9]', '')\n在 T-SQL 中，REGEXP_REPLACE 是比 REPLACE(TRANSLATE(...)) 模式更强大、更简洁的替代方案。\n\n框 3：p.PhoneRaw\n用于筛选，确保只有 JSON 配置文件中确实存在电话号码的客户才会出现在最终结果中。"
  },
  "sources_en": [
   "JSON_QUERY(c.ProfileJson, '$.contact.phone')",
   "JSON_VALUE(c.ProfileJson, '$.contact.phone')",
   "OPENJSON(c.ProfileJson, '$.contact.phone')",
   "p.PhoneRaw",
   "REGEXP_LIKE(p.PhoneRaw, '[^0-9]', '')",
   "REGEXP_REPLACE(p.PhoneRaw, '[^0-9]', '')",
   "REGEXP_SUBSTR(p.PhoneRaw, '[0-9]+')"
  ],
  "sources_zh": [
   "JSON_QUERY(c.ProfileJson, '$.contact.phone')",
   "JSON_VALUE(c.ProfileJson, '$.contact.phone')",
   "OPENJSON(c.ProfileJson, '$.contact.phone')",
   "p.PhoneRaw",
   "REGEXP_LIKE(p.PhoneRaw, '[^0-9]', '')",
   "REGEXP_REPLACE(p.PhoneRaw, '[^0-9]', '')",
   "REGEXP_SUBSTR(p.PhoneRaw, '[0-9]+')"
  ],
  "targets": [
   {
    "label_en": "Box 1 (... AS PhoneRaw, inside the CTE)",
    "label_zh": "框 1（CTE 内的 ... AS PhoneRaw）",
    "correct_en": "JSON_VALUE(c.ProfileJson, '$.contact.phone')",
    "correct_zh": "JSON_VALUE(c.ProfileJson, '$.contact.phone')"
   },
   {
    "label_en": "Box 2 (... AS PhoneNUmerals)",
    "label_zh": "框 2（... AS PhoneNUmerals）",
    "correct_en": "REGEXP_REPLACE(p.PhoneRaw, '[^0-9]', '')",
    "correct_zh": "REGEXP_REPLACE(p.PhoneRaw, '[^0-9]', '')"
   },
   {
    "label_en": "Box 3 (WHERE ... IS NOT NULL)",
    "label_zh": "框 3（WHERE ... IS NOT NULL）",
    "correct_en": "p.PhoneRaw",
    "correct_zh": "p.PhoneRaw"
   }
  ]
 },
 {
  "id": 19,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database named SalesDB that supports an ecommerce application. SalesDB contains a table named dbo.Orders that has a clustered index on a column named OrderId.\ndbo.Orders receives continuous OLTP inserts and updates during business hours.\nYour analytics team runs hourly aggregate queries that scan dbo.Orders to calculate revenue trends for recent dates.\nYou need to improve the performance of the hourly analytics queries without significantly affecting OLTP\n\nthroughput. The solution must meet the following requirements:\nSupport near-real-time (NRT) analytics on the dbo.Orders table.\nReduce read time when retrieving analytical data from dbo.Orders.\nSupport indexing only rows that match a predicate, such as Active = 1.\nWhich type of index should you use for each requirement? To answer, drag the appropriate index types to the correct requirements. Each index type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: a Nonclustered Columnstore Index on an existing rowstore table.\nSupport near-real-time (NRT) analytics on the dbo.Orders table.\nThe best index for this scenario is a Nonclustered Columnstore Index (NCCI).\nThis approach enables Hybrid Transactional and Analytical Processing (HTAP) by allowing you to run high-performance analytics directly on your OLTP table without moving data to a separate warehouse.\nWhy Nonclustered Columnstore is the Best Choice Optimized for Aggregates: It uses columnar storage to drastically speed up SUM, AVG, and COUNT operations.\nMinimal OLTP Impact: Unlike a Clustered Columnstore, the table remains a B-tree (Clustered Index),\nkeeping your singleton inserts and updates fast.\nNRT Analytics: Since the index is on the same table, the data is updated automatically as transactions occur.\nCompression: It significantly reduces the I/O needed for large table scans.\nBox 2: A filtered Nonclustered Columnstore Index with a WHERE predicate Reduce read time when retrieving analytical data from dbo.Orders.\nA Nonclustered Columnstore Index (NCCI) is the best choice for this scenario.\nThis specific index type allows you to run high-performance analytics on an OLTP table without moving the data to a separate data warehouse.\nTo ensure the OLTP throughput remains high, consider the following configuration:\nFiltered Indexing: If your aggregate queries only look at \"recent dates,\" create a Filtered Nonclustered Columnstore Index. This only indexes the latest data (e.g., WHERE OrderDate > '2024-01-01'), reducing the overhead on older rows.\n\nBox 3: A filtered Nonclustered Columnstore Index with a WHERE predicate Support indexing only rows that match a predicate, such as Active = 1.\nThe best solution for your requirement is a Filtered Index.\nA filtered index is a nonclustered index that includes a WHERE clause. It allows you to index a specific subset of data, which minimizes the index size and reduces the overhead of maintaining the index during OLTP operations.\nWhy Filtered Indexes Fit Your Scenario Improved Query Performance: The SQL optimizer can target a much smaller subset of data (e.g., only Active = 1), leading to faster seeks and scans.\nReduced Maintenance Overhead: Unlike a full nonclustered index, a filtered index is only updated when a row meets the predicate or is changed to/from meeting the predicate.\nLower Storage Costs: Because it only stores a fraction of the table's rows, it consumes significantly less disk space and memory.\nStatistics Accuracy: SQL Server maintains more accurate statistics for the specific data subset, leading to better execution plans for those aggregate queries.\nReference:\nhttps://learn.microsoft.com/en-us/sql/relational-databases/indexes/columnstore-indexes-design-guidance https://www.sqlshack.com/top-10-questions-answers-sql-server-indexes/"
  },
  "zh": {
   "stem": "您有一个名为 SalesDB 的 Azure SQL 数据库，用于支持一个电子商务应用程序。SalesDB 包含一个名为 dbo.Orders 的表，该表在名为 OrderId 的列上有聚集索引。\ndbo.Orders 在营业时间内持续接收 OLTP 插入和更新。\n您的分析团队每小时运行一次聚合查询，扫描 dbo.Orders 以计算近期日期的收入趋势。\n您需要在不显著影响 OLTP 吞吐量的前提下提升每小时分析查询的性能。该解决方案必须满足以下要求：\n支持对 dbo.Orders 表进行近实时 (NRT) 分析。\n缩短从 dbo.Orders 检索分析数据时的读取时间。\n支持仅对匹配谓词（例如 Active = 1）的行建立索引。\n您应为每项要求使用哪种索引类型？要回答此问题，请将适当的索引类型拖动到正确的要求上。每种索引类型可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：现有行存储表上的非聚集列存储索引\n支持对 dbo.Orders 进行近实时分析。非聚集列存储索引 (NCCI) 实现了混合事务/分析处理 (HTAP)，可以直接在 OLTP 表上运行高性能分析，而无需把数据搬到单独的数据仓库。\n聚合优化：列式存储大幅加速 SUM、AVG、COUNT。\n对 OLTP 影响最小：与聚集列存储不同，表本身仍是 B 树（聚集索引），单行插入和更新依然很快。\n近实时：索引就建在同一张表上，事务发生时数据自动更新。\n压缩：显著减少大表扫描所需的 I/O。\n\n框 2：带 WHERE 谓词的筛选非聚集索引\n缩短检索分析数据时的读取时间。如果聚合查询只关注“近期日期”，创建筛选索引可只索引最新数据（例如 WHERE OrderDate > '2024-01-01'），减少对旧行的维护开销。\n\n框 3：带 WHERE 谓词的筛选非聚集索引\n仅对匹配谓词的行建立索引——筛选索引就是带 WHERE 子句的非聚集索引，只索引数据的特定子集，从而减小索引体积并降低 OLTP 操作期间的索引维护开销。"
  },
  "sources_en": [
   "A clustered columnstore index",
   "A clustered rowstore index ordered by key columns",
   "A filtered nonclustered index with a WHERE predicate",
   "A nonclustered columnstore index on an existing rowstore table"
  ],
  "sources_zh": [
   "聚集列存储索引",
   "按键列排序的聚集行存储索引",
   "带 WHERE 谓词的筛选非聚集索引",
   "现有行存储表上的非聚集列存储索引"
  ],
  "targets": [
   {
    "label_en": "Support NRT analytics on dbo.Orders:",
    "label_zh": "支持对 dbo.Orders 进行近实时 (NRT) 分析：",
    "correct_en": "A nonclustered columnstore index on an existing rowstore table",
    "correct_zh": "现有行存储表上的非聚集列存储索引"
   },
   {
    "label_en": "Reduce read time when retrieving analytical data:",
    "label_zh": "缩短检索分析数据时的读取时间：",
    "correct_en": "A filtered nonclustered index with a WHERE predicate",
    "correct_zh": "带 WHERE 谓词的筛选非聚集索引"
   },
   {
    "label_en": "Index only rows that match a predicate:",
    "label_zh": "仅为匹配谓词的行建立索引：",
    "correct_en": "A filtered nonclustered index with a WHERE predicate",
    "correct_zh": "带 WHERE 谓词的筛选非聚集索引"
   }
  ]
 },
 {
  "id": 20,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that stores sales data and contains tables named Sales and Products. Sales contains three columns named SalesDate, ProductKey, and TotalSale,\nSales is 10 TB and is loaded nightly by using a batch process. Most reporting queries scan large portions of Sales, filter on SalesDate or ProductKey, and use SUM() to aggregate TotalSale.\nProducts is relatively small and is used primarily for point lookups and joins to Sales.\nYou need to recommend which indexes to create to optimize the reporting queries. The solution must minimize storage requirements.\nWhich type of index should you recommend for each table? To answer, drag the appropriate index types to the correct tables. Each index type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: A clustered columnstore index Sales A Clustered Columnstore Index (CCI) is the best choice for this scenario.\nFor a 10 TB table focused on large-scale analytical scanning and aggregation, columnstore technology offers the most efficiency.\nWhy Clustered Columnstore is the Winner Massive Compression: Columnstore indexes typically achieve 10x compression over raw data. This significantly reduces the 10 TB storage footprint.\nSegment Elimination: The engine only reads the specific columns needed (e.g., TotalSale). It skips \"segments\" of data that don't match the SalesDate or ProductKey filters.\nBatch Mode Processing: It uses a \"batch mode\" execution that processes rows in chunks rather than one by one, making SUM() operations extremely fast.\nOptimized for Bulk Loads: Since your data loads via a nightly batch process, CCIs handle these high-\nvolume inserts more efficiently than traditional B-tree indexes.\nBox 2: A nonclustered rowstore index Products For the Product table, you should create a Rowstore (B-tree) nonclustered index.\nWhy Rowstore for the Product Table?\nOptimized for Point Lookups: Rowstore indexes are specifically designed to find individual rows quickly based on a key (like ProductKey).\nSmall Table Efficiency: Columnstore indexes have high overhead (rowgroup metadata) that can actually increase the storage footprint of small tables.\nJoin Performance: Since reporting queries join the 15 TB Sales table to the Product table, a Rowstore index on the join key allows the SQL engine to perform efficient Index Seeks.\nMinimal Storage: For a small table, a standard B-tree index uses negligible space compared to the compression structures required for Columnstore.\nReference:\nhttps://microsoft-bitools.blogspot.com/2017/11/ctas-fastest-way-to-load-data-on-mpp.html https://link.springer.com/chapter/10.1007/978-1-4842-8048-5_13"
  },
  "zh": {
   "stem": "您有一个存储销售数据的 Azure SQL 数据库，其中包含名为 Sales 和 Products 的表。Sales 包含三个列：SalesDate、ProductKey 和 TotalSale。\nSales 大小为 10 TB，每晚通过批处理加载。大多数报表查询会扫描 Sales 的大部分数据，按 SalesDate 或 ProductKey 筛选，并使用 SUM() 聚合 TotalSale。\nProducts 相对较小，主要用于点查找以及与 Sales 的联接。\n您需要建议创建哪些索引来优化报表查询。该解决方案必须最大限度地减少存储需求。\n您应该为每个表建议哪种索引类型？要回答此问题，请将适当的索引类型拖动到正确的表上。每种索引类型可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：聚集列存储索引 —— Sales\n对于一张以大规模分析扫描和聚合为主的 10 TB 表，列存储技术效率最高。\n极高压缩比：列存储索引通常可比原始数据压缩约 10 倍，显著缩小 10 TB 的存储占用。\n段消除：引擎只读取需要的列（例如 TotalSale），并跳过与 SalesDate 或 ProductKey 筛选不匹配的数据“段”。\n批模式处理：以行块为单位执行，使 SUM() 运算极快。\n适合批量加载：数据每晚批量加载，聚集列存储比传统 B 树索引更能高效处理这类大批量插入。\n\n框 2：非聚集行存储索引 —— Products\n行存储 (B 树) 索引专为按键（如 ProductKey）快速定位单行而设计；而列存储索引有较高的行组元数据开销，对小表并不划算。"
  },
  "sources_en": [
   "A clustered columnstore index",
   "A clustered rowstore index",
   "A nonclustered columnstore index",
   "A nonclustered rowstore index"
  ],
  "sources_zh": [
   "聚集列存储索引",
   "聚集行存储索引",
   "非聚集列存储索引",
   "非聚集行存储索引"
  ],
  "targets": [
   {
    "label_en": "Sales:",
    "label_zh": "Sales：",
    "correct_en": "A clustered columnstore index",
    "correct_zh": "聚集列存储索引"
   },
   {
    "label_en": "Products:",
    "label_zh": "Products：",
    "correct_en": "A nonclustered rowstore index",
    "correct_zh": "非聚集行存储索引"
   }
  ]
 },
 {
  "id": 21,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named dbo.SupportTickets.\n\ndbo.SupportTickets contains a JSON column named Payload and a datetime column CreatedAt.\nYou need to generate a report for the last seven days that meets the following requirements:\nReturns exactly one row per customer per day For each customer and day, returns the earliest ticket Includes the customer ID stored in Payload How should you complete the Transact-SQL query? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "To complete your SQL query, you need to use the JSON_VALUE function to extract data from the JSON column and the ROW_NUMBER window function to rank the tickets by time.\nBox 1: JSON_VALUE JSON_VALUE: Use this to extract the customer.id from the payload.\nBox 2: ROW_NUMBER ROW_NUMBER(): Use this to assign a unique rank to each ticket per customer per day.\nBox 3: 1 1: Filter for the first ticket in each partition.\nReference:\nhttps://datalemur.com/blog/tiktok-sql-interview-questions"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 dbo.SupportTickets 的表。dbo.SupportTickets 包含一个名为 Payload 的 JSON 列和一个名为 CreatedAt 的 datetime 列。\n您需要生成最近七天的报表，满足以下要求：\n每位客户每天恰好返回一行\n对每位客户和每一天，返回最早的工单\n包含存储在 Payload 中的客户 ID\n您应如何完成该 Transact-SQL 查询？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "要完成该查询，需要用 JSON_VALUE 函数从 JSON 列提取数据，并用 ROW_NUMBER 窗口函数按时间为工单排序。\n\n框 1：JSON_VALUE —— 用它从 Payload 中提取 customer.id。\n框 2：ROW_NUMBER —— 用它为每位客户每一天的工单分配唯一序号。\n框 3：1 —— 筛选出每个分区中的第一条（最早的）工单。"
  },
  "boxes": [
   {
    "prompt_en": "Box 1 (... (t.Payload, '$.customer.id') AS CustomerId)",
    "prompt_zh": "框 1（... (t.Payload, '$.customer.id') AS CustomerId）",
    "options_en": [
     "DENSE_RANK",
     "JSON_VALUE",
     "OPENJSON",
     "ROW_NUMBER"
    ],
    "options_zh": [
     "DENSE_RANK",
     "JSON_VALUE",
     "OPENJSON",
     "ROW_NUMBER"
    ],
    "correct_en": "JSON_VALUE",
    "correct_zh": "JSON_VALUE"
   },
   {
    "prompt_en": "Box 2 (... () OVER (PARTITION BY ...))",
    "prompt_zh": "框 2（... () OVER (PARTITION BY ...)）",
    "options_en": [
     "DENSE_RANK",
     "JSON_VALUE",
     "OPENJSON",
     "ROW_NUMBER"
    ],
    "options_zh": [
     "DENSE_RANK",
     "JSON_VALUE",
     "OPENJSON",
     "ROW_NUMBER"
    ],
    "correct_en": "ROW_NUMBER",
    "correct_zh": "ROW_NUMBER"
   },
   {
    "prompt_en": "Box 3 (WHERE rn =)",
    "prompt_zh": "框 3（WHERE rn =）",
    "options_en": [
     "1",
     "7",
     "DATEDIFF(day, -7, SYSUTCDATETIME())"
    ],
    "options_zh": [
     "1",
     "7",
     "DATEDIFF(day, -7, SYSUTCDATETIME())"
    ],
    "correct_en": "1",
    "correct_zh": "1"
   }
  ]
 },
 {
  "id": 22,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You are developing an Azure SQL database solution from a locally cloned GitHub repository by using Microsoft Visual Studio Code and GitHub Copilot Chat.\nYou need to ensure that GitHub Copilot Chat can call the hosted GitHub MCP Server tools by using OAuth. The MCP server configuration must be scoped to the repository.\nWhat should you do in Visual Studio Code?",
   "options": {
    "A": "Create a personal access token (PAT) that has the repo scope and store the PAT in the .vscode \\mcp.json file as the Authorization header.",
    "B": "From the Command Palette, enter MCP: add server, select HTTP (HTTP or Server-Sent Events), enter https://api.githubcopilot.com/mcp/, and then save the configuration to the workspace settings.",
    "C": "From the Command Palette, enter MCP: add server, select HTTP (HTTP or Server-Sent Events), enter https://api.githubcopilot.com/mcp/, and then save the configuration to the user settings.",
    "D": "Create a personal access token (PAT) that has the repo scope and store the PAT in the .github \\mcp.json file as the Authorization header."
   },
   "explanation": "To connect GitHub Copilot Chat to an Azure SQL Database using a hosted GitHub MCP (Model Context Protocol) Server, follow these steps. This setup ensures that Copilot can interact directly with your repository and database schema using OAuth.\nStep 1: Configure the MCP Server in VS Code You must set the scope to the Workspace level to ensure the server is restricted to your specific repository.\nOpen your locally cloned GitHub repository in VS Code.\nOpen the Command Palette (Ctrl+Shift+P or Cmd+Shift+P).\nType and select: MCP: Add Server.\nSelect HTTP (HTTP or Server-Sent Events).\nEnter the URL: https://api.githubcopilot.com/mcp/ Crucial: When prompted for the configuration scope, select Workspace Settings.\nThis saves the config to .vscode/settings.json, binding the server to this repo.\nStep 2: Authenticate via OAuth\n\nOnce the server is added, Copilot needs permission to act on your behalf.\nOpen the GitHub Copilot Chat panel.\nYou will see a notification or a prompt within the chat asking to Authorize the MCP server.\nFollow the browser prompts to sign in and grant OAuth permissions.\nThis allows the hosted MCP server to \"see\" your repository's code and metadata.\nReference:\nhttps://skywork.ai/skypage/en/The-Ultimate-Guide-to-GitHub's-MCP-Server:-Bridging-AI-and-Your-\nCodebase/1970685991323758592"
  },
  "zh": {
   "stem": "您正在使用 Microsoft Visual Studio Code 和 GitHub Copilot Chat，基于本地克隆的 GitHub 存储库开发 Azure SQL 数据库解决方案。\n您需要确保 GitHub Copilot Chat 能够使用 OAuth 调用托管的 GitHub MCP 服务器工具。MCP 服务器配置必须限定在该存储库范围内。\n您应该在 Visual Studio Code 中做什么？",
   "options": {
    "A": "创建具有 repo 范围的个人访问令牌 (PAT)，并把 PAT 作为 Authorization 标头存储在 .vscode\\mcp.json 文件中。",
    "B": "从命令面板输入 MCP: add server，选择 HTTP (HTTP or Server-Sent Events)，输入 https://api.githubcopilot.com/mcp/，然后把配置保存到工作区设置。",
    "C": "从命令面板输入 MCP: add server，选择 HTTP (HTTP or Server-Sent Events)，输入 https://api.githubcopilot.com/mcp/，然后把配置保存到用户设置。",
    "D": "创建具有 repo 范围的个人访问令牌 (PAT)，并把 PAT 作为 Authorization 标头存储在 .github\\mcp.json 文件中。"
   },
   "explanation": "要通过托管的 GitHub MCP（模型上下文协议）服务器把 GitHub Copilot Chat 连接到 Azure SQL 数据库，并使用 OAuth：\n\n步骤 1：在 VS Code 中配置 MCP 服务器。必须把范围设为“工作区”级别，服务器才会限定在该特定存储库。\n在 VS Code 中打开本地克隆的 GitHub 存储库。\n打开命令面板 (Ctrl+Shift+P 或 Cmd+Shift+P)。\n输入并选择：MCP: Add Server。\n选择 HTTP (HTTP or Server-Sent Events)。\n输入 URL：https://api.githubcopilot.com/mcp/\n关键：提示选择配置范围时，选择 Workspace Settings（工作区设置），配置会保存到 .vscode/settings.json，把服务器绑定到此存储库。\n\n步骤 2：通过 OAuth 进行身份验证。添加服务器后，在 GitHub Copilot Chat 面板中会出现授权 MCP 服务器的提示，按浏览器提示登录并授予 OAuth 权限即可。\n\n选择“用户设置”会应用到所有存储库，因此不满足范围要求；使用 PAT 则不是 OAuth。"
  }
 },
 {
  "id": 23,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named Table1. Table1 contains 25,000,000 rows of data and a datetime2 column named DateKey. The data in Table1 spans the years 2020 through 2021.\nYou need to partition the data in Table1 by year. The solution must minimize how long it takes to rebuild or reindex the table.\nHow should you complete the Transact-SQL code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: RANGE RIGHT To partition an Azure SQL database table with 25 million rows by year (2020–2021) using datetime2 while minimizing reindexing time, you should use a RANGE RIGHT partition function with boundary values set to the start of each year.\nUsing RANGE RIGHT is generally preferred for date-based partitioning because it ensures that new data (e.g., for 2022) falls into a new, empty partition, minimizing the data movement required for maintenance operations.\nBox 2:    '2021-01-01T00:00:00.000',   '2022-01-01T00:00:00.000',\nCreate the Partition Function This function defines the boundaries at the very beginning of each year.\nCREATE PARTITION FUNCTION pf_YearlyPartition (datetime2) AS RANGE RIGHT FOR VALUES ( '2021-01-01T00:00:00.000',\n'2022-01-01T00:00:00.000',\n'2023-01-01T00:00:00.000' -- Pre-emptive boundary for 2023 );\nUsing RANGE RIGHT ensures that the boundary value (the start of the year) belongs to the partition to its right. This aligns with standard time-series data patterns where a partition holds data starting from \"YYYY-\n01-01 00:00:00.000\" onwards.\nReference:\nhttps://www.certlibrary.com/blog/accelerating-data-management-with-sql-server-table-partitioning-and-\npartition-switching"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 Table1 的表。Table1 包含 25,000,000 行数据和一个名为 DateKey 的 datetime2 列。Table1 中的数据跨越 2020 到 2021 年。\n您需要按年份对 Table1 中的数据进行分区。该解决方案必须最大限度地缩短重新生成或重新索引表所需的时间。\n您应如何完成该 Transact-SQL 代码？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：RANGE RIGHT\n要用 datetime2 按年份（2020–2021）对 2500 万行的表分区并尽量缩短重新索引时间，应使用边界值设为每年年初的 RANGE RIGHT 分区函数。\n基于日期的分区通常首选 RANGE RIGHT，因为它能确保新数据（例如 2022 年的数据）落入一个新的空分区，从而尽量减少维护操作所需的数据移动。\n\n框 2：'2020-01-01 00:00:00', '2021-01-01 00:00:00'\n该函数在每年年初定义边界。使用 RANGE RIGHT 意味着边界值（年初）属于其右侧的分区，符合“分区保存自 YYYY-01-01 00:00:00 起的数据”这一常见时序数据模式。"
  },
  "boxes": [
   {
    "prompt_en": "AS",
    "prompt_zh": "AS",
    "options_en": [
     "PARTITION",
     "RANGE LEFT",
     "RANGE RIGHT"
    ],
    "options_zh": [
     "PARTITION",
     "RANGE LEFT",
     "RANGE RIGHT"
    ],
    "correct_en": "RANGE RIGHT",
    "correct_zh": "RANGE RIGHT"
   },
   {
    "prompt_en": "FOR VALUES (",
    "prompt_zh": "FOR VALUES (",
    "options_en": [
     "'2019-01-01 00:00:00', '2020-01-01 00:00:00', '2021-12-31 23:59:59'",
     "'2019-12-31 00:00:00', '2020-12-31 23:59:59'",
     "'2020-01-01 00:00:00', '2020-02-01 00:00:00', '2020-03-01 00:00:00'",
     "'2020-01-01 00:00:00', '2021-01-01 00:00:00'"
    ],
    "options_zh": [
     "'2019-01-01 00:00:00', '2020-01-01 00:00:00', '2021-12-31 23:59:59'",
     "'2019-12-31 00:00:00', '2020-12-31 23:59:59'",
     "'2020-01-01 00:00:00', '2020-02-01 00:00:00', '2020-03-01 00:00:00'",
     "'2020-01-01 00:00:00', '2021-01-01 00:00:00'"
    ],
    "correct_en": "'2020-01-01 00:00:00', '2021-01-01 00:00:00'",
    "correct_zh": "'2020-01-01 00:00:00', '2021-01-01 00:00:00'"
   }
  ]
 },
 {
  "id": 24,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You are developing an Azure SQL solution by using Microsoft Visual Studio 2026. The solution uses a GitHub repository.\nYou plan to use GitHub Copilot Chat to access the GitHub repository tools by connecting to the GitHub MCP Server.\n\nYou need to configure Visual Studio to support the planned configuration. The solution must rely on OAuth to access the MCP server.\nWhat should you create?",
   "options": {
    "A": "the <SOLUTIONDIR>\\.vs\\settings.json file that contains the personal access token (PAT) that has the repo scope",
    "B": "the <SOLUTIONDIR>\\.mcp.json file that contains a URL of https://api.githubcopilot.com/ mcp/",
    "C": "the <SOLUTIONDIR>\\.vscode\\settings.json file that contains a URL of https:// api.githubcopilot.com/mcp/",
    "D": "the <SOLUTIONDIR>\\.github\\mcp.json file that contains the personal access token (PAT) that has the repo scope"
   },
   "explanation": "In this scenario, you need to create an mcp.json file. This file acts as the configuration bridge that tells Visual Studio 2026 and GitHub Copilot Chat how to connect to and communicate with the GitHub MCP Server.\nKey Configuration Details The mcp.json file is typically placed in your solution's root directory or a specific .mcp folder to enable project-specific tools Configuration Steps\n1. Create the MCP Configuration File You must define the connection to the GitHub MCP server so Copilot Chat can interact with your repository tools.\nFile Name: mcp.json Location: Usually placed in %AppData%\\Microsoft\\VisualStudio\\2026\\mcp.json (or the project root depending on your specific extension settings).\nContent:\n{ \"mcpServers\": { \"github\": { \"url\": \"https://api.githubcopilot.com/mcp/\",\n\"auth\": \"OAuth\" } } }\n2. Authenticate via OAuth\n3. Connect Azure SQL in VS 2026 Reference:\nhttps://www.workato.com/the-connector/mcp-server-tutorial/"
  },
  "zh": {
   "stem": "您正在使用 Microsoft Visual Studio 2026 开发 Azure SQL 解决方案。该解决方案使用一个 GitHub 存储库。\n您计划使用 GitHub Copilot Chat 通过连接到 GitHub MCP 服务器来访问 GitHub 存储库工具。\n您需要配置 Visual Studio 以支持该计划配置。该解决方案必须依靠 OAuth 访问 MCP 服务器。\n您应该创建什么？",
   "options": {
    "A": "包含具有 repo 范围的个人访问令牌 (PAT) 的 <SOLUTIONDIR>\\.vs\\settings.json 文件",
    "B": "包含 URL https://api.githubcopilot.com/mcp/ 的 <SOLUTIONDIR>\\.mcp.json 文件",
    "C": "包含 URL https://api.githubcopilot.com/mcp/ 的 <SOLUTIONDIR>\\.vscode\\settings.json 文件",
    "D": "包含具有 repo 范围的个人访问令牌 (PAT) 的 <SOLUTIONDIR>\\.github\\mcp.json 文件"
   },
   "explanation": "本场景需要创建 mcp.json 文件。该文件是配置桥梁，告诉 Visual Studio 2026 和 GitHub Copilot Chat 如何连接并与 GitHub MCP 服务器通信。\nmcp.json 通常放在解决方案根目录（或特定的 .mcp 文件夹），以启用项目特定的工具。\n\n内容示例：\n{\n  \"mcpServers\": {\n    \"github\": {\n      \"url\": \"https://api.githubcopilot.com/mcp/\",\n      \"auth\": \"OAuth\"\n    }\n  }\n}\n\n随后通过 OAuth 进行身份验证。使用 PAT 的选项不符合“依靠 OAuth”的要求；.vscode 目录属于 VS Code 而非 Visual Studio 2026。"
  }
 },
 {
  "id": 25,
  "section": "Design and develop database solutions",
  "sectionZh": "设计和开发数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named Sales.Orders. Sales.Orders contains the following columns.\n\nReporting queries frequently repeat logic to calculate the number of days since an order was placed.\nYou need to create a scalar user-defined function (UDF) that returns the number of days between an input value of @OrderDate and the current date and time.\nHow should you complete the Transact-SQL code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "To complete your scalar function, you need to define the function's return type and use the DATEDIFF function to calculate the time difference.\nBox 1: RETURNS INT Every scalar function must explicitly declare the data type it returns after the parameter list.\nBox 2: DATEDIFF The DATEDIFF function counts the number of \"date boundaries\" crossed.\nday: This argument specifies that you want the result in days (you can also use dd or d).\nGETDATE(): This retrieves the current system date and time on the Azure SQL instance.\nReference:\nhttps://www.sqlservercentral.com/steps/stairway-to-advanced-t-sql-level-10-using-scalar-functions"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 Sales.Orders 的表。Sales.Orders 包含以下列。\n报表查询经常重复计算下单至今的天数这一逻辑。\n您需要创建一个标量用户定义函数 (UDF)，返回输入值 @OrderDate 与当前日期和时间之间的天数。\n您应如何完成该 Transact-SQL 代码？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "要完成该标量函数，需要声明函数的返回类型，并使用 DATEDIFF 函数计算时间差。\n\n框 1：RETURNS INT\n每个标量函数都必须在参数列表之后显式声明其返回的数据类型。\n\n框 2：DATEDIFF(day, @OrderDate, GETDATE())\nDATEDIFF 计算跨越的“日期边界”数量。\nday：指定结果以天为单位（也可写作 dd 或 d）。\nGETDATE()：获取 Azure SQL 实例上的当前系统日期和时间。"
  },
  "sources_en": [
   "AS RETURN",
   "DATEADD(day, @OrderDate, GETDATE())",
   "DATEDIFF(day, @OrderDate, GETDATE())",
   "RETURNS INT",
   "RETURNS TABLE",
   "WITH SCHEMABINDING"
  ],
  "sources_zh": [
   "AS RETURN",
   "DATEADD(day, @OrderDate, GETDATE())",
   "DATEDIFF(day, @OrderDate, GETDATE())",
   "RETURNS INT",
   "RETURNS TABLE",
   "WITH SCHEMABINDING"
  ],
  "targets": [
   {
    "label_en": "Box 1 (after the parameter list, before BEGIN)",
    "label_zh": "框 1（参数列表之后、BEGIN 之前）",
    "correct_en": "RETURNS INT",
    "correct_zh": "RETURNS INT"
   },
   {
    "label_en": "Box 2 (SELECT @Days =)",
    "label_zh": "框 2（SELECT @Days =）",
    "correct_en": "DATEDIFF(day, @OrderDate, GETDATE())",
    "correct_zh": "DATEDIFF(day, @OrderDate, GETDATE())"
   }
  ],
  "code": {
   "lang": "table",
   "title_en": "dbo.Orders",
   "title_zh": "dbo.Orders",
   "text": "Column       Data type\n-----------  -------------\nOrderId      int\nCustomerId   int\nOrderDate    datetime2\nTotalAmount  decimal(18,2)",
   "text_zh": "列           数据类型\n-----------  -------------\nOrderId      int\nCustomerId   int\nOrderDate    datetime2\nTotalAmount  decimal(18,2)"
  }
 },
 {
  "id": 26,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": true,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You need to create a table in the database to store the telemetry data.\nYou have the following Transact-SQL code.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: No No - The code meets the database performance requirements for partitioning.\nScenario: Telemetry data must be stored in a partitioned table.\nThis telemetry table is not partitioned.\nTo create a partitioned table in Azure SQL Database using Transact-SQL (T-SQL), you follow a three-step process: defining a partition function, creating a partition scheme, and finally creating the table on that scheme.\nBox 2: Yes Yes - The code meets the database performance requirements for JSON property querying.\nScenario: latitude, longitude, and accuracy JSON properties must be filtered by using an index seek.\nThe CREATE JSON INDEX statement indeed defines a filter on the latitude, longitude, and accuracy JSON properties.\nBox 3: Yes Yes - Queries that filter on $location.heading will use the JI_VehicleTelemetry_location index.\nReference:",
   "scenario": "Existing Environment\nAzure Environment\nContoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.\n\nTable names            Column names\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (primary key)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (primary key)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (primary key)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (primary key)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (primary key)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (primary key)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (primary key)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (primary key)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nThe FeedbackJson column has a full-text index and stores JSON documents in the following format.\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nThe support staff at Contoso never has the UNMASK permission.\n\nProblem Statements\nContoso is deploying a new Azure SQL database that will become the authoritative data store for the following:\nAI workloads\nVector search\nModernized API access\nRetrieval Augmented Generation (RAG) pipelines\nSometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.\nThe engineers at Contoso report that the following dashboard query runs slowly.\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\nYou review the execution plan and discover that the plan shows a clustered index scan.\nVehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.\n\nRequirements\nPlanned Changes\nContoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.\n\nSecurity Requirements\nContoso identifies the following security requirements:\nRestrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.\nEnforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.\n\nDatabase Performance and Requirements\nContoso identifies the following telemetry requirements:\nTelemetry data must be stored in a partitioned table.\nTelemetry data must provide predictable performance for ingestion and retention operations.\nlatitude, longitude, and accuracy JSON properties must be filtered by using an index seek.\nContoso identifies the following maintenance data requirements:\nEnsure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.\nAvoid recursive updates.\n\nAI Search, Embeddings, and Vector Indexing\nContoso plans to implement semantic search over incident data to meet the following requirements:\nEmbeddings must be stored in dedicated Azure SQL Database tables.\nEmbeddings must be generated from rich natural language fields.\nChunking must preserve semantic coherence.\nHybrid search must combine the following:\n    - Vector similarity\n    - Keyword filtering or boosting\n\nDevelopment Requirements\nThe development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.\nContoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:\nExtract the customer feedback text from the JSON document.\nFilter rows where the JSON text contains a keyword.\nCalculate a fuzzy similarity score between the feedback text and a known issue description.\nOrder the results by similarity score, with the highest score first."
  },
  "zh": {
   "stem": "您需要在数据库中创建一个表来存储遥测数据。\n您有以下 Transact-SQL 代码。\n对于以下每条陈述，如果陈述为真，请选择“是”；否则选择“否”。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：否\n该代码不满足分区方面的数据库性能要求。\n场景要求：遥测数据必须存储在分区表中。而这张遥测表并未分区。\n在 Azure SQL Database 中用 T-SQL 创建分区表需要三步：定义分区函数、创建分区方案，最后在该方案上创建表。\n\n框 2：是\n该代码满足 JSON 属性查询方面的数据库性能要求。\n场景要求：必须使用索引查找对 latitude、longitude 和 accuracy 这几个 JSON 属性进行筛选。CREATE JSON INDEX 语句确实针对这三个 JSON 属性定义了索引。\n\n框 3：是\n按官方答案，对 $.location.heading 进行筛选的查询会使用 JI_VehicleTelemetry_Location 索引。",
   "scenario": "现有环境\nAzure 环境\nContoso 在 North Europe 有一个 Azure 订阅，其中包含公司基础结构。当前的基础结构包含一个 Microsoft SQL Server 2017 数据库。该数据库包含以下表。\n\n表名                   列名\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (主键)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (主键)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (主键)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (主键)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (主键)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (主键)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (主键)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (主键)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nFeedbackJson 列具有全文索引，并以下列格式存储 JSON 文档。\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nContoso 的支持人员从不具有 UNMASK 权限。\n\n问题陈述\nContoso 正在部署一个新的 Azure SQL 数据库，它将成为以下各项的权威数据存储：\nAI 工作负载\n向量搜索\n现代化的 API 访问\n检索增强生成 (RAG) 管道\n引入管道有时会因格式错误的 JSON 和重复的有效负载而失败。\nContoso 的工程师报告以下仪表板查询运行缓慢。\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\n您查看执行计划后发现该计划显示为聚集索引扫描。\nVehicleIncidentReports 中经常包含有关天气、交通状况和位置的详细信息。分析师报告称，很难根据这些详细信息查找相似的事件。\n\n要求\n计划的更改\nContoso 希望对 Fleet Intelligence Platform 进行现代化改造，以支持对事件报告进行 AI 驱动的语义搜索。\n\n安全要求\nContoso 确定了以下安全要求：\n限制支持人员查看个人身份信息 (PII) 数据，即完整的电子邮件地址和电话号码。\n强制执行行级筛选，使分析师只能看到分配给他们的车队的事件。分析师可以被分配到多个车队。\n\n数据库性能与要求\nContoso 确定了以下遥测要求：\n遥测数据必须存储在分区表中。\n遥测数据必须为引入和保留操作提供可预测的性能。\n必须使用索引查找 (index seek) 对 latitude、longitude 和 accuracy 这几个 JSON 属性进行筛选。\nContoso 确定了以下维护数据要求：\n确保对 MaintenanceEvents 表中某一行的任何更改都会将 LastModifiedUtc 列中的相应值更新为更改发生的时间。\n避免递归更新。\n\nAI 搜索、嵌入和向量索引\nContoso 计划对事件数据实施语义搜索，以满足以下要求：\n嵌入必须存储在专用的 Azure SQL Database 表中。\n嵌入必须从内容丰富的自然语言字段生成。\n分块必须保持语义连贯性。\n混合搜索必须结合以下各项：\n    - 向量相似度\n    - 关键字筛选或加权\n\n开发要求\nContoso 的开发团队将使用 Microsoft Visual Studio Code 和 GitHub Copilot，并将从数据库检索实时元数据。\nContoso 确定了以下针对查询 CustomerFeedback 表的 FeedbackJson 列中数据的要求：\n从 JSON 文档中提取客户反馈文本。\n筛选 JSON 文本中包含某个关键字的行。\n计算反馈文本与已知问题描述之间的模糊相似度分数。\n按相似度分数对结果排序，分数最高的排在最前面。"
  },
  "boxes": [
   {
    "prompt_en": "The code meets the database performance requirements for partitioning.",
    "prompt_zh": "该代码满足数据库性能要求中的分区要求。",
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
    "prompt_en": "The code meets the database performance requirements for JSON property querying.",
    "prompt_zh": "该代码满足数据库性能要求中的 JSON 属性查询要求。",
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
    "prompt_en": "Queries that filter on $.location.heading will use the JI_VehicleTelemetry_Location index.",
    "prompt_zh": "对 $.location.heading 进行筛选的查询将使用 JI_VehicleTelemetry_Location 索引。",
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
   "lang": "sql",
   "title_en": "The code you write",
   "title_zh": "您编写的代码",
   "text": "CREATE TABLE dbo.VehicleTelemetry\n(\n  TelemetryId BIGINT IDENTITY(1,1) NOT NULL,\n  VehicleId NVARCHAR(50) NOT NULL,\n  TelemetryTimeUtc DATETIME2(3) NOT NULL,\n  BatteryPercent TINYINT NULL,\n  SpeedKmh SMALLINT NULL,\n  LocationJson JSON NULL,\n  ErrorCodesJson JSON NULL,\n  RawPayload NVARCHAR(MAX) NULL,\n  SysStartTime DATETIME2(7) GENERATED ALWAYS AS ROW START NOT NULL,\n  SysEndTime DATETIME2(7) GENERATED ALWAYS AS ROW END NOT NULL,\n  PERIOD FOR SYSTEM_TIME (SysStartTime, SysEndTime),\n  CONSTRAINT PK_VehicleTelemetry PRIMARY KEY CLUSTERED (TelemetryId)\n)\nWITH\n(\n  SYSTEM_VERSIONING = ON\n  (\n    HISTORY_TABLE = dbo.VehicleTelemetryHistory\n  )\n);\nGO\nCREATE INDEX IX_VehicleTelemetry_Time ON dbo.VehicleTelemetry (TelemetryTimeUtc);\nCREATE JSON INDEX JI_VehicleTelemetry_Location ON dbo.VehicleTelemetry (LocationJson) FOR\n(\n  '$.location.latitude', '$.location.longitude',\n  '$.location.accuracy'\n);"
  }
 },
 {
  "id": 27,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": true,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You are creating a table that will store customer profiles.\nYou have the following Transact-SQL code.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Yes Yes - The schema meets the security requirements for PII data.\nScenario: Restrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.\nThe EmailAdress and the PhoneNumber columns are protected with MASKED WITH.\nIn an Azure SQL Database, the MASKED WITH clause (used for Dynamic Data Masking or DDM) does not technically \"protect\" columns from being viewed; rather, it obfuscates the data in the result set for unauthorized users.\nHere are the key distinctions regarding how this feature works:\nVisibility vs. Security: It is a presentation-layer feature that hides sensitive data (like emails or credit card numbers) from non-privileged users. It is not encryption and does not change the actual data stored on the disk.\nRole-Based Access: By default, users with administrative rights—such as server admins, db_owner, or those with the UNMASK permission—will still see the original, unmasked data.\nBox 2: No No - Administrators of the Azure SQL server can see all the rows in dbo.CustomerProfiles when they use an application The application is using the CustomerRegionPolicy which filters by region. Only rows in the specific region will be displayed.\nBox 3: Yes Yes - The masking rules will apply even when row-level security (RLS) filters out rows.\nIn Azure SQL Database, Dynamic Data Masking (DDM) and Row-Level Security (RLS) function as independent layers of protection that are applied sequentially during a query.\nRLS is applied first to restrict the rows a user can see. If RLS filters out a row, that row is never part of the result set, and therefore masking rules have no data to apply to for that specific row.\nDDM is applied to the resulting set of rows allowed by RLS. It obfuscates specific columns (MASKED WITH) for any rows that successfully passed the RLS filter.\nBecause they operate on different dimensions (rows vs. columns), they are often used together to provide defense-in-depth: RLS ensures users only see their own records, while DDM ensures that even within those records, sensitive fields like credit card numbers or emails remain hidden.\nReference:",
   "scenario": "Existing Environment\nAzure Environment\nContoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.\n\nTable names            Column names\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (primary key)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (primary key)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (primary key)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (primary key)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (primary key)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (primary key)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (primary key)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (primary key)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nThe FeedbackJson column has a full-text index and stores JSON documents in the following format.\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nThe support staff at Contoso never has the UNMASK permission.\n\nProblem Statements\nContoso is deploying a new Azure SQL database that will become the authoritative data store for the following:\nAI workloads\nVector search\nModernized API access\nRetrieval Augmented Generation (RAG) pipelines\nSometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.\nThe engineers at Contoso report that the following dashboard query runs slowly.\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\nYou review the execution plan and discover that the plan shows a clustered index scan.\nVehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.\n\nRequirements\nPlanned Changes\nContoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.\n\nSecurity Requirements\nContoso identifies the following security requirements:\nRestrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.\nEnforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.\n\nDatabase Performance and Requirements\nContoso identifies the following telemetry requirements:\nTelemetry data must be stored in a partitioned table.\nTelemetry data must provide predictable performance for ingestion and retention operations.\nlatitude, longitude, and accuracy JSON properties must be filtered by using an index seek.\nContoso identifies the following maintenance data requirements:\nEnsure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.\nAvoid recursive updates.\n\nAI Search, Embeddings, and Vector Indexing\nContoso plans to implement semantic search over incident data to meet the following requirements:\nEmbeddings must be stored in dedicated Azure SQL Database tables.\nEmbeddings must be generated from rich natural language fields.\nChunking must preserve semantic coherence.\nHybrid search must combine the following:\n    - Vector similarity\n    - Keyword filtering or boosting\n\nDevelopment Requirements\nThe development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.\nContoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:\nExtract the customer feedback text from the JSON document.\nFilter rows where the JSON text contains a keyword.\nCalculate a fuzzy similarity score between the feedback text and a known issue description.\nOrder the results by similarity score, with the highest score first."
  },
  "zh": {
   "stem": "您正在创建一个用于存储客户配置文件的表。\n您有以下 Transact-SQL 代码。\n对于以下每条陈述，如果陈述为真，请选择“是”；否则选择“否”。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：是\n该架构满足针对 PII 数据的安全要求。\n场景要求：限制支持人员查看个人身份信息 (PII) 数据，即完整的电子邮件地址和电话号码。EmailAddress 和 PhoneNumber 列都使用了 MASKED WITH 进行保护。\n说明：在 Azure SQL Database 中，MASKED WITH（动态数据掩码 DDM）严格来说并不“保护”列不被查看，而是在结果集中对未授权用户进行混淆。\n可见性 vs 安全性：这是表示层功能，它对非特权用户隐藏敏感数据，不是加密，也不改变磁盘上实际存储的数据。\n基于角色的访问：默认情况下，具有管理权限的用户（服务器管理员、db_owner 或拥有 UNMASK 权限者）仍能看到未掩码的原始数据。\n\n框 2：否\n应用程序使用了按区域筛选的 CustomerRegionPolicy 安全策略，行级安全性同样会作用于管理员通过应用程序发起的查询，因此他们看不到所有行。\n\n框 3：是\n掩码规则与行级安全性彼此独立：即使 RLS 已经筛除了某些行，剩余行中被掩码的列仍会按掩码规则显示。",
   "scenario": "现有环境\nAzure 环境\nContoso 在 North Europe 有一个 Azure 订阅，其中包含公司基础结构。当前的基础结构包含一个 Microsoft SQL Server 2017 数据库。该数据库包含以下表。\n\n表名                   列名\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (主键)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (主键)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (主键)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (主键)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (主键)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (主键)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (主键)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (主键)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nFeedbackJson 列具有全文索引，并以下列格式存储 JSON 文档。\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nContoso 的支持人员从不具有 UNMASK 权限。\n\n问题陈述\nContoso 正在部署一个新的 Azure SQL 数据库，它将成为以下各项的权威数据存储：\nAI 工作负载\n向量搜索\n现代化的 API 访问\n检索增强生成 (RAG) 管道\n引入管道有时会因格式错误的 JSON 和重复的有效负载而失败。\nContoso 的工程师报告以下仪表板查询运行缓慢。\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\n您查看执行计划后发现该计划显示为聚集索引扫描。\nVehicleIncidentReports 中经常包含有关天气、交通状况和位置的详细信息。分析师报告称，很难根据这些详细信息查找相似的事件。\n\n要求\n计划的更改\nContoso 希望对 Fleet Intelligence Platform 进行现代化改造，以支持对事件报告进行 AI 驱动的语义搜索。\n\n安全要求\nContoso 确定了以下安全要求：\n限制支持人员查看个人身份信息 (PII) 数据，即完整的电子邮件地址和电话号码。\n强制执行行级筛选，使分析师只能看到分配给他们的车队的事件。分析师可以被分配到多个车队。\n\n数据库性能与要求\nContoso 确定了以下遥测要求：\n遥测数据必须存储在分区表中。\n遥测数据必须为引入和保留操作提供可预测的性能。\n必须使用索引查找 (index seek) 对 latitude、longitude 和 accuracy 这几个 JSON 属性进行筛选。\nContoso 确定了以下维护数据要求：\n确保对 MaintenanceEvents 表中某一行的任何更改都会将 LastModifiedUtc 列中的相应值更新为更改发生的时间。\n避免递归更新。\n\nAI 搜索、嵌入和向量索引\nContoso 计划对事件数据实施语义搜索，以满足以下要求：\n嵌入必须存储在专用的 Azure SQL Database 表中。\n嵌入必须从内容丰富的自然语言字段生成。\n分块必须保持语义连贯性。\n混合搜索必须结合以下各项：\n    - 向量相似度\n    - 关键字筛选或加权\n\n开发要求\nContoso 的开发团队将使用 Microsoft Visual Studio Code 和 GitHub Copilot，并将从数据库检索实时元数据。\nContoso 确定了以下针对查询 CustomerFeedback 表的 FeedbackJson 列中数据的要求：\n从 JSON 文档中提取客户反馈文本。\n筛选 JSON 文本中包含某个关键字的行。\n计算反馈文本与已知问题描述之间的模糊相似度分数。\n按相似度分数对结果排序，分数最高的排在最前面。"
  },
  "boxes": [
   {
    "prompt_en": "The schema meets the security requirements for PII data.",
    "prompt_zh": "该架构满足针对 PII 数据的安全要求。",
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
    "prompt_en": "Administrators of the Azure SQL server can see all the rows in dbo.CustomerProfiles when they use an application.",
    "prompt_zh": "Azure SQL 服务器的管理员在使用应用程序时可以看到 dbo.CustomerProfiles 中的所有行。",
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
    "prompt_en": "The masking rules will apply even when row-level security (RLS) filters out rows.",
    "prompt_zh": "即使行级安全性 (RLS) 已筛除某些行，掩码规则仍会生效。",
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
   "lang": "sql",
   "title_en": "The schema you create",
   "title_zh": "您创建的架构",
   "text": "CREATE TABLE dbo.CustomerProfiles\n(\n    CustomerId    BIGINT IDENTITY(1,1) PRIMARY KEY,\n    FullName      NVARCHAR(200) MASKED WITH (FUNCTION = 'partial(1,\"xxxx\",1)'),\n    EmailAddress  NVARCHAR(200) MASKED WITH (FUNCTION = 'email()'),\n    PhoneNumber   NVARCHAR(50)  MASKED WITH (FUNCTION = 'default()'),\n    RegionCode    NVARCHAR(10) NOT NULL\n);\nGO\nCREATE FUNCTION dbo.fn_FilterByRegion(@RegionCode NVARCHAR(10))\nRETURNS TABLE\nAS\nRETURN\n(\n    SELECT 1\n    FROM dbo.UserRegionAccess ura\n    WHERE ura.UserPrincipalName = SUSER_SNAME()\n      AND ura.RegionCode = @RegionCode\n);\nGO\nCREATE SECURITY POLICY CustomerRegionPolicy\nADD FILTER PREDICATE dbo.fn_FilterByRegion(RegionCode)\nON dbo.CustomerProfiles\nWITH (STATE = ON);\nGO"
  }
 },
 {
  "id": 28,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": true,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You need to meet the database performance requirements for maintenance data.\nHow should you complete the Transact-SQL code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Scenario:\nTelemetry data must provide predictable performance for ingestion and retention operations.\nBox 1: m.VehicleID = i.VehicleID VehicleID columns are used in the tables. There are no MaintenanceID columns.\nBox 2: m.LastModifiedUtc <> i.lastModifiedUtc Example of Optimized Trigger CREATE TRIGGER [trg_Table_AfterUpdate] ON [dbo].[YourTable] AFTER UPDATE AS\n\nBEGIN\n-- Set-based update joining with 'inserted'\n    UPDATE t\n    SET t.ModifiedDate = GETDATE(),\n        t.ModifierUser = SUSER_SNAME()\n    FROM [dbo].[YourTable] t\n    INNER JOIN inserted i ON t.PrimaryKeyID = i.PrimaryKeyID\n    WHERE t.ModifiedDate IS NULL; -- Prevent unnecessary re-updates\nEND;\nReference:",
   "scenario": "Existing Environment\nAzure Environment\nContoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.\n\nTable names            Column names\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (primary key)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (primary key)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (primary key)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (primary key)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (primary key)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (primary key)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (primary key)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (primary key)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nThe FeedbackJson column has a full-text index and stores JSON documents in the following format.\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nThe support staff at Contoso never has the UNMASK permission.\n\nProblem Statements\nContoso is deploying a new Azure SQL database that will become the authoritative data store for the following:\nAI workloads\nVector search\nModernized API access\nRetrieval Augmented Generation (RAG) pipelines\nSometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.\nThe engineers at Contoso report that the following dashboard query runs slowly.\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\nYou review the execution plan and discover that the plan shows a clustered index scan.\nVehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.\n\nRequirements\nPlanned Changes\nContoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.\n\nSecurity Requirements\nContoso identifies the following security requirements:\nRestrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.\nEnforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.\n\nDatabase Performance and Requirements\nContoso identifies the following telemetry requirements:\nTelemetry data must be stored in a partitioned table.\nTelemetry data must provide predictable performance for ingestion and retention operations.\nlatitude, longitude, and accuracy JSON properties must be filtered by using an index seek.\nContoso identifies the following maintenance data requirements:\nEnsure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.\nAvoid recursive updates.\n\nAI Search, Embeddings, and Vector Indexing\nContoso plans to implement semantic search over incident data to meet the following requirements:\nEmbeddings must be stored in dedicated Azure SQL Database tables.\nEmbeddings must be generated from rich natural language fields.\nChunking must preserve semantic coherence.\nHybrid search must combine the following:\n    - Vector similarity\n    - Keyword filtering or boosting\n\nDevelopment Requirements\nThe development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.\nContoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:\nExtract the customer feedback text from the JSON document.\nFilter rows where the JSON text contains a keyword.\nCalculate a fuzzy similarity score between the feedback text and a known issue description.\nOrder the results by similarity score, with the highest score first."
  },
  "zh": {
   "stem": "您需要满足维护数据的数据库性能要求。\n您应如何完成该 Transact-SQL 代码？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "场景：遥测数据必须为引入和保留操作提供可预测的性能；对 MaintenanceEvents 表中行的任何更改都必须把 LastModifiedUtc 更新为更改时间，同时要避免递归更新。\n\n框 1：m.VehicleId = i.VehicleId\n这些表中使用的是 VehicleId 列，并没有 MaintenanceId 列。\n\n框 2：m.LastModifiedUtc <> i.LastModifiedUtc\n加上这个 WHERE 条件可以避免不必要的重复更新，从而防止触发器递归。\n\n优化后的触发器示例：\nCREATE TRIGGER [trg_Table_AfterUpdate]\nON [dbo].[YourTable]\nAFTER UPDATE\nAS\nBEGIN\n    -- 与 inserted 联接的基于集合的更新\n    UPDATE t\n    SET t.ModifiedDate = GETDATE()\n    FROM [dbo].[YourTable] t\n    INNER JOIN inserted i ON t.PrimaryKeyID = i.PrimaryKeyID\n    WHERE t.ModifiedDate <> i.ModifiedDate;  -- 防止不必要的重复更新\nEND;",
   "scenario": "现有环境\nAzure 环境\nContoso 在 North Europe 有一个 Azure 订阅，其中包含公司基础结构。当前的基础结构包含一个 Microsoft SQL Server 2017 数据库。该数据库包含以下表。\n\n表名                   列名\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (主键)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (主键)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (主键)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (主键)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (主键)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (主键)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (主键)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (主键)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nFeedbackJson 列具有全文索引，并以下列格式存储 JSON 文档。\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nContoso 的支持人员从不具有 UNMASK 权限。\n\n问题陈述\nContoso 正在部署一个新的 Azure SQL 数据库，它将成为以下各项的权威数据存储：\nAI 工作负载\n向量搜索\n现代化的 API 访问\n检索增强生成 (RAG) 管道\n引入管道有时会因格式错误的 JSON 和重复的有效负载而失败。\nContoso 的工程师报告以下仪表板查询运行缓慢。\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\n您查看执行计划后发现该计划显示为聚集索引扫描。\nVehicleIncidentReports 中经常包含有关天气、交通状况和位置的详细信息。分析师报告称，很难根据这些详细信息查找相似的事件。\n\n要求\n计划的更改\nContoso 希望对 Fleet Intelligence Platform 进行现代化改造，以支持对事件报告进行 AI 驱动的语义搜索。\n\n安全要求\nContoso 确定了以下安全要求：\n限制支持人员查看个人身份信息 (PII) 数据，即完整的电子邮件地址和电话号码。\n强制执行行级筛选，使分析师只能看到分配给他们的车队的事件。分析师可以被分配到多个车队。\n\n数据库性能与要求\nContoso 确定了以下遥测要求：\n遥测数据必须存储在分区表中。\n遥测数据必须为引入和保留操作提供可预测的性能。\n必须使用索引查找 (index seek) 对 latitude、longitude 和 accuracy 这几个 JSON 属性进行筛选。\nContoso 确定了以下维护数据要求：\n确保对 MaintenanceEvents 表中某一行的任何更改都会将 LastModifiedUtc 列中的相应值更新为更改发生的时间。\n避免递归更新。\n\nAI 搜索、嵌入和向量索引\nContoso 计划对事件数据实施语义搜索，以满足以下要求：\n嵌入必须存储在专用的 Azure SQL Database 表中。\n嵌入必须从内容丰富的自然语言字段生成。\n分块必须保持语义连贯性。\n混合搜索必须结合以下各项：\n    - 向量相似度\n    - 关键字筛选或加权\n\n开发要求\nContoso 的开发团队将使用 Microsoft Visual Studio Code 和 GitHub Copilot，并将从数据库检索实时元数据。\nContoso 确定了以下针对查询 CustomerFeedback 表的 FeedbackJson 列中数据的要求：\n从 JSON 文档中提取客户反馈文本。\n筛选 JSON 文本中包含某个关键字的行。\n计算反馈文本与已知问题描述之间的模糊相似度分数。\n按相似度分数对结果排序，分数最高的排在最前面。"
  },
  "sources_en": [
   "i.MaintenanceId IS NOT NULL",
   "m.LastModifiedUtc <> i.LastModifiedUtc",
   "m.MaintenanceId = i.MaintenanceId",
   "m.VehicleId = i.VehicleId"
  ],
  "sources_zh": [
   "i.MaintenanceId IS NOT NULL",
   "m.LastModifiedUtc <> i.LastModifiedUtc",
   "m.MaintenanceId = i.MaintenanceId",
   "m.VehicleId = i.VehicleId"
  ],
  "targets": [
   {
    "label_en": "ON",
    "label_zh": "ON",
    "correct_en": "m.VehicleId = i.VehicleId",
    "correct_zh": "m.VehicleId = i.VehicleId"
   },
   {
    "label_en": "WHERE",
    "label_zh": "WHERE",
    "correct_en": "m.LastModifiedUtc <> i.LastModifiedUtc",
    "correct_zh": "m.LastModifiedUtc <> i.LastModifiedUtc"
   }
  ]
 },
 {
  "id": 29,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You need to recommend a solution to resolve the slow dashboard query issue.\nWhat should you recommend?",
   "options": {
    "A": "Create a clustered index on LastUpdatedUtc.",
    "B": "On FleetId, create a nonclustered index that includes LastUpdatedUtc, EngineStatus, and BatteryHealth.",
    "C": "On LastUpdatedUtc, create a nonclustered index that includes FleetId.",
    "D": "On FleetId, create a filtered index where LastUpdatedUtc > DATEADD(DAY, -7, SYSUTCDATETIME())."
   },
   "explanation": "Scenario:\nThe engineers at Contoso report that the following dashboard query runs slowly.\nYou review the execution plan and discover that the plan shows a clustered index scan.\n--\nTo optimize this query, you should create a covering nonclustered index that handles both the filtering (WHERE) and the sorting (ORDER BY) requirements while including the remaining columns to avoid expensive lookups.\n\nRecommended Index Strategy Creating an index with FleetID as the first key column and LastUpdateUtc as the second key column will allow SQL Server to perform an Index Seek to find the specific fleet and then retrieve those rows in the pre-sorted order required by your ORDER BY clause.\nT-SQL Implementation:\n\nCREATE NONCLUSTERED INDEX IX_VehicleHealth_Fleet_Update ON dbo.VehicleHealthSummary (FleetID, LastUpdateUtc DESC) INCLUDE (EngineStatus, BatteryHealth);\nUse code with caution.\nWhy this works Eliminates Clustered Index Scan: The current plan scans the entire table because no index exists that starts with FleetID. This new index allows the engine to jump directly to the relevant rows.\n\nAvoids a Sort Operator: By including LastUpdateUtc DESC in the index key, the data is already physically ordered. SQL Server can read the index and return the results immediately without needing a costly in-\nmemory sort.\nFully Covers the Query: Using the INCLUDE clause for EngineStatus and BatteryHealth ensures all data required by the SELECT statement is present in the index. This prevents \"Key Lookups,\" where the engine would otherwise have to go back to the original table for those specific values.\nReference:",
   "scenario": "Existing Environment\nAzure Environment\nContoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.\n\nTable names            Column names\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (primary key)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (primary key)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (primary key)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (primary key)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (primary key)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (primary key)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (primary key)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (primary key)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nThe FeedbackJson column has a full-text index and stores JSON documents in the following format.\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nThe support staff at Contoso never has the UNMASK permission.\n\nProblem Statements\nContoso is deploying a new Azure SQL database that will become the authoritative data store for the following:\nAI workloads\nVector search\nModernized API access\nRetrieval Augmented Generation (RAG) pipelines\nSometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.\nThe engineers at Contoso report that the following dashboard query runs slowly.\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\nYou review the execution plan and discover that the plan shows a clustered index scan.\nVehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.\n\nRequirements\nPlanned Changes\nContoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.\n\nSecurity Requirements\nContoso identifies the following security requirements:\nRestrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.\nEnforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.\n\nDatabase Performance and Requirements\nContoso identifies the following telemetry requirements:\nTelemetry data must be stored in a partitioned table.\nTelemetry data must provide predictable performance for ingestion and retention operations.\nlatitude, longitude, and accuracy JSON properties must be filtered by using an index seek.\nContoso identifies the following maintenance data requirements:\nEnsure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.\nAvoid recursive updates.\n\nAI Search, Embeddings, and Vector Indexing\nContoso plans to implement semantic search over incident data to meet the following requirements:\nEmbeddings must be stored in dedicated Azure SQL Database tables.\nEmbeddings must be generated from rich natural language fields.\nChunking must preserve semantic coherence.\nHybrid search must combine the following:\n    - Vector similarity\n    - Keyword filtering or boosting\n\nDevelopment Requirements\nThe development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.\nContoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:\nExtract the customer feedback text from the JSON document.\nFilter rows where the JSON text contains a keyword.\nCalculate a fuzzy similarity score between the feedback text and a known issue description.\nOrder the results by similarity score, with the highest score first."
  },
  "zh": {
   "stem": "您需要建议一个解决方案来解决仪表板查询缓慢的问题。\n您应该建议什么？",
   "options": {
    "A": "在 LastUpdatedUtc 上创建聚集索引。",
    "B": "在 FleetId 上创建包含 LastUpdatedUtc、EngineStatus 和 BatteryHealth 的非聚集索引。",
    "C": "在 LastUpdatedUtc 上创建包含 FleetId 的非聚集索引。",
    "D": "在 FleetId 上创建筛选索引，条件为 LastUpdatedUtc > DATEADD(DAY, -7, SYSUTCDATETIME())。"
   },
   "explanation": "场景：Contoso 的工程师报告仪表板查询运行缓慢；查看执行计划后发现是聚集索引扫描。\n\n要优化该查询，应创建一个覆盖索引，同时处理筛选 (WHERE) 与排序 (ORDER BY) 要求，并包含其余列以避免代价高昂的查找。\n\nCREATE NONCLUSTERED INDEX IX_VehicleHealth_Fleet_Update\nON dbo.VehicleHealthSummary (FleetId, LastUpdatedUtc DESC)\nINCLUDE (EngineStatus, BatteryHealth);\n\n原理：\n消除聚集索引扫描：当前没有以 FleetId 开头的索引，因此扫描全表；新索引让引擎可以直接定位到相关行。\n避免排序运算符：把 LastUpdatedUtc DESC 放进索引键后，数据已按 ORDER BY 要求的顺序物理排列。\nINCLUDE 其余列可使索引覆盖查询，无需回表查找。",
   "scenario": "现有环境\nAzure 环境\nContoso 在 North Europe 有一个 Azure 订阅，其中包含公司基础结构。当前的基础结构包含一个 Microsoft SQL Server 2017 数据库。该数据库包含以下表。\n\n表名                   列名\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (主键)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (主键)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (主键)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (主键)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (主键)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (主键)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (主键)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (主键)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nFeedbackJson 列具有全文索引，并以下列格式存储 JSON 文档。\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nContoso 的支持人员从不具有 UNMASK 权限。\n\n问题陈述\nContoso 正在部署一个新的 Azure SQL 数据库，它将成为以下各项的权威数据存储：\nAI 工作负载\n向量搜索\n现代化的 API 访问\n检索增强生成 (RAG) 管道\n引入管道有时会因格式错误的 JSON 和重复的有效负载而失败。\nContoso 的工程师报告以下仪表板查询运行缓慢。\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\n您查看执行计划后发现该计划显示为聚集索引扫描。\nVehicleIncidentReports 中经常包含有关天气、交通状况和位置的详细信息。分析师报告称，很难根据这些详细信息查找相似的事件。\n\n要求\n计划的更改\nContoso 希望对 Fleet Intelligence Platform 进行现代化改造，以支持对事件报告进行 AI 驱动的语义搜索。\n\n安全要求\nContoso 确定了以下安全要求：\n限制支持人员查看个人身份信息 (PII) 数据，即完整的电子邮件地址和电话号码。\n强制执行行级筛选，使分析师只能看到分配给他们的车队的事件。分析师可以被分配到多个车队。\n\n数据库性能与要求\nContoso 确定了以下遥测要求：\n遥测数据必须存储在分区表中。\n遥测数据必须为引入和保留操作提供可预测的性能。\n必须使用索引查找 (index seek) 对 latitude、longitude 和 accuracy 这几个 JSON 属性进行筛选。\nContoso 确定了以下维护数据要求：\n确保对 MaintenanceEvents 表中某一行的任何更改都会将 LastModifiedUtc 列中的相应值更新为更改发生的时间。\n避免递归更新。\n\nAI 搜索、嵌入和向量索引\nContoso 计划对事件数据实施语义搜索，以满足以下要求：\n嵌入必须存储在专用的 Azure SQL Database 表中。\n嵌入必须从内容丰富的自然语言字段生成。\n分块必须保持语义连贯性。\n混合搜索必须结合以下各项：\n    - 向量相似度\n    - 关键字筛选或加权\n\n开发要求\nContoso 的开发团队将使用 Microsoft Visual Studio Code 和 GitHub Copilot，并将从数据库检索实时元数据。\nContoso 确定了以下针对查询 CustomerFeedback 表的 FeedbackJson 列中数据的要求：\n从 JSON 文档中提取客户反馈文本。\n筛选 JSON 文本中包含某个关键字的行。\n计算反馈文本与已知问题描述之间的模糊相似度分数。\n按相似度分数对结果排序，分数最高的排在最前面。"
  }
 },
 {
  "id": 30,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": true,
  "type": "multi",
  "correctLetters": [
   "D",
   "E"
  ],
  "en": {
   "stem": "You need to recommend a solution that will resolve the ingestion pipeline failure issues.\nWhich two actions should you recommend? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Enable snapshot isolation on the database.",
    "B": "Use a trigger to automatically rewrite malformed JSON.",
    "C": "Add foreign key constraints on the table.",
    "D": "Create a unique index on a hash of the payload.",
    "E": "Add a check constraint that validates the JSON structure."
   },
   "explanation": "Scenario: Sometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.\nAdding a CHECK constraint with ISJSON and creating a unique index on a computed hash of the payload are effective measures in Azure SQL Database to handle malformed JSON and duplicate payloads.\n[E] JSON Validation with a CHECK Constraint You can use a CHECK constraint in conjunction with the built-in ISJSON function to ensure that only valid JSON text is stored in a VARCHAR or NVARCHAR column. The constraint automatically rejects any insert or update operation that contains malformed JSON data, preventing pipeline failures due to invalid formatting at the database level.\n[D] Deduplication with a Unique Index on a Hashed Payload To prevent duplicate payloads, you can create a unique index on a computed column that stores a hash of the entire JSON payload or relevant business keys within the JSON.\nReference:",
   "scenario": "Existing Environment\nAzure Environment\nContoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.\n\nTable names            Column names\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (primary key)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (primary key)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (primary key)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (primary key)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (primary key)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (primary key)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (primary key)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (primary key)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nThe FeedbackJson column has a full-text index and stores JSON documents in the following format.\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nThe support staff at Contoso never has the UNMASK permission.\n\nProblem Statements\nContoso is deploying a new Azure SQL database that will become the authoritative data store for the following:\nAI workloads\nVector search\nModernized API access\nRetrieval Augmented Generation (RAG) pipelines\nSometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.\nThe engineers at Contoso report that the following dashboard query runs slowly.\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\nYou review the execution plan and discover that the plan shows a clustered index scan.\nVehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.\n\nRequirements\nPlanned Changes\nContoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.\n\nSecurity Requirements\nContoso identifies the following security requirements:\nRestrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.\nEnforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.\n\nDatabase Performance and Requirements\nContoso identifies the following telemetry requirements:\nTelemetry data must be stored in a partitioned table.\nTelemetry data must provide predictable performance for ingestion and retention operations.\nlatitude, longitude, and accuracy JSON properties must be filtered by using an index seek.\nContoso identifies the following maintenance data requirements:\nEnsure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.\nAvoid recursive updates.\n\nAI Search, Embeddings, and Vector Indexing\nContoso plans to implement semantic search over incident data to meet the following requirements:\nEmbeddings must be stored in dedicated Azure SQL Database tables.\nEmbeddings must be generated from rich natural language fields.\nChunking must preserve semantic coherence.\nHybrid search must combine the following:\n    - Vector similarity\n    - Keyword filtering or boosting\n\nDevelopment Requirements\nThe development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.\nContoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:\nExtract the customer feedback text from the JSON document.\nFilter rows where the JSON text contains a keyword.\nCalculate a fuzzy similarity score between the feedback text and a known issue description.\nOrder the results by similarity score, with the highest score first."
  },
  "zh": {
   "stem": "您需要建议一个解决方案来解决引入管道失败的问题。\n您应该建议哪两项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确的选择值一分。",
   "options": {
    "A": "在数据库上启用快照隔离。",
    "B": "使用触发器自动重写格式错误的 JSON。",
    "C": "在表上添加外键约束。",
    "D": "在有效负载的哈希值上创建唯一索引。",
    "E": "添加用于验证 JSON 结构的检查约束。"
   },
   "explanation": "场景：引入管道有时会因格式错误的 JSON 和重复的有效负载而失败。\n在 Azure SQL Database 中，添加使用 ISJSON 的 CHECK 约束，并在有效负载的计算哈希值上创建唯一索引，是应对这两类问题的有效措施。\n\n[E] 用 CHECK 约束验证 JSON\n可以把 CHECK 约束与内置的 ISJSON 函数结合，确保 VARCHAR 或 NVARCHAR 列中只存储有效的 JSON 文本。该约束会自动拒绝任何包含格式错误 JSON 的插入或更新操作，在数据库层面防止管道因格式无效而失败。\n\n[D] 用有效负载哈希上的唯一索引去重\n为防止重复的有效负载，可以在存储整个 JSON 有效负载（或 JSON 中相关业务键）哈希值的计算列上创建唯一索引。",
   "scenario": "现有环境\nAzure 环境\nContoso 在 North Europe 有一个 Azure 订阅，其中包含公司基础结构。当前的基础结构包含一个 Microsoft SQL Server 2017 数据库。该数据库包含以下表。\n\n表名                   列名\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (主键)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (主键)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (主键)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (主键)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (主键)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (主键)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (主键)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (主键)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nFeedbackJson 列具有全文索引，并以下列格式存储 JSON 文档。\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nContoso 的支持人员从不具有 UNMASK 权限。\n\n问题陈述\nContoso 正在部署一个新的 Azure SQL 数据库，它将成为以下各项的权威数据存储：\nAI 工作负载\n向量搜索\n现代化的 API 访问\n检索增强生成 (RAG) 管道\n引入管道有时会因格式错误的 JSON 和重复的有效负载而失败。\nContoso 的工程师报告以下仪表板查询运行缓慢。\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\n您查看执行计划后发现该计划显示为聚集索引扫描。\nVehicleIncidentReports 中经常包含有关天气、交通状况和位置的详细信息。分析师报告称，很难根据这些详细信息查找相似的事件。\n\n要求\n计划的更改\nContoso 希望对 Fleet Intelligence Platform 进行现代化改造，以支持对事件报告进行 AI 驱动的语义搜索。\n\n安全要求\nContoso 确定了以下安全要求：\n限制支持人员查看个人身份信息 (PII) 数据，即完整的电子邮件地址和电话号码。\n强制执行行级筛选，使分析师只能看到分配给他们的车队的事件。分析师可以被分配到多个车队。\n\n数据库性能与要求\nContoso 确定了以下遥测要求：\n遥测数据必须存储在分区表中。\n遥测数据必须为引入和保留操作提供可预测的性能。\n必须使用索引查找 (index seek) 对 latitude、longitude 和 accuracy 这几个 JSON 属性进行筛选。\nContoso 确定了以下维护数据要求：\n确保对 MaintenanceEvents 表中某一行的任何更改都会将 LastModifiedUtc 列中的相应值更新为更改发生的时间。\n避免递归更新。\n\nAI 搜索、嵌入和向量索引\nContoso 计划对事件数据实施语义搜索，以满足以下要求：\n嵌入必须存储在专用的 Azure SQL Database 表中。\n嵌入必须从内容丰富的自然语言字段生成。\n分块必须保持语义连贯性。\n混合搜索必须结合以下各项：\n    - 向量相似度\n    - 关键字筛选或加权\n\n开发要求\nContoso 的开发团队将使用 Microsoft Visual Studio Code 和 GitHub Copilot，并将从数据库检索实时元数据。\nContoso 确定了以下针对查询 CustomerFeedback 表的 FeedbackJson 列中数据的要求：\n从 JSON 文档中提取客户反馈文本。\n筛选 JSON 文本中包含某个关键字的行。\n计算反馈文本与已知问题描述之间的模糊相似度分数。\n按相似度分数对结果排序，分数最高的排在最前面。"
  }
 },
 {
  "id": 31,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": true,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You are evaluating the DAB configuration.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Yes Yes - Applications can read data in the Procedures table without authentication.\nIn the Data API Builder (DAB) configuration, the anonymous role is a built-in role that allows access to entities without requiring a JSON Web Token (JWT) or any other identity provider.\nKey Configuration Breakdown Role: anonymous This targets any user or application that is not logged in.\nAction: read This explicitly allows the SELECT operation via REST and GraphQL.' Endpoints: rest: true and graphql: true Both the RESTful endpoint and the GraphQL schema will be exposed to the public.\n\nBox 2: No No - Applications can read and update data in the Transactions table once authenticated.\nWhile applications can read data, they currently cannot update it.\nConfiguration Breakdown The actions array defines what an authenticated user is permitted to do. In the file, it is set to:\nactions : [ \"read\", \"create\" ] Read: Applications can fetch data from the Transactions table.\nCreate: Applications can insert new records into the Transactions table.\nUpdate: This action is missing from the configuration.\nDelete: This action is missing from the configuration.\nBox 3: Yes Yes - Applications can execute the sp_UpdateProcedurePatient stored procedure.\nApplications can execute the sp_UpdateProcedurePatient Transactions stored procedure, provided the request is made by an authenticated user. The Data API Builder (DAB) configuration correctly maps the stored procedure to a REST endpoint.\nConfiguration Breakdown REST Endpoint: Enabled at /procedurepatient Method: Restricted to POST (standard for stored procedures in DAB).\nPermissions: The authenticated role is explicitly granted the execute action.\nGraphQL: Disabled (false), so it cannot be accessed via GraphQL queries.\nReference:\nhttps://learn.microsoft.com/en-us/azure/data-api-builder/concept/security/authorization-overview https://learn.microsoft.com/en-us/azure/data-api-builder/command-line/dab-add",
   "scenario": "Existing Environment\nAzure Environment\nFabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\nYou store a column master key as a secret in Azure Key Vault.\nYou have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.\n\nProblem Statements\nUsers report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.\n\nRequirements\nPlanned Changes\nFabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.\n\nSecurity Requirements\nFabrikam identifies the following security requirements:\nThe TransactionProcessing application must use a passwordless connection to DB1.\nThe Employees table contains two columns named TaxID and Salary that must be encrypted at rest.\nAuditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.\n\nDatabase Performance Requirements\nRecords accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.\n\nAI Search, Embeddings, and Vector Indexing\nFabrikam identifies the following AI-related requirements:\nQueries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).\nUsers must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.\nThe UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.\n\nDevelopment Requirements\nFabrikam identifies the following development requirements:\nProvide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.\nExpose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API:\n    - Read data from the procedures table without authentication.\n    - Read and insert data into the Transactions table once authenticated.\n    - Execute the sp_UpdateProcedurePatient stored procedure.\nProvide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.\nInformation for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\nYou create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "zh": {
   "stem": "您正在评估 DAB 配置。\n对于以下每条陈述，如果陈述为真，请选择“是”；否则选择“否”。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：是\n应用程序无需身份验证即可读取 Procedures 表中的数据。\n在 Data API builder (DAB) 配置中，anonymous 是内置角色，允许在不提供 JWT 或任何其他身份提供者凭据的情况下访问实体。\n角色 anonymous：面向任何未登录的用户或应用程序。\n操作 read：明确允许通过 REST 和 GraphQL 执行 SELECT。\n终结点 rest: true 与 graphql: true：REST 终结点和 GraphQL 架构都会公开。\n\n框 2：否\n应用程序可以读取数据，但目前无法更新。配置中 actions 数组为 [\"read\", \"create\"]：可读取、可插入新记录，但缺少 update 和 delete 操作。\n\n框 3：是\nUpdateProcedurePatient 实体把 dbo.sp_UpdateProcedurePatient 公开为 POST，并授予 authenticated 角色 execute 操作，因此通过身份验证的应用程序可以执行该存储过程。",
   "scenario": "现有环境\nAzure 环境\nFabrikam 在 East US 2 Azure 区域有一个 Azure 订阅。该订阅包含一个名为 DB1 的 Azure SQL 数据库。DB1 包含以下表：\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\n您将一个列主密钥作为机密存储在 Azure Key Vault 中。\n您有一个名为 TransactionProcessing 的本地应用程序，它在连接字符串中使用硬编码的用户名和密码来访问 DB1。\n\n问题陈述\n用户报告称，在执行一个名为 sp_UpdateProcedureForPatient 的长时间运行的存储过程后，对基础数据的更新有时并不一致。\n\n要求\n计划的更改\nFabrikam 计划使用 GitHub 中的源代码管理来管理对 Azure SQL Database 对象的所有更改。提交到生产环境的每个拉取请求在合并前都必须经过验证。部署必须使用 Release 配置。\n\n安全要求\nFabrikam 确定了以下安全要求：\nTransactionProcessing 应用程序必须使用无密码连接来连接 DB1。\nEmployees 表包含两个名为 TaxID 和 Salary 的列，它们必须进行静态加密。\n审核员必须拥有防篡改的事务历史记录，并对员工数据的更改提供加密证明。\n\n数据库性能要求\n在 sp_UpdateProcedureForPatient 运行期间，它所访问的记录不得被其他事务更改。\n\nAI 搜索、嵌入和向量索引\nFabrikam 确定了以下 AI 相关要求：\n对 ProcedureDocuments 表的查询必须使用倒数排名融合 (Reciprocal Rank Fusion, RRF)。\n用户必须能够在 Microsoft Fabric 中的 Copilot 里使用提示来查询 DB1 中的数据。\nUsefulPrompts 表将存储供医生使用的提示，这些提示通过连接到 Azure OpenAI 终结点来帮助诊断患者的疾病。\n\n开发要求\nFabrikam 确定了以下开发要求：\n提供检索给定患者在两个日期之间所有事务的功能，并显示累计合计。\n公开一个 Data API builder (DAB) 配置文件，以便 Azure 服务能够通过 REST API 执行以下操作：\n    - 无需身份验证即可从 procedures 表读取数据。\n    - 通过身份验证后即可读取数据并将数据插入 Transactions 表。\n    - 执行 sp_UpdateProcedurePatient 存储过程。\n提供检索过去 30 天内接受过医疗程序的患者姓名列表的功能。\n每个医疗程序的信息将存储在一个表中。该表将与大型语言模型 (LLM) 一起用于用户查询，并具有以下结构。\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\n您创建了一个 DAB 配置文件，它满足 DB1 的开发要求，并包含以下实体。\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "boxes": [
   {
    "prompt_en": "Applications can read data in the Procedures table without authentication.",
    "prompt_zh": "应用程序无需身份验证即可读取 Procedures 表中的数据。",
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
    "prompt_en": "Applications can read and update data in the Transactions table once authenticated.",
    "prompt_zh": "应用程序通过身份验证后即可读取和更新 Transactions 表中的数据。",
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
    "prompt_en": "Applications can execute the sp_UpdateProcedurePatient stored procedure.",
    "prompt_zh": "应用程序可以执行 sp_UpdateProcedurePatient 存储过程。",
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
  "id": 32,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You plan to implement changes to sp_UpdateProcedureForPatient to meet the performance requirements.\nYou change the stored procedure to run all its code within a transaction.\nWhich transaction level should you use?",
   "options": {
    "A": "REPEATABLE READ",
    "B": "SERIALIZABLE",
    "C": "SNAPSHOT",
    "D": "READ COMMITTED SNAPSHOT"
   },
   "explanation": "Scenario: Database Performance Requirements Records accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.\nTo prevent other transactions from changing records while your stored procedure runs, you should use the Repeatable Read isolation level.\nRepeatable ReadMechanism: Places shared locks on all data read by the query.\n\nPrevention: Prevents other transactions from modifying or deleting the rows you have accessed.\nConsistency: Ensures that if you read the same data twice within the procedure, the values remain identical.\nIncorrect:\n[Not C] Serializable Strictness: This is the highest level of isolation.\nPhantom Protection: In addition to preventing changes to existing records, it prevents other transactions from inserting new records that would fall into the range of your query (phantom reads).\nUsage: Use this if your procedure relies on aggregate counts or specific ranges that must remain absolutely static.\nKey Considerations Concurrency: Both levels reduce system performance because they hold locks longer, potentially causing other users to wait.\nDeadlocks: Higher isolation levels increase the risk of deadlocks in busy databases.\nReference:\nhttps://learn.microsoft.com/en-us/sql/connect/jdbc/understanding-isolation-levels",
   "scenario": "Existing Environment\nAzure Environment\nFabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\nYou store a column master key as a secret in Azure Key Vault.\nYou have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.\n\nProblem Statements\nUsers report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.\n\nRequirements\nPlanned Changes\nFabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.\n\nSecurity Requirements\nFabrikam identifies the following security requirements:\nThe TransactionProcessing application must use a passwordless connection to DB1.\nThe Employees table contains two columns named TaxID and Salary that must be encrypted at rest.\nAuditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.\n\nDatabase Performance Requirements\nRecords accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.\n\nAI Search, Embeddings, and Vector Indexing\nFabrikam identifies the following AI-related requirements:\nQueries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).\nUsers must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.\nThe UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.\n\nDevelopment Requirements\nFabrikam identifies the following development requirements:\nProvide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.\nExpose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API:\n    - Read data from the procedures table without authentication.\n    - Read and insert data into the Transactions table once authenticated.\n    - Execute the sp_UpdateProcedurePatient stored procedure.\nProvide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.\nInformation for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\nYou create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "zh": {
   "stem": "您计划对 sp_UpdateProcedureForPatient 实施更改以满足性能要求。\n您把该存储过程改为在一个事务中运行其所有代码。\n您应该使用哪个事务隔离级别？",
   "options": {
    "A": "REPEATABLE READ",
    "B": "SERIALIZABLE",
    "C": "SNAPSHOT",
    "D": "READ COMMITTED SNAPSHOT"
   },
   "explanation": "场景（数据库性能要求）：在 sp_UpdateProcedureForPatient 运行期间，它所访问的记录不得被其他事务更改。\n\n要阻止其他事务在存储过程运行时更改记录，应使用 REPEATABLE READ 隔离级别。\n机制：对查询读取的所有数据放置共享锁。\n防护：阻止其他事务修改或删除您已访问的行。\n一致性：确保在过程中两次读取同一数据时，值保持一致。\n\n错误选项：\n[B] SERIALIZABLE 是最高隔离级别，除阻止更改现有记录外，还阻止其他事务插入落入查询范围的新记录（幻读）。只有当过程依赖必须绝对静止的聚合计数或范围时才需要它，这里超出了要求。\n注意：隔离级别越高，锁持有时间越长，并发性能越差，死锁风险也越高。",
   "scenario": "现有环境\nAzure 环境\nFabrikam 在 East US 2 Azure 区域有一个 Azure 订阅。该订阅包含一个名为 DB1 的 Azure SQL 数据库。DB1 包含以下表：\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\n您将一个列主密钥作为机密存储在 Azure Key Vault 中。\n您有一个名为 TransactionProcessing 的本地应用程序，它在连接字符串中使用硬编码的用户名和密码来访问 DB1。\n\n问题陈述\n用户报告称，在执行一个名为 sp_UpdateProcedureForPatient 的长时间运行的存储过程后，对基础数据的更新有时并不一致。\n\n要求\n计划的更改\nFabrikam 计划使用 GitHub 中的源代码管理来管理对 Azure SQL Database 对象的所有更改。提交到生产环境的每个拉取请求在合并前都必须经过验证。部署必须使用 Release 配置。\n\n安全要求\nFabrikam 确定了以下安全要求：\nTransactionProcessing 应用程序必须使用无密码连接来连接 DB1。\nEmployees 表包含两个名为 TaxID 和 Salary 的列，它们必须进行静态加密。\n审核员必须拥有防篡改的事务历史记录，并对员工数据的更改提供加密证明。\n\n数据库性能要求\n在 sp_UpdateProcedureForPatient 运行期间，它所访问的记录不得被其他事务更改。\n\nAI 搜索、嵌入和向量索引\nFabrikam 确定了以下 AI 相关要求：\n对 ProcedureDocuments 表的查询必须使用倒数排名融合 (Reciprocal Rank Fusion, RRF)。\n用户必须能够在 Microsoft Fabric 中的 Copilot 里使用提示来查询 DB1 中的数据。\nUsefulPrompts 表将存储供医生使用的提示，这些提示通过连接到 Azure OpenAI 终结点来帮助诊断患者的疾病。\n\n开发要求\nFabrikam 确定了以下开发要求：\n提供检索给定患者在两个日期之间所有事务的功能，并显示累计合计。\n公开一个 Data API builder (DAB) 配置文件，以便 Azure 服务能够通过 REST API 执行以下操作：\n    - 无需身份验证即可从 procedures 表读取数据。\n    - 通过身份验证后即可读取数据并将数据插入 Transactions 表。\n    - 执行 sp_UpdateProcedurePatient 存储过程。\n提供检索过去 30 天内接受过医疗程序的患者姓名列表的功能。\n每个医疗程序的信息将存储在一个表中。该表将与大型语言模型 (LLM) 一起用于用户查询，并具有以下结构。\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\n您创建了一个 DAB 配置文件，它满足 DB1 的开发要求，并包含以下实体。\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  }
 },
 {
  "id": 33,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": true,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You need to create a solution that meets the development requirements for retrieving the patient transaction data. The solution must ensure that database developers use the resulting data to join to other tables.\nHow should you complete the Transact-SQL code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Scenario:\nFabrikam identifies the following development requirements: provide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.\nMust use the PARTITION BY and ORDER BY clauses within the OVER function,\nBox 1: FUNCTION A FUNCTION to return the required rows.\nBox 2: PARTITION BY t.CustomerID Use PARTITION BY t.CustomerID to restrict the sum calculation to only that specific patient.\nIncorrect:\n* GROUP BY BY t.CustomerID PARTITION BY t.CustomerID is superior to GROUP BY because it calculates the running total while retaining individual transaction rows. GROUP BY would collapse the data into a single summary row,\nmaking it impossible to see the itemized transactions required for a \"running total\" view.\nBox 3: ORDER BY t.TransactionDate, t.TransactionID Using ORDER BY t.TransactionDate is essential for a \"running\" total.Calculates the sum based on time rather than random row order.\nReference:\nhttps://learn.microsoft.com/en-us/sql/t-sql/functions/count-transact-sql",
   "scenario": "Existing Environment\nAzure Environment\nFabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\nYou store a column master key as a secret in Azure Key Vault.\nYou have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.\n\nProblem Statements\nUsers report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.\n\nRequirements\nPlanned Changes\nFabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.\n\nSecurity Requirements\nFabrikam identifies the following security requirements:\nThe TransactionProcessing application must use a passwordless connection to DB1.\nThe Employees table contains two columns named TaxID and Salary that must be encrypted at rest.\nAuditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.\n\nDatabase Performance Requirements\nRecords accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.\n\nAI Search, Embeddings, and Vector Indexing\nFabrikam identifies the following AI-related requirements:\nQueries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).\nUsers must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.\nThe UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.\n\nDevelopment Requirements\nFabrikam identifies the following development requirements:\nProvide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.\nExpose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API:\n    - Read data from the procedures table without authentication.\n    - Read and insert data into the Transactions table once authenticated.\n    - Execute the sp_UpdateProcedurePatient stored procedure.\nProvide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.\nInformation for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\nYou create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "zh": {
   "stem": "您需要创建一个满足检索患者事务数据开发要求的解决方案。该解决方案必须确保数据库开发人员能够把结果数据与其他表联接。\n您应如何完成该 Transact-SQL 代码？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "场景：Fabrikam 要求提供检索给定患者在两个日期之间所有事务并显示累计合计的功能。必须在 OVER 子句中使用 PARTITION BY 和 ORDER BY。\n\n框 1：FUNCTION\n用（表值）函数返回所需的行，这样开发人员才能把结果与其他表联接。\n\n框 2：PARTITION BY t.CustomerId\n用 PARTITION BY t.CustomerId 把求和限制在特定患者范围内。\n错误选项：GROUP BY t.CustomerId —— PARTITION BY 优于 GROUP BY，因为它在计算累计合计的同时保留了各条事务明细行；GROUP BY 会把数据折叠成一行汇总，无法呈现“累计合计”所需的逐条明细。\n\n框 3：ORDER BY t.TransactionDate, t.TransactionId\n“累计”合计必须有排序依据，按时间而非随机行序累加。",
   "scenario": "现有环境\nAzure 环境\nFabrikam 在 East US 2 Azure 区域有一个 Azure 订阅。该订阅包含一个名为 DB1 的 Azure SQL 数据库。DB1 包含以下表：\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\n您将一个列主密钥作为机密存储在 Azure Key Vault 中。\n您有一个名为 TransactionProcessing 的本地应用程序，它在连接字符串中使用硬编码的用户名和密码来访问 DB1。\n\n问题陈述\n用户报告称，在执行一个名为 sp_UpdateProcedureForPatient 的长时间运行的存储过程后，对基础数据的更新有时并不一致。\n\n要求\n计划的更改\nFabrikam 计划使用 GitHub 中的源代码管理来管理对 Azure SQL Database 对象的所有更改。提交到生产环境的每个拉取请求在合并前都必须经过验证。部署必须使用 Release 配置。\n\n安全要求\nFabrikam 确定了以下安全要求：\nTransactionProcessing 应用程序必须使用无密码连接来连接 DB1。\nEmployees 表包含两个名为 TaxID 和 Salary 的列，它们必须进行静态加密。\n审核员必须拥有防篡改的事务历史记录，并对员工数据的更改提供加密证明。\n\n数据库性能要求\n在 sp_UpdateProcedureForPatient 运行期间，它所访问的记录不得被其他事务更改。\n\nAI 搜索、嵌入和向量索引\nFabrikam 确定了以下 AI 相关要求：\n对 ProcedureDocuments 表的查询必须使用倒数排名融合 (Reciprocal Rank Fusion, RRF)。\n用户必须能够在 Microsoft Fabric 中的 Copilot 里使用提示来查询 DB1 中的数据。\nUsefulPrompts 表将存储供医生使用的提示，这些提示通过连接到 Azure OpenAI 终结点来帮助诊断患者的疾病。\n\n开发要求\nFabrikam 确定了以下开发要求：\n提供检索给定患者在两个日期之间所有事务的功能，并显示累计合计。\n公开一个 Data API builder (DAB) 配置文件，以便 Azure 服务能够通过 REST API 执行以下操作：\n    - 无需身份验证即可从 procedures 表读取数据。\n    - 通过身份验证后即可读取数据并将数据插入 Transactions 表。\n    - 执行 sp_UpdateProcedurePatient 存储过程。\n提供检索过去 30 天内接受过医疗程序的患者姓名列表的功能。\n每个医疗程序的信息将存储在一个表中。该表将与大型语言模型 (LLM) 一起用于用户查询，并具有以下结构。\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\n您创建了一个 DAB 配置文件，它满足 DB1 的开发要求，并包含以下实体。\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "boxes": [
   {
    "prompt_en": "CREATE ... dbo.CustomerTransactionsBetweenDates",
    "prompt_zh": "CREATE ... dbo.CustomerTransactionsBetweenDates",
    "options_en": [
     "FUNCTION",
     "PROCEDURE",
     "VIEW"
    ],
    "options_zh": [
     "FUNCTION",
     "PROCEDURE",
     "VIEW"
    ],
    "correct_en": "FUNCTION",
    "correct_zh": "FUNCTION"
   },
   {
    "prompt_en": "SUM(t.Amount) OVER ( ... )  — Box 2",
    "prompt_zh": "SUM(t.Amount) OVER ( ... ) — 框 2",
    "options_en": [
     "GROUP BY t.CustomerId",
     "GROUP BY t.TransactionDate",
     "PARTITION BY t.CustomerId",
     "PARTITION BY t.TransactionDate"
    ],
    "options_zh": [
     "GROUP BY t.CustomerId",
     "GROUP BY t.TransactionDate",
     "PARTITION BY t.CustomerId",
     "PARTITION BY t.TransactionDate"
    ],
    "correct_en": "PARTITION BY t.CustomerId",
    "correct_zh": "PARTITION BY t.CustomerId"
   },
   {
    "prompt_en": "SUM(t.Amount) OVER ( ... )  — Box 3",
    "prompt_zh": "SUM(t.Amount) OVER ( ... ) — 框 3",
    "options_en": [
     "HAVING DATEDIFF(DAY, t.TransactionDate, GETDATE()) = 1",
     "HAVING SUM (t.Amount) > 0",
     "ORDER BY t.TransactionDate, t.TransactionId",
     "ORDER BY t.TransactionId, t.CustomerId"
    ],
    "options_zh": [
     "HAVING DATEDIFF(DAY, t.TransactionDate, GETDATE()) = 1",
     "HAVING SUM (t.Amount) > 0",
     "ORDER BY t.TransactionDate, t.TransactionId",
     "ORDER BY t.TransactionId, t.CustomerId"
    ],
    "correct_en": "ORDER BY t.TransactionDate, t.TransactionId",
    "correct_zh": "ORDER BY t.TransactionDate, t.TransactionId"
   }
  ]
 },
 {
  "id": 34,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You need to recommend a solution for the TransactionProcessing application that meets the security requirements.\nWhat should you include in the recommendation?",
   "options": {
    "A": "a service principal",
    "B": "a system-assigned managed identity",
    "C": "a shared access key",
    "D": "a user-assigned managed identity"
   },
   "explanation": "Scenario:\nYou have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.\nSecurity Requirements: Fabrikam identifies the following security requirements: The TransactionProcessing application must use a passwordless connection to DB1.\nThe most appropriate security solution for an on-premises application connecting to an Azure SQL Database without passwords is Microsoft Entra ID authentication. Specifically, you should implement one of the following Entra-based mechanisms depending on your application's environment and architecture:\n*-> 1. Microsoft Entra Service Principal with Certificate This is the standard \"passwordless\" approach for non-Azure (on-premises) applications.\nHow it works: You register the application in Microsoft Entra ID. Instead of a client secret (password), you use a certificate for authentication.\n\nBenefit: No secrets are stored in your code or configuration files. The application uses the certificate to obtain an access token from Entra ID to connect to the database.\n2. Microsoft Entra Integrated Authentication\n3. Managed Identity (via Azure Arc) For a more modern approach, you can register your on-premises server with Azure Arc.\nHow it works: Azure Arc extends Azure's Managed Identity capabilities to on-premises hardware.\nBenefit: This is the \"gold standard\" for passwordless security, as Azure handles the identity, rotation, and lifecycle of the credentials automatically.\nReference:\nhttps://learn.microsoft.com/en-us/azure/developer/java/spring-framework/migrate-sql-database-to-\npasswordless-connection",
   "scenario": "Existing Environment\nAzure Environment\nFabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\nYou store a column master key as a secret in Azure Key Vault.\nYou have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.\n\nProblem Statements\nUsers report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.\n\nRequirements\nPlanned Changes\nFabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.\n\nSecurity Requirements\nFabrikam identifies the following security requirements:\nThe TransactionProcessing application must use a passwordless connection to DB1.\nThe Employees table contains two columns named TaxID and Salary that must be encrypted at rest.\nAuditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.\n\nDatabase Performance Requirements\nRecords accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.\n\nAI Search, Embeddings, and Vector Indexing\nFabrikam identifies the following AI-related requirements:\nQueries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).\nUsers must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.\nThe UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.\n\nDevelopment Requirements\nFabrikam identifies the following development requirements:\nProvide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.\nExpose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API:\n    - Read data from the procedures table without authentication.\n    - Read and insert data into the Transactions table once authenticated.\n    - Execute the sp_UpdateProcedurePatient stored procedure.\nProvide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.\nInformation for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\nYou create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "zh": {
   "stem": "您需要为 TransactionProcessing 应用程序推荐一个满足安全要求的解决方案。\n您应该在建议中包含什么？",
   "options": {
    "A": "服务主体",
    "B": "系统分配的托管标识",
    "C": "共享访问密钥",
    "D": "用户分配的托管标识"
   },
   "explanation": "场景：您有一个名为 TransactionProcessing 的本地应用程序，它在连接字符串中使用硬编码的用户名和密码访问 DB1。安全要求：该应用程序必须使用无密码连接来连接 DB1。\n\n对于连接 Azure SQL Database 的本地（非 Azure）应用程序，最合适的无密码方案是 Microsoft Entra ID 身份验证，具体为：\n\n1. 使用证书的 Microsoft Entra 服务主体 —— 这是非 Azure（本地）应用程序的标准“无密码”做法。\n工作方式：在 Microsoft Entra ID 中注册应用程序；不使用客户端密码，而是用证书进行身份验证。\n好处：代码或配置文件中不存储任何机密；应用程序用证书从 Entra ID 获取访问令牌来连接数据库。\n\n托管标识（系统分配或用户分配）只能用于 Azure 资源（除非通过 Azure Arc），因此不适用于本地应用程序；共享访问密钥同样属于需要保管的机密。",
   "scenario": "现有环境\nAzure 环境\nFabrikam 在 East US 2 Azure 区域有一个 Azure 订阅。该订阅包含一个名为 DB1 的 Azure SQL 数据库。DB1 包含以下表：\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\n您将一个列主密钥作为机密存储在 Azure Key Vault 中。\n您有一个名为 TransactionProcessing 的本地应用程序，它在连接字符串中使用硬编码的用户名和密码来访问 DB1。\n\n问题陈述\n用户报告称，在执行一个名为 sp_UpdateProcedureForPatient 的长时间运行的存储过程后，对基础数据的更新有时并不一致。\n\n要求\n计划的更改\nFabrikam 计划使用 GitHub 中的源代码管理来管理对 Azure SQL Database 对象的所有更改。提交到生产环境的每个拉取请求在合并前都必须经过验证。部署必须使用 Release 配置。\n\n安全要求\nFabrikam 确定了以下安全要求：\nTransactionProcessing 应用程序必须使用无密码连接来连接 DB1。\nEmployees 表包含两个名为 TaxID 和 Salary 的列，它们必须进行静态加密。\n审核员必须拥有防篡改的事务历史记录，并对员工数据的更改提供加密证明。\n\n数据库性能要求\n在 sp_UpdateProcedureForPatient 运行期间，它所访问的记录不得被其他事务更改。\n\nAI 搜索、嵌入和向量索引\nFabrikam 确定了以下 AI 相关要求：\n对 ProcedureDocuments 表的查询必须使用倒数排名融合 (Reciprocal Rank Fusion, RRF)。\n用户必须能够在 Microsoft Fabric 中的 Copilot 里使用提示来查询 DB1 中的数据。\nUsefulPrompts 表将存储供医生使用的提示，这些提示通过连接到 Azure OpenAI 终结点来帮助诊断患者的疾病。\n\n开发要求\nFabrikam 确定了以下开发要求：\n提供检索给定患者在两个日期之间所有事务的功能，并显示累计合计。\n公开一个 Data API builder (DAB) 配置文件，以便 Azure 服务能够通过 REST API 执行以下操作：\n    - 无需身份验证即可从 procedures 表读取数据。\n    - 通过身份验证后即可读取数据并将数据插入 Transactions 表。\n    - 执行 sp_UpdateProcedurePatient 存储过程。\n提供检索过去 30 天内接受过医疗程序的患者姓名列表的功能。\n每个医疗程序的信息将存储在一个表中。该表将与大型语言模型 (LLM) 一起用于用户查询，并具有以下结构。\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\n您创建了一个 DAB 配置文件，它满足 DB1 的开发要求，并包含以下实体。\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  }
 },
 {
  "id": 35,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": true,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You create an SDK-style SQL database project in Microsoft Visual Studio Code named Database.sqlproj and add the project to a GitHub repository.\nYou need to configure a GitHub Actions workflow to support the planned changes for DB1.\nHow should you complete the workflow? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Scenario:\nThe subscription contains an Azure SQL database named DB1.\nYou create an SDK-style SQL database project in Microsoft Visual Studio Code named Database.sqlproj and add the project to a GitHub repository.\nBox 1: push To complete the  GitHub Actions workflow for an Azure SQL database project, use the push event to trigger the build and the build command to compile the .sqlproj.\nBox 2: build Database.sqlproj -c Release Reference:\nhttps://stackoverflow.com/questions/53473804/build-sqlproj-on-azure-devops",
   "scenario": "Existing Environment\nAzure Environment\nFabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\nYou store a column master key as a secret in Azure Key Vault.\nYou have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.\n\nProblem Statements\nUsers report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.\n\nRequirements\nPlanned Changes\nFabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.\n\nSecurity Requirements\nFabrikam identifies the following security requirements:\nThe TransactionProcessing application must use a passwordless connection to DB1.\nThe Employees table contains two columns named TaxID and Salary that must be encrypted at rest.\nAuditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.\n\nDatabase Performance Requirements\nRecords accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.\n\nAI Search, Embeddings, and Vector Indexing\nFabrikam identifies the following AI-related requirements:\nQueries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).\nUsers must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.\nThe UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.\n\nDevelopment Requirements\nFabrikam identifies the following development requirements:\nProvide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.\nExpose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API:\n    - Read data from the procedures table without authentication.\n    - Read and insert data into the Transactions table once authenticated.\n    - Execute the sp_UpdateProcedurePatient stored procedure.\nProvide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.\nInformation for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\nYou create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "zh": {
   "stem": "您在 Microsoft Visual Studio Code 中创建了一个名为 Database.sqlproj 的 SDK 样式 SQL 数据库项目，并把该项目添加到 GitHub 存储库。\n您需要配置 GitHub Actions 工作流以支持 DB1 的计划更改。\n您应如何完成该工作流？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "场景：该订阅包含一个名为 DB1 的 Azure SQL 数据库；您在 Visual Studio Code 中创建了名为 Database.sqlproj 的 SDK 样式 SQL 数据库项目，并把它添加到 GitHub 存储库。\n\n框 1：push\n对 Azure SQL 数据库项目的 GitHub Actions 工作流，使用 push 事件触发生成。\n\n框 2：build Database.sqlproj -c Release\n用 dotnet build 编译 .sqlproj，并按要求使用 Release 配置。",
   "scenario": "现有环境\nAzure 环境\nFabrikam 在 East US 2 Azure 区域有一个 Azure 订阅。该订阅包含一个名为 DB1 的 Azure SQL 数据库。DB1 包含以下表：\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\n您将一个列主密钥作为机密存储在 Azure Key Vault 中。\n您有一个名为 TransactionProcessing 的本地应用程序，它在连接字符串中使用硬编码的用户名和密码来访问 DB1。\n\n问题陈述\n用户报告称，在执行一个名为 sp_UpdateProcedureForPatient 的长时间运行的存储过程后，对基础数据的更新有时并不一致。\n\n要求\n计划的更改\nFabrikam 计划使用 GitHub 中的源代码管理来管理对 Azure SQL Database 对象的所有更改。提交到生产环境的每个拉取请求在合并前都必须经过验证。部署必须使用 Release 配置。\n\n安全要求\nFabrikam 确定了以下安全要求：\nTransactionProcessing 应用程序必须使用无密码连接来连接 DB1。\nEmployees 表包含两个名为 TaxID 和 Salary 的列，它们必须进行静态加密。\n审核员必须拥有防篡改的事务历史记录，并对员工数据的更改提供加密证明。\n\n数据库性能要求\n在 sp_UpdateProcedureForPatient 运行期间，它所访问的记录不得被其他事务更改。\n\nAI 搜索、嵌入和向量索引\nFabrikam 确定了以下 AI 相关要求：\n对 ProcedureDocuments 表的查询必须使用倒数排名融合 (Reciprocal Rank Fusion, RRF)。\n用户必须能够在 Microsoft Fabric 中的 Copilot 里使用提示来查询 DB1 中的数据。\nUsefulPrompts 表将存储供医生使用的提示，这些提示通过连接到 Azure OpenAI 终结点来帮助诊断患者的疾病。\n\n开发要求\nFabrikam 确定了以下开发要求：\n提供检索给定患者在两个日期之间所有事务的功能，并显示累计合计。\n公开一个 Data API builder (DAB) 配置文件，以便 Azure 服务能够通过 REST API 执行以下操作：\n    - 无需身份验证即可从 procedures 表读取数据。\n    - 通过身份验证后即可读取数据并将数据插入 Transactions 表。\n    - 执行 sp_UpdateProcedurePatient 存储过程。\n提供检索过去 30 天内接受过医疗程序的患者姓名列表的功能。\n每个医疗程序的信息将存储在一个表中。该表将与大型语言模型 (LLM) 一起用于用户查询，并具有以下结构。\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\n您创建了一个 DAB 配置文件，它满足 DB1 的开发要求，并包含以下实体。\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "boxes": [
   {
    "prompt_en": "on: ...",
    "prompt_zh": "on: ...",
    "options_en": [
     "merge",
     "pull_request",
     "push"
    ],
    "options_zh": [
     "merge",
     "pull_request",
     "push"
    ],
    "correct_en": "push",
    "correct_zh": "push"
   },
   {
    "prompt_en": "run: dotnet ...",
    "prompt_zh": "run: dotnet ...",
    "options_en": [
     "build Database.sqlproj -c Release",
     "pack Database.sqlproj",
     "publish Database.sqlproj -c Production",
     "publish Database.sqlproj -c Release"
    ],
    "options_zh": [
     "build Database.sqlproj -c Release",
     "pack Database.sqlproj",
     "publish Database.sqlproj -c Production",
     "publish Database.sqlproj -c Release"
    ],
    "correct_en": "build Database.sqlproj -c Release",
    "correct_zh": "build Database.sqlproj -c Release"
   }
  ]
 },
 {
  "id": 36,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have a Microsoft SQL Server 2025 instance that has a managed identity enabled.\nYou have a database that contains a table named dbo.ManualChunks. dbo.ManualChunks contains product manuals.\nA retrieval query already returns the top five matching chunks as nvarchar(max) text.\nYou need to call an Azure OpenAI REST endpoint for chat completions. The solution must provide the highest level of security.\nYou write the following Transact-SQL code.\nWhat should you insert at line 02?",
   "options": {
    "A": "WITH IDENTITY = 'HTTPEndpointQueryString',\nSECRET = N'{\"api-key\":\"<value>\"}';",
    "B": "WITH IDENTITY = 'Managed Identity',\nSECRET = '{\"resourceid\":\"<value>\"}';",
    "C": "WITH IDENTITY = 'Managed Identity',\nSECRET = N'{\"api-key\":\"<value>\"}';",
    "D": "WITH IDENTITY = 'HTTPEndpointHeaders',\nSECRET = N'{\"api-key\":\"<value>\"}';",
    "E": "WITH IDENTITY = 'AzureOpenAI',\nSECRET = N'{\"resourceid\":\"<value>\"}';"
   },
   "explanation": "To use a Managed Identity with sys.sp_invoke_external_rest_endpoint in SQL Server, you need to configure your database-scoped credential with the following specific values:\nRequired Settings WITH IDENTITY: Must be set to Managed Identity.\nSECRET: Must be set to SECRET = N'{\"resourceid\":\"<value>\"}'.\n\nExample Statement CREATE DATABASE SCOPED CREDENTIAL [MyManagedIdentityCredential] WITH IDENTITY = 'Managed Identity',\nSECRET = N'{\"resourceid\": \"https://azure.com\"}'; -- Or your specific resource URI Quick Breakdown Identity: Managed Identity tells SQL Server to use the instance's assigned Azure identity rather than a static key or token.\nSecret: The resourceid inside the JSON string specifies the Audience (resource) for which the Managed Identity is requesting an access token (e.g., Azure Storage, Key Vault, or a custom API).\nReference:"
  },
  "zh": {
   "stem": "您有一个已启用托管标识的 Microsoft SQL Server 2025 实例。\n您有一个数据库，其中包含一个名为 dbo.ManualChunks 的表，该表存储产品手册。\n检索查询已经能以 nvarchar(max) 文本返回前五个匹配的区块。\n您需要调用 Azure OpenAI REST 终结点进行聊天补全。该解决方案必须提供最高级别的安全性。\n您编写了以下 Transact-SQL 代码。\n您应该在第 02 行插入什么？",
   "options": {
    "A": "WITH IDENTITY = 'HTTPEndpointQueryString',\nSECRET = N'{\"api-key\":\"<value>\"}';",
    "B": "WITH IDENTITY = 'Managed Identity',\nSECRET = '{\"resourceid\":\"<value>\"}';",
    "C": "WITH IDENTITY = 'Managed Identity',\nSECRET = N'{\"api-key\":\"<value>\"}';",
    "D": "WITH IDENTITY = 'HTTPEndpointHeaders',\nSECRET = N'{\"api-key\":\"<value>\"}';",
    "E": "WITH IDENTITY = 'AzureOpenAI',\nSECRET = N'{\"resourceid\":\"<value>\"}';"
   },
   "explanation": "要在 SQL Server 中把托管标识与 sys.sp_invoke_external_rest_endpoint 一起使用，数据库范围凭据必须配置为：\nWITH IDENTITY：必须设为 'Managed Identity'。\nSECRET：必须设为 N'{\"resourceid\":\"<value>\"}'。\n\n示例：\nCREATE DATABASE SCOPED CREDENTIAL [MyManagedIdentityCredential]\nWITH IDENTITY = 'Managed Identity',\nSECRET = N'{\"resourceid\": \"https://azure.com\"}';\n\n说明：\nIdentity：'Managed Identity' 告诉 SQL Server 使用实例分配的 Azure 标识，而不是静态密钥或令牌——这才是安全级别最高的做法。\nSecret：JSON 字符串中的 resourceid 指定托管标识请求访问令牌的目标资源（受众）。\n\n带 api-key 的选项都需要保管静态密钥，安全性较低。"
  },
  "code": {
   "lang": "sql",
   "title_en": "The code you write",
   "title_zh": "您编写的代码",
   "text": "01 CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders\n02\n03 GO\n04 CREATE OR ALTER PROCEDURE dbo.AskManuals\n05   ...\n06   SELECT @chunks =\n07   ...\n08   SET @payload =\n09   ...\n10   EXEC @retval = sys.sp_invoke_external_rest_endpoint\n11     @url = N'https://<your-resource>.openai.azure.com/openai/deployments/<your-deployment>/chat/completions?api-version=2024-02-15-preview',\n12     @method = N'POST',\n13     @credential = N'AzureOpenAIHeaders',\n14     @payload = @payload,\n15     @response = @response OUTPUT;\n16 END;\n17 GO"
  }
 },
 {
  "id": 37,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have an Azure SQL database named SalesDB that contains a table named dbo.Articles.\ndbo.Articles contains two million articles with embeddings. The articles are updated frequently throughout the day.\nYou query the embeddings by using VECTOR_SEARCH.\nUsers report that semantic search results do NOT reflect the updates until the following day.\nYou need to ensure that the embeddings are updated whenever the articles change. The solution must minimize CPU usage on SalesDB.\nWhich embedding maintenance method should you implement?",
   "options": {
    "A": "Modify the query to use VECTOR_DISTANCE instead of VECTOR_SEARCH.",
    "B": "Enable change data capture (CDC) on dbo.Articles and use an Azure Functions app to process CDC changes.",
    "C": "Run an hourly Transact-SQL job that regenerates embeddings for all the rows in dbo.Articles.",
    "D": "On dbo.Articles, create a trigger that calls AI_GENERATE_EMBEDDINGS for each inserted or updated row."
   },
   "explanation": "This setup is a solid way to bridge the gap between your SQL updates and your vector index. By using CDC (Change Data Capture), you avoid the heavy lifting of scanning the entire table for changes, which keeps your database CPU overhead low.\nTo make this work efficiently within the Azure Functions app, you’ll typically want to:\nBatch the updates: Instead of triggering a function for every single row change, process small batches of CDC records to reduce the number of calls to your embedding model (like OpenAI).\nUse an Upsert logic: In your function, ensure the code handles both new inserts and updates by overwriting the existing embedding for a specific Article ID in the database.\nImplement a \"Cool-down\" or Timer: If the \"frequent updates\" happen in bursts, you can use an Azure Service Bus or Storage Queue between the CDC process and the Function to smooth out the processing load.\nReference:"
  },
  "zh": {
   "stem": "您有一个名为 SalesDB 的 Azure SQL 数据库，其中包含一个名为 dbo.Articles 的表。dbo.Articles 包含两百万篇带嵌入的文章，这些文章在一天中会频繁更新。\n您使用 VECTOR_SEARCH 查询这些嵌入。\n用户报告称，语义搜索结果直到第二天才会反映更新。\n您需要确保文章发生更改时嵌入也随之更新。该解决方案必须最大限度地减少 SalesDB 上的 CPU 使用率。\n您应该实施哪种嵌入维护方法？",
   "options": {
    "A": "修改查询，使用 VECTOR_DISTANCE 代替 VECTOR_SEARCH。",
    "B": "在 dbo.Articles 上启用变更数据捕获 (CDC)，并使用 Azure Functions 应用处理 CDC 更改。",
    "C": "每小时运行一个 Transact-SQL 作业，为 dbo.Articles 中的所有行重新生成嵌入。",
    "D": "在 dbo.Articles 上创建触发器，为每个插入或更新的行调用 AI_GENERATE_EMBEDDINGS。"
   },
   "explanation": "这种方案能很好地把 SQL 更新与向量索引衔接起来。使用变更数据捕获 (CDC) 可以避免为查找更改而扫描整张表的繁重工作，从而把数据库的 CPU 开销保持在较低水平。\n\n在 Azure Functions 应用中高效实现时通常还应：\n批量处理更新：不要为每一行更改都触发一次函数，而是成批处理 CDC 记录，减少对嵌入模型（如 OpenAI）的调用次数。\n使用 Upsert 逻辑：函数中同时处理新插入和更新，对特定 Article ID 覆盖已有嵌入。\n加入“冷却”或计时机制：如果更新是突发式的，可在 CDC 与函数之间加入 Azure 服务总线或存储队列来平滑处理负载。\n\n每行触发器 (D) 会显著抬高 CPU；每小时全表重算 (C) 更浪费；(A) 与更新时效无关。"
  }
 },
 {
  "id": 38,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have a GitHub Codespaces environment that has GitHub Copilot Chat installed and is connected to a SQL database in Microsoft Fabric named DB1. DB1 contains tables named Sales.Orders and Sales.Customers.\n\nYou use GitHub Copilot Chat in the context of DB1.\nA company policy prohibits sharing customer Personally Identifiable Information (PII), secrets, and query result sets with any AI service.\nYou need to use GitHub Copilot Chat to write and review Transact-SQL code for a new stored procedure that will join Sales.Orders to Sales.Customers and return customer names and email addresses. The solution must NOT share the actual data in the tables with GitHub Copilot Chat.\nWhat should you do?",
   "options": {
    "A": "From Sales.Customers, paste several rows that include email addresses into a chat, so that GitHub Copilot Chat can infer edge cases.",
    "B": "Run a SELECT statement that returns customer names and email addresses and provide the result set to GitHub Copilot Chat so that GitHub Copilot Chat can generate the stored procedure.",
    "C": "Provide the database connection string to GitHub Copilot Chat so that GitHub Copilot Chat can validate the stored procedure.",
    "D": "Ask GitHub Copilot Chat to generate the stored procedure by using schema details only."
   },
   "explanation": "To use GitHub Copilot Chat effectively in this environment without exposing sensitive data, you should focus your prompts entirely on the schema and logic rather than the data itself.\nSince Copilot Chat can \"see\" your open files, the best approach is to provide the table structures as DDL (Data Definition Language) statements or a simplified description.\nSteps to generate the stored procedure:\nDefine the Schema: Open a new SQL file in your Codespace. Paste the CREATE TABLE scripts (without any data) for your two tables.\nPrompt Copilot: Use the Chat view to request the procedure.\nExample Prompt: \"Based on the table definitions in my open file, write a T-SQL stored procedure that joins TableA and TableB on [Join Column]. Include logic to filter by [Parameter] and ensure no PII columns are included in the SELECT statement.\" Review for PII/Secrets: Before executing, manually verify that the generated code doesn't include hardcoded secrets or call PII columns you intended to omit.\nSecurity Check: Because you are in a Codespace, ensure your .env files or connection strings are in your .gitignore so they aren't indexed by Copilot.\nReference:"
  },
  "zh": {
   "stem": "您有一个安装了 GitHub Copilot Chat 的 GitHub Codespaces 环境，并已连接到 Microsoft Fabric 中一个名为 DB1 的 SQL 数据库。DB1 包含名为 Sales.Orders 和 Sales.Customers 的表。\n您在 DB1 的上下文中使用 GitHub Copilot Chat。\n公司策略禁止与任何 AI 服务共享客户个人身份信息 (PII)、机密和查询结果集。\n您需要使用 GitHub Copilot Chat 编写并审查一个新存储过程的 Transact-SQL 代码，该过程将 Sales.Orders 与 Sales.Customers 联接并返回客户姓名和电子邮件地址。该解决方案不得与 GitHub Copilot Chat 共享表中的实际数据。\n您应该怎么做？",
   "options": {
    "A": "从 Sales.Customers 中把包含电子邮件地址的若干行粘贴到聊天中，以便 GitHub Copilot Chat 推断边缘情况。",
    "B": "运行返回客户姓名和电子邮件地址的 SELECT 语句，并把结果集提供给 GitHub Copilot Chat，让它生成存储过程。",
    "C": "把数据库连接字符串提供给 GitHub Copilot Chat，以便它验证该存储过程。",
    "D": "要求 GitHub Copilot Chat 仅使用架构详细信息生成该存储过程。"
   },
   "explanation": "要在不泄露敏感数据的前提下有效使用 GitHub Copilot Chat，提示应完全围绕架构和逻辑，而不是数据本身。\n由于 Copilot Chat 能“看到”打开的文件，最佳做法是以 DDL 语句或简化描述的形式提供表结构。\n\n步骤：\n定义架构：在 Codespace 中新建一个 SQL 文件，粘贴两张表的 CREATE TABLE 脚本（不含任何数据）。\n提示 Copilot：在聊天视图中请求生成过程，例如“根据我打开文件中的表定义，编写一个联接 TableA 和 TableB 的 T-SQL 存储过程……”。\n审查 PII/机密：执行前手动确认生成的代码不含硬编码机密，也没有引用您打算排除的 PII 列。\n安全检查：确保 .env 文件或连接字符串已加入 .gitignore，不会被 Copilot 索引。\n\n选项 A、B 会把真实数据交给 AI 服务；选项 C 会泄露凭据。"
  }
 },
 {
  "id": 39,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure subscription. The subscription contains an Azure SQL database named SalesDB and an Azure App Service app named sales-api. sales-api uses virtual network integration to a subnet named vnet-prod/subnet-app and reads from SalesDB.\nYou need to configure authentication and network access to meet the following requirements:\nEnsure that sales-api connects to SalesDB by using passwordless authentication.\nEnsure that all the database traffic remains within the subscription.\nThe solution must minimize administrative effort.\nWhat should you configure? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Enable a managed identity and use Microsoft Entra authentication.\nEnsure that sales-api connects to SalesDB by using passwordless authentication.\nTo ensure your Azure App Service connects to an Azure SQL Database using passwordless authentication, you must use Managed Identities and Microsoft Entra authentication. This process eliminates the need to store credentials in your code or connection strings.\n\n1. Enable Managed Identity on the App Service You must first give your app an identity that Azure SQL can recognize.\n2. Configure Microsoft Entra Admin for Azure SQL The SQL Server needs an Entra administrator to manage identity-based access.\n\n3. Grant Database Permissions to the Managed Identity You must manually create a user in the database for the app's identity. This cannot be done via the portal's IAM roles; it requires a SQL command.\nBox 2: Create a private endpoint and disable public network access.\nEnsure that all the database traffic remains within the subscription.\nTo ensure all database traffic between your Azure App Service and Azure SQL Database remains within your subscription and virtual network, you should implement an Azure Private Endpoint.\nWhile Service Endpoints also keep traffic on the Microsoft backbone, they still resolve to a public IP address. A Private Endpoint assigns a private IP address from your subnet directly to the database,\nensuring the connection is fully isolated from the public internet.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure 订阅，其中包含一个名为 SalesDB 的 Azure SQL 数据库和一个名为 sales-api 的 Azure App Service 应用。sales-api 通过虚拟网络集成连接到名为 vnet-prod/subnet-app 的子网，并从 SalesDB 读取数据。\n您需要配置身份验证和网络访问以满足以下要求：\n确保 sales-api 使用无密码身份验证连接到 SalesDB。\n确保所有数据库流量都保留在订阅内。\n该解决方案必须最大限度地减少管理工作量。\n您应该配置什么？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：启用托管标识并使用 Microsoft Entra 身份验证。\n要让 Azure App Service 以无密码方式连接 Azure SQL Database，必须使用托管标识和 Microsoft Entra 身份验证，从而无需在代码或连接字符串中存储凭据。\n1. 在 App Service 上启用托管标识，让应用拥有 Azure SQL 可识别的标识。\n2. 为 Azure SQL 配置 Microsoft Entra 管理员，以管理基于标识的访问。\n3. 在数据库中为该应用标识手动创建用户（无法通过门户的 IAM 角色完成，需要执行 SQL 命令）。\n\n框 2：创建专用终结点并禁用公共网络访问。\n要确保 App Service 与 Azure SQL Database 之间的所有数据库流量都留在订阅和虚拟网络内，应使用 Azure 专用终结点，并关闭公共网络访问。"
  },
  "boxes": [
   {
    "prompt_en": "Authentication for sales-api:",
    "prompt_zh": "sales-api 的身份验证：",
    "options_en": [
     "Configure client certificate authentication for sales-api.",
     "Use a connection string with rotated SQL credentials weekly.",
     "Enable a managed identity and use Microsoft Entra authentication.",
     "Create a SQL login and store the SQL credentials in Azure Key Vault."
    ],
    "options_zh": [
     "为 sales-api 配置客户端证书身份验证。",
     "使用每周轮换 SQL 凭据的连接字符串。",
     "启用托管标识并使用 Microsoft Entra 身份验证。",
     "创建 SQL 登录名并将 SQL 凭据存储在 Azure Key Vault 中。"
    ],
    "correct_en": "Enable a managed identity and use Microsoft Entra authentication.",
    "correct_zh": "启用托管标识并使用 Microsoft Entra 身份验证。"
   },
   {
    "prompt_en": "Network access for SalesDB:",
    "prompt_zh": "SalesDB 的网络访问：",
    "options_en": [
     "Allow Azure services and keep the public endpoint enabled.",
     "Create a private endpoint and disable public network access.",
     "Add IP firewall rules for the App Service outbound IP addresses.",
     "Configure a database-level firewall rule for support IP addresses."
    ],
    "options_zh": [
     "允许 Azure 服务并保持公共终结点处于启用状态。",
     "创建专用终结点并禁用公共网络访问。",
     "为 App Service 的出站 IP 地址添加 IP 防火墙规则。",
     "为支持人员的 IP 地址配置数据库级防火墙规则。"
    ],
    "correct_en": "Create a private endpoint and disable public network access.",
    "correct_zh": "创建专用终结点并禁用公共网络访问。"
   }
  ]
 },
 {
  "id": 40,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have a database named DB1. The schema is stored in a GitHub repository as an SDK-style SQL database project.\nYou use a feature branch workflow to deploy changes to DB1.\nYou need to update the local feature branch with the latest changes to main, and then create a pull request to merge the feature branch into main for review.\nHow should you complete the GitHub CLI script? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: get fetch origin To keep your feature branch up-to-date and get your SQL project ready for review, you can use the following GitHub CLI (gh) and Git commands.\nGitHub CLI Workflow Script # 1. Switch to your feature branch git checkout feature/name_of_feature # 2. Pull the latest changes from main and merge them into your feature branch # This ensures your SQL schema changes are compatible with the current production state git fetch origin git merge origin/main\nBox 2: git merge origin/main git merge origin/main: This is critical for SQL projects. It allows you to resolve any schema conflicts (like two people modifying the same table) locally before the PR is even reviewed.\nBox 3: gh pr create # 3. Push your updated feature branch to GitHub git push origin feature/name_of_feature # 4. Create the Pull Request # This opens the PR from your feature branch into main gh pr create \\\n--title \"Feature: Update SQL Schema for [Feature Name]\" \\\n--body \"Brief description of the changes to the SDK-style SQL project.\" \\\n--base main \\\n--head feature/name_of_feature gh pr create: This command replaces the need to visit the GitHub website.\n--base: The target branch (where the code is going).\n--head: Your source branch (where the code is coming from).\nReference:"
  },
  "zh": {
   "stem": "您有一个名为 DB1 的数据库。其架构以 SDK 样式 SQL 数据库项目的形式存储在 GitHub 存储库中。\n您使用功能分支工作流向 DB1 部署更改。\n您需要用 main 的最新更改更新本地功能分支，然后创建拉取请求，把功能分支合并到 main 以供审查。\n您应如何完成该 GitHub CLI 脚本？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：git fetch origin\n# 1. 切换到功能分支\ngit checkout feature/name_of_feature\n# 2. 拉取 main 的最新更改并合并到功能分支\ngit fetch origin\n\n框 2：git merge origin/main\n这一步对 SQL 项目尤为重要：可以在提交 PR 之前在本地解决架构冲突（例如两人修改了同一张表）。\n\n框 3：gh pr create\n# 3. 推送更新后的功能分支\ngit push origin feature/name_of_feature\n# 4. 创建拉取请求\ngh pr create \\\n  --title \"Feature: Update SQL Schema for [Feature Name]\" \\\n  --body \"对 SDK 样式 SQL 项目所做更改的简要说明。\" \\\n  --base main \\\n  --head feature/name_of_feature\ngh pr create 让您无需打开 GitHub 网站；--base 是目标分支，--head 是源分支。"
  },
  "sources_en": [
   "gh pr create",
   "gh pr merge",
   "gh pr ready",
   "git checkout main",
   "git fetch origin",
   "git merge origin/main",
   "git pull origin main"
  ],
  "sources_zh": [
   "gh pr create",
   "gh pr merge",
   "gh pr ready",
   "git checkout main",
   "git fetch origin",
   "git merge origin/main",
   "git pull origin main"
  ],
  "targets": [
   {
    "label_en": "Box 1 (after git checkout feature/db1-add-staticdata)",
    "label_zh": "框 1（git checkout feature/db1-add-staticdata 之后）",
    "correct_en": "git fetch origin",
    "correct_zh": "git fetch origin"
   },
   {
    "label_en": "Box 2",
    "label_zh": "框 2",
    "correct_en": "git merge origin/main",
    "correct_zh": "git merge origin/main"
   },
   {
    "label_en": "Box 3 (the command that takes --title / --body / --head / --base / --repo / --web)",
    "label_zh": "框 3（接受 --title / --body / --head / --base / --repo / --web 的命令）",
    "correct_en": "gh pr create",
    "correct_zh": "gh pr create"
   }
  ]
 },
 {
  "id": 41,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have an Azure SQL database that contains tables named dbo.ProductDocs and\n\ndbo.ProductDocsEmbeddings. dbo.ProductDocs contains product documentation and the following columns:\nDocID (int) Title (nvarchar(200)) Body (nvarchar(max)) LastModified (datetime2) The documentation is edited throughout the day.\ndbo.ProductDocsEmbeddings contains the following columns:\nDocID (int) ChunkOrder (int) ChunkText (nvarchar(max)) Embedding (vector(1536)) The current embedding pipeline runs once per night.\nYou need to ensure that embeddings are updated every time the underlying documentation content changes. The solution must NOT require a nightly batch process.\nWhat should you include in the solution?",
   "options": {
    "A": "fixed-size chunking",
    "B": "a smaller embedding model",
    "C": "table triggers",
    "D": "change tracking on dbo.ProductDocs"
   },
   "explanation": "To ensure embeddings are updated immediately when the product information table changes, you should implement Azure SQL Database Change Tracking combined with Azure Functions triggered via Event Grid. This approach eliminates daily batch processes by enabling an event-driven architecture that triggers embedding regeneration only for modified rows.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含名为 dbo.ProductDocs 和 dbo.ProductDocsEmbeddings 的表。dbo.ProductDocs 存储产品文档，包含以下列：\nDocID (int)\nTitle (nvarchar(200))\nBody (nvarchar(max))\nLastModified (datetime2)\n该文档全天都在被编辑。\ndbo.ProductDocsEmbeddings 包含以下列：\nDocID (int)\nChunkOrder (int)\nChunkText (nvarchar(max))\nEmbedding (vector(1536))\n当前的嵌入管道每晚运行一次。\n您需要确保每当基础文档内容发生更改时都更新嵌入。该解决方案不得依赖每晚的批处理。\n您应该在解决方案中包含什么？",
   "options": {
    "A": "固定大小分块",
    "B": "更小的嵌入模型",
    "C": "表触发器",
    "D": "在 dbo.ProductDocs 上启用更改跟踪"
   },
   "explanation": "要确保产品信息表发生更改时立即更新嵌入，应实施 Azure SQL Database 的更改跟踪 (Change Tracking)，并结合通过 Event Grid 触发的 Azure Functions。这种做法用事件驱动架构取代了每日批处理，只针对被修改的行重新生成嵌入。"
  }
 },
 {
  "id": 42,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a database named db1. The schema is stored in a Git repository as an SDK-style SQL database project. The repository contains the following GitHub Action workflow.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Yes Yes - Unit tests run automatically whenever changes are pushed to main.\nThe unit tests job will run automatically whenever changes are pushed to the main branch, provided the build-and-deploy job completes successfully.\n\nIn a GitHub Actions workflow with this configuration:\non: push: branches: - main: This trigger ensures that the workflow starts every time code is pushed to the main branch.\njobs: build-and-deploy: This job will be the first to run in the sequence (by default, jobs run in parallel, but the needs keyword establishes sequential execution).\nunit-tests: needs: build-and-deploy: The needs keyword creates a dependency. The unit-tests job will wait for build-and-deploy to finish, and it will only run if the build-and-deploy job completes successfully.\n\nIf the build-and-deploy job fails, the unit-tests job will be skipped unless a specific conditional expression,\nlike if: always(), is used.\nBox 2: Yes Yes - Schema validation occurs during the Build step.\nRunning dotnet build is the standard way to validate the schema.\nIn the Build step we see:\n- name: Build run: dotnet build db1.sqlproj\nBox 3: No No - Schema validation occurs during the Deploy step.\nIt is only in the Build step.\nReference:"
  },
  "zh": {
   "stem": "您有一个名为 db1 的数据库。其架构以 SDK 样式 SQL 数据库项目的形式存储在 Git 存储库中。该存储库包含以下 GitHub Actions 工作流。\n对于以下每条陈述，如果陈述为真，请选择“是”；否则选择“否”。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：是\n只要有更改推送到 main，单元测试就会自动运行（前提是 build-and-deploy 作业成功完成）。\n在该工作流配置中：\non: push: branches: - main —— 每次向 main 分支推送代码都会启动工作流。\njobs: build-and-deploy —— 序列中最先运行的作业（默认作业并行运行，但 needs 关键字建立了顺序执行）。\nunit-tests: needs: build-and-deploy —— needs 建立依赖关系，unit-tests 会等待 build-and-deploy 完成，且仅在其成功时运行。若 build-and-deploy 失败，unit-tests 会被跳过（除非使用 if: always() 之类的条件表达式）。\n\n框 2：是\n架构验证发生在 Build 步骤：运行 dotnet build 正是验证架构的标准方式。\n\n框 3：否\nDeploy 步骤只是用 SqlPackage /Action:Publish 发布已生成的 .dacpac，架构验证在此之前的 Build 步骤就已完成。"
  },
  "boxes": [
   {
    "prompt_en": "Unit tests run automatically whenever changes are pushed to main.",
    "prompt_zh": "每当有更改推送到 main 时，单元测试都会自动运行。",
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
    "prompt_en": "Schema validation occurs during the Build step.",
    "prompt_zh": "架构验证发生在 Build 步骤期间。",
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
    "prompt_en": "Schema validation occurs during the Deploy step.",
    "prompt_zh": "架构验证发生在 Deploy 步骤期间。",
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
   "lang": "yaml",
   "title_en": "The GitHub Actions workflow",
   "title_zh": "GitHub Actions 工作流",
   "text": "name: Database CI/CD\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    branches:\n      - main\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Checkout code\n      uses: actions/checkout@v3\n    - name: Setup .NET\n      uses: actions/setup-dotnet@v3\n      with:\n        dotnet-version: '8.x'\n    - name: Build\n      run: dotnet build db1.sqlproj --configuration Release\n    - name: Deploy\n      run: |\n        SqlPackage /Action:Publish \\\n          /SourceFile:./bin/Release/db1.dacpac \\\n          /TargetConnectionString:\"${{ secrets.Target_Connection_String }}\"\n  unit-tests:\n    runs-on: ubuntu-latest\n    needs: build-and-deploy\n    if: github.ref == 'refs/heads/main'\n    steps:\n    - name: Checkout code\n      uses: actions/checkout@v3\n    - name: Setup .NET\n      uses: actions/setup-dotnet@v3\n      with:\n        dotnet-version: '8.x'\n    - name: Run unit tests\n      run: dotnet test UnitTests.csproj --configuration Release"
  }
 },
 {
  "id": 43,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "C",
   "E"
  ],
  "en": {
   "stem": "You have a Microsoft SQL Server 2025 instance that contains a database named SalesDB. SalesDB supports a Retrieval Augmented Generation (RAG) pattern for internal support tickets. The SQL Server instance runs without any outbound network connectivity.\nYou plan to generate embeddings inside the SQL Server instance and store them in a table for vector similarity queries.\nYou need to ensure that only a database user account named AIApplicationUser can run embedding generation by using the model.\n\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Grant the CONTROL permission on SalesDB to AIApplicationUser.",
    "B": "Create a database audit specification on SalesDB owned by AIApplicationUser.",
    "C": "Grant the EXECUTE permission on the external model project to AIApplicationUser.",
    "D": "Create an external model project by using ONNX runtime and local paths.",
    "E": "Create an external model project that points to a Microsoft Foundry REST endpoint."
   },
   "explanation": "To implement a Retrieval Augmented Generation (RAG) pattern in an isolated SQL Server 2025 instance,\nyou can use the new native vector capabilities to generate, store, and query embeddings without needing outbound internet access.\n[E] 1. Enable External REST Endpoints Because your instance is isolated, you must first enable the configuration that allows SQL Server to communicate with your internal Microsoft Foundry (or local) endpoint.\n\nEXEC sp_configure 'external rest endpoint enabled', 1;\nRECONFIGURE;\n2. Create the External Model Project Register your Microsoft Foundry REST endpoint as an external model. This allows SQL Server to treat the internal service as a registered provider for generating embeddings.\n[C] 3. Grant Permission to a Specific User To restrict embedding generation to a single specific database user, grant the EXECUTE permission on the newly created external model.\n\n-- Granting EXECUTE only to the specific user 'AppUser'\nGRANT EXECUTE ON EXTERNAL MODEL::[MyFoundryEmbeddingModel] TO [AppUser];\nUse code with caution.\n4. Generate and Store Embeddings\nUse the AI_GENERATE_EMBEDDINGS function to process text into vectors and store them in a table with\nthe new VECTOR data type.\n\nReference:"
  },
  "zh": {
   "stem": "您有一个 Microsoft SQL Server 2025 实例，其中包含一个名为 SalesDB 的数据库。SalesDB 为内部支持工单提供检索增强生成 (RAG) 模式。该 SQL Server 实例运行时没有任何出站网络连接。\n您计划在该 SQL Server 实例内部生成嵌入，并把它们存储在表中以供向量相似度查询使用。\n您需要确保只有名为 AIApplicationUser 的数据库用户账户才能使用该模型运行嵌入生成。\n您应该执行哪两项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确的选择值一分。",
   "options": {
    "A": "把 SalesDB 上的 CONTROL 权限授予 AIApplicationUser。",
    "B": "在 SalesDB 上创建由 AIApplicationUser 拥有的数据库审核规范。",
    "C": "把外部模型项目上的 EXECUTE 权限授予 AIApplicationUser。",
    "D": "使用 ONNX 运行时和本地路径创建外部模型项目。",
    "E": "创建指向 Microsoft Foundry REST 终结点的外部模型项目。"
   },
   "explanation": "要在隔离的 SQL Server 2025 实例中实现 RAG 模式，可以使用新的原生向量功能来生成、存储和查询嵌入，而无需出站 Internet 访问。\n\n[E] 1. 启用外部 REST 终结点\n由于实例是隔离的，必须先启用允许 SQL Server 与内部 Microsoft Foundry（或本地）终结点通信的配置：\nEXEC sp_configure 'external rest endpoint enabled', 1;\nRECONFIGURE;\n2. 创建外部模型项目：把 Microsoft Foundry REST 终结点注册为外部模型，使 SQL Server 可以把该内部服务视为生成嵌入的注册提供程序。\n\n[C] 3. 向特定用户授予权限\n要把嵌入生成限制给单个数据库用户，需要在新建的外部模型上授予 EXECUTE 权限：\nGRANT EXECUTE ON EXTERNAL MODEL::[MyFoundryEmbeddingModel] TO [AIApplicationUser];\n\n授予 CONTROL 权限范围过大；审核规范与授权无关。"
  }
 },
 {
  "id": 44,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that supports an OLTP application.\nYou need to write Transact-SQL code that returns blocking chain details. The output must return only sessions that are blocked or are blocking other sessions.\nHow should you complete the code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: sys.dm_exec_requests To identify blocking chains in an Azure SQL Database, the most adequate Transact-SQL code utilizes Dynamic Management Views (DMVs) like sys.dm_exec_requests and sys.dm_exec_sessions.\nsys.dm_exec_requests: Identifies requests currently executing and provides the blocking_session_id.\nBox 2: LEFT OUTER JOIN sys.dm_exec_requests\nBox 3: OUTER APPLY sys.dm_exec_sql_text (r.sql_handle)\nBox 4: OUTER APPLY sys.dm_exec_input_buffer(s.session_id, NULL) Recommended T-SQL Code The following query identifies the head of the blocking chain and lists all associated blocked sessions. It filters the output to return only sessions that are currently blocked or are actively blocking others by checking if blocking_session_id is non-zero or if a session ID appears as a blocker for another.\n\nWITH cteBL (session_id, blocking_these) AS (\n    SELECT\n        s.session_id,\n        blocking_these = x.blocking_these\n    FROM sys.dm_exec_sessions s\n    CROSS APPLY (\n        SELECT isnull(convert(varchar(6), er.session_id),'') + ', '\n*-> [Box 1]        FROM sys.dm_exec_requests as er\n        WHERE er.blocking_session_id = s.session_id\n        FOR XML PATH('')\n    ) AS x (blocking_these)\n)\nSELECT\n    s.session_id,\n    blocked_by = r.blocking_session_id,\n    bl.blocking_these,\n    batch_text = t.text,\n    input_buffer = ib.event_info,\n    s.status,\n    r.wait_type,\n    r.wait_time\nFROM sys.dm_exec_sessions s\n*-> [Box 2] LEFT OUTER JOIN sys.dm_exec_requests r ON r.session_id = s.session_id\nINNER JOIN cteBL AS bl ON s.session_id = bl.session_id\n*-> [Box 3] OUTER APPLY sys.dm_exec_sql_text (r.sql_handle) t\n*-> [Box 4] OUTER APPLY sys.dm_exec_input_buffer(s.session_id, NULL) AS ib\nWHERE\n    bl.blocking_these IS NOT NULL\n    OR r.blocking_session_id > 0\nORDER BY\n    len(bl.blocking_these) DESC,\n    r.blocking_session_id DESC;\nReference:"
  },
  "zh": {
   "stem": "您有一个支持 OLTP 应用程序的 Azure SQL 数据库。\n您需要编写返回阻塞链详细信息的 Transact-SQL 代码。输出必须只返回被阻塞或正在阻塞其他会话的会话。\n您应如何完成该代码？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：FROM sys.dm_exec_requests\n在 Azure SQL Database 中识别阻塞链，最合适的做法是使用 sys.dm_exec_requests 和 sys.dm_exec_sessions 等动态管理视图 (DMV)。sys.dm_exec_requests 标识当前正在执行的请求并提供 blocking_session_id。\n\n框 2：LEFT OUTER JOIN sys.dm_exec_requests\n用左外联接把会话与请求关联，即使会话当前没有活动请求也保留该行。\n\n框 3：OUTER APPLY sys.dm_exec_sql_text (r.sql_handle)\n获取会话正在执行的 SQL 文本；用 OUTER APPLY 以免 sql_handle 为 NULL 时丢行。\n\n框 4：OUTER APPLY sys.dm_exec_input_buffer(s.session_id, NULL)\n获取会话的输入缓冲区内容。\n\n最终查询通过判断 blocking_session_id 是否非零，或某会话 ID 是否作为他人的阻塞者出现，来只返回被阻塞或正在阻塞他人的会话。"
  },
  "sources_en": [
   "CROSS APPLY sys.dm_exec_sql_text (r.sql_handle)",
   "FROM sys.dm_exec_requests",
   "FROM sys.dm_tran_locks",
   "INNER JOIN sys.dm_tran_locks",
   "LEFT OUTER JOIN sys.dm_exec_requests",
   "OUTER APPLY sys.dm_exec_input_buffer(r.session_id, 0)",
   "OUTER APPLY sys.dm_exec_input_buffer(s.session_id, NULL)",
   "OUTER APPLY sys.dm_exec_sql_text (r.sql_handle)"
  ],
  "sources_zh": [
   "CROSS APPLY sys.dm_exec_sql_text (r.sql_handle)",
   "FROM sys.dm_exec_requests",
   "FROM sys.dm_tran_locks",
   "INNER JOIN sys.dm_tran_locks",
   "LEFT OUTER JOIN sys.dm_exec_requests",
   "OUTER APPLY sys.dm_exec_input_buffer(r.session_id, 0)",
   "OUTER APPLY sys.dm_exec_input_buffer(s.session_id, NULL)",
   "OUTER APPLY sys.dm_exec_sql_text (r.sql_handle)"
  ],
  "targets": [
   {
    "label_en": "Box 1 (inside the CROSS APPLY subquery, AS er)",
    "label_zh": "框 1（CROSS APPLY 子查询内，AS er）",
    "correct_en": "FROM sys.dm_exec_requests",
    "correct_zh": "FROM sys.dm_exec_requests"
   },
   {
    "label_en": "Box 2 (... AS r ON r.session_id = s.session_id)",
    "label_zh": "框 2（... AS r ON r.session_id = s.session_id）",
    "correct_en": "LEFT OUTER JOIN sys.dm_exec_requests",
    "correct_zh": "LEFT OUTER JOIN sys.dm_exec_requests"
   },
   {
    "label_en": "Box 3 (... AS t)",
    "label_zh": "框 3（... AS t）",
    "correct_en": "OUTER APPLY sys.dm_exec_sql_text (r.sql_handle)",
    "correct_zh": "OUTER APPLY sys.dm_exec_sql_text (r.sql_handle)"
   },
   {
    "label_en": "Box 4 (... AS ib)",
    "label_zh": "框 4（... AS ib）",
    "correct_en": "OUTER APPLY sys.dm_exec_input_buffer(s.session_id, NULL)",
    "correct_zh": "OUTER APPLY sys.dm_exec_input_buffer(s.session_id, NULL)"
   }
  ]
 },
 {
  "id": 45,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have an Azure SQL database that supports a customer-facing API. The API calls a stored procedure named dbo.GetCustomerOrders thousands of times per hour.\nAfter a deployment that updated indexes and statistics, users report that the API endpoint backed by dbo.GetCustomerOrders is slower. In Query Store, the same query now has two persisted execution\n\nplans. During the last hour, the newer plan had a significantly higher average duration and CPU time than the older plan.\nYou need to restore the previous performance quickly, without changing the API code.\nWhich Transact-SQL command should you run?",
   "options": {
    "A": "EXEC sys.sp_query_store_set_hints",
    "B": "DBCC FREEPROCCACHE",
    "C": "EXEC sp_query_store_force_plan",
    "D": "ALTER DATABASE"
   },
   "explanation": "We have encountered plan regression. This often happens after maintenance (like updating statistics) because the query optimizer generates a new execution plan that it thinks is better based on the new data distribution, but it ends up being less efficient in practice.\nSince you've already identified the Plan ID for the faster plan and the Query ID from Query Store, you can force the \"good\" plan immediately using:\n\nEXEC sp_query_store_force_plan @query_id = [YourQueryID], @plan_id = [YourFastPlanID];\nUse code with caution.\nThis tells Azure SQL to ignore the new, slower plan and stick to the one that worked, providing an almost instant fix for your API's performance without requiring a code deployment.\nReference:"
  },
  "zh": {
   "stem": "您有一个支持面向客户 API 的 Azure SQL 数据库。该 API 每小时调用名为 dbo.GetCustomerOrders 的存储过程数千次。\n在一次更新了索引和统计信息的部署之后，用户报告由 dbo.GetCustomerOrders 支持的 API 终结点变慢了。在查询存储中，同一查询现在有两个已保留的执行计划。在过去一小时内，较新的计划的平均持续时间和 CPU 时间明显高于较旧的计划。\n您需要在不更改 API 代码的情况下快速恢复之前的性能。\n您应该运行哪个 Transact-SQL 命令？",
   "options": {
    "A": "EXEC sys.sp_query_store_set_hints",
    "B": "DBCC FREEPROCCACHE",
    "C": "EXEC sp_query_store_force_plan",
    "D": "ALTER DATABASE"
   },
   "explanation": "这属于计划回归 (plan regression)。它常发生在统计信息更新之类的维护操作之后：查询优化器根据新的数据分布生成了自认为更好的执行计划，实际执行效率却更低。\n\n既然已经从查询存储中找到了较快计划的 Plan ID 和 Query ID，就可以立即强制使用“好”计划：\nEXEC sp_query_store_force_plan @query_id = [YourQueryID], @plan_id = [YourFastPlanID];\n\n这会让 Azure SQL 忽略新的较慢计划，继续使用有效的旧计划，无需部署代码即可几乎立刻恢复 API 性能。"
  }
 },
 {
  "id": 46,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that has Query Store enabled.\nQuery Performance Insight shows that one stored procedure has the longest runtime. The procedure runs the following parameterized query.\nThe dbo.Orders table has approximately 120 million rows. CustomerId is highly selective, and OrderDate is used for range filtering and sorting.\nYou have the following indexes:\nClustered index: PK_Orders on (OrderId) Nonclustered index: IX_Orders_OrderDate on (OrderDate) with no included columns\n\nAn actual execution plan captured from Query Store for slow runs shows the following:\nAn index seek on IX_Orders_OrderDate followed by a Key Lookup (Clustered) on PK_Orders for CustomerId, Status, and TotalAmount A sort operator before Top (50), because the results are ordered by OrderDate DESC For each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Yes Yes - To avoid the explicit sort for the query create a nonclustered index on (CustomerID, OrderDate DESC) that includes (Status, TotalAmount).\nTo optimize the stored procedure and eliminate the expensive Key Lookup and Sort operators, create a nonclustered index on (CustomerID, OrderDate DESC) that includes the required columns. This allows for a targeted index seek that retrieves all necessary data in the correct order.\nBox 2: No No - To eliminate the sort and make the query use an ordered seek, add CustomerID as an included column to IX_Orders_Orderdate.\nAdding CustomerID as an included column will not eliminate the Sort operator or allow for an efficient ordered seek in this specific scenario. See Box 1 above.\nBox 3: Yes Yes - The plan indicates a bottleneck from a suboptimal query plan, rather locking or blocking.\nIt looks like you're hitting a classic performance trap in SQL Server/Azure SQL. Even though OrderDate is\n\nindexed, the engine is choosing a path that leads to excessive I/O and unnecessary sorting.\nThe Problem\n*-> The Key Lookup Bottleneck: Since IX_Orders_OrderDate only contains the date, the engine has to jump back to the Clustered Index (the \"Key Lookup\") for every single row to check the CustomerID and retrieve the Status and TotalAmount. With 100 million rows, this is incredibly expensive.\nThe Sort Operator: Even though your index is on OrderDate, the optimizer might be performing a wide Seek or Scan that requires an explicit Sort before the TOP (50) can be applied, especially if the CustomerID filter isn't part of that initial navigation.\nThe Selective Column is Unindexed: You mentioned CustomerID is highly selective, but it isn't the leading column (or even present) in your nonclustered index.\nReference:"
  },
  "zh": {
   "stem": "您有一个已启用查询存储的 Azure SQL 数据库。\nQuery Performance Insight 显示某个存储过程的运行时间最长。该过程运行以下参数化查询。\ndbo.Orders 表约有 1.2 亿行。CustomerId 的选择性很高，OrderDate 用于范围筛选和排序。\n您有以下索引：\n聚集索引：PK_Orders，位于 (OrderId)\n非聚集索引：IX_Orders_OrderDate，位于 (OrderDate)，无包含列\n从查询存储捕获的慢速运行实际执行计划显示：\n在 IX_Orders_OrderDate 上进行索引查找，随后为获取 CustomerId、Status 和 TotalAmount 而在 PK_Orders 上执行键查找（聚集）\n由于结果按 OrderDate DESC 排序，在 Top (50) 之前存在一个排序运算符\n对于以下每条陈述，如果陈述为真，请选择“是”；否则选择“否”。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：是\n要避免该查询的显式排序，应在 (CustomerId, OrderDate DESC) 上创建包含 (Status, TotalAmount) 的非聚集索引。这样既能消除代价高昂的键查找，也能消除排序运算符：一次有针对性的索引查找即可按正确顺序取回所有必要数据。\n\n框 2：否\n仅把 CustomerId 添加为 IX_Orders_OrderDate 的包含列，并不能消除排序运算符，也无法实现高效的有序查找——因为索引键仍以 OrderDate 开头，无法按 CustomerId 定位。\n\n框 3：是\n执行计划表明瓶颈来自次优的查询计划（键查找 + 排序造成过量 I/O），而不是锁定或阻塞。"
  },
  "boxes": [
   {
    "prompt_en": "To avoid the explicit sort for the query, create a nonclustered index on (CustomerId, OrderDate DESC) that includes (Status, TotalAmount).",
    "prompt_zh": "为避免该查询的显式排序，请在 (CustomerId, OrderDate DESC) 上创建包含 (Status, TotalAmount) 的非聚集索引。",
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
    "prompt_en": "To eliminate the sort and make the query use an ordered seek, add CustomerId as an included column to IX_Orders_OrderDate.",
    "prompt_zh": "为消除排序并让查询使用有序查找，请将 CustomerId 作为包含列添加到 IX_Orders_OrderDate。",
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
    "prompt_en": "The plan indicates a bottleneck from a suboptimal query plan, rather locking or blocking.",
    "prompt_zh": "该计划表明瓶颈来自次优的查询计划，而不是锁定或阻塞。",
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
   "lang": "sql",
   "title_en": "The stored procedure",
   "title_zh": "存储过程",
   "text": "CREATE OR ALTER PROCEDURE dbo.GetRecentOrders\n  @CustomerId int,\n  @SinceDate  datetime2\nAS\nSELECT TOP (50)\n    o.OrderId, o.OrderDate, o.Status, o.TotalAmount\nFROM dbo.Orders AS o\nWHERE o.CustomerId = @CustomerId\n  AND o.OrderDate >= @SinceDate\nORDER BY o.OrderDate DESC;"
  }
 },
 {
  "id": 47,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have a database named DB1. The schema is stored in a Git repository as an SDK-style SQL database project.\nYou have a GitHub Actions workflow that already runs dotnet build and produces a database artifact.\nYou need to add a deployment step that publishes the .dacpac file to an Azure SQL database by using the secrets stored in GitHub repository secrets.\nWhat should you include in the workflow?",
   "options": {
    "A": "env:\n  SQL_CONNECTION_STRING: Server=tcp:myserver.database.windows.net;\n...\nsteps:\n- name: Publish\n  uses: azure/sql-action@v2\n  with:\n    action: publish\n    path: bin/Debug/db1.dacpac\n    connection-string: ${{ env.SQL_CONNECTION_STRING }}",
    "B": "- name: Publish\n  uses: azure/sql-action@v2\n  with:\n    action: extract\n    path: bin/Debug/db1.dacpac\n    connection-string: ${{ secrets.SQL_CONNECTION_STRING }}",
    "C": "- name: Publish\n  uses: azure/sql-action@v2\n  with:\n    action: publish\n    path: bin/Debug/db1.dacpac\n    connection-string: ${{ secrets.SQL_CONNECTION_STRING }}",
    "D": "- name: Publish\n  run: |\n    dotnet build db1.sqlproj \\\n      /p:TargetConnectionString=\"${{ secrets.SQL_CONNECTION_STRING }}\""
   },
   "explanation": "To deploy your .dacpac to Azure SQL using GitHub Actions, you should use the official azure/sql-\naction@v2. This action is designed specifically to take the output of your dotnet build and publish it.\nAssuming your build step is already working, here is how you structure the deployment job.\nGitHub Actions Workflow Snippet Add this job to your .yml file. It depends on your build job (usually named build) and runs on a runner with the Azure CLI installed (like ubuntu-latest).\n- name: Deploy SQL Schema uses: azure/sql-action@v2 with:\nconnection-string: ${{ secrets.AZURE_SQL_CONNECTION_STRING }} path: './bin/Release/netstandard2.1/YourDatabase.dacpac' # Path to your .dacpac action: 'publish' Incorrect:\n[Not A] Use connection-string: ${{ secrets.AZURE_SQL_CONNECTION_STRING }} [Not B] Action set to publish, not to extract.\n[Not D] Use azure/sql-action@v2.\nReference:"
  },
  "zh": {
   "stem": "您有一个名为 DB1 的数据库。其架构以 SDK 样式 SQL 数据库项目的形式存储在 Git 存储库中。\n您有一个 GitHub Actions 工作流，它已经运行 dotnet build 并生成数据库项目工件。\n您需要添加一个部署步骤，使用存储在 GitHub 存储库机密中的机密把 .dacpac 文件发布到 Azure SQL 数据库。\n您应该在工作流中包含什么？",
   "options": {
    "A": "env:\n  SQL_CONNECTION_STRING: Server=tcp:myserver.database.windows.net;\n...\nsteps:\n- name: Publish\n  uses: azure/sql-action@v2\n  with:\n    action: publish\n    path: bin/Debug/db1.dacpac\n    connection-string: ${{ env.SQL_CONNECTION_STRING }}",
    "B": "- name: Publish\n  uses: azure/sql-action@v2\n  with:\n    action: extract\n    path: bin/Debug/db1.dacpac\n    connection-string: ${{ secrets.SQL_CONNECTION_STRING }}",
    "C": "- name: Publish\n  uses: azure/sql-action@v2\n  with:\n    action: publish\n    path: bin/Debug/db1.dacpac\n    connection-string: ${{ secrets.SQL_CONNECTION_STRING }}",
    "D": "- name: Publish\n  run: |\n    dotnet build db1.sqlproj \\\n      /p:TargetConnectionString=\"${{ secrets.SQL_CONNECTION_STRING }}\""
   },
   "explanation": "要用 GitHub Actions 把 .dacpac 部署到 Azure SQL，应使用官方的 azure/sql-action@v2，它专为发布 dotnet build 的输出而设计。\n\n- name: Deploy SQL Schema\n  uses: azure/sql-action@v2\n  with:\n    connection-string: ${{ secrets.AZURE_SQL_CONNECTION_STRING }}\n    path: './bin/Release/YourDatabase.dacpac'\n    action: 'publish'\n\n错误选项：\n[A] 连接字符串写在 env 中而不是取自 secrets，机密会暴露在工作流文件里。\n[B] action 设成了 extract，而不是 publish。\n[D] 应使用 azure/sql-action@v2，而不是把连接字符串传给 dotnet build。"
  }
 },
 {
  "id": 48,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a Microsoft Fabric workspace named Workspace1 that contains a SQL database named SalesDB and an API for GraphQL item named SalesApi.\nYou have a Microsoft Entra group named SqlUsers.\nFrom Workspace1, you assign permission to SalesApi as shown in the following exhibit.\n\nThe connection to SalesDB has the connectivity option configured as shown in the following exhibit.\nSqlUsers has the Viewer role for Workspace1.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: No No - The members of SQLUsers can modify the data in SalesDB via SalesAPI.\nIn this scenario, the members of SqlUsers cannot modify the data in SalesDB via the SalesApi.\nAlthough the users have Edit permissions on the GraphQL item, the Single Sign-On (SSO) configuration means the API acts on behalf of the user's own identity. Because SqlUsers only has the Viewer role for the workspace, they lack the necessary write permissions at the data source level to perform mutations.\nAccess Requirements for GraphQL Mutations To modify data using a GraphQL API in Microsoft Fabric with SSO, a user must satisfy permissions at two distinct levels:\nAPI Level: The user needs Execute permissions (specifically the Run Queries and Mutations option) on the GraphQL API item.\nData Source Level: Because SSO passes the user's identity to the underlying database, the user must also have Write permissions (such as the Contributor role or specific SQL write access) on SalesDB.\nBox 2: No No - The members of SQLUsers can view the data in SalesDB via SalesAPI.\nMembers of the SqlUsers group cannot view data in SalesDB via SalesApi because they lack the necessary permissions on the underlying data source. See Box 1 above.\nBox 3: No No - The members of SQLUsers can change the field mappings of SalesAPI.\nMembers of the SqlUsers group cannot change the field mappings of SalesApi with the configuration described.\n\nWhile the group has been assigned Edit permissions directly on the GraphQL item, their overall workspace role of Viewer restricts their ability to perform management or design-time changes to items within that workspace.\nKey Factors for Permission Denial Workspace Role Constraints: In Microsoft Fabric, the Viewer role is strictly read-only for all workspace content. Viewers can see metadata and run reports but cannot modify items or their configurations.\nRequirement for Modification: To change field mappings or update the schema of an API for GraphQL item, a user generally requires the Contributor, Member, or Admin role at the workspace level.\nItem vs. Workspace Permissions: While item-level permissions can grant specific access (like \"Run Queries and Mutations\"), they do not override the fundamental restrictions of a workspace-level role like Viewer when it comes to administrative tasks such as mapping fields.\nReference:"
  },
  "zh": {
   "stem": "您有一个名为 Workspace1 的 Microsoft Fabric 工作区，其中包含一个名为 SalesDB 的 SQL 数据库和一个名为 SalesApi 的 API for GraphQL 项。\n您有一个名为 SqlUsers 的 Microsoft Entra 组。\n在 Workspace1 中，您按下图所示为 SalesApi 分配权限。\n与 SalesDB 的连接按下图所示配置了连接选项。\nSqlUsers 具有 Workspace1 的“查看者”角色。\n对于以下每条陈述，如果陈述为真，请选择“是”；否则选择“否”。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：否\nSqlUsers 的成员无法通过 SalesApi 修改 SalesDB 中的数据。虽然这些用户对 GraphQL 项拥有“编辑”权限，但单一登录 (SSO) 配置意味着 API 以用户自身的标识行事；由于 SqlUsers 对该工作区只有“查看者”角色，他们在数据源级别缺少执行变更所需的写权限。\n在 Microsoft Fabric 中通过 GraphQL API 配合 SSO 修改数据，用户必须同时满足两个层级的权限：\nAPI 级：对 GraphQL API 项拥有执行权限（特别是“运行查询和变更”选项）。\n数据源级：由于 SSO 会把用户标识传递给基础数据库，用户还必须对 SalesDB 拥有写权限（例如参与者角色或特定的 SQL 写入访问权限）。\n\n框 2：否\n出于同样的原因，SqlUsers 的成员也无法通过 SalesApi 查看 SalesDB 中的数据——他们在基础数据源上缺少必要权限。\n\n框 3：否\n虽然该组被直接授予了 GraphQL 项的“编辑”权限，但其工作区角色仅为“查看者”，因此无法更改 SalesApi 的字段映射。"
  },
  "boxes": [
   {
    "prompt_en": "The members of SqlUsers can modify the data in SalesDB via SalesAPI.",
    "prompt_zh": "SqlUsers 的成员可以通过 SalesAPI 修改 SalesDB 中的数据。",
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
    "prompt_en": "The members of SqlUsers can view the data in SalesDB via SalesAPI.",
    "prompt_zh": "SqlUsers 的成员可以通过 SalesAPI 查看 SalesDB 中的数据。",
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
    "prompt_en": "The members of SqlUsers can change the field mappings of SalesAPI.",
    "prompt_zh": "SqlUsers 的成员可以更改 SalesAPI 的字段映射。",
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
  "id": 49,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have an Azure SQL database that supports the OLTP workload of an order-processing application.\nDuring a 10-minute incident window, you run a dynamic management view query and discover the following:\nSession 72 is sleeping with open_transaction_count = 1.\nMultiple other sessions show blocking_session_id = 72 in sys.dm_exec_requests.\nsys.dm_exec_input_buffer(72, NULL) returns only BEGIN TRANSACTION UPDATE Sales.Orders.\nUsers report that updates to Sales.Orders intermittently time out during the incident window. The timeouts stop only after you manually terminate session 72.\nWhat is a possible cause of the blocking?",
   "options": {
    "A": "A long-running SELECT statement is blocking writers.",
    "B": "Session 72 caused a deadlock.",
    "C": "An explicit transaction was started but not committed or rolled back.",
    "D": "A lock escalation occurred."
   },
   "explanation": "This sounds like  a classic orphaned transaction scenario.\nThe session was in a sleeping state with an open transaction, meaning the application sent the BEGIN TRANSACTION and the UPDATE statement, but then dropped the ball. Because SQL Server never received a COMMIT or ROLLBACK, it held onto the exclusive (X) locks on the Sales Order rows indefinitely.\nAny other session trying to touch those same rows was forced to wait, leading to the blocking and eventual timeouts reported by your users. Manually killing the session forced a rollback, finally releasing the locks.\nReference:"
  },
  "zh": {
   "stem": "您有一个支持订单处理应用程序 OLTP 工作负载的 Azure SQL 数据库。\n在一个 10 分钟的事件窗口内，您运行动态管理视图查询并发现：\n会话 72 处于 sleeping 状态，open_transaction_count = 1。\n在 sys.dm_exec_requests 中，多个其他会话显示 blocking_session_id = 72。\nsys.dm_exec_input_buffer(72, NULL) 只返回 BEGIN TRANSACTION UPDATE Sales.Orders。\n用户报告在该事件窗口内对 Sales.Orders 的更新间歇性超时。只有在您手动终止会话 72 之后，超时才停止。\n阻塞的可能原因是什么？",
   "options": {
    "A": "长时间运行的 SELECT 语句阻塞了写入者。",
    "B": "会话 72 导致了死锁。",
    "C": "启动了显式事务，但既未提交也未回滚。",
    "D": "发生了锁升级。"
   },
   "explanation": "这是典型的“孤立事务”场景。\n该会话处于 sleeping 状态却有一个打开的事务，说明应用程序发送了 BEGIN TRANSACTION 和 UPDATE 语句后就没有下文了。由于 SQL Server 一直没有收到 COMMIT 或 ROLLBACK，它无限期地持有 Sales.Orders 行上的排他 (X) 锁。\n任何其他试图访问这些行的会话都被迫等待，从而造成阻塞并最终导致用户报告的超时。手动终止该会话强制触发回滚，锁才最终释放。"
  }
 },
 {
  "id": 50,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a SQL database in Microsoft Fabric that contains the following functions:\nA multi-statement table-valued function (TVF) named Sales.mstvf_OrderStatus() that returns order status information A scalar user-defined function (UDF) named dbo.ufn_GetTaxMultiplier (@TaxAmt money,\n\n@StateCode char(2)) that returns a numeric multiplier used in tax calculations Reporting queries frequently join Sales.mstvf_OrderStatus() to a table named Sales.SalesOrderHeader and return large result sets. A performance review shows that the queries produce inconsistent execution plans.\nDuring a code review, a developer discovers that the following Transact-SQL statement produced an error.\nEXEC @ret = ufn_GetTaxMultiplier @TaxAmt = 100.00, @StateCode = ‘WA’;\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Yes Yes - You can use GETDATE() in dbo.ufn.GetTaxMultiplier to produce nondeterministic results.\nThe Scalar UDF & Nondeterminism Your dbo.ufn_GetTaxMultiplier becomes \"non-deterministic\" because it uses GETDATE().\nRow-by-Row Execution: Scalar UDFs often prevent parallel execution. Because this function is non-\ndeterministic, the engine must evaluate it for every single row in your result set, which is devastating for \"large result sets.\" Inlining Constraints: In modern SQL engines, Scalar UDFs can sometimes be \"inlined\" automatically.\nhowever, using certain side-effecting or non-deterministic functions (like GETDATE()) can disqualify the UDF from being inlined, forcing it to run in a slow, serial fashion.\nSolution: Pass the date as a parameter instead of calling GETDATE() inside the function, or move the tax logic into a CASE statement or a lookup table join within the main query.\n\nNote:\nNondeterminism prevents caching and certain optimizations. Should move GETDATE() outside the function and pass it as a variable.\nBox 2: Yes Yes - Rewriting Sales.mstvg_OrderStatus() as an inline table TVF will reduce the number of inconsistent executions plans.\nThe Multi-Statement TVF Problem The Sales.mstvf_OrderStatus() function is likely the primary cause of the inconsistent execution plans.\nThe \"Black Box\" Effect: Unlike Inline TVFs, Multi-Statement TVFs (MSTVFs) are opaque to the optimizer.\nThe engine cannot \"see\" inside the function to understand the cardinality (number of rows) it will return.\nFixed Cardinality: In many SQL versions, MSTVFs are assigned a fixed, low-row estimate (often 1 or 100 rows). When you join this to a large table like SalesOrderHeader, the optimizer chooses a Nested Loop Join based on that low estimate. If the function actually returns thousands of rows, the query performance collapses.\nSolution: Convert the MSTVF to an Inline Table-Valued Function (ITVF). ITVFs are treated like views; the optimizer expands them into the main query, allowing for accurate statistics and better join choices (like Hash Joins).\nBox 3: Yes Yes - Replacing ufn_GetTaxMultiplier with dbo.ufn_GetTaxMultiplier in the EXEC function statement will resolve the error.\nFixing the T-SQL Error The error occurs because scalar functions must be called using a two-part name (schema.function) and cannot be executed like a stored procedure using the EXEC keyword if you want to capture the return value into a variable.\nThe Fix:\nUse a simple SET or SELECT statement:\nDECLARE @ret NUMERIC(18,4);\n-- Correct way to call a scalar UDF SET @ret = dbo.ufn_GetTaxMultiplier(100.00, 'WA');\nReference:"
  },
  "zh": {
   "stem": "您在 Microsoft Fabric 中有一个 SQL 数据库，其中包含以下函数：\n一个名为 Sales.mstvf_OrderStatus() 的多语句表值函数 (TVF)，返回订单状态信息\n一个名为 dbo.ufn_GetTaxMultiplier (@TaxAmt money, @StateCode char(2)) 的标量用户定义函数 (UDF)，返回税费计算中使用的数值乘数\n报表查询经常把 Sales.mstvf_OrderStatus() 与名为 Sales.SalesOrderHeader 的表联接，并返回大型结果集。性能审查显示这些查询会生成不一致的执行计划。\n在代码审查期间，一位开发人员发现以下 Transact-SQL 语句产生了错误：\nEXEC @ret = ufn_GetTaxMultiplier @TaxAmt = 100.00, @StateCode = 'WA';\n对于以下每条陈述，如果陈述为真，请选择“是”；否则选择“否”。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：是\n可以在 dbo.ufn_GetTaxMultiplier 中使用 GETDATE() 来产生非确定性结果。\n使用 GETDATE() 会让该标量 UDF 变成“非确定性”函数。\n逐行执行：标量 UDF 常常阻止并行执行；由于函数是非确定性的，引擎必须对结果集中的每一行都求值一次，这对“大型结果集”是灾难性的。\n内联限制：现代 SQL 引擎有时能自动内联标量 UDF，但使用具有副作用或非确定性的函数（如 GETDATE()）会使 UDF 失去内联资格，被迫以缓慢的串行方式运行。\n解决办法：把日期作为参数传入，或把税费逻辑改写为主查询中的 CASE 语句或查找表联接。\n\n框 2：是\n把 Sales.mstvf_OrderStatus() 重写为内联表值函数会减少不一致的执行计划：多语句 TVF 的基数估计固定且不准确，内联 TVF 则能让优化器看到真实的统计信息。\n\n框 3：是\n在 EXEC 中把 ufn_GetTaxMultiplier 改为使用两部分名称 dbo.ufn_GetTaxMultiplier 可解决该错误——调用标量函数时必须使用架构限定名称。"
  },
  "boxes": [
   {
    "prompt_en": "You can use GETDATE() in dbo.ufn_GetTaxMultiplier to produce nondeterministic results.",
    "prompt_zh": "您可以在 dbo.ufn_GetTaxMultiplier 中使用 GETDATE() 来产生非确定性结果。",
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
    "prompt_en": "Rewriting Sales.mstvf_OrderStatus() as an inline table TVF will reduce the number of inconsistent execution plans.",
    "prompt_zh": "将 Sales.mstvf_OrderStatus() 重写为内联表值函数 (TVF) 会减少不一致执行计划的数量。",
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
    "prompt_en": "Replacing ufn_GetTaxMultiplier with dbo.ufn_GetTaxMultiplier in the EXEC function statement will resolve the error.",
    "prompt_zh": "在 EXEC 函数语句中将 ufn_GetTaxMultiplier 替换为 dbo.ufn_GetTaxMultiplier 将解决该错误。",
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
  "id": 51,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have an Azure SQL database named SalesDB on a logical server named sales-sql01.\nYou have an Azure App Service web app named OrderApi that connects to SalesDB by using SQL authentication.\nYou enable a user-assigned managed identity named OrderApi-Id for OrderApi.\nYou need to configure OrderApi to connect to SalesDB by using Microsoft Entra authentication. The managed identity must have read and write permissions to SalesDB.\nWhich Transact-SQL statements should you run in SalesDB?",
   "options": {
    "A": "CREATE LOGIN [OrderApi-Id] FROM EXTERNAL PROVIDER;\nALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];\nALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];",
    "B": "CREATE USER [OrderApi-Id] WITH PASSWORD = 'P@ssw0rd!';\nALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];\nALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];",
    "C": "CREATE USER [OrderApi-Id] FROM EXTERNAL PROVIDER;\nALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];\nALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];",
    "D": "CREATE LOGIN [OrderApi-Id] WITH PASSWORD = 'P@ssw0rd!';\nALTER SERVER ROLE sysadmin ADD MEMBER [OrderApi-Id];"
   },
   "explanation": "Create the Database User and Grant Permissions You must use Transact-SQL (T-SQL) to create a \"contained database user\" that represents the managed identity and assign it to the appropriate database roles for read/write access.\n\nConnect to the database using an account with Entra Admin privileges (e.g., via Azure Data Studio or the Azure portal's Query editor).\nExecute the following T-SQL commands in the context of the specific database (not the master database):\n\n-- Create a user for the User-Assigned Managed Identity\n-- Replace  with the exact name of your user-assigned managed identity\nCREATE USER [] FROM EXTERNAL PROVIDER;\n-- Add the user to the db_datareader role (Read permissions)\nALTER ROLE db_datareader ADD MEMBER [];\n-- Add the user to the db_datawriter role (Write permissions)\nALTER ROLE db_datawriter ADD MEMBER [];\nReference:"
  },
  "zh": {
   "stem": "您在名为 sales-sql01 的逻辑服务器上有一个名为 SalesDB 的 Azure SQL 数据库。\n您有一个名为 OrderApi 的 Azure App Service Web 应用，它使用 SQL 身份验证连接到 SalesDB。\n您为 OrderApi 启用了名为 OrderApi-Id 的用户分配托管标识。\n您需要配置 OrderApi 使用 Microsoft Entra 身份验证连接到 SalesDB。该托管标识必须对 SalesDB 具有读写权限。\n您应该在 SalesDB 中运行哪些 Transact-SQL 语句？",
   "options": {
    "A": "CREATE LOGIN [OrderApi-Id] FROM EXTERNAL PROVIDER;\nALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];\nALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];",
    "B": "CREATE USER [OrderApi-Id] WITH PASSWORD = 'P@ssw0rd!';\nALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];\nALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];",
    "C": "CREATE USER [OrderApi-Id] FROM EXTERNAL PROVIDER;\nALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];\nALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];",
    "D": "CREATE LOGIN [OrderApi-Id] WITH PASSWORD = 'P@ssw0rd!';\nALTER SERVER ROLE sysadmin ADD MEMBER [OrderApi-Id];"
   },
   "explanation": "必须使用 T-SQL 创建一个代表该托管标识的“包含数据库用户”，并把它加入相应的数据库角色以获得读/写访问权限。\n\n使用具有 Entra 管理员权限的账户连接数据库，并在该数据库（而非 master）的上下文中执行：\n-- 为用户分配的托管标识创建用户\nCREATE USER [OrderApi-Id] FROM EXTERNAL PROVIDER;\n-- 加入 db_datareader 角色（读权限）\nALTER ROLE db_datareader ADD MEMBER [OrderApi-Id];\n-- 加入 db_datawriter 角色（写权限）\nALTER ROLE db_datawriter ADD MEMBER [OrderApi-Id];\n\nAzure SQL Database 不支持 CREATE LOGIN ... FROM EXTERNAL PROVIDER 用于此场景；带密码的写法不是无密码的 Entra 身份验证；sysadmin 服务器角色权限过大且不适用。"
  }
 },
 {
  "id": 52,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have an Azure SQL database that contains a column named Notes.\nA security review discovers that Notes contains sensitive data.\nYou need to ensure that the data is protected so that neither the stored values nor the query inputs reveal information about the actual data. The solution must prevent a user from inferring relationships or repetitions in the data based on the encrypted output.\nWhich should you use?",
   "options": {
    "A": "Always Encrypted with secure enclaves",
    "B": "Always Encrypted with randomized encryption",
    "C": "row-level security (RLS)",
    "D": "Always Encrypted with deterministic encryption"
   },
   "explanation": "To protect sensitive Azure SQL database columns so that neither stored values nor query inputs reveal actual data—and to prevent inference of relationships/repetitions—Always Encrypted with Randomized Encryption is recommended. This approach ensures that data is encrypted on the client side, and the database engine never handles plaintext data or keys.\nKey Recommendations:\nAlways Encrypted (Randomized): Use randomized encryption, which produces different encrypted values (ciphertext) for the same plaintext, preventing pattern analysis.\n\nAzure Key Vault: Store column encryption keys in Azure Key Vault for secure, manageable key storage.\nClient-side Encryption: Data is encrypted/decrypted within the application's memory using the SQL client driver, ensuring the database engine or high-privileged users cannot access the data.\n\nIncorrect:\n[Not D] Deterministic Encryption: Allows matching queries (e.g., WHERE Column = 'Value'), but allows attackers to infer patterns and repetitions in data.\nTransparent Data Encryption (TDE): Protects data at rest, but SQL users can still see plaintext data,\nviolating the requirement.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 Notes 的列。\n安全审查发现 Notes 包含敏感数据。\n您需要确保数据受到保护，使存储的值和查询输入都不会泄露实际数据的信息。该解决方案必须防止用户根据加密输出推断数据中的关系或重复。\n您应该使用什么？",
   "options": {
    "A": "带安全 enclave 的 Always Encrypted",
    "B": "使用随机化加密的 Always Encrypted",
    "C": "行级安全性 (RLS)",
    "D": "使用确定性加密的 Always Encrypted"
   },
   "explanation": "要保护 Azure SQL 数据库中的敏感列，使存储值和查询输入都不泄露实际数据，并防止推断出关系/重复，推荐使用带随机化加密的 Always Encrypted。数据在客户端加密，数据库引擎永远不接触明文数据或密钥。\n\n要点：\n随机化加密：相同明文会产生不同的密文，从而阻止模式分析。\nAzure Key Vault：把列加密密钥存放在 Key Vault，实现安全、可管理的密钥存储。\n客户端加密：数据在应用程序内存中由 SQL 客户端驱动程序加解密，数据库引擎或高权限用户都无法访问明文。\n\n错误选项：\n[D] 确定性加密允许等值匹配查询（例如 WHERE Column = 'Value'），但攻击者可以借此推断数据中的模式和重复，不满足要求。"
  }
 },
 {
  "id": 53,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have an Azure SQL database that stores order data.\nA reporting query aggregates monthly revenue per customer runs frequently.\nYou need to reduce how long it takes to retrieve the calculated values. The solution must NOT alter any underlying table structure.\nWhat should you do?",
   "options": {
    "A": "Create a view by using ORDER BY without TOP, and then create a unique clustered index on the view.",
    "B": "Create a view without using WITH SCHEMABINDING, and then create a nonclustered index on the view.",
    "C": "Create a view by using GROUP BY, and then create a unique clustered index on the view.",
    "D": "Create a view by using WITH SCHEMABINDING, include COUNT_BIG(*), and then create a unique clustered index on the view."
   },
   "explanation": "Creating an indexed view using WITH SCHEMABINDING, including COUNT_BIG(*), and creating a unique clustered index is a valid and effective approach to significantly improve the performance of your frequent reporting query without altering the underlying table structure.\nThis process materializes the aggregated data and stores it physically in the database, so the query optimizer can read from the precomputed view rather than rescanning the base tables every time the query runs.\nReference:"
  },
  "zh": {
   "stem": "您有一个存储订单数据的 Azure SQL 数据库。\n一个按客户聚合每月收入的报表查询运行得很频繁。\n您需要缩短检索这些计算值所需的时间。该解决方案不得更改任何基础表结构。\n您应该怎么做？",
   "options": {
    "A": "创建使用 ORDER BY（不带 TOP）的视图，然后在该视图上创建唯一聚集索引。",
    "B": "创建不使用 WITH SCHEMABINDING 的视图，然后在该视图上创建非聚集索引。",
    "C": "创建使用 GROUP BY 的视图，然后在该视图上创建唯一聚集索引。",
    "D": "创建使用 WITH SCHEMABINDING 的视图，包含 COUNT_BIG(*)，然后在该视图上创建唯一聚集索引。"
   },
   "explanation": "使用 WITH SCHEMABINDING、包含 COUNT_BIG(*) 并创建唯一聚集索引来建立索引视图，是在不更改基础表结构的前提下显著提升该高频报表查询性能的有效方法。\n这一过程会把聚合数据物化并物理存储在数据库中，查询优化器可以直接读取预先计算好的视图，而不必每次查询都重新扫描基表。\n\n注意：创建索引视图的必要条件包括 WITH SCHEMABINDING，以及在包含聚合的视图中必须有 COUNT_BIG(*)；因此其他选项都不成立。"
  }
 },
 {
  "id": 54,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a GitHub Actions workflow that builds and deploys an Azure SQL database. The schema is stored in a GitHub repository as an SDK-style SQL database project.\nFollowing a code review, you discover that you need to generate a report that shows whether the production schema has diverged from the model in source control.\nWhich action should you add to the pipeline?",
   "options": {
    "A": "SqlPackage.exe /Action:DriftReport",
    "B": "SqlPackage.exe /Action:DeployReport",
    "C": "SqlPackage.exe /Action:Extract",
    "D": "SqlPackage.exe /Action:Script"
   },
   "explanation": "To generate a report showing the differences between your source control and the production database,\nyou should use the sql-action (officially Azure/sql-action@v2).\nSpecifically, you need to set the action parameter to DriftReport.\nWhen configured this way, the action compares your .dacpac file (built from your SQL project) against the target production database. It generates an HTML or XML report detailing any \"drift\"—changes made directly to production that aren't in your code.\nReference:"
  },
  "zh": {
   "stem": "您有一个用于生成和部署 Azure SQL 数据库的 GitHub Actions 工作流。其架构以 SDK 样式 SQL 数据库项目的形式存储在 GitHub 存储库中。\n在一次代码审查之后，您发现需要生成一份报告，显示生产架构是否已经与源代码管理中的模型产生偏差。\n您应该在管道中添加哪个操作？",
   "options": {
    "A": "SqlPackage.exe /Action:DriftReport",
    "B": "SqlPackage.exe /Action:DeployReport",
    "C": "SqlPackage.exe /Action:Extract",
    "D": "SqlPackage.exe /Action:Script"
   },
   "explanation": "要生成显示源代码管理与生产数据库之间差异的报告，应把 action 参数设为 DriftReport。\n这样配置后，该操作会把（由 SQL 项目生成的）.dacpac 文件与目标生产数据库进行比较，生成 HTML 或 XML 报告，详细列出所有“偏差”——即直接在生产环境中做出、但代码中没有的更改。\n\nDeployReport 报告的是即将执行的部署更改，Extract 提取架构，Script 生成部署脚本，都不是偏差报告。"
  }
 },
 {
  "id": 55,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a SQL database in Microsoft Fabric that contains a table named dbo.Orders. dbo.Orders has a clustered index, contains three years of data, and is partitioned by a column named OrderDate by month.\nYou need to remove all the rows for the oldest month. The solution must minimize the impact on other queries that access the data in dbo.Orders.\nSolution: Identify the partition number for the oldest month, and then run the following Transact-SQL statement.\nTRUNCATE TABLE dbo.Orders WITH (PARTITIONS (partition number));\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* Identify the partition number for the oldest month, and then run the following Transact-SQL statement.\nTRUNCATE TABLE dbo.Orders WITH (PARTITIONS (partition number));\nThe best Transact-SQL statement to remove all rows for the oldest month while minimizing the impact on other queries is TRUNCATE TABLE with a WITH (PARTITIONS (...)) clause.\nWhy TRUNCATE TABLE ... WITH (PARTITIONS (...)) is Best Efficiency: TRUNCATE TABLE is a Data Definition Language (DDL) operation that removes data by deallocating the data pages, which is a metadata operation and is very fast, regardless of the amount of data in the partition.\nMinimal Logging: It uses less transaction log space compared to a DELETE statement, which logs each row deletion individually.\nLow Impact on Concurrency: It performs a quick, partition-specific operation. A row-by-row DELETE would\n\nbe a long-running transaction and could cause locking and blocking issues for other queries accessing the table.\nData Integrity: Because the table has a clustered index and is partitioned by the same column (aligned indexes), the TRUNCATE PARTITION operation is a fast, partition-level maintenance operation that targets only that specific data subset.\n\nIncorrect:\n* : Identify the partition scheme for the oldest month, and then run the following Transact-SQL statement.\nALTER TABLE dbo.Orders DROP PARTITION SCHEME (partition_scheme_name);\nThe DROP PARTITION SCHEME statement removes the partition scheme object from the database but does not remove the data itself or free up the space, and it requires all tables to be moved off the scheme first, which is a complex operation. This does not meet the goal of removing the data efficiently.\n* Run the following Transact-SQL statement.\nDELETE FROM dbo.Orders WHERE OrderDate < DATEADD(month, -36, SYSUTCDATETIME());\nA standard DELETE statement, even with a WHERE clause that uses the partition column, can be a time-\nconsuming, logged operation that causes locking and blocking on the main table, negatively impacting performance.\nReference:"
  },
  "zh": {
   "stem": "注意：本题属于一系列呈现相同场景的题目。系列中的每道题都包含一个可能满足既定目标的独特解决方案。有些题组可能有多个正确解决方案，有些可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该题。因此，这些题目不会出现在复查屏幕中。\n\n您在 Microsoft Fabric 中有一个 SQL 数据库，其中包含一个名为 dbo.Orders 的表。dbo.Orders 有一个聚集索引，包含三年的数据，并按名为 OrderDate 的列以月份分区。\n您需要删除最早那个月的所有行。该解决方案必须最大限度地减少对访问 dbo.Orders 数据的其他查询的影响。\n解决方案：确定最早月份的分区编号，然后运行以下 Transact-SQL 语句。\nTRUNCATE TABLE dbo.Orders\nWITH (PARTITIONS (分区编号));\n这是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "正确：确定最早月份的分区编号，然后运行 TRUNCATE TABLE dbo.Orders WITH (PARTITIONS (分区编号));\n\n为什么 TRUNCATE TABLE ... WITH (PARTITIONS (...)) 最佳：\n效率：TRUNCATE TABLE 是 DDL 操作，通过释放数据页来删除数据，属于元数据操作，无论分区中数据量多大都非常快。\n最小日志记录：相比逐行记录删除的 DELETE 语句，它占用的事务日志空间少得多。\n对并发影响小：它执行的是针对特定分区的快速操作；逐行 DELETE 则是长事务，会给访问该表的其他查询带来锁定和阻塞问题。"
  }
 },
 {
  "id": 56,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a SQL database in Microsoft Fabric that contains a table named dbo.Orders. dbo.Orders has a clustered index, contains three years of data, and is partitioned by a column named OrderDate by month.\nYou need to remove all the rows for the oldest month. The solution must minimize the impact on other queries that access the data in dbo.Orders.\nSolution: Run the following Transact-SQL statement.\nDELETE FROM dbo.Orders WHERE OrderDate < DATEADD(month, -36, SYSUTCDATETIME());\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* Identify the partition number for the oldest month, and then run the following Transact-SQL statement.\nTRUNCATE TABLE dbo.Orders WITH (PARTITIONS (partition number));\n\nThe best Transact-SQL statement to remove all rows for the oldest month while minimizing the impact on other queries is TRUNCATE TABLE with a WITH (PARTITIONS (...)) clause.\nWhy TRUNCATE TABLE ... WITH (PARTITIONS (...)) is Best Efficiency: TRUNCATE TABLE is a Data Definition Language (DDL) operation that removes data by deallocating the data pages, which is a metadata operation and is very fast, regardless of the amount of data in the partition.\nMinimal Logging: It uses less transaction log space compared to a DELETE statement, which logs each row deletion individually.\nLow Impact on Concurrency: It performs a quick, partition-specific operation. A row-by-row DELETE would be a long-running transaction and could cause locking and blocking issues for other queries accessing the table.\nData Integrity: Because the table has a clustered index and is partitioned by the same column (aligned indexes), the TRUNCATE PARTITION operation is a fast, partition-level maintenance operation that targets only that specific data subset.\n\nIncorrect:\n* : Identify the partition scheme for the oldest month, and then run the following Transact-SQL statement.\nALTER TABLE dbo.Orders DROP PARTITION SCHEME (partition_scheme_name);\nThe DROP PARTITION SCHEME statement removes the partition scheme object from the database but does not remove the data itself or free up the space, and it requires all tables to be moved off the scheme first, which is a complex operation. This does not meet the goal of removing the data efficiently.\n* Run the following Transact-SQL statement.\nDELETE FROM dbo.Orders WHERE OrderDate < DATEADD(month, -36, SYSUTCDATETIME());\nA standard DELETE statement, even with a WHERE clause that uses the partition column, can be a time-\nconsuming, logged operation that causes locking and blocking on the main table, negatively impacting performance.\nReference:"
  },
  "zh": {
   "stem": "注意：本题属于一系列呈现相同场景的题目。系列中的每道题都包含一个可能满足既定目标的独特解决方案。有些题组可能有多个正确解决方案，有些可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该题。因此，这些题目不会出现在复查屏幕中。\n\n您在 Microsoft Fabric 中有一个 SQL 数据库，其中包含一个名为 dbo.Orders 的表。dbo.Orders 有一个聚集索引，包含三年的数据，并按名为 OrderDate 的列以月份分区。\n您需要删除最早那个月的所有行。该解决方案必须最大限度地减少对访问 dbo.Orders 数据的其他查询的影响。\n解决方案：运行以下 Transact-SQL 语句。\nDELETE FROM dbo.Orders\nWHERE OrderDate < DATEADD(month, -36, SYSUTCDATETIME());\n这是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "不满足。正确做法是：确定最早月份的分区编号，然后运行 TRUNCATE TABLE dbo.Orders WITH (PARTITIONS (分区编号));\n\n为什么 TRUNCATE TABLE ... WITH (PARTITIONS (...)) 更好：\n效率：TRUNCATE TABLE 是 DDL 操作，通过释放数据页删除数据，属于元数据操作，速度极快。\n最小日志记录：DELETE 会逐行记录日志，占用大量事务日志空间。\n对并发影响小：逐行 DELETE 是长时间运行的事务，会对访问该表的其他查询造成锁定和阻塞。因此本方案不满足“最大限度减少影响”的要求。"
  }
 },
 {
  "id": 57,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a SQL database in Microsoft Fabric that contains a table named dbo.Orders. dbo.Orders has a clustered index, contains three years of data, and is partitioned by a column named OrderDate by month.\nYou need to remove all the rows for the oldest month. The solution must minimize the impact on other queries that access the data in dbo.Orders.\nSolution: Identify the partition scheme for the oldest month, and then run the following Transact-SQL statement.\nALTER TABLE dbo.Orders DROP PARTITION SCHEME (partition_scheme_name);\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* Identify the partition number for the oldest month, and then run the following Transact-SQL statement.\nTRUNCATE TABLE dbo.Orders WITH (PARTITIONS (partition number));\nThe best Transact-SQL statement to remove all rows for the oldest month while minimizing the impact on other queries is TRUNCATE TABLE with a WITH (PARTITIONS (...)) clause.\nWhy TRUNCATE TABLE ... WITH (PARTITIONS (...)) is Best Efficiency: TRUNCATE TABLE is a Data Definition Language (DDL) operation that removes data by deallocating the data pages, which is a metadata operation and is very fast, regardless of the amount of data in the partition.\nMinimal Logging: It uses less transaction log space compared to a DELETE statement, which logs each row deletion individually.\nLow Impact on Concurrency: It performs a quick, partition-specific operation. A row-by-row DELETE would be a long-running transaction and could cause locking and blocking issues for other queries accessing the table.\nData Integrity: Because the table has a clustered index and is partitioned by the same column (aligned indexes), the TRUNCATE PARTITION operation is a fast, partition-level maintenance operation that targets only that specific data subset.\nIncorrect:\n* : Identify the partition scheme for the oldest month, and then run the following Transact-SQL statement.\nALTER TABLE dbo.Orders DROP PARTITION SCHEME (partition_scheme_name);\nThe DROP PARTITION SCHEME statement removes the partition scheme object from the database but does not remove the data itself or free up the space, and it requires all tables to be moved off the scheme first, which is a complex operation. This does not meet the goal of removing the data efficiently.\n* Run the following Transact-SQL statement.\nDELETE FROM dbo.Orders WHERE OrderDate < DATEADD(month, -36, SYSUTCDATETIME());\nA standard DELETE statement, even with a WHERE clause that uses the partition column, can be a time-\nconsuming, logged operation that causes locking and blocking on the main table, negatively impacting performance.\nReference:"
  },
  "zh": {
   "stem": "注意：本题属于一系列呈现相同场景的题目。系列中的每道题都包含一个可能满足既定目标的独特解决方案。有些题组可能有多个正确解决方案，有些可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该题。因此，这些题目不会出现在复查屏幕中。\n\n您在 Microsoft Fabric 中有一个 SQL 数据库，其中包含一个名为 dbo.Orders 的表。dbo.Orders 有一个聚集索引，包含三年的数据，并按名为 OrderDate 的列以月份分区。\n您需要删除最早那个月的所有行。该解决方案必须最大限度地减少对访问 dbo.Orders 数据的其他查询的影响。\n解决方案：确定最早月份的分区方案，然后运行以下 Transact-SQL 语句。\nALTER TABLE dbo.Orders\nDROP PARTITION SCHEME (partition_scheme_name);\n这是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "不满足。该语法本身也不成立——分区方案不是这样删除的，而且删除分区方案会影响整个表的物理结构。\n\n正确做法：确定最早月份的分区编号，然后运行\nTRUNCATE TABLE dbo.Orders WITH (PARTITIONS (分区编号));\n效率：TRUNCATE TABLE 是 DDL 操作，通过释放数据页删除数据，属于元数据操作，速度极快。\n最小日志记录：占用的事务日志空间远少于逐行记录的 DELETE。\n对并发影响小：只针对特定分区执行快速操作，不会造成长事务的锁定与阻塞。"
  }
 },
 {
  "id": 58,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an SDK-style SQL database project stored in a Git repository. The project targets an Azure SQL\n\ndatabase.\nThe CI build fails with unresolved reference errors when the project references system objects.\nYou need to update the SQL database project to ensure that dotnet build validates successfully by including the correct system objects in the database model for Azure SQL Database.\nSolution: Add the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package to the project.\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* Add the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package to the project.\nTo resolve system reference errors in an SDK-style SQL project targeting Azure SQL Database, you need to add a reference to the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package.\nIn your .sqlproj file, include the following item group:\n<ItemGroup> <PackageReference Include=\"Microsoft.SqlServer.Dacpacs.Azure.Master\" Version=\"1.60.0\" /> </ItemGroup> Why this works:\nSystem Objects: Standard SDK-style projects don't automatically include system views (like sys.database_principals or sys.dm_db_resource_stats). This package provides the necessary metadata for the compiler.\nAzure Specifics: It includes Azure-only system objects that aren't present in the standard master database dacpac used for on-premises SQL Server.\nCI/CD Friendly: Since it is a NuGet package, the dotnet build command will automatically restore it during the CI process without requiring manual file paths or local installations of Visual Studio.\nIncorrect:\n* Add an artifact reference to the Azure SQL Database master.dacpac file.\n* Add the Microsoft.SqlServer.Dacpacs.Master NuGet package to the project.\nReference:"
  },
  "zh": {
   "stem": "注意：本题属于一系列呈现相同场景的题目。系列中的每道题都包含一个可能满足既定目标的独特解决方案。有些题组可能有多个正确解决方案，有些可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该题。因此，这些题目不会出现在复查屏幕中。\n\n您有一个存储在 Git 存储库中的 SDK 样式 SQL 数据库项目。该项目以 Azure SQL 数据库为目标。\n当项目引用系统对象时，CI 生成因未解析的引用错误而失败。\n您需要更新该 SQL 数据库项目，通过在 Azure SQL Database 的数据库模型中包含正确的系统对象，确保 dotnet build 验证成功。\n解决方案：向项目添加 Microsoft.SqlServer.Dacpacs.Azure.Master NuGet 包。\n这是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "满足。要解决以 Azure SQL Database 为目标的 SDK 样式 SQL 项目中的系统引用错误，需要添加对 Microsoft.SqlServer.Dacpacs.Azure.Master NuGet 包的引用。\n\n在 .sqlproj 文件中加入：\n<ItemGroup>\n  <PackageReference Include=\"Microsoft.SqlServer.Dacpacs.Azure.Master\" Version=\"1.60.0\" />\n</ItemGroup>\n\n原因：\n系统对象：标准的 SDK 样式项目不会自动包含系统视图（如 sys.database_principals 或 sys.dm_db_resource_stats），该包为编译器提供了必要的元数据。\nAzure 特有：它包含本地 SQL Server 的标准 master dacpac 中没有的、仅 Azure 才有的系统对象。\n适合 CI/CD：由于是 NuGet 包，dotnet build 会自动还原它。"
  }
 },
 {
  "id": 59,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an SDK-style SQL database project stored in a Git repository. The project targets an Azure SQL database.\nThe CI build fails with unresolved reference errors when the project references system objects.\nYou need to update the SQL database project to ensure that dotnet build validates successfully by including the correct system objects in the database model for Azure SQL Database.\nSolution: Add the Microsoft.SqlServer.Dacpacs.Master NuGet package to the project.\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* Add the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package to the project.\nTo resolve system reference errors in an SDK-style SQL project targeting Azure SQL Database, you need to add a reference to the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package.\nIn your .sqlproj file, include the following item group:\n<ItemGroup> <PackageReference Include=\"Microsoft.SqlServer.Dacpacs.Azure.Master\" Version=\"1.60.0\" /> </ItemGroup> Why this works:\nSystem Objects: Standard SDK-style projects don't automatically include system views (like sys.database_principals or sys.dm_db_resource_stats). This package provides the necessary metadata for the compiler.\nAzure Specifics: It includes Azure-only system objects that aren't present in the standard master database dacpac used for on-premises SQL Server.\nCI/CD Friendly: Since it is a NuGet package, the dotnet build command will automatically restore it during the CI process without requiring manual file paths or local installations of Visual Studio.\nIncorrect:\n* Add an artifact reference to the Azure SQL Database master.dacpac file.\n* Add the Microsoft.SqlServer.Dacpacs.Master NuGet package to the project.\nReference:"
  },
  "zh": {
   "stem": "注意：本题属于一系列呈现相同场景的题目。系列中的每道题都包含一个可能满足既定目标的独特解决方案。有些题组可能有多个正确解决方案，有些可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该题。因此，这些题目不会出现在复查屏幕中。\n\n您有一个存储在 Git 存储库中的 SDK 样式 SQL 数据库项目。该项目以 Azure SQL 数据库为目标。\n当项目引用系统对象时，CI 生成因未解析的引用错误而失败。\n您需要更新该 SQL 数据库项目，通过在 Azure SQL Database 的数据库模型中包含正确的系统对象，确保 dotnet build 验证成功。\n解决方案：向项目添加 Microsoft.SqlServer.Dacpacs.Master NuGet 包。\n这是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "不满足。Microsoft.SqlServer.Dacpacs.Master 对应的是本地 SQL Server 的 master 数据库，缺少仅 Azure 才有的系统对象。\n\n正确做法是添加 Microsoft.SqlServer.Dacpacs.Azure.Master NuGet 包：\n<ItemGroup>\n  <PackageReference Include=\"Microsoft.SqlServer.Dacpacs.Azure.Master\" Version=\"1.60.0\" />\n</ItemGroup>\n它为编译器提供 Azure SQL Database 的系统视图（如 sys.database_principals、sys.dm_db_resource_stats）元数据，且作为 NuGet 包可由 dotnet build 自动还原。"
  }
 },
 {
  "id": 60,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an SDK-style SQL database project stored in a Git repository. The project targets an Azure SQL database.\nThe CI build fails with unresolved reference errors when the project references system objects.\nYou need to update the SQL database project to ensure that dotnet build validates successfully by including the correct system objects in the database model for Azure SQL Database.\nSolution: Add an artifact reference to the Azure SQL Database master.dacpac file.\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* Add the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package to the project.\nTo resolve system reference errors in an SDK-style SQL project targeting Azure SQL Database, you need to add a reference to the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package.\nIn your .sqlproj file, include the following item group:\n<ItemGroup> <PackageReference Include=\"Microsoft.SqlServer.Dacpacs.Azure.Master\" Version=\"1.60.0\" /> </ItemGroup> Why this works:\nSystem Objects: Standard SDK-style projects don't automatically include system views (like sys.database_principals or sys.dm_db_resource_stats). This package provides the necessary metadata for the compiler.\nAzure Specifics: It includes Azure-only system objects that aren't present in the standard master database dacpac used for on-premises SQL Server.\nCI/CD Friendly: Since it is a NuGet package, the dotnet build command will automatically restore it during the CI process without requiring manual file paths or local installations of Visual Studio.\nIncorrect:\n* Add an artifact reference to the Azure SQL Database master.dacpac file.\n* Add the Microsoft.SqlServer.Dacpacs.Master NuGet package to the project.\nReference:"
  },
  "zh": {
   "stem": "注意：本题属于一系列呈现相同场景的题目。系列中的每道题都包含一个可能满足既定目标的独特解决方案。有些题组可能有多个正确解决方案，有些可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该题。因此，这些题目不会出现在复查屏幕中。\n\n您有一个存储在 Git 存储库中的 SDK 样式 SQL 数据库项目。该项目以 Azure SQL 数据库为目标。\n当项目引用系统对象时，CI 生成因未解析的引用错误而失败。\n您需要更新该 SQL 数据库项目，通过在 Azure SQL Database 的数据库模型中包含正确的系统对象，确保 dotnet build 验证成功。\n解决方案：添加对 Azure SQL Database master.dacpac 文件的项目工件引用。\n这是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "不满足。手动引用本地 master.dacpac 文件不适合 CI/CD 流程（构建代理上不一定存在该文件），也不是推荐做法。\n\n正确做法是添加 Microsoft.SqlServer.Dacpacs.Azure.Master NuGet 包：\n<ItemGroup>\n  <PackageReference Include=\"Microsoft.SqlServer.Dacpacs.Azure.Master\" Version=\"1.60.0\" />\n</ItemGroup>\n它提供 Azure 特有的系统对象元数据，并可由 dotnet build 自动还原。"
  }
 },
 {
  "id": 61,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a SQL database in Microsoft Fabric that contains a table named dbo.Orders. dbo.Orders has a clustered index, contains three years of data, and is partitioned by a column named OrderDate by month.\nYou need to remove all the rows for the oldest month. The solution must minimize the impact on other queries that access the data in dbo.Orders.\nSolution: Run the following Transact-SQL statement.\nTRUNCATE TABLE dbo.Orders;\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* Identify the partition number for the oldest month, and then run the following Transact-SQL statement.\nTRUNCATE TABLE dbo.Orders WITH (PARTITIONS (partition number));\nThe best Transact-SQL statement to remove all rows for the oldest month while minimizing the impact on other queries is TRUNCATE TABLE with a WITH (PARTITIONS (...)) clause.\n\nWhy TRUNCATE TABLE ... WITH (PARTITIONS (...)) is Best Efficiency: TRUNCATE TABLE is a Data Definition Language (DDL) operation that removes data by deallocating the data pages, which is a metadata operation and is very fast, regardless of the amount of data in the partition.\nMinimal Logging: It uses less transaction log space compared to a DELETE statement, which logs each row deletion individually.\nLow Impact on Concurrency: It performs a quick, partition-specific operation. A row-by-row DELETE would be a long-running transaction and could cause locking and blocking issues for other queries accessing the table.\nData Integrity: Because the table has a clustered index and is partitioned by the same column (aligned indexes), the TRUNCATE PARTITION operation is a fast, partition-level maintenance operation that targets only that specific data subset.\n\nIncorrect:\n* : Identify the partition scheme for the oldest month, and then run the following Transact-SQL statement.\nALTER TABLE dbo.Orders DROP PARTITION SCHEME (partition_scheme_name);\nThe DROP PARTITION SCHEME statement removes the partition scheme object from the database but does not remove the data itself or free up the space, and it requires all tables to be moved off the scheme first, which is a complex operation. This does not meet the goal of removing the data efficiently.\n* Run the following Transact-SQL statement.\nDELETE FROM dbo.Orders WHERE OrderDate < DATEADD(month, -36, SYSUTCDATETIME());\nA standard DELETE statement, even with a WHERE clause that uses the partition column, can be a time-\nconsuming, logged operation that causes locking and blocking on the main table, negatively impacting performance.\n* Run the following Transact-SQL statement.\nTRUNCATE TABLE dbo.Orders;\nReference:\nhttps://stackoverflow.com/questions/63632963/truncate-partition-vs-drop-partition-performace-wise-which-\none-is-efficient-an"
  },
  "zh": {
   "stem": "注意：本题属于一系列呈现相同场景的题目。系列中的每道题都包含一个可能满足既定目标的独特解决方案。有些题组可能有多个正确解决方案，有些可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该题。因此，这些题目不会出现在复查屏幕中。\n\n您在 Microsoft Fabric 中有一个 SQL 数据库，其中包含一个名为 dbo.Orders 的表。dbo.Orders 有一个聚集索引，包含三年的数据，并按名为 OrderDate 的列以月份分区。\n您需要删除最早那个月的所有行。该解决方案必须最大限度地减少对访问 dbo.Orders 数据的其他查询的影响。\n解决方案：运行以下 Transact-SQL 语句。\nTRUNCATE TABLE dbo.Orders;\n这是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "不满足。不带 WITH (PARTITIONS (...)) 的 TRUNCATE TABLE 会清空整张表的全部三年数据，而不只是最早的那个月。\n\n正确做法：确定最早月份的分区编号，然后运行\nTRUNCATE TABLE dbo.Orders WITH (PARTITIONS (分区编号));\n它只对指定分区执行元数据级的页释放，速度快、日志少，对其他查询的影响也最小。"
  }
 },
 {
  "id": 62,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an SDK-style SQL database project stored in a Git repository. The project targets an Azure SQL database.\nThe CI build fails with unresolved reference errors when the project references system objects.\nYou need to update the SQL database project to ensure that dotnet build validates successfully by including the correct system objects in the database model for Azure SQL Database.\nSolution: Build the project by running dotnet build -bl -flp:v=diag.\nDoes this meet the goal?",
   "options": {
    "A": "Yes",
    "B": "No"
   },
   "explanation": "Correct:\n* Add the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package to the project.\nTo resolve system reference errors in an SDK-style SQL project targeting Azure SQL Database, you need to add a reference to the Microsoft.SqlServer.Dacpacs.Azure.Master NuGet package.\nIn your .sqlproj file, include the following item group:\n<ItemGroup> <PackageReference Include=\"Microsoft.SqlServer.Dacpacs.Azure.Master\" Version=\"1.60.0\" /> </ItemGroup> Why this works:\nSystem Objects: Standard SDK-style projects don't automatically include system views (like sys.database_principals or sys.dm_db_resource_stats). This package provides the necessary metadata for the compiler.\nAzure Specifics: It includes Azure-only system objects that aren't present in the standard master database dacpac used for on-premises SQL Server.\nCI/CD Friendly: Since it is a NuGet package, the dotnet build command will automatically restore it during the CI process without requiring manual file paths or local installations of Visual Studio.\nIncorrect:\n* Add an artifact reference to the Azure SQL Database master.dacpac file.\n* Add the Microsoft.SqlServer.Dacpacs.Master NuGet package to the project.\n* Build the project by running dotnet build -bl -flp:v=diag.\nReference:\nhttps://learn.microsoft.com/en-us/sql/tools/sql-database-projects/concepts/system-objects"
  },
  "zh": {
   "stem": "注意：本题属于一系列呈现相同场景的题目。系列中的每道题都包含一个可能满足既定目标的独特解决方案。有些题组可能有多个正确解决方案，有些可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该题。因此，这些题目不会出现在复查屏幕中。\n\n您有一个存储在 Git 存储库中的 SDK 样式 SQL 数据库项目。该项目以 Azure SQL 数据库为目标。\n当项目引用系统对象时，CI 生成因未解析的引用错误而失败。\n您需要更新该 SQL 数据库项目，通过在 Azure SQL Database 的数据库模型中包含正确的系统对象，确保 dotnet build 验证成功。\n解决方案：运行 dotnet build -bl -flp:v=diag 生成该项目。\n这是否满足目标？",
   "options": {
    "A": "是",
    "B": "否"
   },
   "explanation": "不满足。-bl 和 -flp:v=diag 只是产生二进制日志和详细诊断输出，用于排查问题，并不会把缺失的系统对象加入数据库模型。\n\n正确做法是添加 Microsoft.SqlServer.Dacpacs.Azure.Master NuGet 包：\n<ItemGroup>\n  <PackageReference Include=\"Microsoft.SqlServer.Dacpacs.Azure.Master\" Version=\"1.60.0\" />\n</ItemGroup>"
  }
 },
 {
  "id": 63,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an SDK-style SQL database project named MyDatabaseProject.sqlproj stored in a private GitHub repository. The repository contains the following GitHub Actions workflow.\n\nThe repository contains the AZURE_SQL_CONNECTION_STRING secrets.\nThe target is an Azure SQL database that allows access to Azure services and is configured to support mixed authentication.\nThe workflow runs successfully.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: No No - The workflow relies on a Microsoft Entra workload identity to access the target Azure SQL database.\nTransitioning to Workload Identity To move from your current AZURE_SQL_CONNECTION_STRING secret to a workload identity, you must configure both the infrastructure and the workflow.\nYou must add the azure/login action before the sql-action to exchange the GitHub OIDC token for an Azure access token.\nBox 2: No No - Change the Build SQL project step to run: dotnet build MyDatabaseProject.sqlproj -c Release will result in a successful deployment.\nChanging the build configuration to Release will cause the deployment to fail unless you also update the file path in the deployment step.\nThe dotnet build command creates a folder structure based on the configuration name.\nYour original command used the default configuration (Debug).\n\nThe DACPAC was generated at: bin/Debug/MyDatabaseProject.dacpac.\nYour new command specifies Release.\nThe DACPAC will now be generated at: bin/Release/MyDatabaseProject.dacpac.\nBecause your \"Publish DACPAC\" step is still looking in the bin/Debug/ folder, it will not find the file, and the workflow will error out with a \"File not found\" message.\nHow to fix it To ensure a successful deployment with the Release configuration, you must update the path in the azure/ sql-action@v2 step to match the new output location\nBox 3: Yes Yes - The workflow can be triggered manually, without making changes to the repository.\nThe workflow can be triggered manually without making changes to the repository.\nThe specific line in your code that enables this is workflow_dispatch:.\nworkflow_dispatch This is the specific trigger for manual execution.\nIt allows you to run the automation at any time.\nNo code commits or Pull Requests are required to start it.\nHow to Trigger it Manually Since you have the workflow_dispatch event defined, you can start the process directly through the GitHub interface:\n1. Navigate to your GitHub Repository.\n2. Click on the Actions tab at the top.\n3. On the left-hand sidebar, click the name of the workflow: MyDatabaseProject.\n4. Look for a blue bar that says \"Run workflow\".\n5. Select the branch (e.g., main) and click the green Run workflow button.\nReference:\nhttps://oneuptime.com/blog/post/2026-02-16-how-to-configure-microsoft-entra-workload-identity-\nfederation-for-github-actions-cicd-pipelines/view https://github.com/dotnet/sdk/issues/46465 https://gregorsuttie.com/category/azuredevops/"
  },
  "zh": {
   "stem": "您有一个名为 MyDatabaseProject.sqlproj 的 SDK 样式 SQL 数据库项目，存储在一个私有 GitHub 存储库中。该存储库包含以下 GitHub Actions 工作流。\n该存储库包含 AZURE_SQL_CONNECTION_STRING 机密。\n目标是一个允许 Azure 服务访问、并配置为支持混合身份验证的 Azure SQL 数据库。\n该工作流运行成功。\n对于以下每条陈述，如果陈述为真，请选择“是”；否则选择“否”。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：否\n该工作流并不依赖 Microsoft Entra 工作负载标识——它使用的是存储在机密中的 AZURE_SQL_CONNECTION_STRING 连接字符串。\n若要改用工作负载标识，必须同时配置基础结构和工作流，并在 sql-action 之前添加 azure/login 操作，用 GitHub OIDC 令牌换取 Azure 访问令牌。\n\n框 2：否\n把 Build SQL project 步骤改为 dotnet build MyDatabaseProject.sqlproj -c Release 会导致部署失败，除非同时更新部署步骤中的文件路径。dotnet build 会按配置名称创建文件夹：原命令使用默认的 Debug 配置，DACPAC 生成在 bin/Debug/ 下，而发布步骤的 path 仍指向 bin/Debug/。\n\n框 3：是\n工作流的触发器中包含 workflow_dispatch，因此无需对存储库进行任何更改即可手动触发。"
  },
  "boxes": [
   {
    "prompt_en": "The workflow relies on a Microsoft Entra workload identity to access the target Azure SQL database.",
    "prompt_zh": "该工作流依赖 Microsoft Entra 工作负载标识来访问目标 Azure SQL 数据库。",
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
    "prompt_en": "Changing the Build SQL project step to run: dotnet build MyDatabaseProject.sqlproj -c Release will result in a successful deployment.",
    "prompt_zh": "将 Build SQL project 步骤改为运行 dotnet build MyDatabaseProject.sqlproj -c Release 将使部署成功。",
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
    "prompt_en": "The workflow can be triggered manually, without making changes to the repository.",
    "prompt_zh": "无需对存储库进行更改即可手动触发该工作流。",
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
   "lang": "yaml",
   "title_en": "The GitHub Actions workflow",
   "title_zh": "GitHub Actions 工作流",
   "text": "name: Build and Deploy SQL Project\non:\n  push:\n    branches:\n      - main\n  workflow_dispatch:\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    permissions:\n      id-token: write\n      contents: read\n    steps:\n      - uses: actions/checkout@v4\n      - name: Build SQL project\n        run: dotnet build MyDatabaseProject.sqlproj\n      - name: Publish DACPAC\n        uses: azure/sql-action@v2\n        with:\n          action: publish\n          path: bin/Debug/MyDatabaseProject.dacpac\n          connection-string: ${{ secrets.AZURE_SQL_CONNECTION_STRING }}"
  }
 },
 {
  "id": 64,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that supports an AI-driven product search API.\nYou need to identify the top CPU-consuming queries from the last two hours by using Query Store data.\nThe solution must aggregate CPU consumption across executions and return only the top 15 query hashes.\nHow should you complete the Transact-SQL code? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: rs.avg_cpu_time avg_cpu_time  represents the average CPU time per execution.\nBox 2: sys.query_store_runtime_stats_interval sys.query_store_runtime_stats_interval  is the table that maps statistics to specific time windows.\nBox 3: DATEADD(hour, -2, GETUTCDATE()) DATEADD(hour, -2, GETUTCDATE()) filters to look back exactly two hours.\nTimezone: Azure SQL Database stores Query Store data in UTC. Always use GETUTCDATE() or SYSUTCDATETIME() to ensure your 5-hour window aligns with the database logs.\nReference:\nhttps://learn.microsoft.com/en-us/azure/azure-sql/database/high-cpu-diagnose-troubleshoot"
  },
  "zh": {
   "stem": "您有一个支持 AI 驱动的产品搜索 API 的 Azure SQL 数据库。\n您需要使用查询存储数据识别过去两小时内 CPU 消耗最高的查询。该解决方案必须跨执行次数聚合 CPU 消耗，并且只返回前 15 个查询哈希。\n您应如何完成该 Transact-SQL 代码？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：rs.avg_cpu_time\navg_cpu_time 表示每次执行的平均 CPU 时间；乘以 count_executions 即可跨执行次数聚合总 CPU 消耗。\n\n框 2：sys.query_store_runtime_stats_interval\n这是把运行时统计信息映射到具体时间窗口的表。\n\n框 3：DATEADD(hour, -2, GETUTCDATE())\n用于精确回溯两小时。时区说明：Azure SQL Database 的查询存储数据以 UTC 保存，因此必须使用 GETUTCDATE() 或 SYSUTCDATETIME()，才能让时间窗口与数据库日志对齐。"
  },
  "sources_en": [
   "DATEADD(DAY, -2, GETDATE())",
   "DATEADD(HOUR, -2, GETDATE())",
   "DATEADD(HOUR, -2, GETUTCDATE())",
   "rs.avg_cpu_time",
   "rs.last_cpu_time",
   "sys.dm_exec_query_stats",
   "sys.query_store_runtime_stats_interval"
  ],
  "sources_zh": [
   "DATEADD(DAY, -2, GETDATE())",
   "DATEADD(HOUR, -2, GETDATE())",
   "DATEADD(HOUR, -2, GETUTCDATE())",
   "rs.avg_cpu_time",
   "rs.last_cpu_time",
   "sys.dm_exec_query_stats",
   "sys.query_store_runtime_stats_interval"
  ],
  "targets": [
   {
    "label_en": "Box 1 (SUM(count_executions * ... ) / 1000.0) AS total_cpu_ms)",
    "label_zh": "框 1（SUM(count_executions * ... ) / 1000.0) AS total_cpu_ms）",
    "correct_en": "rs.avg_cpu_time",
    "correct_zh": "rs.avg_cpu_time"
   },
   {
    "label_en": "Box 2 (INNER JOIN ... AS rsi)",
    "label_zh": "框 2（INNER JOIN ... AS rsi）",
    "correct_en": "sys.query_store_runtime_stats_interval",
    "correct_zh": "sys.query_store_runtime_stats_interval"
   },
   {
    "label_en": "Box 3 (AND rsi.start_time >=)",
    "label_zh": "框 3（AND rsi.start_time >=）",
    "correct_en": "DATEADD(HOUR, -2, GETUTCDATE())",
    "correct_zh": "DATEADD(HOUR, -2, GETUTCDATE())"
   }
  ]
 },
 {
  "id": 65,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named Sales.Customer. Sales.Customer contains columns named CustomerId, FullName, Email, TaxID, and RegionId.\nYou have a database role named AppSupport that is used by a support application.\nYou need to implement a security solution for AppSupport that meets the following requirements:\n\nAppSupport must be prevented from viewing TaxID.\nAppSupport must be able to query Sales.Customer to troubleshoot issues.\nAppSupport must be able to run a stored procedure named Sales.usp_GetCustomerByCustomerId.\nWhich Transact-SQL statements should you include in the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: GRANT EXECUTE ON OBJECT:: Sales.usp_GetCustomerByCustomerID TO AppSupport;\nTo run Sales.usp_GetCustomerByCustomerID In Transact-SQL, the EXECUTE permission is used for Stored Procedures, Functions, or CLR types.\nBox 2: GRANT SELECT ON OBJECT::dbo.Customer TO AppSupport;\nTo query Sales.Customer:\nTo allow a database role to query a table, you should grant the SELECT permission.\nRecommended Syntax:\n\nGRANT SELECT ON OBJECT::dbo.Customer TO AppSupport;\nBox 3: DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;\nTo prevent viewing TaxID:\n\nTo prevent a custom database role from viewing the TaxID column in an Azure SQL database while allowing access to other columns, use Column-Level Permissions with the DENY T-SQL command.\nRun the following command:\nDENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;\nAction: This command denies the SELECT permission specifically on the TaxID column within the Customer table for the specified role.\nEffect: The application using this role will receive a NULL value or an error, depending on the context, if they attempt to select the TaxID column, while still having access to CustomerId, FullName, Email, and RegionId Reference:\nhttps://www.mssqltips.com/sqlservertip/1900/understanding-sql-server-fixed-database-roles https://learn.microsoft.com/en-us/sql/relational-databases/security/permissions-database-engine"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 Sales.Customer 的表。Sales.Customer 包含名为 CustomerId、FullName、Email、TaxID 和 RegionId 的列。\n您有一个由支持应用程序使用的数据库角色 AppSupport。\n您需要为 AppSupport 实现一个满足以下要求的安全解决方案：\n必须阻止 AppSupport 查看 TaxID。\nAppSupport 必须能够查询 Sales.Customer 以排查问题。\nAppSupport 必须能够运行名为 Sales.usp_GetCustomerByCustomerId 的存储过程。\n您应该在解决方案中包含哪些 Transact-SQL 语句？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;\n运行存储过程需要 EXECUTE 权限；在 T-SQL 中，EXECUTE 权限用于存储过程、函数或 CLR 类型。\n\n框 2：GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;\n要允许数据库角色查询某张表，应授予 SELECT 权限。\n\n框 3：DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;\n要在允许访问其他列的同时阻止自定义数据库角色查看 TaxID 列，应使用列级权限的 DENY 命令。DENY 优先于 GRANT，因此该角色可以查询表中的其他列，但无法读取 TaxID。"
  },
  "boxes": [
   {
    "prompt_en": "To run Sales.usp_GetCustomerByCustomerId:",
    "prompt_zh": "运行 Sales.usp_GetCustomerByCustomerId：",
    "options_en": [
     "DENY SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;",
     "GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "REVOKE SELECT ON OBJECT::Sales.Customer(TaxID) FROM AppSupport;"
    ],
    "options_zh": [
     "DENY SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;",
     "GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "REVOKE SELECT ON OBJECT::Sales.Customer(TaxID) FROM AppSupport;"
    ],
    "correct_en": "GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
    "correct_zh": "GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;"
   },
   {
    "prompt_en": "To query Sales.Customer:",
    "prompt_zh": "查询 Sales.Customer：",
    "options_en": [
     "DENY SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;",
     "GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "REVOKE SELECT ON OBJECT::Sales.Customer(TaxID) FROM AppSupport;"
    ],
    "options_zh": [
     "DENY SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;",
     "GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "REVOKE SELECT ON OBJECT::Sales.Customer(TaxID) FROM AppSupport;"
    ],
    "correct_en": "GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;",
    "correct_zh": "GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;"
   },
   {
    "prompt_en": "To prevent viewing TaxID:",
    "prompt_zh": "阻止查看 TaxID：",
    "options_en": [
     "DENY SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;",
     "GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "REVOKE SELECT ON OBJECT::Sales.Customer(TaxID) FROM AppSupport;"
    ],
    "options_zh": [
     "DENY SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;",
     "GRANT EXECUTE ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.Customer TO AppSupport;",
     "GRANT SELECT ON OBJECT::Sales.usp_GetCustomerByCustomerId TO AppSupport;",
     "REVOKE SELECT ON OBJECT::Sales.Customer(TaxID) FROM AppSupport;"
    ],
    "correct_en": "DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;",
    "correct_zh": "DENY SELECT ON OBJECT::Sales.Customer(TaxID) TO AppSupport;"
   }
  ]
 },
 {
  "id": 66,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database named ProductsDB.\nYou deploy Data API builder (DAB) to Azure Container Apps.\nYou discover that the container app cannot connect to ProductsDB.\nYour development team reports that the container app is unreachable from the internet for integration tests.\nYou need to update Azure SQL Database and Container Apps to meet the following requirements:\nEnsure that the Azure SQL logical server allows connections from Azure services.\nEnsure that the Container Apps environment accepts inbound requests from the public internet.\nWhat should you configure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: 0.0.0.0 to : 0.0.0.0 Start IP address and end IP address of the Azure SQL firewall rule To allow Azure services (like Azure Container Apps) to connect to your Azure SQL Database and to make your Container App reachable for tests, use the following configurations:\nAzure SQL Firewall Settings To allow Azure services to connect to your database, you must use a specific \"magic\" IP address range reserved by Microsoft.\nStart IP Address: 0.0.0.0 End IP Address: 0.0.0.0 Rule Name: Commonly named AllowAllWindowsAzureIps.\nBox 2:  Set ingress to external and target port 5000.\nContainer Apps ingress Container Apps Connectivity To make your app reachable from the internet for integration tests, configure the Ingress settings:\nIngress: Set to Enabled.\nInbound Traffic: Set to Accepting traffic from anywhere.\nType: Set to External.\nTarget Port: Usually 5000 (default for DAB) or 80.\nReference:\nhttps://learn.microsoft.com/en-au/answers/questions/5824447/the-azure-container-app-does-not-accept-\nincoming-r"
  },
  "zh": {
   "stem": "您有一个名为 ProductsDB 的 Azure SQL 数据库。\n您把 Data API builder (DAB) 部署到 Azure Container Apps。\n您发现该容器应用无法连接到 ProductsDB。\n您的开发团队报告称，无法从 Internet 访问该容器应用来进行集成测试。\n您需要更新 Azure SQL Database 和 Container Apps 以满足以下要求：\n确保 Azure SQL 逻辑服务器允许来自 Azure 服务的连接。\n确保 Container Apps 环境接受来自公共 Internet 的入站请求。\n您应该配置什么？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：0.0.0.0 到 0.0.0.0\n要允许 Azure 服务（例如 Azure Container Apps）连接到 Azure SQL 数据库，必须使用 Microsoft 保留的特殊 IP 范围：\n起始 IP 地址：0.0.0.0\n结束 IP 地址：0.0.0.0\n规则名称通常为 AllowAllWindowsAzureIps。\n\n框 2：将入口设置为 external，目标端口为 5000。\n要让应用可从 Internet 访问以便进行集成测试，需配置 Ingress：\nIngress：启用。\n入站流量：接受来自任何位置的流量。\n类型：External。\n目标端口：通常为 5000（DAB 的默认端口）或 80。"
  },
  "boxes": [
   {
    "prompt_en": "Start IP address and end IP address of the Azure SQL firewall rule:",
    "prompt_zh": "Azure SQL 防火墙规则的起始 IP 地址和结束 IP 地址：",
    "options_en": [
     "0.0.0.0 to 0.0.0.0.",
     "127.0.0.1 to 127.0.0.1",
     "10.0.0.0 to 10.255.255.255"
    ],
    "options_zh": [
     "0.0.0.0 到 0.0.0.0。",
     "127.0.0.1 到 127.0.0.1",
     "10.0.0.0 到 10.255.255.255"
    ],
    "correct_en": "0.0.0.0 to 0.0.0.0.",
    "correct_zh": "0.0.0.0 到 0.0.0.0。"
   },
   {
    "prompt_en": "Container Apps ingress:",
    "prompt_zh": "Container Apps 入口：",
    "options_en": [
     "Restrict ingress to internal traffic only.",
     "Set ingress to external and target port 5000.",
     "Set ingress to internal and target port 5000."
    ],
    "options_zh": [
     "将入口限制为仅限内部流量。",
     "将入口设置为 external，目标端口为 5000。",
     "将入口设置为 internal，目标端口为 5000。"
    ],
    "correct_en": "Set ingress to external and target port 5000.",
    "correct_zh": "将入口设置为 external，目标端口为 5000。"
   }
  ]
 },
 {
  "id": 67,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have a database that contains production data. The schema is stored in a Git repository as an SDK-\nstyle SQL database project and contains the following reference data.\n\nA deployment pipeline can be rerun automatically when a transient failure occurs.\nYou need to deploy the reference data as part of the same CI/CD process. Rerunning the pipeline must produce the same outcome and must NOT create duplicate rows.\nWhat should you do?",
   "options": {
    "A": "Add a post-deployment script that inserts reference rows by using IF NOT EXISTS or MERGE logic.",
    "B": "Restore a backup after each deployment.",
    "C": "Store the reference values in GitHub repository secrets."
   },
   "explanation": "To ensure your reference data deployment is idempotent (safe to rerun) and prevents duplicates within an SDK-style SQL project, you should use a Post-Deployment Script combined with a MERGE statement.\nThe Core Strategy: MERGE Statement The MERGE command allows you to synchronize a target table with a source (your hardcoded data) in a single atomic operation. It checks for existing records based on a unique key and decides whether to insert, update, or delete.\nImplementation Steps\n1. Create a Seed Script Add a file named Script.PostDeployment.sql to your project.\nSet the Build Action to PostDeploy in the file properties.\n2. Handle the Identity Column Since RefID is an IDENTITY column, you must use SET IDENTITY_INSERT [Table] ON to specify exact IDs.\nThis ensures RefID values remain consistent across environments.\n3. Write the Idempotent Logic Define your reference data in a Common Table Expression (CTE) or a virtual table.\nUse the sCode or RefID as the join key to find matches.\nReference:\nhttps://www.mssqltips.com/sqlservertip/5648/including-predetermined-datasets-in-a-microsoft-database-\nproject/"
  },
  "zh": {
   "stem": "您有一个包含生产数据的数据库。其架构以 SDK 样式 SQL 数据库项目的形式存储在 Git 存储库中，并包含以下参考数据。\n当出现暂时性故障时，部署管道可以自动重新运行。\n您需要把该参考数据作为同一 CI/CD 流程的一部分进行部署。重新运行管道必须产生相同的结果，且不得创建重复行。\n您应该怎么做？",
   "options": {
    "A": "添加一个部署后脚本，使用 IF NOT EXISTS 或 MERGE 逻辑插入参考行。",
    "B": "每次部署后还原备份。",
    "C": "把参考值存储在 GitHub 存储库机密中。"
   },
   "explanation": "要让参考数据的部署具有幂等性（可安全重跑）并避免重复，应在 SDK 样式 SQL 项目中使用部署后脚本配合 MERGE 语句。\n\n核心策略：MERGE\nMERGE 命令可在单个原子操作中把目标表与源（硬编码数据）同步；它根据唯一键检查现有记录，决定插入、更新还是删除。\n\n实施步骤：\n1. 创建种子脚本：在项目中添加 Script.PostDeployment.sql 文件，并把生成操作设为 PostDeploy。\n2. 处理标识列：由于 RefId 是 IDENTITY 列，必须使用 SET IDENTITY_INSERT [表] ON 指定确切的 ID，确保各环境中的 RefId 一致。\n3. 编写幂等逻辑：在公用表表达式中定义参考数据，然后用 MERGE 与目标表同步。\n\n还原备份和把值放进机密都无法解决幂等部署问题。"
  },
  "code": {
   "lang": "table",
   "title_en": "Reference data",
   "title_zh": "参考数据",
   "text": "Name         Data type\n-----------  -------------\nRefId        int identity\nCode         nvarchar(10)\nCreateDate   datetime2\nDescription  nvarchar(255)",
   "text_zh": "名称         数据类型\n-----------  -------------\nRefId        int identity\nCode         nvarchar(10)\nCreateDate   datetime2\nDescription  nvarchar(255)"
  }
 },
 {
  "id": 68,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have an Azure SQL database named ProductsDB.\nYou deploy Data API builder (DAB) to Azure Container Apps by using the mcr.microsoft.com/azure-\ndatabases /data-api-builder:latest image.\nThe container app has the following configurations:\nSecrets: mssql-connection-string, dab-config-base64\n\nEnvironment variables:\nMSSQL_CONNECTION_STRING=secretref:mssql-connection-string DAB_CONFIG_BASE64=secretref:dab-config-base64 Ingress: External on port 5000 Users report that the /health endpoint returns a healthy response, but all requests that query an entity named Products fail and generate a connection error.\nYou confirm that the SQL login in the connection string is correct and the database exists.\nYou need to ensure that the container app can establish connections to the Azure SQL logical server without changing the container app deployment settings or the DAB configuration file.\nWhat should you do on the Azure SQL logical server?",
   "options": {
    "A": "Create an auto-failover group for ProductsDB.",
    "B": "Run DBCC CHECKDB on ProductsDB.",
    "C": "Create a firewall rule that allows a start and end IP address of 0.0.0.0.",
    "D": "Enable FORCE_LAST_GOOD_PLAN automatic tuning for ProductsDB."
   },
   "explanation": "Even if the login credentials are correct, Azure SQL Database blocks all incoming traffic by default. Since your Container App is returning a healthy response for the /health endpoint (which is internal to the DAB engine) but failing on entity queries (which require a database hit), the network handshake is being rejected at the SQL Server firewall level.\nTo fix this connection error without changing the container app or the DAB configuration file, you must enable the Azure SQL Server firewall to allow Azure services.\nSetting the start and end IP address to 0.0.0.0 in an Azure SQL Database firewall rule is a specific configuration that enables the \"Allow Azure services and resources to access this server\" setting.\nPrimary Use Case In your scenario, this rule allows your Azure Container Apps (ACA) to communicate with your Azure SQL Database over the Azure backbone network.\nConnectivity: It permits any traffic originating from within the Azure boundary to reach the database.\nSimplicity: You do not need to track or white-list the specific outbound IP addresses of your Container App,\nwhich can change if the app scales or restarts.\nInternal Routing: Traffic stays within the Azure network rather than routing out to the public internet and back in.\nReference:\nhttps://learn.microsoft.com/en-us/azure/azure-sql/database/firewall-configure https://stackoverflow.com/questions/54599813/how-to-enable-the-access-to-azure-services-in-my-azure-\nsql-database-server"
  },
  "zh": {
   "stem": "您有一个名为 ProductsDB 的 Azure SQL 数据库。\n您使用 mcr.microsoft.com/azure-databases/data-api-builder:latest 映像把 Data API builder (DAB) 部署到 Azure Container Apps。\n该容器应用具有以下配置：\n机密：mssql-connection-string、dab-config-base64\n环境变量：\nMSSQL_CONNECTION_STRING=secretref:mssql-connection-string\nDAB_CONFIG_BASE64=secretref:dab-config-base64\nIngress：External，端口 5000\n用户报告 /health 终结点返回正常响应，但所有查询名为 Products 的实体的请求都失败并产生连接错误。\n您确认连接字符串中的 SQL 登录名正确，且数据库存在。\n您需要在不更改容器应用部署设置或 DAB 配置文件的前提下，确保容器应用能与 Azure SQL 逻辑服务器建立连接。\n您应该在 Azure SQL 逻辑服务器上做什么？",
   "options": {
    "A": "为 ProductsDB 创建自动故障转移组。",
    "B": "对 ProductsDB 运行 DBCC CHECKDB。",
    "C": "创建起始和结束 IP 地址均为 0.0.0.0 的防火墙规则。",
    "D": "为 ProductsDB 启用 FORCE_LAST_GOOD_PLAN 自动优化。"
   },
   "explanation": "即使登录凭据正确，Azure SQL Database 默认也会阻止所有传入流量。容器应用的 /health 终结点（DAB 引擎内部）返回正常，而实体查询（需要访问数据库）失败，说明网络握手在 SQL Server 防火墙层被拒绝。\n\n要在不更改容器应用或 DAB 配置文件的情况下修复该连接错误，必须让 Azure SQL 服务器防火墙允许 Azure 服务。把防火墙规则的起始和结束 IP 地址都设为 0.0.0.0，正是启用“允许 Azure 服务和资源访问此服务器”的特定配置，从而让 Azure Container Apps 通过 Azure 主干网络与数据库通信。"
  }
 },
 {
  "id": 69,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have an Azure SQL database named SalesDB and an Azure App Service app named sales-api.\nSalesDB contains a table named dbo.Customers. dbo.Customers contains two columns named CreditCardNumber and TenantId.\nCurrently, sales-api connects to SalesDB by using SQL authentication with stored username and password.\nYou need to recommend a solution that meets the following requirements:\n\nProvides a passwordless method for sales-api to access SalesDB.\nEnsures that credit card numbers are NOT stored as plain text.\nWhat should you include in the recommendation?",
   "options": {
    "A": "Azure Key Vault and Always Encrypted",
    "B": "Transparent Data Encryption (TDE) and row-level security (RLS)",
    "C": "managed identities and dynamic data masking",
    "D": "managed identities and Always Encrypted"
   },
   "explanation": "To move from SQL authentication to a more secure, passwordless architecture while protecting credit card data, you should implement Azure Managed Identities for authentication and Always Encrypted for data protection.\n\n1. Enable Passwordless Authentication Replace your stored username and password with a Managed Identity. This allows the App Service to authenticate with the database using its own identity, managed by Azure.\nStep 1A: Enable Identity on App Service\nStep 1B: Grant Database Access Set an Entra ID (Active Directory) Admin for your SQL Server.\nConnect to your database as that admin and run the following to create a user for your app:\nStep 1C: Update Connection String\n2. Protect Credit Card Numbers Use Always Encrypted to ensure credit card numbers are encrypted before they even reach the database.\nThe database engine never sees the plain text.\n\nStep 2A: Store Encryption Keys\nStep 2B: Encrypt the Column Use the Always Encrypted Wizard in SQL Server Management Studio (SSMS).\nSelect the credit card column and choose Randomized encryption for maximum security (unless you need to search by exact matches, in which case use Deterministic).\nReference:\nhttps://learn.microsoft.com/en-us/sql/relational-databases/security/encryption/always-encrypted-database-\nengine"
  },
  "zh": {
   "stem": "您有一个名为 SalesDB 的 Azure SQL 数据库和一个名为 sales-api 的 Azure App Service 应用。\nSalesDB 包含一个名为 dbo.Customers 的表，该表包含名为 CreditCardNumber 和 TenantId 的两个列。\n目前，sales-api 使用存储的用户名和密码，通过 SQL 身份验证连接到 SalesDB。\n您需要推荐一个满足以下要求的解决方案：\n为 sales-api 提供访问 SalesDB 的无密码方法。\n确保信用卡号不以纯文本形式存储。\n您应该在建议中包含什么？",
   "options": {
    "A": "Azure Key Vault 和 Always Encrypted",
    "B": "透明数据加密 (TDE) 和行级安全性 (RLS)",
    "C": "托管标识和动态数据掩码",
    "D": "托管标识和 Always Encrypted"
   },
   "explanation": "要从 SQL 身份验证转向更安全的无密码架构，同时保护信用卡数据，应使用 Azure 托管标识进行身份验证，并使用 Always Encrypted 保护数据。\n\n1. 启用无密码身份验证\n用托管标识取代存储的用户名和密码，让 App Service 使用由 Azure 管理的自身标识向数据库进行身份验证：为 App Service 启用标识；为 SQL 服务器设置 Entra ID 管理员；以该管理员身份连接数据库并为应用创建用户；更新连接字符串。\n\n2. 保护信用卡号\n使用 Always Encrypted，使信用卡号在到达数据库之前就已加密，数据库引擎永远看不到明文。\n\nTDE 只是静态加密整个数据库，DBA 查询时仍看到明文；动态数据掩码只是显示层混淆，数据本身仍以明文存储。"
  }
 },
 {
  "id": 70,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database named sqldb-ai-prod that stores customer support tickets for a multitenant software as a service (SaaS) application. sqldb-ai-prod contains a table named Tickets.\nTickets contains columns named TenantId, TicketId, CustomerEmail, CustomerPhone, and Notes.\nYou plan to harden data access, since a new support team will use ad hoc reporting tools that connect directly to sqldb-ai-prod.\nYou need to configure security to meet the following requirements:\nSupport agents must see only the rows of their own TenantId column.\nSupport agents must see only the domain name portion of the CustomerEmail column.\n\nWhat should you do for each requirement? To answer, drag the appropriate actions to the correct requirements. Each action may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Create a row-level security (RLS) predicate that uses the user context.\nSupport agents must see only the rows of their own TenantId column.\nTo implement Row-Level Security (RLS) in your multitenant Azure SQL Database for support tickets, you should create an inline table-valued function to act as a security predicate and then define a security policy that enforces it.\nPrerequisites & Scenario Table: dbo.SupportTickets (with TenantId, TicketId, CustomerEmail, CustomerPhone, Notes) Context: The application sets the TenantId for the session using sp_set_session_context.\nBox 2: Configure dynamic data masking on selected columns Support agents must see only the domain name portion of the CustomerEmail column.\nTo increase the security of your Azure SQL Database using dynamic data masking (DDM) for support agents accessing via stand-alone tools, you should apply the built-in email() masking function to the CustomerEmail column and utilize partial() masking for phone numbers.\nReference:\nhttps://learn.microsoft.com/en-us/azure/data-api-builder/concept/security/row-level-security"
  },
  "zh": {
   "stem": "您有一个名为 sqldb-ai-prod 的 Azure SQL 数据库，它为一个多租户软件即服务 (SaaS) 应用程序存储客户支持工单。sqldb-ai-prod 包含一个名为 Tickets 的表，其中包含名为 TenantId、TicketId、CustomerEmail、CustomerPhone 和 Notes 的列。\n由于新的支持团队将使用直接连接 sqldb-ai-prod 的临时报表工具，您计划加固数据访问。\n您需要配置安全性以满足以下要求：\n支持代理只能看到自己 TenantId 的行。\n支持代理只能看到 CustomerEmail 列中的域名部分。\n您应该为每项要求做什么？要回答此问题，请把适当的操作拖动到正确的要求上。每项操作可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：创建使用用户上下文的行级安全性 (RLS) 谓词。\n要在多租户 Azure SQL 数据库中实现行级安全性，应创建一个内联表值函数作为安全谓词，然后定义强制执行该谓词的安全策略。应用程序通常使用 sp_set_session_context 为会话设置 TenantId。\n\n框 2：对选定列配置动态数据掩码。\n要让通过独立工具访问数据的支持代理只看到电子邮件的域名部分，应对 CustomerEmail 列应用内置的 email() 掩码函数。"
  },
  "sources_en": [
   "Configure dynamic data masking on selected columns.",
   "Enable Transparent Data Encryption (TDE) and customer-managed keys.",
   "Create a row-level security (RLS) predicate that uses the user context.",
   "Encrypt sensitive columns by using Always Encrypted with Azure Key Vault."
  ],
  "sources_zh": [
   "对选定列配置动态数据掩码。",
   "启用透明数据加密 (TDE) 和客户管理的密钥。",
   "创建使用用户上下文的行级安全性 (RLS) 谓词。",
   "使用 Always Encrypted 和 Azure Key Vault 加密敏感列。"
  ],
  "targets": [
   {
    "label_en": "Support agents must see only the rows of their own TenantId:",
    "label_zh": "支持代理只能看到自己 TenantId 的行：",
    "correct_en": "Create a row-level security (RLS) predicate that uses the user context.",
    "correct_zh": "创建使用用户上下文的行级安全性 (RLS) 谓词。"
   },
   {
    "label_en": "Support agents must see only the domain name portion of CustomerEmail:",
    "label_zh": "支持代理只能看到 CustomerEmail 中的域名部分：",
    "correct_en": "Configure dynamic data masking on selected columns.",
    "correct_zh": "对选定列配置动态数据掩码。"
   }
  ]
 },
 {
  "id": 71,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a SQL database in Microsoft Fabric that uses the default settings for a newly created database and contains a table named Sales.Orders.\nYou have an application that uses two stored procedures to access Sales.Orders.\n\nWhile monitoring database activity, you discover the following:\nsys.dm_exec_requests shows multiple sessions in a suspended state with wait_type = LCK_M_X. All the sessions show the same wait_resource, which maps to Sales.Orders, and the same nonzero blocking_session_id.\nsys.dm_exec_input_buffer(blocking_session_id, NULL) returns a last submitted command of BEGIN TRANSACTION UPDATE Sales.Orders.\nsys.dm_exec_sessions for the blocking session shows status = sleeping and open_transaction_count = 1.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Yes Yes - The blocking is caused by an uncommitted explicit transaction in the blocking session that is holding locks.\nThe blocking session is holding an Exclusive (X) lock on the Sales.Orders table due to an uncommitted UPDATE operation, which is preventing other sessions from accessing the same resource.\nSleeping Status & Open Transaction: The blocking session has finished its command (UPDATE Sales.Orders) but has not issued a COMMIT or ROLLBACK. Because it is \"sleeping,\" it is not actively using CPU, but it continues to hold all locks acquired during its transaction.\n\nBox 2: Yes Yes - While an UPDATE operation on Sales.Orders is occuring, SELECT statement will be blocked.\nWhy SELECT is Blocked In a standard SQL Server environment, SELECT is blocked by UPDATE because it seeks a Shared (S) lock, which is incompatible with an Exclusive (X) lock.\nIn Microsoft Fabric SQL Database:\nDefault Behavior: Fabric SQL databases typically use Snapshot Isolation.\nThe Conflict: If a SELECT statement is explicitly using a locking hint (like WITH (TABLOCK)) or if the database is configured for strict Read Committed (without snapshot), the SELECT will wait for the UPDATE to finish.\nWait Type: The LCK_M_X wait type on the suspended sessions confirms they are waiting for the blocking session to release its exclusive hold.\nBox 3: No No - Joining sys.dm_tran_locks to sys-dm_exec_requests will show which session holds locks involved in the blocking chain.\nJoining sys.dm_tran_locks to sys.dm_exec_requests will not show the blocking session because sys.dm_exec_requests only tracks active (running/suspended) requests. Since the blocker is \"sleeping,\" it is no longer executing a request and will be absent from that view.\nReference:\nhttps://medium.com/@lemalcs/sql-server-deadlock-diaries-explained-with-fewer-tears-and-more-cartoons-\n633f35423f76 https://www.red-gate.com/simple-talk/databases/sql-server/t-sql-programming-sql-server/questions-about-\nt-sql-transaction-isolation-levels-you-were-too-shy-to-ask"
  },
  "zh": {
   "stem": "您在 Microsoft Fabric 中有一个 SQL 数据库，它使用新建数据库的默认设置，并包含一个名为 Sales.Orders 的表。\n您有一个使用两个存储过程访问 Sales.Orders 的应用程序。\n在监视数据库活动时，您发现：\nsys.dm_exec_requests 显示多个会话处于挂起状态，wait_type = LCK_M_X。所有这些会话的 wait_resource 相同（映射到 Sales.Orders），且 blocking_session_id 相同且非零。\nsys.dm_exec_input_buffer(blocking_session_id, NULL) 返回的最后提交命令为 BEGIN TRANSACTION UPDATE Sales.Orders。\n阻塞会话的 sys.dm_exec_sessions 显示 status = sleeping，open_transaction_count = 1。\n对于以下每条陈述，如果陈述为真，请选择“是”；否则选择“否”。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：是\n阻塞是由阻塞会话中一个未提交的显式事务持有锁所导致的。该会话因未提交的 UPDATE 操作而在 Sales.Orders 上持有排他 (X) 锁，阻止其他会话访问同一资源。\n睡眠状态与打开的事务：阻塞会话已经执行完命令，但既未 COMMIT 也未 ROLLBACK；虽然它处于 sleeping 状态不消耗 CPU，却仍持有事务期间获得的全部锁。\n\n框 2：是\n在标准 SQL Server 环境中，SELECT 需要共享 (S) 锁，与排他 (X) 锁不兼容，因此在 Sales.Orders 上执行 UPDATE 期间 SELECT 会被阻塞。\n\n框 3：否\n按官方答案，仅把 sys.dm_tran_locks 与 sys.dm_exec_requests 联接不足以显示阻塞链中持有锁的会话——阻塞会话处于 sleeping 状态且没有活动请求，不会出现在 sys.dm_exec_requests 中，需要改用 sys.dm_exec_sessions。"
  },
  "boxes": [
   {
    "prompt_en": "The blocking is caused by an uncommitted explicit transaction in the blocking session that is holding locks.",
    "prompt_zh": "阻塞是由阻塞会话中一个未提交的显式事务持有锁所导致的。",
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
    "prompt_en": "While an UPDATE operation on Sales.Orders is occurring, SELECT statements will be blocked.",
    "prompt_zh": "当 Sales.Orders 上正在执行 UPDATE 操作时，SELECT 语句将被阻塞。",
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
    "prompt_en": "Joining sys.dm_tran_locks to sys.dm_exec_requests will show which session holds locks involved in the blocking chain.",
    "prompt_zh": "将 sys.dm_tran_locks 与 sys.dm_exec_requests 联接可以显示阻塞链中哪个会话持有锁。",
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
  "id": 72,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database named SalesDB that has Query Store enabled. SalesDB supports an AI-driven product search API.\nUsers report that the latency of the API increased immediately after the API was deployed and remains high.\nYou need to identify whether the latency increase was caused by an execution plan regression and, if so,\ndecide which corrective action will restore a previous plan. The solution must prevent any changes to the API code.\nWhat should you use? To answer, drag the appropriate tools to the correct step. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: Query Performance Insight To identify long-running queries To identify long-running queries causing latency after an API deployment in an Azure SQL Database, use Query Performance Insight in the Azure portal. It analyzes Query Store data to visualize top resource-\nconsuming queries and identifies plan regressions without code changes.\nBox 2: The Regressed Queries pane in Query Store To verify that the query has multiple persisted plans over time Identify the Regression You must confirm that the query performance dropped due to a change in the execution plan.\nOpen Query Store: Navigate to your database in SSMS and expand the Query Store folder.\n*-> View Regressed Queries: Open the Regressed Queries report.\nAnalyze the Data:\nLook for the query associated with your AI search API.\nCheck the Duration or CPU Time metrics.\nCompare the \"Recent\" time interval to the \"History\" interval.\n*-> Verify Multiple Plans:\nIn the Plan Summary window (right side), look for multiple Plan IDs.\nIf a new Plan ID appears at the same time latency increased, a regression is confirmed.\nBox 3: Plan forcing in Query Store To restore a previous plan without changing the code To resolve the AI-driven product search API latency, utilize the Azure SQL Database Query Store feature to detect plan regression and apply sp_query_store_force_plan to force the previous, faster plan. This approach corrects the performance issue without altering the API application code.\nReference:\nhttps://learn.microsoft.com/en-us/sql/relational-databases/performance/monitoring-performance-by-using-\nthe-query-store"
  },
  "zh": {
   "stem": "您有一个启用了查询存储的 Azure SQL 数据库 SalesDB。SalesDB 支持一个 AI 驱动的产品搜索 API。\n用户报告称，该 API 的延迟在部署后立即上升并持续居高不下。\n您需要确定延迟上升是否由执行计划回归引起；如果是，则决定采取哪种纠正措施来还原以前的计划。该解决方案必须避免对 API 代码做任何更改。\n您应该使用什么？要回答此问题，请把适当的工具拖动到正确的步骤上。每个工具可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：Query Performance Insight\n要在 Azure SQL 数据库中识别 API 部署后导致延迟的长时间运行查询，可使用 Azure 门户中的 Query Performance Insight。它分析查询存储数据，可视化资源消耗最高的查询，并在无需改动代码的情况下帮助发现计划回归。\n\n框 2：查询存储中的“已回归的查询”窗格\n要确认查询性能下降是由执行计划变化引起：在 SSMS 中展开数据库的“查询存储”文件夹，打开“已回归的查询”报表，比较“最近”与“历史”时间区间的持续时间或 CPU 时间指标，并查看该查询是否存在多个已保留的计划。\n\n框 3：查询存储中的强制计划\n确认回归后，用查询存储的强制计划 (plan forcing) 把执行计划固定回之前较快的版本，无需修改 API 代码。"
  },
  "sources_en": [
   "Azure Monitor",
   "Log Analytics",
   "Query Performance Insight",
   "The Query Store plan store",
   "Plan forcing in Query Store",
   "The Regressed Queries pane in Query Store"
  ],
  "sources_zh": [
   "Azure Monitor",
   "Log Analytics",
   "Query Performance Insight",
   "查询存储的计划存储",
   "查询存储中的强制计划",
   "查询存储中的“已回归的查询”窗格"
  ],
  "targets": [
   {
    "label_en": "To identify long-running queries:",
    "label_zh": "识别长时间运行的查询：",
    "correct_en": "Query Performance Insight",
    "correct_zh": "Query Performance Insight"
   },
   {
    "label_en": "To verify that the query has multiple persisted plans over time:",
    "label_zh": "验证该查询随时间推移存在多个已保留的计划：",
    "correct_en": "The Regressed Queries pane in Query Store",
    "correct_zh": "查询存储中的“已回归的查询”窗格"
   },
   {
    "label_en": "To restore a previous plan without changing the code:",
    "label_zh": "在不更改代码的情况下还原以前的计划：",
    "correct_en": "Plan forcing in Query Store",
    "correct_zh": "查询存储中的强制计划"
   }
  ]
 },
 {
  "id": 73,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have an Azure container app named app1-contoso-001 that hosts a Data API builder (DAB) container in front of an Azure SQL database.\nYou add an entity named Todo that uses a source named dbo.todos.\nWhich URL pattern should clients use to access the Todo REST endpoint?",
   "options": {
    "A": "https://appl-contoso-001.azurestaticapps.net/data-api/graphq1/Todo",
    "B": "https://appl-contoso-001.azurestaticapps.net/api/Todo",
    "C": "https://appl-contoso-001.azurestaticapps.net/data-api/Todo",
    "D": "https://appl-contoso-001.azurestaticapps.net/data-api/api/Todo"
   },
   "explanation": "To access the REST endpoint for the Todo entity, clients should use the following URL pattern:\nhttps://<your-container-app-url>/api/Todo Base URL: The unique FQDN of your Azure Container App.\nPath Prefix: By default, DAB uses /api for RESTful services.\nEntity Name: You must use the Entity Name defined in the configuration (Todo), not the underlying source name (dbo.Todos).\nReference:\nhttps://learn.microsoft.com/en-us/azure/container-apps/connect-apps"
  },
  "zh": {
   "stem": "您有一个名为 app1-contoso-001 的 Azure 容器应用，它在 Azure SQL 数据库前托管一个 Data API builder (DAB) 容器。\n您添加了一个名为 Todo 的实体，其源为 dbo.todos。\n客户端应该使用哪种 URL 模式来访问 Todo REST 终结点？",
   "options": {
    "A": "https://app1-contoso-001.azurestaticapps.net/data-api/graphql/Todo",
    "B": "https://app1-contoso-001.azurestaticapps.net/api/Todo",
    "C": "https://app1-contoso-001.azurestaticapps.net/data-api/Todo",
    "D": "https://app1-contoso-001.azurestaticapps.net/data-api/api/Todo"
   },
   "explanation": "要访问 Todo 实体的 REST 终结点，客户端应使用以下 URL 模式：\nhttps://<容器应用 URL>/api/Todo\n\n基址：Azure 容器应用的唯一 FQDN。\n路径前缀：DAB 默认对 RESTful 服务使用 /api。\n实体名称：必须使用配置中定义的实体名称 (Todo)，而不是底层源名称 (dbo.todos)。"
  }
 },
 {
  "id": 74,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named Customer. Customer contains the following columns:\nNationalIDNumber is unique per customer.\nInvestigationNotes contains free-form text.\nYou have a stored procedure that performs point lookups by NationalIDNumber and returns InvestigationNotes in the query results without filtering on InvestigationNotes.\nYou need to encrypt both columns by using Always Encrypted and the highest security possible.\nWhich type of Always Encrypted encryption should you use for each column?",
   "options": {
    "A": "deterministic for NationalIDNumber and randomized for InvestigationNotes",
    "B": "deterministic for NationalIDNumber and deterministic for InvestigationNotes",
    "C": "randomized for NationalIDNumber and randomized for InvestigationNotes",
    "D": "randomized for NationalIDNumber and deterministic for InvestigationNotes"
   },
   "explanation": "To achieve the highest security for an Azure SQL Database using Always Encrypted, you must use Randomized Encryption for the InvestigationNotes and Deterministic Encryption for the NationalIDNumber.\nWhile \"Randomized\" is more secure, it does not support point lookups (equality searches). Therefore, a hybrid approach is required to maintain functionality while maximizing protection.\nRecommended Encryption Settings\n* NationalIDNumber Deterministic is required to allow the Stored Procedure to perform point lookups (WHERE NationalIDNumber = @id).\n* InvestigationNotes Use randomized as it provides the highest security. It prevents pattern matching and \"leakage\" for sensitive text.\nReference:\nhttps://medium.com/@ih_hira/implementing-always-encrypted-with-azure-key-vault-and-entity-framework-\ncore-in-azure-sql-part-1-3a0e5fd7ed9b"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 Customer 的表。Customer 包含以下列：\nNationalIDNumber 对每位客户唯一。\nInvestigationNotes 包含自由格式文本。\n您有一个存储过程，它按 NationalIDNumber 执行点查找，并在查询结果中返回 InvestigationNotes，但不对 InvestigationNotes 进行筛选。\n您需要使用 Always Encrypted 加密这两列，并尽可能提供最高的安全性。\n您应该对每一列使用哪种 Always Encrypted 加密类型？",
   "options": {
    "A": "NationalIDNumber 使用确定性加密，InvestigationNotes 使用随机化加密",
    "B": "NationalIDNumber 使用确定性加密，InvestigationNotes 使用确定性加密",
    "C": "NationalIDNumber 使用随机化加密，InvestigationNotes 使用随机化加密",
    "D": "NationalIDNumber 使用随机化加密，InvestigationNotes 使用确定性加密"
   },
   "explanation": "要在 Always Encrypted 下获得尽可能高的安全性，应对 InvestigationNotes 使用随机化加密，对 NationalIDNumber 使用确定性加密。\n虽然随机化加密更安全，但它不支持点查找（等值搜索），因此需要混合方案，在保持功能的同时最大化保护。\n\nNationalIDNumber：必须使用确定性加密，存储过程才能执行点查找（WHERE NationalIDNumber = @id）。\nInvestigationNotes：使用随机化加密，安全性最高，可防止对敏感文本的模式匹配和信息“泄漏”；由于查询不会对该列筛选，随机化加密不影响功能。"
  }
 },
 {
  "id": 75,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Your development team uses Microsoft Visual Studio Code with the MSSQL extension and the GitHub\n\nCopilot Chat extension.\nThe team connects to an Azure SQL database by using individual database logins and uses the @mssql chat participant to generate and run Transact-SQL queries from prompts.\nWhat is used to ensure that GitHub Copilot Chat-generated queries run in the context of the developer?",
   "options": {
    "A": "SQL permissions",
    "B": "Azure role-based access control (Azure RBAC) permissions",
    "C": "GitHub organization permissions",
    "D": "shared MCP instruction files"
   },
   "explanation": "To ensure that GitHub Copilot Chat-generated queries run in the context of a specific developer when using the @mssql chat participant, SQL Permissions must be used.\nWhy SQL Permissions are the Key When the @mssql extension executes a query generated by Copilot, it uses the active connection currently established in VS Code. Because your team uses individual database logins, the execution context is governed by the following:\nAuthentication: The developer logs in with their specific credentials.\nAuthorization: The SQL Server engine checks the SQL Permissions (GRANT/DENY/REVOKE) assigned to that specific database user.\nExecution: Any T-SQL command sent by the Copilot chat participant is limited by what that specific login is allowed to do (e.g., SELECT, UPDATE, or DROP).\nReference:\nhttps://learn.microsoft.com/en-us/sql/tools/visual-studio-code-extensions/github-copilot/limitations-and-\nknown-issues"
  },
  "zh": {
   "stem": "您的开发团队在 Microsoft Visual Studio Code 中使用 MSSQL 扩展和 GitHub Copilot Chat 扩展。\n团队使用各自的数据库登录名连接到一个 Azure SQL 数据库，并使用 @mssql 聊天参与者根据提示生成并运行 Transact-SQL 查询。\n用什么来确保 GitHub Copilot Chat 生成的查询在该开发人员的上下文中运行？",
   "options": {
    "A": "SQL 权限",
    "B": "Azure 基于角色的访问控制 (Azure RBAC) 权限",
    "C": "GitHub 组织权限",
    "D": "共享的 MCP 指令文件"
   },
   "explanation": "使用 @mssql 聊天参与者时，要确保 GitHub Copilot Chat 生成的查询在特定开发人员的上下文中运行，靠的是 SQL 权限。\n\n原因：@mssql 扩展执行 Copilot 生成的查询时，使用的是 VS Code 中当前已建立的活动连接。由于团队使用各自的数据库登录名：\n身份验证：开发人员使用自己的凭据登录。\n授权：SQL Server 引擎检查分配给该数据库用户的 SQL 权限 (GRANT/DENY/REVOKE)。\n执行：Copilot 聊天参与者发送的任何 T-SQL 命令都受限于该登录名被允许执行的操作（例如 SELECT、UPDATE 或 DROP）。"
  }
 },
 {
  "id": 76,
  "section": "Secure, optimize, and deploy database solutions",
  "sectionZh": "保护、优化和部署数据库解决方案",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You have an Azure SQL database that supports an AI-enabled product catalog API. The database contains a table named Sales.Orders. Sales.Orders contains 20 million rows and has a nonclustered index on a column named CreateDate.\nThe API passes a date parameter named @OrderDate.\nYou have a stored procedure named get_latest_day_orders that filters by running the following query.\nWHERE CAST(CreateDate AS date) = @0rderDate.\nA review of the query execution reveals that the query causes an index scan.\nYou need to modify the predicate to ensure that Microsoft SQL Server can use an index seek on CreateDate for a single day.\nWhich WHERE clause should you use?",
   "options": {
    "A": "WHERE CreateDate >= @OrderDate AND CreateDate < DATEADD(day, 1, @0rderDate)",
    "B": "WHERE CreateDate LIKE CONVERT(char(10), @0rderDate, 121) + ‘%’",
    "C": "WHERE LEFT(CONVERT(varchar(30), CreateDate, 121), 10) = CONVERT(char(10), @0rderDate, 121)",
    "D": "WHERE CONVERT(char(10), CreateDate, 121) = CONVERT(char(10), @OrderDate, 121)"
   },
   "explanation": "To achieve an Index Seek on your CreateDate column, you must remove the CAST function from the column side of the equation. Wrapping a column in a function makes the expression non-SARGable (Searchable Argument), forcing SQL Server to scan the entire index rather than jumping to a specific range.\nThe Recommended WHERE Clause To capture all rows for a single day while remaining SARGable, use a range comparison:\nWHERE CreateDate >= @OrderDate AND CreateDate < DATEADD(day, 1, @OrderDate) Why This Works Eliminates Functions on Columns: By keeping CreateDate \"naked,\" the query optimizer can use the nonclustered index to find the exact starting point.\nHandles Time Components: Since CreatedDate likely contains time data (DATETIME or DATETIME2), this logic captures everything from 00:00:00.000 up to (but not including) midnight of the following day.\nSingle Day Precision: It creates a \"half-open\" interval that is the standard best practice for date filtering in SQL Server.\nReference:\nhttps://medium.com/@c.charalambos1998/how-to-design-indexes-in-sql-server-for-faster-query-\nperformance-4a2279a9b512"
  },
  "zh": {
   "stem": "您有一个支持 AI 产品目录 API 的 Azure SQL 数据库。该数据库包含一个名为 Sales.Orders 的表，该表有 2000 万行，并在名为 CreateDate 的列上有一个非聚集索引。\n该 API 传递一个名为 @OrderDate 的日期参数。\n您有一个名为 get_latest_day_orders 的存储过程，它通过运行以下查询进行筛选：\nWHERE CAST(CreateDate AS date) = @OrderDate。\n对查询执行情况的审查显示该查询导致了索引扫描。\n您需要修改谓词，确保 Microsoft SQL Server 能针对单个日期对 CreateDate 使用索引查找。\n您应该使用哪个 WHERE 子句？",
   "options": {
    "A": "WHERE CreateDate >= @OrderDate AND CreateDate < DATEADD(day, 1, @OrderDate)",
    "B": "WHERE CreateDate LIKE CONVERT(char(10), @OrderDate, 121) + '%'",
    "C": "WHERE LEFT(CONVERT(varchar(30), CreateDate, 121), 10) = CONVERT(char(10), @OrderDate, 121)",
    "D": "WHERE CONVERT(char(10), CreateDate, 121) = CONVERT(char(10), @OrderDate, 121)"
   },
   "explanation": "要对 CreateDate 列实现索引查找，必须去掉等式列一侧的 CAST 函数。把列包在函数里会使表达式不可 SARG 化，迫使 SQL Server 扫描整个索引，而不是跳到特定范围。\n\n推荐写法（保持可 SARG 化的范围比较）：\nWHERE CreateDate >= @OrderDate\n  AND CreateDate < DATEADD(day, 1, @OrderDate)\n\n原因：\n列上不带函数：CreateDate 保持“裸列”，优化器就能用非聚集索引定位精确起点。\n处理时间部分：CreateDate 很可能带时间（DATETIME 或 DATETIME2），该逻辑会覆盖从 00:00:00.000 起到次日零点（不含）的全部数据。\n单日精度：形成一个半开区间。\n\n其余选项都对列应用了函数或转换，同样不可 SARG 化。"
  }
 },
 {
  "id": 77,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You need to generate embeddings to resolve the issues identified by the analysts.\nWhich column should you use?",
   "options": {
    "A": "VehicleLocation",
    "B": "IncidentDescription",
    "C": "IncidentType",
    "D": "SeverityScore"
   },
   "explanation": "Scenario: VehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.\nThe column you should use to generate embeddings is IncidentDescription.\nWhy this is the correct choice:\nSemantic Meaning: Embeddings are designed to capture the semantic meaning of rich, unstructured text.\nThe IncidentDescription column likely contains the detailed natural language notes about weather, traffic,\nand location that the analysts are struggling to search effectively using standard methods.\nVector Search: By converting the text in IncidentDescription into mathematical vectors (embeddings), you can perform a semantic vector search. This allows the database to find \"similar\" incidents based on the context of the description rather than just matching exact keywords or categories.\nIncorrect:\n[Not A] VehicleLocation: Typically contains specific coordinates or addresses which are better handled by spatial data types or exact matching.\n[Not C] IncidentType: Is likely a categorical label (e.g., \"Fender Bender\", \"Multi-car pileup\") and too simple for meaningful embedding generation.\n[Not D] SeverityScore: Is a numeric value that represents a magnitude, not a semantic concept.\nReference:",
   "scenario": "Existing Environment\nAzure Environment\nContoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.\n\nTable names            Column names\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (primary key)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (primary key)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (primary key)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (primary key)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (primary key)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (primary key)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (primary key)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (primary key)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nThe FeedbackJson column has a full-text index and stores JSON documents in the following format.\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nThe support staff at Contoso never has the UNMASK permission.\n\nProblem Statements\nContoso is deploying a new Azure SQL database that will become the authoritative data store for the following:\nAI workloads\nVector search\nModernized API access\nRetrieval Augmented Generation (RAG) pipelines\nSometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.\nThe engineers at Contoso report that the following dashboard query runs slowly.\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\nYou review the execution plan and discover that the plan shows a clustered index scan.\nVehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.\n\nRequirements\nPlanned Changes\nContoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.\n\nSecurity Requirements\nContoso identifies the following security requirements:\nRestrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.\nEnforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.\n\nDatabase Performance and Requirements\nContoso identifies the following telemetry requirements:\nTelemetry data must be stored in a partitioned table.\nTelemetry data must provide predictable performance for ingestion and retention operations.\nlatitude, longitude, and accuracy JSON properties must be filtered by using an index seek.\nContoso identifies the following maintenance data requirements:\nEnsure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.\nAvoid recursive updates.\n\nAI Search, Embeddings, and Vector Indexing\nContoso plans to implement semantic search over incident data to meet the following requirements:\nEmbeddings must be stored in dedicated Azure SQL Database tables.\nEmbeddings must be generated from rich natural language fields.\nChunking must preserve semantic coherence.\nHybrid search must combine the following:\n    - Vector similarity\n    - Keyword filtering or boosting\n\nDevelopment Requirements\nThe development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.\nContoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:\nExtract the customer feedback text from the JSON document.\nFilter rows where the JSON text contains a keyword.\nCalculate a fuzzy similarity score between the feedback text and a known issue description.\nOrder the results by similarity score, with the highest score first."
  },
  "zh": {
   "stem": "您需要生成嵌入来解决分析师发现的问题。\n您应该使用哪一列？",
   "options": {
    "A": "VehicleLocation",
    "B": "IncidentDescription",
    "C": "IncidentType",
    "D": "SeverityScore"
   },
   "explanation": "场景：VehicleIncidentReports 中经常包含有关天气、交通状况和位置的详细信息；分析师报告称很难根据这些细节查找相似事件。\n\n应该用于生成嵌入的列是 IncidentDescription。\n语义含义：嵌入旨在捕捉内容丰富的非结构化文本的语义。IncidentDescription 列正是包含天气、交通和位置等详细自然语言描述的字段，也正是分析师难以用常规方法搜索的内容。\n向量搜索：把 IncidentDescription 中的文本转换成数学向量后，即可执行语义向量搜索，让数据库基于描述的上下文而非精确关键字或类别来查找“相似”事件。\n\nIncidentType 是分类值，SeverityScore 是数字，VehicleLocation 内容过于简短，都不适合作为嵌入来源。",
   "scenario": "现有环境\nAzure 环境\nContoso 在 North Europe 有一个 Azure 订阅，其中包含公司基础结构。当前的基础结构包含一个 Microsoft SQL Server 2017 数据库。该数据库包含以下表。\n\n表名                   列名\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (主键)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (主键)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (主键)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (主键)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (主键)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (主键)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (主键)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (主键)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nFeedbackJson 列具有全文索引，并以下列格式存储 JSON 文档。\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nContoso 的支持人员从不具有 UNMASK 权限。\n\n问题陈述\nContoso 正在部署一个新的 Azure SQL 数据库，它将成为以下各项的权威数据存储：\nAI 工作负载\n向量搜索\n现代化的 API 访问\n检索增强生成 (RAG) 管道\n引入管道有时会因格式错误的 JSON 和重复的有效负载而失败。\nContoso 的工程师报告以下仪表板查询运行缓慢。\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\n您查看执行计划后发现该计划显示为聚集索引扫描。\nVehicleIncidentReports 中经常包含有关天气、交通状况和位置的详细信息。分析师报告称，很难根据这些详细信息查找相似的事件。\n\n要求\n计划的更改\nContoso 希望对 Fleet Intelligence Platform 进行现代化改造，以支持对事件报告进行 AI 驱动的语义搜索。\n\n安全要求\nContoso 确定了以下安全要求：\n限制支持人员查看个人身份信息 (PII) 数据，即完整的电子邮件地址和电话号码。\n强制执行行级筛选，使分析师只能看到分配给他们的车队的事件。分析师可以被分配到多个车队。\n\n数据库性能与要求\nContoso 确定了以下遥测要求：\n遥测数据必须存储在分区表中。\n遥测数据必须为引入和保留操作提供可预测的性能。\n必须使用索引查找 (index seek) 对 latitude、longitude 和 accuracy 这几个 JSON 属性进行筛选。\nContoso 确定了以下维护数据要求：\n确保对 MaintenanceEvents 表中某一行的任何更改都会将 LastModifiedUtc 列中的相应值更新为更改发生的时间。\n避免递归更新。\n\nAI 搜索、嵌入和向量索引\nContoso 计划对事件数据实施语义搜索，以满足以下要求：\n嵌入必须存储在专用的 Azure SQL Database 表中。\n嵌入必须从内容丰富的自然语言字段生成。\n分块必须保持语义连贯性。\n混合搜索必须结合以下各项：\n    - 向量相似度\n    - 关键字筛选或加权\n\n开发要求\nContoso 的开发团队将使用 Microsoft Visual Studio Code 和 GitHub Copilot，并将从数据库检索实时元数据。\nContoso 确定了以下针对查询 CustomerFeedback 表的 FeedbackJson 列中数据的要求：\n从 JSON 文档中提取客户反馈文本。\n筛选 JSON 文本中包含某个关键字的行。\n计算反馈文本与已知问题描述之间的模糊相似度分数。\n按相似度分数对结果排序，分数最高的排在最前面。"
  }
 },
 {
  "id": 78,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You need to enable similarity search to provide the analysts with the ability to retrieve the most relevant health summary reports. The solution must minimize latency.\nWhat should you include in the solution?",
   "options": {
    "A": "a computed column that manually compares vector values",
    "B": "a standard nonclustered index on the Embeddings (vector (1536)) column",
    "C": "a full-text index on the Embeddings (vector (1536)) column",
    "D": "a vector index on the Embeddings (vector (1536)) column"
   },
   "explanation": "Scenario: There is a VehicleHealthSummary table.\nTo enable similarity search on your health summary data while minimizing latency, you should use the native VECTOR data type and a DiskANN vector index, which are now available in public preview for Azure SQL Database.\nSolution Implementation\n1. Define the Vector Column: Ensure your embeddings are stored using the native VECTOR(1536) type rather than NVARCHAR or VARBINARY. This format is optimized for high-dimensional data and mathematical operations.\nALTER TABLE HealthSummaries ADD SummaryVector VECTOR(1536);\n2. Create the Vector Index: Use the CREATE VECTOR INDEX statement. In Azure SQL, this uses the DiskANN algorithm, which is specifically designed to provide high-speed Approximate Nearest Neighbor (ANN) searches for large datasets.\nCREATE VECTOR INDEX idx_health_summary_vector ON HealthSummaries (SummaryVector) WITH ( METRIC = 'COSINE', TYPE = 'DISKANN' );\n3. Perform the Similarity Search: To leverage the index for low-latency retrieval, use the VECTOR_SEARCH function rather than VECTOR_DISTANCE. While VECTOR_DISTANCE calculates exact values (resulting in a full table scan), VECTOR_SEARCH utilizes the DiskANN index to find the most relevant reports quickly.\n\nSELECT TOP(10) *\nFROM HealthSummaries\nORDER BY VECTOR_DISTANCE('cosine', SummaryVector, @query_vector);\nReference:",
   "scenario": "Existing Environment\nAzure Environment\nContoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.\n\nTable names            Column names\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (primary key)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (primary key)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (primary key)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (primary key)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (primary key)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (primary key)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (primary key)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (primary key)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nThe FeedbackJson column has a full-text index and stores JSON documents in the following format.\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nThe support staff at Contoso never has the UNMASK permission.\n\nProblem Statements\nContoso is deploying a new Azure SQL database that will become the authoritative data store for the following:\nAI workloads\nVector search\nModernized API access\nRetrieval Augmented Generation (RAG) pipelines\nSometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.\nThe engineers at Contoso report that the following dashboard query runs slowly.\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\nYou review the execution plan and discover that the plan shows a clustered index scan.\nVehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.\n\nRequirements\nPlanned Changes\nContoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.\n\nSecurity Requirements\nContoso identifies the following security requirements:\nRestrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.\nEnforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.\n\nDatabase Performance and Requirements\nContoso identifies the following telemetry requirements:\nTelemetry data must be stored in a partitioned table.\nTelemetry data must provide predictable performance for ingestion and retention operations.\nlatitude, longitude, and accuracy JSON properties must be filtered by using an index seek.\nContoso identifies the following maintenance data requirements:\nEnsure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.\nAvoid recursive updates.\n\nAI Search, Embeddings, and Vector Indexing\nContoso plans to implement semantic search over incident data to meet the following requirements:\nEmbeddings must be stored in dedicated Azure SQL Database tables.\nEmbeddings must be generated from rich natural language fields.\nChunking must preserve semantic coherence.\nHybrid search must combine the following:\n    - Vector similarity\n    - Keyword filtering or boosting\n\nDevelopment Requirements\nThe development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.\nContoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:\nExtract the customer feedback text from the JSON document.\nFilter rows where the JSON text contains a keyword.\nCalculate a fuzzy similarity score between the feedback text and a known issue description.\nOrder the results by similarity score, with the highest score first."
  },
  "zh": {
   "stem": "您需要启用相似度搜索，使分析师能够检索最相关的健康状况摘要报告。该解决方案必须最大限度地降低延迟。\n您应该在解决方案中包含什么？",
   "options": {
    "A": "手动比较向量值的计算列",
    "B": "Embeddings (vector(1536)) 列上的标准非聚集索引",
    "C": "Embeddings (vector(1536)) 列上的全文索引",
    "D": "Embeddings (vector(1536)) 列上的向量索引"
   },
   "explanation": "场景中存在 VehicleHealthSummary 表。\n要在健康状况摘要数据上启用相似度搜索并尽量降低延迟，应使用原生 VECTOR 数据类型和 DiskANN 向量索引。\n\n1. 定义向量列：确保嵌入使用原生 VECTOR(1536) 类型存储，而不是 NVARCHAR 或 VARBINARY；该格式针对高维数据和数学运算做了优化。\nALTER TABLE HealthSummaries ADD SummaryVector VECTOR(1536);\n\n2. 创建向量索引：使用 CREATE VECTOR INDEX 语句。在 Azure SQL 中它采用 DiskANN 算法，专为大型数据集提供高速近似最近邻 (ANN) 搜索。\nCREATE VECTOR INDEX idx_health_summary_vector\nON HealthSummaries (SummaryVector)\nWITH ( METRIC = 'cosine', TYPE = 'DiskANN' );\n\n普通非聚集索引和全文索引都无法加速向量相似度搜索；计算列逐行比较则延迟极高。",
   "scenario": "现有环境\nAzure 环境\nContoso 在 North Europe 有一个 Azure 订阅，其中包含公司基础结构。当前的基础结构包含一个 Microsoft SQL Server 2017 数据库。该数据库包含以下表。\n\n表名                   列名\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (主键)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (主键)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (主键)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (主键)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (主键)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (主键)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (主键)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (主键)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nFeedbackJson 列具有全文索引，并以下列格式存储 JSON 文档。\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nContoso 的支持人员从不具有 UNMASK 权限。\n\n问题陈述\nContoso 正在部署一个新的 Azure SQL 数据库，它将成为以下各项的权威数据存储：\nAI 工作负载\n向量搜索\n现代化的 API 访问\n检索增强生成 (RAG) 管道\n引入管道有时会因格式错误的 JSON 和重复的有效负载而失败。\nContoso 的工程师报告以下仪表板查询运行缓慢。\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\n您查看执行计划后发现该计划显示为聚集索引扫描。\nVehicleIncidentReports 中经常包含有关天气、交通状况和位置的详细信息。分析师报告称，很难根据这些详细信息查找相似的事件。\n\n要求\n计划的更改\nContoso 希望对 Fleet Intelligence Platform 进行现代化改造，以支持对事件报告进行 AI 驱动的语义搜索。\n\n安全要求\nContoso 确定了以下安全要求：\n限制支持人员查看个人身份信息 (PII) 数据，即完整的电子邮件地址和电话号码。\n强制执行行级筛选，使分析师只能看到分配给他们的车队的事件。分析师可以被分配到多个车队。\n\n数据库性能与要求\nContoso 确定了以下遥测要求：\n遥测数据必须存储在分区表中。\n遥测数据必须为引入和保留操作提供可预测的性能。\n必须使用索引查找 (index seek) 对 latitude、longitude 和 accuracy 这几个 JSON 属性进行筛选。\nContoso 确定了以下维护数据要求：\n确保对 MaintenanceEvents 表中某一行的任何更改都会将 LastModifiedUtc 列中的相应值更新为更改发生的时间。\n避免递归更新。\n\nAI 搜索、嵌入和向量索引\nContoso 计划对事件数据实施语义搜索，以满足以下要求：\n嵌入必须存储在专用的 Azure SQL Database 表中。\n嵌入必须从内容丰富的自然语言字段生成。\n分块必须保持语义连贯性。\n混合搜索必须结合以下各项：\n    - 向量相似度\n    - 关键字筛选或加权\n\n开发要求\nContoso 的开发团队将使用 Microsoft Visual Studio Code 和 GitHub Copilot，并将从数据库检索实时元数据。\nContoso 确定了以下针对查询 CustomerFeedback 表的 FeedbackJson 列中数据的要求：\n从 JSON 文档中提取客户反馈文本。\n筛选 JSON 文本中包含某个关键字的行。\n计算反馈文本与已知问题描述之间的模糊相似度分数。\n按相似度分数对结果排序，分数最高的排在最前面。"
  }
 },
 {
  "id": 79,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "You need to recommend a solution for the development team to retrieve the live metadata. The solution must meet the development requirements.\nWhat should you include in the recommendation?",
   "options": {
    "A": "Export the database schema as a .dacpac file and load the schema into a GitHub Copilot context window.",
    "B": "Add the schema to a GitHub Copilot instruction file.",
    "C": "Use an MCP server.",
    "D": "Include the database project in the code repository."
   },
   "explanation": "Scenario: Development Requirements The development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will\n\nretrieve live metadata from the databases.\n--\nTo retrieve live metadata from Azure SQL databases and use it with GitHub Copilot in Visual Studio Code (VS Code), you must use the SQL Server (mssql) extension. This extension provides the native capability to extract a database schema as a .dacpac file directly within the editor.\n1. Export the Schema as a .dacpac File You can extract the schema of your live Azure SQL database using the SQL Server (mssql) extension.\n2. Load the .dacpac into GitHub Copilot Context Once the .dacpac file is saved in your VS Code workspace, you can provide it as context to GitHub Copilot Chat using #-mentions or Drag & Drop.\nReference:",
   "scenario": "Existing Environment\nAzure Environment\nContoso has an Azure subscription in North Europe that contains the corporate infrastructure. The current infrastructure contains a Microsoft SQL Server 2017 database. The database contains the following tables.\n\nTable names            Column names\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (primary key)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (primary key)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (primary key)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (primary key)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (primary key)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (primary key)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (primary key)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (primary key)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nThe FeedbackJson column has a full-text index and stores JSON documents in the following format.\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nThe support staff at Contoso never has the UNMASK permission.\n\nProblem Statements\nContoso is deploying a new Azure SQL database that will become the authoritative data store for the following:\nAI workloads\nVector search\nModernized API access\nRetrieval Augmented Generation (RAG) pipelines\nSometimes the ingestion pipeline fails due to malformed JSON and duplicate payloads.\nThe engineers at Contoso report that the following dashboard query runs slowly.\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\nYou review the execution plan and discover that the plan shows a clustered index scan.\nVehicleIncidentReports often contains details about the weather, traffic conditions, and location. Analysts report that it is difficult to find similar incidents based on these details.\n\nRequirements\nPlanned Changes\nContoso wants to modernize Fleet Intelligence Platform to support AI-powered semantic search over incident reports.\n\nSecurity Requirements\nContoso identifies the following security requirements:\nRestrict the support staff from viewing Personally Identifiable Information (PII) data, which is full email addresses and phone numbers.\nEnforce row-level filtering so that analysts see only incidents for the fleets to which they are assigned. The analysts can be assigned to multiple fleets.\n\nDatabase Performance and Requirements\nContoso identifies the following telemetry requirements:\nTelemetry data must be stored in a partitioned table.\nTelemetry data must provide predictable performance for ingestion and retention operations.\nlatitude, longitude, and accuracy JSON properties must be filtered by using an index seek.\nContoso identifies the following maintenance data requirements:\nEnsure that any changes to a row in the MaintenanceEvents table updates the corresponding value in the LastModifiedUtc column to the time of the change.\nAvoid recursive updates.\n\nAI Search, Embeddings, and Vector Indexing\nContoso plans to implement semantic search over incident data to meet the following requirements:\nEmbeddings must be stored in dedicated Azure SQL Database tables.\nEmbeddings must be generated from rich natural language fields.\nChunking must preserve semantic coherence.\nHybrid search must combine the following:\n    - Vector similarity\n    - Keyword filtering or boosting\n\nDevelopment Requirements\nThe development team at Contoso will use Microsoft Visual Studio Code and GitHub Copilot and will retrieve live metadata from the databases.\nContoso identifies the following requirements for querying data in the FeedbackJson column of the CustomerFeedback table:\nExtract the customer feedback text from the JSON document.\nFilter rows where the JSON text contains a keyword.\nCalculate a fuzzy similarity score between the feedback text and a known issue description.\nOrder the results by similarity score, with the highest score first."
  },
  "zh": {
   "stem": "您需要为开发团队推荐一个检索实时元数据的解决方案。该解决方案必须满足开发要求。\n您应该在建议中包含什么？",
   "options": {
    "A": "把数据库架构导出为 .dacpac 文件，并把该架构加载到 GitHub Copilot 上下文窗口中。",
    "B": "把架构添加到 GitHub Copilot 指令文件中。",
    "C": "使用 MCP 服务器。",
    "D": "把数据库项目包含在代码存储库中。"
   },
   "explanation": "场景（开发要求）：Contoso 的开发团队将使用 Microsoft Visual Studio Code 和 GitHub Copilot，并从数据库检索实时元数据。\n\n要从 Azure SQL 数据库检索实时元数据并在 VS Code 的 GitHub Copilot 中使用，需要借助 SQL Server (mssql) 扩展，它可以在编辑器中直接把数据库架构提取为 .dacpac 文件。\n1. 导出架构为 .dacpac 文件：使用 SQL Server (mssql) 扩展从实时 Azure SQL 数据库提取架构。\n2. 把 .dacpac 加载到 GitHub Copilot 上下文：把该文件保存到 VS Code 工作区后，可通过 #-提及或拖放把它作为上下文提供给 GitHub Copilot Chat。\n\n把架构写进指令文件或把数据库项目放进存储库，都只是静态快照，不能提供“实时”元数据。",
   "scenario": "现有环境\nAzure 环境\nContoso 在 North Europe 有一个 Azure 订阅，其中包含公司基础结构。当前的基础结构包含一个 Microsoft SQL Server 2017 数据库。该数据库包含以下表。\n\n表名                   列名\n---------------------  ------------------------------------------------\nCustomerFeedback       FeedbackId (int) (主键)\n                       FeedbackJson (nvarchar(max))\nFleets                 FleetId (int) (主键)\n                       FleetName (nvarchar(100))\n                       Description (nvarchar(256))\nMaintenanceEvents      MaintenanceId (int) (主键)\n                       VehicleId (int)\n                       LastModifiedUTC (datetime2)\n                       Description (nvarchar(256))\nSupportTickets         TicketId (int) (主键)\n                       FleetId (int)\n                       CreatedUtc (datetime2)\nUserAccounts           UserId (int) (主键)\n                       UserPrincipalName (nvarchar(256))\n                       JobRole (nvarchar(256))\n                       StartDate (datetime2)\nVehicleIncidentReports IncidentId (int) (主键)\n                       VehicleId (int)\n                       FleetId (int)\n                       IncidentType (nvarchar(50))\n                       VehicleLocation (nvarchar(200))\n                       IncidentDescription (nvarchar(max))\n                       SeverityScore (int)\nVehicles               VehicleId (int) (主键)\n                       VIN (nvarchar(50))\n                       VehicleDescription (nvarchar(256))\nVehicleHealthSummary   VehicleId (int) (主键)\n                       FleetId (int)\n                       Summary (nvarchar(2000))\n                       LastUpdatedUtc (datetime2)\n                       EngineStatus [bit]\n                       EngineStatusLastUpdatedUtc (datetime2)\n                       BatteryHealth (int)\n                       Embeddings (vector(1536))\n\nFeedbackJson 列具有全文索引，并以下列格式存储 JSON 文档。\n\n{\n  \"text\": \"The battery drains too fast when driving uphill.\",\n  \"category\": \"Battery\",\n  \"metadata\": {\n    \"appVersion\": \"5.2.1\",\n    \"device\": \"Android\",\n    \"language\": \"en-GB\"\n  }\n}\n\nContoso 的支持人员从不具有 UNMASK 权限。\n\n问题陈述\nContoso 正在部署一个新的 Azure SQL 数据库，它将成为以下各项的权威数据存储：\nAI 工作负载\n向量搜索\n现代化的 API 访问\n检索增强生成 (RAG) 管道\n引入管道有时会因格式错误的 JSON 和重复的有效负载而失败。\nContoso 的工程师报告以下仪表板查询运行缓慢。\n\nSELECT VehicleId, LastUpdatedUtc, EngineStatus, BatteryHealth\nFROM dbo.VehicleHealthSummary\nWHERE FleetId = @FleetId\nORDER BY LastUpdatedUtc DESC;\n\n您查看执行计划后发现该计划显示为聚集索引扫描。\nVehicleIncidentReports 中经常包含有关天气、交通状况和位置的详细信息。分析师报告称，很难根据这些详细信息查找相似的事件。\n\n要求\n计划的更改\nContoso 希望对 Fleet Intelligence Platform 进行现代化改造，以支持对事件报告进行 AI 驱动的语义搜索。\n\n安全要求\nContoso 确定了以下安全要求：\n限制支持人员查看个人身份信息 (PII) 数据，即完整的电子邮件地址和电话号码。\n强制执行行级筛选，使分析师只能看到分配给他们的车队的事件。分析师可以被分配到多个车队。\n\n数据库性能与要求\nContoso 确定了以下遥测要求：\n遥测数据必须存储在分区表中。\n遥测数据必须为引入和保留操作提供可预测的性能。\n必须使用索引查找 (index seek) 对 latitude、longitude 和 accuracy 这几个 JSON 属性进行筛选。\nContoso 确定了以下维护数据要求：\n确保对 MaintenanceEvents 表中某一行的任何更改都会将 LastModifiedUtc 列中的相应值更新为更改发生的时间。\n避免递归更新。\n\nAI 搜索、嵌入和向量索引\nContoso 计划对事件数据实施语义搜索，以满足以下要求：\n嵌入必须存储在专用的 Azure SQL Database 表中。\n嵌入必须从内容丰富的自然语言字段生成。\n分块必须保持语义连贯性。\n混合搜索必须结合以下各项：\n    - 向量相似度\n    - 关键字筛选或加权\n\n开发要求\nContoso 的开发团队将使用 Microsoft Visual Studio Code 和 GitHub Copilot，并将从数据库检索实时元数据。\nContoso 确定了以下针对查询 CustomerFeedback 表的 FeedbackJson 列中数据的要求：\n从 JSON 文档中提取客户反馈文本。\n筛选 JSON 文本中包含某个关键字的行。\n计算反馈文本与已知问题描述之间的模糊相似度分数。\n按相似度分数对结果排序，分数最高的排在最前面。"
  }
 },
 {
  "id": 80,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You need to use the UsefulPrompts table as defined in the AI requirements.\nWhich stored procedure should you use?",
   "options": {
    "A": "sp_addendpoint",
    "B": "xp_cmdshell",
    "C": "sp_OACreate",
    "D": "sp_invoke_external_rest_endpoint"
   },
   "explanation": "Scenario:\nThe UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.\nThe system stored procedure sp_invoke_external_rest_endpoint is used to connect an Azure SQL Database to an Azure OpenAI endpoint.This procedure allows you to call HTTPS REST endpoints directly from your database, enabling the integration of generative AI or embedding models into your SQL workflows without an intermediate application layer.\nReference:\nhttps://blog.fabric.microsoft.com/en-gb/blog/ai-ready-apps-from-rag-to-chat-interacting-with-sql-database-\nin-microsoft-fabric-using-graphql-and-mcp",
   "scenario": "Existing Environment\nAzure Environment\nFabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\nYou store a column master key as a secret in Azure Key Vault.\nYou have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.\n\nProblem Statements\nUsers report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.\n\nRequirements\nPlanned Changes\nFabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.\n\nSecurity Requirements\nFabrikam identifies the following security requirements:\nThe TransactionProcessing application must use a passwordless connection to DB1.\nThe Employees table contains two columns named TaxID and Salary that must be encrypted at rest.\nAuditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.\n\nDatabase Performance Requirements\nRecords accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.\n\nAI Search, Embeddings, and Vector Indexing\nFabrikam identifies the following AI-related requirements:\nQueries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).\nUsers must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.\nThe UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.\n\nDevelopment Requirements\nFabrikam identifies the following development requirements:\nProvide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.\nExpose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API:\n    - Read data from the procedures table without authentication.\n    - Read and insert data into the Transactions table once authenticated.\n    - Execute the sp_UpdateProcedurePatient stored procedure.\nProvide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.\nInformation for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\nYou create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "zh": {
   "stem": "您需要按照 AI 要求中的定义使用 UsefulPrompts 表。\n您应该使用哪个存储过程？",
   "options": {
    "A": "sp_addendpoint",
    "B": "xp_cmdshell",
    "C": "sp_OACreate",
    "D": "sp_invoke_external_rest_endpoint"
   },
   "explanation": "场景：UsefulPrompts 表将存储供医生使用的提示，这些提示通过连接到 Azure OpenAI 终结点来帮助诊断患者的疾病。\n\n系统存储过程 sp_invoke_external_rest_endpoint 用于把 Azure SQL Database 连接到 Azure OpenAI 终结点。该过程允许直接从数据库调用 HTTPS REST 终结点，从而无需中间应用层即可把生成式 AI 或嵌入模型集成到 SQL 工作流中。",
   "scenario": "现有环境\nAzure 环境\nFabrikam 在 East US 2 Azure 区域有一个 Azure 订阅。该订阅包含一个名为 DB1 的 Azure SQL 数据库。DB1 包含以下表：\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\n您将一个列主密钥作为机密存储在 Azure Key Vault 中。\n您有一个名为 TransactionProcessing 的本地应用程序，它在连接字符串中使用硬编码的用户名和密码来访问 DB1。\n\n问题陈述\n用户报告称，在执行一个名为 sp_UpdateProcedureForPatient 的长时间运行的存储过程后，对基础数据的更新有时并不一致。\n\n要求\n计划的更改\nFabrikam 计划使用 GitHub 中的源代码管理来管理对 Azure SQL Database 对象的所有更改。提交到生产环境的每个拉取请求在合并前都必须经过验证。部署必须使用 Release 配置。\n\n安全要求\nFabrikam 确定了以下安全要求：\nTransactionProcessing 应用程序必须使用无密码连接来连接 DB1。\nEmployees 表包含两个名为 TaxID 和 Salary 的列，它们必须进行静态加密。\n审核员必须拥有防篡改的事务历史记录，并对员工数据的更改提供加密证明。\n\n数据库性能要求\n在 sp_UpdateProcedureForPatient 运行期间，它所访问的记录不得被其他事务更改。\n\nAI 搜索、嵌入和向量索引\nFabrikam 确定了以下 AI 相关要求：\n对 ProcedureDocuments 表的查询必须使用倒数排名融合 (Reciprocal Rank Fusion, RRF)。\n用户必须能够在 Microsoft Fabric 中的 Copilot 里使用提示来查询 DB1 中的数据。\nUsefulPrompts 表将存储供医生使用的提示，这些提示通过连接到 Azure OpenAI 终结点来帮助诊断患者的疾病。\n\n开发要求\nFabrikam 确定了以下开发要求：\n提供检索给定患者在两个日期之间所有事务的功能，并显示累计合计。\n公开一个 Data API builder (DAB) 配置文件，以便 Azure 服务能够通过 REST API 执行以下操作：\n    - 无需身份验证即可从 procedures 表读取数据。\n    - 通过身份验证后即可读取数据并将数据插入 Transactions 表。\n    - 执行 sp_UpdateProcedurePatient 存储过程。\n提供检索过去 30 天内接受过医疗程序的患者姓名列表的功能。\n每个医疗程序的信息将存储在一个表中。该表将与大型语言模型 (LLM) 一起用于用户查询，并具有以下结构。\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\n您创建了一个 DAB 配置文件，它满足 DB1 的开发要求，并包含以下实体。\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  }
 },
 {
  "id": 81,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": true,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You implement ProcedureDocuments to support the planned changes.\nWhen users consume data through the Retrieval Augmented Generation (RAG) pattern, they experience data retrieval delays.\nYou need to improve the data retrieval performance and reduce the number of tokens per retrieval.\nWhat should you implement?",
   "options": {
    "A": "chunking",
    "B": "embeddings",
    "C": "a small language model (SLM)",
    "D": "JSON content"
   },
   "explanation": "Scenario: Fabrikam identifies the following AI-related requirements: Queries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).\nTo remedy data retrieval delays in a Retrieval Augmented Generation (RAG) pattern using Reciprocal Rank Fusion (RRF) on an Azure SQL Database table, you should use embeddings.\nIn a RAG architecture, retrieval delays often stem from inefficient or computationally heavy search processes. While RRF is excellent for merging results from multiple sources (like combining keyword and vector searches), the core of the speed problem typically lies in how the initial data is indexed and retrieved.\n\nRole of Embeddings Vector Search Acceleration: Embeddings convert text into high-dimensional vectors. Azure SQL Database can perform similarity searches on these vectors much faster than complex semantic text matching.\nHybrid Search Synergy: RRF is most effective when it fuses results from a keyword search (fast) and a vector search (powered by embeddings). Using embeddings ensures that the \"semantic\" side of the retrieval is streamlined.\nPre-computation: Since embeddings are generated once during ingestion, the retrieval phase only requires a distance calculation (e.g., Cosine Similarity), which is significantly faster than real-time natural language parsing during each query.\nReference:\nhttps://pratikbarjatya.medium.com/unlocking-the-power-of-language-with-retrieval-augmented-generation-\nrag-14123cc275e6",
   "scenario": "Existing Environment\nAzure Environment\nFabrikam has a single Azure subscription in the East US 2 Azure region. The subscription contains an Azure SQL database named DB1. DB1 contains the following tables:\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\nYou store a column master key as a secret in Azure Key Vault.\nYou have an on-premises application named TransactionProcessing that uses a hard-coded username and password in a connection string to access DB1.\n\nProblem Statements\nUsers report that after executing a long-running stored procedure named sp_UpdateProcedureForPatient, updates to the underlying data are sometimes inconsistent.\n\nRequirements\nPlanned Changes\nFabrikam plans to manage all changes to Azure SQL Database objects by using source control in GitHub. Every pull request submitted to production will be validated before it can be merged. Deployments must use the Release configuration.\n\nSecurity Requirements\nFabrikam identifies the following security requirements:\nThe TransactionProcessing application must use a passwordless connection to DB1.\nThe Employees table contains two columns named TaxID and Salary that must be encrypted at rest.\nAuditors must have a tamper-evident history of transactions with cryptographic proof of changes to the employee data.\n\nDatabase Performance Requirements\nRecords accessed by using sp_UpdateProcedureForPatient must NOT be changed by other transactions while the stored procedure runs.\n\nAI Search, Embeddings, and Vector Indexing\nFabrikam identifies the following AI-related requirements:\nQueries to the ProcedureDocuments table must use Reciprocal Rank Fusion (RRF).\nUsers must be able to query the data in DB1 by using prompts in Copilot in Microsoft Fabric.\nThe UsefulPrompts table will store prompts that doctors can use to help diagnose patient illness by connecting to an Azure OpenAI endpoint.\n\nDevelopment Requirements\nFabrikam identifies the following development requirements:\nProvide the functionality to retrieve all the transactions of a given patient between two dates, showing a running total.\nExpose a Data API builder (DAB) configuration file to enable Azure services to perform the following operations over a REST API:\n    - Read data from the procedures table without authentication.\n    - Read and insert data into the Transactions table once authenticated.\n    - Execute the sp_UpdateProcedurePatient stored procedure.\nProvide the functionality to retrieve a list of the names of patients who underwent medical procedures during the last 30 days.\nInformation for each medical procedure will be stored in a table. The table will be used with a large language model (LLM) for user querying and will have the following structure.\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\nYou create a DAB configuration file that meets the development requirements for DB1 and includes the following entities.\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  },
  "zh": {
   "stem": "您实现 ProcedureDocuments 以支持计划的更改。\n当用户通过检索增强生成 (RAG) 模式使用数据时，会遇到数据检索延迟。\n您需要提升数据检索性能并减少每次检索的令牌数。\n您应该实现什么？",
   "options": {
    "A": "分块",
    "B": "嵌入",
    "C": "小语言模型 (SLM)",
    "D": "JSON 内容"
   },
   "explanation": "场景：Fabrikam 要求对 ProcedureDocuments 表的查询必须使用倒数排名融合 (RRF)。\n\n要解决在 Azure SQL Database 表上使用 RRF 的 RAG 模式中的检索延迟，应使用嵌入。\n在 RAG 架构中，检索延迟通常源于低效或计算量大的搜索过程。RRF 擅长合并来自多个来源的结果（例如把关键字搜索与向量搜索结合），但速度问题的核心通常在于初始数据如何被索引和检索。\n\n嵌入的作用：\n加速向量搜索：嵌入把文本转换为高维向量，Azure SQL Database 对这些向量执行相似度搜索的速度远快于复杂的语义文本匹配。\n与混合搜索协同：RRF 在同时具备高质量的向量结果与关键字结果时效果最佳，同时检索到的片段更精准，也就减少了送入模型的令牌数。",
   "scenario": "现有环境\nAzure 环境\nFabrikam 在 East US 2 Azure 区域有一个 Azure 订阅。该订阅包含一个名为 DB1 的 Azure SQL 数据库。DB1 包含以下表：\nPatients\nEmployees\nProcedures\nTransactions\nUsefulPrompts\nProcedureDocuments\n您将一个列主密钥作为机密存储在 Azure Key Vault 中。\n您有一个名为 TransactionProcessing 的本地应用程序，它在连接字符串中使用硬编码的用户名和密码来访问 DB1。\n\n问题陈述\n用户报告称，在执行一个名为 sp_UpdateProcedureForPatient 的长时间运行的存储过程后，对基础数据的更新有时并不一致。\n\n要求\n计划的更改\nFabrikam 计划使用 GitHub 中的源代码管理来管理对 Azure SQL Database 对象的所有更改。提交到生产环境的每个拉取请求在合并前都必须经过验证。部署必须使用 Release 配置。\n\n安全要求\nFabrikam 确定了以下安全要求：\nTransactionProcessing 应用程序必须使用无密码连接来连接 DB1。\nEmployees 表包含两个名为 TaxID 和 Salary 的列，它们必须进行静态加密。\n审核员必须拥有防篡改的事务历史记录，并对员工数据的更改提供加密证明。\n\n数据库性能要求\n在 sp_UpdateProcedureForPatient 运行期间，它所访问的记录不得被其他事务更改。\n\nAI 搜索、嵌入和向量索引\nFabrikam 确定了以下 AI 相关要求：\n对 ProcedureDocuments 表的查询必须使用倒数排名融合 (Reciprocal Rank Fusion, RRF)。\n用户必须能够在 Microsoft Fabric 中的 Copilot 里使用提示来查询 DB1 中的数据。\nUsefulPrompts 表将存储供医生使用的提示，这些提示通过连接到 Azure OpenAI 终结点来帮助诊断患者的疾病。\n\n开发要求\nFabrikam 确定了以下开发要求：\n提供检索给定患者在两个日期之间所有事务的功能，并显示累计合计。\n公开一个 Data API builder (DAB) 配置文件，以便 Azure 服务能够通过 REST API 执行以下操作：\n    - 无需身份验证即可从 procedures 表读取数据。\n    - 通过身份验证后即可读取数据并将数据插入 Transactions 表。\n    - 执行 sp_UpdateProcedurePatient 存储过程。\n提供检索过去 30 天内接受过医疗程序的患者姓名列表的功能。\n每个医疗程序的信息将存储在一个表中。该表将与大型语言模型 (LLM) 一起用于用户查询，并具有以下结构。\n\nCREATE TABLE dbo.ProcedureDocuments\n  (\n    DocumentId INT IDENTITY PRIMARY KEY,\n    SourceId NVARCHAR(200) NULL,\n    Content NVARCHAR(MAX) NOT NULL,\n    Embedding VECTOR(1536) NOT NULL,\n    CreatedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()\n  );\n\nDAB\n您创建了一个 DAB 配置文件，它满足 DB1 的开发要求，并包含以下实体。\n\n\"entities\": {\n  \"Procedures\": {\n    \"source\": \"dbo.Procedures\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"anonymous\",\n        \"actions\": [ \"read\" ]\n      }\n    ]\n  },\n  \"Transactions\": {\n    \"source\": \"dbo.Transactions\",\n    \"rest\": true,\n    \"graphql\": true,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"read\", \"create\" ]\n      }\n    ]\n  },\n  \"UpdateProcedurePatient\": {\n    \"source\": \"dbo.sp_UpdateProcedurePatient\",\n    \"rest\": {\n      \"enabled\": true,\n      \"method\": \"post\",\n      \"path\": \"/procedurepatient\"\n    },\n    \"graphql\": false,\n    \"permissions\": [\n      {\n        \"role\": \"authenticated\",\n        \"actions\": [ \"execute\" ]\n      }\n    ]\n  }\n}"
  }
 },
 {
  "id": 82,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database named SalesDB that contains tables named Sales.Orders and Sales.OrderLines. Both tables contain sales data.\nYou have a Retrieval Augmented Generation (RAG) service that queries SalesDB to retrieve order details and passes the results to a large language model (LLM) as JSON text. The following is a simple of the JSON.\n\nYou need to return one JSON document per order that includes the order header fields and an array of related order lines. The LLM must receive a single JSON array of orders, where each order contains a lines property that is a JSON array of line items.\nWhich Transact-SQL commands should you use to produce the required JSON shape from the relational tables? To answer, drag the appropriate commands to the correct operations. Each command may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: JSON_QUERY\nSerialize the order-level JSON.\nTo serialize your Azure SQL data into a nested JSON structure for a RAG service, use FOR JSON PATH\nin a subquery combined with JSON_QUERY. This ensures that the order lines are treated as a nested\narray rather than an escaped string.\nSELECT\n    O.OrderID,\n    O.OrderDate,\n    O.CustomerID,\n    JSON_QUERY((\n        SELECT\n            OL.OrderLineID,\n            OL.ProductID,\n            OL.Quantity,\n            OL.UnitPrice\n        FROM Sales.OrderLines AS OL\n\n        WHERE OL.OrderID = O.OrderID\n        FOR JSON PATH\n    )) AS OrderLines\nFROM Sales.Orders AS O\nFOR JSON PATH;\nBox 2: FOR JSON PATH\nGenerate a nested lines array.\nTo generate a nested array of order lines within each order for an Azure SQL database, use a SELECT\nstatement with the FOR JSON PATH clause containing a correlated subquery.\n\nThe primary Transact-SQL statement structure is:\nSELECT\n    O.OrderId,\n    O.OrderDate,\n    (\n        SELECT\n            L.OrderLineId,\n            L.Quantity,\n            L.UnitPrice\n        FROM Sales.OrderLines AS L\n        WHERE L.OrderId = O.OrderId\n        FOR JSON PATH\n    ) AS Lines\nFROM Sales.Orders AS O\nFOR JSON PATH;\nBox 3: JSON_VALUE\nExtract a single scalar value from the JSON text.\nThe Transact-SQL statement used to extract a single scalar value from a JSON text in Azure SQL\nDatabase is JSON_VALUE.\nThis function takes two arguments:\nThe JSON expression (a column or variable containing the JSON text).\nA JSON path that specifies the property to extract.\nReference:"
  },
  "zh": {
   "stem": "您有一个名为 SalesDB 的 Azure SQL 数据库，其中包含名为 Sales.Orders 和 Sales.OrderLines 的表。这两个表都包含销售数据。\n您有一个检索增强生成 (RAG) 服务，它查询 SalesDB 以检索订单详细信息，并把结果以 JSON 文本形式传递给大型语言模型 (LLM)。以下是该 JSON 的示例。\n您需要为每个订单返回一个 JSON 文档，其中包含订单头字段和一个相关订单行的数组。LLM 必须收到单个 JSON 订单数组，其中每个订单都包含一个 lines 属性，该属性是行项目的 JSON 数组。\n您应该使用哪些 Transact-SQL 命令从关系表生成所需的 JSON 形状？要回答此问题，请把适当的命令拖动到正确的操作上。每个命令可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：JSON_QUERY —— 序列化订单级 JSON。\n要把 Azure SQL 数据序列化成嵌套 JSON 结构，应在子查询中使用 FOR JSON PATH 并配合 JSON_QUERY，这样订单行才会被当作嵌套数组，而不是被转义的字符串。\n\nSELECT\n    O.OrderID, O.OrderDate, O.CustomerID,\n    JSON_QUERY((\n        SELECT OL.OrderLineID, OL.ProductID, OL.Quantity, OL.UnitPrice\n        FROM Sales.OrderLines AS OL\n        WHERE OL.OrderID = O.OrderID\n        FOR JSON PATH\n    )) AS OrderLines\nFROM Sales.Orders AS O\nFOR JSON PATH;\n\n框 2：FOR JSON PATH —— 生成嵌套的 lines 数组。\n框 3：JSON_VALUE —— 从 JSON 文本中提取单个标量值。"
  },
  "sources_en": [
   "FOR JSON PATH",
   "JSON_MODIFY",
   "JSON_QUERY",
   "JSON_VALUE",
   "OPENJSON"
  ],
  "sources_zh": [
   "FOR JSON PATH",
   "JSON_MODIFY",
   "JSON_QUERY",
   "JSON_VALUE",
   "OPENJSON"
  ],
  "targets": [
   {
    "label_en": "Serialize the order-level JSON:",
    "label_zh": "序列化订单级 JSON：",
    "correct_en": "JSON_QUERY",
    "correct_zh": "JSON_QUERY"
   },
   {
    "label_en": "Generate a nested lines array:",
    "label_zh": "生成嵌套的 lines 数组：",
    "correct_en": "FOR JSON PATH",
    "correct_zh": "FOR JSON PATH"
   },
   {
    "label_en": "Extract a single scalar value from the JSON text:",
    "label_zh": "从 JSON 文本中提取单个标量值：",
    "correct_en": "JSON_VALUE",
    "correct_zh": "JSON_VALUE"
   }
  ],
  "code": {
   "lang": "json",
   "title_en": "The required output format",
   "title_zh": "所需的输出格式",
   "text": "[\n  {\n    \"orderHeaderId\": 102348,\n    \"orderNumber\": \"SO-2026-000912\",\n    \"orderDateUtc\": \"2026-01-28T14:22:09Z\",\n    \"customerId\": 77821,\n    \"currencyCode\": \"EUR\",\n    \"orderTotal\": 149.97,\n    \"lines\": [\n      {\n        \"lineNumber\": 1,\n        \"productId\": 5012,\n        \"sku\": \"CBL-USB-C-1M\",\n        \"quantity\": 2,\n        \"unitPrice\": 19.99,\n        \"lineTotal\": 39.98\n      },\n      {\n        \"lineNumber\": 2,\n        \"productId\": 8841,\n        \"sku\": \"HUB-USB-C-7P\",\n        \"quantity\": 1,\n        \"unitPrice\": 109.99,\n        \"lineTotal\": 109.99\n      }\n    ]\n  }\n]"
  }
 },
 {
  "id": 83,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that contains the following tables and columns.\n\nEmbeddings in the NotesEmbeddings and DescriptionEmbeddings tables have been generated from values in the Description and Notes columns of the Articles table by using different chunk sizes.\nYou need to perform approximate nearest neighbor (ANN) queries across both embedding tables. The solution must minimize the impact of using different chunk sizes.\nWhat should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "In this Azure SQL Database scenario, you should use the VECTOR_SEARCH function and the cosine distance metric to perform Approximate Nearest Neighbor (ANN) queries while minimizing the impact of different chunk sizes.\nBox 1: VECTOR_SEARCH Function Appropriate Function: VECTOR_SEARCH To perform an approximate nearest neighbor search that utilizes a vector index for performance, you must use the VECTOR_SEARCH function.\n\nIncorrect:\n[Not VECTOR_DISTANCE] While VECTOR_DISTANCE can calculate distances, it performs an exact search and does not use a vector index, making it significantly slower for large-scale ANN requirements.\nImplementation: You would typically use a UNION ALL or a common table expression (CTE) to combine the results from the two embedding tables, applying VECTOR_SEARCH to each to retrieve the top matches.\nBox 2: cosine distance Distance metric Appropriate Metric: cosine The cosine distance metric is the most effective choice for minimizing the impact of different chunk sizes.\n\nChunk Size Invariance: Different chunk sizes often lead to variations in the \"magnitude\" or \"length\" of the resulting embedding vectors. Cosine distance measures the angle between vectors rather than their magnitude. This ensures that two pieces of text with similar semantic meaning are still considered \"close,\" even if one chunk is significantly longer than the other.\nIncorrect: Alternative Metrics:\n[Not euclidean (L2)] Highly sensitive to vector magnitude; a larger chunk might result in a \"longer\" vector that appears distant from a smaller chunk of the same content.\n[Not dot (Dot Product)] Also influenced by magnitude unless the vectors are pre-normalized.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含以下表和列。\nNotesEmbeddings 和 DescriptionEmbeddings 表中的嵌入是使用不同的分块大小、从 Articles 表的 Description 和 Notes 列的值生成的。\n您需要跨这两个嵌入表执行近似最近邻 (ANN) 查询。该解决方案必须最大限度地减小使用不同分块大小所带来的影响。\n您应该使用什么？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "在此 Azure SQL Database 场景中，应使用 VECTOR_SEARCH 函数和余弦距离度量来执行近似最近邻 (ANN) 查询，同时尽量减小不同分块大小的影响。\n\n框 1：VECTOR_SEARCH\n要执行利用向量索引以获得性能的近似最近邻搜索，必须使用 VECTOR_SEARCH 函数。\n错误选项：VECTOR_DISTANCE 虽然也能计算距离，但它执行的是精确搜索且不使用向量索引，对大规模 ANN 需求而言慢得多。\n实现上通常用 UNION ALL 或公用表表达式 (CTE) 合并两个嵌入表的结果，并对每个表分别应用 VECTOR_SEARCH。\n\n框 2：余弦距离\n余弦距离只比较向量方向而忽略量级，因此对由不同分块大小生成、长度差异较大的嵌入最不敏感。"
  },
  "boxes": [
   {
    "prompt_en": "Function:",
    "prompt_zh": "函数：",
    "options_en": [
     "VECTOR_DISTANCE",
     "VECTOR_NORM",
     "VECTOR_SEARCH"
    ],
    "options_zh": [
     "VECTOR_DISTANCE",
     "VECTOR_NORM",
     "VECTOR_SEARCH"
    ],
    "correct_en": "VECTOR_SEARCH",
    "correct_zh": "VECTOR_SEARCH"
   },
   {
    "prompt_en": "Distance metric:",
    "prompt_zh": "距离度量：",
    "options_en": [
     "cosine distance",
     "dot product",
     "Euclidean distance"
    ],
    "options_zh": [
     "余弦距离",
     "点积",
     "欧几里得距离"
    ],
    "correct_en": "cosine distance",
    "correct_zh": "余弦距离"
   }
  ]
 },
 {
  "id": 84,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a SQL database in Microsoft Fabric named SalesDB that contains a table named dbo.Products.\nYou need to modify SalesDB to meet the following requirements:\nCreate a vector index on the appropriate column.\nUse a supplied natural language query vector.\nHow should you complete the Transact-SQL code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "In a Microsoft Fabric SQL database, the best column to index is typically a vector-enabled column containing high-dimensional embeddings derived from your data (e.g., product_name_vector). Among your existing columns, product_name is the best candidate for vectorization, as it contains the semantic information needed for natural language search.\nBox 1: product_name Use the vector column.\nCreate the Vector Index Use the CREATE VECTOR INDEX command on the new vector column. Fabric SQL uses the DiskANN algorithm for approximate nearest neighbor (ANN) searches.\n\n-- Create the vector index\nCREATE VECTOR INDEX idx_product_vector\nON MyProducts (product_name_vector)\nWITH (\n    METRIC = 'cosine',  -- Metric for similarity (cosine, euclidean, or dot)\n\n    TYPE = 'DiskANN'    -- Currently the only supported ANN type\n);\nNote:\nCREATE VECTOR Syntax\n Transact-SQL syntax conventions\nCREATE VECTOR INDEX index_name\nON object ( vector_column )\n[ WITH (\n    [ , ] METRIC = { 'cosine' | 'dot' | 'euclidean' }\n    [ [ , ] TYPE = 'DiskANN' ]\n    [ [ , ] MAXDOP = max_degree_of_parallelism ]\n) ]\n[ ON { filegroup_name | \"default\" } ]\n[;]\nWhere vector_column is the column to use to create the vector index. It must be of vector type.\nBox 2: VECTOR_SEARCH\nQuery Using a Natural Language Vector\nTo search, you must first convert your natural language query into a vector (using an external model like\nOpenAI) and then use the VECTOR_SEARCH function.\nExample code:\n-- 1. Supply the natural language query vector (received from your embedding model)\nDECLARE @queryVector VECTOR(1536) = '[0.12, -0.05, 0.88, ...]';\n-- 2. Use VECTOR_SEARCH to find the most similar products\nSELECT TOP (10) WITH APPROXIMATE\n    p.product_id,\n    p.product_name,\n    s.distance\nFROM MyProducts AS p\nJOIN VECTOR_SEARCH(\n    TABLE = MyProducts,\n    COLUMN = product_name_vector,\n    SIMILAR_TO = @queryVector,\n    METRIC = 'cosine'\n) AS s ON p.product_id = s.product_id -- Assumes product_id is the primary key\nORDER BY s.distance;\nBox 3: ORDER BY s.distance\nMetric Choice: Cosine distance is generally preferred for natural language text embeddings to focus on\nsemantic similarity.\nUse ORDER BY as in the example above.\nReference:"
  },
  "zh": {
   "stem": "您在 Microsoft Fabric 中有一个名为 SalesDB 的 SQL 数据库，其中包含一个名为 dbo.Products 的表。\n您需要修改 SalesDB 以满足以下要求：\n在适当的列上创建向量索引。\n使用提供的自然语言查询向量。\n您应如何完成该 Transact-SQL 代码？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "在 Microsoft Fabric SQL 数据库中，最适合建立索引的通常是包含高维嵌入的向量列。在现有列中，product_name 是最适合向量化的候选列，因为它包含自然语言搜索所需的语义信息。\n\n框 1：product_name —— 使用该向量列。\n使用 CREATE VECTOR INDEX 命令；Fabric SQL 采用 DiskANN 算法进行近似最近邻 (ANN) 搜索：\nCREATE VECTOR INDEX idx_product_vector\nON MyProducts (product_name_vector)\nWITH ( METRIC = 'cosine', TYPE = 'DiskANN' );\n\n框 2：VECTOR_SEARCH —— 用它执行接受 TABLE、COLUMN、SIMILAR_TO、TOP_N、METRIC 参数的近似最近邻搜索。\n\n框 3：ORDER BY s.distance —— 按距离排序，使最相似的结果排在最前面。"
  },
  "boxes": [
   {
    "prompt_en": "CREATE VECTOR INDEX idx_products_embedding ON dbo.Products ( ... )",
    "prompt_zh": "CREATE VECTOR INDEX idx_products_embedding ON dbo.Products ( ... )",
    "options_en": [
     "distance",
     "embedding",
     "product_name"
    ],
    "options_zh": [
     "distance",
     "embedding",
     "product_name"
    ],
    "correct_en": "product_name",
    "correct_zh": "product_name"
   },
   {
    "prompt_en": "FROM ... (",
    "prompt_zh": "FROM ... (",
    "options_en": [
     "VECTOR_DISTANCE",
     "VECTOR_NORMALIZE",
     "VECTOR_SEARCH"
    ],
    "options_zh": [
     "VECTOR_DISTANCE",
     "VECTOR_NORMALIZE",
     "VECTOR_SEARCH"
    ],
    "correct_en": "VECTOR_SEARCH",
    "correct_zh": "VECTOR_SEARCH"
   },
   {
    "prompt_en": "Box 3 (after ) AS s)",
    "prompt_zh": "框 3（) AS s 之后）",
    "options_en": [
     "GROUP BY s.distance",
     "ORDER BY s.distance",
     "PARTITION BY s.distance"
    ],
    "options_zh": [
     "GROUP BY s.distance",
     "ORDER BY s.distance",
     "PARTITION BY s.distance"
    ],
    "correct_en": "ORDER BY s.distance",
    "correct_zh": "ORDER BY s.distance"
   }
  ]
 },
 {
  "id": 85,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named dbo.Products. dbo.Products contains three columns named Embedding, Category, and Price. The Embedding column is defined as VECTOR(1536).\nYou use AI_GENERATE_EMBEDDINGS and VECTOR_SEARCH to support semantic search and apply additional filters on two columns named Category and Price.\n\nYou plan to change the embedding model from text-embedding-ada-002 to text-embedding-3-\nsmall. Existing rows already contain embeddings in the Embedding column.\nYou need to implement the model change. Applications must be able to use VECTOR_SEARCH without runtime errors.\nWhat should you do first?",
   "options": {
    "A": "Regenerate embeddings for the existing rows.",
    "B": "Normalize the vector lengths before storing new embeddings.",
    "C": "Convert the Embedding column to nvarchar(max).",
    "D": "Create a vector index on dbo.Products.Embedding."
   },
   "explanation": "To ensure your applications can transition models without runtime errors while using VECTOR_SEARCH,\nyou must first define a Vector Index that explicitly identifies the dimensions and distance metric.\nSince you are moving from text-embedding-ada-002 to text-embedding-3-small, both models default to 1536 dimensions, which matches your existing column definition. To create the index as the first step, use the following SQL:\nCREATE VECTOR INDEX idx_embedding ON YourTableName (Embedding) WITH ( DISTANCE_METRIC = 'COSINE' );\nUse code with caution.\nWhy this works:\nSchema Consistency: Because both models use 1536 dimensions, you don't need to alter the VECTOR\n(1536) column type immediately.\nSearch Stability: Creating the index allows the engine to optimize the VECTOR_SEARCH function. As long as the incoming query vector (generated by the app) matches the dimensions of the stored vectors, the search will execute without a runtime dimension mismatch error.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 dbo.Products 的表。dbo.Products 包含名为 Embedding、Category 和 Price 的三个列。Embedding 列定义为 VECTOR(1536)。\n您使用 AI_GENERATE_EMBEDDINGS 和 VECTOR_SEARCH 支持语义搜索，并对 Category 和 Price 这两列应用额外筛选。\n您计划把嵌入模型从 text-embedding-ada-002 更改为 text-embedding-3-small。现有行的 Embedding 列中已经包含嵌入。\n您需要实施该模型更改。应用程序必须能够使用 VECTOR_SEARCH 而不出现运行时错误。\n您应该首先做什么？",
   "options": {
    "A": "为现有行重新生成嵌入。",
    "B": "在存储新嵌入之前对向量长度进行归一化。",
    "C": "把 Embedding 列转换为 nvarchar(max)。",
    "D": "在 dbo.Products.Embedding 上创建向量索引。"
   },
   "explanation": "要让应用程序在使用 VECTOR_SEARCH 的同时顺利切换模型而不产生运行时错误，必须首先定义一个明确指定维度和距离度量的向量索引。\n由于从 text-embedding-ada-002 切换到 text-embedding-3-small，两个模型默认都是 1536 维，与现有列定义一致，因此第一步可以直接创建索引：\nCREATE VECTOR INDEX idx_embedding ON YourTableName (Embedding)\nWITH ( METRIC = 'cosine' );\n\n原因：\n架构一致：两个模型都使用 1536 维，无需立即更改 VECTOR(1536) 列类型。\n搜索稳定：创建索引后引擎才能优化 VECTOR_SEARCH 函数，避免调用时报错。"
  }
 },
 {
  "id": 86,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database named DB1 that contains two tables named knowledge_base and query_cache. knowledge_base contains support articles and embeddings. query_cache contains chat questions, responses, and embeddings. DB1 supports an AI-enabled chat agent.\nYou need to design a solution that meets the following requirements:\nSerializes the retrieved rows from knowledge_base Extracts the answer field from the response Extracts the embeddings to store in query_cache You will call the external large language model (LLM) by using the sp_invoke_external_rest_endpoint stored procedure.\nWhich Transact-SQL commands should you use for each requirement? To answer, drag the appropriate commands to the correct requirements. Each command may be used once, more than once, or not at all.\nYou may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1:  FOR JSON PATH Serializes the retrieved rows from knowledge_base The Transact-SQL command used to serialize retrieved rows into JSON format is the FOR JSON clause,\ntypically used at the end of a SELECT statement.\nThis clause is used to format query results as a JSON array or object, which can then be passed as the payload argument (an nvarchar(max) string in a JSON format) to the sp_invoke_external_rest_endpoint stored procedure.\nThe two main variations are:\n* FOR JSON AUTO: This automatically formats the JSON output based on the structure of the SELECT statement.\n*-> FOR JSON PATH: This provides more control over the JSON structure, allowing you to create wrapper objects and nest properties explicitly using dot-separated aliases in your column selection (e.g.,\n[info.name] creates a nested name property within an info object).\nBox 2: JSON_VALUE Extracts the answer field from the response To extract the 'answer' field from the JSON response, you should use the JSON_VALUE T-SQL function with the appropriate path expression.\nTo extract the answer field from the JSON response returned by your LLM via sp_invoke_external_rest_endpoint, you can use the following T-SQL logic:\nDECLARE @response NVARCHAR(MAX);\n\n-- Execution of sp_invoke_external_rest_endpoint happens here, storing result in @response SELECT JSON_VALUE(@response, '$.result.answer') AS GeneratedAnswer;\nBox 3: AI_GENERATE_ CHUNKS Extracts the embeddings to store in query_cache To store and extract embeddings in your Azure SQL database for an AI-enabled chat agent, you will use a combination of modern T-SQL functions. The process involves breaking down long text into manageable pieces with AI_GENERATE_CHUNKS and then converting those pieces into vector arrays using AI_GENERATE_EMBEDDINGS.\nReference:"
  },
  "zh": {
   "stem": "您有一个名为 DB1 的 Azure SQL 数据库，其中包含两个表：knowledge_base 和 query_cache。knowledge_base 包含支持文章和嵌入；query_cache 包含聊天问题、响应和嵌入。DB1 支持一个 AI 聊天代理。\n您需要设计一个满足以下要求的解决方案：\n序列化从 knowledge_base 检索到的行\n从响应中提取 answer 字段\n提取要存储到 query_cache 中的嵌入\n您将使用 sp_invoke_external_rest_endpoint 存储过程调用外部大型语言模型 (LLM)。\n您应该为每项要求使用哪些 Transact-SQL 命令？要回答此问题，请把适当的命令拖动到正确的要求上。每个命令可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：FOR JSON PATH —— 序列化从 knowledge_base 检索到的行。\n把查询结果序列化为 JSON 的 T-SQL 命令是 FOR JSON 子句，通常放在 SELECT 语句末尾。它把结果格式化为 JSON 数组或对象，然后作为 payload 参数（nvarchar(max) 的 JSON 字符串）传给 sp_invoke_external_rest_endpoint。\nFOR JSON AUTO 会根据 SELECT 结构自动格式化；FOR JSON PATH 对 JSON 结构的控制更强，可用点分隔别名显式创建包装对象和嵌套属性。\n\n框 2：JSON_VALUE —— 从 LLM 响应中提取 answer 标量字段。\n\n框 3：AI_GENERATE_CHUNKS —— 按官方答案，用于提取要存入 query_cache 的嵌入内容。"
  },
  "sources_en": [
   "AI_GENERATE_CHUNKS",
   "FOR JSON PATH",
   "FOR XML PATH",
   "JSON_QUERY",
   "JSON_VALUE",
   "OPENJSON",
   "VECTOR_DISTANCE"
  ],
  "sources_zh": [
   "AI_GENERATE_CHUNKS",
   "FOR JSON PATH",
   "FOR XML PATH",
   "JSON_QUERY",
   "JSON_VALUE",
   "OPENJSON",
   "VECTOR_DISTANCE"
  ],
  "targets": [
   {
    "label_en": "Serialize the retrieved rows from knowledge_base:",
    "label_zh": "序列化从 knowledge_base 检索到的行：",
    "correct_en": "FOR JSON PATH",
    "correct_zh": "FOR JSON PATH"
   },
   {
    "label_en": "Extract the answer field from the response:",
    "label_zh": "从响应中提取 answer 字段：",
    "correct_en": "JSON_VALUE",
    "correct_zh": "JSON_VALUE"
   },
   {
    "label_en": "Extract the embeddings to store in query_cache:",
    "label_zh": "提取要存储到 query_cache 中的嵌入：",
    "correct_en": "AI_GENERATE_CHUNKS",
    "correct_zh": "AI_GENERATE_CHUNKS"
   }
  ]
 },
 {
  "id": 87,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure AI Search service and an index named hotels that includes a vector field named DescriptionVector.\nYou query hotels by using the Search Documents REST API.\nYou add semantic ranking to the hybrid search query and discover that some queries return fewer results than expected, and captions and answers are missing.\nYou need to complete the hybrid search request to meet the following requirements:\nInclude more documents when ranking.\nAlways include captions and answers.\nHow should you complete the REST request body? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Required REST Request Structure\nUpdate your JSON body with these specific settings:\n{\n    \"search\": \"your search query\",\n    \"vectors\": [ { ... } ],\n    \"queryType\": \"semantic\",\n    \"semanticConfiguration\": \"your-config-name\",\n    \"top\": 50,\n    \"answers\": \"extractive\",\n    \"captions\": \"extractive\",\n    \"count\": true\n}\nBox 1: 50\nk\nTo ensure that your Azure AI Search hybrid query returns more documents for ranking and always\nincludes captions and answers, the appropriate k value is 50.\nWhy 50 is the correct choice:\nThe \"Top 50\" Rule: Azure AI Search's semantic ranker specifically processes the top 50 results returned\nby the initial search (simple or hybrid). If your k (the number of nearest neighbors to retrieve) is set too low\n(e.g., 10), the semantic ranker has a smaller pool to work with, which can lead to missing captions or\nanswers if the \"best\" semantic matches weren't in that initial small batch.\nMinimum Requirements: While you can technically rank fewer, 50 is the standard recommendation to\nmaximize the quality and presence of semantic features like captions and answers.\nInvalid Values: A value of -50 is not a valid parameter for the k property in a vector query.\nBox 2: semantic\nqueryType\nTo get captions and answers in your Azure AI Search hybrid query results, the appropriate queryType in\nthe REST request body is \"semantic\".\n\nSetting the queryType to \"semantic\" is required to invoke the semantic ranking process, which in turn enables the extraction of semantic captions and answers from the documents in the search results.\nBox 3: extractive captions\nBox 4: extractive answers To ensure your Azure AI Search hybrid query returns more documents, always includes captions/answers,\nand functions correctly with semantic ranking, you need to adjust specific parameters in your REST API request body.\n1. Increase Document Coverage By default, semantic ranking only evaluates the top 50 results from the initial retrieval. If your initial hybrid search isn't \"feeding\" enough high-quality docs to the semantic ranker, results can feel sparse.\ntop: Increase this to return more total documents.\nsemanticConfiguration: Ensure this is explicitly named and correctly mapped to your index fields (title,\ncontent, keywords) so the ranker understands what to analyze.\n\n2. Force Captions and Answers To prevent missing captions or answers, you must set the answers and captions parameters. Using the value extractive ensures the engine pulls direct \"snippets\" from your documents.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure AI Search 服务和一个名为 hotels 的索引，该索引包含一个名为 DescriptionVector 的向量字段。\n您使用 Search Documents REST API 查询 hotels。\n您向混合搜索查询添加语义排名后，发现有些查询返回的结果比预期少，而且缺少 captions 和 answers。\n您需要完成该混合搜索请求以满足以下要求：\n排名时包含更多文档。\n始终包含 captions 和 answers。\n您应如何完成该 REST 请求正文？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "所需的 REST 请求结构：\n{\n    \"search\": \"your search query\",\n    \"vectorQueries\": [ { ... \"k\": 50 } ],\n    \"queryType\": \"semantic\",\n    \"semanticConfiguration\": \"your-config-name\",\n    \"captions\": \"extractive\",\n    \"answers\": \"extractive\",\n    \"top\": 10\n}\n\n框 1：50\nAzure AI Search 的语义排序器会处理初始搜索（简单或混合）返回的前 50 个结果。如果 k（要检索的最近邻数量）设得太低（例如 10），语义排序器可用的候选池就更小，导致结果偏少。\n\n框 2：\"semantic\" —— 启用语义排名必须把 queryType 设为 semantic。\n框 3：\"extractive\" —— captions 设为 extractive 才会返回摘要片段。\n框 4：\"extractive\" —— answers 设为 extractive 才会返回答案。"
  },
  "boxes": [
   {
    "prompt_en": "\"k\":",
    "prompt_zh": "\"k\":",
    "options_en": [
     "-50,",
     "10,",
     "50,"
    ],
    "options_zh": [
     "-50,",
     "10,",
     "50,"
    ],
    "correct_en": "50,",
    "correct_zh": "50,"
   },
   {
    "prompt_en": "\"queryType\":",
    "prompt_zh": "\"queryType\":",
    "options_en": [
     "\"full\",",
     "\"semantic\",",
     "\"simple\","
    ],
    "options_zh": [
     "\"full\",",
     "\"semantic\",",
     "\"simple\","
    ],
    "correct_en": "\"semantic\",",
    "correct_zh": "\"semantic\","
   },
   {
    "prompt_en": "\"captions\":",
    "prompt_zh": "\"captions\":",
    "options_en": [
     "\"extractive\",",
     "\"generative\",",
     "\"none\","
    ],
    "options_zh": [
     "\"extractive\",",
     "\"generative\",",
     "\"none\","
    ],
    "correct_en": "\"extractive\",",
    "correct_zh": "\"extractive\","
   },
   {
    "prompt_en": "\"answers\":",
    "prompt_zh": "\"answers\":",
    "options_en": [
     "\"extractive\",",
     "\"generative\",",
     "\"none\","
    ],
    "options_zh": [
     "\"extractive\",",
     "\"generative\",",
     "\"none\","
    ],
    "correct_en": "\"extractive\",",
    "correct_zh": "\"extractive\","
   }
  ]
 },
 {
  "id": 88,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named dbo.ManualChunks.\ndbo.ManualChunks contains product manuals.\nA retrieval query already returns the top five matching chunks as nvarchar (max) text.\nYou need to call an Azure OpenAI REST endpoint for chat completions. The request body must include both the user question and the retrieved chunks.\nYou write the following Transact-SQL code.\nWhat should you insert at line 22?",
   "options": {
    "A": "FOR XML AUTO, TYPE, XMLSCHEMA",
    "B": "FOR JSON AUTO, INCLUDE_NULL_VALUES",
    "C": "FOR XML PATH, INCLUDE_NULL_VALUES",
    "D": "FOR JSON PATH, WITHOUT_ARRAY_WRAPPER"
   },
   "explanation": "To construct a payload for the Azure OpenAI REST API within Azure SQL, you can use a Common Table\nExpression (CTE) to structure the messages and then collapse them into a single JSON object.\nT-SQL Payload Generation\nKey Implementation Details\nMessage Hierarchy: Azure OpenAI requires a messages array. By nesting a subquery with FOR JSON\nPATH inside the main SELECT, SQL Server creates the required JSON array of objects.\nJSON Formatting: Using FOR JSON PATH, WITHOUT_ARRAY_WRAPPER on the outer selection\nensures the root of your @payload is a clean JSON object {...} rather than a single-element array [{...}].\nContext Injection: It is standard practice to prepend the retrieved manual chunks to the system message or\na dedicated user message to provide the model with the necessary grounding data.\nAssuming you have your retrieved chunks concatenated into a single @Context variable and the user's\ninput in @UserQuestion, use the following logic:\nDECLARE @UserQuestion NVARCHAR(MAX) = 'How do I reset the device?';\nDECLARE @Context NVARCHAR(MAX) = 'Manual Chunk 1... Manual Chunk 2...'; -- Your top 5 chunks\nDECLARE @payload NVARCHAR(MAX);\n-- Define the message structure for Chat Completions\nWITH ChatMessages AS (\n    SELECT 'system' AS [role],\n           'You are a helpful assistant. Use these manual excerpts: ' + @Context AS [content]\n    UNION ALL\n    SELECT 'user' AS [role],\n           @UserQuestion AS [content]\n)\n-- Generate the final JSON body\nSELECT @payload = (\n    SELECT\n        (SELECT [role], [content] FROM ChatMessages FOR JSON PATH) AS [messages],\n        0.7 AS [temperature],\n        800 AS [max_tokens]\n    FOR JSON PATH, WITHOUT_ARRAY_WRAPPER\n);\n-- Resulting @payload is now ready for sp_invoke_external_rest_endpoint\nPRINT @payload;\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 dbo.ManualChunks 的表，该表存储产品手册。\n检索查询已经能以 nvarchar(max) 文本返回前五个匹配的区块。\n您需要调用 Azure OpenAI REST 终结点进行聊天补全。请求正文必须同时包含用户问题和检索到的区块。\n您编写了以下 Transact-SQL 代码。\n您应该在第 22 行插入什么？",
   "options": {
    "A": "FOR XML AUTO, TYPE, XMLSCHEMA",
    "B": "FOR JSON AUTO, INCLUDE_NULL_VALUES",
    "C": "FOR XML PATH, INCLUDE_NULL_VALUES",
    "D": "FOR JSON PATH, WITHOUT_ARRAY_WRAPPER"
   },
   "explanation": "要在 Azure SQL 中构造 Azure OpenAI REST API 的有效负载，可以用公用表表达式组织 messages，然后把它们折叠成单个 JSON 对象。\n\n关键实现细节：\n消息层次结构：Azure OpenAI 需要一个 messages 数组。在主 SELECT 内嵌套使用 FOR JSON PATH 的子查询，SQL Server 就会生成所需的 JSON 对象数组。\nJSON 格式：在外层选择上使用 FOR JSON PATH, WITHOUT_ARRAY_WRAPPER，可确保 @payload 的根是干净的 JSON 对象 {...}，而不是只有一个元素的数组 [{...}]。\n上下文注入：通常把检索到的手册区块拼接到系统消息或专门的用户消息中，为模型提供必要的基础数据。\n\nFOR XML 系列会产生 XML 而非 JSON；FOR JSON AUTO 无法控制 messages 的层次结构。"
  },
  "code": {
   "lang": "sql",
   "title_en": "The code you write",
   "title_zh": "您编写的代码",
   "text": "01 CREATE DATABASE SCOPED CREDENTIAL AzureOpenAIHeaders\n02 WITH IDENTITY = 'HTTPEndpointHeaders',\n03   SECRET = N'{\"api-key\":\"<YOUR_AZURE_OPENAI_API_KEY>\"}';\n04 GO\n05 CREATE OR ALTER PROCEDURE dbo.AskManuals\n06   ...\n07   SELECT @chunks =\n08   (\n09     SELECT TOP (5)\n10     mc.ChunkText AS [text]\n11     FROM dbo.ManualChunks AS mc\n12     ORDER BY mc.Score DESC\n13     FOR JSON PATH\n14   );\n15   SET @payload =\n16   (\n17     SELECT\n18       'system' AS [messages[0].role],\n19       'Use only the provided manual chunks.' AS [messages[0].content],\n20       'user' AS [messages[1].role],\n21       CONCAT(@question, CHAR(10), JSON_QUERY(@chunks)) AS [messages[1].content]\n22\n23   );\n24\n25   EXEC @retval =\n26     ...\n27 END;\n28 GO"
  }
 },
 {
  "id": 89,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named knowledge_base. knowledge_base stores human resources (HR) policy documents and contains columns named title, content,\ncategory, and embedding.\nYou have an application named App1. App1 queries two relational tables named employee_profiles and benefits_enrollment that contain HR data. App1 hosts a chatbot that calls a large language model (LLM) directly.\nUsers report that the chatbot answers general HR questions correctly but provides outdated or incorrect answers when policies change. The chatbot also fails to answer questions that reference internal policy\n\ndocuments by title or category.\nYou need to recommend a Retrieval Augmented Generation (RAG) solution to resolve the chatbot issues.\nWhat should you recommend? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: knowledge_base Retrieve grounding from:\nTo resolve the chatbot issues, implement Retrieval Augmented Generation (RAG) by using the Azure SQL database’s vector search capabilities to retrieve relevant, up-to-date policy documents based on semantic similarity to the user's question. This involves generating embeddings for the user's query, comparing them\n\nagainst the embedding column in the HR policy table to find relevant content, and passing this retrieved context to the LLM to generate a grounded answer.\nBox 2: Generate query embeddings and then run a vector similarity search.\nInference step to perform the retrieval:\nTo implement RAG and fix the chatbot’s accuracy issues, you need to transition from a direct LLM call to a workflow that fetches context from your Azure SQL database before generating a response.\nHere is the high-level process to resolve the issues:\n*-> 1. Vector Search: When a user asks a question, convert their query into a vector (embedding) using the same model that generated your embedding column.\n*-> 2. Context Retrieval: Use a SQL query with a vector similarity function (like VECTOR_DISTANCE) to find the top rows in your policy table where the embedding is most similar to the query vector.\n3. Metadata Filtering: To address the failure to reference specific titles or categories, include a keyword-\nbased filter in your SQL query (e.g., WHERE title LIKE ... or category = ...) alongside the vector search.\n4. Augmentation: Combine the retrieved content from the policy table with the user's original question into a single prompt.\n5. Generation: Send this \"grounded\" prompt to the LLM. This ensures the model uses the latest stored policy data rather than its own outdated training data.\nReference:"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 knowledge_base 的表。knowledge_base 存储人力资源 (HR) 策略文档，包含名为 title、content、category 和 embedding 的列。\n您有一个名为 App1 的应用程序。App1 查询两个包含 HR 数据的关系表：employee_profiles 和 benefits_enrollment。App1 托管一个直接调用大型语言模型 (LLM) 的聊天机器人。\n用户报告称，该聊天机器人能正确回答一般性 HR 问题，但在策略发生变化时会给出过时或不正确的答案。它也无法回答按标题或类别引用内部策略文档的问题。\n您需要推荐一个检索增强生成 (RAG) 解决方案来解决这些问题。\n您应该推荐什么？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：knowledge_base\n要解决聊天机器人的问题，应利用 Azure SQL 数据库的向量搜索能力实施 RAG：根据与用户问题的语义相似度检索相关且最新的策略文档。knowledge_base 正是存放这些策略文档及其 embedding 的表。\n\n框 2：生成查询嵌入，然后运行向量相似度搜索。\n要修复准确性问题，需要从直接调用 LLM 转变为先从 Azure SQL 数据库获取上下文的工作流：为用户查询生成嵌入，与 embedding 列比较以找到相关内容，再把检索到的上下文传给 LLM 生成有据可依的答案。"
  },
  "boxes": [
   {
    "prompt_en": "Retrieve grounding data from:",
    "prompt_zh": "从以下位置检索基础数据：",
    "options_en": [
     "employee_profiles and benefits_enrollment",
     "knowledge_base",
     "PDF exports of the policies",
     "The LLM training data"
    ],
    "options_zh": [
     "employee_profiles 和 benefits_enrollment",
     "knowledge_base",
     "策略的 PDF 导出文件",
     "LLM 训练数据"
    ],
    "correct_en": "knowledge_base",
    "correct_zh": "knowledge_base"
   },
   {
    "prompt_en": "Inference step to perform the retrieval:",
    "prompt_zh": "执行检索的推理步骤：",
    "options_en": [
     "Perform keyword searches.",
     "Call the LLM first, and then store the response.",
     "Fine-tune the LLM by using the data in knowledge_base.",
     "Generate query embeddings, and then run a vector similarity search."
    ],
    "options_zh": [
     "执行关键字搜索。",
     "先调用 LLM，然后存储响应。",
     "使用 knowledge_base 中的数据微调 LLM。",
     "生成查询嵌入，然后运行向量相似度搜索。"
    ],
    "correct_en": "Generate query embeddings, and then run a vector similarity search.",
    "correct_zh": "生成查询嵌入，然后运行向量相似度搜索。"
   }
  ]
 },
 {
  "id": 90,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "Your company has an ecommerce catalog in a Microsoft SQL Server 2025 database named SalesDB.\nSalesDB contains a table named products. products contains the following columns:\nproduct_id (int) product_name (nvarchar(200)) description (nvarchar(max)) category (nvarchar(50)) brand (nvarchar(50)) price (decimal) sku (nvarchar(40)) The description fields are updated daily by a content pipeline, and price can change multiple times per day.\nYou want customers to be able to submit natural language queries and apply structured filters for brand and price.\nYou plan to store embeddings in a new VECTOR(1536) column and use VECTOR_SEARCH(...\nMETRIC=‘cosine’ ...).\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: No No - Generating an embedding by concatenating product_name, category, and description will support the customer requirements.\nConcatenating product_name, category, and description is a good practice to capture the full semantic context, but need to include price as well.\nBox 2: Yes Yes - Include price in the text used to generate embeddings is required.\nCustomers can ask about price.\nEmbedding Strategy (Handling Daily Updates) Because you want to filter by price/brand but also include price in the embedding context, follow this logic:\nThe \"Context String\": When sending data to your embedding model (e.g., Azure OpenAI), concatenate the fields:\n\"Product: [product_name]. Category: [category]. Brand: [brand]. Price: [price]. Description: [description]\" The Update Trigger: Since the content pipeline updates the description daily, you should trigger a script to re-generate the description_vector for those specific rows.\nPrice Sensitivity: If price changes \"several times daily\" but the description only changes once, decide if a $5 price swing significantly changes the \"meaning\" of the vector. If not, only update the vector during the daily description sync to save on API costs.\nBox 3: Yes Yes - The underlying base type of the embeddings will be float(32) Table Configuration Add the vector column using the float32 base type (the default for the VECTOR type) to store 1536-\ndimensional embeddings.\n\n-- Add the vector column to your existing products table\nALTER TABLE dbo.products\nADD description_vector VECTOR(1536); -- Default base type is float32\n\nGO\nReference:"
  },
  "zh": {
   "stem": "贵公司在一个名为 SalesDB 的 Microsoft SQL Server 2025 数据库中有一个电子商务目录。SalesDB 包含一个名为 products 的表，其中包含以下列：\nproduct_id (int)\nproduct_name (nvarchar(200))\ndescription (nvarchar(max))\ncategory (nvarchar(50))\nbrand (nvarchar(50))\nprice (decimal)\nsku (nvarchar(40))\ndescription 字段由内容管道每日更新，price 每天可能变化多次。\n您希望客户能够提交自然语言查询，并按品牌和价格应用结构化筛选。\n您计划把嵌入存储在一个新的 VECTOR(1536) 列中，并使用 VECTOR_SEARCH(... METRIC='cosine' ...)。\n对于以下每条陈述，如果陈述为真，请选择“是”；否则选择“否”。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：否\n串联 product_name、category 和 description 来生成嵌入是捕捉完整语义上下文的良好做法，但按题目要求还需要包含 price，因此仅这三项并不能满足客户要求。\n\n框 2：是\n必须在用于生成嵌入的文本中包含 price，因为客户会就价格提问。\n嵌入策略（应对每日更新）：向嵌入模型发送数据时，把字段拼成上下文字符串，例如\n\"Product: [product_name]. Category: [category]. Brand: [brand]. Price: [price]. Description: [description]\"，\n并在内容管道更新时触发重新生成。\n\n框 3：是\nVECTOR(1536) 的基础基本类型是 float(32)（单精度浮点）。"
  },
  "boxes": [
   {
    "prompt_en": "Generating an embedding by concatenating product_name, category, and description will support the customer requirements.",
    "prompt_zh": "通过串联 product_name、category 和 description 生成嵌入即可满足客户要求。",
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
    "prompt_en": "Including price in the text used to generate embeddings is required.",
    "prompt_zh": "必须在用于生成嵌入的文本中包含 price。",
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
    "prompt_en": "The underlying base type of the embeddings will be float(32).",
    "prompt_zh": "嵌入的基础基本类型将是 float(32)。",
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
  "id": 91,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You need to design a generative AI solution that uses a Microsoft SQL Server 2025 database named DB1 as a data source. The solution must generate responses that meet the following requirements:\nAre grounded in the latest transactional and reference data stored in DB1 Do NOT require retraining or fine-tuning the language model when the data changes Can include citations or references to the source data used in the response Which scenario is the best use case for implementing a Retrieval Augmented Generation (RAG) pattern?\nMore than one answer choice may achieve the goal. Select the BEST answer.",
   "options": {
    "A": "summarizing free-form user input text",
    "B": "training a custom language model on historical database data",
    "C": "answering user questions based on company-specific knowledge",
    "D": "generating marketing slogans based on user sentiment analysis"
   },
   "explanation": "Implementing a Retrieval-Augmented Generation (RAG) pattern with Microsoft SQL Server 2025 allows you to ground generative AI responses in real-time company data without the need for model fine-tuning.\nThis version of SQL Server functions as a native vector database, enabling seamless integration between relational data and AI-powered insights.\nIncorrect:\n[Not B] Training a custom language model is not a use case for the Retrieval Augmented Generation (RAG) pattern.\nIn fact, the primary purpose of RAG is to provide a language model with up-to-date information without the need for training, retraining, or fine-tuning.\nReference:"
  },
  "zh": {
   "stem": "您需要设计一个以名为 DB1 的 Microsoft SQL Server 2025 数据库为数据源的生成式 AI 解决方案。该解决方案生成的响应必须满足以下要求：\n以 DB1 中存储的最新事务数据和参考数据为依据\n当数据发生变化时不需要重新训练或微调语言模型\n可以在响应中包含所用源数据的引文或引用\n哪个场景最适合实施检索增强生成 (RAG) 模式？可能有多个答案选项都能实现目标，请选择最佳答案。",
   "options": {
    "A": "汇总自由格式的用户输入文本",
    "B": "使用历史数据库数据训练自定义语言模型",
    "C": "基于公司特定知识回答用户问题",
    "D": "基于用户情绪分析生成营销标语"
   },
   "explanation": "在 Microsoft SQL Server 2025 上实施检索增强生成 (RAG) 模式，可以让生成式 AI 的响应以实时公司数据为依据，而无需微调模型。该版本的 SQL Server 可作为原生向量数据库，实现关系数据与 AI 洞察的无缝集成。\n\n错误选项：\n[B] 训练自定义语言模型并不是 RAG 模式的用例。事实上，RAG 的主要目的正是在无需训练、重新训练或微调的情况下为语言模型提供最新信息。\n[A] 和 [D] 都不需要以数据库中的权威数据为依据，也不需要引文。"
  }
 },
 {
  "id": 92,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named stores. stores contains a column named description and a vector column named embedding.\nYou need to implement a hybrid search query that meets the following requirements:\nUses full-text search on description for the keyword portion Returns the top 20 results based on a combined score that uses a weighted formula of 60% vector distance and 40% full-text rank How should you configure the query components? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: VECTOR_DISTANCE and order by distance ascending Semantics query operator/function To perform a weighted hybrid search in Azure SQL Database, use the VECTOR_DISTANCE function for similarity and the CONTAINSTABLE (or FREETEXTTABLE) function for full-text search rankings.\nAs of early 2026, Azure SQL does not have a single \"hybrid\" operator that automatically combines these scores. Instead, you must manually calculate a combined score by joining the results of both search types.\nFor the most robust results, it is common to apply Reciprocal Rank Fusion (RRF) manually in your T-SQL.\n\nKey Functions to Use VECTOR_DISTANCE: Specifically used with the VECTOR data type to calculate the distance between your column and a query embedding.\nCONTAINSTABLE: Returns a table with a RANK column based on BM25 or similar algorithms, which is essential for text relevance scoring.\nVECTOR (Data Type): Ensure your embedding column uses the native VECTOR type (available in public preview as of late 2024/2025) for optimized performance.\n\nConsiderations for Weighting Scale Mismatch: Raw VECTOR_DISTANCE (0 to 2 for cosine) and Full-Text RANK (0 to 1000) are on different scales.\nNormalization: Using Reciprocal Rank Fusion (RRF) as shown above (1 / (rank + k)) is the industry standard for combining these disparate scores into a single unified ranking.\nRecommended Hybrid Query Pattern To achieve a 60/40 weighted split, you can use the following query structure:\n\nDECLARE @query_vector VECTOR(1536) = <your_query_vector>;\nDECLARE @search_term NVARCHAR(4000) = 'your keyword';\nWITH\n-- 1. Get Vector Similarity Results\nVectorSearch AS (\n    SELECT id,\n           VECTOR_DISTANCE('cosine', embedding, @query_vector) AS distance,\n           ROW_NUMBER() OVER (ORDER BY VECTOR_DISTANCE('cosine', embedding, @query_vector))\nas v_rank\n    FROM YourTable\n    -- Optional: filter to improve performance\n    WHERE VECTOR_DISTANCE('cosine', embedding, @query_vector) < 0.5\n),\n-- 2. Get Full-Text Search Results\nTextSearch AS (\n    SELECT [KEY] AS id,\n           [RANK] AS ft_rank,\n           ROW_NUMBER() OVER (ORDER BY [RANK] DESC) as t_rank\n    FROM CONTAINSTABLE(YourTable, description, @search_term)\n)\n-- 3. Combine with Weights\nSELECT TOP 20\n    y.*,\n    -- Custom weighted formula (adjusting rank to a 0-1 scale or using RRF)\n    (0.6 * (1.0 / (VectorSearch.v_rank + 60))) + (0.4 * (1.0 / (TextSearch.t_rank + 60))) AS combined_score\nFROM YourTable y\nLEFT JOIN VectorSearch ON y.id = VectorSearch.id\nLEFT JOIN TextSearch ON y.id = TextSearch.id\nWHERE VectorSearch.id IS NOT NULL OR TextSearch.id IS NOT NULL\nORDER BY combined_score DESC;\n\nBox 2: FREETEXTTABLE on description for keyword scoring Keyword retrieval operator/function In Azure SQL Database, the keyword retrieval operator to use is FREETEXTTABLE, which provides a relevance rank (BM25 score) for full-text search results that can be combined with the vector distance score using a weighted formula.\nBox 3: order by(distance*0.6)+((1.0-RANK/1000)*0.4 Final ranking expression\n\nWeighted Ranking: The  formula (distance * 0.6) + ((1.0 - RANK/1000) * 0.4) normalizes the FTS rank (converting it to a 0-1 \"distance\" where lower is better) to match the vector distance logic.\nReference:\nhttps://learn.microsoft.com/en-us/samples/azure-samples/azure-sql-db-openai/azure-sql-db-openai/ https://devblogs.microsoft.com/azure-sql/enhancing-search-capabilities-in-sql-server-and-azure-sql-with-\nhybrid-search-and-rrf-re-ranking https://learn.microsoft.com/en-us/sql/t-sql/functions/vector-distance-transact-sql"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 stores 的表。stores 包含一个名为 description 的列和一个名为 embedding 的向量列。\n您需要实现一个满足以下要求的混合搜索查询：\n对 description 使用全文搜索完成关键字部分\n根据 60% 向量距离与 40% 全文排名的加权公式，按综合分数返回前 20 个结果\n您应该如何配置查询组件？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：VECTOR_DISTANCE 并按 distance 升序排序\n要在 Azure SQL Database 中执行加权混合搜索，需要用 VECTOR_DISTANCE 计算相似度，并用 CONTAINSTABLE（或 FREETEXTTABLE）获取全文搜索排名。Azure SQL 目前没有能自动合并这两种分数的单一“混合”运算符，必须通过联接两种搜索的结果手动计算综合分数。\nVECTOR_DISTANCE：与 VECTOR 数据类型配合，计算列与查询嵌入之间的距离。\n\n框 2：对 description 使用 FREETEXTTABLE 进行关键字评分\nFREETEXTTABLE 返回带 RANK 列的表，用于关键字相关性评分。\n\n框 3：order by (distance * 0.6) + ((1.0 - RANK/1000.0) * 0.4)\n全文 RANK 的取值范围是 0–1000 且越大越相关，而向量 distance 越小越相关，因此必须把 RANK 归一化并反转方向 (1.0 - RANK/1000.0)，才能与距离按 60/40 加权合并。"
  },
  "boxes": [
   {
    "prompt_en": "Semantic query operator/function:",
    "prompt_zh": "语义查询运算符/函数：",
    "options_en": [
     "VECTOR_DISTANCE and order by distance ascending",
     "VECTOR_SEARCH with METRIC cosine and TOP_N",
     "VECTORPROPERTY to calculate the similarity between two vectors"
    ],
    "options_zh": [
     "VECTOR_DISTANCE 并按 distance 升序排序",
     "使用 METRIC cosine 和 TOP_N 的 VECTOR_SEARCH",
     "使用 VECTORPROPERTY 计算两个向量之间的相似度"
    ],
    "correct_en": "VECTOR_DISTANCE and order by distance ascending",
    "correct_zh": "VECTOR_DISTANCE 并按 distance 升序排序"
   },
   {
    "prompt_en": "Keyword retrieval operator/function:",
    "prompt_zh": "关键字检索运算符/函数：",
    "options_en": [
     "CONTAINSTABLE on description and return ranked matches",
     "FREETEXTTABLE on description for keyword scoring",
     "JSON_VALUE extraction from description for keyword scoring"
    ],
    "options_zh": [
     "对 description 使用 CONTAINSTABLE 并返回带排名的匹配项",
     "对 description 使用 FREETEXTTABLE 进行关键字评分",
     "从 description 中使用 JSON_VALUE 提取以进行关键字评分"
    ],
    "correct_en": "FREETEXTTABLE on description for keyword scoring",
    "correct_zh": "对 description 使用 FREETEXTTABLE 进行关键字评分"
   },
   {
    "prompt_en": "Final ranking expression:",
    "prompt_zh": "最终排名表达式：",
    "options_en": [
     "order by (distance * 0.6) + ((1.0 - RANK/1000.0) * 0.4)",
     "order by (distance * 0.6) + (RANK * 0.4)",
     "order by (distance + RANK), and then apply TOP 20"
    ],
    "options_zh": [
     "order by (distance * 0.6) + ((1.0 - RANK/1000.0) * 0.4)",
     "order by (distance * 0.6) + (RANK * 0.4)",
     "order by (distance + RANK)，然后应用 TOP 20"
    ],
    "correct_en": "order by (distance * 0.6) + ((1.0 - RANK/1000.0) * 0.4)",
    "correct_zh": "order by (distance * 0.6) + ((1.0 - RANK/1000.0) * 0.4)"
   }
  ]
 },
 {
  "id": 93,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "A"
  ],
  "en": {
   "stem": "Your team is developing an Azure SQL database solution from a locally cloned GitHub repository by using Microsoft Visual Studio Code and GitHub Copilot Chat.\nYou need to ensure that GitHub Copilot Chat uses the team’s coding standards when generating Transact-\nSQL code in Visual Studio Code.\nWhat should you use?",
   "options": {
    "A": ".github/copilot-instructions.md",
    "B": ".vscode/settings.json",
    "C": "%APPDATA%\\Code\\User\\settings.json",
    "D": "%APPDATA%\\Code\\User\\copilot-instructions.md"
   },
   "explanation": "o ensure GitHub Copilot Chat adheres to your team's specific Transact-SQL (T-SQL) standards while deploying an Azure SQL database from VS Code, you should focus on Custom Instructions and Workspace Context.\nRequired Setup Create a .github/copilot-instructions.md File This is the most effective way to enforce standards.\nCreate this file in the root of your repository.\nCopilot automatically reads this file to understand project-specific rules.\nInclude sections for:\nNaming conventions (e.g., PascalCase for tables, proc_ prefix for stored procedures).\nFormatting rules (e.g., keywords in UPPERCASE, use of 4 spaces).\nSecurity practices (e.g., always use schema prefixes, avoid SELECT *).\nReference:\nhttps://nikolay-dev.medium.com/master-web-development-with-github-spark-ai-b0b874525418"
  },
  "zh": {
   "stem": "您的团队正在使用 Microsoft Visual Studio Code 和 GitHub Copilot Chat，基于本地克隆的 GitHub 存储库开发 Azure SQL 数据库解决方案。\n您需要确保 GitHub Copilot Chat 在 Visual Studio Code 中生成 Transact-SQL 代码时遵循团队的编码标准。\n您应该使用什么？",
   "options": {
    "A": ".github/copilot-instructions.md",
    "B": ".vscode/settings.json",
    "C": "%APPDATA%\\Code\\User\\settings.json",
    "D": "%APPDATA%\\Code\\User\\copilot-instructions.md"
   },
   "explanation": "要让 GitHub Copilot Chat 遵循团队特定的 Transact-SQL 标准，应使用自定义指令与工作区上下文。\n\n创建 .github/copilot-instructions.md 文件是最有效的方式：\n把该文件放在存储库根目录。\nCopilot 会自动读取该文件以了解项目特定规则。\n可包含以下内容：\n命名约定（例如表名使用 PascalCase，存储过程使用 proc_ 前缀）。\n格式规则（例如关键字大写、使用 4 个空格缩进）。\n安全实践（例如始终使用架构前缀、避免 SELECT *）。\n\n用户级 settings.json 只影响个人，无法在团队间共享标准。"
  }
 },
 {
  "id": 94,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "C"
  ],
  "en": {
   "stem": "You have a Microsoft SQL Server 2025 database that contains a table named products. products contains two columns named description and embedding. embedding is generated from description.\nYou have an application named App1. App1 has a feature that uses the following query.\nVECTOR_DISTANCE(‘cosine’, @query_vector, embedding) Users report that the feature is slow during peak usage times.\nYou discover that during peak usage times, the semantic search latency increases and CPU utilization spikes.\nYou need to reduce latency and CPU utilization related to the App1 feature.\n\nWhat should you do?",
   "options": {
    "A": "Create a vector index on products.embedding and change the query to use VECTOR_NORMALIZE and NORM_TYPE = ‘norm1’.",
    "B": "Use CONTAINSTABLE against description only and remove the vector search.",
    "C": "Create a vector index on products.embedding and change the query to use VECTOR_SEARCH and METRIC = ‘cosine’.",
    "D": "Add a nonclustered index on products.embedding.",
    "E": "Change embedding to VARBINARY(8000)."
   },
   "explanation": "To optimize your Microsoft SQL Server 2025 environment, you should transition from a brute-force distance calculation to an Approximate Nearest Neighbor (ANN) search using a DiskANN-based vector index.\nThe Solution: Vector Indexing The VECTOR_DISTANCE function performs a full table scan, calculating the distance for every single row.\nDuring peak times, this consumes massive CPU cycles. A vector index allows SQL Server to navigate a pre-built graph to find matches, reducing complexity from O(n)  to O(log n).\n\nImplementation Steps\n1. Create the Vector Index\nYou must specify the distance metric during index creation. For cosine similarity, use COSINE.\nCREATE VECTOR INDEX idx_product_embedding\nON products (embedding)\nWITH (METRIC = 'COSINE');\n2. Update the Search Query\nReplace the WHERE or ORDER BY clause that uses VECTOR_DISTANCE with the VECTOR_SEARCH\nfunction.\n\nSELECT TOP (10) description, embedding\nFROM products\nWHERE VECTOR_SEARCH(\n    embedding,\n    @query_vector,\n    'COSINE',\n    10 -- Number of neighbors to return\n);\nWhy This Solves Your Problem\nCPU Relief: Avoids calculating distances for millions of rows.\nLower Latency: DiskANN is designed for sub-second retrieval even on large datasets.\nPeak Performance: By offloading the math to a specialized index structure, the engine remains responsive\nfor other transactional queries.\nReference:\nhttps://learn.microsoft.com/en-us/azure/postgresql/extensions/how-to-use-pgdiskann"
  },
  "zh": {
   "stem": "您有一个 Microsoft SQL Server 2025 数据库，其中包含一个名为 products 的表。products 包含名为 description 和 embedding 的两个列，embedding 由 description 生成。\n您有一个名为 App1 的应用程序。App1 的某个功能使用以下查询：\nVECTOR_DISTANCE('cosine', @query_vector, embedding)\n用户报告称，该功能在使用高峰期很慢。\n您发现在高峰期语义搜索延迟上升且 CPU 使用率飙升。\n您需要降低与 App1 该功能相关的延迟和 CPU 使用率。\n您应该怎么做？",
   "options": {
    "A": "在 products.embedding 上创建向量索引，并把查询改为使用 VECTOR_NORMALIZE 和 NORM_TYPE = 'norm1'。",
    "B": "仅对 description 使用 CONTAINSTABLE，并移除向量搜索。",
    "C": "在 products.embedding 上创建向量索引，并把查询改为使用 VECTOR_SEARCH 和 METRIC = 'cosine'。",
    "D": "在 products.embedding 上添加非聚集索引。",
    "E": "把 embedding 改为 VARBINARY(8000)。"
   },
   "explanation": "应从暴力距离计算转向基于 DiskANN 向量索引的近似最近邻 (ANN) 搜索。\n\nVECTOR_DISTANCE 会执行全表扫描，为每一行计算距离，高峰期会消耗大量 CPU。向量索引让 SQL Server 沿预先构建的图查找匹配项，复杂度从 O(n) 降到约 O(log n)。\n\n实施步骤：\n1. 创建向量索引（创建时必须指定距离度量）：\nCREATE VECTOR INDEX idx_product_embedding\nON products (embedding)\nWITH (METRIC = 'cosine');\n2. 更新搜索查询：改用 VECTOR_SEARCH 并指定 METRIC = 'cosine'，才能真正利用该索引。\n\n普通非聚集索引对向量无效；移除向量搜索会失去语义能力；改成 VARBINARY 会失去原生向量类型的优化。"
  }
 },
 {
  "id": 95,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have a SQL database in Microsoft Fabric that contains a table named dbo.Products.\ndbo.Products contains product catalog data.\n\nYou need to create a stored procedure that performs hybrid search. The solution must meet the following requirements:\nUse approximate nearest neighbor (ANN) to retrieve the top 20 candidate products.\nRe-rank only the candidates that also match a full-text query.\nGenerate the query embedding.\nHow should you complete the Transact-SQL code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "To implement a hybrid search with Approximate Nearest Neighbor (ANN) and Full-Text Search (FTS) in a Microsoft Fabric SQL database, you will use specific integrated vector functions and FTS predicates.\nBox 1: AI.GENERATE_EMBEDDING Embedding Generation:  CAST(AI.GENERATE_EMBEDDING(...) This calls the integrated AI model in Fabric to convert text into a vector.\nBox 2: VECTOR_SEARCH ANN Search: VECTOR_SEARCH The specific function used to perform high-performance similarity searches.\nBox 3: CONTAINSTABLE Full-Text Matching: CONTAINSTABLE returns a table with a RANK column for keyword relevance, used here to filter the vector candidates.\n\nReference:\nhttps://www.linkedin.com/pulse/sql-server-2025-from-relational-records-reasoning-engines-pandian-l6epc"
  },
  "zh": {
   "stem": "您在 Microsoft Fabric 中有一个 SQL 数据库，其中包含一个名为 dbo.Products 的表，该表存储产品目录数据。\n您需要创建一个执行混合搜索的存储过程。该解决方案必须满足以下要求：\n使用近似最近邻 (ANN) 检索前 20 个候选产品。\n只对同时匹配全文查询的候选项重新排名。\n生成查询嵌入。\n您应如何完成该 Transact-SQL 代码？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "要在 Microsoft Fabric SQL 数据库中实现结合近似最近邻 (ANN) 与全文搜索 (FTS) 的混合搜索，需要使用集成的向量函数与 FTS 谓词。\n\n框 1：AI_GENERATE_EMBEDDINGS —— 生成嵌入，调用 Fabric 中集成的 AI 模型把文本转换为向量。\n\n框 2：VECTOR_SEARCH —— 执行高性能相似度（ANN）搜索的函数。\n\n框 3：CONTAINSTABLE —— 全文匹配；它返回带 RANK 列的表，用于按关键字相关性筛选并重新排名向量候选项。"
  },
  "boxes": [
   {
    "prompt_en": "DECLARE @qv VECTOR(1536) = ... (@query_text USE MODEL Ada2Embeddings);",
    "prompt_zh": "DECLARE @qv VECTOR(1536) = ... (@query_text USE MODEL Ada2Embeddings);",
    "options_en": [
     "AI_GENERATE_EMBEDDINGS",
     "SEMANTICKEYPHRASETABLE",
     "VECTOR_NORMALIZE",
     "VECTOR_SEARCH"
    ],
    "options_zh": [
     "AI_GENERATE_EMBEDDINGS",
     "SEMANTICKEYPHRASETABLE",
     "VECTOR_NORMALIZE",
     "VECTOR_SEARCH"
    ],
    "correct_en": "AI_GENERATE_EMBEDDINGS",
    "correct_zh": "AI_GENERATE_EMBEDDINGS"
   },
   {
    "prompt_en": "FROM ... ( TABLE = dbo.Products AS t, ... ) AS s",
    "prompt_zh": "FROM ... ( TABLE = dbo.Products AS t, ... ) AS s",
    "options_en": [
     "CONTAINSTABLE",
     "SEMANTICSIMILARITYTABLE",
     "VECTOR_DISTANCE",
     "VECTOR_SEARCH"
    ],
    "options_zh": [
     "CONTAINSTABLE",
     "SEMANTICSIMILARITYTABLE",
     "VECTOR_DISTANCE",
     "VECTOR_SEARCH"
    ],
    "correct_en": "VECTOR_SEARCH",
    "correct_zh": "VECTOR_SEARCH"
   },
   {
    "prompt_en": "JOIN ... (dbo.Products, description, @keywords) AS fts",
    "prompt_zh": "JOIN ... (dbo.Products, description, @keywords) AS fts",
    "options_en": [
     "CONTAINSTABLE",
     "FREETEXTTABLE",
     "SEMANTICKEYPHRASETABLE",
     "SEMANTICSIMILARITYDETAILSTABLE"
    ],
    "options_zh": [
     "CONTAINSTABLE",
     "FREETEXTTABLE",
     "SEMANTICKEYPHRASETABLE",
     "SEMANTICSIMILARITYDETAILSTABLE"
    ],
    "correct_en": "CONTAINSTABLE",
    "correct_zh": "CONTAINSTABLE"
   }
  ]
 },
 {
  "id": 96,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "B"
  ],
  "en": {
   "stem": "You have a GitHub Enterprise subscription.\nYour team is developing an Azure SQL dataset solution from a locally cloned GitHub repository by using Microsoft Visual Studio Code and GitHub Copilot Chat.\nA mix of GitHub Copilot instructions is configured at different levels, including organization-wide,\nrepository-wide, agent-specific, and personal.\nWhich instructions will take precedence over the others?",
   "options": {
    "A": "repository-wide",
    "B": "personal",
    "C": "organization-wide",
    "D": "agent-specific"
   },
   "explanation": "In a GitHub Enterprise environment, personal instructions (user-level) generally have the highest precedence for individual interactions in VS Code.\nOrder of Precedence When GitHub Copilot processes instructions, it follows a \"specific-to-general\" hierarchy. The most specific context (the individual user) typically overrides broader organizational settings.\n1. Personal Instructions Set via .github/copilot-instructions.md in your local home directory or VS Code settings.\nOverrides all other layers for your specific session.\n2. Agent-Specific / Extension Instructions Specific instructions provided to a custom agent (like @workspace or a custom Chat participant).\n3. Repository-wide Instructions Stored in the .github/copilot-instructions.md file within the specific repository.\n4. Organization-wide Policies Set by Enterprise/Org admins. These usually act as \"guardrails\" (e.g., blocking suggestions) rather than stylistic instructions.\nReference:\nhttps://aiddbot.com/vscode-and-github-copilot"
  },
  "zh": {
   "stem": "您有一个 GitHub Enterprise 订阅。\n您的团队正在使用 Microsoft Visual Studio Code 和 GitHub Copilot Chat，基于本地克隆的 GitHub 存储库开发 Azure SQL 数据集解决方案。\n配置了多个级别的 GitHub Copilot 指令，包括组织范围、存储库范围、代理特定和个人级。\n哪一级指令的优先级高于其他指令？",
   "options": {
    "A": "存储库范围",
    "B": "个人",
    "C": "组织范围",
    "D": "代理特定"
   },
   "explanation": "在 GitHub Enterprise 环境中，对于 VS Code 中的个人交互，个人（用户级）指令通常具有最高优先级。\n\n优先级顺序：GitHub Copilot 处理指令时遵循“由具体到一般”的层次结构，最具体的上下文（个人用户）通常会覆盖更宽泛的组织设置。\n1. 个人指令 —— 通过本地主目录中的 .github/copilot-instructions.md 或 VS Code 设置配置，会覆盖您当前会话的所有其他层。\n2. 代理特定/扩展指令 —— 提供给自定义代理（如 @workspace 或自定义聊天参与者）的指令。\n3. 存储库范围指令 —— 存放在特定存储库的 .github/copilot-instructions.md 中。\n4. 组织范围指令。"
  }
 },
 {
  "id": 97,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure AI Search service and an index named hotels that includes a vector field named DescriptionVector.\nYou query hotels by using the Search Documents REST API.\nYou need to implement a hybrid search query that uses DescriptionVector and includes captions.\nHow should you complete the REST request body? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar\n\nbetween panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "Box 1: \"semantic\" queryType Set this to \"semantic\". This enables the semantic ranker, which is necessary to generate captions and answers.\nBox 2: hotels semanticConfiguration Specify the name of a pre-defined semantic configuration in your index (e.g., \"hotels\"). This configuration tells the service which text fields to use for title, content, and keywords during the semantic re-ranking process.\nBox 3: \"extractive\" captions Set this to \"extractive\". This property triggers the extraction of representative passages from the documents. You can optionally include highlighting by using \"extractive|highlight-true\".\nCompleted Request Body {\n\n  \"search\": \"ocean view\",\n  \"queryType\": \"semantic\",\n  \"semanticConfiguration\": \"your-index-semantic-config-name\",\n  \"captions\": \"extractive\",\n  \"top\": 10,\n  \"hybridSearch\": {\n    \"maxTextRecallSize\": 50\n  },"
  },
  "zh": {
   "stem": "您有一个 Azure AI Search 服务和一个名为 hotels 的索引，该索引包含一个名为 DescriptionVector 的向量字段。\n您使用 Search Documents REST API 查询 hotels。\n您需要实现一个使用 DescriptionVector 并包含 captions 的混合搜索查询。\n您应如何完成该 REST 请求正文？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "框 1：\"semantic\"（queryType）\n设为 \"semantic\" 才能启用语义排序器，这是生成 captions 和 answers 的前提。\n\n框 2：\"hotels\"（semanticConfiguration）\n指定索引中预定义的语义配置名称。该配置告诉服务在语义重新排名过程中使用哪些文本字段作为标题、内容和关键字。\n\n框 3：\"extractive\"（captions）\n设为 \"extractive\" 会从文档中提取代表性段落；也可使用 \"extractive|highlight-true\" 加上高亮。\n\n完成后的请求正文：\n{\n  \"search\": \"ocean view\",\n  \"queryType\": \"semantic\",\n  \"semanticConfiguration\": \"hotels\",\n  \"captions\": \"extractive\",\n  \"top\": 10,\n  ...\n}"
  },
  "sources_en": [
   "\"default\"",
   "\"extractive\"",
   "\"full\"",
   "\"generative\"",
   "\"hotels\"",
   "\"hybrid\"",
   "\"none\"",
   "\"semantic\"",
   "\"simple\""
  ],
  "sources_zh": [
   "\"default\"",
   "\"extractive\"",
   "\"full\"",
   "\"generative\"",
   "\"hotels\"",
   "\"hybrid\"",
   "\"none\"",
   "\"semantic\"",
   "\"simple\""
  ],
  "targets": [
   {
    "label_en": "\"queryType\":",
    "label_zh": "\"queryType\":",
    "correct_en": "\"semantic\"",
    "correct_zh": "\"semantic\""
   },
   {
    "label_en": "\"semanticConfiguration\":",
    "label_zh": "\"semanticConfiguration\":",
    "correct_en": "\"hotels\"",
    "correct_zh": "\"hotels\""
   },
   {
    "label_en": "\"captions\":",
    "label_zh": "\"captions\":",
    "correct_en": "\"extractive\"",
    "correct_zh": "\"extractive\""
   }
  ]
 },
 {
  "id": 98,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "single",
  "correctLetters": [
   "D"
  ],
  "en": {
   "stem": "You have an Azure SQL database that contains tables named dbo.Tickets and dbo.TicketNotes.\ndbo.Tickets contains support tickets and dbo.TicketNotes contains ticket notes.\nA retrieval query returns the top five relevant ticket notes for a user question.\nYou plan to implement a Retrieval Augmented Generation (RAG) pattern that meets the following requirements:\nFormats the retrieved relational data for large language model (LLM) processing Sends the user question and retrieved context to an Azure OpenAI REST endpoint for chat completions Extracts the response text from the LLM response Which Transact-SQL function should you use to extract the response text?",
   "options": {
    "A": "JSON_MODIFY(@response, ‘$.result’)",
    "B": "OPENJSON(@response)",
    "C": "JSON_QUERY(@response, ‘$.choices’)",
    "D": "JSON_VALUE(@response, ‘$.choices[0].message.content’)"
   },
   "explanation": "The Transact-SQL function used to extract the response text from the Azure OpenAI REST endpoint is JSON_VALUE.\nWhen you call the Azure OpenAI REST endpoint using sp_invoke_external_rest_endpoint, the response is returned as a JSON string. To isolate the actual text content from the LLM, you must parse this JSON structure.\nFunction: JSON_VALUE(response_body, '$.choices[0].message.content') Purpose: It extracts a scalar (text) value from a JSON string.\nPath: In the OpenAI schema, the generated response is always located at $.choices[0].message.content.\nReference:\nhttps://pub.towardsai.net/mastering-retrieval-augmented-generation-from-zero-to-expert-in-rag-for-quickly-\nbuilding-a-08141a308836"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含名为 dbo.Tickets 和 dbo.TicketNotes 的表。dbo.Tickets 包含支持工单，dbo.TicketNotes 包含工单备注。\n检索查询会针对用户问题返回最相关的五条工单备注。\n您计划实现一个满足以下要求的检索增强生成 (RAG) 模式：\n格式化检索到的关系数据以供大型语言模型 (LLM) 处理\n把用户问题和检索到的上下文发送到 Azure OpenAI REST 终结点进行聊天补全\n从 LLM 响应中提取响应文本\n您应该使用哪个 Transact-SQL 函数来提取响应文本？",
   "options": {
    "A": "JSON_MODIFY(@response, '$.result')",
    "B": "OPENJSON(@response)",
    "C": "JSON_QUERY(@response, '$.choices')",
    "D": "JSON_VALUE(@response, '$.choices[0].message.content')"
   },
   "explanation": "用于从 Azure OpenAI REST 终结点响应中提取文本的 T-SQL 函数是 JSON_VALUE。\n使用 sp_invoke_external_rest_endpoint 调用 Azure OpenAI REST 终结点时，响应以 JSON 字符串返回；要取出 LLM 生成的实际文本内容，必须解析该 JSON 结构。\n\n函数：JSON_VALUE(response_body, '$.choices[0].message.content')\n用途：从 JSON 字符串中提取标量（文本）值。\n路径：在 OpenAI 的架构中，生成的响应始终位于 $.choices[0].message.content。\n\nJSON_QUERY 返回的是 JSON 片段而非标量；OPENJSON 返回行集；JSON_MODIFY 用于修改 JSON。"
  }
 },
 {
  "id": 99,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "hotspot",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL managed instance that supports a gaming leaderboard API and contains a table named dbo.Leaderboard.\nYou plan to reduce write latency during peak events of dbo.Leaderboard.\nYou need to ensure that dbo.Leaderboard supports point lookups. The leaderboard information does NOT need to persist after a restart.\n\nWhich type of table and index should you configure? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "To reduce write latency while meeting your specific requirements for an Azure SQL Managed Instance,\nyou should use a Memory-Optimized Table with a Hash Index.\nBox 1: SCHEMA_ONLY in-memory Table type Table Type: Memory-Optimized (In-Memory OLTP) Since your data does not need to persist after a restart, you should define the table with DURABILITY = SCHEMA_ONLY.\n\nLow Latency: Operations happen at in-memory speeds.\nNo IO Overhead: Because data isn't written to disk (with SCHEMA_ONLY), log bottlenecks are eliminated.\nNo Locking/Blocking: Uses a multi-version concurrency control (MVCC) mechanism, which is perfect for high-concurrency peak events.\nVolatility: If the instance restarts, the table structure remains, but the data is wiped—matching your requirements perfectly.\nBox 2: HASH Index type:\nA HASH index is the most appropriate choice for a SCHEMA_ONLY in-memory table requiring high-\nvolume point lookups (e.g., WHERE ID = ?) and lowest write latency during peak events in an Azure SQL Managed Instance.\nWhy HASH over Nonclustered:\nHighest Performance for Point Lookups: HASH indexes are optimized specifically for looking up single rows based on an exact match of the index key.\nLowest Write Latency: HASH indexes provide faster ingestion and lower latency for INSERT operations compared to B-Tree based nonclustered indexes.\nSchema_Only: Since persistence is not required, the non-persistent nature of HASH index buckets fits the SCHEMA_ONLY requirement perfectly.\nNonclustered Drawback: Nonclustered indexes in-memory are best for range scans (WHERE Score > 100) rather than pure point lookups and introduce slightly higher latency on writes.\n\nReference:\nhttps://learn.microsoft.com/en-us/sql/relational-databases/in-memory-oltp/indexes-for-memory-optimized-\ntables"
  },
  "zh": {
   "stem": "您有一个支持游戏排行榜 API 的 Azure SQL 托管实例，其中包含一个名为 dbo.Leaderboard 的表。\n您计划在高峰活动期间降低 dbo.Leaderboard 的写入延迟。\n您需要确保 dbo.Leaderboard 支持点查找。排行榜信息在重启后不需要保留。\n您应该配置哪种类型的表和索引？要回答此问题，请在答案区域选择适当的选项。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "要在 Azure SQL 托管实例上降低写入延迟并满足上述要求，应使用内存优化表配合哈希索引。\n\n框 1：SCHEMA_ONLY 内存优化\n表类型：内存优化（内存中 OLTP）。由于数据在重启后不需要保留，应把表定义为 DURABILITY = SCHEMA_ONLY。\n低延迟：操作以内存速度进行。\n无 I/O 开销：SCHEMA_ONLY 不把数据写入磁盘，消除了日志瓶颈。\n无锁定/阻塞：使用多版本并发控制 (MVCC)，非常适合高并发的高峰活动。\n易失性：实例重启后表结构保留但数据被清空，完全符合要求。\n\n框 2：HASH\n哈希索引专为等值点查找而设计，是内存优化表中点查找的最佳选择。"
  },
  "boxes": [
   {
    "prompt_en": "Table type:",
    "prompt_zh": "表类型：",
    "options_en": [
     "Rowstore disk-based",
     "SCHEMA_AND_DATA in-memory",
     "SCHEMA_ONLY in-memory"
    ],
    "options_zh": [
     "基于磁盘的行存储",
     "SCHEMA_AND_DATA 内存优化",
     "SCHEMA_ONLY 内存优化"
    ],
    "correct_en": "SCHEMA_ONLY in-memory",
    "correct_zh": "SCHEMA_ONLY 内存优化"
   },
   {
    "prompt_en": "Index type:",
    "prompt_zh": "索引类型：",
    "options_en": [
     "HASH",
     "Nonclustered",
     "Nonclustered columnstore"
    ],
    "options_zh": [
     "HASH",
     "非聚集",
     "非聚集列存储"
    ],
    "correct_en": "HASH",
    "correct_zh": "HASH"
   }
  ]
 },
 {
  "id": 100,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "dragdrop",
  "correctLetters": [],
  "en": {
   "stem": "You have an Azure SQL database named SalesDB. SalesDB contains a table named dbo.Articles.\ndbo.Articles contains the following columns:\nArticleId Title Body LastModifiedUtc EmbeddingVector You have an application that generates embeddings from the concatenation of Title and Body and stores the results in EmbeddingVector.\nYou plan to implement an incremental embedding maintenance method that will use change data capture (CDC) to update embeddings only for rows that change, without scanning the entire table.\nYou need to ensure that only the columns required to generate the embeddings are captured. The solution must support querying net changes.\nHow should you complete the Transact-SQL script? To answer, drag the appropriate values to the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
   "options": {},
   "explanation": "To enable Change Data Capture (CDC) for incremental embedding updates on specific columns, define\nthe necessary columns in @captured_column_list (ArticleId, Title, Body) and set @supports_net_changes\nto 1. This captures only necessary updates, improving efficiency.\nUse [SalesDB]\nGO\nEXEC sys.sp_cdc_enable_table -- Box 1\n    @source_schema = N'dbo',\n    @source_name = N'Articles',\n    @role_name = NULL,\n    @captured_column_list = N'ArticleId, Title, Body', -- Box 2\n    @supports_net_changes = 1;                           -- Box 3\nGO\nBox 1: EXEC sys.sp_cdc_enable_table\nAdded EXEC sys.sp_cdc_enable_db; immediately after Use [SalesDB] to ensure the database-level CDC\nis enabled before enabling it on the table.\nBox 2: N'ArticleId, Title, Body'\n@captured_column_list: Explicitly listing ArticleId, Title, and Body ensures only these columns trigger\nCDC, excluding LastModifiedUtc and EmbeddingVector to save resources.\nBox 3: 1\nsupports_net_changes = 1: Essential to allow the use of cdc.fn_cdc_get_net_changes_... to capture only\nthe latest state of a row between polls, rather than every intermediate update.\nReference:\n\nhttps://devblogs.microsoft.com/azure-sql/efficiently-and-elegantly-modeling-embeddings-in-azure-sql-and-\nsql-server/"
  },
  "zh": {
   "stem": "您有一个名为 SalesDB 的 Azure SQL 数据库。SalesDB 包含一个名为 dbo.Articles 的表，其中包含以下列：\nArticleId\nTitle\nBody\nLastModifiedUtc\nEmbeddingVector\n您有一个应用程序，它由 Title 和 Body 的串联生成嵌入，并把结果存储在 EmbeddingVector 中。\n您计划实现一种增量嵌入维护方法，使用变更数据捕获 (CDC) 仅为发生更改的行更新嵌入，而无需扫描整个表。\n您需要确保只捕获生成嵌入所需的列。该解决方案必须支持查询净更改。\n您应如何完成该 Transact-SQL 脚本？要回答此问题，请将适当的值拖动到正确的目标。每个值可以使用一次、多次或根本不使用。您可能需要拖动窗格之间的分隔条或滚动才能查看内容。\n注意：每个正确的选择值一分。",
   "options": {},
   "explanation": "要为特定列启用变更数据捕获 (CDC) 以支持增量嵌入更新，需在 @captured_column_list 中定义所需列 (ArticleId, Title, Body)，并把 @supports_net_changes 设为 1。\n\nUSE [SalesDB];\nGO\nEXEC sys.sp_cdc_enable_db;                              -- 框 1\nGO\nEXEC sys.sp_cdc_enable_table\n    @source_schema = N'dbo',\n    @source_name = N'Articles',\n    @role_name = NULL,\n    @captured_column_list = N'ArticleId, Title, Body',  -- 框 2\n    @supports_net_changes = 1;                          -- 框 3\nGO\n\n框 1：在表级启用 CDC 之前，必须先在数据库级启用 CDC。\n框 2：显式列出 ArticleId、Title、Body，只捕获生成嵌入所需的列。\n框 3：@supports_net_changes = 1 才能查询净更改。"
  },
  "sources_en": [
   "0",
   "1",
   "EXEC sys.sp_cdc_disable_db;",
   "EXEC sys.sp_cdc_enable_db;",
   "N'ArticleId, Title, Body'",
   "N'Title, Body, LastModifiedUtc, EmbeddingVector'"
  ],
  "sources_zh": [
   "0",
   "1",
   "EXEC sys.sp_cdc_disable_db;",
   "EXEC sys.sp_cdc_enable_db;",
   "N'ArticleId, Title, Body'",
   "N'Title, Body, LastModifiedUtc, EmbeddingVector'"
  ],
  "targets": [
   {
    "label_en": "Box 1 (after USE [SalesDB]; GO)",
    "label_zh": "框 1（USE [SalesDB]; GO 之后）",
    "correct_en": "EXEC sys.sp_cdc_enable_db;",
    "correct_zh": "EXEC sys.sp_cdc_enable_db;"
   },
   {
    "label_en": "@captured_column_list =",
    "label_zh": "@captured_column_list =",
    "correct_en": "N'ArticleId, Title, Body'",
    "correct_zh": "N'ArticleId, Title, Body'"
   },
   {
    "label_en": "@supports_net_changes =",
    "label_zh": "@supports_net_changes =",
    "correct_en": "1",
    "correct_zh": "1"
   }
  ]
 },
 {
  "id": 101,
  "section": "Implement AI capabilities in database solutions",
  "sectionZh": "在数据库解决方案中实现 AI 功能",
  "isCaseStudy": false,
  "type": "multi",
  "correctLetters": [
   "B",
   "C"
  ],
  "en": {
   "stem": "You have an Azure SQL database that contains a table named Tickets_Embeddings.\nTickets_Embeddings contains a VECTOR(1536) column.\nEmbeddings are generated by using text-embedding-ada-002 and the /openai/v1/embeddings endpoint.\nAfter a review of the current environment, the following changes are requested:\nThe AI architect has recommended switching to text-embedding-3-small.\nThe security team requires authentication by using Microsoft Entra managed identities only. Storing API keys in an application is prohibited.\nWhich two actions should you include in the solution? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
   "options": {
    "A": "Alter the database tables.",
    "B": "Regenerate all the embeddings.",
    "C": "Change the endpoint.",
    "D": "Change the primary keys for the tickets.",
    "E": "Add a firewall rule."
   },
   "explanation": "To migrate your Azure SQL database to use the text-embedding-3-small model while implementing Microsoft Entra managed identity authentication, you should take the following actions:\n[B] Regenerate all the embeddings: Even though text-embedding-ada-002 and the default configuration of text-embedding-3-small both use 1,536 dimensions, the underlying vector representations are mathematically incompatible. Comparing an \"ada\" vector to a \"v3-small\" vector using cosine similarity will yield incorrect results. You must re-embed your existing data using the new model to maintain search accuracy.\n[C] Change the endpoint: To switch models, you must update your application code or database configuration (such as an AI_GENERATE_EMBEDDINGS function call or a stored procedure) to point to the new Azure OpenAI deployment endpoint for text-embedding-3-small.\nWhy these actions are necessary:\nIncompatibility: Vectors generated by different models exist in different latent spaces. While you do not need to Alter the database tables (since the VECTOR(1536) column type remains identical for both models), the actual data inside those columns must be replaced.\nManaged Identity: To meet the requirement of using Microsoft Entra managed identities and prohibiting API keys, you must configure your application or the Azure SQL DB to authenticate with Azure OpenAI using a managed identity. This involves granting the identity the Cognitive Services OpenAI User role and updating your connection strings/calls to exclude the api-key header.\nReference:\nhttps://microsoftlearning.github.io/mslearn-postgresql/Instructions/Labs/13-generate-vector-embeddings-\nazure-openai.html"
  },
  "zh": {
   "stem": "您有一个 Azure SQL 数据库，其中包含一个名为 Tickets_Embeddings 的表。Tickets_Embeddings 包含一个 VECTOR(1536) 列。\n嵌入使用 text-embedding-ada-002 和 /openai/v1/embeddings 终结点生成。\n在审查当前环境后，提出了以下更改要求：\nAI 架构师建议改用 text-embedding-3-small。\n安全团队要求仅使用 Microsoft Entra 托管标识进行身份验证，禁止在应用程序中存储 API 密钥。\n您应该在解决方案中包含哪两项操作？每个正确答案都是完整的解决方案。\n注意：每个正确的选择值一分。",
   "options": {
    "A": "更改数据库表。",
    "B": "重新生成所有嵌入。",
    "C": "更改终结点。",
    "D": "更改工单的主键。",
    "E": "添加防火墙规则。"
   },
   "explanation": "要把 Azure SQL 数据库迁移到 text-embedding-3-small 模型并改用 Microsoft Entra 托管标识身份验证，应执行：\n\n[B] 重新生成所有嵌入：虽然 text-embedding-ada-002 与 text-embedding-3-small 的默认配置都是 1536 维，但两者的向量表示在数学上互不兼容。用余弦相似度比较 ada 向量与 v3-small 向量会得到错误结果，因此必须用新模型重新嵌入现有数据以保持搜索准确性。\n\n[C] 更改终结点：要切换模型，必须更新应用程序代码或数据库配置（例如 AI_GENERATE_EMBEDDINGS 函数调用或存储过程），使其指向新的 Azure OpenAI 部署终结点；同时可改用托管标识进行身份验证。\n\n由于维度不变，无需更改表结构；主键与此无关；防火墙规则也不解决模型切换或身份验证方式的问题。"
  }
 }
];
