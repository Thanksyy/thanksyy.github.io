/**
 * 论文数据（支持标签 tag 筛选与搜索）
 * ============================ 维护指南 ============================
 * 新增一篇论文：复制下方任意一条记录，按字段填写即可。字段说明：
 *   - title:   论文标题
 *   - authors: 作者字符串。用 "**Yuyu Luo**" 标记自己（会加粗高亮）；
 *              用 "*姓名*" 标记你指导的学生（会加下划线）。
 *   - venue:   发表会议/期刊 + 年份，如 "SIGMOD 2026"
 *   - year:    年份（数字，用于分组与筛选）
 *   - tags:    标签数组，用于筛选与搜索，建议从 TAGS 常量里选用，保持统一
 *   - note:    可选，附加说明（如 "Oral, top 1.8%"、"Tutorial"）
 *   - links:   可选，链接数组，每个 { label, url }；label 用于显示按钮文字
 * 论文会自动按 year 倒序分组，无需手动排序。
 * ================================================================
 */

export type LinkType = "PDF" | "Code" | "Data" | "Slides" | "Homepage" | "Video" | "Demo";

export interface PubLink {
  label: string;
  url: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  tags: string[];
  note?: string;
  links?: PubLink[];
}

/** 推荐使用的标签集合（保持统一，便于筛选）。可自由增删。 */
export const TAGS = [
  "Text-to-SQL",
  "LLM Agent",
  "Data Agent",
  "Data-centric AI",
  "Visualization",
  "AI for DB",
  "Benchmark",
  "Survey",
  "Tutorial",
  "AI4Science",
  "Demo",
] as const;

