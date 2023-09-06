import '@/assets/scss/global.scss'

import 'element-plus/dist/index.css'

import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {   faSatelliteDish, faPlay, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faSatelliteDish, faPlay, faArrowRightLong)


import App from './App.vue'
import router from './router'
import i18n from './i18n'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
