import { defineStore } from 'pinia'

import { ICommonDataResponse } from '~/types/common'
import { TNewsItem } from '~/types/news'

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [] as TNewsItem[],
  }),
  actions: {
    fetchNews() {
      return new Promise((resolve, reject) => {
        if (this.news.length) {
          resolve(this.news)
          return
        }
        useApi()
          .$get<ICommonDataResponse<TNewsItem>>('News')
          .then((data) => {
            this.news = data.results
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
})
