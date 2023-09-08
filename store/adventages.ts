import { defineStore } from 'pinia'
export const useAdventages = defineStore('useAdventages', {
  state: () => ({
    Adventages: [],
  }),

  actions: {
    async getAdventages(params: any) {
      const { $get } = useApi();
      return new Promise((resolve, reject) => {
        $get('/adventages', { params })
          .then((response: any) => {
            this.Adventages = response;
            resolve(response);
          })
          .catch(err => {
          console.log(err);
        })
      })
    }
  },
})
