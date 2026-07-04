import { defineStore } from 'pinia'

interface UserState {
  token: string
  username: string
  roles: string[]
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: '',
    username: '',
    roles: [],
  }),
  getters: {
    isLoggedIn: (state) => !!state.token,
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(info: { username: string; roles: string[] }) {
      this.username = info.username
      this.roles = info.roles
    },
    logout() {
      this.token = ''
      this.username = ''
      this.roles = []
    },
  },
})