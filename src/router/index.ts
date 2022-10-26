import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import { navigationGuard, LoginCallback } from '@okta/okta-vue'

const router = createRouter({
	// base: process.env.BASE_URL
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
			path: '/:username',
			name: 'profile',
			component: Profile,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/login/callback',
			component: LoginCallback,
		}
	]
})

router.beforeEach(navigationGuard);

export default router
