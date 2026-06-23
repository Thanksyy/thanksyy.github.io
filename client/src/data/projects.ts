/**
 * 重点开源项目数据
 * 维护说明：新增项目只需在数组中添加一条记录。tags 用于显示分类标签。
 */

export interface Project {
  name: string;
  desc: string;
  url: string;
  tags: string[];
  highlight?: string; // 右下角高亮信息，如 star 数
}

export const PROJECTS: Project[] = [
  {
    name: "OpenManus",
    desc: "An open framework for building general-purpose foundation agents with planning, memory, and tool use.",
    url: "https://github.com/FoundationAgents/OpenManus",
    tags: ["Foundation Agent", "LLM", "Framework"],
    highlight: "50k+ GitHub stars",
  },
  {
    name: "DeepEye",
    desc: "A data science system for automatic data visualization and exploration — a pioneering data agent.",
    url: "https://deepeye.tech/",
    tags: ["Data Agent", "Visualization", "System"],
  },
  {
    name: "Text-to-SQL Handbook",
    desc: "A comprehensive handbook surveying the state of the art and open problems of NL2SQL.",
    url: "https://github.com/HKUSTDial/NL2SQL_Handbook",
    tags: ["Text-to-SQL", "Survey", "Resource"],
  },
  {
    name: "Alpha-SQL",
    desc: "Zero-shot Text-to-SQL using Monte Carlo Tree Search, without any task-specific fine-tuning.",
    url: "https://github.com/HKUSTDial/Alpha-SQL",
    tags: ["Text-to-SQL", "LLM", "MCTS"],
  },
  {
    name: "AFlow",
    desc: "Automating agentic workflow generation via Monte Carlo Tree Search over code-represented workflows.",
    url: "https://github.com/FoundationAgents/AFlow",
    tags: ["Agentic Workflow", "Automation", "LLM"],
  },
  {
    name: "DeepFund",
    desc: "A live benchmark for evaluating LLM agents on real-time fund investment, free of look-ahead bias.",
    url: "https://github.com/HKUSTDial/DeepFund",
    tags: ["Agent", "Benchmark", "Finance"],
  },
];

/** 应用本课题组开源成果的企业 */
export const ADOPTERS = [
  "Huawei",
  "State Grid",
  "ByteDance",
  "Ant Group",
  "TAL Education",
];
