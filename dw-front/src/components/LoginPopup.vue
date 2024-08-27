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
            <label for="login" class="block text-white mb-1">Username or email</label>
            <div class="relative mb-4">
              <input 
                id="login"
                v-model="login" 
                placeholder="Username or email" 
                type="email" 
                class="w-full border-gray-300 rounded-md px-10 py-2 bg-custom-back-popup-input custom-border-popup text-white"
              >
              <img 
                src="../assets/img/icons/Auth/user.png" 
                alt="User Icon" 
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              >
            </div>
          </div>

          <div>
            <div class="flex flex-row items-center justify-between">
              <label for="password" class="block text-white mb-1">Password</label>
              <a href="" class="custom-gradient-text-title">Forgot Password?</a>
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
                src="../assets/img/icons/Auth/lock.png" 
                alt="Lock Icon" 
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              >
            </div>
          </div>

          <div class="flex items-center mb-4">
            <input id="checkbox" type="checkbox" value="" class="w-4 h-4 bg-main accent-main">
            <label for="checkbox" class="ms-2 text-white">Remember Me</label>
          </div>

          <button 
            class="flex items-center justify-center text-white bg-custom-gradient rounded-md px-4 py-1.5 text-lg shadow-custom w-full">
            Log in
          </button>

          <div class="flex flex-row gap-x-2 flex items-center justify-center">
              <span class="text-white">Do not have an account?</span>
              <a href="" class="text-main">Signup</a>
          </div>
        </div>

      </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, defineEmits } from 'vue'

  const emit = defineEmits(['close-popup'])

  const login = ref<string>('')
  const password = ref<string>('')

  const closePopup = () => {
    emit('close-popup')
  }
</script>

