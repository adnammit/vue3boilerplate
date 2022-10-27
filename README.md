# Vue3 Boilerplate

This is a starting place for creating a Vue3 App with all the freshest hits like Vite, Pinia, Vuetify 3 beta, TS and user auth

## Quickstart
```sh
# Project setup
npm i

# build and hot-load
npm run dev

# compile and Minify for Production
npm run build

# lint
npm run lint
```

## Notes
* [Typescript and Vue3](https://vuejs.org/guide/typescript/overview.html)
* [more in depth TS info here](https://blog.logrocket.com/how-to-use-vue-3-typescript/)
* Vuex is being deprecated so let's use [Pinia! 🍍](https://pinia.vuejs.org/core-concepts/)
* [More about Pinia](https://www.vuemastery.com/blog/advantages-of-pinia-vs-vuex/)
* [Vite Configuration Reference](https://vitejs.dev/config/)
* [Static deployment using Vite](https://vitejs.dev/guide/static-deploy.html)
* [Render Deployment](https://dashboard.render.com/)
    - you can connect your github repo to Render and it will automatically deploy when new commits are pushed. neat!
    - [https://vue3-boilerplate.onrender.com/](https://vue3-boilerplate.onrender.com/)
* [Vuetify 3 beta](https://next.vuetifyjs.com/en/)
* [Material Design Icons](https://materialdesignicons.com/)
* [lint](https://eslint.org/)
* For Vue3 it is recommended to disable Vetur and use VSCode extensions [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) and [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)


## Deployment
* to deploy as a subdir to your website, maybe try `"build": "vite build --base=/vue3/"` in package.json


## To-do
* provide login and signup
* implement more robust user management
* make the FeedBar mobile-friendly
* prod stuff:
    - figure out how to get the right path for static assets
    - since your app is statically hosted, set up a redirect for the auth-denied pages -- actually all routing is messed up
* lazy-loading in router/index.ts
* get knowing about CompositionAPI and OptionsAPI
* scss -- maybe? css may be preferred

## Done
* absolute component paths
* add Vuetify
* change auth to something more flexible/remove redirect
* purge the rest of okta


## Type Support for `.vue` Imports in TS
If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

