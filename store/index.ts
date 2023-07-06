import { defineStore } from 'pinia'

export const useHomeStore = defineStore('homeStore', {
  state: () => ({
    showMobile: false,
    languageSwitch: false,
    localeMessagesFetched: false,
  }),
  actions: {
    // languageTrigger(value) {
    //   this.languageSwitch = value
    // },
    async nuxtServerInit() {
      const { locale, setLocaleMessage, setLocale, t } = useI18n()
      const cookieLocale = useCookie('i18n_redirected')

      let defaultLocale = locale.value ?? 'uz'
      defaultLocale = cookieLocale.value ?? defaultLocale
      // if (process.client) {
      //   defaultLocale = localStorage.getItem('locale') ?? 'uz'
      // }

      try {
        const data = await fetch(
          `${
            import.meta.env.VITE_APP_BASE_URL
          }front-translation/FrontTranslationList/`,
          {
            headers: {
              'Accept-Language': defaultLocale,
            },
          }
        )
        const messages = await data.json()
        setLocale(defaultLocale)
        await setLocaleMessage(defaultLocale, messages)
      } catch (e) {
        console.error(e)
      }
    },
  },
  getters: {},
})
