export type PageKey =
  | "about"
  | "blog"
  | "projects"
  | "research"
  | "publications"
  | "contact";

type Action = {
  label: string;
  href: "/blog" | "/projects" | "/about";
};

type HomeSection = {
  eyebrow: string;
  title: string;
  description: string;
};

type AboutSection = {
  index: string;
  title: string;
  paragraphs: string[];
  topics?: string[];
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    descriptor: string;
  };
  navigation: Record<"home" | PageKey, string>;
  accessibility: {
    menu: string;
    theme: string;
    language: string;
    researchVisual: string;
  };
  home: {
    eyebrow: string;
    name: string;
    roleTags: string[];
    introduction: string[];
    actions: Action[];
    recentPosts: HomeSection & {
      categoriesLabel: string;
      categories: string[];
      emptyTitle: string;
      emptyDescription: string;
      emptyStatus: string;
    };
    featuredProjects: HomeSection & {
      emptyTitle: string;
      emptyDescription: string;
      emptyStatus: string;
    };
    currentFocus: HomeSection & {
      topics: Array<{ title: string; description: string }>;
    };
    aboutPreview: HomeSection & {
      action: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    introduction: string;
    sections: AboutSection[];
  };
  pages: Record<PageKey, { title: string; description: string; note: string }>;
  footer: {
    note: string;
  };
};
