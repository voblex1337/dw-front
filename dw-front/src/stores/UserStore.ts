import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useUserStore = defineStore('userStore', () => {
  const user = ref(null)

  const fetchUser = async (userId: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/users/${userId}`)
      user.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  const userComputed = computed(() => user.value)

  return {
    user,
    fetchUser,
    userComputed,
  }
})



export const userStore = defineStore("userStore", () => {

})
