<template>
  <main class="relative min-h-screen select-none overflow-hidden" @scroll="handleScroll" ref="main">
    <Navbar :activeSection="activeSection" @open-login-popup="toggleLoginPopup" @open-signup-popup="toggleSignupPopup" />
    
    <!-- Ваши секции -->
    <div id="sectionAbout" class="flex items-center justify-center w-full h-screen" style="background-image: url('../assets/img/Dots.png');">
      <Title />
    </div>

    <div id="sectionAbout" class="flex items-center justify-center w-full h-screen p-4">
      <Adventages />
    </div>

    <div id="sectionReviews" class="flex items-center justify-center w-full h-screen">
      <Reviews />
    </div>

    <div id="sectionPricing" class="flex items-center justify-center w-full h-screen mb-72">
      <Pricing />
    </div>

    <LoginPopup v-if="showLoginPopup" @close-popup="toggleLoginPopup" />
    <SignupPopup v-if="showSignupPopup" @close-popup="toggleSignupPopup" />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import Navbar from '../components/Navbar.vue'
import Title from '../components/Title.vue'
import Adventages from '@/components/Adventages.vue'

import Reviews from '@/components/Reviews.vue'
import Pricing from '@/components/Pricing.vue'
import Footer from '@/components/Footer.vue'

import LoginPopup from '@/components/LoginPopup.vue'
import SignupPopup from '@/components/RegPopup.vue'

const showLoginPopup = ref(false)
const showSignupPopup = ref(false)

const activeSection = ref('')

const sections = ref<Record<string, HTMLDivElement | null>>({
  about: null,
  reviews: null,
  pricing: null,
})

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2
  for (const [key, element] of Object.entries(sections.value)) {
    if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
      activeSection.value = key
      break
    }
  }
}

const toggleLoginPopup = () => {
  showLoginPopup.value = !showLoginPopup.value
}

const toggleSignupPopup = () => {
  showSignupPopup.value = !showSignupPopup.value
}

onMounted(() => {
  sections.value.about = document.getElementById('sectionAbout') as HTMLDivElement
  // sections.value.adventages = document.getElementById('sectionAdventages') as HTMLDivElement
  sections.value.reviews = document.getElementById('sectionReviews') as HTMLDivElement
  sections.value.pricing = document.getElementById('sectionPricing') as HTMLDivElement
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
