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
   <div style="margin-bottom:20px;"
   >
       <BButton color="blue" plain>朴素按钮</BButton>
       <BButton color="green" plain>绿色按钮</BButton>
       <BButton color="gray" plain>灰色按钮</BButton>
       <BButton color="yellow" plain>黄色按钮</BButton>
       <BButton color="red" plain>红色按钮</BButton>
   </div>
   <div style="margin-bottom:20px;">
       <BButton size="small" plain>小按钮</BButton>
       <BButton size="medium" plain>中按钮</BButton>
       <BButton size="large" plain>大按钮</BButton>
   </div>
   <div style="margin-bottom:20px;">
       <BButton color="blue" round plain icon="search">搜索按钮</BButton>
       <BButton color="green" round plain icon="edit">编辑按钮</BButton>
       <BButton color="gray" round plain icon="check">成功按钮</BButton>
       <BButton color="yellow" round plain icon="message">提示按钮</BButton>
       <BButton color="red" round plain icon="delete">删除按钮</BButton>
   </div>
   <div style="margin-bottom:20px;">
       <BButton color="blue" round plain icon="search"></BButton>
       <BButton color="green" round plain icon="edit"></BButton>
       <BButton color="gray" round plain icon="check"></BButton>
       <BButton color="yellow" round plain icon="message"></BButton>
       <BButton color="red" round plain icon="delete"></BButton>
   </div>`;
createApp({
  template: createButton,
})
  .use(BetterUI)
  .mount("#app");
