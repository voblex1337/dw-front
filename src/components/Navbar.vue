<template>
    <div class="fixed w-full z-40 bg-navbar-bg border-bottom-custom bg-opacity-25 backdrop-blur-md lg:px-40 px-5">
        <img src="@/assets/img/NavbarGlow.svg" class="absolute z-0 pointer-events-none">
        <nav class="relative max-w-screen-xl mx-auto flex items-center shadow-dark-mild z-50 nav-border py-2 h-[76px]">
            
            <!-- Логотип -->
            <div class="flex-1 flex items-center">
                <router-link :to="{ name: 'main' }">
                    <img class="h-10 w-10 md:h-10 md:w-10 lg:h-10 lg:w-10 hover:animate-pulse" src="../assets/img/Avatar.svg" alt="TE Logo" loading="lazy" />
                </router-link>
            </div>

            <!-- Меню страниц -->
            <RouterLink class="hidden lg:flex flex-1 justify-center" :to="{ name: 'main' }">
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
                        href="#sectionReviews" 
                        class="menu-item" 
                        :class="{ 'active': activeSection === 'reviews' }"
                        @click="scrollToSection('reviews')">
                        FeedBack
                        <span v-if="activeSection === 'reviews'" class="indicator"></span>
                    </a>

                    <a 
                        href="#sectionPricing" 
                        class="menu-item" 
                        :class="{ 'active': activeSection === 'pricing' }"
                        @click="scrollToSection('pricing')">
                        Pricing
                        <span v-if="activeSection === 'pricing'" class="indicator"></span>
                    </a>

                    <RouterLink 
                        :class="{ 'active': activeSection === 'faq' }"
                        class="menu-item" 
                        :to="{name: 'faq'}">
                        FAQ
                        <span v-if="activeSection === 'faq'" class="indicator"></span>
                    </RouterLink>
                </div>
            </RouterLink>

            <div class="flex-1 flex justify-end gap-2.5 z-50" v-if="isAuthenticated">
                <RouterLink :to="{ name: 'profile', params: { username: getUsername } }">
                    <button class="text-white rounded-md px-4 py-1.5">Profile</button>
                </RouterLink>
            </div>

            <div class="flex-1 flex justify-end gap-2.5 z-50" v-else >
                <button class="text-white rounded-md px-4 py-1.5" @click="$emit('open-login-popup')">Login</button>
                <button class="text-white bg-custom-gradient rounded-md px-4 py-1.5" @click="$emit('open-signup-popup')">Sign up</button>
            </div>
        </nav>
    </div>
</template>


<script setup lang="ts">
import { computed } from 'vue'

import AuthService from '@/services/AuthService';

const isAuthenticated = computed(() => AuthService.isAuthenticated());
const getUsername = computed(() => AuthService.getUsername());

const props = defineProps<{
    activeSection: string | null
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
