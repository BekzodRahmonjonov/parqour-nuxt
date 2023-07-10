import { defineStore } from 'pinia'

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
      limit: 5,
      search: undefined,
    },
  }),
  actions: {
    fetchSpecialReports(
      params?: ISpecialReportsParams,
      force?: boolean,
      filter?: boolean
    ) {
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
            .$get<IReportsResponse>('news/SpecialReportsList/', {
              params,
            })
            .then((res) => {
              this.count = res.count
              if (filter) {
                this.specialReports = res.results
              } else {
                this.specialReports = [...this.specialReports, ...res.results]
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
