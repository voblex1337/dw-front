<script setup lang="ts">

  import Navbar from '../components/Navbar.vue'
  import Title from '../components/Title.vue'

</script>

<template>
  <main class="relative h-screen overflow-hidden">

    <Navbar />

    <div class="flex flex-col items-center justify-center h-screen w-full">
      
      <div class="flex items-center justify-center w-full h-full bg-gray-100 p-4">
        <Title />
      </div>

      <div class="flex items-center justify-center w-full h-full bg-gray-100 p-4">
        <div class="bg-white shadow-lg rounded-lg w-full max-w-full h-full flex items-center justify-center">
          <p class="text-center">Text or carousel item goes here</p>
        </div>
      </div>

    </div>

  </main>
</template>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