export const PUBLICATIONS: Publication[] = [
  // ---------------------------- 2026 ----------------------------
  {
    title: "DeepEye-SQL: A Software-Engineering-Inspired Text-to-SQL Framework",
    authors: "*Boyan Li*, Chong Chen, Zhujun Xue, Yinan Mei, **Yuyu Luo**",
    venue: "SIGMOD 2026",
    year: 2026,
    tags: ["Text-to-SQL", "AI for DB", "LLM Agent"],
    note: "Top 5 in BIRD Leaderboard",
    links: [
      { label: "PDF", url: "https://www.arxiv.org/pdf/2510.17586" },
      { label: "Leaderboard", url: "https://bird-bench.github.io/" },
    ],
  },
  {
    title:
      "Reward-SQL: Boosting Text-to-SQL via Stepwise Execution-Aware Reasoning and Process-Supervised Rewards",
    authors:
      "*Yuxin Zhang*, Meihao Fan, Ju Fan, Mingyang Yi, **Yuyu Luo**, Guoliang Li, Bin Wu, Wenchao Zhou",
    venue: "SIGMOD 2026",
    year: 2026,
    tags: ["Text-to-SQL", "AI for DB"],
    links: [{ label: "PDF", url: "https://arxiv.org/abs/2505.04671" }],
  },
  {
    title: "Data Agents: Levels, State of the Art, and Open Problems",
    authors: "**Yuyu Luo**, Guoliang Li, Ju Fan, Nan Tang",
    venue: "SIGMOD 2026",
    year: 2026,
    tags: ["Data Agent", "Tutorial", "Survey"],
    note: "Tutorial",
    links: [
      { label: "PDF", url: "https://luoyuyu.vip/files/SIGMOD26-Tutorial-DataAgents.pdf" },
      { label: "Awesome Data Agents", url: "https://github.com/HKUSTDial/awesome-data-agents" },
    ],
  },
  {
    title: "Retrieval-augmented Generation (RAG): What is There for Data Management Researchers?",
    authors: "Arijit Khan, **Yuyu Luo**, Wenjie Zhang, Minqi Zhou, Xiaofang Zhou",
    venue: "SIGMOD Record",
    year: 2026,
    tags: ["AI for DB", "Survey"],
    links: [
      {
        label: "PDF",
        url: "https://sigmodrecord.org/publications/sigmodRecord/2512/pdfs/08_OpenForum_Khan.pdf",
      },
    ],
  },
  {
    title: "LEAD: Iterative Data Selection for Efficient LLM Instruction Tuning",
    authors:
      "*Xiaotian Lin*, Yanlin Qi, *Yizhang Zhu*, Themis Palpanas, Chengliang Chai, Nan Tang, **Yuyu Luo**",
    venue: "VLDB 2026",
    year: 2026,
    tags: ["Data-centric AI", "LLM Agent"],
    links: [{ label: "Code", url: "https://github.com/HKUSTDial/LEAD" }],
  },
  {
    title:
      "OpenSQL: Data-Efficient Text-to-SQL for Open-Source LLMs via Synthesized Intermediate Supervision",
    authors: "*Ruilin Hu*, **Yuyu Luo**, Guoliang Li, Shuangqiao, Yun Luo",
    venue: "VLDB 2026",
    year: 2026,
    tags: ["Text-to-SQL", "Data-centric AI"],
  },
  {
    title: "TACO: A Benchmark for Open-Domain Text-to-SQL with Ambiguous and Cross-Database Queries",
    authors:
      "Chao Deng, Ju Fan, **Yuyu Luo**, Qinliang Xue, Meihao Fan, *Yuxin Zhang*, Min Zhang, Xiaofeng Jia, Jing Zhang, Xiaoyong Du",
    venue: "VLDB 2026",
    year: 2026,
    tags: ["Text-to-SQL", "Benchmark"],
    links: [{ label: "Data", url: "https://github.com/Akanezora0/TACO-Benchmark" }],
  },
  {
    title: "OmniMoE: An Efficient MoE by Orchestrating Atomic Experts at Scale",
    authors: "Jingze Shi, *Zhangyang Peng*, *Yizhang Zhu*, Guang Liu, **Yuyu Luo**",
    venue: "ICML 2026",
    year: 2026,
    tags: ["LLM Agent"],
    links: [{ label: "PDF", url: "https://arxiv.org/abs/2602.05711" }],
  },
  {
    title: "AutoWebWorld: Synthesizing Infinite Verifiable Web Environments via Finite State Machines",
    authors: "Yifan Wu, Yiran Peng, Yiyu Chen, et al., **Yuyu Luo**",
    venue: "ICML 2026",
    year: 2026,
    tags: ["LLM Agent", "Benchmark"],
    links: [{ label: "PDF", url: "https://arxiv.org/abs/2602.14296" }],
  },
  {
    title: "AOrchestra: Automating Sub-Agent Creation for Agentic Orchestration",
    authors: "Jianhao Ruan, et al., Bang Liu, Chenglin Wu, **Yuyu Luo**, *Jiayi Zhang*",
    venue: "ICML 2026",
    year: 2026,
    tags: ["LLM Agent"],
  },
  {
    title: "InteractComp: Evaluating Search Agents With Ambiguous Queries",
    authors: "Mingyi Deng, Lijun Huang, Yani Fan, et al., Chenglin Wu, **Yuyu Luo**",
    venue: "ICML 2026",
    year: 2026,
    tags: ["LLM Agent", "Benchmark"],
  },
  {
    title: "InfoPO: Information-Driven Policy Optimization for User-Centric Agents",
    authors: "Fanqi Kong, *Jiayi Zhang*, et al., Chenglin Wu, **Yuyu Luo**, Bang Liu",
    venue: "ICML 2026",
    year: 2026,
    tags: ["LLM Agent"],
  },
  {
    title: "VisJudgeBench: Aesthetics and Quality Assessment of Visualizations",
    authors:
      "*Yupeng Xie*, Zhiyang Zhang, Yifan Wu, Sirong Lu, *Jiayi Zhang*, Bang Liu, Chenglin Wu, **Yuyu Luo**",
    venue: "ICLR 2026",
    year: 2026,
    tags: ["Visualization", "Benchmark"],
    links: [{ label: "Code & Data", url: "https://github.com/HKUSTDial" }],
  },
  {
    title: "Long-Document QA with Chain-of-Structured-Thought and Fine-Tuned SLMs",
    authors: "Zhuowen Liang, *Xiaotian Lin*, Zhengxuan Zhang, **Yuyu Luo**, Haixun Wang, Nan Tang",
    venue: "ICLR 2026",
    year: 2026,
    tags: ["LLM Agent", "AI for DB"],
  },
  {
    title: "Beyond Structure: Invariant Crystal Property Prediction with Pseudo-Particle Ray Diffraction",
    authors:
      "Bin Cao, Yang Liu, Longhan Zhang, Yifan Wu, Zhixun Li, **Yuyu Luo**, Hong Cheng, Yang Ren, Tongyi Zhang",
    venue: "ICLR 2026",
    year: 2026,
    tags: ["AI4Science"],
  },
  {
    title: "ROSE: An Intent-Centered Evaluation Metric for NL2SQL",
    authors: "Wenqi Pei, Shizheng Hou, *Boyan Li*, et al., **Yuyu Luo**",
    venue: "ACL 2026",
    year: 2026,
    tags: ["Text-to-SQL", "Benchmark"],
  },
  {
    title: "DPC: Training-Free Text-to-SQL Candidate Selection via Dual-Paradigm Consistency",
    authors: "*Boyan Li*, Ou Ocean Kun Hei, Yue Yu, **Yuyu Luo**",
    venue: "ACL 2026",
    year: 2026,
    tags: ["Text-to-SQL"],
  },
  {
    title: "GPU-Accelerated OLTP: An In-Depth Analysis of Concurrency Control Schemes",
    authors: "*Zihan Sun*, **Yuyu Luo**, Yong Zhang, Chao Li, Chunxiao Xing",
    venue: "ICDE 2026",
    year: 2026,
    tags: ["AI for DB"],
  },
  {
    title: "Revisiting Single-Table Retrieval: An Open Problem Under 360° Stress Tests",
    authors: "Chenyu Yang, Junhao Li, Ziyu Jiang, **Yuyu Luo**, Ju Fan, Nan Tang",
    venue: "ICDE 2026",
    year: 2026,
    tags: ["AI for DB", "Benchmark"],
  },
  {
    title:
      "Debugging Defective Visualizations: Empirical Insights Informing a Human-AI Co-Debugging System",
    authors: "*Shuyu Shen*, Sirong Lu, Leixian Shen, **Yuyu Luo**",
    venue: "ACM CHI 2026",
    year: 2026,
    tags: ["Visualization"],
  },
  {
    title: "TableLens: Reviving the Narrative Interplay Between Tables and Text in Scholar Reading",
    authors: "*Liangwei Wang*, Zhengxuan Zhang, Yi-Fan Cao, Fugee Tsung, **Yuyu Luo**",
    venue: "ACM CHI 2026",
    year: 2026,
    tags: ["Visualization", "AI for DB"],
  },

  // ---------------------------- 2025 ----------------------------
  {
    title: "AFlow: Automating Agentic Workflow Generation",
    authors: "*Jiayi Zhang*, Jinyu Xiang, et al., **Yuyu Luo**, Chenglin Wu",
    venue: "ICLR 2025",
    year: 2025,
    tags: ["LLM Agent"],
    note: "Oral, top 1.8%",
    links: [{ label: "Code", url: "https://github.com/FoundationAgents/AFlow" }],
  },
  {
    title: "Alpha-SQL: Zero-Shot Text-to-SQL using Monte Carlo Tree Search",
    authors: "*Boyan Li*, *Jiayi Zhang*, Ju Fan, Yanwei Xu, Chong Chen, Nan Tang, **Yuyu Luo**",
    venue: "ICML 2025",
    year: 2025,
    tags: ["Text-to-SQL", "LLM Agent"],
    links: [
      { label: "Code", url: "https://github.com/HKUSTDial/Alpha-SQL" },
      { label: "Slides", url: "https://luoyuyu.vip/" },
    ],
  },
  {
    title: "nvBench 2.0: Resolving Ambiguity in Text-to-Visualization through Stepwise Reasoning",
    authors: "*Tianqi Luo*, Chuhan Huang, Leixian Shen, *Boyan Li*, *Shuyu Shen*, Wei Zeng, Nan Tang, **Yuyu Luo**",
    venue: "NeurIPS 2025",
    year: 2025,
    tags: ["Visualization", "Benchmark"],
    links: [{ label: "Dataset & Code", url: "https://github.com/HKUSTDial" }],
  },
  {
    title: "Time Travel is Cheating: Going Live with DeepFund for Real-Time Fund Investment Benchmarking",
    authors:
      "*Changlun Li*, *Yao Shi*, Chen Wang, Qiqi Duan, Runke Ruan, Weijie Huang, Haonan Long, Lijun Huang, Nan Tang, **Yuyu Luo**",
    venue: "NeurIPS 2025",
    year: 2025,
    tags: ["LLM Agent", "Benchmark"],
    links: [{ label: "Code", url: "https://github.com/HKUSTDial/DeepFund" }],
  },
  {
    title: "Atom of Thoughts for Markov LLM Test-Time Scaling",
    authors: "Fengwei Teng, Quan Shi, Zhaoyang Yu, *Jiayi Zhang*, **Yuyu Luo**, Chenglin Wu, Zhijiang Guo",
    venue: "NeurIPS 2025",
    year: 2025,
    tags: ["LLM Agent"],
    links: [{ label: "Code", url: "https://github.com/FoundationAgents" }],
  },
  {
    title: "Natural Language to SQL: State of the Art and Open Problems",
    authors: "**Yuyu Luo**, Guoliang Li, Ju Fan, Nan Tang",
    venue: "VLDB 2025",
    year: 2025,
    tags: ["Text-to-SQL", "Tutorial", "Survey"],
    note: "Tutorial",
    links: [{ label: "Handbook", url: "https://github.com/HKUSTDial/NL2SQL_Handbook" }],
  },
  {
    title: "Data Imputation with Limited Data Redundancy Using Data Lakes",
    authors: "Chenyu Yang, **Yuyu Luo**, Chuanxuan Cui, Ju Fan, Chengliang Chai, Nan Tang",
    venue: "VLDB 2025",
    year: 2025,
    tags: ["Data-centric AI", "AI for DB"],
  },
  {
    title:
      "Weak-to-Strong Prompts with Lightweight-to-Powerful LLMs for High-Accuracy, Low-Cost, and Explainable Data Transformation",
    authors: "*Changlun Li*, Chenyu Yang, **Yuyu Luo**, Ju Fan, Nan Tang",
    venue: "VLDB 2025",
    year: 2025,
    tags: ["Data-centric AI", "AI for DB"],
  },
  {
    title: "NL2SQL-Bugs: A Benchmark for Detecting Semantic Errors in NL2SQL Translation",
    authors: "*Xinyu Liu*, *Shuyu Shen*, *Boyan Li*, Nan Tang, **Yuyu Luo**",
    venue: "KDD 2025",
    year: 2025,
    tags: ["Text-to-SQL", "Benchmark"],
    links: [{ label: "Dataset & Code", url: "https://github.com/HKUSTDial" }],
  },
  {
    title:
      "Coreset Selection over Incomplete Data for Data-Effective and Data-Efficient Machine Learning",
    authors: "Chengliang Chai, Nan Tang, Ju Fan, **Yuyu Luo**, Guoliang Li, Ye Yuan, Guoren Wang",
    venue: "ACM TODS 2025",
    year: 2025,
    tags: ["Data-centric AI"],
  },
  {
    title: "EllieSQL: Cost-Efficient Text-to-SQL with Complexity-Aware Routing",
    authors: "*Yizhang Zhu*, Runzhi Jiang, *Boyan Li*, Nan Tang, **Yuyu Luo**",
    venue: "COLM 2025",
    year: 2025,
    tags: ["Text-to-SQL", "LLM Agent"],
    links: [{ label: "Homepage", url: "https://github.com/HKUSTDial" }],
  },
  {
    title: "Data Interpreter: An LLM Agent For Data Science",
    authors: "Sirui Hong, Yizhang Lin, Bang Liu, *Jiayi Zhang*, et al., **Yuyu Luo**, Chenglin Wu",
    venue: "ACL 2025 Findings",
    year: 2025,
    tags: ["Data Agent", "LLM Agent"],
  },
  {
    title: "DeepVIS: Bridging Natural Language and Data Visualization Through Step-wise Reasoning",
    authors: "Zhihao Shuai, *Boyan Li*, Siyu Yan, **Yuyu Luo**, Weikai Yang",
    venue: "IEEE VIS 2025",
    year: 2025,
    tags: ["Visualization"],
  },
  {
    title: "ChartMark: A Structured Grammar for Chart Annotation",
    authors: "Yiyu Chen, Yifan Wu, *Shuyu Shen*, *Yupeng Xie*, Leixian Shen, Hui Xiong, **Yuyu Luo**",
    venue: "IEEE VIS 2025",
    year: 2025,
    tags: ["Visualization"],
    note: "Short Paper",
  },
  {
    title: "Augmenting Realistic Charts with Virtual Overlays",
    authors: "*Yao Shi*, *Boyan Li*, **Yuyu Luo**, Lei Chen, Nan Tang",
    venue: "ACM CHI 2025",
    year: 2025,
    tags: ["Visualization"],
  },

  // ---------------------------- 2024 ----------------------------
  {
    title: "The Dawn of Natural Language to SQL: Are We Fully Ready?",
    authors: "*Boyan Li*, **Yuyu Luo**, Chengliang Chai, Guoliang Li, Nan Tang",
    venue: "VLDB 2024",
    year: 2024,
    tags: ["Text-to-SQL", "AI for DB"],
    note: "2nd most-cited PVLDB 2024 paper",
    links: [{ label: "Homepage", url: "https://github.com/HKUSTDial/NL2SQL_Handbook" }],
  },
  {
    title: "HAIChart: Human and AI Paired Visualization System",
    authors: "*Yupeng Xie*, **Yuyu Luo**, Guoliang Li, Nan Tang",
    venue: "VLDB 2024",
    year: 2024,
    tags: ["Visualization", "Data Agent"],
    links: [{ label: "Code", url: "https://github.com/HKUSTDial" }],
  },
  {
    title: "Are Large Language Models Good Statisticians?",
    authors: "*Yizhang Zhu*, Shiyin Du, *Boyan Li*, **Yuyu Luo**, Nan Tang",
    venue: "NeurIPS 2024",
    year: 2024,
    tags: ["LLM Agent", "Benchmark"],
    links: [{ label: "Dataset", url: "https://github.com/HKUSTDial" }],
  },
  {
    title: "VerifAI: Verified Generative AI",
    authors: "Nan Tang, Chenyu Yang, Ju Fan, Lei Cao, **Yuyu Luo**, Alon Halevy",
    venue: "CIDR 2024",
    year: 2024,
    tags: ["AI for DB", "Data Agent"],
  },
  {
    title: "Data Playwright: Authoring Data Videos with Annotated Narration",
    authors: "Leixian Shen, Haotian Li, Yun Wang, *Tianqi Luo*, **Yuyu Luo**, Huamin Qu",
    venue: "IEEE TVCG 2024",
    year: 2024,
    tags: ["Visualization"],
  },
  {
    title:
      "ChartInsights: Evaluating Multimodal Large Language Models for Low-Level Chart Question Answering",
    authors: "Yifan Wu, Lutao Yan, Leixian Shen, Yunhai Wang, Nan Tang, **Yuyu Luo**",
    venue: "EMNLP 2024",
    year: 2024,
    tags: ["Visualization", "Benchmark", "LLM Agent"],
    links: [{ label: "Dataset", url: "https://github.com/HKUSTDial" }],
  },
  {
    title: "Fast, Robust and Interpretable Participant Contribution Estimation for Federated Learning",
    authors: "Yong Wang, **Yuyu Luo**, Kaiyu Li, Guoliang Li, Yunyan Guo, Zhuo Wang",
    venue: "ICDE 2024",
    year: 2024,
    tags: ["Data-centric AI"],
  },
  {
    title:
      "Mitigating Data Scarcity in Supervised Machine Learning through Reinforcement Learning Guided Data Generation",
    authors:
      "Chengliang Chai, Kaisen Jin, Nan Tang, Ju Fan, Lianpeng Qiao, Yu-Ping Wang, **Yuyu Luo**, Ye Yuan, Guoren Wang",
    venue: "ICDE 2024",
    year: 2024,
    tags: ["Data-centric AI"],
  },
  {
    title: "CoInsight: Visual Storytelling for Hierarchical Tables with Connected Insights",
    authors: "Guozheng Li, Runfei Li, Yunshan Feng, Yu Zhang, **Yuyu Luo**, Chi Harold Liu",
    venue: "IEEE TVCG 2024",
    year: 2024,
    tags: ["Visualization"],
  },

  // ---------------------------- 2023 ----------------------------
  {
    title: "Learned Data-aware Image Representations of Line Charts for Similarity Search",
    authors: "**Yuyu Luo**, Yihui Zhou, Nan Tang, Guoliang Li, Chengliang Chai, Leixian Shen",
    venue: "SIGMOD 2023",
    year: 2023,
    tags: ["Visualization", "AI for DB"],
  },
  {
    title:
      "GoodCore: Coreset Selection over Incomplete Data for Data-effective and Data-efficient Machine Learning",
    authors:
      "Chengliang Chai, Jiabin Liu, Nan Tang, Ju Fan, Dongjing Miao, Jiayi Wang, **Yuyu Luo**, Guoliang Li",
    venue: "SIGMOD 2023",
    year: 2023,
    tags: ["Data-centric AI"],
    note: "Best of SIGMOD 2023 Papers",
  },
  {
    title: "Demystifying Artificial Intelligence for Data Preparation",
    authors: "Chengliang Chai, Nan Tang, Ju Fan, **Yuyu Luo**",
    venue: "SIGMOD 2023",
    year: 2023,
    tags: ["Data-centric AI", "Tutorial"],
    note: "Tutorial",
  },

  // ---------------------------- 2022 ----------------------------
  {
    title: "Steerable Self-driving Data Visualization",
    authors: "**Yuyu Luo**, Xuedi Qin, Chengliang Chai, Nan Tang, Guoliang Li, Wenbo Li",
    venue: "IEEE TKDE 2022",
    year: 2022,
    tags: ["Visualization", "Data Agent"],
  },
  {
    title: "Sevi: Speech-to-Visualization through Neural Machine Translation",
    authors: "Jiawei Tang, **Yuyu Luo**, Mourad Ouzzani, Guoliang Li, Hongyang Chen",
    venue: "SIGMOD 2022",
    year: 2022,
    tags: ["Visualization", "Demo"],
    note: "Demo",
  },
  {
    title: "Data Management for Machine Learning: A Survey",
    authors: "Chengliang Chai, Jiayi Wang, **Yuyu Luo**, Zeping Niu, Guoliang Li",
    venue: "IEEE TKDE 2022",
    year: 2022,
    tags: ["Data-centric AI", "Survey"],
  },
  {
    title: "Towards Natural Language Interfaces for Data Visualization: A Survey",
    authors:
      "Leixian Shen, Enya Shen, **Yuyu Luo**, Xiaocong Yang, Xuming Hu, Xiongshuai Zhang, Zhiwei Tai, Jianmin Wang",
    venue: "IEEE TVCG 2022",
    year: 2022,
    tags: ["Visualization", "Survey"],
  },
  {
    title: "Selective Data Acquisition in the Wild for Model Charging",
    authors: "Chengliang Chai, Jiabin Liu, Nan Tang, Guoliang Li, **Yuyu Luo**",
    venue: "VLDB 2022",
    year: 2022,
    tags: ["Data-centric AI"],
  },
  {
    title: "Feature Augmentation with Reinforcement Learning",
    authors: "Jiabin Liu, Chengliang Chai, **Yuyu Luo**, Yin Lou, Jianhua Feng, Nan Tang",
    venue: "ICDE 2022",
    year: 2022,
    tags: ["Data-centric AI"],
  },
  {
    title: "RW-Tree: A Learned Workload-aware Framework for R-tree Construction",
    authors: "Haowen Dong, Chengliang Chai, **Yuyu Luo**, Jiabin Liu, Jianhua Feng, Chaoqun Zhan",
    venue: "ICDE 2022",
    year: 2022,
    tags: ["AI for DB"],
  },
  {
    title: "Interactively Discovering and Ranking Desired Tuples by Data Exploration",
    authors:
      "Xuedi Qin, Chengliang Chai, **Yuyu Luo**, Tianyu Zhao, Nan Tang, Guoliang Li, Jianhua Feng, Xiang Yu, Mourad Ouzzani",
    venue: "The VLDB Journal 2022",
    year: 2022,
    tags: ["AI for DB"],
  },
  {
    title: "GALVIS: Visualization Construction through Example-Powered Declarative Programming",
    authors: "Leixian Shen, Enya Shen, Zhiwei Tai, Yun Wang, **Yuyu Luo**, Jianmin Wang",
    venue: "CIKM 2022",
    year: 2022,
    tags: ["Visualization", "Demo"],
    note: "Best Demo Paper Honorable Mention",
  },

  // ---------------------------- 2021 ----------------------------
  {
    title: "Synthesizing Natural Language to Visualization (NL2VIS) Benchmarks from NL2SQL Benchmarks",
    authors: "**Yuyu Luo**, Nan Tang, Guoliang Li, Chengliang Chai, Wenbo Li, Xuedi Qin",
    venue: "SIGMOD 2021",
    year: 2021,
    tags: ["Visualization", "Benchmark"],
  },
  {
    title: "Natural Language to Visualization by Neural Machine Translation",
    authors: "**Yuyu Luo**, Nan Tang, Guoliang Li, Jiawei Tang, Chengliang Chai, Xuedi Qin",
    venue: "IEEE VIS 2021",
    year: 2021,
    tags: ["Visualization"],
  },
  {
    title:
      "nvBench: A Large-Scale Synthesized Dataset for Cross-Domain Natural Language to Visualization Task",
    authors: "**Yuyu Luo**, Jiawei Tang, Guoliang Li",
    venue: "NL·VIZ Workshop @ IEEE VIS 2021",
    year: 2021,
    tags: ["Visualization", "Benchmark"],
  },

  // ---------------------------- 2020 ----------------------------
  {
    title: "DeepTrack: Monitoring and Exploring Spatio-Temporal Data – A Case of Tracking COVID-19",
    authors: "**Yuyu Luo**, Wenbo Li, Guoliang Li, Nan Tang",
    venue: "VLDB 2020",
    year: 2020,
    tags: ["Visualization", "Data Agent"],
  },
  {
    title: "VisClean: Interactive Cleaning for Progressive Visualization",
    authors: "**Yuyu Luo**, Chengliang Chai, Xuedi Qin, Nan Tang, Guoliang Li",
    venue: "VLDB 2020",
    year: 2020,
    tags: ["Visualization", "Data-centric AI"],
  },
  {
    title: "Interactive Cleaning for Progressive Visualization through Composite Questions",
    authors: "**Yuyu Luo**, Chengliang Chai, Xuedi Qin, Nan Tang, Guoliang Li",
    venue: "ICDE 2020",
    year: 2020,
    tags: ["Visualization", "Data-centric AI"],
  },
  {
    title: "Human-in-the-loop Outlier Detection",
    authors: "Chengliang Chai, Lei Cao, Guoliang Li, Jian Li, **Yuyu Luo**, Samuel Madden",
    venue: "SIGMOD 2020",
    year: 2020,
    tags: ["Data-centric AI"],
  },
  {
    title: "Interactively Discovering and Ranking Desired Tuples without Writing SQL Queries",
    authors: "Xuedi Qin, Chengliang Chai, **Yuyu Luo**, Nan Tang, Guoliang Li",
    venue: "SIGMOD 2020",
    year: 2020,
    tags: ["AI for DB"],
  },
  {
    title: "DeepEye: A Data Science System for Monitoring and Exploring COVID-19 Data",
    authors: "**Yuyu Luo**, Nan Tang, Guoliang Li, Tianyu Zhao, Wenbo Li, Xiang Yu",
    venue: "IEEE Data Eng. Bulletin 2020",
    year: 2020,
    tags: ["Visualization", "Data Agent"],
    note: "Invited",
  },
  {
    title: "CrowdChart: Crowdsourced-based Data Extraction from Visualization Chart",
    authors: "Chengliang Chai, Guoliang Li, Ju Fan, **Yuyu Luo**",
    venue: "IEEE TKDE 2020",
    year: 2020,
    tags: ["Visualization", "Data-centric AI"],
  },

  // ---------------------------- 2019 ----------------------------
  {
    title: "Making Data Visualization More Efficient and Effective: A Survey",
    authors: "Xuedi Qin, **Yuyu Luo**, Nan Tang, Guoliang Li",
    venue: "The VLDB Journal 2019",
    year: 2019,
    tags: ["Visualization", "Survey"],
  },
  {
    title: "MathGraph: A Knowledge Graph for Automatically Solving Mathematical Exercises",
    authors: "Tianyu Zhao, Yan Huang, Songfan Yang, **Yuyu Luo**, et al.",
    venue: "DASFAA 2019",
    year: 2019,
    tags: ["AI for DB"],
    note: "Best Paper Award",
  },

  // ---------------------------- 2018 ----------------------------
  {
    title: "DeepEye: Towards Automatic Data Visualization",
    authors: "**Yuyu Luo**, Xuedi Qin, Nan Tang, Guoliang Li",
    venue: "ICDE 2018",
    year: 2018,
    tags: ["Visualization", "Data Agent"],
    note: "ICDE 2018 Highly Cited Papers Top-2",
  },
  {
    title: "DeepEye: Creating Good Data Visualizations by Keyword Search",
    authors: "**Yuyu Luo**, Xuedi Qin, Nan Tang, Guoliang Li, Xinran Wang",
    venue: "SIGMOD 2018",
    year: 2018,
    tags: ["Visualization", "Demo"],
    note: "Demo",
  },
];
