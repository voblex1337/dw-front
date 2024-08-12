<template>
  <div class="fixed w-full z-50 bg-navbar-bg border-bottom-custom bg-opacity-25 backdrop-blur-md">
    <nav class="relative w-full flex items-center justify-between shadow-dark-mild z-50 nav-border py-2 h-[76px]">
      <div class="absolute top-1/2 transform -translate-y-1/2 left-[24px]">
        <a>
          <img class="h-10 w-10 md:h-10 md:w-10 lg:h-10 lg:w-10 " src="../assets/img/Vector.svg" alt="TE Logo" loading="lazy" />
        </a>
      </div>

      <div class="flex w-full items-center px-4 md:px-24 lg:px-36 xl:px-36 2xl:px-36 py-4">

        <div class="flex flex-row w-full justify-center hidden lg:flex">
          <div class="flex gap-2.5 text-xl">
            <router-link 
              to="/" 
              class="menu-item" 
              :class="{ 'active': isActive('/') }">
              About
              <span v-if="isActive('/')" class="indicator"></span>
            </router-link>
            <router-link 
              to="/feedback" 
              class="menu-item" 
              :class="{ 'active': isActive('/feedback') }">
              FeedBack
              <span v-if="isActive('/feedback')" class="indicator"></span>
            </router-link>
            <router-link 
              to="/buy" 
              class="menu-item" 
              :class="{ 'active': isActive('/buy') }">
              Pricing
              <span v-if="isActive('/buy')" class="indicator"></span>
            </router-link>
            <router-link 
              to="/faq" 
              class="menu-item" 
              :class="{ 'active': isActive('/faq') }">
              FAQ
              <span v-if="isActive('/faq')" class="indicator"></span>
            </router-link>
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
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const isActive = (path: string) => {
    return route.path === path
  }
</script>

<style scoped>
.menu-item {
  position: relative;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: white;
}

.indicator {
  display: block;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px; /* уменьшенный размер */
  height: 6px; /* уменьшенный размер */
  background-color: #A39BD6; /* измененный цвет */
  border-radius: 50%;
}
</style>
