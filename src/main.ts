import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from "pinia";
import { loadFonts } from './plugins/webfontloader'
import vuetify from '@/plugins/vuetify'
import '@/assets/main.scss'

loadFonts()

createApp(App)
	.use(createPinia())
	.use(router)
	.use(vuetify)
	.mount('#app')
