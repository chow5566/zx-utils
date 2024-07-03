// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/zx-utils/'
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss'
  ]
})
