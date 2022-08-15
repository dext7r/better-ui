import demoBlock from "vitepress-theme-demoblock";

const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "通用",
      children: [
        { text: "Button 按钮", link: "/components/button/" },
        { text: "Icon 图标", link: "/components/icon/" },
      ],
    },
  ],
};
const config = {
  title: "🔨  Better-Ui",
  description: "Better-Ui 是一个基于 Vite 的 UI 组件库",
  themeConfig: {
    sidebar,
    repo: 'better-ui/better-ui',
    repoLabel: '查看源码',
    docsDir: 'packages/better-ui/docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    lastUpdated: '上次更新',
    smoothScroll: true,
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = demoBlock;
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
