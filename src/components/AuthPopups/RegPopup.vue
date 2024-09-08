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
        <!-- Username field -->
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

        <!-- Email field -->
        <div>
          <label for="email" class="block text-white mb-1">Email</label>
          <div class="relative mb-4">
            <input 
              id="email"
              v-model="email" 
              placeholder="Email" 
              type="email" 
              class="w-full border-gray-300 rounded-md px-10 py-2 bg-custom-back-popup-input custom-border-popup text-white"
            >
            <img 
              src="@/assets/img/icons/Auth/email.png" 
              alt="Email Icon" 
              class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            >
          </div>
        </div>

        <!-- Password field -->
        <div class="mb-4">
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

        <!-- Cloudflare Turnstile CAPTCHA -->
        <div id="turnstile-element" class="cf-turnstile flex justify-center items-center flex-col" data-sitekey="0x4AAAAAAAi7AlVU4HIKE6rm"></div>

        <!-- Submit button -->
        <button 
          class="flex items-center justify-center text-white bg-custom-gradient rounded-md px-4 py-1.5 text-lg shadow-custom w-full"
          @click="register">
          Sign up
        </button>

        <!-- Login link -->
        <div class="flex flex-row gap-x-2 flex items-center justify-center">
          <span class="text-white">Already have an account?</span>
          <a href="" class="text-main" @click.prevent="openLogin">Login</a>
        </div>
      </div>
    </div>
  </div>
  <notifications group="auth_error" position="bottom left" class="z-50"/>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; 
import { notify } from "@kyvg/vue3-notification";
import AuthService from '@/services/AuthService';
import { useUserStore } from '@/stores/UserStore';
import { defineEmits } from 'vue';

declare global {
  interface Window {
    turnstile: {
      render: (
        elementId: string,
        options: {
          sitekey: string,
          callback: (token: string) => void;
        }
      ) => void;
    };
  }
}

const store = useUserStore();
const emit = defineEmits(['close-popup', 'open-login']); // Event emitter
const router = useRouter(); 

const username = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const turnstileResponse = ref<string>('');  // Добавляем реактивную переменную для токена

const closePopup = () => {
  emit('close-popup');
}
const openLogin = () => {
  emit('open-login');
}

// Register new user
const register = async () => {
  // Validate form fields
  if (!username.value || !email.value || !password.value) {
    notify({
      group: "auth_error",
      type: "error",
      title: "Missing Fields",
      text: "Please fill in all the fields.",
    });
    return;
  }

  if (!turnstileResponse.value) {
    notify({
      group: "auth_error",
      type: "error",
      title: "CAPTCHA",
      text: "CAPTCHA verification failed. Please try again.",
    });
    return;
  }

  try {
    // Send registration data along with CAPTCHA response to backend
    await AuthService.register(username.value, password.value, email.value, turnstileResponse.value);

    // Fetch user data after successful registration
    await store.fetchPrivateUserInfo();

    // Close the registration popup and redirect to profile page
    closePopup();
    router.push({ name: 'profile', params: { username: username.value } });
  } catch (error) {
    notify({
      group: "auth_error",
      type: "error",
      title: "Error",
      text: "Some server error. Try again later",
    });
    console.error('Registration failed:', error);
  }
};

// Mount Turnstile script when component is mounted
onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
  script.async = true;
  document.head.appendChild(script);

  // Wait for the Turnstile script to load and attach the widget
  script.onload = () => {
    // Initialize Turnstile with a callback to get the response token
    window.turnstile.render('#turnstile-element', {
      sitekey: '0x4AAAAAAAi7AlVU4HIKE6rm',
      callback: (token: string) => {
        turnstileResponse.value = token;
      }
    });
  };
});

</script>
