import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { router } from '@/router'
import { i18n } from '@/lang/'

import App from '@/app.vue'
import '@sb/tailwind.css'

const app = createApp(App)
app.use(router).use(i18n).use(createPinia()).mount('#app')
