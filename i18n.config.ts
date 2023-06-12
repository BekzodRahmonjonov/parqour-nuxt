import ru from '~/locales/ru.json'
import uz from '~/locales/uz.json'

export default defineI18nConfig((nuxt) => ({
  legacy: true,
  fallbackLocale: 'ru',
  locale: 'ru',
  messages: {
    ru,
    uz,
  },
}))
