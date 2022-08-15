# 🔨 Better-Ui 是什么?

Better-Ui Element，一套为开发者、设计师和产品经理准备的基于 Vite 的桌面端组件库

## Features

- ⚡ Vue 3, Vite 2, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prittier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions

## Install

```bash
npm i better-ui
```

## Quick Start

```js
import Vue from "vue";
import BetterUI from "better-ui";

const App = {
  template: `<BButton color="blue">主要按钮</BButton>`,
};

createApp(App).use(BetterUI).mount("#app");
```

## Browser Support

Modern browsers and Internet Explorer 10+.
