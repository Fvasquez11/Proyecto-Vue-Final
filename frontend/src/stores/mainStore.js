import { defineStore } from 'pinia'

export const useMainStore = defineStore('useMainStore', {
  state: () => {
    return {
      username: null,
      jwt: null,
      userType: true,
    }
  },

  actions: {
    defineUsername(name) {
      this.username = name;
    },
    defineJWT(token) {
      this.jwt = token;
    }
  }
})