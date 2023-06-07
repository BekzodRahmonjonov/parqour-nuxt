import en from './locales/en.json'
import ru from './locales/ru.json'
import uz from './locales/uz.json'

export default defineI18nConfig((nuxt) => ({
  legacy: false,
  fallbackLocale: 'ru',
  locale: 'ru',
  messages: {
    ru,
    uz,
    en,
  },
}))
