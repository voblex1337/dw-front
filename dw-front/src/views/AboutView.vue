<script setup lang="ts">
  import Navbar from '../components/Navbar.vue'
  import Title from '../components/Title.vue'
  import Adventages from '@/components/Adventages.vue';
</script>

<template>
  <main class="relative min-h-screen overflow-auto"> 

    <Navbar />

    <div class="flex flex-col items-center justify-start w-full space-y-8 md:space-y-16"> 

      <div class="flex items-center justify-center w-full h-screen p-4">
        <Title />
      </div>

      <div class="flex items-center justify-center w-full h-screen p-4">
        <Adventages />
      </div>

    </div>

  </main>
</template>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
