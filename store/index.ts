import { defineStore } from 'pinia'
import {IStatResponse} from '../types'
export const useHomeStore = defineStore('homeStore', {
  state: () => ({
    showMobile: false,
    Stat: {},
    Faqs: [],
  }),

  actions: {
    async getStat(params: any) {
      const { $get } = useApi();
      return new Promise((resolve, reject) => {
        $get('/stat', { params })
          .then((response: any) => {
            this.Stat = response;
            resolve(response);
          })
          .catch(err => {
            console.log(err);
          })
      })
    },
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
