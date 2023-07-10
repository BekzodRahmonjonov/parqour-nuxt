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
    authorsArticleList: [],
    authorsList: [],
  }),

  actions: {
    async nuxtServerInit() {},
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
