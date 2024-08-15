import { defineStore } from 'pinia'
import axios from 'axios'

// Определяем тип состояния
interface UserState {
  user: any | null
  isLoading: boolean
  error: string | null
}

// Создаем хранилище пользователя
export const useUserStore = defineStore('userStore', {
  state: (): UserState => ({
    user: null,
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchUser(userId: string) {
      this.isLoading = true
      try {
        const response = await axios.get(`http://localhost:3000/api/users/${userId}`)
        this.user = response.data
        this.error = null
      } catch (error) {
        this.error = error.message || 'Failed to fetch user data'
      } finally {
        this.isLoading = false
      }
    },
  },
  getters: {
    user: (state) => state.user,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error,
  },
})
