import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Login from '@/views/Login.vue'
import Settings from '@/views/Settings.vue'
import Feed from '@/views/Feed.vue'
import { useMainStore } from '@/store'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		// {
		// 	path: '/about',
		// 	name: 'about',
		// 	// route level code-splitting
		// 	// this generates a separate chunk (About.[hash].js) for this route
		// 	// which is lazy-loaded when the route is visited.
		// 	component: () => import('../views/AboutView.vue')
		// },
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/:username',
			name: 'profile',
			component: Profile,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/settings',
			name: 'settings',
			component: Settings,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/feed',
			name: 'feed',
			component: Feed,
		},
	]
})

router.beforeEach(async (to) => {
	const authRequired = to.matched.some(record => record.meta.requiresAuth)
	const store = useMainStore();
	if (authRequired && !store.user?.username) {
		return { name: 'login' };
	}
});

export default router
