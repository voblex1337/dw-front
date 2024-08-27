<template>
  <div class="shadow-lg w-full max-w-full h-full flex flex-col items-center justify-center gap-y-20 px-10 md:px-8">
    <div class="flex flex-col items-center justify-center gap-y-2 z-10 text-center">
      <span class="text-titles-color text-2xl px-4 py-1.5 rounded-3xl bg-custom-gradient-titles border-2 border-violet-300">FeedBack</span>
      <h1 class="text-center text-6xl custom-gradient-text-title">What Our Users Say</h1>
    </div>

    <img src="../assets/img/glow.png" alt="icon" class="absolute z-10 h-3/6 w-9/12"/>
    <img src="../assets/img/Dots/ReviewsDots.png" alt="icon" class="absolute w-full z-0 " />

    <div class="px-40 h-64 ">
      <Slider />
    </div>
    
  </div>
</template>

<script setup>
import Slider from '@/components/Slider.vue';
</script>

<style scoped>

</style>