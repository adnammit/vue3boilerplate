<template>
	<v-app-bar flat>
		<v-container class="fill-height d-flex align-center">

			<v-avatar class="mr-10 ml-4" size="52">
				<v-img v-if="isAuthenticated" alt="Avatar"
					src="src/assets/profile.jpg"></v-img>
				<v-icon v-else icon="mdi-account-circle"></v-icon>
			</v-avatar>

			<v-btn prepend-icon="mdi-home" to="/">Home</v-btn>

			<v-btn v-if="isAuthenticated" prepend-icon="mdi-account-cowboy-hat" :to="`/@${username}`">Profile</v-btn>

			<!-- <v-btn v-if="isAuthenticated" prepend-icon="mdi-cog" to="/settings">Settings</v-btn> -->

			<v-btn v-if="isAuthenticated" prepend-icon="mdi-exit-run" @click="logout">Logout</v-btn>

			<v-btn v-if="!isAuthenticated" prepend-icon="mdi-login-variant" @click="login">Login</v-btn>

			<v-spacer></v-spacer>

			<v-btn icon="mdi-brightness-6" @click="toggleTheme"></v-btn>
		</v-container>
	</v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { oktaAuth } from '@/auth'
import { useMainStore } from '@/store'
import { useTheme } from 'vuetify'

export default defineComponent({
	name: 'NavBar',
	computed: {
		username(): string {
			return this.mainStore.username;
		},
		isAuthenticated(): boolean {
			return this.mainStore.isUserAuthenticated
		},
		avatarUrl(): string {
			return this.mainStore.isUserAuthenticated ? 'assets/profile.jpg' : ''
		}
	},
	setup() {
		const mainStore = useMainStore()
		const login = () => oktaAuth.signInWithRedirect()
		const logout = () => oktaAuth.signOut()
		const theme = useTheme()

		return {
			mainStore,
			login,
			logout,
			theme,
			toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
		}
	}
})
</script>
