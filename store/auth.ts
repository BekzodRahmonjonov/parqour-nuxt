import { defineStore } from 'pinia'
// eslint-disable-next-line import/named
import { IAuthLogin, IAuthLoginResponse,IAuthRegisterResponse, IAuthRegister} from '~/types/auth'
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
    userLogin(data: IAuthLogin) {
      return new Promise((resolve, reject) => {
        useApi()
          .$post('users/SignIn/', {
            body: data,
          })
          .then((data: IAuthLoginResponse) => {
            resolve(data)
          })
      })
    },
    userRegistor(data: IAuthRegister) {
      return new Promise((resolve, reject) => {
        useApi()
          .$post<IAuthRegisterResponse>('users/SignUp/', {
          })
          .then((data: IAuthRegisterResponse) => {
            resolve(data)
          })
      })
    }
    // fetchNewsList() {
    //   return new Promise((resolve, reject) => {
    //     useApi()
    //       .$get('/news/NewsList/')
    //       .then((data: any) => {
    //         this.newsList = data.results
    //         resolve(data)
    //       })
    //       .catch((error) => {
    //         reject(error)
    //       })
    //   })
    // },
    // fetchPopularList() {
    //   return new Promise((resolve, reject) => {
    //     useApi()
    //       .$get('/news/PopularList/')
    //       .then((data: any) => {
    //         this.popularList = data.results
    //         resolve(data)
    //       })
    //       .catch((error) => {
    //         reject(error)
    //       })
    //   })
    // },
    // fetchDiscussionList() {
    //   return new Promise((resolve, reject) => {
    //     useApi()
    //       .$get('/news/DiscussionList/')
    //       .then((data: any) => {
    //         this.discussionList = data.results
    //         resolve(data)
    //       })
    //       .catch((error) => {
    //         reject(error)
    //       })
    //   })
    // },
    // fetchInterviewList() {
    //   return new Promise((resolve, reject) => {
    //     useApi()
    //       .$get('/news/InterviewList/')
    //       .then((data: any) => {
    //         this.interviewList = data.results
    //         resolve(data)
    //       })
    //       .catch((error) => {
    //         reject(error)
    //       })
    //   })
    // },
  },
  getters: {},
})
