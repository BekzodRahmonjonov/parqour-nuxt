import { defineStore } from 'pinia'

import { INewsResponse, INewsSearch } from '~/types/news'

export const useColumnsStore = defineStore('columnsStore', {
  state: () => ({
    columns: [] as INewsSearch[],
  }),
  actions: {
    fetchColumns() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get<INewsResponse>('news/SpeakersList/')
          .then((res) => {
            this.columns = res.results
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
})
