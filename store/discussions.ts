import { defineStore } from 'pinia'

import {
  IReportsResponse,
  ISpecialReports,
  ISpecialReportsParams,
} from '~/types/special-reports'

export const useDiscussionsStore = defineStore('discussions', {
  state: () => ({
    discussions: [] as ISpecialReports[],
    count: 0,
    loading: true,
    params: {
      offset: 0,
      limit: 5,
      search: undefined,
    },
  }),
  actions: {
    fetchDiscussions(params: ISpecialReportsParams, force?: boolean) {
      if (this.discussions.length > 0 && !force) {
        return new Promise((resolve, reject) => {
          resolve(this.discussions)
        })
      } else {
        if (this.discussions.length === 0) {
          this.loading = true
        }
        return new Promise((resolve, reject) => {
          useApi()
            .$get<IReportsResponse>('news/DiscussionList/', {
              params,
            })
            .then((res) => {
              this.count = res.count
              this.discussions.push(...res.results)
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
