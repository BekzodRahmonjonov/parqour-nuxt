import { defineStore } from 'pinia'

import { INewsParams, INewsResponse, INewsSearch } from '~/types/news'

export const useNewsStore = defineStore('columnsStore', {
  state: () => ({
    newsSearchList: [] as INewsSearch[],
    params: {
      offset: 0,
      limit: 10,
      hashtags: undefined,
      model_type: undefined,
      search: undefined,
    } as INewsParams,
  }),
  actions: {
    fetchNews(params: INewsParams) {
      return new Promise((resolve, reject) => {
        useApi()
          .$get<INewsResponse>('news/SearchList/', {
            params,
          })
          .then((res) => {
            console.log(res)
            this.newsSearchList = res.results
            resolve(res)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
  },
})
