import { defineStore } from 'pinia'

import {
  IReportsResponse,
  ISpecialReports,
  ISpecialReportsParams,
} from '~/types/special-reports'

export const usePhotoReportsStore = defineStore('photoReports', {
  state: () => ({
    reports: [] as ISpecialReports[],
    count: 0,
    loading: true,
    params: {
      offset: 0,
      limit: 5,
      search: undefined,
    },
  }),
  actions: {
    fetchPhotoReports(params: ISpecialReportsParams, force?: boolean) {
      if (this.reports.length > 0 && !force) {
        return new Promise((resolve, reject) => {
          resolve(this.reports)
        })
      } else {
        if (this.reports.length === 0) {
          this.loading = true
        }
        return new Promise((resolve, reject) => {
          useApi()
            .$get<IReportsResponse>('news/PhotoReportsListView/', {
              params,
            })
            .then((res) => {
              this.count = res.count
              this.reports.push(...res.results)
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
