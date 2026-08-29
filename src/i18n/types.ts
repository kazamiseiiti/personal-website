export type PageKey =
  | "about"
  | "blog"
  | "projects"
  | "research"
  | "publications"
  | "contact";

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
  };
  home: {
    eyebrow: string;
    title: string;
    introduction: string;
    primaryAction: string;
    secondaryAction: string;
    areasTitle: string;
    areas: Array<{ title: string; description: string }>;
  };
  pages: Record<PageKey, { title: string; description: string; note: string }>;
  footer: {
    note: string;
  };
};
