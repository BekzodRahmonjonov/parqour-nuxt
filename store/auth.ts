import { defineStore } from 'pinia'
import { useApi } from '~/composables/useApi'
import {
  IAuthLogin,
  IAuthLoginResponse,
  IAuthRegister,
  IAuthRegisterResponse,
} from '~/types/auth'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    auth: {
      loggedIn: false,
      user: null,
    },
  }),
  actions: {
    async fetchMe(token: string) {
      const { $get } = useApi()
      try {
        const data = await $get('users/UserProfile/',{headers: { Authorization: `Bearer ${token}` }})
        this.auth.loggedIn = true
        this.auth.user = data
        return data
      } catch (error: any) {
        throw new Error(error)
      }
    },
    async fetchLocaleJson(i18n:any) {
      const { $get } = useApi()
      const { locale, setLocaleMessage, setLocale, t } = i18n;
      const cookieLocale: any = useCookie('i18n_redirected')
      // eslint-disable-next-line camelcase
      let defaultLocale = locale.value ?? 'ru'
      defaultLocale = cookieLocale.value ?? defaultLocale
      try {
        const data = await $get(
          `front-translation/FrontTranslationList/?lang=${defaultLocale}`,
          {
            headers: {
              'Accept-Language': defaultLocale,
            },
          }
        )
        const messages = data
        setLocale(defaultLocale)
        await setLocaleMessage(defaultLocale, messages)
      } catch (e) {
        console.error(e)
      }
    },
    async userLogin(body: IAuthLogin) {
      try {
        return await useApi().$post('users/SignIn/', { body })
      } catch (error: any) {
        throw new Error(error)
      }
    },
    Logout() {
      try {
        // eslint-disable-next-line camelcase
        const access_token = useCookie('access_token');
        // eslint-disable-next-line camelcase
        const refresh_token = useCookie('refresh_token');
        // eslint-disable-next-line camelcase
        access_token.value = null;
        // eslint-disable-next-line camelcase
        refresh_token.value = null;
      } catch (error: any) {
        throw new Error(error)
      }
    },
    userRegistor(body: IAuthRegister) {
      return new Promise((resolve, reject) => {
        useApi()
          .$post<IAuthRegisterResponse>('users/SignUp/', { body })
          .then((data: IAuthRegisterResponse) => {
            resolve(data)
          })
      })
    },
  },
  getters: {},
})
