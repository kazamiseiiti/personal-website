import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  metadata: {
    title: "九枫 Seiiti",
    description: "九枫 Seiiti 的个人技术博客，记录 AI、深度学习、研究与工程实践。",
  },
  brand: { name: "九枫 Seiiti", descriptor: "AI · Research · Engineering" },
  navigation: {
    home: "首页", about: "关于", blog: "博客", projects: "项目",
    research: "研究", publications: "成果", contact: "联系",
  },
  accessibility: {
    menu: "打开导航菜单", theme: "切换明暗主题", language: "切换语言",
    researchVisual: "展示医学影像、点云、图结构与血管拓扑处理流程的研究控制台",
  },
  home: {
    eyebrow: "Personal technical blog / Tokyo, Japan",
    name: "九枫 Seiiti",
    roleTags: ["AI", "Deep Learning", "Research", "Engineering"],
    introduction: [
      "一个目前在日本制造业当社畜，但还是想继续折腾 AI 和工程的医学影像处理硕士。",
      "这里主要记录 AI、深度学习、工程实践和研究相关的东西，偶尔也会发作一下文青病，写点和技术没什么关系的东西。",
    ],
    actions: [
      { label: "读博客", href: "/blog" },
      { label: "看项目", href: "/projects" },
      { label: "关于我", href: "/about" },
    ],
    recentPosts: {
      eyebrow: "01 / Writing", title: "最近文章",
      description: "关于模型、代码、研究方法，以及技术进入现实之后发生的事。",
      categoriesLabel: "计划中的分类",
      categories: ["AI", "Deep Learning", "Engineering", "Research", "随笔"],
      emptyTitle: "文章正在准备中",
      emptyDescription: "博客内容系统会在真实文章准备好之后接入，这里暂不放虚构标题。",
      emptyStatus: "内容占位",
    },
    featuredProjects: {
      eyebrow: "02 / Building", title: "精选项目",
      description: "为值得被完整记录的实验、工具与工程项目预留的位置。",
      emptyTitle: "项目档案尚未公开",
      emptyDescription: "之后只会加入有真实背景、过程和可验证信息的项目。",
      emptyStatus: "数据占位",
    },
    currentFocus: {
      eyebrow: "03 / Exploring", title: "当前关注",
      description: "从医学影像研究走到制造现场后，我仍在寻找 AI 与真实工程问题相遇的方式。",
      topics: [
        { title: "Vascular intelligence", description: "医学影像、脑血管结构、点云与图建模。" },
        { title: "Applied AI systems", description: "Python、RAG、AI Agent 与系统集成。" },
        { title: "Real-world engineering", description: "真实数据、现场流程、维护与故障排查。" },
      ],
    },
    aboutPreview: {
      eyebrow: "04 / About", title: "研究之外，也在现场学习工程",
      description: "我关心的不只是模型能否跑通，也关心技术如何面对现实数据、既有系统和实际流程。这个网站会长期记录这条并不笔直的路径。",
      action: "继续了解",
    },
  },
  about: {
    eyebrow: "About / 九枫 Seiiti",
    title: "在研究与现实工程之间，继续把问题做深。",
    introduction: "这里不是一份简历，而是对我从哪里出发、目前在做什么，以及接下来想继续探索什么的说明。",
    sections: [
      {
        index: "01", title: "About Me",
        paragraphs: [
          "我是医学影像处理方向的硕士，目前在日本制造业从事与现场、设备和工程相关的工作。现在的工作与原来的研究方向并不完全一致，但这段距离也让我重新理解了“工程”二字。",
          "我仍希望沿着 AI 与工程结合的方向继续发展：既保留对研究问题的耐心，也逐渐建立对现实约束、维护成本和实际流程的感知。",
        ],
      },
      {
        index: "02", title: "Research Background",
        paragraphs: [
          "我的研究背景集中在非造影 MRA（Non-contrast MRA）与医学图像处理，研究对象主要涉及脑血管、Circle of Willis 以及血管拓扑。",
          "研究阶段主要关注如何利用深度学习、点云与图结构方法处理脑血管结构，并理解血管连接与拓扑问题。相比夸大某个结果，我更在意问题表示、几何信息与结构关系如何共同影响建模。",
        ],
        topics: ["Non-contrast MRA", "Medical Image Processing", "Cerebral Vasculature", "Circle of Willis", "Deep Learning", "Point Cloud", "Graph Convolutional Networks", "Graph-based Modeling", "Vascular Topology"],
      },
      {
        index: "03", title: "Current Engineering Experience",
        paragraphs: [
          "目前的日常靠近制造现场：设备、工程、维护、故障排查，以及让实际流程稳定运转所需要的细节。这里不会出现具体公司、设备型号或内部信息。",
          "从研究环境进入真实制造现场后，我开始更关注技术如何真正进入现实流程。一个方案除了能够工作，还要能够被理解、接入、维护，并在不理想的条件下继续运行。",
        ],
        topics: ["Manufacturing", "Field Work", "Equipment", "Maintenance", "Troubleshooting", "Real Workflows"],
      },
      {
        index: "04", title: "What I Want to Build",
        paragraphs: [
          "接下来想继续探索 AI × Engineering，以及 Python、RAG、AI Agent、真实数据与系统集成之间的联系。",
          "重点并不是成为某个特定职位，而是希望把 AI 从模型和 Demo 推进到真实数据、真实业务与真实工程问题中，让它成为流程中可靠而可维护的一部分。",
        ],
        topics: ["AI × Engineering", "Python", "RAG", "AI Agent", "Real Data", "System Integration"],
      },
      {
        index: "05", title: "About This Blog",
        paragraphs: [
          "这个网站用于记录技术学习、AI 与深度学习、研究、工程和项目，也收留一些和技术无关的思考与随笔。",
          "我希望它是一处可以长期维护的个人空间：允许主题慢慢生长，也允许答案在实践之后被重新改写。",
        ],
      },
    ],
  },
  pages: {
    about: { title: "关于", description: "研究背景、工程经验与持续探索的方向。", note: "" },
    blog: { title: "技术博客", description: "围绕 AI、深度学习、工程、研究与随笔的长期记录。", note: "MDX 内容系统将在真实文章准备好后加入。" },
    projects: { title: "项目", description: "实验、工具与真实工程项目的过程记录。", note: "项目结构已预留，等待真实内容。" },
    research: { title: "研究", description: "医学影像、脑血管结构、点云与图建模。", note: "详细研究内容将在后续整理。" },
    publications: { title: "论文与成果", description: "集中整理经过确认的公开研究成果。", note: "等待加入经过核实的成果信息。" },
    contact: { title: "联系方式", description: "用于技术交流与项目沟通。", note: "公开联系方式将在确认后加入。" },
  },
  footer: { note: "记录研究、工程，以及两者之间的路。" },
};

export default dictionary;
