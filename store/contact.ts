import { defineStore } from 'pinia'

import { IContactApplication } from '~/types/contact'

interface State {
  contact: IContactApplication[]
}

export const useContactStore = defineStore('contactStore', {
  state: (): State => ({
    contact: [],
  }),
  actions: {
    fetchContact() {
      return new Promise((resolve, reject) => {
        useApi()
          .$get('common/ContactList')
          .then((data: any) => {
            this.contact = data.results
            resolve(data)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
  },
})
