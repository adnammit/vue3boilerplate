import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from "pinia";
import OktaVue from '@okta/okta-vue'
import { oktaAuth } from '@/auth'
import { loadFonts } from './plugins/webfontloader'
import vuetify from '@/plugins/vuetify'
import '@/assets/main.scss'

loadFonts()

createApp(App)
	.use(createPinia())
	.use(router)
	.use(OktaVue, { oktaAuth })
	.use(vuetify)
	.mount('#app')
