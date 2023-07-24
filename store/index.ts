import { defineStore } from 'pinia'

export const useHomeStore = defineStore('homeStore', {
  state: () => ({
    showMobile: false,
  }),

  actions: {
    async nuxtServerInit() {},
  },
  getters: {},
})
