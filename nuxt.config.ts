// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
      title: 'UzNews.uz - Новости Узбекистана',
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
  css: ['/assets/style.css', '/assets/icomoon/style.css'],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],

  i18n: {
    locales: [
      { code: 'ru', iso: 'ru-RU' },
      { code: 'uz', iso: 'uz-UZ' },
    ],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
      silentTranslationWarn: true,
      missingWarn: false,
      fallbackWarn: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
      alwaysRedirect: true,
    },
  },

  nitro: {
    serveStatic: true,
  },
  devServerHandlers: [],
  runtimeConfig: {
    public: {
      baseURL: 'localhost',
    },
  },
})
