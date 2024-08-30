<template>
  <!-- Modal -->
  <div
    class="fixed left-0 top-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
    @click.self="closePopup"
  >
    <div
      class="bg-custom-black-adventage rounded-xl shadow-lg w-full md:max-w-md mx-auto p-8 z-50 overflow-y-auto"
      @click.stop
    >
      <!-- Modal body -->
      <div class="flex flex-col gap-y-3">
          <div>
            <label for="login" class="block text-white mb-1">Username</label>
            <div class="relative mb-4">
              <input 
                id="login"
                v-model="username" 
                placeholder="Username" 
                type="text" 
                class="w-full border-gray-300 rounded-md px-10 py-2 bg-custom-back-popup-input custom-border-popup text-white"
              >
              <img 
                src="@/assets/img/icons/Auth/user.png" 
                alt="User Icon" 
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              >
            </div>
          </div>

          <div>
            <label for="login" class="block text-white mb-1">Email</label>
            <div class="relative mb-4">
              <input 
                id="login"
                v-model="email" 
                placeholder="Email" 
                type="email" 
                class="w-full border-gray-300 rounded-md px-10 py-2 bg-custom-back-popup-input custom-border-popup text-white"
              >
              <img 
                src="@/assets/img/icons/Auth/email.png" 
                alt="User Icon" 
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              >
            </div>
          </div>

          <div class=" mb-4">
            <div class="flex flex-row items-center justify-between">
              <label for="password" class="block text-white mb-1">Password</label>
            </div>
            <div class="relative">
              <input 
                id="password"
                type="password" 
                v-model="password" 
                placeholder="Password" 
                class="w-full border-gray-300 rounded-md pl-10 py-2 bg-custom-back-popup-input custom-border-popup text-white"
              >
              <img 
                src="@/assets/img/icons/Auth/lock.png" 
                alt="Lock Icon" 
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              >
            </div>
          </div>

          <button 
            class="flex items-center justify-center text-white bg-custom-gradient rounded-md px-4 py-1.5 text-lg shadow-custom w-full"
            @click="register()">
            Sign up
          </button>

          <div class="flex flex-row gap-x-2 flex items-center justify-center">
              <span class="text-white">Already have an account?</span>
              <a href="" class="text-main">Login</a>
          </div>
        </div>

      </div>

  </div>
</template>

<script setup lang="ts">
    import { ref, defineEmits } from 'vue'
    import { useRouter } from 'vue-router'; 

    import AuthService from '@/services/AuthService';
    import { useUserStore } from '@/stores/UserStore'

    const store = useUserStore()

    const emit = defineEmits(['close-popup'])
    const router = useRouter(); 

    const username = ref<string>('')
    const email = ref<string>('')
    const password = ref<string>('')

    const closePopup = () => {
        emit('close-popup')
    }

    const register = async () => {
        try {
            await AuthService.register(username.value, password.value, email.value);

            await store.fetchPrivateUserInfo();

            closePopup()
            router.push({ name: 'profile', params: { username: username.value } });
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };
</script>

