import { defineStore } from 'pinia'

export const useAudioStore = defineStore('audio', {
  state: () => ({
    isAudioFixed: false,
  }),
  actions: {
    makeFixed() {
      this.$state.isAudioFixed = true
    },
    makeUnfixed() {
      this.$state.isAudioFixed = false
    },
  },
  getters: {},
})
