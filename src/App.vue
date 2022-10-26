<template>
	<div>
		<NavBar />
		<router-view />
		<Footer />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import { oktaAuth } from '@/auth'
import { useMainStore } from '@/store'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
	name: 'App',
	components: {
		NavBar,
		Footer
	},
	watch: {
		authState: async function () {
			try {
				const isAuthed = await oktaAuth.isAuthenticated()
				if (isAuthed) {
					const user = await oktaAuth.getUser()
					this.mainStore.setUser(user)
				}
				// add case to reset user if not authed?
			} catch (e) {
				console.error(e)
			}
		}
	},
	setup() {
		const mainStore = useMainStore()
		return { mainStore }
	}
})
</script>

