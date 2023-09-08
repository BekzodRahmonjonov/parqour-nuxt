import { defineStore } from 'pinia'
export const usePartners = defineStore('usePartners', {
  state: () => ({
    Partners: [],
  }),

  actions: {
    async getPartners(params: any) {
      const { $get } = useApi();
      return new Promise((resolve, reject) => {
        $get('/patners', { params })
          .then((response: any) => {
            this.Partners = response;
            resolve(response);
          })
          .catch(err => {
          console.log(err);
        })
      })
    }
  },
})
