import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  metadata: {
    title: "個人技術ノート",
    description: "ソフトウェア工学、AI、深層学習と研究実践のための個人サイト。",
  },
  brand: { name: "個人技術ノート", descriptor: "研究 · 開発 · 思考" },
  navigation: {
    home: "ホーム",
    about: "プロフィール",
    blog: "ブログ",
    projects: "プロジェクト",
    research: "研究",
    publications: "成果",
    contact: "連絡先",
  },
  accessibility: {
    menu: "ナビゲーションメニューを開く",
    theme: "表示テーマを切り替える",
    language: "言語を切り替える",
  },
  home: {
    eyebrow: "つくる、研究する、記録する",
    title: "エンジニアリングと知能研究の間で、再利用できる知識を積み重ねる。",
    introduction:
      "技術記事、研究経験、AI・深層学習プロジェクト、論文や成果を整理していきます。",
    primaryAction: "技術ブログを読む",
    secondaryAction: "研究内容を見る",
    areasTitle: "主な内容",
    areas: [
      { title: "技術ブログ", description: "課題、手法、設計判断を記録します。" },
      { title: "AI プロジェクト", description: "実験、実装、振り返りを蓄積します。" },
      { title: "研究成果", description: "研究経験、論文、公開成果をまとめます。" },
    ],
  },
  pages: {
    about: {
      title: "プロフィール",
      description: "経歴、関心領域、継続して学んでいるテーマ。",
      note: "詳しいプロフィールは次の段階で追加します。",
    },
    blog: {
      title: "技術ブログ",
      description: "ソフトウェア工学、AI、深層学習に関する継続的な技術記録。",
      note: "MDX 基盤と最初の記事は今後追加します。",
    },
    projects: {
      title: "AI / Deep Learning プロジェクト",
      description: "目的、技術選定、実験プロセス、結果を紹介します。",
      note: "データ構造を先に用意し、実際のプロジェクトは後から追加します。",
    },
    research: {
      title: "研究経験",
      description: "研究テーマ、手法、共同研究、途中で得た知見を記録します。",
      note: "研究タイムラインは次の段階で整備します。",
    },
    publications: {
      title: "論文と成果",
      description: "論文、レポート、発表、その他の公開成果を整理します。",
      note: "実際の成果を登録するための構造を用意しています。",
    },
    contact: {
      title: "連絡先",
      description: "技術交流、研究協力、プロジェクトに関する連絡窓口。",
      note: "公開する連絡先は確認後に追加します。",
    },
  },
  footer: { note: "オープンさ、正確さ、長期的な視点を大切に。" },
};

export default dictionary;
