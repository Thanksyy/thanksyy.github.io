/**
 * 个人信息数据（Data Canvas / HKUST 蓝金风格）
 * 维护说明：修改本文件即可更新主页顶部信息、统计与社交链接，无需改动任何组件代码。
 */

// 资源使用相对路径（./assets/...），兼容 GitHub Pages 子路径与自定义域名部署
export const ASSETS = {
  logo: "./assets/logo.png",
  avatar: "./assets/avatar.webp",
  heroLight: "./assets/hero-light.webp",
  recruitmentPdf: "./assets/recruitment.pdf",
};

export const PROFILE = {
  name: "Yuyu Luo",
  nameZh: "骆昱宇",
  title: "Assistant Professor",
  titleZh: "助理教授 · 博士生导师",
  affiliations: [
    "Data Science and Analytics Thrust, Information Hub",
    "The Hong Kong University of Science and Technology (Guangzhou)",
  ],
  affiliationsZh: [
    "数据科学与分析学域，信息枢纽",
    "香港科技大学（广州）",
  ],
  extraAffiliation: "Affiliated Assistant Professor, HKUST",
  extraAffiliationZh: "香港科技大学联署助理教授",
  email: "yuyuluo[at]hkust-gz.edu.cn",
  emailHref: "mailto:yuyuluo@hkust-gz.edu.cn",
  office: "E2-615, HKUST(GZ)",
  lab: {
    name: "DIAL @ HKUST(GZ)",
    full: "Data Intelligence and Analytics Lab",
    url: "https://github.com/HKUSTDial",
  },
  tagline: "Building next-generation data intelligence systems at the intersection of DATA + AI.",
  taglineZh: "在 DATA + AI 数智融合方向，构建下一代数据智能系统。",
  links: {
    scholar: "https://scholar.google.com/citations?user=FAjYJkQAAAAJ&hl=en",
    github: "https://github.com/HKUSTDial",
    email: "mailto:yuyuluo@hkust-gz.edu.cn",
  },
};

/** Hero 区统计指标（稳定指标，无需依赖动态引用数） */
export const STATS: { value: string; label: string; sub: string }[] = [
  { value: "70+", label: "Publications", sub: "Top-tier venues" },
  { value: "40+", label: "CCF-A Papers", sub: "SIGMOD / VLDB / ICML…" },
  { value: "50k+", label: "OpenManus ★", sub: "GitHub stars" },
];

/** 研究方向标签 */
export const RESEARCH_INTERESTS: { title: string; desc: string }[] = [
  {
    title: "Foundation Agents",
    desc: "Large language models, foundation agents, and agentic orchestration.",
  },
  {
    title: "Data Agents",
    desc: "Autonomous agents that understand, prepare, and analyze data.",
  },
  {
    title: "AI for Databases",
    desc: "Text-to-SQL, Table QA, and intelligent database systems.",
  },
  {
    title: "Data-centric AI",
    desc: "Data selection, synthesis, and quality for efficient, trustworthy AI.",
  },
];

export const BIO_EN = [
  "Yuyu directs the Data Intelligence and Analytics Lab (DIAL @ HKUST(GZ)), where the lab's mission is to develop next-generation data intelligence systems through research at the intersection of DATA+AI. Its focus areas include large language models, foundation agents, AI for databases (e.g., Text-to-SQL, Table QA), and data-centric AI.",
  "Yuyu has published over 50 papers in top-tier venues in databases and data mining (SIGMOD, VLDB, KDD, TODS) as well as artificial intelligence (ICML, NeurIPS, ICLR, ACL). He has contributed to or advised several influential DATA+AI projects, including OpenManus, DeepEye, DeepFund, Flash-Sparse-Attention, Supervisor-Skills, and Alpha-SQL. All research projects are open-source and widely used by enterprises such as Huawei, State Grid, ByteDance, Ant Group, and TAL Education.",
];

export const BIO_ZH = [
  "骆昱宇，现任香港科技大学（广州）助理教授、香港科技大学联署助理教授、博士生导师，数据智能与分析实验室（DIAL）负责人。研究兴趣为 DATA+AI 数智融合方向，包括数据为中心的人工智能（Data-centric AI, DCAI）、大模型智能体（Foundation Agents）、数据智能体（Data Agents）、智能数据库系统（AI for Databases）。",
  "在研项目包括国家科技重大专项课题、国家自然科学基金青年项目等，在数据管理与数据挖掘（SIGMOD/VLDB/ICDE/SIGKDD/TODS）、机器学习（ICML/NeurIPS/ICLR）等领域发表 CCF-A 类论文 40 余篇，担任多个国际顶会的 Associate PC Chair/Area Chair 和 IEEE Data Engineering Bulletin 期刊副主编。",
  "曾获多个最佳论文/提名奖（如 SIGMOD 2023、CIKM 2022、DASFAA 2019），领导或参与开源了多个 DATA+AI 系统（如 DeepEye 数据智能体、OpenManus 智能体项目，GitHub 5 万+ Stars）。曾获世界人工智能大会云帆奖、福布斯中国“30 位 30 岁以下精英”榜、清华特等奖学金、华为火花奖、清华大学优博/优博论文奖、中国计算机学会优秀博士学位论文提名奖等。",
];

/** 招生信息 */
export const RECRUITMENT_ZH =
  "课题组常年招生 DATA+AI 数智融合方向（数据智能体、大模型智能体、GUI Agent、Data-centric AI、智能数据库系统、AI4S 材料科学智能体）的博士生（3~5 名/年）、红鸟硕士生、RA 和访问学生、博士后。课题组经费充足，计算资源充沛，与业界合作密切，优秀的博士生可与院士或杰青进行联合培养。AI4S 材料科学智能体方向的博士生与张统一院士联合培养。欢迎感兴趣的同学将申请材料发送至我的邮箱，每份邮件和材料都会被仔细阅读与评估。";

export const RECRUITMENT_EN =
  "DIAL is recruiting year-round for the DATA+AI direction (Data Agents, LLM Agents, GUI Agents, Data-centric AI, AI for Databases, and AI4S materials-science agents): PhD students (3-5 per year), MPhil (Redbird) students, RAs, visiting students, and postdocs. The lab is well-funded with abundant compute and close industry collaborations; outstanding PhD students may be co-supervised with academicians or distinguished scholars. Please email me your application materials — every message is read and evaluated carefully.";
