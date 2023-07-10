import { defineStore } from 'pinia'

import { INewsList } from '~/types'
import { INewsCommentRequest, INewsCommentSlug, INewsResponse, INewsSearch, INewsSearchListParams } from "~/types/news";

export const useNewsStore = defineStore('columnsStore', {
  state: () => ({
    newsSearchList: [] as INewsSearch[],
    newsList: [] as INewsList[],
    newsListCount: 0,
    newsSearchListCount: 0,
    newsCommnetList:[],
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
<<<<<<< HEAD
    fetchNewsBySlug(params: INewsCommentSlug) {
      return new Promise((resolve, reject) => {
        useApi()
          .$get(`news/CommentList/${params.slug}/`, {
          })
          .then((res:any) => {
            const data:any =[...res.results].map((item:any)=>{
              return {
                ...item,
                is_open:false
            }});
            this.newsCommnetList = data;
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
    fetchNewsList(params: INewsSearchListParams, force: boolean) {
      if (!this.newsList.length) {
        this.loading = true
      }
      if (!this.newsList?.length || force) {
=======
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
>>>>>>> 58ea240df06b2b8cfb1aaf9efe9dfd46abac74b4
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
