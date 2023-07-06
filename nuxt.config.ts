// https://nuxt.com/docs/api/configuration/nuxt-config
import ru from './locales/ru.json'
import uz from './locales/uz.json'
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
      title: 'UzNews.uz - Новости Узбекистана',
    },
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
    locales: ['ru', 'uz'],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
      silentTranslationWarn: true,
      missingWarn: true,
      fallbackWarn: true,
      messages: {
        ru,
        uz,
      },
    },
    // vueI18n: './i18n.config.ts', // if you are using custom path, default
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
