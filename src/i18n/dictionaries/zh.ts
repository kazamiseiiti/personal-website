import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  metadata: {
    title: "个人技术笔记",
    description: "关于软件工程、AI、深度学习与研究实践的个人网站。",
  },
  brand: { name: "个人技术笔记", descriptor: "研究 · 工程 · 思考" },
  navigation: {
    home: "首页",
    about: "关于",
    blog: "博客",
    projects: "项目",
    research: "研究",
    publications: "成果",
    contact: "联系",
  },
  accessibility: {
    menu: "打开导航菜单",
    theme: "切换明暗主题",
    language: "切换语言",
  },
  home: {
    eyebrow: "构建、研究、记录",
    title: "在工程实践与智能研究之间，持续积累可复用的知识。",
    introduction:
      "这里将整理技术文章、研究经历、AI / 深度学习项目，以及论文与阶段性成果。",
    primaryAction: "阅读技术博客",
    secondaryAction: "了解研究方向",
    areasTitle: "内容方向",
    areas: [
      { title: "技术博客", description: "记录问题、方法与工程取舍。" },
      { title: "AI 项目", description: "沉淀实验、实现与项目复盘。" },
      { title: "研究成果", description: "汇总研究经历、论文与公开成果。" },
    ],
  },
  pages: {
    about: {
      title: "关于",
      description: "个人背景、关注方向与持续学习的主题。",
      note: "个人介绍将在下一阶段补充。",
    },
    blog: {
      title: "技术博客",
      description: "围绕软件工程、AI 与深度学习的长期技术记录。",
      note: "MDX 内容系统与首批文章将在后续阶段加入。",
    },
    projects: {
      title: "AI / Deep Learning 项目",
      description: "展示项目目标、技术方案、实验过程与实际结果。",
      note: "项目数据结构已预留，真实项目内容将在后续补充。",
    },
    research: {
      title: "研究经历",
      description: "记录研究主题、方法、合作与阶段性思考。",
      note: "研究时间线将在下一阶段建立。",
    },
    publications: {
      title: "论文与成果",
      description: "集中整理论文、报告、演讲与其他公开成果。",
      note: "成果数据结构已预留，等待真实内容。",
    },
    contact: {
      title: "联系方式",
      description: "用于技术交流、研究合作与项目沟通。",
      note: "公开联系方式将在确认后加入。",
    },
  },
  footer: { note: "用开放、严谨与长期主义构建。" },
};

export default dictionary;
