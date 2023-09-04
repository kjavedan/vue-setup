import '@/assets/scss/global.scss'
import 'element-plus/dist/index.css'

import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)
app.mount('#app')
