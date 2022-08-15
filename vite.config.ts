import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import {presetUno, presetAttributify, presetIcons} from "unocss";
import Unocss from "./config/unocss";


const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};

export default defineConfig({
    plugins: [
        // 添加UnoCSS插件
        Unocss(),
        vue(),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        })],
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "BetterUI",
            fileName: "better-ui",
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        },
    },
});
