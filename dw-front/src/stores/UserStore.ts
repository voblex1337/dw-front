import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '@/types/user'
import httpClient from '@/services/ApiService'

export const useUserStore = defineStore('userStore', () => {

    const user = ref<User | null>(null);

    const fetchUser = async (username: string) => {
        try {
  
            const response = await httpClient.get(`stat/get_user/${username}/`);
            user.value = response.data
  
            console.log('User Data:', response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    return {
        user,
        fetchUser,
    }
})
