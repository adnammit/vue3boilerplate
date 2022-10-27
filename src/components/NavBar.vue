<template>
	<v-app-bar flat>
		<v-container class="fill-height d-flex align-center">

			<!-- make this the site logo and link to home -->
			<!-- <v-avatar class="mr-10 ml-4" size="52" to="/">
				<v-img v-if="isLoggedIn" alt="Avatar" src="src/assets/profile.jpg"></v-img>
				<v-icon v-else icon="mdi-account-circle"></v-icon>
			</v-avatar> -->

			<v-btn prepend-icon="mdi-home" to="/">Home</v-btn>

			<v-spacer></v-spacer>

			<v-btn icon="mdi-brightness-6" @click="toggleTheme"></v-btn>

			<v-menu v-if="isLoggedIn" open-on-hover :open-delay="0" location="bottom" transition="slide-x-transition">
				<template v-slot:activator="{ props }">
					<v-avatar class="mr-10 ml-4" size="52" v-bind="props">
						<v-img alt="Avatar" :src="vibrates"></v-img>
					</v-avatar>
				</template>

				<v-list>
					<v-list-item v-for="(item, index) in profileItems" :key="index" :to="item.route" @click=item.click>
						<template v-slot:prepend>
							<v-icon :icon="item.icon"></v-icon>
						</template>
						<v-list-item-title>
							{{ item.text }}
						</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>

			<v-btn v-else prepend-icon="mdi-login-variant" to="/login">Login</v-btn>

		</v-container>
	</v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMainStore } from '@/store'
import { useTheme } from 'vuetify'
import vibrates from '@/assets/vibrates.png'

export default defineComponent({
	name: 'NavBar',
	computed: {
		username(): string {
			return this.mainStore.username ?? 'nobody';
		},
		isLoggedIn(): boolean {
			return this.mainStore.isLoggedIn
		},
	},
	data() {
		return {
			profileItems: [
				{ text: 'Profile', icon: 'mdi-account-cowboy-hat', route: '/profile', click: null },
				{ text: 'Settings', icon: 'mdi-cog', route: '/settings', click: null },
				{ text: 'Logout', icon: 'mdi-exit-run', route: '', click: this.doLogout },
			],
			vibrates: vibrates
		}
	},
	methods: {
		doLogout() {
			this.mainStore.logout()
			this.$router.push({ name: 'home' })
		}
	},
	setup() {
		const mainStore = useMainStore()
		const theme = useTheme()

		return {
			mainStore,
			theme,
			toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
		}
	}
})
</script>
