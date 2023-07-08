import { defineStore } from 'pinia'

export const useHomeStore = defineStore('homeStore', {
  state: () => ({
    showMobile: false,
    languageSwitch: false,
    localeMessagesFetched: false,
    newsList: [],
    popularList: [],
    discussionList: [],
    interviewList: [],
<<<<<<< HEAD
    auth: {
      loggedIn: false,
      user: null,
    }
  }),
  actions: {
    async fetchMe (){
      const { $get } = useApi()
      try {
        const data = await $get('users/Me/')
        this.auth.loggedIn = true
        this.auth.user = data
      } catch (e) {
   // throw new Error(e)
        console.log(e);
      }
    },
=======
    authorsList: [],
  }),
  actions: {
>>>>>>> ee5c541034eb5887ea062336ba59d1a4bfb867e5
    async nuxtServerInit() {
      const { locale, setLocaleMessage, setLocale, t } = useI18n()
      const cookieLocale = useCookie('i18n_redirected')

      let defaultLocale = locale.value ?? 'ru'
      defaultLocale = cookieLocale.value ?? defaultLocale

      try {
        const data = await fetch(
          `${
            import.meta.env.VITE_API_BASE_URL
          }front-translation/FrontTranslationList/?lang=${defaultLocale}`,
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
    fetchNewsList() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('/news/NewsList/')
          .then((data: any) => {
            this.newsList = data.results
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchPopularList() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('/news/PopularList/')
          .then((data: any) => {
            this.popularList = data.results
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchDiscussionList() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('/news/DiscussionList/')
          .then((data: any) => {
            this.discussionList = data.results
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchInterviewList() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('/news/InterviewList/')
          .then((data: any) => {
            this.interviewList = data.results
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchAuthorsList() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('/news/AuthorArticlesList/')
          .then((data: any) => {
            this.authorsList = data.results
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
  getters: {},
})
