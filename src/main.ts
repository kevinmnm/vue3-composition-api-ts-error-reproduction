import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'
import pinia from './plugins/pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)

loadFonts()

const store = createPinia()

app
   .use(vuetify)
   .use(router)
   .use(store)
   .use(pinia, store)

app.mount('#app')
