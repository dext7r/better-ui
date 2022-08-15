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
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = demoBlock;
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
