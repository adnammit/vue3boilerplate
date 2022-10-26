import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from "pinia";
// import { store, key } from '@/store'
import OktaVue from '@okta/okta-vue'
import { oktaAuth } from '@/auth'
import '@/assets/main.css'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  // .use(store, key)
  .use(createPinia())
  .use(router)
  .use(OktaVue, { oktaAuth })
  .use(vuetify)
  .mount('#app')
