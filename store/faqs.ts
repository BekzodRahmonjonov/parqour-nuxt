import { defineStore } from 'pinia'
export const useFaqs = defineStore('useFaqs', {
  state: () => ({
    Faqs: [],
  }),

  actions: {
    async getFaq(params: any) {
      const { $get } = useApi();
      return new Promise((resolve, reject) => {
        $get('/faqs', { params })
          .then((response: any) => {
            this.Faqs = response;
            for (let i = 0; i < this.Faqs.length; i++) { 
              this.Faqs[i].active = false
            }
            resolve(response);
          })
          .catch(err => {
            console.log(err);
          })
      })
    },
  },
})
