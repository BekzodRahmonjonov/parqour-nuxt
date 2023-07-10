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
    auth: {
      loggedIn: false,
      user: null,
    },
    authorsArticleList: [],
    authorsList: [],
  }),

  actions: {
    async fetchMe() {
      const { $get } = useApi()
      try {
        const data = await $get('users/GetUser/')
        this.auth.loggedIn = true
        this.auth.user = data
        return data
      } catch (error: any) {
        throw new Error(error)
      }
    },

    async nuxtServerInit() {
      const { $get } = useApi()
      const { locale, setLocaleMessage, setLocale, t } = useI18n()
      const cookieLocale: any = useCookie('i18n_redirected')
      // eslint-disable-next-line camelcase
      const check_token: any = useCookie('access')
      // eslint-disable-next-line camelcase
      if (check_token.value) {
        await this.fetchMe()
      }
      let defaultLocale = locale.value ?? 'ru'
      defaultLocale = cookieLocale.value ?? defaultLocale
      // console.log(list)
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
    fetchAuthorsArticlesList() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('/news/AuthorArticlesList/')
          .then((data: any) => {
            this.authorsArticleList = data.results
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
          .$get('/news/AuthorList/')
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
