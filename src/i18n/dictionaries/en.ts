import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  metadata: {
    title: "Personal Technical Notes",
    description: "A personal site for software engineering, AI, deep learning, and research practice.",
  },
  brand: { name: "Personal Technical Notes", descriptor: "Research · Engineering · Ideas" },
  navigation: {
    home: "Home",
    about: "About",
    blog: "Blog",
    projects: "Projects",
    research: "Research",
    publications: "Publications",
    contact: "Contact",
  },
  accessibility: {
    menu: "Open navigation menu",
    theme: "Toggle color theme",
    language: "Change language",
  },
  home: {
    eyebrow: "Build, research, document",
    title: "Growing reusable knowledge between engineering practice and intelligent systems research.",
    introduction:
      "This site will bring together technical writing, research experience, AI and deep learning projects, and published work.",
    primaryAction: "Read the blog",
    secondaryAction: "Explore research",
    areasTitle: "Areas of focus",
    areas: [
      { title: "Technical writing", description: "Problems, methods, and engineering tradeoffs." },
      { title: "AI projects", description: "Experiments, implementations, and project reviews." },
      { title: "Research output", description: "Research experience, publications, and public work." },
    ],
  },
  pages: {
    about: {
      title: "About",
      description: "Background, areas of interest, and themes under continued study.",
      note: "A fuller personal introduction will be added in the next phase.",
    },
    blog: {
      title: "Technical blog",
      description: "Long-term notes on software engineering, AI, and deep learning.",
      note: "The MDX content pipeline and first articles will follow in a later phase.",
    },
    projects: {
      title: "AI / Deep Learning projects",
      description: "Project goals, technical choices, experiments, and practical outcomes.",
      note: "The data structure is reserved; real project entries will be added later.",
    },
    research: {
      title: "Research experience",
      description: "Research topics, methods, collaborations, and work in progress.",
      note: "A research timeline will be established in the next phase.",
    },
    publications: {
      title: "Publications and output",
      description: "Papers, reports, talks, and other public contributions in one place.",
      note: "The data structure is ready for verified publication details.",
    },
    contact: {
      title: "Contact",
      description: "For technical discussion, research collaboration, and project enquiries.",
      note: "Public contact details will be added once confirmed.",
    },
  },
  footer: { note: "Built with openness, rigor, and a long-term view." },
};

export default dictionary;
