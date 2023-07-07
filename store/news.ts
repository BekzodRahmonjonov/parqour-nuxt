import { defineStore } from 'pinia'

import { INewsResponse, INewsSearch, INewsSearchListParams } from '~/types/news'

export const useNewsStore = defineStore('columnsStore', {
  state: () => ({
    newsSearchList: [] as INewsSearch[],
    newsSearchListCount: 0,
    params: {
      offset: 0,
      limit: 5,
      hashtags__slug: undefined,
      model_type: undefined,
      search: undefined,
    } as INewsSearchListParams,
    searchListLoading: true,
  }),
  actions: {
    fetchNews(params: INewsSearchListParams) {
      if (this.params.offset === 0) {
        this.searchListLoading = true
      }
      return new Promise((resolve, reject) => {
        useApi()
          .$get('news/SearchList/', {
            params,
          })
          .then((res: INewsResponse) => {
            this.newsSearchListCount = res.count
            this.newsSearchList = [...this.newsSearchList, ...res.results]
            resolve(res)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
          .finally(() => {
            setTimeout(() => {
              this.searchListLoading = false
            }, 300)
          })
      })
    },
  },
})
