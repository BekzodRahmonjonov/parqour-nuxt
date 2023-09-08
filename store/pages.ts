import { defineStore } from 'pinia'
export const usePages = defineStore('pagesStore', {
  state: () => ({
    Pages: [],
  }),

  actions: {
    async getPages(params: any, slug?: any) {
      const { $get } = useApi();
      return new Promise((resolve, reject) => {
        $get(`/pages?filters[slug]=${slug}`, { params })
          .then((response: any) => {
            this.Pages = response;
            resolve(response);
          })
          .catch(err => {
          console.log(err);
        })
      })
    }
  },
})
