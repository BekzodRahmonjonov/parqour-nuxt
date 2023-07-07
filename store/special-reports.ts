import { defineStore } from 'pinia'

import { IReportsResponse, ISpecialReports } from '~/types/special-reports'

export const useSpecialReports = defineStore('specialReports', {
  state: () => ({
    specialReports: [] as ISpecialReports[],
  }),
  actions: {
    fetchSpecialReports() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('news/SpecialReportsList/')
          .then((res: IReportsResponse) => {
            console.log(res)
            this.specialReports = res.results
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
