import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

const app = createApp(App)

const messages = {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    ar: {
      message: {
        hello: 'jo'
      }
    }
  }

  const i18n = new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
  })

app.use(createPinia())
app.use(router)
app.use(VueI18n)

new Vue
app.mount('#app')
