<template>
  <div class=" w-full z-50 bg-navbar-bg border-bottom-custom bg-opacity-25">
    <nav class="relative w-full flex items-center justify-between shadow-dark-mild z-50 nav-border py-2 h-[76px]">
      <!-- Логотип -->
      <div class="absolute top-1/2 transform -translate-y-1/2 left-[24px]">
        <a>
          <img class="h-10 w-10 md:h-10 md:w-10 lg:h-10 lg:w-10 animate-spin" src="../assets/img/logo.png" alt="TE Logo" loading="lazy" />
        </a>
      </div>

      <div class="flex w-full items-center px-4 md:px-24 lg:px-36 xl:px-36 2xl:px-36 py-4">

      <!-- Центрированный контент с отступами -->
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

        <!-- Hamburger button -->
        <!-- <button
          class="border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          @click="toggleMenu"
          aria-controls="navbarSupportedContent2"
          :aria-expanded="isMenuOpen ? 'true' : 'false'"
          aria-label="Toggle navigation"> -->
          <!-- Hamburger icon -->
          <!-- <span class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>
          </span>
        </button> -->
      </div>

      <div class="absolute top-1/2 transform -translate-y-1/2 right-[24px]">
        <div class="flex flex-row gap-2.5">
          <button class="text-white rounded-md	px-4 py-1.5">Login</button>
          <button class="text-white bg-custom-gradient rounded-md	px-4 py-1.5">Sign up</button>
        </div>
      </div>

    </nav>

    <!-- Main Menu -->
    <!-- <div
      :class="isMenuOpen ? 'block' : 'hidden'"
      class="w-full lg:hidden bg-white shadow-dark-mild">
      <div class="flex flex-col items-center">
        <ul class="list-none me-auto flex flex-col pl-0 mt-4">
          <li class="my-4 pl-2 lg:my-0 lg:pr-1 lg:pl-2">
            <a class="text-dark lg:px-2" aria-current="page" href="#">About</a>
          </li>
          <li class="mb-4 pl-2 lg:mb-0 lg:pr-1 lg:pl-0">
            <a class="hover:text-custom-text hover:underline" href="#">Pricing</a>
          </li>
          <li class="mb-4 pl-2 lg:mb-0 lg:pr-1 lg:pl-0">
            <a class="hover:text-custom-text hover:underline" href="#">FAQ</a>
          </li>
        </ul>
      </div>
    </div> -->

  </div>
</template>



  
<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const isMenuOpen = ref(false)

    const isActive = (path) => {
      return route.path === path
    }

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    return {
      isActive,
      isMenuOpen,
      toggleMenu
    }
  }
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
  