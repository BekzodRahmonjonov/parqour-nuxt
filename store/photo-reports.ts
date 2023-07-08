import { defineStore } from 'pinia'

import { INewsSearchListParams } from '~/types/news'
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
      limit: 2,
      search: undefined,
    },
  }),
  actions: {
    fetchPhotoReports(params: ISpecialReportsParams, force?: boolean) {
      if (this.specialReports.length > 0 && !force) {
        return new Promise((resolve, reject) => {
          resolve(this.specialReports)
        })
      } else {
        if (this.specialReports.length === 0) {
          this.loading = true
        }
        return new Promise((resolve, reject) => {
          useApi()
            .$get<IReportsResponse>('news/PhotoReportsListView/', {
              params,
            })
            .then((res) => {
              this.count = res.count
              this.specialReports = [...this.specialReports, ...res.results]
              resolve(res)
            })
            .catch((err) => {
              console.log(err)
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
