import DefaultTheme from 'vitepress/theme'
import BetterUI from '../../../src/entry'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(BetterUI)
        app.component('Demo', Demo)
        app.component('DemoBlock', DemoBlock)
    },
}
