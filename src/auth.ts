import { OktaAuth } from '@okta/okta-auth-js'
// import config from '@/config.json';

export const oktaAuth = new OktaAuth({
	issuer: import.meta.env.VITE_AUTH_CLIENT,
	clientId: import.meta.env.VITE_CLIENT_ID,
	redirectUri: import.meta.env.VITE_REDIRECT_URL,
	scopes: ['openid', 'profile', 'email'],
})
