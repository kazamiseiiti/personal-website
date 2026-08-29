import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  metadata: {
    title: "九枫 Seiiti",
    description: "AI、深層学習、研究とエンジニアリングを記録する九枫 Seiiti の個人技術ブログ。",
  },
  brand: { name: "九枫 Seiiti", descriptor: "AI · Research · Engineering" },
  navigation: {
    home: "ホーム", about: "プロフィール", blog: "ブログ", projects: "プロジェクト",
    research: "研究", publications: "成果", contact: "連絡先",
  },
  accessibility: {
    menu: "ナビゲーションメニューを開く", theme: "表示テーマを切り替える", language: "言語を切り替える",
    researchVisual: "医用画像、点群、グラフ構造、血管トポロジーの処理フローを示す研究コンソール",
  },
  home: {
    eyebrow: "Personal technical blog / Tokyo, Japan",
    name: "九枫 Seiiti",
    roleTags: ["AI", "Deep Learning", "Research", "Engineering"],
    introduction: [
      "現在は日本の製造業で会社員をしながら、それでもまだ AI やエンジニアリングを諦めずに追いかけている、医用画像処理出身の修士です。",
      "ここでは主に AI、ディープラーニング、エンジニアリング、研究について記録しつつ、たまには技術とはあまり関係のない随筆も書きます。",
    ],
    actions: [
      { label: "ブログを読む", href: "/blog" },
      { label: "プロジェクト", href: "/projects" },
      { label: "プロフィール", href: "/about" },
    ],
    recentPosts: {
      eyebrow: "01 / Writing", title: "最近の記事",
      description: "モデル、コード、研究手法、そして技術が現実に入った後に起こることについて。",
      categoriesLabel: "予定しているカテゴリー",
      categories: ["AI", "Deep Learning", "Engineering", "Research", "随筆"],
      emptyTitle: "記事を準備しています",
      emptyDescription: "実際の記事が整ってからコンテンツ基盤を接続します。架空のタイトルは掲載しません。",
      emptyStatus: "コンテンツ準備中",
    },
    featuredProjects: {
      eyebrow: "02 / Building", title: "注目プロジェクト",
      description: "記録する価値のある実験、ツール、エンジニアリングプロジェクトのための場所です。",
      emptyTitle: "プロジェクト記録は未公開です",
      emptyDescription: "背景、過程、検証できる情報を持つ実際のプロジェクトだけを追加します。",
      emptyStatus: "データ準備中",
    },
    currentFocus: {
      eyebrow: "03 / Exploring", title: "現在の関心",
      description: "医用画像の研究から製造現場へ移った今も、AI と現実の工学課題が交わる方法を探しています。",
      topics: [
        { title: "Vascular intelligence", description: "医用画像、脳血管構造、点群、グラフモデリング。" },
        { title: "Applied AI systems", description: "Python、RAG、AI Agent、システム連携。" },
        { title: "Real-world engineering", description: "実データ、現場プロセス、保全、トラブルシューティング。" },
      ],
    },
    aboutPreview: {
      eyebrow: "04 / About", title: "研究の外でも、現場から工学を学ぶ",
      description: "モデルが動くかだけでなく、技術が実データ、既存システム、現実のプロセスとどう向き合うかに関心があります。このサイトでは、その真っすぐではない道のりを長く記録していきます。",
      action: "詳しく読む",
    },
  },
  about: {
    eyebrow: "About / 九枫 Seiiti",
    title: "追い求めるものは、いつも失ったものばかり。そして失ったものは、すべて私が手放せずにいたせいなのだ。",
    introduction: "これは履歴書ではありません。どこから来て、今何をしていて、これから何を探究したいのかをまとめたページです。",
    sections: [
      {
        index: "01", title: "About Me",
        paragraphs: [
          "医用画像処理を専攻した修士で、現在は日本の製造業で現場・設備・エンジニアリングに関わる仕事をしています。今の仕事は元の研究分野と完全には一致しませんが、その距離が「工学」への見方を広げてくれました。",
          "これからも AI とエンジニアリングを結ぶ方向へ進みたいと考えています。研究課題に向き合う粘り強さを保ちながら、現実の制約、保守コスト、実際のプロセスへの感覚も育てたいと思っています。",
        ],
      },
      {
        index: "02", title: "Research Background",
        paragraphs: [
          "研究背景は非造影 MRA（Non-contrast MRA）と医用画像処理で、主に脳血管、Circle of Willis、血管トポロジーを扱ってきました。",
          "深層学習、点群、グラフ構造を用いて脳血管構造を扱い、血管の接続性やトポロジーを捉える方法に関心を持っていました。成果を大きく見せるよりも、問題表現、幾何情報、構造関係がモデリングにどう影響するかを大切にしています。",
        ],
        topics: ["Non-contrast MRA", "Medical Image Processing", "Cerebral Vasculature", "Circle of Willis", "Deep Learning", "Point Cloud", "Graph Convolutional Networks", "Graph-based Modeling", "Vascular Topology"],
      },
      {
        index: "03", title: "Current Engineering Experience",
        paragraphs: [
          "現在の日常は製造現場に近く、設備、エンジニアリング、保全、故障対応、実際のプロセスを安定して動かすための細部に向き合っています。具体的な会社名、設備型式、内部情報は扱いません。",
          "研究環境から実際の製造現場に入ってから、技術が現実のプロセスへどう入るのかをより強く意識するようになりました。動くだけでなく、理解され、接続され、保守され、理想的でない条件でも働き続ける必要があります。",
        ],
        topics: ["Manufacturing", "Field Work", "Equipment", "Maintenance", "Troubleshooting", "Real Workflows"],
      },
      {
        index: "04", title: "What I Want to Build",
        paragraphs: [
          "これからは AI × Engineering を軸に、Python、RAG、AI Agent、実データ、システム連携の関係を探究したいと考えています。",
          "目標は特定の肩書ではありません。AI をモデルや Demo から実データ、実際の業務、現実の工学課題へ進め、プロセスの中で信頼でき、保守できる一部にすることです。",
        ],
        topics: ["AI × Engineering", "Python", "RAG", "AI Agent", "Real Data", "System Integration"],
      },
      {
        index: "05", title: "About This Blog",
        paragraphs: [
          "このサイトでは、技術学習、AI・深層学習、研究、エンジニアリング、プロジェクトを記録し、時には技術と関係のない考えや随筆も残します。",
          "長く手入れできる個人の場所にしたいと思っています。テーマがゆっくり育つことも、実践の後で答えを書き直すことも受け入れる場所です。",
        ],
      },
    ],
  },
  pages: {
    about: { title: "プロフィール", description: "研究背景、エンジニアリング経験、これから探究する方向。", note: "" },
    blog: { title: "技術ブログ", description: "AI、深層学習、エンジニアリング、研究と随筆の長期的な記録。", note: "実際の記事が整ってから MDX 基盤を追加します。" },
    projects: { title: "プロジェクト", description: "実験、ツール、実際のエンジニアリングプロジェクトの記録。", note: "構造のみ用意し、実データを待っています。" },
    research: { title: "研究", description: "医用画像、脳血管構造、点群、グラフモデリング。", note: "詳しい研究内容は今後整理します。" },
    publications: { title: "論文と成果", description: "確認済みの公開研究成果をまとめます。", note: "検証済みの成果情報を追加する予定です。" },
    contact: { title: "連絡先", description: "技術交流やプロジェクトに関する連絡窓口。", note: "公開連絡先は確認後に追加します。" },
  },
  footer: { note: "研究と工学、そしてその間の道を記録する。" },
};

export default dictionary;
