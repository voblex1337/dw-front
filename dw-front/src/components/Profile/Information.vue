<template>
  <div class="relative flex-grow space-y-5 p-4">
    <MainInformation :user="user" />
    <LaunchInformation :user="user"/>

    <ReferalInformation :user="user"/>
    <ReferalUnvailable/> 

    <!-- <ReferalInformation v-if="user.RefferalAvailable" :user="user"/>
    <ReferalUnvailable v-else/> -->

    <img class="absolute top-0 right-0 h-full z-40 mask-image" src="@/assets/img/Profile/InformationGlow.svg">

  </div>
</template>

<script setup lang="ts">
import MainInformation from '@/components/Profile/Information/MainInformation.vue'
import LaunchInformation from '@/components/Profile/Information/LaunchInformation.vue'
import ReferalInformation from '@/components/Profile/Information/ReferalInformation.vue'
import ReferalUnvailable from '@/components/Profile/Information/ReferalUnvailable.vue'
import { useUserStore } from '@/stores/UserStore'

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id as string

const userStore = useUserStore()

onMounted(() => {
  userStore.fetchUser(userId)
})

const user = userStore.userComputed

</script>

<style scoped>
  .mask-image {
      -webkit-mask-image: linear-gradient(to right, transparent, black 50%, transparent);
      mask-image: linear-gradient(to right, transparent, black 50%, transparent);
  }
</style>
