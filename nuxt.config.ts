// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2026-08-29',
    runtimeConfig: {
        public: {
            // Baked in at build time, so every deploy stamps itself
            lastModified: new Date().toISOString(),
        },
    },
    routeRules : {
        '/': { prerender : true },
    },
    devtools: { enabled: false }
})
