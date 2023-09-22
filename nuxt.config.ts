// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: 'google',
          content: 'notranslate',
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],
  css: [
    '~/assets/scss/main.css',
  ],
  pwa: {
    manifest: {
      name: 'Salary Organizer',
      short_name: 'Salary Organizer',
      description: 'Salary organizer is an app organize your salary and divide it to bills, rent, etc.',

    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})