import {useAuthStore} from '~/store/auth';
// eslint-disable-next-line camelcase
const access_token = useCookie('access_token');
export default defineNuxtPlugin( async (nuxtApp) => {
  const authStore = useAuthStore(nuxtApp.$pinia);
  await authStore.fetchLocaleJson(nuxtApp.$i18n);
  // eslint-disable-next-line camelcase
  if(access_token.value){
    await authStore.fetchMe()
  }
})
