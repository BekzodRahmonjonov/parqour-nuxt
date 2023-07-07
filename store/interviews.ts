import { defineStore } from 'pinia'

import { IInterviewResponse, IInterviews } from '~/types/interviews'

export const useNewsStore = defineStore('columnsStore', {
  actions: {
    fetchNews(params: IInterviews) {
      return new Promise((resolve, reject) => {
        useApi()
          .$get<IInterviewResponse>('news/InterviewList/', {
            params,
          })
          .then((res) => {
            console.log(res)
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
