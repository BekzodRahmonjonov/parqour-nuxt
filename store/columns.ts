import { defineStore } from 'pinia'

export const useColumnsStore = defineStore('columnsStore', {
  state: () => ({
    columns: [],
  }),
  actions: {
    fetchColumns() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('news/SpeakersList/')
          .then((res) => {
            this.columns = res.data
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
