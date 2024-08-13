<template>
  <div class="fixed w-full z-50 bg-navbar-bg border-bottom-custom bg-opacity-25 backdrop-blur-md">
    <nav class="relative w-full flex items-center justify-between shadow-dark-mild z-50 nav-border py-2 h-[76px]">
      <div class="absolute top-1/2 transform -translate-y-1/2 left-[24px]">
        <a>
          <img class="h-10 w-10 md:h-10 md:w-10 lg:h-10 lg:w-10" src="../assets/img/Avatar.svg" alt="TE Logo" loading="lazy" />
        </a>
      </div>

      <div class="flex w-full items-center px-4 md:px-24 lg:px-36 xl:px-36 2xl:px-36 py-4">
        <div class="flex flex-row w-full justify-center hidden lg:flex">
          <div class="flex gap-2.5 text-xl">
            <a 
              href="#sectionAbout" 
              class="menu-item" 
              :class="{ 'active': activeSection === 'about' }"
              @click="scrollToSection('about')">
              About
              <span v-if="activeSection === 'about'" class="indicator"></span>
            </a>
            <a 
              href="#sectionAdventages" 
              class="menu-item" 
              :class="{ 'active': activeSection === 'adventages' }"
              @click="scrollToSection('adventages')">
              FeedBack
              <span v-if="activeSection === 'adventages'" class="indicator"></span>
            </a>
            <a 
              href="#sectionReviews" 
              class="menu-item" 
              :class="{ 'active': activeSection === 'reviews' }"
              @click="scrollToSection('reviews')">
              Pricing
              <span v-if="activeSection === 'reviews'" class="indicator"></span>
            </a>
            <a 
              href="#sectionPricing" 
              class="menu-item" 
              :class="{ 'active': activeSection === 'pricing' }"
              @click="scrollToSection('pricing')">
              FAQ
              <span v-if="activeSection === 'pricing'" class="indicator"></span>
            </a>
          </div>
        </div>
      </div>

      <div class="absolute top-1/2 transform -translate-y-1/2 right-[24px] z-50">
        <div class="flex flex-row gap-2.5 z-50">
          <button class="text-white rounded-md px-4 py-1.5" @click="$emit('open-login-popup')">Login</button>
          <button class="text-white bg-custom-gradient rounded-md px-4 py-1.5" @click="$emit('open-signup-popup')">Sign up</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  activeSection: string
}>()

const scrollToSection = (section: string) => {
  const element = document.getElementById(`section${section.charAt(0).toUpperCase() + section.slice(1)}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.menu-item {
  position: relative;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: white;
  cursor: pointer; 
}

.indicator {
  display: block;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px; 
  height: 6px; 
  background-color: #A39BD6; 
  border-radius: 50%;
}

.menu-item.active {
  font-weight: bold;
}
</style>
