import { defineStore } from 'pinia'
export const useSolutios = defineStore('useSolutios', {
  state: () => ({
    Solutions: [],
  }),

  actions: {
    async getSolutios(params: any) {
      const { $get } = useApi();
      return new Promise((resolve, reject) => {
        $get('/solutions', { params })
          .then((response: any) => {
            this.Solutions = response;
            resolve(response);
          })
          .catch(err => {
          console.log(err);
        })
      })
    }
  },
})
