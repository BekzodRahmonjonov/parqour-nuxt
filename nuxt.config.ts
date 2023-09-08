// https://nuxt.com/docs/api/configuration/nuxt-config
// import { i18n} from './locales/i18n.js'
import us from './locales/us.json'
import en from './locales/en.json'
import ru from './locales/ru.json'
export default defineNuxtConfig({
  ssr: true,
  plugins: [
    { src: './plugins/swiper.ts', mode: 'client' } // Add the Swiper plugin here
  ],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
      title: 'Parqour',
    },
    // pageTransition: { name: 'fade', mode: 'out-in' },
  },
  css: ['/assets/main.scss'],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
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
    'nuxt-swiper',
    '@sidebase/nuxt-session'
  ],
  i18n: {
    locales: ['us', 'en', 'ru'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      silentTranslationWarn: true,
      missingWarn: true,
      fallbackWarn: true,
      messages: {
        en,
        us,
        ru
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
  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      // Add your global Sass files here, e.g., variables, mixins, etc.
      '@/assets/styles/variables.scss',
      '@/assets/styles/mixins.scss',
    ],
  },
})
