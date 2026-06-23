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
    desc: "An autonomous data agent system for automatic data visualization and exploration — a pioneering data agent.",
    url: "https://github.com/HKUSTDial/DeepEye",
    tags: ["Data Agent", "Visualization", "System"],
  },
  {
    name: "DeepFund",
    desc: "A live benchmark for evaluating LLM agents on real-time fund investment, free of look-ahead bias.",
    url: "https://github.com/HKUSTDial/DeepFund",
    tags: ["Agent", "Benchmark", "Finance"],
    highlight: "NeurIPS'25",
  },
  {
    name: "Flash-Sparse-Attention",
    desc: "A trainable, fast, and memory-efficient sparse attention library that scales Transformers to extremely long sequences.",
    url: "https://github.com/HKUSTDial/flash-sparse-attention",
    tags: ["LLM", "Efficient AI", "Attention"],
    highlight: "700+ GitHub stars",
  },
  {
    name: "Supervisor-Skills",
    desc: "Your AI research co-advisor — distilling a decade of PhD-supervision experience into callable skills, from idea to paper submission.",
    url: "https://github.com/HKUSTDial/Supervisor-Skills",
    tags: ["AI Agent", "Research", "Skills"],
    highlight: "3k+ GitHub stars",
  },
  {
    name: "Alpha-SQL",
    desc: "Zero-shot Text-to-SQL using Monte Carlo Tree Search, without any task-specific fine-tuning.",
    url: "https://github.com/HKUSTDial/Alpha-SQL",
    tags: ["Text-to-SQL", "LLM", "MCTS"],
    highlight: "ICML'25",
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
