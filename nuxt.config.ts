import { defineNuxtConfig } from 'nuxt3'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "寻觅 - 记录美好风景",
    },
    buildModules:['nuxt-windicss'],
    css: ["assets/scss/index.scss"],
    vite: {
        logLevel: 'info',
    },
})


