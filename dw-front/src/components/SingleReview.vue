<template>
  <div class="review flex flex-col items-center justify-center p-4 bg-custom-black-adventage rounded-xl shadow-lg w-[600px] h-fit text-custom-white-adventage bg-opacity-30 px-6 py-[19.2px] gap-y-2 border-bottom-custom-adventage z-50 relative">
    <div class="flex flex-row w-full gap-x-2">
      <img :src="review.avatar" alt="User Avatar" class="w-10 h-10 rounded-3xl">
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
    <div class="poloska-container absolute right-0 top-0 h-full flex flex-row">
      <img src="../assets/img/poloska.png" class="h-full -mr-3"> <!-- Adjust the margin here -->
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

<style scoped>
/* Define colors in your Tailwind config */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-primary-800 {
    color: #2d3748; /* replace with your color */
  }
  .text-primary-100 {
    color: #edf2f7; /* replace with your color */
  }
  .bg-white {
    background-color: #ffffff;
  }
  .shadow-lg {
    box-shadow: 0 0.5rem 1rem -0.25rem rgba(0, 0, 0, 0.1);
  }
  .rounded-lg {
    border-radius: 10px;
  }
}

.poloska-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.poloska-container img {
  object-fit: cover; /* Ensure the image covers the full height */
}
</style>