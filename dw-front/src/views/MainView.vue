<template>
  <main class="relative min-h-screen select-none	">
    <Navbar @open-login-popup="toggleLoginPopup" @open-signup-popup="toggleSignupPopup" />

    <div class="flex flex-col items-center justify-start w-full gap-y-32">

      <div class="flex items-center justify-center w-full h-screen" style="background-image: url('../assets/img/Dots.png');">
        <Title />
      </div>

      <div class="flex items-center justify-center w-full h-screen p-4">
        <Adventages />
      </div>

      <div class="flex items-center justify-center w-full h-screen">
        <Reviews />
      </div>

      <div class="flex items-center justify-center w-full h-screen mb-72">
        <Pricing />
      </div>

    </div>

    <LoginPopup v-if="showLoginPopup" @close-popup="toggleLoginPopup" />
    <SignupPopup v-if="showSignupPopup" @close-popup="toggleSignupPopup" />

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Navbar from '../components/Navbar.vue'
import Title from '../components/Title.vue'
import Adventages from '@/components/Adventages.vue'
import LoginPopup from '@/components/LoginPopup.vue'
import SignupPopup from '@/components/RegPopup.vue'
import Reviews from '@/components/Reviews.vue'
import Pricing from '@/components/Pricing.vue'
import Footer from '@/components/Footer.vue'

const showLoginPopup = ref(false)
const showSignupPopup = ref(false)

// Функция для переключения состояния модального окна
const toggleLoginPopup = () => {
  showLoginPopup.value = !showLoginPopup.value
}

const toggleSignupPopup = () => {
  showSignupPopup.value = !showSignupPopup.value
}
</script>

