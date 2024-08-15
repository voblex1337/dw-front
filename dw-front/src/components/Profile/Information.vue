<template>
  <div class="relative flex-grow space-y-5 p-4">
    <MainInformation />
    <LaunchInformation />
    <ReferalInformation />
    
    <img class="absolute top-0 right-0 h-full z-40 mask-image" src="@/assets/img/Profile/InformationGlow.svg">

    <ReferalUnvailable />
  </div>
</template>

<script setup lang="ts">
import MainInformation from '@/components/Profile/Information/MainInformation.vue'
import LaunchInformation from '@/components/Profile/Information/LaunchInformation.vue'
import ReferalInformation from './Information/ReferalInformation.vue'
import ReferalUnvailable from './Information/ReferalUnvailable.vue'
</script>

<style scoped>
  .mask-image {
      -webkit-mask-image: linear-gradient(to right, transparent, black 50%, transparent);
      mask-image: linear-gradient(to right, transparent, black 50%, transparent);
  }
</style>
