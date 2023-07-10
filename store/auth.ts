import { defineStore } from 'pinia'

import {
  IAuthLogin,
  IAuthLoginResponse,
  IAuthRegister,
  IAuthRegisterResponse,
} from '~/types/auth'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    // showMobile: false,
    // languageSwitch: false,
    // localeMessagesFetched: false,
    // newsList: [],
    // popularList: [],
    // discussionList: [],
    // interviewList: [],
  }),
  actions: {
   async  userLogin(body: IAuthLogin) {
      try {
        return await useApi().$post('users/SignIn/', {body});
      } catch (error:any) {
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
