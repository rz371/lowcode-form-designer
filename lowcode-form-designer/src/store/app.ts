import { defineStore } from 'pinia'

interface AppState {
  sidebarCollapsed: boolean
  darkMode: boolean
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    sidebarCollapsed: false,
    darkMode: false,
  }),
  actions: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
  },
})