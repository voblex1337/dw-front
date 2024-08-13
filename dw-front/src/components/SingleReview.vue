<template>
  <div class="review flex flex-col items-center justify-center p-4 bg-custom-black-adventage rounded-xl shadow-lg w-[600px] h-fit text-custom-white-adventage bg-opacity-90 px-6 py-[19.2px] gap-y-2 border-bottom-custom-adventage z-50 relative">
    <div class="flex flex-row w-full gap-x-2">
      <img :src="review.avatar" alt="User Avatar" class="w-10 h-10 rounded-3xl shadow-custom">
      <div class="flex flex-row items-center">
        <img src="../assets/img/star.png" class="w-[19.2px] h-[19.2px]">
        <img src="../assets/img/star.png" class="w-[19.2px] h-[19.2px]">
        <img src="../assets/img/star.png" class="w-[19.2px] h-[19.2px]">
        <img src="../assets/img/star.png" class="w-[19.2px] h-[19.2px]">
        <img src="../assets/img/star.png" class="w-[19.2px] h-[19.2px]">
      </div>
    </div>
    <p class="font-normal text-xl">{{ review.text }}</p>

    <!-- Poloska images on the right -->
    <div class="absolute right-0 top-0 h-full flex flex-row items-start	object-cover">
      <img src="../assets/img/poloska.png" class="h-full -mr-3">
      <img src="../assets/img/poloska.png" class="h-full mr-5">
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  review: {
    text: string;
    avatar: string;
  };
}>();
</script>