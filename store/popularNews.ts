import { defineStore } from 'pinia'

import { INewsResponse, INewsSearch, INewsSearchListParams } from '~/types/news'

export const usePopularNewsStore = defineStore('popularNewsStore', {
  state: () => ({
    news: [] as INewsSearch[],
    newsCount: 0,
    params: {
      offset: 0,
      limit: 5,
      hashtags__slug: undefined,
      model_type: undefined,
      search: undefined,
    } as INewsSearchListParams,
    loading: true,
  }),
  actions: {
    fetchPopularNews(params: INewsSearchListParams, force: boolean) {
      if (!this.news.length) {
        this.loading = true
      }
      if (!this.news?.length || force) {
        return new Promise((resolve, reject) => {
          useApi()
            .$get<INewsResponse>('news/NewsList/', {
              params,
            })
            .then((res: INewsResponse) => {
              this.newsCount = res.count
              this.news.push(...res.results)
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
