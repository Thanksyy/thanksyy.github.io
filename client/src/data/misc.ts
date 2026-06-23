/**
 * 奖项 / 学生 / 学术服务数据
 * 维护说明：各数组中新增一条记录即可。
 */

export interface Award {
  year: string;
  title: string;
  highlight?: boolean; // 重点奖项加亮
}

export const AWARDS: Award[] = [
  { year: "2025", title: "WAIC Yunfan Award (云帆奖), World Artificial Intelligence Conference", highlight: true },
  { year: "2025", title: "Huawei Spark Award (华为火花奖)" },
  { year: "2023", title: "Forbes China 30 Under 30", highlight: true },
  { year: "2023", title: "CCF Doctoral Dissertation Nomination Award (中国计算机学会优博提名)" },
  { year: "2023", title: "Best of SIGMOD 2023 Papers", highlight: true },
  { year: "2023", title: "Distinguished Doctoral Graduate of Tsinghua University" },
  { year: "2023", title: "Distinguished Doctoral Dissertation Award of Tsinghua University" },
  { year: "2023", title: "Rising Star in Data Visualization, CSIG VIS" },
  { year: "2022", title: "CIKM 2022 Best Paper Honorable Mention (Demo Track)", highlight: true },
  { year: "2021", title: "Zhejiang Lab's International Talent Fund for Young Professionals" },
  { year: "2020", title: "Tsinghua Top Grade Scholarship (清华特等奖学金, highest honor)" },
  { year: "2020", title: "Zhong Shimo Scholarship, Tsinghua University" },
  { year: "2020", title: "China National Scholarship" },
  { year: "2019", title: "Excellent Paper Award, Big Data Mining and Analytics" },
  { year: "2019", title: "DASFAA 2019 Best Student Paper Award", highlight: true },
];

export interface Student {
  cohort: string;
  name: string;
  note?: string;
}

export const STUDENTS: Student[] = [
  { cohort: "2023", name: "Tianqi Luo", note: "now MS @ JHU" },
  { cohort: "2023", name: "Xinyu Liu", note: "NEU China" },
  { cohort: "2023", name: "Liangwei Wang", note: "co-advised w/ Prof. Fugee Tsung, SYSU" },
  { cohort: "2023", name: "Yao Shi", note: "UESTC" },
  { cohort: "2024", name: "Changlun Li", note: "co-advised w/ Prof. Nan Tang, CUHK" },
  { cohort: "2024", name: "Jiayi Zhang", note: "RUC" },
  { cohort: "2024", name: "Boyan Li", note: "HKUST(GZ)" },
  { cohort: "2024", name: "Shuyu Shen", note: "HKUST(GZ)" },
  { cohort: "2025", name: "Xiaotian Lin", note: "HKUST(GZ)" },
  { cohort: "2025", name: "Yupeng Xie", note: "HKUST(GZ)" },
  { cohort: "2025", name: "Yizhang Zhu", note: "HKUST(GZ)" },
  { cohort: "2025", name: "Zihan Sun", note: "Tsinghua" },
  { cohort: "2025", name: "Zhangyang Peng", note: "Wuhan Univ." },
];

export interface ServiceGroup {
  role: string;
  items: string[];
}

export const SERVICES: ServiceGroup[] = [
  {
    role: "Associate Editor",
    items: ["IEEE Data Engineering Bulletin"],
  },
  {
    role: "Area Chair / Associate PC Chair",
    items: ["Multiple international top-tier conferences"],
  },
  {
    role: "Session Chair",
    items: ["VLDB 2024"],
  },
  {
    role: "PC Member",
    items: ["VLDB 2023-2025", "ICDE 2024-2025", "ICLR 2025"],
  },
  {
    role: "Conference Reviewer",
    items: ["IEEE VIS 2021-2024", "ACM CHI 2022-2025"],
  },
  {
    role: "Journal Reviewer",
    items: ["ACM TODS", "IEEE TVCG", "ACM/IMS TDS", "Data Science and Engineering"],
  },
];
