import { defineStore } from 'pinia'
import type { User } from '@/models/user';

export type RootState = {
	title: string,
	user: User | null,
	error: string
}

export const useMainStore = defineStore({
	id: 'main',
	state: () => ({
		user: null,
		error: ''
	} as RootState),

	actions: {
		async login(payload: any) {
			const user = {
				email: payload.email,
				username: payload.username,
				fullName: payload.fullName
			} as User

			this.user = user
			this.error = ''
		},
		async logout() {
			this.user = null
		}
	},

	getters: {
		username: (state: RootState): string => state.user && state.user.username ? state.user.username : '',
		fullName: (state: RootState): string => state.user && state.user.fullName ? state.user.fullName : '',
		email: (state: RootState): string => state.user && state.user.email ? state.user.email : '',
		isLoggedIn: (state: RootState): boolean => (state.user != null && !!state.user.username)
	}
})
