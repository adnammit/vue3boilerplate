import { defineStore } from 'pinia'
import type { User } from '@/models/user';
import type { FeedItem } from '@/models/feedItem';
import feedData from '@/store/feed.json'

export type RootState = {
	isMobile: boolean,
	user: User | null,
	error: string
	filterSubject: string,
	feed: FeedItem[],
}

export const useMainStore = defineStore({
	id: 'main',
	state: () => ({
		isMobile: false,
		user: null,
		error: '',
		filterSubject: '',
		feed: []
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
		},
		setMobile(isMobile: boolean) {
			this.isMobile = isMobile
		},
		changeSubject(subject: string): boolean {
			this.filterSubject = subject
			return true
		},
		loadFeed() {
			this.feed = feedData.map((d: any) => {
				return {
					id: d.id as number,
					subject: d.subject,
					title: d.title,
					author: d.author,
					text: d.text,
					publishDate: d.publishDate,
					imgUrl: d.imgUrl
				} as FeedItem
			})
		}
	},

	getters: {
		username: (state: RootState): string => state.user && state.user.username ? state.user.username : '',
		fullName: (state: RootState): string => state.user && state.user.fullName ? state.user.fullName : '',
		email: (state: RootState): string => state.user && state.user.email ? state.user.email : '',
		isLoggedIn: (state: RootState): boolean => (state.user != null && !!state.user.username),
	}
})
