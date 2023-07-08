import { defineStore } from 'pinia'

import { INewsSearchListParams } from '~/types/news'
import {
  IReportsResponse,
  ISpecialReports,
  ISpecialReportsParams,
} from '~/types/special-reports'

export const useSpecialReportsStore = defineStore('specialReports', {
  state: () => ({
    specialReports: [] as ISpecialReports[],
    count: 0,
    loading: true,
    params: {
      offset: 0,
      limit: 1,
      search: undefined,
    },
  }),
  actions: {
    fetchSpecialReports(params: ISpecialReportsParams) {
      if (this.specialReports.length > 0) {
        return new Promise((resolve, reject) => {
          resolve(this.specialReports)
        })
      } else {
        this.loading = true
        return new Promise((resolve, reject) => {
          useApi()
            .$get<IReportsResponse>('news/SpecialReportsList/', {
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
