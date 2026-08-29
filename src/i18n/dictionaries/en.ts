import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  metadata: {
    title: "九枫 Seiiti",
    description: "九枫 Seiiti's personal technical blog on AI, deep learning, research, and engineering.",
  },
  brand: { name: "九枫 Seiiti", descriptor: "AI · Research · Engineering" },
  navigation: {
    home: "Home", about: "About", blog: "Blog", projects: "Projects",
    research: "Research", publications: "Publications", contact: "Contact",
  },
  accessibility: {
    menu: "Open navigation menu", theme: "Toggle color theme", language: "Change language",
    researchVisual: "Research console showing a medical imaging, point cloud, graph, and vascular topology pipeline",
  },
  home: {
    eyebrow: "Personal technical blog / Tokyo, Japan",
    name: "九枫 Seiiti",
    roleTags: ["AI", "Deep Learning", "Research", "Engineering"],
    introduction: [
      "A medical imaging master’s graduate currently doing the corporate grind in Japanese manufacturing, while still refusing to give up on AI and engineering.",
      "This is where I mostly write about AI, deep learning, engineering, and research — with the occasional essay and completely non-technical thought.",
    ],
    actions: [
      { label: "Read the blog", href: "/blog" },
      { label: "View projects", href: "/projects" },
      { label: "About me", href: "/about" },
    ],
    recentPosts: {
      eyebrow: "01 / Writing", title: "Recent posts",
      description: "Notes on models, code, research methods, and what happens when technology meets reality.",
      categoriesLabel: "Planned categories",
      categories: ["AI", "Deep Learning", "Engineering", "Research", "Essays"],
      emptyTitle: "The first posts are in progress",
      emptyDescription: "The content pipeline will arrive with real articles. No invented post titles in the meantime.",
      emptyStatus: "Content placeholder",
    },
    featuredProjects: {
      eyebrow: "02 / Building", title: "Featured projects",
      description: "Reserved for experiments, tools, and engineering work that deserve a complete record.",
      emptyTitle: "Project records are not public yet",
      emptyDescription: "Only projects with real context, process, and verifiable details will be added here.",
      emptyStatus: "Data placeholder",
    },
    currentFocus: {
      eyebrow: "03 / Exploring", title: "Current focus",
      description: "After moving from medical imaging research into manufacturing, I am still looking for where AI can meet real engineering problems.",
      topics: [
        { title: "Vascular intelligence", description: "Medical imaging, cerebral vessels, point clouds, and graph modeling." },
        { title: "Applied AI systems", description: "Python, RAG, AI agents, and system integration." },
        { title: "Real-world engineering", description: "Real data, field workflows, maintenance, and troubleshooting." },
      ],
    },
    aboutPreview: {
      eyebrow: "04 / About", title: "Learning engineering from the field, too",
      description: "I care not only about whether a model runs, but how technology deals with real data, existing systems, and actual workflows. This site is a long-term record of that decidedly non-linear path.",
      action: "More about me",
    },
  },
  about: {
    eyebrow: "About / 九枫 Seiiti",
    title: "Everything I chase is something I have already lost,and everything I have lost was lost because I could not let go.",
    introduction: "This is not a résumé. It is a clearer account of where I started, what I am doing now, and what I want to keep exploring.",
    sections: [
      {
        index: "01", title: "About Me",
        paragraphs: [
          "I hold a master’s degree focused on medical image processing and now work in Japanese manufacturing, close to field operations, equipment, and engineering. My current work does not perfectly match my original research direction, but that distance has changed how I understand engineering.",
          "I still want to grow where AI and engineering overlap: keeping the patience required by research while developing a better feel for real constraints, maintenance costs, and operational processes.",
        ],
      },
      {
        index: "02", title: "Research Background",
        paragraphs: [
          "My research background centers on non-contrast MRA and medical image processing, particularly cerebral vasculature, the Circle of Willis, and vascular topology.",
          "I explored ways to process cerebral vascular structures using deep learning, point clouds, and graph-based methods, with particular attention to vessel connectivity and topology. Rather than overstating outcomes, I care about how problem representation, geometry, and structural relationships shape the model.",
        ],
        topics: ["Non-contrast MRA", "Medical Image Processing", "Cerebral Vasculature", "Circle of Willis", "Deep Learning", "Point Cloud", "Graph Convolutional Networks", "Graph-based Modeling", "Vascular Topology"],
      },
      {
        index: "03", title: "Current Engineering Experience",
        paragraphs: [
          "My day-to-day work is close to manufacturing operations: equipment, engineering, maintenance, troubleshooting, and the details required to keep real processes running. I do not publish company names, equipment models, or internal information here.",
          "Moving from a research environment into a real manufacturing setting made me pay closer attention to how technology actually enters a workflow. A solution must do more than work: it has to be understood, integrated, maintained, and remain useful under imperfect conditions.",
        ],
        topics: ["Manufacturing", "Field Work", "Equipment", "Maintenance", "Troubleshooting", "Real Workflows"],
      },
      {
        index: "04", title: "What I Want to Build",
        paragraphs: [
          "I want to keep exploring AI × Engineering, along with Python, RAG, AI agents, real data, and system integration.",
          "The goal is not a particular job title. It is to move AI beyond models and demos into real data, real operations, and real engineering problems — as a dependable, maintainable part of the workflow.",
        ],
        topics: ["AI × Engineering", "Python", "RAG", "AI Agent", "Real Data", "System Integration"],
      },
      {
        index: "05", title: "About This Blog",
        paragraphs: [
          "This site records technical learning, AI and deep learning, research, engineering, and projects, while leaving room for essays and thoughts that have nothing to do with technology.",
          "I want it to remain a personal space that can be maintained for years: one where subjects grow slowly and answers can be rewritten after practice proves them incomplete.",
        ],
      },
    ],
  },
  pages: {
    about: { title: "About", description: "Research background, engineering experience, and directions still being explored.", note: "" },
    blog: { title: "Technical blog", description: "Long-term notes on AI, deep learning, engineering, research, and essays.", note: "The MDX pipeline will be added when real articles are ready." },
    projects: { title: "Projects", description: "Records of experiments, tools, and real engineering projects.", note: "The structure is reserved and awaiting real project data." },
    research: { title: "Research", description: "Medical imaging, cerebral vasculature, point clouds, and graph modeling.", note: "Detailed research material will be organized later." },
    publications: { title: "Publications and output", description: "A home for verified public research output.", note: "Awaiting verified publication details." },
    contact: { title: "Contact", description: "For technical conversation and project enquiries.", note: "Public contact details will be added once confirmed." },
  },
  footer: { note: "Documenting research, engineering, and the road between them." },
};

export default dictionary;
