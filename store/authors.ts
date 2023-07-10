import { defineStore } from 'pinia'

import {
  IReportsResponse,
  ISpecialReports,
  ISpecialReportsParams,
} from '~/types/special-reports'

export const useAuthorsStore = defineStore('authors', {
  state: () => ({
    articles: [] as ISpecialReports[],
    articlesCount: 0,
    articlesLoading: true,
    params: {
      offset: 0,
      limit: 5,
      search: undefined,
    },
  }),
  actions: {
    fetchAuthorArticles(params: ISpecialReportsParams, force?: boolean) {
      if (this.articles.length > 0 && !force) {
        return new Promise((resolve, reject) => {
          resolve(this.articles)
        })
      } else {
        if (this.articles.length === 0) {
          this.articlesLoading = true
        }
        return new Promise((resolve, reject) => {
          useApi()
            .$get<IReportsResponse>('news/AuthorArticlesList/', {
              params,
            })
            .then((res) => {
              this.articlesCount = res.count
              this.articles.push(...res.results)
              resolve(res)
            })
            .catch((err) => {
              reject(err)
            })
            .finally(() => {
              setTimeout(() => {
                this.articlesLoading = false
              }, 300)
            })
        })
      }
    },
  },
})
