import { defineStore } from 'pinia'

export const useMainStore = defineStore('useMainStore', {
  state: () => {
    return {
      userID: null,
      jwt: null,
    }
  },

  actions: {
    defineUserId(id) {
      this.userID = id;
    }
  }
})