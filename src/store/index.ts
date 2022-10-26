import { defineStore } from 'pinia'
import type { User } from '@/store/modules/user';

export type RootState = {
	title: string,
	user: User | null,
	errors: string[]
}

export const useMainStore = defineStore({
	id: 'main',
	state: () => ({
		title: '',
		user: null,
		errors: []
	} as RootState),

	actions: {
		setUser(payload: any) {
			console.log('user')
			console.log(payload)
			const user = {
				email: payload.email,
				username: payload.preferred_username,
				fullName: payload.name
			} as User
			this.user = user;
		}
	},

	getters: {
		username: (state: RootState): string => state.user && state.user.username ? state.user.username : '',
		fullName: (state: RootState): string => state.user && state.user.fullName ? state.user.fullName : '',
		isUserAuthenticated: (state: RootState): boolean => (state.user != null && !!state.user.username)
	}
})
