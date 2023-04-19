import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)

loadFonts()

app
   .use(vuetify)
   .use(router)
   .use(createPinia())

app.mount('#app')
