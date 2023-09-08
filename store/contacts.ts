import { defineStore } from 'pinia'
export const useContacts = defineStore('useContacts', {
  state: () => ({
    Contacts: [],
  }),

  actions: {
    async getContacts(params: any) {
      const { $get } = useApi();
      return new Promise((resolve, reject) => {
        $get('/contacts', { params })
          .then((response: any) => {
            this.Contacts = response;
            resolve(response);
          })
          .catch(err => {
          console.log(err);
        })
      })
    }
  },
})
