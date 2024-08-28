<template>
  <main class="relative min-h-screen select-none overflow-hidden pb-40" ref="main">
    <Navbar :activeSection="null" />
    
    <div class="flex flex-wrap w-full h-full px-8 mt-[95px] gap-x-2">
      <Avatar />
      <Information />
    </div>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import Navbar from '../components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Avatar from '@/components/Profile/Avatar.vue';
import Information from '@/components/Profile/Information.vue';
import { useUserStore } from '@/stores/UserStore'

const route = useRoute()
const userStore = useUserStore()

onMounted(() => {
    const username = route.params.username as string
    userStore.fetchUser(username)
})


</script>
