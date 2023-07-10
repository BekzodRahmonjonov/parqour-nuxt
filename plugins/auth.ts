import { useAuthStore } from '~/store/auth'
// eslint-disable-next-line camelcase
export default defineNuxtPlugin(async (nuxtApp) => {
  try {
    const access_token = useCookie('access_token');
    const authStore = useAuthStore(nuxtApp.$pinia)
    await authStore.fetchLocaleJson(nuxtApp.$i18n)
    // eslint-disable-next-line camelcase
    if (access_token.value) {
      await authStore.fetchMe()
    }
  } catch (e) {
    console.error(e)
    // return e;
  }

})
