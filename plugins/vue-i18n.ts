import { createI18n } from 'vue-i18n'

import ru from '@/locales/ru.json'
import uz from '@/locales/uz.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    locale: useCookie('locale').value || 'ru',
    legacy: false,
    messages: {
      ru,
      uz,
    },
  })
  nuxtApp.vueApp.use(i18n)
})
