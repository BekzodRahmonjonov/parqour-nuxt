import { defineStore } from 'pinia'

import { INewsList } from '~/types'
import { INewsResponse, INewsSearch, INewsSearchListParams } from '~/types/news'

export const useNewsStore = defineStore('columnsStore', {
  state: () => ({
    newsSearchList: [] as INewsSearch[],
    newsList: [] as INewsList[],
    newsListCount: 0,
    newsSearchListCount: 0,
    params: {
      offset: 0,
      limit: 5,
    } as INewsSearchListParams,
    searchListLoading: true,
    loading: true,
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
            reject(err)
          })
          .finally(() => {
            setTimeout(() => {
              this.searchListLoading = false
            }, 300)
          })
      })
    },
    fetchNewsList(
      params: INewsSearchListParams,
      force?: boolean,
      filter?: boolean
    ) {
      if (this.newsList.length > 0 && !force) {
        return new Promise((resolve, reject) => {
          resolve(this.newsList)
        })
      } else {
        if (!this.newsList.length) {
          this.loading = true
        }
        return new Promise((resolve, reject) => {
          useApi()
            .$get<INewsResponse>('news/NewsList/', {
              params,
            })
            .then((res) => {
              this.newsListCount = res.count
              if (filter) {
                this.newsList = res.results
              } else {
                this.newsList.push(...res.results)
              }
              resolve(res)
            })
            .catch((err) => {
              reject(err)
            })
            .finally(() => {
              setTimeout(() => {
                this.loading = false
              }, 300)
            })
        })
      }
    },
  },
})
