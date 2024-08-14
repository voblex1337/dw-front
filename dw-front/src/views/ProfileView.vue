<template>
  <main class="relative min-h-screen select-none overflow-hidden" ref="main">
    <Navbar :activeSection=null  />
    
      <div class="flex flex-wrap w-full h-full px-8 mt-[95px] ">
          <Avatar />
          <Information />
      </div>

    <Footer />
  </main>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue'

import Navbar from '../components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import Avatar from '@/components/Profile/Avatar.vue'
import Information from '@/components/Profile/Information.vue'


</script>
  