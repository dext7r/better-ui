import { createApp } from "vue/dist/vue.esm-browser.js";
import BetterUI from "./entry";
const createButton = `
<div style="margin-bottom:20px;">
       <BButton color="blue">主要按钮</BButton>
       <BButton color="green">绿色按钮</BButton>
       <BButton color="gray">灰色按钮</BButton>
       <BButton color="yellow">黄色按钮</BButton>
       <BButton color="red">红色按钮</BButton>
   </div>
   <div style="margin-bottom:20px;">
       <BButton color="blue" round plain icon="search"></BButton>
       <BButton color="green" round plain icon="edit"></BButton>
       <BButton color="gray" round plain icon="check"></BButton>
       <BButton color="yellow" round plain icon="message"></BButton>
       <BIcon color="red" icon="delete" /> 
   </div>`;
createApp({
  template: createButton,
})
  .use(BetterUI)
  .mount("#app");
