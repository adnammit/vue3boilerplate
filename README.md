# Vue3 Boilerplate

This is a starting place for creating a Vue3 App with all the freshest hits like Vite, Pinia, Vuetify 3 beta, TS and Okta login

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
* [Okta and Vue3](https://stackoverflow.com/questions/70910754/how-to-set-up-a-vue-app-with-okta-auth-with-composition-api)
* [lint](https://eslint.org/)
* For Vue3 it is recommended to disable Vetur and use VSCode extensions [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) and [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Okta Auth
Protected by [Okta OpenId authentication](https://developer.okta.com/docs/guides/sign-into-spa-redirect/vue/main/) to keep your secrets safe.

Auth is configured in config.json and can be accessed in the application by importing auth.ts

To protect a page, add the `requiresAuth` attribute to its route in `router/index`

## To-do
* scss
* lazy-loading in router/index.ts
* get knowing about CompositionAPI and OptionsAPI
* add Vuetify
* footer cuts off content

## Done
* absolute component paths


## Type Support for `.vue` Imports in TS
If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

